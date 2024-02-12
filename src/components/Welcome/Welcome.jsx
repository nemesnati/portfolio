import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function Welcome() {

const h1Style = {
  position: "relative",
  width: "fit-content",
  fontSize: "150px",
  fontFamily: "roboto",
  fontWeight: 400,
  fontStyle: "normal",
  marginLeft: "20px",
  top: "150px",

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