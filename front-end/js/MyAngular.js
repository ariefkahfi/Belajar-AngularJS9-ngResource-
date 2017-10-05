let app = angular.module('mainApp',['ngResource']);

//        app.config(['$resourceProvider', function($resourceProvider) {
//            // Don't strip trailing slashes from calculated URLs
//            $resourceProvider.defaults.stripTrailingSlashes = false;
//        }]);

app.controller('first',function($scope,$resource,$httpParamSerializer){
    // $resource(url,[paramDefaults],[actions],options)
    let rest = $resource('http://localhost/angular-resource1/back-end/:to.php',{},{
        cobaPostData : {
            method:"POST",
            headers:{"Content-type":"application/x-www-form-urlencoded"}
        },
        cobaUpdateData : {
            method:"POST",
            headers:{"Content-type":"application/x-www-form-urlencoded"},
            params:{to:"updateData"}
        },
        cobaFindOne :{
            method:"GET",
            params:{to:"selectOne",id:19}
        },
        query :{
            method:"GET",
            params:{to:"select"},
        }
    });




          let loadData = ()=>{
              rest.query((succes)=>{
                  console.log(succes.person);
              });
          };


          loadData();
    //
    // //
    // //       $scope.updateData = ()=>{
    // //           rest.cobaUpdateData($httpParamSerializer({
    // //               id:8,
    // //               nama:"Pablo",
    // //               alamat:"Chili"
    // //           }),(success)=>{
    // //               loadData();
    // //           });
    // //       };
    // //
    // //
    // //       $scope.updateData();
    // //
    // //       $scope.findOne = ()=>{
    // //         rest.cobaFindOne(function(success){
    // //             console.log(success);
    // //         });
    // //       };
    // //
    // //       $scope.findOne();
    // //
    // //       $scope.postData = ()=>{
    // //            rest.cobaPostData({to:'insert'},$httpParamSerializer({nama:"Budi",alamat:"Pras"}),function(success){
    // //                console.log(success);
    // //            });
    // //       };
    // //
    // //       $scope.postData();
    // //
    // //        $scope.findOne = ()=>{
    // //          rest.get({to:'selectOne',id:3},function (success){
    // //              console.log(success);
    // //          });
    // //     };
    // //
    // //        $scope.findOne();
    // //
    // // // Async operation for load data from  REST API...
    // //       $scope.loadData = ()=>{
    // //           rest.query({to:'select'},function (success){
    // //               console.log(success);
    // //           });
    // //       };
    // //       $scope.loadData();
    // //
    // //        // Async operation for 'homemade' delete data from $resource object
    // //
    // //        rest.cobaDelete({to:'delete'},function (success){
    // //            console.log(success);
    // //        });
    // //
    // // // Async operation for delete data from REST API...
    // //        $scope.deleteData = ()=>{
    // //            rest.get({to:'delete',id:2},function (success){
    // //                console.log(success);
    // //            });
    // //        };
    // //
    //        $scope.deleteData();
});

