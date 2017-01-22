// 提案详情数据绑定
    var app = angular.module('myApp',['ngSanitize']);
    app.config(function($provide){
        $provide.factory("transFormFactory",function(){
            return {
                transForm : function(obj){
                    var str = [];  
                    for(var p in obj){  
                      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));  
                    } 
                    return str.join("&");  
                }
            };
        });
    });//自定义依赖方法；
    
    app.controller("data",function($sce,$scope,$http,$q,transFormFactory){
        // 社情民意查看答复评价
        $scope.opinionReplay = function(myid,cbuid) {
            $scope.url = "ajax.txt";
            $http({method:"GET",url:$scope.url,params:{myid:myid,cbuid:cbuid}}).success(function (data) {
                console.log(data);
                $scope.content = data;
            });
            $('.replay-example-modal-sm').modal('show');
        };
    });



