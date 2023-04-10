import { useState } from "react";
import { useGlobal } from "../context/AppContext";
import { signOut, getAuth } from "firebase/auth";
export default function Header() {
  const { darkMode, setDarkMode, columnView, setcolumnView, user, setUser } =
    useGlobal();
  const auth = getAuth();
  const [signoutOpen, setSignoutOpen] = useState(false);
  return (
    <header className=" h-16 p-2 px-4 bg-light-bg dark:bg-dark-bg border-b-[1px] border-light-border dark:border-dark-border text-light-h fixed top-0 w-screen">
      <div className="flex h-full items-center">
        <div className="px-[10px] py-[10px] rounded-full hover:bg-light-sec dark:hover:bg-dark-sec "></div>
        <h1 className=" mr-auto w-fit  text-2xl leading-6  font-semibold dark:text-dark-text text-light-h ">
          Keep
        </h1>

        <div
          onClick={() => {
            setcolumnView(!columnView);
          }}
          title="list view"
          className=" px-[10px] py-[10px] hover:bg-light-sec dark:hover:bg-dark-sec rounded-full"
        >
          {columnView ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill={darkMode ? "white" : "#5f6368"}
              className="rotate-90 bi bi-layout-three-columns"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.5A1.5 1.5 0 0 1 1.5 0h13A1.5 1.5 0 0 1 16 1.5v13a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 14.5v-13zM1.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5H5V1H1.5zM10 15V1H6v14h4zm1 0h3.5a.5.5 0 0 0 .5-.5v-13a.5.5 0 0 0-.5-.5H11v14z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill={darkMode ? "white" : "#5f6368"}
              className="bi bi-columns-gap"
              viewBox="0 0 16 16"
            >
              <path d="M6 1v3H1V1h5zM1 0a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1H1zm14 12v3h-5v-3h5zm-5-1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-5zM6 8v7H1V8h5zM1 7a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H1zm14-6v7h-5V1h5zm-5-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1h-5z" />
            </svg>
          )}
        </div>
        <div
          className="mx-4 rounded-full flex justify-center items-center hover:bg-light-sec dark:hover:bg-dark-sec px-[10px] py-[10px]"
          onClick={() => {
            setDarkMode(!darkMode);
          }}
        >
          {darkMode ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="lightgray"
              className="bi bi-brightness-high font-bold"
              viewBox="0 0 16 16"
            >
              <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="currentColor"
              className="bi bi-moon-fill"
              viewBox="0 0 16 16"
            >
              <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z" />
            </svg>
          )}
        </div>
        <div
          className="w-10 h-10 bg-orange rounded-full"
          onClick={() => {
            setSignoutOpen(!signoutOpen);
          }}
        >
          <div className=" m-auto w-fit h-fit text-3xl text-white relative group ">
            {user && user?.displayName[0].toUpperCase()}
            <div
              className={`absolute w-32 h-40 top-8 right-0 ${
                signoutOpen ? "block" : "hidden"
              } `}
            >
              <diiv className="bg-light-bg text-2xl dark:bg-dark-bg text-light-text dark:text-dark-text border border-light-border dark:border-dark-border">
                <button
                  className="p-2"
                  onClick={() => signOut(auth).then(() => setUser(null))}
                >
                  Sign Out
                </button>
              </diiv>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
