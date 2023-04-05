import { Link } from "react-router-dom";
export default function Login() {
  return (
    <div className="flex items-center justify-center bg-light-bg dark:bg-dark-bg h-screen ">
      <div className="bg-white dark:bg-[#2b2c37] dark:border-[#20212c] px-12 py-8 border shadow rounded-lg">
        <form className="flex flex-col gap-6">
          <input
            type="email"
            name="email"
            placeholder="Email"
            id="email"
            className="px-4 py-2 w-full border-b-2 focus:outline-none text-lg bg-transparent dark:text-white"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            id="password"
            className="px-4 py-2 w-full border-b-2 focus:outline-none text-lg bg-transparent dark:text-white"
          />
          <button className=" p-2 mt-4 text-white font-semibold   hover:bg-[#625fc7bc] text-lg">
            Log In
          </button>
          <p className="dark:text-white text-sm">
            You Don't Have An Account?
            <Link to="../register" className="text-btn-clr font-bold ml-1">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
