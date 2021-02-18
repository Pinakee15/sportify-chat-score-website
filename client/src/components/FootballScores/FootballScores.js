import React, { useEffect, useState } from 'react';
import FootballScore from './FootballScore/FootballScore';
import getFootballData from './getFootBallData';
import "./FootballScores.css";

const FootballScores = () => {
    const [matches, setMatches] = useState([]);
    useEffect(() => {
        getFootballData()
            .then(data => {
                console.log(data)
                return setMatches([...data])
            })
            .then(() => console.log(matches))
    }, []);
    const allMatches = matches.map((match, id) => <FootballScore match={match} key={id} />);
    return (
        <div>
            <h1 style={{ textAlign: "center" }}><b>-Scoreboard-</b></h1>
            <p style={{ color: 'red', textAlign: 'center', fontSize: '13px' }}>NOTE: Open another tab in browser with same chat room to test</p>
            <div className="scoreContainer">
                {allMatches}
            </div>
        </div>
    )
}

export default FootballScores;