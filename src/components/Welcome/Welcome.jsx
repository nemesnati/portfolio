import React from 'react'

function Welcome() {

const h1Style = {
  position: "absolute",
  bottom: "2%",
  width: "fit-content",
  fontSize: "clamp(70px, 9vw, 160px)",
  fontFamily: "roboto",
  fontWeight: 400,
  fontStyle: "normal",
  marginLeft: "0.2em",
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