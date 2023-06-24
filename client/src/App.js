import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Admin from "./components/login/SuperAdmin";
import Student from "./components/login/Student";
import Faculty from "./components/login/Faculty";
import AdminHome from "./components/admin/AdminHome";
import Profile from "./components/admin/profile/Profile";
import AddStudent from "./components/admin/addStudent/AddStudent";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      children: [
        {
          path: "/",
          element: <Login />,
        },
        {
          path: "/admin",
          children: [
            {
              path: "/admin",
              element: <Admin />,
            },
            {
              path: "dashboard",
              element: <AdminHome />,
            },
            {
              path: "profile",
              element: <Profile />,
            },
            {
              path: "addstudent",
              element: <AddStudent />,
            },
          ],
        },
        {
          path: "login/student",
          element: <Student />,
        },
        {
          path: "/login/faculty",
          element: <Faculty />,
        },
      ],
    },
  ]);

  return (
    <div>
      <Outlet />
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
