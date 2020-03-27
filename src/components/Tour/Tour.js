import React, {Component} from 'react';
import './Tour.scss';

class Tour extends Component {
    render() {
        return (
            <div>
                <article className="tour">
                    <div class="img-container">

                        <img
                            src="https://upload.wikimedia.org/wikipedia/en/thumb/6/63/IMG_%28business%29.svg/1200px-IMG_%28business%29.svg.png"
                            alt=""
                        />

                        <span className="close-btn">
                            <i className="fas fa-window-close"/>
                        </span>

                        <div className="tour-info">
                            <h3>City</h3>
                            <h4>Name</h4>
                            <h5>Info{" "}
                                <span>
                                    <i
                                        className="fas fa-caret-square-down"
                                    />
                                </span>
                            </h5>
                            <p>tolosa ipsumBe meaningless for whoever disappears, because each has been met with
                                advice.</p>
                        </div>
                    </div>
                </article>
            </div>
        )
            ;
    }
}

export default Tour;
