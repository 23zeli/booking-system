import React from 'react'

function Footer() {
  return (
    <footer
      className="Footer"
      style={{
        backgroundColor: "#18181b",
        display: "flex",
        justifyContent: "center",
        width: "100%",
      //   marginTop: "20px",
        // margin: "auto",
      }}
    >
      <p
        style={{
          paddingTop: "15px",
          paddingBottom: "15px",
          color: "whitesmoke",
        }}
      >
        Copyright &copy;2025
      </p>
    </footer>
  )
}

export default Footer