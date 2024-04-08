"use client";

import React, {useState, useEffect} from "react";

import { configFirebase } from "@/lib/data"
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';



export default function Footer() {

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
    console.log('Data dibuat - Footer');
    getaboutme();
  }, []);

  useEffect(() => {
    // Logika yang ingin Anda jalankan setelah data diperbarui
    console.log('Data telah diperbarui:', data);
  }, [data]); // Menjalankan efek ini setiap kali data berubah

  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; 2030 {data.username}. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> built with
        React & Next.js.
      </p>
    </footer>
  );
}
