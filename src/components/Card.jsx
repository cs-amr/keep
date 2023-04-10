import { doc, updateDoc } from "firebase/firestore";
import { useGlobal } from "../context/AppContext";
import { db } from "../firebase";
import { useEffect, useRef, useState } from "react";

export default function Card({
  index,
  cardBg,
  modalOpen,
  setModalOpen,
  notes,
  title,
  note,
  id,
}) {
  const titleRef = useRef(null);
  const noteRef = useRef(null);
  const [colorsBarOpen, setColorsBarOpen] = useState(false);
  const [bgImgsBarOpen, setBgImgsBarOpen] = useState(false);
  const { darkMode, columnView, user } = useGlobal();

  function handleClick(e) {
    e.stopPropagation();
    if (
      noteRef.current.innerText.length > 0 &&
      titleRef.current.innerText.length > 0
    ) {
      notes[index].note = noteRef.current.innerText;
      notes[index].title = titleRef.current.innerText;
    } else {
      notes.splice(index, 1);
    }
    const updatedNotes = notes;

    updateDoc(doc(db, "users", user.uid), {
      notes: updatedNotes,
    });
    setModalOpen(false);
    const card = document.querySelector(".modal-card");
    if (card) {
      card.classList.remove("modal-card");
    }
    setColorsBarOpen(false);
    setBgImgsBarOpen(false);
  }

  function removeCard(e) {
    e.stopPropagation();
    notes.splice(index, 1);
    updatedNotes = notes;
    updateDoc(doc(db, "users", user.uid), {
      notes: updatedNotes,
    });
    setModalOpen(false);
    const card = document.querySelector(".modal-card");
    if (card) {
      card.classList.remove("modal-card");
    }
    setColorsBarOpen(false);
    setBgImgsBarOpen(false);
  }
  function setCardBg(e) {
    e.stopPropagation();
    notes[index].cardBg = e.target.getAttribute("data-bg");
    const updatedNotes = notes;
    updateDoc(doc(db, "users", user.uid), {
      notes: updatedNotes,
    });
    setModalOpen(false);
    const card = document.querySelector(".modal-card");
    if (card) {
      card.classList.remove("modal-card");
    }
  }
  return (
    <div
      onClick={(e) => {
        setModalOpen(true);

        e.currentTarget.classList.add("modal-card");
      }}
      className={`px-4 bg-light-bg dark:bg-dark-bg  shadow-md  min-w-[240px] h-32 group border border-light-border dark:border-dark-border rounded-md m-4 text-light-text dark:text-dark-text  ${
        columnView ? "justify-stretch" : "max-w-[240px]"
      } ${
        cardBg &&
        `bg-${cardBg} border-none dark:bg-dark-${cardBg} bg-center bg-cover`
      }`}
    >
      <p
        ref={titleRef}
        contentEditable
        suppressContentEditableWarning={true}
        className="text-ellipsis whitespace-nowrap overflow-hidden outline-none  pt-3 font-medium text-base "
      >
        {title}
      </p>
      <p
        ref={noteRef}
        contentEditable
        suppressContentEditableWarning={true}
        className="text-ellipsis whitespace-nowrap overflow-hidden outline-none pt-[4px] pb-3 text-lg font-normal"
      >
        {note}
      </p>
      <div className="opacity-0 duration-300 group-hover:opacity-100">
        <div className={` my-[10px] flex }`}>
          <button
            className={`relative w-8 h-8   rounded-full hover:bg-light-sec dark:hover:bg-dark-sec ${
              darkMode ? "text-dark-text" : "text-light-text"
            }`}
            onClick={() => {
              setBgImgsBarOpen(false);
              setColorsBarOpen(!colorsBarOpen);
            }}
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
            <div
              className={`border max-w-[440px] border-light-border  dark:border-dark-border rounded absolute top-9 -left-4 shadow-md  h-18 p-1 bg-light-bg dark:bg-dark-bg w-[60vw] overflow-scroll ${
                colorsBarOpen && modalOpen ? "block" : "hidden"
              } `}
            >
              <ul className="flex gap-2">
                <li
                  data-bg={""}
                  onClick={setCardBg}
                  className="min-w-[28px] min-h-[28px] rounded-full border dark:border-dark-border  bg-light-bg dark:bg-dark-bg"
                ></li>
                <li
                  data-bg={"red"}
                  onClick={setCardBg}
                  className="min-w-[28px] min-h-[28px] rounded-full border dark:border-dark-border  bg-red dark:bg-dark-red"
                ></li>
                <li
                  data-bg={"orange"}
                  onClick={setCardBg}
                  className="min-w-[28px] min-h-[28px] rounded-full border dark:border-dark-border  bg-orange dark:bg-dark-orange"
                ></li>
                <li
                  data-bg={"yellow"}
                  onClick={setCardBg}
                  className="min-w-[28px] min-h-[28px] rounded-full border dark:border-dark-border  bg-yellow dark:bg-dark-yellow"
                ></li>

                <li
                  data-bg={"teal"}
                  onClick={setCardBg}
                  className="min-w-[28px] min-h-[28px] rounded-full border dark:border-dark-border  bg-teal dark:bg-dark-teal"
                ></li>
                <li
                  data-bg={"blue"}
                  onClick={setCardBg}
                  className="min-w-[28px] min-h-[28px] rounded-full border dark:border-dark-border  bg-blue dark:bg-dark-blue"
                ></li>
                <li
                  data-bg={"darkblue"}
                  onClick={setCardBg}
                  className="min-w-[28px] min-h-[28px] rounded-full border dark:border-dark-border  bg-darkblue dark:bg-dark-darkblue"
                ></li>
                <li
                  data-bg={"purple"}
                  onClick={setCardBg}
                  className="min-w-[28px] min-h-[28px] rounded-full border dark:border-dark-border  bg-purple dark:bg-dark-purple"
                ></li>
                <li
                  data-bg={"pink"}
                  onClick={setCardBg}
                  className="min-w-[28px] min-h-[28px] rounded-full border dark:border-dark-border  bg-pink dark:bg-dark-pink"
                ></li>
                <li
                  data-bg={"brown"}
                  onClick={setCardBg}
                  className="min-w-[28px] min-h-[28px] rounded-full border dark:border-dark-border  bg-brown dark:bg-dark-brown"
                ></li>
                <li
                  data-bg={"gray"}
                  onClick={setCardBg}
                  className="min-w-[28px] min-h-[28px] rounded-full border dark:border-dark-border  bg-gray dark:bg-dark-gray"
                ></li>
              </ul>
            </div>
          </button>
          <button
            onClick={() => {
              setColorsBarOpen(false);
              setBgImgsBarOpen(!bgImgsBarOpen);
            }}
            className={`relative w-8 h-8  rounded-full hover:bg-light-sec dark:hover:bg-dark-sec mr-auto ${
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
            <div
              className={`border max-w-[300px] border-light-border  dark:border-dark-border rounded absolute top-9 -left-4 shadow-md  h-18 p-1 bg-light-bg dark:bg-dark-bg w-[60vw] overflow-scroll ${
                bgImgsBarOpen && modalOpen ? "block" : "hidden"
              }`}
            >
              <ul className="flex gap-2">
                <li
                  data-bg={"celebration"}
                  onClick={setCardBg}
                  className="min-w-[28px] min-h-[28px] rounded-full  bg-celebration bg-contain bg-center"
                ></li>
                <li
                  data-bg={"food"}
                  onClick={setCardBg}
                  className="min-w-[28px] min-h-[28px] rounded-full  bg-food bg-contain bg-center"
                ></li>
                <li
                  data-bg={"grocery"}
                  onClick={setCardBg}
                  className="min-w-[28px] min-h-[28px] rounded-full  bg-grocery bg-contain bg-center"
                ></li>
                <li
                  data-bg={"music"}
                  onClick={setCardBg}
                  className="min-w-[28px] min-h-[28px] rounded-full  bg-music bg-contain bg-center"
                ></li>
                <li
                  data-bg={"notes"}
                  onClick={setCardBg}
                  className="min-w-[28px] min-h-[28px] rounded-full  bg-notes bg-contain bg-center"
                ></li>
                <li
                  data-bg={"places"}
                  onClick={setCardBg}
                  className="min-w-[28px] min-h-[28px] rounded-full  bg-places bg-contain bg-center"
                ></li>
                <li
                  data-bg={"recipe"}
                  onClick={setCardBg}
                  className="min-w-[28px] min-h-[28px] rounded-full  bg-recipe bg-contain bg-center"
                ></li>
                <li
                  data-bg={"video"}
                  onClick={setCardBg}
                  className="min-w-[28px] min-h-[28px] rounded-full  bg-video bg-contain bg-center"
                ></li>
              </ul>
            </div>
          </button>
          <button
            className="text-light-text    dark:text-dark-text font-semibold ml-auto mr-4 hidden"
            onClick={removeCard}
          >
            delete
          </button>
          <button
            className="text-light-text    dark:text-dark-text font-semibold  mr-4 hidden"
            onClick={handleClick}
          >
            save
          </button>
        </div>
      </div>
    </div>
  );
}
