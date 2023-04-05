import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  return (
    <div className="flex items-center justify-center bg-[#f4f7fd] dark:bg-[#20212c] h-screen ">
      <div className="bg-white dark:bg-[#2b2c37] dark:border-[#20212c] px-12 py-8 border shadow rounded-lg">
        <form className="flex flex-col gap-6">
          <input
            type="text"
            name="userName"
            placeholder="User Name"
            id="userName"
            className="px-4 py-2  border-b-2 focus:outline-none focus:border-btn-clr w-72 text-lg bg-transparent dark:text-white"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            id="email"
            className="px-4 py-2 w-full border-b-2 focus:outline-none focus:border-btn-clr text-lg bg-transparent dark:text-white"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            id="password"
            className="px-4 py-2 w-full border-b-2 focus:outline-none focus:border-btn-clr text-lg bg-transparent dark:text-white"
          />

          <button className="bg-[#635fc7] mt-4 text-white font-semibold   hover:bg-[#625fc7bc] text-lg py-2 ">
            Sign Up
          </button>
          <p className="dark:text-white">
            You Have An Account?{" "}
            <Link to="../login" className="text-btn-clr font-bold ml-1">
              Log In
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
