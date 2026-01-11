import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AppLayout } from './components/AppLayout/AppLayout';
import { AnalyticsPage } from './pages/AnalyticsPage/AnalyticsPage';
import { AppealsPage } from './pages/AppealsPage/AppealsPage';
import { AIAssistantPage } from './pages/AIAssistantPage/AIAssistantPage';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <AppLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Navigate to="/analytics" replace />} />
          <Route path="analytics" element={<AnalyticsPage />} />
          <Route path="appeals" element={<AppealsPage />} />
          <Route path="ai-assistant" element={<AIAssistantPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
