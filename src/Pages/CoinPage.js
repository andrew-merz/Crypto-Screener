import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CryptoState } from "../CryptoContext";
import { SingleCoin } from "../config/api";
import CoinInfo from "../components/CoinInfo";
import styled from "@emotion/styled";

const CoinPage = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState();
  const { currency, symbol } = CryptoState();

  const fetchCoin = async () => {
    const { data } = await axios.get(SingleCoin(id));
    setCoin(data);
  };

  console.log(coin);
  useEffect(() => {
    fetchCoin();
  }, []);

  const Root = styled("div")(({ theme }) => ({
    display: "flex",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  }));
  const Sidebar = styled("div")(({ theme }) => ({
    width: "30%",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 25,
    borderRight: "2px solid grey",
  }));

  return (
    <Root>
      <Sidebar>
        SideBar
        <CoinInfo coin={coin} />
      </Sidebar>
    </Root>
  );
};

export default CoinPage;
