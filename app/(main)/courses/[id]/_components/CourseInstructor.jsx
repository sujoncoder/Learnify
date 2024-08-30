import { getCourseDetailsByInstructor } from "@/queries/courses";
import { MessageSquare, Presentation, Star, UsersRound } from "lucide-react";
import Image from "next/image";

const CourseInstructor = async ({ course }) => {
    const instructor = course?.instructor;

    // Handle cases where instructor might be null or undefined
    if (!instructor) {
        return (
            <div className="bg-gray-50 rounded-md p-8">
                <p className="text-gray-600">Instructor details not available.</p>
            </div>
        );
    }

    const fullName = `${instructor.firstName} ${instructor.lastName}`;

    let courseDetailsByInstructor = {};
    try {
        // Fetch course details if instructor ID is present
        if (instructor._id) {
            courseDetailsByInstructor = await getCourseDetailsByInstructor(instructor._id.toString());
        }
    } catch (error) {
        console.error("Failed to fetch course details:", error);
    }

    return (
        <div className="bg-gray-50 rounded-md p-8">
            <div className="md:flex md:gap-x-5 mb-8">
                <div className="h-[310px] w-[270px] max-w-full flex-none rounded mb-5 md:mb-0">
                    <Image
                        src={instructor?.profilePicture}
                        alt={fullName}
                        className="w-full h-full object-cover rounded"
                        width={500}
                        height={700}
                    />
                </div>
                <div className="flex-1">
                    <div className="max-w-[300px]">
                        <h4 className="text-[34px] font-bold leading-[51px]">
                            {fullName}
                        </h4>
                        <div className="text-gray-600 font-medium mb-6">
                            {instructor?.designation}
                        </div>
                        <ul className="list space-y-4">
                            <li className="flex items-center space-x-3">
                                <Presentation className="text-gray-600" />
                                <div>{courseDetailsByInstructor.courses || 0} Course(s)</div>
                            </li>
                            <li className="flex space-x-3">
                                <UsersRound className="text-gray-600" />
                                <div>{courseDetailsByInstructor.enrollments || 0} Student(s) Learned</div>
                            </li>
                            <li className="flex space-x-3">
                                <MessageSquare className="text-gray-600" />
                                <div>{courseDetailsByInstructor.reviews || 0} Review(s)</div>
                            </li>
                            <li className="flex space-x-3">
                                <Star className="text-gray-600" />
                                <div>{courseDetailsByInstructor.ratings || 0} Average Rating</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <p className="text-gray-600">
                {instructor.bio || "No bio available."}
            </p>
        </div>
    );
};

export default CourseInstructor;
