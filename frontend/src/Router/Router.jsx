import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";

import CreateJob from "../Pages/CreateJob";
import MyJobs from "../Pages/MyJobs";
import UpdateJob from "../Pages/UpdateJob";
import Login from "../Pages/Login";
import JobDetails from "../Pages/JobDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/post-job", element: <CreateJob /> },
      { path: "/my-job", element: <MyJobs /> },
      {
        path: "/my-job/edit-job/:id",
        element: <UpdateJob />,
        loader: ({ params }) => {
          const url = `http://localhost:5000/all-jobs/${params.id}`;
          return fetch(url).then((res) => res.json());
        },
      },
      { path: "/login", element: <Login /> },
      {
        path: "/job/:id",
        element: <JobDetails />,
        loader: ({ params }) => {
          const url = `http://localhost:5000/all-jobs/${params.id}`;
          return fetch(url).then((res) => res.json());
        },
      },
    ],
  },
]);

export default router;
