import React from 'react'

function SignUp({ setIsLoggedIn }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmationMessage, setConfirmationMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'username') {
      setUsername(value);
    } else if (name === 'password') {
      setPassword(value);
    } else if (name === 'email') {
      setEmail(value);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    axios
      .post(
        '/users',
        { user: { username, email, password } },
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true
        }
      )
      .then(response => {
        console.log(response.data);
        setConfirmationMessage('Confirmed! You\'re in! Please login');
        setUsername('');
        setEmail('');
        setPassword('');
        setTimeout(() => {
          setConfirmationMessage('');
          navigate('/login');
        }, 3000);
      })
      .catch(error => console.error(error));
  };

  return (
    <div className="signup-container">
      <header>
        <img src={logo} alt="Logo" className="logo" />
      </header>
      <div className="signup-form-container">
        <form onSubmit={handleSubmit} className="signup-form">
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={username}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={handleChange}
            required
          />
          <button type="submit" className="signup-button">
            Sign Up
          </button>
          {confirmationMessage && (
            <p className="confirmation-message">{confirmationMessage}</p>
          )}
          <Link to="/login" className="login-link">
            Already have an account? Log in
          </Link>
        </form>
      </div>
    </div>
  );
}


export default SignUp