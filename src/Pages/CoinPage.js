import React, { useState } from "react";
import { useParams } from "react-router-dom";
import CryptoState from "../CryptoContext";

const CoinPage = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState();
  const { currency, symbol } = CryptoState();
  return (
    <div>
      <h1>CoinPage</h1>
    </div>
  );
};

export default CoinPage;
