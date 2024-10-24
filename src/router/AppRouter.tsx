import PublicErrorBoundary from "@/shared/components/error-boundary/error-boundary";
import Layout from "@/shared/components/layout/MainLayout";
import { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const ComponentsPage = lazy(() => import("@modules/components/Components"));

const AppRouter = () => {
  return (
    <BrowserRouter>
      <PublicErrorBoundary>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<ComponentsPage />} />
          </Route>
        </Routes>
      </PublicErrorBoundary>
    </BrowserRouter>
  );
};

export default AppRouter;
