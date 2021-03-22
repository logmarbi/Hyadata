/* eslint-disable */
import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import ParticleEffectButton from './ParticleButton';

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

            <div class="text-center subcribe-form mt-4">
                <form action="#">
                    <input type="text" class="inputform" size="45" placeholder="Your best email&hellip;"
 />
                    <button type="submit" class="btn rounded-pill btn-purple">חפש</button>
                </form>
                {/* <ParticleEffectButton/> */}
            </div>

        );
    }
}
