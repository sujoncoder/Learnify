"use client";

import { cn } from '@/lib/utils';
import Link from 'next/link'; // Assuming you're using Next.js for routing
import { buttonVariants } from '../ui/button';

export default function HeroSection() {
    return (
        <section className="h-screen space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32 grainy">
            <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center relative isolate">
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                >
                    <div
                        style={{
                            clipPath:
                                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                        }}
                        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                    />
                </div>
                <span className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium border-2 shadow-lg border-sky-500 animate-pulse font-mono">
                    Welcome to Knowledge Hub
                </span>
                <h1 className="font-heading text-3xl font-bold sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-pink-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                    Start Your Learning Adventure with Us.
                </h1>
                <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
                    “The journey of a thousand miles begins with a single step.”
                </p>
                <div className="flex items-center gap-3 flex-wrap justify-center">
                    <Link
                        href="/courses"
                        className={cn(buttonVariants({ size: "lg" }))}
                    >
                        Discover Courses
                    </Link>
                    <Link
                        href="/register/instructor"
                        className={cn(
                            buttonVariants({
                                variant: "outline",
                                size: "lg",
                            })
                        )}
                    >
                        Become a Mentor
                    </Link>
                </div>
            </div>
        </section>
    );
}
