import './App.css';
import Login from "./components/Login";
import Welcome from "./components/Welcome";
import {useContext, useEffect} from "react";
import {WelcomeContext} from "./providers/WelcomeProvider";
import SingUp from "./components/SingUp";
import {useNavigate, useRoutes} from "react-router-dom";
export default function App() {
    const {isWelcome, setWelcome} = useContext(WelcomeContext);
    /*let navigate = useNavigate();
    useEffect(() => {
        if (!isWelcome){
            navigate('/')
        }
    }, []);*/
    const routes = useRoutes([
        {
            path: "/",
            element: isWelcome ? <Welcome/> : <Login />
        },
        {
            path: '/signup',
            element: isWelcome ? <Welcome/> : <SingUp />
        },
    ]);




    return (
        <div>
            {routes}

        </div>
    );
}