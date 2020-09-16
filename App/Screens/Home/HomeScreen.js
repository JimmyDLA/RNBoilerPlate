import React from 'react'
import {
  Text, 
  View, 
  Easing, 
  Animated,
} from 'react-native'
import { setGame } from 'App/Redux/modules/home';
import reactLogo from 'App/Assets/Images/react-logo.png';
import { connect } from 'react-redux'
import { style } from './HomeScreen.style'

class HomeScreen extends React.Component {
  spinAnimate = new Animated.Value(0);

  componentDidMount() {
    Animated.loop(Animated.timing(
      this.spinAnimate, 
      {
        toValue: 1,
        duration: 6000,
        easing: Easing.linear,
        useNativeDriver: true,
      },
    )).start();
  }

  handleSetGame = () => {
    const { setGame } = this.props;
    setGame(true);
  }

  render() {
    const spin = this.spinAnimate.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    });

    return (
      <View style={style.container}>
        <Text style={style.title}>React Native</Text>
        <Animated.Image
          resizeMode="center"
          style={[style.logo, { transform: [{rotate: spin}] }]}
          source={reactLogo} 
        />
        <Text>
          This is a React Native boilerplate with Redux, Saga, Navigation, Axios, and other modules
          that are ready to go, out the box.
        </Text>
      </View>
    )
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {
  setGame,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null,
  { forwardRef: true }
)(HomeScreen)
