import { useSearchParams } from "react-router-dom";

function Users() {

    const [searchParams] = useSearchParams();
    const username = searchParams.get('q');

    return (
        <div>
            Users Component {username}
        </div>
    );
}

export default Users;