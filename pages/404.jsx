import Header from './panel/_header'
import Footer from './panel/_footer'
import Link from 'next/link'
import Image from 'next/image'
import React, { useEffect } from "react";

export default function error() {

    return (

        <div>
            <Header />
            <h1>HATALI!</h1>
        </div>
    );
}