"use client"
import { Stack } from "@mui/material"
import { GridRowsProp, DataGrid, GridColDef } from "@mui/x-data-grid"
import React from "react"

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  { field: "FirstName", headerName: "Firstname", width: 180, editable: true },
  { field: "LastName", headerName: "Lastname", width: 180 },
  { field: "Email", headerName: "Email", width: 180 },
  { field: "Phone", headerName: "Phone", width: 180, editable: true },
]
const rows: GridRowsProp = [
  {
    id: 1,
    FirstName: "John",
    LastName: "Doe",
    Email: "JD@example.com",
    Phone: "87451284512",
  },
  {
    id: 2,
    FirstName: "Hitika",
    LastName: "Dewani",
    Phone: "85412548",
    Email: "HD@example.com",
  },
  {
    id: 3,
    FirstName: "Harsh",
    LastName: "Vaidya",
    Phone: "97852012369",
    Email: "HV@example.com",
  },
]

function Page() {
  return (
    <Stack color={"white"} bgcolor={"ThreeDShadow"}>
      <DataGrid
        rows={rows}
        columns={columns}
        checkboxSelection
        disableRowSelectionOnClick
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 1,
            },
          },
        }}
        pageSizeOptions={[1, 3]}
        // editMode="row"
      />
    </Stack>
  )
}

export default Page
