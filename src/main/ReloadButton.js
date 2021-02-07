import React from 'react';
import {
    createStyles,
    withStyles,
    Button,
    Typography,
} from '@material-ui/core';

const ReloadButton = (props) => {
    const classes = props.classes;
    return (
       <Button className={classes.button} variant="contained" onClick={() => window.location.reload()}>
           <Typography className={classes.buttonText}>Reload</Typography>
        </Button>
    );
}

const useStyles = (theme) => createStyles({
    button: {
        backgroundColor: theme.palette.button.main,
        margin:'.5rem',
        marginLeft: '0rem',
    },
    buttonText: {
        color: theme.palette.text.primary,
        fontFamily: theme.palette.typography.fontFamily,
    }
})

export default withStyles(useStyles)(ReloadButton);