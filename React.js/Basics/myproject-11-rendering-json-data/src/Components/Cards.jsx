import React from 'react'

const Cards = (props) => {
    return (
        <div className="bg-white text-white p-6 rounded shadow-md
                    flex flex-col items-center text-center
                    inline-block w-64 m-4">
            <img
                className="h-32 w-32 rounded-full mb-3 object-cover"
                src={props.photu}
                alt={props.author}
            />
            <h1 className="text-2xl font-semibold mb-2">{props.author}</h1>
            <h2 className="mb-3">{props.id}, {props.height}</h2>
            <button className="mt-2 bg-emerald-700 text-white px-4 py-2 rounded font-medium hover:bg-emerald-800">
                Add Friend
            </button>
        </div>
    )
}

export default Cards
