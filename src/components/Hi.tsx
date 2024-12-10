import React from "react";

type Props = {
    name: string;
};

const Hi = ({ name }: Props) => {
    return <div>Hi!, {name}!</div>;
};

export default Hi;
