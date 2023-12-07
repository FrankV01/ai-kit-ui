import styles from "../page.module.css";
import FlexTest from "../../components/FlexTest";

//className={`${styles.main} mt-3`}

export default async function Page() {
  return (
    <main>
      <h1>Flex test page</h1>
      <FlexTest />
    </main>
  );
}
