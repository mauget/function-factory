import React, {useState} from 'react';
import './App.css';
import {ToggleButton, ToggleButtonGroup} from "react-bootstrap";
import {renderFactory} from "./renderFactory/renderFactory";

function App() {

    const [componentName, setComponentName] = useState('One');

    const handleChange = (value) => {
        setComponentName(value);
    };

    return <div className="App">
        <header className="App-header">

            <ToggleButtonGroup type="radio" name="group-options" defaultValue={componentName} onChange={handleChange}>
                <ToggleButton value={'One'}>Component One</ToggleButton>
                <ToggleButton value={'Two'}>Component Two</ToggleButton>
                <ToggleButton value={'Three'}>Component Three</ToggleButton>
            </ToggleButtonGroup>

            <p>
                {renderFactory(`Render${componentName}`)()}
            </p>
        </header>
    </div>;
}

export default App;
