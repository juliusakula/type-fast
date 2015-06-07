angular.module('Keyboard',[])
.controller('CtrlOne', function($scope){
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
        }
    ];
    $scope.rows = [$scope.firstRow, $scope.secondRow];
})
.directive('keyboard', ['$document', '$timeout', function($document, $timeout) {
    return {
        restrict: 'E',
        template: '<div ng-repeat="row in rows" class="col-md-offset-3 col-md-8 keyboard-row">    <div ng-repeat="item in row">        <key alphanum="item.key" code="item.code" class="key {{item.classes}} text-center" id="{{item.key}}"></key>    </div></div>',
        link: function (scope, element, attrs) {
            console.log('hello from keyboard');
            $timeout(function () {
                //DOM has finished rendering
                console.log(element.contents());
                for(var i = 1, len = element.contents().length; i < len; i += 2){
                    var rowOfKeys = element.contents()[i].children;
                    //console.log(i);
                    console.log(rowOfKeys);
                    for(key in rowOfKeys){
                        if(rowOfKeys[key].childNodes){
                            console.log(rowOfKeys[key].childNodes[1].attributes);
                            console.log(rowOfKeys[key].childNodes[1].attributes.id.nodeValue);
                            console.log(rowOfKeys[key].childNodes[1].attributes.class.nodeValue);
                        }
                    }
                    //console.log(rowOfKeys[0].childNodes[1]);
                    //console.log(rowOfKeys[0].childNodes[1].attributes);
                    //console.log(rowOfKeys[0].childNodes[1].attributes.id.nodeValue);
                }
            });
        }
        //templateUrl: 'keyboard.tpl.html' // need apache i think
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
                    event.preventDefault();
                }
                if(event.which == scope.code){
                    element.toggleClass('active');
                }
            });
            $document.bind("keyup", function (event) {
                event.preventDefault();
                if(event.which == scope.code){
                    element.toggleClass('active');
                }
            });
        }
    }
}]);