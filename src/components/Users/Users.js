import { useSearchParams } from "react-router-dom";
import { searchUsers } from "../../services/githubService";
import { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';

function Users() {

    const [searchParams] = useSearchParams();
    const username = searchParams.get('q');

    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
        const result = await searchUsers(username);

        console.log(result);
        setUsers(result);
    }

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <>
            {users.items?.map(user => (
                <Card key={user.id} style={{ width: '18rem' }} className="mb-3">
                    <Card.Img variant="top" src={user.avatar_url} />
                    <Card.Body>
                        <Card.Title>{user.login}</Card.Title>
                    </Card.Body>
                </Card>
            ))}
        </>
    );
}

export default Users;