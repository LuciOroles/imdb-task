# Welcome to RegalVoice Movie Database!


## Getting started
Welcome to RegalVoice's front-end coding challenge!

Please set aside 6-8 hours to complete this challenge.  You should have been provide with an API key to use for this challenge.  If you do not have it, please contact us immediately.
When you're ready to get started, fork this repository.

## Brief
We're going to build an awesome movie database web app!
Using [IMDb's API](https://imdb-api.com/api), we will build a simple to use web app to view movie information and track which movies we'd like to see, as well as search for movies.

*Note: All screenshots included here are purely for demonstrating required information, and should not be considered design specs.  You may present this information using any reasonable UX.  While UX design is not a primary consideration in this challenge, please attempt to make it as presentable as possible.*

## Technical Specifications
Our app will consist of 3 main pages:

### Home page
The home page of our database should show a list of all upcoming movies. Each movie in the list should show its title, rating, runtime, and year of release. Each should be able to be clicked into, taking the user to the [movie page].  Notice the "Watchlist" tab at the bottom.  We'll address that in a later specification.

![Screenshot of homepage](/screenshots/homepage.png?raw=true)

### Movie page
The movie display page will show more details about the movie we've selected.  On this page, we should be able to see and navigate to other similar movies.  This page should have much more detail, including the full plot of the movie, and a list of actors (not navigable).

![Screenshot of movie page](/screenshots/moviepage.png?raw=true)

### Search results
Not every movie is reachable from the "Upcoming" list used on our home page!  In fact, only a very small number of movies can be found that way.  Add a search bar to the app, to allow users to search for movies.  This should take them to page with the results of their search, where each movie behaves similarly to the behavior described on the [home page].

![Screenshot of search](/screenshots/search.png?raw=true)

### Watchlist
When a user sees a movie they'd like to watch, we don't want them reaching for a notepad!  Add a watchlist feature.  This watchlist should:
- be present on every page of the app
- be easy to add movies to and remove movies from
- be collapsible, and show the number of movies on the list when collapsed

(Note: The watchlist does not need to persist through page refreshes, but should persist through clicking into each movie.)

![Screenshot with populated watchlist](/screenshots/watchlist.png?raw=true)

### Pro features
We'd like to add a few features to the "Pro" version of our app.  Please choose at least one of these options to expand the app's functionality - the more the better!  For each pro feature you add, we will ask you to write a short explanation of your implementation on submission.

1. **Home page list**

    Allow users to chose from three different homepages - Upcoming, Top 250, or Most Popular
    ![Screenshot of homepage list](/screenshots/homepage-options.png?raw=true)

2. **Similarity score**

    Show a similarity score on the watchlist. Not including "current movie" (the page we're on), this score should show how similar the movie in the watchlist is to the movie on the page we're currently viewing. This should have at least 2 levels of similarity (Very similar, similar), but may have more (Somewhat similar, Not very similar, ...).  How you implement the similarity score is up to you, but please explain your implemented design on submission.
    ![Screenshot of similarity score](/screenshots/similarity.png?raw=true)

3. **Recommendations**

    Sometimes a user has seen a movie, and wants recommendations based on that!  Add the ability to make recommendations based on movies that users indicate that they have already watched.  The recommendation list should not exceed 10 titles.  How you implement the recommendation engine is up to you, but please explain your implemented design on submission.
    ![Screenshot of recommendations](/screenshots/recs.png?raw=true)

## Quick Requirements
- Use React/Typescript
    - Any other publicly available Javascript/Typescript library may also be added to the project
- Home page
    - Display information about movies
    - Click into each movie
- Movie page
    - More details about movie, including:
        - Plot
        - Actors
        - Similar movies (which can also be clicked into)
- Search page
    - Display relevant searched-for movies
    - Each movie can be clicked into
- Watchlist
    - Movies may be added to and removed from the watchlist with ease from anywhere in the app
    - Collapsible with total movie count
    - Display logical/relevant information when opened
- At least one of the three pro features implemented:
    - Home page list
    - Similarity score in watchlist
    - Recommendation engine

## Submisssion
The best way to submit this project is as a pull request to your private fork of this repository.  Be sure to keep the fork private, and give us the appropriate access (after notifying us by email).  For each pro feature implemented, please include a short explanation (< 200 words) in the pull request description, or as PR comments on the relevant files.

The submission should be able to be cloned directly from the forked repository and launched using `yarn start` or `npm start`.

If you are unable use the fork/pull request method, you may also submit as a zip file (please do not include the `node_modules` folder).  If submitting with this method, please include a text/markdown file with any pro feature explanations.
