import React from 'react';
import PropTypes from 'prop-types';
import RepoItem from './RepoItem';
import Spinner from '../layout/Spinner';


const Repos =  ({repos, loading}) => {
    if(loading) {
        return <Spinner />
    } else {
        return (
            <div >
                {repos.map(repo => (
                    <RepoItem key={repo.id} repo={repo} />
                ))}
            </div>
        )
    }
}

Repos.prototypes = {
    repos : PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
}

export default Repos