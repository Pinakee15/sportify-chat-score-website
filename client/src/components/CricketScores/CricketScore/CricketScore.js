import React from 'react';
import './CricketScore.css';

const CricketScore = ({ match }) => {
    //console.log(match.scores)
    const getRandomColor = () => {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    const scores = { ...match.scores };
    console.log(`This is the value of ${scores}`)
    return (
        <div className="ScoreContainer">
            <div>
                <div className="title-box">
                    <div className="team">
                        <img style={{ backgroundColor: getRandomColor() }} id="homeLogo" />
                        <p id="homeName">{match.homeTeam.name}</p>
                        {/* <p>{match['scores']["awayOvers"]}</p> */}
                        <p id="goals" style={{ fontSize: "1.2vw" }} >{scores.homeScore} in {scores.homeOvers}</p>
                    </div>
                    <img src="https://raw.githubusercontent.com/LearnCodeWithDurgesh/Live-Cricket-Score/master/src/img/vs.png" alt="VS" height="85" width="60" />
                    <div className="team">
                        <img style={{ backgroundColor: getRandomColor() }} id="homeLogo" />
                        <p id="awayName">{match.awayTeam.name}</p>
                        <p id="goals" style={{ fontSize: "1.2vw" }} >{scores.awayScore} in {scores.homeOvers}</p>
                    </div>
                </div>
                <p>{match.matchSummaryText}</p>
            </div>
        </div>
    )
}

export default CricketScore

