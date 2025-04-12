import { pgTable, serial, text, integer } from 'drizzle-orm/pg-core';

export const user = pgTable('user', {
	id: serial('id').primaryKey(),
	age: integer('age')
});

export const courses = pgTable('courses', {
    course_id: serial('course_id').primaryKey(),
    course_name: text('course_name').notNull(),
    semester: text('semester').notNull()
});