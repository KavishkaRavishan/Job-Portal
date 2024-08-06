import React from "react";
import { useNavigate } from "react-router-dom";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "../firebase/firebase.config";
import { getAuth } from "firebase/auth";

const Login = () => {
  const navigate = useNavigate();
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const handleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        navigate("/"); // Redirect to '/' after successful login
      })
      .catch((error) => {
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        // Handle Errors here.
      });
  };

  return (
    <div className="h-screen w-full flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-700">
          Welcome Back!
        </h2>
        <p className="mb-8 text-center text-gray-600">
          Sign in to continue to your account
        </p>
        <button
          className="bg-green-500 w-full py-2 rounded-sm text-white hover:bg-green-600 transition duration-200"
          onClick={handleLogin}
        >
          Login with Google
        </button>

        <div className="mt-6 text-center">
          <a href="#" className="text-blue-500 hover:underline">
            Forgot password?
          </a>
        </div>
        <div className="mt-6 text-center text-gray-500">
          Don't have an account?{" "}
          <a href="#" className="text-blue-500 hover:underline">
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
