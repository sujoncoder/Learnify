"use server"

import { getLoggedInUser } from "@/lib/loggedin-user";
import { Course } from "@/model/course-model";
import { create } from "@/queries/courses";
import mongoose from "mongoose";

export async function createCourse(data) {
  try {
    const loggedinUser = await getLoggedInUser();
    data["instructor"] = loggedinUser?.id
    const course = await create(data);
    return course;
  } catch (e) {
    throw new Error(e);
  }
}

export async function updateCourse(courseId, dataToUpdate) {
  try {
    await Course.findByIdAndUpdate(courseId, dataToUpdate);
  } catch (e) {
    throw new Error(e);
  }
}

export async function changeCoursePublishState(courseId) {
  const course = await Course.findById(courseId);
  try {
    const res = await Course.findByIdAndUpdate(courseId, { active: !course.active }, { lean: true });
    return res.active;
  } catch (err) {
    throw new Error(err);
  }
}

export async function deleteCourse(courseId) {
  try {
    await Course.findByIdAndDelete(courseId);
  } catch (err) {
    throw new Error(err);
  }
}

export async function updateQuizSetForCourse(courseId, dataToUpdate) {
  const data = {};
  data["quizSet"] = new mongoose.Types.ObjectId(dataToUpdate.quizSetId);
  try {
    await Course.findByIdAndUpdate(courseId, data);
  } catch (error) {
    throw new Error(error);
  }
}

