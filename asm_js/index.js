let productApi = "https://634f4e504af5fdff3a71cb66.mockapi.io/api/asm";
var myApp = angular.module("myASM",["ngRoute"]);
myApp.config(function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix(""); //xoa khoang thua url
    // Giong switch case
    $routeProvider
      .when("/HOME", {
        templateUrl: "./pages/HOME.html",
        controller: "homeController",
      })
      .when("/SANPHAM", {
        templateUrl: "./pages/SANPHAM.html",
        controller: "sanphamController",
      })
      .when("/QLSANPHAM", {
        templateUrl: "./pages/QLSANPHAM.html",
        controller: "qlsanphamController",
      })
      .when("/GIOITHIEU", {
        templateUrl: "./pages/GIOITHIEU.html",
        controller: "gioithieuController",
      })
      .when("/GIOHANG", {
        templateUrl: "./pages/GIOHANG.html",
        controller: "giohangController",
      })
      .when("/DAMUA", {
        templateUrl: "./pages/DAMUA.html",
        controller: "damuaController",
      })
      .when("/SPALL", {
        templateUrl: "./pages/SPALL.html",
        controller: "tatcaController",
      })
      .when("/SPNEW", {
        templateUrl: "./pages/SPNEW.html",
        controller: "moinhatController",
      })   
      .when("/SPHOT", {
        templateUrl: "./pages/SPHOT.html",
        controller: "banchayController",
      })
      .when("/SP13", {
        templateUrl: "./pages/three.html",
        controller: "threeController",
      })
      .when("/SP14", {
        templateUrl: "./pages/for.html",
        controller: "forController",
      })
      .when("/product/:name", {
        templateUrl: "./pages/product.html",
        controller: "productController",
      })
      .otherwise({
        redirectTo: "/",
      });
  });
  myApp.controller("homeController", homeController);
myApp.controller("sanphamController", sanphamController);
myApp.controller("qlsanphamController", qlsanphamController);
myApp.controller("gioithieuController", gioithieuController);
  myApp.controller("giohangController", giohangController);
  myApp.controller("damuaController", damuaController); 
  myApp.controller("tatcaController", tatcaController);
  myApp.controller("moinhatController", moinhatController); 
  myApp.controller("banchayController", banchayController); 
//   myApp.controller("threeController", threeController);
//   myApp.controller("forController", forController);
  myApp.controller("productController" , productController) ;

  myApp.controller("myController", function ($scope) {

    $scope.products1 = [
        {
        img : "./images/ip14.jpg",
        name : "iPhone 14 Pro Max 128GB",
        gia : "$60.00",

    },
        {
        img : "./images/ip14_plus.jpg",
        name : "iPhone 14 Plus 128GB",
        gia : "$60.00",

    },
        {
        img : "./images/ip14_thuong.jpg",
        name : "iPhone 14 64GB",
        gia : "$60.00",

    },
        {
        img : "./images/ip14_pro.jpg",
        name : "iPhone 14 Pro 128GB",
        gia : "$60.00",

    }
      
     
   
        ];
       
       
        $scope.products2 = [ 
            {
                img : "./images/ip13_thuong.jpg",
                name : "iPhone 13 64GB",
                gia : "$50.00",
        
            },
            {
                img : "./images/ip13_pro.jpg",
                name : "iPhone 13 Pro 128GB",
                gia : "$50.00",
        
            },
            {
                img : "./images/ip13.jpeg",
                name : "iPhone 13 Pro Max 128GB",
                gia : "$50.00",
        
            },
            {
                img : "./images/ip13_prmgold.jpg",
                name : "iPhone 13 Pro Max Gold",
                gia : "$50.00",
        
            },
    ];  
        $scope.products3 = [ 
            {
                img : "./images/ip12.jfif",
                name : "iPhone 12 Pro Max 128GB",
                gia : "$40.00",
        
            },
            {
                img : "./images/ip12.jfif",
                name : "iPhone 12 Pro Max 128GB",
                gia : "$40.00",
        
            },
            {
                img : "./images/ip12.jfif",
                name : "iPhone 12 Pro Max 128GB",
                gia : "$40.00",
        
            },
            {
                img : "./images/ip12.jfif",
                name : "iPhone 12 Pro Max 128GB",
                gia : "$40.00",
        
            },
    ];  
        $scope.products4 = [ 
            {
                img : "./images/ip11.jpg",
                name : "iPhone 11 Pro Max 128GB",
                gia : "$30.00",
        
            },
            {
                img : "./images/ip11.jpg",
                name : "iPhone 11 Pro Max 128GB",
                gia : "$30.00",
        
            },
            {
                img : "./images/ip11.jpg",
                name : "iPhone 11 Pro Max 128GB",
                gia : "$30.00",
        
            },
            {
                img : "./images/ip11.jpg",
                name : "iPhone 11 Pro Max 128GB",
                gia : "$30.00",
        
            },
    ];  
    $scope.products5 = [ 
      {
          img : "./images/ip11_thuong.jpg",
          name : "iPhone 11 64GB",
          gia : "$30.00",
  
      },
      {
        img : "./images/ip11.jpg",
        name : "iPhone 11 Pro Max 128GB",
        gia : "$36.00",
      },
      { img : "./images/ip11_thuong.jpg",
      name : "iPhone 11 64GB",
      gia : "$30.00",
  
      },
      {
          img : "./images/ip11.jpg",
          name : "iPhone 11 Pro Max 128GB",
          gia : "$36.00",
  
      },
];  

$scope.products6 = [ 
    {
        img : "./images/ip12_thuong.jpg",
        name : "iPhone 12 64GB",
        gia : "$30.00",

    },
    {
      img : "./images/ip12_mini.jpg",
      name : "iPhone 12 Mini",
      gia : "$36.00",
    },
    {  img : "./images/ip12_mini.jpg",
    name : "iPhone 12 Mini",
    gia : "$36.00",
    },
    {
        img : "./images/ip12_thuong.jpg",
        name : "iPhone 12 64GB",
        gia : "$30.00",


    },
];  
});    


myApp.controller('myCtrl',function($scope , $http){
  $scope.product = {
      id : "",
      name : "",
      gia : "",
      img : "./images/"+"",
      soluong : "",
  };
  $scope.products = [] ;
 
  $http.get(productApi).then(function(response){
    $scope.products = response.data;
    console.log(response.data);
    
})
.catch(function (error){
    console.log(error);
});

// Add products 
$scope.onFormSubmit = function (event){
    event.preventDefault();
    $http.post(productApi, $scope.product)
    .then(function(){
        window.location.reload();
    })
    .catch(function(error){
        console.log(error);
    });
};

// Delete
$scope.delete = function(item){
    let id = item.id ;
    $http.delete(productApi + "/" + id)
    .then(function(){
        window.location.reload();
    })
    .catch(function(error){
        console.log(error);
    });
};



});