"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Candle from "../assets/candle.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Autoplay from "embla-carousel-autoplay";
const Services = () => {
  const [seemore, setSeeMore] = useState(false);
  const data = [
    {
      title: "RECTIFICATION",
      desc: "Rectification support warranties completely decentralized",
    },
    {
      title: "VALIDATION",
      desc: "Validation completely decentralized supports wallet",
    },
    {
      title: "RECOVERY",
      desc: "Recovery wallet Dapps with Blockchain and DeFi",
    },
    {
      title: "HARVEST MY STAKINGS",
      desc: "When you choose to redeem, we’ll return your assets to your Spot Wallet the following day.",
    },
    {
      title: "WITHDRAWAL",
      desc: "A crypto withdrawal is a transaction that allows you to move your cryptocurrency balance off the platform to an external crypto wallet that you control such as a Ledger or a Trezor.",
    },
    {
      title: "STAKING POOL",
      desc: "A staking pool allows multiple stakeholders (or bagholders) to combine their computational resources as a way to increase their chances of being rewarded.",
    },
    {
      title: "MIGRATION",
      desc: "Migrate tokens to a new contract",
    },
    {
      title: "ADD TOKENS",
      desc: "Crypto tokens are a type of cryptocurrency that represents an asset or specific use and reside on their own blockchain.",
    },
    {
      title: "CONNECT TO DAPPS",
      desc: "Connect to Dapps",
    },
    {
      title: "PURCHASE TOKEN",
      desc: "Also, buy bitcoin, ether, and many common cryptocurrencies.",
    },
    {
      title: "MY NFTS",
      desc: "view your collection of digital works",
    },
    {
      title: "STAKING REVIEW",
      desc: "Interaction between mobile apps and mobile browsers are supported via mobile deep linking Having complete control of your staking",
    },
    {
      title: "BRIDGE",
      desc: "enables applications built on different blockchains to communicate with and interact with each other, something which was never before possible, therefore unlocks a groundbreaking development for the blockchain space as a whole. On launch, Ethereum, BSC, Avalanche, and Polygon – four of the leading blockchains and protocols – are supported, with capabilities to add new blockchains built-in to the Alliance Bridge protocol.",
    },
    {
      title: "WHITELIST",
      desc: "Get an Early Spot for Minting.",
    },
  ];

  const shortData = [
    {
      title: "RECTIFICATION",
      desc: "Rectification support warranties completely decentralized",
    },
    {
      title: "VALIDATION",
      desc: "Validation completely decentralized supports wallet",
    },
    {
      title: "RECOVERY",
      desc: "Recovery wallet Dapps with Blockchain and DeFi",
    },
    {
      title: "HARVEST MY STAKINGS",
      desc: "When you choose to redeem, we’ll return your assets to your Spot Wallet the following day.",
    },
    {
      title: "WITHDRAWAL",
      desc: "A crypto withdrawal is a transaction that allows you to move your cryptocurrency balance off the...",
    },
    {
      title: "STAKING POOL",
      desc: "A staking pool allows multiple stakeholders (or bagholders) to combine their computational resources...",
    },
    {
      title: "MIGRATION",
      desc: "Migrate tokens to a new contract",
    },
  ];
  return (
    <div className="my-8 px-3 md:mt-10 lg:mt-44">
      <div className="text-center px-4 mb-8 md:max-w-2xl lg:max-w-5xl xl:max-w-7xl mx-auto">
        <h1 className="text-white text-2xl font-bold mb-4">Services</h1>
        <p className="text-white/60  sm:max-w-xl lg:max-w-2xl mx-auto">
          EvmNode is a decentralized protocol. dConnect create an innovative
          open-source software ecosystem that is both secure and resilient. And
          it allows developers to create new online tools, many of which have
          the interest of global business markets. Validation of wallet will be
          completed below as follows
        </p>
      </div>
      <div
        className={`my-8 ${
          seemore && "hidden"
        } overflow-hidden service flex gap-x-8 md:max-w-[700px] lg:max-w-6xl mx-auto`}
      >
        <div className="service-slide flex gap-x-8">
          {shortData.map((item, index) => (
            <div
              key={index}
              className="border-2 min-w-max border-white/30 text-center py-10 rounded-lg h-[26rem] md:h-[24rem]"
            >
              <div className="w-fit mx-auto mb-4">
                <Image
                  src={Candle}
                  className="w-[50px]"
                  alt="Tailwind CSS partner component"
                  width={600}
                  height={600}
                />
              </div>
              <div className="mb-8 px-3 h-40">
                <h1 className="text-xl font-semibold mb-8 text-white">
                  {item.title}
                </h1>
                <p className="text-white/60 max-w-[250px] md:max-w-[350px] mx-auto">
                  {item.desc}
                </p>
              </div>
              <Link
                href="/wallet"
                className="px-4 py-2 bg-[#A76BF1] text-white rounded-md"
              >
                Select
              </Link>
            </div>
          ))}
        </div>
        <div className="service-slide flex gap-x-8">
          {shortData.map((item, index) => (
            <div
              key={index}
              className="border-2 min-w-max border-white/30 text-center py-10 rounded-lg h-[26rem] md:h-[24rem]"
            >
              <div className="w-fit mx-auto mb-4">
                <Image
                  src={Candle}
                  className="w-[50px]"
                  alt="Tailwind CSS partner component"
                  width={600}
                  height={600}
                />
              </div>
              <div className="mb-8 px-3 h-40">
                <h1 className="text-xl font-semibold mb-8 text-white">
                  {item.title}
                </h1>
                <p className="text-white/60 max-w-[250px] md:max-w-[350px] mx-auto">
                  {item.desc}
                </p>
              </div>
              <Link
                href="/wallet"
                className="px-4 py-2 bg-[#A76BF1] text-white rounded-md"
              >
                Select
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className={`my-8 grid px-3 gap-y-4 ${!seemore && "hidden"}`}>
        {data.map((item, index) => (
          <div
            key={index}
            className="border-2 border-white/30 text-center p-10 rounded-lg w-[330px] sm:w-[500px] lg:w-[600px] mx-auto"
          >
            <div className="w-fit mx-auto mb-4">
              <Image
                src={Candle}
                className="w-[50px]"
                alt="Tailwind CSS partner component"
                width={600}
                height={600}
              />
            </div>
            <div className="mb-8">
              <h1 className="text-xl font-semibold mb-8 text-white">
                {item.title}
              </h1>
              <p className="text-white/60">{item.desc}</p>
            </div>
            <Link
              href="/wallet"
              className="px-4 py-2 bg-[#A76BF1] text-white rounded-md"
            >
              Select
            </Link>
          </div>
        ))}
      </div>
      <button
        className="text-center px-4 py-2 text-white bg-[#A76BF1] w-60 block rounded-md font-semibold mx-auto mt-6"
        onClick={() => setSeeMore(!seemore)}
      >
        {seemore ? "See Less" : "See More"}
      </button>
    </div>
  );
};

export default Services;
