import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Layout from './components/Layout';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import initStore from './utils/store';

ReactDOM.render(
    <Provider store={ initStore([]) }>
        <MuiThemeProvider>
            <Layout />
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('root'),
);