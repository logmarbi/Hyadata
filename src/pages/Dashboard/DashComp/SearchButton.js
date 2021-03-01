/* eslint-disable */
import React, { Component } from "react";
import PropTypes from "prop-types";
import ParticleEffectButton from "react-particle-effect-button";

export default class Button extends Component {
    state = {
        hidden: false
    };

    static propTypes = {
        type: PropTypes.string,
        size: PropTypes.oneOf(["small", "normal", "medium", "large"]),
        onClick: PropTypes.func,
        className: PropTypes.string
    };

    render() {
        return (

            <div className="text-center subcribe-form mt-4">
                {/* <form action="#"> */}
                <input type="text" className="inputform" size="45" />
                <ParticleEffectButton color="#121019" hidden={this.state.hidden}></ParticleEffectButton>
                <button type="submit" className="btn rounded-pill btn-purple">חפש</button>
                {/* </form> */}
            </div>

        );
    }
}
