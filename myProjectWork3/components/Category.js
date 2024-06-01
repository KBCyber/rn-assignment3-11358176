import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const CategoryCard = ({ title, tasks, image }) => {
  return (
    <View style={styles.card}>
      <View style={styles.main}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.tasks}>{tasks} Tasks</Text>
        <Image source={image} style={styles.images} resizeMode="contain" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 180,
    backgroundColor: '#FFF',
    borderRadius: 15,
    padding: 16,
    marginBottom: 16,
    marginRight: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  images: {
    width: 130,
    height: 100,
    marginBottom: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  tasks: {
    fontSize: 14,
    color: '#000',
  },
  main: {}
});

export default CategoryCard;
