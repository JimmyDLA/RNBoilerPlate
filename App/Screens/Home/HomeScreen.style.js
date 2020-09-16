import { StyleSheet } from 'react-native'
import Fonts from 'App/Theme/Fonts'
import { 
  widthPercentageToDP as wp, 
  heightPercentageToDP as hp 
} from 'react-native-responsive-screen';
import ApplicationStyles from 'App/Theme/ApplicationStyles'

export const style = StyleSheet.create({
  button: { 
    backgroundColor: 'rgb(52, 152, 219)',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 250,
    borderWidth: 1,
    borderColor: 'gray',
    marginTop: 20,
  },
  buttonsContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal:  wp(5),
  },
  howTo: {
    fontSize: 16,
  },
  logo: {
    height: wp(50),
    width: wp(50),
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  start: {
    fontSize: 16,
  },
  title: {
    ...Fonts.style.h2,
    textAlign: 'center',
    marginBottom: 10,
  },
})
