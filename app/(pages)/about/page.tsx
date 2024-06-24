'use client';

import Avatar from '@/components/ui/Avatar';
import Circles from '@/components/Circles';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '@/variant';
import CountUp from 'react-countup';
import Image from 'next/image';

const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          '/svg/html.svg',
          '/svg/js.svg',
          '/svg/ts.svg',
          '/svg/tailwindcss.svg',
          '/svg/reactjs.svg',
          '/svg/nextjs.svg',
          '/svg/figma.svg',
          '/svg/git.svg',
        ],
        stage: '2023 - 2024',
      },
    ],
  },
  // {
  //   title: 'awards',
  //   info: [
  //     {
  //       title: 'Webby Awards - Honoree',
  //       stage: '2011 - 2012',
  //       icons: [<FaFigma />, <SiAdobexd />, <SiAdobephotoshop />],
  //     },
  //     {
  //       title: 'Adobe Design Achievement Awards - Finalist',
  //       stage: '2009 - 2010',
  //       icons: [<FaFigma />, <SiAdobexd />, <SiAdobephotoshop />],
  //     },
  //   ],
  // },
];

const AboutPage = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      <motion.div
        variants={fadeIn('right', 0.2)}
        initial="hidden"
        animate="show"
        exit={'hidden'}
        className="hidden xl:flex absolute bottom-0 -left-[315px]"
      >
        <Avatar />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row">
        <motion.div
          variants={fadeIn('down', 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="flex-1 flex flex-col justify-center"
        >
          <h2 className="h2">
            Captiving <span className="text-accent">stories</span> birth
            magnificent designs.
          </h2>
          <p className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            repellat assumenda est quaerat aspernatur sit, modi qui consequuntur
            ea eaque.
          </p>
          <div className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8">
            <div className="flex items-center flex-1 xl:gap-x-6">
              <div className="relative flex flex-col items-center flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={10} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Years of experiens
                </div>
              </div>
              <div className="relative flex flex-col items-center flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={250} duration={7} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Satisfied clients
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        <div className="flex flex-col w-full xl:max-w-[48%] h-[480px] z-10">
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4 select-none">
            {aboutData.map((item, i) => (
              <div
                role="button"
                onClick={() => setIndex(i)}
                key={item.title}
                className={`${
                  index === i &&
                  'text-accent after:w-[100%] after:bg-red-600 after:transition-all after:duration-300'
                }  
                cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
              >
                {item.title}
              </div>
            ))}
          </div>
          <div className=" py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, i) => (
              <motion.div
                variants={fadeIn('up', 0.2)}
                initial="hidden"
                animate="show"
                exit="hidden"
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                key={item.title}
                className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
              >
                <div className="font-light mb-2 md:mb-0">{item.title}</div>
                <div className="hidden md:flex">-</div>
                <div>{item.stage}</div>
                <div className="flex gap-x-4">
                  {item.icons.map((icon) => (
                    <div key={icon} className="text-2xl text-white">
                      <Image src={icon} alt="icon" width={24} height={14} />
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
