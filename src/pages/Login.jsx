import { Link } from "react-router-dom";
export default function Login() {
  return (
    <div className="flex items-center justify-center  bg-[#121212] h-screen ">
      <div className="bg-[#1c1c1c] border-dark-border border-2  px-12 py-8   rounded-lg">
        <form className="flex flex-col gap-6">
          <h1 className="w-fit mx-auto text-3xl leading-6 text-white font-bold mb-4">
            Keep
          </h1>
          <input
            type="email"
            name="email"
            placeholder="Email"
            id="email"
            className="px-4 py-2 w-full border-b-2 focus:outline-none text-lg bg-transparent text-white"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            id="password"
            className="px-4 py-2 w-full border-b-2 focus:outline-none text-lg bg-transparent text-white"
          />
          <button className=" p-2 mt-4 text-black font-semibold bg-[#cf6679] hover:bg-[#cf667995]  text-lg">
            Log In
          </button>
          <p className="text-white text-sm">
            Don't Have An Account?
            <Link to="../register" className="text-btn-clr font-bold ml-1">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
