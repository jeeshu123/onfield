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
            <Route path="/login" element={<Login />} />

            <Route
              path="/app"
              element={
                <ProtectedRoute>
                  <Application />
                </ProtectedRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </SportsProvider>
  );
}
