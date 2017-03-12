var app = angular.module('xiaomi', ['ng','ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when("/login",{
            controller:'login',
            templateUrl:'tpl/login.html'
        })
        .when("/register",{
            controller:'register',
            templateUrl:'tpl/register.html'
        })
        .otherwise({
            redirectTo:'/login'
        })
})
//注册验证
app.controller('register',['$scope','$http',
    function ($scope,$http) {
        $scope.submitUser= function () {
            console.log($scope.name+" "+$scope.pwd+" "+$scope.pwd2)

            var name=$scope.name
            var pwd=$scope.pwd
            $scope.user={
                'name':name,
                'pwd':pwd
            }
            console.log($scope.user)
            var params=$.param($scope.user)
            console.log(params);

            // //大量数据传递
            $http.post("data/register.php?"+params)
               .success(function (data) {
                    var result=data[0]
                    //可以再用一次下边的checkId
                    if(result.msg==='succ'){
                       $scope.succMsg="成功"
                       // sessionStorage.setItem("phone",$scope.order.phone)
                    }else{
                       $scope.errMsg="失败"
                    }
                    // console.log($scope.succMsg)
                    // console.log($scope.errMsg)
                })
        }

        //密码查重
        $scope.$watch("pwd2",function(){
            if (($scope.pwd==$scope.pwd2)&&(!($scope.pwd==null))) {
                console.log('1')
            }else if(!($scope.pwd==null)){
                console.log('2')
            }
        },true)

        //实时名字查重
        $scope.$watch("name",function () {
            if (!($scope.name==null)) {
            //查找用户名
            $http.get('data/checkId.php?user_name='+$scope.name)
                .success(function (data) {
                    console.log(data)
                    if(data==''){
                        //不重复
                        console.log('1')
                        console.log(data)
                    }else{
                        //重复
                        console.log('2')
                    }
                })    
            }
        })
    }])

//登陆
app.controller('login',['$scope','$http',
    function ($scope,$http) {
        $scope.submitLogin= function () {

            var name=$scope.name
            var pwd=$scope.pwd
            $scope.user={
                'name':name,
                'pwd':pwd
            }
            var params=$.param($scope.user)
            // 大量数据传递
            $http.post("data/login.php?"+params)
               .success(function (data) {
                    var result=data[0]
                    console.log(result)
                    // console.log(data)
                    if(!(result==null)){
                       $scope.succMsg="成功"
                       //登陆成功
                       console.log($scope.succMsg)
                       sessionStorage.setItem("uid",result.uid)
                       sessionStorage.setItem("name",result.user)
                    }else{
                        $scope.errMsg="失败"
                        //登陆失败
                        console.log($scope.errMsg)
                    }
                })
        }
    }])