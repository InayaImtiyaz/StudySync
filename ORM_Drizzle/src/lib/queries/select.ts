import { db } from '../db';
import { coursesTable, usersTable } from '../schema';

export async function getUsers() {
  return await db.select().from(usersTable);
}

export async function getCourses() {
    return await db.select().from(coursesTable);
  }