 ### 1.
 ### ❖ Brief application description
   This is a web app use to present the different event on a campus. More explicitly it is a CRUD app . In this app, the admin can  create the different event on the campus and he has to pass through an authentication process to ensure he is the admin, this also limit the creation of events by students. Also the students can only view events, register for the events(if the dta has not yet pass and the number of participant is not yet full). Since we have an authentication process for the event to be created , only the admin will be able to create the event and not the students. the event is describe here by many aspects : the event Name, Event Description, Maximum capacity of participant, the category(workshop, conference, sport etc) and the Event date

### ❖ Functional goals 
  The goals of this app is to present the different events of a specific campus for the different student to be able to reguister: so
 - The admin can register usin the following credentials . Name : Admin  and password :1234
 - The student has only the right to register for an event and view other events

### ❖ Tech used:
 for the frontend i used html and css
 for the backend i used typescript


### 2. Implemented Features 
  ### Feature                         -- Implemented
    Create events                   --YES
    Display full event list         --YES
    Filter events                   -- YES
    Event detail page               -- YES
    User registration               -- YES
    Duplicate registration protection -- YES
    Capacity control                -- YES
    Status (OK/partial/missing)     -- YES
 ### + Bonus:                    -- Implemented
    dark mode                      -- NO
    responsive                     -- YES


### 3. Project Structure (student may expand) 
event-app/ 
 │── index.html 
 │── styles/ 
 │── dist/ 
 │── src/ 
 │   
 ├── models/ 
 │   
 └── main.ts 
 │── tsconfig.json 
 │── package.json 
 │── .gitignore 
 └── README.md 

 ### Yes the project structure has been respscted

### 4. Installation & Execution 
npm run dev 

### 5. How the Flow works now

1. User(Admin) clicks "Create Event" (Top Nav).
2. TypeScript catches the click and runs "showAdminLogin() function".
3. An alert message appears asking for "Admin" and "1234".
4. If correct, the Home  disappears and the Create Event Form appears on the same page.
5. When the form is submitted, the event is added to the array "allEvents", and you are sent back to the Home  to see the new card.

### 6. Screenshots 
  ALL THESE FILES WILL BE FOUND IN THE FOLDER IMAGES 

### 7. Conclusion & Limitations 
 This project aim to test our competences or skill in using Typescript to build app(web app). 
  ### limitations  :
 - The app can only be accessed throught a browser
 - no image for the event 
 - event the admin can not add some other categories
 - We can not view the number of registered paticipant or even the number of peoples registered
  ### Talking about improvement :
 - As a global we can just implement the features we cited above in the limitations 
### 8. Author Information 
Field        --Fill in 
Full name    -- ABDOUL MOUHSIN CHOUAIB CHERIF
Student ID   -- 2425L096
Email        -- chouaib.abdoul@saintjeaningenieur.org

https://github.com/ABDOUL-MOUHSIN-CHOUAIB-CHERIF/TYpescript-Project.git





