import {createMuiTheme} from '@material-ui/core';

const theme = createMuiTheme({
    palette: {
        typography: {
            fontFamily: 'Archivo',
        },
        primary: {
            main: '#3a405a',
        },
        secondary: {
            main: '#685044'
        },
        background: {
            main: '#f9dec9'
        },
        button: {
            main: '#aec5eb'
        },
        text: {
            primary: '#fbfbfb',
        }
    },

});

export default theme;