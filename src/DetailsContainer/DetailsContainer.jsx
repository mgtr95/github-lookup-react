import React, { Component } from "react";
import RepoDetails from "../RepoDetails/RepoDetails";
import UserDetails from "../UserDetails/UserDetails";
import styles from "./DetailsContainer.module.css";

class DetailsContainer extends Component {
    render() {
        const { user, repos } = this.props;

        return (
            <div className={styles.UserContainer}>
                {user && <UserDetails user={user} />}
                {repos && <RepoDetails repos={repos} />}
            </div>
        );
    }
}

export default DetailsContainer;
