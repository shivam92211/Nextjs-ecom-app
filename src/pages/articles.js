import React, { useRef } from "react";
import { useMotionValue } from "framer-motion";
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Image from "next/image";
import img5 from "../../public/images/blogs/img5.jpg";
import img4 from "../../public/images/blogs/img4.jpg";
import { motion } from "framer-motion";

const FramerImage = motion(Image);

const MovingImg = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

    function handleMouse(event) {
        imgRef.current.style.display = "inline-block";
        x.set(event.pageX);
        y.set(-10);
  }

  function handleMouseLeave(event) {
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);  }

  return (
    <a
      href={link}
      target="_blank"
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="capitalize text-xl font-semibold hover:underline">
        {title}
      </h2>
          <FramerImage
              style={{ x:x, y:y }}
              initial={{ opacity: 0 }}
              whileInView={{opacity:1, transitionDuration:0.2 }}
              ref={imgRef}
        src={img}
        alt={title}
        className="z-10 w-96 h-auto hidden absolute rounded-lg"
      />
    </a>
  );
};

const Article = ({ img, title, date, link }) => {
    return (
        <motion.li
            initial={{ y: 200 }}
            whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
            viewport={{once: true}}
      className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center 
            justify-betweem bg-light text-dark first:mt-0 border border-solid border-dark
            border-r-4 border-b-4 
        "
    >
      <MovingImg title={title} img={img} link={link} />
      <span className="flex-grow"></span>
      <span className="text-right font-bold">{date}</span>
    </motion.li>
  );
};

const FeturedArticle = ({ img, title, time, summary, link }) => {
  return (
    <li
      className="relativecol-span-1 w-full p-3 bg-light border border-solid-2
         border-dark rounded-2xl "
    >
      {/* <div className='abolute top-0 -right-3 -z-10 w[101%] h-[103] ronuded-[2rem] bg-dark 
                rounded-br-3xl'/> */}

      <a
        href={link}
        target="_blank"
        className="w-full inline-block cursor-pointer my-0 overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto rounded-lg"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </a>

      <a href={link} target="_blank">
        <h2 className="capitalize text-2xl font-bold my-2 hover:underline">
          {title}
        </h2>
      </a>
      <p className="text-sm mb-2">{summary}</p>
      <span className="text-primary font-semibold">{time}</span>
    </li>
  );
};

const Articles = () => {
  return (
    <>
      <Head>
        <title>Articles</title>
        <meta name="Parallettes-Blog" content="All about MiniFit Parallettes" />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden">
        <Layout className="pt-12">
          <AnimatedText
            text="Read the latest blogs on parallettes."
            className="mb-16"
          />
          <ul className="grid grid-cols-2 gap-16 mx-8">
            <FeturedArticle
              title="Unleashing Strength and Stability: The Importance of Parallettes in Your Fitness Routine"
              summary="Parallettes, a simple yet powerful piece of exercise equipment, have gained popularity in recent years for their ability to enhance strength, stability, and overall body control. Whether you're a beginner or an advanced fitness enthusiast, incorporating parallettes into your workout routine can unlock a myriad of benefits. In this blog, we will explore the importance of parallettes and how they can revolutionize your fitness journey"
              img={img5}
              time="24th June 2023"
            />

            <FeturedArticle
              title="Unleashing Strength and Stability: The Importance of Parallettes in Your Fitness Routine"
              summary="Parallettes, a simple yet powerful piece of exercise equipment, have gained popularity in recent years for their ability to enhance strength, stability, and overall body control. Whether you're a beginner or an advanced fitness enthusiast, incorporating parallettes into your workout routine can unlock a myriad of benefits. In this blog, we will explore the importance of parallettes and how they can revolutionize your fitness journey"
              img={img4}
              time="5 min"
            />
          </ul>

          <h2 className="font-bold text-4xl w-full text-center my-16">
            All Articles
          </h2>
          <ul className="mx-8">
            <Article
              title="Unleashing Strength and Stability: The Importance of Parallettes in Your Fitness Routine"
              date="3rd jan"
              link="/"
              img={img5}
            />

            <Article
              title="Unleashing Strength and Stability: The Importance of Parallettes in Your Fitness Routine"
              date="3rd jan"
              link="/"
              img={img5}
            />

            <Article
              title="Unleashing Strength and Stability: The Importance of Parallettes in Your Fitness Routine"
              date="3rd jan"
              link="/"
              img={img5}
            />

            <Article
              title="Unleashing Strength and Stability: The Importance of Parallettes in Your Fitness Routine"
              date="3rd jan"
              link="/"
              img={img5}
            />

            <Article
              title="Unleashing Strength and Stability: The Importance of Parallettes in Your Fitness Routine"
              date="3rd jan"
              link="/"
              img={img5}
            />

            <Article
              title="Unleashing Strength and Stability: The Importance of Parallettes in Your Fitness Routine"
              date="3rd jan"
              link="/"
              img={img5}
            />
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default Articles;
