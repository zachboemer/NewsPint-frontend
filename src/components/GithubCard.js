const GithubCard = ({ githubData }) => {
    return (
        <a href={githubData.html_url} target="_blank">
            <div class="ui card">
                <div class="content">
                    <div class="center aligned header">{githubData.name}</div>
                    <div class="center aligned description"><p>{githubData.bio}</p></div>
                </div>
                <div class="extra content">
                    <div class="center aligned author">
                        <img class="ui avatar image" src={githubData.avatar_url}/>
                            @{githubData.login}
                    </div>
                </div>
            </div>
        </a>
    )
}

export default GithubCard;