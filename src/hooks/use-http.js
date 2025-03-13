import { useCallback, useState } from "react";
import { TbHorse } from "react-icons/tb";
export const useHttps = () => {
  const [proccess, setProccess] = useState("waiting");

  const request = useCallback(
    async (
      url,
      method = "GET",
      body = null,
      headers = { "Content-Type": "application/json" }
    ) => {
      setProccess("loading");
      try {
        const response = await fetch(url, { method, body, headers });

        if (!response.ok) {
          throw new Error(`Could not fetch ${url} , status ${response.status}`);
        }

        const data = await response.json();
        return data;
      } catch (e) {
        console.log(e);
        throw new Error();
      }
    },
    []
  );

  const clearError = useCallback(() => {
    setProccess("loading");
  }, []);
  return {
    request,
    clearError,
    proccess,
    setProccess,
  };
};
