.controller('googleCtrl', function($scope, $state, $ionicLoading) {
  

	//====================== Google Login =====================
    $scope.fnGoogleSignIn = function() {
         $ionicLoading.show({
              template: 'Logging in...'
            });
        window.plugins.googleplus.isAvailable(
            function(available) {
                if (available) {
                    window.plugins.googleplus.login(
                    {},
                    function (user_data) {
                        console.log(user_data);  // success data 
                      $ionicLoading.hide();
                    },
                    function (msg) {
                      $ionicLoading.hide();
                     console.log(msg);  // error message 
                    })
                } else {
                    $ionicLoading.hide();
                    console.log('google plugin not available');
                }
            });
        };



//=============== Google Log out ================

  $scope.fnGoogleSignOut = function() {
         $ionicLoading.show({
              template: 'Logging in...'
            });

	window.plugins.googleplus.logout(
          	function (msg) {
            	console.log(msg);
           	 $ionicLoading.hide();
         	 },
         	 function(fail){
        	    console.log(fail);
       	   });
}


})