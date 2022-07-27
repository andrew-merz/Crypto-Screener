import axios from "axios";
import React, { useEffect, useState } from "react";
import { CryptoState } from "../../CryptoContext";
import { TrendingCoins } from "../../config/api";

const Carousel = () => {
  const [trending, setTrending] = useState([]);
  const { currency } = CryptoState();

  const fetchTrending = async () => {
    const { data } = await axios.get(TrendingCoins(currency));
    setTrending(data);
  };
  console.log(trending);
  useEffect(() => {
    fetchTrending();
  }, [currency]);

  return (
    <div style={{ height: "50%", display: "flex", alignItems: "center" }}>
      Carousel
    </div>
  );
};

export default Carousel;
