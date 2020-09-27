// Actions

// Example: 
export const SET_GAME = 'pp/home/SET_GAME';

// Initial State
export const initialState = {
  ready: false,
};

// Reducer
export const home = (state = initialState, action) => {
  const { type, data } = action;

  switch (type) {
    // Example: 
    // case SET_GAME:
    //   return { ...state, ready: data };

    default:
      return state;
  }
};

// Action creators

// Example: 
// export const setGame = data =>({ type: SET_GAME, data});
