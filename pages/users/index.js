import User from "../../components/User/User";

const users = ({ users }) => {
    return (
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-16">
            {
                users.map(user => <User key={user.id} user={user}></User>)
            }
        </div>
    );
}

export default users;

export const getStaticProps = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await res.json();

    return {
        props: {
            users: data
        }
    }
}