# FootballPlayouts

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Features

### Football Playouts

The application includes functionality to simulate football and ice hockey matches. 

#### Starting a Game

- To start a football match, click on the "Start Football Match" button.
- To start an ice hockey match, click on the "Start Ice Hockey Match" button.

The game will simulate the scoring events, halftime, and game end. The scoreboard will display the scores for each team and the total scores per team.

### Hierarchical Data Structures

The application can display hierarchical data structures. 

#### Scene Manager

- Navigate to the "Scene Manager" section to view a hierarchical representation of a game scene.
- The tree menu shows the hierarchical structure, and clicking on any element will display its properties.

### API Call

The application includes functionality to fetch and display Bitcoin price index data.

#### Fetching Data

- Navigate to the "API Call" section.
- The application will fetch data from the [CoinDesk Bitcoin Price Index API](https://api.coindesk.com/v1/bpi/currentprice.json) and display the information in a user-friendly format.

### Components

#### `SceneManagerComponent`

Handles the fetching and displaying of hierarchical scene data.

#### `TreeNodeComponent`

Recursively displays the hierarchical tree structure.

#### `PropertiesViewComponent`

Recursively displays the properties of the selected tree node, with special handling for `children` properties to display only the children types.

#### `ApiCallComponent`

Handles the fetching and displaying of data from the CoinDesk Bitcoin Price Index API.

## Project Structure

- `src/app/components/football-playout/`: Contains components and services related to the football and ice hockey playouts.
  - `football-playout.component.ts`: Main component for handling football and ice hockey playouts.
  - `football-playout.service.ts`: Service for managing the game logic and events.
- `src/app/components/scene-manager/`: Contains components and services for handling hierarchical data.
  - `scene-manager.component.ts`: Main component for fetching and displaying scene data.
  - `scene-manager.service.ts`: Service for fetching scene data.
  - `tree-node.component.ts`: Component for displaying the hierarchical tree structure.
  - `properties-view.component.ts`: Component for displaying the properties of a selected tree node.
- `src/app/components/api-call/`: Contains components and services for handling the API call.
  - `api-call.component.ts`: Main component for fetching and displaying Bitcoin price index data.
  - `api-call.service.ts`: Service for making the API call.

## JSON Data

The `assets/json/scene-manager.json` file contains the hierarchical data describing a game scene, which is used by the `SceneManagerComponent` to build and display the tree structure.

## Running the Application

1. Ensure the `scene-manager.json` file is in the `src/assets/json` directory.
2. Install all packages npm install

3. Run the application using the Angular CLI:
    ```bash
    npm start
    ```

4. Navigate to `http://localhost:4200` in your browser.

5. Use the navigation menu to switch between different components and start the football or ice hockey match by clicking the respective start button. In the Scene Manager, click on any element in the tree to view its properties. In the API Call section, view the Bitcoin price index data fetched from the API.

Enjoy developing with FootballPlayouts!
