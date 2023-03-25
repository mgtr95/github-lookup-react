import React from "react";
import styles from "./UserDetails.module.css";

export default function UserDetails({ user }) {
    return (
        <div className={styles.detailsContainer}>
            <div className={styles.imageContainer}>
                <img
                    className={styles.avatar}
                    src={user.avatar_url}
                    alt="User avatar"
                />
            </div>
            <div className={styles.infoContainer}>
                <h1>{user.name}</h1>
                <p className={styles.bio}>Bio: {user.bio}</p>
                <p className={styles.location}>Location: {user.location}</p>
            </div>
        </div>
    );
}
