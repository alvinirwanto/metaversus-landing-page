'use client';

import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import Image from "next/image";

const InsightCard = ({ imgUrl, title, subtitle, index }) => (
    <motion.div
        variants={fadeIn('up', 'spring', index * 0.5, 1)}
        className='flex md:flex-row flex-col gap-4'
    >
        <Image
            src={imgUrl}
            alt='planet-01'
            width={1500}
            height={1500}
            className="md:w-[270px] w-full h-[250px] rounded-[32px] object-cover"
        />

        <div className="w-full flex justify-between items-center">
            <div className="flex-1 md:ml-[62px] flex flex-col max-w-[650px]">
                <h4 className="font-normal lg:text-[32px] text-[26px] text-white">{title}</h4>
                <p className="mt-[16px] font-normal lg:text-[20px] text-[14px] text-secondary-white">{subtitle}</p>
            </div>

            <div className="lg:flex hidden items-center justify-center w-[100px] aspect-square rounded-full bg-transparent border-[1px] border-white">
                <Image
                    src='/arrow.svg'
                    alt="arrow"
                    width={1000}
                    height={1000}
                    className="w-[40%] aspect-square object-contain"
                />
            </div>
        </div>
    </motion.div>
);

export default InsightCard;
