function TodoCtrl($scope) {

  $scope.todos = [
    {text:'wash dishes', done:false, editing : false},
    {text: 'walk dog', done:false, editing : false}
  ];
  $scope.slash = false;
  
  $scope.getTotalTodos = function () {
    return $scope.todos.length;
  };

  $scope.addTodo = function () {
    $scope.todos.push({text:$scope.formTodoText, done:false});
    $scope.formTodoText = '';
  };

  $scope.clearCompleted = function(){
    $scope.todos = $scope.todos.filter(function(todo){
      return !todo.done;
    })
  };
  $scope.deleteTodo = function  (index) {
    $scope.todos.splice(index, 1);
};

  $scope.editTodo = function(todo){
      todo.editing=true;
  }

  $scope.doneEditing = function(todo){
      todo.editing=false;

}
}
