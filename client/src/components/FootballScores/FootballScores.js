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
            <div className="scoreContainer">
                {allMatches}
            </div>
        </div>
    )
}

export default FootballScores;