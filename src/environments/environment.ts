// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig : {
    apiKey: "AIzaSyBcEBKPLZ5KgKkLhwDBHnmmQOypzf2PTic",
    authDomain: "hypernova-register.firebaseapp.com",
    projectId: "hypernova-register",
    storageBucket: "hypernova-register.appspot.com",
    messagingSenderId: "807515592809",
    appId: "1:807515592809:web:8e3ef4a74402f7e3286af8",
    measurementId: "G-XTTL31CR9J"
  },

  api: './assets/data.json'
};
