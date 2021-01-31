import { useRouter } from "next/router";
import Signup from "../components/Signup";
import { useUser } from "../context/UserContext";

const LoginPage = () => {
    const user = useUser();
    const router = useRouter();
    if (user) {
        router.push("/");
    }
    return <Signup />;
};

export default LoginPage;
