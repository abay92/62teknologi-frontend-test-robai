import React, {Component} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

class Main extends Component {
    render() {
        return (
            <BrowserRouter>
                <Route exact path='/' element={ require('./Pages/Home').default }/>
                {/* <Route path='/business' component={Create}/>
                <Route path='/search' component={Search}/> */}
            </BrowserRouter>
        )
    }
}

export default Main;
