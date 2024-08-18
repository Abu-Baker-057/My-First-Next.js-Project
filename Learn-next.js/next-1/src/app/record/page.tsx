'use client'

import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

function Recordpage() {
    console.log("It is Client side")
    const router = useRouter();

    const backclickhandle = () => {
        console.log("It is back click button")
        router.back();
    }

    const loginclickhandle = () => {
        console.log("It is login button")
        if(Math.random() > 0.003) {
            router.push("/dashboard")
        } else {
            alert("Login failed")
        }
    }
  return (
    <div>
        <div>
            <button className='bg-green-300 m-5 p-2' onClick={backclickhandle}>Back</button>
        </div>

        <div>
            <input type='text' placeholder='Username' className='m-5 p-2'></input>
        </div>

        <div>
            <button className='bg-blue-100 p-2 m-5' onClick={loginclickhandle}>Login</button>
        </div>
    </div>
  )
}

export default Recordpage
