// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"efjd":[function(require,module,exports) {
document.addEventListener('DOMContentLoaded', function () {
  var swiper = document.querySelector('.swiper');
  var isMobile = window.matchMedia('(max-width: 767px)').matches;
  if (isMobile || !swiper) {
    return;
  }
  var leftBtn = swiper.querySelector('.swiper__btn:first-of-type');
  var rightBtn = swiper.querySelector('.swiper__btn:last-of-type');
  var scrollingList = swiper.querySelector('.swiper__list');
  scrollingList.addEventListener('scroll', adjustScrollControls);
  window.addEventListener('resize', adjustScrollControls);
  leftBtn.addEventListener('click', scrollToLeft);
  rightBtn.addEventListener('click', scrollToRight);
  adjustScrollControls();
  function scrollToLeft() {
    scrollingList.scrollTo({
      left: scrollingList.scrollLeft - scrollingList.offsetWidth,
      behavior: 'smooth'
    });
  }
  function scrollToRight() {
    scrollingList.scrollTo({
      left: scrollingList.scrollLeft + scrollingList.offsetWidth,
      behavior: 'smooth'
    });
  }
  function adjustScrollControls() {
    var isRightEnd = Math.round(scrollingList.scrollLeft) >= scrollingList.scrollWidth - scrollingList.offsetWidth - 1;
    var isLeftEnd = Math.round(scrollingList.scrollLeft) <= 0;
    rightBtn.toggleAttribute('disabled', isRightEnd);
    leftBtn.toggleAttribute('disabled', isLeftEnd);
  }
});
},{}],"JN53":[function(require,module,exports) {
document.addEventListener('DOMContentLoaded', function () {
  /* Adding a link to the home page instead of a link to the current page in the footer */
  var currentPage = window.location.pathname;
  var footerLegal = document.querySelector('.footer__legal');
  var currentLink = footerLegal.querySelector("a[href*=\"".concat(currentPage, "\"]"));
  if (currentPage !== '/' && currentPage !== '/index.html' && currentLink) {
    footerLegal.removeChild(currentLink);
    var homeLink = document.createElement('a');
    homeLink.href = '/';
    homeLink.text = 'Home';
    footerLegal.insertAdjacentElement('afterbegin', homeLink);
  }
});
},{}],"yfuD":[function(require,module,exports) {
document.addEventListener('DOMContentLoaded', function () {
  function onFacebookMessengerClicked() {
    window.gtag('event', 'contact', {
      contact_tool: 'facebook',
      link_domain: 'm.me'
    });
    window.rdt('track', 'Lead');
  }
  var facebookMessengerLinks = document.querySelectorAll('#facebook-messenger');
  facebookMessengerLinks.forEach(function (l) {
    return l.addEventListener('click', onFacebookMessengerClicked);
  });
  function onBookACallClicked() {
    window.gtag('event', 'contact', {
      contact_tool: 'calendly',
      link_domain: 'calendly.com'
    });
    window.rdt('track', 'Lead');
  }
  var bookACallLinks = document.querySelectorAll('#book-a-call');
  bookACallLinks.forEach(function (l) {
    return l.addEventListener('click', onBookACallClicked);
  });
  function onSetupViaLiveChatClicked() {
    window.gtag('event', 'contact', {
      contact_tool: 'live chat',
      link_domain: 'tawk.to'
    });
    window.rdt('track', 'Lead');
  }
  var setupViaLiveChatLinks = document.querySelectorAll('#set-up-via-live-chat');
  setupViaLiveChatLinks.forEach(function (l) {
    return l.addEventListener('click', onSetupViaLiveChatClicked);
  });
  function onViewDemoClicked() {
    window.gtag('event', 'demo');
    window.rdt('track', 'Custom', {
      customEventName: 'demo'
    });
  }
  var viewDemoLinks = document.querySelectorAll('#view-demo');
  viewDemoLinks.forEach(function (l) {
    return l.addEventListener('click', onViewDemoClicked);
  });
});
},{}],"S3PC":[function(require,module,exports) {
"use strict";

require("./assets/scripts/swiper");
require("./assets/scripts/footer");
require("./assets/scripts/callbacks");
},{"./assets/scripts/swiper":"efjd","./assets/scripts/footer":"JN53","./assets/scripts/callbacks":"yfuD"}]},{},["S3PC"], null)
//# sourceMappingURL=src.30830159.js.map