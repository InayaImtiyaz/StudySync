<div class="container">
    <div class="section">
      <h2>Users</h2>
      <form method="POST" action="?/createUser">
          <input type="text" name="name" placeholder="Name" required />
          <input type="number" name="age" placeholder="Age" required />
          <input type="email" name="email" placeholder="Email" required />
          <button type="submit">Add User</button>
      </form>
  
      <!-- Button to fetch and display users -->
      <button on:click={fetchUsers}>Fetch Users</button>
  
      <!-- Display the users only when showUsers is true -->
      {#if showUsers && users.length > 0}
          <ul>
              {#each users as user}
                  <li>{user.name} - {user.age} - {user.email}</li>
              {/each}
          </ul>
      {:else if showUsers}
          <p>No users found.</p>
      {/if}
    </div>
  
    <div class="section">
      <h2>Courses</h2>
      <form method="POST" action="?/createCourse">
          <input type="text" name="course_name" placeholder="Course Name" required />
          <input type="text" name="semester" placeholder="Semester" required />
          <button type="submit">Add Course</button>
      </form>
  
      <!-- Button to fetch and display courses -->
      <button on:click={fetchCourses}>Fetch Courses</button>
  
      <!-- Display the courses only when showCourses is true -->
      {#if showCourses && courses.length > 0}
          <ul>
              {#each courses as course}
                  <li>{course.course_name} - {course.semester}</li>
              {/each}
          </ul>
      {:else if showCourses}
          <p>No courses found.</p>
      {/if}
    </div>
  </div>
  
  <script lang="ts">
      import { onMount } from 'svelte';
      import type { SelectUser, SelectCourse } from '$lib/schema';
  
      let users: SelectUser[] = [];
      let showUsers = false; // Flag to control when to show users
  
      let courses: SelectCourse[] = [];
      let showCourses = false; // Flag to control when to show courses
  
      // Function to fetch users
      async function fetchUsers() {
          try {
              showUsers = true; // Set flag to show users after fetch
              const response = await fetch('/api/getUsers');
              if (!response.ok) throw new Error('Failed to fetch users');
              const data = await response.json();
              users = data;
          } catch (error) {
              console.error("Error fetching users:", error);
          }
      }
  
      // Function to fetch courses
      async function fetchCourses() {
          try {
              showCourses = true; // Set flag to show courses after fetch
              const response = await fetch('/api/getCourses');
              if (!response.ok) throw new Error('Failed to fetch courses');
              const data = await response.json();
              courses = data;
          } catch (error) {
              console.error("Error fetching courses:", error);
          }
      }
  
      // Don't fetch data on mount
      // onMount(() => {});
  </script>
  
  <style>
      .container {
          font-family: Arial, sans-serif;
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
      }
      
      .section {
          background-color: #f9f9f9;
          border-radius: 8px;
          padding: 20px;
          margin-bottom: 20px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      }
      
      h2 {
          color: #333;
          margin-top: 0;
          border-bottom: 2px solid #eee;
          padding-bottom: 10px;
      }
      
      form {
          margin-bottom: 20px;
      }
      
      input {
          display: block;
          width: 100%;
          padding: 10px;
          margin-bottom: 10px;
          border: 1px solid #ddd;
          border-radius: 4px;
      }
      
      button {
          background-color: #4a90e2;
          color: white;
          border: none;
          padding: 10px 15px;
          border-radius: 4px;
          cursor: pointer;
          transition: background-color 0.3s;
      }
      
      button:hover {
          background-color: #357abD;
      }
      
      ul {
          list-style: none;
          padding: 0;
      }
      
      li {
          background-color: white;
          padding: 12px;
          margin-bottom: 8px;
          border-radius: 4px;
          box-shadow: 0 1px 3px rgba(0,0,0,0.1);
      }
  </style>