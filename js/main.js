/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (() => {

/*  ---------------------------------------------------
  Template Name: Activitar
  Description:  Activitar Fitness HTML Template
  Author: Colorlib
  Author URI: https://colorlib.com
  Version: 1.0
  Created: Colorlib
---------------------------------------------------------  */


(function ($) {
  /*------------------
      Preloader
  --------------------*/
  $(window).on('load', function () {
    $(".loader").fadeOut();
    $("#preloder").delay(200).fadeOut("slow");
    /*------------------
        Gallery filter
    --------------------*/

    $('.gallery-controls ul li').on('click', function () {
      $('.gallery-controls ul li').removeClass('active');
      $(this).addClass('active');
    });

    if ($('.gallery-filter').length > 0) {
      var containerEl = document.querySelector('.gallery-filter');
      var mixer = mixitup(containerEl);
    }

    $('.blog-gird').masonry({
      itemSelector: '.grid-item',
      columnWidth: '.grid-sizer'
    });
  });
  /*------------------
      Background Set
  --------------------*/

  $('.set-bg').each(function () {
    var bg = $(this).data('setbg');
    $(this).css('background-image', 'url(' + bg + ')');
  });
  /*------------------
  Navigation
  --------------------*/

  $(".mobile-menu").slicknav({
    prependTo: '#mobile-menu-wrap',
    allowParentLinks: true
  });
  /*------------------
  Menu Hover
  --------------------*/

  $(".header-section .nav-menu .mainmenu ul li").on('mousehover', function () {
    $(this).addClass('active');
  });
  $(".header-section .nav-menu .mainmenu ul li").on('mouseleave', function () {
    $('.header-section .nav-menu .mainmenu ul li').removeClass('active');
  });
  /*------------------
      Carousel Slider
  --------------------*/

  $(".hero-items").owlCarousel({
    loop: false,
    margin: 0,
    nav: true,
    items: 1,
    dots: true,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    navText: ['<i class="arrow_carrot-left"></i>', '<i class="arrow_carrot-right"></i>'],
    smartSpeed: 1200,
    autoHeight: false
  });
  /*------------------
      Testimonial Slider
  --------------------*/

  $(".testimonial-slider").owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    items: 1,
    dots: true,
    navText: ['<i class="arrow_carrot-left"></i>', '<i class="arrow_carrot-right"></i>'],
    smartSpeed: 1200,
    autoHeight: false,
    autoplay: true
  });
  /*------------------
      Magnific Popup
  --------------------*/

  $('.video-popup').magnificPopup({
    type: 'iframe'
  });
  $('.image-popup').magnificPopup({
    type: 'image'
  });
  /*------------------
      Magnific Popup
  --------------------*/

  $('.show-result-select').niceSelect();
  /*------------------
     Timetable Filter
  --------------------*/

  $('.timetable-controls ul li').on('click', function () {
    var tsfilter = $(this).data('tsfilter');
    $('.timetable-controls ul li').removeClass('active');
    $(this).addClass('active');

    if (tsfilter == 'all') {
      $('.classtime-table').removeClass('filtering');
      $('.ts-item').removeClass('show');
    } else {
      $('.classtime-table').addClass('filtering');
    }

    $('.ts-item').each(function () {
      $(this).removeClass('show');

      if ($(this).data('tsmeta') == tsfilter) {
        $(this).addClass('show');
      }
    });
  });
})(jQuery);

/***/ }),

