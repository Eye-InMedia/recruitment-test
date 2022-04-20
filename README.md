# recruitment-test

### Setup project
```sh
npm install
```

### Compile + Hot reloading
```sh
npm start
npm run api
```

We use:
- Vue 3 compostion API, for client side: [https://vuejs.org/guide/introduction.html#api-styles](https://vuejs.org/guide/introduction.html#api-styles)
- Express for server side: [https://expressjs.com/](https://expressjs.com/)

Instructions
============
To complete the test, you must fill the "TODO" comments in the code:
- Show a list of students with their grades and calculate the average of grades and show it on the screen
  (src/views/students.vue)
- Write the server code to get student list and calculate the average (server/index.mjs)
- Add the possibility to edit students grades:
  - So you must add fields and a button to save the grades client side 
  - and a new api route server side to update the grades with `DB.setStudent(id, student)`.
- Extra: if you finish early you can add some CSS

/!\ Some mistakes have been placed in the code that you have to find and correct
/!\ You must not edit the file DB.mjs every other file can be edited
