import Image from "next/image";


import Router from "next/navigation";
import React from "react";
import ProgressBarProvider from "./components/ProgressBarProvider";

export default function App({ }) {

  return (
    < main className="p-10 max-w-md mx-auto font-serif text-stone-700">
      <h1 className="text-xl font-bold mb-10">Hackaton App</h1>
      <ProgressBarProvider />

    </main >
  )
}
