"use client";
import fullCircle from "../assets/fullCircle.png";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative lg:py-10">
      <div className="relative z-30 lg:max-w-7xl mx-auto mt-16 mb-24 px-4 grid sm:grid-cols-2">
        <div className="grid gap-4">
          <h1 className="font-bold text-2xl lg:text-3xl leading-snug text-white">
            A Dapps entry point to wallets.
          </h1>
          <p className="text-white/60">
            WalletNode is an open protocol Meticulously crafted tool that
            provides a seamless, simple and secure connection between you and
            any decentralized application (DApp) on various networks.
          </p>
          <Link href="/wallet">
            <div className="px-6 py-2 text-white bg-[#A76BF1] rounded-md font-semibold w-fit">
              Connect Wallet
            </div>
          </Link>
        </div>
      </div>
      <div className="z-10 absolute -bottom-40 sm:-bottom-52 lg:-bottom-80 xl:-bottom-96 right-0">
        <Image
          src={fullCircle}
          className="w-[300px] sm:w-[400px] lg:w-[600px] xl:w-[650px] object-cover"
          alt="Tailwind CSS partner component"
          width={600}
          height={600}
        />
      </div>
    </div>
  );
};

export default Hero;