/***/ "./src/sass/style.scss":
/*!*****************************!*\
  !*** ./src/sass/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/main": 0,
/******/ 			"css/style": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkotryv"] = self["webpackChunkotryv"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/style"], () => (__webpack_require__("./src/js/main.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/style"], () => (__webpack_require__("./src/sass/style.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQzNCQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTSxxQkFBcUI7V0FDM0I7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7Ozs7O1VFakRBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL290cnl2Ly4vc3JjL2pzL21haW4uanMiLCJ3ZWJwYWNrOi8vb3RyeXYvLi9zcmMvc2Fzcy9zdHlsZS5zY3NzP2IwNmYiLCJ3ZWJwYWNrOi8vb3RyeXYvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb3RyeXYvd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly9vdHJ5di93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL290cnl2L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb3RyeXYvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vb3RyeXYvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9vdHJ5di93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vb3RyeXYvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8qICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBUZW1wbGF0ZSBOYW1lOiBBY3Rpdml0YXJcclxuICBEZXNjcmlwdGlvbjogIEFjdGl2aXRhciBGaXRuZXNzIEhUTUwgVGVtcGxhdGVcclxuICBBdXRob3I6IENvbG9ybGliXHJcbiAgQXV0aG9yIFVSSTogaHR0cHM6Ly9jb2xvcmxpYi5jb21cclxuICBWZXJzaW9uOiAxLjBcclxuICBDcmVhdGVkOiBDb2xvcmxpYlxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gICovXHJcblxyXG4ndXNlIHN0cmljdCc7XHJcblxyXG4oZnVuY3Rpb24gKCQpIHtcclxuXHJcbiAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgIFByZWxvYWRlclxyXG4gICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4gICAgJCh3aW5kb3cpLm9uKCdsb2FkJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoXCIubG9hZGVyXCIpLmZhZGVPdXQoKTtcclxuICAgICAgICAkKFwiI3ByZWxvZGVyXCIpLmRlbGF5KDIwMCkuZmFkZU91dChcInNsb3dcIik7XHJcblxyXG4gICAgICAgIC8qLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgICAgIEdhbGxlcnkgZmlsdGVyXHJcbiAgICAgICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4gICAgICAgICQoJy5nYWxsZXJ5LWNvbnRyb2xzIHVsIGxpJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICQoJy5nYWxsZXJ5LWNvbnRyb2xzIHVsIGxpJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZigkKCcuZ2FsbGVyeS1maWx0ZXInKS5sZW5ndGggPiAwICkge1xyXG4gICAgICAgICAgICB2YXIgY29udGFpbmVyRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FsbGVyeS1maWx0ZXInKTtcclxuICAgICAgICAgICAgdmFyIG1peGVyID0gbWl4aXR1cChjb250YWluZXJFbCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkKCcuYmxvZy1naXJkJykubWFzb25yeSh7XHJcblx0XHRcdGl0ZW1TZWxlY3RvcjogJy5ncmlkLWl0ZW0nLFxyXG5cdFx0XHRjb2x1bW5XaWR0aDogJy5ncmlkLXNpemVyJyxcclxuXHRcdH0pO1xyXG5cclxuICAgIH0pO1xyXG5cclxuICAgIC8qLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgQmFja2dyb3VuZCBTZXRcclxuICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuICAgICQoJy5zZXQtYmcnKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgYmcgPSAkKHRoaXMpLmRhdGEoJ3NldGJnJyk7XHJcbiAgICAgICAgJCh0aGlzKS5jc3MoJ2JhY2tncm91bmQtaW1hZ2UnLCAndXJsKCcgKyBiZyArICcpJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFx0TmF2aWdhdGlvblxyXG5cdC0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuICAgICQoXCIubW9iaWxlLW1lbnVcIikuc2xpY2tuYXYoe1xyXG4gICAgICAgIHByZXBlbmRUbzogJyNtb2JpbGUtbWVudS13cmFwJyxcclxuICAgICAgICBhbGxvd1BhcmVudExpbmtzOiB0cnVlXHJcbiAgICB9KTtcclxuXHJcbiAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFx0TWVudSBIb3ZlclxyXG5cdC0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuICAgICQoXCIuaGVhZGVyLXNlY3Rpb24gLm5hdi1tZW51IC5tYWlubWVudSB1bCBsaVwiKS5vbignbW91c2Vob3ZlcicsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgfSk7XHJcbiAgICAkKFwiLmhlYWRlci1zZWN0aW9uIC5uYXYtbWVudSAubWFpbm1lbnUgdWwgbGlcIikub24oJ21vdXNlbGVhdmUnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAkKCcuaGVhZGVyLXNlY3Rpb24gLm5hdi1tZW51IC5tYWlubWVudSB1bCBsaScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8qLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgQ2Fyb3VzZWwgU2xpZGVyXHJcbiAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbiAgICAkKFwiLmhlcm8taXRlbXNcIikub3dsQ2Fyb3VzZWwoe1xyXG4gICAgICAgIGxvb3A6IGZhbHNlLFxyXG4gICAgICAgIG1hcmdpbjogMCxcclxuICAgICAgICBuYXY6IHRydWUsXHJcbiAgICAgICAgaXRlbXM6IDEsXHJcbiAgICAgICAgZG90czogdHJ1ZSxcclxuICAgICAgICBhbmltYXRlT3V0OiAnZmFkZU91dCcsXHJcbiAgICAgICAgYW5pbWF0ZUluOiAnZmFkZUluJyxcclxuICAgICAgICBuYXZUZXh0OiBbJzxpIGNsYXNzPVwiYXJyb3dfY2Fycm90LWxlZnRcIj48L2k+JywgJzxpIGNsYXNzPVwiYXJyb3dfY2Fycm90LXJpZ2h0XCI+PC9pPiddLFxyXG4gICAgICAgIHNtYXJ0U3BlZWQ6IDEyMDAsXHJcbiAgICAgICAgYXV0b0hlaWdodDogZmFsc2UsXHJcbiAgICB9KTtcclxuXHJcbiAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgIFRlc3RpbW9uaWFsIFNsaWRlclxyXG4gICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4gICAkKFwiLnRlc3RpbW9uaWFsLXNsaWRlclwiKS5vd2xDYXJvdXNlbCh7XHJcbiAgICAgICAgbG9vcDogdHJ1ZSxcclxuICAgICAgICBtYXJnaW46IDAsXHJcbiAgICAgICAgbmF2OiBmYWxzZSxcclxuICAgICAgICBpdGVtczogMSxcclxuICAgICAgICBkb3RzOiB0cnVlLFxyXG4gICAgICAgIG5hdlRleHQ6IFsnPGkgY2xhc3M9XCJhcnJvd19jYXJyb3QtbGVmdFwiPjwvaT4nLCAnPGkgY2xhc3M9XCJhcnJvd19jYXJyb3QtcmlnaHRcIj48L2k+J10sXHJcbiAgICAgICAgc21hcnRTcGVlZDogMTIwMCxcclxuICAgICAgICBhdXRvSGVpZ2h0OiBmYWxzZSxcclxuICAgICAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgIH0pO1xyXG5cclxuICAgIC8qLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgTWFnbmlmaWMgUG9wdXBcclxuICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuICAgICQoJy52aWRlby1wb3B1cCcpLm1hZ25pZmljUG9wdXAoe1xyXG4gICAgICAgIHR5cGU6ICdpZnJhbWUnXHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcuaW1hZ2UtcG9wdXAnKS5tYWduaWZpY1BvcHVwKHtcclxuICAgICAgICB0eXBlOiAnaW1hZ2UnXHJcbiAgICB9KTtcclxuXHJcbiAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgIE1hZ25pZmljIFBvcHVwXHJcbiAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbiAgICAkKCcuc2hvdy1yZXN1bHQtc2VsZWN0JykubmljZVNlbGVjdCgpO1xyXG5cclxuICAgIC8qLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICBUaW1ldGFibGUgRmlsdGVyXHJcbiAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbiAgICAkKCcudGltZXRhYmxlLWNvbnRyb2xzIHVsIGxpJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIHRzZmlsdGVyID0gJCh0aGlzKS5kYXRhKCd0c2ZpbHRlcicpO1xyXG4gICAgICAgICQoJy50aW1ldGFibGUtY29udHJvbHMgdWwgbGknKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYodHNmaWx0ZXIgPT0gJ2FsbCcpIHtcclxuICAgICAgICAgICAgJCgnLmNsYXNzdGltZS10YWJsZScpLnJlbW92ZUNsYXNzKCdmaWx0ZXJpbmcnKTtcclxuICAgICAgICAgICAgJCgnLnRzLWl0ZW0nKS5yZW1vdmVDbGFzcygnc2hvdycpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQoJy5jbGFzc3RpbWUtdGFibGUnKS5hZGRDbGFzcygnZmlsdGVyaW5nJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICQoJy50cy1pdGVtJykuZWFjaChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdzaG93Jyk7XHJcbiAgICAgICAgICAgIGlmKCQodGhpcykuZGF0YSgndHNtZXRhJykgPT0gdHNmaWx0ZXIpIHtcclxuICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ3Nob3cnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG59KShqUXVlcnkpOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV0gPSBkZWZlcnJlZFtpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIi9qcy9tYWluXCI6IDAsXG5cdFwiY3NzL3N0eWxlXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoKGlkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMCkpKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua290cnl2XCJdID0gc2VsZltcIndlYnBhY2tDaHVua290cnl2XCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxuX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1wiY3NzL3N0eWxlXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2pzL21haW4uanNcIikpKVxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJjc3Mvc3R5bGVcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvc2Fzcy9zdHlsZS5zY3NzXCIpKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOlsiJCIsIndpbmRvdyIsIm9uIiwiZmFkZU91dCIsImRlbGF5IiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsImxlbmd0aCIsImNvbnRhaW5lckVsIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibWl4ZXIiLCJtaXhpdHVwIiwibWFzb25yeSIsIml0ZW1TZWxlY3RvciIsImNvbHVtbldpZHRoIiwiZWFjaCIsImJnIiwiZGF0YSIsImNzcyIsInNsaWNrbmF2IiwicHJlcGVuZFRvIiwiYWxsb3dQYXJlbnRMaW5rcyIsIm93bENhcm91c2VsIiwibG9vcCIsIm1hcmdpbiIsIm5hdiIsIml0ZW1zIiwiZG90cyIsImFuaW1hdGVPdXQiLCJhbmltYXRlSW4iLCJuYXZUZXh0Iiwic21hcnRTcGVlZCIsImF1dG9IZWlnaHQiLCJhdXRvcGxheSIsIm1hZ25pZmljUG9wdXAiLCJ0eXBlIiwibmljZVNlbGVjdCIsInRzZmlsdGVyIiwialF1ZXJ5Il0sInNvdXJjZVJvb3QiOiIifQ==