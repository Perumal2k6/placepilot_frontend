import { Routes, Route, Navigate } from "react-router-dom"
import { AppLayout } from "@/layouts/AppLayout"
import { ProtectedRoute } from "@/features/auth/components/ProtectedRoute"
import { LoginPage } from "@/features/auth/pages/LoginPage"

// Student Pages
import DashboardPage from "@/pages/DashboardPage"
import AptitudePage from "@/pages/AptitudePage"
import TechnicalPage from "@/pages/TechnicalPage"
import CodingPage from "@/pages/CodingPage"
import { CodingProblemPage } from "@/features/coding/components/CodingProblemPage"
import InterviewPage from "@/pages/InterviewPage"
import MockTestsPage from "@/pages/MockTestsPage"
import ResultsPage from "@/pages/ResultsPage"
import AnalyticsPage from "@/pages/AnalyticsPage"
import RoadmapPage from "@/pages/RoadmapPage"
import AchievementsPage from "@/pages/AchievementsPage"
import ProfilePage from "@/pages/ProfilePage"
import SettingsPage from "@/pages/SettingsPage"

// Faculty Pages
import FacultyDashboardPage from "@/pages/faculty/FacultyDashboardPage"
import FacultyStudentsPage from "@/pages/faculty/FacultyStudentsPage"
import FacultyQuestionsPage from "@/pages/faculty/FacultyQuestionsPage"
import FacultyMockTestsPage from "@/pages/faculty/FacultyMockTestsPage"
import FacultyReportsPage from "@/pages/faculty/FacultyReportsPage"
// Admin Pages
import AdminDashboardPage from "./pages/admin/AdminDashboardPage"
import AdminUsersPage from "./pages/admin/AdminUsersPage"
import AdminDepartmentsPage from "./pages/admin/AdminDepartmentsPage"
import AdminStudentsPage from "./pages/admin/AdminStudentsPage"
import AdminFacultyPage from "./pages/admin/AdminFacultyPage"
import AdminQuestionsPage from "./pages/admin/AdminQuestionsPage"
import AdminMockTestsPage from "./pages/admin/AdminMockTestsPage"
import AdminReportsPage from "./pages/admin/AdminReportsPage"
import AdminSettingsPage from "./pages/admin/AdminSettingsPage"

// Common
import PlaceholderPage from "@/components/common/PlaceholderPage"
import NotFoundPage from "@/pages/NotFoundPage"

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<Navigate to="/login" replace />} />

      {/* Student Routes */}
      <Route element={<ProtectedRoute allowedRoles={["student"]} />}>
        <Route path="/student" element={<AppLayout />}>
          <Route index element={<Navigate to="/student/dashboard" replace />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="aptitude" element={<AptitudePage />} />
          <Route path="technical" element={<TechnicalPage />} />
          <Route path="coding" element={<CodingPage />} />
          <Route path="coding/:problemId" element={<CodingProblemPage />} />
          <Route path="interview" element={<InterviewPage />} />
          <Route path="mock-tests" element={<MockTestsPage />} />
          <Route path="results" element={<ResultsPage />} />
          <Route path="analytics" element={<AnalyticsPage />} />
          <Route path="roadmap" element={<RoadmapPage />} />
          <Route path="achievements" element={<AchievementsPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="settings" element={<SettingsPage />} />
        </Route>
      </Route>

      {/* Faculty Routes */}
      <Route element={<ProtectedRoute allowedRoles={["faculty"]} />}>
        <Route path="/faculty" element={<AppLayout />}>
          <Route index element={<Navigate to="/faculty/dashboard" replace />} />
          <Route path="dashboard" element={<FacultyDashboardPage />} />
          <Route path="students" element={<FacultyStudentsPage />} />
          <Route path="questions" element={<FacultyQuestionsPage />} />
          <Route path="mock-tests" element={<FacultyMockTestsPage />} />
          <Route path="reports" element={<FacultyReportsPage />} />
          <Route path="profile" element={<PlaceholderPage title="Faculty Profile" />} />
        </Route>
      </Route>

      {/* Admin Routes */}
      <Route element={<ProtectedRoute allowedRoles={["admin"]} />}>
        <Route path="/admin" element={<AppLayout />}>
          <Route index element={<Navigate to="/admin/dashboard" replace />} />
          <Route path="dashboard" element={<AdminDashboardPage />} />
          <Route path="users" element={<AdminUsersPage />} />
          <Route path="students" element={<AdminStudentsPage />} />
          <Route path="faculty" element={<AdminFacultyPage />} />
          <Route path="departments" element={<AdminDepartmentsPage />} />
          <Route path="questions" element={<AdminQuestionsPage />} />
          <Route path="mock-tests" element={<AdminMockTestsPage />} />
          <Route path="reports" element={<AdminReportsPage />} />
          <Route path="settings" element={<AdminSettingsPage />} />
          <Route path="profile" element={<PlaceholderPage title="Admin Profile" />} />
        </Route>
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default App
