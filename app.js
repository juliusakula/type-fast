alertify.set('notifier','position', 'top-left');

angular.module('Keyboard',[])
.service('text', function(){ 
    return { 
        text: "the quick brown fox jumps over the lazy dog"
    }; 
})
.controller('mainCtrl', ['$scope', 'text', function($scope, text){
    $scope.text = text.text;
    $scope.$watch('text', function(newVal, oldVal){
        $scope.text = text.text;
    });
}])
.directive('focusOn', function() {
   return function(scope, elem, attr) {
      scope.$on(attr.focusOn, function(e) {
          elem[0].focus();
      });
   };
})
.directive('keyboard', ['$document', '$timeout', 'text', function($document, $timeout, text) {
    return {
        restrict: 'E',
        template: '<div ng-repeat="row in rows" class="col-md-12 keyboard-row">    <div ng-repeat="item in row">        <key alphanum="item.key" code="item.code" class="key {{item.classes}} text-center" id="{{item.key}}"></key>    </div></div>',
        controller: function($scope){
            //$scope.row1 = ['`','1','2','3','4','5','6','7','8','9','0','-','=']
            // get keycodes fast - http://keycodes.atjayjo.com/
            $scope.firstRow = [
                {
                    key: '`',
                    code: 192,
                    classes: 'single'
                },
                {
                    key: '1',
                    code: 49,
                    classes: 'single'
                },
                {
                    key: '2',
                    code: 50,
                    classes: 'single'
                },
                {
                    key: '3',
                    code: 51,
                    classes: 'single'
                },
                {
                    key: '4',
                    code: 52,
                    classes: 'single'
                },
                {
                    key: '5',
                    code: 53,
                    classes: 'single'
                },
                {
                    key: '6',
                    code: 54,
                    classes: 'single'
                },
                {
                    key: '7',
                    code: 55,
                    classes: 'single'
                },
                {
                    key: '8',
                    code: 56,
                    classes: 'single'
                },
                {
                    key: '9',
                    code: 57,
                    classes: 'single'
                },
                {
                    key: '0',
                    code: 48,
                    classes: 'single'
                },
                {
                    key: '-',
                    code: 189,
                    classes: 'single'
                },
                {
                    key: '=',
                    code: 187,
                    classes: 'single'
                },
                {
                    key: 'back',
                    code: 8,
                    classes: 'bck'
                }
            ];
            $scope.secondRow = [{
                    key: 'tab',
                    code: 9,
                    classes: 'tab'
                },{
                    key: 'q',
                    code: 81,
                    classes: 'single'
                },{
                    key: 'w',
                    code: 87,
                    classes: 'single'
                },{
                    key: 'e',
                    code: 69,
                    classes: 'single'
                },{
                    key: 'r',
                    code: 82,
                    classes: 'single'
                },{
                    key: 't',
                    code: 84,
                    classes: 'single'
                },{
                    key: 'y',
                    code: 89,
                    classes: 'single'
                },{
                    key: 'u',
                    code: 85,
                    classes: 'single'
                },{
                    key: 'i',
                    code: 73,
                    classes: 'single'
                },{
                    key: 'o',
                    code: 79,
                    classes: 'single'
                    
                },{
                    key: 'p',
                    code: 80,
                    classes: 'single'
                },{
                    key: '[',
                    code: 219,
                    classes: 'single'
                },{
                    key: ']',
                    code: 221,
                    classes: 'single'
                },{
                    key: '\\',
                    code: 220,
                    classes: 'slash'
                }
            ];
            $scope.thirdRow = [
                {
                    key: 'caps',
                    code: 20,
                    classes: 'caps'
                },
                {
                    key: 'a',
                    code: 65,
                    classes: 'single'
                },
                {
                    key: 's',
                    code: 83,
                    classes: 'single'
                },
                {
                    key: 'd',
                    code: 68,
                    classes: 'single'
                },
                {
                    key: 'f',
                    code: 70,
                    classes: 'single'
                },
                {
                    key: 'g',
                    code: 71,
                    classes: 'single'
                },
                {
                    key: 'h',
                    code: 72,
                    classes: 'single'
                },
                {
                    key: 'j',
                    code: 74,
                    classes: 'single'
                },
                {
                    key: 'k',
                    code: 75,
                    classes: 'single'
                },
                {
                    key: 'l',
                    code: 76,
                    classes: 'single'
                },
                {
                    key: ';',
                    code: 186,
                    classes: 'single'
                },
                {
                    key: '\'',
                    code: 222,
                    classes: 'single'
                },
                {
                    key: 'enter',
                    code: 13,
                    classes: 'enter'
                }
            ];
            $scope.fourthRow = [
                {
                    key: 'shift',
                    code: 16,
                    classes: 'shift'
                },
                {
                    key: 'z',
                    code: 90,
                    classes: 'single'
                },
                {
                    key: 'x',
                    code: 88,
                    classes: 'single'
                },
                {
                    key: 'c',
                    code: 67,
                    classes: 'single'
                },
                {
                    key: 'v',
                    code: 86,
                    classes: 'single'
                },
                {
                    key: 'b',
                    code: 66,
                    classes: 'single'
                },
                {
                    key: 'n',
                    code: 78,
                    classes: 'single'
                },
                {
                    key: 'm',
                    code: 77,
                    classes: 'single'
                },
                {
                    key: ',',
                    code: 188,
                    classes: 'single'
                },
                {
                    key: '.',
                    code: 190,
                    classes: 'single'
                },
                {
                    key: '/',
                    code: 191,
                    classes: 'single'
                },
                {
                    key: 'shift',
                    code: 16,
                    classes: 'shift'
                }
            ];
            $scope.fifthRow = [
                {
                    key: 'ctrl',
                    code: 17,
                    classes: 'ctrl'
                },
                {
                    key: 'cmd',
                    code: 91,
                    classes: 'cmd'
                },
                {
                    key: 'alt',
                    code: 18,
                    classes: 'alt'
                },
                {
                    key: ' ',
                    code: 32,
                    classes: 'spacebar'
                },
                {
                    key: 'alt',
                    code: 18,
                    classes: 'alt'
                },
                {
                    key: 'cmd',
                    code: 91,
                    classes: 'cmd'
                },
                {
                    key: 'ctrl',
                    code: 17,
                    classes: 'ctrl'
                }
            ];
            $scope.rows = [$scope.firstRow, $scope.secondRow, $scope.thirdRow, $scope.fourthRow, $scope.fifthRow];
        },
        link: function (scope, element, attrs) {
            $timeout(function () {
                console.log('keyboard ready');
            });
        }
        //templateUrl: 'keyboard.tpl.html' // need apache i think
    }
}])
.directive('sameAs', function() {
        return {
            require: 'ngModel',
            link: function(scope, elem, attrs, ngModel) {
                ngModel.$parsers.unshift(validate);

                // Force-trigger the parsing pipeline.
                scope.$watch(attrs.sameAs, function() {
                    ngModel.$setViewValue(ngModel.$viewValue);
                });

                function validate(value) {
                    var isValid = scope.$eval(attrs.sameAs) == value;

                    ngModel.$setValidity('same-as', isValid);

                    return isValid ? value : undefined;
                }
            }
        };
})
.directive('challengeArea', ['$document', '$timeout', 'text', function($document, $timeout, text){
    return {
        restrict: 'E',
        template: ('<div class="col-xs-8 col-xs-offset-2"><p class="challenge-sentence">{{text}}</p><form name="myForm"><input name="blah" type="text" class="form-control challenge-input" ng-model="blah" same-as="text" focus-on="domIsReady">{{pattern}}</form></div>'),
        controller: function($scope){
            $scope.$watch('blah', function(newVal, oldVal){
                if($scope.blah == $scope.text){
                    alertify.success('press enter', 1200);
                }
            });
        },
        link: function(scope, elm, attrs, ctrl) {
            console.log(scope.$parent.text);
            $timeout(function () {
                scope.$broadcast('domIsReady');
                alertify.success('match the sentence');
            });
            $document.bind("keyup", function (event) {
                event.preventDefault();
                if(event.which == 13){
                    if(scope.blah == scope.text){ // do they match?
                        text.text = words({min: 8, max: 12}).join(" "); // change the message
                        scope.text = ''; // can't $apply without changing a scope variable
                        scope.blah = ''; // empty the input field
                        console.log(text.text);
                        scope.$apply();
                    }
                    else{
                        alertify.error('does not match');
                    }
                }
            });
        }
    }
}])
.directive('key', ['$document', function($document) {
    return {
        restrict: 'E',
        scope: {
            alphanum: '=alphanum',
            size: '=size',
            code: '=code',
        },
        controller: function($scope){
        },
        template: '{{alphanum}}',
        link: function (scope, element, attrs) {
            $document.bind("keydown", function (event) {
                if(event.which !== 116 && event.which !== 123){ // 116 = 'f5' (refresh) 123 = 'f12' open dev console
                    //event.preventDefault();
                }
                if(event.which == scope.code){
                    element.addClass('key-success');
                    if(scope.code == 16){ //if shift make other keys capital
                        element.parent().parent().parent().children().addClass('upper');
                    }
                    else if(scope.code == 20){ //if CAPS LOCK toggle all keys capital
                        element.parent().parent().parent().children().toggleClass('upper');
                    }
                }
            });
            $document.bind("keyup", function (event) {
                event.preventDefault();
                if(event.which == scope.code){
                    element.removeClass('active');
                    element.removeClass('key-error');
                    element.removeClass('key-success');
                    if(scope.code == 16){ //if shift make other keys capital
                        element.parent().parent().parent().children().removeClass('upper');
                    }
                }
            });
        }
    }
}]);