import React from "react";

type Props = {
    name: string;
};

const Hello = ({ name }: Props) => {
    return <div>Hello, {name}!</div>;
};

export default Hello;
