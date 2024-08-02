/* eslint-disable react/jsx-key */
import { Accordion } from "@radix-ui/react-accordion";
import { BookCheck, Clock10 } from "lucide-react";
import CourseModuleList from "./module/CourseModuleList";

const CourseCurriculum = ({ course }) => {
  const totalDuration = course.modules.reduce(
    (acc, obj) => acc + obj.duration,
    0
  );

  return (
    <div class="flex gap-x-5 items-center justify-center flex-wrap mt-4 mb-6 text-gray-600 text-sm">
      <span className="flex items-center gap-1.5">
        <BookCheck className="w-4 h-4" />
        {course?.modules?.length} Chapters
      </span>
      <span className="flex items-center gap-1.5">
        <Clock10 className="w-4 h-4" />
        {(totalDuration / 60).toPrecision(2)} Hours
      </span>

      <Accordion
        defaultValue={["item-1", "item-2", "item-3"]}
        type="multiple"
        collapsible
        className="w-full text-lg space-y-4"
      >
        {course?.modules &&
          course.modules.map((module) => <CourseModuleList module={module} />)}
      </Accordion>
    </div>
  );
};

export default CourseCurriculum;
