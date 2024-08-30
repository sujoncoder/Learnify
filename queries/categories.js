import { replaceMongoIdInArray, replaceMongoIdInObject } from "@/lib/convertData";
import { Category } from "@/model/category-model";
import { Course } from "@/model/course-model";

// Retrieves all categories from the database, converting MongoDB ObjectIDs to a more readable format.
export async function getCategories() {
    const categories = await Category.find({}).lean();
    return replaceMongoIdInArray(categories);
}


// Function to retrieve all courses belonging to a specific category from the database
export async function getCoursesByCategory(categoryId) {
    try {
        // Query the database for courses that have the specified category ID
        const courses = await Course.find({ category: categoryId }).lean();
        return replaceMongoIdInArray(courses); // Return the list of courses
    } catch (error) {
        // Throw an error if the database query fails
        throw new Error(`Failed to retrieve courses for category ${categoryId}: ${error.message}`);
    }
}


// Fetches details of a specific category by its ID, converting the MongoDB ObjectID to a readable format.
export async function getCategoryDetails(categoryId) {
    try {
        const category = await Category.findById(categoryId).lean();
        return replaceMongoIdInObject(category);
    } catch (error) {
        throw new Error(`Failed to retrieve category details: ${error.message}`);
    }
}
