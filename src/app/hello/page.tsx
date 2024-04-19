"use client";

import { useEffect, useState } from "react";

interface Data {
  message: string;
}

async function getData(): Promise<Data> {
  const res = await fetch("http://localhost:3002/hello", {});
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const Hello = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    getData().then((data) => {
      setData(data.message);
    });
  }, []);

  return <h1>{data}</h1>;
};

export default Hello;
