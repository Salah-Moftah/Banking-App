'use client';

import { Button } from "@/components/ui/button"
import Image from "next/image"
import {  useRouter } from "next/navigation"

const NotFound = () => {

  const router =   useRouter();

  const handleBackToHome = () => {
    router.push('/');
  }

  return (
    <div className="w-full h-screen justify-center items-center flex">
      <div className="flex flex-col items-center">
        <Image 
          src='/icons/error404.png'
          alt='error404'
          width={500}
          height={500}
        />
        <div className="text-3xl font-bold mb-8">Page not found !</div>
        <Button type="submit" className="form-btn" onClick={handleBackToHome}>
          Back to home
        </Button>
      </div>
    </div>
  )
}

export default NotFound