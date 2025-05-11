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
import { useState } from "react";
import { profileSchema } from "../../../../schema";
import useApiHandler from "@/hooks/useApiHandler";
import axios from "axios";
import { useRouter } from "next/navigation";
import { FiLoader } from "react-icons/fi";

const ProfileDetails = () => {
  const [loading, setLoading] = useState(false);

  const form = useForm({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      email: "",
      name: "",
      gender: "NA",
      altEmail: "",
      altPhone: "",
      newPassword: "",
    },
  });

  const apiCaller = useApiHandler();
  const router = useRouter();

  const onSubmit = async (data: z.infer<typeof profileSchema>) => {
    setLoading(true);
    const res = await apiCaller("/api/register", axios.post, {
      email: data.email,
      name: data.name,
      gender: data.gender,
      altEmail: data.altEmail,
      altPhone: data.altPhone,
      password: data.newPassword,
    });
    if (res.statusCode === 200) {
      router.push("/home");
      setLoading(false);
    }
    console.log(res);
  };

  const { pending } = useFormStatus();

  const formFields: Array<{
    name: "email" | "name" | "gender" | "altEmail" | "altPhone" | "newPassword";
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
      name: "name",
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
    {
      name: "newPassword",
      label: "New Password",
      type: "password",
      placeholder: "******",
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-6 p-6">
      <div className="bg-white shadow rounded p-6 w-full">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
                          {...field}
                          type={type}
                          placeholder={placeholder}
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
                        {...field}
                        className="bg-white border-1 rounded p-2 w-full"
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
                "Edit Profile"
              )}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default ProfileDetails;
