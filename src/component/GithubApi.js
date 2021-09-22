import React, {Fragment} from 'react';
import GithubProfile from "./GithubProfile";
import axios from "axios";
import {clientID, clientSecret} from "./GithubCredentials";
import GithubProfileCard from "./GithubProfileCard";
import GithubProfileDetails from "./GithubProfileDetails";
import GithubRepos from "./GithubRepos";
class GithubApi extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            username : '',
            profile : '',
            repos : ''
        }
    }

    updateInput = (e) => {
        this.setState({
            ...this.state,
            username: e.target.value
        });
    }
    searchUser = (e) => {
        e.preventDefault()
        this.searchProfile();
        this.searchRepos();
    };
    // search a profile
    searchProfile = () => {
        axios.get(`http://api.github.com/users/${this.state.username}?clientId=${clientID}&clientSecret=${clientSecret}`)
            .then((response) =>{
                this.setState({
                    profile : response.data
                });
            }).catch((err) => {
                console.log(err);
        })
    }

    // search a repos
    searchRepos = () => {
        axios.get(`http://api.github.com/users/${this.state.username}/repos?clientId=${clientID}&clientSecret=${clientSecret}`)
            .then((response) =>{
                this.setState({
                    repos : response.data
                });
            }).catch((err) => {
            console.log(err);
        })
    }

    render() {
        return (
            <Fragment>
                {/*<pre>{JSON.stringify(this.state)}</pre>*/}
                <div className="container mt-3">
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="card-header text-white bg-info">
                                    <h3>GitHub User Search</h3>
                                </div>
                                <div className="card-body">
                                    <form action="" className="form-inline" onSubmit={this.searchUser}>
                                        <div className="form-group">
                                            <input type="text" value={this.state.username}
                                                   onChange={this.updateInput}
                                                   size="40" className="form-control" placeholder="UserName"/>
                                        </div>
                                        <div>
                                            <input type="submit" value="Search" className="btn btn-primary"/>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            {/*    Github profile */}
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        {
                            this.state.profile ?
                                <GithubProfile profile={this.state.profile}/> : null
                        }

                    </div>
                </div>
            </div>

            {/*    Github Repos*/}
                <div className="container mt-3">
                    <div className="row">
                        <div className="col">
                            {
                                this.state.repos ?
                                    <GithubRepos repos={this.state.repos}/> : null
                            }

                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}
export default GithubApi;