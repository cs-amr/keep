import { useRef, useState } from "react";
import { useGlobal } from "../context/AppContext";
import Card from "./Card";

export default function Board() {
  const [onFocus, setOnFocus] = useState(false);
  const { darkMode, columnView } = useGlobal();
  return (
    <section
      className="bg-light-bg dark:bg-dark-bg  mt-16"
      onClick={(e) => {
        setOnFocus(false);
      }}
    >
      <div
        className="py-8 "
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <form
          className="shadow-sm  rounded-md overflow-hidden  border-[1px] border-light-border dark:border-dark-border mx-auto  max-w-[600px] w-full"
          onFocus={(e) => {
            e.stopPropagation();
            setOnFocus(true);
          }}
        >
          <input
            className={`w-full bg-light-bg dark:bg-dark-bg font-semibold px-[15px] py-[10px] text-light-h dark:text-dark-text focus:outline-none cursor-text ${
              onFocus ? "block" : "hidden"
            }`}
            contentEditable
            suppressContentEditableWarning={true}
            placeholder="Title"
            onClick={(e) => {
              e.stopPropagation();
            }}
          ></input>
          <input
            className="w-full font-semibold bg-light-bg dark:bg-dark-bg  text-sm dark:text-dark-text  text-light-text text-[15px] px-4 py-3 focus:outline-none cursor-text"
            placeholder="Take a note..."
            onClick={(e) => {
              e.stopPropagation();
            }}
          ></input>
          <div>
            <div className={` mx-4 my-[10px] ${onFocus ? "flex" : "hidden"}`}>
              <button
                className={`w-8 h-8   rounded-full hover:bg-light-sec dark:hover:bg-dark-sec ${
                  darkMode ? "text-dark-text" : "text-light-text"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-palette m-auto"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm4 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM5.5 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm.5 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                  <path d="M16 8c0 3.15-1.866 2.585-3.567 2.07C11.42 9.763 10.465 9.473 10 10c-.603.683-.475 1.819-.351 2.92C9.826 14.495 9.996 16 8 16a8 8 0 1 1 8-8zm-8 7c.611 0 .654-.171.655-.176.078-.146.124-.464.07-1.119-.014-.168-.037-.37-.061-.591-.052-.464-.112-1.005-.118-1.462-.01-.707.083-1.61.704-2.314.369-.417.845-.578 1.272-.618.404-.038.812.026 1.16.104.343.077.702.186 1.025.284l.028.008c.346.105.658.199.953.266.653.148.904.083.991.024C14.717 9.38 15 9.161 15 8a7 7 0 1 0-7 7z" />
                </svg>
              </button>
              <button
                className={`w-8 h-8  rounded-full hover:bg-light-sec dark:hover:bg-dark-sec ${
                  darkMode ? "text-dark-text" : "text-light-text"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-image-fill m-auto"
                  viewBox="0 0 16 16"
                >
                  <path d="M.002 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2V3zm1 9v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12zm5-6.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0z" />
                </svg>
              </button>
              <button className="text-light-text dark:text-dark-text mx-2 font-bold">
                add
              </button>
              <button className="text-light-text dark:text-dark-text mx-2 font-bold">
                close
              </button>
            </div>
          </div>
        </form>
      </div>
      <div>
        <div
          className={`  w-screen h-screen border px-8 mx-auto flex flex-wrap flex-row  border-orange-400  ${
            columnView ? "max-w-[616px] px-0  grid  " : "w-auto"
          }`}
        >
          <Card />
        </div>
      </div>
    </section>
  );
}
