"use client"


import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from 'framer-motion';

export default function Header(){
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const toggleMwenu = () => {
        setIsOpen((state) => !state)
    }
    
    useEffect(() => {
        if (isOpen) {
          document.body.classList.add('disable-scroll');
        } else {
          document.body.classList.remove('disable-scroll');
        }
    
        return () => {
          // Clean up by removing the class when the component unmounts
          document.body.classList.remove('disable-scroll');
        };
      }, [isOpen]);


    return (
        <header className={`w-full ${isOpen ? "bg-purple" : "bg-black"} md:bg-black flex justify-between py-[1.375rem] px-[1.5rem] h-[12vh] md:justify-center align-middle md:h-fit`}>
            <div className='block md:hidden'>
                <Link href='/'>
                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="35" viewBox="0 0 21 35" fill="none">
                    <path d="M10.3706 3.92195V1.34831M7.5907 24.7819C8.27712 24.8666 9.77964 25.0348 10.2984 25.0297C10.8172 25.0246 12.5885 24.8285 13.4093 24.731M6.8788 7.18875C7.73808 7.34117 9.68291 7.62988 10.5879 7.56533C11.4929 7.50077 13.4995 7.25151 14.3897 7.13495M7.32392 24.229C6.26683 24.2111 4.01913 24.2478 3.48503 24.5384C2.95093 24.8289 1.87778 25.4484 1.40796 25.7219L1.14834 25.6815L1 23.0858C1.11125 22.0771 1.76033 20.9877 2.29815 20.517C3.154 19.6043 4.03763 19.3455 5.07995 19.1183M13.6761 24.229C14.7332 24.2111 16.9809 24.2478 17.515 24.5384C18.0491 24.8289 19.1222 25.4484 19.592 25.7219L19.8517 25.6815L20 23.0858C19.8888 22.0771 19.2397 20.9877 18.7019 20.517C17.846 19.6043 16.9624 19.3455 15.9201 19.1183M10.3871 3.91414C8.13491 5.89319 4.61716 8.74256 3.82781 12.2834C3.01161 15.9447 6.6554 22.0833 7.97055 25.7672C8.48017 25.9103 9.69669 26.1893 10.4858 26.1606C11.2749 26.132 12.4256 25.9341 12.9024 25.8387C14.6942 21.8568 17.7358 14.9659 16.9958 12.2834C15.4674 6.74346 13.0013 6.0601 10.3871 3.91414ZM10.9043 1.26123C10.9043 1.40551 10.6832 1.52247 10.4106 1.52247C10.138 1.52247 9.91699 1.40551 9.91699 1.26123C9.91699 1.11696 10.138 1 10.4106 1C10.6832 1 10.9043 1.11696 10.9043 1.26123ZM12.6903 12.1633C12.6903 13.0626 11.6303 13.7916 10.3229 13.7916C9.01537 13.7916 7.95544 13.0626 7.95544 12.1633C7.95544 11.264 9.01537 10.5349 10.3229 10.5349C11.6303 10.5349 12.6903 11.264 12.6903 12.1633ZM10.8642 17.3916C10.8642 17.6053 10.6432 17.7785 10.3706 17.7785C10.098 17.7785 9.87698 17.6053 9.87698 17.3916C9.87698 17.1779 10.098 17.0046 10.3706 17.0046C10.6432 17.0046 10.8642 17.1779 10.8642 17.3916ZM10.8165 19.1183C10.8165 19.332 10.5955 19.5052 10.3229 19.5052C10.0503 19.5052 9.82927 19.332 9.82927 19.1183C9.82927 18.9046 10.0503 18.7313 10.3229 18.7313C10.5955 18.7313 10.8165 18.9046 10.8165 19.1183ZM10.8165 15.4254C10.8165 15.6391 10.5955 15.8123 10.3229 15.8123C10.0503 15.8123 9.82927 15.6391 9.82927 15.4254C9.82927 15.2117 10.0503 15.0384 10.3229 15.0384C10.5955 15.0384 10.8165 15.2117 10.8165 15.4254ZM9.41258 31.5138C8.80887 30.7257 7.64532 28.9464 7.82074 28.1334C8.04002 27.1173 9.70816 26.6956 10.2515 26.7025C10.7948 26.7094 12.4724 26.9237 12.9872 28.4445C12.949 29.9999 11.3286 31.5575 10.4707 33L9.95599 29.993L9.41258 31.5138Z" stroke="white"/>
                    </svg>
                </Link>
            </div>
            <div className='block md:hidden'>
            <AnimatePresence>
            <motion.svg onClick={toggleMwenu} xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 100 100">
            <motion.line
                initial={{ x2: 55, x1: 45, strokeWidth: 5 }}
                animate={{ x2: isOpen ? 65 : 55, x1: isOpen ? 35 : 45 }}
                stroke="white" stroke-width="5"
                strokeLinecap="round" // Set linecap to round
                y1="30" y2="30"
            />
            <motion.line
                initial={{ x2: 60, x1: 40, strokeWidth: 5  }}
                x1="40" y1="50" x2="60" y2="50"
                stroke="white" stroke-width="5"
                strokeLinecap="round" // Set linecap to round
            />
            <motion.line
                initial={{ x2: 65, x1: 35, strokeWidth: 5  }}
                animate={{ x2: isOpen ? 55 : 65, x1: isOpen ? 45 : 35 }}
                stroke="white" stroke-width="5"
                strokeLinecap="round" // Set linecap to round
                y1="70" y2="70"
            />
            </motion.svg>
            </AnimatePresence>
            <AnimatePresence>
            <motion.div layout
                initial={{ opacity: 0}}
                animate={{opacity: isOpen ? 1 : 0}}
                 className={`flex bg-purple top-[12vh] left-0 absolute w-full flex-col h-[91.2vh] justify-around text-center items-center p-2 pb-10 text-[2rem]`}>
            <Link className='text-white no-underline'  onClick={toggleMwenu} href='/'>Home</Link>
            <Link className='text-white no-underline'  onClick={toggleMwenu} href='/'>About</Link>
            <Link className='text-white no-underline'  onClick={toggleMwenu} href='/'>Projects</Link>
            <Link className='text-white no-underline'  onClick={toggleMwenu} href='/'>Contact</Link>
            <div></div>
            </motion.div>
            </AnimatePresence>
            </div>
            <div className='hidden md:flex justify-around font-medium gap-[20px] text-[1rem] text-white align-text-bottom'>
                <Link className='hover' href='/'>Home</Link>
                <svg className='m-auto' xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="8" fill="#5544DC"/>
                </svg>
                <Link className='hover' href='/'>About</Link>
                <svg className='m-auto' xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="8" fill="#5544DC"/>
                </svg>
                <Link className='hover' href='/'>Projects</Link>
                <svg className='m-auto' xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="8" fill="#5544DC"/>
                </svg>
                <Link className='hover' href='/'>Contact</Link>
            </div>
        </header>
    )
}