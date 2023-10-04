import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";


const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Random = () => {

  const {gif, loading, fetchData} = useGif();

  return (
    <div className="w-1/2 bg-green-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">
      <h1 className="mt-[15px] uppercase text-2xl underline font-bold">a Random Gif</h1>

      {
        loading ? (<Spinner/>) : (<img src={gif} alt="Random GIF" width='450' />)
      }
      
      <button
        className="w-10/12 bg-green-300 font-bold text-lg py-2 rounded-lg mb-[20px]"
        onClick={() => fetchData()}
      >
        Generate
      </button>
    </div>
  );
};

export default Random;
