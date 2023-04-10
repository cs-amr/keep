import { useEffect, useState } from "react";
import { useGlobal } from "../context/AppContext";
import Card from "./Card";
import { doc, getDoc, onSnapshot, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useNavigate } from "react-router-dom";
import { colRef } from "../firebase";
import { v4 as uuidv4 } from "uuid";
export default function Board() {
  const [notes, setNotes] = useState();
  const [modalOpen, setModalOpen] = useState();
  const [onFocus, setOnFocus] = useState(false);
  const { user, darkMode, columnView } = useGlobal();
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("../login");
      return;
    }
    const unsub = onSnapshot(doc(db, "users", user.uid), (doc) => {
      setNotes(doc.data().notes);
    });
  }, [user]);

  function handleSubmit(e) {
    e.preventDefault();
    if (e.target[0].value || e.target[1].value) {
      setDoc(doc(db, "users", user.uid), {
        notes: notes
          ? [
              ...notes,
              {
                id: uuidv4(),
                title: e.target[0].value,
                note: e.target[1].value,
              },
            ]
          : [
              {
                id: uuidv4(),
                title: e.target[0].value,
                note: e.target[1].value,
              },
            ],
      });
    }
    e.target.reset();
  }
  function closeModal() {
    setModalOpen(false);
    const card = document.querySelector(".modal-card");
    if (card) {
      card.classList.remove("modal-card");
    }
  }
  return (
    <>
      <section
        className="bg-light-bg dark:bg-dark-bg min-h-screen w-full  mt-16"
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
            className=" shadow-lg rounded-md overflow-hidden  border-[1px] border-light-border dark:border-dark-border mx-auto  max-w-[600px] w-[90%]"
            onFocus={(e) => {
              e.stopPropagation();
              setOnFocus(true);
            }}
            onSubmit={handleSubmit}
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
                ></button>
                <button
                  className={`w-8 h-8  rounded-full hover:bg-light-sec dark:hover:bg-dark-sec ${
                    darkMode ? "text-dark-text" : "text-light-text"
                  }`}
                ></button>
                <button className="ml-auto text-light-text dark:text-dark-text mx-2 font-bold">
                  add
                </button>
                <button
                  className="text-light-text dark:text-dark-text mx-2 font-bold"
                  onClick={(e) => {
                    e.preventDefault();
                    setOnFocus(false);
                  }}
                >
                  close
                </button>
              </div>
            </div>
          </form>
        </div>
        <div>
          <div
            className={`  w-screen    mx-auto flex flex-wrap flex-row   ${
              columnView ? "max-w-[616px] grid" : "w-auto "
            }`}
          >
            {notes?.map(({ id, note, title, cardBg }, index) => {
              return (
                <Card
                  setModalOpen={setModalOpen}
                  modalOpen={modalOpen}
                  key={index}
                  id={id}
                  note={note}
                  title={title}
                  notes={notes}
                  index={index}
                  cardBg={cardBg}
                />
              );
            })}
          </div>
        </div>
      </section>
      <div
        onClick={closeModal}
        className={`fixed left-0 top-0 w-screen h-screen bg-[#0e0d0d] dark:bg-[#0e0d0d] opacity-30 ${
          modalOpen ? "block" : "hidden"
        }`}
      ></div>
    </>
  );
}
