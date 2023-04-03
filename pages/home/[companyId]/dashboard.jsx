import { useRouter, withRouter } from "next/router";
import { useEffect } from "react";

const Dashboard = (props) => {
    // console.log(props.router.query);
    const router = useRouter();
    // useEffect(() => {     
    //     console.log(window.scrollY)
    // }, [])
    return (
        <>
            <h1>This is dashboard</h1>
            <button onClick={() => router.push('/contact-us')}>Contact US</button>
        </>
    )
}

export default withRouter(Dashboard);