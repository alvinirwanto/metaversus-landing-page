'use client';

import styles from '../styles'
import { motion } from 'framer-motion'
import { fadeIn } from '../utils/motion'
import Image from 'next/image';

const ExploreCard = ({ id, imgUrl, title, index, active, handleClick }) => (
    <motion.div
        variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
        className={`relative ${active === id ? 'lg:flex-[3.5] flex-[10]' :
            'lg:flex-[0.5] flex-[2]'
            } flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer overflow-clip relative`}
    >
        <Image
            src={imgUrl}
            alt={title}
            width={10000}
            height={10000}
            className='absolute w-full h-full object-cover rounded-[24px]'
        />

        {active !== id && (
            <div className='absolute w-full h-full object-cover rounded-[24px] bg-[#00000067]'>
            </div>
        )}

        {active !== id ? (
            <h3 className='font-semibold sm:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:-rotate-90 lg:origin-[0,0]' >
                {title}
            </h3>
        ) : (
            <div className='absolute bottom-0 p-8 justify-start w-full flex-col rounded-b-[24px] bg-[rgba(0,0,0,0.5)]'>
                <div className={`${styles.flexCenter} w-[60px] h-[60px] rounded-[24px] glassmorphism mb-[16px]`}>
                    <Image
                        height={1500}
                        width={1500}
                        src='/headset.svg'
                        alt='headset'
                        className='w-1/2 h-1/2 object-contain'
                    />
                </div>
                <p className='font-normal text-[16px] leading-[20px] text-white uppercase'>
                    Enter the Metaverse
                </p>
            </div>
        )}
    </motion.div>
);

export default ExploreCard;
