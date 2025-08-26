import { useEffect, useState } from "react";

export default function useFetch<T>(url: string) {
  const [data, setData] = useState<T | undefined>(undefined);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url);
      if (!res.ok) throw new Error("Error en la petición");
      const json = await res.json();
      setData(json);
    };

    fetchData();
  }, [url]);

  return data;
}
