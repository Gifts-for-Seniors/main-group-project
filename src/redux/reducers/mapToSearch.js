const mapToSearch = (state = [], action) => {
  switch (action.type) {
    case "SET_MAP_TO_SEARCH":
      return action.payload;
    default:
      return state;
  }
};

export default mapToSearch;
