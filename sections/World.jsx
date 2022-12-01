'use client';

import Image from 'next/image';
import styles from '../styles'
import { motion } from 'framer-motion'
import { staggerContainer, fadeIn } from '../utils/motion'
import { TitleText, TypingText } from '../components';


const World = () => (
    <section className={`${styles.paddings} relative z-10`}>
        <motion.div
            variants={staggerContainer}
            initial='hidden'
            whileInView='show'
            viewport={{ once: 'false', amount: 0.25 }}
            className={`${styles.innerWidth} mx-auto flex flex-col`}
        >
            <TypingText title='| People on the World' textStyles='text-center' />

            <TitleText
                title={
                    <>
                        Track friends around you and invite then to play together in the same world
                    </>}
                textStyles='text-center'

            />

            <motion.div
                variants={fadeIn('up', 'tween', 0.3, 1)}
                className='relative mt-[68px] flex w-full h-[300px] md:h-[550px] mb-[5rem]'
            >
                <Image
                    src='/map.png'
                    alt='map'
                    width={2000}
                    height={2000}
                    className='w-full h-full object-contain'
                />

                <div className='absolute
                w-[40px] p-[3px] bottom-[5rem] right-[1rem]
                md:bottom-[12rem] md:right-[4rem] md:w-[50px]
                xl:bottom-20 xl:right-20 xl:w-[70px] aspect-square md:p-[6px] rounded-full bg-[#5d6680]'>
                    <Image
                        src='/people-01.png'
                        alt='people'
                        width={1500}
                        height={1500}
                        className='w-full h-full'
                    />
                </div>

                <div className='absolute 
                w-[40px] p-[3px] top-[10rem] left-[3rem]
                md:top-[12rem] md:left-20 md:w-[50px] xl:w-[70px] aspect-square md:p-[6px] rounded-full bg-[#5d6680]'>
                    <Image
                        src='/people-02.png'
                        alt='people'
                        width={1500}
                        height={1500}
                        className='w-full h-full'
                    />
                </div>

                <div className='absolute top-1/2 left-[45%] md:w-[50px] xl:w-[70px] aspect-square p-[6px] rounded-full bg-[#5d6680]'>
                    <Image
                        src='/people-03.png'
                        alt='people'
                        width={1500}
                        height={1500}
                        className='w-full h-full'
                    />
                </div>

                <div className='absolute 
                xl:-top-[90px] xl:right-[300px] xl:w-[400px] 
                md:top-[5rem] md:right-[5rem] md:w-[250px] h-auto'>
                    <Image
                        src='/people-group-01.svg'
                        alt='people'
                        width={1500}
                        height={1500}
                        className='w-full h-full'
                    />
                </div>

                <div className='absolute 
                top-0 right-0
                md:bottom-[7rem] md:w-[200px]
                xl:top-[30%] xl:left-[100px] xl:w-[350px] h-auto'>
                    <Image
                        src='/people-group-02.svg'
                        alt='people'
                        width={1500}
                        height={1500}
                        className='w-full h-full'
                    />
                </div>
            </motion.div>
        </motion.div>
    </section>
);

export default World;
