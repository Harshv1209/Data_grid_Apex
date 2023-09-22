"use client"
import * as React from "react"
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid"
import { Stack } from "@mui/material"

const rows: GridRowsProp = [
  { id: 1, col1: "Hello", col2: "World" },
  { id: 2, col1: "DataGridPro", col2: "is Awesome" },
  { id: 3, col1: "MUI", col2: "is Amazing" },
]

const columns: GridColDef[] = [
  { field: "col1", headerName: "Column 1", width: 150 },
  { field: "col2", headerName: "Column 2", width: 150 },
]

export default function App() {
  return (
    <Stack sx={{ color: "white", bgcolor: "grey" }}>
      <DataGrid rows={rows} columns={columns} />
    </Stack>
  )
}
