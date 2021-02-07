import React from 'react';
import {
    Box,
    createStyles,
    withStyles,
} from '@material-ui/core';

const SelectionPanel = (props) => {
    const classes = props.classes;
    return (
        <Box borderRadius={8} borderColor="primary.main" m={1} display="flex" className={classes.panel}>
            {props.children}    
        </Box> 
    );
}

const useStyles = (theme) => createStyles({
    panel: {
        margin: '0rem',
        marginTop: '1rem',
        backgroundColor: theme.palette.text.primary
    },
})

export default withStyles(useStyles)(SelectionPanel);