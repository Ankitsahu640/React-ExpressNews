
import './App.css';
// rcc - react class component     api = dbddeef57b58421aafd6a26534fd9d8d

import React, { Component } from 'react'
import Navbar from './component/Navbar';
import Sidebar from './component/Sidebar';
import News from './component/News';
import {CategoryArr} from './component/CategoryArr';

import {BrowserRouter,Routes,Route,Outlet} from "react-router-dom";


export default class App extends Component {
  constructor(){
    super();
    this.state={
      mode: "danger",
      search: ""
    }
  }

  toggleMode=()=>{
    if(this.state.mode==="danger"){
      this.setState({mode:"dark"});
      document.body.style.background="#5e5d5d";
    }
    else{
      this.setState({mode:"danger"})
      document.body.style.background="white";
    }
  }

  searchNews=(e)=>{
    if(e.key==='Enter'){
      e.preventDefault();
      this.setState({search: e.target.value.trim().toLowerCase()});
    }
  }


  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
            <Route path="/" element={
                                      <>
                                        <Navbar mode={this.state.mode} searchNews={this.searchNews} />
                                        <div className="d-flex flex-row">
                                          <Sidebar mode={this.state.mode} toggleMode={this.toggleMode}/>
                                          <Outlet/>
                                        </div>
                                      </>
                                    }>
                <Route path="/" element={<News country="in" pageSize="9" category="breaking-news" categoryName="General" mode={this.state.mode} search={this.state.search}/>}  />
                {
                    CategoryArr.map((element) => {
                        return(
                            <Route path={`/${element.path}`} element={<News country="in" key={element.name} pageSize="9" category={element.path} categoryName={element.name} mode={this.state.mode} search={this.state.search}/>} />
                        )
                    })
                 }
            </Route>
      </Routes>
      </BrowserRouter>
    )
  }
}


