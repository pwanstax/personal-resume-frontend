import React, { useState, useEffect } from "react";
import { Container, Button, Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import useFetchTodos from "../hooks/useFetchTodos";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { GridColDef, GridApi, Record } from "@mui/x-data-grid";
import NormalTodo from "../components/normalTodo";
import { borderLeft } from "@mui/system";

function StudyPage() {
  return (
    <div>
      <Container>
        <Box
          style={{
            width: "47.5%",
            marginTop: 30,
            marginLeft: 5,
            float: "left",
          }}
        >
          <NormalTodo />
        </Box>
        <Box
          style={{
            width: "47.5%",
            marginTop: 30,
            marginRight: 5,
            float: "right",
          }}
        >
          <NormalTodo />
        </Box>
      </Container>
    </div>
  );
}

export default StudyPage;
