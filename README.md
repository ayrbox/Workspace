# Workspace

Maintain monthly workspace schedule for team.

Workspace is build using React, Redux, Typescript, bootstrap and other libraries.
Firebase used as backend.

## Getting Started
`Create React App` is used to initialize application.

```sh
git clone <PROJECT REPOSITORY>
yarn install
yarn start
```

Development server runs locally at port 3000 
[http://localhost:3000/](http://localhost:3000)


### Firebase
To connect to firebase, create `firebase.config.ts` from `example.firebase.ts` in `config` folder with firebase credentials and api keys.  

```js
export const firebaseConfig = {
  apiKey: 'api-key',
  authDomain: 'project-id.firebaseapp.com',
  databaseURL: 'https://project-id.firebaseio.com',
  projectId: 'project-id',
  storageBucket: 'project-id.appspot.com',
  messagingSenderId: 'sender-id',
  appID: 'app-id',
};
;
```

To deploy to your firebase.  [Learn more](https://firebase.google.com/docs/hosting/deploying)

```sh
firebase login  
firebase deploy
```

## Disclaimer 
Project is built to learn use typescript with react. It is far from complete and should be used for production. It can only be used as reference project.

## Contribution
Any contribution are welcome and appreciated in building the application.
