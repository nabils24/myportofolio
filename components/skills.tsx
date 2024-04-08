"use client";

import React, {useState, useEffect} from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

import { configFirebase } from "@/lib/data"
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  const app = initializeApp(configFirebase);
  const db = getFirestore(app);

  const [data, setDatas] = useState([]);

  async function getskils() {
    const skils = collection(db, 'skils');
    const skilsSnapshot = await getDocs(skils);
    let rt = skilsSnapshot.docs.map(doc => doc.data())
    setDatas(rt);
  }

  useEffect(() => {
    // Logika atau aksi yang ingin Anda jalankan saat komponen dibuat
    console.log('Komponen dibuat');
    getskils();
  }, []);

  useEffect(() => {
    // Logika yang ingin Anda jalankan setelah data diperbarui
    console.log('Data Skils telah diperbarui:', data);
  }, [data]); // Menjalankan efek ini setiap kali data berubah

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {data.map((skill, index) => (
          <motion.li
            className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill.name}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
