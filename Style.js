import { StyleSheet } from 'react-native';

const Style = StyleSheet.create({
  rootContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  displayContainer: {
    flex: 2,
    backgroundColor: '#6F0505',
    justifyContent: 'center',
  },
  displayText: {
    color: '#fff',
    fontSize: 38,
    fontWeight: 'bold',
    textAlign: 'right',
    padding: 20,
  },
  inputContainer: {
    flex: 8,
    backgroundColor: '#F22A2A',
  },
  inputButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.5,
    borderColor: '#FABBBB',
  },
  inputButtonText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
  },
  inputButtonHighlighted: {
    backgroundColor: '#820606',
  },
  inputRow: {
    flex: 1,
    flexDirection: 'row',
  }
});

export default Style;