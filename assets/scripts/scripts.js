(function() {
  'use strict';

  $(document).ready(function() {
    console.log("Hello from scripts")


    $(window).scroll(function(){
      var sticky = $('.master'),
          scroll = $(window).scrollTop();

      if (scroll >= 1) sticky.addClass('fixed');
      else sticky.removeClass('fixed');
      if (scroll >= window.innerHeight) sticky.addClass('off');
      else sticky.removeClass('off');
    });

    // tab control
    jQuery(function() {
      $('*[data-tabset]').each(function() {
        var defaultTab = '#' + $(this).data('tabset')
        $(this).children('li').each(function() {
          var currentSheet = $(this).children('a').attr('href')
          if (currentSheet != defaultTab) {
            $(currentSheet).addClass('hide')
          } else {
            $(this).addClass('selected')
          }
          $(this).on('click', function() {
            $(this).siblings().each(function(){
              $(this).removeClass('selected')
              $($(this).children('a').attr('href')).addClass('hide')
            })
            $(this).addClass('selected')
            $($(this).children('a').attr('href')).removeClass('hide')
            return false
          })
        })
      })
    })

    $(document).on("click", ".item .title", function() {
      $(this).closest('.item').addClass('active');
    });

    $(document).on("click", ".item .toolbar .close", function() {
      $(this).closest('.item').removeClass('active');
    });

//    $('.item .title').click(function(e) {
//      e.preventDefault();
//      $(this).closest('li').addClass('selected');
//      return false;
//    });

//    $('.item .title').click( function(e) {
//        e.preventDefault();
//    //    $('.item.active').removeClass('active');
//        $(this).closest('.item').addClass('active');
//        $('.item.active .extended').load(this.href + ' .page');
//    //    $('.item .extended.active').removeClass('active');
//    //    $('.item.active .extended').addClass('active');
//
//
//      });

  });
}());

angular.module('naBaseApp')
.directive('activeLink', ['$location', function ($location) {
return {
    restrict: 'A', //use as attribute
    replace: false,
    link: function (scope, elem) {
        //after the route has changed
        scope.$on("$routeChangeSuccess", function () {
            var hrefs = ['/#' + $location.path(),
                         '#' + $location.path(), //html5: false
                         $location.path()]; //html5: true
            angular.forEach(elem.find('a'), function (a) {
                a = angular.element(a);
                if (-1 !== hrefs.indexOf(a.attr('href'))) {
                    a.parent().addClass('active');
                } else {
                    a.parent().removeClass('active');
                };
            });
        });
    }
}
}]);


naBaseApp.directive("toggleModal", function() {
  return {
    link: function($scope, element, attr) {
      element.on("click", function() {
          $('body').toggleClass("modal");
      });
    }
  }
});

naBaseApp.directive("activeNav", function() {
  return {
    link: function($scope, element, attr) {
      element.on("click", function() {

//        $('header.main nav a').removeClass("active");
//        $(this).addClass("active");
      });

    }
  }
});

naBaseApp.directive("signUp", function() {
 return {
   link: function($scope, element, attr) {
     element.on("click", function() {
         $('.signin').css('display','none');
          $('.reset').css('display','none');
         $('.signup').css('display','block')
     });
   }
 }
});

naBaseApp.directive("signIn", function() {
 return {
   link: function($scope, element, attr) {
     element.on("click", function() {
         $('.signup').css('display','none');
         $('.signin').css('display','block')
         $('.reset').css('display','none')
     });
   }
 }
});

naBaseApp.directive("resetPassword", function() {
 return {
   link: function($scope, element, attr) {
     element.on("click", function() {
         $('.signup').css('display','none');
         $('.signin').css('display','none');
         $('.reset').css('display','block')
     });
   }
 }
});

naBaseApp.directive('myTabs', function() {
  return {
    restrict: 'E',
    transclude: true,
    scope: {},
    controller: ['$scope', function MyTabsController($scope) {
      var panes = $scope.panes = [];

      $scope.select = function(pane) {
        angular.forEach(panes, function(pane) {
          pane.selected = false;
        });
        pane.selected = true;
      };

      this.addPane = function(pane) {
        if (panes.length === 0) {
          $scope.select(pane);
        }
        panes.push(pane);
      };
    }],
    templateUrl: '/angular-app/partials/tabs/my-tabs.html'
  };
})

naBaseApp.directive('myPane', function() {
  return {
    require: '^^myTabs',
    restrict: 'E',
    transclude: true,
    scope: {
      title: '@'
    },
    link: function(scope, element, attrs, tabsCtrl) {
      tabsCtrl.addPane(scope);
    },
    templateUrl: '/angular-app/partials/tabs/my-pane.html'
  };
});

naBaseApp.directive('loading', function () {
  return {
    restrict: 'E',
    replace: true,
    template: '<div class="loading"><div class="ajax-spinner-bars"><div class="bar-1"></div><div class="bar-2"></div><div class="bar-3"></div><div class="bar-4"></div><div class="bar-5"></div><div class="bar-6"></div><div class="bar-7"></div><div class="bar-8"></div><div class="bar-9"></div><div class="bar-10"></div><div class="bar-11"></div><div class="bar-12"></div><div class="bar-13"></div><div class="bar-14"></div><div class="bar-15"></div><div class="bar-16"></div></div></div>',
    link: function (scope, element, attr) {
      scope.$watch('loading', function (val) {
          if (val)
              $(element).show();
          else
              $(element).hide();
      });
    }
  }
})
