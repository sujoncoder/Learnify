"use client"

import Link from "next/link";

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

import { Logo } from "@/components/logo";
import Waiting from "@/components/Waiting";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

export function SignupForm({ role }) {
  const [loading, setLoading] = useState(false)

  const router = useRouter();


  async function onSubmit(event) {
    event.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData(event.currentTarget);
      const firstName = formData.get("first-name");
      const lastName = formData.get("last-name");
      const email = formData.get("email");
      const password = formData.get("password");
      const confirmPassword = formData.get("confirmPassword");

      if (password !== confirmPassword) {
        toast.error("Passwords don't match!");
        setLoading(false);
        return;
      }

      const userRole = role === "student" || role === "instructor" ? role : "student";

      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          password,
          userRole,
        }),
      });

      if (response.status === 201) {
        toast.success("User created successfully!");
        router.push("/login");
      } else if (response.status === 409) {
        toast.error("Email already in use!");
      } else {
        toast.error("Registration failed. Please try again.");
      }
    } catch (error) {
      toast.error(error.message);
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
        <CardHeader>
          <CardTitle className="text-3xl text-center font-semibold text-gray-800">Sign Up</CardTitle>
          <CardDescription>
            Enter your information to create an account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={onSubmit}>
            <div className="grid gap-3">
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="first-name">First name</Label>
                  <Input id="first-name" name="first-name" placeholder="Sujon" required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="last-name">Last name</Label>
                  <Input id="last-name" name="last-name" placeholder="Sheikh" required />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="ss@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" name="password" type="password" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input id="confirmPassword" name="confirmPassword" type="password" />
              </div>
              <Button type="submit" className="w-full py-3 bg-blue-500 text-lg text-white rounded hover:bg-blue-600 active:bg-blue-700 duration-300 shadow">
                {loading ? <Waiting /> : "Create an account"}
              </Button>
            </div>
          </form>
          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link href="/login" className="text-blue-500 hover:underline">
              Sign in
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
