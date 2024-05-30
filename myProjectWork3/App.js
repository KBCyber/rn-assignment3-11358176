import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, View, Text, TextInput, Image, ScrollView, TouchableOpacity } from 'react-native';

const Stack = createStackNavigator();

function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.headerTitle}>Hello, Devs</Text>
          <Text style={styles.headerSubtitle}>14 tasks today</Text>
        </View>
        <Image style={styles.profileImage} source={require('./assets/favicon.png')} />
      </View>
      
      <View style={styles.searchContainer}>
        <TextInput style={styles.searchInput} placeholder="Search" />
        <TouchableOpacity style={styles.filterButton}>
          <Text>⚙️</Text>
        </TouchableOpacity>
      </View>
      
      <Text style={styles.sectionTitle}>Categories</Text>
      
      <View style={styles.categories}>
        <View style={styles.category}>
          <Image style={styles.categoryImage} source={require('./assets/favicon.png')} />
          <Text style={styles.categoryTitle}>Exercise</Text>
          <Text style={styles.categoryTasks}>12 Tasks</Text>
        </View>
        <View style={styles.category}>
          <Image style={styles.categoryImage} source={require('./assets/favicon.png')} />
          <Text style={styles.categoryTitle}>Study</Text>
          <Text style={styles.categoryTasks}>12 Tasks</Text>
        </View>
      </View>
      
      <Text style={styles.sectionTitle}>Ongoing Task</Text>
      
      <View style={styles.task}>
        <Text style={styles.taskTitle}>Mobile App Development</Text>
      </View>
      <View style={styles.task}>
        <Text style={styles.taskTitle}>Web Development</Text>
      </View>
    </ScrollView>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF3EB',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 4,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 16,
  },
  searchInput: {
    flex: 1,
    height: 40,
    backgroundColor: '#FFF',
    borderRadius: 8,
    paddingHorizontal: 16,
    marginRight: 8,
  },
  filterButton: {
    width: 40,
    height: 40,
    backgroundColor: '#FF6B6B',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 16,
  },
  categories: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  category: {
    width: '48%',
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
  },
  categoryImage: {
    width: 100,
    height: 100,
    marginBottom: 8,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  categoryTasks: {
    fontSize: 14,
    color: '#666',
  },
  task: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 16,
    marginVertical: 8,
  },
  taskTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
