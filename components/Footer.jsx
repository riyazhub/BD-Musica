import React from 'react'
import { AiFillInstagram, AiOutlineTwitter, AiFillFacebook } from 'react-icons/ai'

const Footer = () => {
    return (
        <div className='footer-container'>
            <p>2022 BD Marketing Limited  All rights reserved</p>
            <p className='icons'>
                <AiFillFacebook />
                <AiFillInstagram />
                <AiOutlineTwitter />
            </p>
        </div>
    )
}

export default Footer