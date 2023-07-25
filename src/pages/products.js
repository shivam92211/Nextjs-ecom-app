import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import Image from "next/image";
import img12 from "../../public/images/products/img12.png";
import { motion } from "framer-motion";

const FramerImage = motion(Image);

// const FeaturedProject = ({ title, summary, img, link }) => {

//     return (
//         <article>

//             <Link href={link} target='_blank'>
//                 <Image src={img} alt={title} className='w-full h-auto' />
//             </Link>

//             <div>
//                 <Link href={link} target='_blank'>
//                     <h2>{title}</h2>
//                 </Link>
//                 <p>{summary}</p>

//                 <div>
//                 <Link href="https://wa.me/c/918108419746" target='_blank'>Buy</Link>
//                 </div>
//             </div>

//         </article>
//     )
// }

const Product = ({ title, img, summary, price, discount, mrp }) => {
  return (
    <article
      className="w-full flex flex-col items-center justify-center rounded-2xl
         border border-solid border-dark bg-light p-4 relative
        "
    >
      <a
        href="https://wa.me/c/918108419746"
        target="_blank"
        className="w-full cursor-pointer my-0 overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </a>

      <div className="w-full flex flex-col items-start justify-between pl-4">
        <a>
          <h2 className="my-2 w-full text-left text-3xl text-teal-800 font-medium ">
            {title}{" "}
          </h2>
        </a>

        <div className="flex">
          <p className="text-2xl font-medium text-green-700 mr-4">
            <span>&#8377;</span>
            {price}
          </p>
          <p className="mr-4 mt-1 text-xl">-{discount}%</p>
          <p className="text-red-600 mt-1 text-xl">
            M.R.P: <span>&#8377;</span>
            {mrp}
          </p>
        </div>

        {/* <span className=' font-medium text-green-800 text-4xl'>{price}</span>                 */}
        <p className="my-2 font-medium text-dark">{summary}</p>
        <div className="mt-2 flex items-center">
          <a>Buy</a>
        </div>
      </div>
    </article>
  );
};

const products = () => {
  return (
    <>
      <Head>
        <title>Products</title>
        <meta name="Parallettes" content="MiniFit Parallettes" />
      </Head>

      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText
            text="Parallettes! The best quality with best price"
            className="pb-16"
          />

          <div className="grid grid-cols-12 gap-24 px-6">
            {/* <div className='col-span-12 w-1/2 h-auto flex flex-row items-center'>
                            <FeaturedProject
                                title="Jumbo Parallettes"
                                img={img12}
                                summary="Made up of premium pine wood"
                                link="/"
                            />
                        </div>  */}

            <div className="col-span-4">
              <Product
                title="Jumbo Parallettes"
                price="2000"
                discount="46"
                mrp="5666"
                img={img12}
                summary="Made up of premium pine wood"
              />
            </div>

            <div className="col-span-4">
              <Product
                title="Medium Parallettes"
                price="2000"
                img={img12}
                summary="Made up of premium pine wood"
              />
            </div>

            <div className="col-span-4">
              <Product
                title="Pro Parallettes"
                price="2000"
                img={img12}
                summary="Made up of premium pine wood"
              />
            </div>

            <div className="col-span-4">
              <Product
                title="Mini Parallettes"
                price="2000"
                img={img12}
                summary="Made up of premium pine wood"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default products;
