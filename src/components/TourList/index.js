import React, {Component} from 'react';
import './TourList.scss';
import Tour from "../Tour/Tour";
import {tourData} from './tourData';

class TourList extends Component {
    state = {
        tours: tourData
    };

    handleRemove = (id) => {
        const {tours} = this.state;
        this.setState({
            tours: tours.filter(tours => tours.id !== id)
        })
    };

    render() {
        const {tours} = this.state;
        return (
            <div>
                <section className="tourlist">{
                    tours.map(tour => <Tour
                        key={tour.id}
                        tour={tour}
                        removeTour={this.handleRemove}/>
                    )
                }
                </section>
            </div>
        );
    }
}

export default TourList;
