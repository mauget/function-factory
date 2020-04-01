import React, {useState} from 'react';
import './App.css';
import {ToggleButton, ToggleButtonGroup} from "react-bootstrap";
import {RenderFactory} from "./renderFactory/RenderFactory";

function App() {

    const [code, setCode] = useState('One');

    const onChange = (value) => {
        setCode(value);
    };

    return <div className="App">
        <header className="App-header">
            <p>Pick a code: </p>
            <ToggleButtonGroup type="radio" name="group-options" defaultValue={code} onChange={onChange}>
                <ToggleButton value={'One'}>Code One</ToggleButton>
                <ToggleButton value={'Two'}>Code Two</ToggleButton>
                <ToggleButton value={'Three'}>Code Three</ToggleButton>
            </ToggleButtonGroup>
            <br />
            <div>
                <RenderFactory code={code} param={`at ${new Date().toTimeString()}`}/>
            </div>
        </header>
    </div>;
}

export default App;
