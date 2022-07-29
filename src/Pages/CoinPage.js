import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CryptoState } from "../CryptoContext";
import { SingleCoin } from "../config/api";
import CoinInfo from "../components/CoinInfo";
import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import parse from "html-react-parser";
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
        <img
          src={coin?.image.large}
          alt={coin?.name}
          height="200"
          style={{ marginBottom: 20 }}
        />
        <Typography
          variant="h2"
          style={{ fontWeight: "bold", marginBottom: 20 }}
        >
          {coin?.name}
        </Typography>
        <Typography
          variant="subtitle1"
          style={{
            width: "100%",
            padding: 25,
            paddingBottom: 15,
            paddingTop: 0,
            textAlign: "justify",
          }}
        >
          {parse(`${coin?.description.en.split(". ")[0]}`)}
        </Typography>
        <div>
          <span style={{ display: "flex" }}>
            <Typography variant="h5">Rank:</Typography>
            &nbsp; &nbsp;
            <Typography variant="h5">{coin?.market_cap_rank}</Typography>
          </span>
          <span style={{ display: "flex" }}>
            <Typography variant="h5">Current Price: </Typography>
            &nbsp; &nbsp;
            <Typography variant="h5">{symbol}</Typography>
          </span>
          <span style={{ display: "flex" }}>
            <Typography variant="h5">Rank:</Typography>
            &nbsp; &nbsp;
            <Typography variant="h5">{coin?.market_cap_rank}</Typography>
          </span>
        </div>
        <CoinInfo coin={coin} />
      </Sidebar>
    </Root>
  );
};

export default CoinPage;
