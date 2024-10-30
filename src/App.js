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
import Dashboard from "./pages/Dashboard";
import SearchResults from "./pages/SearchResults";
import NewsArticle from "./pages/NewsArticle";
import ReactGA from "react-ga4";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

ReactGA.initialize("G-ZDX8KWTMTE");

function AnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname });
  }, [location]);

  return null;
}

export default function App() {
  return (
    <SportsProvider>
      <AuthProvider>
        <BrowserRouter>
          <AnalyticsTracker /> {/* Tracker Component */}
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
              <Route path="article/:id" element={<NewsArticle />} />
              <Route path="search" element={<SearchResults />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </SportsProvider>
  );
}
