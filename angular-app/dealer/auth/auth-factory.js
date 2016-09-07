angular.module('naBaseApp').factory('AuthFactory', AuthFactory)

function AuthFactory(){
  return {
    auth: auth
  }

  var auth =  {
    isSignedIn : false
  }
}
