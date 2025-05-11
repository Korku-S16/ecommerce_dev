"use client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { useFormStatus } from "react-dom";
import { useEffect, useState } from "react";
import { profileSchema } from "../../../../schema";
import useApiHandler from "@/hooks/useApiHandler";
import axios from "axios";
import { useRouter } from "next/navigation";
import { FiLoader } from "react-icons/fi";
import { FaPen } from "react-icons/fa";

const ProfileDetails = () => {
  const [loading, setLoading] = useState(false);

  const form = useForm({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      email: "",
      name: "",
      gender: "NA",
      altEmail: "",
      altContact: "",
      newPassword: "",
    },
  });


  const apiCaller = useApiHandler();
  const router = useRouter();
  const [userProfile,setUserProfile] = useState();
 
  const[isProfileEditted, setIsProfileEditted] = useState(false)

  const fetchProfile = async ()=>{
    const url = `api/user/profile/fetch-profile`
    const res = await apiCaller(url,axios.get)
    console.log(res);
    if(res?.statusCode===200){
      setUserProfile(res?.data.accountId)
      console.log(res.data.accountId)
    }
  }

  useEffect(()=>{
   fetchProfile()
  },[isProfileEditted])

  const onSubmit = async (data: z.infer<typeof profileSchema>) => {
    setLoading(true);
    const res = await apiCaller("/api/register", axios.post, {
      // gender, altEmail, altContact
     
      gender: data.gender,
      altEmail: data.altEmail,
      altContact: data.altContact,
    });
    if (res.statusCode === 200) {
      router.push("/home");
      setLoading(false);
    }
    console.log(res);
  };
  const toggleEdit = ()=>{
    setIsProfileEditted(!isProfileEditted)
  }

  const { pending } = useFormStatus();

  const formFields: Array<{
    name: "email" | "fullName" | "gender" | "altEmail" | "altPhone" ;
    label: string;
    type: string;
    placeholder: string;
  }> = [
    {
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "johndoe@gmail.com",
    },
    {
      name: "fullName",
      label: "Name",
      type: "text",
      placeholder: "John Doe",
    },
    {
      name: "altEmail",
      label: "Alternate Email",
      type: "email",
      placeholder: "alternate@example.com",
    },
    {
      name: "altPhone",
      label: "Alternate Phone",
      type: "tel",
      placeholder: "+91xxxxxxxxxx",
    },
    // {
    //   name: "newPassword",
    //   label: "New Password",
    //   type: "password",
    //   placeholder: "******",
    // },
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-6 p-6">
      
      <div className="bg-white shadow rounded p-6 w-full">
        <div className="flex justify-end">
        <Button 
        onClick={toggleEdit}
        variant="outline" className="cursor-pointer"><FaPen ></FaPen></Button>
        </div>
      
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className={`space-y-6 `}>
            <div className="space-y-4">
              {formFields.map(({ name, label, type, placeholder }) => (
                <FormField
                  key={name}
                  control={form.control}
                  name={name}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{label}</FormLabel>
                      <FormControl>
                        <Input
                        disabled={!(name === 'fullName' || name === 'email') && !isProfileEditted || !userProfile}
                        className={`${isProfileEditted?``:`cursor-not-allowed`}`}
                          {...field}
                          type={type}
                          placeholder={placeholder}
                          value={userProfile ? userProfile[name] || "" : ""}

                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              ))}
              <FormField
                control={form.control}
                name="gender"
                
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Gender</FormLabel>
                    <FormControl>
                      <select
                      disabled={!isProfileEditted}
                      // className={`${isProfileEditted?``:`cursor-not-allowed`}`}
                        {...field}
                        className={`${isProfileEditted?``:`cursor-not-allowed`} bg-white border-1 rounded p-2 w-full `}
                        // defaultValue={userProfile}
                      >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                        <option value="NA">Prefer Not to Say</option>
                      </select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {
              isProfileEditted?(
                <Button
              type="submit"
              className="w-full"
              disabled={pending || loading}
            >
              {loading ? (
                <>
                  Loading <FiLoader className="animate-spin ml-2" />
                </>
              ) : (
                "Save Profile"
              )}
            </Button>
              ):("")
            }
          </form>
        </Form>
      </div>
    </div>
  );
};

export default ProfileDetails;
