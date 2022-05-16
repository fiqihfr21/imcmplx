import itemHeader from "../assets/item-header.png";
import productHeader from "../assets/header-product.png";
import bullet from "../assets/bullet.png";
import btnClose from "../assets/btn-close.png";
import btnBlank from "../assets/btn-blank.png";
import itemFooter from "../assets/item-footer.png";
import headerExpand from "../assets/header-expand.png";
import detailProduct from "../assets/detail-product.png";
import headerDetailOrnament from "../assets/header-detail-ornament.png";
import sideDetailOrnament from "../assets/side-detail-ornament.png";
import footerDetailOrnament from "../assets/footer-detail-ornament.png";
import footerProduct from "../assets/footer-product.png";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { ethers } from "ethers";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const DetailProduct = () => {

  const [hoverImg, sethoverImg] = useState(false);
  const [expand1, setExpand1] = useState(false);
  const [expand2, setExpand2] = useState(false);

  const expandHandle = (event) => {
    if (event === 1) {
      setExpand1(!expand1);
    } else {
      setExpand2(!expand2);
    }
  };

  const [item, setItem] = useState([]);
  const [collection, setCollection] = useState([]);
  const [assetContract, setAssetContract] = useState([]);
  const [price, setPrice] = useState([]);
  const [priceSymbol, setPriceSymbol] = useState([]);

  let { address } = useParams();
  let { token_id } = useParams();
  let { listing_id } = useParams();

  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const sdk = new ThirdwebSDK(signer, provider);
  const contract = sdk.getMarketplace(process.env.REACT_APP_THIRDWEB_MARKETPLACE);

  async function fetchData () {
    axios
      .get(
        `${process.env.REACT_APP_OPENSEA_URL}/asset/${address}/${token_id}`,
        {
          "x-api-key": process.env.REACT_APP_OPENSEA_KEY,
        }
      )
      .then((res) => {
        setItem(res.data);
        setCollection(res.data.collection);
        setAssetContract(res.data.asset_contract);
      });
      const listings = await contract.getAllListings();
      let listing = listings.find((marketNft) => marketNft?.id == listing_id)
      setPrice(listing.buyoutCurrencyValuePerToken.displayValue)
      setPriceSymbol(listing.buyoutCurrencyValuePerToken.symbol)
  };
  
  const buyItem = async () => {
    await contract
      .buyoutListing(
        listing_id,
        1
        )
      .catch((error) => console.error(error))

      toast.success("Transaction success")
      // toast.promise(contract, {
      //   loading: "Loading...",
      //   success: "Transaction success",
      //   error: "Uh oh, there was an error!",
      // });
  }

  useEffect(() => {
    fetchData();
  }, []);
  
  return (
    <div className={"flex justify-center"}>
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
      <div className="flex flex-col w-5/12 mx-4">
        <div className="ml-10">
          <h1 className="font-bebas text-4xl text-[#ffffff] font-thin tracking-[.2em]">
            {item.name}
          </h1>
        </div>
        <div className={"relative w-auto h-100"}>
          <div className={"static"}>
            <div className={"absolute left-0 top-0"}>
              <img
                src={productHeader}
                alt="item-header"
                className="w-64 h-24"
              />
            </div>
          </div>
        </div>

        <img
          src={item.image_url}
          alt="product-images"
          onMouseEnter={() => sethoverImg(true)}
          onMouseLeave={() => sethoverImg(false)}
          className="w-auto h-auto ml-12 mt-10"
        />

        <div
          className={`relative w-screen h-100 ${hoverImg ? "block" : "hidden"}`}
        >
          <div className={"static"}>
            <div
              className={
                "absolute 2xl:left-[450px] xl:left-[350px] xl:-top-7 2xl:-top-12"
              }
            >
              <img
                src={detailProduct}
                alt="item-footer"
                className="w-2/3 h-auto"
              />
            </div>
          </div>
          <div
            className={
              "absolute 2xl:left-[700px] xl:left-[600px] xl:-top-2 2xl:-top-8"
            }
          >
            <h6 className="font-bebas text-sm text-[#ffffff] font-thin leading-6 tracking-[.2em] mt-6">
              CONTRACT ADDRESS: {assetContract.address}
            </h6>
            <h6 className="font-bebas text-sm text-[#ffffff] font-thin leading-6 tracking-[.2em]">
              TOKEN ID: {item.token_id}
            </h6>
            <h6 className="font-bebas text-sm text-[#ffffff] font-thin leading-6 tracking-[.2em]">
              TOKEN STANDARD: {assetContract.schema_name}
            </h6>
            <h6 className="font-bebas text-sm text-[#ffffff] font-thin leading-6 tracking-[.2em]">
              NETWORK: ETHEREUM
            </h6>
          </div>
        </div>

        <div className={"flex flex-col mt-10 ml-12"}>
          <img src={itemHeader} alt="item-header" className="w-auto h-auto" />

          <div className="flex xl:ml-2 2xl:ml-5">
            <img src={bullet} alt="item-header" className="w-auto h-9" />
            <div className="ml-4 pt-3">
              <span className="font-bebas text-2xl text-[#ffffff] font-thin tracking-[.3em]">
                Description
              </span>
            </div>
            <div className="ml-auto self-end mr-5">
              <img src={btnClose} alt="btn-close" className="w-auto h-9" />
            </div>
          </div>
          <div className="w-full ml-5 mt-4 pr-36">
            <p className="font-bebas text-sm text-[#ffffff]/50 font-extrabold tracking-[.175em] leading-3 mb-2">
              {item.description}
            </p>
          </div>
          <img src={itemFooter} alt="item-footer" className="w-auto h-auto" />
        </div>

        <div className={"flex flex-col mt-10 ml-12"}>
          <img
            src={headerDetailOrnament}
            alt="item-header"
            className="w-auto h-auto"
          />

          <div className={"relative w-auto h-100"}>
            <div className={"static"}>
              <div className={"absolute right-0 -top-7"}>
                <div className="ml-auto self-end mr-5">
                  <img src={btnBlank} alt="btn-blank" className="w-auto h-14" />
                </div>
              </div>
              <div className={"absolute -right-10 -top-10"}>
                <div className="ml-auto self-end mr-5">
                  <img
                    src={sideDetailOrnament}
                    alt="btn-close"
                    className="w-auto h-auto"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="w-full ml-11 mt-6  pr-36">
            <p className="font-bebas text-sm text-[#ffffff]/50 font-extrabold tracking-[.175em] leading-3 mb-2">
              {assetContract.description}
            </p>
          </div>

          <div className={"relative w-auto h-100"}>
            <div className={"static"}>
              <div className={"absolute left-0 -bottom-24"}>
                <div className="ml-auto self-end mr-5">
                  <img
                    src={footerDetailOrnament}
                    alt="item-footer"
                    className="w-auto h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-6/12 mx-4">
        <h1 className="font-bebas text-4xl text-[#ffffff] font-light tracking-[.2em] ml-5 mt-20">
          {collection.name}
        </h1>
        <div className={"flex mt-4"}>
            <div
              className={
                "border border-white w-7/12 h-40 flex flex-col justify-center items-start px-4 py-6"
              }
            >
              <h6
                className={
                  "font-bebas text-white font-extrathin text-base lg:text-lg xl:text-xl tracking-[.2em]"
                }
              >
                CURRENT PRICE:
              </h6>
              <h1
                className={
                  "font-alarmclock text-white font-normal lg:text-[2.1rem] xl:text-[2rem] 2xl:text-[3rem] lg:leading-none tracking-[.2em] mt-2"
                }
              >
                {price} {priceSymbol}
              </h1>
              {/*<h6 className={"font-bebas text-white text-[1rem] lg:text-[1.5rem] xl:text-[1.5rem] 2xl:text-[1.4rem] leading-[2.75rem] tracking-[.2em]"}>CURRENT PRICE:</h6>*/}
              {/*<h1 className={"font-bebas text-white text-[3.35rem] lg:text-[3.65rem] xl:text-[4.5rem] 2xl:text-[5.6rem] leading-[3rem] lg:leading-[4rem] xl:leading-[5rem] 2xl:leading-[6rem] font-thin tracking-[.2em]"}>77.7*/}
              {/*    ETH</h1>*/}
            </div>
          <div className={"flex flex-col justify-between h-40 mx-2 w-5/12"}>
              <button onClick={buyItem}
                className={
                  "bg-[#FF8E32] font-bebas text-white text-3xl tracking-[.15em] flex justify-center items-center mb-1 h-20 w-auto hover:text-black"
                }
              >
                BUY NOW
              </button>
            <button
              className={
                "font-bebas text-white text-3xl border border-white flex justify-center items-center mt-1 h-20 w-auto hover:text-[#FF8E32] hover:border-[#FF8E32]"
              }
            >
              MAKE OFFER
            </button>
          </div>
        </div>

        <div className="mt-10 xl:mt-4 mx-2 relative">
          <div className="relative">
            <img
              src={headerExpand}
              alt="header-expand"
              className="w-full h-[170px] xl:h-[80px] cursor-pointer"
              onClick={() => expandHandle(1)}
            />
            <div className={`${expand1 ? "h-72" : "h-0 hidden"}`}>
              <div
                className={`absolute top-10 left-3 w-[96%] pt-4 px-4 -z-50 border-x-4 border-b-4 h-72`}
              >
                  {/* <span className="text-white">
                    <table className="table-auto">
                      <thead>
                        <tr>
                          <th>Unit Price</th>
                          <th>USD Unit Price</th>
                          <th>Quantity</th>
                          <th>Expiration</th>
                          <th>From</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        
                      </tbody>
                    </table>
                  </span> */}
                  <span className="text-white">No Listing Yet</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src={headerExpand}
              alt="header-expand"
              className="w-full h-[170px] xl:h-[80px] cursor-pointer"
              onClick={() => expandHandle(2)}
            />
            <div className={`${expand2 ? "h-72" : "h-0 hidden"}`}>
              <div
                className={`absolute top-10 left-3 w-[96%] pt-4 px-4 -z-50 border-x-4 border-b-4 h-72`}
              >
                  {/* <span className="text-white">
                    <table className="table-auto">
                      <thead>
                        <tr>
                          <th>Unit Price</th>
                          <th>USD Price</th>
                          <th>Floor Difference</th>
                          <th>Expiration</th>
                          <th>From</th>
                        </tr>
                      </thead>
                      <tbody>
                        
                      </tbody>
                    </table>
                  </span> */}
                  <span className="text-white">No Offer Yet</span>
              </div>
            </div>
          </div>
        </div>

        <div className={"flex flex-col justify-center items-start mx-8 mt-20"}>
          <h2 className="font-bebas text-3xl text-[#ffffff] font-thin tracking-[.2em] mt-20">
            ACTIVITY
          </h2>
          <div
            className={
              "border border-white bg-black font-bebas text-3xl text-white p-4 mt-2 w-full h-60"
            }
          />
        </div>
      </div>

      <div className={"static"}>
        <div className={"absolute right-8 -bottom-20"}>
          <img
            src={footerProduct}
            alt="product-footer"
            className="w-auto h-auto"
          />
        </div>
      </div>
    </div>
  );
};
