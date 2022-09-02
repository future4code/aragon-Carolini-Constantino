import { useState, useEffect } from "react";
import axios from "axios";

export const useRequestData = (url, state) => {
  const [data, setData] = useState(state);

  const getData = () => {
    axios.get(`${url}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return [data];
};
