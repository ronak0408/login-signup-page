import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // basic validation
    if (!email || !password) {
      setError('Please fill in all fields');
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post('https://login-signup-page-6bzr.onrender.com/api/auth/login', {
        email,
        password
      });

      onLogin(response.data.user, response.data.token);
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-image-section">
        <div className="image-overlay-text">
          <h1>Canvas Photography</h1>
          <p>Capture moments, create memories</p>
        </div>
      </div>

      <div className="auth-form-section">
        <div className="auth-form-wrapper">
          <div className="form-logo">
            <div className="logo-icon">
              <span>📷</span>
            </div>
            <span className="logo-text">Canvas</span>
          </div>

          <h2>Welcome Back</h2>
          <p className="subtitle">Sign in to continue to your account</p>

          {error && <div className="error-msg">{error}</div>}

          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="input-group">
              <label>Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="input-group">
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button type="submit" className="submit-btn" disabled={loading}>
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>

          <p className="switch-link">
            Don't have an account?
            <Link to="/signup">Create one</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;

