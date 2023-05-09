import React from 'react';

interface OwnProps{
    title:string
}
export default function Header({ title}:OwnProps) {
    return (
        <div className="p-5 bg-purple-500 text-white ">
            <h1>Micro front-end shared header {title} </h1>
        </div>
    )
}