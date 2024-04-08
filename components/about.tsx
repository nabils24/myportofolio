"use client";

import React, {useState, useEffect} from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

import { configFirebase } from "@/lib/data"
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

export default function About() {
  const { ref } = useSectionInView("About");

  const app = initializeApp(configFirebase);
  const db = getFirestore(app);

  const [data, setDatas] = useState([]);

  async function getaboutme() {
    const aboutme = collection(db, 'aboutme');
    const aboutmeSnapshot = await getDocs(aboutme);
    let rt = aboutmeSnapshot.docs.map(doc => doc.data())
    setDatas(rt[0]);
  }

  useEffect(() => {
    // Logika atau aksi yang ingin Anda jalankan saat komponen dibuat
    console.log('Komponen dibuat');
    getaboutme();
  }, []);

  useEffect(() => {
    // Logika yang ingin Anda jalankan setelah data diperbarui
    console.log('Data telah diperbarui:', data);
  }, [data]); // Menjalankan efek ini setiap kali data berubah

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <section dangerouslySetInnerHTML={{ __html: data.raw_aboutme }}>

      </section>
    </motion.section>
  );
}
