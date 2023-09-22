"use client"
import React from "react"
import ReactApexChart from "react-apexcharts"

const BarChart = () => {
  const options = {
    chart: {
      id: "basic-line",
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May"],
    },
    colors: ["#128280"],
  }

  const series = [
    {
      name: "Monthly Sales Chart",
      data: [30, 40, 45, 50, 149],
    },
  ]

  return (
    <div>
      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        height={350}
        width={600}
      />
    </div>
  )
}

export default BarChart
