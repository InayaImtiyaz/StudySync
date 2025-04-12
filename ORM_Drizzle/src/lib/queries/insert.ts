import { db } from '../db';
import { InsertUser, usersTable } from '../schema';

export async function createUser(data: InsertUser) {
  try {
    console.log("Inserting user:", data);
    await db.insert(usersTable).values(data);
    console.log("User inserted successfully");
  } catch (error) {
    console.error("Insert error:", error);
  }
}

import { db } from '../db';
import { InsertCourse, coursesTable } from '../schema';

export async function createCourse(data: InsertCourse) {
  try {
    console.log("Inserting course:", data);
    await db.insert(coursesTable).values(data);
    console.log("Course inserted successfully");
  } catch (error) {
    console.error("Insert course error:", error);
  }
}
