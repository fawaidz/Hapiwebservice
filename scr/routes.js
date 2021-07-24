const {
  addNoteHandler, getAllNodeHandler, getNotebyIdHandler, editNoteByIdHandler,
} = require('./handler');

/* eslint-disable no-unused-vars */
const routes = [
  {
    method: 'GET',
    path: '/',
    handler: (request, h) => 'Halaman Homepage!',
  },
  {
    method: '*',
    path: '/',
    handler: (request, h) => 'Halaman tidak dapat diakses',
  },
  {
    method: 'GET',
    path: '/about',
    handler: (request, h) => 'Ini adalah Halaman About',
  },
  {
    method: 'POST',
    path: '/notes',
    handler: addNoteHandler,
  },
  {
    method: 'GET',
    path: '/notes',
    handler: getAllNodeHandler,
  },
  {
    method: 'GET',
    path: '/notes/{id}',
    handler: getNotebyIdHandler,
  },
  {
    method: 'PUT',
    path: '/notes/{id}',
    handler: editNoteByIdHandler,
  },
  {
    method: 'DELETE',
    path: '/notes/{id}',
    handler: editNoteByIdHandler,
  },
  {
    method: '*',
    path: '/about',
    handler: (request, h) => 'Halaman tidak dapat diakses',
  },
  {
    method: 'GET',
    path: '/users/{username?}',
    handler: (request, h) => {
      const { username = 'stranger' } = request.params;
      const { lang } = request.query;

      if (lang === 'id') {
        return `hai ${username}`;
      }
      return `hello ${username}!`;
    },
  },
  {
    method: 'POST',
    path: '/login',
    handler: (request, h) => {
      const { username, password } = request.payload;
      return `Welcome ${username}`;
    },
  },
  {
    method: '*',
    path: '/{any*}',
    handler: (request, h) => 'Halaman tidak ditemukan',
  },

];

module.exports = routes;
