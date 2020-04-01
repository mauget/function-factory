import React from "react";

import RenderOne from './RenderOne';
import RenderTwo from './RenderTwo';
import RenderThree from './RenderThree';

const factoryMap = {
    RenderOne,
    RenderTwo,
    RenderThree,
};

export const renderFactory = function(componentName){
    return (componentName && factoryMap[componentName]) ? factoryMap[componentName] : '';
};
