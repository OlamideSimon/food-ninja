import { StyleSheet } from 'react-native'
import { colors } from '../../constants'

export const authStyles = StyleSheet.create({
  title: {
    fontSize: 25,
    fontWeight: '700',
    textAlign: 'center',
  },
  container: {
    maxWidth: '80%',
  },
  continue_text: {
    textAlign: 'center',
    marginVertical: 10,
    fontWeight: '600',
    fontSize: 16,
  },
  label: {
    color: '#f3f3f3',
    marginLeft: 3,
    fontSize: 14,
    lineHeight: 22,
  },
  input: {
    marginVertical: 10,
    borderRadius: 20,
    paddingRight: 16,
    height: 55,
    paddingHorizontal: 10,
    color: '#aaa',
  },
  button_container: { paddingHorizontal: '20%', width: '100%', justifyContent: 'center' },
  submit_button: {
    backgroundColor: colors.green,
    paddingVertical: 16,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 24,
    fontSize: 16,
    fontWeight: '700',
    marginVertical: 20,
  },
  submit_button_text: {
    color: '#fff',
    fontSize: 25,
    fontWeight: '700',
  },
  bordered_button: {
    backgroundColor: 'transparent',
    borderColor: '#000',
    borderWidth: 1,
    paddingVertical: 12,
    borderRadius: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
  },
  social_button: {
    paddingVertical: 16,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 24,
    fontSize: 16,
    fontWeight: '700',
    flex: 1,
    flexDirection: 'row',
    gap: 10,
  },
  social_button_text: {
    textTransform: 'capitalize',
    fontSize: 16,
  },
})
