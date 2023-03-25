import React from "react";
import styles from "./RepoDetails.module.css";

export default function RepoDetails({ repos }) {
    return (
        <div className={styles.reposContainer}>
            <h2>Repositories:</h2>
            <ul>
                {repos.map((repo) => (
                    <li key={repo.id}>{repo.name}</li>
                ))}
            </ul>
        </div>
    );
}
