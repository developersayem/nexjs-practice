import { useRouter } from "next/router";

const blogs = () => {
    const router = useRouter();
    const num = router.query.blogs;
    return (
        <div>
            <h1>this is blogs page {num}</h1>
        </div>
    );
}

export default blogs;