"use client"

import { useState } from "react";
import {AiOutlineCheck} from 'react-icons/ai';
import { motion, AnimatePresence } from "framer-motion";



export default function ContactForm(){

    const [email, setEmail] = useState<String>('')
    const [message, setMessage] = useState<String>('')
    const [name, setName] = useState<String>('')
    const [sent, setSent] = useState<boolean>(false)


    const endpoint = process.env.NEXT_PUBLIC_ENDPOINT as string
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const data = { email, message, name }
        const fetchPromise = fetch(endpoint, {
          method: 'POST',
          mode: 'cors',
          cache: 'no-cache',
          body: JSON.stringify(data)
        });
        fetchPromise
          .then(response => {
              response.json()
              setSent(true)
            })
          .then(data => {
            console.log(data); // handle response, catch errors
        })
      }





    return (
        <section className='w-full max-w-[600px]'>
        <form action={endpoint} onSubmit={handleSubmit} method="POST" className={`flex flex-col justify-center w-full`}>
            <label htmlFor="">Name</label>
            <input onChange={(e) => setName(e.target.value)} className='border-2 border-black w-full p-1 bg-gray' type="text" required />
            <label htmlFor="">Email</label>
            <input onChange={(e) => setEmail(e.target.value)} className='border-2 border-black w-full p-1 bg-gray' type="email" required />
            <label htmlFor="">Message</label>
            <textarea onChange={(e) => setMessage(e.target.value)} className='border-2 border-black w-full p-1 bg-gray' name="" id="" cols={10} rows={10} required></textarea>
            <button
            className='bg-purple w-[9.45569rem] h-[3.26763rem] cursor-pointer mt-[24px]'>
            <AnimatePresence>
            {sent ? (
                <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                >
                    <div className='border-2 border-white w-[9.45569rem] h-[3.26763rem] relative left-2 top-2 flex justify-center z-0 hover:left-1 hover:top-1 duration-100'>
                        <AiOutlineCheck className='self-center text-lg' />
                    </div>
                </motion.div>
                ) : (
                <motion.span
                layout
                key="button"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ duration: 0.5 }}
                >
                    <div className='border-2 border-white w-[9.45569rem] h-[3.26763rem] relative left-2 top-2 flex justify-center z-0 hover:left-1 hover:top-1 duration-100'>
                    <p className='text-white self-center text-md'>Submit</p>
                    </div>
                </motion.span>
            )}
            </AnimatePresence>
            </button>
            </form>
    </section>
    )
}