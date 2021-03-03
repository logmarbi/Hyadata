/* eslint-disable */
import React, { PureComponent } from 'react'
import { Animate } from 'react-move'
import { easeExpOut } from 'd3-ease'
import { Link } from '@reach/router'
import Grow from '@material-ui/core/Grow'

const trackStyles = {
    borderRadius: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    position: 'relative',
    margin: '5px 3px 10px',
    width: 250,
    height: 50,
}

class Example extends PureComponent {
    state = {
        open: false,
        checked: true,
    }

    handleClick = (e) => {
        // e.preventDefault();

        this.setState({ open: !this.state.open })
    }

    render() {
        return (
            <div>
                <Grow
                    in={this.checked}
                    tyle={{ transformOrigin: '0 0 0' }}
                    {...(this.checked ? { timeout: 1250 } : {})}
                >
                    {/* <button onClick={this.handleClick}>Toggle</button> */}
                    <Animate
                        start={() => ({
                            x: 0,
                        })}
                        update={() => ({
                            x: [this.state.open ? 500 : 0],
                            timing: { duration: 7150, ease: easeExpOut },
                        })}
                    >
                        {(state) => {
                            const { x } = state

                            return (
                                <div style={trackStyles}>
                                    <div
                                        style={{
                                            position: 'absolute',
                                            WebkitTransform: `translate3d(${x}px, 0, 0)`,
                                            transform: `translate3d(${x}px, 0, 0)`,
                                        }}
                                    >
                                        <li>
                                            <Link to="Logistics" className="page-scroll"
                                            >
                                                <a
                                                    onClick={this.handleClick}
                                                    className="page-scroll"
                                                    style={{
                                                        fontSize: 20,
                                                        paddingRight: 20,
                                                        paddingLeft: 20,
                                                    }}
                                                >
                                                    לוגיסטיקה
                        </a>
                                            </Link>
                                        </li>
                                    </div>
                                </div>
                            )
                        }}
                    </Animate>
                </Grow>
            </div>
        )
    }
}

export default Example
