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

![Home Screen & Categories](/myProjectWork3/assets/Images/Screenshot_20240601_132910_Expo%20Go.jpg)
![Home Screen and Categories](<myProjectWork3/assets/Images/Screenshot_20240601_132922_Expo Go.jpg>)
![More of Categories](/myProjectWork3/assets/Images/Screenshot_20240601_132928_Expo%20Go.jpg)
![More of Categories](/myProjectWork3/assets/Images/Screenshot_20240601_132932_Expo%20Go.jpg)
![Ongoing Tasks](/myProjectWork3/assets/Images/Screenshot_20240601_132939_Expo%20Go.jpg)
![More of Ongoing Tasks](/myProjectWork3/assets/Images/Screenshot_20240601_132943_Expo%20Go.jpg)

## Installation

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