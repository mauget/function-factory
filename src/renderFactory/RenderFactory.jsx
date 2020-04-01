// eslint-disable-next-line no-unused-vars
import React from 'react';
import RenderOne from '../components/RenderOne';
import RenderTwo from '../components/RenderTwo';
import RenderThree from '../components/RenderThree';

const dispatchCode = (renderer, param) => {
    // To add component: add its import above; then add a line for its name here:
    const code2Renderer = {
        RenderOne: <><RenderOne param={param}/></>,
        RenderTwo: <><RenderTwo param={param}/></>,
        RenderThree: <><RenderThree param={param}/></>,
    };

    return code2Renderer[renderer] || <>Rats! Code not found</>;
};

export function RenderFactory(props) {
    const { code, param } = { ...props };
    const component = `Render${code}`;

    return dispatchCode(component, param);
}
