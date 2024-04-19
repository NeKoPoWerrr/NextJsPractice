"use client";

import { useEffect, useState } from "react";

interface Data {
  message: string;
}

async function getData(id: string): Promise<Data> {
  const res = await fetch(`http://localhost:3002/hello/${id}`, {});
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default function Products({ params }: { params: { helloId: string } }) {
  const [data, setData] = useState("");

  useEffect(() => {
    getData(params.helloId).then((data) => {
      setData(data.message);
    });
  }, []);
  return <div>Hello ID: {data}</div>;
}
