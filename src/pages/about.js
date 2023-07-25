import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import img7 from "../../public/images/products/img7.jpg";

const about = () => {
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="Parallettes" content="All about MiniFit Parallettes" />
      </Head>

      <main className="felx w-full flex-col items-center justify-center">
        <Layout className="py-16 px-4 ">
          <AnimatedText
            text="A Wooden Parallettes Manufacturing Company in India"
            className="mb-12"
          />
          <div className="grid w-full grid-cols-8 gap-16 ">
            <div className="col-span-5 flex flex-col items-start justify-start">
              <h2 className="mb-4 mt-4 text-lg underline text-teal-400 font-extrabold uppercase">
                All About MiniFit
              </h2>

              <p className="justify-between font-medium mb-4">
                At MiniFit Corporation, we are dedicated to delivering
                high-quality paralleletes for a wide range of applications. With
                our state-of-the-art manufacturing facility and a team of
                skilled professionals, we provide reliable and precise solutions
                for your parallel motion needs.
              </p>

              <h4 className="font-semibold  text-teal-400">
                Our Commitment to Quality:
              </h4>
              <p className="flex !justify-between font-medium mb-4">
                We understand that precision and reliability are crucial when it
                comes to paralleletes. That{"'"}s why we prioritize quality in
                every aspect of our manufacturing process. From the selection of
                premium materials to the rigorous quality control checks, we
                ensure that our paralleletes meet the highest standards.
              </p>

              <h4 className="font-semibold  text-teal-400">
                Customized Solutions:
              </h4>
              <p className="justify-between font-medium mb-4">
                We recognize that each customer has unique requirements. That
                {"'"}s why we offer customized solutions to meet your specific
                needs. Whether you need paralleletes for industrial machinery,
                automotive applications, or any other industry, our team of
                experts will work closely with you to design and manufacture
                paralleletes that perfectly match your specifications.
              </p>

              {/* <h4 className='font-semibold  text-teal-400'>Advanced Manufacturing Technology:</h4>
              <p className='justify-between font-medium mb-4'>At MiniFit Corporation, we leverage the latest manufacturing technologies and
                equipment to ensure superior quality and precision. Our cutting-edge machinery,
                combined with our skilled workforce, allows us to produce paralleletes with
                exceptional accuracy and durability.</p> */}

              <h4 className="font-semibold  text-teal-400">
                Reliable and Timely Delivery:
              </h4>
              <p className="justify-between font-medium mb-4">
                We understand the importance of timely delivery to keep your
                projects on schedule. With our efficient production processes
                and streamlined logistics, we are committed to delivering your
                orders promptly, without compromising on quality.
              </p>

              <h4 className="font-semibold  text-teal-400">
                Customer Satisfaction:
              </h4>
              <p className="justify-between font-medium mb-4">
                Our customers are at the heart of everything we do. We strive to
                exceed their expectations by providing outstanding customer
                service and support. From the initial consultation to
                post-purchase assistance, we are dedicated to ensuring your
                satisfaction with our products and services.
              </p>
            </div>

            <div
              className="col-span-3 relative h-max rounded-2xl border-2 boeder-solid
             bg-light p-6 border-teal-400  items-center mt-8 "
            >
              <div
                className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-2xl 
                  bg-dark  "
              />
              <Image
                src={img7}
                alt="parallettes"
                className="w-full h-auto rounded-2xl "
              />
            </div>

            {/* <div className='col-span-2 flex flex-col items-end justify-between'>

              <div>
                <span>
                  100+
                </span>
                <h2>Satisfied Customers</h2>
              </div>

              <div>
                <span>
                  200+
                </span>
                <h2>Products Sell</h2>
              </div>

              <div>
                <span>
                  100+
                </span>
                <h2>Satisfied Customers</h2>
              </div>

            </div> */}
          </div>
        </Layout>
      </main>
    </>
  );
};

export default about;
