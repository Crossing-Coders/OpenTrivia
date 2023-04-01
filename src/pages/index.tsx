import Head from "next/head";
import Image from "next/image";
import {TriviaListDisplayContainer} from "@/components/TriviaListDisplayContainer/TriviaListDisplayContainer";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
     <TriviaListDisplayContainer/>
    </>
  );
}
