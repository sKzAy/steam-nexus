import react from "react";
import Navbar from "@/components/Navbar";
import MainContent from "@/components/main";
<link rel="stylesheet" href="globals.css" />
import Head from "next/head";
import "./globals.css"

export default function Home() {
  

  return (
  <>
  <Head> </Head>
  <div class=" -z-10 absolute top-0  min-h-full min-w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
  <div><Navbar/></div>
  <div><MainContent/></div>






  </div>
  </>
  );
}

