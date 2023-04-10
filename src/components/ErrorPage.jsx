import React from "react";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className="pt-40 bg-light-bg dark:bg-dark-bg h-screen">
      <h1
        className="  text-light-text dark:text-dark-text text-2xl w-fit
       mx-auto"
      >
        404
      </h1>
      <h1
        className="text-light-text dark:text-dark-text text-2xl w-fit
       mx-auto"
      >
        Page Not Found
      </h1>
      <Link
        className="mt-4  text-darkblue dark:text-darkblue text-xl block w-fit mx-auto
       "
        to="../"
      >
        GO TO HOME PAGE
      </Link>
    </div>
  );
}
