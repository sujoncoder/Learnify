import { replaceMongoIdInArray } from "@/lib/convertData";
import { getCourseDetails } from "@/queries/courses";
import CourseDetails from "./_components/CourseDetails";
import CourseDetailsIntro from "./_components/CourseDetailsIntro";
import RelatedCourse from "./_components/RelatedCourse";
import Testimonials from "./_components/Testimonials";

const SingleCoursePage = async ({ params: { id } }) => {
  const course = await getCourseDetails(id);
  console.log(course);
  return (
    <>
      <CourseDetailsIntro
        title={course?.title}
        subtitle={course?.subtitle}
        thumbnail={course?.thumbnail}
      />

      <CourseDetails />

      {course?.testimonials && (
        <Testimonials
          testimonials={replaceMongoIdInArray(course?.testimonials)}
        />
      )}

      <RelatedCourse />
    </>
  );
};
export default SingleCoursePage;
