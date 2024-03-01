import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import Project from "../pages/Project";
import Team from "../pages/Team";
import ProtectedRoute from "../routes/ProtectedRoute";
import LeaderDetail from "../pages/LeaderDetail";
import NewProject from "../pages/NewProject";

const routeslist = [
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/register",
        element: <Register />,
    },
    {
        path: "/",

        element: (
            <ProtectedRoute>
                <Home />
            </ProtectedRoute>
        ),
    },
    {
        path: "/project",

        children: [
            {
                element: (
                    <ProtectedRoute>
                        <Project />
                    </ProtectedRoute>
                ),
                index: true,
            },
            {
                path: "new-project",
                element: (
                    <ProtectedRoute>
                        <NewProject />{" "}
                    </ProtectedRoute>
                ),
            },
        ],
    },
    {
        path: "/team",
        element: (
            <ProtectedRoute>
                <Team />
            </ProtectedRoute>
        ),
    },
    {
        path: "/leader-detail/:id",
        element: <LeaderDetail />,
    },

    // {
    //     path: "/new-project",
    //     element: (
    //         <ProtectedRoute>
    //             <NewProject />{" "}
    //         </ProtectedRoute>
    //     ),
    // },
];

export default routeslist;
