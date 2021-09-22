import React, {Fragment} from 'react';

class GithubProfileDetails extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {
        let{followers , following , public_repos , public_gists ,
        name , location , email , company , blog , create_at , html_url} = this.props.profile
        return (
            <div>
                <div className="card">
                    <div className="card-header">
                        <span className="badge badge-primary mx-3">{followers}Followers</span>
                        <span className="badge badge-success mx-3">{public_repos}Repos</span>
                        <span className="badge badge-warning mx-3">{public_gists}Gists</span>
                        <span className="badge badge-danger mx-3">{following}Following</span>
                    </div>
                    <div className="card-body">
                        <ul className="list-group">
                            <li className="list-group-item">username: {name}</li>
                            <li className="list-group-item">location: {location}</li>
                            <li className="list-group-item">email: {email}</li>
                            <li className="list-group-item">company: {company}</li>
                            <li className="list-group-item">blog: {blog}</li>
                            <li className="list-group-item">Member Since: {create_at}</li>
                            <li className="list-group-item">Profile URL: {html_url}</li>
                        </ul>
                    </div>

                </div>
            </div>
        );
    }

}
export default GithubProfileDetails;