import React, { useState } from "react";
import { Button, TextField, Box, Typography } from "@mui/material";
import { loginUser } from "../api/auth"; // Import API function
import "../styles.css";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleLogin = async () => {
    try {
      setError(""); // Clear any previous errors
      setSuccessMessage(""); // Clear any previous success messages

      const user = await loginUser({ email, password });
      setSuccessMessage("Logged in successfully!"); // Set success message
    } catch (err) {
      setError("Invalid credentials. Please try again."); // Set error message
    }
  };

  return (
    <Box className="login-page">
      <Box className="login-container">
        {/* Welcome Text */}
        <Typography variant="h5" className="welcome-text">
          Welcome back!
        </Typography>

        {/* Input Fields */}
        <Box className="input-group">
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            className="input-field"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            className="input-field"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* Hint Text */}
          {error && (
            <Typography className="hint-text">
              {error}
            </Typography>
          )}
          {successMessage && (
            <Typography className="success-text">
              {successMessage}
            </Typography>
          )}
        </Box>

        {/* Login Button */}
        <Button variant="contained" className="login-button" onClick={handleLogin}>
          Login
        </Button>
      </Box>
    </Box>
  );
};

export default LoginPage;
