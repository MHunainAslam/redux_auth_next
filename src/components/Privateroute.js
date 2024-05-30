import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'

const Privateroute = ({ children }) => {
    const { data: session, status } = useSession()
    const router = useRouter()

    useEffect(() => {
        if (status === 'loading') return;
        if (status === 'unauthenticated') {
            router.push('/login')
        }
    }, [session, router, status])
    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (status === 'authenticated') {
        return children;
    }
    return null;
}

export default Privateroute