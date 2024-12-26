import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Signin.css";
import logo from "../images/logo.svg";
import git from "../images/git.svg";
import bit from "../images/bitbucket.svg";
import azure from "../images/azure.svg";
import gitlab from "../images/gitlab.svg";
import sso from "../images/sso.svg";

function Signin() {
  const [isSelfHosted, setIsSelfHosted] = useState(false);
  const [loadingButton, setLoadingButton] = useState(null); // Tracks which button is loading
  const [isLoading, setIsLoading] = useState(false); // Tracks global loading state
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Simulated authentication function
  const authenticateUser = async (provider) => {
    setLoadingButton(provider); // Set the button that is loading
    setIsLoading(true); // Show global loading spinner
    setError("");

    try {
      // Simulate an API call (replace this with a real API call)
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          provider !== "errorProvider" ? resolve() : reject("Authentication failed");
        }, 1000);
      });

      // Navigate if authentication is successful
      navigate("/codeant");
    } catch (err) {
      setError(err);
    } finally {
      setLoadingButton(null); // Reset button-specific loading state
      setIsLoading(false); // Reset global loading state
    }
  };

  const handleSignIn = (provider) => {
    authenticateUser(provider);
  };

  return (
    <div className="signin-container">
      {isLoading && <div className="loading-spinner-overlay">
        <div className="spinner"></div>
      </div>}
      <div className="signbox">
        <header className="signin-header">
          <img src={logo} alt="CodeAnt AI Logo" className="logo" />
          <p>CodeAnt AI</p>
        </header>
        <div className="signin-tabs">
          <p>Welcome to CodeAnt AI</p>
          <button
            className={`tab ${!isSelfHosted ? "active" : ""}`}
            onClick={() => setIsSelfHosted(false)}
          >
            SAAS
          </button>
          <button
            className={`tab ${isSelfHosted ? "active" : ""}`}
            onClick={() => setIsSelfHosted(true)}
          >
            Self Hosted
          </button>
        </div>
        <hr className="divider" />
        <div className="signin-options">
          {isSelfHosted ? (
            <>
              <button
                className="signin-button"
                onClick={() => handleSignIn("selfHostedGitLab")}
                disabled={loadingButton === "selfHostedGitLab" || isLoading}
              >
                <img src={gitlab} alt="Self Hosted GitLab" />
                {loadingButton === "selfHostedGitLab" ? "Signing In..." : "Self Hosted GitLab"}
              </button>
              <button
                className="signin-button"
                onClick={() => handleSignIn("selfHostedSSO")}
                disabled={loadingButton === "selfHostedSSO" || isLoading}
              >
                <img src={sso} alt="Self Hosted SSO" />
                {loadingButton === "selfHostedSSO" ? "Signing In..." : "Self Hosted SSO"}
              </button>
            </>
          ) : (
            <>
              <button
                className="signin-button"
                onClick={() => handleSignIn("github")}
                disabled={loadingButton === "github" || isLoading}
              >
                <img src={git} alt="Github" />
                {loadingButton === "github" ? "Signing In..." : "Sign in with Github"}
              </button>
              <button
                className="signin-button"
                onClick={() => handleSignIn("bitbucket")}
                disabled={loadingButton === "bitbucket" || isLoading}
              >
                <img src={bit} alt="Bitbucket" />
                {loadingButton === "bitbucket" ? "Signing In..." : "Sign in with Bitbucket"}
              </button>
              <button
                className="signin-button"
                onClick={() => handleSignIn("azure")}
                disabled={loadingButton === "azure" || isLoading}
              >
                <img src={azure} alt="Azure DevOps" />
                {loadingButton === "azure" ? "Signing In..." : "Sign in with Azure DevOps"}
              </button>
              <button
                className="signin-button"
                onClick={() => handleSignIn("gitlab")}
                disabled={loadingButton === "gitlab" || isLoading}
              >
                <img src={gitlab} alt="GitLab" />
                {loadingButton === "gitlab" ? "Signing In..." : "Sign in with GitLab"}
              </button>
            </>
          )}
        </div>
        {error && <p className="error-message">{error}</p>}
      </div>
      <p className="agree">
        By signing up you agree to the <span>Privacy Policy</span>.
      </p>
    </div>
  );
}

export default Signin;
