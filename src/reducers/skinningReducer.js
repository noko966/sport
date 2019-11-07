export default (state = false, action) => {
  switch (action.type) {
    case "TOGGLE_SKINNING":
      return !state;
    default:
      return state;
  }
};
