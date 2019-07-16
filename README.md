# React native touchable resize button
If you want a button with scale animation, then the touchable scale library is your best option.

### Installing
```
npm install react-native-touchable-resize --save
- or -
yarn add react-native-touchable-resize
```

### Usage
```
import React from 'react';
import TouchableResize from 'react-native-touchable-resize';

export default class Example extends React.Component
{
	_callback()
	{
		//your logic here
	}

    render()
	{
        return (
            <View>
				<TouchableResize style={styles.image} onPress={this._callback.bind(this)}>
					<View>
						<Text>{'Button'}</Text>
					</View>
				</TouchableResize>
			</View>
        );
    }
}
```
### API

###### style
Your style for button (optional)

###### onPress
Your callback function after touch.