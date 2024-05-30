'use client'
import Privateroute from "@/components/Privateroute";
import { getCategory } from "@/redux/slices/category/GetCategory";
import { signOut } from "next-auth/react";
import Image from "next/image";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const dispatch = useDispatch()
  const { data, isloading, iserror } = useSelector((item) => item.getCategoryApi)
  useEffect(() => {
    console.log(data, iserror, isloading)
    dispatch(getCategory('working'))
  }, [dispatch])

  return (
    <>
      <Privateroute>
        {isloading && 'loading'}
        {iserror && iserror}
        {data?.data?.map((item) => (
          item.name
        ))}
        <button onClick={() => signOut({ callbackUrl: '/login' })}>logout</button>
      </Privateroute>
    </>
  );
}
