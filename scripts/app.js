(function(){
'use strict';
var shoppingList = angular.module("shoppingList" , [])
.service('listSyncService' , listSyncService)
.controller('requierdItems' , requierdItems)
.controller('boughtItems' , boughtItems);

function listSyncService(){
  var self = this;
  self.boughtItems = [];
  self.itesmToBuy = [
    {"name" : 'cholo', 'amount' : '1'},
    {"name" : 'milk', 'amount' : '10'},
    {"name" : 'veggg', 'amount' : '5'},
    {"name" : 'meat', 'amount' : '6'},
    {"name" : 'pitzza', 'amount' : '6'},
  ];
  self.chekItem = function(item, index){
      self.boughtItems.push(item);
      self.itesmToBuy.splice(index ,1);
  }
}

requierdItems.$inject = ['$scope' , "listSyncService"]
function requierdItems($scope , listSyncService){
  var items = this

  items.itesmToBuy = listSyncService.itesmToBuy;
  items.markItem = function (item , index){
    var itemToRemove = {"name" : item.name , "amount" : item.amount}
    listSyncService.chekItem(itemToRemove , index);
  }
}

boughtItems.$inject = ['$scope' , "listSyncService"]
function boughtItems($scope , listSyncService){
  var items = this;
  items.boughtItems = listSyncService.boughtItems;
}
})()
