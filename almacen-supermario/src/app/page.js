"use client";
import { useState } from "react";
import { Headers } from "./components/Headers";
import { VideoList } from "./components/VideoList";
import { AudioList } from "./components/AudioList";
import { ElectronicaList } from "./components/ElectronicaList";
import { ElectrodomesticoList } from "./components/ElectrodomesticoList";
import { MuebleList } from "./components/MuebleList";

export default function Home() {
  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  return (
    <>
      <Headers
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        total={total}
        setTotal={setTotal}
      />
      <VideoList
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        total={total}
        setTotal={setTotal}
      />
      <AudioList
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        total={total}
        setTotal={setTotal}
      />
      <ElectronicaList
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        total={total}
        setTotal={setTotal}
      />
      <ElectrodomesticoList
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        total={total}
        setTotal={setTotal}
      />
      <MuebleList
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        total={total}
        setTotal={setTotal}
      />
    </>
  );
}
