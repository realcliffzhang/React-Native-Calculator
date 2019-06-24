
# React Native Calculator
## General Info
I built a calculator app using React Native. It's not fully functional, but I did want to use this mini-project to introduce myself to JavaScript mobile application frameworks. I am excited to have learned how powerful and convenient it is to integrate markup language (embedding XML through JSX) into a high-level programming language (JS). Also using one code base and deploying them to multiple platforms is also a godsend.
## Screenshots
![Screenshot](https://i.imgur.com/w9ETQ0y.png)
## Built With
 - React Native (using React Native CLI, not Expo CLI)
## Functionalities
- This is a fully functional basic calculator except for the following things:
	- The decimal operator doesn't register.
	- Dividing by zero returns infinity.
	- There's no clear (C) button. To clean the input area, you need to reload the app.
	- It takes a maximum of two inputs (e.g. if you press 8*3*3=, it ignores the 8 and returns 9).
## How To Run
If you don't have a development environment set up, I highly recommend you to follow the "Getting Started" page in the React Native Doc (https://facebook.github.io/react-native/docs/getting-started). Otherwise, clone, unzip, cd into the folder, open an emulator or plug in a physical device, and run<br>
`react-native run-android` for android<br>
`react-native run-ios` for ios