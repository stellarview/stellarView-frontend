// import { Link } from 'react-router-dom';
import { useAuth } from '../../state/UserContext.jsx';
import { useForm } from '../Forms/useForm.js';
import { InputControl, FormButton } from '../Forms/FormControls.jsx';
import styles from './SignInForm.module.scss';

export default function SignInForm() {
  const { signIn, error } = useAuth();

  const [credentials, handleChange] = useForm({
    email: '',
    password: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signIn(credentials);
  };

  return (
    <form className={styles.SignInForm} onSubmit={handleSubmit}>
      <h2>Sign Into Your Account</h2>

      <InputControl
        placeholder="Email"
        name="email"
        type="email"
        required
        value={credentials.email}
        onChange={handleChange}
      />

      <InputControl
        placeholder ="Password"
        name="password"
        type="password"
        required
        value={credentials.password}
        onChange={handleChange}
      />

      <FormButton>Submit</FormButton>

      <p className="error">{error}</p>

      {/* <nav>
        <Link className={styles.Link} to={type.switch.link}>
          {type.switch.prompt}
        </Link>
      </nav> */}
    </form>
  );
}
