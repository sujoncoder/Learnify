import { SignupForm } from "../_components/SignupForm";

const RegisterPage = ({ params: { role } }) => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-blue-100">
      <SignupForm role={role} />
    </div>
  );
};
export default RegisterPage;
