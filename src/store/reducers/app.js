const reducer = (state = "", action) => {
  switch (action.type) {
    case "play_new_trailer":
      return (state = action.genre);
    default:
      return state;
  }
};

export default reducer;
