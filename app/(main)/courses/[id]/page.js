import { replaceMongoIdInArray } from "@/lib/convertData";
import { getCourseDetails } from "@/queries/courses";
import CourseDetails from "./_components/CourseDetails";
import CourseDetailsIntro from "./_components/CourseDetailsIntro";
import Testimonials from "./_components/Testimonials";

const SingleCoursePage = async ({ params: { id } }) => {
  const course = await getCourseDetails(id);
  return (
    <>
      <CourseDetailsIntro
        course={course}
      />

      <CourseDetails course={course} />

      {course?.testimonials && (
        <Testimonials
          testimonials={replaceMongoIdInArray(course?.testimonials)}
        />
      )}

      {/* <RelatedCourse /> */}
    </>
  );
};
export default SingleCoursePage;
