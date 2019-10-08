# Redux
[link](https://redux.js.org/recipes/structuring-reducers/basic-reducer-structure)

## Terms
* state = the data at any given time
* state shape = the structure and organization of the state
* Reducer = pure function
* dispatched action

## Entire App has one single reducer.
* the function passed into createStore is the single reducer
* all your "write" logic goes into a single function, and the only way to run that logic is to give Redux a plain object that describes something that has happened

## This single reducer needs to do several things:
* Must provide a default state because the first time the reducer is called, the state value will be undefined.
* determines what work needs to be done based on previous state and dispatched action 
* it needs to create new objects and arrays with the updated data and return those. assuming real changes need to occur
* If no changes are needed, it should return the existing state as-is.

## Reducer logic
* typeof state 
* switch statements on `action.type`
* default logic

## State Shape
* usually has a plain Javascript object as the top of the state tree
* The most common way to organize data within that top-level object is to further divide data into sub-trees
* each top-level key represents some "domain" or "slice" of related data
* top-level keys in the state each represent a "slice" of data for some particular concept.
* define state shape in terms of your domain data and app data

## Three Types of data
* Domain data: data that the application needs to show, use, or modify
* App state: data that is specific to the application's behavior -- currently selected
* UI state: data that represents how the UI is currently displayed

## Typical app state shape
```javascript
{
    domainData1 : {},
    domainData2 : {},
    appState1 : {},
    appState2 : {},
    ui : {
        uiState1 : {},
        uiState2 : {},
    }
}
```

## Splitting Reducer Logic
* it's generally agreed that functions should be relatively short and ideally only do one specific thing
* Small utility functions containing some reusable chunk of logic that is needed in multiple places 
  * which may or may not be actually related to the specific business logic
* Functions for handling a specific update case, which often need parameters other than the typical (state, action) pair
* Functions which handle all updates for a given slice of state. 
  * These functions do generally have the typical (state, action) parameter signature