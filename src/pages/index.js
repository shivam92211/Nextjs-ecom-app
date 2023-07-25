import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import milogo from "../../public/images/logo/minilogo1.png";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>MiniFit</title>
        <meta
          name="parallettes selling"
          content="Sell various types of parallettes"
        />
      </Head>

      <main className="flex flex-row items-center text-dark w-full h-fit ">
        <Layout className="pt-0 h-fit">
          <div className="flex items-center justify-between w-full ">
            <div className="w-full items-center ">
              <Image
                src={milogo}
                alt="parallettes"
                className="w-3/5 h-full ml-20 "
                priority
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw, 50vw"
              />
            </div>

            <div
              className="w-full h-fit flex flex-col items-center self-center  
              mr-20  "
            >
              <AnimatedText
                text="Welcome to MiniFit."
                className=" !text-6xl !text-center h-fit"
              />
              <p className="my-4 text-base font-medium">
                We sell Parallettes at affordable rate in entire India.
              </p>

              <div className="flex items-center self-center mt-2">
                <Link
                  href="/products"
                  target={"_blank"}
                  className="flex items-center bg-teal-400 text-light p-2 px-6 rounded-lg text-lg
                      font-semibold hover:bg-light hover:text-teal-400 border-2 border-solid border-transparent
                      hover:border-teal-400"
                >
                  Products
                </Link>
                {/* <Link href="/blogs"
                  className='flex items-center bg-dark text-light p-2 px-6 rounded-lg text-lg
                  font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent
                  hover:border-dark mx-4'
                >Articles</Link> */}
                <Link
                  href="mailto:minifitproducts@gmail.com"
                  target={"_blank"}
                  className="ml-4 text-lg capitalize text-teal-400  p-2 px-6 rounded-lg 
                      border-2 border-solid border-teal-400 font-semibold"
                >
                  Contect
                </Link>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
