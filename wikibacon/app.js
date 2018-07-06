var app = angular.module("app", []);
/*
Hi there!,
Nice to see you.
You are looking under the hood of this, I already like you.
Let's get in touch.
Email me: raghav.toshniwal@gmail.com */
app.controller("AppCtrl", function($http,$scope){
    var app = this;
    
   $scope.answer=0;
    $scope.loading = false;
    console.log(app.links);
    
     $scope.varr2=function(name){
        $scope.links=[""];
        $scope.answer=0;
        $scope.loading = true; 
        name=Math.floor((Math.random() * 1000) + 1);
        $http.get("https://wikibacon.herokuapp.com/random/"+name)
         
        .success(function(data){
             $scope.loading = false;
            console.log(data)
            for(i=0;i<data['result'].length;i++)
                console.log(data['url'][i]);
            $scope.answer=data['result'].length;
            if($scope.answer==0){
                $scope.links=["There was an error :( Try again?"];
                $scope.urls=["#"];
            }
            else{
            $scope.links=data['result'];
            $scope.urls=data['url'];
            }
            console.log("okay");
            console.log($scope.answer);
            
            $scope.name="";
            
    })
        .error(function(){
               
               $scope.links=["There was an error :( Try again?"];
               $scope.name="";
               $scope.loading = false; 
               })
        $scope.a="";
    }
    
    
    
    
    
    
    $scope.varr=function(name){
        $scope.links=[""];
        $scope.answer=0;
        $scope.loading = true; 
        
        $http.get("https://wikibacon.herokuapp.com/find/"+name)
         
        .success(function(data){
             $scope.loading = false;
            console.log(data)
            for(i=0;i<data['result'].length;i++)
                console.log(data['url'][i]);
            $scope.answer=data['result'].length;
            if($scope.answer==0){
                $scope.links=["There was an error :( Try some other keyword"];
                $scope.urls=["#"];
            }
            else{
            $scope.links=data['result'];
            $scope.urls=data['url'];
            }
            console.log("okay");
            console.log($scope.answer);
            
            $scope.name="";
            
    })
        .error(function(){
               
               $scope.links=["There was an error :( Try some other keyword"];
               $scope.name="";
               $scope.loading = false; 
               })
        $scope.a="";
    }
    
   
})