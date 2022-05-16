import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import axios from "axios";
import { ethers } from "ethers";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { DetailGallery } from "./detailGallery";

export const DetailSecondary = () => {

  const [cardList, setCardList] = useState([]);
  const [collection, setCollection] = useState([]);
  let { address } = useParams();

  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const sdk = new ThirdwebSDK(signer, provider);
  const contract = sdk.getMarketplace(process.env.REACT_APP_THIRDWEB_MARKETPLACE);

  async function fetchData () {
    axios
      .get(
        `${process.env.REACT_APP_OPENSEA_URL}/assets?asset_contract_address=${address}`,
        {
          "x-api-key": process.env.REACT_APP_OPENSEA_KEY,
        }
      )
      .then((res) => {
        setCollection(res.data.assets[0].collection)
      });

    const listings = await contract.getAllListings();
    setCardList(listings)
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div
      className={"flex flex-col justify-center container mx-auto py-12 px-40"}
    >
      <DetailGallery title={collection.name} columns={3} cards={cardList} />
    </div>
  );
};
