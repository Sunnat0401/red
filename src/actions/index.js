export const playersFetching = () => {
    return{
        type : "PLAYERS_FETCHING"
    }
}
export const playersFetched = players =>{
    return{
        type : "PLAYERS_FETCHED"
    }
}
export const  playersFetchingError = () =>{
    return {
        type : "PLAYERS_FETCHING_ERROR"
    }
}