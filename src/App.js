import './App.css';
import Login from "./components/Login";
import Welcome from "./components/Welcome";
import {useContext} from "react";
import {WelcomeContext} from "./providers/WelcomeProvider";


export default function App() {
    const {isWelcome, setWelcome} = useContext(WelcomeContext)
    return (
        <div>
            {isWelcome ? <Welcome/> : <Login/>}
        </div>
    );
}