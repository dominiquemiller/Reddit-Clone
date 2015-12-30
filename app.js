angular.module('flapperNews', ['ui.router'])
  .config([
    '$stateProvider',
    '$urlRouteProvider',
    function($stateProvider, $urlRouteProvider){

      $stateProvider
        .state('home', {
         url: '/home',
         templateUrl: '/home.html',
         controller: 'MainCtrl'
        });

      $urlRouteProvider.otherwise('home');
    }])

  .factory('posts', [function(){
    var stuff = {
      posts: []
    };
    return stuff;
  }])

  .controller('MainCtrl',[
    '$scope',
    'posts',
    function($scope, posts){
      $scope.posts = posts.posts;
      $scope.addPost = function(){
        if(!$scope.title || $scope.title === '') {return;}
        $scope.posts.push({
          title: $scope.title,
          link: $scope.link,
          upvotes: 0
        });
        $scope.title = '';
        $scope.link = '';
      },
      $scope.incrementUpvotes = function(post) {
        post.upvotes += 1;
      };
    }
    
  ]);
