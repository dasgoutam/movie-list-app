# MovieListApp - Project Details

Angular Version - 14.2.1
Component Library - Angular Material

## Project Structure
```.
+-- app
|   +-- components
|       +-- Contains reusable components and ancillary components (Movie cards, headers)
|   +-- pages
|       +-- Contains navigation pages of the app (Home, Movie details)
|   +-- core
|       +-- data (JSON data)
|       +-- routes
|       +-- schema (Interface for data)
|       +-- services
|   +-- app.component
|   +-- app.module
```
## Additional Libraries Used
Angular Flex Layout - creating responsive grids
Star Rating Module - Displaying rating system on cards

## Usage Instructions
The app contains 2 parts 
A home landing page where it displays a list of movies, and
Description page for each movie

1. The landing page has 2 areas - a movie list area and a watched movies are
2. Movies can be dragged and dropped into the watched movies area and vice-versa
3. Clicking on a movie card will navigate to the movie description page
