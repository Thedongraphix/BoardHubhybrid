const { useCreateContext } = require("#contexts/create-context");
const { initialState, reducer } = require("./app.reducer");

// eslint-disable-next-line react-hooks/rules-of-hooks
const [state, useDispatch, provider] = useCreateContext(initialState, reducer);
export const useStickyState = state;
export const useStickyDispatch = useDispatch;
export const StickyProvider = provider;
