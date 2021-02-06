export const userConnectedAction = (newValue) => ({
  type: "UPDATE_IS_CONNECTED",
  newValue,
});
export const userDeconnectedAction = () => ({
  type: "UPDATE_IS_DECONNECTED",
});

export const userDataAction = (newValue) => ({
  type: "UPDATE_DATA",
  newValue,
});
