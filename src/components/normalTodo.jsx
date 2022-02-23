import React, { useState, useEffect } from "react";
import { Container, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import useFetchTodos from "../hooks/useFetchTodos";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { GridColDef, GridApi, Record } from "@mui/x-data-grid";

function NormalTodo() {
  const [isTodoChange, setTodoChange] = useState(false);
  const [error, setError] = useState("");
  const toggleTodoChange = () => {
    setTodoChange(!isTodoChange);
  };

  const [todos, handleDeleteTodo, handleUpdateTodo] = useFetchTodos(
    toggleTodoChange,
    isTodoChange,
    setError
  );
  const columns: GridColDef[] = [
    {
      field: "star",
      headerName: "",
      sortable: false,
      renderCell: (params) => {
        const api: GridApi = params.api;
        const thisRow: Record<string, GridCellValue> = {};
        api
          .getAllColumns()
          .filter((c) => c.field !== "__check__" && !!c)
          .forEach((c) => (thisRow[c.field] = params.row));
        const onClick = (e) => {
          e.stopPropagation(); // don't select this row after clicking
          let star = "";
          if (thisRow.star.star === "YES") {
            star = "NO";
          } else star = "YES";
          handleUpdateTodo(
            thisRow.star.id,
            thisRow.star.title,
            thisRow.star.description,
            star,
            thisRow.star.done,
            thisRow.star.onIt,
            thisRow.star.dueDate,
            thisRow.star.type
          );
          console.log(thisRow.star);
        };
        if (thisRow.star.star === "YES") {
          return (
            <Button onClick={onClick}>
              <StarIcon />
            </Button>
          );
        }
        return (
          <Button onClick={onClick}>
            <StarBorderIcon />
          </Button>
        );
      },
    },
    { field: "title", headerName: "Title" },
    { field: "dueDate", headerName: "Due-Date" },
    // { field: "type", headerName: "Type" },
    { field: "description", headerName: "Description", width: 147 },
    {
      field: "onIt",
      headerName: "",
      headerAlign: "right",
      sortable: false,
      renderCell: (params) => {
        const api: GridApi = params.api;
        const thisRow: Record<string, GridCellValue> = {};
        api
          .getAllColumns()
          .filter((c) => c.field !== "__check__" && !!c)
          .forEach((c) => (thisRow[c.field] = params.row));
        const onClick = (e) => {
          e.stopPropagation(); // don't select this row after clicking
          const data = thisRow.star;
          handleDeleteTodo(data.id);
        };
        return (
          <Button onClick={onClick}>
            <ArrowForwardIosIcon />
          </Button>
        );
      },
    },
  ];

  return (
    <div style={{ display: "flex", height: "100%" }}>
      <div style={{ flexGrow: 1 }}>
        <DataGrid
          style={{
            height: "700%",
            width: "100%",
          }}
          rows={todos}
          columns={columns}
          pageSize={5}
          // rowsPerPageOptions={[5, 10, 20]}
        />
      </div>
    </div>
  );
}

export default NormalTodo;
