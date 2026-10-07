# CollegeAdvisor Frontend + Backend Setup

## 1. Start MongoDB
Create a MongoDB database (local MongoDB or MongoDB Atlas). Do not commit credentials.

## 2. Configure backend
Copy `CounselMe/backend/.env.example` to `CounselMe/backend/.env` and set `MONGODB_URI` and `JWT_SECRET`.

## 3. Start backend
```bash
cd CounselMe/backend
npm install
npm start
```
The API runs on port 5100 by default. On startup, the backend creates/updates the primary counselor profile for Sneha Lade.

## 4. Configure mobile app
Copy `.env.example` to `.env`. For an Android emulator use `http://10.0.2.2:5100/api/`. For a physical phone, replace it with your computer's LAN IP, for example `http://192.168.1.5:5100/api/`.

## 5. Start Expo
From the project root:
```bash
npm install
npx expo start
```

The mobile app has a safe local counselor fallback, so the Sneha Lade profile can still render while the backend is temporarily unavailable.
