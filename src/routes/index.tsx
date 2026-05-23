// src/routes/index.tsx
import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import ErrorPage from "../pages/error-page";
import PublicLayout from "../layout/public/PublicLayout";
import LoadingFallback from "@/shared/components/loading/LoadingFallback";
import AdminLayout from "@/layout/admin/AdminLayout";
import HomePage from "@/pages/home";

// export const HomePage = lazy(() => import("../pages/home")); 
//اگه از این استفاده کنیم معیار CLS بسیار کاهش می یابد برای صفحه اصلی این کار رو نمیکنیم
//دقیقا مثل عکس بخش HERO که میخایم سریع دانلود شود اینم همین جوریه

export const DashboardPage = lazy(() => import("../pages/dashboard"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <AdminLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <DashboardPage />
          </Suspense>
        ),
      },
    ],
  },
]);
