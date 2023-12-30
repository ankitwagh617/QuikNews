import Navbar from './component/Navbar';
import './App.css';
import React, { Component } from 'react'
import News from './component/News';
import LoadingBar from 'react-top-loading-bar'
import {
  // createrowserRouter,
  Routes,
  Route,
  BrowserRouter,
  // Link,
} from "react-router-dom";


export default class App extends Component {
  pageSize = 8
  apiKey = '73be55765591436e8ffbd47bd3da65f3'
  state={
    progress : 0
  }
  setProgress=(progress)=>{
    this.setState({progress :progress})
  }
  render() {
    return (
      <>
        <BrowserRouter>
          <LoadingBar height={3} color='#f11946'progress={this.state.progress}/>
          <Navbar />
          
          <Routes>
            <Route exact path="/" element={<News setProgress={this.setProgress} apiKey ={this.apiKey} key="home" pageSize={this.pageSize} country="in" category="home" />}></Route>
            <Route exact path="/business" element={<News setProgress={this.setProgress} apiKey ={this.apiKey} key="business" pageSize={this.pageSize} country="in" category="business" />}></Route>
            <Route exact path="/entertainment" element={<News setProgress={this.setProgress} apiKey ={this.apiKey} key="entertainment" pageSize={this.pageSize} country="in" category="entertainment" />}></Route>
            <Route exact path="/general" key="general" element={<News setProgress={this.setProgress} apiKey ={this.apiKey} key="general" pageSize={this.pageSize} country="in" category="general" />}></Route>
            <Route exact path="/health" key="health" element={<News setProgress={this.setProgress} apiKey ={this.apiKey} key="health" pageSize={this.pageSize} country="in" category="health" />}></Route>
            <Route exact path="/science" key="science" element={<News setProgress={this.setProgress} apiKey ={this.apiKey} key="science" pageSize={this.pageSize} country="in" category="science" />}></Route>
            <Route exact path="/sports" key="sports" element={<News setProgress={this.setProgress} apiKey ={this.apiKey} key="sports" pageSize={this.pageSize} country="in" category="sports" />}></Route>
            <Route exact path="/technology" key="general" element={<News setProgress={this.setProgress} apiKey ={this.apiKey} key="general" pageSize={this.pageSize} country="in" category="technology" />}></Route>
          </Routes>
        </BrowserRouter>
      </>
    )
  }
}




// export default App;
