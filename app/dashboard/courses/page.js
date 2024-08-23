import { COURSE_DATA, getInstructorDashboardData } from "@/lib/dashboard-helper";
import { columns } from "./_components/Columns";
import { DataTable } from "./_components/DataTable";


const CoursesPage = async () => {
  const courses = await getInstructorDashboardData(COURSE_DATA);

  return (
    <div className="p-6">
      <DataTable columns={columns} data={courses} />
    </div>
  );
};

export default CoursesPage;
