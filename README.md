### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

#
#
# Phase 3 Project: Restaurants, Bartenders, and Cocktails Front-End
## Pitch
This project uses a REACT front-end and a Sinatra-based backend to create a directory of
restaurants, bartenders, and cocktails to search through, create and edit entries.
### Project Story
I've been bartending in Atlanata for the past 3 years, and I've been in the industry too
long. There are a lot of craft cocktails made everyday, and since it is, indeed, a craft,
it'd be nice to see who made it and be able to get the change to meet them at their
restaurant, so I figured I'd make an app to do just that.

### Core Features
I would wish for a directory to look up certain cocktails, attribute those cocktails
to specific bartenders, and show which restaurant has what bartender. For restaurants,
you'd be able to fire your bartender, which removes them from the database, or create
 a whole new restaurant. For bartenders, you'd be able to create a new bartender,
 create a new cocktail, or change your restaurant (before the old one can fire you, ha).
 For all three models (restaurants, bartenders, and cocktails), you'll be able to view
 a list of all of their respective objects.

 ## Components
 
 ### Component Heirarchy
- App
    - NavigationBar
    - Switches
        - Home
        - RestaurantList
            - RestaurantCard
                - ForHireDropDrown
        - BartenderList
            - NewBartenderForm
            - BartenderCard
                - CocktailForm
        - CocktailList
            - CocktailCard

 ## Repository Links
 Haki's Frontend Repo: https://github.com/badihaki/phase-3-project
 Haki's back-end repo: https://github.com/badihaki/phase-3-sinatra-react-project

 #include instructions for set up, delete the rest