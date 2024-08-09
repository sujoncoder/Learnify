import { doSocialLogin } from "@/app/actions";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import GoogleIcon from "/public/assets/icons/google.png";

const SocialLogin = () => {
  return (
    <>
      <div className="text-center text-md mt-2 text-gray-500">
        or Signup with
      </div>
      <form action={doSocialLogin}>
        <div className="flex justify-center items-center gap-2">
          <Button
            className="mt-4 py-2 border-gray-600/30 border rounded-md flex items-center gap-2 justify-center"
            type="submit"
            name="action"
            value="google"
          >
            <Image src={GoogleIcon} alt="GoogleIcon" width={32} height={32} />
            <span>Google</span>
          </Button>
        </div>
      </form>
    </>
  );
};

export default SocialLogin;
