import React from 'react'
import { useRouter } from 'next/router';
import { useState,useEffect } from "react";
import Head from 'next/head'
type Props = {}

export default function Index({}: Props) {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      console.log('Hello, World!')
      router.push("/index2")
    }, 500);
  })
  
  return (
    <div>
      
        <div id="loader">
            <div id="shadow"></div>
            <div id="box"></div>
            
        </div>


    </div>
  )
}



/*export async function getServerSideProps(){
    await new Promise((resolve)=>{
      setTimeout(resolve,5000);
      
    });
    return{
      props:{},
    };
}*/