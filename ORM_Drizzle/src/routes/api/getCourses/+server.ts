import { json } from '@sveltejs/kit';
import { db } from '$lib/db';  // Adjust if needed
import { coursesTable } from '$lib/schema';

export async function GET() {
    try {
        const courses = await db.select().from(coursesTable);
        return json(courses);  // Respond with JSON data
    } catch (error) {
        console.error("Error fetching courses:", error);
        return json({ error: "Internal Server Error" }, { status: 500 });
    }
}