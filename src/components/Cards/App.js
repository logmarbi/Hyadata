/* eslint-disable */
import React from "react";
import { AnimateSharedLayout, AnimatePresence } from "framer-motion";
import { Header } from "./Header";
import { Item } from "./Item";
import { List } from "./List";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainCard from '../MainCard/components/App/App'
function Store({ match }) {
  let { id } = match.params;
  const imageHasLoaded = true;

  return (
    <>
      <List selectedId={id} />
      <AnimatePresence>
        {id && imageHasLoaded && <Item id={id} key="item" />}
      </AnimatePresence>
    </>
  );
}

export default function App() {
  return (
    // <div className="container" > 
    <div style={{display: "flex", flexWrap:  "wrap"}}> 

<MainCard/>
<MainCard/>
<MainCard/>
<MainCard/>
<MainCard/>
<MainCard/>
<MainCard/>
<MainCard/>
<MainCard/>
<MainCard/>
<MainCard/>
<MainCard/>

      {/* <AnimateSharedLayout type="crossfade">
        <Header />
        <Router>
          <Route path={["/:id", "/"]} component={Store} />
        </Router>
      </AnimateSharedLayout> */}

    </div>
  );
}
