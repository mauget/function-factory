import React from 'react';

export default function RenderTwo(props) {
    const { param } = { ...props };
    return <div>Hello from component TWO<br/>{param}</div>;
}
