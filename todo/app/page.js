"use client";
import React, { useState } from "react";

const page = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [maintask, setmaintask] = useState([]);
  const submitHandler = (e) => {
    e.preventDefault();
    setmaintask([...maintask, { title, desc }]);
    console.log(title);
    console.log(desc);
    settitle("");
    setdesc("");
  };

  const deleteHandler = (i) =>{
    let copytask = [...maintask]
    copytask.splice(i,1)
    // pop(copytask, i);
    setmaintask(copytask)
  }

  let renderTask = <h2>No task available</h2>;

  if (maintask.length > 0) {
    renderTask = maintask.map((t, i) => {
      return (
        <li className="flex items-center justify-between mb-5">
          <div className="flex justify-between  w-2/3">
            <h5 className="text-xl font-semibold">{t.title}</h5>
            <h6 className="text-xl font-semibold">{t.desc}</h6>
            <button
              onClick={()=>{deleteHandler(i)}}
              className=" bg-red-600 text-white rounded font-bold px-4 py-2 mb-8"
            >
              Delete
            </button>
          </div>
        </li>
      );
    });
  }

  return (
    <>
      <h1 className="bg-brown py-5  text-beige font-bold text-center text-5xl">
        My Todo List
      </h1>

      <form className="py-5 " onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Enter your task"
          className="text-2xl border-zinc-800 border-4 m-8 px-4 py-2"
          value={title}
          onChange={(e) => {
            settitle(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Enter Discription Here"
          className="text-2xl border-zinc-800 border-4 m-8 px-4 py-2"
          value={desc}
          onChange={(e) => {
            setdesc(e.target.value);
          }}
        />
        <button className="bg-black text-white px-4 py-3 text-2xl font-bold rounded m-5">
          Add Task
        </button>

        <div className="p-8 bg-slate-200">
          <ul>{renderTask}</ul>
        </div>
      </form>
    </>
  );
};

export default page;
