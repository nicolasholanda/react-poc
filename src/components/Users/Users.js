import { useSearchParams } from "react-router-dom";
import { searchUsers } from "../../services/githubService";
import { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import styles from './Users.module.css';

function Users() {

    const [searchParams] = useSearchParams();
    const username = searchParams.get('q');

    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            const result = await searchUsers(username);

            console.log(result);
            setUsers(result);
        }

        fetchUsers();
    }, [username]);

    return (
        <Container className={styles.container}>
            <p className={styles.resultsCount}>{users.total_count?.toLocaleString()} users</p>
            {users.items?.map(user => (
                <div key={user.id} className={styles.userCard}>
                    <img src={user.avatar_url} alt={user.login} className={styles.avatar} />
                    <div className={styles.userInfo}>
                        <div className={styles.nameRow}>
                            <a href={user.html_url} target="_blank" rel="noreferrer" className={styles.username}>
                                {user.login}
                            </a>
                        </div>
                        <p className={styles.bio}>{user.bio}</p>
                        <div className={styles.meta}>
                            {user.location && <span className={styles.metaItem}>{user.location}</span>}
                        </div>
                    </div>
                </div>
            ))}
        </Container>
    );
}

export default Users;