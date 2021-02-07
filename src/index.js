import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter as Router } from 'react-router-dom'
import { render } from 'react-dom';
import reportWebVitals from './reportWebVitals';
import {ThemeProvider} from '@material-ui/core/styles';
import ScrollToTop from './ScrollToTop';
import theme from './Theme';
import Main from './main/Main';

function App() {
  return(
    <React.StrictMode>
      <ThemeProvider theme={theme}>
          <CssBaseline/>
          <Router>
            <ScrollToTop/>
            <Main/>
          </Router>
      </ThemeProvider>
    </React.StrictMode>
  )
};
render(<App/>, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
reportWebVitals();
