import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Link,
  Box,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";
const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: "100vh",
    justifyContent: "center",
    backgroundColor: "#f0f0f0",
    padding: "20px",
  },
  form: {
    width: "100%",
    maxWidth: "400px",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    backgroundColor: "#ffffff",
    boxSizing: "border-box",
  },
  textField: {
    marginBottom: "20px",
  },
  submitButton: {
    marginTop: "20px",
  },
  signInLink: {
    marginTop: "10px",
    textAlign: "center",
  },
});

const Signup: React.FC = () => {
  const classes = useStyles();
  const history = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const handleSignUp = () => {
    // Replace this with actual sign-up logic
    console.log("Signing up...", email, password, confirmPassword);
   
  };

  return (
    <Container maxWidth="sm" className={classes.root}>
      <Typography variant="h4" gutterBottom>
        Sign Up
      </Typography>
      <Box className={classes.form}>
        <TextField
          className={classes.textField}
          label="Email"
          variant="outlined"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          className={classes.textField}
          label="Password"
          variant="outlined"
          fullWidth
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <TextField
          className={classes.textField}
          label="Confirm Password"
          variant="outlined"
          fullWidth
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Button
          className={classes.submitButton}
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleSignUp}
        >
          Sign Up
        </Button>
        <Typography className={classes.signInLink}>
          Already have an account? <Link href="#">Sign In</Link>
        </Typography>
      </Box>
    </Container>
  );
};

export default Signup;
