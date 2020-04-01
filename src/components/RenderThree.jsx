import React from "react";

export default function RenderThree(props) {
    const { param } = { ...props };
    return <div>Hello from component THREE<br/>{param}</div>;
}
