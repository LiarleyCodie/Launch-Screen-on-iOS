import { ContinueButton } from "../../components/ContinueButton/ContinueButton";
import { CreateButton } from "../../components/CreateButton/CreateButton";

import "./Login.css";

export function Login() {
  return (
    <div className="Login">
      <nav>
        <span>
          Existing user? <a href='#'>Log in</a>
        </span>
      </nav>

      <div className="heading">
        <h1>Start learning with Drops</h1>
        <p>
          Track your learning progress, personalize
          your experience and earn achivements.
        </p>
      </div>
      
      <div className="buttons">
        <ContinueButton />
        <CreateButton />
      </div>

      <footer>
        <div className="swipe-bar"></div>
      </footer>
    </div>
  )
}
