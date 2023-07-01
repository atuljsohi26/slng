import { Provider } from "react-redux";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Admin from "./components/login/SuperAdmin";
import Student from "./components/login/Student";
import Faculty from "./components/login/Faculty";
import AdminHome from "./components/admin/AdminHome";
import Profile from "./components/admin/profile/Profile";
import AddStudent from "./components/admin/addStudent/AddStudent";
import AllStudent from "./components/admin/getStudent/AllStudent";
import store from "./redux/store";
import { Toaster } from "react-hot-toast";

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
            {
              path: "allstudent",
              element: <AllStudent />,
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
    <Provider store={store}>
      <Toaster />
      <div>
        <Outlet />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
