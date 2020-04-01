import React, {useState} from 'react';
import './App.css';
import {ToggleButton, ToggleButtonGroup} from "react-bootstrap";
import {functionFactory} from "./functionFactory";

function App() {
    const [code, setCode] = useState('One');

    return <div className="App">
        <header className="App-header">
            <p>Pick a code: </p>
            <ToggleButtonGroup type="radio" name="group-options" defaultValue={code} onChange={setCode}>
                <ToggleButton value={'One'}>Code One</ToggleButton>
                <ToggleButton value={'Two'}>Code Two</ToggleButton>
                <ToggleButton value={'Three'}>Code Three</ToggleButton>
            </ToggleButtonGroup>
            <br />
            <div>
                { functionFactory(code, new Date().toTimeString()) }
            </div>
        </header>
    </div>;
}

export default App;
