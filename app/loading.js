"use client";

import { RotatingLines } from "react-loader-spinner";

const loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <h1 className="text-slate-500 text-2xl">Loading...</h1>
      <RotatingLines
        visible={true}
        height="50"
        width="50"
        color="grey"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default loading;
