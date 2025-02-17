"use client";
import React from "react";
import Tether from "../assets/tether.png";
import Trust from "../assets/trust.png";
import Argent from "../assets/argent.png";
import metamask from "../assets/metamask.png";
import Binance from "../assets/binance.png";
import phantom from "../assets/phantom.png";
import HalfCircle from "../assets/halfCircle.png";
import Image from "next/image";

const Partners = () => {
  return (
    <div className="relative sm:mt-44">
      <div className="relative z-30 px-4 my-24">
        <div className="text-center md:max-w-2xl lg:max-w-5xl xl:max-w-7xl mx-auto">
          <h2 className="text-white text-left sm:text-center text-2xl lg:text-3xl font-semibold mb-2">
            Partners who believe in your Project
          </h2>
          <h1 className="text-left sm:text-center text-white/60 sm:max-w-xl lg:max-w-2xl mx-auto">
            No server deployments, no new library to learn. WalletNode is
            open-source and uses minimal dependencies for maximum security and
            no code bloat.
          </h1>
        </div>
        <div className="mt-8 overflow-hidden partner md:max-w-2xl mx-auto flex  gap-x-8 items-center sm:max-w-xl">
          <div className="partner-slide flex gap-x-8 items-center">
            <div className="p-1 w-20">
              <Image
                src={Trust}
                className="w-full"
                alt="Tailwind CSS partner component"
                width={600}
                height={600}
              />
            </div>
            <div className="p-1 w-20">
              <Image
                src={Tether}
                className="w-full"
                alt="Tailwind CSS partner component"
                width={600}
                height={600}
              />
            </div>
            <div className="p-1 w-20">
              <Image
                src={phantom}
                className="w-full"
                alt="Tailwind CSS partner component"
                width={600}
                height={600}
              />
            </div>
            <div className="p-1 w-20">
              <Image
                src={Binance}
                className="w-full"
                alt="Tailwind CSS partner component"
                width={600}
                height={600}
              />
            </div>
            <div className="p-1 w-20">
              <Image
                src={Argent}
                className="w-full"
                alt="Tailwind CSS partner component"
                width={600}
                height={600}
              />
            </div>
            <div className="p-1 w-20">
              <Image
                src={metamask}
                className="w-full"
                alt="Tailwind CSS partner component"
                width={600}
                height={600}
              />
            </div>
          </div>
          <div className="partner-slide flex gap-x-8 items-center">
            <div className="p-1 w-20">
              <Image
                src={Trust}
                className="w-full"
                alt="Tailwind CSS partner component"
                width={600}
                height={600}
              />
            </div>
            <div className="p-1 w-20">
              <Image
                src={Tether}
                className="w-full"
                alt="Tailwind CSS partner component"
                width={600}
                height={600}
              />
            </div>
            <div className="p-1 w-20">
              <Image
                src={phantom}
                className="w-full"
                alt="Tailwind CSS partner component"
                width={600}
                height={600}
              />
            </div>
            <div className="p-1 w-20">
              <Image
                src={Binance}
                className="w-full"
                alt="Tailwind CSS partner component"
                width={600}
                height={600}
              />
            </div>
            <div className="p-1 w-20">
              <Image
                src={Argent}
                className="w-full"
                alt="Tailwind CSS partner component"
                width={600}
                height={600}
              />
            </div>
            <div className="p-1 w-20">
              <Image
                src={metamask}
                className="w-full"
                alt="Tailwind CSS partner component"
                width={600}
                height={600}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="z-10 absolute -bottom-28 sm:-bottom-52 lg:-bottom-64 left-0">
        <Image
          src={HalfCircle}
          className="w-[300px] sm:w-[300px] object-cover"
          alt="Tailwind CSS partner component"
          width={600}
          height={600}
        />
      </div>
    </div>
  );
};

export default Partners;
