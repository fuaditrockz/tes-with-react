import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "body": {
        "fontFamily": "'Raleway', sans-serif"
    },
    "h3": {
        "fontSize": 40
    },
    "p": {
        "fontSize": 20
    },
    "a": {
        "textDecoration": "none",
        "fontSize": 12,
        "color": "#fff",
        "backgroundColor": "#A67889",
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10
    },
    "todo-wrapper": {
        "backgroundColor": "#f50054",
        "color": "#fff",
        "paddingTop": 10,
        "paddingRight": 40,
        "paddingBottom": 10,
        "paddingLeft": 40
    },
    "comment-box": {
        "marginTop": 30,
        "marginRight": 0,
        "marginBottom": 30,
        "marginLeft": 0
    },
    "comment": {
        "backgroundColor": "#FFF",
        "color": "#f50045",
        "marginTop": 20,
        "marginRight": 20,
        "marginBottom": 20,
        "marginLeft": 20,
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10,
        "maxWidth": 300,
        "minHeight": 150
    },
    "comment-header": {
        "fontWeight": "bold",
        "fontSize": 30,
        "color": "#A56789",
        "marginTop": 10
    },
    "comment-body": {
        "marginTop": 20,
        "marginRight": 20,
        "marginBottom": 20,
        "marginLeft": 20
    }
});