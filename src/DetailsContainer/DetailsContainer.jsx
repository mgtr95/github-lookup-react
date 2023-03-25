import React, { Component } from "react";
import RepoDetails from "../RepoDetails/RepoDetails";
import UserDetails from "../UserDetails/UserDetails";
import styles from "./DetailsContainer.module.css";
import { Button } from "bootstrap";

class DetailsContainer extends Component {
    render() {
        const { user, repos, onReset } = this.props;

        return (
            <div className={styles.UserContainer}>
                {user && <UserDetails user={user} />}
                {repos && <RepoDetails repos={repos} />}
                <button onClick={onReset}>Reset</button>
            </div>
        );
    }
}

export default DetailsContainer;
