# Calorie Wars in collaboration with Asad Ali, Max Hurst and Ryan Birdi.

Calorie wars is a gamified health accountability mobile app.

Sounds amazing right, but what does that mean in practice?

Well, most people have difficulty eating the correct amount of food and being too sedentary in day to day life.

As such our mission is to try and promote healthy eating and physical movement by creating a sense of friendly competition and accountability amongst a group of friends. It is aimed at anyone looking for a fun way to stay healthy.

To achieve this we have implemented the following features:

- Calorie tracking using a barcode scanner, custom food inputs or database searching.
- Live pedometer tracking to monitor daily steps.
- A chatroom where users can help motivate each other and keep friends accountable to their goals.
- A live updating leaderboard showing who is closest to achieving their goals for that day.

## Tech Stack

We tried several new technologies in this project as they were best suited for our requirements.

On the Front-End, as we wanted to track steps and calories, a mobile only application using React Native Expo seemed most appropriate as this technology has the ability to integrate a barcode scanner and pedometer using Expo Sensors. It is also a relatively familiar language having used React previously on the Northcoders Bootcamp and so knew we could build more complex features quickly in a short period of time.

We also made extensive use of various libraries to assist with the front-end design of the app:
React Navigation was installed to seamlessly transition from one app screen to the next and also to create a very intuitive and user friendly tab navigation bar.

React Native Gifted Chat was used in conjunction with Firebase to create a very familiar instant messaging style chatroom.

On the Back-End, we made extensive use of the Firebase ecosystem:

- Firebase Authentication was used on the login and registration pages to create a secure environment to store user data and make onboarding as user friendly as possible.
- Cloud Firestore was used as our main backend database and it was an obvious choice for three main reasons:
- We wanted our app to live update and be cloud-based.
- We also knew that we would have large amounts of non-standardized data to store from the food logs and so decided that a non-relational database would serve us best.
- We had not used a database in the same format as Firestore previously on the Bootcamp and wanted to challenge ourselves and test its utility compared to Postgres.

We also made use of several external API’s:

- Open Food Facts was used as it is one of the most extensive food items databases that can process barcode requests.
- Calorie Ninjas API was also used in the search bar on the homepage to fetch calorie data.

Finally, a variety of other developer tools were integrated into the project to improve workflow efficiency and code quality including EsLint and Prettier

## Installation

Run the following command to install all the dependencies -

```bash
npm install
```

## To run the app locally

```bash

git clone https://github.com/manitagupta15/calorie-wars-project/tree/main/main-project/calorie-wars-project

npm install

npm start

scan barcode on mobile device
```
