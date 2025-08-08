import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/Login";
import App from "../App";
import Dashboard from "../pages/Dashboard";
import Appointments from "../pages/Appointments";
import Patients from "../pages/Patients";
import Profile from "../pages/Profile";
import ConsultationHistory from "../pages/ConsultationHistory";
import Earnings from "../pages/Earnings";
import Chat from "../pages/Chat";
import Schedule from "../pages/Schedule";
import Settings from "../pages/Settings";

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/*" element={<App />}>
        <Route index element={<Navigate to="/dashboard" replace />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="appointments" element={<Appointments />} />
        <Route path="patients" element={<Patients />} />
        <Route path="profile" element={<Profile />} />
        <Route path="consultation-history" element={<ConsultationHistory />} />
        <Route path="earnings" element={<Earnings />} />
        <Route path="chat" element={<Chat />} />
        <Route path="schedule" element={<Schedule />} />
        <Route path="settings" element={<Settings />} />
      </Route>
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  </Router>
);

export default AppRoutes;
