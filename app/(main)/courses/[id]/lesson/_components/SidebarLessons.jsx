import { AccordionContent } from "@/components/ui/accordion";
import { replaceMongoIdInArray } from "@/lib/convertData";
import { SidebarLessonItem } from "./SidebarLessonItems";

export const SidebarLessons = ({ courseId, lessons, module }) => {
    const allLessons = replaceMongoIdInArray(lessons).toSorted(
        (a, b) => a.order - b.order
    );
    return (
        <AccordionContent>
            <div className="flex flex-col w-full gap-3">
                {allLessons.map((lesson) => (
                    <SidebarLessonItem
                        key={lesson.id}
                        courseId={courseId}
                        lesson={lesson}
                        module={module} />
                ))}
            </div>
        </AccordionContent>
    );
};
