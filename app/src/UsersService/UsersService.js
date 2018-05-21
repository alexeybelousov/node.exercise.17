angular
  .module('UserApp')
  .factory('UsersService', function ($resource, $http) {
    return $resource('https://jsonplaceholder.typicode.com/users/:userId/', {
      userId: '@userId'
    }, {
      update: {
        method: 'PUT'
      },
      getPosts: {
        method: 'GET',
        isArray: true,
        url: 'https://jsonplaceholder.typicode.com/users/:userId/posts'
      }
    })
  })
