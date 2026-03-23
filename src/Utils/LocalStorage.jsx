const employees = [
  {
    id: 1,
    email: "employee1@gmail.com",
    password: "123",
    tasks: [
      {
        title: "Login Page UI",
        description: "Create login page using React",
        date: "2026-03-20",
        category: "Frontend",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Fix Navbar Bug",
        description: "Resolve mobile responsiveness issue",
        date: "2026-03-18",
        category: "Bug Fix",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "API Integration",
        description: "Connect frontend with backend API",
        date: "2026-03-19",
        category: "Backend",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },

  {
    id: 2,
    email: "employee2@gmail.com",
    password: "123",
    tasks: [
      {
        title: "Dashboard UI",
        description: "Design admin dashboard",
        date: "2026-03-21",
        category: "Frontend",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Add Charts",
        description: "Implement charts using chart library",
        date: "2026-03-20",
        category: "UI",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Fix API Error",
        description: "Resolve 500 server error",
        date: "2026-03-19",
        category: "Backend",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Profile Page",
        description: "Create user profile page",
        date: "2026-03-22",
        category: "Frontend",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      }
    ]
  },

  {
    id: 3,
    email: "employee3@gmail.com",
    password: "123",
    tasks: [
      {
        title: "Auth System",
        description: "Implement login authentication",
        date: "2026-03-18",
        category: "Backend",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Logout Feature",
        description: "Add logout functionality",
        date: "2026-03-19",
        category: "Backend",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Error Handling",
        description: "Handle API errors properly",
        date: "2026-03-20",
        category: "Backend",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },

  {
    id: 4,
    email: "employee4@gmail.com",
    password: "123",
    tasks: [
      {
        title: "Landing Page",
        description: "Design landing page UI",
        date: "2026-03-21",
        category: "Frontend",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Responsive Design",
        description: "Make site mobile friendly",
        date: "2026-03-20",
        category: "UI",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Fix CSS Issues",
        description: "Resolve layout issues",
        date: "2026-03-19",
        category: "Bug Fix",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },

  {
    id: 5,
    email: "employee5@gmail.com",
    password: "123",
    tasks: [
      {
        title: "Database Setup",
        description: "Setup MongoDB database",
        date: "2026-03-18",
        category: "Backend",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Schema Design",
        description: "Create user schema",
        date: "2026-03-19",
        category: "Backend",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "API Testing",
        description: "Test APIs using Postman",
        date: "2026-03-20",
        category: "Testing",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  }
];

const admin = [
  {
    id: 1,
    email: "admin@gmail.com",
    password: "123"
  }
];

export const setLocalStorage = ()=>{
localStorage.setItem('employees', JSON.stringify(employees));
localStorage.setItem('admin',JSON.stringify(admin));
}

export const getLocalStorage = ()=>{
const employees = JSON.parse(localStorage.getItem('employees'));
const admin = JSON.parse(localStorage.getItem('admin'));
return {employees,admin};
}