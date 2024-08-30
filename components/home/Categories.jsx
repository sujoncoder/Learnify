"use client";

import Image from "next/image";
import Link from "next/link";
import { SectionTitle } from "../SectionTitle";

const Categories = ({ categories }) => {
    return (
        <section className="container space-y-8 py-12 md:py-16 lg:py-24">
            <div className="flex items-center justify-between mb-8">
                <SectionTitle className="text-3xl font-extrabold text-gray-900">Top Categories</SectionTitle>
            </div>
            <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {categories.map((category) => (
                    <div
                        key={category.id}
                        className="rounded-lg bg-slate-100 border hover:shadow hover:scale-105 duration-300"
                    >
                        <Link href={`/categories/${category.id}`} className="flex flex-col justify-center items-center p-4">
                            <Image
                                src={`/assets/images/categories/${category.thumbnail}`}
                                alt={category.title}
                                width={80}
                                height={80}
                                className="object-cover rounded-t-lg"
                            />
                            <div className="p-4 text-center">
                                <h3 className="text-lg font-semibold text-gray-800">{category.title}</h3>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Categories;
