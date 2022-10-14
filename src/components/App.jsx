import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import UserProvider from '../state/UserContext';
import WelcomePage from '../components/WelcomePage/WelcomePage';
import GreetingElement from '../components/WelcomePage/GreetingElement';
import SignInForm from '../components/WelcomePage/SignInForm';
import SignUpForm from './WelcomePage/SignUpForm';

export default function App() {
  return (
    <Router>
      <UserProvider>
        <Routes>
          <Route path="/" element={<WelcomePage />}>
            <Route path="hello" index element={<GreetingElement />} />
            <Route path="signup" element={<SignUpForm />} />
            <Route path="signin" element={<SignInForm />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </UserProvider>
    </Router>
  );
}
