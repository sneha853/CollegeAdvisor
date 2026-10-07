# CollegeAdvisor setup

## App identity
- App name: CollegeAdvisor
- Android package: `com.collegeadvisor.app`
- URL scheme: `collegeadvisor://`

## Backend
Run `npm install` in `CounselMe/backend`, create `.env` from `.env.example`, and provide your own MongoDB/JWT credentials.

## Firebase / Google Sign-In
The previous project's Firebase configuration has intentionally not been carried over. Create your own Firebase project and configure the `EXPO_PUBLIC_FIREBASE_*` variables. For native Google Sign-In, generate a new `google-services.json` for package `com.collegeadvisor.app` and add it to the project before an Android native build.

## Web
The web client is in `collegeadvisor-web/`. Replace `localhost:5173` URLs with your own deployed domain when you deploy.
