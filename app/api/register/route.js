import { User } from "@/model/user-model";

import { NextResponse } from "next/server";

import connectDB from "@/config/database";
import bcrypt from "bcryptjs";

export const POST = async (request) => {
    await connectDB();
    const { firstName, lastName, email, password, userRole } = await request.json();

    try {
        // Check if a user with the given email already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return new NextResponse("Email already exists", {
                status: 409, // Conflict status code
            });
        }

        // If email doesn't exist, proceed to create a new user
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
        return new NextResponse(error.message, {
            status: 500,
        });
    }
};
