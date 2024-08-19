import { auth } from "@/auth";
import { getUserByEmail } from "@/queries/users";
import ChangePassword from "../component/change-password";
import ContactInfo from "../component/contact-info";
import PersonalDeails from "../component/personal-details";

const Profile = async () => {
	const session = await auth()
	const loggedInUser = await getUserByEmail(session?.user?.email)
	return (
		<>
			<PersonalDeails userInfo={loggedInUser} />
			<div className="p-6 rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900 mt-[30px]">
				<div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
					<ContactInfo />
					<ChangePassword email={loggedInUser?.email} />
				</div>
			</div>
		</>
	);
}

export default Profile;
