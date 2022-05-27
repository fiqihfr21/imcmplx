import { DetailGallery } from './detailSecondary/detailGallery';
import { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import axios from 'axios';
import { ThirdwebSDK } from '@thirdweb-dev/sdk';

export const Secondary = () => {

  const [cardList, setCardList] = useState([]);
  const [collection, setCollection] = useState([]);

  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const sdk = new ThirdwebSDK(signer, provider);
  const contract = sdk.getMarketplace(process.env.REACT_APP_THIRDWEB_MARKETPLACE);

  async function fetchData () {
    axios
      .get(
        `${process.env.REACT_APP_OPENSEA_URL}/assets?asset_contract_address=${process.env.REACT_APP_CONTRACT_ADDRESS}`,
        {
          "x-api-key": process.env.REACT_APP_OPENSEA_KEY,
        }
      )
      .then((res) => {
        setCollection(res.data.assets[0].collection)
      });

    // const tokenContract = process.env.REACT_APP_CONTRACT_ADDRESS;
    const listings = await contract.getAllListings();
    setCardList(listings)
  }

  useEffect(() => {
    fetchData();
  }, []);

    return (
        <div className={"flex flex-col justify-center container mx-auto py-12 px-40"}>
            <DetailGallery key={collection.name} title={collection.name} columns={3} cards={cardList} /> 
        </div>
    )
}
