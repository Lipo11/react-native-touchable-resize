# React native touchable scale button
If you want a button with scale animation, then the touchable scale library is your best option.

### Installing
```
npm install react-native-touchable-scale --save
- or -
yarn add react-native-touchable-scale
```

### Usage
```
import React from 'react';
import TouchableScale from 'react-native-touchable-scale';

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
				<TouchableScale style={styles.image} onPress={this._callback.bind(this)}>
					<View>
						<Text>{'Button'}</Text>
					</View>
				</TouchableScale>
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