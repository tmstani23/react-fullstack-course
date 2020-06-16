
export function getMoviesList() {
    //Go to db and get data

    return {
        type: 'MOVIES_LIST',
        payload: [
            {id: 12, name: 'Pulp Fiction'},
            {id: 23, name: 'The Big Lebowski'},
            {id: 323, name: 'The Matrix'}
        ]
    }
}