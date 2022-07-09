import { useEffect } from "react";
import { useRouter } from "next/router";

const PleaseWaitWatch = () => {
  const router = useRouter();

  useEffect(() => {
    if (router.query.id) {
      router.push({
        pathname: "/course/enrolled/[id]",
        query: { id: router.query.id },
      });
    }
  }, []);

  return (
    <>
      <h1>Please wait...WATCH!</h1>
    </>
  );
};

export default PleaseWaitWatch;
