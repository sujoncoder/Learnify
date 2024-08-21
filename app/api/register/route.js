import connectDB from "@/config/DB";
import { User } from "@/model/user-model";

import bcrypt from "bcryptjs";
import colors from "colors";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  try {
    console.log("hello from register API", colors.red)
    await connectDB();  // Ensure the database is connected

    const { firstName, lastName, email, password, userRole } = await request.json();
    const hashedPassword = await bcrypt.hash(password, 5);

    const newUser = {
      firstName,
      lastName,
      email,
      password: hashedPassword,
      role: userRole,
    };

    await User.create(newUser);

    return new NextResponse("User has been created", {
      status: 201,
    });
  } catch (error) {
    console.error("Error:", error);
    return new NextResponse(error.message, {
      status: 500,
    });
  }
};
