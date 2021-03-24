import React, { Component } from 'react'
import UserItem from './UserItem'

export class Users extends Component {
    state = {
        users : [
            {
                "login": "atmos",
                "id": 38,
                "node_id": "MDQ6VXNlcjM4",
                "avatar_url": "https://avatars.githubusercontent.com/u/38?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/atmos",
                "html_url": "https://github.com/atmos",
                "followers_url": "https://api.github.com/users/atmos/followers",
                "following_url": "https://api.github.com/users/atmos/following{/other_user}",
                "gists_url": "https://api.github.com/users/atmos/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/atmos/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/atmos/subscriptions",
                "organizations_url": "https://api.github.com/users/atmos/orgs",
                "repos_url": "https://api.github.com/users/atmos/repos",
                "events_url": "https://api.github.com/users/atmos/events{/privacy}",
                "received_events_url": "https://api.github.com/users/atmos/received_events",
                "type": "User",
                "site_admin": false
              },
              {
                "login": "errfree",
                "id": 44,
                "node_id": "MDEyOk9yZ2FuaXphdGlvbjQ0",
                "avatar_url": "https://avatars.githubusercontent.com/u/44?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/errfree",
                "html_url": "https://github.com/errfree",
                "followers_url": "https://api.github.com/users/errfree/followers",
                "following_url": "https://api.github.com/users/errfree/following{/other_user}",
                "gists_url": "https://api.github.com/users/errfree/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/errfree/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/errfree/subscriptions",
                "organizations_url": "https://api.github.com/users/errfree/orgs",
                "repos_url": "https://api.github.com/users/errfree/repos",
                "events_url": "https://api.github.com/users/errfree/events{/privacy}",
                "received_events_url": "https://api.github.com/users/errfree/received_events",
                "type": "Organization",
                "site_admin": false
              },
              {
                "login": "mojodna",
                "id": 45,
                "node_id": "MDQ6VXNlcjQ1",
                "avatar_url": "https://avatars.githubusercontent.com/u/45?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/mojodna",
                "html_url": "https://github.com/mojodna",
                "followers_url": "https://api.github.com/users/mojodna/followers",
                "following_url": "https://api.github.com/users/mojodna/following{/other_user}",
                "gists_url": "https://api.github.com/users/mojodna/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/mojodna/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/mojodna/subscriptions",
                "organizations_url": "https://api.github.com/users/mojodna/orgs",
                "repos_url": "https://api.github.com/users/mojodna/repos",
                "events_url": "https://api.github.com/users/mojodna/events{/privacy}",
                "received_events_url": "https://api.github.com/users/mojodna/received_events",
                "type": "User",
                "site_admin": false
              },
              {
                "login": "bmizerany",
                "id": 46,
                "node_id": "MDQ6VXNlcjQ2",
                "avatar_url": "https://avatars.githubusercontent.com/u/46?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/bmizerany",
                "html_url": "https://github.com/bmizerany",
                "followers_url": "https://api.github.com/users/bmizerany/followers",
                "following_url": "https://api.github.com/users/bmizerany/following{/other_user}",
                "gists_url": "https://api.github.com/users/bmizerany/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/bmizerany/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/bmizerany/subscriptions",
                "organizations_url": "https://api.github.com/users/bmizerany/orgs",
                "repos_url": "https://api.github.com/users/bmizerany/repos",
                "events_url": "https://api.github.com/users/bmizerany/events{/privacy}",
                "received_events_url": "https://api.github.com/users/bmizerany/received_events",
                "type": "User",
                "site_admin": false
              }
        ]
    }
    render() {
        return (
            <div style={userStyle}>
                {this.state.users.map(user => (
                    <UserItem key={user.id} user={user} />
                ))}
            </div>
        )
    }
}

const userStyle = {
    display : 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
}

export default Users
