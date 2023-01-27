import React from 'react';
import Main from './routes';
import Header from './Components/Header';
import Footer from './Components/Footer';

class ValidateRoute extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <Main />
                <Footer/>
            </div>
        )
    }
}

export default ValidateRoute;