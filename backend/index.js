/*
  dependencies
*/

  const express = require('express')
  const admin = require('firebase-admin')
  let inspect = require('util').inspect
  let Busboy = require('busboy')

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

    var busboy = new Busboy({ headers: request.headers })

    let fields = {}

    busboy.on('file', function(fieldname, file, filename, encoding, mimetype) {
      console.log('File [' + fieldname + ']: filename: ' + filename + ', encoding: ' + encoding + ', mimetype: ' + mimetype);
      file.on('data', function(data) {
        console.log('File [' + fieldname + '] got ' + data.length + ' bytes');
      });
      file.on('end', function() {
        console.log('File [' + fieldname + '] Finished');
      });
    });

    busboy.on('field', function(fieldname, val, fieldnameTruncated, valTruncated, encoding, mimetype) {
      console.log('Field [' + fieldname + ']: value: ' + inspect(val));
      fields[fieldname] = val
    });

    busboy.on('finish', function() {
      db.collection('posts').doc(fields.id).set({
        id: fields.id,
        caption: fields.caption,
        location: fields.location,
        date: parseInt(fields.date),
        imageUrl: 'https://firebasestorage.googleapis.com/v0/b/quasagram-ff17a.appspot.com/o/5tUZBEy.jpeg?alt=media&token=51a1e1d5-9fed-4c67-ae82-9524dc370a0c'
      })
      console.log('Done parsing form!');
      // response.writeHead(303, { Connection: 'close', Location: '/' });
      response.send('Done parsing form!');
    });

    request.pipe(busboy);
  })

/*
  listen
*/

app.listen(process.env.PORT || port)
