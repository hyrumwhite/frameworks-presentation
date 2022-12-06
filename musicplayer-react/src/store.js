import { configureStore } from "@reduxjs/toolkit";
import collectionsReducer from "./features/collections/collectionsSlice";

export default configureStore({
	reducer: {
		collectionsReducer,
	},
});
