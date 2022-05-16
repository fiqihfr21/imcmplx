import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/logo.png";
import selected from "../assets/selected-menu.png";
import menuIcon from "../assets/menu-icon.png";
import { useEffect } from "react";
import { ethers } from "ethers";

export const NavBtn = styled(Link)`
  color: #000000;
  &.active {
    color: #f38321;
  }
`;

export const Navbar = ({ accounts, setAccounts }) => {
  const isConnected = Boolean(accounts[0]);

  async function connectAccount() {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccounts(accounts);
      console.log("Account connect to : ",accounts);
    }
  }

  function handleAccountsChanged(accounts) {
    if (accounts.length === 0) {
      console.log("Account disconnect");
    } else if (accounts[0] !== accounts && accounts.length !== 0) {
      setAccounts(accounts[0]);
      console.log("Account changed to : ",accounts);
    }else{
      console.log("Account disconnect");
    }
  }

  function handleAccountsConnect() {
    if (window.ethereum.isConnected()) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      provider.getSigner().getAddress().then(result => {
          console.log("Account connect to : ",result);
          setAccounts(result); 
        })
    } else {
      console.log('Please connect to MetaMask.');
    }
  }

  function handleAccountsDisconnect() {
    if (!window.ethereum.isConnected()) {
      setAccounts(false); 
    } else {
      console.log('Please connect to MetaMask.');
    }
  }

  useEffect(() => {

    if (window.ethereum) {
      window.ethereum.on('connect', handleAccountsConnect);
      window.ethereum.on('disconnect', handleAccountsDisconnect);
      window.ethereum.on('accountsChanged', handleAccountsChanged);
    }
  }, []);

  const location = useLocation();
  const menuList = [
    {
        id: "origins",
        url: "/origins",
        label: "ORIGINS"
    },
    {
        id: "on-sale",
        url: "/on-sale",
        label: "ON SALE"
    },
    {
        id: "secondary",
        url: "/secondary",
        label: "SECONDARY"
    },
    {
        id: "goods",
        url: "/goods",
        label: "GOODS"
    },
    {
        id: "blog",
        url: "/blog",
        label: "BLOG"
    }
  ];

  return (
    <div className="hidden md:flex justify-between z-50">
      <div className="pl-10 z-1">
        <img src={logo} alt="logo" className="h-auto lg:w-72 lg:mt-3" />
      </div>
      <div className="navbar content-center">
        <div className="flex pt-7">
          {menuList.map((it) => (
            <div className={"relative"} key={it.id}>
              <div className="pl-14">
                <Link
                  to={it.url}
                  className={`transition duration-300 font-bebas tracking-[.3em] lg:text-lg font-thin  ${
                    location.pathname.split("/")[1] === it.url.split("/")[1]
                      ? "text-[#FF8E32]"
                      : ""
                  } `}
                >
                  {it.label}
                </Link>
              </div>
              {location.pathname.split("/")[1] === it.url.split("/")[1] && (
                <img
                  src={selected}
                  className={"absolute w-auto h-5 right-5 mt-1"}
                  alt="selectedIcon"
                />
              )}
            </div>
          ))}

          <div className="3xl:pl-24 lg:pl-14 pr-4">
            {isConnected ? (
              <p className="flex items-center transition duration-300 font-bebas tracking-[.5em] text-xl font-thin">
                CONNECTED{" "}
                <img className="pl-4 w-auto h-4" src={menuIcon} alt="menu" />
              </p>
            ) : (
              <button
                onClick={connectAccount}
                className="flex items-center transition duration-300 font-bebas tracking-[.5em] text-xl font-thin"
              >
                CONNECT{" "}
                <img className="pl-4 w-auto h-4" src={menuIcon} alt="menu" />
              </button>
            )}
          </div>
        </div>

        <div>
          {/*<img src={selected} className={"w-auto h-5 pl-" + menuSelect} alt="selectedIcon" />*/}
        </div>
      </div>
    </div>
  );
};
