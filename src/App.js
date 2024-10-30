import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SportsProvider } from "./context/SportsContext";
import Application from "./pages/Application";
import AppLayout from "./ui/AppLayout";
import HomePage from "./pages/HomePage";
import { AuthProvider } from "./context/AuthContext";
import Login from "./pages/Login";
import ProtectedRoute from "./pages/ProtectedRoute";
import SignUp from "./pages/SignUp";
import { NewsProvider } from "./context/NewsContext";
import BreakingNewsArticle from "./pages/BreakingNewsArticle";
import Dashboard from "./pages/Dashboard";
import SearchResults from "./pages/SearchResults";

export default function App() {
  return (
    <SportsProvider>
      <AuthProvider>
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
              <Route index element={<Application />} />
              <Route path="user/:id" element={<Dashboard />} />
              <Route path="breaking/:id" element={<BreakingNewsArticle />} />
              <Route path="search" element={<SearchResults />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </SportsProvider>
  );
}
