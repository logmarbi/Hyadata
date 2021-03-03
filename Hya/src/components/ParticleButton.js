/* eslint-disable */
import React, { Component } from "react";
import ParticleEffectButton from "react-particle-effect-button";

const demos = [
  {
    background: "linear-gradient(120deg,#7f54e6,#3F51B5)",
    text: "Upload",
    buttonStyles: {
      background: "#f3f3f3",
      color: "#3c2e9e",
      padding: "1.8rem 4rem"
    },
    buttonOptions: {
      color: "#f3f3f3",
      type: "triangle",
      easing: "easeOutQuart",
      size: 6,
      particlesAmountCoefficient: 4,
      oscillationCoefficient: 2
    }
  },
];

class DemoBlock extends Component {
  state = {
    hidden: false,
    animating: false
  };

  render() {
    const { background, text, buttonStyles, buttonOptions } = this.props;

    const { hidden, animating } = this.state;

    return (
      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          // width: "46vmax",
          // height: "46vmax",
          margin: "2vmax 2vmax 0 0",
          background
        }}
      >
        {hidden && !animating && (
          <button
            style={{
              position: "absolute",
              top: "1em",
              right: "1em",
              background: "#32bafa",
              color: "#fff",
              border: "0",
              borderRadius: 4,
              fontSize: "5px",
              padding: "0.7em 1.2em",
              cursor: "pointer",
              outline: "none"
            }}
            onClick={this._onToggle}
          >
            Reset
          </button>
        )}

        <ParticleEffectButton
          hidden={hidden}
          onComplete={this._onAnimationComplete}
          {...buttonOptions}
        >
          <button
            style={{
              background: "#121019",
              color: "#fff",
              // padding: "1.5rem 3rem",
              border: "0",
              borderRadius: 5,
              cursor: "pointer",
              fontSize: "1.2em",
              ...buttonStyles
            }}
            onClick={this._onToggle}
          >
            {text}
          </button>
        </ParticleEffectButton>
      </div>
    );
  }

  _onToggle = () => {
    if (this.state.animating) return;

    this.setState({
      hidden: !this.state.hidden,
      animating: true
    });
  };

  _onAnimationComplete = () => {
    this.setState({
      animating: false
    });
  };
}

const App = () => (

    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center"
      }}
    >
      {demos.map((demo, index) => (
        <DemoBlock
          key={index}
          // background={demo.background}
          text={demo.text}
          buttonStyles={demo.buttonStyles}
          buttonOptions={demo.buttonOptions}
        />
      ))}
    </div>
);


export default App;
