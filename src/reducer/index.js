const initialState = {
  players: [],
  playersLaodingStatus: "success",
  filters: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "PLAYERS_FETCHING":
      return {
        ...state,
        playersLaodingStatus: "Loading",
      };
    // case "PLAYERS_FETCHED":
    //   return {
    //     ...state,
    //     players: action.payload,
    //     playersLaodingStatus: "success",
    //   };
    case 'PLAYERS_FETCHED':
  return {
    ...state,
    players: action.payload, // payload sifatida kelgan ma'lumotlarni players ga o'rnating
    playersLaodingStatus: "success",
  };
    case "PLAYERS_FETCHING_ERROR":
      return {
        ...state,
        playersLaodingStatus: "error",
      };
    default:
      return state;
  }
};

export default reducer;
