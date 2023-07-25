import React from 'react'
import Layout from './Layout'
import Link from 'next/link'
import { FaHome, FaInstagram, FaMailBulk, FaPhone, FaWhatsapp, FaYoutube } from "react-icons/fa";



const Footer = () => {

  
  return (
      <footer className='w-full border-solid border-dark font-medium text-lg
        bg-blue-800'>
      
            <Layout className='py-8 items-center justify-between bg-teal-400' >
              {/* <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
              <Link href="">Phone</Link>
              <Link href="">Mail</Link> */}
        
        <div className='flex'>
          
          <div className='w-1/2'>
            
            <div className=" flex mb-4">
              <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
              <div>
                <p>Mumbai</p>
                <p>India</p>
              </div>
            </div>
            
            <div className="flex mb-4">
              <FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
              <h4>+91 81084 19746</h4>
            </div>
            
            <div className="flex">
              <FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />
              <h4>minifitproducts@gmail.com</h4>
           </div>
            
          </div>

          <div className='w-1/2 '>
            <div className="">
                <h1 className='font-bold'>About the Company</h1>
                <p>At MiniFit, we are dedicated to delivering high-quality paralleletes for a
                wide range of applications.Choose MiniFit for precision, reliability, and
                exceptional quality in paralleletes manufacturing.</p>
              <div className="flex items-center" style={{ display: 'flex', justifyContent: 'center' }}>
                <Link href="https://youtube.com/@minifit.corporation">
                  <FaYoutube size={35} style={{ color: "#fff", marginRight: "1rem" }} />
                </Link>
                <Link href="https://www.instagram.com/minifit.co">
                  <FaInstagram size={35} style={{ color: "#fff", marginRight: "1rem" }} />
                </Link>
                <Link href="https://wa.me/c/918108419746">
                  <FaWhatsapp size={35} style={{ color: "#fff", marginRight: "1rem" }} />
                </Link>
              </div>
           </div>
          </div>

        </div>
        <div className='flex w-full h-full pt-6 items-center'>
          <p className="items-center" style={{ margin: 'auto' }}>
            &copy; {new Date().getFullYear()} MiniFit. All right reserved.
          </p>
        </div>
            </Layout>

    </footer>
  )
      
    
    
}

export default Footer