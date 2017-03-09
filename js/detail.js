//参数的弹出显示
var app=angular.module('myApp',['ng','ngRoute'])


//app.config(function ($routeProvider) {
//    $routeProvider
//        .when("/product_5s",{
//            //templateUrl:'tpl/detail.html',
//            controller:'detailCtrl'
//        })
//        //.when('/detail/:id',{
//        //    //templateUrl:'tpl/detail.html',
//        //    controller:'detailCtrl'
//        //})
//        .otherwise({
//            redirectTo:'/product_5s'
//        })
//})
//app.controller('detailCtrl',
//    ['$location','$scope','$routeParams','$http',
//        //function ($scope,$http) {
//        //    var pid = 0 ;
//        //    if(){
//        //        pid=4;
//        //    }
//        //
//        //    $http
//        //        .get('data/productById.php?id='+pid)
//        //        .success(function (data) {
//        //            console.log(data);
//        //            $scope.product = data[0];
//        //        })
//        //}
//
//      ])

app.controller('choose', function ($scope) {
    $scope.version='3GB内存+64GB容量'
    $scope.color='哑光金色'
    $scope.focus1 = 0
    $scope.focus2 = 0
    $scope.img='//c1.mifile.cn/f/i/15/item/buyphone/mi5s-jin!600x600.jpg'
    $scope.li_click1 = function (i) {
        $scope.focus1 = i;
        $scope.version=$scope.versions[i].version
    };
    $scope.li_click2 = function (i) {
        $scope.focus2 = i;
        $scope.imgs=[
            {img:'//c1.mifile.cn/f/i/15/item/buyphone/mi5s-jin!600x600.jpg'},
            {img:'//c1.mifile.cn/f/i/15/item/buyphone/xiaomi5s-yinse!600x600.jpg'},
            {img:'//c1.mifile.cn/f/i/15/item/buyphone/xiaomi5s-meiguijin!600x600.jpg'},
            {img:'//c1.mifile.cn/f/i/15/item/buyphone/mi5s-shenhui!600x600.jpg'}
        ]
        console.log($scope.imgs[i].img)
        $scope.img=$scope.imgs[i].img
        $scope.color=$scope.colors[i].color
    };
    $scope.versions=[
        {version:'3GB内存+64GB容量'},
        {version:'4GB内存+128GB容量'}
    ]
    $scope.colors = [
        {img:"note3-icon-jin.png",color:"哑光金色"},
        {img:"icon-yin.jpg",color:"哑光银白"},
        {img:"minote-icon-fen.png",color:"玫瑰金"},
        {img:"icon-qianhui.jpg",color:"哑光深灰"}
    ];
});




app.controller('detail', function ($scope) {
        $scope.click_show=1
        $scope.clickShow= function () {
        if ($scope.click_show===1) {
            $scope.click_show=0
        }else{
            $scope.click_show=1
        }
    }
})








