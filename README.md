# Pokémon Search Application

<div>
    <img src="https://github.com/zvdas/PokemonSearchApp/blob/main/psa_v1/src/assets/pokemon_header.gif" alt="" width="400" height="400"/>
    <img src="https://raw.githubusercontent.com/zvdas/PokemonSearchApp/main/psa_v1/src/assets/react-native-UX-design.gif" alt="" width="400" height="400"/>
</div

photo credit : Pokébiome 004: Charmander (Pinterest)

1. Create a new react app by running the following in terminal
    
    `npx create-react-app psa_v1`
---
2. Once created, enter the react app main folder using the following command
    
    `cd psa_v1`
---
3. Run the React Application by running the following command
    
    `npm start`
---
![screenshot](https://raw.githubusercontent.com/zvdas/PokemonSearchApp/main/screenshots/screenshot_001.png)

---   
4. Install the necessary modules like bootstrap (for Responsive Web Design), json-server (to serve JSON files as an API placeholder), dotenv (.env config)
    
    `npm i --save bootstrap json-server dotenv`
---
5. Import import bootstrap css & bootstrap bundle in app.js to enable bootstrap
---
6.  Launch JSON server to serve as a placeholder for APIs. Setup json server to serve the database json file on port 4000, as 3000 is in use by React.

    `json-server --watch .\src\user_defined\files\pokemon.json --port 4000`
---
7. Create an .env file and add it to .gitignore in order to protect sensitive information, such as MongoDB URI, which contains username & passwords. Add the API URL of the fake API (json server) to the environment variables.
---
## Setup Services
---
8. Configure the Pokemon Services, which contain API methods from axios (get, post, put & delete) to different actions to perform on the API url. For development purposes, a placeholder API with URL localhost:4000/pokemons will be used. The URL is stored in .env file which will be referenced in this file.
---
## Setup Redux
---
9. Setup Redux store for state management. Install the redux libraries by running the following in terminal
    
    `npm i --save react-router-dom react-redux redux redux-thunk axios`

    - react-router-dom : enable routing in React
    - react-redux : enable redux for state management in Redux
    - react-redux-thunk : enable redux with asynchronous ability (for CRUD using Redux)
    - axios : make API calls
---
10. Configure Pokemon Actions by entering the different pokemon action types for the reducer function. Also add the mapToProps constant which will update the state of the component for each method call in each component.
---
11. Add the pokemon methods with data types and payloads for the reducer function. Whatever option is matched in the switch function of the reducer to the pokemon types will return the respective payload.
---
12. The pokemon actions will map the data type and payload to the axios API methods mentioned in pokemon_services.js and dispatch it to the store, where the state is updated and retrieved in the components accordingly.
---
13. Configure Pokemon Reducers & create a reducer function which sets the initial state as an empty array (multiple values) and uses a switch function to match pokemon types to the actions & the methods to return the state (if required) and the respective data payload.
---
14. If there are multiple reducer functions for different tasks, like authorization/login then combine_reducer combines all the reducer functions into a single reducer function which can be used to create the store.
---
15. Configure Redux Store & logic for State Management. Create the store with thunk middleware using the combine reducer. Add the store as a provider for App.js which contains the logic for all the components to display in the browser. This will enable state management in all the components referenced in App.js and below.
---
## Setup Components (view logic)
---
16. Home Component will contain the logic and display code for the home component, which will be displayed as soon as the website is loaded.
---
17. Navbar Component will contain the routing logic with links to the components (implementing BrowserRouter module) and display code to view the navbar.
---
18. Master Component will contain the logic to add, list, update & delete the pokemon data.
---
19. Display Component will only display the pokemon data with search bar and pagination.
---
20. Credits Component is to attribute the content sources.
---
## Flow
---
- The initial state is an empty array, so no data is present.
- The user enters the data by filling the form in the master component.
- When the submit button is clicked
    - the function sends the data to pokemon-actions.js
    - which invokes the method to send the data to pokemon-service.js, which posts the data to the API.
    - once posted, the data is dispatched to pokemon-method.js, 
    - where the type is mapped to pokemon-types & payload is mapped to the data and sent to pokemon-reducer.js
    - where the switch function separates the pokemon types and returns the updated state along with the payload and sends it to the store. 
    - If multiple reducers are used, then combine-reducer combines the payloads and stores it in the store.
- The data from the API is fetched from the store using mapToProps, which updates the state & payload to the master & display components.
- In the master, when the user performs an edit/update or delete action by clicking the respective buttons, the state is updated in the same manner.