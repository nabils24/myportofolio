"use client";

import React, { use, useEffect, useState } from "react";
import Image from 'next/image';
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

// import firebase
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";


import { configFirebase } from "@/lib/data"
import { initializeApp } from 'firebase/app';
import { Session } from "inspector";


export default function Contact() {
  const { ref } = useSectionInView("Contact");

  let [user, setUser] = useState([]);
  let [isLogin, setIsLogin] = useState(false);
  let [textLogin, setTextLogin] = useState('null');

  async function signin() {
    const app = initializeApp(configFirebase);
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      // save to sessionStorage
      sessionStorage.setItem('user', JSON.stringify(result.user));
      setUser(result.user);
      checkIfSignin();
    } catch (error) {
      let err = JSON.stringify(error);
      let err2 = JSON.parse(err);
      toast.error(err2.code);
    }
  }

  async function signout() {

    const app = initializeApp(configFirebase);
    const auth = getAuth(app);

    await signOut(auth).then(() => {
      sessionStorage.setItem('user', "null");
      setUser([]);
      setIsLogin(false);
      toast.success("Sign Out Success");
    }).catch((error) => {
      toast.error(error);
    });



  }

  async function checkIfSignin() {
    if (sessionStorage.getItem('user') !== "null") {
      setIsLogin(true);
      setTextLogin('Login');
    } else {
      setIsLogin(false);
      setTextLogin('Not Login');
    }
  }
  useEffect(() => {
    if (sessionStorage.getItem('user') !== "null") {
      console.log('user is login');
      checkIfSignin();
    } else {
      sessionStorage.setItem('user', "null");
      setIsLogin(false);
      setTextLogin('Not Login');
    }

  }, [])

  useEffect(() => {
    if (sessionStorage.getItem('user') !== "null") {
      console.log('user is login with effect');
      checkIfSignin();
    } else {
      sessionStorage.setItem('user', "null");
      setIsLogin(false);
      console.log('Not login with effect');
      setTextLogin('Not Login');
    }

  }, [isLogin])


  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Testing Autentikasi | {textLogin} </SectionHeading>

      <div className="mt-10 flex flex-col dark:text-black">
        <div hidden={!isLogin}>
          <div className="flex flex-col" >
            <span className="text-gray-700 -mt-6 dark:text-white/80 text-center flex flex-col">
              <div className="flex justify-center items-center">
                <Image src={user.photoURL} alt="My Image" width={100} height={150} className="rounded-lg" />
              </div>
              Nama = {user.displayName} <br />
              Email = {user.email} <br />

            </span>
            <button onClick={signout} hidden={!isLogin} className="py-4 mt-3 rounded-lg dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none">
              <h2 className="font-bold">Sign Out</h2>
            </button>
          </div>
        </div>

        <button onClick={signin} hidden={isLogin} className="py-4 mt-3 rounded-lg dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none">
          <h2 className="font-bold">Google</h2>
        </button>
      </div>
      {/* <form
        className="mt-10 flex flex-col dark:text-black"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully!");
        }}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form> */}
    </motion.section>
  );
}
