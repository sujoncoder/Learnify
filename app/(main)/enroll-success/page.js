import { auth } from "@/auth";
import { Button } from "@/components/ui/button";
import { sendEmails } from "@/lib/email";
import { stripe } from "@/lib/stripe";
import { getCourseDetails } from "@/queries/courses";
import { enrollForCourse } from "@/queries/enrollments";
import { getUserByEmail } from "@/queries/users";
import { CircleCheck } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

const Success = async ({ searchParams: { session_id, courseId } }) => {
  console.log(session_id, courseId)
  if (!session_id) {
    throw new Error("Please provide a valid session id that start with cs_")
  }

  const userSession = await auth();
  console.log(userSession)

  if (!userSession?.user.email) {
    redirect("/login")
  }

  const course = await getCourseDetails(courseId)
  const logedInUser = await getUserByEmail(userSession?.user?.email)

  const checkoutSession = await stripe.checkout.sessions.retrieve(session_id, {
    expand: ["line_items", "payment_intent"]
  })

  const paymentIntent = checkoutSession?.payment_intent
  const paymentStatus = paymentIntent?.status
  const customerName = `${logedInUser?.firstName} ${logedInUser?.lastName}`
  const customerEmail = logedInUser?.email
  const productName = course?.title

  console.log(customerName, customerEmail, productName)

  if (paymentStatus === "succeeded") {
    console.log(course?.id, logedInUser?.id);
    const enrolled = await enrollForCourse(
      course?.id,
      logedInUser?.id,
      "stripe"
    );
    console.log(enrolled);

    const instructorName = `${course?.instructor?.firstName} ${course?.instructor?.lastName}`;
    const instructorEmail = course?.instructor?.email;


    const emailsToSend = [
      {
        to: instructorEmail,
        subject: `New Enrollment for ${productName}.`,
        message: `Congratulations, ${instructorName}. A new student, ${customerName} has enrolled to your course ${productName} just now. Please check the instructor dashboard and give a high-five to your new student.`,
      },
      {
        to: customerEmail,
        subject: `Enrollment Success for ${productName}`,
        message: `Hey ${customerName} You have successfully enrolled for the course ${productName}`,
      }
    ];

    const emailSentResponse = await sendEmails(emailsToSend);
    console.log(emailSentResponse);
  }


  return (
    <div className="h-screen w-full flex-1 flex flex-col items-center justify-center">
      <div className="flex flex-col items-center gap-6 max-w-[600px] text-center">
        {paymentStatus === "succeeded" && (
          <>
            <CircleCheck className="w-32 h-32 bg-success rounded-full p-0 text-green-500" />
            <h1 className="text-xl md:text-2xl lg:text-3xl">
              Congratulations! <strong>{customerName}</strong> Your Enrollment was Successful <strong>{productName}</strong>
            </h1>
          </>)

        }
        <div className="flex items-center gap-3">
          <Button asChild size="sm">
            <Link href="/courses">Browse Courses</Link>
          </Button>
          <Button asChild variant="outline" size="sm">
            <Link href="/think-in-a-redux-way/introduction">Play Course</Link>
          </Button>
        </div>
      </div>
    </div >
  );
};
export default Success;
