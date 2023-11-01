import Image from "next/image";
import { NextPage } from "next";
import RootLayout from "./layout";
import Experience from "@components/experience/Experience";
import styles from "./page.module.css";

const Home: NextPage = () => {
  return (
    <>
      <Experience></Experience>
    </>
  );
};

export default Home;
