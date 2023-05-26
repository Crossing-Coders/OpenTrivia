import Head from "next/head";
import Image from "next/image";

import TriviaListDisplay from "@/components/TriviaListDisplay";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
     <TriviaListDisplay/>
    </>
  );
}
