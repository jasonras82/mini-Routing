angular.module('miniRouting').controller('productsCtrl', function($scope, $stateParams, productService) {
  // console.log($stateParams.id);
  if($stateParams.id === 'shoes') {
    $scope.productData = productService.shoeData;
  }
  if($stateParams.id === 'socks') {
    $scope.productData = productService.sockData;
  }

});
