export default (state = false, action) => {
  switch (action.type) {
    case "SIGN_IN_TOGGLED":
      return !state;
    default:
      return state;
  }
};
