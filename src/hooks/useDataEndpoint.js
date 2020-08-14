import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../lib/Constants";

const DELAY = 1000;

const useDataEndpoint = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    setData({ fetched: false });

    const timeoutId = setTimeout(() => {
      axios
        .get(API_URL)
        .then((response) => {
          setData({ fetched: true, response: response.data });
        })
        .catch((error) => {
          setData({ error });
        });
    }, DELAY);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return data;
};

export default useDataEndpoint;
