import React, { useState } from "react";
import Login from "../components/LoginSignup/login";// Assuming you have a Login component
import SignUpwin from "../components/LoginSignup/signup";

const SignUp = () => {
  const [showSignUp, setShowSignUp] = useState(true); // State to track whether to show sign up or login form

  return (
    <div>
      {/* Slide buttons for toggling between sign up and login forms */}
      <div>
        <button onClick={() => setShowSignUp(true)}>Sign Up</button>
        <button onClick={() => setShowSignUp(false)}>Login</button>
      </div>

      {/* Render sign up form if showSignUp is true, otherwise render login form */}
      {showSignUp ? (
          <SignUpwin/>
      ) : (
        <Login /> // Render login component
      )}
    </div>
  );
};


export default SignUp;
