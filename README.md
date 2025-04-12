# StudySync

StudySync is a lightweight web application for managing students and courses. It allows you to create and view student information and course data through a simple, intuitive interface.

## Features

- Add and manage student records (name, age, email)
- Add and manage course information (course name, semester)
- View student and course data on demand
- Clean, responsive UI
- PostgreSQL database for data persistence

## Tech Stack

- **Frontend**: SvelteKit
- **Database**: PostgreSQL
- **ORM**: Drizzle ORM
- **Styling**: Custom CSS

## Project Structure

```
studysync/
├── src/
│   ├── lib/
│   │   ├── db.ts              # Database connection
│   │   ├── schema.ts          # Database schema definitions
│   │   ├── queries/
│   │   │   ├── insert.ts      # User insertion functions
│   │   │   ├── insertCourse.ts # Course insertion functions
│   │   │   └── select.ts      # Data retrieval functions
│   ├── routes/
│   │   ├── api/
│   │   │   ├── getUsers/+server.ts  # API endpoint for fetching users
│   │   │   └── getCourses/+server.ts # API endpoint for fetching courses
│   │   ├── +page.svelte       # Main page UI
│   │   └── +page.server.ts    # Server-side actions
```

## Setup Instructions

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/studysync.git
   cd studysync
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Configure your PostgreSQL database connection
   - Create a `.env` file in the project root
   - Add your database URL: `DATABASE_URL=postgres://username:password@localhost:5432/studysync`

4. Initialize the database schema
   ```bash
   npm run db:push
   ```

5. Start the development server
   ```bash
   npm run dev
   ```

6. Open your browser and navigate to `http://localhost:5173`

## Usage

### Adding a Student
1. Fill in the Name, Age, and Email fields in the Users section
2. Click "Add User"

### Adding a Course
1. Fill in the Course Name and Semester fields in the Courses section
2. Click "Add Course"

### Viewing Data
- Click "Fetch Users" to view all students
- Click "Fetch Courses" to view all courses

![image](https://github.com/user-attachments/assets/5c3dc308-6cbe-43a4-9372-32dcbcd6f6fa)

