import { EnrollCourse } from "@/components/EnrollCourse";
import NoFound from "@/components/NoFound";
import { formatPrice } from "@/lib/formatPrice";
import { getCategoryDetails, getCoursesByCategory } from "@/queries/categories";
import { BookOpen } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


const CategoryDetails = async ({ params: { id } }) => {
    const courses = await getCoursesByCategory(id);
    const categoryDetails = await getCategoryDetails(id);

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
                Courses in <span className="text-blue-600">{categoryDetails?.title}</span> Category
            </h1>

            {/* Display category description */}
            {categoryDetails.description && (
                <p className="text-gray-700 text-center mb-8 text-lg max-w-3xl mx-auto">
                    {categoryDetails.description}
                </p>
            )}

            {/* Check if there are courses in the category */}
            {courses.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {courses.map((course) => (
                        <div key={course?.id} className="group hover:shadow-sm transition overflow-hidden border rounded-lg p-3 h-full">
                            <Link href={`/courses/${course?.id}`}>
                                <div>
                                    <div className="relative w-full aspect-video rounded-md overflow-hidden">
                                        <Image
                                            src={`/assets/images/courses/${course?.thumbnail}`}
                                            alt={course?.title}
                                            className="object-cover"
                                            fill
                                        />
                                    </div>
                                    <div className="flex flex-col pt-2">
                                        <div className="text-lg md:text-base font-medium group-hover:text-sky-700 line-clamp-2">
                                            {course?.title}
                                        </div>
                                        <p className="text-xs text-muted-foreground">
                                            {course?.category?.title}
                                        </p>
                                        <div className="my-3 flex items-center gap-x-2 text-sm md:text-xs">
                                            <div className="flex items-center gap-x-1 text-slate-500">
                                                <div>
                                                    <BookOpen className="w-4" />
                                                </div>
                                                <span>{course?.modules?.length} Chapters</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <div className="flex items-center justify-between mt-4">
                                <p className="text-md md:text-sm font-medium text-slate-700">
                                    {formatPrice(course?.price)}
                                </p>
                                <EnrollCourse asLink={true} courseId={course?.id} />
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <NoFound />
            )}
        </div>
    );
};

export default CategoryDetails;
