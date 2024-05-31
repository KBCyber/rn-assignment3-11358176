import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, View, Text, TextInput, Image, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import CategoryCard from './components/Category';
import TaskItem from './components/OngoingTask';import { Ionicons } from '@expo/vector-icons';


const Stack = createStackNavigator();

const categories = [
  { title: 'Exercise', tasks: 12, image: require('./assets/Images/exercise.png') },
  { title: 'Study', tasks: 12, image: require('./assets/Images/read.png') },
  { title: 'Code', tasks: 8, image: require('./assets/Images/code.png') },
  { title: 'Cook', tasks: 5, image: require('./assets/Images/cook.png') },
  { title: 'Cycling', tasks: 7, image: require('./assets/Images/cycling.png') },
  { title: 'Teaching Hours', tasks: 4, image: require('./assets/Images/teach.png') },
  { title: 'Travel & Tour', tasks: 3, image: require('./assets/Images/travel.png') },
  { title: 'Health Care', tasks: 6, image: require('./assets/Images/health.png') },
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
        <Image style={styles.profileImage} source={require('./assets/Images/user.png') } />
      </View>

      <View style={styles.searchContainer}>
      <TextInput style={styles.searchInput} placeholder="Search">
        <Ionicons name="search" size={24} color="gray" style={styles.searchIcon}/>
        <Text style={styles.headerSubtitle}>Search</Text>
      </TextInput>
      
        <TouchableOpacity style={styles.filterButton}><Ionicons bac name="options" size={24} color="white" /></TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>Categories</Text>
      <View style={styles.categories}>
        {categories.map((category, index) => (
          <CategoryCard 
            key={index}
            title={category.title}
            tasks={category.tasks}
            image={category.image}
          />
        ))}
      </View>

      <Text style={styles.sectionTitle}>Ongoing Task</Text>
      <FlatList
        data={tasks}
        renderItem={({ item }) => <TaskItem title={item} />}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.flatListContent}
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
 searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0ff',
    borderRadius: 8,
    paddingHorizontal: 16,
    marginTop: 8,
    marginBottom: 16,
  },
  container: {
    flex: 1,
    backgroundColor: '#FAF3EB',
    padding: 16,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    paddingLeft: 30,
    position: 'relative',
  },
  searchIcon: {
    position: 'absolute',
    top: '50%',
    left: 5,
    transform: [{ translateY: -12 }],
    marginTop: 200,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
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
    borderWidth: 1,
    borderColor: '#fff',
  },
  filterButton: {
    width: 40,
    height: 40,
    backgroundColor: '#F0522F',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#fff',
  },
  sectionTitle: {
    fontSize: 27,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 15,
    marginBottom: 2,
  },
  categories: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  flatListContent: {
    paddingBottom: 16,
  },
});