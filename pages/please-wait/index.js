import { useEffect } from "react";
import { useRouter } from "next/router";

const PleaseWait = () => {
  const router = useRouter();

  useEffect(() => {
    if (router.query.id) {
      router.replace({
        pathname: "/course/[id]",
        query: { id: router.query.id },
      });
    }
  }, []);

  return (
    <>
      <h1>Please wait...</h1>
    </>
  );
};

export default PleaseWait;
