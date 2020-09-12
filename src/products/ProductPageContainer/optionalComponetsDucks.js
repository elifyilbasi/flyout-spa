const TYPES = {
  initializeOptionalComps: "optionalComponents/initializeOptionalComps",
};

export const initializeOptionalComps = (visibilities) => ({
  type: TYPES.initializeOptionalComps,
  payload: visibilities,
});

const INITIAL_STATE = {
  optionalComponents: {},
};

const reducer = function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case TYPES.initializeOptionalComps: {
      return { ...state, optionalComponents: { ...action.payload } };
    }
    default: {
      return state;
    }
  }
};

export { reducer };
