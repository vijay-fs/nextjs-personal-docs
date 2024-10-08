"use client"
import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import Link from "next/link";
import CustomCard from "@/components/custom/card";

const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6).max(50),
});

const Login = () => {
    const router = useRouter();
    const [error, setError] = useState<string | null>(null);

    const form = useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit = async (data: z.infer<typeof loginSchema>) => {
        const res = await signIn("credentials", {
            redirect: false,
            email: data.email,
            password: data.password,
        });

        if (res?.error) {
            setError(res.error);
            return;
        }

        form.reset();
        router.replace("/");
    };

    return (
        <>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 max-w-sm md:max-w-md w-full mx-auto px-4 ">
                    <CustomCard
                        title="Log into your account"
                        content={<>
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input type="email" placeholder="email@example.com" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )} />
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Password</FormLabel>
                                        <FormControl>
                                            <Input type="password" placeholder="Password" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )} />
                        </>}
                        footer={<div className="flex flex-col gap-4 mx-auto">
                            {error && <p className="text-white text-center">{error}</p>}
                            <Button type="submit" variant="outline" className="mx-auto">
                                Login
                            </Button>
                            <p className="text-center text-xs">
                                Don't have an account?{" "}
                                <Link href="/register">
                                    <Button variant="ghost">Register</Button>
                                </Link>
                            </p>
                        </div>} className={undefined} />
                </form >
            </Form >
        </>


    );
};

export default Login;
