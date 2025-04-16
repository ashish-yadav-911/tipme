# **App Name**: TipTop

## Core Features:

- Bill Amount Input: Input field for the bill amount to allow the user to enter the bill amount.
- Tip Percentage Selection: Slider or stepper to select the tip percentage from 0% to 30%.
- Split Bill Input: Input for the number of people to split the bill amount among.
- Real-time Calculation and Display: Real-time calculation of the tip amount, total amount (bill + tip), and amount per person.
- User Preferences: Allow users to save their default tip percentage.

## Style Guidelines:

- Background: White (#ffffff).
- Primary Color: Purple (#6A0DAD).
- Accent: Lavender (#B19CD9) for highlights and interactive elements.
- Buttons: Purple background with white text for primary actions.
- Inputs: White background with purple border/focus for a clean look.
- Use vector icons with a purple tint for a consistent theme.
- Consistent spacing and padding to maintain a balanced visual appearance.
- Subtle animations for user interactions, such as button presses and input focus.

## Original User Request:
Build a Tipping Calculator Android App using React Native to help users quickly calculate the tip on a restaurant bill, and optionally split the total amount among friends. The app should have a clean and elegant UI using a white and purple color scheme. The application will support user authentication with login and logout functionalities, saving user preferences for tip percentage and previous bill history using AsyncStorage (or Firebase Firestore for cloud sync, optional). The app should be production-ready with modular and scalable code.

✅ Core Features:
User Authentication:

Login and Signup using Firebase Auth (email/password or Google sign-in).

Logout option with confirmation prompt.

Secure token/session storage using AsyncStorage.

Auth-based routing: unauthenticated users redirected to login.

Bill Entry Screen:

Input field for Bill Amount.

Slider or stepper to select Tip Percentage (e.g., 0% to 30%).

Input for Number of People to split the bill.

Real-time calculation and display of:

Tip amount

Total amount (bill + tip)

Amount per person

User Preferences:

Allow users to save their default tip percentage.

Option to round up total or per person amount.

Past Calculations History (Optional):

Show list of recent tips calculated.

Store in Firebase Firestore or local storage.

Option to delete individual entries.

🎨 UI Design (White & Purple Theme):
Background: #ffffff (White)

Primary Color: #6A0DAD (Purple)

Accent: #B19CD9 (Lavender)

Buttons: Purple background, white text

Inputs: White background, purple border/focus

Icons: Use vector icons with purple tint

Use consistent styling with StyleSheet.create() and possibly a theming library like React Native Paper or styled-components.

🧠 Tech Stack:
React Native (with Expo or CLI)

Firebase for Auth and (optional) Firestore

React Navigation v6 for screen transitions

React Context API or Redux for auth/global state

AsyncStorage for local data

Formik + Yup for form handling and validation

React Native Vector Icons for icons

📱 Screens:
Splash Screen:

App logo + spinner while checking auth status.

Login/Signup Screens:

Email + Password inputs

Login / Signup buttons

Link to switch between forms

“Forgot Password” functionality (optional)

Home (Tip Calculator) Screen:

Bill amount input (numeric keyboard)

Tip percentage selector (slider or segmented control)

Split among people input

Total tip, final bill, and per-person breakdown

Button to save this entry to history (optional)

Settings Screen:

Set default tip percentage

Toggle: round-up per person

Logout button

History Screen (Optional):

List of past tip entries with timestamps

Delete or clear history option

🛠️ Dev Tips:
Use KeyboardAvoidingView for a better experience when typing.

Use TouchableWithoutFeedback + Keyboard.dismiss() to hide the keyboard on background tap.

Modularize components: <TipInput />, <TipResults />, <SettingsModal />, etc.

Add input validations to prevent empty or zero values.

Use React Native's Appearance API to toggle dark/light modes (optional).
  