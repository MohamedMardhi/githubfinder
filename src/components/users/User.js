import React, { Fragment, useEffect } from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';
import Repos from '../repos/Repos';

const User = ({user, loading, getUser, getUserRepos, repos, match}) => {
    useEffect(()=>{
        getUser(match.params.login);
        getUserRepos(match.params.login);
    }, []);

    // componentDidMount(){
    //     this.props.getUser(match.params.login);
    //     this.props.getUserRepos(match.params.login);
    // }

    const {
        name,
        avatar_url,
        html_url,
        location,
        followers,
        bio,
        company,
        login,
        hireable,
    } = user;


        if(loading) return <Spinner />
        return (
            <Fragment>
            <Link to="/" className="btn btn-light">Back</Link>
            Hireable: {' '}
            {hireable ? (
                <i className="fas fa-check text-success" />
            ) : (
                <i className="fas fa-times-circle text-danger" />
            )}
            <div className="card grid-2">
                <div className="all-center">
                    <img src={avatar_url} className="round-img" alt="" style={{width: '150px'}}/>
                    <h1>{name}</h1>
                    <p>Location: {location}</p>
                </div>
                <div>
                    { bio && (<Fragment>
                        <h3>Bio :</h3>
                        <p>{bio}</p>
                    </Fragment>)}
                    <a href={html_url} className="btn btn-dark my-1"> Go to Github </a>
                    <ul>
                        <li>
                            {login && (<Fragment>
                                <strong>Username : </strong> {login}
                            </Fragment>)}
                        </li>
                        <li>
                            {company && (<Fragment>
                                <strong>Company : </strong> {company}
                            </Fragment>)}
                        </li>
                    </ul>
                </div>
            </div>
            <div className="card text-center">
                <div className="badge badge-primary">
                        Followers : {followers}
                </div>
            </div>
            <Repos repos={repos} />
            </Fragment>
        )
    }

User.propTypes = {
    loading: PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired,
    repos: PropTypes.array.isRequired,
    getUser: PropTypes.func.isRequired,
    getUserRepos: PropTypes.func.isRequired,
    
}

export default User
