"use client";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Partners from "./components/Partners";
import Header from "./components/Header";
import { useEffect, useState } from "react";

export default function Home() {
  const [coinData, setCoinData] = useState(null);
  useEffect(() => {
    const getData = async () => {
      try {
        const res = fetch(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&x_cg_demo_api_key=CG-mWX7cLaiGZ78kWhjcBjageuz`
        );
        const resJson = (await res).json();
        const data = await resJson;
        setCoinData(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  return (
    <main>
      <Header coinData={coinData} />
      <Hero />
      <Partners />
      <Services />
      <div className="text-center text-white pt-10 pb-6">
        <p>© 2025 Dappsnode. All Rights Reserved.</p>
      </div>
    </main>
  );
}
