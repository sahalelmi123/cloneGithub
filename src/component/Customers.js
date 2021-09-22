import React, {Fragment} from 'react';
import axios from 'axios';

class Customers extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            users : []
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users').then((response) => {
            this.setState ({ users : response.data})
        }).catch((err) =>{
            console.log(err); 
            this.setState({
                errorMessage : err.message
            });
        });
    }
    
    render() {
        return (
            <div>
                <div className="container mt-3">
                    <div className="row">
                        <div class="col">
                        <table className="table table-striped bg-warning">
                    <thead className="">
                        <tr>
                            <th className="">ID</th>
                            <th className="">NAME</th>
                            <th className="">Email</th>
                            <th className="">Website</th>
                            <th className="">City</th>
                        </tr>
                    </thead>

                    <tbody>
                    
                            {
                                this.state.users.length > 0 && <Fragment>
                                    {
                                        this.state.users.map(user => {
                                            return (
                                                <tr>
                                                    <td>{user.id}</td>
                                                    <td>{user.name}</td>
                                                    <td>{user.email}</td>
                                                    <td>{user.website}</td>
                                                    <td>{user.address.city}</td>
                                                </tr>
                                            )
                                        })
                                    }
                                </Fragment>
                            }
                        
                    </tbody>
                </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Customers;