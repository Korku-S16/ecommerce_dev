"use client";

import CardWrapper from "./card-wrapper";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { z } from "zod";
import { useFormStatus } from "react-dom";
import { useState } from "react";
import { RegisterSchema } from "../../../schema";
import useApiHandler from "@/hooks/useApiHandler";
import axios from "axios";
import { useRouter } from "next/navigation";
import { FiLoader } from "react-icons/fi";

const RegisterForm = () => {
    const [loading, setLoading] = useState(false);
    const form = useForm({
      resolver: zodResolver(RegisterSchema),
      defaultValues: {
        email: "",
        name: "",
        password: "",
        confirmPassword: "",
      },
    });

    const apiCaller = useApiHandler();
    const router = useRouter()
    const onSubmit = async (data: z.infer<typeof RegisterSchema>) => {
      setLoading(true)
      const res = await apiCaller("/api/register",axios.post,{email:data.email, name:data.name, password:data.password })
      if(res.statusCode===200){
          router.push('/auth/login')
          setLoading(false)   
      }
      
      console.log(res);
    };
  
    const { pending } = useFormStatus();
    return (
      <CardWrapper
        label="Create an account"
        title="Register"
        backbuttonhref="/auth/login"
        backbuttonlabel="Already have an account? Login here."
      >
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="email"
                        placeholder="johndoe@gmail.com"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="John Doe" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input {...field} type="password" placeholder="******" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl>
                      <Input {...field} type="password" placeholder="******" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button type="submit" className="w-full" disabled={pending}>
              {loading ? <>
              Loading <FiLoader className=" animate-spin "/>
              </>
               : "Register"}
            </Button>
          </form>
        </Form>
      </CardWrapper>
    );
  };
export default RegisterForm
