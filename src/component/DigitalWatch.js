import React, {Fragment} from 'react';

class DigitalWatch extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            date : new Date()
        }
    }

    componentDidMount() {
        this.timer = setInterval(() =>{
            this.setState ({
                date : new Date()
            });
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        return (
            <Fragment>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="card">
                                <div className="card-header bg-info text-white text-center">
                                    <h3>Digital Watch</h3>
                                </div>
                                <div className="card-body">
                                    <p>{this.state.date.toLocaleTimeString()}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default DigitalWatch;