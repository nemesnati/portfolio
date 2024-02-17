import React from 'react'

function Welcome() {

const h1Style = {
  position: "relative",
  width: "fit-content",
  fontSize: "clamp(70px, 11vw, 190px)",
  fontFamily: "roboto",
  fontWeight: 400,
  fontStyle: "normal",
  marginLeft: "20px",
  top: "14rem",
  color: "white",
}

  return (
    <>
     <h1 style={h1Style}>
  hello, <br />
  i'm Natália Nemes
    </h1>
</>
  )
}

export default Welcome