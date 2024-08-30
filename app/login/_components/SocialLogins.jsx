
import { doSocialLogin } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";

const SocialLogins = () => {
  return (
    <>
      <form action={doSocialLogin}>
        <div className="flex justify-center">
          <Button
            className="w-full mx-6 mb-6 border rounded-md flex items-center justify-center gap-2 py-2"
            type="submit"
            name="action"
            value="google">
            <FcGoogle className="w-8 h-8" />
            <span>SignInWithGoogle</span>
          </Button>
        </div>
      </form>
    </>
  );
};

export default SocialLogins;