'use client';

import styles from '../styles'
import { motion } from 'framer-motion'
import { navVariants } from '../utils/motion'
import Image from 'next/image';

const Navbar = () => (
    <motion.nav
        variants={navVariants}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.xPaddings} py-8 relative`}
    >
        <div className='absolute w-[50%] inset-0 gradient-01'>
        </div>

        <div className={`${styles.innerWidth} mx-auto flex justify-between items-center gap-8`}>
            <Image
                src='/search.svg'
                alt='search'
                width={1000}
                height={1000}
                priority
                className='w-[24px] h-[24px] object-contain'
            />
            <h2 className="font-extrabold text-[24px] leading-[30px] text-white">
                METAVERSUS
            </h2>
            <Image
                src='/menu.svg'
                alt='search'
                width={1000}
                height={1000}
                priority
                className='w-[24px] h-[24px] object-contain'
            />
        </div>
    </motion.nav>
);

export default Navbar;
