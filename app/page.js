import { getCourses } from "@/queries/courses";

const Home = async () => {
  const courses = await getCourses();
  console.log(courses);

  console.log(courses[0]?.instructor?.socialMedia);
  console.log(courses[0]?.testimonials);
  console.log(courses[0]?.modules);
  return <div>page</div>;
};

export default Home;
