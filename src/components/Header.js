import {
  AppBar,
  Container,
  MenuItem,
  Select,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <AppBar color="transparent" position="static">
      <Container>
        <Toolbar>
          <Typography
            onClick={() => navigate("/")}
            style={{
              color: "#00FF00",
              flex: 1,
              fontWeight: "bold",
              fontFamily: "Roboto",
              cursor: "pointer",
            }}
            variant="h5"
          >
            Crypto-Screener
          </Typography>
          <Select style={{ width: 100, height: 40, marginRight: 15 }}>
            <MenuItem value={"USD"}>USD</MenuItem>
            <MenuItem value={"CNY"}>CNY</MenuItem>
            <MenuItem value={"RUB"}>RUB</MenuItem>
          </Select>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
