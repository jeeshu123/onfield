import {
  BrowserRouter,
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import { SportsProvider } from "./context/SportsContext";
import Application from "./pages/Application";
import AppLayout from "./ui/AppLayout";
import HomePage from "./pages/HomePage";
import { AuthProvider } from "./context/AuthContext";
import Login from "./pages/Login";
import ProtectedRoute from "./pages/ProtectedRoute";
import SignUp from "./pages/SignUp";
import { GrDashboard } from "react-icons/gr";
import { NewsProvider } from "./context/NewsContext";
import BreakingNewsArticle from "./pages/BreakingNewsArticle";

// const router = createBrowserRouter([
//   {
//     element: <AppLayout />,
//     // errorElement: <Error />,
//     children: [
//       {
//         path: "/",
//         element: <Home />,
//       },
//       {
//         path: "/app",
//         element: <Application />,
//       },
//     ],
//   },
// ]);

export default function App() {
  return (
    <SportsProvider>
      <AuthProvider>
        {/* <RouterProvider router={router} /> */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<SignUp />} />

            <Route
              path="app"
              element={
                <ProtectedRoute>
                  <NewsProvider>
                    <AppLayout />
                  </NewsProvider>
                </ProtectedRoute>
              }
            >
              {/* <Route path="dashboard" element={<Dashboard />} /> */}
              <Route index element={<Application />} />
              <Route path="breaking/:id" element={<BreakingNewsArticle />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </SportsProvider>
  );
}
