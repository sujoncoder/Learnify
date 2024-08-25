"use client";

import { ceredntialLogin } from "@/app/actions";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Waiting from "@/components/Waiting";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import SocialLogins from "./SocialLogins";

export function LoginForm() {
  const [loading, setLoading] = useState(false)

  const router = useRouter();

  async function onSubmit(event) {
    event.preventDefault();
    setLoading(true)

    try {
      const formData = new FormData(event.currentTarget);
      const response = await ceredntialLogin(formData);

      if (!!response.error) {
        toast.error(response.error);
      } else {
        toast.success("User login successfull.")
        router.push("/courses");
      }
    } catch (error) {
      toast.error("User wrong credential!")
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Link href="/" className="mb-10 border-2 border-slate-500 rounded-full p-3">
        <Logo className="animate-pulse" />
      </Link>
      <Card className="mx-auto max-w-sm w-full rounded-lg border shadow bg-white p-2">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-semibold text-gray-800">Login</CardTitle>
          <CardDescription className="text-gray-500 mt-2">
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={onSubmit}>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email" className="text-gray-700">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  className="p-3 border rounded-lg focus:ring focus:ring-blue-200 transition-shadow duration-300"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password" className="text-gray-700">Password</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="p-3 border rounded-lg focus:ring focus:ring-blue-200 transition-shadow duration-300"
                />
              </div>
              <Button
                type="submit"
                className="w-full py-3 bg-blue-500 text-lg text-white rounded hover:bg-blue-600 active:bg-blue-700 duration-300 shadow"
              >
                {loading ? <Waiting /> : "Login"}
              </Button>
            </div>
          </form>
          <div className="mt-3 text-center text-gray-600 text-sm">
            <p>
              New to here?{" "}
              <Link href="/register/instructor" className="hover:underline text-blue-600 hover:text-blue-800">
                Instructor
              </Link>{" "}
              or{" "}
              <Link href="/register/student" className="hover:underline text-blue-600 hover:text-blue-800">
                Student
              </Link>
            </p>
          </div>
        </CardContent>
        <SocialLogins />
      </Card>
    </div>
  );
}
