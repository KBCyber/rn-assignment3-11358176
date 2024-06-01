import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, View, Text, TextInput, Image, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import CategoryCard from './components/Category';
import TaskItem from './components/OngoingTask';
import { Ionicons } from '@expo/vector-icons';

const Stack = createStackNavigator();

const categories = [
  { id: '1', title: 'Exercise', tasks: 12, image: require('./assets/Images/exercise1.png') },
  { id: '2', title: 'Study', tasks: 12, image: require('./assets/Images/study1.png') },
  { id: '3', title: 'Code', tasks: 8, image: require('./assets/Images/code.png') },
  { id: '4', title: 'Cook', tasks: 5, image: require('./assets/Images/cook.png') },
  { id: '5', title: 'Cycling', tasks: 7, image: require('./assets/Images/cycling.png') },
  { id: '6', title: 'Teaching Hours', tasks: 4, image: require('./assets/Images/teach.png') },
  { id: '7', title: 'Travel & Tour', tasks: 3, image: require('./assets/Images/travel.png') },
  { id: '8', title: 'Health Care', tasks: 6, image: require('./assets/Images/health.png') },
];

const tasks = [
  'Mobile App Development',
  'Web Development',
  'Push Ups',
  'Beach Party',
  'Google Developers Accra 2024',
  'ABSA x Mest Africa Hacks',
  'DCIT 202 Assignment 3',
  'Send Money to Mama',
  'Evening Quiz',
  'Group Assignment',
  'Semester Project',
  'A Visit John',
  'KB Tech Seminar',
  'Graduation',
  'Ladies In Tech',
];

function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.headerTitle}>Hello, Devs</Text>
          <Text style={styles.headerSubtitle}>14 Tasks Today</Text>
        </View>
        <Image style={styles.profileImage} source={require('./assets/Images/user.png')} />
      </View>

      <View style={styles.searchContainer}>
        <Ionicons name="search" size={24} color="black" style={styles.searchIcon} />
        <TextInput style={styles.searchInput} placeholder="Search" />
        <TouchableOpacity style={styles.filterButton}>
          <Ionicons name="options" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>Categories</Text>
      <FlatList
        data={categories}
        renderItem={({ item }) => (
          <CategoryCard
            title={item.title}
            tasks={item.tasks}
            image={item.image}
          />
        )}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.flatListContent}
      />

      <Text style={styles.sectionTitle}>Ongoing Tasks</Text>
      <FlatList
        data={tasks}
        renderItem={({ item }) => <TaskItem title={item} />}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.flatListContentVertical}
      />
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
    backgroundColor: '#F7F0E8',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000',
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#000',
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
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    backgroundColor: '#FFF',
    borderRadius: 14,
    paddingHorizontal: 16,
    marginRight: 8,
    borderWidth: 1,
    borderColor: '#fff',
  },
  filterButton: {
    width: 40,
    height: 40,
    backgroundColor: '#F0522F',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#fff',
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 3,
    marginBottom: 2,
  },
  flatListContent: {
    paddingBottom: 16,
  },
  flatListContentVertical: {
    paddingBottom: 16,
  },
});