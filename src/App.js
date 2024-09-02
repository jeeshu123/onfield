import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { SportsProvider } from "./context/SportsContext";
import Home from "./pages/Home";
import AppLayout from "./ui/AppLayout";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    // errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

export default function App() {
  return (
    <SportsProvider>
      <RouterProvider router={router} />
    </SportsProvider>
  );
}
