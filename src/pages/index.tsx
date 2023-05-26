import Head from "next/head";
import Image from "next/image";

import TriviaVenueListDisplay from "@/components/TriviaVenueListDisplay";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
     <TriviaVenueListDisplay/>
    </>
  );
}
