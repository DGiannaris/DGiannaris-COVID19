import React from "react";
import { createStore,applyMiddleware } from "redux";
import { Provider,useSelector,useDispatch } from "react-redux";
import { StyleSheet, Text, View } from "react-native";
import createSagaMiddleware from "redux-saga";
import { pointsReducer } from "./reducers/pointsReducer";
import getPointsSaga from "./sagas/getPointsSaga";
import { GET_POINTS } from "./actions/apiActions";


const sagaMiddleware = createSagaMiddleware();
const store = createStore(pointsReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(getPointsSaga);

export default function App() {

  return (
    <Provider store={store}>
      <View style={styles.container}>
        <View style={{widht:40,height:20,backgroundColor:'pink'}}><Text>PRESS</Text></View>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
