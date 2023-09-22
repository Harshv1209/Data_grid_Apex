import React from "react"

function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div>
        <h1>hi there</h1>
        <div>{children}</div>
      </div>
    </>
  )
}

export default layout
