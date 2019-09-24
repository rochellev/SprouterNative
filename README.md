# Sprouter
## Rochelle Roberts <br>


## Description
Sprouter is an Android journaling app for plant lovers to document the growth and life of their plants. New growth! I created this app to explore React and to combine my love of plants with my passion for programming.


## Minimum Viable Product (MVP)
For Sprouter to be a useful journaling app, the following features define the MVP.
* Users can create a journal for each plant they want to track. 
* Users can have multiple plant journals and see the notes and photos for a particular plant.
* The app Home screen will display all of the user's plant journals. 
* Users can add photos to their journal by tapping on the "plus" button.
* Users can add notes about their plants.


## Beyond MVP
* It would be ideal if users can upload pictures of their plants to go along with the text.
* Use phone camera 
* Use phone storage
* Host app, publish on Google Play Store
* Limit image size  -- or total image sizes
* Cost and scalability analysis
* Responsive UI design
* PC to phone sync
* Expo has support for facebook login
* Accessibility 
* Users can have multiple “books/channels” for journaling about each plant. 
* User authentication
* Make app work well on mobile --- styling for different screen sizes.
* Add tags for user to search their plants
* Make stories for plants, like before and after to show plant growth.
* Connect with Google Photos 
* Add reminders
* Create outdoor plant tag that is linked with weather API

## Technologies
`MVP`
* React Native
* Redux
* JavaScript
* Expo
* CSS
* Adobe XD for UI design <br>
`Beyond MVP` 
* Hosting app
* User Authentication
* Identity
* Weather API

## Design
These are rough mockups showing the general flow off the app. The full prototype can be experienced [here](https://xd.adobe.com/view/8783e05f-7a8e-45e8-4968-4bc4bbb9d99a-f1b2/), hosted by Adobe XD.

### Splash Screen
The splash screen will appear on opening the app. It will set the theme of the app. <br>
![sprouter splash page](assets/images/mockup/splash_screen.jpg)


### Home Screen
After the splash screen, users will be routed to the home screen. This is where the app will display all of a user's plant journals. Users can quick add entries on this screen. Flexbox and ScrollView. <br>
![sprouter home page](assets/images/mockup/home_screen.jpg)

### Plant Profile Screen
Each plant will have a profile page. Users can see the full history of the plant, add more photos and notes.

### Settings Page
A place for users to manage notifications and general settings. 

### Navigation Style
Users can quickly navigate between the home, plant profiles and settings page by tapping on on the navigation tab at the bottom of the screen.

## Resources
Using [flex box](https://facebook.github.io/react-native/docs/flexbox) to manage the layouts.
* do column for top to bottom
* section List for pics by date
* looking into react native component [libraries](https://blog.bitsrc.io/11-react-native-component-libraries-you-should-know-in-2018-71d2a8e33312)
* A [guide](https://www.reactnative.guide/5-project-structure-and-start-building-some-app/5.2-basic-components-and-platform-specific-code.html)

[React Native Elements](https://react-native-training.github.io/react-native-elements/docs/getting_started.html)
[scroll view](https://facebook.github.io/react-native/docs/scrollview.html) to render the list  


## Available Scripts

In the project directory, you can run:

### `npm install`
This installs all the project dependencies.

### `npm start`
Runs the app in the development mode. 
