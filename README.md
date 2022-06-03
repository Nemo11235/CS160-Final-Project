# CS160-Final-Project
This is the repository for cs160 final project of group 5

Single Player  
- Win/Lose the game  
- Resume the game from the profile page  
- Start a new game from the profile page  
- Option to choose to use the default word list and the custom word list  

About Us Page  
- Show the information of the team  
    
Tutorial Page
- Introduction on both single-player mode and multiplayer mode.
    
    
Multiplayer
- Limit for user id and room id 
- Generate room id and copy
- The Wait Screen before both players join
- Limit the number of players in each room
- Show win pop-up and draw pop-up when the game is finished
- Progress will be passed to the opponent
    
    
Hamburger Menu
- Being able to travel to any pages
- The single/Multiplayer option will change based on the current page
- Click on the cross or the blur will close the menu
    
    
Header
- Contains the hamburger menu, logo and the user profile icon
- Click on the logo or the user icon will bring the user to the user profile page/log in page


Database
- Contains the default word list for both single and multiplayer
- Contains the wordlist uploaded by users, they will be linked to the user’s account, which means when logging out and logging in again, the word list will still be there, no need to upload it again;
- Contains the custom wordlist from each user
- Contains the unfinished game progress from each user
- API that generates random words from the user’s list or the default list


User Profile Page
- Shows the game statistics about the current player;
- Allows the user to upload their custom list, the database will process the text file, and accept all the valid and non-repeated words;
- Allows the user to clear the custom words and upload again;
- Allows the user to resume after they left an unfinished game;
- Allows the user to give up the last game and start a new one;


How to run:
- First do a ```npm i``` in on ```CS160-Final-Project/wordle``` and ```CS160-Final-Project/wordle/server``` folder to download dependencies;

- Then on the root folder ```CS160-Final-Project``` do installation of the following:
```
pip install django
pip install djangorestframework
python -m pip install django-cors-headers
npm i firebase
npm i react-switch
```

- To run it on VS Code, we need 3 terminals to run database, socket.io server, and the website separatly:
- On the CS160-Final-Project (root) folder, run ```python manage.py runserver``` to run the data base;
- On the CS160-Final-Project/wordle/server folder, run ```npm start``` to run the socket.io server;
- On the CS160-Final-Project/wordle folder, run ```npm start``` to run the website;

The website should be now running. If it prompts that some modules are missing, go to the corresponding folder and do ```npm i xxx``` xxx is the missing module.
