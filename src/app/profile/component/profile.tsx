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

  return (
    <div className="flex flex-col lg:flex-row gap-6 p-6">
      <div className="bg-white shadow rounded p-6 w-full">
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
                name="gender"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Gender</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Male / Female / Other" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="altEmail"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Alternate Email</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="email"
                        placeholder="alternate@example.com"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="altPhone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Alternate Phone</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="tel"
                        placeholder="+91xxxxxxxxxx"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="newPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>New Password</FormLabel>
                    <FormControl>
                      <Input {...field} type="password" placeholder="******" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Button type="submit" className="w-full" disabled={pending}>
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
