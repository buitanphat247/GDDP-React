import Button from "../components/button/Button";
import SignInForm from "../modules/SignInForm";

const SignInPage = () => {
  return (
    <div className="xl:grid xl:grid-cols-6 min-h-[100vh]">
      <div className="h-[100vh] xl:col-span-4 relative sm:hidden xl:block">
        <img
          className="w-full h-full"
          src="https://cafebiz.cafebizcdn.vn/162123310254002176/2023/4/28/vungtau-1682655913832-1682655914110523650811.jpg"
          alt=""
        />
        <div className="absolute top-0 w-full h-full bg-black opacity-40"></div>
      </div>
      <div className="select-none min-h-[100vh] sm:w-full xl:col-span-2 bg-blue-400 sm:px-3 md:px-4 lg:px-5 flex items-center flex-col justify-center gap-y-5">
        <h1 className="text-white font-bold capitalize sm:text-2xl md:text-3xl xl:text-4xl">
          Login
        </h1>
        <SignInForm></SignInForm>
        <>
          <h1 className="capitalize sm:text-base md:text-lg xl:text-xl flex gap-x-1">
            <span>already not have an account?</span>
            <span className="text-blue-700 cursor-pointer underline">
              Signup
            </span>
          </h1>
          <div className="flex gap-x-2 w-full justify-center items-center">
            <div className="border w-full h-[1px]"></div>
            <span className="text-xl capitalize sm:text-base md:text-lg xl:text-xl">
              or
            </span>
            <div className="border w-full h-[1px]"></div>
          </div>
          <div className="flex gap-x-2 bg-white rounded-md items-center w-[100%] h-[50px] select-none cursor-pointer">
            <div className="text-xl w-[50px] h-[40px] flex items-center text-blue-600 justify-center">
              <img
                className="w-[30px] h-[30px] object-cover"
                srcSet="./google.png"
                alt=""
              />
            </div>
            <h1 className="text-xl capitalize font-medium">
              signin with google
            </h1>
          </div>
          <Button
            isNavLink={true}
            url="/"
            className="bg-slate-900 w-full h-[50px] text-white flex items-center justify-center gap-x-3 rounded-md"
          >
            <span>
              <i className="fa-solid fa-house"></i>
            </span>
            <span>Back to Home</span>
          </Button>
        </>
      </div>
    </div>
  );
};

export default SignInPage;
