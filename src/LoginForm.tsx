import { useState, FormEvent, ChangeEvent } from "react";

export default function LoginForm({isLogged}: {isLogged: boolean}) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    function handleSubmit(event: FormEvent<HTMLFormElement>): void {
        event.preventDefault();
        console.log(`Username: ${username}, Password: ${password}`);

      }

      function handleUsernameChange(event: ChangeEvent<HTMLInputElement>): void {
        setUsername(event.target.value);
      }
    
      const handlePasswordChange = (event:any) => {
        setPassword(event.target.value);
      }

    if(isLogged) {
        return null;
    }
    return (
        <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" value={username} onChange={handleUsernameChange}/>
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={handlePasswordChange}/>
        </label>
        <button type="submit">Submit</button>
      </form>
    );
}