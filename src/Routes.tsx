import { useRoutes, Navigate } from "react-router-dom";
import MainPage from "./pages/MainPage";
import MemoDetailPage from "./pages/MemoDetailPage";
import MemoWritePage from "./pages/MemoWritePage";
import MemoManagerPage from "./pages/MemoManagerPage";

const Routes = () => {
    return useRoutes([        
        {
            path: "/",
            element: <MainPage />
        },
        {
            path: "/manager",
            element: <MemoManagerPage />
        },
        {
            path: "/:id",
            element: <MemoDetailPage />
        },
        {
            path: "/:id/write",
            element: <MemoWritePage />
        },
        {
            path: "*",
            element: <Navigate to={"/"} replace />
        }
    ])
}

export default Routes;