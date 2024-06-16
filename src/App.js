import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  pageSize = 5;
  apikey = process.env.REACT_APP_NEWS_APP
  state = {
    progress: 0,
  };

  setProgress = (progress) => {
    this.setState({ progress: progress });
  };

  render() {
    return (
      <>
        <Router>
          <div>
            <Navbar />
            <LoadingBar
              color="#f11946"
              progress={this.state.progress}
              height={3}
            />
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <News
                    setProgress={this.setProgress}
                    apikey={this.apikey}
                    key="general"
                    pagesize={this.pageSize}
                    country="us"
                    category="general"
                  />
                }
              />
              <Route
                exact
                path="/business"
                element={
                  <News
                    setProgress={this.setProgress}
                    apikey={this.apikey}
                    key="business"
                    pagesize={this.pageSize}
                    country="us"
                    category="business"
                  />
                }
              />
              <Route
                exact
                path="/entertainment"
                element={
                  <News
                    setProgress={this.setProgress}
                    apikey={this.apikey}
                    key="entertainment"
                    pagesize={this.pageSize}
                    country="us"
                    category="entertainment"
                  />
                }
              />
              <Route
                path="/health"
                element={
                  <News
                    setProgress={this.setProgress}
                    apikey={this.apikey}
                    key="health"
                    pagesize={this.pageSize}
                    country="us"
                    category="health"
                  />
                }
              />
              <Route
                exact
                path="/science"
                element={
                  <News
                    setProgress={this.setProgress}
                    apikey={this.apikey}
                    key="science"
                    pagesize={this.pageSize}
                    country="us"
                    category="science"
                  />
                }
              />
              <Route
                exact
                path="/sports"
                element={
                  <News
                    setProgress={this.setProgress}
                    apikey={this.apikey}
                    key="sports"
                    pagesize={this.pageSize}
                    country="us"
                    category="sports"
                  />
                }
              />
              <Route
                exact
                path="/technology"
                element={
                  <News
                    setProgress={this.setProgress}
                    apikey={this.apikey}
                    key="technology"
                    pagesize={this.pageSize}
                    country="us"
                    category="technology"
                  />
                }
              />
            </Routes>
          </div>
        </Router>
      </>
    );
  }
}
