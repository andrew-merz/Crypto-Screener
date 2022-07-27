import {
  LinearProgress,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { CoinList } from "../config/api";
import { CryptoState } from "../CryptoContext";

const CoinsTable = () => {
  const [coins, setCoins] = useState([]);
  // eslint-disable-next-line
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const { currency } = CryptoState();

  const fetchCoins = async () => {
    setLoading(true);
    const { data } = await axios.get(CoinList(currency));
    setCoins(data);
    setLoading(false);
  };
  console.log(coins);
  useEffect(() => {
    fetchCoins();
    // eslint-disable-next-line
  }, [currency]);

  return (
    <Container style={{ textAlign: "center" }}>
      <Typography variant="h4" style={{ margin: 18 }}>
        Cryptocurrency Prices by Market Cap
      </Typography>
      <TextField
        id="outlined-basic"
        label="Search For a Crypto Currency..."
        variant="outlined"
        style={{ marginBottom: 20, width: "100%" }}
        onChange={(e) => setSearch(e.target.value)}
      />

      <TableContainer>
        {loading ? (
          <LinearProgress style={{ backgroundColor: "#00FF00" }} />
        ) : (
          <Table>
            <TableHead style={{ backgroundColor: "#00FF00" }}>
              <TableRow>
                {["Coin", "Price", "24h Change", "Market Cap"].map((head) => (
                  <TableCell
                    style={{ color: "black", fontWeight: "600" }}
                    key={head}
                    align={head === "Coin" ? "" : "right"}
                  >
                    {head}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
          </Table>
        )}
      </TableContainer>
    </Container>
  );
};

export default CoinsTable;
