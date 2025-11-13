import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import AllIssues from "../pages/AllIssues";
import Myissues from "../pages/Myissues";
import MyContribution from "../pages/MyContribution";
import Registation from "../pages/Auth/Registation";
import Login from "../pages/Auth/Login";
import PrivateRoute from "./PrivateRoute";
import AddIssues from "../pages/AddIssues";
import ErrorPage from "../pages/ErrorPage";
import IssueDetails from "../pages/IssueDetails";
import MyIssueDetails from "../pages/MyIssueDetails";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
        {
            index: true,
            element: <Home></Home>,
            loader: () => fetch('http://localhost:3000/latest-issues')
        },
        {
            path:'/allissues',
            element: <AllIssues></AllIssues>,
            loader: () => fetch('http://localhost:3000/issues')
        },
        {
        path: "/issue-details/:id",
        element: (
          <PrivateRoute>
            <IssueDetails />
          </PrivateRoute>
        ),
        loader:({params}) => fetch(`http://localhost:3000/issues/${params.id}`)
        },
         {
        path: "/my-issue-details/:id",
        element: (
          <PrivateRoute>
            <MyIssueDetails />
          </PrivateRoute>
        ),
        loader:({params}) => fetch(`http://localhost:3000/myissues/${params.id}`)
        },
        {
            path:'/addissues',
            element: (
              <PrivateRoute>
                <AddIssues></AddIssues>
                </PrivateRoute>
            ),
        },
        {
            path:'/myissues',
            element: (
              <PrivateRoute>
                <Myissues></Myissues>
              </PrivateRoute>
            ),
        },
        {
            path:'/mycontribution',
            element: (
              <PrivateRoute>
                <MyContribution></MyContribution>
                </PrivateRoute>
            ),
            loader: () => fetch('http://localhost:3000/contribution')
        },
        {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "/auth/register",
        element: <Registation />,
      },

    ]
  },
  {
    path: "/*",
    element: <ErrorPage></ErrorPage>,
    },
]);