// const getFootballScore = () => {
//     fetch("https://api-football-v1.p.rapidapi.com/v2/fixtures/league/524/last/10?timezone=Europe%2FLondon", {
//         "method": "GET",
//         "headers": {
//             "x-rapidapi-key": "5108afa121msh7459cecd463cf05p1bd0b9jsnba7cc8faccd9",
//             "x-rapidapi-host": "api-football-v1.p.rapidapi.com"
//         }
//     })
//         .then(response => response.json().then(data => {
//             return data['api']['fixtures']
//         }))
//         .catch(err => {
//             alert(`There was some error fetching the data`);
//         });
// }
// export default getFootballScore;

const getFootballScore = () => {
    return (
        fetch("https://api-football-v1.p.rapidapi.com/v2/fixtures/league/524/last/10?timezone=Europe%2FLondon", {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "5108afa121msh7459cecd463cf05p1bd0b9jsnba7cc8faccd9",
                "x-rapidapi-host": "api-football-v1.p.rapidapi.com"
            }
        })
            .then(response => {
                //console.log(response.json())
                return response.json();
            })
            .then(data => data['api']['fixtures'])
            .catch(err => {
                console.log(`Error while fetching the cricket data`)
                alert('There is some error fetching the data')
            })
    )
}

export default getFootballScore;
