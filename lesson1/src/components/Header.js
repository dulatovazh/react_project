import React from 'react';
import Title from "./Title";
import Body from "./Body";

export default function Header() {
    return (
        <div>
            <Title title="Header" name="Zhypara" age={22}/>
            <Body title="Body head"/>
        </div>
    );
};
