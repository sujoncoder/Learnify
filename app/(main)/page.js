import { SectionTitle } from "@/components/SectionTitle";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

import { getCourseList } from "@/queries/courses";

import Categories from "@/components/home/Categories";
import FAQ from "@/components/home/FAQ";
import HeroSection from "@/components/home/HeroSection";
import InstructorSection from "@/components/home/InstructorSection";
import StatsSection from "@/components/home/StatsSection";
import TeamSection from "@/components/home/TeamSection";
import { getCategories } from "@/queries/categories";
import CourseCard from "./courses/_components/CourseCard";

const HomePage = async () => {
    const courses = await getCourseList();
    const categories = await getCategories();

    // Slice the first 4 courses from the list
    const topCourses = courses.slice(0, 4);

    return (
        <>
            <HeroSection />
            <StatsSection />
            {/* Categories Section */}
            <Categories categories={categories} />

            {/* Courses */}
            <section
                id="courses"
                className="container space-y-6   md:py-12 lg:py-24"
            >
                <div className="flex items-center justify-between">
                    <SectionTitle>Courses</SectionTitle>
                    <Link
                        href={"/courses"}
                        className=" text-sm font-medium  hover:opacity-80 flex items-center gap-1"
                    >
                        Browse All <ArrowRightIcon className="h-4 w-4" />
                    </Link>
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4">
                    {topCourses.map((course) => {
                        return <CourseCard key={course.id} course={course} />;
                    })}
                </div>
            </section>

            {/* Intructors */}
            <InstructorSection />
            {/* TeamSection */}
            <TeamSection />
            {/* FAQ */}
            <FAQ />
        </>
    );
};
export default HomePage;
