import { useEffect, useState } from "react";
import axios from "axios";

/**
     Fetch data from rickandmortyapi.com via Axios, for infinite scrolling. It returns an incremented `items` array from the `results` property.
     It contains the objects situated in the given page number in the pagination.
     *
     * @param pageNum integer that gives the pagination page number.
     * @param category string that gives the category to get. Can be `character` or `location` only.
     */
export default function useScrollList(pageNum, category) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(false);
  useEffect(() => {
    setLoading(true);
    setError(false);
    let cancel;
    axios({
      method: "GET",
      url: `https://rickandmortyapi.com/api/${category}/`,
      params: { page: pageNum },
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })
      .then((res) => {
        setItems((prevItems) => {
          return [...prevItems, ...res.data.results];
        });
        setHasMore(pageNum < res.data.info.pages);
        setLoading(false);
        // console.log(res.data.results);
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
        setError(true);
      });
    return () => cancel();
  }, [pageNum, category]);

  return { loading, error, items, setItems, hasMore };
}
