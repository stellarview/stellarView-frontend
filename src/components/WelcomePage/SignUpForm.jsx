import { useAuth } from '../../state/UserContext.jsx';
import { FormButton, InputControl } from '../Forms/FormControls';
import styles from './SignUpForm.module.scss';
import { useForm } from '../Forms/useForm';

export default function SignUpForm() {
  const { signUp, error } = useAuth();

  const [credentials, handleChange] = useForm({
    email: '',
    password: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signUp(credentials);
  };

  return(
    <form className={styles.SignUpForm} onSubmit={handleSubmit}>
      <h1>Create an Account</h1>
      <InputControl
        label="Email"
        name="email"
        type="email"
        required
        value={credentials.email}
        onChange={handleChange} />

      <InputControl
        label="Password"
        name="password"
        type="password"
        required
        value={credentials.password}
        onChange={handleChange}
      />

      <FormButton>Submit</FormButton>

      <p className="error">{error}</p>

    </form>

  );
}
