# rn-assignment3-11358176

# React Native To-Do App

This project is a simple React Native To-Do application that displays categories and tasks. The categories are scrollable horizontally, and the tasks are displayed in a vertical list. The app has a home screen with a search bar, a user profile image, and sections for categories and ongoing tasks.

## Components

### `App`
The main component that sets up navigation and includes the `HomeScreen`.

### `HomeScreen`
- Displays the header with a greeting and user profile image.
- Includes a search bar with a filter button.
- Shows a horizontally scrollable list of categories.
- Displays a vertically scrollable list of ongoing tasks.

### `CategoryCard`
- Used to display individual category cards.
- Props:
  - `title` (string): The title of the category.
  - `tasks` (number): The number of tasks in the category.
  - `image` (object): The image associated with the category.

### `OngoingTask`
- Used to display individual tasks in the ongoing tasks list.
- Props:
  - `title` (string): The title of the task.

## Screenshots

<div style="display: flex; justify-content: space-around;">

### `HomeScreen` and `Categories`

  <img src="myProjectWork3/assets/Images/Screenshot_20240601_132910_Expo Go.jpg" alt="Home Screen" width="220"/>

### `HomeScreen` and `Categories`
  <img src="myProjectWork3/assets/Images/Screenshot_20240601_132922_Expo Go.jpg" alt="Categories" width="220"/>

### This is just more of the `Categories`
  <img src="myProjectWork3/assets/Images/Screenshot_20240601_132928_Expo Go.jpg" alt="Ongoing Tasks" width="220"/>
  <img src="myProjectWork3/assets/Images/Screenshot_20240601_132932_Expo Go.jpg" alt="Categories" width="220"/>
  <img src="myProjectWork3/assets/Images/Screenshot_20240601_132939_Expo Go.jpg" alt="Ongoing Tasks" width="220"/>
  <img src="myProjectWork3/assets/Images/Screenshot_20240601_132943_Expo Go.jpg" alt="Ongoing Tasks" width="220"/>
</div>





















### `HomeScreen` and `Categories`
<img src="/myProjectWork3/assets/Images/Screenshot_20240601_132910_Expo%20Go.jpg" alt="Home Screen" width="150"/>

### `HomeScreen` and `Categories`
![Home Screen and Categories](<myProjectWork3/assets/Images/Screenshot_20240601_132922_Expo Go.jpg>)

### This is just more of the `Categories`
![More of Categories](/myProjectWork3/assets/Images/Screenshot_20240601_132928_Expo%20Go.jpg)

### Another one `Categories`
![More of Categories](/myProjectWork3/assets/Images/Screenshot_20240601_132932_Expo%20Go.jpg)

### This is `OngoingTasks`
![Ongoing Tasks](/myProjectWork3/assets/Images/Screenshot_20240601_132939_Expo%20Go.jpg)

###  More of the `Categories`
![More of Ongoing Tasks](/myProjectWork3/assets/Images/Screenshot_20240601_132943_Expo%20Go.jpg)


## Installation Process & Set-up for this TO-DO `App`

1. Clone the repository.
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Run the application:
   ```bash
   npm start
   ```

## License

This project is licensed under the MIT License.