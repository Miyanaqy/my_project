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

// 轮播
var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        speed:1000,
        //spaceBetween:0,
        effect: 'fade',
        loop:1,
        // 鼠标拖动无效
        simulateTouch : false,
});