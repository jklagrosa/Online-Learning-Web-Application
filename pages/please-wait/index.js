import { useEffect } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/PLEASE_WAIT.module.scss";

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
      <div id={styles._please_wait_wrapper}>
        <p id={styles._user_is_logged_in}>Please wait...</p>
      </div>
    </>
  );
};

export default PleaseWait;
