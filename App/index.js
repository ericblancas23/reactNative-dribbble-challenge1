import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, Dimensions } from 'react-native';
import "../assets/bg.jpg";
import Animated from 'react-native-reanimated';
import { TapGesture, State, TapGestureHandler } from 'react-native-gesture-handler';

const {width,height} = Dimensions.get("window")
const { Value,event,block,eq,cond,set } = Animated;


export default class MusicApp extends Component {

    constructor(props) {
        super(props);
        this.onStateChange = Animated.event([
            {
                nativeEvent: (state) => block([
                    cond(eq(state, State.END))
                ])
            }
        ])
        this.buttonOpacity = new Value(1)
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: "white", justifyContent: "flex-end" }}>
                <View style={{...StyleSheet.absoluteFill}}>
                    <Image source={require('../assets/bg.jpg')}
                           style={{ flex: 1, height: null, width: null}}
                    />
                </View>
                <View style={{height: height/3}}>
                <TapGestureHandler onHandlerStateChange={this.onStateChange}>
                    <View style={styles.button}>
                        <Text style={{ fontSize: 20, fontWeight: "bold"}}>SIGN IN</Text>
                    </View>
                    </TapGestureHandler>
                <TapGestureHandler>
                    <View style={{...styles.button, backgroundColor: "#2E71DC"}}>
                        <Text style={{ fontSize: 20, fontWeight: "bold", color: "white"}}>SIGN IN WITH FACEBOOK</Text>
                    </View>
                </TapGestureHandler>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "white",
        height: 70,
        marginHorizontal: 20,
        borderRadius: 35,
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 5,
    }
})
