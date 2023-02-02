import React from 'react'
import {BiCopyright} from 'react-icons/bi'

const Footer = ({footerDate}) => {
  return (
    <footer>
        <p> 🔥 {footerDate.current}  Vonn Ryann Cruz <span><BiCopyright/></span> 
        </p></footer>
  )
}

export default Footer