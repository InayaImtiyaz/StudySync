import { integer, pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';

export const usersTable = pgTable('users_table', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  age: integer('age').notNull(),
  email: text('email').notNull().unique(),
});

export type InsertUser = typeof usersTable.$inferInsert;
export type SelectUser = typeof usersTable.$inferSelect;

// Existing usersTable stays as is...

export const coursesTable = pgTable('courses_table', {
  course_id: serial('course_id').primaryKey(),
  course_name: text('course_name').notNull(),
  semester: text('semester').notNull(),
});

export type InsertCourse = typeof coursesTable.$inferInsert;
export type SelectCourse = typeof coursesTable.$inferSelect;
