'use client'
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const page = () => {
    const router = useRouter()
    const [user, setuser] = useState('')
    const [pass, setpass] = useState('')
    const loginuser = async (e) => {
        e.preventDefault();
        const response = await signIn('credentials', {
            redirect: false,
            email: user,
            password: pass
        });
        if (response.ok) {
            router.push('/')
        } else {
            console.log(response.error);
        }
    }
    return (
        <>
            <form onSubmit={loginuser}>
                <label htmlFor="">name</label>
                <input type="text" value={user} onChange={(e) => setuser(e.target.value)} name="" id="" />
                <label htmlFor="">pass</label>
                <input type="text" value={pass} onChange={(e) => setpass(e.target.value)} name="" id="" />
                <button type='submit'>login</button>
            </form>
        </>
    )
}

export default page