'use strict';

import React from 'react';
import { Animated, TouchableWithoutFeedback, Easing } from 'react-native';

const easing = Easing.bezier( .25, .1, .25, 1 );

export default class TouchableScale extends React.PureComponent
{
    constructor( props )
    {
        super( props );

        this.state = { scale: new Animated.Value(1) };
    }

    _onPress()
    {
        setTimeout( this.props.onPress, 17 );
    }

    _onPressIn()
    {
        Animated.timing( this.state.scale, { toValue: this.props.scale || 0.97, duration: 150, delay: 50, easing, useNativeDriver: true }).start();
    }

    _onPressOut()
    {
        Animated.timing( this.state.scale, { toValue: 1, duration: 150, easing, useNativeDriver: true }).start();
    }

    render()
    {

        return (
            <TouchableWithoutFeedback onPressIn={this._onPressIn.bind(this)} onPressOut={this._onPressOut.bind(this)} onPress={this._onPress.bind(this)}>
                <Animated.View style={[this.props.style, { transform: [{ scaleX: this.state.scale }, { scaleY: this.state.scale }]}]}>
                    {this.props.children}
                </Animated.View>
            </TouchableWithoutFeedback>
        )
    }
}
