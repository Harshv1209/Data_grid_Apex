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
    FirstName: "dk",
    LastName: "404",
    Email: "dk@mail.com",
    Phone: "7897897890",
  },
  {
    id: 2,
    FirstName: "aman",
    LastName: "tech",
    Phone: "4564564560",
    Email: "aman@mail.com",
  },
  {
    id: 3,
    FirstName: "code",
    LastName: "siddhant",
    Phone: "1231231230",
    Email: "codesiddhant@mail.com.",
  },
  {
    id: 4,
    FirstName: "mayank",
    LastName: "pandey",
    Phone: "7417417410",
    Email: "mpandey@mail.com.",
  },
  {
    id: 5,
    FirstName: "harsh",
    LastName: "vaidya",
    Phone: "8528528520",
    Email: "harshv1209@mail.com.",
  },
  {
    id: 6,
    FirstName: "amitabh",
    LastName: "bachan",
    Phone: "7714171477",
    Email: "bachaan@mail.com.",
  },
  {
    id: 7,
    FirstName: "mr",
    LastName: "bala",
    Phone: "9517538520",
    Email: "ballu@mail.com.",
  },
  {
    id: 8,
    FirstName: "hitika",
    LastName: "dewani",
    Phone: "99887744550",
    Email: "hdewani@mail.com.",
  },
]

function Page() {
  return (
    <Stack color={"whitesmoke"} bgcolor={"grey"}>
      <DataGrid
        rows={rows}
        columns={columns}
        checkboxSelection
        disableRowSelectionOnClick
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 3,
            },
          },
        }}
      />
    </Stack>
  )
}

export default Page
