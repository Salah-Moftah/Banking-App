"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react";
import {
  Form,
} from "@/components/ui/form"

import { z } from "zod"
import CustomInput from "./CustomInput";
import { authFormSchema as formSchema } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { getLoggedInUser, signIn, signUp } from "@/lib/actions/user.action";

const AuthForm = ({ type }: AuthFormProps) => {

  const router = useRouter();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const authFormSchema = formSchema(type);

   // 1. Define your form.
  const form = useForm<z.infer<typeof authFormSchema>>({
    resolver: zodResolver(authFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })
  
  // 2. Define a submit handler.
  const onSubmit = async (data: z.infer<typeof authFormSchema>) => {

    setIsLoading(true);

    try {

      if (type === 'sign-up') {
        const newUser = await signUp(data);

        setUser(newUser)
      }
      if (type === 'sign-in') {
        const response = await signIn({
          email: data.email,
          password: data.password,
        })

        if (response) {
          router.push('/')
        }
      }

    } catch (error) {
      console.log(error);
      
    } finally {
      setIsLoading(false);
    }

    console.log(data)
    setIsLoading(false);
  }

  return (
    <section className="auth-form">
      <header className="flex flex-col gap-5 md:gap-8">
        <Link href="/" className="items-center gap-1 cursor-pointer flex">
          <Image
            src="/icons/logo.svg"
            width={34}
            height={34}
            alt="Horizon logo"
          />
          <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">
            Horizon
          </h1>
        </Link>
        <div className="flex flex-col gap-1 md:gap-3">
          <h1 className="text-24 lg:text-36 font-semibold text-gray-900">
            {user ? "Link Account" : type === "sign-in" ? "Sign In" : "Sign Up"}
            <p className="text-16 font-normal tetx-gray-600">
              {user
                ? 'Link your account to get starting'
                : 'Please enter your details'}
            </p>
          </h1>
        </div>
      </header>
      {user ? (
        <div className="flex flex-col gap-4">
          {/* ToDo */}
        </div>
      ):
        <>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {type === 'sign-up' && (
                <>
                  <div className="flex gap-4">
                    <CustomInput 
                      inputName="firstName"
                      label="First Name"
                      control={form.control}
                      placeholder="Enter your First Name"
                    />
                    <CustomInput 
                      inputName="lastName"
                      label="Last Name"
                      control={form.control}
                      placeholder="Enter your Last Name"
                    />
                  </div>
                  <CustomInput 
                    inputName="address1"
                    label="Address"
                    control={form.control}
                    placeholder="Enter your specific address"
                  />
                  <CustomInput 
                    inputName="city"
                    label="City"
                    control={form.control}
                    placeholder="Enter your city"
                  />
                  <div className="flex gap-4">
                    <CustomInput 
                      inputName="state"
                      label="State"
                      control={form.control}
                      placeholder="Ex: NY"
                    />
                    <CustomInput 
                      inputName="postalCode"
                      label="Postal Code"
                      control={form.control}
                      placeholder="Ex: 12101"
                    />
                  </div>
                  <div className="flex gap-4">
                    <CustomInput 
                      inputName="dateOfBirth"
                      label="Date of Birth"
                      control={form.control}
                      placeholder="YYYY-MM-DD"
                    />
                    <CustomInput 
                      inputName="ssn"
                      label="SSN"
                      control={form.control}
                      placeholder="Ex: 1234"
                    />
                  </div>
                </>
              )}
              <CustomInput 
                inputName="email"
                label="Email"
                control={form.control}
                placeholder="Enter your email"
              />
              <CustomInput 
                inputName="password"
                label="Password"
                control={form.control}
                placeholder="Enter your password"
              />
              <div className="flex flex-col gap-4">
                <Button type="submit" className="form-btn" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 size={20} className="animate-spin"/> &nbsp;
                      Loading...
                    </>
                  ) : type === 'sign-in' ? 'Sign In' : 'Sign Up'
                  }
                </Button>
              </div>
            </form>
          </Form>

          <footer className="flex justify-center gap-1">
            <p className="text-14 font-normal text-gray-600">
              {
                type === 'sign-in' ? "don't have an account" : 'Already have an account?'
              }
            </p>
            <Link href={type === 'sign-in' ? '/sign-up' : '/sign-in'} 
              className="form-link"
            >
              {type === 'sign-in' ? 'Sign Up' : 'Sign In'}
            </Link>
          </footer>
        </>
      }
    </section>
  );
};

export default AuthForm;
