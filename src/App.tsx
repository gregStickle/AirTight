import { ChangeEvent, FormEvent, useState } from "react";
import "./styles.css";
import LoginForm from "./LoginForm";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(true);

  return (
    <div>
      <h1>AirTight</h1>
      <LoginForm isLogged={loggedIn}/>
    </div>
  )
}
