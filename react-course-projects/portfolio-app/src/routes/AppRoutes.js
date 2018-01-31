import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from '../components/Header';
import HomePage from '../components/HomePage';
import PortfolioPage from '../components/PortfolioPage';
import PortfolioItemPage from '../components/PortfolioItemPage';
import ContactPage from '../components/ContactPage';

const AppRoutes = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path='/' component={HomePage} exact={true}/>
                <Route path='/portfolio' component={PortfolioPage} exact={true} />
                <Route path='/portfolio/:id' component={PortfolioItemPage} exact={true} />
                <Route path='/contact' component={ContactPage} exact={true} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRoutes;