import Link from "next/link";
import axios from "axios";

export async function getServerSideProps(ctx){
    const { username } = ctx.query;

    console.log("ctx",ctx)
    const userReq =
        await axios.get(`https://reqres.in/api/users/${username}`);

    return {
        props: {
            user: userReq.data.data,
        },
    };
}

function UserPage({user}){
    console.log(user)
    return(
        <div>
            <div>
                <Link href="/" passHref>
                    back to home
                </Link>
            </div>
            <div>
                {user.first_name}
            </div>
            <div>
                {user.avatar}
            </div>
            <div>
                {user.email}
            </div>
            <div>
                {user.id}
            </div>
        </div>
    )
}

export default UserPage;