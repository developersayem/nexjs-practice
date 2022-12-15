const Photos = ({ user }) => {
    console.log(user)
    const { email, username, name } = user;
    return (
        <div className="card  bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{username}</p>
                <p>{email}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">See More</button>
                </div>
            </div>
        </div>
    );
}

export default Photos;