import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  return (
    <div className="flex items-center justify-center bg-[#121212]  h-screen ">
      <div className="bg-[#1c1c1c] border-dark-border border-2  px-12 py-8   rounded-lg">
        <form className="flex flex-col gap-6">
          <h1 className="w-fit mx-auto text-3xl leading-6 text-white font-bold mb-4">
            keep
          </h1>
          <input
            type="text"
            name="userName"
            placeholder="User Name"
            id="userName"
            className="px-4 py-2  border-b-2 focus:outline-none focus:border-btn-clr w-72 text-lg bg-transparent text-white"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            id="email"
            className="px-4 py-2 w-full border-b-2 focus:outline-none focus:border-btn-clr text-lg bg-transparent text-white"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            id="password"
            className="px-4 py-2 w-full border-b-2 focus:outline-none focus:border-btn-clr text-lg bg-transparent text-white"
          />

          <button className="p-2 mt-4 text-black font-semibold bg-[#cf6679] hover:bg-[#cf667995]  text-lg">
            Sign Up
          </button>
          <p className="text-white">
            Have An Account?{" "}
            <Link to="../login" className="text-btn-clr font-bold ml-1">
              Log In
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
