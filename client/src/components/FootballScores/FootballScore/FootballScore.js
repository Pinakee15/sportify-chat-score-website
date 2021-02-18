import React from 'react';
import './FootballScore.css';

const FootballScore = ({ match }) => {
    //console.log(match.scores)
    const scores = { ...match.scores };
    console.log(`This is the value of ${scores}`)
    return (
        <div className="ScoreContainer">
            <div>
                <div className="title-box">
                    <div className="team">
                        <img src={match['homeTeam']['logo']} height='54px' width='54px' style={{ backgroundColor: "rgb(255,244,211,0)" }} />
                        <p id="homeName" style={{ fontSize: "3vh" }}>{match['homeTeam']['team_name']}</p>
                        {/* <p>{match['scores']["awayOvers"]}</p> */}
                        <p id="goals" style={{ fontSize: "2.3vh" }} >{match['goalsHomeTeam']}</p>
                    </div>
                    <img src="https://raw.githubusercontent.com/LearnCodeWithDurgesh/Live-Cricket-Score/master/src/img/vs.png" alt="VS" height="85" width="60" />
                    <div className="team">
                        <img src={match['awayTeam']['logo']} height='54' width='54' style={{ backgroundColor: "rgb(255,244,211,0)" }} />
                        <p id="awayName" style={{ fontSize: "3vh" }}>{match['awayTeam']['team_name']}</p>
                        <p id="goals" style={{ fontSize: "2.3vh" }} >{match['goalsAwayTeam']}</p>
                    </div>
                </div>
                <p style={{ textAlign: 'center', color: 'green' }}><strong>Live</strong></p>
            </div>
        </div>
    )
}

// id="homeLogo"

export default FootballScore
