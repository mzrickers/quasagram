/*
  dependencies
*/

  const express = require('express')
  const admin = require('firebase-admin');

/*
  config - express
*/

  const app = express()
  const port = 3000

/*
  config - firebase
*/

  const serviceAccount = require('./serviceAccountKey.json');

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });

  const db = admin.firestore();

/*
  endpoint - posts
*/

  app.get('/posts', (request, response) => {
    response.set('Access-Control-Allow-Origin', '*')

    let posts = []
    db.collection('posts').orderBy('date', 'desc').get().then(snapshot => {
      snapshot.forEach((doc) => {
        posts.push(doc.data())
      })
      response.send(posts)
    });
  })

/*
  endpoint - createPosts
*/

  app.post('/createPosts', (request, response) => {
    response.set('Access-Control-Allow-Origin', '*')
    response.send(request.headers)
  })

/*
  listen
*/

app.listen(process.env.PORT || port)
