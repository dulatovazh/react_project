import React from 'react';
import Title from "./Title";
import Header from "./Header";

export default function Body({title, props}) {
    console.log(props);
    return (
        <div>
            <h2>{title}</h2>
            <Title titel = "Title body"/>
        </div>
    );
};
