import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const OngoingTask = ({ title }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#FFF',
    borderRadius: 15,
    padding: 16,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: '#E8D1BA',
    paddingTop: 50,
    paddingBottom: 50,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default OngoingTask;
