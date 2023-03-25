import { useState } from "react";
import "./App.css";
import InputForm from "./InputForm/InputForm";
import UserContainer from "./DetailsContainer/DetailsContainer";

function App() {
    const [user, setUser] = useState(null);
    const [repos, setRepos] = useState(null);

    const handleFormSubmit = async (value) => {
        fetch("https://api.github.com/users/" + value)
            .then((res) => res.json())
            .then((data) => {
                setUser(data);
            });

        fetch("https://api.github.com/users/" + value + "/repos")
            .then((res) => res.json())
            .then((data) => {
                setRepos(data);
            });
    };

    const handleReset = () => {
        setUser(null);
        setRepos(null);
    };

    return (
        <div className="App">
            <InputForm onFormSubmit={handleFormSubmit} />
            <UserContainer onReset={handleReset} user={user} repos={repos} />
        </div>
    );
}

export default App;
