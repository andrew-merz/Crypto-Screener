import { Paper, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

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
        <Typography
          variant="h2"
          style={{ fontWeight: "bold", marginBottom: 15 }}
        >
          Crypto-Screener
        </Typography>
      </Container>
    </Paper>
  );
}
