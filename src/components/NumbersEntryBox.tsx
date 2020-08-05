import React from 'react';
import {Grid, TextField} from "@material-ui/core";
import '../styles/NumbersEnrtyBox.css';

function NumbersEntryBox(props) {
    return (
        <Grid className="entry-box" container spacing={3}>
            <Grid item xs={3}>
                <TextField id="filled-basic" variant="filled" />
            </Grid>
            <Grid item xs={3}>
                <TextField id="filled-basic"  variant="filled" />
            </Grid>
            <Grid item xs={3}>
                <TextField id="filled-basic"  variant="filled" />
            </Grid>
            <Grid item xs={3}>
                <TextField id="filled-basic"  variant="filled" />
            </Grid>
        </Grid>
    );
}

export default NumbersEntryBox;