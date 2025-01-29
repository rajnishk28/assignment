import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './components/Auth/LoginPage'
import SignupPage from './components/Auth/SignupPage'
import WelcomePage from "./components/profile/WelcomePage"
import ProfileUpdatePage from './components/profile/ProfileUpdatePage';
import AdminHomePage from "./components/admin/dashboard/Home"
import AdminHistoryPage from "./components/admin/History"
import NotFound from './components/admin/NotFound/NotFound';



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="/profile-update" element={<ProfileUpdatePage />} />
        <Route path="/dashboard" element={<AdminHomePage />} />
        <Route path="/history" element={<AdminHistoryPage />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App