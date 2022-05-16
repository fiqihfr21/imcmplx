import dummyImage4 from "../assets/dummy-image-4.png";
import bullet from "../assets/bullet.png";
import borderSideRect from "../assets/border-side-rect.png";
import footerProduct from "../assets/footer-product.png";
import itemOrnament1 from "../assets/item-ornament-1.png";
import ornament4 from "../assets/ornament-4.png";
import { useEffect, useState } from "react";
import { ethers } from "ethers";
import smartcontract from "../SmartContract.json";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const contractAddress = process.env.REACT_APP_CONTRACT_ADDRESS;

export const Mint = () => {

  const [price, setPrice] = useState(0);
  const [salesMint, setSalesMint] = useState(0);
  const [accounts, setAccounts] = useState(false);

  async function initWeb3() {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccounts(accounts);
      
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        contractAddress,
        smartcontract.abi,
        signer
      );
      try {
        const price = await contract.price();
        const priceEth = ethers.utils.formatEther(price);
        const salesMint = await contract.publicSalesMintedQty.call();
        setSalesMint(ethers.utils.formatUnits(salesMint, 0));
        setPrice(priceEth);
        setAccounts(true);
      } catch (err) {
        console.log(err);
      }
    }
  }

  useEffect(() => {
    initWeb3();
  }, []);

  async function handleMint() {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        contractAddress,
        smartcontract.abi,
        signer
      );
      try {
        const price = await contract.price.call();
        const priceEth = ethers.utils.formatEther(price);
        const response = await contract.publicSalesMint({
          value: ethers.utils.parseEther(priceEth.toString()),
        });
        console.log("response : ", response);
      } catch (err) {
        // console.log(err)
        // console.log(err.data['message'].substring(43));
        toast.error(err.data['message'].substring(43));
      }
    }
  }

  return (
    <div className="flex flex-col container mx-auto px-40 py-12">
    <>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </>
      <img src={dummyImage4} alt="dummy-image4" className="w-auto h-auto" />

      <div className="flex mt-10">
        <div className="flex-1">
          <div className="flex ml-5">
            <img src={bullet} alt="item-header" className="w-auto h-9" />
            <div className="ml-4 pt-3">
              <span className="font-bebas text-2xl text-[#ffffff] font-thin tracking-[.5em]">
                Position
              </span>
            </div>
          </div>

          <div className="ml-5 w-64">
            <span className="font-bebas text-sm text-[#ffffff]/50 font-extrabold tracking-[.175em]">
              Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum
              dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit
              amet Lorem ipsum dolor sit amet
            </span>
          </div>
        </div>

        <div className="flex-1 space-y-6">
          <div className="flex relative">
            <span className="absolute -top-6 left-5 font-bebas text-white text-[100pt] tracking-[.3em]">
              {salesMint}
            </span>
            <img src={borderSideRect} alt="border-side-rect" />
            <div className="absolute left-40 top-8 flex items-center space-x-2">
              <div className="relative">
                <div className="absolute -top-6 right-0">
                  <span className="font-alarmclock text-white text-4xl">
                    {price} ETH
                  </span>
                </div>
                <img
                  src={itemOrnament1}
                  alt="item-ornament1"
                  className="w-auto h-[50px]"
                />
              </div>
              <button className="relative" onClick={handleMint}>
                <img
                  src={ornament4}
                  alt="ornament4"
                  className="mt-4 w-auto h-[100px] "
                />
                <span className="absolute top-12 left-10 mb-2 font-alarmclock text-4xl text-[#FF8E32] font-thin tracking-[.5em]">
                  MINT
                </span>
              </button>
            </div>
          </div>
          <div className="flex space-x-4 items-center">
            <img
              src={footerProduct}
              alt="product-footer"
              className="w-[260px] h-auto"
            />
            <span className="font-bebas text-4xl text-white font-light tracking-widest">
              PREVIEW COLLECTION
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
