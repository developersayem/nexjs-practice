import Link from "next/link";

const index = () => {
  return (
    <div>
      <h1>
        <Link href='/users'>
          Users
        </Link>
      </h1>
    </div>
  );
}

export default index;