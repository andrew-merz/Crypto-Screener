import { Paper, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Carousel from "./Carousel";

export default function Banner() {
  return (
    <Paper
      style={{
        backgroundImage: `url(./banner.jpg)`,
      }}
    >
      <Container
        style={{
          height: 400,
          display: "flex",
          flexDirection: "column",
          paddingTop: 25,
          justifyContent: "space-around",
        }}
      >
        <div
          style={{
            display: "flex",
            height: "40%",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <Typography
            variant="h2"
            style={{ fontWeight: "bold", marginBottom: 15 }}
          >
            Crypto-Screener
          </Typography>
          <Typography
            variant="subtitle2"
            style={{
              color: "darkgrey",
              textTransform: "capitalize",
            }}
          >
            Your one stop shop for all of your crypto needs
          </Typography>
        </div>
        <Carousel />
      </Container>
    </Paper>
  );
}
