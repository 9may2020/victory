import React from "react";
import { Router, Route } from "react-router-dom";
import { createHashHistory } from "history";
import HomePage from "./pages/home";
import MusicPage from "./pages/music";
import VideoPage from "./pages/video";
import BooksPage from "./pages/books";
import Header from "./components/Header";
import EventsPage from "./pages/events";
import LentaPage from "./pages/lenta";

const browserHistory = createHashHistory();

export const App = () => (
  <Router history={browserHistory}>
    <Header />
    <Route path={"/"} component={HomePage} exact />
    <Route path={"/music"} component={MusicPage} />
    <Route path={"/video"} component={VideoPage} />
    <Route path={"/books"} component={BooksPage} />
    <Route path={"/events"} component={EventsPage} />
    <Route path={"/lenta"} component={LentaPage} />
  </Router>
);

export default App;
