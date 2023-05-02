import { useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import "./TodoApp.css";

export default function TodoApp() {
    return (
        <div className="todoApp">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoginComponent />}></Route>
                    <Route path="/login" element={<LoginComponent />}></Route>
                    <Route path="/welcome" element={<WelcomeComponent />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

function LoginComponent() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showErrorMessage, setShowErrorMessage] = useState(false);
    const navigate = useNavigate();

    function handelUserNameChange(event) {
        setUsername(event.target.value);
    }

    function handelPasswordChange(event) {
        setPassword(event.target.value);
    }

    function handeleSubmit(event) {
        console.log(username, password);
        if (username === "mhv_adm" && password === "1234") {
            navigate("/welcome");
        }
        else {
            setShowErrorMessage(true);
        }
    }

    return (
        <div className="login">
            {showErrorMessage && <div className="errorMessage">Authentication Failed !!</div>}
            <div className="loginForm">
                <div>
                    <label>Username</label>
                    <input type="text" name="username" placeholder="username" value={username} onChange={handelUserNameChange} />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" placeholder="password" value={password} onChange={handelPasswordChange} />
                </div>
                <div>
                    <button type="submit" name="signin" onClick={handeleSubmit}>LOG IN</button>
                </div>
            </div>
        </div>
    );
}

function WelcomeComponent() {
    return (
        <div className="welcome">
            Welcome Component
        </div>
    );
}