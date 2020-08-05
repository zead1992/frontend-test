import React from 'react';
import './App.css';
import {Grid} from "@material-ui/core";
import NumbersEntryBox from "./components/NumbersEntryBox";

function App() {
    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={4}>
                    <h1>Number Entry</h1>
                    <NumbersEntryBox/>
                </Grid>
            </Grid>
        </div>
    );
}

export default App;
