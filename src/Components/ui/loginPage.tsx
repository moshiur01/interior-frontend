"use client";
import Image from "next/image";
import loginImage1 from "../../assests/login-pic01.jpg";
import loginImage2 from "../../assests/login-pic02.jpg";
import { SubmitHandler } from "react-hook-form";
import Form from "./Form/Form";
import FormInput from "./Form/FormInput";
import { useUserLoginMutation } from "@/redux/api/authApi";
import { useRouter } from "next/navigation";
import { storeUserInfo } from "@/service/auth.service";

const LoginPage = () => {
  type FormValues = {
    id: string;
    password: string;
  };

  const [userLogin] = useUserLoginMutation();
  const router = useRouter();

  const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
    try {
      const res = await userLogin({ ...data }).unwrap();
      // console.log(res);
      if (res?.accessToken) {
        router.push("/");
        window.alert("Login Successfully");
      }
      storeUserInfo({ accessToken: res?.accessToken });

      // console.log(res);
    } catch (err: any) {
      console.error(err.message);
    }
  };

  return (
    <div className="grid grid-cols-12 h-screen">
      {/* Login image */}
      <div className="col-span-6 ml-32">
        <div className="relative ml-[200px] mt-[130px] items-center">
          <div>
            <Image
              src={loginImage2}
              alt="login image"
              style={{
                width: "448px",
                height: "601px",
              }}
            />
          </div>
          <Image
            src={loginImage1}
            alt="login image"
            style={{
              width: "406px",
              height: "486px",
              marginRight: "199px",
              position: "absolute",
              top: "50px",
              right: "-190px",
            }}
          />
        </div>
      </div>

      {/* Input Fields and Login Button */}
      <div className="col-span-6 flex items-center justify-start ml-28">
        <div>
          <Form submitHandler={onSubmit}>
            <FormInput
              name="email"
              label="Email"
              placeholder="Enter Your Email"
              size="w-96"
              type="email"
              color="border-amber-500"
            />
            <FormInput
              name="password"
              label="password"
              placeholder="Enter Your password"
              size="w-96"
              type="password"
              color="border-amber-500"
            />
            <br />
            <button className="btn rounded px-16 mt-8 bg-[#e4bb7d]">
              Login
            </button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
