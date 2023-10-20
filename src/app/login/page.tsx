import LoginPage from "@/Components/ui/loginPage";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Interior Design Login ",
  description: "Login page",
};

const Login = () => {
  return <LoginPage />;
};

export default Login;
