angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $ionicNavBarDelegate) {

 if(!$scope.ComarquesList){
    $scope.ComarquesList = [
      { text: "Alt Camp", checked: true, value: "01" },
      { text: "Alt Penedès", checked: true, value: "03" },
      { text: "Bages", checked: true, value: "07" },
      { text: "Baix Camp", checked: true, value: "08" },
      { text: "Baix Llobregat", checked: true, value: "11" },
      { text: "Barcelonès", checked: true, value: "13" },
      { text: "Berguedà", checked: true, value: "14" },
      { text: "Conca de Barberà", checked: true, value: "16" },
      { text: "Gironès", checked: true, value: "20" },
      { text: "Maresme", checked: true, value: "21" },
      { text: "Osona", checked: true, value: "24" },
      { text: "Segarra", checked: true, value: "32" },
      { text: "Selva", checked: true, value: "34" },
      { text: "Solsonès", checked: true, value: "35" },
      { text: "Tarragonès", checked: true, value: "36" },
      { text: "Terra Alta", checked: true, value: "37" }
    ];
    var comarques = "";
    $scope.ComarquesList.forEach(function(item){
      if(item.checked) comarques += "'"+item.value+"',";
    });
    localStorage.setItem("comarques", comarques);
  }

 if(!$scope.CategoriesList){
    $scope.CategoriesList = [
      { text: "Cultura Tradicional i Popular", checked: true, value: "T5" },
      { text: "Cinema i Video", checked: true, value: "T4" },
      { text: "Gastronomia", checked: true, value: "T11" },
      { text: "Divulgració", checked: true, value: "T6" },
      { text: "Música", checked: true, value: "T9" },
      { text: "Activitats per a infants i joves", checked: true, value: "T0" },
      { text: "Arts Visuals", checked: true, value: "T3" },
      { text: "Llibres i literatura", checked: true, value: "T8" },
      { text: "Itineraris, visites i portes obertes", checked: true, value: "T7" },
      { text: "Arts escèniques i de carrer", checked: true, value: "T2" },
      { text: "Altres", checked: true, value: "T1" }
    ];
    var categories = "";
    $scope.CategoriesList.forEach(function(item){
      if(item.checked) categories += "'"+item.value+"',";
    });
    localStorage.setItem("categories", categories);
  }

  $scope.check_comarca = function() {
    var comarques = "";
    $scope.ComarquesList.forEach(function(item){
      if(item.checked) comarques += "'"+item.value+"',";
    });
    localStorage.setItem("comarques", comarques);
  };

  $scope.check_categoria = function() {
    var categories = "";
    $scope.CategoriesList.forEach(function(item){
      if(item.checked) categories += "'"+item.value+"',";
    });
    localStorage.setItem("categories", categories);
  };

  $scope.back = function() {
    $ionicNavBarDelegate.back();
  };

})

.controller('PostsCtrl', function($scope, $http) {
  $scope.posts = {};
  var params = "operacion=1&comarques="+localStorage['comarques']+"&categories="+localStorage['categories'];
  //var url = "http://localhost:8888/quescou/quescou2.php?"+params;
  var url = "http://www.quescou.com/app/quescou2.php?"+params;

  $http.get(url)
      .success(function(data) {
        $scope.posts = data;
      })
      .error(function(data, status, headers, config){
        console.log(status);
      });
})

.controller('PostCtrl', function($scope, $http, $stateParams) {
  $scope.posts = {};
  var params = "operacion=3&postId="+$stateParams.postId;
  //var url = "http://localhost:8888/quescou/quescou2.php?"+params;
  var url = "http://www.quescou.com/app/quescou2.php?"+params;

  $http.get(url)
      .success(function(data) {
        $scope.posts = data;
        $scope.url = "<a onclick='window.open('"+data[0].url+"'}, '_system', 'location=yes'); return false;' class='ui-link'>Més Informació</a>";
        console.log(data[0].url);
      })
      .error(function(data, status, headers, config){
        console.log(status);
  });
})

.controller('IntroCtrl', function($scope, $state, $ionicSlideBoxDelegate) {
  // Called to navigate to the main app
  $scope.saltar_intro = function() {
    $state.go('app.posts');
    localStorage['didTutorial'] = true;

  };
  $scope.next = function() {
    $ionicSlideBoxDelegate.next();
  };
  $scope.previous = function() {
    $ionicSlideBoxDelegate.previous();
  };

  // Called each time the slide changes
  $scope.slideChanged = function(index) {
    $scope.slideIndex = index;
  };

  if(localStorage['didTutorial'] === true) {
    alert('1');
    $state.go('app.posts');
    alert('2');
  }
});


