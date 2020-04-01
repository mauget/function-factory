# Dynamic Component Dispatching

This demo addresses a need to dynamically call a React component by a string name.
Approaches using `Eval` or `Function` are not allowed. 

Instead, we use a JavaScript object to map a string key to a component name
in a factory pattern. We could call the resolved component as a function, 
but parameters are props in the React world. Instead, we use a factory that
produces React component instantiations. Here is `RenderFactory.jsx`:

```javascript 1.8
import React from 'react';
import RenderOne from '../components/RenderOne';
import RenderTwo from '../components/RenderTwo';
import RenderThree from '../components/RenderThree';

const dispatchCode = (renderer, param) => {
    // To a component: add its import above; then add a line for its name here:
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
```

A client component would invoke a child by `code` property string like this:

```javascript 1.8
<RenderFactory code={code} param={`at ${new Date().toTimeString()}`}/>
```

The param property is our single parameter, but we could have coded for more
parameters.

Here is one demo dyanamic componet:

```javascript 1.8
import React from "react";

export default function RenderThree(props) {
    const { param } = { ...props };
    return <div>Hello from component THREE<br/>{param}</div>;
}

```

The demo UI chooses the dispatch code property via toggle buttons;

![pix/code-factory-ui.png](pix/code-factory-ui.png)

---
# Instructions

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
