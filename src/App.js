import React, {useState} from 'react';
import './App.css';
import {ToggleButton, ToggleButtonGroup} from "react-bootstrap";
import {functionFactory} from "./functionFactory";

function App() {
    const [code, setCode] = useState('One');

    return <div className="App">
        <header className="App-header">
            <p>Pick a code string: </p>
            <ToggleButtonGroup type="radio" name="group-options" defaultValue={code} onChange={setCode}>
                <ToggleButton value={'Zero'}>"Zero"</ToggleButton>
                <ToggleButton value={'One'}>"One"</ToggleButton>
                <ToggleButton value={'Two'}>"Two"</ToggleButton>
                <ToggleButton value={'Three'}>"Three"</ToggleButton>
                <ToggleButton value={'Bad'}>"Bad"</ToggleButton>
            </ToggleButtonGroup>
            <br />
            <p>Functional result for "{code}" is:</p>
            <div>
                <i>{ functionFactory(code, {arg1: new Date().toTimeString(), arg2: 'value2', arg3: 'value3'}) }</i>
            </div>
        </header>
    </div>;
}

export default App;
