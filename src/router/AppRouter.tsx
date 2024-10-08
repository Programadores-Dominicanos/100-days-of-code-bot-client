import PublicErrorBoundary from "@/shared/components/error-boundary/error-boundary";
import { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const ComponentsPage = lazy(() => import("@modules/components/Components"))

const AppRouter = () => {
  return (
    <BrowserRouter>
      <PublicErrorBoundary>
        <Routes>
          <Route path="/" element={<ComponentsPage/>} />
        </Routes>
      </PublicErrorBoundary>
    </BrowserRouter>
  );
};

export default AppRouter;
