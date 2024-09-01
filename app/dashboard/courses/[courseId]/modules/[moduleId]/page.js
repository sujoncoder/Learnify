import AlertBanner from "@/components/AlertBanner";
import { IconBadge } from "@/components/IconBadge";
import {
  ArrowLeft,
  BookOpenCheck,
  LayoutDashboard
} from "lucide-react";
import Link from "next/link";
import { LessonForm } from "./_components/LessonForm";
import { ModuleActions } from "./_components/ModuleAction";
import { ModuleTitleForm } from "./_components/ModuleTitleForm";

import { replaceMongoIdInArray } from "@/lib/convertData";
import { getModule } from "@/queries/modules";

const Module = async ({ params: { courseId, moduleId } }) => {
  const module = await getModule(moduleId);

  const lessons = replaceMongoIdInArray(module.lessonIds).sort((a, b) => a.order - b.order);


  return (
    <>
      {!module?.active && (<AlertBanner
        label="This module is unpublished. It will not be visible in the course."
        variant="warning"
      />)}

      <div className="p-6">
        <div className="flex items-center justify-between">
          <div className="w-full">
            <Link
              href={`/dashboard/courses/${courseId}`}
              className="flex items-center text-sm hover:opacity-75 transition mb-6"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to course setup
            </Link>
            <div className="flex items-center justify-end">
              <ModuleActions module={module} courseId={courseId} />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
          <div className="space-y-4">
            <div>
              <div className="flex items-center gap-x-2">
                <IconBadge icon={LayoutDashboard} />
                <h2 className="text-xl">Customize Your module</h2>
              </div>
              <ModuleTitleForm initialData={{ title: module.title }} courseId={courseId} chapterId={moduleId} />
            </div>
            <div>
              <div className="flex items-center gap-x-2">
                <IconBadge icon={BookOpenCheck} />
                <h2 className="text-xl">Module Lessons</h2>
              </div>
              <LessonForm initialData={lessons} moduleId={moduleId} courseId={courseId} />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-x-2">
              {/* <IconBadge icon={Video} />
              <h2 className="text-xl">Add a video</h2> */}
            </div>
            {/* <ChapterVideoForm
              initialData={chapter}
              courseId={params.courseId}
              chapterId={params.chapterId}
            /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Module;
