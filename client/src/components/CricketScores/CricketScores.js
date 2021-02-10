import React, { useEffect, useState } from 'react';
import CricketScore from './CricketScore/CricketScore';
import getCricketScores from './getCricketScore';

const CricketScores = () => {
    const [matches, setMatches] = useState([]);
    useEffect(() => {
        getCricketScores()
            .then(data => setMatches([...data]))
            .then(() => console.log(matches))
    }, [])
    const allMatches = matches.map((match, id) => <CricketScore match={match} key={id} />);
    return (
        <div>
            {allMatches}
            <p>These are the matches.</p>
        </div>
    )
}

export default CricketScores
