import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from"../header/Header";
import Nav from"../nav/Nav";
import Main from"../main/Main";
import About from"../form/About";
import Storage from"../storage/Storage";
import Footer from"../footer/Footer";
import "../Fontawesome";

class App extends React.Component {
    constructor(props){
    super(props);
    this.state = {search: " " } 
    }

    handleSearchChange = (search) => {
        this.setState({search: search})
    }

    render(){
        return(
            <BrowserRouter> 
                <div className="app">
                    <Header />
                    <Nav onSearchInput={this.handleSearchChange}/>
                    <Switch>    
                        <Route exact path="/"component={() => <Main search={this.state.search} />}/>
                        <Route path="/storage" component={Storage}/>
                        <Route path="/form" component={About}/>
                    </Switch>
                    <Footer/>
                </div>
            </BrowserRouter>
        )
    }
}

export default App;