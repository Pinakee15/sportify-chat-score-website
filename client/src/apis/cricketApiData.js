const API_KEY = "zi9I6oXg9TaSOXPfZNIQ8Olvxxo2";

const getCricketData = () => {
    return (fetch(`https://cricapi.com/api/matches?apikey=${API_KEY}`)
        .then(data => data.json())
        .catch(err => console.log(`Error while fetching cricket data: ${err}`)));
}

export default getCricketData;