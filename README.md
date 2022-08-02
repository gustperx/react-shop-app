## Settings

Create a firebase application and a firestore database

Enable user login with email and password, also generate a unique user to connect to the application

Configure the firestore database in development mode so that the application connects and creates the collections

## Environment

In the root of the project there is an example file to configure the environment variables

> .env.example

copy and paste the .env.example file to .env.local

Finally replace your firebase and cloudinary credentials

### Firebase Env

```
VITE_FIREBASE_APIKEY=
VITE_FIREBASE_AUTHDOMAIN=
VITE_FIREBASE_PROJECTID=
VITE_FIREBASE_STORAGEBUCKET=
VITE_FIREBASE_MESSAGINGSENDERID=
VITE_FIREBASE_APPID=
```


### Cloudinary Env

```
VITE_CLOUDINARY_UPLOAD_URL=
VITE_CLOUDINARY_UPLOAD_PRESET=

```

### Install dependencies

```
yarn

```

### Run App
```
yarn dev

```