# CS160-Final-Project
This is the repository for cs160 final project of group 5

## Login Page
- The player should login with the google account before playing
- The game statistics and their custom wordlist will be saved in the database with the google account
![image](https://user-images.githubusercontent.com/26106407/171949225-4e78786f-ce39-4920-88e4-85eaf15bc504.png)

## Tutorial Page
- Introduction on both single-player mode and multiplayer mode.
![image](https://user-images.githubusercontent.com/26106407/171951118-5d9948a3-266d-42e5-9b24-da0ed8da5f06.png)

## Single Player  
- Resume the game from the profile page  
- Start a new game from the profile page  
- Option to choose to use the default word list and the custom word list  
- The keyboard and grid will change their color to tell you if the letters are correct in terms of position/choice 
![image](https://user-images.githubusercontent.com/26106407/171949769-627f64e9-8cbe-43ef-abef-4bdc36af4eb3.png)
![image](https://user-images.githubusercontent.com/26106407/171950826-228e299a-a546-4078-88c1-691217dbeaf6.png)

## About Us Page  
- Show the information of the team  
![image](https://user-images.githubusercontent.com/26106407/171949809-21803d3d-adaa-40b4-8cff-df043379c3bf.png)

## Multiplayer
- Limit for user id and room id length and character choice to prevent XSS attack
- Generate room id and allows one-click copy
- The Wait Screen before both players join
- Limit the number of players in each room
- Show win pop-up and draw pop-up when the game is finished
- Progress will be passed to the opponent


### Lobby Page
![image](https://user-images.githubusercontent.com/26106407/171949885-44ada520-ee0d-4b4b-ae83-c8269a521f5b.png)
![image](https://user-images.githubusercontent.com/26106407/171950050-a5471958-bc78-42e8-8254-c81dc629e37f.png)
- The first joined player will need to wait until the opponent is ready. When the other opponent joined the same room, a countdown will start on both players' screen. When the countdown finishes, the game will start. Whoever gets the word first will win, if both player didn't get the word, it's a draw.
![image](https://user-images.githubusercontent.com/26106407/171950255-04a6c254-0593-4ddb-928b-92eb3c85b3d6.png)
![image](https://user-images.githubusercontent.com/26106407/171950300-6ec706de-8454-4669-8431-fb348cc31f74.png)
![image](https://user-images.githubusercontent.com/26106407/171950533-1724dc12-a756-4f39-aa1a-faf4fdbd9177.png)
![image](https://user-images.githubusercontent.com/26106407/171950752-8b59ff3f-63b4-492e-8962-2b6b1d88af6c.png)
    
    
## Hamburger Menu
- Being able to travel to any pages
- The single/Multiplayer option will change based on the current page
- Click on the cross or the blur will close the menu
![image](https://user-images.githubusercontent.com/26106407/171951316-4edef8af-32f3-477c-a45e-84b173d84835.png)

    
## Header
- Contains the hamburger menu, logo and the user profile icon
- Click on the logo or the user icon will bring the user to the user profile page/log in page
![image](https://user-images.githubusercontent.com/26106407/171951475-f6543745-b8ae-4e66-92b7-acd081b974b1.png)

## User Profile Page
- This page will show after user logs in
- It will read the user's google account and took their google username and profile picture
- Shows the game statistics about the current player;
- Allows the user to upload their custom list, the database will process the text file, and accept all the valid and non-repeated words;
- Allows the user to clear the custom words and upload again;
- Allows the user to resume after they left an unfinished game;
- Allows the user to give up the last game and start a new one;
![image](https://user-images.githubusercontent.com/26106407/171951868-6aff129b-2a0b-4e94-af72-9db3a6f7831b.png)

## Database
- Contains the default word list for both single and multiplayer
- Contains the wordlist uploaded by users, they will be linked to the user’s account, which means when logging out and logging in again, the word list will still be there, no need to upload it again;
- Contains the custom wordlist from each user
- Contains the unfinished game progress from each user
- API that generates random words from the user’s list or the default list
It can be accessed from the link given in the termnial after the database started running:
![image](https://user-images.githubusercontent.com/26106407/171951637-bb418b23-181f-4d00-b0c7-66453e4bffc6.png)
![image](https://user-images.githubusercontent.com/26106407/171952737-0563e569-248c-44b9-be46-5be393010ae6.png)


## How to run:
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
