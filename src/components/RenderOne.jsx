import React from 'react';

export default function RenderOne(props) {
    const {param} = { ...props };
    return <div>Hello from component ONE<br/>{param}</div>;
}
