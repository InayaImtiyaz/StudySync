import { createUser } from '$lib/queries/insert';
import { createCourse } from '$lib/queries/insert'; // Import the new function
import { getUsers } from '$lib/queries/select';
import { redirect } from '@sveltejs/kit';
import { fail } from '@sveltejs/kit'; // Import fail if not already imported

export const actions = {
    createUser: async ({ request }) => {
        const formData = await request.formData();
        const name = formData.get('name');
        const age = Number(formData.get('age'));
        const email = formData.get('email');

        try {
            await createUser({ name: name as string, age, email: email as string });
            throw redirect(303, '/');
        } catch (error) {
            return fail(400, { error: (error as Error).message });
        }
    },
    
    // New action for creating courses
    createCourse: async ({ request }) => {
        const formData = await request.formData();
        const course_name = formData.get('course_name');
        const semester = formData.get('semester');

        try {
            await createCourse({ 
                course_name: course_name as string, 
                semester: semester as string 
            });
            throw redirect(303, '/');
        } catch (error) {
            return fail(400, { error: (error as Error).message });
        }
    }
};