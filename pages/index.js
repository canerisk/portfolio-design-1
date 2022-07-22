import Head from 'next/head'
import Img from 'next/image'
import Script from 'next/script'
import styles from '../styles/Home.module.css'
import Header from './panel/_header'
import Tech from './panel/_tech'
import Social from './panel/_social'
import Project from './panel/_project'
import Link from 'next/link'
import Footer from './panel/_footer'
import { Dialog, Menu, Listbox, Switch, Popover, Tab, Transition, Disclosure } from '@headlessui/react'
import React, { useEffect,useState } from "react";
export default function Home() {
  return (

    <div>
        <Header />

        <div className=' lg:px-[12.5rem] md:px-[7rem] sm:px-[4rem] px-[2rem]'>
        <div className='h-[100vh]  w-full flex items-center justify-center'>
          <div className='text-center'>
          <h1 className='text-3xl max-w-2xl  font-extrabold'>Hello I'm <b className='bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>Raqzid</b>! Together with you we will learn a lot about me!</h1>
          <div className='pt-5 flex justify-center'>
            <Link href='#about'><a className='bg-gray-100  text-black font-medium   hover:shadow-xl w-64 hover:w-72 px-3  shadow-black py-3 rounded text-xs flex justify-between items-center'>So Let's Start! <svg className="w-4 h-4 bg-gradient-to-r from-red-600 to-orange-500 rounded-sm text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></a></Link>
          </div>
          </div>
        </div>

        <div className='flex justify-center lg:justify-between md:justify-between sm:justify-center items-center -mt-64 '>
        <div className='lg:ml-0 md:ml-0 sm:ml-16 ml-16  lg:pt-0 md:pt-0 sm:pt-28 pt-28'>
        <div className='bg-gradient-to-r flex items-center text-white justify-center  from-purple-500 to-pink-500  rounded-3xl animate-spin ease-in-out duration-72 h-32 w-32'>

        </div>
        <div className='bg-gradient-to-r from-purple-500 to-pink-500  -mt-32 -ml-10 rounded-3xl animate-spin opacity-60 ease-in-out duration-72 h-32 w-32'></div>
        <div className='bg-gradient-to-r from-purple-500 to-pink-500  -mt-32 -ml-20 rounded-3xl animate-spin opacity-40 ease-in-out duration-72 h-32 w-32'></div>
        </div>
        <div className='lg:inline md:inline sm:hidden hidden'>
        <div className='bg-black flex items-center justify-center text-white rounded-3xl animate-spin  h-32 w-32'>
        
        </div>
        <div className='bg-black  -mt-32 ml-10  rounded-3xl animate-spin bg-opacity-60  h-32 w-32'></div>
        <div className='bg-black  -mt-32 ml-20  rounded-3xl animate-spin bg-opacity-40  h-32 w-32'></div>
        </div>
        </div>

        <div className='pt-64 pb-24' id='about'>
        <div>
            <div>
            <h1 className='text-4xl  font-extrabold lg:text-start md:text-start sm:text-start text-center'><b>ABOUT ME</b></h1>
          <div className='bg-gradient-to-r from-white lg:block md:block sm:block hidden to-blue-500 w-[40vh] rounded-xl h-4 -mt-4'></div>

          <h4 className='text-sm lg:text-start md:text-start sm:text-start text-center max-w-2xl mt-5'>Hi I'm Raqzid, I'm 16 years old and going to high school. I've been working as a Frontend Developer for 2.5 years, I've had many projects and I continue to improve myself day by day. I Live In Turkey Thanks For Reading This Much :)</h4>
            </div>
          </div>


          <div className='pt-64'>
          <div>
          <h1 className='text-4xl font-extrabold lg:text-start md:text-start sm:text-start text-center'><b>TECHNOLOGİES I USE</b></h1>
          <div className='bg-gradient-to-r lg:block md:block sm:block hidden from-white to-blue-500 w-[70vh] rounded-xl h-4 -mt-4'></div>
          </div>
          <Tech />
          </div>


          <div className='pt-64' id='project'>
            <div>
            <h1 className='text-4xl font-extrabold lg:text-start md:text-start sm:text-start text-center'><b>PROJECT</b></h1>
            <div className='bg-gradient-to-r from-white lg:block md:block sm:block hidden to-blue-500 w-[35vh] rounded-xl h-4 -mt-4'></div>
            </div>
            <Project />
          </div>

          <div className='pt-64' id='social'>
          <div>
          <h1 className='text-4xl font-extrabold lg:text-start md:text-start sm:text-start text-center'><b>SOCİAL MEDİA</b></h1>
          <div className='bg-gradient-to-r from-white lg:block md:block sm:block hidden to-blue-500 w-[50vh] rounded-xl h-4 -mt-4'></div>
          </div>
          <Social />
          </div>


          <div className='pt-64'>
            <div className='flex justify-center'>
            <iframe className='rounded-3xl p-3  bg-gradient-to-r to-red-500 from-white' width="800" height="400" src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?controls=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </div>
        </div>
        </div>
        <Footer />
    </div>

  )

}

