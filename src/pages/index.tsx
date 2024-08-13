import {lazy, Suspense} from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Loader from "../shared/ui/Loader.tsx";

const Profile = lazy(() => import("./profile"))
const MainMenu = lazy(() => import("./main-menu"))
const CreateNatalForm = lazy(() => import("./create-natal-form"))
const NatalChart = lazy(() => import("./natal-chart"))
const NotFoundPage = lazy(() => import("./not-found"))

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainMenu/>
    },
    {
        path: "/profile",
        element: <Profile/>
    },
    {
        path: "/natal-form",
        element: <CreateNatalForm/>
    },
    {
        path: '/natal',
        element: <NatalChart/>
    },
    {
        path: '*',
        element: <NotFoundPage/>
    }
])

const Routing = () => {
    return (
        <Suspense fallback={<Loader/>}>
            <RouterProvider router={router}/>
        </Suspense>
    );
};

export default Routing;