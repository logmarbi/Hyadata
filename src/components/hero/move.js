/* eslint-disable */
import React from "react";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import { Button, Form } from "react-bootstrap";


export default function App() {
  const [mode, setMode] = React.useState("out-in");
  const [state, setState] = React.useState(true);
  return (
    <>
      <div className="label">Mode:</div>
     
      <div className="main">
        <SwitchTransition mode={mode}>
          <CSSTransition
            key={state}
            addEndListener={(node, done) => {
              node.addEventListener("transitionend", done, false);
            }}
            classNames="fade"
          >
            <div className="button-container">
              <Button onClick={() => setState(state => !state)}>
dhsbd              </Button>
            </div>
          </CSSTransition>
        </SwitchTransition>
      </div>
    </>
  );
}
