import { useAuth } from '../../state/UserContext.jsx';
import { FormButton, InputControl } from '../Forms/FormControls';
import styles from './SignUpForm.module.scss';
import { useForm } from '../Forms/useForm';
import CustomButton from '../Buttons/CustomButton.jsx';
import gitHubLogoWhite from '../../assets/github_logo_white.png';

export default function SignUpForm() {
  const { signUp, error } = useAuth();
  const [credentials, handleChange] = useForm({
    email: '',
    password: '',
  });

  const gitHubRedirect = () => {
    window.location.replace(
      'https://stellar-view.herokuapp.com/api/v1/github'
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signUp(credentials);
  };

  return (
    <div className={styles.SignUpForm}>
      <h2> Create an account </h2>
      <form className={styles.SignUpForm} onSubmit={handleSubmit}>
        
        <InputControl
          name="username"
          type="username"
          placeholder="Username"
          required
          value={credentials.username}
          onChange={handleChange}
        />

        <InputControl
          // label="Email"
          name="email"
          type="email"
          placeholder="Email"
          required
          value={credentials.email}
          onChange={handleChange}
        />

        <InputControl
          // label="Password"
          name="password"
          type="password"
          placeholder="Password"
          required
          value={credentials.password}
          onChange={handleChange}
        />
        

        <FormButton>Submit</FormButton>
        <h2>
          <hr></hr>OR 
        </h2>

        <CustomButton
          onClick={gitHubRedirect}
          style={{
            background: '#24292f',
            color: 'white',
          }}
        >
          <img src={gitHubLogoWhite} />
        Continue with GitHub
        </CustomButton>

        <p className="error">{error}</p>
      </form>
    </div>
  );
}
