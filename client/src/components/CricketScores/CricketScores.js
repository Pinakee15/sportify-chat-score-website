import React, { useEffect, useState } from 'react';
import CricketScore from './CricketScore/CricketScore';
import getCricketScores from './getCricketScore';
import "./CricketScores.css";

const CricketScores = () => {
    const [matches, setMatches] = useState([]);
    useEffect(() => {
        getCricketScores()
            .then(data => {
                console.log(data)
                return setMatches([...data])
            })
            .then(() => console.log(matches))
    }, []);
    const allMatches = matches.map((match, id) => <CricketScore match={match} key={id} />);
    return (
        <div>
            <h1 style={{ textAlign: "center" }}><b>-Scoreboard-</b></h1>
            <div className="scoreContainer">
                {allMatches}
            </div>
        </div>
    )
}

export default CricketScores
