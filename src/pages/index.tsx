import {lazy, Suspense} from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Loader from "../shared/ui/Loader.tsx";

const StartForm = lazy(() => import("./start-form"))
const NatalChart = lazy(() => import("./natal-chart"))
const NotFoundPage = lazy(() => import("./not-found"))

const router = createBrowserRouter([
    {
        path: "/",
        element: <StartForm/>
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
            <RouterProvider router={router} />
        </Suspense>
    );
};

export default Routing;