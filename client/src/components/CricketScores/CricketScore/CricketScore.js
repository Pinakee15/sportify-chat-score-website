import React from 'react';

const CricketScore = ({ match }) => {
    //console.log(match.scores)
    return (
        <div>
            <h5>{match.awayTeam.name} VS {match.homeTeam.name}</h5>
            {/* <p>{match.scores.awayScore} in {match.scores.awayOvers} | {match.scores.homeScore} in {match.scores.homeOvers}</p> */}
            <p>{match.matchSummaryText}</p>
        </div>
    )
}

export default CricketScore
