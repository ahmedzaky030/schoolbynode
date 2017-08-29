var app = angular.module('myApp', []);

app.controller('myController', function($scope, $http){

    $scope.firstname="Ahmed";
    $scope.lastname = "Zaky";
    $http.get('http://localhost:3000/s/age/23/lang/Ar').then(function(response){
        $scope.students = response.data;
        console.log($scope.students);

    })

    $scope.submit = function(){
        //console.log(myform.name.value + myform.age.value + myform.lang.value );
        $scope.data = {
            name: myform.name.value,
            age:myform.age.value,
            lang: myform.lang.value
        }
        $http({
            method:"post",
            url:'http://localhost:3000/s',
            data:{
                name: myform.name.value,
                age:myform.age.value,
                lang: myform.lang.value
            },
            headers: {'Content-Type': 'application/json'}            

        }).then(function(data){
            console.log('success');
            console.log(data);
            
        });
        // $http.post('http://localhost:3000/s/pos',{data:$scope.data}).then(function(data){
        //     console.log('success in post');
        // })

    };

        

    // }
    $scope.getdata= function(){

        $http.get('http://localhost:3000/s/age/'+$scope.age +'/lang/'+$scope.lang).then(function (response) {
            $scope.students = response.data;
            console.log($scope.students);

        })
    };
    
});