'use client';

import {useEffect} from "react";

export default function InParty() {
  useEffect(()=>{
    fetch('/api/party/join').then(()=>{
      console.log('joined')
    })

    window.addEventListener('blur', ()=>{
      fetch('/api/party/increase')
    })

    window.addEventListener('focus', ()=>{
      fetch('/api/party/decrease')
    })
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
    </main>
  )
}
