import AlertBanner from "@/components/AlertBanner";
import { IconBadge } from "@/components/IconBadge";
import {
  CircleDollarSign,
  LayoutDashboard,
  ListChecks
} from "lucide-react";
import { CategoryForm } from "./_components/CategoryForm";
import { CourseActions } from "./_components/CourseAction";
import { DescriptionForm } from "./_components/DescriptionForm";
import { ImageForm } from "./_components/ImageForm";
import { ModulesForm } from "./_components/ModuleForm";
import { PriceForm } from "./_components/PriceForm";
import { QuizSetForm } from "./_components/QuizSetForm";
import { TitleForm } from "./_components/TitleForm";

import { getCategories } from "@/queries/categories";
import { getCourseDetails } from "@/queries/courses";

import { replaceMongoIdInArray } from "@/lib/convertData";

import { getAllQuizSets } from "@/queries/quizzes";

const EditCourse = async ({ params: { courseId } }) => {
  const course = await getCourseDetails(courseId);
  const categories = await getCategories();
  const mappedCategories = categories.map(c => {
    return {
      value: c.title,
      label: c.title,
      id: c.id,
    }
  });

  const modules = replaceMongoIdInArray(course?.modules).sort((a, b) => a.order - b.order);

  const allQuizSets = await getAllQuizSets(true);
  let mappedQuizSet = [];
  if (allQuizSets && allQuizSets.length > 0) {
    mappedQuizSet = allQuizSets.map(quizSet => {
      return {
        value: quizSet.id,
        label: quizSet.title,
      }
    })
  }



  return (
    <>
      {!course.active && <AlertBanner
        label="This course is unpublished. It will not be visible in the course."
        variant="warning"
      />}
      <div className="p-6">
        <div className="flex items-center justify-end">
          <CourseActions courseId={courseId} isActive={course?.active} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
          <div>
            <div className="flex items-center gap-x-2">
              <IconBadge icon={LayoutDashboard} />
              <h2 className="text-xl">Customize your course</h2>
            </div>
            <TitleForm
              initialData={{
                title: course?.title,
              }}
              courseId={courseId}
            />
            <DescriptionForm initialData={{ description: course?.description }} courseId={courseId} />
            <ImageForm initialData={{ imageUrl: `/assets/images/courses/${course.thumbnail}` }} courseId={courseId} />
            <CategoryForm initialData={{ value: course?.category?.title }} courseId={courseId} options={mappedCategories} />

            <QuizSetForm initialData={{ quizSetId: course?.quizSet?._id.toString() }} courseId={courseId} options={mappedQuizSet} />
          </div>
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-x-2 mb-6">
                <IconBadge icon={ListChecks} />
                <h2 className="text-xl">Course Modules</h2>
              </div>

              <ModulesForm initialData={modules} courseId={courseId} />
            </div>
            <div>
              <div className="flex items-center gap-x-2">
                <IconBadge icon={CircleDollarSign} />
                <h2 className="text-xl">Sell you course</h2>
              </div>
              <PriceForm initialData={{ price: course?.price }} courseId={courseId} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default EditCourse;
