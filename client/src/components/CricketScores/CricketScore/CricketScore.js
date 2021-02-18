import React from 'react';
// import CricketScore from '../../FootballScores/FootballScore/FootballScore';
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
                        <p id="homeName" style={{ fontSize: "3vh" }}>{match.homeTeam.name}</p>
                        {/* <p>{match['scores']["awayOvers"]}</p> */}
                        <p id="goals" style={{ fontSize: "2.3vh" }} >{scores.homeScore} in {scores.homeOvers}</p>
                    </div>
                    <img src="https://raw.githubusercontent.com/LearnCodeWithDurgesh/Live-Cricket-Score/master/src/img/vs.png" alt="VS" height="85" width="60" />
                    <div className="team">
                        <img style={{ backgroundColor: getRandomColor() }} id="homeLogo" />
                        <p id="awayName" style={{ fontSize: "3vh" }}>{match.awayTeam.name}</p>
                        <p id="goals" style={{ fontSize: "2.3vh" }} >{scores.awayScore} in {scores.awayOvers}</p>
                    </div>
                </div>
                <p><span>{match.status === "COMPLETED" ? (<strong style={{ color: 'red' }}>COMPLETED :</strong>) : (<strong style={{ color: 'green' }}>LIVE </strong>)}</span> {match.matchSummaryText}</p>
            </div>
        </div>
    )
}

export default CricketScore

