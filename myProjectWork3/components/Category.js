import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Category = ({ title, tasks, image }) => {
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
    width: '48%',
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    alignItems: 'center',
    justifyContent: 'left',
  },
  images: {
    width: 140,
    height: 100,
    marginBottom: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  tasks: {
    fontSize: 14,
    color: '#666',
  },
  main:{}
});

export default Category;
