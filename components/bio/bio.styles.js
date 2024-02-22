import { StyleSheet } from 'react-native'
import { colors } from '../../constants'

export const bioStyles = StyleSheet.create({
  title: { fontSize: 30, fontWeight: '700' },
  input: {
    marginVertical: 8,
    borderRadius: 10,
    paddingRight: 16,
    height: 60,
    paddingHorizontal: 10,
  },
  button_container: {
    position: 'absolute',
    bottom: 20,
    paddingHorizontal: '30%',
    justifyContent: 'center',
    width: '100%',
  },
  button: {
    backgroundColor: colors.green,
    paddingVertical: 16,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    fontSize: 16,
    fontWeight: '700',
    marginVertical: 20,
  },
  button_text: {
    color: '#fff',
    fontSize: 23,
    fontWeight: '600',
  },
  back_button_container: {
    marginLeft: 20,
    marginTop: 40,
  },
  back_button_text: {
    color: '#DA6317',
    fontSize: 25,
  },
})
