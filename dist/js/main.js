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
/******/ 			"/dist/js/main": 0,
/******/ 			"dist/css/style": 0
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
/******/ 	__webpack_require__.O(undefined, ["dist/css/style"], () => (__webpack_require__("./src/js/main.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["dist/css/style"], () => (__webpack_require__("./src/sass/style.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDM0JBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLHFCQUFxQjtXQUMzQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTs7Ozs7VUVqREE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb3RyeXYvLi9zcmMvanMvbWFpbi5qcyIsIndlYnBhY2s6Ly9vdHJ5di8uL3NyYy9zYXNzL3N0eWxlLnNjc3M/YjA2ZiIsIndlYnBhY2s6Ly9vdHJ5di93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vdHJ5di93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL290cnl2L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb3RyeXYvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vdHJ5di93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9vdHJ5di93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL290cnl2L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9vdHJ5di93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLyogIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIFRlbXBsYXRlIE5hbWU6IEFjdGl2aXRhclxyXG4gIERlc2NyaXB0aW9uOiAgQWN0aXZpdGFyIEZpdG5lc3MgSFRNTCBUZW1wbGF0ZVxyXG4gIEF1dGhvcjogQ29sb3JsaWJcclxuICBBdXRob3IgVVJJOiBodHRwczovL2NvbG9ybGliLmNvbVxyXG4gIFZlcnNpb246IDEuMFxyXG4gIENyZWF0ZWQ6IENvbG9ybGliXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgKi9cclxuXHJcbid1c2Ugc3RyaWN0JztcclxuXHJcbihmdW5jdGlvbiAoJCkge1xyXG5cclxuICAgIC8qLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgUHJlbG9hZGVyXHJcbiAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbiAgICAkKHdpbmRvdykub24oJ2xvYWQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJChcIi5sb2FkZXJcIikuZmFkZU91dCgpO1xyXG4gICAgICAgICQoXCIjcHJlbG9kZXJcIikuZGVsYXkoMjAwKS5mYWRlT3V0KFwic2xvd1wiKTtcclxuXHJcbiAgICAgICAgLyotLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICAgICAgR2FsbGVyeSBmaWx0ZXJcclxuICAgICAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbiAgICAgICAgJCgnLmdhbGxlcnktY29udHJvbHMgdWwgbGknKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgJCgnLmdhbGxlcnktY29udHJvbHMgdWwgbGknKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmKCQoJy5nYWxsZXJ5LWZpbHRlcicpLmxlbmd0aCA+IDAgKSB7XHJcbiAgICAgICAgICAgIHZhciBjb250YWluZXJFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYWxsZXJ5LWZpbHRlcicpO1xyXG4gICAgICAgICAgICB2YXIgbWl4ZXIgPSBtaXhpdHVwKGNvbnRhaW5lckVsKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICQoJy5ibG9nLWdpcmQnKS5tYXNvbnJ5KHtcclxuXHRcdFx0aXRlbVNlbGVjdG9yOiAnLmdyaWQtaXRlbScsXHJcblx0XHRcdGNvbHVtbldpZHRoOiAnLmdyaWQtc2l6ZXInLFxyXG5cdFx0fSk7XHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAgLyotLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICBCYWNrZ3JvdW5kIFNldFxyXG4gICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4gICAgJCgnLnNldC1iZycpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBiZyA9ICQodGhpcykuZGF0YSgnc2V0YmcnKTtcclxuICAgICAgICAkKHRoaXMpLmNzcygnYmFja2dyb3VuZC1pbWFnZScsICd1cmwoJyArIGJnICsgJyknKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8qLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHROYXZpZ2F0aW9uXHJcblx0LS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4gICAgJChcIi5tb2JpbGUtbWVudVwiKS5zbGlja25hdih7XHJcbiAgICAgICAgcHJlcGVuZFRvOiAnI21vYmlsZS1tZW51LXdyYXAnLFxyXG4gICAgICAgIGFsbG93UGFyZW50TGlua3M6IHRydWVcclxuICAgIH0pO1xyXG5cclxuICAgIC8qLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHRNZW51IEhvdmVyXHJcblx0LS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4gICAgJChcIi5oZWFkZXItc2VjdGlvbiAubmF2LW1lbnUgLm1haW5tZW51IHVsIGxpXCIpLm9uKCdtb3VzZWhvdmVyJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICB9KTtcclxuICAgICQoXCIuaGVhZGVyLXNlY3Rpb24gLm5hdi1tZW51IC5tYWlubWVudSB1bCBsaVwiKS5vbignbW91c2VsZWF2ZScsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICQoJy5oZWFkZXItc2VjdGlvbiAubmF2LW1lbnUgLm1haW5tZW51IHVsIGxpJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLyotLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICBDYXJvdXNlbCBTbGlkZXJcclxuICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuICAgICQoXCIuaGVyby1pdGVtc1wiKS5vd2xDYXJvdXNlbCh7XHJcbiAgICAgICAgbG9vcDogZmFsc2UsXHJcbiAgICAgICAgbWFyZ2luOiAwLFxyXG4gICAgICAgIG5hdjogdHJ1ZSxcclxuICAgICAgICBpdGVtczogMSxcclxuICAgICAgICBkb3RzOiB0cnVlLFxyXG4gICAgICAgIGFuaW1hdGVPdXQ6ICdmYWRlT3V0JyxcclxuICAgICAgICBhbmltYXRlSW46ICdmYWRlSW4nLFxyXG4gICAgICAgIG5hdlRleHQ6IFsnPGkgY2xhc3M9XCJhcnJvd19jYXJyb3QtbGVmdFwiPjwvaT4nLCAnPGkgY2xhc3M9XCJhcnJvd19jYXJyb3QtcmlnaHRcIj48L2k+J10sXHJcbiAgICAgICAgc21hcnRTcGVlZDogMTIwMCxcclxuICAgICAgICBhdXRvSGVpZ2h0OiBmYWxzZSxcclxuICAgIH0pO1xyXG5cclxuICAgIC8qLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgVGVzdGltb25pYWwgU2xpZGVyXHJcbiAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbiAgICQoXCIudGVzdGltb25pYWwtc2xpZGVyXCIpLm93bENhcm91c2VsKHtcclxuICAgICAgICBsb29wOiB0cnVlLFxyXG4gICAgICAgIG1hcmdpbjogMCxcclxuICAgICAgICBuYXY6IGZhbHNlLFxyXG4gICAgICAgIGl0ZW1zOiAxLFxyXG4gICAgICAgIGRvdHM6IHRydWUsXHJcbiAgICAgICAgbmF2VGV4dDogWyc8aSBjbGFzcz1cImFycm93X2NhcnJvdC1sZWZ0XCI+PC9pPicsICc8aSBjbGFzcz1cImFycm93X2NhcnJvdC1yaWdodFwiPjwvaT4nXSxcclxuICAgICAgICBzbWFydFNwZWVkOiAxMjAwLFxyXG4gICAgICAgIGF1dG9IZWlnaHQ6IGZhbHNlLFxyXG4gICAgICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgfSk7XHJcblxyXG4gICAgLyotLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICBNYWduaWZpYyBQb3B1cFxyXG4gICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4gICAgJCgnLnZpZGVvLXBvcHVwJykubWFnbmlmaWNQb3B1cCh7XHJcbiAgICAgICAgdHlwZTogJ2lmcmFtZSdcclxuICAgIH0pO1xyXG5cclxuICAgICQoJy5pbWFnZS1wb3B1cCcpLm1hZ25pZmljUG9wdXAoe1xyXG4gICAgICAgIHR5cGU6ICdpbWFnZSdcclxuICAgIH0pO1xyXG5cclxuICAgIC8qLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgTWFnbmlmaWMgUG9wdXBcclxuICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuICAgICQoJy5zaG93LXJlc3VsdC1zZWxlY3QnKS5uaWNlU2VsZWN0KCk7XHJcblxyXG4gICAgLyotLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgIFRpbWV0YWJsZSBGaWx0ZXJcclxuICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuICAgICQoJy50aW1ldGFibGUtY29udHJvbHMgdWwgbGknKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgdHNmaWx0ZXIgPSAkKHRoaXMpLmRhdGEoJ3RzZmlsdGVyJyk7XHJcbiAgICAgICAgJCgnLnRpbWV0YWJsZS1jb250cm9scyB1bCBsaScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICBcclxuICAgICAgICBpZih0c2ZpbHRlciA9PSAnYWxsJykge1xyXG4gICAgICAgICAgICAkKCcuY2xhc3N0aW1lLXRhYmxlJykucmVtb3ZlQ2xhc3MoJ2ZpbHRlcmluZycpO1xyXG4gICAgICAgICAgICAkKCcudHMtaXRlbScpLnJlbW92ZUNsYXNzKCdzaG93Jyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJCgnLmNsYXNzdGltZS10YWJsZScpLmFkZENsYXNzKCdmaWx0ZXJpbmcnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJCgnLnRzLWl0ZW0nKS5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcclxuICAgICAgICAgICAgaWYoJCh0aGlzKS5kYXRhKCd0c21ldGEnKSA9PSB0c2ZpbHRlcikge1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnc2hvdycpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbn0pKGpRdWVyeSk7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IChyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpID0+IHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIFtjaHVua0lkcywgZm4sIHByaW9yaXR5XSA9IGRlZmVycmVkW2ldO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeSgoa2V5KSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pKSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHR2YXIgciA9IGZuKCk7XG5cdFx0XHRpZiAociAhPT0gdW5kZWZpbmVkKSByZXN1bHQgPSByO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiL2Rpc3QvanMvbWFpblwiOiAwLFxuXHRcImRpc3QvY3NzL3N0eWxlXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoKGlkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMCkpKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua290cnl2XCJdID0gc2VsZltcIndlYnBhY2tDaHVua290cnl2XCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxuX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1wiZGlzdC9jc3Mvc3R5bGVcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvanMvbWFpbi5qc1wiKSkpXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcImRpc3QvY3NzL3N0eWxlXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3Nhc3Mvc3R5bGUuc2Nzc1wiKSkpXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbIiQiLCJ3aW5kb3ciLCJvbiIsImZhZGVPdXQiLCJkZWxheSIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJsZW5ndGgiLCJjb250YWluZXJFbCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm1peGVyIiwibWl4aXR1cCIsIm1hc29ucnkiLCJpdGVtU2VsZWN0b3IiLCJjb2x1bW5XaWR0aCIsImVhY2giLCJiZyIsImRhdGEiLCJjc3MiLCJzbGlja25hdiIsInByZXBlbmRUbyIsImFsbG93UGFyZW50TGlua3MiLCJvd2xDYXJvdXNlbCIsImxvb3AiLCJtYXJnaW4iLCJuYXYiLCJpdGVtcyIsImRvdHMiLCJhbmltYXRlT3V0IiwiYW5pbWF0ZUluIiwibmF2VGV4dCIsInNtYXJ0U3BlZWQiLCJhdXRvSGVpZ2h0IiwiYXV0b3BsYXkiLCJtYWduaWZpY1BvcHVwIiwidHlwZSIsIm5pY2VTZWxlY3QiLCJ0c2ZpbHRlciIsImpRdWVyeSJdLCJzb3VyY2VSb290IjoiIn0=