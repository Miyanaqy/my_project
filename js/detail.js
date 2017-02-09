//参数的弹出显示
var app=angular.module('myApp',['ng'])

app.controller('detail', function ($scope) {
        $scope.click_show=1
    $scope.clickShow= function () {
        console.log('fuck')
        if ($scope.click_show===1) {
            $scope.click_show=0
        }else{
            $scope.click_show=1
        }
    }
})
