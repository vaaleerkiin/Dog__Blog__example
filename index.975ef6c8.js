// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"1RB6v":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "890e741a975ef6c8";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, importScripts */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else if ("reload" in location) location.reload();
            else {
                // Web extension context
                var ext = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
                if (ext && ext.runtime && ext.runtime.reload) ext.runtime.reload();
            }
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                if (asset.type === "js") {
                    if (typeof document !== "undefined") {
                        let script = document.createElement("script");
                        script.src = asset.url;
                        return new Promise((resolve, reject)=>{
                            var _document$head;
                            script.onload = ()=>resolve(script);
                            script.onerror = reject;
                            (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
                        });
                    } else if (typeof importScripts === "function") return new Promise((resolve, reject)=>{
                        try {
                            importScripts(asset.url);
                        } catch (err) {
                            reject(err);
                        }
                    });
                }
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id1][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"8lqZg":[function(require,module,exports) {
var _burgerMenu = require("./js/burger-menu");
var _translate = require("./js/translate");
var _news = require("./js/news");
var _mainGallary = require("./js/main-gallary");

},{"./js/burger-menu":"egJfa","./js/translate":"cybGd","./js/news":"2xmvE","./js/main-gallary":"lneWe"}],"egJfa":[function(require,module,exports) {
const refs = {
    openMenuBtn: document.querySelector("[data-menu-open]"),
    MenuBtnaboutMe: document.querySelector("[data-menu-aboutMe]"),
    MenuBtnSoc: document.querySelector("[data-menu-soc]"),
    MenuBtnContact: document.querySelector("[data-menu-contact]"),
    menu: document.querySelector("[data-menu]")
};
refs.openMenuBtn.addEventListener("click", toggleModal);
refs.MenuBtnaboutMe.addEventListener("click", toggleModal);
refs.MenuBtnSoc.addEventListener("click", toggleModal);
refs.MenuBtnContact.addEventListener("click", toggleModal);
function toggleModal() {
    document.body.classList.toggle("menu-open");
    refs.menu.classList.toggle("is-hidden-menu");
}

},{}],"cybGd":[function(require,module,exports) {
const LangArr = {
    lng__logo: {
        ua: "\u0429\u043E\u0434\u0435\u043D\u043D\u0438\u043A \u041F\u0442\u0456 \u0431\u0440\u0430\u0431\u0430\u043D\u0441\u043E\u043D\u0430",
        en: `Brabanson's Dog Diary`
    },
    lng__aboutMe__nav: {
        ua: "\u041F\u0440\u043E \u043C\u0435\u043D\u0435",
        en: "About Me"
    },
    lng__news__nav: {
        ua: "\u041D\u043E\u0432\u0438\u043D\u0438",
        en: "News"
    },
    lng__contact__nav: {
        ua: "\u041A\u043E\u043D\u0442\u0430\u043A\u0438",
        en: "Contacts"
    },
    lng__aboutMe__menu: {
        ua: "\u041F\u0440\u043E \u043C\u0435\u043D\u0435",
        en: "About Me"
    },
    lng__news__menu: {
        ua: "\u041D\u043E\u0432\u0438\u043D\u0438",
        en: "News"
    },
    lng__contact__menu: {
        ua: "\u041A\u043E\u043D\u0442\u0430\u043A\u0438",
        en: "Contacts"
    },
    lng__heroTitle: {
        ua: "\u041F\u0442\u0456 \u0431\u0440\u0430\u0431\u0430\u043D\u0441\u043E\u043D: \u0431\u043B\u043E\u0433 \u0441\u043E\u0431\u0430\u043A\u0438-\u043A\u043E\u043C\u043F\u0430\u043D\u044C\u0439\u043E\u043D\u0430",
        en: "Brabanson: Companion Dog Blog"
    },
    lng__heroText: {
        ua: "\u0412\u0456\u0442\u0430\u0454\u043C\u043E \u043D\u0430 \u0431\u043B\u043E\u0437\u0456 \u043D\u0430\u0448\u043E\u0457 \u0443\u043B\u044E\u0431\u043B\u0435\u043D\u043E\u0457 \u0441\u043E\u0431\u0430\u043A\u0438-\u043A\u043E\u043C\u043F\u0430\u043D\u044C\u0439\u043E\u043D\u0430! \u041C\u0438 \u0440\u0430\u0434\u0456 \u043F\u043E\u0434\u0456\u043B\u0438\u0442\u0438\u0441\u044F \u0437 \u0432\u0430\u043C\u0438 \u043D\u0430\u0448\u0438\u043C\u0438 \u043F\u0440\u0438\u0433\u043E\u0434\u0430\u043C\u0438, \u0432\u0440\u0430\u0436\u0435\u043D\u043D\u044F\u043C\u0438 \u0442\u0430 \u0449\u043E\u0434\u0435\u043D\u043D\u0438\u043C \u0436\u0438\u0442\u0442\u044F\u043C \u0443 \u0441\u043F\u0440\u0438\u044F\u0442\u043B\u0438\u0432\u043E\u043C\u0443 \u0441\u0443\u0441\u043F\u0456\u043B\u044C\u0441\u0442\u0432\u0456 \u0437 \u043D\u0430\u0448\u043E\u044E \u0432\u0435\u0441\u0435\u043B\u043E\u044E \u0456 \u0434\u043E\u0431\u0440\u043E\u044E \u0441\u043E\u0431\u0430\u0447\u043A\u043E\u044E. \u0421\u043B\u0456\u0434\u043A\u0443\u0439\u0442\u0435 \u0437\u0430 \u043D\u0430\u043C\u0438 \u0442\u0430 \u0434\u0456\u0437\u043D\u0430\u0432\u0430\u0439\u0442\u0435\u0441\u044F \u0431\u0456\u043B\u044C\u0448\u0435 \u043F\u0440\u043E \u043D\u0430\u0448\u0443 \u0434\u0440\u0443\u0436\u043D\u044E \u043A\u043E\u043C\u0430\u043D\u0434\u0443!",
        en: "Welcome to the blog of our beloved companion dog! We are happy to share with you our adventures, impressions, and daily life in a friendly society with our cheerful and good dog. Follow us and learn more about our friendly team!"
    },
    lng__inform__title: {
        ua: "\u041F\u0440\u043E \u043C\u0435\u043D\u0435",
        en: "About Me"
    }
};
const refs = {
    navBtnEn: document.querySelector("#nav__en"),
    navBtnUa: document.querySelector("#nav__ua"),
    menuBtnEn: document.querySelector("#menu__en"),
    menuBtnUa: document.querySelector("#menu__ua"),
    allLang: [
        "en",
        "ua"
    ]
};
refs.navBtnEn.addEventListener("click", ()=>changeURLLang("en"));
refs.navBtnUa.addEventListener("click", ()=>changeURLLang("ua"));
refs.menuBtnEn.addEventListener("click", ()=>changeURLLang("en"));
refs.menuBtnUa.addEventListener("click", ()=>changeURLLang("ua"));
function changeURLLang(lang) {
    console.log(lang);
    location.href = window.location.pathname + "#" + lang;
    location.reload();
}
function changeWebLang() {
    let hash = window.location.hash;
    hash = hash.substring(1);
    if (!refs.allLang.includes(hash)) {
        location.href = window.location.pathname + "#ua";
        location.reload();
    }
    for(const key in LangArr)document.querySelector(`.${key}`).innerHTML = LangArr[key][hash];
}
changeWebLang();

},{}],"2xmvE":[function(require,module,exports) {
const allNews = [
    {
        title: "\u0421\u044C\u043E\u0433\u043E\u0434\u043D\u0456 \u041F\u0442\u0456 \u0432\u043F\u0435\u0440\u0448\u0435 \u0432\u0456\u0434\u0432\u0456\u0434\u0430\u043B\u0430 \u043F\u043B\u044F\u0436 \u0437 \u0432\u043B\u0430\u0441\u043D\u0438\u043A\u043E\u043C! \u0412\u043E\u043D\u0430 \u0434\u0443\u0436\u0435 \u0437\u0430\u0434\u043E\u0432\u043E\u043B\u0435\u043D\u0430 \u0442\u0430 \u0432\u0435\u0441\u0435\u043B\u0430, \u043D\u0430\u0432\u0456\u0442\u044C \u043A\u0443\u043F\u0430\u043B\u0430\u0441\u044C \u0432 \u043C\u043E\u0440\u0456.",
        img: "https://zelenvsit.cx.ua/wp-content/uploads/2018/6/sif-2141.jpg",
        date: "20/7/2019"
    },
    {
        title: "\u041C\u0438 \u0432\u0456\u0434\u043A\u0440\u0438\u043B\u0438 \u043D\u043E\u0432\u0443 \u0442\u0440\u0435\u043D\u0443\u0432\u0430\u043B\u044C\u043D\u0443 \u0434\u0456\u043B\u044F\u043D\u043A\u0443 \u0434\u043B\u044F \u041F\u0442\u0456! \u0412\u043E\u043D\u0430 \u0434\u0443\u0436\u0435 \u0437\u0430\u0445\u043E\u043F\u043B\u044E\u0454\u0442\u044C\u0441\u044F \u043D\u043E\u0432\u0438\u043C\u0438 \u0437\u0430\u0434\u0430\u0447\u0430\u043C\u0438 \u0442\u0430 \u0456\u0433\u0440\u0430\u043C\u0438.",
        img: "http://i.otzovik.com/objects/b/100000/95554.png",
        date: "12/8/2022"
    },
    {
        title: "\u0421\u044C\u043E\u0433\u043E\u0434\u043D\u0456 \u043C\u0438 \u0432\u0456\u0434\u0432\u0456\u0434\u0430\u043B\u0438 \u0432\u0435\u0442\u0435\u0440\u0438\u043D\u0430\u0440\u0430 \u0442\u0430 \u0432\u0441\u0435 \u0432\u0438\u044F\u0432\u0438\u043B\u043E\u0441\u044F \u0434\u043E\u0431\u0440\u0435 \u0437 \u041F\u0442\u0456. \u0412\u043E\u043D\u0430 \u0434\u0443\u0436\u0435 \u0432\u0435\u0441\u0435\u043B\u0430 \u0442\u0430 \u0433\u043E\u0442\u043E\u0432\u0430 \u0434\u043E \u043D\u043E\u0432\u0438\u0445 \u043F\u0440\u0438\u0433\u043E\u0434!",
        img: "https://storage-api.petstory.ru/resize/0x0x80/b4/4b/0f/b44b0f2cc2384e10b95249bc70c4a073.jpeg",
        date: "21/12/2020"
    }, 
];
()=>{
    const news = allNews.map((el)=>{});
};

},{}],"lneWe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
// const Handlebars = require('handlebars');
var _lightgallery = require("lightgallery");
var _lightgalleryDefault = parcelHelpers.interopDefault(_lightgallery);
var _lgAutoplayMin = require("../plugins/autoplay/lg-autoplay.min");
var _lgAutoplayMinDefault = parcelHelpers.interopDefault(_lgAutoplayMin);
var _lgThumbnailMin = require("../plugins/thumbnail/lg-thumbnail.min");
var _lgThumbnailMinDefault = parcelHelpers.interopDefault(_lgThumbnailMin);
var _dynamicMainGallaryElJson = require("./source/DynamicMainGallaryEl.json");
var _dynamicMainGallaryElJsonDefault = parcelHelpers.interopDefault(_dynamicMainGallaryElJson);
const lgContainer = document.getElementById("inline-gallery-container");
const inlineGallery = (0, _lightgalleryDefault.default)(lgContainer, {
    container: lgContainer,
    dynamic: true,
    hash: false,
    closeOnTap: true,
    escKey: true,
    controls: true,
    closable: false,
    showMaximizeIcon: true,
    appendSubHtmlTo: ".lg-item",
    slideShowAutoplay: true,
    slideDelay: 0,
    plugins: [
        (0, _lgAutoplayMinDefault.default),
        (0, _lgThumbnailMinDefault.default)
    ],
    controls: true,
    dynamicEl: [
        ...CreateDynemicEl()
    ]
});
console.log((0, _dynamicMainGallaryElJsonDefault.default));
inlineGallery.openGallery();
function SortElForDate() {
    const arr = (0, _dynamicMainGallaryElJsonDefault.default);
    return arr.sort((a, b)=>{
        return new Date(b.date) - new Date(a.date);
    });
}
console.log(SortElForDate());
function CreateDynemicEl() {
    return SortElForDate().map((el)=>{
        let arr = el;
        arr.subHtml = `<div class="lightGallery-captions">
                <h4>${arr.header}</h4>
                <p> ${arr.date}</p>
            </div>`;
        arr.src = `https://raw.githubusercontent.com/vaaleerkiin/Dog__Blog/main/src/${arr.src}`;
        arr.thumb = `https://raw.githubusercontent.com/vaaleerkiin/Dog__Blog/main/src/${arr.thumb}`;
        delete arr.header;
        delete arr.description;
        delete arr.date;
        return arr;
    });
}

},{"lightgallery":"lrONo","../plugins/autoplay/lg-autoplay.min":"e554u","../plugins/thumbnail/lg-thumbnail.min":"jSejr","./source/DynamicMainGallaryEl.json":"eQ9eW","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lrONo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/*!
 * lightgallery | 2.7.1 | January 11th 2023
 * http://www.lightgalleryjs.com/
 * Copyright (c) 2020 Sachin Neravath;
 * @license GPLv3
 */ /*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function __spreadArrays() {
    for(var s = 0, i = 0, il = arguments.length; i < il; i++)s += arguments[i].length;
    for(var r = Array(s), k = 0, i = 0; i < il; i++)for(var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)r[k] = a[j];
    return r;
}
/**
 * List of lightGallery events
 * All events should be documented here
 * Below interfaces are used to build the website documentations
 * */ var lGEvents = {
    afterAppendSlide: "lgAfterAppendSlide",
    init: "lgInit",
    hasVideo: "lgHasVideo",
    containerResize: "lgContainerResize",
    updateSlides: "lgUpdateSlides",
    afterAppendSubHtml: "lgAfterAppendSubHtml",
    beforeOpen: "lgBeforeOpen",
    afterOpen: "lgAfterOpen",
    slideItemLoad: "lgSlideItemLoad",
    beforeSlide: "lgBeforeSlide",
    afterSlide: "lgAfterSlide",
    posterClick: "lgPosterClick",
    dragStart: "lgDragStart",
    dragMove: "lgDragMove",
    dragEnd: "lgDragEnd",
    beforeNextSlide: "lgBeforeNextSlide",
    beforePrevSlide: "lgBeforePrevSlide",
    beforeClose: "lgBeforeClose",
    afterClose: "lgAfterClose",
    rotateLeft: "lgRotateLeft",
    rotateRight: "lgRotateRight",
    flipHorizontal: "lgFlipHorizontal",
    flipVertical: "lgFlipVertical",
    autoplay: "lgAutoplay",
    autoplayStart: "lgAutoplayStart",
    autoplayStop: "lgAutoplayStop"
};
var lightGalleryCoreSettings = {
    mode: "lg-slide",
    easing: "ease",
    speed: 400,
    licenseKey: "0000-0000-000-0000",
    height: "100%",
    width: "100%",
    addClass: "",
    startClass: "lg-start-zoom",
    backdropDuration: 300,
    container: "",
    startAnimationDuration: 400,
    zoomFromOrigin: true,
    hideBarsDelay: 0,
    showBarsAfter: 10000,
    slideDelay: 0,
    supportLegacyBrowser: true,
    allowMediaOverlap: false,
    videoMaxSize: "1280-720",
    loadYouTubePoster: true,
    defaultCaptionHeight: 0,
    ariaLabelledby: "",
    ariaDescribedby: "",
    resetScrollPosition: true,
    hideScrollbar: false,
    closable: true,
    swipeToClose: true,
    closeOnTap: true,
    showCloseIcon: true,
    showMaximizeIcon: false,
    loop: true,
    escKey: true,
    keyPress: true,
    trapFocus: true,
    controls: true,
    slideEndAnimation: true,
    hideControlOnEnd: false,
    mousewheel: false,
    getCaptionFromTitleOrAlt: true,
    appendSubHtmlTo: ".lg-sub-html",
    subHtmlSelectorRelative: false,
    preload: 2,
    numberOfSlideItemsInDom: 10,
    selector: "",
    selectWithin: "",
    nextHtml: "",
    prevHtml: "",
    index: 0,
    iframeWidth: "100%",
    iframeHeight: "100%",
    iframeMaxWidth: "100%",
    iframeMaxHeight: "100%",
    download: true,
    counter: true,
    appendCounterTo: ".lg-toolbar",
    swipeThreshold: 50,
    enableSwipe: true,
    enableDrag: true,
    dynamic: false,
    dynamicEl: [],
    extraProps: [],
    exThumbImage: "",
    isMobile: undefined,
    mobileSettings: {
        controls: false,
        showCloseIcon: false,
        download: false
    },
    plugins: [],
    strings: {
        closeGallery: "Close gallery",
        toggleMaximize: "Toggle maximize",
        previousSlide: "Previous slide",
        nextSlide: "Next slide",
        download: "Download",
        playVideo: "Play video"
    }
};
function initLgPolyfills() {
    (function() {
        if (typeof window.CustomEvent === "function") return false;
        function CustomEvent(event, params) {
            params = params || {
                bubbles: false,
                cancelable: false,
                detail: null
            };
            var evt = document.createEvent("CustomEvent");
            evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
            return evt;
        }
        window.CustomEvent = CustomEvent;
    })();
    (function() {
        if (!Element.prototype.matches) Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
    })();
}
var lgQuery = /** @class */ function() {
    function lgQuery1(selector) {
        this.cssVenderPrefixes = [
            "TransitionDuration",
            "TransitionTimingFunction",
            "Transform",
            "Transition", 
        ];
        this.selector = this._getSelector(selector);
        this.firstElement = this._getFirstEl();
        return this;
    }
    lgQuery1.generateUUID = function() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
            var r = Math.random() * 16 | 0, v = c == "x" ? r : r & 0x3 | 0x8;
            return v.toString(16);
        });
    };
    lgQuery1.prototype._getSelector = function(selector, context) {
        if (context === void 0) context = document;
        if (typeof selector !== "string") return selector;
        context = context || document;
        var fl = selector.substring(0, 1);
        if (fl === "#") return context.querySelector(selector);
        else return context.querySelectorAll(selector);
    };
    lgQuery1.prototype._each = function(func) {
        if (!this.selector) return this;
        if (this.selector.length !== undefined) [].forEach.call(this.selector, func);
        else func(this.selector, 0);
        return this;
    };
    lgQuery1.prototype._setCssVendorPrefix = function(el, cssProperty, value) {
        // prettier-ignore
        var property = cssProperty.replace(/-([a-z])/gi, function(s, group1) {
            return group1.toUpperCase();
        });
        if (this.cssVenderPrefixes.indexOf(property) !== -1) {
            el.style[property.charAt(0).toLowerCase() + property.slice(1)] = value;
            el.style["webkit" + property] = value;
            el.style["moz" + property] = value;
            el.style["ms" + property] = value;
            el.style["o" + property] = value;
        } else el.style[property] = value;
    };
    lgQuery1.prototype._getFirstEl = function() {
        if (this.selector && this.selector.length !== undefined) return this.selector[0];
        else return this.selector;
    };
    lgQuery1.prototype.isEventMatched = function(event, eventName) {
        var eventNamespace = eventName.split(".");
        return event.split(".").filter(function(e) {
            return e;
        }).every(function(e) {
            return eventNamespace.indexOf(e) !== -1;
        });
    };
    lgQuery1.prototype.attr = function(attr, value) {
        if (value === undefined) {
            if (!this.firstElement) return "";
            return this.firstElement.getAttribute(attr);
        }
        this._each(function(el) {
            el.setAttribute(attr, value);
        });
        return this;
    };
    lgQuery1.prototype.find = function(selector) {
        return $LG(this._getSelector(selector, this.selector));
    };
    lgQuery1.prototype.first = function() {
        if (this.selector && this.selector.length !== undefined) return $LG(this.selector[0]);
        else return $LG(this.selector);
    };
    lgQuery1.prototype.eq = function(index) {
        return $LG(this.selector[index]);
    };
    lgQuery1.prototype.parent = function() {
        return $LG(this.selector.parentElement);
    };
    lgQuery1.prototype.get = function() {
        return this._getFirstEl();
    };
    lgQuery1.prototype.removeAttr = function(attributes) {
        var attrs = attributes.split(" ");
        this._each(function(el) {
            attrs.forEach(function(attr) {
                return el.removeAttribute(attr);
            });
        });
        return this;
    };
    lgQuery1.prototype.wrap = function(className) {
        if (!this.firstElement) return this;
        var wrapper = document.createElement("div");
        wrapper.className = className;
        this.firstElement.parentNode.insertBefore(wrapper, this.firstElement);
        this.firstElement.parentNode.removeChild(this.firstElement);
        wrapper.appendChild(this.firstElement);
        return this;
    };
    lgQuery1.prototype.addClass = function(classNames) {
        if (classNames === void 0) classNames = "";
        this._each(function(el) {
            // IE doesn't support multiple arguments
            classNames.split(" ").forEach(function(className) {
                if (className) el.classList.add(className);
            });
        });
        return this;
    };
    lgQuery1.prototype.removeClass = function(classNames) {
        this._each(function(el) {
            // IE doesn't support multiple arguments
            classNames.split(" ").forEach(function(className) {
                if (className) el.classList.remove(className);
            });
        });
        return this;
    };
    lgQuery1.prototype.hasClass = function(className) {
        if (!this.firstElement) return false;
        return this.firstElement.classList.contains(className);
    };
    lgQuery1.prototype.hasAttribute = function(attribute) {
        if (!this.firstElement) return false;
        return this.firstElement.hasAttribute(attribute);
    };
    lgQuery1.prototype.toggleClass = function(className) {
        if (!this.firstElement) return this;
        if (this.hasClass(className)) this.removeClass(className);
        else this.addClass(className);
        return this;
    };
    lgQuery1.prototype.css = function(property, value) {
        var _this = this;
        this._each(function(el) {
            _this._setCssVendorPrefix(el, property, value);
        });
        return this;
    };
    // Need to pass separate namespaces for separate elements
    lgQuery1.prototype.on = function(events, listener) {
        var _this = this;
        if (!this.selector) return this;
        events.split(" ").forEach(function(event) {
            if (!Array.isArray(lgQuery1.eventListeners[event])) lgQuery1.eventListeners[event] = [];
            lgQuery1.eventListeners[event].push(listener);
            _this.selector.addEventListener(event.split(".")[0], listener);
        });
        return this;
    };
    // @todo - test this
    lgQuery1.prototype.once = function(event, listener) {
        var _this = this;
        this.on(event, function() {
            _this.off(event);
            listener(event);
        });
        return this;
    };
    lgQuery1.prototype.off = function(event) {
        var _this = this;
        if (!this.selector) return this;
        Object.keys(lgQuery1.eventListeners).forEach(function(eventName) {
            if (_this.isEventMatched(event, eventName)) {
                lgQuery1.eventListeners[eventName].forEach(function(listener) {
                    _this.selector.removeEventListener(eventName.split(".")[0], listener);
                });
                lgQuery1.eventListeners[eventName] = [];
            }
        });
        return this;
    };
    lgQuery1.prototype.trigger = function(event, detail) {
        if (!this.firstElement) return this;
        var customEvent = new CustomEvent(event.split(".")[0], {
            detail: detail || null
        });
        this.firstElement.dispatchEvent(customEvent);
        return this;
    };
    // Does not support IE
    lgQuery1.prototype.load = function(url) {
        var _this = this;
        fetch(url).then(function(res) {
            return res.text();
        }).then(function(html) {
            _this.selector.innerHTML = html;
        });
        return this;
    };
    lgQuery1.prototype.html = function(html) {
        if (html === undefined) {
            if (!this.firstElement) return "";
            return this.firstElement.innerHTML;
        }
        this._each(function(el) {
            el.innerHTML = html;
        });
        return this;
    };
    lgQuery1.prototype.append = function(html) {
        this._each(function(el) {
            if (typeof html === "string") el.insertAdjacentHTML("beforeend", html);
            else el.appendChild(html);
        });
        return this;
    };
    lgQuery1.prototype.prepend = function(html) {
        this._each(function(el) {
            el.insertAdjacentHTML("afterbegin", html);
        });
        return this;
    };
    lgQuery1.prototype.remove = function() {
        this._each(function(el) {
            el.parentNode.removeChild(el);
        });
        return this;
    };
    lgQuery1.prototype.empty = function() {
        this._each(function(el) {
            el.innerHTML = "";
        });
        return this;
    };
    lgQuery1.prototype.scrollTop = function(scrollTop) {
        if (scrollTop !== undefined) {
            document.body.scrollTop = scrollTop;
            document.documentElement.scrollTop = scrollTop;
            return this;
        } else return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    };
    lgQuery1.prototype.scrollLeft = function(scrollLeft) {
        if (scrollLeft !== undefined) {
            document.body.scrollLeft = scrollLeft;
            document.documentElement.scrollLeft = scrollLeft;
            return this;
        } else return window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;
    };
    lgQuery1.prototype.offset = function() {
        if (!this.firstElement) return {
            left: 0,
            top: 0
        };
        var rect = this.firstElement.getBoundingClientRect();
        var bodyMarginLeft = $LG("body").style().marginLeft;
        // Minus body margin - https://stackoverflow.com/questions/30711548/is-getboundingclientrect-left-returning-a-wrong-value
        return {
            left: rect.left - parseFloat(bodyMarginLeft) + this.scrollLeft(),
            top: rect.top + this.scrollTop()
        };
    };
    lgQuery1.prototype.style = function() {
        if (!this.firstElement) return {};
        return this.firstElement.currentStyle || window.getComputedStyle(this.firstElement);
    };
    // Width without padding and border even if box-sizing is used.
    lgQuery1.prototype.width = function() {
        var style = this.style();
        return this.firstElement.clientWidth - parseFloat(style.paddingLeft) - parseFloat(style.paddingRight);
    };
    // Height without padding and border even if box-sizing is used.
    lgQuery1.prototype.height = function() {
        var style = this.style();
        return this.firstElement.clientHeight - parseFloat(style.paddingTop) - parseFloat(style.paddingBottom);
    };
    lgQuery1.eventListeners = {};
    return lgQuery1;
}();
function $LG(selector) {
    initLgPolyfills();
    return new lgQuery(selector);
}
var defaultDynamicOptions = [
    "src",
    "sources",
    "subHtml",
    "subHtmlUrl",
    "html",
    "video",
    "poster",
    "slideName",
    "responsive",
    "srcset",
    "sizes",
    "iframe",
    "downloadUrl",
    "download",
    "width",
    "facebookShareUrl",
    "tweetText",
    "iframeTitle",
    "twitterShareUrl",
    "pinterestShareUrl",
    "pinterestText",
    "fbHtml",
    "disqusIdentifier",
    "disqusUrl", 
];
// Convert html data-attribute to camalcase
function convertToData(attr) {
    // FInd a way for lgsize
    if (attr === "href") return "src";
    attr = attr.replace("data-", "");
    attr = attr.charAt(0).toLowerCase() + attr.slice(1);
    attr = attr.replace(/-([a-z])/g, function(g) {
        return g[1].toUpperCase();
    });
    return attr;
}
var utils = {
    /**
     * get possible width and height from the lgSize attribute. Used for ZoomFromOrigin option
     */ getSize: function(el, container, spacing, defaultLgSize) {
        if (spacing === void 0) spacing = 0;
        var LGel = $LG(el);
        var lgSize = LGel.attr("data-lg-size") || defaultLgSize;
        if (!lgSize) return;
        var isResponsiveSizes = lgSize.split(",");
        // if at-least two viewport sizes are available
        if (isResponsiveSizes[1]) {
            var wWidth = window.innerWidth;
            for(var i = 0; i < isResponsiveSizes.length; i++){
                var size_1 = isResponsiveSizes[i];
                var responsiveWidth = parseInt(size_1.split("-")[2], 10);
                if (responsiveWidth > wWidth) {
                    lgSize = size_1;
                    break;
                }
                // take last item as last option
                if (i === isResponsiveSizes.length - 1) lgSize = size_1;
            }
        }
        var size = lgSize.split("-");
        var width = parseInt(size[0], 10);
        var height = parseInt(size[1], 10);
        var cWidth = container.width();
        var cHeight = container.height() - spacing;
        var maxWidth = Math.min(cWidth, width);
        var maxHeight = Math.min(cHeight, height);
        var ratio = Math.min(maxWidth / width, maxHeight / height);
        return {
            width: width * ratio,
            height: height * ratio
        };
    },
    /**
     * @desc Get transform value based on the imageSize. Used for ZoomFromOrigin option
     * @param {jQuery Element}
     * @returns {String} Transform CSS string
     */ getTransform: function(el, container, top, bottom, imageSize) {
        if (!imageSize) return;
        var LGel = $LG(el).find("img").first();
        if (!LGel.get()) return;
        var containerRect = container.get().getBoundingClientRect();
        var wWidth = containerRect.width;
        // using innerWidth to include mobile safari bottom bar
        var wHeight = container.height() - (top + bottom);
        var elWidth = LGel.width();
        var elHeight = LGel.height();
        var elStyle = LGel.style();
        var x = (wWidth - elWidth) / 2 - LGel.offset().left + (parseFloat(elStyle.paddingLeft) || 0) + (parseFloat(elStyle.borderLeft) || 0) + $LG(window).scrollLeft() + containerRect.left;
        var y = (wHeight - elHeight) / 2 - LGel.offset().top + (parseFloat(elStyle.paddingTop) || 0) + (parseFloat(elStyle.borderTop) || 0) + $LG(window).scrollTop() + top;
        var scX = elWidth / imageSize.width;
        var scY = elHeight / imageSize.height;
        var transform = "translate3d(" + (x *= -1) + "px, " + (y *= -1) + "px, 0) scale3d(" + scX + ", " + scY + ", 1)";
        return transform;
    },
    getIframeMarkup: function(iframeWidth, iframeHeight, iframeMaxWidth, iframeMaxHeight, src, iframeTitle) {
        var title = iframeTitle ? 'title="' + iframeTitle + '"' : "";
        return '<div class="lg-video-cont lg-has-iframe" style="width:' + iframeWidth + "; max-width:" + iframeMaxWidth + "; height: " + iframeHeight + "; max-height:" + iframeMaxHeight + '">\n                    <iframe class="lg-object" frameborder="0" ' + title + ' src="' + src + '"  allowfullscreen="true"></iframe>\n                </div>';
    },
    getImgMarkup: function(index, src, altAttr, srcset, sizes, sources) {
        var srcsetAttr = srcset ? 'srcset="' + srcset + '"' : "";
        var sizesAttr = sizes ? 'sizes="' + sizes + '"' : "";
        var imgMarkup = "<img " + altAttr + " " + srcsetAttr + "  " + sizesAttr + ' class="lg-object lg-image" data-index="' + index + '" src="' + src + '" />';
        var sourceTag = "";
        if (sources) {
            var sourceObj = typeof sources === "string" ? JSON.parse(sources) : sources;
            sourceTag = sourceObj.map(function(source) {
                var attrs = "";
                Object.keys(source).forEach(function(key) {
                    // Do not remove the first space as it is required to separate the attributes
                    attrs += " " + key + '="' + source[key] + '"';
                });
                return "<source " + attrs + "></source>";
            });
        }
        return "" + sourceTag + imgMarkup;
    },
    // Get src from responsive src
    getResponsiveSrc: function(srcItms) {
        var rsWidth = [];
        var rsSrc = [];
        var src = "";
        for(var i = 0; i < srcItms.length; i++){
            var _src = srcItms[i].split(" ");
            // Manage empty space
            if (_src[0] === "") _src.splice(0, 1);
            rsSrc.push(_src[0]);
            rsWidth.push(_src[1]);
        }
        var wWidth = window.innerWidth;
        for(var j = 0; j < rsWidth.length; j++)if (parseInt(rsWidth[j], 10) > wWidth) {
            src = rsSrc[j];
            break;
        }
        return src;
    },
    isImageLoaded: function(img) {
        if (!img) return false;
        // During the onload event, IE correctly identifies any images that
        // weren’t downloaded as not complete. Others should too. Gecko-based
        // browsers act like NS4 in that they report this incorrectly.
        if (!img.complete) return false;
        // However, they do have two very useful properties: naturalWidth and
        // naturalHeight. These give the true size of the image. If it failed
        // to load, either of these should be zero.
        if (img.naturalWidth === 0) return false;
        // No other way of checking: assume it’s ok.
        return true;
    },
    getVideoPosterMarkup: function(_poster, dummyImg, videoContStyle, playVideoString, _isVideo) {
        var videoClass = "";
        if (_isVideo && _isVideo.youtube) videoClass = "lg-has-youtube";
        else if (_isVideo && _isVideo.vimeo) videoClass = "lg-has-vimeo";
        else videoClass = "lg-has-html5";
        return '<div class="lg-video-cont ' + videoClass + '" style="' + videoContStyle + '">\n                <div class="lg-video-play-button">\n                <svg\n                    viewBox="0 0 20 20"\n                    preserveAspectRatio="xMidYMid"\n                    focusable="false"\n                    aria-labelledby="' + playVideoString + '"\n                    role="img"\n                    class="lg-video-play-icon"\n                >\n                    <title>' + playVideoString + '</title>\n                    <polygon class="lg-video-play-icon-inner" points="1,0 20,10 1,20"></polygon>\n                </svg>\n                <svg class="lg-video-play-icon-bg" viewBox="0 0 50 50" focusable="false">\n                    <circle cx="50%" cy="50%" r="20"></circle></svg>\n                <svg class="lg-video-play-icon-circle" viewBox="0 0 50 50" focusable="false">\n                    <circle cx="50%" cy="50%" r="20"></circle>\n                </svg>\n            </div>\n            ' + (dummyImg || "") + '\n            <img class="lg-object lg-video-poster" src="' + _poster + '" />\n        </div>';
    },
    getFocusableElements: function(container) {
        var elements = container.querySelectorAll('a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])');
        var visibleElements = [].filter.call(elements, function(element) {
            var style = window.getComputedStyle(element);
            return style.display !== "none" && style.visibility !== "hidden";
        });
        return visibleElements;
    },
    /**
     * @desc Create dynamic elements array from gallery items when dynamic option is false
     * It helps to avoid frequent DOM interaction
     * and avoid multiple checks for dynamic elments
     *
     * @returns {Array} dynamicEl
     */ getDynamicOptions: function(items, extraProps, getCaptionFromTitleOrAlt, exThumbImage) {
        var dynamicElements = [];
        var availableDynamicOptions = __spreadArrays(defaultDynamicOptions, extraProps);
        [].forEach.call(items, function(item) {
            var dynamicEl = {};
            for(var i = 0; i < item.attributes.length; i++){
                var attr = item.attributes[i];
                if (attr.specified) {
                    var dynamicAttr = convertToData(attr.name);
                    var label = "";
                    if (availableDynamicOptions.indexOf(dynamicAttr) > -1) label = dynamicAttr;
                    if (label) dynamicEl[label] = attr.value;
                }
            }
            var currentItem = $LG(item);
            var alt = currentItem.find("img").first().attr("alt");
            var title = currentItem.attr("title");
            var thumb = exThumbImage ? currentItem.attr(exThumbImage) : currentItem.find("img").first().attr("src");
            dynamicEl.thumb = thumb;
            if (getCaptionFromTitleOrAlt && !dynamicEl.subHtml) dynamicEl.subHtml = title || alt || "";
            dynamicEl.alt = alt || title || "";
            dynamicElements.push(dynamicEl);
        });
        return dynamicElements;
    },
    isMobile: function() {
        return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    },
    /**
     * @desc Check the given src is video
     * @param {String} src
     * @return {Object} video type
     * Ex:{ youtube  :  ["//www.youtube.com/watch?v=c0asJgSyxcY", "c0asJgSyxcY"] }
     *
     * @todo - this information can be moved to dynamicEl to avoid frequent calls
     */ isVideo: function(src, isHTML5VIdeo, index) {
        if (!src) {
            if (isHTML5VIdeo) return {
                html5: true
            };
            else {
                console.error("lightGallery :- data-src is not provided on slide item " + (index + 1) + ". Please make sure the selector property is properly configured. More info - https://www.lightgalleryjs.com/demos/html-markup/");
                return;
            }
        }
        var youtube = src.match(/\/\/(?:www\.)?youtu(?:\.be|be\.com|be-nocookie\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)([\&|?][\S]*)*/i);
        var vimeo = src.match(/\/\/(?:www\.)?(?:player\.)?vimeo.com\/(?:video\/)?([0-9a-z\-_]+)(.*)?/i);
        var wistia = src.match(/https?:\/\/(.+)?(wistia\.com|wi\.st)\/(medias|embed)\/([0-9a-z\-_]+)(.*)/);
        if (youtube) return {
            youtube: youtube
        };
        else if (vimeo) return {
            vimeo: vimeo
        };
        else if (wistia) return {
            wistia: wistia
        };
    }
};
// @ref - https://stackoverflow.com/questions/3971841/how-to-resize-images-proportionally-keeping-the-aspect-ratio
// @ref - https://2ality.com/2017/04/setting-up-multi-platform-packages.html
// Unique id for each gallery
var lgId = 0;
var LightGallery = /** @class */ function() {
    function LightGallery1(element, options) {
        this.lgOpened = false;
        this.index = 0;
        // lightGallery modules
        this.plugins = [];
        // false when lightGallery load first slide content;
        this.lGalleryOn = false;
        // True when a slide animation is in progress
        this.lgBusy = false;
        this.currentItemsInDom = [];
        // Scroll top value before lightGallery is opened
        this.prevScrollTop = 0;
        this.bodyPaddingRight = 0;
        this.isDummyImageRemoved = false;
        this.dragOrSwipeEnabled = false;
        this.mediaContainerPosition = {
            top: 0,
            bottom: 0
        };
        if (!element) return this;
        lgId++;
        this.lgId = lgId;
        this.el = element;
        this.LGel = $LG(element);
        this.generateSettings(options);
        this.buildModules();
        // When using dynamic mode, ensure dynamicEl is an array
        if (this.settings.dynamic && this.settings.dynamicEl !== undefined && !Array.isArray(this.settings.dynamicEl)) throw "When using dynamic mode, you must also define dynamicEl as an Array.";
        this.galleryItems = this.getItems();
        this.normalizeSettings();
        // Gallery items
        this.init();
        this.validateLicense();
        return this;
    }
    LightGallery1.prototype.generateSettings = function(options) {
        // lightGallery settings
        this.settings = __assign(__assign({}, lightGalleryCoreSettings), options);
        if (this.settings.isMobile && typeof this.settings.isMobile === "function" ? this.settings.isMobile() : utils.isMobile()) {
            var mobileSettings = __assign(__assign({}, this.settings.mobileSettings), this.settings.mobileSettings);
            this.settings = __assign(__assign({}, this.settings), mobileSettings);
        }
    };
    LightGallery1.prototype.normalizeSettings = function() {
        if (this.settings.slideEndAnimation) this.settings.hideControlOnEnd = false;
        if (!this.settings.closable) this.settings.swipeToClose = false;
        // And reset it on close to get the correct value next time
        this.zoomFromOrigin = this.settings.zoomFromOrigin;
        // At the moment, Zoom from image doesn't support dynamic options
        // @todo add zoomFromOrigin support for dynamic images
        if (this.settings.dynamic) this.zoomFromOrigin = false;
        if (!this.settings.container) this.settings.container = document.body;
        // settings.preload should not be grater than $item.length
        this.settings.preload = Math.min(this.settings.preload, this.galleryItems.length);
    };
    LightGallery1.prototype.init = function() {
        var _this = this;
        this.addSlideVideoInfo(this.galleryItems);
        this.buildStructure();
        this.LGel.trigger(lGEvents.init, {
            instance: this
        });
        if (this.settings.keyPress) this.keyPress();
        setTimeout(function() {
            _this.enableDrag();
            _this.enableSwipe();
            _this.triggerPosterClick();
        }, 50);
        this.arrow();
        if (this.settings.mousewheel) this.mousewheel();
        if (!this.settings.dynamic) this.openGalleryOnItemClick();
    };
    LightGallery1.prototype.openGalleryOnItemClick = function() {
        var _this = this;
        var _loop_1 = function(index) {
            var element = this_1.items[index];
            var $element = $LG(element);
            // Using different namespace for click because click event should not unbind if selector is same object('this')
            // @todo manage all event listners - should have namespace that represent element
            var uuid = lgQuery.generateUUID();
            $element.attr("data-lg-id", uuid).on("click.lgcustom-item-" + uuid, function(e) {
                e.preventDefault();
                var currentItemIndex = _this.settings.index || index;
                _this.openGallery(currentItemIndex, element);
            });
        };
        var this_1 = this;
        // Using for loop instead of using bubbling as the items can be any html element.
        for(var index1 = 0; index1 < this.items.length; index1++)_loop_1(index1);
    };
    /**
     * Module constructor
     * Modules are build incrementally.
     * Gallery should be opened only once all the modules are initialized.
     * use moduleBuildTimeout to make sure this
     */ LightGallery1.prototype.buildModules = function() {
        var _this = this;
        this.settings.plugins.forEach(function(plugin) {
            _this.plugins.push(new plugin(_this, $LG));
        });
    };
    LightGallery1.prototype.validateLicense = function() {
        if (!this.settings.licenseKey) console.error("Please provide a valid license key");
        else if (this.settings.licenseKey === "0000-0000-000-0000") console.warn("lightGallery: " + this.settings.licenseKey + " license key is not valid for production use");
    };
    LightGallery1.prototype.getSlideItem = function(index) {
        return $LG(this.getSlideItemId(index));
    };
    LightGallery1.prototype.getSlideItemId = function(index) {
        return "#lg-item-" + this.lgId + "-" + index;
    };
    LightGallery1.prototype.getIdName = function(id) {
        return id + "-" + this.lgId;
    };
    LightGallery1.prototype.getElementById = function(id) {
        return $LG("#" + this.getIdName(id));
    };
    LightGallery1.prototype.manageSingleSlideClassName = function() {
        if (this.galleryItems.length < 2) this.outer.addClass("lg-single-item");
        else this.outer.removeClass("lg-single-item");
    };
    LightGallery1.prototype.buildStructure = function() {
        var _this = this;
        var container = this.$container && this.$container.get();
        if (container) return;
        var controls = "";
        var subHtmlCont = "";
        // Create controls
        if (this.settings.controls) controls = '<button type="button" id="' + this.getIdName("lg-prev") + '" aria-label="' + this.settings.strings["previousSlide"] + '" class="lg-prev lg-icon"> ' + this.settings.prevHtml + ' </button>\n                <button type="button" id="' + this.getIdName("lg-next") + '" aria-label="' + this.settings.strings["nextSlide"] + '" class="lg-next lg-icon"> ' + this.settings.nextHtml + " </button>";
        if (this.settings.appendSubHtmlTo !== ".lg-item") subHtmlCont = '<div class="lg-sub-html" role="status" aria-live="polite"></div>';
        var addClasses = "";
        if (this.settings.allowMediaOverlap) // Do not remove space before last single quote
        addClasses += "lg-media-overlap ";
        var ariaLabelledby = this.settings.ariaLabelledby ? 'aria-labelledby="' + this.settings.ariaLabelledby + '"' : "";
        var ariaDescribedby = this.settings.ariaDescribedby ? 'aria-describedby="' + this.settings.ariaDescribedby + '"' : "";
        var containerClassName = "lg-container " + this.settings.addClass + " " + (document.body !== this.settings.container ? "lg-inline" : "");
        var closeIcon = this.settings.closable && this.settings.showCloseIcon ? '<button type="button" aria-label="' + this.settings.strings["closeGallery"] + '" id="' + this.getIdName("lg-close") + '" class="lg-close lg-icon"></button>' : "";
        var maximizeIcon = this.settings.showMaximizeIcon ? '<button type="button" aria-label="' + this.settings.strings["toggleMaximize"] + '" id="' + this.getIdName("lg-maximize") + '" class="lg-maximize lg-icon"></button>' : "";
        var template = '\n        <div class="' + containerClassName + '" id="' + this.getIdName("lg-container") + '" tabindex="-1" aria-modal="true" ' + ariaLabelledby + " " + ariaDescribedby + ' role="dialog"\n        >\n            <div id="' + this.getIdName("lg-backdrop") + '" class="lg-backdrop"></div>\n\n            <div id="' + this.getIdName("lg-outer") + '" class="lg-outer lg-use-css3 lg-css3 lg-hide-items ' + addClasses + ' ">\n\n              <div id="' + this.getIdName("lg-content") + '" class="lg-content">\n                <div id="' + this.getIdName("lg-inner") + '" class="lg-inner">\n                </div>\n                ' + controls + '\n              </div>\n                <div id="' + this.getIdName("lg-toolbar") + '" class="lg-toolbar lg-group">\n                    ' + maximizeIcon + "\n                    " + closeIcon + "\n                    </div>\n                    " + (this.settings.appendSubHtmlTo === ".lg-outer" ? subHtmlCont : "") + '\n                <div id="' + this.getIdName("lg-components") + '" class="lg-components">\n                    ' + (this.settings.appendSubHtmlTo === ".lg-sub-html" ? subHtmlCont : "") + "\n                </div>\n            </div>\n        </div>\n        ";
        $LG(this.settings.container).append(template);
        if (document.body !== this.settings.container) $LG(this.settings.container).css("position", "relative");
        this.outer = this.getElementById("lg-outer");
        this.$lgComponents = this.getElementById("lg-components");
        this.$backdrop = this.getElementById("lg-backdrop");
        this.$container = this.getElementById("lg-container");
        this.$inner = this.getElementById("lg-inner");
        this.$content = this.getElementById("lg-content");
        this.$toolbar = this.getElementById("lg-toolbar");
        this.$backdrop.css("transition-duration", this.settings.backdropDuration + "ms");
        var outerClassNames = this.settings.mode + " ";
        this.manageSingleSlideClassName();
        if (this.settings.enableDrag) outerClassNames += "lg-grab ";
        this.outer.addClass(outerClassNames);
        this.$inner.css("transition-timing-function", this.settings.easing);
        this.$inner.css("transition-duration", this.settings.speed + "ms");
        if (this.settings.download) this.$toolbar.append('<a id="' + this.getIdName("lg-download") + '" target="_blank" rel="noopener" aria-label="' + this.settings.strings["download"] + '" download class="lg-download lg-icon"></a>');
        this.counter();
        $LG(window).on("resize.lg.global" + this.lgId + " orientationchange.lg.global" + this.lgId, function() {
            _this.refreshOnResize();
        });
        this.hideBars();
        this.manageCloseGallery();
        this.toggleMaximize();
        this.initModules();
    };
    LightGallery1.prototype.refreshOnResize = function() {
        if (this.lgOpened) {
            var currentGalleryItem = this.galleryItems[this.index];
            var __slideVideoInfo = currentGalleryItem.__slideVideoInfo;
            this.mediaContainerPosition = this.getMediaContainerPosition();
            var _a = this.mediaContainerPosition, top_1 = _a.top, bottom = _a.bottom;
            this.currentImageSize = utils.getSize(this.items[this.index], this.outer, top_1 + bottom, __slideVideoInfo && this.settings.videoMaxSize);
            if (__slideVideoInfo) this.resizeVideoSlide(this.index, this.currentImageSize);
            if (this.zoomFromOrigin && !this.isDummyImageRemoved) {
                var imgStyle = this.getDummyImgStyles(this.currentImageSize);
                this.outer.find(".lg-current .lg-dummy-img").first().attr("style", imgStyle);
            }
            this.LGel.trigger(lGEvents.containerResize);
        }
    };
    LightGallery1.prototype.resizeVideoSlide = function(index, imageSize) {
        var lgVideoStyle = this.getVideoContStyle(imageSize);
        var currentSlide = this.getSlideItem(index);
        currentSlide.find(".lg-video-cont").attr("style", lgVideoStyle);
    };
    /**
     * Update slides dynamically.
     * Add, edit or delete slides dynamically when lightGallery is opened.
     * Modify the current gallery items and pass it via updateSlides method
     * @note
     * - Do not mutate existing lightGallery items directly.
     * - Always pass new list of gallery items
     * - You need to take care of thumbnails outside the gallery if any
     * - user this method only if you want to update slides when the gallery is opened. Otherwise, use `refresh()` method.
     * @param items Gallery items
     * @param index After the update operation, which slide gallery should navigate to
     * @category lGPublicMethods
     * @example
     * const plugin = lightGallery();
     *
     * // Adding slides dynamically
     * let galleryItems = [
     * // Access existing lightGallery items
     * // galleryItems are automatically generated internally from the gallery HTML markup
     * // or directly from galleryItems when dynamic gallery is used
     *   ...plugin.galleryItems,
     *     ...[
     *       {
     *         src: 'img/img-1.png',
     *           thumb: 'img/thumb1.png',
     *         },
     *     ],
     *   ];
     *   plugin.updateSlides(
     *     galleryItems,
     *     plugin.index,
     *   );
     *
     *
     * // Remove slides dynamically
     * galleryItems = JSON.parse(
     *   JSON.stringify(updateSlideInstance.galleryItems),
     * );
     * galleryItems.shift();
     * updateSlideInstance.updateSlides(galleryItems, 1);
     * @see <a href="/demos/update-slides/">Demo</a>
     */ LightGallery1.prototype.updateSlides = function(items, index) {
        if (this.index > items.length - 1) this.index = items.length - 1;
        if (items.length === 1) this.index = 0;
        if (!items.length) {
            this.closeGallery();
            return;
        }
        var currentSrc = this.galleryItems[index].src;
        this.galleryItems = items;
        this.updateControls();
        this.$inner.empty();
        this.currentItemsInDom = [];
        var _index = 0;
        // Find the current index based on source value of the slide
        this.galleryItems.some(function(galleryItem, itemIndex) {
            if (galleryItem.src === currentSrc) {
                _index = itemIndex;
                return true;
            }
            return false;
        });
        this.currentItemsInDom = this.organizeSlideItems(_index, -1);
        this.loadContent(_index, true);
        this.getSlideItem(_index).addClass("lg-current");
        this.index = _index;
        this.updateCurrentCounter(_index);
        this.LGel.trigger(lGEvents.updateSlides);
    };
    // Get gallery items based on multiple conditions
    LightGallery1.prototype.getItems = function() {
        // Gallery items
        this.items = [];
        if (!this.settings.dynamic) {
            if (this.settings.selector === "this") this.items.push(this.el);
            else if (this.settings.selector) {
                if (typeof this.settings.selector === "string") {
                    if (this.settings.selectWithin) {
                        var selectWithin = $LG(this.settings.selectWithin);
                        this.items = selectWithin.find(this.settings.selector).get();
                    } else this.items = this.el.querySelectorAll(this.settings.selector);
                } else this.items = this.settings.selector;
            } else this.items = this.el.children;
            return utils.getDynamicOptions(this.items, this.settings.extraProps, this.settings.getCaptionFromTitleOrAlt, this.settings.exThumbImage);
        } else return this.settings.dynamicEl || [];
    };
    LightGallery1.prototype.shouldHideScrollbar = function() {
        return this.settings.hideScrollbar && document.body === this.settings.container;
    };
    LightGallery1.prototype.hideScrollbar = function() {
        if (!this.shouldHideScrollbar()) return;
        this.bodyPaddingRight = parseFloat($LG("body").style().paddingRight);
        var bodyRect = document.documentElement.getBoundingClientRect();
        var scrollbarWidth = window.innerWidth - bodyRect.width;
        $LG(document.body).css("padding-right", scrollbarWidth + this.bodyPaddingRight + "px");
        $LG(document.body).addClass("lg-overlay-open");
    };
    LightGallery1.prototype.resetScrollBar = function() {
        if (!this.shouldHideScrollbar()) return;
        $LG(document.body).css("padding-right", this.bodyPaddingRight + "px");
        $LG(document.body).removeClass("lg-overlay-open");
    };
    /**
     * Open lightGallery.
     * Open gallery with specific slide by passing index of the slide as parameter.
     * @category lGPublicMethods
     * @param {Number} index  - index of the slide
     * @param {HTMLElement} element - Which image lightGallery should zoom from
     *
     * @example
     * const $dynamicGallery = document.getElementById('dynamic-gallery-demo');
     * const dynamicGallery = lightGallery($dynamicGallery, {
     *     dynamic: true,
     *     dynamicEl: [
     *         {
     *              src: 'img/1.jpg',
     *              thumb: 'img/thumb-1.jpg',
     *              subHtml: '<h4>Image 1 title</h4><p>Image 1 descriptions.</p>',
     *         },
     *         ...
     *     ],
     * });
     * $dynamicGallery.addEventListener('click', function () {
     *     // Starts with third item.(Optional).
     *     // This is useful if you want use dynamic mode with
     *     // custom thumbnails (thumbnails outside gallery),
     *     dynamicGallery.openGallery(2);
     * });
     *
     */ LightGallery1.prototype.openGallery = function(index, element) {
        var _this = this;
        if (index === void 0) index = this.settings.index;
        // prevent accidental double execution
        if (this.lgOpened) return;
        this.lgOpened = true;
        this.outer.removeClass("lg-hide-items");
        this.hideScrollbar();
        // Add display block, but still has opacity 0
        this.$container.addClass("lg-show");
        var itemsToBeInsertedToDom = this.getItemsToBeInsertedToDom(index, index);
        this.currentItemsInDom = itemsToBeInsertedToDom;
        var items = "";
        itemsToBeInsertedToDom.forEach(function(item) {
            items = items + ('<div id="' + item + '" class="lg-item"></div>');
        });
        this.$inner.append(items);
        this.addHtml(index);
        var transform = "";
        this.mediaContainerPosition = this.getMediaContainerPosition();
        var _a = this.mediaContainerPosition, top = _a.top, bottom = _a.bottom;
        if (!this.settings.allowMediaOverlap) this.setMediaContainerPosition(top, bottom);
        var __slideVideoInfo = this.galleryItems[index].__slideVideoInfo;
        if (this.zoomFromOrigin && element) {
            this.currentImageSize = utils.getSize(element, this.outer, top + bottom, __slideVideoInfo && this.settings.videoMaxSize);
            transform = utils.getTransform(element, this.outer, top, bottom, this.currentImageSize);
        }
        if (!this.zoomFromOrigin || !transform) {
            this.outer.addClass(this.settings.startClass);
            this.getSlideItem(index).removeClass("lg-complete");
        }
        var timeout = this.settings.zoomFromOrigin ? 100 : this.settings.backdropDuration;
        setTimeout(function() {
            _this.outer.addClass("lg-components-open");
        }, timeout);
        this.index = index;
        this.LGel.trigger(lGEvents.beforeOpen);
        // add class lg-current to remove initial transition
        this.getSlideItem(index).addClass("lg-current");
        this.lGalleryOn = false;
        // Store the current scroll top value to scroll back after closing the gallery..
        this.prevScrollTop = $LG(window).scrollTop();
        setTimeout(function() {
            // Need to check both zoomFromOrigin and transform values as we need to set set the
            // default opening animation if user missed to add the lg-size attribute
            if (_this.zoomFromOrigin && transform) {
                var currentSlide_1 = _this.getSlideItem(index);
                currentSlide_1.css("transform", transform);
                setTimeout(function() {
                    currentSlide_1.addClass("lg-start-progress lg-start-end-progress").css("transition-duration", _this.settings.startAnimationDuration + "ms");
                    _this.outer.addClass("lg-zoom-from-image");
                });
                setTimeout(function() {
                    currentSlide_1.css("transform", "translate3d(0, 0, 0)");
                }, 100);
            }
            setTimeout(function() {
                _this.$backdrop.addClass("in");
                _this.$container.addClass("lg-show-in");
            }, 10);
            setTimeout(function() {
                if (_this.settings.trapFocus && document.body === _this.settings.container) _this.trapFocus();
            }, _this.settings.backdropDuration + 50);
            // lg-visible class resets gallery opacity to 1
            if (!_this.zoomFromOrigin || !transform) setTimeout(function() {
                _this.outer.addClass("lg-visible");
            }, _this.settings.backdropDuration);
            // initiate slide function
            _this.slide(index, false, false, false);
            _this.LGel.trigger(lGEvents.afterOpen);
        });
        if (document.body === this.settings.container) $LG("html").addClass("lg-on");
    };
    /**
     * Note - Changing the position of the media on every slide transition creates a flickering effect.
     * Therefore, The height of the caption is calculated dynamically, only once based on the first slide caption.
     * if you have dynamic captions for each media,
     * you can provide an appropriate height for the captions via allowMediaOverlap option
     */ LightGallery1.prototype.getMediaContainerPosition = function() {
        if (this.settings.allowMediaOverlap) return {
            top: 0,
            bottom: 0
        };
        var top = this.$toolbar.get().clientHeight || 0;
        var subHtml = this.outer.find(".lg-components .lg-sub-html").get();
        var captionHeight = this.settings.defaultCaptionHeight || subHtml && subHtml.clientHeight || 0;
        var thumbContainer = this.outer.find(".lg-thumb-outer").get();
        var thumbHeight = thumbContainer ? thumbContainer.clientHeight : 0;
        var bottom = thumbHeight + captionHeight;
        return {
            top: top,
            bottom: bottom
        };
    };
    LightGallery1.prototype.setMediaContainerPosition = function(top, bottom) {
        if (top === void 0) top = 0;
        if (bottom === void 0) bottom = 0;
        this.$content.css("top", top + "px").css("bottom", bottom + "px");
    };
    LightGallery1.prototype.hideBars = function() {
        var _this = this;
        // Hide controllers if mouse doesn't move for some period
        setTimeout(function() {
            _this.outer.removeClass("lg-hide-items");
            if (_this.settings.hideBarsDelay > 0) {
                _this.outer.on("mousemove.lg click.lg touchstart.lg", function() {
                    _this.outer.removeClass("lg-hide-items");
                    clearTimeout(_this.hideBarTimeout);
                    // Timeout will be cleared on each slide movement also
                    _this.hideBarTimeout = setTimeout(function() {
                        _this.outer.addClass("lg-hide-items");
                    }, _this.settings.hideBarsDelay);
                });
                _this.outer.trigger("mousemove.lg");
            }
        }, this.settings.showBarsAfter);
    };
    LightGallery1.prototype.initPictureFill = function($img) {
        if (this.settings.supportLegacyBrowser) try {
            picturefill({
                elements: [
                    $img.get()
                ]
            });
        } catch (e) {
            console.warn("lightGallery :- If you want srcset or picture tag to be supported for older browser please include picturefil javascript library in your document.");
        }
    };
    /**
     *  @desc Create image counter
     *  Ex: 1/10
     */ LightGallery1.prototype.counter = function() {
        if (this.settings.counter) {
            var counterHtml = '<div class="lg-counter" role="status" aria-live="polite">\n                <span id="' + this.getIdName("lg-counter-current") + '" class="lg-counter-current">' + (this.index + 1) + ' </span> /\n                <span id="' + this.getIdName("lg-counter-all") + '" class="lg-counter-all">' + this.galleryItems.length + " </span></div>";
            this.outer.find(this.settings.appendCounterTo).append(counterHtml);
        }
    };
    /**
     *  @desc add sub-html into the slide
     *  @param {Number} index - index of the slide
     */ LightGallery1.prototype.addHtml = function(index) {
        var subHtml;
        var subHtmlUrl;
        if (this.galleryItems[index].subHtmlUrl) subHtmlUrl = this.galleryItems[index].subHtmlUrl;
        else subHtml = this.galleryItems[index].subHtml;
        if (!subHtmlUrl) {
            if (subHtml) {
                // get first letter of sub-html
                // if first letter starts with . or # get the html form the jQuery object
                var fL = subHtml.substring(0, 1);
                if (fL === "." || fL === "#") {
                    if (this.settings.subHtmlSelectorRelative && !this.settings.dynamic) subHtml = $LG(this.items).eq(index).find(subHtml).first().html();
                    else subHtml = $LG(subHtml).first().html();
                }
            } else subHtml = "";
        }
        if (this.settings.appendSubHtmlTo !== ".lg-item") {
            if (subHtmlUrl) this.outer.find(".lg-sub-html").load(subHtmlUrl);
            else this.outer.find(".lg-sub-html").html(subHtml);
        } else {
            var currentSlide = $LG(this.getSlideItemId(index));
            if (subHtmlUrl) currentSlide.load(subHtmlUrl);
            else currentSlide.append('<div class="lg-sub-html">' + subHtml + "</div>");
        }
        // Add lg-empty-html class if title doesn't exist
        if (typeof subHtml !== "undefined" && subHtml !== null) {
            if (subHtml === "") this.outer.find(this.settings.appendSubHtmlTo).addClass("lg-empty-html");
            else this.outer.find(this.settings.appendSubHtmlTo).removeClass("lg-empty-html");
        }
        this.LGel.trigger(lGEvents.afterAppendSubHtml, {
            index: index
        });
    };
    /**
     *  @desc Preload slides
     *  @param {Number} index - index of the slide
     * @todo preload not working for the first slide, Also, should work for the first and last slide as well
     */ LightGallery1.prototype.preload = function(index) {
        for(var i = 1; i <= this.settings.preload; i++){
            if (i >= this.galleryItems.length - index) break;
            this.loadContent(index + i, false);
        }
        for(var j = 1; j <= this.settings.preload; j++){
            if (index - j < 0) break;
            this.loadContent(index - j, false);
        }
    };
    LightGallery1.prototype.getDummyImgStyles = function(imageSize) {
        if (!imageSize) return "";
        return "width:" + imageSize.width + "px;\n                margin-left: -" + imageSize.width / 2 + "px;\n                margin-top: -" + imageSize.height / 2 + "px;\n                height:" + imageSize.height + "px";
    };
    LightGallery1.prototype.getVideoContStyle = function(imageSize) {
        if (!imageSize) return "";
        return "width:" + imageSize.width + "px;\n                height:" + imageSize.height + "px";
    };
    LightGallery1.prototype.getDummyImageContent = function($currentSlide, index, alt) {
        var $currentItem;
        if (!this.settings.dynamic) $currentItem = $LG(this.items).eq(index);
        if ($currentItem) {
            var _dummyImgSrc = void 0;
            if (!this.settings.exThumbImage) _dummyImgSrc = $currentItem.find("img").first().attr("src");
            else _dummyImgSrc = $currentItem.attr(this.settings.exThumbImage);
            if (!_dummyImgSrc) return "";
            var imgStyle = this.getDummyImgStyles(this.currentImageSize);
            var dummyImgContent = "<img " + alt + ' style="' + imgStyle + '" class="lg-dummy-img" src="' + _dummyImgSrc + '" />';
            $currentSlide.addClass("lg-first-slide");
            this.outer.addClass("lg-first-slide-loading");
            return dummyImgContent;
        }
        return "";
    };
    LightGallery1.prototype.setImgMarkup = function(src, $currentSlide, index) {
        var currentGalleryItem = this.galleryItems[index];
        var alt = currentGalleryItem.alt, srcset = currentGalleryItem.srcset, sizes = currentGalleryItem.sizes, sources = currentGalleryItem.sources;
        // Use the thumbnail as dummy image which will be resized to actual image size and
        // displayed on top of actual image
        var imgContent = "";
        var altAttr = alt ? 'alt="' + alt + '"' : "";
        if (this.isFirstSlideWithZoomAnimation()) imgContent = this.getDummyImageContent($currentSlide, index, altAttr);
        else imgContent = utils.getImgMarkup(index, src, altAttr, srcset, sizes, sources);
        var imgMarkup = '<picture class="lg-img-wrap"> ' + imgContent + "</picture>";
        $currentSlide.prepend(imgMarkup);
    };
    LightGallery1.prototype.onSlideObjectLoad = function($slide, isHTML5VideoWithoutPoster, onLoad, onError) {
        var mediaObject = $slide.find(".lg-object").first();
        if (utils.isImageLoaded(mediaObject.get()) || isHTML5VideoWithoutPoster) onLoad();
        else {
            mediaObject.on("load.lg error.lg", function() {
                onLoad && onLoad();
            });
            mediaObject.on("error.lg", function() {
                onError && onError();
            });
        }
    };
    /**
     *
     * @param $el Current slide item
     * @param index
     * @param delay Delay is 0 except first time
     * @param speed Speed is same as delay, except it is 0 if gallery is opened via hash plugin
     * @param isFirstSlide
     */ LightGallery1.prototype.onLgObjectLoad = function(currentSlide, index, delay, speed, isFirstSlide, isHTML5VideoWithoutPoster) {
        var _this = this;
        this.onSlideObjectLoad(currentSlide, isHTML5VideoWithoutPoster, function() {
            _this.triggerSlideItemLoad(currentSlide, index, delay, speed, isFirstSlide);
        }, function() {
            currentSlide.addClass("lg-complete lg-complete_");
            currentSlide.html('<span class="lg-error-msg">Oops... Failed to load content...</span>');
        });
    };
    LightGallery1.prototype.triggerSlideItemLoad = function($currentSlide, index, delay, speed, isFirstSlide) {
        var _this = this;
        var currentGalleryItem = this.galleryItems[index];
        // Adding delay for video slides without poster for better performance and user experience
        // Videos should start playing once once the gallery is completely loaded
        var _speed = isFirstSlide && this.getSlideType(currentGalleryItem) === "video" && !currentGalleryItem.poster ? speed : 0;
        setTimeout(function() {
            $currentSlide.addClass("lg-complete lg-complete_");
            _this.LGel.trigger(lGEvents.slideItemLoad, {
                index: index,
                delay: delay || 0,
                isFirstSlide: isFirstSlide
            });
        }, _speed);
    };
    LightGallery1.prototype.isFirstSlideWithZoomAnimation = function() {
        return !!(!this.lGalleryOn && this.zoomFromOrigin && this.currentImageSize);
    };
    // Add video slideInfo
    LightGallery1.prototype.addSlideVideoInfo = function(items) {
        var _this = this;
        items.forEach(function(element, index) {
            element.__slideVideoInfo = utils.isVideo(element.src, !!element.video, index);
            if (element.__slideVideoInfo && _this.settings.loadYouTubePoster && !element.poster && element.__slideVideoInfo.youtube) element.poster = "//img.youtube.com/vi/" + element.__slideVideoInfo.youtube[1] + "/maxresdefault.jpg";
        });
    };
    /**
     *  Load slide content into slide.
     *  This is used to load content into slides that is not visible too
     *  @param {Number} index - index of the slide.
     *  @param {Boolean} rec - if true call loadcontent() function again.
     */ LightGallery1.prototype.loadContent = function(index, rec) {
        var _this = this;
        var currentGalleryItem = this.galleryItems[index];
        var $currentSlide = $LG(this.getSlideItemId(index));
        var poster = currentGalleryItem.poster, srcset = currentGalleryItem.srcset, sizes = currentGalleryItem.sizes, sources = currentGalleryItem.sources;
        var src = currentGalleryItem.src;
        var video = currentGalleryItem.video;
        var _html5Video = video && typeof video === "string" ? JSON.parse(video) : video;
        if (currentGalleryItem.responsive) {
            var srcDyItms = currentGalleryItem.responsive.split(",");
            src = utils.getResponsiveSrc(srcDyItms) || src;
        }
        var videoInfo = currentGalleryItem.__slideVideoInfo;
        var lgVideoStyle = "";
        var iframe = !!currentGalleryItem.iframe;
        var isFirstSlide = !this.lGalleryOn;
        // delay for adding complete class. it is 0 except first time.
        var delay = 0;
        if (isFirstSlide) {
            if (this.zoomFromOrigin && this.currentImageSize) delay = this.settings.startAnimationDuration + 10;
            else delay = this.settings.backdropDuration + 10;
        }
        if (!$currentSlide.hasClass("lg-loaded")) {
            if (videoInfo) {
                var _a = this.mediaContainerPosition, top_2 = _a.top, bottom = _a.bottom;
                var videoSize = utils.getSize(this.items[index], this.outer, top_2 + bottom, videoInfo && this.settings.videoMaxSize);
                lgVideoStyle = this.getVideoContStyle(videoSize);
            }
            if (iframe) {
                var markup = utils.getIframeMarkup(this.settings.iframeWidth, this.settings.iframeHeight, this.settings.iframeMaxWidth, this.settings.iframeMaxHeight, src, currentGalleryItem.iframeTitle);
                $currentSlide.prepend(markup);
            } else if (poster) {
                var dummyImg = "";
                var hasStartAnimation = isFirstSlide && this.zoomFromOrigin && this.currentImageSize;
                if (hasStartAnimation) dummyImg = this.getDummyImageContent($currentSlide, index, "");
                var markup = utils.getVideoPosterMarkup(poster, dummyImg || "", lgVideoStyle, this.settings.strings["playVideo"], videoInfo);
                $currentSlide.prepend(markup);
            } else if (videoInfo) {
                var markup = '<div class="lg-video-cont " style="' + lgVideoStyle + '"></div>';
                $currentSlide.prepend(markup);
            } else {
                this.setImgMarkup(src, $currentSlide, index);
                if (srcset || sources) {
                    var $img = $currentSlide.find(".lg-object");
                    this.initPictureFill($img);
                }
            }
            if (poster || videoInfo) this.LGel.trigger(lGEvents.hasVideo, {
                index: index,
                src: src,
                html5Video: _html5Video,
                hasPoster: !!poster
            });
            this.LGel.trigger(lGEvents.afterAppendSlide, {
                index: index
            });
            if (this.lGalleryOn && this.settings.appendSubHtmlTo === ".lg-item") this.addHtml(index);
        }
        // For first time add some delay for displaying the start animation.
        var _speed = 0;
        // Do not change the delay value because it is required for zoom plugin.
        // If gallery opened from direct url (hash) speed value should be 0
        if (delay && !$LG(document.body).hasClass("lg-from-hash")) _speed = delay;
        // Only for first slide and zoomFromOrigin is enabled
        if (this.isFirstSlideWithZoomAnimation()) {
            setTimeout(function() {
                $currentSlide.removeClass("lg-start-end-progress lg-start-progress").removeAttr("style");
            }, this.settings.startAnimationDuration + 100);
            if (!$currentSlide.hasClass("lg-loaded")) setTimeout(function() {
                if (_this.getSlideType(currentGalleryItem) === "image") {
                    var alt = currentGalleryItem.alt;
                    var altAttr = alt ? 'alt="' + alt + '"' : "";
                    $currentSlide.find(".lg-img-wrap").append(utils.getImgMarkup(index, src, altAttr, srcset, sizes, currentGalleryItem.sources));
                    if (srcset || sources) {
                        var $img = $currentSlide.find(".lg-object");
                        _this.initPictureFill($img);
                    }
                }
                if (_this.getSlideType(currentGalleryItem) === "image" || _this.getSlideType(currentGalleryItem) === "video" && poster) {
                    _this.onLgObjectLoad($currentSlide, index, delay, _speed, true, false);
                    // load remaining slides once the slide is completely loaded
                    _this.onSlideObjectLoad($currentSlide, !!(videoInfo && videoInfo.html5 && !poster), function() {
                        _this.loadContentOnFirstSlideLoad(index, $currentSlide, _speed);
                    }, function() {
                        _this.loadContentOnFirstSlideLoad(index, $currentSlide, _speed);
                    });
                }
            }, this.settings.startAnimationDuration + 100);
        }
        // SLide content has been added to dom
        $currentSlide.addClass("lg-loaded");
        if (!this.isFirstSlideWithZoomAnimation() || this.getSlideType(currentGalleryItem) === "video" && !poster) this.onLgObjectLoad($currentSlide, index, delay, _speed, isFirstSlide, !!(videoInfo && videoInfo.html5 && !poster));
        // When gallery is opened once content is loaded (second time) need to add lg-complete class for css styling
        if ((!this.zoomFromOrigin || !this.currentImageSize) && $currentSlide.hasClass("lg-complete_") && !this.lGalleryOn) setTimeout(function() {
            $currentSlide.addClass("lg-complete");
        }, this.settings.backdropDuration);
        // Content loaded
        // Need to set lGalleryOn before calling preload function
        this.lGalleryOn = true;
        if (rec === true) {
            if (!$currentSlide.hasClass("lg-complete_")) $currentSlide.find(".lg-object").first().on("load.lg error.lg", function() {
                _this.preload(index);
            });
            else this.preload(index);
        }
    };
    /**
     * @desc Remove dummy image content and load next slides
     * Called only for the first time if zoomFromOrigin animation is enabled
     * @param index
     * @param $currentSlide
     * @param speed
     */ LightGallery1.prototype.loadContentOnFirstSlideLoad = function(index, $currentSlide, speed) {
        var _this = this;
        setTimeout(function() {
            $currentSlide.find(".lg-dummy-img").remove();
            $currentSlide.removeClass("lg-first-slide");
            _this.outer.removeClass("lg-first-slide-loading");
            _this.isDummyImageRemoved = true;
            _this.preload(index);
        }, speed + 300);
    };
    LightGallery1.prototype.getItemsToBeInsertedToDom = function(index2, prevIndex, numberOfItems) {
        var _this = this;
        if (numberOfItems === void 0) numberOfItems = 0;
        var itemsToBeInsertedToDom = [];
        // Minimum 2 items should be there
        var possibleNumberOfItems = Math.max(numberOfItems, 3);
        possibleNumberOfItems = Math.min(possibleNumberOfItems, this.galleryItems.length);
        var prevIndexItem = "lg-item-" + this.lgId + "-" + prevIndex;
        if (this.galleryItems.length <= 3) {
            this.galleryItems.forEach(function(_element, index) {
                itemsToBeInsertedToDom.push("lg-item-" + _this.lgId + "-" + index);
            });
            return itemsToBeInsertedToDom;
        }
        if (index2 < (this.galleryItems.length - 1) / 2) {
            for(var idx = index2; idx > index2 - possibleNumberOfItems / 2 && idx >= 0; idx--)itemsToBeInsertedToDom.push("lg-item-" + this.lgId + "-" + idx);
            var numberOfExistingItems = itemsToBeInsertedToDom.length;
            for(var idx = 0; idx < possibleNumberOfItems - numberOfExistingItems; idx++)itemsToBeInsertedToDom.push("lg-item-" + this.lgId + "-" + (index2 + idx + 1));
        } else {
            for(var idx = index2; idx <= this.galleryItems.length - 1 && idx < index2 + possibleNumberOfItems / 2; idx++)itemsToBeInsertedToDom.push("lg-item-" + this.lgId + "-" + idx);
            var numberOfExistingItems = itemsToBeInsertedToDom.length;
            for(var idx = 0; idx < possibleNumberOfItems - numberOfExistingItems; idx++)itemsToBeInsertedToDom.push("lg-item-" + this.lgId + "-" + (index2 - idx - 1));
        }
        if (this.settings.loop) {
            if (index2 === this.galleryItems.length - 1) itemsToBeInsertedToDom.push("lg-item-" + this.lgId + "-" + 0);
            else if (index2 === 0) itemsToBeInsertedToDom.push("lg-item-" + this.lgId + "-" + (this.galleryItems.length - 1));
        }
        if (itemsToBeInsertedToDom.indexOf(prevIndexItem) === -1) itemsToBeInsertedToDom.push("lg-item-" + this.lgId + "-" + prevIndex);
        return itemsToBeInsertedToDom;
    };
    LightGallery1.prototype.organizeSlideItems = function(index, prevIndex) {
        var _this = this;
        var itemsToBeInsertedToDom = this.getItemsToBeInsertedToDom(index, prevIndex, this.settings.numberOfSlideItemsInDom);
        itemsToBeInsertedToDom.forEach(function(item) {
            if (_this.currentItemsInDom.indexOf(item) === -1) _this.$inner.append('<div id="' + item + '" class="lg-item"></div>');
        });
        this.currentItemsInDom.forEach(function(item) {
            if (itemsToBeInsertedToDom.indexOf(item) === -1) $LG("#" + item).remove();
        });
        return itemsToBeInsertedToDom;
    };
    /**
     * Get previous index of the slide
     */ LightGallery1.prototype.getPreviousSlideIndex = function() {
        var prevIndex = 0;
        try {
            var currentItemId = this.outer.find(".lg-current").first().attr("id");
            prevIndex = parseInt(currentItemId.split("-")[3]) || 0;
        } catch (error) {
            prevIndex = 0;
        }
        return prevIndex;
    };
    LightGallery1.prototype.setDownloadValue = function(index) {
        if (this.settings.download) {
            var currentGalleryItem = this.galleryItems[index];
            var hideDownloadBtn = currentGalleryItem.downloadUrl === false || currentGalleryItem.downloadUrl === "false";
            if (hideDownloadBtn) this.outer.addClass("lg-hide-download");
            else {
                var $download = this.getElementById("lg-download");
                this.outer.removeClass("lg-hide-download");
                $download.attr("href", currentGalleryItem.downloadUrl || currentGalleryItem.src);
                if (currentGalleryItem.download) $download.attr("download", currentGalleryItem.download);
            }
        }
    };
    LightGallery1.prototype.makeSlideAnimation = function(direction, currentSlideItem, previousSlideItem) {
        var _this = this;
        if (this.lGalleryOn) previousSlideItem.addClass("lg-slide-progress");
        setTimeout(function() {
            // remove all transitions
            _this.outer.addClass("lg-no-trans");
            _this.outer.find(".lg-item").removeClass("lg-prev-slide lg-next-slide");
            if (direction === "prev") {
                //prevslide
                currentSlideItem.addClass("lg-prev-slide");
                previousSlideItem.addClass("lg-next-slide");
            } else {
                // next slide
                currentSlideItem.addClass("lg-next-slide");
                previousSlideItem.addClass("lg-prev-slide");
            }
            // give 50 ms for browser to add/remove class
            setTimeout(function() {
                _this.outer.find(".lg-item").removeClass("lg-current");
                currentSlideItem.addClass("lg-current");
                // reset all transitions
                _this.outer.removeClass("lg-no-trans");
            }, 50);
        }, this.lGalleryOn ? this.settings.slideDelay : 0);
    };
    /**
     * Goto a specific slide.
     * @param {Number} index - index of the slide
     * @param {Boolean} fromTouch - true if slide function called via touch event or mouse drag
     * @param {Boolean} fromThumb - true if slide function called via thumbnail click
     * @param {String} direction - Direction of the slide(next/prev)
     * @category lGPublicMethods
     * @example
     *  const plugin = lightGallery();
     *  // to go to 3rd slide
     *  plugin.slide(2);
     *
     */ LightGallery1.prototype.slide = function(index, fromTouch, fromThumb, direction) {
        var _this = this;
        var prevIndex = this.getPreviousSlideIndex();
        this.currentItemsInDom = this.organizeSlideItems(index, prevIndex);
        // Prevent multiple call, Required for hsh plugin
        if (this.lGalleryOn && prevIndex === index) return;
        var numberOfGalleryItems = this.galleryItems.length;
        if (!this.lgBusy) {
            if (this.settings.counter) this.updateCurrentCounter(index);
            var currentSlideItem = this.getSlideItem(index);
            var previousSlideItem_1 = this.getSlideItem(prevIndex);
            var currentGalleryItem = this.galleryItems[index];
            var videoInfo = currentGalleryItem.__slideVideoInfo;
            this.outer.attr("data-lg-slide-type", this.getSlideType(currentGalleryItem));
            this.setDownloadValue(index);
            if (videoInfo) {
                var _a = this.mediaContainerPosition, top_3 = _a.top, bottom = _a.bottom;
                var videoSize = utils.getSize(this.items[index], this.outer, top_3 + bottom, videoInfo && this.settings.videoMaxSize);
                this.resizeVideoSlide(index, videoSize);
            }
            this.LGel.trigger(lGEvents.beforeSlide, {
                prevIndex: prevIndex,
                index: index,
                fromTouch: !!fromTouch,
                fromThumb: !!fromThumb
            });
            this.lgBusy = true;
            clearTimeout(this.hideBarTimeout);
            this.arrowDisable(index);
            if (!direction) {
                if (index < prevIndex) direction = "prev";
                else if (index > prevIndex) direction = "next";
            }
            if (!fromTouch) this.makeSlideAnimation(direction, currentSlideItem, previousSlideItem_1);
            else {
                this.outer.find(".lg-item").removeClass("lg-prev-slide lg-current lg-next-slide");
                var touchPrev = void 0;
                var touchNext = void 0;
                if (numberOfGalleryItems > 2) {
                    touchPrev = index - 1;
                    touchNext = index + 1;
                    if (index === 0 && prevIndex === numberOfGalleryItems - 1) {
                        // next slide
                        touchNext = 0;
                        touchPrev = numberOfGalleryItems - 1;
                    } else if (index === numberOfGalleryItems - 1 && prevIndex === 0) {
                        // prev slide
                        touchNext = 0;
                        touchPrev = numberOfGalleryItems - 1;
                    }
                } else {
                    touchPrev = 0;
                    touchNext = 1;
                }
                if (direction === "prev") this.getSlideItem(touchNext).addClass("lg-next-slide");
                else this.getSlideItem(touchPrev).addClass("lg-prev-slide");
                currentSlideItem.addClass("lg-current");
            }
            // Do not put load content in set timeout as it needs to load immediately when the gallery is opened
            if (!this.lGalleryOn) this.loadContent(index, true);
            else setTimeout(function() {
                _this.loadContent(index, true);
                // Add title if this.settings.appendSubHtmlTo === lg-sub-html
                if (_this.settings.appendSubHtmlTo !== ".lg-item") _this.addHtml(index);
            }, this.settings.speed + 50 + (fromTouch ? 0 : this.settings.slideDelay));
            setTimeout(function() {
                _this.lgBusy = false;
                previousSlideItem_1.removeClass("lg-slide-progress");
                _this.LGel.trigger(lGEvents.afterSlide, {
                    prevIndex: prevIndex,
                    index: index,
                    fromTouch: fromTouch,
                    fromThumb: fromThumb
                });
            }, (this.lGalleryOn ? this.settings.speed + 100 : 100) + (fromTouch ? 0 : this.settings.slideDelay));
        }
        this.index = index;
    };
    LightGallery1.prototype.updateCurrentCounter = function(index) {
        this.getElementById("lg-counter-current").html(index + 1 + "");
    };
    LightGallery1.prototype.updateCounterTotal = function() {
        this.getElementById("lg-counter-all").html(this.galleryItems.length + "");
    };
    LightGallery1.prototype.getSlideType = function(item) {
        if (item.__slideVideoInfo) return "video";
        else if (item.iframe) return "iframe";
        else return "image";
    };
    LightGallery1.prototype.touchMove = function(startCoords, endCoords, e) {
        var distanceX = endCoords.pageX - startCoords.pageX;
        var distanceY = endCoords.pageY - startCoords.pageY;
        var allowSwipe = false;
        if (this.swipeDirection) allowSwipe = true;
        else {
            if (Math.abs(distanceX) > 15) {
                this.swipeDirection = "horizontal";
                allowSwipe = true;
            } else if (Math.abs(distanceY) > 15) {
                this.swipeDirection = "vertical";
                allowSwipe = true;
            }
        }
        if (!allowSwipe) return;
        var $currentSlide = this.getSlideItem(this.index);
        if (this.swipeDirection === "horizontal") {
            e === null || e === void 0 || e.preventDefault();
            // reset opacity and transition duration
            this.outer.addClass("lg-dragging");
            // move current slide
            this.setTranslate($currentSlide, distanceX, 0);
            // move next and prev slide with current slide
            var width = $currentSlide.get().offsetWidth;
            var slideWidthAmount = width * 15 / 100;
            var gutter = slideWidthAmount - Math.abs(distanceX * 10 / 100);
            this.setTranslate(this.outer.find(".lg-prev-slide").first(), -width + distanceX - gutter, 0);
            this.setTranslate(this.outer.find(".lg-next-slide").first(), width + distanceX + gutter, 0);
        } else if (this.swipeDirection === "vertical") {
            if (this.settings.swipeToClose) {
                e === null || e === void 0 || e.preventDefault();
                this.$container.addClass("lg-dragging-vertical");
                var opacity = 1 - Math.abs(distanceY) / window.innerHeight;
                this.$backdrop.css("opacity", opacity);
                var scale = 1 - Math.abs(distanceY) / (window.innerWidth * 2);
                this.setTranslate($currentSlide, 0, distanceY, scale, scale);
                if (Math.abs(distanceY) > 100) this.outer.addClass("lg-hide-items").removeClass("lg-components-open");
            }
        }
    };
    LightGallery1.prototype.touchEnd = function(endCoords, startCoords, event) {
        var _this = this;
        var distance;
        // keep slide animation for any mode while dragg/swipe
        if (this.settings.mode !== "lg-slide") this.outer.addClass("lg-slide");
        // set transition duration
        setTimeout(function() {
            _this.$container.removeClass("lg-dragging-vertical");
            _this.outer.removeClass("lg-dragging lg-hide-items").addClass("lg-components-open");
            var triggerClick = true;
            if (_this.swipeDirection === "horizontal") {
                distance = endCoords.pageX - startCoords.pageX;
                var distanceAbs = Math.abs(endCoords.pageX - startCoords.pageX);
                if (distance < 0 && distanceAbs > _this.settings.swipeThreshold) {
                    _this.goToNextSlide(true);
                    triggerClick = false;
                } else if (distance > 0 && distanceAbs > _this.settings.swipeThreshold) {
                    _this.goToPrevSlide(true);
                    triggerClick = false;
                }
            } else if (_this.swipeDirection === "vertical") {
                distance = Math.abs(endCoords.pageY - startCoords.pageY);
                if (_this.settings.closable && _this.settings.swipeToClose && distance > 100) {
                    _this.closeGallery();
                    return;
                } else _this.$backdrop.css("opacity", 1);
            }
            _this.outer.find(".lg-item").removeAttr("style");
            if (triggerClick && Math.abs(endCoords.pageX - startCoords.pageX) < 5) {
                // Trigger click if distance is less than 5 pix
                var target = $LG(event.target);
                if (_this.isPosterElement(target)) _this.LGel.trigger(lGEvents.posterClick);
            }
            _this.swipeDirection = undefined;
        });
        // remove slide class once drag/swipe is completed if mode is not slide
        setTimeout(function() {
            if (!_this.outer.hasClass("lg-dragging") && _this.settings.mode !== "lg-slide") _this.outer.removeClass("lg-slide");
        }, this.settings.speed + 100);
    };
    LightGallery1.prototype.enableSwipe = function() {
        var _this = this;
        var startCoords = {};
        var endCoords = {};
        var isMoved = false;
        var isSwiping = false;
        if (this.settings.enableSwipe) {
            this.$inner.on("touchstart.lg", function(e) {
                _this.dragOrSwipeEnabled = true;
                var $item = _this.getSlideItem(_this.index);
                if (($LG(e.target).hasClass("lg-item") || $item.get().contains(e.target)) && !_this.outer.hasClass("lg-zoomed") && !_this.lgBusy && e.touches.length === 1) {
                    isSwiping = true;
                    _this.touchAction = "swipe";
                    _this.manageSwipeClass();
                    startCoords = {
                        pageX: e.touches[0].pageX,
                        pageY: e.touches[0].pageY
                    };
                }
            });
            this.$inner.on("touchmove.lg", function(e) {
                if (isSwiping && _this.touchAction === "swipe" && e.touches.length === 1) {
                    endCoords = {
                        pageX: e.touches[0].pageX,
                        pageY: e.touches[0].pageY
                    };
                    _this.touchMove(startCoords, endCoords, e);
                    isMoved = true;
                }
            });
            this.$inner.on("touchend.lg", function(event) {
                if (_this.touchAction === "swipe") {
                    if (isMoved) {
                        isMoved = false;
                        _this.touchEnd(endCoords, startCoords, event);
                    } else if (isSwiping) {
                        var target = $LG(event.target);
                        if (_this.isPosterElement(target)) _this.LGel.trigger(lGEvents.posterClick);
                    }
                    _this.touchAction = undefined;
                    isSwiping = false;
                }
            });
        }
    };
    LightGallery1.prototype.enableDrag = function() {
        var _this = this;
        var startCoords = {};
        var endCoords = {};
        var isDraging = false;
        var isMoved = false;
        if (this.settings.enableDrag) {
            this.outer.on("mousedown.lg", function(e) {
                _this.dragOrSwipeEnabled = true;
                var $item = _this.getSlideItem(_this.index);
                if ($LG(e.target).hasClass("lg-item") || $item.get().contains(e.target)) {
                    if (!_this.outer.hasClass("lg-zoomed") && !_this.lgBusy) {
                        e.preventDefault();
                        if (!_this.lgBusy) {
                            _this.manageSwipeClass();
                            startCoords = {
                                pageX: e.pageX,
                                pageY: e.pageY
                            };
                            isDraging = true;
                            // ** Fix for webkit cursor issue https://code.google.com/p/chromium/issues/detail?id=26723
                            _this.outer.get().scrollLeft += 1;
                            _this.outer.get().scrollLeft -= 1;
                            // *
                            _this.outer.removeClass("lg-grab").addClass("lg-grabbing");
                            _this.LGel.trigger(lGEvents.dragStart);
                        }
                    }
                }
            });
            $LG(window).on("mousemove.lg.global" + this.lgId, function(e) {
                if (isDraging && _this.lgOpened) {
                    isMoved = true;
                    endCoords = {
                        pageX: e.pageX,
                        pageY: e.pageY
                    };
                    _this.touchMove(startCoords, endCoords);
                    _this.LGel.trigger(lGEvents.dragMove);
                }
            });
            $LG(window).on("mouseup.lg.global" + this.lgId, function(event) {
                if (!_this.lgOpened) return;
                var target = $LG(event.target);
                if (isMoved) {
                    isMoved = false;
                    _this.touchEnd(endCoords, startCoords, event);
                    _this.LGel.trigger(lGEvents.dragEnd);
                } else if (_this.isPosterElement(target)) _this.LGel.trigger(lGEvents.posterClick);
                // Prevent execution on click
                if (isDraging) {
                    isDraging = false;
                    _this.outer.removeClass("lg-grabbing").addClass("lg-grab");
                }
            });
        }
    };
    LightGallery1.prototype.triggerPosterClick = function() {
        var _this = this;
        this.$inner.on("click.lg", function(event) {
            if (!_this.dragOrSwipeEnabled && _this.isPosterElement($LG(event.target))) _this.LGel.trigger(lGEvents.posterClick);
        });
    };
    LightGallery1.prototype.manageSwipeClass = function() {
        var _touchNext = this.index + 1;
        var _touchPrev = this.index - 1;
        if (this.settings.loop && this.galleryItems.length > 2) {
            if (this.index === 0) _touchPrev = this.galleryItems.length - 1;
            else if (this.index === this.galleryItems.length - 1) _touchNext = 0;
        }
        this.outer.find(".lg-item").removeClass("lg-next-slide lg-prev-slide");
        if (_touchPrev > -1) this.getSlideItem(_touchPrev).addClass("lg-prev-slide");
        this.getSlideItem(_touchNext).addClass("lg-next-slide");
    };
    /**
     * Go to next slide
     * @param {Boolean} fromTouch - true if slide function called via touch event
     * @category lGPublicMethods
     * @example
     *  const plugin = lightGallery();
     *  plugin.goToNextSlide();
     * @see <a href="/demos/methods/">Demo</a>
     */ LightGallery1.prototype.goToNextSlide = function(fromTouch) {
        var _this = this;
        var _loop = this.settings.loop;
        if (fromTouch && this.galleryItems.length < 3) _loop = false;
        if (!this.lgBusy) {
            if (this.index + 1 < this.galleryItems.length) {
                this.index++;
                this.LGel.trigger(lGEvents.beforeNextSlide, {
                    index: this.index
                });
                this.slide(this.index, !!fromTouch, false, "next");
            } else {
                if (_loop) {
                    this.index = 0;
                    this.LGel.trigger(lGEvents.beforeNextSlide, {
                        index: this.index
                    });
                    this.slide(this.index, !!fromTouch, false, "next");
                } else if (this.settings.slideEndAnimation && !fromTouch) {
                    this.outer.addClass("lg-right-end");
                    setTimeout(function() {
                        _this.outer.removeClass("lg-right-end");
                    }, 400);
                }
            }
        }
    };
    /**
     * Go to previous slides
     * @param {Boolean} fromTouch - true if slide function called via touch event
     * @category lGPublicMethods
     * @example
     *  const plugin = lightGallery({});
     *  plugin.goToPrevSlide();
     * @see <a href="/demos/methods/">Demo</a>
     *
     */ LightGallery1.prototype.goToPrevSlide = function(fromTouch) {
        var _this = this;
        var _loop = this.settings.loop;
        if (fromTouch && this.galleryItems.length < 3) _loop = false;
        if (!this.lgBusy) {
            if (this.index > 0) {
                this.index--;
                this.LGel.trigger(lGEvents.beforePrevSlide, {
                    index: this.index,
                    fromTouch: fromTouch
                });
                this.slide(this.index, !!fromTouch, false, "prev");
            } else {
                if (_loop) {
                    this.index = this.galleryItems.length - 1;
                    this.LGel.trigger(lGEvents.beforePrevSlide, {
                        index: this.index,
                        fromTouch: fromTouch
                    });
                    this.slide(this.index, !!fromTouch, false, "prev");
                } else if (this.settings.slideEndAnimation && !fromTouch) {
                    this.outer.addClass("lg-left-end");
                    setTimeout(function() {
                        _this.outer.removeClass("lg-left-end");
                    }, 400);
                }
            }
        }
    };
    LightGallery1.prototype.keyPress = function() {
        var _this = this;
        $LG(window).on("keydown.lg.global" + this.lgId, function(e) {
            if (_this.lgOpened && _this.settings.escKey === true && e.keyCode === 27) {
                e.preventDefault();
                if (_this.settings.allowMediaOverlap && _this.outer.hasClass("lg-can-toggle") && _this.outer.hasClass("lg-components-open")) _this.outer.removeClass("lg-components-open");
                else _this.closeGallery();
            }
            if (_this.lgOpened && _this.galleryItems.length > 1) {
                if (e.keyCode === 37) {
                    e.preventDefault();
                    _this.goToPrevSlide();
                }
                if (e.keyCode === 39) {
                    e.preventDefault();
                    _this.goToNextSlide();
                }
            }
        });
    };
    LightGallery1.prototype.arrow = function() {
        var _this = this;
        this.getElementById("lg-prev").on("click.lg", function() {
            _this.goToPrevSlide();
        });
        this.getElementById("lg-next").on("click.lg", function() {
            _this.goToNextSlide();
        });
    };
    LightGallery1.prototype.arrowDisable = function(index) {
        // Disable arrows if settings.hideControlOnEnd is true
        if (!this.settings.loop && this.settings.hideControlOnEnd) {
            var $prev = this.getElementById("lg-prev");
            var $next = this.getElementById("lg-next");
            if (index + 1 === this.galleryItems.length) $next.attr("disabled", "disabled").addClass("disabled");
            else $next.removeAttr("disabled").removeClass("disabled");
            if (index === 0) $prev.attr("disabled", "disabled").addClass("disabled");
            else $prev.removeAttr("disabled").removeClass("disabled");
        }
    };
    LightGallery1.prototype.setTranslate = function($el, xValue, yValue, scaleX, scaleY) {
        if (scaleX === void 0) scaleX = 1;
        if (scaleY === void 0) scaleY = 1;
        $el.css("transform", "translate3d(" + xValue + "px, " + yValue + "px, 0px) scale3d(" + scaleX + ", " + scaleY + ", 1)");
    };
    LightGallery1.prototype.mousewheel = function() {
        var _this = this;
        var lastCall = 0;
        this.outer.on("wheel.lg", function(e) {
            if (!e.deltaY || _this.galleryItems.length < 2) return;
            e.preventDefault();
            var now = new Date().getTime();
            if (now - lastCall < 1000) return;
            lastCall = now;
            if (e.deltaY > 0) _this.goToNextSlide();
            else if (e.deltaY < 0) _this.goToPrevSlide();
        });
    };
    LightGallery1.prototype.isSlideElement = function(target) {
        return target.hasClass("lg-outer") || target.hasClass("lg-item") || target.hasClass("lg-img-wrap");
    };
    LightGallery1.prototype.isPosterElement = function(target) {
        var playButton = this.getSlideItem(this.index).find(".lg-video-play-button").get();
        return target.hasClass("lg-video-poster") || target.hasClass("lg-video-play-button") || playButton && playButton.contains(target.get());
    };
    /**
     * Maximize minimize inline gallery.
     * @category lGPublicMethods
     */ LightGallery1.prototype.toggleMaximize = function() {
        var _this = this;
        this.getElementById("lg-maximize").on("click.lg", function() {
            _this.$container.toggleClass("lg-inline");
            _this.refreshOnResize();
        });
    };
    LightGallery1.prototype.invalidateItems = function() {
        for(var index = 0; index < this.items.length; index++){
            var element = this.items[index];
            var $element = $LG(element);
            $element.off("click.lgcustom-item-" + $element.attr("data-lg-id"));
        }
    };
    LightGallery1.prototype.trapFocus = function() {
        var _this = this;
        this.$container.get().focus({
            preventScroll: true
        });
        $LG(window).on("keydown.lg.global" + this.lgId, function(e) {
            if (!_this.lgOpened) return;
            var isTabPressed = e.key === "Tab" || e.keyCode === 9;
            if (!isTabPressed) return;
            var focusableEls = utils.getFocusableElements(_this.$container.get());
            var firstFocusableEl = focusableEls[0];
            var lastFocusableEl = focusableEls[focusableEls.length - 1];
            if (e.shiftKey) {
                if (document.activeElement === firstFocusableEl) {
                    lastFocusableEl.focus();
                    e.preventDefault();
                }
            } else if (document.activeElement === lastFocusableEl) {
                firstFocusableEl.focus();
                e.preventDefault();
            }
        });
    };
    LightGallery1.prototype.manageCloseGallery = function() {
        var _this = this;
        if (!this.settings.closable) return;
        var mousedown = false;
        this.getElementById("lg-close").on("click.lg", function() {
            _this.closeGallery();
        });
        if (this.settings.closeOnTap) {
            // If you drag the slide and release outside gallery gets close on chrome
            // for preventing this check mousedown and mouseup happened on .lg-item or lg-outer
            this.outer.on("mousedown.lg", function(e) {
                var target = $LG(e.target);
                if (_this.isSlideElement(target)) mousedown = true;
                else mousedown = false;
            });
            this.outer.on("mousemove.lg", function() {
                mousedown = false;
            });
            this.outer.on("mouseup.lg", function(e) {
                var target = $LG(e.target);
                if (_this.isSlideElement(target) && mousedown) {
                    if (!_this.outer.hasClass("lg-dragging")) _this.closeGallery();
                }
            });
        }
    };
    /**
     * Close lightGallery if it is opened.
     *
     * @description If closable is false in the settings, you need to pass true via closeGallery method to force close gallery
     * @return returns the estimated time to close gallery completely including the close animation duration
     * @category lGPublicMethods
     * @example
     *  const plugin = lightGallery();
     *  plugin.closeGallery();
     *
     */ LightGallery1.prototype.closeGallery = function(force) {
        var _this = this;
        if (!this.lgOpened || !this.settings.closable && !force) return 0;
        this.LGel.trigger(lGEvents.beforeClose);
        if (this.settings.resetScrollPosition && !this.settings.hideScrollbar) $LG(window).scrollTop(this.prevScrollTop);
        var currentItem = this.items[this.index];
        var transform;
        if (this.zoomFromOrigin && currentItem) {
            var _a = this.mediaContainerPosition, top_4 = _a.top, bottom = _a.bottom;
            var _b = this.galleryItems[this.index], __slideVideoInfo = _b.__slideVideoInfo, poster = _b.poster;
            var imageSize = utils.getSize(currentItem, this.outer, top_4 + bottom, __slideVideoInfo && poster && this.settings.videoMaxSize);
            transform = utils.getTransform(currentItem, this.outer, top_4, bottom, imageSize);
        }
        if (this.zoomFromOrigin && transform) {
            this.outer.addClass("lg-closing lg-zoom-from-image");
            this.getSlideItem(this.index).addClass("lg-start-end-progress").css("transition-duration", this.settings.startAnimationDuration + "ms").css("transform", transform);
        } else {
            this.outer.addClass("lg-hide-items");
            // lg-zoom-from-image is used for setting the opacity to 1 if zoomFromOrigin is true
            // If the closing item doesn't have the lg-size attribute, remove this class to avoid the closing css conflicts
            this.outer.removeClass("lg-zoom-from-image");
        }
        // Unbind all events added by lightGallery
        // @todo
        //this.$el.off('.lg.tm');
        this.destroyModules();
        this.lGalleryOn = false;
        this.isDummyImageRemoved = false;
        this.zoomFromOrigin = this.settings.zoomFromOrigin;
        clearTimeout(this.hideBarTimeout);
        this.hideBarTimeout = false;
        $LG("html").removeClass("lg-on");
        this.outer.removeClass("lg-visible lg-components-open");
        // Resetting opacity to 0 isd required as  vertical swipe to close function adds inline opacity.
        this.$backdrop.removeClass("in").css("opacity", 0);
        var removeTimeout = this.zoomFromOrigin && transform ? Math.max(this.settings.startAnimationDuration, this.settings.backdropDuration) : this.settings.backdropDuration;
        this.$container.removeClass("lg-show-in");
        // Once the closign animation is completed and gallery is invisible
        setTimeout(function() {
            if (_this.zoomFromOrigin && transform) _this.outer.removeClass("lg-zoom-from-image");
            _this.$container.removeClass("lg-show");
            // Reset scrollbar
            _this.resetScrollBar();
            // Need to remove inline opacity as it is used in the stylesheet as well
            _this.$backdrop.removeAttr("style").css("transition-duration", _this.settings.backdropDuration + "ms");
            _this.outer.removeClass("lg-closing " + _this.settings.startClass);
            _this.getSlideItem(_this.index).removeClass("lg-start-end-progress");
            _this.$inner.empty();
            if (_this.lgOpened) _this.LGel.trigger(lGEvents.afterClose, {
                instance: _this
            });
            if (_this.$container.get()) _this.$container.get().blur();
            _this.lgOpened = false;
        }, removeTimeout + 100);
        return removeTimeout + 100;
    };
    LightGallery1.prototype.initModules = function() {
        this.plugins.forEach(function(module) {
            try {
                module.init();
            } catch (err) {
                console.warn("lightGallery:- make sure lightGallery module is properly initiated");
            }
        });
    };
    LightGallery1.prototype.destroyModules = function(destroy) {
        this.plugins.forEach(function(module) {
            try {
                if (destroy) module.destroy();
                else module.closeGallery && module.closeGallery();
            } catch (err) {
                console.warn("lightGallery:- make sure lightGallery module is properly destroyed");
            }
        });
    };
    /**
     * Refresh lightGallery with new set of children.
     *
     * @description This is useful to update the gallery when the child elements are changed without calling destroy method.
     *
     * If you are using dynamic mode, you can pass the modified array of dynamicEl as the first parameter to refresh the dynamic gallery
     * @see <a href="/demos/dynamic-mode/">Demo</a>
     * @category lGPublicMethods
     * @example
     *  const plugin = lightGallery();
     *  // Delete or add children, then call
     *  plugin.refresh();
     *
     */ LightGallery1.prototype.refresh = function(galleryItems) {
        if (!this.settings.dynamic) this.invalidateItems();
        if (galleryItems) this.galleryItems = galleryItems;
        else this.galleryItems = this.getItems();
        this.updateControls();
        this.openGalleryOnItemClick();
        this.LGel.trigger(lGEvents.updateSlides);
    };
    LightGallery1.prototype.updateControls = function() {
        this.addSlideVideoInfo(this.galleryItems);
        this.updateCounterTotal();
        this.manageSingleSlideClassName();
    };
    LightGallery1.prototype.destroyGallery = function() {
        this.destroyModules(true);
        if (!this.settings.dynamic) this.invalidateItems();
        $LG(window).off(".lg.global" + this.lgId);
        this.LGel.off(".lg");
        this.$container.remove();
    };
    /**
     * Destroy lightGallery.
     * Destroy lightGallery and its plugin instances completely
     *
     * @description This method also calls CloseGallery function internally. Returns the time takes to completely close and destroy the instance.
     * In case if you want to re-initialize lightGallery right after destroying it, initialize it only once the destroy process is completed.
     * You can use refresh method most of the times.
     * @category lGPublicMethods
     * @example
     *  const plugin = lightGallery();
     *  plugin.destroy();
     *
     */ LightGallery1.prototype.destroy = function() {
        var closeTimeout = this.closeGallery(true);
        if (closeTimeout) setTimeout(this.destroyGallery.bind(this), closeTimeout);
        else this.destroyGallery();
        return closeTimeout;
    };
    return LightGallery1;
}();
function lightGallery(el, options) {
    return new LightGallery(el, options);
}
exports.default = lightGallery;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"e554u":[function(require,module,exports) {
/**
 * lightgallery | 2.7.1 | January 11th 2023
 * http://www.lightgalleryjs.com/
 * Copyright (c) 2020 Sachin Neravath;
 * @license GPLv3
 */ !function(t, o) {
    module.exports = o();
}(this, function() {
    "use strict";
    var t1 = function() {
        return (t1 = Object.assign || function(t) {
            for(var o, e = 1, s = arguments.length; e < s; e++)for(var r in o = arguments[e])Object.prototype.hasOwnProperty.call(o, r) && (t[r] = o[r]);
            return t;
        }).apply(this, arguments);
    }, o1 = "lgSlideItemLoad", e1 = "lgBeforeSlide", s1 = "lgAfterSlide", r1 = "lgDragStart", i = "lgDragEnd", a = "lgAutoplay", l = "lgAutoplayStart", n = "lgAutoplayStop", u = {
        autoplay: !0,
        slideShowAutoplay: !1,
        slideShowInterval: 5e3,
        progressBar: !0,
        forceSlideShowAutoplay: !1,
        autoplayControls: !0,
        appendAutoplayControlsTo: ".lg-toolbar",
        autoplayPluginStrings: {
            toggleAutoplay: "Toggle Autoplay"
        }
    };
    return function() {
        function p(o) {
            return this.core = o, this.settings = t1(t1({}, u), this.core.settings), this;
        }
        return p.prototype.init = function() {
            var t = this;
            this.settings.autoplay && (this.interval = !1, this.fromAuto = !0, this.pausedOnTouchDrag = !1, this.pausedOnSlideChange = !1, this.settings.autoplayControls && this.controls(), this.settings.progressBar && this.core.outer.append('<div class="lg-progress-bar"><div class="lg-progress"></div></div>'), this.settings.slideShowAutoplay && this.core.LGel.once(o1 + ".autoplay", function() {
                t.startAutoPlay();
            }), this.core.LGel.on(r1 + ".autoplay touchstart.lg.autoplay", function() {
                t.interval && (t.stopAutoPlay(), t.pausedOnTouchDrag = !0);
            }), this.core.LGel.on(i + ".autoplay touchend.lg.autoplay", function() {
                !t.interval && t.pausedOnTouchDrag && (t.startAutoPlay(), t.pausedOnTouchDrag = !1);
            }), this.core.LGel.on(e1 + ".autoplay", function() {
                t.showProgressBar(), !t.fromAuto && t.interval ? (t.stopAutoPlay(), t.pausedOnSlideChange = !0) : t.pausedOnSlideChange = !1, t.fromAuto = !1;
            }), this.core.LGel.on(s1 + ".autoplay", function() {
                t.pausedOnSlideChange && !t.interval && t.settings.forceSlideShowAutoplay && (t.startAutoPlay(), t.pausedOnSlideChange = !1);
            }), this.showProgressBar());
        }, p.prototype.showProgressBar = function() {
            var t = this;
            if (this.settings.progressBar && this.fromAuto) {
                var o = this.core.outer.find(".lg-progress-bar"), e = this.core.outer.find(".lg-progress");
                this.interval && (e.removeAttr("style"), o.removeClass("lg-start"), setTimeout(function() {
                    e.css("transition", "width " + (t.core.settings.speed + t.settings.slideShowInterval) + "ms ease 0s"), o.addClass("lg-start");
                }, 20));
            }
        }, p.prototype.controls = function() {
            var t = this, o = '<button aria-label="' + this.settings.autoplayPluginStrings.toggleAutoplay + '" type="button" class="lg-autoplay-button lg-icon"></button>';
            this.core.outer.find(this.settings.appendAutoplayControlsTo).append(o), this.core.outer.find(".lg-autoplay-button").first().on("click.lg.autoplay", function() {
                t.core.outer.hasClass("lg-show-autoplay") ? t.stopAutoPlay() : t.interval || t.startAutoPlay();
            });
        }, p.prototype.startAutoPlay = function() {
            var t = this;
            this.core.outer.find(".lg-progress").css("transition", "width " + (this.core.settings.speed + this.settings.slideShowInterval) + "ms ease 0s"), this.core.outer.addClass("lg-show-autoplay"), this.core.outer.find(".lg-progress-bar").addClass("lg-start"), this.core.LGel.trigger(l, {
                index: this.core.index
            }), this.interval = setInterval(function() {
                t.core.index + 1 < t.core.galleryItems.length ? t.core.index++ : t.core.index = 0, t.core.LGel.trigger(a, {
                    index: t.core.index
                }), t.fromAuto = !0, t.core.slide(t.core.index, !1, !1, "next");
            }, this.core.settings.speed + this.settings.slideShowInterval);
        }, p.prototype.stopAutoPlay = function() {
            this.interval && (this.core.LGel.trigger(n, {
                index: this.core.index
            }), this.core.outer.find(".lg-progress").removeAttr("style"), this.core.outer.removeClass("lg-show-autoplay"), this.core.outer.find(".lg-progress-bar").removeClass("lg-start")), clearInterval(this.interval), this.interval = !1;
        }, p.prototype.closeGallery = function() {
            this.stopAutoPlay();
        }, p.prototype.destroy = function() {
            this.settings.autoplay && this.core.outer.find(".lg-progress-bar").remove(), this.core.LGel.off(".lg.autoplay"), this.core.LGel.off(".autoplay");
        }, p;
    }();
});

},{}],"jSejr":[function(require,module,exports) {
/**
 * lightgallery | 2.7.1 | January 11th 2023
 * http://www.lightgalleryjs.com/
 * Copyright (c) 2020 Sachin Neravath;
 * @license GPLv3
 */ !function(t, e) {
    module.exports = e();
}(this, function() {
    "use strict";
    var t1 = function() {
        return (t1 = Object.assign || function(t) {
            for(var e, i = 1, s = arguments.length; i < s; i++)for(var h in e = arguments[i])Object.prototype.hasOwnProperty.call(e, h) && (t[h] = e[h]);
            return t;
        }).apply(this, arguments);
    }, e1 = {
        thumbnail: !0,
        animateThumb: !0,
        currentPagerPosition: "middle",
        alignThumbnails: "middle",
        thumbWidth: 100,
        thumbHeight: "80px",
        thumbMargin: 5,
        appendThumbnailsTo: ".lg-components",
        toggleThumb: !1,
        enableThumbDrag: !0,
        enableThumbSwipe: !0,
        thumbnailSwipeThreshold: 10,
        loadYouTubeThumbnail: !0,
        youTubeThumbSize: 1,
        thumbnailPluginStrings: {
            toggleThumbnails: "Toggle thumbnails"
        }
    }, i1 = "lgContainerResize", s1 = "lgUpdateSlides", h1 = "lgBeforeOpen", n = "lgBeforeSlide";
    return function() {
        function o(t, e) {
            return this.thumbOuterWidth = 0, this.thumbTotalWidth = 0, this.translateX = 0, this.thumbClickable = !1, this.core = t, this.$LG = e, this;
        }
        return o.prototype.init = function() {
            this.settings = t1(t1({}, e1), this.core.settings), this.thumbOuterWidth = 0, this.thumbTotalWidth = this.core.galleryItems.length * (this.settings.thumbWidth + this.settings.thumbMargin), this.translateX = 0, this.setAnimateThumbStyles(), this.core.settings.allowMediaOverlap || (this.settings.toggleThumb = !1), this.settings.thumbnail && (this.build(), this.settings.animateThumb ? (this.settings.enableThumbDrag && this.enableThumbDrag(), this.settings.enableThumbSwipe && this.enableThumbSwipe(), this.thumbClickable = !1) : this.thumbClickable = !0, this.toggleThumbBar(), this.thumbKeyPress());
        }, o.prototype.build = function() {
            var t = this;
            this.setThumbMarkup(), this.manageActiveClassOnSlideChange(), this.$lgThumb.first().on("click.lg touchend.lg", function(e2) {
                var i = t.$LG(e2.target);
                i.hasAttribute("data-lg-item-id") && setTimeout(function() {
                    if (t.thumbClickable && !t.core.lgBusy) {
                        var e = parseInt(i.attr("data-lg-item-id"));
                        t.core.slide(e, !1, !0, !1);
                    }
                }, 50);
            }), this.core.LGel.on(n + ".thumb", function(e) {
                var i = e.detail.index;
                t.animateThumb(i);
            }), this.core.LGel.on(h1 + ".thumb", function() {
                t.thumbOuterWidth = t.core.outer.get().offsetWidth;
            }), this.core.LGel.on(s1 + ".thumb", function() {
                t.rebuildThumbnails();
            }), this.core.LGel.on(i1 + ".thumb", function() {
                t.core.lgOpened && setTimeout(function() {
                    t.thumbOuterWidth = t.core.outer.get().offsetWidth, t.animateThumb(t.core.index), t.thumbOuterWidth = t.core.outer.get().offsetWidth;
                }, 50);
            });
        }, o.prototype.setThumbMarkup = function() {
            var t = "lg-thumb-outer ";
            this.settings.alignThumbnails && (t += "lg-thumb-align-" + this.settings.alignThumbnails);
            var e = '<div class="' + t + '">\n        <div class="lg-thumb lg-group">\n        </div>\n        </div>';
            this.core.outer.addClass("lg-has-thumb"), ".lg-components" === this.settings.appendThumbnailsTo ? this.core.$lgComponents.append(e) : this.core.outer.append(e), this.$thumbOuter = this.core.outer.find(".lg-thumb-outer").first(), this.$lgThumb = this.core.outer.find(".lg-thumb").first(), this.settings.animateThumb && this.core.outer.find(".lg-thumb").css("transition-duration", this.core.settings.speed + "ms").css("width", this.thumbTotalWidth + "px").css("position", "relative"), this.setThumbItemHtml(this.core.galleryItems);
        }, o.prototype.enableThumbDrag = function() {
            var t = this, e = {
                cords: {
                    startX: 0,
                    endX: 0
                },
                isMoved: !1,
                newTranslateX: 0,
                startTime: new Date,
                endTime: new Date,
                touchMoveTime: 0
            }, i = !1;
            this.$thumbOuter.addClass("lg-grab"), this.core.outer.find(".lg-thumb").first().on("mousedown.lg.thumb", function(s) {
                t.thumbTotalWidth > t.thumbOuterWidth && (s.preventDefault(), e.cords.startX = s.pageX, e.startTime = new Date, t.thumbClickable = !1, i = !0, t.core.outer.get().scrollLeft += 1, t.core.outer.get().scrollLeft -= 1, t.$thumbOuter.removeClass("lg-grab").addClass("lg-grabbing"));
            }), this.$LG(window).on("mousemove.lg.thumb.global" + this.core.lgId, function(s) {
                t.core.lgOpened && i && (e.cords.endX = s.pageX, e = t.onThumbTouchMove(e));
            }), this.$LG(window).on("mouseup.lg.thumb.global" + this.core.lgId, function() {
                t.core.lgOpened && (e.isMoved ? e = t.onThumbTouchEnd(e) : t.thumbClickable = !0, i && (i = !1, t.$thumbOuter.removeClass("lg-grabbing").addClass("lg-grab")));
            });
        }, o.prototype.enableThumbSwipe = function() {
            var t = this, e = {
                cords: {
                    startX: 0,
                    endX: 0
                },
                isMoved: !1,
                newTranslateX: 0,
                startTime: new Date,
                endTime: new Date,
                touchMoveTime: 0
            };
            this.$lgThumb.on("touchstart.lg", function(i) {
                t.thumbTotalWidth > t.thumbOuterWidth && (i.preventDefault(), e.cords.startX = i.targetTouches[0].pageX, t.thumbClickable = !1, e.startTime = new Date);
            }), this.$lgThumb.on("touchmove.lg", function(i) {
                t.thumbTotalWidth > t.thumbOuterWidth && (i.preventDefault(), e.cords.endX = i.targetTouches[0].pageX, e = t.onThumbTouchMove(e));
            }), this.$lgThumb.on("touchend.lg", function() {
                e.isMoved ? e = t.onThumbTouchEnd(e) : t.thumbClickable = !0;
            });
        }, o.prototype.rebuildThumbnails = function() {
            var t = this;
            this.$thumbOuter.addClass("lg-rebuilding-thumbnails"), setTimeout(function() {
                t.thumbTotalWidth = t.core.galleryItems.length * (t.settings.thumbWidth + t.settings.thumbMargin), t.$lgThumb.css("width", t.thumbTotalWidth + "px"), t.$lgThumb.empty(), t.setThumbItemHtml(t.core.galleryItems), t.animateThumb(t.core.index);
            }, 50), setTimeout(function() {
                t.$thumbOuter.removeClass("lg-rebuilding-thumbnails");
            }, 200);
        }, o.prototype.setTranslate = function(t) {
            this.$lgThumb.css("transform", "translate3d(-" + t + "px, 0px, 0px)");
        }, o.prototype.getPossibleTransformX = function(t) {
            return t > this.thumbTotalWidth - this.thumbOuterWidth && (t = this.thumbTotalWidth - this.thumbOuterWidth), t < 0 && (t = 0), t;
        }, o.prototype.animateThumb = function(t) {
            if (this.$lgThumb.css("transition-duration", this.core.settings.speed + "ms"), this.settings.animateThumb) {
                var e = 0;
                switch(this.settings.currentPagerPosition){
                    case "left":
                        e = 0;
                        break;
                    case "middle":
                        e = this.thumbOuterWidth / 2 - this.settings.thumbWidth / 2;
                        break;
                    case "right":
                        e = this.thumbOuterWidth - this.settings.thumbWidth;
                }
                this.translateX = (this.settings.thumbWidth + this.settings.thumbMargin) * t - 1 - e, this.translateX > this.thumbTotalWidth - this.thumbOuterWidth && (this.translateX = this.thumbTotalWidth - this.thumbOuterWidth), this.translateX < 0 && (this.translateX = 0), this.setTranslate(this.translateX);
            }
        }, o.prototype.onThumbTouchMove = function(t) {
            return t.newTranslateX = this.translateX, t.isMoved = !0, t.touchMoveTime = (new Date).valueOf(), t.newTranslateX -= t.cords.endX - t.cords.startX, t.newTranslateX = this.getPossibleTransformX(t.newTranslateX), this.setTranslate(t.newTranslateX), this.$thumbOuter.addClass("lg-dragging"), t;
        }, o.prototype.onThumbTouchEnd = function(t) {
            t.isMoved = !1, t.endTime = new Date, this.$thumbOuter.removeClass("lg-dragging");
            var e = t.endTime.valueOf() - t.startTime.valueOf(), i = t.cords.endX - t.cords.startX, s = Math.abs(i) / e;
            return s > .15 && t.endTime.valueOf() - t.touchMoveTime < 30 ? ((s += 1) > 2 && (s += 1), s += s * (Math.abs(i) / this.thumbOuterWidth), this.$lgThumb.css("transition-duration", Math.min(s - 1, 2) + "settings"), i *= s, this.translateX = this.getPossibleTransformX(this.translateX - i), this.setTranslate(this.translateX)) : this.translateX = t.newTranslateX, Math.abs(t.cords.endX - t.cords.startX) < this.settings.thumbnailSwipeThreshold && (this.thumbClickable = !0), t;
        }, o.prototype.getThumbHtml = function(t, e) {
            var i, s = this.core.galleryItems[e].__slideVideoInfo || {};
            return i = s.youtube && this.settings.loadYouTubeThumbnail ? "//img.youtube.com/vi/" + s.youtube[1] + "/" + this.settings.youTubeThumbSize + ".jpg" : t, '<div data-lg-item-id="' + e + '" class="lg-thumb-item ' + (e === this.core.index ? " active" : "") + '" \n        style="width:' + this.settings.thumbWidth + "px; height: " + this.settings.thumbHeight + ";\n            margin-right: " + this.settings.thumbMargin + 'px;">\n            <img data-lg-item-id="' + e + '" src="' + i + '" />\n        </div>';
        }, o.prototype.getThumbItemHtml = function(t) {
            for(var e = "", i = 0; i < t.length; i++)e += this.getThumbHtml(t[i].thumb, i);
            return e;
        }, o.prototype.setThumbItemHtml = function(t) {
            var e = this.getThumbItemHtml(t);
            this.$lgThumb.html(e);
        }, o.prototype.setAnimateThumbStyles = function() {
            this.settings.animateThumb && this.core.outer.addClass("lg-animate-thumb");
        }, o.prototype.manageActiveClassOnSlideChange = function() {
            var t = this;
            this.core.LGel.on(n + ".thumb", function(e) {
                var i = t.core.outer.find(".lg-thumb-item"), s = e.detail.index;
                i.removeClass("active"), i.eq(s).addClass("active");
            });
        }, o.prototype.toggleThumbBar = function() {
            var t = this;
            this.settings.toggleThumb && (this.core.outer.addClass("lg-can-toggle"), this.core.$toolbar.append('<button type="button" aria-label="' + this.settings.thumbnailPluginStrings.toggleThumbnails + '" class="lg-toggle-thumb lg-icon"></button>'), this.core.outer.find(".lg-toggle-thumb").first().on("click.lg", function() {
                t.core.outer.toggleClass("lg-components-open");
            }));
        }, o.prototype.thumbKeyPress = function() {
            var t = this;
            this.$LG(window).on("keydown.lg.thumb.global" + this.core.lgId, function(e) {
                t.core.lgOpened && t.settings.toggleThumb && (38 === e.keyCode ? (e.preventDefault(), t.core.outer.addClass("lg-components-open")) : 40 === e.keyCode && (e.preventDefault(), t.core.outer.removeClass("lg-components-open")));
            });
        }, o.prototype.destroy = function() {
            this.settings.thumbnail && (this.$LG(window).off(".lg.thumb.global" + this.core.lgId), this.core.LGel.off(".lg.thumb"), this.core.LGel.off(".thumb"), this.$thumbOuter.remove(), this.core.outer.removeClass("lg-has-thumb"));
        }, o;
    }();
});

},{}],"eQ9eW":[function(require,module,exports) {
module.exports = JSON.parse('[{"src":"images/brabanson/photo_2023-02-08_17-29-47.jpg","thumb":"images/brabanson/photo_2023-02-08_17-29-47.jpg","header":"","description":"","date":"2023/02/08/17:22"},{"src":"images/brabanson/photo_2023-02-08_17-30-06.jpg","thumb":"images/brabanson/photo_2023-02-08_17-30-06.jpg","header":"","description":"","date":"2023/02/08/17:13"},{"src":"images/brabanson/photo_2023-02-08_17-30-12.jpg","thumb":"images/brabanson/photo_2023-02-08_17-30-12.jpg","header":"","description":"","date":"2023/02/08/17:29"},{"src":"images/brabanson/photo_2023-02-08_17-30-16.jpg","thumb":"images/brabanson/photo_2023-02-08_17-30-16.jpg","header":"","description":"","date":"2023/02/08/17:46"},{"src":"images/brabanson/photo_2023-02-08_17-30-20.jpg","thumb":"images/brabanson/photo_2023-02-08_17-30-20.jpg","header":"","description":"","date":"2023/03/01/17:25"},{"src":"images/brabanson/photo_2023-02-08_17-30-24.jpg","thumb":"images/brabanson/photo_2023-02-08_17-30-24.jpg","header":"","description":"","date":"2023/02/08/16:28"},{"src":"images/brabanson/photo_2023-02-08_17-30-39.jpg","thumb":"images/brabanson/photo_2023-02-08_17-30-39.jpg","header":"","description":"","date":"2023/02/08/17:20"},{"src":"images/brabanson/photo_2023-02-08_17-30-42.jpg","thumb":"images/brabanson/photo_2023-02-08_17-30-42.jpg","header":"","description":"","date":"2023/02/08/17:31"}]');

},{}]},["1RB6v","8lqZg"], "8lqZg", "parcelRequired7c6")

//# sourceMappingURL=index.975ef6c8.js.map
