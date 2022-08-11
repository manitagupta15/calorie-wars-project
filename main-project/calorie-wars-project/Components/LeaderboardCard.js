import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useState } from 'react';
import { db, auth } from '../firebase';

export default LeaderboardCard = () => {
  const [targetCalsGoal, setTargetCalsGoal] = useState(0);
  const [targetStepsGoal, setTargetStepsGoal] = useState(0);
  const [currentCals, setCurrentCals] = useState(0);
  const [currentSteps, setCurrentSteps] = useState(0);
  const [username, setUsername] = useState('');

  const email = auth.currentUser?.email;
  const getUserEmail = db.collection('users').doc(auth.currentUser?.email);

  getUserEmail
    .collection('goals')
    .doc(email + '-goals')
    .onSnapshot((doc) => {
      setTargetCalsGoal(doc.data().calorie_goal);
      setTargetStepsGoal(doc.data().step_goal);
    });

  getUserEmail
    .collection('cals_step_log')
    .doc(email + '-cal_step_log')
    .onSnapshot((doc) => {
      setCurrentCals(doc.data().cals_consumed);
      setCurrentSteps(doc.data().steps);
    });

  getUserEmail.onSnapshot((doc) => {
    setUsername(doc.data().username);
  });

  return (
    <View>
      <View>
        <Text>Rank: {}</Text>
        <Text>{username}</Text>
        <Text>
          Steps to Goal: {currentSteps} / {targetStepsGoal}
        </Text>
        <Text>
          Calories to Goal: {currentCals} / {targetCalsGoal}
        </Text>
        <Text>Score: {}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});