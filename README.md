# Real-Time Collaborative Editor

This project is a real-time collaborative editor where multiple users can work on the same document at the same time. The idea was inspired by tools like Google Docs, but built from scratch to understand how real-time systems actually work behind the scenes.

I built this project to explore concepts like live synchronization, handling multiple users, and managing real-time updates without conflicts.

---

## What this project does

- Allows multiple users to edit the same document simultaneously  
- Updates are reflected instantly for all connected users  
- No need to refresh — everything syncs live  
- Handles concurrent editing without overwriting changes  

---

## How it works

The frontend provides the editor interface where users type and see updates.

The backend manages real-time communication between users using sockets. Whenever one user makes a change, that update is sent to the server and then broadcasted to all other connected users.

This ensures that everyone sees the same content in real time.

---

## Tech stack

### Frontend
- React  
- JavaScript  
- HTML & CSS  
- Deployed on Vercel  

### Backend
- Node.js  
- Express  
- Socket.IO  

---

## Project structure

This project is divided into two repositories:

- Frontend Repository: Contains the user interface and editor  
- Backend Repository: Handles server logic and real-time communication  

Both are required to run the project completely.

---

## Repositories

Frontend Repository:  
<PASTE YOUR FRONTEND GITHUB REPO LINK HERE>

Backend Repository:  
<PASTE YOUR BACKEND GITHUB REPO LINK HERE>

Live Project:  
https://realtime-collab-editor-frontend.vercel.app/

---

## Running the project locally

### 1. Clone both repositories

Frontend:
git clone <https://github.com/pragnyavure/realtime-collab-editor-frontend.git>

Backend:
git clone <https://github.com/pragnyavure/realtime-collob-editor-backend.git>

---

### 2. Start backend server

cd backend  
npm install  
npm start  

---

### 3. Start frontend

cd frontend  
npm install  
npm start  

---

### 4. Open in browser

http://localhost:3000

---

## Challenges faced

One of the main challenges was handling real-time updates correctly without causing conflicts between users. Understanding how sockets work and managing continuous data flow between multiple clients took time.

Another challenge was ensuring the editor stays responsive even when multiple users are editing simultaneously.

---

## What I learned

- How real-time systems work  
- Basics of WebSockets and Socket.IO  
- Handling multiple users in a shared environment  
- Structuring a full-stack project with separate frontend and backend  

---

## Future improvements

- Add authentication (login/signup)  
- Room-based collaboration with shareable links  
- Live cursors for users  
- Save documents to database  
- Improve UI for better user experience  

---

## Final note

This project was built as a learning experience to understand real-time collaboration systems. It helped me gain hands-on experience building something beyond a basic CRUD application.
