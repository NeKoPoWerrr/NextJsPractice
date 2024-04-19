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

const Hello = async () => {
  const data = await getData();

  return <h1>{data.message} server</h1>;
};

export default Hello;

/**
 * how to use it
 * change name into page.tsx
 */
