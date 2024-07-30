import React from 'react';

export default function Burger ({ isOpen, setOpen }) {
    return (
        <button onClick={setOpen} className="flex flex-col h-12 w-12 justify-center items-center group">
            <div className={`h-1 w-10 my-1 rounded-full bg-white transition ease transform ${isOpen ? "rotate-45 translate-y-3" : ""}`} />
            <div className={`h-1 w-10 my-1 rounded-full bg-white transition ease transform ${isOpen ? "opacity-0" : ""}`} />
            <div className={`h-1 w-10 my-1 rounded-full bg-white transition ease transform ${isOpen ? "-rotate-45 -translate-y-3" : ""}`} />
        </button>
    );
}


