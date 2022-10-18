import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import UserProvider from '../state/UserContext';
import WelcomePage from '../components/WelcomePage/WelcomePage';
import SignInForm from '../components/WelcomePage/SignInForm';
import SignUpForm from './WelcomePage/SignUpForm';
import Welcome from './WelcomePage/Welcome';
import Layout from './Page/Layout';
import Dashboard from './Dashboard/Dashboard';
import ProtectedRoute from './WelcomePage/ProtectedRoutes';
import AboutPage from './AboutPage/AboutPage';
import ProfilePage from './ProfilePage/ProfilePage';

export default function App() {
  return (
    <Router>
      <UserProvider>
        <Routes>
          <Route path="welcome" element={<WelcomePage />}>
            <Route index element={<Welcome />} />
            <Route path="signup" element={<SignUpForm />} />
            <Route path="signin" element={<SignInForm />} />
          </Route>
          <Route element={<ProtectedRoute />}>
            <Route element={<Layout />}>
              <Route index element={<Dashboard />} />
              <Route path="profile" element={<ProfilePage />} />
              <Route path="about" element={<AboutPage />} />
            </Route>
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </UserProvider>
    </Router>
  );
}
