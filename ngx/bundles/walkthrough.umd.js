(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core')) :
	typeof define === 'function' && define.amd ? define('walkthrough', ['exports', '@angular/common', '@angular/core'], factory) :
	(factory((global.ng = global.ng || {}, global.ng.walkthrough = {}),global.ng.common,global.ng.core));
}(this, (function (exports,common,core) { 'use strict';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
    function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
};

/**
 * @license Angular v5.0.0
 * (c) 2010-2017 Google, Inc. https://angular.io/
 * License: MIT
 */
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var _DOM = /** @type {?} */ ((null));
/**
 * @return {?}
 */
function getDOM() {
    return _DOM;
}
/**
 * @param {?} adapter
 * @return {?}
 */

/**
 * @param {?} adapter
 * @return {?}
 */
function setRootDomAdapter(adapter) {
    if (!_DOM) {
        _DOM = adapter;
    }
}
/**
 * Provides DOM operations in an environment-agnostic way.
 *
 * \@security Tread carefully! Interacting with the DOM directly is dangerous and
 * can introduce XSS risks.
 * @abstract
 */
var DomAdapter = (function () {
    function DomAdapter() {
        this.resourceLoaderType = /** @type {?} */ ((null));
    }
    Object.defineProperty(DomAdapter.prototype, "attrToPropMap", {
        /**
         * Maps attribute names to their corresponding property names for cases
         * where attribute name doesn't match property name.
         */
        get: /**
         * Maps attribute names to their corresponding property names for cases
         * where attribute name doesn't match property name.
         * @return {?}
         */
        function () { return this._attrToPropMap; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this._attrToPropMap = value; },
        enumerable: true,
        configurable: true
    });
    return DomAdapter;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Provides DOM operations in any browser environment.
 *
 * \@security Tread carefully! Interacting with the DOM directly is dangerous and
 * can introduce XSS risks.
 * @abstract
 */
var GenericBrowserDomAdapter = (function (_super) {
    __extends(GenericBrowserDomAdapter, _super);
    function GenericBrowserDomAdapter() {
        var _this = _super.call(this) || this;
        _this._animationPrefix = null;
        _this._transitionEnd = null;
        try {
            var /** @type {?} */ element_1 = _this.createElement('div', document);
            if (_this.getStyle(element_1, 'animationName') != null) {
                _this._animationPrefix = '';
            }
            else {
                var /** @type {?} */ domPrefixes = ['Webkit', 'Moz', 'O', 'ms'];
                for (var /** @type {?} */ i = 0; i < domPrefixes.length; i++) {
                    if (_this.getStyle(element_1, domPrefixes[i] + 'AnimationName') != null) {
                        _this._animationPrefix = '-' + domPrefixes[i].toLowerCase() + '-';
                        break;
                    }
                }
            }
            var /** @type {?} */ transEndEventNames_1 = {
                WebkitTransition: 'webkitTransitionEnd',
                MozTransition: 'transitionend',
                OTransition: 'oTransitionEnd otransitionend',
                transition: 'transitionend'
            };
            Object.keys(transEndEventNames_1).forEach(function (key) {
                if (_this.getStyle(element_1, key) != null) {
                    _this._transitionEnd = transEndEventNames_1[key];
                }
            });
        }
        catch (/** @type {?} */ e) {
            _this._animationPrefix = null;
            _this._transitionEnd = null;
        }
        return _this;
    }
    /**
     * @param {?} el
     * @return {?}
     */
    GenericBrowserDomAdapter.prototype.getDistributedNodes = /**
     * @param {?} el
     * @return {?}
     */
    function (el) { return (/** @type {?} */ (el)).getDistributedNodes(); };
    /**
     * @param {?} el
     * @param {?} baseUrl
     * @param {?} href
     * @return {?}
     */
    GenericBrowserDomAdapter.prototype.resolveAndSetHref = /**
     * @param {?} el
     * @param {?} baseUrl
     * @param {?} href
     * @return {?}
     */
    function (el, baseUrl, href) {
        el.href = href == null ? baseUrl : baseUrl + '/../' + href;
    };
    /**
     * @return {?}
     */
    GenericBrowserDomAdapter.prototype.supportsDOMEvents = /**
     * @return {?}
     */
    function () { return true; };
    /**
     * @return {?}
     */
    GenericBrowserDomAdapter.prototype.supportsNativeShadowDOM = /**
     * @return {?}
     */
    function () {
        return typeof (/** @type {?} */ (document.body)).createShadowRoot === 'function';
    };
    /**
     * @return {?}
     */
    GenericBrowserDomAdapter.prototype.getAnimationPrefix = /**
     * @return {?}
     */
    function () { return this._animationPrefix ? this._animationPrefix : ''; };
    /**
     * @return {?}
     */
    GenericBrowserDomAdapter.prototype.getTransitionEnd = /**
     * @return {?}
     */
    function () { return this._transitionEnd ? this._transitionEnd : ''; };
    /**
     * @return {?}
     */
    GenericBrowserDomAdapter.prototype.supportsAnimation = /**
     * @return {?}
     */
    function () {
        return this._animationPrefix != null && this._transitionEnd != null;
    };
    return GenericBrowserDomAdapter;
}(DomAdapter));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var _attrToPropMap = {
    'class': 'className',
    'innerHtml': 'innerHTML',
    'readonly': 'readOnly',
    'tabindex': 'tabIndex',
};
var DOM_KEY_LOCATION_NUMPAD = 3;
// Map to convert some key or keyIdentifier values to what will be returned by getEventKey
var _keyMap = {
    // The following values are here for cross-browser compatibility and to match the W3C standard
    // cf http://www.w3.org/TR/DOM-Level-3-Events-key/
    '\b': 'Backspace',
    '\t': 'Tab',
    '\x7F': 'Delete',
    '\x1B': 'Escape',
    'Del': 'Delete',
    'Esc': 'Escape',
    'Left': 'ArrowLeft',
    'Right': 'ArrowRight',
    'Up': 'ArrowUp',
    'Down': 'ArrowDown',
    'Menu': 'ContextMenu',
    'Scroll': 'ScrollLock',
    'Win': 'OS'
};
// There is a bug in Chrome for numeric keypad keys:
// https://code.google.com/p/chromium/issues/detail?id=155654
// 1, 2, 3 ... are reported as A, B, C ...
var _chromeNumKeyPadMap = {
    'A': '1',
    'B': '2',
    'C': '3',
    'D': '4',
    'E': '5',
    'F': '6',
    'G': '7',
    'H': '8',
    'I': '9',
    'J': '*',
    'K': '+',
    'M': '-',
    'N': '.',
    'O': '/',
    '\x60': '0',
    '\x90': 'NumLock'
};
var nodeContains;
if (core.ɵglobal['Node']) {
    nodeContains = core.ɵglobal['Node'].prototype.contains || function (node) {
        return !!(this.compareDocumentPosition(node) & 16);
    };
}
/**
 * A `DomAdapter` powered by full browser DOM APIs.
 *
 * \@security Tread carefully! Interacting with the DOM directly is dangerous and
 * can introduce XSS risks.
 */
var BrowserDomAdapter = (function (_super) {
    __extends(BrowserDomAdapter, _super);
    function BrowserDomAdapter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} templateHtml
     * @return {?}
     */
    BrowserDomAdapter.prototype.parse = /**
     * @param {?} templateHtml
     * @return {?}
     */
    function (templateHtml) { throw new Error('parse not implemented'); };
    /**
     * @return {?}
     */
    BrowserDomAdapter.makeCurrent = /**
     * @return {?}
     */
    function () { setRootDomAdapter(new BrowserDomAdapter()); };
    /**
     * @param {?} element
     * @param {?} name
     * @return {?}
     */
    BrowserDomAdapter.prototype.hasProperty = /**
     * @param {?} element
     * @param {?} name
     * @return {?}
     */
    function (element, name) { return name in element; };
    /**
     * @param {?} el
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    BrowserDomAdapter.prototype.setProperty = /**
     * @param {?} el
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    function (el, name, value) { (/** @type {?} */ (el))[name] = value; };
    /**
     * @param {?} el
     * @param {?} name
     * @return {?}
     */
    BrowserDomAdapter.prototype.getProperty = /**
     * @param {?} el
     * @param {?} name
     * @return {?}
     */
    function (el, name) { return (/** @type {?} */ (el))[name]; };
    /**
     * @param {?} el
     * @param {?} methodName
     * @param {?} args
     * @return {?}
     */
    BrowserDomAdapter.prototype.invoke = /**
     * @param {?} el
     * @param {?} methodName
     * @param {?} args
     * @return {?}
     */
    function (el, methodName, args) {
        (_a = (/** @type {?} */ (el)))[methodName].apply(_a, args);
        var _a;
    };
    // TODO(tbosch): move this into a separate environment class once we have it
    /**
     * @param {?} error
     * @return {?}
     */
    BrowserDomAdapter.prototype.logError = /**
     * @param {?} error
     * @return {?}
     */
    function (error) {
        if (window.console) {
            if (console.error) {
                console.error(error);
            }
            else {
                console.log(error);
            }
        }
    };
    /**
     * @param {?} error
     * @return {?}
     */
    BrowserDomAdapter.prototype.log = /**
     * @param {?} error
     * @return {?}
     */
    function (error) {
        if (window.console) {
            window.console.log && window.console.log(error);
        }
    };
    /**
     * @param {?} error
     * @return {?}
     */
    BrowserDomAdapter.prototype.logGroup = /**
     * @param {?} error
     * @return {?}
     */
    function (error) {
        if (window.console) {
            window.console.group && window.console.group(error);
        }
    };
    /**
     * @return {?}
     */
    BrowserDomAdapter.prototype.logGroupEnd = /**
     * @return {?}
     */
    function () {
        if (window.console) {
            window.console.groupEnd && window.console.groupEnd();
        }
    };
    Object.defineProperty(BrowserDomAdapter.prototype, "attrToPropMap", {
        get: /**
         * @return {?}
         */
        function () { return _attrToPropMap; },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} nodeA
     * @param {?} nodeB
     * @return {?}
     */
    BrowserDomAdapter.prototype.contains = /**
     * @param {?} nodeA
     * @param {?} nodeB
     * @return {?}
     */
    function (nodeA, nodeB) { return nodeContains.call(nodeA, nodeB); };
    /**
     * @param {?} el
     * @param {?} selector
     * @return {?}
     */
    BrowserDomAdapter.prototype.querySelector = /**
     * @param {?} el
     * @param {?} selector
     * @return {?}
     */
    function (el, selector) { return el.querySelector(selector); };
    /**
     * @param {?} el
     * @param {?} selector
     * @return {?}
     */
    BrowserDomAdapter.prototype.querySelectorAll = /**
     * @param {?} el
     * @param {?} selector
     * @return {?}
     */
    function (el, selector) { return el.querySelectorAll(selector); };
    /**
     * @param {?} el
     * @param {?} evt
     * @param {?} listener
     * @return {?}
     */
    BrowserDomAdapter.prototype.on = /**
     * @param {?} el
     * @param {?} evt
     * @param {?} listener
     * @return {?}
     */
    function (el, evt, listener) { el.addEventListener(evt, listener, false); };
    /**
     * @param {?} el
     * @param {?} evt
     * @param {?} listener
     * @return {?}
     */
    BrowserDomAdapter.prototype.onAndCancel = /**
     * @param {?} el
     * @param {?} evt
     * @param {?} listener
     * @return {?}
     */
    function (el, evt, listener) {
        el.addEventListener(evt, listener, false);
        // Needed to follow Dart's subscription semantic, until fix of
        // https://code.google.com/p/dart/issues/detail?id=17406
        return function () { el.removeEventListener(evt, listener, false); };
    };
    /**
     * @param {?} el
     * @param {?} evt
     * @return {?}
     */
    BrowserDomAdapter.prototype.dispatchEvent = /**
     * @param {?} el
     * @param {?} evt
     * @return {?}
     */
    function (el, evt) { el.dispatchEvent(evt); };
    /**
     * @param {?} eventType
     * @return {?}
     */
    BrowserDomAdapter.prototype.createMouseEvent = /**
     * @param {?} eventType
     * @return {?}
     */
    function (eventType) {
        var /** @type {?} */ evt = this.getDefaultDocument().createEvent('MouseEvent');
        evt.initEvent(eventType, true, true);
        return evt;
    };
    /**
     * @param {?} eventType
     * @return {?}
     */
    BrowserDomAdapter.prototype.createEvent = /**
     * @param {?} eventType
     * @return {?}
     */
    function (eventType) {
        var /** @type {?} */ evt = this.getDefaultDocument().createEvent('Event');
        evt.initEvent(eventType, true, true);
        return evt;
    };
    /**
     * @param {?} evt
     * @return {?}
     */
    BrowserDomAdapter.prototype.preventDefault = /**
     * @param {?} evt
     * @return {?}
     */
    function (evt) {
        evt.preventDefault();
        evt.returnValue = false;
    };
    /**
     * @param {?} evt
     * @return {?}
     */
    BrowserDomAdapter.prototype.isPrevented = /**
     * @param {?} evt
     * @return {?}
     */
    function (evt) {
        return evt.defaultPrevented || evt.returnValue != null && !evt.returnValue;
    };
    /**
     * @param {?} el
     * @return {?}
     */
    BrowserDomAdapter.prototype.getInnerHTML = /**
     * @param {?} el
     * @return {?}
     */
    function (el) { return el.innerHTML; };
    /**
     * @param {?} el
     * @return {?}
     */
    BrowserDomAdapter.prototype.getTemplateContent = /**
     * @param {?} el
     * @return {?}
     */
    function (el) {
        return 'content' in el && this.isTemplateElement(el) ? (/** @type {?} */ (el)).content : null;
    };
    /**
     * @param {?} el
     * @return {?}
     */
    BrowserDomAdapter.prototype.getOuterHTML = /**
     * @param {?} el
     * @return {?}
     */
    function (el) { return el.outerHTML; };
    /**
     * @param {?} node
     * @return {?}
     */
    BrowserDomAdapter.prototype.nodeName = /**
     * @param {?} node
     * @return {?}
     */
    function (node) { return node.nodeName; };
    /**
     * @param {?} node
     * @return {?}
     */
    BrowserDomAdapter.prototype.nodeValue = /**
     * @param {?} node
     * @return {?}
     */
    function (node) { return node.nodeValue; };
    /**
     * @param {?} node
     * @return {?}
     */
    BrowserDomAdapter.prototype.type = /**
     * @param {?} node
     * @return {?}
     */
    function (node) { return node.type; };
    /**
     * @param {?} node
     * @return {?}
     */
    BrowserDomAdapter.prototype.content = /**
     * @param {?} node
     * @return {?}
     */
    function (node) {
        if (this.hasProperty(node, 'content')) {
            return (/** @type {?} */ (node)).content;
        }
        else {
            return node;
        }
    };
    /**
     * @param {?} el
     * @return {?}
     */
    BrowserDomAdapter.prototype.firstChild = /**
     * @param {?} el
     * @return {?}
     */
    function (el) { return el.firstChild; };
    /**
     * @param {?} el
     * @return {?}
     */
    BrowserDomAdapter.prototype.nextSibling = /**
     * @param {?} el
     * @return {?}
     */
    function (el) { return el.nextSibling; };
    /**
     * @param {?} el
     * @return {?}
     */
    BrowserDomAdapter.prototype.parentElement = /**
     * @param {?} el
     * @return {?}
     */
    function (el) { return el.parentNode; };
    /**
     * @param {?} el
     * @return {?}
     */
    BrowserDomAdapter.prototype.childNodes = /**
     * @param {?} el
     * @return {?}
     */
    function (el) { return el.childNodes; };
    /**
     * @param {?} el
     * @return {?}
     */
    BrowserDomAdapter.prototype.childNodesAsList = /**
     * @param {?} el
     * @return {?}
     */
    function (el) {
        var /** @type {?} */ childNodes = el.childNodes;
        var /** @type {?} */ res = new Array(childNodes.length);
        for (var /** @type {?} */ i = 0; i < childNodes.length; i++) {
            res[i] = childNodes[i];
        }
        return res;
    };
    /**
     * @param {?} el
     * @return {?}
     */
    BrowserDomAdapter.prototype.clearNodes = /**
     * @param {?} el
     * @return {?}
     */
    function (el) {
        while (el.firstChild) {
            el.removeChild(el.firstChild);
        }
    };
    /**
     * @param {?} el
     * @param {?} node
     * @return {?}
     */
    BrowserDomAdapter.prototype.appendChild = /**
     * @param {?} el
     * @param {?} node
     * @return {?}
     */
    function (el, node) { el.appendChild(node); };
    /**
     * @param {?} el
     * @param {?} node
     * @return {?}
     */
    BrowserDomAdapter.prototype.removeChild = /**
     * @param {?} el
     * @param {?} node
     * @return {?}
     */
    function (el, node) { el.removeChild(node); };
    /**
     * @param {?} el
     * @param {?} newChild
     * @param {?} oldChild
     * @return {?}
     */
    BrowserDomAdapter.prototype.replaceChild = /**
     * @param {?} el
     * @param {?} newChild
     * @param {?} oldChild
     * @return {?}
     */
    function (el, newChild, oldChild) { el.replaceChild(newChild, oldChild); };
    /**
     * @param {?} node
     * @return {?}
     */
    BrowserDomAdapter.prototype.remove = /**
     * @param {?} node
     * @return {?}
     */
    function (node) {
        if (node.parentNode) {
            node.parentNode.removeChild(node);
        }
        return node;
    };
    /**
     * @param {?} parent
     * @param {?} ref
     * @param {?} node
     * @return {?}
     */
    BrowserDomAdapter.prototype.insertBefore = /**
     * @param {?} parent
     * @param {?} ref
     * @param {?} node
     * @return {?}
     */
    function (parent, ref, node) { parent.insertBefore(node, ref); };
    /**
     * @param {?} parent
     * @param {?} ref
     * @param {?} nodes
     * @return {?}
     */
    BrowserDomAdapter.prototype.insertAllBefore = /**
     * @param {?} parent
     * @param {?} ref
     * @param {?} nodes
     * @return {?}
     */
    function (parent, ref, nodes) {
        nodes.forEach(function (n) { return parent.insertBefore(n, ref); });
    };
    /**
     * @param {?} parent
     * @param {?} ref
     * @param {?} node
     * @return {?}
     */
    BrowserDomAdapter.prototype.insertAfter = /**
     * @param {?} parent
     * @param {?} ref
     * @param {?} node
     * @return {?}
     */
    function (parent, ref, node) { parent.insertBefore(node, ref.nextSibling); };
    /**
     * @param {?} el
     * @param {?} value
     * @return {?}
     */
    BrowserDomAdapter.prototype.setInnerHTML = /**
     * @param {?} el
     * @param {?} value
     * @return {?}
     */
    function (el, value) { el.innerHTML = value; };
    /**
     * @param {?} el
     * @return {?}
     */
    BrowserDomAdapter.prototype.getText = /**
     * @param {?} el
     * @return {?}
     */
    function (el) { return el.textContent; };
    /**
     * @param {?} el
     * @param {?} value
     * @return {?}
     */
    BrowserDomAdapter.prototype.setText = /**
     * @param {?} el
     * @param {?} value
     * @return {?}
     */
    function (el, value) { el.textContent = value; };
    /**
     * @param {?} el
     * @return {?}
     */
    BrowserDomAdapter.prototype.getValue = /**
     * @param {?} el
     * @return {?}
     */
    function (el) { return el.value; };
    /**
     * @param {?} el
     * @param {?} value
     * @return {?}
     */
    BrowserDomAdapter.prototype.setValue = /**
     * @param {?} el
     * @param {?} value
     * @return {?}
     */
    function (el, value) { el.value = value; };
    /**
     * @param {?} el
     * @return {?}
     */
    BrowserDomAdapter.prototype.getChecked = /**
     * @param {?} el
     * @return {?}
     */
    function (el) { return el.checked; };
    /**
     * @param {?} el
     * @param {?} value
     * @return {?}
     */
    BrowserDomAdapter.prototype.setChecked = /**
     * @param {?} el
     * @param {?} value
     * @return {?}
     */
    function (el, value) { el.checked = value; };
    /**
     * @param {?} text
     * @return {?}
     */
    BrowserDomAdapter.prototype.createComment = /**
     * @param {?} text
     * @return {?}
     */
    function (text) { return this.getDefaultDocument().createComment(text); };
    /**
     * @param {?} html
     * @return {?}
     */
    BrowserDomAdapter.prototype.createTemplate = /**
     * @param {?} html
     * @return {?}
     */
    function (html) {
        var /** @type {?} */ t = this.getDefaultDocument().createElement('template');
        t.innerHTML = html;
        return t;
    };
    /**
     * @param {?} tagName
     * @param {?=} doc
     * @return {?}
     */
    BrowserDomAdapter.prototype.createElement = /**
     * @param {?} tagName
     * @param {?=} doc
     * @return {?}
     */
    function (tagName, doc) {
        doc = doc || this.getDefaultDocument();
        return doc.createElement(tagName);
    };
    /**
     * @param {?} ns
     * @param {?} tagName
     * @param {?=} doc
     * @return {?}
     */
    BrowserDomAdapter.prototype.createElementNS = /**
     * @param {?} ns
     * @param {?} tagName
     * @param {?=} doc
     * @return {?}
     */
    function (ns, tagName, doc) {
        doc = doc || this.getDefaultDocument();
        return doc.createElementNS(ns, tagName);
    };
    /**
     * @param {?} text
     * @param {?=} doc
     * @return {?}
     */
    BrowserDomAdapter.prototype.createTextNode = /**
     * @param {?} text
     * @param {?=} doc
     * @return {?}
     */
    function (text, doc) {
        doc = doc || this.getDefaultDocument();
        return doc.createTextNode(text);
    };
    /**
     * @param {?} attrName
     * @param {?} attrValue
     * @param {?=} doc
     * @return {?}
     */
    BrowserDomAdapter.prototype.createScriptTag = /**
     * @param {?} attrName
     * @param {?} attrValue
     * @param {?=} doc
     * @return {?}
     */
    function (attrName, attrValue, doc) {
        doc = doc || this.getDefaultDocument();
        var /** @type {?} */ el = /** @type {?} */ (doc.createElement('SCRIPT'));
        el.setAttribute(attrName, attrValue);
        return el;
    };
    /**
     * @param {?} css
     * @param {?=} doc
     * @return {?}
     */
    BrowserDomAdapter.prototype.createStyleElement = /**
     * @param {?} css
     * @param {?=} doc
     * @return {?}
     */
    function (css, doc) {
        doc = doc || this.getDefaultDocument();
        var /** @type {?} */ style = /** @type {?} */ (doc.createElement('style'));
        this.appendChild(style, this.createTextNode(css, doc));
        return style;
    };
    /**
     * @param {?} el
     * @return {?}
     */
    BrowserDomAdapter.prototype.createShadowRoot = /**
     * @param {?} el
     * @return {?}
     */
    function (el) { return (/** @type {?} */ (el)).createShadowRoot(); };
    /**
     * @param {?} el
     * @return {?}
     */
    BrowserDomAdapter.prototype.getShadowRoot = /**
     * @param {?} el
     * @return {?}
     */
    function (el) { return (/** @type {?} */ (el)).shadowRoot; };
    /**
     * @param {?} el
     * @return {?}
     */
    BrowserDomAdapter.prototype.getHost = /**
     * @param {?} el
     * @return {?}
     */
    function (el) { return (/** @type {?} */ (el)).host; };
    /**
     * @param {?} node
     * @return {?}
     */
    BrowserDomAdapter.prototype.clone = /**
     * @param {?} node
     * @return {?}
     */
    function (node) { return node.cloneNode(true); };
    /**
     * @param {?} element
     * @param {?} name
     * @return {?}
     */
    BrowserDomAdapter.prototype.getElementsByClassName = /**
     * @param {?} element
     * @param {?} name
     * @return {?}
     */
    function (element, name) {
        return element.getElementsByClassName(name);
    };
    /**
     * @param {?} element
     * @param {?} name
     * @return {?}
     */
    BrowserDomAdapter.prototype.getElementsByTagName = /**
     * @param {?} element
     * @param {?} name
     * @return {?}
     */
    function (element, name) {
        return element.getElementsByTagName(name);
    };
    /**
     * @param {?} element
     * @return {?}
     */
    BrowserDomAdapter.prototype.classList = /**
     * @param {?} element
     * @return {?}
     */
    function (element) { return Array.prototype.slice.call(element.classList, 0); };
    /**
     * @param {?} element
     * @param {?} className
     * @return {?}
     */
    BrowserDomAdapter.prototype.addClass = /**
     * @param {?} element
     * @param {?} className
     * @return {?}
     */
    function (element, className) { element.classList.add(className); };
    /**
     * @param {?} element
     * @param {?} className
     * @return {?}
     */
    BrowserDomAdapter.prototype.removeClass = /**
     * @param {?} element
     * @param {?} className
     * @return {?}
     */
    function (element, className) { element.classList.remove(className); };
    /**
     * @param {?} element
     * @param {?} className
     * @return {?}
     */
    BrowserDomAdapter.prototype.hasClass = /**
     * @param {?} element
     * @param {?} className
     * @return {?}
     */
    function (element, className) {
        return element.classList.contains(className);
    };
    /**
     * @param {?} element
     * @param {?} styleName
     * @param {?} styleValue
     * @return {?}
     */
    BrowserDomAdapter.prototype.setStyle = /**
     * @param {?} element
     * @param {?} styleName
     * @param {?} styleValue
     * @return {?}
     */
    function (element, styleName, styleValue) {
        element.style[styleName] = styleValue;
    };
    /**
     * @param {?} element
     * @param {?} stylename
     * @return {?}
     */
    BrowserDomAdapter.prototype.removeStyle = /**
     * @param {?} element
     * @param {?} stylename
     * @return {?}
     */
    function (element, stylename) {
        // IE requires '' instead of null
        // see https://github.com/angular/angular/issues/7916
        element.style[stylename] = '';
    };
    /**
     * @param {?} element
     * @param {?} stylename
     * @return {?}
     */
    BrowserDomAdapter.prototype.getStyle = /**
     * @param {?} element
     * @param {?} stylename
     * @return {?}
     */
    function (element, stylename) { return element.style[stylename]; };
    /**
     * @param {?} element
     * @param {?} styleName
     * @param {?=} styleValue
     * @return {?}
     */
    BrowserDomAdapter.prototype.hasStyle = /**
     * @param {?} element
     * @param {?} styleName
     * @param {?=} styleValue
     * @return {?}
     */
    function (element, styleName, styleValue) {
        var /** @type {?} */ value = this.getStyle(element, styleName) || '';
        return styleValue ? value == styleValue : value.length > 0;
    };
    /**
     * @param {?} element
     * @return {?}
     */
    BrowserDomAdapter.prototype.tagName = /**
     * @param {?} element
     * @return {?}
     */
    function (element) { return element.tagName; };
    /**
     * @param {?} element
     * @return {?}
     */
    BrowserDomAdapter.prototype.attributeMap = /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        var /** @type {?} */ res = new Map();
        var /** @type {?} */ elAttrs = element.attributes;
        for (var /** @type {?} */ i = 0; i < elAttrs.length; i++) {
            var /** @type {?} */ attrib = elAttrs.item(i);
            res.set(attrib.name, attrib.value);
        }
        return res;
    };
    /**
     * @param {?} element
     * @param {?} attribute
     * @return {?}
     */
    BrowserDomAdapter.prototype.hasAttribute = /**
     * @param {?} element
     * @param {?} attribute
     * @return {?}
     */
    function (element, attribute) {
        return element.hasAttribute(attribute);
    };
    /**
     * @param {?} element
     * @param {?} ns
     * @param {?} attribute
     * @return {?}
     */
    BrowserDomAdapter.prototype.hasAttributeNS = /**
     * @param {?} element
     * @param {?} ns
     * @param {?} attribute
     * @return {?}
     */
    function (element, ns, attribute) {
        return element.hasAttributeNS(ns, attribute);
    };
    /**
     * @param {?} element
     * @param {?} attribute
     * @return {?}
     */
    BrowserDomAdapter.prototype.getAttribute = /**
     * @param {?} element
     * @param {?} attribute
     * @return {?}
     */
    function (element, attribute) {
        return element.getAttribute(attribute);
    };
    /**
     * @param {?} element
     * @param {?} ns
     * @param {?} name
     * @return {?}
     */
    BrowserDomAdapter.prototype.getAttributeNS = /**
     * @param {?} element
     * @param {?} ns
     * @param {?} name
     * @return {?}
     */
    function (element, ns, name) {
        return element.getAttributeNS(ns, name);
    };
    /**
     * @param {?} element
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    BrowserDomAdapter.prototype.setAttribute = /**
     * @param {?} element
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    function (element, name, value) { element.setAttribute(name, value); };
    /**
     * @param {?} element
     * @param {?} ns
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    BrowserDomAdapter.prototype.setAttributeNS = /**
     * @param {?} element
     * @param {?} ns
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    function (element, ns, name, value) {
        element.setAttributeNS(ns, name, value);
    };
    /**
     * @param {?} element
     * @param {?} attribute
     * @return {?}
     */
    BrowserDomAdapter.prototype.removeAttribute = /**
     * @param {?} element
     * @param {?} attribute
     * @return {?}
     */
    function (element, attribute) { element.removeAttribute(attribute); };
    /**
     * @param {?} element
     * @param {?} ns
     * @param {?} name
     * @return {?}
     */
    BrowserDomAdapter.prototype.removeAttributeNS = /**
     * @param {?} element
     * @param {?} ns
     * @param {?} name
     * @return {?}
     */
    function (element, ns, name) {
        element.removeAttributeNS(ns, name);
    };
    /**
     * @param {?} el
     * @return {?}
     */
    BrowserDomAdapter.prototype.templateAwareRoot = /**
     * @param {?} el
     * @return {?}
     */
    function (el) { return this.isTemplateElement(el) ? this.content(el) : el; };
    /**
     * @return {?}
     */
    BrowserDomAdapter.prototype.createHtmlDocument = /**
     * @return {?}
     */
    function () {
        return document.implementation.createHTMLDocument('fakeTitle');
    };
    /**
     * @return {?}
     */
    BrowserDomAdapter.prototype.getDefaultDocument = /**
     * @return {?}
     */
    function () { return document; };
    /**
     * @param {?} el
     * @return {?}
     */
    BrowserDomAdapter.prototype.getBoundingClientRect = /**
     * @param {?} el
     * @return {?}
     */
    function (el) {
        try {
            return el.getBoundingClientRect();
        }
        catch (/** @type {?} */ e) {
            return { top: 0, bottom: 0, left: 0, right: 0, width: 0, height: 0 };
        }
    };
    /**
     * @param {?} doc
     * @return {?}
     */
    BrowserDomAdapter.prototype.getTitle = /**
     * @param {?} doc
     * @return {?}
     */
    function (doc) { return doc.title; };
    /**
     * @param {?} doc
     * @param {?} newTitle
     * @return {?}
     */
    BrowserDomAdapter.prototype.setTitle = /**
     * @param {?} doc
     * @param {?} newTitle
     * @return {?}
     */
    function (doc, newTitle) { doc.title = newTitle || ''; };
    /**
     * @param {?} n
     * @param {?} selector
     * @return {?}
     */
    BrowserDomAdapter.prototype.elementMatches = /**
     * @param {?} n
     * @param {?} selector
     * @return {?}
     */
    function (n, selector) {
        if (this.isElementNode(n)) {
            return n.matches && n.matches(selector) ||
                n.msMatchesSelector && n.msMatchesSelector(selector) ||
                n.webkitMatchesSelector && n.webkitMatchesSelector(selector);
        }
        return false;
    };
    /**
     * @param {?} el
     * @return {?}
     */
    BrowserDomAdapter.prototype.isTemplateElement = /**
     * @param {?} el
     * @return {?}
     */
    function (el) {
        return this.isElementNode(el) && el.nodeName === 'TEMPLATE';
    };
    /**
     * @param {?} node
     * @return {?}
     */
    BrowserDomAdapter.prototype.isTextNode = /**
     * @param {?} node
     * @return {?}
     */
    function (node) { return node.nodeType === Node.TEXT_NODE; };
    /**
     * @param {?} node
     * @return {?}
     */
    BrowserDomAdapter.prototype.isCommentNode = /**
     * @param {?} node
     * @return {?}
     */
    function (node) { return node.nodeType === Node.COMMENT_NODE; };
    /**
     * @param {?} node
     * @return {?}
     */
    BrowserDomAdapter.prototype.isElementNode = /**
     * @param {?} node
     * @return {?}
     */
    function (node) { return node.nodeType === Node.ELEMENT_NODE; };
    /**
     * @param {?} node
     * @return {?}
     */
    BrowserDomAdapter.prototype.hasShadowRoot = /**
     * @param {?} node
     * @return {?}
     */
    function (node) {
        return node.shadowRoot != null && node instanceof HTMLElement;
    };
    /**
     * @param {?} node
     * @return {?}
     */
    BrowserDomAdapter.prototype.isShadowRoot = /**
     * @param {?} node
     * @return {?}
     */
    function (node) { return node instanceof DocumentFragment; };
    /**
     * @param {?} node
     * @return {?}
     */
    BrowserDomAdapter.prototype.importIntoDoc = /**
     * @param {?} node
     * @return {?}
     */
    function (node) { return document.importNode(this.templateAwareRoot(node), true); };
    /**
     * @param {?} node
     * @return {?}
     */
    BrowserDomAdapter.prototype.adoptNode = /**
     * @param {?} node
     * @return {?}
     */
    function (node) { return document.adoptNode(node); };
    /**
     * @param {?} el
     * @return {?}
     */
    BrowserDomAdapter.prototype.getHref = /**
     * @param {?} el
     * @return {?}
     */
    function (el) { return /** @type {?} */ ((el.getAttribute('href'))); };
    /**
     * @param {?} event
     * @return {?}
     */
    BrowserDomAdapter.prototype.getEventKey = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var /** @type {?} */ key = event.key;
        if (key == null) {
            key = event.keyIdentifier;
            // keyIdentifier is defined in the old draft of DOM Level 3 Events implemented by Chrome and
            // Safari cf
            // http://www.w3.org/TR/2007/WD-DOM-Level-3-Events-20071221/events.html#Events-KeyboardEvents-Interfaces
            if (key == null) {
                return 'Unidentified';
            }
            if (key.startsWith('U+')) {
                key = String.fromCharCode(parseInt(key.substring(2), 16));
                if (event.location === DOM_KEY_LOCATION_NUMPAD && _chromeNumKeyPadMap.hasOwnProperty(key)) {
                    // There is a bug in Chrome for numeric keypad keys:
                    // https://code.google.com/p/chromium/issues/detail?id=155654
                    // 1, 2, 3 ... are reported as A, B, C ...
                    key = (/** @type {?} */ (_chromeNumKeyPadMap))[key];
                }
            }
        }
        return _keyMap[key] || key;
    };
    /**
     * @param {?} doc
     * @param {?} target
     * @return {?}
     */
    BrowserDomAdapter.prototype.getGlobalEventTarget = /**
     * @param {?} doc
     * @param {?} target
     * @return {?}
     */
    function (doc, target) {
        if (target === 'window') {
            return window;
        }
        if (target === 'document') {
            return doc;
        }
        if (target === 'body') {
            return doc.body;
        }
        return null;
    };
    /**
     * @return {?}
     */
    BrowserDomAdapter.prototype.getHistory = /**
     * @return {?}
     */
    function () { return window.history; };
    /**
     * @return {?}
     */
    BrowserDomAdapter.prototype.getLocation = /**
     * @return {?}
     */
    function () { return window.location; };
    /**
     * @param {?} doc
     * @return {?}
     */
    BrowserDomAdapter.prototype.getBaseHref = /**
     * @param {?} doc
     * @return {?}
     */
    function (doc) {
        var /** @type {?} */ href = getBaseElementHref();
        return href == null ? null : relativePath(href);
    };
    /**
     * @return {?}
     */
    BrowserDomAdapter.prototype.resetBaseElement = /**
     * @return {?}
     */
    function () { baseElement = null; };
    /**
     * @return {?}
     */
    BrowserDomAdapter.prototype.getUserAgent = /**
     * @return {?}
     */
    function () { return window.navigator.userAgent; };
    /**
     * @param {?} element
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    BrowserDomAdapter.prototype.setData = /**
     * @param {?} element
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    function (element, name, value) {
        this.setAttribute(element, 'data-' + name, value);
    };
    /**
     * @param {?} element
     * @param {?} name
     * @return {?}
     */
    BrowserDomAdapter.prototype.getData = /**
     * @param {?} element
     * @param {?} name
     * @return {?}
     */
    function (element, name) {
        return this.getAttribute(element, 'data-' + name);
    };
    /**
     * @param {?} element
     * @return {?}
     */
    BrowserDomAdapter.prototype.getComputedStyle = /**
     * @param {?} element
     * @return {?}
     */
    function (element) { return getComputedStyle(element); };
    // TODO(tbosch): move this into a separate environment class once we have it
    /**
     * @return {?}
     */
    BrowserDomAdapter.prototype.supportsWebAnimation = /**
     * @return {?}
     */
    function () {
        return typeof (/** @type {?} */ (Element)).prototype['animate'] === 'function';
    };
    /**
     * @return {?}
     */
    BrowserDomAdapter.prototype.performanceNow = /**
     * @return {?}
     */
    function () {
        // performance.now() is not available in all browsers, see
        // http://caniuse.com/#search=performance.now
        return window.performance && window.performance.now ? window.performance.now() :
            new Date().getTime();
    };
    /**
     * @return {?}
     */
    BrowserDomAdapter.prototype.supportsCookies = /**
     * @return {?}
     */
    function () { return true; };
    /**
     * @param {?} name
     * @return {?}
     */
    BrowserDomAdapter.prototype.getCookie = /**
     * @param {?} name
     * @return {?}
     */
    function (name) { return common.ɵparseCookieValue(document.cookie, name); };
    /**
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    BrowserDomAdapter.prototype.setCookie = /**
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    function (name, value) {
        // document.cookie is magical, assigning into it assigns/overrides one cookie value, but does
        // not clear other cookies.
        document.cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value);
    };
    return BrowserDomAdapter;
}(GenericBrowserDomAdapter));
var baseElement = null;
/**
 * @return {?}
 */
function getBaseElementHref() {
    if (!baseElement) {
        baseElement = /** @type {?} */ ((document.querySelector('base')));
        if (!baseElement) {
            return null;
        }
    }
    return baseElement.getAttribute('href');
}
// based on urlUtils.js in AngularJS 1
var urlParsingNode;
/**
 * @param {?} url
 * @return {?}
 */
function relativePath(url) {
    if (!urlParsingNode) {
        urlParsingNode = document.createElement('a');
    }
    urlParsingNode.setAttribute('href', url);
    return (urlParsingNode.pathname.charAt(0) === '/') ? urlParsingNode.pathname :
        '/' + urlParsingNode.pathname;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * A DI Token representing the main rendering context. In a browser this is the DOM Document.
 *
 * Note: Document might not be available in the Application Context when Application and Rendering
 * Contexts are not the same (e.g. when running the application into a Web Worker).
 *
 * @deprecated import from `\@angular/common` instead.
 */
var DOCUMENT$1 = common.DOCUMENT;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @return {?}
 */
function supportsState() {
    return !!window.history.pushState;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * `PlatformLocation` encapsulates all of the direct calls to platform APIs.
 * This class should not be used directly by an application developer. Instead, use
 * {\@link Location}.
 */
var BrowserPlatformLocation = (function (_super) {
    __extends(BrowserPlatformLocation, _super);
    function BrowserPlatformLocation(_doc) {
        var _this = _super.call(this) || this;
        _this._doc = _doc;
        _this._init();
        return _this;
    }
    // This is moved to its own method so that `MockPlatformLocationStrategy` can overwrite it
    /** @internal */
    /**
     * \@internal
     * @return {?}
     */
    BrowserPlatformLocation.prototype._init = /**
     * \@internal
     * @return {?}
     */
    function () {
        (/** @type {?} */ (this)).location = getDOM().getLocation();
        this._history = getDOM().getHistory();
    };
    /**
     * @return {?}
     */
    BrowserPlatformLocation.prototype.getBaseHrefFromDOM = /**
     * @return {?}
     */
    function () { return /** @type {?} */ ((getDOM().getBaseHref(this._doc))); };
    /**
     * @param {?} fn
     * @return {?}
     */
    BrowserPlatformLocation.prototype.onPopState = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        getDOM().getGlobalEventTarget(this._doc, 'window').addEventListener('popstate', fn, false);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    BrowserPlatformLocation.prototype.onHashChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        getDOM().getGlobalEventTarget(this._doc, 'window').addEventListener('hashchange', fn, false);
    };
    Object.defineProperty(BrowserPlatformLocation.prototype, "pathname", {
        get: /**
         * @return {?}
         */
        function () { return this.location.pathname; },
        set: /**
         * @param {?} newPath
         * @return {?}
         */
        function (newPath) { this.location.pathname = newPath; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BrowserPlatformLocation.prototype, "search", {
        get: /**
         * @return {?}
         */
        function () { return this.location.search; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BrowserPlatformLocation.prototype, "hash", {
        get: /**
         * @return {?}
         */
        function () { return this.location.hash; },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} state
     * @param {?} title
     * @param {?} url
     * @return {?}
     */
    BrowserPlatformLocation.prototype.pushState = /**
     * @param {?} state
     * @param {?} title
     * @param {?} url
     * @return {?}
     */
    function (state, title, url) {
        if (supportsState()) {
            this._history.pushState(state, title, url);
        }
        else {
            this.location.hash = url;
        }
    };
    /**
     * @param {?} state
     * @param {?} title
     * @param {?} url
     * @return {?}
     */
    BrowserPlatformLocation.prototype.replaceState = /**
     * @param {?} state
     * @param {?} title
     * @param {?} url
     * @return {?}
     */
    function (state, title, url) {
        if (supportsState()) {
            this._history.replaceState(state, title, url);
        }
        else {
            this.location.hash = url;
        }
    };
    /**
     * @return {?}
     */
    BrowserPlatformLocation.prototype.forward = /**
     * @return {?}
     */
    function () { this._history.forward(); };
    /**
     * @return {?}
     */
    BrowserPlatformLocation.prototype.back = /**
     * @return {?}
     */
    function () { this._history.back(); };
    BrowserPlatformLocation.decorators = [
        { type: core.Injectable },
    ];
    /** @nocollapse */
    BrowserPlatformLocation.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: core.Inject, args: [DOCUMENT$1,] },] },
    ]; };
    return BrowserPlatformLocation;
}(common.PlatformLocation));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * A service that can be used to get and add meta tags.
 *
 * \@experimental
 */
var Meta = (function () {
    function Meta(_doc) {
        this._doc = _doc;
        this._dom = getDOM();
    }
    /**
     * @param {?} tag
     * @param {?=} forceCreation
     * @return {?}
     */
    Meta.prototype.addTag = /**
     * @param {?} tag
     * @param {?=} forceCreation
     * @return {?}
     */
    function (tag, forceCreation) {
        if (forceCreation === void 0) { forceCreation = false; }
        if (!tag)
            return null;
        return this._getOrCreateElement(tag, forceCreation);
    };
    /**
     * @param {?} tags
     * @param {?=} forceCreation
     * @return {?}
     */
    Meta.prototype.addTags = /**
     * @param {?} tags
     * @param {?=} forceCreation
     * @return {?}
     */
    function (tags, forceCreation) {
        var _this = this;
        if (forceCreation === void 0) { forceCreation = false; }
        if (!tags)
            return [];
        return tags.reduce(function (result, tag) {
            if (tag) {
                result.push(_this._getOrCreateElement(tag, forceCreation));
            }
            return result;
        }, []);
    };
    /**
     * @param {?} attrSelector
     * @return {?}
     */
    Meta.prototype.getTag = /**
     * @param {?} attrSelector
     * @return {?}
     */
    function (attrSelector) {
        if (!attrSelector)
            return null;
        return this._dom.querySelector(this._doc, "meta[" + attrSelector + "]") || null;
    };
    /**
     * @param {?} attrSelector
     * @return {?}
     */
    Meta.prototype.getTags = /**
     * @param {?} attrSelector
     * @return {?}
     */
    function (attrSelector) {
        if (!attrSelector)
            return [];
        var /** @type {?} */ list = this._dom.querySelectorAll(this._doc, "meta[" + attrSelector + "]");
        return list ? [].slice.call(list) : [];
    };
    /**
     * @param {?} tag
     * @param {?=} selector
     * @return {?}
     */
    Meta.prototype.updateTag = /**
     * @param {?} tag
     * @param {?=} selector
     * @return {?}
     */
    function (tag, selector) {
        if (!tag)
            return null;
        selector = selector || this._parseSelector(tag);
        var /** @type {?} */ meta = /** @type {?} */ ((this.getTag(selector)));
        if (meta) {
            return this._setMetaElementAttributes(tag, meta);
        }
        return this._getOrCreateElement(tag, true);
    };
    /**
     * @param {?} attrSelector
     * @return {?}
     */
    Meta.prototype.removeTag = /**
     * @param {?} attrSelector
     * @return {?}
     */
    function (attrSelector) { this.removeTagElement(/** @type {?} */ ((this.getTag(attrSelector)))); };
    /**
     * @param {?} meta
     * @return {?}
     */
    Meta.prototype.removeTagElement = /**
     * @param {?} meta
     * @return {?}
     */
    function (meta) {
        if (meta) {
            this._dom.remove(meta);
        }
    };
    /**
     * @param {?} meta
     * @param {?=} forceCreation
     * @return {?}
     */
    Meta.prototype._getOrCreateElement = /**
     * @param {?} meta
     * @param {?=} forceCreation
     * @return {?}
     */
    function (meta, forceCreation) {
        if (forceCreation === void 0) { forceCreation = false; }
        if (!forceCreation) {
            var /** @type {?} */ selector = this._parseSelector(meta);
            var /** @type {?} */ elem = /** @type {?} */ ((this.getTag(selector)));
            // It's allowed to have multiple elements with the same name so it's not enough to
            // just check that element with the same name already present on the page. We also need to
            // check if element has tag attributes
            if (elem && this._containsAttributes(meta, elem))
                return elem;
        }
        var /** @type {?} */ element = /** @type {?} */ (this._dom.createElement('meta'));
        this._setMetaElementAttributes(meta, element);
        var /** @type {?} */ head = this._dom.getElementsByTagName(this._doc, 'head')[0];
        this._dom.appendChild(head, element);
        return element;
    };
    /**
     * @param {?} tag
     * @param {?} el
     * @return {?}
     */
    Meta.prototype._setMetaElementAttributes = /**
     * @param {?} tag
     * @param {?} el
     * @return {?}
     */
    function (tag, el) {
        var _this = this;
        Object.keys(tag).forEach(function (prop) { return _this._dom.setAttribute(el, prop, tag[prop]); });
        return el;
    };
    /**
     * @param {?} tag
     * @return {?}
     */
    Meta.prototype._parseSelector = /**
     * @param {?} tag
     * @return {?}
     */
    function (tag) {
        var /** @type {?} */ attr = tag.name ? 'name' : 'property';
        return attr + "=\"" + tag[attr] + "\"";
    };
    /**
     * @param {?} tag
     * @param {?} elem
     * @return {?}
     */
    Meta.prototype._containsAttributes = /**
     * @param {?} tag
     * @param {?} elem
     * @return {?}
     */
    function (tag, elem) {
        var _this = this;
        return Object.keys(tag).every(function (key) { return _this._dom.getAttribute(elem, key) === tag[key]; });
    };
    Meta.decorators = [
        { type: core.Injectable },
    ];
    /** @nocollapse */
    Meta.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: core.Inject, args: [DOCUMENT$1,] },] },
    ]; };
    return Meta;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * An id that identifies a particular application being bootstrapped, that should
 * match across the client/server boundary.
 */
var TRANSITION_ID = new core.InjectionToken('TRANSITION_ID');
/**
 * @param {?} transitionId
 * @param {?} document
 * @param {?} injector
 * @return {?}
 */
function appInitializerFactory(transitionId, document, injector) {
    return function () {
        // Wait for all application initializers to be completed before removing the styles set by
        // the server.
        injector.get(core.ApplicationInitStatus).donePromise.then(function () {
            var /** @type {?} */ dom = getDOM();
            var /** @type {?} */ styles = Array.prototype.slice.apply(dom.querySelectorAll(document, "style[ng-transition]"));
            styles.filter(function (el) { return dom.getAttribute(el, 'ng-transition') === transitionId; })
                .forEach(function (el) { return dom.remove(el); });
        });
    };
}
var SERVER_TRANSITION_PROVIDERS = [
    {
        provide: core.APP_INITIALIZER,
        useFactory: appInitializerFactory,
        deps: [TRANSITION_ID, DOCUMENT$1, core.Injector],
        multi: true
    },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var BrowserGetTestability = (function () {
    function BrowserGetTestability() {
    }
    /**
     * @return {?}
     */
    BrowserGetTestability.init = /**
     * @return {?}
     */
    function () { core.setTestabilityGetter(new BrowserGetTestability()); };
    /**
     * @param {?} registry
     * @return {?}
     */
    BrowserGetTestability.prototype.addToWindow = /**
     * @param {?} registry
     * @return {?}
     */
    function (registry) {
        core.ɵglobal['getAngularTestability'] = function (elem, findInAncestors) {
            if (findInAncestors === void 0) { findInAncestors = true; }
            var /** @type {?} */ testability = registry.findTestabilityInTree(elem, findInAncestors);
            if (testability == null) {
                throw new Error('Could not find testability for element.');
            }
            return testability;
        };
        core.ɵglobal['getAllAngularTestabilities'] = function () { return registry.getAllTestabilities(); };
        core.ɵglobal['getAllAngularRootElements'] = function () { return registry.getAllRootElements(); };
        var /** @type {?} */ whenAllStable = function (callback /** TODO #9100 */) {
            var /** @type {?} */ testabilities = core.ɵglobal['getAllAngularTestabilities']();
            var /** @type {?} */ count = testabilities.length;
            var /** @type {?} */ didWork = false;
            var /** @type {?} */ decrement = function (didWork_ /** TODO #9100 */) {
                didWork = didWork || didWork_;
                count--;
                if (count == 0) {
                    callback(didWork);
                }
            };
            testabilities.forEach(function (testability /** TODO #9100 */) {
                testability.whenStable(decrement);
            });
        };
        if (!core.ɵglobal['frameworkStabilizers']) {
            core.ɵglobal['frameworkStabilizers'] = [];
        }
        core.ɵglobal['frameworkStabilizers'].push(whenAllStable);
    };
    /**
     * @param {?} registry
     * @param {?} elem
     * @param {?} findInAncestors
     * @return {?}
     */
    BrowserGetTestability.prototype.findTestabilityInTree = /**
     * @param {?} registry
     * @param {?} elem
     * @param {?} findInAncestors
     * @return {?}
     */
    function (registry, elem, findInAncestors) {
        if (elem == null) {
            return null;
        }
        var /** @type {?} */ t = registry.getTestability(elem);
        if (t != null) {
            return t;
        }
        else if (!findInAncestors) {
            return null;
        }
        if (getDOM().isShadowRoot(elem)) {
            return this.findTestabilityInTree(registry, getDOM().getHost(elem), true);
        }
        return this.findTestabilityInTree(registry, getDOM().parentElement(elem), true);
    };
    return BrowserGetTestability;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * A service that can be used to get and set the title of a current HTML document.
 *
 * Since an Angular application can't be bootstrapped on the entire HTML document (`<html>` tag)
 * it is not possible to bind to the `text` property of the `HTMLTitleElement` elements
 * (representing the `<title>` tag). Instead, this service can be used to set and get the current
 * title value.
 *
 * \@experimental
 */
var Title = (function () {
    function Title(_doc) {
        this._doc = _doc;
    }
    /**
     * Get the title of the current HTML document.
     */
    /**
     * Get the title of the current HTML document.
     * @return {?}
     */
    Title.prototype.getTitle = /**
     * Get the title of the current HTML document.
     * @return {?}
     */
    function () { return getDOM().getTitle(this._doc); };
    /**
     * Set the title of the current HTML document.
     * @param newTitle
     */
    /**
     * Set the title of the current HTML document.
     * @param {?} newTitle
     * @return {?}
     */
    Title.prototype.setTitle = /**
     * Set the title of the current HTML document.
     * @param {?} newTitle
     * @return {?}
     */
    function (newTitle) { getDOM().setTitle(this._doc, newTitle); };
    Title.decorators = [
        { type: core.Injectable },
    ];
    /** @nocollapse */
    Title.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: core.Inject, args: [DOCUMENT$1,] },] },
    ]; };
    return Title;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @param {?} input
 * @return {?}
 */

/**
 * @param {?} input
 * @return {?}
 */

/**
 * Exports the value under a given `name` in the global property `ng`. For example `ng.probe` if
 * `name` is `'probe'`.
 * @param {?} name Name under which it will be exported. Keep in mind this will be a property of the
 * global `ng` object.
 * @param {?} value The value to export.
 * @return {?}
 */
function exportNgVar(name, value) {
    if (typeof COMPILED === 'undefined' || !COMPILED) {
        // Note: we can't export `ng` when using closure enhanced optimization as:
        // - closure declares globals itself for minified names, which sometimes clobber our `ng` global
        // - we can't declare a closure extern as the namespace `ng` is already used within Google
        //   for typings for angularJS (via `goog.provide('ng....')`).
        var /** @type {?} */ ng = core.ɵglobal['ng'] = (/** @type {?} */ (core.ɵglobal['ng'])) || {};
        ng[name] = value;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var CORE_TOKENS = {
    'ApplicationRef': core.ApplicationRef,
    'NgZone': core.NgZone,
};
var INSPECT_GLOBAL_NAME = 'probe';
var CORE_TOKENS_GLOBAL_NAME = 'coreTokens';
/**
 * Returns a {\@link DebugElement} for the given native DOM element, or
 * null if the given native element does not have an Angular view associated
 * with it.
 * @param {?} element
 * @return {?}
 */
function inspectNativeElement(element) {
    return core.getDebugNode(element);
}
/**
 * @param {?} coreTokens
 * @return {?}
 */
function _createNgProbe(coreTokens) {
    exportNgVar(INSPECT_GLOBAL_NAME, inspectNativeElement);
    exportNgVar(CORE_TOKENS_GLOBAL_NAME, __assign({}, CORE_TOKENS, _ngProbeTokensToMap(coreTokens || [])));
    return function () { return inspectNativeElement; };
}
/**
 * @param {?} tokens
 * @return {?}
 */
function _ngProbeTokensToMap(tokens) {
    return tokens.reduce(function (prev, t) { return (prev[t.name] = t.token, prev); }, {});
}
/**
 * Providers which support debugging Angular applications (e.g. via `ng.probe`).
 */
var ELEMENT_PROBE_PROVIDERS = [
    {
        provide: core.APP_INITIALIZER,
        useFactory: _createNgProbe,
        deps: [
            [core.NgProbeToken, new core.Optional()],
        ],
        multi: true,
    },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * \@stable
 */
var EVENT_MANAGER_PLUGINS = new core.InjectionToken('EventManagerPlugins');
/**
 * \@stable
 */
var EventManager = (function () {
    function EventManager(plugins, _zone) {
        var _this = this;
        this._zone = _zone;
        this._eventNameToPlugin = new Map();
        plugins.forEach(function (p) { return p.manager = _this; });
        this._plugins = plugins.slice().reverse();
    }
    /**
     * @param {?} element
     * @param {?} eventName
     * @param {?} handler
     * @return {?}
     */
    EventManager.prototype.addEventListener = /**
     * @param {?} element
     * @param {?} eventName
     * @param {?} handler
     * @return {?}
     */
    function (element, eventName, handler) {
        var /** @type {?} */ plugin = this._findPluginFor(eventName);
        return plugin.addEventListener(element, eventName, handler);
    };
    /**
     * @param {?} target
     * @param {?} eventName
     * @param {?} handler
     * @return {?}
     */
    EventManager.prototype.addGlobalEventListener = /**
     * @param {?} target
     * @param {?} eventName
     * @param {?} handler
     * @return {?}
     */
    function (target, eventName, handler) {
        var /** @type {?} */ plugin = this._findPluginFor(eventName);
        return plugin.addGlobalEventListener(target, eventName, handler);
    };
    /**
     * @return {?}
     */
    EventManager.prototype.getZone = /**
     * @return {?}
     */
    function () { return this._zone; };
    /** @internal */
    /**
     * \@internal
     * @param {?} eventName
     * @return {?}
     */
    EventManager.prototype._findPluginFor = /**
     * \@internal
     * @param {?} eventName
     * @return {?}
     */
    function (eventName) {
        var /** @type {?} */ plugin = this._eventNameToPlugin.get(eventName);
        if (plugin) {
            return plugin;
        }
        var /** @type {?} */ plugins = this._plugins;
        for (var /** @type {?} */ i = 0; i < plugins.length; i++) {
            var /** @type {?} */ plugin_1 = plugins[i];
            if (plugin_1.supports(eventName)) {
                this._eventNameToPlugin.set(eventName, plugin_1);
                return plugin_1;
            }
        }
        throw new Error("No event manager plugin found for event " + eventName);
    };
    EventManager.decorators = [
        { type: core.Injectable },
    ];
    /** @nocollapse */
    EventManager.ctorParameters = function () { return [
        { type: Array, decorators: [{ type: core.Inject, args: [EVENT_MANAGER_PLUGINS,] },] },
        { type: core.NgZone, },
    ]; };
    return EventManager;
}());
/**
 * @abstract
 */
var EventManagerPlugin = (function () {
    function EventManagerPlugin(_doc) {
        this._doc = _doc;
    }
    /**
     * @param {?} element
     * @param {?} eventName
     * @param {?} handler
     * @return {?}
     */
    EventManagerPlugin.prototype.addGlobalEventListener = /**
     * @param {?} element
     * @param {?} eventName
     * @param {?} handler
     * @return {?}
     */
    function (element, eventName, handler) {
        var /** @type {?} */ target = getDOM().getGlobalEventTarget(this._doc, element);
        if (!target) {
            throw new Error("Unsupported event target " + target + " for event " + eventName);
        }
        return this.addEventListener(target, eventName, handler);
    };
    return EventManagerPlugin;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var SharedStylesHost = (function () {
    function SharedStylesHost() {
        /**
         * \@internal
         */
        this._stylesSet = new Set();
    }
    /**
     * @param {?} styles
     * @return {?}
     */
    SharedStylesHost.prototype.addStyles = /**
     * @param {?} styles
     * @return {?}
     */
    function (styles) {
        var _this = this;
        var /** @type {?} */ additions = new Set();
        styles.forEach(function (style) {
            if (!_this._stylesSet.has(style)) {
                _this._stylesSet.add(style);
                additions.add(style);
            }
        });
        this.onStylesAdded(additions);
    };
    /**
     * @param {?} additions
     * @return {?}
     */
    SharedStylesHost.prototype.onStylesAdded = /**
     * @param {?} additions
     * @return {?}
     */
    function (additions) { };
    /**
     * @return {?}
     */
    SharedStylesHost.prototype.getAllStyles = /**
     * @return {?}
     */
    function () { return Array.from(this._stylesSet); };
    SharedStylesHost.decorators = [
        { type: core.Injectable },
    ];
    /** @nocollapse */
    SharedStylesHost.ctorParameters = function () { return []; };
    return SharedStylesHost;
}());
var DomSharedStylesHost = (function (_super) {
    __extends(DomSharedStylesHost, _super);
    function DomSharedStylesHost(_doc) {
        var _this = _super.call(this) || this;
        _this._doc = _doc;
        _this._hostNodes = new Set();
        _this._styleNodes = new Set();
        _this._hostNodes.add(_doc.head);
        return _this;
    }
    /**
     * @param {?} styles
     * @param {?} host
     * @return {?}
     */
    DomSharedStylesHost.prototype._addStylesToHost = /**
     * @param {?} styles
     * @param {?} host
     * @return {?}
     */
    function (styles, host) {
        var _this = this;
        styles.forEach(function (style) {
            var /** @type {?} */ styleEl = _this._doc.createElement('style');
            styleEl.textContent = style;
            _this._styleNodes.add(host.appendChild(styleEl));
        });
    };
    /**
     * @param {?} hostNode
     * @return {?}
     */
    DomSharedStylesHost.prototype.addHost = /**
     * @param {?} hostNode
     * @return {?}
     */
    function (hostNode) {
        this._addStylesToHost(this._stylesSet, hostNode);
        this._hostNodes.add(hostNode);
    };
    /**
     * @param {?} hostNode
     * @return {?}
     */
    DomSharedStylesHost.prototype.removeHost = /**
     * @param {?} hostNode
     * @return {?}
     */
    function (hostNode) { this._hostNodes.delete(hostNode); };
    /**
     * @param {?} additions
     * @return {?}
     */
    DomSharedStylesHost.prototype.onStylesAdded = /**
     * @param {?} additions
     * @return {?}
     */
    function (additions) {
        var _this = this;
        this._hostNodes.forEach(function (hostNode) { return _this._addStylesToHost(additions, hostNode); });
    };
    /**
     * @return {?}
     */
    DomSharedStylesHost.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () { this._styleNodes.forEach(function (styleNode) { return getDOM().remove(styleNode); }); };
    DomSharedStylesHost.decorators = [
        { type: core.Injectable },
    ];
    /** @nocollapse */
    DomSharedStylesHost.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: core.Inject, args: [DOCUMENT$1,] },] },
    ]; };
    return DomSharedStylesHost;
}(SharedStylesHost));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var NAMESPACE_URIS = {
    'svg': 'http://www.w3.org/2000/svg',
    'xhtml': 'http://www.w3.org/1999/xhtml',
    'xlink': 'http://www.w3.org/1999/xlink',
    'xml': 'http://www.w3.org/XML/1998/namespace',
    'xmlns': 'http://www.w3.org/2000/xmlns/',
};
var COMPONENT_REGEX = /%COMP%/g;
var COMPONENT_VARIABLE = '%COMP%';
var HOST_ATTR = "_nghost-" + COMPONENT_VARIABLE;
var CONTENT_ATTR = "_ngcontent-" + COMPONENT_VARIABLE;
/**
 * @param {?} componentShortId
 * @return {?}
 */
function shimContentAttribute(componentShortId) {
    return CONTENT_ATTR.replace(COMPONENT_REGEX, componentShortId);
}
/**
 * @param {?} componentShortId
 * @return {?}
 */
function shimHostAttribute(componentShortId) {
    return HOST_ATTR.replace(COMPONENT_REGEX, componentShortId);
}
/**
 * @param {?} compId
 * @param {?} styles
 * @param {?} target
 * @return {?}
 */
function flattenStyles(compId, styles, target) {
    for (var /** @type {?} */ i = 0; i < styles.length; i++) {
        var /** @type {?} */ style = styles[i];
        if (Array.isArray(style)) {
            flattenStyles(compId, style, target);
        }
        else {
            style = style.replace(COMPONENT_REGEX, compId);
            target.push(style);
        }
    }
    return target;
}
/**
 * @param {?} eventHandler
 * @return {?}
 */
function decoratePreventDefault(eventHandler) {
    return function (event) {
        var /** @type {?} */ allowDefaultBehavior = eventHandler(event);
        if (allowDefaultBehavior === false) {
            // TODO(tbosch): move preventDefault into event plugins...
            event.preventDefault();
            event.returnValue = false;
        }
    };
}
var DomRendererFactory2 = (function () {
    function DomRendererFactory2(eventManager, sharedStylesHost) {
        this.eventManager = eventManager;
        this.sharedStylesHost = sharedStylesHost;
        this.rendererByCompId = new Map();
        this.defaultRenderer = new DefaultDomRenderer2(eventManager);
    }
    /**
     * @param {?} element
     * @param {?} type
     * @return {?}
     */
    DomRendererFactory2.prototype.createRenderer = /**
     * @param {?} element
     * @param {?} type
     * @return {?}
     */
    function (element, type) {
        if (!element || !type) {
            return this.defaultRenderer;
        }
        switch (type.encapsulation) {
            case core.ViewEncapsulation.Emulated: {
                var /** @type {?} */ renderer = this.rendererByCompId.get(type.id);
                if (!renderer) {
                    renderer =
                        new EmulatedEncapsulationDomRenderer2(this.eventManager, this.sharedStylesHost, type);
                    this.rendererByCompId.set(type.id, renderer);
                }
                (/** @type {?} */ (renderer)).applyToHost(element);
                return renderer;
            }
            case core.ViewEncapsulation.Native:
                return new ShadowDomRenderer(this.eventManager, this.sharedStylesHost, element, type);
            default: {
                if (!this.rendererByCompId.has(type.id)) {
                    var /** @type {?} */ styles = flattenStyles(type.id, type.styles, []);
                    this.sharedStylesHost.addStyles(styles);
                    this.rendererByCompId.set(type.id, this.defaultRenderer);
                }
                return this.defaultRenderer;
            }
        }
    };
    /**
     * @return {?}
     */
    DomRendererFactory2.prototype.begin = /**
     * @return {?}
     */
    function () { };
    /**
     * @return {?}
     */
    DomRendererFactory2.prototype.end = /**
     * @return {?}
     */
    function () { };
    DomRendererFactory2.decorators = [
        { type: core.Injectable },
    ];
    /** @nocollapse */
    DomRendererFactory2.ctorParameters = function () { return [
        { type: EventManager, },
        { type: DomSharedStylesHost, },
    ]; };
    return DomRendererFactory2;
}());
var DefaultDomRenderer2 = (function () {
    function DefaultDomRenderer2(eventManager) {
        this.eventManager = eventManager;
        this.data = Object.create(null);
    }
    /**
     * @return {?}
     */
    DefaultDomRenderer2.prototype.destroy = /**
     * @return {?}
     */
    function () { };
    /**
     * @param {?} name
     * @param {?=} namespace
     * @return {?}
     */
    DefaultDomRenderer2.prototype.createElement = /**
     * @param {?} name
     * @param {?=} namespace
     * @return {?}
     */
    function (name, namespace) {
        if (namespace) {
            return document.createElementNS(NAMESPACE_URIS[namespace], name);
        }
        return document.createElement(name);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    DefaultDomRenderer2.prototype.createComment = /**
     * @param {?} value
     * @return {?}
     */
    function (value) { return document.createComment(value); };
    /**
     * @param {?} value
     * @return {?}
     */
    DefaultDomRenderer2.prototype.createText = /**
     * @param {?} value
     * @return {?}
     */
    function (value) { return document.createTextNode(value); };
    /**
     * @param {?} parent
     * @param {?} newChild
     * @return {?}
     */
    DefaultDomRenderer2.prototype.appendChild = /**
     * @param {?} parent
     * @param {?} newChild
     * @return {?}
     */
    function (parent, newChild) { parent.appendChild(newChild); };
    /**
     * @param {?} parent
     * @param {?} newChild
     * @param {?} refChild
     * @return {?}
     */
    DefaultDomRenderer2.prototype.insertBefore = /**
     * @param {?} parent
     * @param {?} newChild
     * @param {?} refChild
     * @return {?}
     */
    function (parent, newChild, refChild) {
        if (parent) {
            parent.insertBefore(newChild, refChild);
        }
    };
    /**
     * @param {?} parent
     * @param {?} oldChild
     * @return {?}
     */
    DefaultDomRenderer2.prototype.removeChild = /**
     * @param {?} parent
     * @param {?} oldChild
     * @return {?}
     */
    function (parent, oldChild) {
        if (parent) {
            parent.removeChild(oldChild);
        }
    };
    /**
     * @param {?} selectorOrNode
     * @return {?}
     */
    DefaultDomRenderer2.prototype.selectRootElement = /**
     * @param {?} selectorOrNode
     * @return {?}
     */
    function (selectorOrNode) {
        var /** @type {?} */ el = typeof selectorOrNode === 'string' ? document.querySelector(selectorOrNode) :
            selectorOrNode;
        if (!el) {
            throw new Error("The selector \"" + selectorOrNode + "\" did not match any elements");
        }
        el.textContent = '';
        return el;
    };
    /**
     * @param {?} node
     * @return {?}
     */
    DefaultDomRenderer2.prototype.parentNode = /**
     * @param {?} node
     * @return {?}
     */
    function (node) { return node.parentNode; };
    /**
     * @param {?} node
     * @return {?}
     */
    DefaultDomRenderer2.prototype.nextSibling = /**
     * @param {?} node
     * @return {?}
     */
    function (node) { return node.nextSibling; };
    /**
     * @param {?} el
     * @param {?} name
     * @param {?} value
     * @param {?=} namespace
     * @return {?}
     */
    DefaultDomRenderer2.prototype.setAttribute = /**
     * @param {?} el
     * @param {?} name
     * @param {?} value
     * @param {?=} namespace
     * @return {?}
     */
    function (el, name, value, namespace) {
        if (namespace) {
            name = namespace + ":" + name;
            var /** @type {?} */ namespaceUri = NAMESPACE_URIS[namespace];
            if (namespaceUri) {
                el.setAttributeNS(namespaceUri, name, value);
            }
            else {
                el.setAttribute(name, value);
            }
        }
        else {
            el.setAttribute(name, value);
        }
    };
    /**
     * @param {?} el
     * @param {?} name
     * @param {?=} namespace
     * @return {?}
     */
    DefaultDomRenderer2.prototype.removeAttribute = /**
     * @param {?} el
     * @param {?} name
     * @param {?=} namespace
     * @return {?}
     */
    function (el, name, namespace) {
        if (namespace) {
            var /** @type {?} */ namespaceUri = NAMESPACE_URIS[namespace];
            if (namespaceUri) {
                el.removeAttributeNS(namespaceUri, name);
            }
            else {
                el.removeAttribute(namespace + ":" + name);
            }
        }
        else {
            el.removeAttribute(name);
        }
    };
    /**
     * @param {?} el
     * @param {?} name
     * @return {?}
     */
    DefaultDomRenderer2.prototype.addClass = /**
     * @param {?} el
     * @param {?} name
     * @return {?}
     */
    function (el, name) { el.classList.add(name); };
    /**
     * @param {?} el
     * @param {?} name
     * @return {?}
     */
    DefaultDomRenderer2.prototype.removeClass = /**
     * @param {?} el
     * @param {?} name
     * @return {?}
     */
    function (el, name) { el.classList.remove(name); };
    /**
     * @param {?} el
     * @param {?} style
     * @param {?} value
     * @param {?} flags
     * @return {?}
     */
    DefaultDomRenderer2.prototype.setStyle = /**
     * @param {?} el
     * @param {?} style
     * @param {?} value
     * @param {?} flags
     * @return {?}
     */
    function (el, style, value, flags) {
        if (flags & core.RendererStyleFlags2.DashCase) {
            el.style.setProperty(style, value, !!(flags & core.RendererStyleFlags2.Important) ? 'important' : '');
        }
        else {
            el.style[style] = value;
        }
    };
    /**
     * @param {?} el
     * @param {?} style
     * @param {?} flags
     * @return {?}
     */
    DefaultDomRenderer2.prototype.removeStyle = /**
     * @param {?} el
     * @param {?} style
     * @param {?} flags
     * @return {?}
     */
    function (el, style, flags) {
        if (flags & core.RendererStyleFlags2.DashCase) {
            el.style.removeProperty(style);
        }
        else {
            // IE requires '' instead of null
            // see https://github.com/angular/angular/issues/7916
            el.style[style] = '';
        }
    };
    /**
     * @param {?} el
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    DefaultDomRenderer2.prototype.setProperty = /**
     * @param {?} el
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    function (el, name, value) {
        checkNoSyntheticProp(name, 'property');
        el[name] = value;
    };
    /**
     * @param {?} node
     * @param {?} value
     * @return {?}
     */
    DefaultDomRenderer2.prototype.setValue = /**
     * @param {?} node
     * @param {?} value
     * @return {?}
     */
    function (node, value) { node.nodeValue = value; };
    /**
     * @param {?} target
     * @param {?} event
     * @param {?} callback
     * @return {?}
     */
    DefaultDomRenderer2.prototype.listen = /**
     * @param {?} target
     * @param {?} event
     * @param {?} callback
     * @return {?}
     */
    function (target, event, callback) {
        checkNoSyntheticProp(event, 'listener');
        if (typeof target === 'string') {
            return /** @type {?} */ (this.eventManager.addGlobalEventListener(target, event, decoratePreventDefault(callback)));
        }
        return /** @type {?} */ ((this.eventManager.addEventListener(target, event, decoratePreventDefault(callback))));
    };
    return DefaultDomRenderer2;
}());
var AT_CHARCODE = '@'.charCodeAt(0);
/**
 * @param {?} name
 * @param {?} nameKind
 * @return {?}
 */
function checkNoSyntheticProp(name, nameKind) {
    if (name.charCodeAt(0) === AT_CHARCODE) {
        throw new Error("Found the synthetic " + nameKind + " " + name + ". Please include either \"BrowserAnimationsModule\" or \"NoopAnimationsModule\" in your application.");
    }
}
var EmulatedEncapsulationDomRenderer2 = (function (_super) {
    __extends(EmulatedEncapsulationDomRenderer2, _super);
    function EmulatedEncapsulationDomRenderer2(eventManager, sharedStylesHost, component) {
        var _this = _super.call(this, eventManager) || this;
        _this.component = component;
        var /** @type {?} */ styles = flattenStyles(component.id, component.styles, []);
        sharedStylesHost.addStyles(styles);
        _this.contentAttr = shimContentAttribute(component.id);
        _this.hostAttr = shimHostAttribute(component.id);
        return _this;
    }
    /**
     * @param {?} element
     * @return {?}
     */
    EmulatedEncapsulationDomRenderer2.prototype.applyToHost = /**
     * @param {?} element
     * @return {?}
     */
    function (element) { _super.prototype.setAttribute.call(this, element, this.hostAttr, ''); };
    /**
     * @param {?} parent
     * @param {?} name
     * @return {?}
     */
    EmulatedEncapsulationDomRenderer2.prototype.createElement = /**
     * @param {?} parent
     * @param {?} name
     * @return {?}
     */
    function (parent, name) {
        var /** @type {?} */ el = _super.prototype.createElement.call(this, parent, name);
        _super.prototype.setAttribute.call(this, el, this.contentAttr, '');
        return el;
    };
    return EmulatedEncapsulationDomRenderer2;
}(DefaultDomRenderer2));
var ShadowDomRenderer = (function (_super) {
    __extends(ShadowDomRenderer, _super);
    function ShadowDomRenderer(eventManager, sharedStylesHost, hostEl, component) {
        var _this = _super.call(this, eventManager) || this;
        _this.sharedStylesHost = sharedStylesHost;
        _this.hostEl = hostEl;
        _this.component = component;
        _this.shadowRoot = (/** @type {?} */ (hostEl)).createShadowRoot();
        _this.sharedStylesHost.addHost(_this.shadowRoot);
        var /** @type {?} */ styles = flattenStyles(component.id, component.styles, []);
        for (var /** @type {?} */ i = 0; i < styles.length; i++) {
            var /** @type {?} */ styleEl = document.createElement('style');
            styleEl.textContent = styles[i];
            _this.shadowRoot.appendChild(styleEl);
        }
        return _this;
    }
    /**
     * @param {?} node
     * @return {?}
     */
    ShadowDomRenderer.prototype.nodeOrShadowRoot = /**
     * @param {?} node
     * @return {?}
     */
    function (node) { return node === this.hostEl ? this.shadowRoot : node; };
    /**
     * @return {?}
     */
    ShadowDomRenderer.prototype.destroy = /**
     * @return {?}
     */
    function () { this.sharedStylesHost.removeHost(this.shadowRoot); };
    /**
     * @param {?} parent
     * @param {?} newChild
     * @return {?}
     */
    ShadowDomRenderer.prototype.appendChild = /**
     * @param {?} parent
     * @param {?} newChild
     * @return {?}
     */
    function (parent, newChild) {
        return _super.prototype.appendChild.call(this, this.nodeOrShadowRoot(parent), newChild);
    };
    /**
     * @param {?} parent
     * @param {?} newChild
     * @param {?} refChild
     * @return {?}
     */
    ShadowDomRenderer.prototype.insertBefore = /**
     * @param {?} parent
     * @param {?} newChild
     * @param {?} refChild
     * @return {?}
     */
    function (parent, newChild, refChild) {
        return _super.prototype.insertBefore.call(this, this.nodeOrShadowRoot(parent), newChild, refChild);
    };
    /**
     * @param {?} parent
     * @param {?} oldChild
     * @return {?}
     */
    ShadowDomRenderer.prototype.removeChild = /**
     * @param {?} parent
     * @param {?} oldChild
     * @return {?}
     */
    function (parent, oldChild) {
        return _super.prototype.removeChild.call(this, this.nodeOrShadowRoot(parent), oldChild);
    };
    /**
     * @param {?} node
     * @return {?}
     */
    ShadowDomRenderer.prototype.parentNode = /**
     * @param {?} node
     * @return {?}
     */
    function (node) {
        return this.nodeOrShadowRoot(_super.prototype.parentNode.call(this, this.nodeOrShadowRoot(node)));
    };
    return ShadowDomRenderer;
}(DefaultDomRenderer2));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var ɵ0 = function (v) {
    return v;
};
/**
 * Detect if Zone is present. If it is then use simple zone aware 'addEventListener'
 * since Angular can do much more
 * efficient bookkeeping than Zone can, because we have additional information. This speeds up
 * addEventListener by 3x.
 */
var __symbol__ = (typeof Zone !== 'undefined') && (/** @type {?} */ (Zone))['__symbol__'] || ɵ0;
var ADD_EVENT_LISTENER = __symbol__('addEventListener');
var REMOVE_EVENT_LISTENER = __symbol__('removeEventListener');
var symbolNames = {};
var FALSE = 'FALSE';
var ANGULAR = 'ANGULAR';
var NATIVE_ADD_LISTENER = 'addEventListener';
var NATIVE_REMOVE_LISTENER = 'removeEventListener';
var blackListedEvents = (typeof Zone !== 'undefined') && (/** @type {?} */ (Zone))[__symbol__('BLACK_LISTED_EVENTS')];
var blackListedMap;
if (blackListedEvents) {
    blackListedMap = {};
    blackListedEvents.forEach(function (eventName) { blackListedMap[eventName] = eventName; });
}
var isBlackListedEvent = function (eventName) {
    if (!blackListedMap) {
        return false;
    }
    return blackListedMap.hasOwnProperty(eventName);
};
// a global listener to handle all dom event,
// so we do not need to create a closure everytime
var globalListener = function (event) {
    var /** @type {?} */ symbolName = symbolNames[event.type];
    if (!symbolName) {
        return;
    }
    var /** @type {?} */ taskDatas = this[symbolName];
    if (!taskDatas) {
        return;
    }
    var /** @type {?} */ args = [event];
    if (taskDatas.length === 1) {
        // if taskDatas only have one element, just invoke it
        var /** @type {?} */ taskData = taskDatas[0];
        if (taskData.zone !== Zone.current) {
            // only use Zone.run when Zone.current not equals to stored zone
            return taskData.zone.run(taskData.handler, this, args);
        }
        else {
            return taskData.handler.apply(this, args);
        }
    }
    else {
        // copy tasks as a snapshot to avoid event handlers remove
        // itself or others
        var /** @type {?} */ copiedTasks = taskDatas.slice();
        for (var /** @type {?} */ i = 0; i < copiedTasks.length; i++) {
            var /** @type {?} */ taskData = copiedTasks[i];
            if (taskData.zone !== Zone.current) {
                // only use Zone.run when Zone.current not equals to stored zone
                taskData.zone.run(taskData.handler, this, args);
            }
            else {
                taskData.handler.apply(this, args);
            }
        }
    }
};
var DomEventsPlugin = (function (_super) {
    __extends(DomEventsPlugin, _super);
    function DomEventsPlugin(doc, ngZone) {
        var _this = _super.call(this, doc) || this;
        _this.ngZone = ngZone;
        return _this;
    }
    // This plugin should come last in the list of plugins, because it accepts all
    // events.
    /**
     * @param {?} eventName
     * @return {?}
     */
    DomEventsPlugin.prototype.supports = /**
     * @param {?} eventName
     * @return {?}
     */
    function (eventName) { return true; };
    /**
     * @param {?} element
     * @param {?} eventName
     * @param {?} handler
     * @return {?}
     */
    DomEventsPlugin.prototype.addEventListener = /**
     * @param {?} element
     * @param {?} eventName
     * @param {?} handler
     * @return {?}
     */
    function (element, eventName, handler) {
        var _this = this;
        /**
         * This code is about to add a listener to the DOM. If Zone.js is present, than
         * `addEventListener` has been patched. The patched code adds overhead in both
         * memory and speed (3x slower) than native. For this reason if we detect that
         * Zone.js is present we use a simple version of zone aware addEventListener instead.
         * The result is faster registration and the zone will be restored.
         * But ZoneSpec.onScheduleTask, ZoneSpec.onInvokeTask, ZoneSpec.onCancelTask
         * will not be invoked
         * We also do manual zone restoration in element.ts renderEventHandlerClosure method.
         *
         * NOTE: it is possible that the element is from different iframe, and so we
         * have to check before we execute the method.
         */
        var /** @type {?} */ zoneJsLoaded = element[ADD_EVENT_LISTENER];
        var /** @type {?} */ callback = /** @type {?} */ (handler);
        // if zonejs is loaded and current zone is not ngZone
        // we keep Zone.current on target for later restoration.
        if (zoneJsLoaded && (!core.NgZone.isInAngularZone() || isBlackListedEvent(eventName))) {
            var /** @type {?} */ symbolName = symbolNames[eventName];
            if (!symbolName) {
                symbolName = symbolNames[eventName] = __symbol__(ANGULAR + eventName + FALSE);
            }
            var /** @type {?} */ taskDatas = (/** @type {?} */ (element))[symbolName];
            var /** @type {?} */ globalListenerRegistered = taskDatas && taskDatas.length > 0;
            if (!taskDatas) {
                taskDatas = (/** @type {?} */ (element))[symbolName] = [];
            }
            var /** @type {?} */ zone = isBlackListedEvent(eventName) ? Zone.root : Zone.current;
            if (taskDatas.length === 0) {
                taskDatas.push({ zone: zone, handler: callback });
            }
            else {
                var /** @type {?} */ callbackRegistered = false;
                for (var /** @type {?} */ i = 0; i < taskDatas.length; i++) {
                    if (taskDatas[i].handler === callback) {
                        callbackRegistered = true;
                        break;
                    }
                }
                if (!callbackRegistered) {
                    taskDatas.push({ zone: zone, handler: callback });
                }
            }
            if (!globalListenerRegistered) {
                element[ADD_EVENT_LISTENER](eventName, globalListener, false);
            }
        }
        else {
            element[NATIVE_ADD_LISTENER](eventName, callback, false);
        }
        return function () { return _this.removeEventListener(element, eventName, callback); };
    };
    /**
     * @param {?} target
     * @param {?} eventName
     * @param {?} callback
     * @return {?}
     */
    DomEventsPlugin.prototype.removeEventListener = /**
     * @param {?} target
     * @param {?} eventName
     * @param {?} callback
     * @return {?}
     */
    function (target, eventName, callback) {
        var /** @type {?} */ underlyingRemove = target[REMOVE_EVENT_LISTENER];
        // zone.js not loaded, use native removeEventListener
        if (!underlyingRemove) {
            return target[NATIVE_REMOVE_LISTENER].apply(target, [eventName, callback, false]);
        }
        var /** @type {?} */ symbolName = symbolNames[eventName];
        var /** @type {?} */ taskDatas = symbolName && target[symbolName];
        if (!taskDatas) {
            // addEventListener not using patched version
            // just call native removeEventListener
            return target[NATIVE_REMOVE_LISTENER].apply(target, [eventName, callback, false]);
        }
        for (var /** @type {?} */ i = 0; i < taskDatas.length; i++) {
            // remove listener from taskDatas if the callback equals
            if (taskDatas[i].handler === callback) {
                taskDatas.splice(i, 1);
                break;
            }
        }
        if (taskDatas.length === 0) {
            // all listeners are removed, we can remove the globalListener from target
            underlyingRemove.apply(target, [eventName, globalListener, false]);
        }
    };
    DomEventsPlugin.decorators = [
        { type: core.Injectable },
    ];
    /** @nocollapse */
    DomEventsPlugin.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: core.Inject, args: [DOCUMENT$1,] },] },
        { type: core.NgZone, },
    ]; };
    return DomEventsPlugin;
}(EventManagerPlugin));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var EVENT_NAMES = {
    // pan
    'pan': true,
    'panstart': true,
    'panmove': true,
    'panend': true,
    'pancancel': true,
    'panleft': true,
    'panright': true,
    'panup': true,
    'pandown': true,
    // pinch
    'pinch': true,
    'pinchstart': true,
    'pinchmove': true,
    'pinchend': true,
    'pinchcancel': true,
    'pinchin': true,
    'pinchout': true,
    // press
    'press': true,
    'pressup': true,
    // rotate
    'rotate': true,
    'rotatestart': true,
    'rotatemove': true,
    'rotateend': true,
    'rotatecancel': true,
    // swipe
    'swipe': true,
    'swipeleft': true,
    'swiperight': true,
    'swipeup': true,
    'swipedown': true,
    // tap
    'tap': true,
};
/**
 * A DI token that you can use to provide{\@link HammerGestureConfig} to Angular. Use it to configure
 * Hammer gestures.
 *
 * \@experimental
 */
var HAMMER_GESTURE_CONFIG = new core.InjectionToken('HammerGestureConfig');
/**
 * @record
 */

/**
 * \@experimental
 */
var HammerGestureConfig = (function () {
    function HammerGestureConfig() {
        this.events = [];
        this.overrides = {};
    }
    /**
     * @param {?} element
     * @return {?}
     */
    HammerGestureConfig.prototype.buildHammer = /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        var /** @type {?} */ mc = new Hammer(element);
        mc.get('pinch').set({ enable: true });
        mc.get('rotate').set({ enable: true });
        for (var /** @type {?} */ eventName in this.overrides) {
            mc.get(eventName).set(this.overrides[eventName]);
        }
        return mc;
    };
    HammerGestureConfig.decorators = [
        { type: core.Injectable },
    ];
    /** @nocollapse */
    HammerGestureConfig.ctorParameters = function () { return []; };
    return HammerGestureConfig;
}());
var HammerGesturesPlugin = (function (_super) {
    __extends(HammerGesturesPlugin, _super);
    function HammerGesturesPlugin(doc, _config) {
        var _this = _super.call(this, doc) || this;
        _this._config = _config;
        return _this;
    }
    /**
     * @param {?} eventName
     * @return {?}
     */
    HammerGesturesPlugin.prototype.supports = /**
     * @param {?} eventName
     * @return {?}
     */
    function (eventName) {
        if (!EVENT_NAMES.hasOwnProperty(eventName.toLowerCase()) && !this.isCustomEvent(eventName)) {
            return false;
        }
        if (!(/** @type {?} */ (window)).Hammer) {
            throw new Error("Hammer.js is not loaded, can not bind " + eventName + " event");
        }
        return true;
    };
    /**
     * @param {?} element
     * @param {?} eventName
     * @param {?} handler
     * @return {?}
     */
    HammerGesturesPlugin.prototype.addEventListener = /**
     * @param {?} element
     * @param {?} eventName
     * @param {?} handler
     * @return {?}
     */
    function (element, eventName, handler) {
        var _this = this;
        var /** @type {?} */ zone = this.manager.getZone();
        eventName = eventName.toLowerCase();
        return zone.runOutsideAngular(function () {
            // Creating the manager bind events, must be done outside of angular
            var /** @type {?} */ mc = _this._config.buildHammer(element);
            var /** @type {?} */ callback = function (eventObj) {
                zone.runGuarded(function () { handler(eventObj); });
            };
            mc.on(eventName, callback);
            return function () { return mc.off(eventName, callback); };
        });
    };
    /**
     * @param {?} eventName
     * @return {?}
     */
    HammerGesturesPlugin.prototype.isCustomEvent = /**
     * @param {?} eventName
     * @return {?}
     */
    function (eventName) { return this._config.events.indexOf(eventName) > -1; };
    HammerGesturesPlugin.decorators = [
        { type: core.Injectable },
    ];
    /** @nocollapse */
    HammerGesturesPlugin.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: core.Inject, args: [DOCUMENT$1,] },] },
        { type: HammerGestureConfig, decorators: [{ type: core.Inject, args: [HAMMER_GESTURE_CONFIG,] },] },
    ]; };
    return HammerGesturesPlugin;
}(EventManagerPlugin));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var MODIFIER_KEYS = ['alt', 'control', 'meta', 'shift'];
var ɵ0$1 = function (event) { return event.altKey; };
var ɵ1$1 = function (event) { return event.ctrlKey; };
var ɵ2$1 = function (event) { return event.metaKey; };
var ɵ3 = function (event) { return event.shiftKey; };
var MODIFIER_KEY_GETTERS = {
    'alt': ɵ0$1,
    'control': ɵ1$1,
    'meta': ɵ2$1,
    'shift': ɵ3
};
/**
 * \@experimental
 */
var KeyEventsPlugin = (function (_super) {
    __extends(KeyEventsPlugin, _super);
    function KeyEventsPlugin(doc) {
        return _super.call(this, doc) || this;
    }
    /**
     * @param {?} eventName
     * @return {?}
     */
    KeyEventsPlugin.prototype.supports = /**
     * @param {?} eventName
     * @return {?}
     */
    function (eventName) { return KeyEventsPlugin.parseEventName(eventName) != null; };
    /**
     * @param {?} element
     * @param {?} eventName
     * @param {?} handler
     * @return {?}
     */
    KeyEventsPlugin.prototype.addEventListener = /**
     * @param {?} element
     * @param {?} eventName
     * @param {?} handler
     * @return {?}
     */
    function (element, eventName, handler) {
        var /** @type {?} */ parsedEvent = /** @type {?} */ ((KeyEventsPlugin.parseEventName(eventName)));
        var /** @type {?} */ outsideHandler = KeyEventsPlugin.eventCallback(parsedEvent['fullKey'], handler, this.manager.getZone());
        return this.manager.getZone().runOutsideAngular(function () {
            return getDOM().onAndCancel(element, parsedEvent['domEventName'], outsideHandler);
        });
    };
    /**
     * @param {?} eventName
     * @return {?}
     */
    KeyEventsPlugin.parseEventName = /**
     * @param {?} eventName
     * @return {?}
     */
    function (eventName) {
        var /** @type {?} */ parts = eventName.toLowerCase().split('.');
        var /** @type {?} */ domEventName = parts.shift();
        if ((parts.length === 0) || !(domEventName === 'keydown' || domEventName === 'keyup')) {
            return null;
        }
        var /** @type {?} */ key = KeyEventsPlugin._normalizeKey(/** @type {?} */ ((parts.pop())));
        var /** @type {?} */ fullKey = '';
        MODIFIER_KEYS.forEach(function (modifierName) {
            var /** @type {?} */ index = parts.indexOf(modifierName);
            if (index > -1) {
                parts.splice(index, 1);
                fullKey += modifierName + '.';
            }
        });
        fullKey += key;
        if (parts.length != 0 || key.length === 0) {
            // returning null instead of throwing to let another plugin process the event
            return null;
        }
        var /** @type {?} */ result = {};
        result['domEventName'] = domEventName;
        result['fullKey'] = fullKey;
        return result;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    KeyEventsPlugin.getEventFullKey = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var /** @type {?} */ fullKey = '';
        var /** @type {?} */ key = getDOM().getEventKey(event);
        key = key.toLowerCase();
        if (key === ' ') {
            key = 'space'; // for readability
        }
        else if (key === '.') {
            key = 'dot'; // because '.' is used as a separator in event names
        }
        MODIFIER_KEYS.forEach(function (modifierName) {
            if (modifierName != key) {
                var /** @type {?} */ modifierGetter = MODIFIER_KEY_GETTERS[modifierName];
                if (modifierGetter(event)) {
                    fullKey += modifierName + '.';
                }
            }
        });
        fullKey += key;
        return fullKey;
    };
    /**
     * @param {?} fullKey
     * @param {?} handler
     * @param {?} zone
     * @return {?}
     */
    KeyEventsPlugin.eventCallback = /**
     * @param {?} fullKey
     * @param {?} handler
     * @param {?} zone
     * @return {?}
     */
    function (fullKey, handler, zone) {
        return function (event /** TODO #9100 */) {
            if (KeyEventsPlugin.getEventFullKey(event) === fullKey) {
                zone.runGuarded(function () { return handler(event); });
            }
        };
    };
    /** @internal */
    /**
     * \@internal
     * @param {?} keyName
     * @return {?}
     */
    KeyEventsPlugin._normalizeKey = /**
     * \@internal
     * @param {?} keyName
     * @return {?}
     */
    function (keyName) {
        // TODO: switch to a Map if the mapping grows too much
        switch (keyName) {
            case 'esc':
                return 'escape';
            default:
                return keyName;
        }
    };
    KeyEventsPlugin.decorators = [
        { type: core.Injectable },
    ];
    /** @nocollapse */
    KeyEventsPlugin.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: core.Inject, args: [DOCUMENT$1,] },] },
    ]; };
    return KeyEventsPlugin;
}(EventManagerPlugin));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * A pattern that recognizes a commonly useful subset of URLs that are safe.
 *
 * This regular expression matches a subset of URLs that will not cause script
 * execution if used in URL context within a HTML document. Specifically, this
 * regular expression matches if (comment from here on and regex copied from
 * Soy's EscapingConventions):
 * (1) Either a protocol in a whitelist (http, https, mailto or ftp).
 * (2) or no protocol.  A protocol must be followed by a colon. The below
 *     allows that by allowing colons only after one of the characters [/?#].
 *     A colon after a hash (#) must be in the fragment.
 *     Otherwise, a colon after a (?) must be in a query.
 *     Otherwise, a colon after a single solidus (/) must be in a path.
 *     Otherwise, a colon after a double solidus (//) must be in the authority
 *     (before port).
 *
 * The pattern disallows &, used in HTML entity declarations before
 * one of the characters in [/?#]. This disallows HTML entities used in the
 * protocol name, which should never happen, e.g. "h&#116;tp" for "http".
 * It also disallows HTML entities in the first path part of a relative path,
 * e.g. "foo&lt;bar/baz".  Our existing escaping functions should not produce
 * that. More importantly, it disallows masking of a colon,
 * e.g. "javascript&#58;...".
 *
 * This regular expression was taken from the Closure sanitization library.
 */
var SAFE_URL_PATTERN = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi;
/**
 * A pattern that matches safe data URLs. Only matches image, video and audio types.
 */
var DATA_URL_PATTERN = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i;
/**
 * @param {?} url
 * @return {?}
 */
function sanitizeUrl(url) {
    url = String(url);
    if (url.match(SAFE_URL_PATTERN) || url.match(DATA_URL_PATTERN))
        return url;
    if (core.isDevMode()) {
        getDOM().log("WARNING: sanitizing unsafe URL value " + url + " (see http://g.co/ng/security#xss)");
    }
    return 'unsafe:' + url;
}
/**
 * @param {?} srcset
 * @return {?}
 */
function sanitizeSrcset(srcset) {
    srcset = String(srcset);
    return srcset.split(',').map(function (srcset) { return sanitizeUrl(srcset.trim()); }).join(', ');
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * A <body> element that can be safely used to parse untrusted HTML. Lazily initialized below.
 */
var inertElement = null;
/**
 * Lazily initialized to make sure the DOM adapter gets set before use.
 */
var DOM = /** @type {?} */ ((null));
/**
 * Returns an HTML element that is guaranteed to not execute code when creating elements in it.
 * @return {?}
 */
function getInertElement() {
    if (inertElement)
        return inertElement;
    DOM = getDOM();
    // Prefer using <template> element if supported.
    var /** @type {?} */ templateEl = DOM.createElement('template');
    if ('content' in templateEl)
        return templateEl;
    var /** @type {?} */ doc = DOM.createHtmlDocument();
    inertElement = DOM.querySelector(doc, 'body');
    if (inertElement == null) {
        // usually there should be only one body element in the document, but IE doesn't have any, so we
        // need to create one.
        var /** @type {?} */ html = DOM.createElement('html', doc);
        inertElement = DOM.createElement('body', doc);
        DOM.appendChild(html, inertElement);
        DOM.appendChild(doc, html);
    }
    return inertElement;
}
/**
 * @param {?} tags
 * @return {?}
 */
function tagSet(tags) {
    var /** @type {?} */ res = {};
    for (var _i = 0, _a = tags.split(','); _i < _a.length; _i++) {
        var t = _a[_i];
        res[t] = true;
    }
    return res;
}
/**
 * @param {...?} sets
 * @return {?}
 */
function merge() {
    var sets = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        sets[_i] = arguments[_i];
    }
    var /** @type {?} */ res = {};
    for (var _a = 0, sets_1 = sets; _a < sets_1.length; _a++) {
        var s = sets_1[_a];
        for (var /** @type {?} */ v in s) {
            if (s.hasOwnProperty(v))
                res[v] = true;
        }
    }
    return res;
}
// Good source of info about elements and attributes
// http://dev.w3.org/html5/spec/Overview.html#semantics
// http://simon.html5.org/html-elements
// Safe Void Elements - HTML5
// http://dev.w3.org/html5/spec/Overview.html#void-elements
var VOID_ELEMENTS = tagSet('area,br,col,hr,img,wbr');
// Elements that you can, intentionally, leave open (and which close themselves)
// http://dev.w3.org/html5/spec/Overview.html#optional-tags
var OPTIONAL_END_TAG_BLOCK_ELEMENTS = tagSet('colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr');
var OPTIONAL_END_TAG_INLINE_ELEMENTS = tagSet('rp,rt');
var OPTIONAL_END_TAG_ELEMENTS = merge(OPTIONAL_END_TAG_INLINE_ELEMENTS, OPTIONAL_END_TAG_BLOCK_ELEMENTS);
// Safe Block Elements - HTML5
var BLOCK_ELEMENTS = merge(OPTIONAL_END_TAG_BLOCK_ELEMENTS, tagSet('address,article,' +
    'aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,' +
    'h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul'));
// Inline Elements - HTML5
var INLINE_ELEMENTS = merge(OPTIONAL_END_TAG_INLINE_ELEMENTS, tagSet('a,abbr,acronym,audio,b,' +
    'bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,' +
    'samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video'));
var VALID_ELEMENTS = merge(VOID_ELEMENTS, BLOCK_ELEMENTS, INLINE_ELEMENTS, OPTIONAL_END_TAG_ELEMENTS);
// Attributes that have href and hence need to be sanitized
var URI_ATTRS = tagSet('background,cite,href,itemtype,longdesc,poster,src,xlink:href');
// Attributes that have special href set hence need to be sanitized
var SRCSET_ATTRS = tagSet('srcset');
var HTML_ATTRS = tagSet('abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,' +
    'compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,' +
    'ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,' +
    'scope,scrolling,shape,size,sizes,span,srclang,start,summary,tabindex,target,title,translate,type,usemap,' +
    'valign,value,vspace,width');
// NB: This currently consciously doesn't support SVG. SVG sanitization has had several security
// issues in the past, so it seems safer to leave it out if possible. If support for binding SVG via
// innerHTML is required, SVG attributes should be added here.
// NB: Sanitization does not allow <form> elements or other active elements (<button> etc). Those
// can be sanitized, but they increase security surface area without a legitimate use case, so they
// are left out here.
var VALID_ATTRS = merge(URI_ATTRS, SRCSET_ATTRS, HTML_ATTRS);
/**
 * SanitizingHtmlSerializer serializes a DOM fragment, stripping out any unsafe elements and unsafe
 * attributes.
 */
var SanitizingHtmlSerializer = (function () {
    function SanitizingHtmlSerializer() {
        this.sanitizedSomething = false;
        this.buf = [];
    }
    /**
     * @param {?} el
     * @return {?}
     */
    SanitizingHtmlSerializer.prototype.sanitizeChildren = /**
     * @param {?} el
     * @return {?}
     */
    function (el) {
        // This cannot use a TreeWalker, as it has to run on Angular's various DOM adapters.
        // However this code never accesses properties off of `document` before deleting its contents
        // again, so it shouldn't be vulnerable to DOM clobbering.
        var /** @type {?} */ current = /** @type {?} */ ((el.firstChild));
        while (current) {
            if (DOM.isElementNode(current)) {
                this.startElement(/** @type {?} */ (current));
            }
            else if (DOM.isTextNode(current)) {
                this.chars(/** @type {?} */ ((DOM.nodeValue(current))));
            }
            else {
                // Strip non-element, non-text nodes.
                this.sanitizedSomething = true;
            }
            if (DOM.firstChild(current)) {
                current = /** @type {?} */ ((DOM.firstChild(current)));
                continue;
            }
            while (current) {
                // Leaving the element. Walk up and to the right, closing tags as we go.
                if (DOM.isElementNode(current)) {
                    this.endElement(/** @type {?} */ (current));
                }
                var /** @type {?} */ next = checkClobberedElement(current, /** @type {?} */ ((DOM.nextSibling(current))));
                if (next) {
                    current = next;
                    break;
                }
                current = checkClobberedElement(current, /** @type {?} */ ((DOM.parentElement(current))));
            }
        }
        return this.buf.join('');
    };
    /**
     * @param {?} element
     * @return {?}
     */
    SanitizingHtmlSerializer.prototype.startElement = /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        var _this = this;
        var /** @type {?} */ tagName = DOM.nodeName(element).toLowerCase();
        if (!VALID_ELEMENTS.hasOwnProperty(tagName)) {
            this.sanitizedSomething = true;
            return;
        }
        this.buf.push('<');
        this.buf.push(tagName);
        DOM.attributeMap(element).forEach(function (value, attrName) {
            var /** @type {?} */ lower = attrName.toLowerCase();
            if (!VALID_ATTRS.hasOwnProperty(lower)) {
                _this.sanitizedSomething = true;
                return;
            }
            // TODO(martinprobst): Special case image URIs for data:image/...
            if (URI_ATTRS[lower])
                value = sanitizeUrl(value);
            if (SRCSET_ATTRS[lower])
                value = sanitizeSrcset(value);
            _this.buf.push(' ');
            _this.buf.push(attrName);
            _this.buf.push('="');
            _this.buf.push(encodeEntities(value));
            _this.buf.push('"');
        });
        this.buf.push('>');
    };
    /**
     * @param {?} current
     * @return {?}
     */
    SanitizingHtmlSerializer.prototype.endElement = /**
     * @param {?} current
     * @return {?}
     */
    function (current) {
        var /** @type {?} */ tagName = DOM.nodeName(current).toLowerCase();
        if (VALID_ELEMENTS.hasOwnProperty(tagName) && !VOID_ELEMENTS.hasOwnProperty(tagName)) {
            this.buf.push('</');
            this.buf.push(tagName);
            this.buf.push('>');
        }
    };
    /**
     * @param {?} chars
     * @return {?}
     */
    SanitizingHtmlSerializer.prototype.chars = /**
     * @param {?} chars
     * @return {?}
     */
    function (chars) { this.buf.push(encodeEntities(chars)); };
    return SanitizingHtmlSerializer;
}());
/**
 * @param {?} node
 * @param {?} nextNode
 * @return {?}
 */
function checkClobberedElement(node, nextNode) {
    if (nextNode && DOM.contains(node, nextNode)) {
        throw new Error("Failed to sanitize html because the element is clobbered: " + DOM.getOuterHTML(node));
    }
    return nextNode;
}
// Regular Expressions for parsing tags and attributes
var SURROGATE_PAIR_REGEXP = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
// ! to ~ is the ASCII range.
var NON_ALPHANUMERIC_REGEXP = /([^\#-~ |!])/g;
/**
 * Escapes all potentially dangerous characters, so that the
 * resulting string can be safely inserted into attribute or
 * element text.
 * @param {?} value
 * @return {?}
 */
function encodeEntities(value) {
    return value.replace(/&/g, '&amp;')
        .replace(SURROGATE_PAIR_REGEXP, function (match) {
        var /** @type {?} */ hi = match.charCodeAt(0);
        var /** @type {?} */ low = match.charCodeAt(1);
        return '&#' + (((hi - 0xD800) * 0x400) + (low - 0xDC00) + 0x10000) + ';';
    })
        .replace(NON_ALPHANUMERIC_REGEXP, function (match) { return '&#' + match.charCodeAt(0) + ';'; })
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
}
/**
 * When IE9-11 comes across an unknown namespaced attribute e.g. 'xlink:foo' it adds 'xmlns:ns1'
 * attribute to declare ns1 namespace and prefixes the attribute with 'ns1' (e.g. 'ns1:xlink:foo').
 *
 * This is undesirable since we don't want to allow any of these custom attributes. This method
 * strips them all.
 * @param {?} el
 * @return {?}
 */
function stripCustomNsAttrs(el) {
    DOM.attributeMap(el).forEach(function (_, attrName) {
        if (attrName === 'xmlns:ns1' || attrName.indexOf('ns1:') === 0) {
            DOM.removeAttribute(el, attrName);
        }
    });
    for (var _i = 0, _a = DOM.childNodesAsList(el); _i < _a.length; _i++) {
        var n = _a[_i];
        if (DOM.isElementNode(n))
            stripCustomNsAttrs(/** @type {?} */ (n));
    }
}
/**
 * Sanitizes the given unsafe, untrusted HTML fragment, and returns HTML text that is safe to add to
 * the DOM in a browser environment.
 * @param {?} defaultDoc
 * @param {?} unsafeHtmlInput
 * @return {?}
 */
function sanitizeHtml(defaultDoc, unsafeHtmlInput) {
    try {
        var /** @type {?} */ containerEl = getInertElement();
        // Make sure unsafeHtml is actually a string (TypeScript types are not enforced at runtime).
        var /** @type {?} */ unsafeHtml = unsafeHtmlInput ? String(unsafeHtmlInput) : '';
        // mXSS protection. Repeatedly parse the document to make sure it stabilizes, so that a browser
        // trying to auto-correct incorrect HTML cannot cause formerly inert HTML to become dangerous.
        var /** @type {?} */ mXSSAttempts = 5;
        var /** @type {?} */ parsedHtml = unsafeHtml;
        do {
            if (mXSSAttempts === 0) {
                throw new Error('Failed to sanitize html because the input is unstable');
            }
            mXSSAttempts--;
            unsafeHtml = parsedHtml;
            DOM.setInnerHTML(containerEl, unsafeHtml);
            if (defaultDoc.documentMode) {
                // strip custom-namespaced attributes on IE<=11
                stripCustomNsAttrs(containerEl);
            }
            parsedHtml = DOM.getInnerHTML(containerEl);
        } while (unsafeHtml !== parsedHtml);
        var /** @type {?} */ sanitizer = new SanitizingHtmlSerializer();
        var /** @type {?} */ safeHtml = sanitizer.sanitizeChildren(DOM.getTemplateContent(containerEl) || containerEl);
        // Clear out the body element.
        var /** @type {?} */ parent_1 = DOM.getTemplateContent(containerEl) || containerEl;
        for (var _i = 0, _a = DOM.childNodesAsList(parent_1); _i < _a.length; _i++) {
            var child = _a[_i];
            DOM.removeChild(parent_1, child);
        }
        if (core.isDevMode() && sanitizer.sanitizedSomething) {
            DOM.log('WARNING: sanitizing HTML stripped some content (see http://g.co/ng/security#xss).');
        }
        return safeHtml;
    }
    catch (/** @type {?} */ e) {
        // In case anything goes wrong, clear out inertElement to reset the entire DOM structure.
        inertElement = null;
        throw e;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Regular expression for safe style values.
 *
 * Quotes (" and ') are allowed, but a check must be done elsewhere to ensure they're balanced.
 *
 * ',' allows multiple values to be assigned to the same property (e.g. background-attachment or
 * font-family) and hence could allow multiple values to get injected, but that should pose no risk
 * of XSS.
 *
 * The function expression checks only for XSS safety, not for CSS validity.
 *
 * This regular expression was taken from the Closure sanitization library, and augmented for
 * transformation values.
 */
var VALUES = '[-,."\'%_!# a-zA-Z0-9]+';
var TRANSFORMATION_FNS = '(?:matrix|translate|scale|rotate|skew|perspective)(?:X|Y|3d)?';
var COLOR_FNS = '(?:rgb|hsl)a?';
var GRADIENTS = '(?:repeating-)?(?:linear|radial)-gradient';
var CSS3_FNS = '(?:calc|attr)';
var FN_ARGS = '\\([-0-9.%, #a-zA-Z]+\\)';
var SAFE_STYLE_VALUE = new RegExp("^(" + VALUES + "|" +
    ("(?:" + TRANSFORMATION_FNS + "|" + COLOR_FNS + "|" + GRADIENTS + "|" + CSS3_FNS + ")") +
    (FN_ARGS + ")$"), 'g');
/**
 * Matches a `url(...)` value with an arbitrary argument as long as it does
 * not contain parentheses.
 *
 * The URL value still needs to be sanitized separately.
 *
 * `url(...)` values are a very common use case, e.g. for `background-image`. With carefully crafted
 * CSS style rules, it is possible to construct an information leak with `url` values in CSS, e.g.
 * by observing whether scroll bars are displayed, or character ranges used by a font face
 * definition.
 *
 * Angular only allows binding CSS values (as opposed to entire CSS rules), so it is unlikely that
 * binding a URL value without further cooperation from the page will cause an information leak, and
 * if so, it is just a leak, not a full blown XSS vulnerability.
 *
 * Given the common use case, low likelihood of attack vector, and low impact of an attack, this
 * code is permissive and allows URLs that sanitize otherwise.
 */
var URL_RE = /^url\(([^)]+)\)$/;
/**
 * Checks that quotes (" and ') are properly balanced inside a string. Assumes
 * that neither escape (\) nor any other character that could result in
 * breaking out of a string parsing context are allowed;
 * see http://www.w3.org/TR/css3-syntax/#string-token-diagram.
 *
 * This code was taken from the Closure sanitization library.
 * @param {?} value
 * @return {?}
 */
function hasBalancedQuotes(value) {
    var /** @type {?} */ outsideSingle = true;
    var /** @type {?} */ outsideDouble = true;
    for (var /** @type {?} */ i = 0; i < value.length; i++) {
        var /** @type {?} */ c = value.charAt(i);
        if (c === '\'' && outsideDouble) {
            outsideSingle = !outsideSingle;
        }
        else if (c === '"' && outsideSingle) {
            outsideDouble = !outsideDouble;
        }
    }
    return outsideSingle && outsideDouble;
}
/**
 * Sanitizes the given untrusted CSS style property value (i.e. not an entire object, just a single
 * value) and returns a value that is safe to use in a browser environment.
 * @param {?} value
 * @return {?}
 */
function sanitizeStyle(value) {
    value = String(value).trim(); // Make sure it's actually a string.
    if (!value)
        return '';
    // Single url(...) values are supported, but only for URLs that sanitize cleanly. See above for
    // reasoning behind this.
    var /** @type {?} */ urlMatch = value.match(URL_RE);
    if ((urlMatch && sanitizeUrl(urlMatch[1]) === urlMatch[1]) ||
        value.match(SAFE_STYLE_VALUE) && hasBalancedQuotes(value)) {
        return value; // Safe style values.
    }
    if (core.isDevMode()) {
        getDOM().log("WARNING: sanitizing unsafe style value " + value + " (see http://g.co/ng/security#xss).");
    }
    return 'unsafe';
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Marker interface for a value that's safe to use in a particular context.
 *
 * \@stable
 * @record
 */

/**
 * Marker interface for a value that's safe to use as HTML.
 *
 * \@stable
 * @record
 */

/**
 * Marker interface for a value that's safe to use as style (CSS).
 *
 * \@stable
 * @record
 */

/**
 * Marker interface for a value that's safe to use as JavaScript.
 *
 * \@stable
 * @record
 */

/**
 * Marker interface for a value that's safe to use as a URL linking to a document.
 *
 * \@stable
 * @record
 */

/**
 * Marker interface for a value that's safe to use as a URL to load executable code from.
 *
 * \@stable
 * @record
 */

/**
 * DomSanitizer helps preventing Cross Site Scripting Security bugs (XSS) by sanitizing
 * values to be safe to use in the different DOM contexts.
 *
 * For example, when binding a URL in an `<a [href]="someValue">` hyperlink, `someValue` will be
 * sanitized so that an attacker cannot inject e.g. a `javascript:` URL that would execute code on
 * the website.
 *
 * In specific situations, it might be necessary to disable sanitization, for example if the
 * application genuinely needs to produce a `javascript:` style link with a dynamic value in it.
 * Users can bypass security by constructing a value with one of the `bypassSecurityTrust...`
 * methods, and then binding to that value from the template.
 *
 * These situations should be very rare, and extraordinary care must be taken to avoid creating a
 * Cross Site Scripting (XSS) security bug!
 *
 * When using `bypassSecurityTrust...`, make sure to call the method as early as possible and as
 * close as possible to the source of the value, to make it easy to verify no security bug is
 * created by its use.
 *
 * It is not required (and not recommended) to bypass security if the value is safe, e.g. a URL that
 * does not start with a suspicious protocol, or an HTML snippet that does not contain dangerous
 * code. The sanitizer leaves safe values intact.
 *
 * \@security Calling any of the `bypassSecurityTrust...` APIs disables Angular's built-in
 * sanitization for the value passed in. Carefully check and audit all values and code paths going
 * into this call. Make sure any user data is appropriately escaped for this security context.
 * For more detail, see the [Security Guide](http://g.co/ng/security).
 *
 * \@stable
 * @abstract
 */
var DomSanitizer = (function () {
    function DomSanitizer() {
    }
    return DomSanitizer;
}());
var DomSanitizerImpl = (function (_super) {
    __extends(DomSanitizerImpl, _super);
    function DomSanitizerImpl(_doc) {
        var _this = _super.call(this) || this;
        _this._doc = _doc;
        return _this;
    }
    /**
     * @param {?} ctx
     * @param {?} value
     * @return {?}
     */
    DomSanitizerImpl.prototype.sanitize = /**
     * @param {?} ctx
     * @param {?} value
     * @return {?}
     */
    function (ctx, value) {
        if (value == null)
            return null;
        switch (ctx) {
            case core.SecurityContext.NONE:
                return /** @type {?} */ (value);
            case core.SecurityContext.HTML:
                if (value instanceof SafeHtmlImpl)
                    return value.changingThisBreaksApplicationSecurity;
                this.checkNotSafeValue(value, 'HTML');
                return sanitizeHtml(this._doc, String(value));
            case core.SecurityContext.STYLE:
                if (value instanceof SafeStyleImpl)
                    return value.changingThisBreaksApplicationSecurity;
                this.checkNotSafeValue(value, 'Style');
                return sanitizeStyle(/** @type {?} */ (value));
            case core.SecurityContext.SCRIPT:
                if (value instanceof SafeScriptImpl)
                    return value.changingThisBreaksApplicationSecurity;
                this.checkNotSafeValue(value, 'Script');
                throw new Error('unsafe value used in a script context');
            case core.SecurityContext.URL:
                if (value instanceof SafeResourceUrlImpl || value instanceof SafeUrlImpl) {
                    // Allow resource URLs in URL contexts, they are strictly more trusted.
                    return value.changingThisBreaksApplicationSecurity;
                }
                this.checkNotSafeValue(value, 'URL');
                return sanitizeUrl(String(value));
            case core.SecurityContext.RESOURCE_URL:
                if (value instanceof SafeResourceUrlImpl) {
                    return value.changingThisBreaksApplicationSecurity;
                }
                this.checkNotSafeValue(value, 'ResourceURL');
                throw new Error('unsafe value used in a resource URL context (see http://g.co/ng/security#xss)');
            default:
                throw new Error("Unexpected SecurityContext " + ctx + " (see http://g.co/ng/security#xss)");
        }
    };
    /**
     * @param {?} value
     * @param {?} expectedType
     * @return {?}
     */
    DomSanitizerImpl.prototype.checkNotSafeValue = /**
     * @param {?} value
     * @param {?} expectedType
     * @return {?}
     */
    function (value, expectedType) {
        if (value instanceof SafeValueImpl) {
            throw new Error("Required a safe " + expectedType + ", got a " + value.getTypeName() + " " +
                "(see http://g.co/ng/security#xss)");
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    DomSanitizerImpl.prototype.bypassSecurityTrustHtml = /**
     * @param {?} value
     * @return {?}
     */
    function (value) { return new SafeHtmlImpl(value); };
    /**
     * @param {?} value
     * @return {?}
     */
    DomSanitizerImpl.prototype.bypassSecurityTrustStyle = /**
     * @param {?} value
     * @return {?}
     */
    function (value) { return new SafeStyleImpl(value); };
    /**
     * @param {?} value
     * @return {?}
     */
    DomSanitizerImpl.prototype.bypassSecurityTrustScript = /**
     * @param {?} value
     * @return {?}
     */
    function (value) { return new SafeScriptImpl(value); };
    /**
     * @param {?} value
     * @return {?}
     */
    DomSanitizerImpl.prototype.bypassSecurityTrustUrl = /**
     * @param {?} value
     * @return {?}
     */
    function (value) { return new SafeUrlImpl(value); };
    /**
     * @param {?} value
     * @return {?}
     */
    DomSanitizerImpl.prototype.bypassSecurityTrustResourceUrl = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return new SafeResourceUrlImpl(value);
    };
    DomSanitizerImpl.decorators = [
        { type: core.Injectable },
    ];
    /** @nocollapse */
    DomSanitizerImpl.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: core.Inject, args: [DOCUMENT$1,] },] },
    ]; };
    return DomSanitizerImpl;
}(DomSanitizer));
/**
 * @abstract
 */
var SafeValueImpl = (function () {
    function SafeValueImpl(changingThisBreaksApplicationSecurity) {
        // empty
        this.changingThisBreaksApplicationSecurity = changingThisBreaksApplicationSecurity;
    }
    /**
     * @return {?}
     */
    SafeValueImpl.prototype.toString = /**
     * @return {?}
     */
    function () {
        return "SafeValue must use [property]=binding: " + this.changingThisBreaksApplicationSecurity +
            " (see http://g.co/ng/security#xss)";
    };
    return SafeValueImpl;
}());
var SafeHtmlImpl = (function (_super) {
    __extends(SafeHtmlImpl, _super);
    function SafeHtmlImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @return {?}
     */
    SafeHtmlImpl.prototype.getTypeName = /**
     * @return {?}
     */
    function () { return 'HTML'; };
    return SafeHtmlImpl;
}(SafeValueImpl));
var SafeStyleImpl = (function (_super) {
    __extends(SafeStyleImpl, _super);
    function SafeStyleImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @return {?}
     */
    SafeStyleImpl.prototype.getTypeName = /**
     * @return {?}
     */
    function () { return 'Style'; };
    return SafeStyleImpl;
}(SafeValueImpl));
var SafeScriptImpl = (function (_super) {
    __extends(SafeScriptImpl, _super);
    function SafeScriptImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @return {?}
     */
    SafeScriptImpl.prototype.getTypeName = /**
     * @return {?}
     */
    function () { return 'Script'; };
    return SafeScriptImpl;
}(SafeValueImpl));
var SafeUrlImpl = (function (_super) {
    __extends(SafeUrlImpl, _super);
    function SafeUrlImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @return {?}
     */
    SafeUrlImpl.prototype.getTypeName = /**
     * @return {?}
     */
    function () { return 'URL'; };
    return SafeUrlImpl;
}(SafeValueImpl));
var SafeResourceUrlImpl = (function (_super) {
    __extends(SafeResourceUrlImpl, _super);
    function SafeResourceUrlImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @return {?}
     */
    SafeResourceUrlImpl.prototype.getTypeName = /**
     * @return {?}
     */
    function () { return 'ResourceURL'; };
    return SafeResourceUrlImpl;
}(SafeValueImpl));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var INTERNAL_BROWSER_PLATFORM_PROVIDERS = [
    { provide: core.PLATFORM_ID, useValue: common.ɵPLATFORM_BROWSER_ID },
    { provide: core.PLATFORM_INITIALIZER, useValue: initDomAdapter, multi: true },
    { provide: common.PlatformLocation, useClass: BrowserPlatformLocation, deps: [DOCUMENT$1] },
    { provide: DOCUMENT$1, useFactory: _document, deps: [] },
];
/**
 * \@security Replacing built-in sanitization providers exposes the application to XSS risks.
 * Attacker-controlled data introduced by an unsanitized provider could expose your
 * application to XSS risks. For more detail, see the [Security Guide](http://g.co/ng/security).
 * \@experimental
 */
var BROWSER_SANITIZATION_PROVIDERS = [
    { provide: core.Sanitizer, useExisting: DomSanitizer },
    { provide: DomSanitizer, useClass: DomSanitizerImpl, deps: [DOCUMENT$1] },
];
/**
 * \@stable
 */
var platformBrowser = core.createPlatformFactory(core.platformCore, 'browser', INTERNAL_BROWSER_PLATFORM_PROVIDERS);
/**
 * @return {?}
 */
function initDomAdapter() {
    BrowserDomAdapter.makeCurrent();
    BrowserGetTestability.init();
}
/**
 * @return {?}
 */
function errorHandler() {
    return new core.ErrorHandler();
}
/**
 * @return {?}
 */
function _document() {
    return document;
}
/**
 * The ng module for the browser.
 *
 * \@stable
 */
var BrowserModule = (function () {
    function BrowserModule(parentModule) {
        if (parentModule) {
            throw new Error("BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead.");
        }
    }
    /**
     * Configures a browser-based application to transition from a server-rendered app, if
     * one is present on the page. The specified parameters must include an application id,
     * which must match between the client and server applications.
     *
     * @experimental
     */
    /**
     * Configures a browser-based application to transition from a server-rendered app, if
     * one is present on the page. The specified parameters must include an application id,
     * which must match between the client and server applications.
     *
     * \@experimental
     * @param {?} params
     * @return {?}
     */
    BrowserModule.withServerTransition = /**
     * Configures a browser-based application to transition from a server-rendered app, if
     * one is present on the page. The specified parameters must include an application id,
     * which must match between the client and server applications.
     *
     * \@experimental
     * @param {?} params
     * @return {?}
     */
    function (params) {
        return {
            ngModule: BrowserModule,
            providers: [
                { provide: core.APP_ID, useValue: params.appId },
                { provide: TRANSITION_ID, useExisting: core.APP_ID },
                SERVER_TRANSITION_PROVIDERS,
            ],
        };
    };
    BrowserModule.decorators = [
        { type: core.NgModule, args: [{
                    providers: [
                        BROWSER_SANITIZATION_PROVIDERS,
                        { provide: core.ErrorHandler, useFactory: errorHandler, deps: [] },
                        { provide: EVENT_MANAGER_PLUGINS, useClass: DomEventsPlugin, multi: true },
                        { provide: EVENT_MANAGER_PLUGINS, useClass: KeyEventsPlugin, multi: true },
                        { provide: EVENT_MANAGER_PLUGINS, useClass: HammerGesturesPlugin, multi: true },
                        { provide: HAMMER_GESTURE_CONFIG, useClass: HammerGestureConfig },
                        DomRendererFactory2,
                        { provide: core.RendererFactory2, useExisting: DomRendererFactory2 },
                        { provide: SharedStylesHost, useExisting: DomSharedStylesHost },
                        DomSharedStylesHost,
                        core.Testability,
                        EventManager,
                        ELEMENT_PROBE_PROVIDERS,
                        Meta,
                        Title,
                    ],
                    exports: [common.CommonModule, core.ApplicationModule]
                },] },
    ];
    /** @nocollapse */
    BrowserModule.ctorParameters = function () { return [
        { type: BrowserModule, decorators: [{ type: core.Optional }, { type: core.SkipSelf },] },
    ]; };
    return BrowserModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var win = typeof window !== 'undefined' && window || /** @type {?} */ ({});

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var ChangeDetectionPerfRecord = (function () {
    function ChangeDetectionPerfRecord(msPerTick, numTicks) {
        this.msPerTick = msPerTick;
        this.numTicks = numTicks;
    }
    return ChangeDetectionPerfRecord;
}());
/**
 * Entry point for all Angular profiling-related debug tools. This object
 * corresponds to the `ng.profiler` in the dev console.
 */
var AngularProfiler = (function () {
    function AngularProfiler(ref) {
        this.appRef = ref.injector.get(core.ApplicationRef);
    }
    // tslint:disable:no-console
    /**
     * Exercises change detection in a loop and then prints the average amount of
     * time in milliseconds how long a single round of change detection takes for
     * the current state of the UI. It runs a minimum of 5 rounds for a minimum
     * of 500 milliseconds.
     *
     * Optionally, a user may pass a `config` parameter containing a map of
     * options. Supported options are:
     *
     * `record` (boolean) - causes the profiler to record a CPU profile while
     * it exercises the change detector. Example:
     *
     * ```
     * ng.profiler.timeChangeDetection({record: true})
     * ```
     */
    /**
     * Exercises change detection in a loop and then prints the average amount of
     * time in milliseconds how long a single round of change detection takes for
     * the current state of the UI. It runs a minimum of 5 rounds for a minimum
     * of 500 milliseconds.
     *
     * Optionally, a user may pass a `config` parameter containing a map of
     * options. Supported options are:
     *
     * `record` (boolean) - causes the profiler to record a CPU profile while
     * it exercises the change detector. Example:
     *
     * ```
     * ng.profiler.timeChangeDetection({record: true})
     * ```
     * @param {?} config
     * @return {?}
     */
    AngularProfiler.prototype.timeChangeDetection = /**
     * Exercises change detection in a loop and then prints the average amount of
     * time in milliseconds how long a single round of change detection takes for
     * the current state of the UI. It runs a minimum of 5 rounds for a minimum
     * of 500 milliseconds.
     *
     * Optionally, a user may pass a `config` parameter containing a map of
     * options. Supported options are:
     *
     * `record` (boolean) - causes the profiler to record a CPU profile while
     * it exercises the change detector. Example:
     *
     * ```
     * ng.profiler.timeChangeDetection({record: true})
     * ```
     * @param {?} config
     * @return {?}
     */
    function (config) {
        var /** @type {?} */ record = config && config['record'];
        var /** @type {?} */ profileName = 'Change Detection';
        // Profiler is not available in Android browsers, nor in IE 9 without dev tools opened
        var /** @type {?} */ isProfilerAvailable = win.console.profile != null;
        if (record && isProfilerAvailable) {
            win.console.profile(profileName);
        }
        var /** @type {?} */ start = getDOM().performanceNow();
        var /** @type {?} */ numTicks = 0;
        while (numTicks < 5 || (getDOM().performanceNow() - start) < 500) {
            this.appRef.tick();
            numTicks++;
        }
        var /** @type {?} */ end = getDOM().performanceNow();
        if (record && isProfilerAvailable) {
            // need to cast to <any> because type checker thinks there's no argument
            // while in fact there is:
            //
            // https://developer.mozilla.org/en-US/docs/Web/API/Console/profileEnd
            (/** @type {?} */ (win.console.profileEnd))(profileName);
        }
        var /** @type {?} */ msPerTick = (end - start) / numTicks;
        win.console.log("ran " + numTicks + " change detection cycles");
        win.console.log(msPerTick.toFixed(2) + " ms per check");
        return new ChangeDetectionPerfRecord(msPerTick, numTicks);
    };
    return AngularProfiler;
}());

/**
 * A key value store that is transferred from the application on the server side to the application
 * on the client side.
 *
 * `TransferState` will be available as an injectable token. To use it import
 * `ServerTransferStateModule` on the server and `BrowserTransferStateModule` on the client.
 *
 * The values in the store are serialized/deserialized using JSON.stringify/JSON.parse. So only
 * boolean, number, string, null and non-class objects will be serialized and deserialzied in a
 * non-lossy manner.
 *
 * \@experimental
 */
var TransferState = (function () {
    function TransferState() {
        this.store = {};
        this.onSerializeCallbacks = {};
    }
    /** @internal */
    /**
     * \@internal
     * @param {?} initState
     * @return {?}
     */
    TransferState.init = /**
     * \@internal
     * @param {?} initState
     * @return {?}
     */
    function (initState) {
        var /** @type {?} */ transferState = new TransferState();
        transferState.store = initState;
        return transferState;
    };
    /**
     * Get the value corresponding to a key. Return `defaultValue` if key is not found.
     */
    /**
     * Get the value corresponding to a key. Return `defaultValue` if key is not found.
     * @template T
     * @param {?} key
     * @param {?} defaultValue
     * @return {?}
     */
    TransferState.prototype.get = /**
     * Get the value corresponding to a key. Return `defaultValue` if key is not found.
     * @template T
     * @param {?} key
     * @param {?} defaultValue
     * @return {?}
     */
    function (key, defaultValue) { return /** @type {?} */ (this.store[key]) || defaultValue; };
    /**
     * Set the value corresponding to a key.
     */
    /**
     * Set the value corresponding to a key.
     * @template T
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    TransferState.prototype.set = /**
     * Set the value corresponding to a key.
     * @template T
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    function (key, value) { this.store[key] = value; };
    /**
     * Remove a key from the store.
     */
    /**
     * Remove a key from the store.
     * @template T
     * @param {?} key
     * @return {?}
     */
    TransferState.prototype.remove = /**
     * Remove a key from the store.
     * @template T
     * @param {?} key
     * @return {?}
     */
    function (key) { delete this.store[key]; };
    /**
     * Test whether a key exists in the store.
     */
    /**
     * Test whether a key exists in the store.
     * @template T
     * @param {?} key
     * @return {?}
     */
    TransferState.prototype.hasKey = /**
     * Test whether a key exists in the store.
     * @template T
     * @param {?} key
     * @return {?}
     */
    function (key) { return this.store.hasOwnProperty(key); };
    /**
     * Register a callback to provide the value for a key when `toJson` is called.
     */
    /**
     * Register a callback to provide the value for a key when `toJson` is called.
     * @template T
     * @param {?} key
     * @param {?} callback
     * @return {?}
     */
    TransferState.prototype.onSerialize = /**
     * Register a callback to provide the value for a key when `toJson` is called.
     * @template T
     * @param {?} key
     * @param {?} callback
     * @return {?}
     */
    function (key, callback) {
        this.onSerializeCallbacks[key] = callback;
    };
    /**
     * Serialize the current state of the store to JSON.
     */
    /**
     * Serialize the current state of the store to JSON.
     * @return {?}
     */
    TransferState.prototype.toJson = /**
     * Serialize the current state of the store to JSON.
     * @return {?}
     */
    function () {
        // Call the onSerialize callbacks and put those values into the store.
        for (var /** @type {?} */ key in this.onSerializeCallbacks) {
            if (this.onSerializeCallbacks.hasOwnProperty(key)) {
                try {
                    this.store[key] = this.onSerializeCallbacks[key]();
                }
                catch (/** @type {?} */ e) {
                    console.warn('Exception in onSerialize callback: ', e);
                }
            }
        }
        return JSON.stringify(this.store);
    };
    TransferState.decorators = [
        { type: core.Injectable },
    ];
    /** @nocollapse */
    TransferState.ctorParameters = function () { return []; };
    return TransferState;
}());
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @module
 * @description
 * Entry point for all public APIs of the common package.
 */
/**
 * \@stable
 */
var VERSION = new core.Version('5.0.0');

/**
 * @license walkthrough
 * MIT license
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var Swipe_Up = (function () {
    function Swipe_Up() {
        this.swipe_up = "data:image/png;base64," +
            "iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAAAXNSR0IArs4c6QAAAAlwSFlzAAAL" +
            "EwAACxMBAJqcGAAABCZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6" +
            "eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYg" +
            "eG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4K" +
            "ICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6dGlm" +
            "Zj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmV4aWY9" +
            "Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIgogICAgICAgICAgICB4bWxuczpkYz0iaHR0" +
            "cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgICAgICAgICAgIHhtbG5zOnhtcD0iaHR0" +
            "cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyI+CiAgICAgICAgIDx0aWZmOlJlc29sdXRpb25Vbml0" +
            "PjE8L3RpZmY6UmVzb2x1dGlvblVuaXQ+CiAgICAgICAgIDx0aWZmOkNvbXByZXNzaW9uPjU8L3Rp" +
            "ZmY6Q29tcHJlc3Npb24+CiAgICAgICAgIDx0aWZmOlhSZXNvbHV0aW9uPjcyPC90aWZmOlhSZXNv" +
            "bHV0aW9uPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgog" +
            "ICAgICAgICA8dGlmZjpZUmVzb2x1dGlvbj43MjwvdGlmZjpZUmVzb2x1dGlvbj4KICAgICAgICAg" +
            "PGV4aWY6UGl4ZWxYRGltZW5zaW9uPjUxMjwvZXhpZjpQaXhlbFhEaW1lbnNpb24+CiAgICAgICAg" +
            "IDxleGlmOkNvbG9yU3BhY2U+MTwvZXhpZjpDb2xvclNwYWNlPgogICAgICAgICA8ZXhpZjpQaXhl" +
            "bFlEaW1lbnNpb24+NTEyPC9leGlmOlBpeGVsWURpbWVuc2lvbj4KICAgICAgICAgPGRjOnN1Ympl" +
            "Y3Q+CiAgICAgICAgICAgIDxyZGY6U2VxLz4KICAgICAgICAgPC9kYzpzdWJqZWN0PgogICAgICAg" +
            "ICA8eG1wOk1vZGlmeURhdGU+MjAxNTowNToxNiAwMzowNTowOTwveG1wOk1vZGlmeURhdGU+CiAg" +
            "ICAgICAgIDx4bXA6Q3JlYXRvclRvb2w+UGl4ZWxtYXRvciAzLjIuMTwveG1wOkNyZWF0b3JUb29s" +
            "PgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KxXkL" +
            "xAAAQABJREFUeAHsvQlgU9ed73+vFluWbMv7grENtsE2m8GYPUBCAoQ1bCE0IW0yWQjrJH2TtjNv" +
            "3pT+p9N2XvpCh522aTrvP0sn007b6SSZNm3aNHuzECCAARuze5P33ZZ03+9c+RpZSLJ23Xv11Ywr" +
            "6d6z/M7nKJzf/Z3f73c4Di8QAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQ" +
            "AAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQ" +
            "AAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQ" +
            "AAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQ" +
            "AAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQ" +
            "AAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQ" +
            "AAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQ" +
            "AAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAIFYIcDHykAxTnUQOHjw" +
            "YLKO122eWDTxKzq9NvnShZq/tgrWn+3bt69THSPEKEAABEAgMgS0kekGvYBA8AROHDpUxmm0/19m" +
            "Zua9JZOKZyfRyy7Yp3Z3dk5ZvWbNxddee80SfC9oAQRAAARigwAsALExz4of5bFjx6ZxNvs3i4pL" +
            "ulfcv+IR5wG99dZbr5/7/JxN4IX/tXv37s+c7+EzCIAACICAewIa95dxFQTkQ+Do0aNFgt3+jYzs" +
            "rHO0+K91lWzp0qWrSssmW3iB+/axg8dmud7HdxAAARAAgTsJQAG4kwmuyIjAiy++mMDbha+kp2Vc" +
            "3bJlyy4SzexOvGX33vtYQUH+55zG/k3aKpjurgyugQAIgAAI3CYABeA2C3ySIQFDXNwerV4/tHXb" +
            "1mUkntvFXxJ7zbp1T2XnZJ+0aTT7mdVAuo53EAABEACBOwlAAbiTCa7IhMCxw4c3cjz/la0Pbb2X" +
            "RKrwQSzzxs2b9xji408yqwGzHvhQB0VAAARAICYJQAGIyWmX/6CPHDlyl8Dz/5NM+5+azeZyPyQ2" +
            "P/7EE1uY1YBZD/yoh6IgAAIgEFMEoADE1HQrY7DHDx2q4gX+G3Pmzm0uLS1dEYDUFZu3bC5l1gPR" +
            "ihBAA6gCAiAAAmonAAVA7TOssPExL347r/1mWdnkK1VVVfcHKn5aWtpyZj1gVgRmTQi0HdQDARAA" +
            "AbUSQCIgtc6sAsfFvPftWu7bRSXFtfctX74j2CFkZGQUDw0N/a6xvnH9ulX3n/uv11+/FWybqA8C" +
            "IAACaiEABUAtM6nwcYix/jz/rZzs7DNr1617koZjCMWQ8vPzK7q7On/f3NK2Ye39a8+++vqrDaFo" +
            "F22AAAiAgNIJYAtA6TOoAvmlWH9zcnI18+KnIXkN9/N3yPfce++f5eTkfCho7X+HHAH+0kN5EAAB" +
            "tRKAAqDWmVXQuKRY/4e3b19DYod08ZcwbNy88c/JuvApcgRIRPAOAiAQ6wSgAMT6LyDK45di/bc8" +
            "uGUOieJLrH+gErMcAduRIyBQfKgHAiCgNgJQANQ2owoaj3Osf2pq6rwIiF6IHAERoIwuQAAEFEEA" +
            "CoAipkl9Qkqx/pWVlVcDjPUPFErFps2bcpEjIFB8qAcCIKAWAogCUMtMKmgcLNZf0PDfolj/63ct" +
            "WfJwpEU3Go1TkpOT36mrq1u5es2ac6+99tq1SMuA/kAABEAg2gRgAYj2DMRY/8wLn3njFxSMP8O8" +
            "86M1fGZ1mDpl2scs4yCFIM6OlhzoFwRAAASiRQAWgGiRj8F+nWP912/YsJMQhCTWP1CUhRMKq1iO" +
            "AIvFsn7N2rVnXn311cZA20I9EAABEFAaAVgAlDZjCpVXivVnXvjhiPUPFAtZITaz8EBOEL6OI4QD" +
            "pYh6IAACSiQABUCJs6ZAmaVYf+aFT+KHJdY/QCziEcIsCRGOEA6QIKqBAAgokgAUAEVOm7KElmL9" +
            "xRP6whvrHygYM0tChCOEA8WHeiAAAkokAB8AJc6agmQWT+KjHP90Mt9lyssfyNG+kRptTklJSdKZ" +
            "M2dWrF29uubV116rjlTH6AcEQAAEokEAFoBoUI+RPqVY/4qZM89FONY/IMJms7kcRwgHhA6VQAAE" +
            "FEgAFgAFTpoSRHaO9V+ydOljSpCZyciOEOZ5/vStG7fuwxHCSpk1yAkCIBAIAT6QSqgDAt4IsFh/" +
            "OnTn73Oycz+iQ3j+xltZX+8NDAx8TuF67HXTOmjV2wSbaL3SaXQ2U5IpNcWckpaZlVml0YTGqPX7" +
            "3/3uR9XVF/N4O/+XO/ftPOmrnCgHAiAAAkohAAVAKTOlEDnFUDpBeIFC684HGe7XUVtT8/6F6os3" +
            "bt26oR0asm6m9L21FK5Hsfp8D8cLVoZEELg4nueS6GMOJ3ClqalpP5wxY1puaXl5pVarLQgG269/" +
            "/esjl2tri7R2+1d37N17Jpi2UBcEQAAE5EYACoDcZkTB8rBY/4S4+APxhvgbw+F+fp/uNzQ4eO3t" +
            "t99+kxb+JJ4TMjmeOykI/DnK2FcjaIWb+sHB9qG4uEGyCAjx8fFkref1hMxot9sz6b2Qs3PTSCGY" +
            "R/XuLiyYcHDJ3UvuSkxMXBgg1o6f/+xnhxsaG8tJ+Xh+165dlwNsB9VAAARAQHYEoADIbkqUK9DR" +
            "w4ef1+njCp56+qnFNAp/F/+ODz/88OVPP/7kSfpR/jOdFfDfVqv143379t3whwhFHSSSUlDE2+0V" +
            "As8v5QVu7cSiid9fuWrVEmpnqT9tDZftePmll7470D8wvm9w4Lkvf/nLfQG0gSogAAIgIDsCUABk" +
            "NyXKFIjF+tOC+/2tDz30Vnp6+mZ/RtHT0/P6T/7lJ58NDg5Opyf9H6e3pP9q6/6tg97a2L9/v85k" +
            "MsWnpaVpSFGw1dfXD9I1cVuA1Tt48GC8TqebQB/n8IKw2m7nLm7asonLycn5Orvv5+vUD77/g7et" +
            "Q4PXdu3Z84KfdVEcBEAABGRJAAqALKdFWUKxWH/6IX2PQuha/A33O3369N+9+847e2gz/x9or/3/" +
            "7ti3r9bd6E+cOGEUBgen2LXaMlrQJ5KpP8vOc0baJqCuNf1Up4V8AG7yHF+n4axXbVptY0JCQh8p" +
            "FyYdx022c5rl5DHwZNXsOc/OmT/nR1Ter2yEbW1tH/7kX/+1mPp+eueePT93JyOugQAIgICSCEAB" +
            "UNJsyVBW8SQ9O/e/p06deon223f4IWLHH//wx2Nnz55dxfPCCzt37/5nd3UPHz48mUz6i+mHuoQW" +
            "+IXJScmXzSnJ/Ulms56e8IfonmCz2nQ9vT18a0vrUEd7eyXt/39EesGfBF44SfdryELQRd4COXae" +
            "v0fgNDtyxuU8uXHjxmPUn1/bFBcuXPjNm7/7XbrAcc/u3r37HXfy4hoIgAAIKIUAFAClzJQM5aTF" +
            "fwY9uX+nrLS03t+jff/zP//zq7eu31hDT/F/R4vpb1yHJ4YS8tq15O2/nmLzB0smTUosKiqqpGQ9" +
            "rkVHfe+i19W6qx+fP3+2vsXSUkbKwKs2QXiLwgPrtDabycZrl1Cbz+Tk5j4diBLw4Qcf/Menn5xM" +
            "0Qi2rz6zd+/HozrHFxAAARBQEAEoAAqaLDmJGky437vvvnv4zGenZpCj39+QZ/1bzuOiJ/50emp/" +
            "iHwBvlRQmN85u6pqPu3bJzqX8fVz/a36T377xm//0N3TVUw/9J9yGs0pihbQUWz/YjIc7CqdUr7n" +
            "nnvu+Rm1512rcOkQOQJcgOArCICAIgkgE6Aipy26QrNwP71G+7dmc/L1rdu27SFpfF5Aa2pqXnn/" +
            "3fcrOQ3/17T4/955JORLUK7hNF+L1+nHrVm/djwt/osohC/OuYw/n5OSksZVzKyYOjQ49HZDY8NG" +
            "2r9v5W2aWxROeIv8AdoszZYXsrKzdqSkpDzkT7sTi4pmNTU2/KKjq2Pb+lWrTv/X6683+VMfZUEA" +
            "BEBADgSgAMhhFhQmwwPr1j1H4X5Jjz3++H0keqGv4tNe/Ol/f+WVhRSn/7Vdu3f/0rkeWRRKKYff" +
            "32RlZTc+8sXtjyUnJ090vh/EZ0N+Qf68zPTM05cu1SzjNYLFLgj1GkFoIiWk/+KFS3Fz5s55n9q/" +
            "258+JpeWTr1x7dovu3p7H1yzdu3Hr776aps/9VEWBEAABKJNAApAtGdAYf0PH+37nW1f+EK2wWCY" +
            "5o/4v/rlL3/a3d39ITn8fde53ksvvZRkt1r/J+31W7ZsffAZuuezRcG5HW+fU1JTJo3LG/enC9UX" +
            "VvCcpoXTapo5O99F2w1rL1ZffHNGxYw5VD/FWxsu9wzlU6YUfn769Gu2Ieuqe++773eUOXAkDNGl" +
            "LL6CAAiAgOwIhCZxuuyGBYHCQYCF+1Gs//9kJ+axk/P86aO5qek/bt2qX2nnuH91rTfY3/8wefQn" +
            "bNm6dSXdC/niL/WXl5e3/oGNG2oodPApCiOcz64LgvBJZ1fHwebG5helcn68F7KMh1q9fsgQF8e2" +
            "QvACARAAAcUQgAKgmKmKrqDS0b5z5s5t9jfWn0n+37/+dQ0tt/9OHv8fOY+Emf4prO4xiiIw0vUK" +
            "53vh+Dxu3LgHHti08U8UHfBF+ptBFoA+Fjb4yk9fIfm4qwH0WbF5y+ZSShX8FdE6EkADqAICIAAC" +
            "0SAABSAa1BXWJzva185rv1lWNvlKVVXV/f6K39fX925PZ/eT9GP77zvq2u3r01LTrxQXF/vliHdH" +
            "O35cyM3N/eLK+1f+iMIBN1C1QsoZ0EqKQCp9/p4fzYwUpWyEy5lVhFlHmJVk5AY+gAAIgICMCUAB" +
            "kPHkyEE0Fo8vaO1/V1RSVONvrL8k/yeffHKKkvK80WCxvCddY+8n/uFEAT05b1i0aEGp8/VIfKac" +
            "Al+rqpzzV9TXUvpL1Qjc//njG2+8GmjfzCpSMXMmO7ToG8xaEmg7qAcCIAACkSIABSBSpBXYD4v1" +
            "t2k0++lo309Xrly5PdAhnD93XksOd+865+pnbdm1Q0tNCabW8QUFswJtO4h6ZkoJ/Dcau/VBsgTM" +
            "ooTChlPV1XTUMDcqL4E/7S9cuPBRZiVh1hJmNfGnLsqCAAiAQKQJQAGINHGF9Mdi/Xm78BVDfPzJ" +
            "jZs3+xXr7zxEOrb3HevQ0COCRjjpfJ19Zqf1lU4pi3e9HsHvFTv27t1qs9vnWm22Ajp5sJP6/kMw" +
            "/ZOVZDMlLvqQWU2Y9SSYtlAXBEAABMJJAApAOOkquG3m1c6825mXOw0jYM/8mzdv3qAsfNXk5T/q" +
            "kB/m/EdH9S4qKSmZGmVMX9+zZ0/c8OLPRPlDkPKYN27e+OfMasKsJ8yKEmR7qA4CIAACYSEABSAs" +
            "WJXd6HCs/1e2PLiFxcYH5Znf3NjYKHD8rdTU1FHZ8ni7fYouLu4qHR08Tga0fuwkw2dOnwP9SErA" +
            "5rXMesKsKMyaEmhDqAcCIAAC4SIABSBcZBXarnOsPy3a84IdRltHRxfF3Xdt3brVNqotni+iFLzs" +
            "GF85vJZSPgAWEUA+iXx7iASqQI6AEJFEMyAAAmEhAAUgLFiV2agU619ZWXk1kFh/d6O22Wx6uj7k" +
            "ek8Q+GwKn2Ox/3J5OYcAdoRIqIpNmzflIkdAiGiiGRAAgZASgAIQUpzKbcw51n/e/PmbQjkSgfLt" +
            "uWkvUa/XD7q5Hq1LhWQF2D/ceSi2AcSmaItjM3IERGtK0S8IgIA3AlAAvNGJkXtSrH9Bwfgzgcb6" +
            "e0PF0yOwm/v6pKTESW6uR/PSs6QEpJAAM0MpBLOmTJ0y7WOWI4CcAmeHsm20BQIgAAKBEoACECg5" +
            "ldRzjvVfs27dU6EellarHSILQJxru3RNw9PRfK7Xo/ydRTs8S38BRz14kn/J3Ut2lJQUnSNjyN8S" +
            "8xmeyuE6CIAACESKABSASJGWYT8usf4s0U/IFz5yJEwkA0DSwYMHR8X7k2MgGQZkCIXjnguXVMtX" +
            "rnyUhQeSEvD1Q4cOTQxXP2gXBEAABHwhAAXAF0oqLZMQH/+MVqe3Dcf6F4ZjmHTEL3P0G6fRaHKc" +
            "2/ewLeBcJFqfk8PYMQsP3GNOTq7W8tr/ceLECeYgiRcIgAAIRIUAFICoYI9+p8cOHVtGrnl7KGnN" +
            "ZJImqFh/b6MpKCgo5wSujMqUSOUoJTDZ/nmtRn5bAJKI4Xw3P7x9+xq9XptotVofC2dHaBsEQAAE" +
            "vBGAAuCNjkrvvfDCCyZBY394zry59fSEfl84h0me/ov1+riXyAFuJDd+fn6+iecFnUZDuQBj81VB" +
            "2wF3kRb00LFjxybEJgKMGgRAINoEoABEewai0L/JZFoQH29YT2l4F0Wi+ylTp5C/H7eIkgyJVoD+" +
            "/v4Usgro+/r7P49E/3Lsg84LKNaRcsRZOUQFyHGCIBMIxAABKAAxMMmuQ5wxY8YDCQZDpuv1cH2f" +
            "OWtmMS34d5MVYBE5A2ZStr0s2gIw6LRaa7j6lHu7ZP7n4uhVNb/qSbnLCvlAAATUSUCnzmFhVN4I" +
            "kFn+TfLAH/9v//qTZenpab+g710ajW6Q1/J2ngLhvdX1dI+F+8XHx3dl5+ZenzJlyo3hcr9n70aj" +
            "cXVWZsafNzU3r4jTaJrtHBdHR/CSAqBv89SeTK73kBzb6K9bkqe6ujq34VZDQV9fXzKh0gmCzScl" +
            "mk4+5AUbbbzYrXFDQ0NJLS2tW5KSk94k9v8htY13EAABEIgkAXkGYkWSQIz2Je4922zzBU5TQktT" +
            "GqXmNRAKLX32+zdBdcmpX4z1T6Un/VJq4VBzc/PRr3/9659Sm6KD4eDg4D+/9IMfbiDF4xhFAFqo" +
            "/PrKWbP+Zd6CBYdlPgXfoLV7P5ORtjDuJzyHKYTxAo2xlS4NECzSZ8Z+ESMyegh2Gns/MW4V7Hwt" +
            "p+U+2LVr1+Wxa6MECIAACISeACwAoWeqiBZ37tx5hQRlfyF7vbL/lThLlqVSYxMeyczM3EUNs5S6" +
            "ogJA1u5H5i2Yv/7DDz78P7SAniI7Q0aS2RyqnPshG4Obhlh2wO9R8p75tNjvIwXgqzrb4DtPPfts" +
            "o5uyuAQCIAACiiHgk/lSMaOBoFElsHX/1kF6ov1Aw9m/T8+7D5G5fNTTMR0y9LeUAXA17THcT4/C" +
            "66ZOnfpPURXYt87NVOxZes6fRu9nu/u7/xuLv2/gUAoEQEDeBKAAyHt+FCndjr17z9DBuu+eP3fO" +
            "9bCfClIQtpP5PHfPnj0XhwenCCuAMdHYS0pNBvk5xKzjoiJ/jBAaBEDAIwEoAB7R4EYwBHjO/pml" +
            "uTndTRtfJyXgPqfrbJtA7i/zypUrS8lysSSO56fLXVjIBwIgAAK+EIAC4AsllPGbAG/XnbdZbYt7" +
            "e3s73VT+Me2rSyfuXXFzX3aXcnNzvxQXF/9TO6+9X3bCQSAQAAEQCIAAFIAAoKHK2AS6BrpqyNRf" +
            "3dzU7M7L3UyKwVs/+9nPmCVACRYANmDzfcvvSyIHxq10fDJLbYwXCIAACCiaABQARU+ffIV//vnn" +
            "WQx9zY2bN665k5IsAMn9vX1vvPfuu1Pd3ZfjtcIJhQ/r4+J/beP5TXKUDzKBAAiAgD8EoAD4Qwtl" +
            "/SMgCJdbLRa3eQXi9HEcnQXA1dbUPllfX+9fu9ErzawAJkp6sA1WgOhNAnoGARAIDQEoAKHhiFbc" +
            "ERA0l1rb2uLd3dLH6TleoxGVgIaGBndFZHkNVgBZTguEAgEQCIAAFIAAoKGKbwQEjXCJ9vor6fAf" +
            "txWys7M5dkpQo4IUABoIrABuZxMXQQAElEYACoDSZkxB8up0ujoS96Kl2VLjTmw6lZCsADzX3NTk" +
            "7rZsrzErgDHR9JZVo9ksWyEhGAiAAAiMQQAKwBiAcDtwAjt27GBJfq63tlhuumvFlJjIadgxArQV" +
            "0NrS4q6IXK+RFWB5PqUFfph8AZAXQK6zBLlAAAS8EoAC4BUPbgZNQODrmy0Wt6f+0XkB4uJPKgCn" +
            "JD8AxmTcuHEPpKen/tau0TwcNCM0AAIgAAJRIAAFIArQY6lLCve7aWlucesEwLYANKIjIPkBNCrv" +
            "bJ2169dXUXbAJ+mUwBWxNKcYKwiAgDoIQAFQxzzKdhTk51/X0dFmdCeg0WikZ39ejARoUqACQPIv" +
            "nFI+9UcU5/jkwYMHk92NEddAAARAQK4EoADIdWZUIpegFS7ZbPb5vT29N9wNKTU1hc4N0nBWm01p" +
            "fgDicJbes/ShOK2+XavVbnc3PlwDARAAAbkSgAIg15lRiVw9PT219IRc3dzcbHE3JNERkCIBRD8A" +
            "BVoBaEyFd9+3jCIeuSdoK6Dc3RhxDQRAAATkSAAKgBxnRUUysZTAdi8pgc1mM0UCOBICtbW69RWU" +
            "PY3i4uKnE5OSf0dRAbACyH62ICAIgIBEAAqARALvYSNAB+jUNjU2DbjrICUlRcwFwEIBm5qU5wgo" +
            "jWnTlk2LOF54Gg6BEhG8gwAIyJ0AFAC5z5Aa5KOUwJ2dHWZ3QxEdASkXAIsG6Ovt47q7u90Vk/01" +
            "5hA4o6LiJ7TdsePw4cPpshcYAoIACMQ8ASgAMf8TiAAALXeBnABn9vX13dFZMtsCoMXfEQ2gUVw+" +
            "AOcBLVq06FG9Lu4az/NPOF/HZxAAARCQIwEoAHKcFZXJJDkC0jbAZ+6GxrYBRCWAHp+VGA7oNCYz" +
            "bQVMJYfAvccOHVvmdB0fQQAEQEB2BKAAyG5K1CeQ5AjYbGnucTc6tg3AjgZ2+AEo61wA1/GkpaUt" +
            "L58y9V8EXtj1wxd/mOZ6H99BAARAQC4EoADIZSZULofDEbCx190wmQWA5QIQ/QBom0CpfgDS2Fhu" +
            "AL1ef30gfuBJ6RreQQAEQEBuBHRyEwjyqJQAOQK2WFqXuxtdUnKywwLAsgKSQyBLC5xIBwUp+FX4" +
            "wMYHzD995d83U1TAR7t37/69gsfC7d+/X5OTllMmaKyldH7zBEHgMwROiCebzQDPCxYK87xKfg81" +
            "bKuHWXuUPFbIDgKxRAAKQCzNdhTHSplyLnX3dE3r7+/nDAbDKEnELYDhXADMEsD8ACi2flQZpX2h" +
            "g44eLy4u+Ubt5ZodL7300sdPPPFEl5LGwFIb03HOizm7fS7HaSoFzjYzPsF40WhMaCFHxw6NTjNo" +
            "t9rNQ9bBSYODgw90d3WXm4zG80ePHKkhV44aXhDOC1rtqZ07d15R0rghKwjEEgEoALE021EcKy0m" +
            "dTar9WJra6uVTtLLcRYlmSwA9AQp+gAwX4CmJmX7AUhjW3H/isdeOnH1N6T0PErXjkrX5fz+wgsv" +
            "mBITEh4SOP5Bk8FozssfzxcWFmbn5uaMp6yN4z3JziI8aG5NjQ2NyfX1twqbmppX9Pf3ZR45fORN" +
            "SpD037v27nrdU11cBwEQiA4BUtbxAoHIEKCnw5/ctXhx8fTp06tce3zn7be5lpYWzjpk5YaGBrlN" +
            "W7ZwcXFxrsUU9/3KlSv/+vprr02mUwMfpa2A83IewLFDh+6mvZinjaZEw8JFC0voNT0YeS0Wy63T" +
            "p09/cLH6wmqOE/5/zq75x517d74bTJuoCwIgEDoCcAIMHUu0NBYBga9vsVha3BVzRAI4HAFZNIAS" +
            "jwd2N64JEyZ8gSID3pdzmuCXX37ZcPTw4WcFXvPjiopZQ1/80hc3Brv4MxYZGRnjli1btumpHU8P" +
            "TJkyLZkiI/6RfCL+nLYX4t2xwjUQAIHIEoACEFneMd2bIAg3W1ta3EYCiAmBaP+f/ADFaACF5wMY" +
            "Nc9r1627R65pgg8dOjSxr7f3gE4XN2nzls2fLli04IujhA/BFzop0bzk7iUPbd22tcWYYJyh12pf" +
            "JEUgPwRNowkQAIEgCEABCAIeqvpHgJ7v69raOkZ7AA43IfoB0P6/lBWQTg/0r3EZlzaZTFPnzpn3" +
            "Juk2skoTfOLQoelajea7hvj4m0/teGpRVnb2xnBiTE9Pn/vY449tJouIlVh8C0pAOGmjbRAYmwAU" +
            "gLEZoUSICAha4dLg4MBsdymBExIShk8FdGwDdLS3c+RdHqKeo9/M7DmztyaaTI1ySRN87OCxWTaN" +
            "5u9TzKmfPv7EE1uIUEWEKJm3btv2pfS0tFb6x+dr2A6IEHV0AwJuCEABcAMFl8JDwFtK4KSkJIoC" +
            "oEgAlgtgOCugWvwAJJpr16+v5AVuDz353iNdi8b78UOHqigs89s52bkffeGRLzxPMkRq8ZeGy5SA" +
            "pVqtntNpNDuli3gHARCILAEoAJHlHdO9SSmBGxob3Nr3pW0AKStgs0rCAaVJT01NnTe9Ysav2FYA" +
            "5QZIkq5H8p2Uj7vsvPbvKbTv1MbNG/+c+nZ7SmMEZKqgZEml5PTxbLQVogiMFV2AgCwJQAGQ5bSo" +
            "VyiWEpgiAdwO0Gg0iT4AogWALAFqyQfgPNi77rrrEUoT3D3Y17fd+XokPh87fHgjKR/fmzp16qXV" +
            "a1d/hfqM1uIvDjcrK+veOfPm/okOT8K5CZH4AaAPEHAhAAXABQi+hpmAIyWw3l0vyWwbgBICaYaz" +
            "AnZ2dnI93d3uiir5mnn5ihU5Aqd5jJ58SyIxEJbch8L8nhd4/vv33HPPVfLI3xGJfn3po6qq6sFk" +
            "c0oXzk3whRbKgEBoCUABCC1PtDYGAeeUwK5FE5OThi0AGjErIFMGGhvVkRXQeaxkfl+TnpF+iXID" +
            "POh8PRyfjx07No1C7w7q9fHjt33hC7Vl5eWbwtFPMG2uWbdmvhx8I4IZA+qCgBIJQAFQ4qwpWGaW" +
            "EpjEv2hpttS4DoM5ArKnf7L+OxQB+tzcrD4FgI37nmX3TKa37SwUz5VDqL6ThWEdZ7Mfyc8f3/nk" +
            "009+ifkghKrtULZjNpvLZ8+p+jCavhGhHA/aAgGlEIACoJSZUomcO3bs6KChXG9rb2t3HRI7JIhF" +
            "Aoi5ANhWAGUEbG5y6y/oWlVx3+mwoDkFEwrO2Xj+C6EW/sUXX0w4cujIX9BT9Q8X3LXo+rr165+l" +
            "PqK63z/WGOfOnbvcEJ8wFA3fiLFkw30QUCsBKABqnVk5j8tLSmBKEjPy9M8sAX39fWr0AxBnh9Lk" +
            "ziOnh6eOHz7s9pjkQKbw6NGjRQlx8Qf0cfrCh7Y9dKqiouKRQNqJQh3zsvuWpTLfiBMHDyr7KMgo" +
            "wEOXIBAIASgAgVBDnaAIsJTAjQ1Nbe4aMVBCIDEbgGQJoG9NKvQDYGOn5Ef5s2bNetXG8U+SuT7R" +
            "HQ9/ronbCYLwQrI5ueWpp59anJaeHjLFwh85Ai0r+UbYtdqw+0YEKiPqgYCaCEABUNNsKmQsLCVw" +
            "d3e3W5O0kSkAbPEXIwGopFbDNakoLbDrFM1fsGBDnF7XxwvCNtd7/nxnmf3svOY7OdnZ5x/evn03" +
            "1a3wp75cyi5ZuqSUTk78AikzZXKRCXKAgFoJQAFQ68zKeFxSSuDe3t5OVzFTUlIcPgAsGyD9n4Z8" +
            "ASwqVgBo/OYFCxfSKPltJ06cyHDl4ct3tvgLGvu3JpYU123cvHkPa9OXenIsk5OTU5WennHGxmvD" +
            "ei6BHMcOmUAg0gSgAESaOPrjpJTA5OB32RVHPHMEZA6AZAFglgD6H9EPoK3N7Y6Ba3VFfp86bdoD" +
            "Wp22xTZoW+HvAByLv/Dt0tKy+pUrV7Inf8Uu/tLYmRWAPj90+PBhFimBFwiAQJgIQAEIE1g065mA" +
            "t5TALBIgLi7OoQRQFADLCsiUATUdD+yGjHna9BlxnEZY6eaex0u3F//SW+RA97jHggq7wawA5Ax6" +
            "nv5xekBhokNcEFAUASgAipou9QjLUgI3NTT0uxtRYmKiY+FnCgCzBJAhQE3HA7sb88xZM2fT9dUU" +
            "EbDA3X3Xa9LiP6Ni+qCaFn9pnHPmzjHTxG+gbZFc6RreQQAEQksACkBoeaI1XwlQSuD29k63B+Ik" +
            "JSWT5Z8t/PT0z97pr76+3teWFVmORQQU5Bf+kdL1rhprANLiXzWnKmnRXXetG6u8Eu8XFRetMsTH" +
            "N9hstnuVKD9kBgElEIACoIRZUqGM3lICGxIM4sLPnv7JD3Dk840bN1RI4vaQ5i+cP18QuC209z31" +
            "9tXRn+heJTvKly3+9JS8cPRddX2bOn16IicIigplVNcMYDRqJwAFQO0zLNPxeUsJnGgyiREAd2QF" +
            "VHc0AJeenj4uv6DgAm18bHY3bWzxp3vf8rT42+12jv3RUzNntVpH3qXP7B7lYHDXtCyvzZgxYz4n" +
            "cKto3LJMYSxLaBAKBPwgAAXAD1goGjoCUkrg1hbLTddWk820/Uvx/zxZANgWgGQJqL95y7Wo6r4v" +
            "WLhgHMcJjx47dOhu58FRoqCFWo7/jvPizxb0wcFBFlXBdXd1c329vVxfXx83MDDADQ0NiX9MGZAU" +
            "A9d3uSsD5BCaTOcYvK/leb+jI5zZ4TMIgIB7Ajr3l3EVBCJAgFICt7a1pbjrKdGUyHVY20dZAihv" +
            "AMfCAelQG3dVVHGNrABz8/LHf/XG9Rs76clXq7Pr6u06eyU9uu+cu2C+rbKyciFb3NlCzxZ3MVuC" +
            "GC1JChP7P/aAT/9DvgSiDwXzoxj1R2XE/3e9Tt/l+Jo1e/b469dvZNOphj/auXPnHcqiHGWGTCCg" +
            "FAKwAChlplQop7eUwIlJLBKAOQA6wgBFSwBZBa7UscME1f1av379FFrCf8bM/XaN/UXOLhxZufL+" +
            "junTpy9mZyi1t7eLT/7iE71AZn8y69tt9C4+7dvoAEDHVoDrE794n8qzJ3/BTnVcysnRIpCXl1cZ" +
            "b4ivJ2HvVvesY3QgEHkCUAAizxw9DhOgBa6uo6PN6A5IAuUDYI+qo5QAekq9FQPbADTwL+3evfs3" +
            "vN26V+CFF7due+gvMzLSV7VYLFz/QP8dC7e4+NsdC7/HxZ8t9kxRYO+kKNiovKsC4G4e5HBtUklJ" +
            "P+kry+QgC2QAATURgAKgptlU2FhYSmCbzT7fXUpg5gcgJgFy8gFg4YDsdEA1ZwV0msLHdu7b96dH" +
            "HnmkgEz+R7q6uu54shf399lT/7AVgD3VCy5P9aMW+WErgSclwalvWX2cMXNmBW1Q3HP84PEpshIM" +
            "woCAwglAAVD4BCpZfG8pgY1Go+Ppn+1VMyWA/qQUwRcvXFDysH2V/dnGxsanOzo6fjBITn3Sou28" +
            "wDOTPXuqH1EEhq0AoxZ98Yn/9vYAK+9OUWBtMb5yfJnN5nJTYuJnNq3NpyRJchwDZAIBORKAAiDH" +
            "WYkRmaSUwDdu3rjmOmQKE2TH5dKixKIAbucCYGtU/a1b4h64ax2VfS8kz/4TNqvDVM8WfvYnKQIj" +
            "izw91UtKwR33JGuA5CfA9v09+AnIdfGX5rSsvMzEC/xi6TveQQAEgicABSB4hmghCAIsJXCrxeL2" +
            "0dNE+QDYNsDorIBabohi3MlLPohelVGVnN/EvXpxYaeF/vaTPnuiH/1Ubx82/0vKwIiCICkBrLwX" +
            "PwG5KwClpaX5FN2wFNsAyvjtQkplEIACoIx5Uq+UlBKYQgHj3Q2QzL4OC4CTH4B0ONCVujsOEnTX" +
            "hKKvJdH4R578nfb5pad4h1Pf7ad6tui7WgFuKw3MV8C9+Z/V02q1smbFtgEoNfCH2AaQ9TRBOIUR" +
            "gAKgsAlTm7gsJTA5AVb29995LlBycrLDAsDi21k4oOQHQO/Nlhaup7tbbThGjYc5QrJICLZAuyoC" +
            "7Ilf8v6XnvZdF3+xHi36op8AtSEpDq7lWKeMrdxfJZMn23lBWCR3OSEfCCiFgPz/q1cKScgZEAFv" +
            "KYGTkpIci76brIDMElBdXR1Qn0qqxLZB2ILNnuTFp3lxIWdP+o5QPsdiTou8k5IgKQQj72P4Ccj9" +
            "6V+arylTphSTJnjX8ePHJ0nX8A4CIBA4ASgAgbNDzRAQ8JYSmDUv+gGQ55/oC+BkCWDpga/UXQmB" +
            "BPJugiVEEhfy4Sd56SneOZmPQxlw+AXcNvk7vkvlHcqAI0zQ1U9AKQoAy5Ko1WrO0Bgr5T1rkA4E" +
            "lEEACoAy5kndUlJK4GaLpc3dIE2UElgM/2Pm/+FtACk5kNVm5Wpra91VU801tg3Cxj+yaDNFwMn8" +
            "L20NsHebG2//ET8BZjkYTv7jugXAIi6U8sobN66TogFmK0VeyAkCciYABUDOsxMjstHT7E1Lc8ud" +
            "TgA0fqNJygcwOheAhhZFtjDW1caGM+Bt8z8LC3T8OZv/2RO+pAxIiYGcFQVpO8B18WfX9Xq9Yn5p" +
            "peXlRooGWERnA+QpRmgICgIyJQAFQKYTE0tieUsJzBICsVwAtNaL/gDSyYBScqBmSzPXrXZnQLIC" +
            "OBZzR04Ax1O9FP9/OwUwUxJuKwoufgJiGKCTkiBaBJS1+LP/JkpKSkrpp/ApKS4PxNJ/IxgrCISD" +
            "ABSAcFBFm34RGEkJ3NN7R3C/wxHwdgSAtPCL2wJikiCeO33qlF/9Ka2wOSWFDvAhE/4o8z8z6Tv+" +
            "7twecFgIRvkJUH3x6Z8UAVFJEBMC2RXh/e8yXxXZubn/QvafZ+mI5CfoxMR0l/v4CgIg4CMB5Wz+" +
            "+TggFFMeAZYSODHBWN3c3JxcaCoc7zoC5gjY2dkpWgLIDWDEEsCsAkwhuHHjhpgZMC4uzrWqar4n" +
            "kRWgg04BZIoP+xMPSmKfCcjINfouHgPMnCXpWGCeFn1WVCzv+MDZWB2n+1qNvOP/3U3gxo0bs2nx" +
            "36blNDspgfGDRw8f/YiCJc/YOO6sxWI5v3//fru7ergGAiAwmoDy/usfLT++qYDAG2+8MbR69ZrF" +
            "tN8/VFBQUOo6pAHKhc8Ow7n9FEymbMkrnp6CWbpc5i2flpbmWlU139lTu+MQJLb40+o+/CIM4lfx" +
            "aV/8wr4PX6Ry0iepvPQutcDSLbM/hb1y586dG181d06XIcEQ39/fZyTryFKb1fo/TMbEu9euWV2+" +
            "es2axNWrV7e89tprfQobG8QFgYgRgAUgYqjRkTcCLCVwU2NTkrsytw8GcjgCSn4AUlZAMSfAufNs" +
            "f9hddVVcY9EAzA+A528/1UtP/nSFxujy1M+iJkgRkJ7+xSd/8enfYREQ0ytTHbZ9oLRXZ0fHUsoS" +
            "uZSFL06fPl38Y2MgX5AusgZl1F6qnXrz5s0qUpq+fOzIkf8kk9HPd+7ceUVp44S8IBBuArAAhJsw" +
            "2veJwJpVa3Psgm3hzJkzi++oQAsXbQ84LADMmY1M29L+Nnu30cLY19fLjc/L4xLIaVCNLxaq12Kx" +
            "cENDg+LwpId917GKT/Yjj/3Sc76j1Mg3p/tGo4ljCpaSXkNDVtHx01Vu2gKKz8jIGD+5dHL57KrZ" +
            "k1JTUy7U32owELMdZBHgyWpw6g9/+MMIBiWNGbKCQDgIwAkwHFTRpv8EtNyF3p7emX19d1psmYla" +
            "p9OLe/88ZQVkeQCktMCO3ACOfe1z587536+CamRmZd12/GNOgWz7Y9i7n20RiJ9F577hMEF2T3L6" +
            "o7KjwwRZfbZFoLz1kLkz9PX2jnkiZMmkSSu/9GePPbHs3nur9Trd0uz0zH+g8MEJCppyiAoCYSUA" +
            "BSCseNG4rwSYIyD9u15N2wCfuavDHAEdRwPTYk8rANsGkBzg2GemENRdrhtzUXDXtlKuMR8HyfNf" +
            "ehf9ImhxF8MExffbnx0+E8PfhxUBMQKAlRtWFJS4BaCjvAVs/KQw+jR1dJLgnz319NMz0jIzrIJN" +
            "+C4pAdN8qohCIKByAlAAVD7BShne888/30O70TUU19/jTuak5CRa+IcjAGixZ9veI5YA5gkvZgnk" +
            "uUuXLrmrroprBoOBS0pKFp/0XRP6sMXeoQw4zgWQFAT2PqII0L6BI58AUwroj76zLRSlvZgCyKwd" +
            "3T3d9E6+/769KrY+tPXxzOzMi6QEfPvEoUPTfauGUiCgXgJQANQ7t4obmcMRsNHtY52RtgFGzP7D" +
            "T/wjlgBaENhnZiGoJmdANb+yc7LFBV0Qn+gdsf2S+d/xdO8w/7MF3nl7QFQEnJUBKZ2wAhUAFu7J" +
            "zj9gVoy+3ju3jLzMv3nLli27cnKyTtk0mv1Hjx4t8lIWt0BA9QSgAKh+ihU0QEFzqcXS6jYvrWFE" +
            "AbgzK6BoCRjeEujt7eGuXr2qoEH7JyodiCMqOg5HSMe+vjvz/8iTP3vSZ4u9qBDc6SdA2oR/Asik" +
            "NFv8mcLDrAB+vswbN2/ek56WcZW3C1958cUXFRcD6ed4URwEPBKAAuARDW5EmoCgES5193RN6++/" +
            "81gA9tQXFx9PVoDRWQFZIhvREsAcA9keAf2d/fzzSIsesf5Y3v6MjPThPXyHKd+b+d+dIsCuSX9K" +
            "3AJgsJlCyLZBhgYHKTJiyF/+5q3bti7T6vVD8fr43f5WRnkQUAsBKABqmUkVjINC3epoGBdbW1sb" +
            "3A3HNHwugGMrgC34tN4zhYA9/Yuf2TUN19zULCYOcteGGq7l5OaKT/WiyV98Embmfsn0z0zjDvM/" +
            "WyAd190pCg6rgEINAKICJKVAZhEBAbwqNm/eVEq/m+cpq+C6AOqjCggongAUAMVPoXoGsGPHjg4a" +
            "zfWWlpY7zgRgo2Qx/swC4HjiZ45/bOEftgiQJWDEKZCUATVbAVg0ALOGCKJp/06nv5HtAVIEmPlf" +
            "UgSYT8AoRYEUBGY9UOKL/RbYWNiYegNTALi09PTlC+9a9IZG4P6CzhSYqkQOkBkEgiEABSAYeqgb" +
            "egICX08Jb1rcNZyYmCgu+iMWANHs7wgHFBUDCg0Q3+l6TU0Nx1IIq/VVUJAvJkQSF3u2kLtTBoYj" +
            "AxxPym4UBarX0cF0LmW+RL8GcgYcDGwbQBx0RUXFI3n54z8l29G+EydOuPU/USYdSA0CYxOAAjA2" +
            "I5SIIAHak77Z2tLi1qbLcgHQcn/bAjDs+CdaAegzUwxIQxDfrZQt7uqVKxGUPLJd5Y0f73iaZ0/1" +
            "tAiKXvGiZzw99UtP+sNPyJIfwO0wwdHKQGQlD01vLCRS9GMQx2gLStlbt379Rr1eG2+1Wh8LjXRo" +
            "BQSUQQAKgDLmKWakpOW7rq2tw+BpwHRg0G1T/7BDoMMiwLYEhi0Aw5aAk59+6qkZxV9nzoB54/JG" +
            "nPkkpz5mEXBYBdgiz/4c4XJ3mP9FJcHhG6BEGOwcAEeYo2OLw53jqB/jKlx2333xtBXwNOUHKPOj" +
            "HoqCgKIJQAFQ9PSpT3hBK1waHByY7S4lMButuA1A+/7eswI67vdQprhbt26pD9LwiMh0LSoAzPzv" +
            "2AJwLOiiMnCHIuB0j0z/I34CyowCFE8wFJUbUnDYFoevWQE9/RiKioq2ZWXnfGbXaLZ7KoPrIKA2" +
            "AlAA1DajCh/PWCmBExKM4uLPvP5Fpz8y+d+ZFZBtAzi2Ci5euKBwIp7Fp4NvxGOQR7YA6KleMv+L" +
            "zn7D2wPe/ARI2fLcgYzvsMORJKsGeyfzvfgXjMir1qxaSVERTx8/fHh5MO2gLggohQAUAKXMVIzI" +
            "KaUEbmhsaHY3ZDr/XVzcb5v92WI/nAuA+QSI1oFhCwEpATWXalQdEkhPrre3AZye+plFwOEXMKwU" +
            "ePAT6OrsdIdZEdcMhviRbQ42VqYEBPOiQ6fyZ1XOes3G8U9SaGBiMG2hLggogQAUACXMUozJyFIC" +
            "s6Nv3b2Y8xd7+nMoAGzBZ5YARy6AEUsAUwREfwDH+4Vq9VoBcnPHcWw/XIqJdzX/37E1MGz+d/YT" +
            "cMdZCdfYb8CxDcCUHFIAyPEz2Nf8BQs2xOl1fbwgbAu2LdQHAbkTgAIg9xmKRfm8pARmONjxwMzu" +
            "Ly78tAiIT/30zrICitsC9JllBWR5AlhioM/PnFEtRX2cnivILxh2iHMshFJ8vGgBYFYBWvS9+Qko" +
            "FQ7bDpLGyhweB4cGQzEU84KFC9mvZxuFBWaEokG0AQJyJQAFQK4zE8NyeUsJzLAkJiWJi7/oCCgq" +
            "AMN7/mzff1gxEJMEiZ81ZBoe4qrPq/eQoJLJkxw5AZgPAHMIpI1sgXn/08Iv7pMPm/9FhcCNn4BS" +
            "f2paLbMAsDGzsZIzYIjSGk6dNu0BrU7bYhu0rVAqG8gNAr4QgALgCyWUiSgBKSWwpdlS465jMR8A" +
            "e7pnCz494UsOf+xpn1kApFwAjm0C9lXDnVGxFYDxyGXpgYd9AByLoiMygG0NeNseYEpBp0L9AIw0" +
            "7hElh7YAQqUA0G/OPG36jDhOI6x09/vDNRBQCwEoAGqZSRWNQ0oJ3Nbe1u5uWPHioUBsf9+x+Etm" +
            "f8dWwOhcAGIZsgS0tbZxN2/edNecKq5NnjxZ3Ad3nJLnnBxo2Coghgo6tgNEBcHJYXBo0O/DdGTB" +
            "zJEL4Lalgyk6oXrNnDVzNrW1miICFoSqTbQDAnIjAAVAbjMCeRwEvKQEZv/wx8XRyYDM2c/J6585" +
            "/rHvDkuAeDqQaBEQtwPo6wUVbwNkZWeLZyXYh83/jqd+RyQAe8q/vVdOSsBw9jxpe4BsBYr81aWm" +
            "ptJYHFsAYpbDEG0BMBgsIqAgv/CPAs+vUiQcCA0CPhCAAuADJBSJPAGWErixoanNU8+mRBMt9sO5" +
            "AMgSIHn9O8z+pAgMWwecfQKuX7vu9+HxnvqX4/Vp06cP74k7sgCOMv+7bg84+QnIcSy+yuRQbpiv" +
            "Q0i3AMTu582fO5UwbUJ2QF9nA+WURgAKgNJmLEbkJeN+XXd3t9nTcFk44Mhiz/b+h60B4ruLJcCR" +
            "NZCiBHS669TeVU9tKv16fn4+p2Mpcoed4lx9ARzf6Yl5ODJAdBgcdhpU6tjNZvOw0sNONgytJSMj" +
            "M7M0LS39jI3ncVywUn8gkNsrASgAXvHgZrQISCmB6ahXt5lqmOOb+JQvLvxucgEMWwUkS4CkLNB4" +
            "fhGtMYW737i4OG5iUfGw05+UCOhO87+rn0C45Qpn+ywJlJQLgIU6hvo1Z+4cM5maNlBIYG6o20Z7" +
            "IBBtAlAAoj0D6N8tASklcHNT82V3BZgj4G2nv9u5AFyzAjoWfnaf44zGhPeprR+7a08t16ZMmUIL" +
            "ouO0vxHvfxfzv6ufQE+3cndG2FaQlBK4ozP0RxsXFRetoqiUa7TFcK9afiMYBwhIBKAASCTwLisC" +
            "Y6UEZsImmhKH9/rZAu9Y5KWsgJJPgMMHwBEeSAoD+XTxn1HVU7IabAiFSUxK5MbTUcHsKd+hCLBw" +
            "QKdQQCfzv2MLwM7RVksIJYhsU2zLQxyr6AwYuigA51FMmzbdQPsLOB/AGQo+q4IAFABVTKM6B8FS" +
            "Ajc1NPR7Gp2YD4A92g8n/2FP++ITP3tnfgHSdyrCtgLoCF3JmvBjT22q4frUaVM5Gy30oi+A6PHv" +
            "SAjkWChJMaDFUvITEJ3nFDzo5GTyARgeK1N0wvESQwIFbtXhw4fnhaN9tAkC0SIABSBa5NHv2AQo" +
            "JXB7e2eSp4LsMBjnPX624EvKgBgS6JIVUKvRXBpuS7V+AGx8uePGcakpqQ5fAFfzv7g94DhCV7QQ" +
            "0P1wLZzDrMP6lmBMECMAJAfHcHTGQgLHjcv7HamUSAwUDsBoM2oEoABEDT06HovAWCmBE4zGkSd9" +
            "0R9AfOp3zgVAP2/JEkBpY0lBEL3EqOwV6lu12wCM67Tp00b5Ajji5KVEQI4wQbZoitsDofedYyJE" +
            "5GWk34CYC4CsGn19fWHrs2puVQ7HC+uPHj1aFLZO0DAIRJgAFIAIA0d3vhMYKyUwe+Jnnu/s3dUS" +
            "ICoEFA4opglmlgDaKtDGxb398ssvG4Yl+LHvkiivZGlZGYU9UkggM/eLf8z0P5w1jyUGYqGCw9sD" +
            "2TnZyhugk8TM74GNp6en1+lqaD/m5eXdbTIaP+Xs3IbQtozWQCB6BKAARI89eh6DgJQSuLXF4jGH" +
            "ryHBIEYDOPIAMEdAZgFgT/vOlgDRCYC7fv16R19Pb+uxw4fXUteq3gZgaGfMmDEq5t/hFOgw/7OQ" +
            "OeYnwPbPycFtjJmQ922WE0LcAiCFJpyvpXffYyUrwONHDx1dH85+0DYIRIqALlIdoR8QCIgApQRu" +
            "bWtL8VSXmYA7Ojpo0R/OBSBaA2jxp3fRMsAUAvqs02kppUDvavr6usDxTx8/cuT7z+zezbYBKjy1" +
            "rfTrMyoquD99+CFtg5A7JVlBKAZiWEFil+wiM/Y/erKiKPmVlJzMUbgoZ9fZ6eRHK811eP5ZK5xQ" +
            "uJpUpWcomOS7Rw4fuZeQNtETlI6uJRJOg0A/M8aRPlsFXujiBE29hrdX9w0NffTcc8+1K5kxZFcn" +
            "gfD8l6JOVhhVFAgMpwTO8dS1eDAQLWIjiz17+qc/ZgmQsgKye9TONV7gvkePu4coFnCQCvzdtWvX" +
            "zhQUFKhWAWBsJk8u5aqrz4s8pFBJtuiL/0fvrEx6eronvIq4bkwgR0C2rUEWgK6uLo6dERCmV+Gu" +
            "Xbv6KTXwVqtGc1+SKXFSVmZ2idGUYKKTCXPp9yaaUsiqwnd3dTWSYmpvbrIIdGqF9ejhw7+yCcIv" +
            "9+7dWxcm2dAsCPhNAAqA38hQIZIEaDmv6+hoW+ypT/LQFp/wxSd+ceG/nRVwJBcALXS0360nI8EN" +
            "O89XawXBQobv4o8+/KiHFABPTavi+rwF87nz58+JVn6et40oAmQOEK0ChRMmKH6c4rHAzL+BfB1C" +
            "nQ7YDZxnd+zd+we6/iz9Fbq5L10qkT5cvXq19uQnn9xf39DwEG0f/CM5t/7T7t27lZt8QRoY3hVP" +
            "AD4Aip9CdQ+ApQQmJ7b5nlICs9GLaYHZU63o9Dds+mdbAaIvgGQR0N4gC3i7xqa5wev158hk8Kem" +
            "5sZn6amxQ80Ek8k8XkTpgcnyIS6ODj8ARzQAiwComlOl+OFnZWWJEQ/MChDOSIBhUA/Q+wH687b4" +
            "j2JaWFhYvGHTppUbNmycYE41309bMT+gY4aXjCqELyAQBQJQAKIAHV36TmCslMCsJedtAGbup11Y" +
            "0QlQigBgigGZZQfoobfHrrVbhp0LT9Oa+PHVK1fe810aZZacWTnLSXCmCDgUgKo5czimIKjhpaUw" +
            "T+YI2NvTE5HhDA4OcgMDA371lTsuN+fhRx5+YN68eWbywHjp6OGjT/vVAAqDQIgJQAEIMVA0F1oC" +
            "UkrgGzdvXPPUMtsGGOUDIEUAMCsA/TFfADIPk7MWz1aHNtZORlNGNSkEn9XW1rZ4alct11lq4IyM" +
            "zFHDKS+fws2bP3/UNSV/YYpMhLYAREz9/f3cmdOnOfbu76uyqnLVxs2baDeKO0pKwFf9rY/yIBAq" +
            "AlAAQkUS7YSNAEsJ3Gqx0Ba++5doARhe7OkfVVEZcLYEMAvAoHXwMj37dkh7r1v3bx0kT+1TZAEI" +
            "b+yYe5EjflWyAsTFxXOLly7llq9cEXEZwtlhJm0DsC2A5ubmcHYz0jbLP9Hb28fV1dWJloeRGz5+" +
            "yMnJmfyFRx6+SOmpSygsdaeP1VAMBEJKAApASHGisbAQoJTAFAoY76ltFvbFQtnYk75bSwBdt1mt" +
            "qaQH1Du3QY6AZ6xD1vtpm+Gs83U1fmanBO7YuZN7ZtdObtYs5y0BdYyWZYVkWwAs6VEkXo7cA5R8" +
            "iA5Sqr91K6AuzWZz+QMbHyAHV/6vKMPgmoAaQSUQCIIAFIAg4KFqZAiwlMDkBFjpzdzKrADS07+U" +
            "CIgpA5JCMNg/aKSlYVQIFoUKnhU47uTVujrpjIDIDChKvTBGan2lpaWJWwBtba0RG2JSUhLHfAHa" +
            "29spC2FgvgeZmZmlS5fdU02OGc/TYUNTIyY8OgIBIgAFAD8D2RMYKyUwGwCLBddotGKYm2PRv50V" +
            "kDm9We3WORQiNmqhd2wH8Kdqai93yh4CBPRKQFQAaAuAOeaRsui1bKhumlNSxP6YEtDSErgrSXl5" +
            "+X0lkyZdo3TVz504ccIYKvnQDgiMRQAKwFiEcD/qBHxJCce8HDMAAEAASURBVBzHLADM+Y/5Aoh+" +
            "AMPJgeia1Urb/AJXaxg0XLljMAJ3urGhXjof4I7buKAcAhmZmWQFID+ApqaICM0cD9niz/566RyC" +
            "YEIQly9fvt5ooG0Mq3VHRIRHJyBABJAISGU/gwMHDqQk6PVz7IKmjHKS5lLMcRJFxenJA57WRUr6" +
            "LnBDzmlK7RrNx5TdTPSMlzUKSgncbLF4tGGzPVlH9r87swJSCOBlYlD/5JefvMM+TMflnLHahO/S" +
            "Xu5ZU2IiTLCy/hF4Fy4rK5uzNFu4JlIAIpHgiOUfYIv/wABTAgbElNQsIiXAl3ntA+umv/KTf7vv" +
            "2KFDJ3c6kg0F2BSqgYBvBKAA+MZJ9qWOHTs2QbDZNtCuzjpjoik1LT1tMCUlJSneYIjTarUjnlGU" +
            "+EZDe5ZX21pb+1tb2jZygo2jUKT/osjw/9qzZ89FuQ6UpQS2NLd4TAnM5KbT2rhOSgUrhf6xPADs" +
            "z2a3Uy5gvsvd2OpbWs5nZ2SevHb9ehyZYqEAuIOkkGtpaani4UZ06BM3Z+7ciEjtbAUI1A9AEpRS" +
            "Ms+dXjHjKIUXPvPSSy998sQTT7j9zUrl8Q4CwRKAAhAsQRnUp/Sijws24YmCwgmaioqKGePzx5vG" +
            "EGskTenl2tp36R+c5bduNXzx2JEjP9HYbP++Y9++2jHqR/w2ufN5TQnMBBK3AcgrWzoDQLQI0JYA" +
            "GT76KfXtoDuh9+/fb6Vxn75+7do0UgDcFcE1hRDIyc0VtwAG+gdExzxSgMMueRqdo3Dt6lWyAiRw" +
            "/X19Qfd31113PVJ9/vxPB/v6tlNjx4JuEA2AgBcC8AHwAkfut8hhyExP798xJMStWrd+XfaatWsW" +
            "+LD4jxpWUXHxogc2brx/y4NbssaNG7/IptH9C4tLpieQpFEFo/xlJCVwT+8NT6LcTgg0OhcAhYbd" +
            "oqQ/Vk/16PrnTU3NHrcXvNTDLRkRYFEOLB+AnZwBWXx+JF7kxT/sBzAgvoegT/PdS5fSXp3msRMH" +
            "D7IczniBQNgIQAEIG9rwN0wOQ1+j3OIZjzz66Epa+Eee6gPpOTMrM3f9hvVrH9jwQGpySurKgf7+" +
            "H9Be5N2BtBWOOiMpgZtpk9fDS0wI5CYXACewLQBuyEM1jrNpznV3ds1mT454KZsAO9yJnQp4g7YB" +
            "IvGihD7MwjSsBLg1MvktRsnkyQ9SoqF37Frtg35XRgUQ8IMAFAA/YMmpKCUO2a7V6SZs3rx5Hv1j" +
            "EbKE7uPyxk1i+crnz1uQJPCaH9Mxps++/PLLUfeS9yUlMAv/08fpHbH/I9EAGm5gcKiJAl49nr6m" +
            "iddcpn/FL1haLKPCBOU035DFNwLM+Y8deNTZ0cm1t7X7VinIUqmUg+C2M2BIlADz/avvLxEEfhvl" +
            "BpgcpHioDgIeCUAB8IhGvjfoH4V0eup4dP6CBVZ66p0WDklnzZ61euu2h/qMCaZpfb29Bw4dOjQx" +
            "HP340yZLCdzU2OT1MV30wqZ4BzEroNaRF4D+cdbTP6bNnvpiYYZ0UuC1lubmwFK6eWoY1yNOgCXn" +
            "SUkxi86ATU2NEelf3AZgkQCUg8DfA4I8CZiXl7eU0gS/RVE86z2VwXUQCJYAFIBgCUahvpbjlsfr" +
            "4/unT5/OHIXC9iKv5LIv/dljW9LTMvq0Gs13Txw6ND1snfnSMKUE7uzsMHsrynK0a2kbQMwFQP/D" +
            "sgJaB4dS6B/Sq97qUZRAPaUb9v9kF6+N4mY0CEyZOlXMCkgHPUWk+4LCQnHhH6BQQFKWQ9WnefHS" +
            "xYn0891Ivj65oWoU7YCAMwEoAM40FPKZHITuKZ82ZSxP/1CNxrx129bnJpVM7rbzmu8cO3gseonk" +
            "tdwFSrgy01vCFUM85QMQw/8cT/9sP3hgaGA6KQA13oCwMMPGhib550PwNgjcEwmI2wA07yw739Cg" +
            "Z9ePUOFiVoe4+DhxGyDYUEBnmUpLSzdTFsxr9Bu+1/k6PoNAqAhAAQgVyQi14zDFC4vLysoiE+g8" +
            "PK77Vtz3xcmlZY2Cxv6taCkBkiMgbQN85gk38wEQswGSEsDeWYIWlgWwz9bn1QLAwgwHhwbwpOUJ" +
            "rIKuM2fQ4kklYkhgY4S2AcaNGycqABaLRx/VQAiaJ08q7aLtvuWBVEYdEBiLABSAsQjJ7D45uk0z" +
            "JBiaUlNTIx6mt+y+ZY+XlpbV0+E8346GEiA5AjZbmr2evCKGA7JoANoCoCxtrSwL4HPPPefVI4xZ" +
            "CLq7u6d6O3BIZj8FiOOFwKzKStEZsDWIHP1emr/j1qTJk8OhAHBz58+9nxTYVeT3M++OTnEBBIIk" +
            "AAUgSICRrs4LQjGlPI2LdL9Sfw4loPRWtJQAhyNgo9eNVkdaYEcuAEoD3OYpC6A0JvYuWgjIUsC8" +
            "x/FSPgFmli8qKuIaGhoiMhjmCBin19PxwD1BnQngKiwps/mZmRmva3l+hes9fAeBYAlAAQiWYITr" +
            "U3a7bPJy9uoIF26RbisBUdgOIEfAFkur3tsY2T/ELCSQeQLS4TAaOgBhzI1g0UJAloLOzk6P0QLe" +
            "+sQ9+RGYNbtSPBsgUpJRUi3RChDqHATz5s+fQKkG1lC677xIjQX9xAYBKABKm2c7l8jy+0dbbKYE" +
            "FJUU13Ia+zcjGR1AlodL3T1d07yZ6h0nA9IWACkB1iHbRXYcgE+86LwAcjAM/FxXnzpBoUgRYFaA" +
            "8imRS+88o6KCtusF7kL1BTqB0lviSf8I5BcULDEY4m9ShqNl/tVEaRDwTgAKgHc+8rtLJ/sZE4xB" +
            "Zf0L1aBWrly5PTsn+6RNo9lPiYmKQtWut3bIK5rleL3Y2trq0bYrJgRiVgDyA6D9f9o14EYOQ/LW" +
            "NrMU2O123lsZ3FMWAeYLEKkXcz4sKy/jenp7uEuXQptTqnzKVMpmrYEzYKQmM0b6gQKgtIlmOW5Y" +
            "kLs8XuaNmzfvMScnV/N24SsvvvhiwGeh+joclrSHyl6nEC+PZwKwtiQ/gKHBgXavaYCdOiZdwS4I" +
            "UACckOCjnwSmTZ/OUQIf7tLFi+KBRH5W91i8YmZFFYWz3A9nQI+IcCMAAlAAAoCGKqMImB/evn2N" +
            "Vq8fouREu0fdCdcXStrTYrF4NdWL5wJotFxvXz8dD+g5DbCziDx5WNLBQV4dDJ3L4zMIuBJgv7sF" +
            "CxdSVsBBrrbGa+oJ16pev8MZ0Cse3AyQABSAAMGh2igCFZs3byolw8TzR44cWTfqThi+sKQ9FN7l" +
            "daFmT2EsIRDtxZq9pQF2Fa+/vy8yp8i4dozvqiGQS8cSl5aVco0NjVxTY+jSEc+ZNy8dzoCq+ZnI" +
            "YiBQAGQxDcoXgs5FXz5/wfyfk8v9X5C3cljOJ5AosaQ9bW0dXg8oYgqAjs4C6O3p1o+ZBlhqGO8g" +
            "ECIC02fM4Mg/hmsMoQJQWFh4l06nvUoJDu4OkZhoJsYJQAFQ4A+AUoN6NX9Ha0jkcLUjL3/8p4Ld" +
            "/izlLzeGSw5BK1yiDH+zvaUEZn3T0xJns9sXjpUGOFxyot3YJjC7qoqiEKaEEoK5pKSkmw47XBbK" +
            "RtFW7BKAAqC0uSeP9iHrkCwVAIZy3fr1j+u0+gG71bojXGh9SQnM+h4cGuzxJQ1wuOREuyBAUSsh" +
            "hVAxa1Y+uQDfc/zg8ZBqFiEVEo0phgAUAMVM1bCgAjc00N8v50NrKDJg42Tad3+W/AHuCQdeKSVw" +
            "Q2OD16Q9/X39V3xJAxwOGdEmCISDQFpa2nKdXveOTWtbEI720WZsEYACoLT5Jo/27p6ebjmLnZGR" +
            "cV/l7Flvkj/Arh+++MO0cMjKUgJTJIDXpoeGhrS+pAH22ghugoDMCJSXTdHSttZimYkFcRRIAAqA" +
            "8iatiRa+VrmLTelLN5oSTc0D8QNPhkVWH1IC9/b1Xud4YTAs/aNREIgSgekV02fR73optgGiNAEq" +
            "6hYKgNImUxCudHR0evWAl8mQzGvXr6+k9GV7wrEV4EtK4CHyFKT+Q5eTVSZgIUZsEzCbzeWG+PgP" +
            "sQ0Q27+DUIweCkAoKEawDd6uu2CzWSt7uru9ZsKLoEgeu6Iji+fNqpz1Jjkt7XjppZeSPBYM4IaU" +
            "EtjSbPGYbWVo0DrgaxZASQSTyVQqfcY7CMiVwKRJpTZsA8h1dpQjFxQA5cyVKGlaTtoFeqo9de36" +
            "9WoliD5/wYINBkMC+S32PxpKeaWUwG3tbe2e2m1tb231NQugpzZwHQTkSIC2AZZiG0COM6MsmaAA" +
            "KGu+uK1bt9rIs/305cuXPS58MhuSecXKFQVkBfgz2goI7dFsY6QEtg5Zk/3JAigzbhAHBDwSoG2A" +
            "PJMp8SS2ATwiwg0fCEAB8AGS3IrQ0XanG281RP1IYF+55OXl3Z2dlXOSTJbbfa3jSzmWErixoclj" +
            "SGR3V3cy9XnVl7ZQBgSURoBOHjRhG0BpsyYveaEAyGs+fJJGZ7d/PjA0MIcS4sjeD0Aa0Ko1q1ZS" +
            "br6njh8+HLIjTVlK4O7ubrPUh/M7bTlQIqCBOfQPpEcfAefy7DNZC8hQgRcIKINAaWnpVLYNQCcE" +
            "TlWGxJBSbgSgAMhtRnyQJzU7+xz5AZy8cvnyJz4Ul0URdppZ5ezKV+08/9TBgweTQyGUlBK4t7e3" +
            "07W9zg66JHC1fbY+ny0AAifQUcuUvQAvEFAAAbYNQH+f0/HgCxUgLkSUIQEoADKclLFEYn4AAsd/" +
            "VltX1zVWWTndZ7kB6JCeTr1G80go5JJSAjc3NV92ba+1tfWsv1kAeY7XGwzx+a5t4TsIyJXAlClT" +
            "aJtLuFuu8kEueROAAiDv+fEoHc/ZTzXU14ftwB2PHQd3w3z30qV0Ro/msRMHDxYH1xTHeUsJHFAW" +
            "QF5IiouPVxrTYDGivoIJ0GFDMzmOX0kOtrACKHgeoyU6FIBokQ+yX16nO2mz2afTk64iwgGl4ZZM" +
            "nvxgXFzcO3at9kHpWjDvLCVwU0NDv2sb5APAsiUOuF739P3AgQMptGWQazKaPBXBdRCQHYH4+Pjk" +
            "goLCt8jXZZXshINAsicABUD2U+RewGeeeeYSLVjv1dTUXHNfQrZXzctXLs8mh7tt5Lw0OWgpKSVw" +
            "e3vnHUmGSAFoIwcpn7MAJmgTCmnLoDjZHBL3hKCHhQZAwFcCc+fPZdtWm5Aa2FdiKCcRgAIgkVDi" +
            "u8B9UHOppk9pohcUFKwlXwD21LI+WNk1guZiT3dXeV/faAw2u01Lew0+nwMg8EKJVqN5z2BQQpbl" +
            "YKmhvpoIZGZmzqEDuD6xa6wb1DQujCX8BKAAhJ9x2Hqw8/aTHR0dy2i/O2x9hKlh8+KlixPJe3nD" +
            "iRMncoPpY5AbrBN47qLFMjolcGdnp4Wc+nw+NZEUgEJzSupoLSIYwVAXBCJIYMnSJeX0e9924tCh" +
            "sgh2i64UTgAKgLInsIaC16ubm5svKW0YFMO8WafT3LQN2u4JRvZ9+/Z1UkjkNToh8ZZzO709vQZa" +
            "1Jucr3n7zPNCJp2zfkc4obc6uAcCciGQnZNdZU5N+dDG85vkIhPkkD8BKADynyOPEu7Zs6eFMtfc" +
            "ogNxFOUIODwgc3HxpB7adw9KARDb4rmbLS2to8z9tCWQTnsAVzzCc71h5xLpgCFYAFy54LtiCCxb" +
            "du9MWAEUM12yEBQKgCymIXAhKB9AJyXC8dnZLfCeQl+zYlbFAsrWs4RCmEqCbP065QIYeXpvb2/n" +
            "+vv68giKz1kASRHRa7Vaxe2lBMkN1VVEgFkB0jMyP4MVQEWTGuahQAEIM+BwN0/Z64ZaW1oVtwXA" +
            "uKSnp5fFxcVf4u38rGA4CXa+tr29bfngoMMIwBQAsoycJ0fDOp/b5TkNlYcHoM/AUFCOBOALIMdZ" +
            "ka9MUADkOzc+SUYmP7sg2BQ7j+Pzx1MeE46SmQT+0grWi3Qw0ClyBOxhrZBCdJMOTLpKRwb3+tNq" +
            "oslU4E95lAUBuRFgVoDs3NxqWAHkNjPylEexC4c8cUZeKnJeU3Tu+uKiYjoqWJj5yiuvaAOlt2Pf" +
            "vlrSIs41NjbeZG309vZYNTxnCbQ91AMBJRNYvGTxIvgCKHkGIyc7FIDIsUZPbgjk5uVOpzC+itaG" +
            "1lI3t32+RBaAS3/68MOJVquVO3/u/HiyAIz4BPjcCAqCgAoIUE6AcXnj867ACqCCyQzzEKAAhBlw" +
            "uJtX+hG2JpOJSzSaLgsaa1AKAK/layjFcAPlReB0Om2nRhAUdVBSuH8naD+2CCxYtGg2rACxNeeB" +
            "jBYKQCDUZFSHHWGbnJxMG+nKfSUlJ/VyPD8hmBGQBeACZfI789qrr3EGQ0IHOQG2+NseOSSm+1sH" +
            "5UFAjgRgBZDjrMhPJigA8psTvyQiLV+vpyPs/Koks8KJyck6EikrGLF27959nsIhf5uZmcHRQl5H" +
            "5s9RiYHGaptZUvR6XcZY5XAfBJRCYP6ChVUcp9kakjM3lDJoyOkXASgAfuGSYWE6wpYsAHkylMxn" +
            "kSj8bpCjRDw+V/BQkPwhP0hLT683GOI+oZBAv0IjmSWF5zWKdqj0gAWXY5RAZlZmblp6WrWW59fF" +
            "KAIMewwCUADGACTn20ePHk1lR9iaU8zsCVqxLwq/y2WJeIIdwDN79ryfk5PzycTi4lPPPfdcuz/t" +
            "MUuKRgMFwB9mKCt/AnPmVI0n69ZasgJge0v+0xVxCRW9cESclsw6tNvtE7WcZlJGekaazETzSxzK" +
            "wGckBSAkyiidNPg7OmTon/wSgBUmSwo5JCIPgN/gUEHOBIqKixfRf1+vC3ZhIcn5KznLCtkiTyAk" +
            "/+hGXmz0yAiQaa/cYEz4IN6gaBeAUE/mL/xt8MCBAynMkpKYmGj0ty7Kg4DcCeTl5fXRP/Rz5C4n" +
            "5Is8ASgAkWceyh6n0T6fX9nuQtl5qNrq7u6+SAswhe4H/6Kn/yv+tpKgTSgkC0RxsjnZ36ooDwKy" +
            "JzBpUvE4cm6p3L9/P/69l/1sRVZA/CAiyztkvYmZ8wRuxoSCgqD3zkMmVIANUS5DOtGXD4kCEIgI" +
            "dGxwCYUQvmcw4CiAQPihjrwJ5OXnzycJZ1JoYLm8JYV0kSYABSDSxEPUX1NTUxnLoFcwYcKkEDUZ" +
            "tWaGrEMD7FCjaAlACkChOSUVRwFHawLQb1gJiMm2EhNrtIK2LKwdoXHFEYACoLgpcwjM/mOmp9ZP" +
            "kpKSpih0CCNid3Z2NtB5AHR6b3RedJ5Cpk6vQ+rg6OBHrxEgkJWZzQu8LahsmxEQE11EmAAUgAgD" +
            "D1V37D/mzKzsgVC1F8122ltbr1D/0dvKoBwEyUlJCdFkgL5BIJwEyFcoibbZisPZB9pWHgEoAMqb" +
            "M1Fi9h/zuLxxKQoV31nsq739/XSan2ac88WIfqYcBAkJCWpgGVFs6Ew5BJgCQP/Yl7zwwgsm5UgN" +
            "ScNNAApAuAmHoX32HzH7jzknOyczDM1HusnCdevWTeQ4oerYwWOzIt056498KXS8RhM1J8RojBl9" +
            "xhYBcgAsoUiAMvIHgBUgtqbe62ihAHjFI8+b7D9i9h9zVnbWTHlK6J9U+fn5/8tkMr7Kae0r/asZ" +
            "otICH5eclDw5RK2hGRCQHQGycHFareYDOjSrRHbCQaCoEYACEDX0QXRs40oTE5POsf+oVfIyL1+x" +
            "ch7lAnjw+PHjkY9qoCyAdB6BTSUsMQwQcEuARbqQJ+AEtzdxMSYJQAFQ4rTz9klZWVmqmrvccbmz" +
            "U9PTLwk22/pITomUBTA1LbUwkv2iLxCINAEW6cIiXiLdL/qTLwFVLSLyxRxayZgDIHPqCW2r0W9t" +
            "0cIFk+ngko1HjhzJiZQ0UhZAs9kc9GmEkZIZ/YBAIAR0Ol1fKE7dDKRv1JEnASgA8pwXj1IxB0Ce" +
            "0taSAhA9r3mP0gV3Y3xBwayk5KRe3s4vC64l32uzLIBGQ8JnyALoOzOUVCYBOhRoKBSnbipz9JDa" +
            "HQEoAO6oyPgaHVhDHvPc5PT09GwZixmwaGXlZUZOI0RMAbBz9omGBKMlYIFREQQUQiA5MXl8qE7d" +
            "VMiQIeYYBKAAjAFIbrfJi7eQHNbOG43qPLhu8uTJM8gZcNnxg8cjkuGQDg/Ky87JSpXbPEMeEAg1" +
            "Aa1Oo85/NEINKobagwKgtMm2cxnk/T+oNLF9lTc5OTkpLS211qa1LfC1TlDleCHXnJyCCICgIKIy" +
            "CICAEglAAVDirKlc5glFRbQ1LywK9zBPnDhhpmMICzIzM3PD3RfaBwEQAAG5EYACILcZGUseDWfp" +
            "6+uLG6uYku9PmjQpn+M1d4U7J4B9wF7EcXxpZnYmsqMp+QcD2UEABAIiAAUgIGzRq0R71leHhobK" +
            "e3t7oydEmHtOS0sro6xlZwSrNbypgbX2KXGGuD/Gx8cnh3lIaB4EQAAEZEcACoDspsS7QN3d3XVU" +
            "4mJbW1uP95LKvpubk9ND6Y7Dnep4WmZGRpeySUF6EAABEAiMABSAwLhFrdbzzz/PFv4aS7PlRtSE" +
            "iEDHBRMm0G+Tn0X79GE5Jnj//v06ijaYUVRUhKf/CMwnugABEJAfASgA8puTMSXiSQFoaKhvGrOg" +
            "gguUlJTMpJjlKpvNNiMcw8hNTy+nUwBnTZg4EYejhAMw2gQBEJA9ASgAsp+iOwUUeL66qaHxzhsq" +
            "ukInHk7V63S/omiAqnAMy6rRTNNpte+aEhOnhqN9tAkCIAACcicABUDuM+RGPq3Veqa7tyerva1d" +
            "1fvXEydO7CQ/gIVuEAR9iX74M8aNHx90O2gABEAABJRKAAqAAmdux759tZwgvFdTW3NageL7LPLM" +
            "ykq2Qi8JdVbAV/a/EicI3Eza/0/xWRgUBAEQAAGVEYACoNAJpW2Ad2svXepTqPg+iU3nHWymE8ze" +
            "DnVWQEuWZTrzLyALw1yfBEEhEAABEFAhASgACp1UrU37fmtbW0lnZ6eqtwHKy6ZoeYFfHNJpsnFz" +
            "0tMyPqYTABEBEFKwaEzOBAyGhHw5ywfZIk8ACkDkmYekx2f2PXOOE/i3Ll26dCokDcq0kekV02dx" +
            "vLD08OHDIXPW4zXCksmlk3AwikznHGKFhwAl18JvPjxoFdsqFADFTh1H67/w9tnPzzYreAhjim42" +
            "m8tNxsRPKQNiSJwBjx49Op8cC5eXlZeHO8nQmGNDARAAARCIJgEoANGkH2TfbBugp6d7VkdHx80g" +
            "m5J19SnTphgpHPDukAhp51aMy837Lcz/IaGJRkAABBRMAAqAgidP2gY4c+rMWwoexpiiT5s2bSHH" +
            "8yvY0/uYhb0UOHbsWB7ZTVZXzp41zksx3AIBEACBmCAABUDh08y2AS5duqBV+DC8is+e1tlTO0dP" +
            "714LjnXTZlum0+vq8gsKloxVFPdBQI0EBAofUuO4MKbACEABCIybbGqxbYD+gYF5ra2tb8hGqDAI" +
            "MrNyZhJ7enc8xQfWgcBplk+dOtUaWG3UAgFlE6BTL/MFTsC/+cqexpBKjx9DSHFGvjGnbYArke89" +
            "cj0WFhau0em0Vzm7/e5AeqUognmkQKycOXNWQPUD6RN1QEBOBLQ6XQLP8WE5XEtO44QsvhOAAuA7" +
            "K9mWZNsAFy9dMMhWwBAJVlw8iZ2EuDSQ5iiK4L6MjMxfG01G5P8NBCDqKJ6AXk9rPy+QJQ0vEHAQ" +
            "gAKggl8C2wawWq2L1b4NMG3GtAI6wncxOQMW+TNtdKRwBm18rpxdVZnhTz2UBQE1ETAZTWQE43IP" +
            "HDiAFNhqmtggxgIFIAh4cqkaK9sAWVlZ92q0ujpBEPxKCmQfGpqv1ei6i4qLV8llziAHCESaQLKZ" +
            "El/yXHGCNqEw0n2jP3kSgAIgz3nxW6pY2QbIysrQ0I+2xC9APD83Oyerza86KAwCKiNA0TRcYmLi" +
            "Wfq3wr//flTGAcO5TQAKwG0Wiv4UK9sAWdnZaXaBo3h+314n/uFEAYU+LZ48adKQbzVQCgTUSyAu" +
            "Lr6BFABYANQ7xX6NDAqAX7jkW1jcBuC4P577/JyqUwMnm82JPCfk+jIT+/fv19FJgo/wGu698qlT" +
            "se/pCzSUUTUByoPRyfNCpqoHicH5TAAKgM+o5F+QHN3eq6mpoVT36n1lZWaV00ZmMXuy9zbK44cP" +
            "L8jKyPh7YrJ/yGo9RmWhAHgDhnsxQYCO1+6jhFqJMTFYDHJMAroxS6CAYghQkq+P+/p7v9nX13c9" +
            "IUGdR39mZWedorTAJ+nJ/n6amO87T86RI0dyeDu/jJ5wlts57n5zivmHD2zYsM5kMt1H5SY4l8Vn" +
            "EIhFAkmJicn1PDcQi2PHmO8kAAXgTiaKvZLRlHHGktH8cV1tbf+UadPUevZ3O2UzO0EJTf6ZFvwE" +
            "jd1+SuC0CeTdPJsThJVJ5qS+svIy45TycqPRZPprxU4mBAeBMBCgbIDp9N9KQxiaRpMKJIAtAAVO" +
            "mieRt+7fOkiZvj+rra3t8lRGBdeX7tq163uTyyY/ywv8BIHX/BuN+Rfk3Zy5eu2axO2Pbl9eVVW1" +
            "iBZ/innCCwRAAARAwBMBWAA8kVHodTJ9n25oaChRqPi+ir303nvvnUl/+48fPz794YcfLkxOTmZn" +
            "IZh9bQDlQAAEQCDWCcACoLJfgM5u/9xqsy3q6e4+q7KhuQ6HLfYHnnnmmd9g8XdFg+8g4J4AOw/A" +
            "/R1cjUUCUABUNuup2dnneIE7eaWurkZlQ/M0nAq6gSd/T3RwHQScCBji471GzzgVxccYIAAFQGWT" +
            "vHXrVpvA8Z/V1tWp2Q9AZbOG4YAACIBA5AlAAYg887D3yHP2Uw319cawd4QOQAAEFEeAMmNSegy8" +
            "QIDjoACo8FfA63QnbTb7dDodsFqFw8OQQAAEAiTA8xqBwmjx736A/NRWDT8Etc0ojYcc4y5xgv2d" +
            "6urqCyocHoYEAiAQIIEEY0Ip5dDQB1gd1VRGAAqAyiZUGg5Z+d69cP58v/Qd7yAAAiCg19PazwtJ" +
            "IAECjAAUAJX+DtjpgP39A3M7OjrOq3SIGBYIgICfBExGE8cJXO6BAwdwNoaf7NRYHAqAGmeVxiSe" +
            "Dshzb3768cfvq3SIGBYIgICfBJLNlCCT54oTtAk4EthPdmosDgVAjbMqjcnOv0mnA7KTvzqkS3gH" +
            "ARCIXQIGg4GjtNlnBV5Qe7bQ2J1kP0YOBcAPWEorqo3T/p6yAo6/XHv5PaXJDnlBAATCQyAuLr6B" +
            "FABYAMKDV1GtQgFQ1HT5J+yOHTvq6YS8X7zz9h+v+VcTpUEABNRKQKfXddKR2ZlqHR/G5TsBKAC+" +
            "s1JkSa0g/Kqnp/eu5ubmjxQ5AAgNAiAQUgI6na6Ps3NsaxCvGCcABUDlP4Ade/dWU96v/3jv3Xcv" +
            "qXyoGB4IgIAPBNLT0orIERC5AHxgpfYiUADUPsM0Pl4QXr9169aKvr6+6zEwXAwRBEDACwGe7P+k" +
            "AODffi+MYuUWfgQxMNPP7NnzPifwr5/89NO3YmC4GCIIgAAIgIAPBKAA+ABJDUXogKA3zp49q1PD" +
            "WDAGEAABEACB4AlAAQieoTJa0GrftA5ZJ169evVVZQgMKUEABMJBwGBIyA9Hu2hTeQSgAChvzgKS" +
            "eOfOnTfJG+C1j//0cXNADaASCICAKghotRocFa6KmQx+EFAAgmeonBY03G+amhvXwhlQOVMGSUEA" +
            "BEAgXASgAISLrAzb3bVr1wc8x71x/uz5z2UoHkQCARCIEAGBjguNUFfoRsYEoADIeHLCIZpg5/94" +
            "7tznXeFoG22CAAjInwAdCZwucAL+7Zf/VIVdQvwIwo5YZh1ouY+6uruXYRtAZvMCcUAgQgT0cXHp" +
            "PMcjEVCEeMu5GygAcp6dMMiW0ZRxhs4D/7iutvaTMDSPJkEABGROgCwALDtYkszFhHgRIAAFIAKQ" +
            "5dTF1v1bB2n377Pa2lpsA8hpYiALCESIgMlo4ughIPfAgQMpEeoS3ciUABQAmU5MOMWyc9zphoaG" +
            "hHD2gbZBAATkSSDZnEwWAK44QZuAI4HlOUURkwoKQMRQy6cjnd3+udVmW9TT3X1WPlJBEhAAgUgQ" +
            "MBgMnNGQ8JnACyWR6A99yJcAFAD5zk3YJKtvaTlPx4GcvFJXVxO2TtAwCICAbAkYjMYWUgBgAZDt" +
            "DEVGMCgAkeEsq172799vJRPg6cuXL3fKSjAIAwIgEBECOr2ukw4FzIxIZ+hEtgSgAMh2asIrGPwA" +
            "wssXrYOAnAnodLo+zs4lyllGyBZ+AlAAws9Ylj3AD0CW0wKhQCAiBLRa7RBZAZELICK05dsJFAD5" +
            "zk1YJZP8AK5dv14f1o7QOAiAgOwIGA3GNFIA8O+/7GYmsgLhBxBZ3rLpzckPoF02QkEQEACBiBCI" +
            "N8RlRKQjdCJrAlAAZD094RWO+QE03mqIC28vaB0EQAAEQECOBKAAyHFWIiQT8wMYGBqY09vTg2iA" +
            "CDFHNyAAAiAgFwJQAOQyE1GQQ/IDuHH9+rkodI8uQQAEQAAEokgACkAU4Ue7a8kP4MrVq5Zoy4L+" +
            "QQAEQAAEIksACkBkecuuN8HOn2lqao6XnWAQCARAAARAIKwEoACEFa/8Gxc0wrmurs5Z/f398hcW" +
            "EoIACIAACISMABSAkKFUbEM1dC7AucaGxs8UOwIIDgIgAAIg4DcBKAB+I1NXhd27d3cLPHepobGh" +
            "WV0jw2hAAARAAAS8EYAC4I1OjNzjOa7m5o0bCAWMkfnGMEEABECAEYACgN8BJ/B8tcXSgoRA+C2A" +
            "AAiAQAwRgAIQQ5Ptaahaq/WMzWad3NLSUu2pDK6DAAiAAAioiwAUAHXNZ0Cj2bFvXy0nCO/V1NRc" +
            "D6gBVAIBEAABEFAcASgAipuy8AhMfgDvXLl8md7wAgEQAAEQiAUCUABiYZZ9GKOGLACtbe2F7e3t" +
            "XT4URxEQAAEQAAGFE4ACoPAJDJX4O/bureYE7jcXqi+cDVWbaAcEQAAEQEC+BKAAyHduIi+ZwL16" +
            "8pNPK+02OigYLxAAARAAAVUTgAKg6un1b3C79u56XeC4//v+++/9yr+aKA0CIAACIKA0AlAAlDZj" +
            "YZZX4IV/PH3q9DTyBbgZ5q7QPAiAAAiAQBQJQAGIInw5dk2pgd8RBO7oq//16m/lKB9kAgEQAAEQ" +
            "CA0BKACh4aiqVuKH4n/U1dFh+vCDD36sqoFhMCAAAiIBk8lUChQgAAUAv4E7CDz55Sdb7Tx39NNP" +
            "Ti5ramz8+R0FcAEEQAAEQEDxBKAAKH4KwzMA2gr4PcfZD/zyF/9ZTz2cCk8vaBUEQAAEQCBaBKAA" +
            "RIu8AvpNMJmOW21DmpdfeumnJG6HAkSGiCAAAiAAAj4SgALgI6hYLPb444/32+z2/90/MDDr5z/7" +
            "2WFiACUgFn8IGLMqCQh0DKgqB4ZB+UwACoDPqGKz4N69e+u0dvv+xoZGUgJ+/g9EAUpAbP4UMGoV" +
            "EeB5Sv7NCfj3X0VzGshQ8AMIhFqM1aE0wWc4u+avGxrq50IJiLHJx3BVSUCj0Qg8x+tVOTgMymcC" +
            "UAB8RhXbBXfu23mSt2v+qqGhYR6UgNj+LWD0yieQmJRYxvFCkvJHghEEQwAKQDD0YqyuQwng/xJK" +
            "QIxNPIarOgImo4mjw79yDxw4kKK6wWFAPhOAAuAzKhRkBKAE4HcAAsonkGxO5jieK07QJhQqfzQY" +
            "QaAEoAAESi6G691WAuATEMM/AwxdwQQMBgMXp4//iM7+KFHwMCB6kASgAAQJMFarSz4BjQ31Vf/4" +
            "8svfIA6nYpUFxg0CSiRAfgCdpADAAqDEyQuRzFAAQgQyFpthSoBGsH+tt6/v/7V3J8BRVekCx+/t" +
            "TkI2CElISNjEsC8qKDDgKCACijgjDMo4+pax0EkCIU8omZpxXr2y6r1Z3mxv3hACkVUNW1iVTQiL" +
            "YRUMAkoSAglDwpI9oTGdztb3vtM8U8NQYELSy13+VFFA+t5zvu93Wvvrc88996lvNwuiCDDjG4Gc" +
            "dSkQGhLsEIHH6DJ4gnaLAAWAWxjN28jtWwRleVFDfUOv5e8vP1JVVbXFvBpkjoB+BLqGh0eKaMP1" +
            "EzGRuluAAsDdoiZsb+7cuZcdjQ0LmpsaizM2bpyQn5+/z4QMpIyArgTCunQNFbcCRugqaIJ1qwBb" +
            "QbqVk8aWpqTMFMuL3x06bPjp8RPHxyOCAALaFLhWfO3Mjp2fNDQ0Nk5bsGDBTW1GSVSeFGAGwJO6" +
            "Jmw7MSlpm9hh9O2c3PP99u7Zu1QQ2EzIQMoIaF6gW3S3kSLI/twKqPmh8liAFAAeozVvw4nzE49Z" +
            "nNZ3Ci8XxmRsyFglJIrMq0HmCGhTgFsBtTku3oyKAsCb2ibqKyE54Zxskd+prqoMFosDd9hstjwT" +
            "pU+qCOhCIDw8rF6RlId1ESxBul2AAsDtpDTYInDn4sB1a9dGsTiwRYY/EdCGQERkZLAsyz21EQ1R" +
            "eFuAAsDb4ibrb+HChY65SUl/kFX1Z4f2H4g4fvz4RyYjIF0ENCsQHd29t7gTIFazARKYRwUoADzK" +
            "S+MtAi2LA8+dPRvL4sAWFf5EwLcC4eHhEbIq9UlLSwvzbST07gsBCgBfqJu0z3ssDjxnUgrSRkAT" +
            "AhEREWInQHmQ0qDEaSIggvCqAAWAV7np7K7FgUeqq6tPooIAAr4R6BTYSQrt0vm0ZFWG+iYCevWl" +
            "AAWAL/VN2nfL4sCmxqaijRs29LuQl7fVpBSkjYDPBbpFRtSIIB71eSAE4HUBdgL0Ojkd3ing2jlQ" +
            "leRfDh067OyEZybMFq9xLfJOIP6OgIcFLl26tPfAvkw/RZZmzJs3r9bD3dG8hgSYAdDQYJgxlNuL" +
            "Ay1ycm5ubmxGRsYKYcCmQWZ8I5CzzwTi4uKGqJL0lEWxjPFZEHTsEwEKAJ+w0+mdAuKSwOfiueQL" +
            "qiqqOrs2DaqpqWFdwJ1A/B0BDwpYrdY+kZERaarsnOzBbmhagwIUABocFDOGJKYeC+ob6992PVFw" +
            "w/r1/dg0yIzvAnL2lcDTEyb0EXcDzEhJSRnmqxjo1/sCFADeN6fH+wjcuWnQwf0HwrMOZS2/z6H8" +
            "GAEE3CgQGxs7IyCg0y6xK+AMNzZLUxoXoADQ+ACZMby71gX8SRjwREEzvhHI2asCk6dMDrGo0o/T" +
            "Fi8e7NWO6cxnAhQAPqOn4+8SuGtdwEc8TOi7tHgNgY4LPNT3odf8AzrtdcryjzreGi3oQYACQA+j" +
            "ZNIY71wXwMOETPomIG1vCoQ9N+25GFmSX2UWwJvsvuuLAsB39vTcBoE71wXwMKE2gHEIAh0Q6NWr" +
            "1z8Fh4ZkMQvQAUQdnUoBoKPBMnOodz5MaOfOnawLMPObgdw9KjB5ypTezAJ4lFgzjVMAaGYoCKQ1" +
            "gZaHCRUXFcdlbMhYJY7nYUKtofE6Ag8o0KNHj5fCwrueZBbgAeF0eDhbAetw0MwecmpqapysqD+3" +
            "+vs3zXp51iDxRLMpZjchfwTcKVBWWpa9bcuWThZVmR0/f/4Fd7ZNW9oRYAZAO2NBJG0UaHmYkGvT" +
            "IPEwoZE8TKiNcByGQBsFusd0HxXZLepss8Uyq42ncJgOBZgB0OGgEfLfBVwPExI7mL07dNjw0+Mn" +
            "jo//+yv8DQEEOiJQUVHxxeaMzSFW1fmqmAX4uiNtca42BZgB0Oa4EFUbBVoWB+bknu+3fevW/xSn" +
            "sWlQG+04DIHvEoiKihrdp2+fXMViee27juM1/QpQAOh37Ij8W4GWxYE3SkqHr0tPXyJ+zOJA3h0I" +
            "uEFg0qRJ3xNPCnxzyZIlU93QHE1oTMCqsXgIB4F2Cezcs7PsxRdf/KKxvmHKmbNn//bwww/bgoKC" +
            "+rWrMU5CAIHbAv7+/mGK05lRWlIy9rnnn9+7Z8+eBmiMI8AMgHHG0vSZ3L04kCcKmv4tAYAbBL43" +
            "duxMUQjc8rdYXndDczShIQEWAWpoMAjFfQKuxYGqLP9q2NDh2SwOdJ8rLZlToODixRWZmQcetSrN" +
            "r8UnJxeaU8F4WTMDYLwxJSMh4FocKK5dvp2TkzMgc+/eFPEjFgfyzkCgnQL9Bw58JSQkKFuxWl9p" +
            "ZxOcpkEBCgANDgohuUdAPEzoqGSRfl5QWNhPbGpCEeAeVloxp0DYs1Om9BJF9U94UJBx3gAUAMYZ" +
            "SzK5h4BYF3BakuVflJaVDeEOgXsA8SME2ijQs2fPH4YEBx91ylax9wa/jCBAAWCEUSSH7xQQRcBX" +
            "oghYdMt2K3L5+8uP2Gy2vO88gRcRQOCeAlOff36MeOHHKSkpA+95AD/UlQAFgK6Gi2DbK3DnHQLr" +
            "1q6N4g6B9kpynpkFYmJiRolnb+SJD46XzOxglNy5C8AoI0kebRZo2T547JPj6kaMHDm+zSdyIAII" +
            "SNeKi8/s2LGrzupvfSU+Pr4EEv0KMAOg37Ej8nYKtGwffOLEicasQ1kZ7WyG0xAwpUCvPn1GBgUH" +
            "2ZyNzmdMCWCgpCkADDSYpNJ2gZbtg3Nyc/x37dixRpzJbYJt5+NIkwsMHjI4QLaoE03OoPv0KQB0" +
            "P4Qk0F6BhOSEc7JFfqf46tX6D1at2VxVVcVzz9uLyXmmEhgwYMBQSZWeTk1NjTNV4gZLlgLAYANK" +
            "Og8m4FocGBQcvKDOYT+fsSEj+OyXZ3c9WAscjYD5BCIjI3tYrH5/U1V1mPmyN07GFADGGUsyaafA" +
            "G2+8UT83Kekvqqz+9PMTxx2bNm5cJ24VvN7O5jgNAVMIhHXtUiurKg/c0vFoUwDoePAI3b0CYufA" +
            "Q/6NneIrqqrOrUtfq5w6dWqz6IG1Ae5lpjWDCIR27iyLX90Nko4p06AAMOWwk/T9BN5c+Ga1KAR+" +
            "r8rSv57OznauXrl6R1FREZcF7gfGz00rEBoaGiIpUqhpAQyQOAWAAQaRFNwv4JoN6BQY+FZDfd3x" +
            "3Tt3R61bt25laWlptvt7okUE9ClgtVickiz56zN6onYJUADwPkDgPgJz5sz5RuwZsNT1CNRbN28W" +
            "bNu6NSBjY8ZaCoH7gPFjBBDQlQAFgK6Gi2B9IeB6/nnivHm/syrKj6sqq3K2bdnm/+GaNWmXCy/v" +
            "8UU89ImAFgScimIVtwI2aSEWYmifgF/7TuMsBMwnED9/vmufgN+KB6FssdvtL+3d++kjfn5+Gx55" +
            "5NFOI0aOeDYwMLCL+VTI2KwCTU1NAWIOudas+RshbwoAI4wiOXhVICkp6aLo8A9paWnpzU7ns2e+" +
            "PDP1zJkvG/v0fmjrmLFjekdFRY32akB0hoAPBG7W1NhFt+U+6Jou3SRAAeAmSJoxn8C3D0JJF5mn" +
            "L0tJGXf1atG04uKiQV3Cwj4YN25cdFy/uCfFa2HmkyFjMwg47HXhkqpeMUOuRs2RpwEadWTJyycC" +
            "aYsXD3bK8g8kWZ4hLg8UDxw06NaYMWOmBQUF9fZJQHSKgAcE7LW10kcffHhNVqzPiS21cz3QBU16" +
            "QYACwAvIdGE+AXF5INYpLg+I+6SnSrI6LTo6+pOnnnq6b/eY7pPMp0HGRhMoKCj4W+a+fbnlFRU/" +
            "fO+99xSj5WeWfCgAzDLS5OkzAdflAVWWp6mqPCskNPjg5ClTevfo0eMlnwVExwh0UODggQMnLubn" +
            "7xd3x/xHB5vidB8KUAD4EJ+uzSWw7K/LhiqW5hmyJL8aHBqSRSFgrvE3UrarV63KctTX/0lsmLXD" +
            "SHmZLRcKALONOPn6XODbdQI/aikEpkyd2is2NnaGzwMjAATaIHC1uLhs545deYqkvCzuiKlqwykc" +
            "olEBCgCNDgxhGV/AVQg0WyyzZFV6PSYmNmv6D6Z/PyAg4BHjZ06Gehb4eNu2T0tKSlzT/3/Scx7E" +
            "zlbAvAcQ8JmAa2MhMYX6a8kivyq2F/5m5fIVcTnnz3/os4DoGIFWBMrLy0tu3CiJcaoqU/+tWOnh" +
            "ZWYA9DBKxGgKgaWLl85SZXVBTEz0ZzNnzXpRJP2YKRInSd0IbNm8ZWt5WfmpuUlz/1s3QRPofQV4" +
            "FsB9aXgBAe8KJM5P3GJVnYklpWWxK95fkVVVVbXFuxHQGwL3FyguLj5cXl7WQ2z/u+n+R/GKngSs" +
            "egqWWBEwusDOPXvKn3nmmQNWizwoJyfn9aBOQVuiu0czE2D0gdd+fraMjRtPiQcAbROXrQ5qP1wi" +
            "bIsAlwDaosQxCPhAYMmSJT+yqNKvhj0y/NTT48cn+CAEukTgtoB4AuYysU7F2S2627/Nnj3bCYsx" +
            "BLgEYIxxJAsDCohvWltlSV1w/vz5YUcOH15mwBRJSQcCRw8fXVdaVtJTTP3/mQ9/HQzYA4TIJYAH" +
            "wOJQBLwtsHP37qIfvPBCYXl5xRy/AP/tMTExPGnQ24Ng4v7y8/P3nfz8ZA9FUt8VBel5E1MYMnVm" +
            "AAw5rCRlJIGEpKTDiiz9+sTx46+wMNBII6vtXGpqavLElr+Py5LyO7Hhz0ltR0t07RFgBqA9apyD" +
            "gJcFdu/enTf9hReki/mX5MefeDxQdB/j5RDozlwC59I/Sv/M2azsmjs/aZW5UjdPtswAmGesyVTn" +
            "AnaHI7WxqTF025YtO0UqNp2nQ/jaFShavXLlZmdTk39DU8MS7YZJZB0VoADoqCDnI+AlgUWLFtn9" +
            "VOUvpaXlE8+ePbvOS93SjbkEbKLATK9vaBipWuTfL1y40GGu9M2VLQWAucabbHUuILYP/lrsFvjn" +
            "E8eO/3NDQ8NRnadD+NoSEB/+2/63rLRspFVR3ps7d+5lbYVHNO4WoABwtyjtIeBhAdftgZIkL/l4" +
            "+8fZHu6K5s0jcPvDv7S0ZIykWP7dVWiaJ3XzZkoBYN6xJ3MdC1gUy4fVlZXjCwsL39dxGoSuDYEi" +
            "1zd/14e/rFjeTUxOPKONsIjC0wIUAJ4Wpn0EPCCQkJyQK24NXPnZ/oOu3TxZEOgBY5M0ee6D1avF" +
            "tH/JKD78TTLid6RJAXAHBn9FQE8CTqczvdHZ1PXY0aPpeoqbWDUjcM612r/O4XjKoiq/4Ju/ZsbF" +
            "a4HwLACvUdMRAu4XEM8LmCr+I1770zfecAQFBfV2fw+0aESBivKKrdu3b7/hutXPtdqfBX9GHOXW" +
            "c2IGoHUjjkBAswJiQeA+UQCsEBsFfarZIAlMUwIX8vK2bt68aXxTY1ORo7FhAR/+mhoerwbj59Xe" +
            "6AwBBNwuYFGUdeWl5RsqKiq+iIqK4lkBbhc2ToNZh7KW5+bmjBAPmfqZ2OFvm3EyI5P2CLAVcHvU" +
            "OAcBDQns3LOn/IXpL4RXlFVIw4YPe0xDoRGKdgRsGRkZS4qLivtKFvndufPm7ddOaETiKwEuAfhK" +
            "nn4RcKOAn6JsqaqsGFFaUnLIjc3SlAEEXA/1+XDNmozqispQsYmUa8r/cwOkRQpuEKAAcAMiTSDg" +
            "awGxccsFVVI37Nu3L8fXsdC/dgTy8vL2b1i3PrK2tu6i63q/WDNSoJ3oiMTXAqwB8PUI0D8CbhKw" +
            "qupWu92+8fr165/07Nnzh25qlmb0KWDLzMz8pPDipYdUWXpzXtK8HfpMg6g9KcAMgCd1aRsBLwq4" +
            "ZgHEHQHrD2RmXvNit3SlMQGbzZa3Nn3t9ksXLzVJVov40s+Hv8aGSDPhUABoZigIBIGOC1iczk12" +
            "u2NUwcWLKzreGi3oTSD3/Pnt69LXRt6y3cypc9QlJyYmntdbDsTrPQE2AvKeNT0h4BWBpSkpiX4B" +
            "AU+8+dZbL4sOw7zSKZ34WsC245NPVl+/eu1xsUX0H/nW7+vh0Ef/zADoY5yIEoE2CzQpytqmpqYu" +
            "2dnZ+9p8EgfqVqCysnL/8rTla69du9aZKX/dDqNPAqcA8Ak7nSLgOYHk5ORbqtgd8ItTp55xOBxX" +
            "PdcTLftYwCY29vn9po2bBjqdTQVWPz+m/H08IHrrnksAehsx4kWgjQKpKSm/6dO374Dp06e7LgXw" +
            "y0AC1dXVmVs3b81pbmrsJab8U8WUP/s/GGh8vZUKMwDekqYfBLwsIG4LXF98pXioa4tgL3dNd54T" +
            "KPrs4ME/bly/YXBjc2OJf2OneD78PYdt9JaZATD6CJOfqQVSU1J/GRYe1u+1116bY2oIAyR/5cqV" +
            "9Qf2ZtaKR0B3EZd40vjgN8Cg+jgFNgLy8QDQPQKeFBBbv26y1djWXr58eUNcXNyrnuyLtj0jUFdX" +
            "d1ys8P9STPuPEx/8qwIDAz+aM2fON57pjVbNJMAMgJlGm1xNKXDHbYGTBcBDpkTQZ9K2Y0ePpn91" +
            "7qvZkiQvF8VcuvjWn6fPVIhaiwLMAGhxVIgJATcKBAQFpTfU108Q1443TZw06R03Nk1THhJwzdgc" +
            "PHDALm7njLZI6usJSfMyPdQVzZpYgBkAEw8+qZtHYOnixRNV2bJm1isvF0RHRz9rnsz1lWlpaWn2" +
            "vk8/PeXazVGWlDWuPR1ct3XqKwui1YsABYBeRoo4EeiggLgt8G0/v4ABb8W/NV00xaWADnq68/Sy" +
            "0rLsw1mH8yqrKh4T/1Ne79rSOT45udCdfdAWAncLUADcLcK/ETCowOrVqwMddXX/ExnRzTH71dkL" +
            "DJqmrtISu/jdOHHs2Onr1673dT3O2fVER9dDnXSVBMHqVoACQLdDR+AIPLjA4sWLH7ZaLH8c0H9g" +
            "7eSpk//lwVvgDHcI8MHvDkXa6KgABUBHBTkfAZ0JpC1e/IgiW373xOjRXUePGf2kzsLXdbh88Ot6" +
            "+AwXPAWA4YaUhBBoXWDpX5eOVC3Kb0aNHt2FIqB1r44ewQd/RwU53xMCFACeUKVNBHQg8P9FgPrb" +
            "cU+OfXjEyJEDdRCy7kIU2zDnf378+EWu8etu6EwRMAWAKYaZJBG4t0BLETBq9KjOzATc26g9P3Xd" +
            "znck60heVWXFCBb3tUeQc7whQAHgDWX6QEDDAlwOcNvg2C4XXj5+9MjhYnEf/1hJUjJY1e82Wxry" +
            "gAAFgAdQaRIBvQm4igDJovzXkGFD7RMmTnxFb/H7Ml6Hw3H19Benj+RdyLU0Nzf3kVR1uyJJHycl" +
            "JV30ZVz0jUBrAhQArQnxOgImEXDdHeC0WN6L6R5bPnPWzJ+ItMNMknq70iwqKtr1xcmTVRUVldMk" +
            "WdojyXKm1Wo9EB8fX9KuBjkJAS8LUAB4GZzuENCywLf7BPzcz+qvvDTzpUFsG/yPo2Wz2fK+zM4+" +
            "UVBQENrc7HxIlqVdTlXdJ77tn/zHI/kXAtoXoADQ/hgRIQJeFbi9Y6DdniCeQPf2kCGDXQ8QeksE" +
            "YNrZAPGhfz0/Pz8n5+uva+rrG8aIb/sHxf84D0kWy2eJiYnXvTo4dIaAGwUoANyISVMIGEng9gOE" +
            "LJYEf3//2okTJqj9Bw50rQ0wRSHQ8qF/Ie+C3W6vHSmpcpZ4HO8Rq9N6IiE5IddI40wu5hWgADDv" +
            "2JM5Aq0KrFy5snNDXcPrkqz+NCQk+Kunnh7fK65fnGv3QMMVAtXV1RfEr/yCSwUKH/qtvjU4wAAC" +
            "FAAGGERSQMDTAqmpqXGyqs5UVXmmn5/l+tDhwwOHDx/+RFhYWE9P9+2p9uvs9lvXrl7NFdfzr4un" +
            "8QXUNzYOllTlqCrLx/im7yl12tWSAAWAlkaDWBDQuMCSJUtiZEWeJFnUSZIqTYqICC8UlwYCBwwY" +
            "8FiXLl06azn82trab25cu5ZzpaiosuRGqbXOYR8hq9IZVZLPypJyTvbzO5OQkHBJyzkQGwLuFKAA" +
            "cKcmbSFgIoFlf1021Gl1jpNV+WlxiWBCRHh4Qd+4OLV///69IyMjB/uSQtybL5WXlZ8tLSutKCsp" +
            "a6iprgqsq3cMER/458TOfOfEt/yv/RTlfHj37rmzZ892+jJW+kbAVwIUAL6Sp18EDCTw92JA/b64" +
            "H/5Jq9WvICIiorlbt8jA6OjuvbuGdxX/jIgJDAx0W9b19fWSWKwn1VRX59jtdU3i7xXiOn6d/Ztv" +
            "QuocjkfFav080VmBWMBXKIqUi07ZeUHc1niBD3y3DQEN6VyAAkDnA0j4CGhNwLVeQHJKw2WLOkCs" +
            "GeglZgdiRYy9xSWDAcFBQecCg4OrQjuHWkNDQ0OsFotTlmU1IKBTpL+/X7e7c6lvaCh2Njc7VNGQ" +
            "U1Gst27erKxz1Ac0NjbEiCn9YeL4AvH7hviQrxZ/1ojfpWK1/hXRZoFYvl+4aNEiu/gZvxBA4B4C" +
            "FAD3QOFHCCDgXoG0tLR8cl6AAAABqUlEQVQwtUHtKy4Z9BPfxvuKz/woSZFCxbd0f/Hb0mpvqjha" +
            "lZrEkbWiFqhwfciLhXqFDqejaMGCBTdbPZ8DEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEE" +
            "EEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBA" +
            "AAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAAB" +
            "BBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQ" +
            "QAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAA" +
            "AQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEE" +
            "EEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAETC/wfRBTBQI3eAG0A" +
            "AAAASUVORK5CYII=";
    }
    return Swipe_Up;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var Swipe_Right = (function () {
    function Swipe_Right() {
        this.swipe_right = "data:image/png;base64," +
            "iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAAAXNSR0IArs4c6QAAAAlwSFlzAAAL" +
            "EwAACxMBAJqcGAAABCZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6" +
            "eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYg" +
            "eG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4K" +
            "ICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6dGlm" +
            "Zj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmV4aWY9" +
            "Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIgogICAgICAgICAgICB4bWxuczpkYz0iaHR0" +
            "cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgICAgICAgICAgIHhtbG5zOnhtcD0iaHR0" +
            "cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyI+CiAgICAgICAgIDx0aWZmOlJlc29sdXRpb25Vbml0" +
            "PjE8L3RpZmY6UmVzb2x1dGlvblVuaXQ+CiAgICAgICAgIDx0aWZmOkNvbXByZXNzaW9uPjU8L3Rp" +
            "ZmY6Q29tcHJlc3Npb24+CiAgICAgICAgIDx0aWZmOlhSZXNvbHV0aW9uPjcyPC90aWZmOlhSZXNv" +
            "bHV0aW9uPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgog" +
            "ICAgICAgICA8dGlmZjpZUmVzb2x1dGlvbj43MjwvdGlmZjpZUmVzb2x1dGlvbj4KICAgICAgICAg" +
            "PGV4aWY6UGl4ZWxYRGltZW5zaW9uPjUxMjwvZXhpZjpQaXhlbFhEaW1lbnNpb24+CiAgICAgICAg" +
            "IDxleGlmOkNvbG9yU3BhY2U+MTwvZXhpZjpDb2xvclNwYWNlPgogICAgICAgICA8ZXhpZjpQaXhl" +
            "bFlEaW1lbnNpb24+NTEyPC9leGlmOlBpeGVsWURpbWVuc2lvbj4KICAgICAgICAgPGRjOnN1Ympl" +
            "Y3Q+CiAgICAgICAgICAgIDxyZGY6U2VxLz4KICAgICAgICAgPC9kYzpzdWJqZWN0PgogICAgICAg" +
            "ICA8eG1wOk1vZGlmeURhdGU+MjAxNTowNToxNiAwMzowNTo1NTwveG1wOk1vZGlmeURhdGU+CiAg" +
            "ICAgICAgIDx4bXA6Q3JlYXRvclRvb2w+UGl4ZWxtYXRvciAzLjIuMTwveG1wOkNyZWF0b3JUb29s" +
            "PgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4K3LeY" +
            "oQAAQABJREFUeAHsnQl8FkWa/6tzh4AhXHIn3PclCCLjEFBxwPEWnOQNEmd31J1DnZ1j1905cHRW" +
            "nf/MiqO74zjjApKEMQiCCCoKJCAiN+FGORKucEOAEJK8Sf9/9SbBF8zxHt3v29X96w/N+77dXVXP" +
            "8603bz1V9dRTQvAgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIg" +
            "ARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIg" +
            "ARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIg" +
            "ARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIg" +
            "ARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIg" +
            "ARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIg" +
            "ARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIg" +
            "ARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIg" +
            "ARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIg" +
            "ARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIw" +
            "gIBmQB7MggRIgARsSWBebu7yyvKKDrrQTmqanp+ekfFbWypKpRxJIMKRWlNpEiABEmiCQPac7CXR" +
            "0dG3dOvRvUdsXGy5roufZmdlZTeRjLdJgARIgARIgARUJZCbmxuTMyf7iq7rW3HK4zzOzOw5WZuy" +
            "s7I/UlUvyk0C3gQ4AuBNg+9JgARIAAQqyyv/pguxDG+H1AJJxOvM9AzXHE3X3TlzsqRhwN/PWjh8" +
            "UZMAv8Bq1hulJgESMJOApg/omtL1zXqKeCUtw3UaPgGrc7KyL2Ca4KV6nuElElCCAA0AJaqJQpIA" +
            "CYSSgCa0ngMGDMAgQL3HtPSM9NsGDx3STwj9URgBs+t9ihdJwOIEaABYvIIoHgmQQGgJYP4/HsP7" +
            "0UlJSb0aKXnIwIEDV2NKYJIm9CE5WVkLGnmWt0jAkgRoAFiyWigUCZBAGAm0QtlncaY0IUMy7udh" +
            "SuAZXdfawmlQ+gzwIAFlCNAAUKaqKCgJkEAoCFRUVMAA0KQBMNSH8qRz4EpMCbyla3o5nQN9IMZH" +
            "LEOABoBlqoKCkAAJWIEAfhS/j2H9Y5AlxQ95Zqa7XGfoHOgHMT4adgI0AMJeBRSABEjAYgSS0ZDv" +
            "g0xyiN+fQzoHDqJzoD/I+Gw4CdAACCd9lk0CJGA5AnD979lvQL/8AAUbC+fAxXAOvJXOgQESZLKQ" +
            "EaABEDLULIgESEAJArpITklJuRyErDJ40FY4B2bSOTAIikxqOgEaAKYjZgEkQAKqEFi8eHEzyBqJ" +
            "JYAjg5RZOgduoXNgkBSZ3FQCNABMxcvMSYAEVCJQVlaWBHnP4WxpkNzSOXA/nQMNoslsDCVAA8BQ" +
            "nMyMBEhAZQJ+LgH0VdWnMRLQgs6BvuLic6EiQAMgVKRZDgmQgOUJ4AcxkCWAvug1rdY5sD8eHood" +
            "Bef7kojPkICZBGgAmEmXeZMACahGINAlgL7oKZ0DCzEaMA07CnbCHgLv+5KIz5CAWQRoAJhFlvmS" +
            "AAkoRyDIJYC+6CudA2X44DeEpidiJOATXxLxGRIwgwANADOoMk8SIAE1CQS/BNAXvaURIJ0D3xO6" +
            "KGP4YF+Q8RkzCNAAMIMq8yQBElCOgIFLAH3V/RVMB5zlCgFfcfE5ownQADCaKPMjARJQkoAJSwB9" +
            "4SDDB9/GFQK+oOIzRhOgAWA0UeZHAiSgJAG3291aE+IMhPdlF0AjdRyCFQKrET54EsMHG4mVeTVF" +
            "gAZAU4R4nwRIwBEE9Cr9SQzHH4KyKWFQWG48JJ0Dn2H44DDQd2iRNAAcWvFUmwRI4DoCmj5MaKIA" +
            "V/3dBfC6jAL+KJ0DV2JK4C1d08vpHBgwRyb0kQBGvHiQAAmQgLMJYE3+S1iW90/wzL8TJLZYgMbs" +
            "nKyci0Lojwmhve6a6vp3C8hEEWxGgAaAzSqU6pCA3QgsXbo09sqpU83d8fHRVVVVhoxaRkZGasgr" +
            "WnO7E6s17VdY//+Q0LUX0PteAX4rLcJw0Y4dO36ybWvBOhgBn8AImGYRuSiGTQjQALBJRVINErAS" +
            "AX8abdkYIwa/hiMmsrq6BRrkTOiSjLnwHugBp+B9DIbmL2HNfCV+sKrxOegDDT7+iUrkW4I896Vn" +
            "ZEyWmeq6Ph0vv5XvLXLIKYn752ZlL4SsByDngxaRi2LYgAANABtUIlUgAbMJXN+gG9loexpjTdPR" +
            "JFdgGB7D3qIYvfH93VK6Lek7oG8Etua93IB+csc+oz32U5Hn2AbKC9flEhSciimB1/CDXZY+1TUh" +
            "XIKwXHsRoAFgr/qkNiTgFwHvhh298Chfe+F+NNqygZYNdd2Rgjfy9D5S8CHZ+wLf10vgsZzs7Idg" +
            "KnXBaoGbUFeGjIbUWxIvOoIADQBHVDOVdCqBmTNnxiUkJLTAfHdC7Xx3JljUO7wuNM19fS986E1D" +
            "t3To0OE4euExSFfX25YNet17vLVcj1nKFK4jHwXn4dxaWVl56N3c3AdhLHXFD21zvF7C66HJjzyy" +
            "IioqqiuekQzvx+mP8fMcRgJa0zkQ1HgETYAGQNAImQEJhJeADGEro9jJvezhIfd9SPN1A6+JaDTq" +
            "cli9VM534/X64XXvhj0V9+WRgtOfRkmmcfIh5+ln4FyYk53zM+z0N1jXRD9w745r+8D9GHrtl3Gt" +
            "Ga51xLWeuHYAr7sw1bENjof/h/fP4MzEKZcCNnXMhnPgr+kc2BQm3m+KAA2ApgjxPglYhEBubm4i" +
            "otV1QMCaxzFlnuLlJBcJEc/BU/wsIskdQzCbff0H9l+VnJxcip57b9xriXOo16svjQwe59EEAdnw" +
            "PzNv3rxt7vKK+ejhD8dn6VR4CA38CdTPKXw+De/9/6zLB8sNf4/3bVB/bWEM3Ij32H5YJKDuPo+O" +
            "jb538uTJU3FNGhNN1ZEsW/oF5KOsfa4M10P4zIME/CJAA8AvXHyYBEJDICsrqzN680+hMZee8L3Q" +
            "QHSDi7obf7DF6EkehhRfdUvu/kGtk9xIfK5r5FPwnr13QDDxkCMp0zEHPwMN+mbUjxzi3456OYYe" +
            "PYb5sZZAaPCn0KPwKp0bq3Af19BUayIS9zFIoKEudTfua3htgfyS8XYknvoY8/sZMn+cT+Ns7JBy" +
            "pGKFwBvI5yQMjXsbe5j3SOB6AjQArifCzyQQYgLXNvaiDxqBXmgMTqDN2Ic/0N0p3bu/P2jQoKTm" +
            "zZv3hWh1PfmxIRaTxdUQkD3v+9Hz/hXqZyoa9C/kigVcu4IzAZ/Rq9elAZaMhv8K6rEE9VmOeqyG" +
            "ARCBz7H4LHv3sTgLcf0g0hzD+1IYBS1gDAyEndAddsPf01yuZbi+EGdjowHSCMiEc+BPka4CIwEy" +
            "kBEPEvCJAA0AnzDxIRIwhkBTjf2w4cM39OzZszWcxLqgRNnYs6E3Br0RucxGJs+g8Z+JH86J6Md/" +
            "jv79cTm3j9cUvA5Go78RXfoNo8eMeT4lJeUWPC/rUB6pOAtrz/Nnz5794qOlHz2Gxn8MDIL2eF0L" +
            "Q2IPXmFIeAyIifj8KfwDnkUaaQQMwdnY8VPINR4GRFeuEGgME+95E6AB4E2D70nAQAKYs4+pLK/8" +
            "FX7U0XPX+2q61huNxEm89/Ts+w8cuHzAgAHd0NgPQrGyoWjqR95A6ZiVnwRmY7A+M2dO9jLU5zg0" +
            "2ntQl+XIo0NtPnkIIyzn+u/HmYnTl7oswnMzsFKgU0Wl+2F8L47jBzkPwX6ezcnK+gPmDO5GWUXI" +
            "Nx3P5fmQJ8MHAxIP3wnQAPCdFZ8kgUYJeBr8ispfozfYDxO/AzHhi16hXoA/soLWbdvOSk1N7RgT" +
            "E4MhXk9vkD37Rmla6mZt45/1AYbxUyGZXH8vh/t3opeej176fHyejjPQOpWGgBzGfwEjCPGuqRnS" +
            "mdBzZM/J2oTv0Zm0jPQpuLAVZ3LNnQb/L8AKgXu4QqBBPrzhRYAGgBcMviUBfwg02ODrYkuP3r1y" +
            "R44cWbfWOxX5+tIj9Kd4PhsaAnLOXzravVTb+N+AefxCNNRr0PAvwb3pOANt+JH0muPVuVk5g1DO" +
            "DXDou7nuDhwNN8DYOJPuSpcbAuXhTKy718CrlDkTMs9COoYPbgASL0uvVB4kQAI+EfCxwU9FZvJs" +
            "qqeGR3hYnIB0sBuKof9CbM37Ad4nwNt+Nxr+P+D9LJxGNfzI6uoxGyMB0nCMd2VkjK67KrcGxvu9" +
            "mN//EK8z66438ipll86Kz+NHnuGDGwHl5Fs0AJxc+9S9UQIbN26M3rt776/xR9L/miH9a3v4qchE" +
            "nmzwAcFmx0/R+M/Izsp+FT3+FuiVfx8L/OQc/yycTfXCg0EBIyCnNzIo9fbqx3TAMYw+vIWRgNtw" +
            "z1fjg+GDg6kJm6elAWDzCqZ6/hHIzs5Oxgzv7+GQNQwpZcS2rZjT9x7ST8V1ebLBBwQbH0Vo/FO8" +
            "9UPj/ww+v+J9zcT3j9UsNRRfwPCQcQFEdlbW6/guPoRRADkycNCPsukc6AcsJz1KA8BJtU1dv0FA" +
            "boaDNVm/xhrswVh7DecrrULO77Zp1+a1CRMmSA/vVJyy18cGHxAcdDwGA2BWnb5o/OX7aXWfQ/R6" +
            "U05WtlxW+DJWBvyHLBOjEZ9jqd9uxAiQ0R/9kWcRnAN/QufAENWcIsVEKSInxSQBQwhcP6x/7sxZ" +
            "RGDzeFdv/PbYsbM7d+4sh1dTcX5hSIHMREUCsvc/q07wMDX+sviZ6KH9TRfiu3jvMQDQ+K/DZzki" +
            "IJ0E/TEA7hs4cGAKzlvhHLgQywwXwKh4EHnwcDABjgA4uPKdonpDw/pDhgz+sP+gQd3AIRXnfU7h" +
            "QT0bJ1BaWvpzRF38k3wqjI1/nZBy97970fB/lT414xF5EQ6B22G0LsUowF34OKTuQR9fpXOg3EPg" +
            "Nfz40znQR2h2fYwGgF1r1sF6SW99d0XFbxoY1u8HNKm1Z7KDMVH1eghg22RRXFzcq0uXLvss0PhL" +
            "CUsgz+iVy1dswFTADPTafwUDIAdBiHogQNBc3A/UJ4HOgfXUv9MucQrAaTVuU329e/nu8soe+IHc" +
            "AlXrhvVlpD05j89hfZvWv1FqYVvlQxZq/KVaiR06dPg3BANah+EI+T2Wi7cL8f/3cMoRgUANgJkw" +
            "IOToQiFWHJRgSuB1GYEQ+fFwEAGOADiosu2kqg+9fNngp+JMtJPe1MVcAkePHv1Hp06dylGKP/Pr" +
            "5gqF3PPy8oYdO3LsXawI6CkLq50GWIRpAOkPEMxI1mw4B/56+9Ztm+AEuxBGwOMyfx7OIEADwBn1" +
            "bAstc9/O7VqpVf6XXKKHHhF6+foWhGLdOHrU6Pe79eo2BkrKRn+ILZSlEiEncObMGXH58uUCjABY" +
            "8Tv0AAIELcAP9vNopH+LJYGLMRRQhpgA7QBqbJCwCpAefgHZ8C3QFiD2wNNB5sfkihDgFIAiFeVU" +
            "MefOnZuiu6te1jVtdKWoqEaD/1mbdm2/X7tETzb4U3H+2Kl8qLcxBM6dOydOnjwpevXqZcXGXyo5" +
            "FOcZnDHyAxr/01iuKkcDluMM1gCQOhfeMeHOuz9d9slSvKcBAAhOOGgAOKGWFdMRPf1ubq3iJdno" +
            "V7ur3OiV5A8aPOiRQYMGjYIqqTg5l69YnVpZXGzNK44fPy569+4tsDOjlUWtgGNr7aitXoo3LQwU" +
            "NrFdu3ZL4uLjjsqAQwhDTKPaQLhWzcrS33arQqNcxhK4Zj5f6CMqtYoy9HBWjRw18gc9e/aciNJS" +
            "cX5ubKnMjQSwDq6sTJw4cUKFxh++f1qcLkSFrDc0/pV4qR0NMKwmE9u2bdvs8OHD2wzLkRlZmgAN" +
            "AEtXj32F857P9/baH3/H7e+1b99eDmk+gDPTvgSoWbgJYL5f7N27V/Tu1cvqPX+B5YmyUZa7BP5G" +
            "csNIAEbGsNbF2ANLDo8fQqYnjc2WuVmVAA0Aq9aMDeVqZD5frs3nfL4N69yqKpWXl4sd23eI/gP6" +
            "i4Tmza0q5lW5tmzZchYbUh28esHzRqu69nNQnwr27NnzT+7KyqWuqRlPBZUTEytDgAaAMlWlpqDe" +
            "jX7dfH5yxw4Tx4wbJ0OZykaf8/lqVq2yUrvdbrFr1y7RtWsXgYh/KuhR9NXevf8EQXddFVYTMZqu" +
            "X8LnllevBf6mACGyH/xyz97dmFz4Y+DZMKVqBGgAqFZjCshbX6Pv5cSXCRV2KKAGRbQhAdn4byso" +
            "EEktk0T7DnKvJyWOPF0XY+D+N+9rafUkTAAcx2e5OiCYA1sPZ1+Cf8FmNP4v100xBJMh06pDgAaA" +
            "OnVlaUl9aPTpxGfpGnSGcHt27xaxsbGiW4/uyih86tSplRB2Itb/ezYEkoJjW+AUeAKuxdsn5OcA" +
            "DxkJ8CbM+Q9Ny0hPwgZI8DHk4SQCNACcVNsG68pG32CgzM5UAnLY/8KFC+LmkSNNLcfgzEs+Xbbs" +
            "22jyN16Tr6YNxrp9aRD88prrvn+QewE8hiW2FTAshmKjId9T8knbEKABYJuqDI0iWVlZnSN08acG" +
            "1uhnQgqn9vTzfayBPB+fu/6x1OsvXPc5BZ+Tr7vGj7UEdu7cKYqPHhNjx6WK6OholbjMgsf/d9E5" +
            "z60TOntO9p+wDOAwluyNqLvmx6tnN0BsCfwGjIqTGPK/14+0fNRmBGgA2KxCzVIHm4W8ifHBVPxo" +
            "yLXIK2sd+e5EeZk4VW30vRvt89BjK07vI6/uAyLFNSsqKkrYtWPXtzH+2gPXOyAqYQsMw8bINVkY" +
            "Ru1Z92wTr74+10Q2X99GfejoycFJXOyHbBdxpxiy7e8/sP+q5OTk0qSkpMu1T6d+ncozd1znQDbW" +
            "67rt3h5Dw3/0yBExatQo1Rp/cfDgwSXYCvhh7+F/1LEMiPUpzkw/K0uG/M3EsP9sfF/2IeTvQ36m" +
            "5+M2I4DfLR4kUD8BOcRfXVX1v3AQuhONzPL2Hdr/x/jx4wfj6ftx3ld/qrBdlT2buga8EO/lKY9C" +
            "ecoGfM/OPdUHCw/e3UAD/o2/BegcgQY+Gg2rdBVHABatEO3sfrwvitD1WVURERexZWxFTEyMjnXa" +
            "eDw8R2RkpFZRUYEpXC0msrq6RbWmZUKSZNglMFT0FLyPgR6XoEcllKyGoHUGQ4W3wdAtpduSvgP6" +
            "RtQaDKlIJ4+hOKWhkIIzGadSBzb3EZs3bRKDhwwRMIaUkh3C5qOnfgl1VwYDYLIU/u23306IjIg8" +
            "jj0A7sHHlfKaj0cBNv25Z9vWgnX4Hn+Cnv80H9PxMRsT4AiAjSs3ENUQla+Vu7zidXgY34ple9Xy" +
            "x2JK2iOPoJGRQ4WbAskzyDTeDXtebV6yQT+JfdLbb928dZhXg94ZP5ayR94DDZ30aGqoAd+LBvzZ" +
            "qgitpgGPrb8Bj4qMrI4qK6uMa9v20qRJk+QOcaocP/UWdOnSpbFXTp1q7o6Pj4ahEgG9agyGCGkw" +
            "6DUGg6Ynwzh6+WDhgRSk9RgMAFgOS+FKrZGwC6MKi72MhHZ4Tj5bZyCMxXtLHXJzn40bNsj4/io2" +
            "/pLlDHyH38W2vTEwADxso7SID2C/zceHTM8F3/6bjV4/RoZ0uczvdTT+/+5bMj5ldwL4neRBAkJg" +
            "XvE1/NCPRd+wI3r8ecNHjngLsdEfAZv7cSaayCi/Nu+82tetaNwr6uutYyg0DoZJrK89chgtqjbg" +
            "JuJuOus6g6E8Jia2uro6roFRhUjkdA4NylnUyzEYCvvatk76x4hbbknECEKdcZCKZ+TowRCcIT0u" +
            "lJSIVfmrRNt27cSoW+SIuXJH0dzs7NX4rifDQQ9OgPgbzcp+FUZZGjz2p+DjSh81qvX017umZbhu" +
            "wigRjHoeJFBDgAaAw78J2PjjH4goOh4TyIfjm8VveODBB/cAyTM4kw1CI+cdz+PcKl/RuK+vp+fe" +
            "wpfGPSIi4kpsRUW5gj1yg1BaJ5vFixc3Qxz9JEw9tIoQ4vuQzHvK4RvGQb8B/fLRE49C4J2+eDYV" +
            "ZwpOo75jyOrrowSNf35ensDUjBh/++2e16/vKvNuHLbnfRcG1nz02J9A4/88Av/8M7xN/o7h/9ug" +
            "xVgfNKnx9BdaBeb7pb8ODxK4hgANgGtwOOcDflA+Qm8iVRdiw10T7/pb69atH4T2gc7r1zXyechD" +
            "NvJf1vXg0bD3RO+wI4YfW+FeEk6EL/3mXDobd5CxyVGvceBxktS6YXrGjR+dYozkHMaUwpc3jbhp" +
            "EzZ8ao1d+LpA/aE4fWnYGiRVWVEpPlm2TJReLhUTJ04SzVtI9w3ljnz0/r+ED8d4SI4hf/zFIA4A" +
            "/lY3p2ek78XH38prjRwluJcqPf3xt0dP/0ZAOf0WDQCHfQPQ8Oei0idoERFFnTp1dN/27W/DUcyn" +
            "IX75oyJ78Vd78r428hhz/D/0xs7Gx8efu+eee+o80h1GnupKAvAxSUQ0vg56lf44PnZDy9YLRkEv" +
            "oWknYCTuw3dzd/+BA5f3798/Ccv1BuEZn40C2fivWLFcnDx5Utx9992iVevWskgVj25Yo78Mzf5p" +
            "MMHGPNpNeN0MX4DpUGZLEwpJY7zW01/Q078JWE6/TQPAQd+AnDlZi9CLuBdztKc7dOzQZuiwYfVp" +
            "X4SLhTjzEDTl5OHCwxXbtm8diZ5ENwxBtsf1JOSRhFc3fpgK67zi2ciDCI+ACXjiSwjxFL5n0iDt" +
            "U2cUYJTqK3zfdg29aegnMArkKFIqTmkUXONXIBv/5Z9+isb/hBh9662iV+/eeETJ4zk0/m0w9/8k" +
            "fHH2Y2ouBT/SCzF//yK0ycOZ2IhW9PRvBA5vfZMADYBvMrHlFSxXu3/x+4vnVpSXx7Vs2VLExMaW" +
            "RkdHnauoqDyIafWLZZevVF28KJeQY327Jm5Ej0P+CJXjfSEa+gN4X6RFam/BiegcnOvOTZkypcyW" +
            "oKiUZQhIowD+KU9DoJ74oeqvazqmCbSt+C6ux1D4dFyXhkCqPD9bvXrEvq/2JWDPCTF8RCDxcZBL" +
            "+I98/H2lwlD/EEbPLRgVkZ77S5JTUnKSu3RZ0rlr1xaNiFjn6f8YGNHTvxFQvPU1AS4D/JqF3d8N" +
            "rapyb3dXuTudOHGiGX5covCj2gI/pn3Ry8DwvnYcqwAOYV52Fz6/XllZefqxxx67Ynco1M+6BDIy" +
            "Mo5Aul/USThz5sy4mKiY5+FXMgoOcsUwTue5MjIelfd79OjRZc1nn628sX17OYKg4oG/QZFZK/g5" +
            "/H2ukIF63vzLm9+Ni41d2qFTp8acGeo8/RHT33UDPf1VrH7KTAIkQAIk4BOBnDnZf8uek3U1NgNG" +
            "uGbhVPm431vx4cOHRy94d8GfPlv92aXiY8WN6ZWJlTz58O35xDs935MACZAACZCAbQnAAHCjZURM" +
            "Jz2zsRZSgXszvCtpwYIFQz5csrRg9arV+raCbQ2Jfx43hmK64AvE8HjfOz3fk4CvBCJ8fZDPkQAJ" +
            "kIBVCKDXm40pLIS1FTI09TUNqFVk9FEOOe//jHwWDXoKljD+JT42bmtcfNxg+OiIbt271ZdNAS6m" +
            "ypj+iAtwlBv61IeI13whgL8hHiRAAiSgDgE0lNrc7JyK7957T/sWLVrI8NTJ6kh/jaRy3j8FZ+rO" +
            "HTumHjt27MHy8nIRHxcv4uLjBfbekL4N1yTAB3r6X0+EnwMmQCfAgNExIQmQQDgIwAFwIxwA/4rG" +
            "/y2Ur2Tjf+L4cVFQUHAEkRSPlpw/3ywiMrK24Y8TUej5y95/ly4yNtI1R42nvyZ2wWn3fxjT/xo2" +
            "/BAAARoAAUBjEhIggfAQwLbU87BS5XyaKx1BcsSPwiNFcKVeuXJFvLdggUDjPyAOvX0EyMKy3Kia" +
            "hj8qWkTh7NK16/UhjGV8gOEYsh2a5nIl0tM/uDpg6hoC9AHgN4EESEAJAmj8/6DrYiQ2w3keAv9W" +
            "CaHrEXLx+++Ly5fL0MuPFtExOPEaEx1z9bMMX9wOmxh5HY8hrO949PrjsDHQUDb+XmT4NigCHAEI" +
            "Ch8TkwAJhIoAGv8fjhh5cx+UtzNUZRpdzhdr14qDBw4I2fOXPf3oqJqev2fY39P7rxn6R7AtWbT0" +
            "Efg6pn+GS27JzYMEDCPAEQDDUDIjEiABswjA63+jponZ2KI6G2U0Fg7XLBGCzvd48XGxYvmKmh5/" +
            "bc8/uq7nXzsaIPcvaNVKRjwW9PQPmjgzaIoARwCaIsT7JEACYSVQO+9fgqH/UxBkbFiFCbBwbJ0s" +
            "ct/5Bxp/9Phr5/k976XDX+1n7IgokjH3j+NaT/8M17QAi2UyEmiUAA2ARvHwJgmQQDgJoPF/GRsE" +
            "jULsfzn8vSWcsgRTtnT6Ky29DIe/uKvz/ld7/xgNiMHZuXNnEd+sWV1M/92M6R8Mcab1hQANAF8o" +
            "8RkSIIEwEdCe6NO3jwz2sypMAgRd7JrP1oj9+/Z5lvk1NO8fGxsnsI/B7xDcZxj2OmBM/6CpMwNf" +
            "CNAHwBdKfIYESCDkBBDiNg/x8eYjLv7vULiS6/0R3Ecs++ijmmF/OfxfOwVQM+xfu/QP8/+xcbFP" +
            "vztvXiriG8TT0z/kXzXHFkgDwLFVT8VJwLoEMPT/Z+xO2Qpr3ldDSiXnwOW8//x5714z5B9z3dK/" +
            "mJiY0pYtksbs3LY9HfENSrAD4J3WrRVKZjcCNADsVqPUhwQUJ4BQvxFoDB+fcNddD0MVZeP8L170" +
            "vjh9+jR6/zWR/eSr9xRAZFTkgcSWLe/atmPbXxjTX/EvraLi0wBQtOIoNgnYlQBC/W7QhfhbmzZt" +
            "cqGjkkv+NqzfILZtK0CAHxnopybIj3T0qwn8EyOaxTc7EBsXd8euHTvnQcet6Pk/ZNf6pF7WJUAn" +
            "QOvWDSUjAccRkEv+0PifS3elV0H5ISoCOHLkiPhg8eKr8/7eS//kKAD2MFhy7MjRQ5HRUdvp6a9i" +
            "DdtHZhoA9qlLakICShNA4+8J9Zue4XoairynojJlly+Ld+b+Q1RVua96/V+dAoADYHxc3N9OnDjZ" +
            "Hs6At6ZluG5gWF8Va9k+MnMKwD51SU1IQFkCct5fhvodf8ftE6HELFUVWYD1/qdPnboa198T7792" +
            "CqBN27b/fuHixT709Fe1du0nNw0A+9UpNSIB5Qhgs5vNGA6f2b59+xwIr+S8v4zzv2XzZo/Tn3e0" +
            "v9jY2LKE+PgJp06eug+6XaCnv3JfT9sKTAPAtlVLxUhADQI5c7I+hKRHEO1P3Xn/w4fFooWLahz+" +
            "aiP7yd4/jqMd29846Up5BXYw1E+6MjLuUaNWKKUTCNAHwAm1TB1JwKIEMO8/R9e1Nmj8/wcizrSo" +
            "mI2KJef9s+bMEW535TXz/tjW93DX5OSbTxSfWKYJ7Sv0/OWyRh4kYBkCHAGwTFVQEBJwFgFE+nsJ" +
            "8/63o/H/ATRXdr2/9Pg/eeLk1Xl/ufQvMTExv32HDuNOFB/fAt22pk9l4++sb7ca2tIAUKOeKCUJ" +
            "2I+AJn40eOiQUVBsFk4l5/23btkiVq1aVRPsp3ZXv8SkpCVxcc22nztzFlv6am+7pnI3P/t9ee2h" +
            "EacA7FGP1IIElCKQnZW1EZvevD1w4EDMjau53l9G+Xt71uya7Xxr4/x365byXHW1uAm63cZlfkp9" +
            "JR0pLEcAHFntVJoEwkdABvvREPcecf43QAol4/xLev/7+uvCjfX+0tmvWbNm5R3ad/p+ta6P4zK/" +
            "8H23WLJ/BDgC4B8vPk0CJBAEga+D/aTLJXFyflzJIyc7WxwvPi7i4+NleN+Lffv0ebiy0v07ODSe" +
            "xJD/vUoqRaEdR4AGgOOqnAqTQPgIyGA/I0be3AcSrAmfFMGVvGnjRpG3cqXH479V69YnIqurbq2o" +
            "rHpPaNo+xvQPji1Th5YADYDQ8mZpJOBYAjXz/mJ279695ZK/ZBVBnEKUv5lv/Z9n3v+GGxK3dOvR" +
            "/RFRrX8GXT5B46/sdIaKdUGZgydAH4DgGTIHEiCBJgh4zfufwqNy+F/J49VXXhEVlRWiU5fOK/v1" +
            "778GjT+mMejpr2RlUmjBEQB+CUiABEwl4DXvL3vIK00tzMTM58x+WxQfKxZ9+vWd0blTlx709DcR" +
            "NrMOCQGOAIQEMwshAWcSuG6Tn4WqUti1c6dYlZ9f2alzp5917tz5Jnr6q1qTlNubAEcAvGnwPQmQ" +
            "gKEE7LDJT2lpqXjt1T9fvnX0LY/ExTd7VhfiLOb7GdPf0G8KMwsHARoA4aDOMknAAQS8NvlpAXWH" +
            "qKoynBfPV5ZfGY/G/3XocBob+ijrw6BqHVBucwhEmpMtcyUBEnAyAcz7z9GF1jU9wzUbHH6rMIuz" +
            "N7Zv3zMiKmoWhv3Pu6ZmcI2/wpVJ0a8lwBGAa3nwEwmQQJAEPJv8CH08Nvm5G1nlBZlduJM/tCpv" +
            "FRp/rYLD/uGuCpZvNAE6ARpNlPmRgIMJSKc/7Hv/48FDhtwCDNLpL1FhHItysnMegPzJaPzvVFgP" +
            "ik4C9RLgCEC9WHiRBEggEAJ1Tn/Y5GcO0icHkodF0pRcuHDhF0LXd3Ts3CnBIjJRDBIwlABHAAzF" +
            "ycxIwLkEpNMf5v2PYuj/DCiMVZzEjCXvL56HID9vjhs3zq24LhSfBOolwBGAerHwIgmQgD8EPE5/" +
            "utYGjf/vke49f9Ja8NminKyc1pj3v4yh/59YUD6KRAKGEKABYAhGZkICziXg5fQ3BhS22oBEJvwY" +
            "Pu7Tt29zG+hCFUigQQKcAmgQDW+QAAk0RcBmTn9S3UXo/f8rlvy9N2LEiMqm9Od9ElCZAOMAqFx7" +
            "lJ0EwkygT89eWzBPvuj2O27/DkS5K8ziBFt8ydq1ax8+f+7cb7DeX65i4EECtibAEQBbVy+VIwHz" +
            "CHg5/e1HKdPMKylkOU8v3H/gfU0TcgUDDxKwPQGOANi+iqkgCRhP4OtIf+nTkftc40sIeY75GPqH" +
            "T5QWi95/eshLZ4EkQAIkQAIkYHUC0ukP8fGPYv4/Bed5nMofp0+f7ps9J6vU6uwpHwkYSYBTAEbS" +
            "ZF4kYHMCaOnxm2GbSH91tfXcxx9+/A6G/t+qu8BXEnACAU4BOKGWqSMJGETAZk5/kkoBhv5PaUJv" +
            "nT41Y7JBmJgNCShBgHEAlKgmCkkC4SdwndPfK+GXyBAJMjGisa53P675N4QmM1GKAA0ApaqLwpJA" +
            "eAh4Rfr7BSRYGR4pDC/1VfT+f8c1/4ZzZYYkQAIkQAJ2IGBHpz/4MhR+/vnnPeH4d8IOdUQdSCAQ" +
            "AnQCDIQa05CAQwjY1OlP1l4m1/w75EtMNRskQCfABtHwBgmQgA2d/mSlyqH/EVzzz++30wnQB8Dp" +
            "3wDqTwINELCp019R0e7dL8Pxbx8C/iQ0oDovk4AjCNAAcEQ1U0kS8I+ATZ3+JITMNZs3f4ytfv/u" +
            "HxE+TQL2I6DZTyVqRAIkEAwB6fQnNH1qustVt71vYjD5WSjt7LlZOZW6pvd2ZWSMtZBcFIUEwkKA" +
            "ToBhwc5CScCaBGzs9FeCof9ndaGns/G35nePUoWeAA2A0DNniSRgWQJzs7I3wzlu5sCBA1+DkEMs" +
            "K6j/gnHo339mTGFzAlwFYPMKpnok4CuBWqe/C+kZ6fuQ5glf0ynw3CIM/XfCfGdzOP49ooC8FJEE" +
            "QkKAToAhwcxCSMDaBLyc/v4Hks60trR+SVdy8ODBJzD0X4jGP96vlHyYBGxOgAaAzSuY6pFAUwSk" +
            "0x8ayPHo+d+NZ/Oael6x+5lrP/98CaY1shWTm+KSgOkEaACYjpgFkIB1CUinv5ys7B8PHjKkH6Rc" +
            "jdMuHv8S+uy52dnf0nStRfpU1z/LC40dS5cujb1y6lRzd3x8dFVVVb3+UZGRkdVRZWWVcW3bXpo0" +
            "aVJ5Y/nxHglYnQANAKvXEOUjARMJeDn9LUYxySYWFeqsi1DgM7qubcRWv+uvLzw3NzemsrzyV9gI" +
            "qK+m670RFyDl3JmzsSIy8pIor6iEv0D19Wnk50p3VURlZGR02ZmzzbGPwBWk3y90bWdEVMSzaWlp" +
            "x+pLw2skYFUC+J7zIAEScCKB7KzsT4QuyjD0fxb6T7MZg3EI9/sdRPz7haaJRdDtgC60aBgDXXRd" +
            "9NeEloJ4AAX4ASwYNGTIum7durVNSEjoi+dScLbE2dAKiHzck0fehQsXTm7btu3QocJDLuR7G6YZ" +
            "SlHeyvSpGU/WPML/ScDaBGgAWLt+KB0JmEIA8/7vI9hPIoL9vIcCXjGlkPBl+qqmac9Ax7+jYb5b" +
            "F6KVFAU/dl/iv01DBg9+r/+gQd1w6X6cY+W9II8CpJ+1cuXK1cePFr8If4pbUc4ixBtwBZkvk5OA" +
            "qQRoAJiKl5mTgPUIoOc/H8PendIyXC9BOmkA2OkogjJDYQCcl0rBCPjvPv36/Nvw4cM74aNs8J+5" +
            "cuVKcmVlpaiuqhLVGA7Asxj5jxQRERGe0/u9vObnMRsjA28sWbz4l8gaTpXaAtdUV5qfefBxEggJ" +
            "ARoAIcHMQkjAGgTQIM6GJEMx7C+H/PNwJuK00zEODXpenUJwchyK989cKSubVlp6WZSXw28Pv3qy" +
            "Yfdu6Bt7X5eXn6/5KOuFBfPmP4kRgXtoCPhJj4+HhAANgJBgZiEqEpCOYvD4bnElOtrjLIvGpCI9" +
            "Pf08GhiMKqt3oPFHj19/ND3D1R/Sb8WZrJ4WjUrsGfqXT6CuUvEy/UJJydiSkhLhrnSLiKj6e/mN" +
            "Nf7SUJAjBEEcRTAE/nn+u/P/BUJNgiGQixEBaXzxIIGwEwjqmx126SkACRhMAAFx/oDWfRSy7S+X" +
            "j8FR7CKae7enGE2LQcPSEu+PoFXY6MpwPWRw8aZlB7nlcr8Lg4cO6Ycwv9Ljf4hphYUn4yIUK3v7" +
            "sn6mnzt3btrp06c9w/yygddkjx9nBN7XvdY35N+QMWCASvmlpaX/9f57C3+qa9oA+CbMTM/I+K0B" +
            "+TILEgiYAA2AgNExoZ0ILHj77XZlWsQa9NDOR0VH5d/1nbvOJSYmToaO1zeUBWhYVi7/9NNOWCv+" +
            "MO7/Fc5e/2J1FgjzuxWz3asx9N8CstqxBzoMet1/8eLFnx45fOSGqir0+OW8ft38/vXvpTEgjQJ5" +
            "3Yf3Btbvq2tWrvxb0bFjefiufQAj8jED82ZWJOAXARoAfuHiw3YkAKe4mRievadz+y53fvuOb98H" +
            "HZ/B2dTceIl8DjHmn8WA8yYs/Uq3KhubL/eT2BeVlZV1O3LkyOBLFy+i0Zc9/ZrevqeRr+v5N3Dd" +
            "FwMgyGmA678aRbiQiWWKr+IH+CsEKZKGJA8SCDkBGgAhR84CrUQgZ072u3J/eCyHexRyzcJ5fY+/" +
            "KXFfzcnOuQPr6ddjbvf7TT0c6vvZWVlyuP8G6DcTr/K03eF2u0u2b9+e6IZnv2e4Hw19JAwA76F/" +
            "7/f+TgPU5GnKT+VzOdnZE1EhxRhFut92FUOFLE/A7zUulteIApKAjwTQOC5E498FjeN/I0keTn8b" +
            "f1nS0+mu9D9iTf098B94Tl6wyoFhfwTA0VrbufGXrIuPHUssv3LFgx2+DniF3z1ePe9rX2uue5wD" +
            "5X94oua993Xv97K5j4qK8pwG9/49ctb+91vUzW68v1F+F71v8D0JhIIADYBQUGYZliNQ+4N7I36A" +
            "/wLhZM+4qSH/xnSYMWjw4Hsxx/5YYw+F8p5s/OFs1hbGyQ9Rri17/pInev/i2LGaCLzV1bWNvryB" +
            "Fl426J6GXn68ahB8/d7T4HsZCHUGQHR0tIiLj/eMIMisTD6m4Tu4F2V0gAE5z+SymD0JXEOABsA1" +
            "OPjBCQS8Gv+/Ql8jGsfEQYMGvYimZbfHnyDMEGtGNq42/nlhFsfU4vfv2ydkUJ+axrvGAJDvZYCf" +
            "6xt4XECA/6+fkZ89BkLts7LH37x5cxEbG2uqzPVkLo2A3RCjP4yAN+u5z0skYAoBGgCmYGWmViUg" +
            "5/whWwf84BrV+NepOnbipEl/xtDxA3UXwvFaY9xo7Wp7/nmQIZiRjXCo4HOZCO4jjh8/fk0jLhNf" +
            "bwx4GvraRl7eu94wkJ+bNWsmbrjhBs+KAJ8FMPbBaYjP8P+wsdCjMv6EsVkzNxKonwANgPq58KoN" +
            "CcgoeOjx9ULjj966IT3/ayglJSVNRuuyBb24P19zI0QfnNT4S6S7d8vpczT4XkP/TU0D1CSonQbA" +
            "Bzm/37JlS4GNgDy3wvzfjMjoyFnu8opPwywHi3cIARoADqlop6tZGwXvztoQuLNM4jGtZetW02Fk" +
            "3GpS/g1m+/W0hmfOPw8P2rbnLyGcPXvWc17fm0fT7unhy+tNTQPIxr9N6zYiLi5OZmmFI3HKI48c" +
            "x/dnEEYBbF1/VoBNGRASmxBIwBEENPEjRMGTEf6kt7VpP64TJ07shjZoKBqgkP1teU1ryIBEeWbq" +
            "h7wtcezds+dqQy9n8r3n8qWAHsPAyxjAha+fx/vomBjRvn17vEZbQh8vITKxVfHyyvLKV7yu8S0J" +
            "mEIgZD9SpkjPTEnABwLoHW9E6NW3EQL3NTye7EOSYB6R67k3z83O/m0wmfia1mta4wmkycNpmnHj" +
            "q0xmP3f0yBGBHfdkZ//rRr12GsDT8/d6f80zEEzej0Hj36FDB88SP7NlDSD/5Jatk17DstLBAaRl" +
            "EhLwiwANAL9w8WHVCMilVYjpX5Lmcn0F2e8Lgfyp6MEVoOHpa3ZZXtMaUq88nLZv/KXH/5dffulB" +
            "Kxvzmp4+Pnq/r+35y4euTgN4Hqlp/Dt37hxOZz8pVqPHzTff3AIq9Gj0Id4kAQMI0AAwACKzsCYB" +
            "NJD/D+3CyLSM9J9BwldCJGVi127JC1BWH9PLC9G0hul6+FHAgf37Rdnlspqev6ehrx0F8H7vMQZq" +
            "ruN/aRt4npfL+7p07Wrpxl+iaNOmzSW8xC1dujTk6xH9qAo+agMCNABsUIlU4ZsEZs6cCc8u/cfD" +
            "bx4xGndnffMJ8670799f7iGbYl4JQnhNa8xBOUPMLMsqeVdWVIoDBw7UNP51Pf7a17rRgPpepQUQ" +
            "GxsnUlJSQhXcJ1hkQ4UmLl05dap5sBkxPQk0RoAGQGN0eE9ZAjFR0duxyOt/+/Tp80soEdIGEssB" +
            "b0ZDFGtWD85rWqMSuo1VtpL8FHzbtgJRUVFxjQHg3eDLhr7uc03Pv+ZzbFys6N6juyqNv6TSEgMX" +
            "le74eMt5KPpZZXzc4gSiLC4fxSMBvwjInn9t4y+3vl2NxO/5lYFRD3/dgys3KkuZDxr/lxFyeBR0" +
            "ewofw6ObkQr5mFdpaak4VHTIs8sfmnXZvnsO+R7t/jffe4wBIeIR4KdX794qNf4eXRBQqhrbTbOD" +
            "VlO1/N8kAjQATALLbENPAI3jH/G7/yPZ80cDKXfBC98GK6b14LQn+vTtIz3Et4WecPhK3Lpl69Xe" +
            "fV0vv+7Vu+dfd02+tm7TWiQnJyvX+INySvhIs2QnEaAB4KTatrGumBNfjN/8AcOG39S9X79+coOf" +
            "leFU14weHDb4WQkdFwwfPvxt6JYYTv1CWfbJEyfE0aNHRGREpPTma9AQkI1+3f02bduKHj2UdaRP" +
            "CSVfluVcAjQAnFv3ymuelZV1A5bcvYof/XvQ4K5Ky3B9H0rJ+LC2axzl6AZGu2/EyAa2+BWPKV95" +
            "fiiwfft22a7XNvxIKN/X/Hf1fW3b77nerl070atXLz9K4KMk4EwCNACcWe/Kao0QqZ3cFRUvoQ0Y" +
            "gca/A374V0XHxvSePHnyvVBqpbKKNSE49JzarUf3MXhsYxOP2ur24cOHxckTJ6/O/ctePoI61RoD" +
            "0gyoee+xEPD+xhvbi959zF+BaSvIVMaxBGgAOLbq1VIcw99vYG5/XGV5RTO0AKt6de/+45tHjx4E" +
            "LVJxHsBpqV4/DJSIqMjIasgV9IHpjX9gl7h1o0eP/iMys5SeQSvXRAYb16/3NPaygZeNv/cwf93n" +
            "ulcZ2rdvP9PjLzUhMW+TgDoEaACoU1eOlBSNXzY6dveh8f+8d68eTw4fNWoIQGTitPaOaZqIjior" +
            "k8v0gjo2btwYvXf3ngcw9H8XMrLtCEd9kHbt3CkuXSr1BO5B218z3O8xAmrf44sh/8mzQ8cOov+A" +
            "AfVlw2skQAINEKAB0AAYXg4vAUTxm4tf9gcxt7/k7nvveRh7tT8JiVaEVyqfSy9Eo9Q8rm1bGdEt" +
            "qAOb3qzEiMffkMmMoDJSLLFc779l8xZIXdPCy16+Z+gfn6++rx0RGDR4kOiE8L48SIAE/CNAA8A/" +
            "XnzaZAJeDf/ihx+Z8sPo6Ohfo8gPTS7W0OzPnTt3EhlWTJo0KagYAGDxJ+TTMt2VLuf9sbzROccO" +
            "OP5JIyAyMsITz1+TQwC1Db40AOT7qKgoMWjwYDb+zvlaUFODCdAAMBgoswuMAIb630bnbjK6eUsn" +
            "T7na8D8UWG7hTVVUVJSAKYvCoKXQdFePnj1vQz4bgs5LoQzKy8uFNABqGnyQ9LT3sucPJWrfR6Lx" +
            "H/Otb4nEREe5RChUixRVBQI0AFSoJRvL6AneI0QGnNw23ffAffclJCT8B9T9u8oq7965MxV7AewL" +
            "Rocag0jbNGrUKBfycVQr9/maNUIaARGRkWj8ZcMvfSkxAYD3Gt63adtOjBnzLREdw0i5wXzHmJYE" +
            "aADwOxA2AjKwDXp0N/bo1fM2NHT/CUE+DpswxhVchE5qPzRXwS3Xw2jI6DGjUyDWXuNEs35OFy5c" +
            "EHv37PUM/csG3zPcj8ZfbusrjYHeffqKYTfdZH1FKCEJKECABoAClWQ3EdHrfxG/5U/iJ/09eLe/" +
            "Cv3kELddermIWSuGR8XGTA203jx+EJgK6dat28s24uITjvXr1nkafXw/rhn6j42OFrdiyL9Lly4+" +
            "5cOHSIAEmiZAA6BpRnzCQAJo/Gehgbxr6E3DhmDb3D8j6/cMzD7sWZWVlX0OIe6YMmXK0cCF0R/8" +
            "7j33DET6LwPPQ72Up06dEnt27/YM/df0/qvxVdFEy6SW4vY77hDNmzdXTyk/Jb58+bIov1LO32U/" +
            "ufHxwAjwixYYN6YKgEBNQBsxACF705BcbmZjl17/VRrr16//CvP/AW/UI3v/WPq4GMse5ZSIo45V" +
            "efk1Q/7o/tcYAEIMGzZM3DR8uGM4nD59WmDli8fvEYGk8FXgQQLmEaABYB5b5uxFAA3b/+HjwLSM" +
            "9HfxutLrlp3e5h89fPRpKLQ+cKX0BxH3wHG9/yNHjng2/NG0CDT+QiQ0T/D0+jt27Bg4SsVSll66" +
            "JK5cuSIDH+2A6B2wHTC9HBWrQ9XEpQGgWo0pKO+Ct99uVyb0e9Ndrp9D/JkKquCTyHBg+yvWqb3h" +
            "mpqR6lOC6x5ycu9/3dovPDRkzx++D+L2O+8QsbGx1xGy98fz589jwkMTlZWVJXgp0dxu242Q2bsG" +
            "1dOOBoB6daacxGUREWu7dux4OwTPV0543wUuWrJ4sYxj8IHvSa5/Un/wwckP342rn1x/x86f63r/" +
            "MTGx4s67Jqi8jW/A1SSDHp0vKfEYPTB8qjH2v69a036FDCcHnCkTkkATBCKauM/bJBAUATj9SUe/" +
            "4m+NG/cAXm3boyktLX0cndeJrowMuW7f76Om968txo+//NF31CF7//369ReP/dP3Hdn4y8o+XlwM" +
            "1xH0/3FiFORgmss1Bd+nB/H381+O+jJQ2ZASoAEQUtzOKwzTuXfe2L79T6H5MzbWPn/Re4ueRu9/" +
            "XuA6yt7/Q9jxUIwNPA81U973wP2enr/ThvzraksGPTp39pyIgP+DPKurqwthCGABhIbGX/shnGc/" +
            "zs7OTq57nq8kYBQBTgEYRZL5fINAVlZWZ/yAJdx+++1jcNO2vf+9e/f+HIvWP0Dvv/03IPhwoW7u" +
            "34m9f4lHxvR38nHsyFGhRcjeP/5acN54441/wCjAs2CShzMzJzv7LqyHzIMhUInPy/E9+xe88iCB" +
            "oAk4+y8vaHzMoDECEbr4ExpGuYNfZmPPKX7vuc0bNr6NH+6swPXQH5r8vUcmIv2ngefBlCoScLvd" +
            "4szZsyI2Ltaz7TFWAIiYmJjBtbp4RoPgPCs/zt63b98nG75YPy17TlYJvm8IopWRWfscX0ggIAKc" +
            "AggIGxP5QkDXtNE3jxqFbX3FEF+eV/CZgpysnM4Yqz2JH2O5wsHvI2dO9rvo9L2HXvBbfidmAuUJ" +
            "FB87hoZfw9B/zfx/XHx8QzpN69mzZxaW0cZMvHtSmo5lgtlZ2YfgI/BcQwl4nQSaIkADoClCvB8Q" +
            "gblz56bAm8mNHy3Zs7Xlcfbs2Sex7C/NNdWVGoiCS5cujUXIm7sRGElud8w53kAgKpxG9v6PHz+O" +
            "Yf+axl+O/8fFxTWl0dikpKQlGBUoS+7YYSIMAfgIZM9sKhHvk0B9BGgA1EeF14ImoLurXsYPWj4y" +
            "uj/ozKyZwXMfffjhm9Dx74GKd/7MWUyPeNJPDzQPplOXgIz6B4c/fIUiPKd0AIyPa3AE4HpF7xsz" +
            "bpw0BO7EjZs9UTavf4KfSaAJAjQAmgDE24ERkMP/I0eN/AdS27FnWzA3K6cTdDvnynA9HQghOP79" +
            "CYwSsRnSfpsyCgSLo9IcPnSotvGvcQCU2xv7ucWx/NvKS3elZ8CQHMiRAEd9fQxRlgaAIRiZiTeB" +
            "3Ldzu2JovBrD/6O9r9vlvRz6x9B9Oryxxwask6a7evTsIWMjTA84DyZUloCc+5fL/zDq7zml819C" +
            "QkIg+sjVNbVGgP5d+gQEgtC5aWgAOLfuTdO8Uqv8L6Frn6EAOw7/P/fR0o/+ih/ugJ328CM9B3w2" +
            "jRo1Srp323Z5pGlfMBtkLOf+ZaNfd0o/AGwAFahm8ju0MLljx1Q4pD4WaCZM5zwCNACcV+ch0Fgf" +
            "1rtn91koaEgICgtlEdLrvzVitV2C1/9TAResa5MnfGeCDI7024DzYEJlCWDPCFGCsL91zn/ytRl6" +
            "/0HGQ0iGT8AvMPK2GwbmLGXhUPCQEqABEFLc9i8sNzc3BjOaPUbccguCANnuyMQP7BMdOncKeOhf" +
            "LvtDHovatGnzB9vRoUI+EThUVPR1449RAA1nq1atfErbxEPTJk6a9CpCCMupJR4k0CQBGgBNIuID" +
            "/hBwV1T8Rtf0LUhjt+H/V+dmZb+AGdv548aNc/vDpO5Zr2V/f8G1++qu89U5BLDTH+L+y6V/NZ7/" +
            "MJY9Q//xDa//9wsOlgj+Enmuw6oA+R3jQQKNEqAB0Cge3vSXgK5rgzG/vRHpUv1Na+Hni1avXv2m" +
            "jikNrPlPC1ROxHtfidHevyH9rEDzYDq1CRQePOjx+pOhf2UAoKioSBn610ilxvbu1eNFTdfGG5kp" +
            "87InARoA9qzX8Gml6cNHjxr9PgSQjkl2OTKxZAsxDbSZgSqEedk/I557AnZ5O4A8kgPNh+nUJnD0" +
            "6FFE/RNXI/+1bddOREdHG6rU8FGjMLqkJyAYV0dDM2ZmtiNAA8B2VRo+hWp2LNMquvXqNiZ8Uhhe" +
            "8nNw/HsVjf8H6P3/JtDcMS/7T3dNvOsRpJ8eaB5MpzaBYmz5e+XKFc+cv3T8i0XUP4N7/3WA5GqA" +
            "1dXu6hfrLvCVBOojQAOgPiq8FhiBavF79HLXIHFqYBlYLtVs7MQ2ER22rxDw57FApUPQnzwYEHNb" +
            "t279EvKw08hIoEgcme7wocNfO//BAOjSpYtZHIYktU56AxtxDTCrAOZrDwI0AOxRjxbRQh/Wpl2b" +
            "1yDMWIsIFIwYsvHvgwyK06e6Hg40Iwz9/xHLBtsh4l8W8sw6gaYAAC2FSURBVKDjX6AgFU9XWVEp" +
            "TpzA2n84/8m1/4ktW4qWOM06br755hYwxnuYlT/ztQcBGgD2qMewa7Fx40Y5kdlzwoQJHcIuTPAC" +
            "1DX+JxDtL6jVDBj6n5rSo/u9EGlW8GIxB1UJFBYVehp/OfSP0SDRo4e5bTOWmY5AQXFy5YmqzCi3" +
            "+QRoAJjP2BEl7N2999f4XdsKZVMVV/g59Pz7QYegG/+cOVnv4Of+i9GjR/8Y+dHxT/EvRjDiH8ba" +
            "f/x9eM72HdqL2FjT2+WWKO/SlVOnmgcjN9PamwANAHvXb8i0w29bf00XW1BgasgKNbYg/EKLcXD4" +
            "ewBLqA4H2/NfvHhxM10T92Cr31eQ79PGisrcVCJw7tw5ceHiRc/Qf0x0jOjevXsoxB+KKYBKd3y8" +
            "sUsMQiE5ywgZgaiQlcSCbE0Am+MMbHtjO+xKJp5QTNESyDtjx44db20rKNiAEdqPEOY3M1gdLpy/" +
            "sBbdvf+ReQebF9OrTaCwsPCq81+Xrl2CDfnrMwwY5dVVVVXs5PlMzHkP8svhvDo3XOPaecbkO++8" +
            "c6DhmZuXYT6yfgxniozvv61g2y78YM40ovH3hPvVxEk4/pUi/yHmqcCcVSBwDGv/5dx/TEyM6NIV" +
            "G2XyIAGLEOAIgEUqQmUxEOHuV5hv3AYdUhXSYyt+lGfBS/+/IPOUdJcrEZ+rg5Uf+b2s6/rNyG8a" +
            "8loZbH5MrzYBOfx/peyKZ84/OSUlZL1/talR+lAR4AhAqEjbuBzM/fdTcP7f492P0MXfwVD9fCMa" +
            "/5oq1p7o06/vbXg/y8ZVTtV8JLB3zx4E/pG7/TUTXdn795EaHwsVARoAoSJt43Lk/H+P3r1yoaJK" +
            "nu7J6KmnImRq64ioiBeNqJ6agD/6/OHDh/+rYiyMUJ951EPg6BEZ+lcTvfv0MTzkbz3F8RIJ+EWA" +
            "BoBfuPjw9QTq5v9Hjhw5+Pp7CnzOxNTFKb2qKmjHRU+sf01vhVj/i6E3vf4VqHyzRTx06JBwV7nR" +
            "+08QnTvbcXdsswkyf7MJ0AAwm7DN8z935txv0Iiquv7/fuxcuFMXolsw1YSRhAjk8/jtd9xxB/KZ" +
            "FUxeTGsfAkcO14T+7dtPhpXgQQLWI0ADwHp1oppEgxTe/jexT++eH0P+3sFAz8nK3gAj4m/Y2OVN" +
            "5JMYTF5Max8CR44cEc2bN+fcv32q1Haa0ACwXZWGWiF9xC233rIIpSrZ8HXs0qUMm6YEvCsLhv7n" +
            "YQTkHJb87QeD+0JNn+VZk8DZM2eEu9ItBgzgfjzWrCFKJQlwGSC/BwETyH07t1ulVlGGyGbfCjiT" +
            "MCdMiIu7glUACYGIgcb/D4j1PzI9wyUb/i2B5ME09iTw1Vf7POv+5dK/MB1bMSrVOyoyMuilrWGS" +
            "n8WGgAANgBBAtmsRbq0C29tqq6CfZ0mdinqWXrkSK3T9ciCyo/H/4YiRN/dB2jWBpGca+xKQ8/99" +
            "+/UNp4LnMTIVHVVWVhlOIVi2tQnQALB2/VhaOl3TRg8aPOgRCPm5pQVtRLji4uJYGDFHG3mk3lvZ" +
            "WVkbETlwdu/evX+PB1Ra/livPrxoHIEzcvjfXSn69AmzAaCL5nFt214yTjPmZDcC9AGwW42GSJ+5" +
            "c+emoOfsHjRo0KgQFWlKMXt37blDE/pX/mQu5/2xYVAJlvxtQLpp/qTls/YnUFRYKPr17y+iY6LD" +
            "piwiEH6JwismTZpUHjYhWLDlCdAAsHwVWVNA3V31MgKc50O6VGtK6JNUizBPOhRDpXt8ehoP1c37" +
            "p2Wk/wwfudGPr+Ac9Jxc/9+jR4+waowNiJrhe10UViFYuOUJ0ACwfBVZU0A5/J/cscMfIZ3Knu8L" +
            "EQlwGHryz/lKuXbe/1Y8j7RqrnzwVVc+5z+Bi9j2NzY2ViRg+V+4DsSlELt37UrFFNW+cMnActUg" +
            "QANAjXqylJR1w/9jxo272VKC+SdMyScffoihf22nr/sAeOb9Nc+8v9zml/P+/vF2xNNy578BA8K7" +
            "Keaxo8eOAHYv7HNR6AjoVDJgAjQAAkbn3IRew//Kev+j9macPnv2GcQA2O1LTXrN+0t/AZVHPXxR" +
            "l88ESODs2bOia3L4tvwtLS2FA6L7CDbn6qJFajIwFQ8SaJAAVwE0iIY3GiJQO/w/Efd3NPSMxa8X" +
            "QL4ZmP9fiR/KdU3Jisb/ZV1ooxDs5148y/X+TQFz8P1bRo8Oq/YnT5wQkVFRq/Ddfjw6Kqo4rMKw" +
            "cMsT4AiA5avIWgJ6Df/faS3JfJZGNv6pGPY/j8Yf6/+17k2lxJTqk4OHDB6D5/Kaepb3nU0A36uw" +
            "AbhSVibOl5TI8o/AQTdqypQpng9hE4gFW54ADQDLV5G1BPQa/s+0lmQ+SbMIT3kaf/l0+tSMMbom" +
            "+mIb39W5ubnt68sB8/7r8Jv+zsCBA1/D/cT6nuE1ErACgROy9x8RIRCHAD1//aAVZKIM1iZAA8Da" +
            "9WM56WqD/8i5xSGWE65xgYrQO7tf9vzhJZ2CM1We6a70RzX4AVSWV2yWTn4Y7pcrGzxHzpzs5dgo" +
            "qAyrBJbiAuf9a7nwxXoEKisrxfHjx0V8fDOxe+fusfjeyr0peJBAowToA9AoHt70JiCH/6uxwTmC" +
            "/9zlfV2V92jwz0PWb/Ti0cBLFfIXL1r8FZZx3Zk9J6sCnyMxOrACBsJDeF+IkwcJWJbAyZMna2XT" +
            "18GxNQUTERwBsGxtWUcwGgDWqQvLS1JdVf2H2uA/mZYX9psCJn/z0jVXxt5z3z1DcSU1Ly9vR2pq" +
            "ahVGC3QYADNw7RtGwzUp+YEEwkzg4IEDIi4uXsTGxEgflwFwWt0aZpFYvAIEOAWgQCVZRURN128d" +
            "fevoHMjTVGNqFZH9lUM29Hlo/AfKxh9HCj4/7W8mfJ4EQkng1KlTQk4BREZGirLy8lUou0LoIi6U" +
            "MrAsNQnQAFCz3kIudXZ2di94zJd269bt7pAXHtoCPUYAGn85GjArtEWzNBLwn8DBAwfR+EeJqOgo" +
            "sXfv3k+xT4Wc/+/pf05M4TQCNACcVuMB6qtV63/WhViG5JkBZqFSMmkELMQ5ViWhKavzCJReuiRO" +
            "nTopoqIihaiuLu7bqW9VVGz0U1gFMMF5NKixvwRoAPhLzKHPo/Gf8EjaIyugvmwcnXDYdZrDCXXn" +
            "GB2//PJLNP5RnhGA5s1bdOg9vPe+yZMnP4GNgObL5a2OAUFFAyJAAyAgbM5KhKVxb+IH5WPMMd7n" +
            "LM2pLQlYm0BR0aGa4X+MALRrf6MUVhror6S7XNXY5tqNpa2Lra0BpQsnARoA4aSvSNno/ae279Dh" +
            "VxD3fkVEppgkYHsC+77CthR6tWf4/4bERJGQkOCt87S0DFcRLrTJzsqe732D70mgjgANgDoSfK2X" +
            "ACLkdYJHcfz48eMH4wGnDP/Xy4IXScBKBPbv3y/j/ntGAJKT652xmoaRgL34++0JI2CmlWSnLNYg" +
            "QAPAGvVgWSncFRUvYfh/FQRk79+ytUTBnEbgwoUL4szpM2j8I0Xnzp1ETExMQwimYROrVzBU8F1M" +
            "5T3X0EO87kwCNACcWe8+a42AIsPatbpRxsHn/L/P1PggCZhLoPAglv5h3l86AHbp2uT2wzMGDR58" +
            "L/6WHzNXKuauGgEaAKrVWAjlxfB/DHbM63nHxDv6hrBYFkUCJNAEgd27dmHjH9n77+wxApp4PBHh" +
            "u/8NowC7MQowq4lnedtBBGgAOKiy/VUVw/+/0TV9C9Jx+N9feHyeBEwiICP/Xb5c5hkB6N6jh6+l" +
            "3Ddx0qRXsbX1A74m4HP2J0ADwP51HLCGuq4Nxq5iG5EBh/8DpsiEJGAsgSOHj3h6/bL3Hxfne8Tf" +
            "pKSkxzWhrcPSwL8YKxFzU5UADQBVay4Ucmv68PF3jN8ciqJYBgmQgG8EiooKPc5/PXzv/ddlfF/v" +
            "Xj1eRKjg8XUX+OpsAjQAnF3/DWqP2P9YV6RVtG/ffmyDD/EGCZBAyAmcOH5C3HDDDaJV69Z+lz18" +
            "1Kgh8AVIwNbeHf1OzAS2I0ADwHZVapBCuv48fig+R26pBuXIbEiABIIkUF1d7Zn779svYL/cTKwG" +
            "WF3trn4xSFGY3AYEaADYoBJNUmFQ95QeWci73ggjJpXJbEmABBohILf9jcLOfx07dWrkqUZvDene" +
            "rfvbQtNlYC8eDidAA8DhX4AG1ddF36HDh3Zu8D5vkAAJhIVAfHycaNasWcBle/6u8fcdcAZMaBsC" +
            "NABsU5XGKZKVldVZaNopeBgPMC5X5kQCJGAEgdZt2gSVDf6ux8i/b8/feVA5MbHqBGgAqF6DJsiP" +
            "L8VTCACEnUbEUBOyZ5YkQAIBEoiIiPCsAAgweV2yofLvW/6d113gqzMJ0ABwZr03qjWchHpgjnAP" +
            "HuIKgEZJ8SYJhJZAdHS0JwJgkKUOkX/fnr/zIDNicrUJ0ABQu/7MkR7hf9u0apVjTubMlQRIIBgC" +
            "Sa1bBZPck7bfgAF5cpfAoDNiBkoToAGgdPWZJbyeMuKWWxLNyp35kgAJBE6gbdu2gSeuTdm9e/co" +
            "LPNNCTojZqA0ARoASlef8cIvXbo0FrnGIGzoZeNzZ44kQALBEkBwrmCzkIGE+mCb7+iZM2f6Hks4" +
            "6FKZgdUI0ACwWo2EWZ5z58410zSNjX+Y64HFk4DJBFpiCuBiQkJCC5PLYfYWJkADwMKVQ9FIgARI" +
            "wCQCcoVPaVVVVYJJ+TNbBQjQAFCgkkIpohz613U98CgjoRSWZZEACQRKoCWmAEo0t5u+PoEStEE6" +
            "GgA2qEQjVZg0aVI58quQUwFG5su8SIAELEUAmwKJ4mpNy7SUVBQmpARoAIQUtyqFaYUbv/iiRBVp" +
            "KScJkEAABHRtP1Jxr48A0NklCQ0Au9SkkXpoYt/ps2fTkWWRkdkyLxIgAesQ6Naj2we6YCwA69RI" +
            "6CWhARB65pYvURP6fqFrcrOQrZYXlgKSAAkERKBv376RWAnAEYCA6NkjEQ0Ae9SjoVpokZGv6UKX" +
            "UcJoABhKlpmRgHUI1Mb6iKmN/WEdwShJyAjQAAgZanUKSktLOwxp25eXl3+mjtSUlARIwG8Cmrh0" +
            "5dSp5n6nYwJbEKABYItqNEEJTezNz89nQCAT0DJLErAIgaGYAqh0x8dHW0QeihFiAjQAQgxcneK0" +
            "PWdOncqEvAXqyExJSYAE/CDQUhOiGsGA2A74Ac1Oj7Li7VSbRuqiC2wXKuRa4Twjs2VeJEACJEAC" +
            "1iBAA8Aa9WA5KZJaJ/0ew4ODIRgdAS1XOxSIBEiABIInQAMgeIa2zKE2ImDR+vXrD9lSQSpFAiRA" +
            "Ag4nQAPA4V+AxtTXhLZj/5dfTcEzDAjUGCjeIwE1CaSqKTalNooADQCjSNowH10Tu3EOg2p5NlSP" +
            "KpEACZCAownQAHB09TeufFKrpBdq/QDyGn+Sd0mABFQkAEdfPTIyEosBeDiRAA0AJ9a6jzrTD8BH" +
            "UHyMBNQlwGWA6tZd0JLTAAgaob0z8PIDYDwAe1c1tXMkAa2yurqagYAcWfdC0ABwaMX7qjaGCHfR" +
            "D8BXWnyOBJQi0FJo+sXI6uoWSklNYQ0jQAPAMJT2zKhPvz7Pww9gKLTLs6eG1IoEHEtABvoqrta0" +
            "TMcScLjiNAAc/gVoSv0RI0ZU4pl9y5YtK27qWd4nARJQjICu7YfE3BJYsWozSlwaAEaRtHU+2pbT" +
            "J0//BCrm21pNKkcCDiPQpl2buZjmk1t/83AgARoADqx0v1WOEP8pNDEG6fL8TssEJEACliVwy803" +
            "JwqhdbOsgBTMVAI0AEzFa4/MXS4XIgHqMQe/OrjGHhpRCxIgAUnghqSkG4Wuu3Nzc2EI8HAaARoA" +
            "TqvxQPXVtU1r1629F8lLAs2C6UiABCxHIAVRgIrdbncHy0lGgUwnQAPAdMT2KEDT9G1YMjQC2iy0" +
            "h0bUggRIAARSscz3sF6l/4A0nEeABoDz6jwgjaNiYn6n6Rr3BQiIHhORgGUJjBVYCYBRAK4EsGwV" +
            "mScYDQDz2Noq5ylTplToQt+P5YC7baUYlSEBhxMYNGhQAf62uzocgyPVpwHgyGoPVOmrywEZFjhQ" +
            "hExHAhYj0CKxhfTraWMxsShOCAjQAAgBZLsUEa1H/wf8AL4FfWbZRSfqQQIkQAJOJUADwKk1H4De" +
            "Ux6dcghrhiP27dvHaYAA+DEJCViRwMWSi3IJ4GkrykaZzCVAA8BcvrbLXdP1tevXrf8eFENsAB4k" +
            "QAKqE9ixY9tg7PoJ456H0wjQAHBajQepb5Qe8+8ICvRtZMPlgEGyZHISsAQBXXTH1N5hS8hCIUJK" +
            "gAZASHGrXximAQ5id8D448eP0xFQ/eqkBiSAVYCifYSuzyIK5xGgAeC8OjdAY23jik9X3ISMpPcw" +
            "DxIgAZUJ6FqLqoiIiyqrQNkDI0ADIDBujk7FqICOrn4qby8CRZrQ4yIiIq7YSy1q4wsBGgC+UOIz" +
            "1xDwigpIP4BryPADCShHoBBTALGxFRXlyklOgYMmQAMgaITOy8ArKmCx87SnxiRgKwKF8OlpHte2" +
            "7SVbaUVlfCJAA8AnTHzomwSuRgVc9M17vEICJKACgdLS0j2appVPmjSJIwAqVJjBMtIAMBioU7Lz" +
            "igrIaQCnVDr1tB2BgwcPnhK6Xmg7xaiQTwRoAPiEiQ9dT6AuKuCalSs3XH+Pn0mABNQgsL2gYBQk" +
            "3auGtJTSaAI0AIwm6qD8ZFTAQ8eO/QIqcxrAQfVOVW1DALsAiiG60GgA2KZK/VOEBoB/vPi0FwEt" +
            "KvLnui7G4RKnAby48C0JKEIgDw6AQ/v06/O8IvJSTIMJ0AAwGKiTsktLSzssNFG+YsWKbU7Sm7qS" +
            "gB0I7NmzZwv02DdixIhKO+hDHfwnQAPAf2ZM4UVAEyLveHHxC7jEaQAvLnxLAhYnULJ54+Y7sbun" +
            "NAJ4OJQADQCHVrxRaqdnZDyOYcS7qqqqaAAYBZX5kID5BBZiA6BveVbzmF8WS7AoARoAFq0YlcTC" +
            "KMCyd+a+w70BVKo0yupoAocOHVqC3n9EzWoeR6NwtPI0ABxd/cYor0doT8EImIDc6AxoDFLmQgJm" +
            "Eihas3r13XIVj5mFMG/rE6ABYP06sryELpfrKyH0hBMnTqyyvLAUkARIYAaW/o2v1sTPiMLZBGgA" +
            "OLv+DdNe17TPl3+6/DZkWGRYpsyIBEjAaAIlK1euXK3poiwjI+OI0ZkzP7UI0ABQq74sK21EZMQv" +
            "EVJ0LATkNIBla4mCkYBYePxo8YsYsVtJFiRAA4DfAUMIICZAodC0qH379n1oSIbMhARIwHACxcXF" +
            "L+tCvzV9asaThmfODJUjQANAuSqzrsDSqWjDunVpkLDAulJSMhJwLIFFK1esfAHBu7hk17FfgWsV" +
            "pwFwLQ9+CoKAV2jgGUFkw6QkQAImECgvL38d03TfdWVkuEzInlkqSIAGgIKVZlWRGRrYqjVDuUhA" +
            "FCyY9+4PsFyXPjr8MlwlQAPgKgq+MYIAfmDqQgPPNiI/5kECJGAIASz9Ew+lZbjkFB0PEvAQoAHA" +
            "L4KhBGpDA09wu91vG5oxMyMBEgiUQFFOVs5wOOl+qmladaCZMJ39CNAAsF+dhl8jTSzLfeedByEI" +
            "YwKEvzYoAQlMB4KJcP77IVGQgDcBGgDeNPjeEALR1TE/QkYTcdIZ0BCizIQEAiZQsurTVViVo+uI" +
            "2Hkg4FyY0JYEaADYslrDqxQ2GDmIHQKr8cOTD0lKwisNSycBRxOYceTE4Zfgm7Pc0RSofL0EaADU" +
            "i4UXgyUgf3DkDw/yoddxsDCZngQCI1Cyd+/eN2GMj2Hgn8AA2j0VDQC713CY9PP84OCH58KFC2+E" +
            "SQQWSwJOJ7Bw88aNrzPwj9O/Bg3rTwOgYTa8EywBRBz7YPEHv0A2ciqABwmQQAgJwPj+va6Luxn4" +
            "J4TQFSuKBoBiFaaSuJ4fHkQeq6ioeF0luSkrCdiAwOwl73+ATX+0BTbQhSqYRIAGgElgmW0NAfgC" +
            "LJyfO28yPhWRCQmQQGgIeHr/Qr/HNZWBf0JDXM1SaACoWW/KSC0jj8kIZBB4ujJCU1ASUJsAe/9q" +
            "11/IpKcBEDLUzizIE3kMEcg8kci4JNCZXwJqHVIC2PQnC1v+svcfUupqFkYDQM16U0vqmghkDAyk" +
            "Vq1RWjUJ5C+YN/9Jzv2rWXmhlpoGQKiJO7C8mghkuo7AQHIfcgYGcuB3gCqHhgB6/y+w9x8a1nYo" +
            "hQaAHWpRAR28AgMxPLAC9UURlSTA3r+S1RY+oWkAhI+9o0quCwzkiUzGUQBH1T2VDQ0B9v5Dw9lO" +
            "pdAAsFNtWl0XBAbyRCbjJkFWrynKpx4B9v7Vq7OwS0wDIOxV4BwBZGAgGZns+PHj/wOt6QvgnKqn" +
            "piYTqKysnMO5f5Mh2zB7GgA2rFRrq6QtWPnpir9ARvoCWLuiKJ06BIrefWceVtkw6p86VWYNSWkA" +
            "WKMeHCOFjEwmeyocBXBMlVNRkwmg9/88e/8mQ7Zp9jQAbFqx1lZLW7Bi+Qq5SyBHAaxdUZTO+gTY" +
            "+7d+HVlWQhoAlq0a+wrmiU+u65MOHjwopwLoC2DfqqZmJhNg799kwDbPngaAzSvYsuppYt7aNWv/" +
            "D/JxFMCylUTBLE4Avf/cCXLDLYvLSfEsSoAGgEUrxu5iYUXAo0LTh69bty4bunIUwO4VTv3MIDBd" +
            "brQlN9wyI3PmaX8CNADsX8fW1VDXsvfv2/8eBJxuXSEpGQlYkkCRZ4MtbLTl2XDLkiJSKKsToAFg" +
            "9RqysXzwBfiZpusl+CHrATWLbKwqVSMBownIqbOJomajLaPzZn4OIUADwCEVbVU1W7ZuNV4I/Z8h" +
            "33Sryki5SMBiBEqwsVY+/m70mo22LCYdxVGGAA0AZarKnoJOmjSpXBPakrlZ2XK7YPyo8SABEmiC" +
            "wIwjJw6/BOe/5U08x9sk0CgBGgCN4uHNUBBIn+p6GM5MD7jd7udDUR7LIAGFCZR4NtTSxRjPBlsK" +
            "K0LRw0+ABkD464ASeAho83Pfyf0h3s4mEBIggQYJzPBsqIWNtRp8gjdIwEcCNAB8BMXHzCVQFxzo" +
            "9OnTL6IkLgs0FzdzV5NAiQyhLTfUkhtrqakCpbYSARoAVqoNp8uC4EDLPlr238DA4EBO/y5Q//oI" +
            "zKjZSIub/tQHh9f8J0ADwH9mTGESgeuCAxWZVAyzJQEVCdT0/rGRlme0TEUNKLPlCNAAsFyVOFyg" +
            "r4MDPeNwElSfBLwJsPfvTYPvDSGAlSQ8SMBaBLKzsj6DRFvTXa6BeB1rLekoDQmEnIDs/fda8eny" +
            "I66pGbEhL50F2pYARwBsW7XqKtanb99xQhc/gAYcBVC3Gim5cQTY+zeOJXPyIkADwAsG31qDwIgR" +
            "IyoR4vQ9hAj+HSR6zhpSUQoSCAsBzv2HBbszCqUB4Ix6Vk5LOAR+D6FOR61duzYLwtMhULkapMAG" +
            "EWDv3yCQzOabBGgAfJMJr1iEgKaJOYX7D7wPcTgVYJE6oRihJXDhwoVsnZ7/oYXuoNJoADioslVT" +
            "NT0j4+e60E5iKuC7kD1fNfkpLwkESWD2kvc/QGAsrvsPkiOTN0CABkADYHjZGgSw5jkVUwFpZ86c" +
            "eRISMUKgNaqFUoSAAHr/v2fvPwSgHVwEDQAHV74qqmMq4K2PP/z4Hcg7XRWZKScJBEmAvf8gATJ5" +
            "0wRoADTNiE+EmQCmAp7ShH4JUwE9IEpBmMVh8SRgOgH2/k1HzAJAgAYAvwZKEOjdr28qpgIeh7CZ" +
            "SghMIUkgcALs/QfOjin9IEADwA9YfDR8BBgbIHzsWXJoCbD3H1reTi6NBoCTa18x3RkbQLEKo7iB" +
            "EGDvPxBqTBMQARoAAWFjonAR8IoNkBkuGVguCZhFgL1/s8gy3/oI0ACojwqvWZaAV2yADAj5qmUF" +
            "pWAk4D8B9v79Z8YUQRCgARAEPCYND4G62ABFu3e/DAkYJjg81cBSDSbA3r/BQJldkwRoADSJiA9Y" +
            "koCm/X3N5s0fQ7ZMS8pHoUjAPwLs/fvHi08bQEAzIA9mQQJhIZCdlZWv6dqXaRnppRDg6bAIwUJJ" +
            "wAAC6P33/uD9xTtcUzNiDciOWZCATwQ4AuATJj5kRQJYFTAWoVLTa6cCGCbYipVEmXwhkM+Y/75g" +
            "4jNGE6ABYDRR5hdaApwKCC1vlmY4gfLy8hcY899wrMzQBwI0AHyAxEesS8CV4ZJD/+fmZuXcjddF" +
            "1pWUkpFAvQTyF8ybj42uuONfvXR40VQCNABMxcvMQ0HAayrgX1AepwJCAZ1lGEKAvX9DMDKTAAnQ" +
            "AAgQHJNZjACnAixWIRTHBwLs/fsAiY+YR4AGgHlsmXMICXAqIISwWZQhBNj7NwQjMwmCAA2AIOAx" +
            "qbUIcCrAWvVBaRolwN5/o3h4MxQEaACEgjLLCBkB7BXw1ppNWz5CgdNDVigLIgE/CVRUVLxOz38/" +
            "ofFxwwnQADAcKTMMJwHsFfCU0ETp3Ozs7pCjIJyysGwSaIBA0fzcd79Hz/8G6PByyAhEhawkFkQC" +
            "ISKQ1Cpp3LkzZ8+juIk4V4aoWBZDAj4RqKysfB69//9l1D+fcPEhEwlwBMBEuMw6PAQmTZpUrglt" +
            "ydysbLkskLEBwlMNLLV+AkXvvpM7ATHYF9Z/m1dJIHQEaACEjjVLCiGB9Kmuh3UhHkCM9Z+HsFgW" +
            "RQJNEZiO7+VDaRmutKYe5H0SMJsADQCzCTP/MBLQ5iPG+ksQgKMAYawFFn2VQFFOVs5woWmfappW" +
            "ffUq35BAmAjQAAgTeBZrPgHXVFea9LTGeuvXzS+NJZBAkwRm4YmJcFL9YZNP8gESCAEBGgAhgMwi" +
            "wkdAzrUumPfuDyBBfvikYMkkIEpWfboKI1G67nK5DpAHCViBAA0AK9QCZTCNQFRsTDqGXB9EAbNM" +
            "K4QZk0DTBGYcOXH4JRiky5t+lE+QQGgI0AAIDWeWEiYCU6ZMqcI0wArEBbgJIpSESQwW63ACe/fu" +
            "fVPoYkz61Azs/MeDBKxBgAaANeqBUphJQNN+LHTtLhQxy8ximDcJNEBg9uaNG1/H3D+dURsAxMvh" +
            "IUADIDzcWWoICWDO9SvMvSYcPHhwSQiLZVEk4CGApai/13VxN/aqcBEJCViJAA0AK9UGZTGNgK5p" +
            "n6/9fG06CigwrRBmTALfJDAbS1FfZNjfb4LhlfAToAEQ/jqgBCEgEBEZ8Us4YI9FUbNCUByLIAEP" +
            "ASxBzeKmP/wyWJUADQCr1gzlMpRAWlpaIVYDRG3fvn2doRkzMxJomAC2/H33Bwz72zAg3gkvARoA" +
            "4eXP0kNIQNP1tdu3bX8cRXIaIITcHVzULIb9dXDtK6A6DQAFKokiGkMgSo/5dzgDfhu5cSMWY5Ay" +
            "l4YJMOxvw2x4xyIEaABYpCIohvkEpjw65SDWYscfOHDgM/NLYwkOJzAL+jPsr8O/BFZXnwaA1WuI" +
            "8hlMQNv4xedf3IdMiwzOmNmRwFUCW7ZsWSE/MOzvVSR8Y0ECNAAsWCkUyTwCmqZvE5o+AiXkmVcK" +
            "c3Y4gUV7du76JZz/VjqcA9W3OAEaABavIIpnLIGomJjfabo2DLnSD8BYtMztawLS+W9iWka6dDjl" +
            "QQKWJUADwLJVQ8HMIIC9ASqwLnv/smXLis3In3k6nkAJ9p0Yhd7/Kg3DTY6nQQCWJkADwNLVQ+HM" +
            "IaBtOX3y9E+Qd745+TNXBxNYqOvaaMT93+RgBlRdEQI0ABSpKIppIIEI8Z/4gR6DHPMMzJVZkYAk" +
            "gKklfXB8QsILxEECVidAA8DqNUT5DCcAz2ysANBjDn51cI3hmTNDRxPAhlMH5dD/Aw88cN7RIKi8" +
            "EgRoAChRTRTScAK6tmnturX3It8Sw/Nmho4lsHbt2suINXHasQCouFIEaAAoVV0U1kAC27kc0ECa" +
            "zMpDILq6OkLX9GriIAEVCNAAUKGWKKPhBJJaJ/0OPbWhyDjP8MyZoWMJ3Ni1awR8/1s4FgAVV4oA" +
            "DQClqovCGkVg0qRJ5ciraNf27QeNypP5kMCoUaM6C6G1IQkSUIEADQAVaokymkJAE9qOgoJtE5E5" +
            "/QBMIey8TGNjYysRZ6IqNzc33nnaU2PVCNAAUK3GKK9hBHRN7MbJqICGEWVGIJCKJaaXo8rKmpEG" +
            "CVidAA0Aq9cQ5TONQFKrpBfgBzAYBeSZVggzdh4BXVS64+Ojnac4NVaNAA0A1WqM8hpGoM4PYP36" +
            "9YcMy5QZOZ1ACkYA9PLyckQD5kEC1iZAA8Da9UPpTCYg/QD2f/nVFBSD4EA8SCBoAikYVdLgC8B9" +
            "AIJGyQzMJkADwGzCzN/SBPArvavWDyDP0oJSOHUIaCIaPgCV6ghMSZ1KgAaAU2ueensI9OnX5/na" +
            "eADcHpjfCSMIbMX3qXlc27aXjMiMeZCAmQRoAJhJl3lbnsCIESNkT20ftwe2fFUpIWBpaelx7AVQ" +
            "XutfooTMFNK5BGgAOLfuqflVAtwe+CoKvgmKAPYCOiV0vTCoTJiYBEJEgAZAiECzGOsSiNaj/wP7" +
            "AnwLEnIawLrVpIRk2wsKRkHQvUoISyEdT4AGgOO/AgQw5dEphxC+NWL79u3rSIMEgiCQD6fSIVgE" +
            "QAMgCIhMGjoCNABCx5olWZiAputrt2/b/jhELLCwmBTN2gQWysBS2Gjq99YWk9KRQA0BGgD8JpAA" +
            "CGhRkf+GuduxeDuLQEggEAJ79uzZh2/SUToABkKPacJBgAZAOKizTMsRSEtLKxSaFsVpAMtVjSoC" +
            "FW3ZtOk2RAGEEcCDBNQgQANAjXqilCEgIKcBdmzb9gSK4jRACHjbrIg8XdfaIwrwKZvpRXVsTIAG" +
            "gI0rl6r5R6BaEz+DA9d4pJrhX0o+TQICI0i6BidA/ONBAmoQoAGgRj1RyhAQyMjIOILf79Lly5fv" +
            "RHElISiSRdiHAPYA0GTvP8k+KlETuxOgAWD3GqZ+/hHQtU9PFh//ExJxFMA/ck5/elrvvr03AkIH" +
            "p4Og/uoQoAGgTl1R0hAQcE11/UTXtJQ1K1fOQ3EcBQgBc7sU0atnz8egC0cA7FKhDtCDBoADKpkq" +
            "+kcAjlz/KDp6bD5STfcvJZ92MgFM/ifCDcDtZAbUXS0CNADUqi9KGwIC6RkZv9SEKM7JyhmM4vJD" +
            "UCSLsAGBjRs2nIYa8CPhQQJqEKABoEY9UcoQE0ifmjEODoEP7Nq161EUzamAEPNXsLj8kydPJmIU" +
            "YKuCslNkhxKgAeDQiqfaTRPQNPFGweYtcn+AVJw0AppG5tgnsAvgU1gAOAA+JD9zLAQqrhwBGgDK" +
            "VRkFDhUBTAU8i8huH8/Nyp6DMlNx0ggIFXy1ypn9xZq1f0QkSe4mqVa9OV5aGgCO/woQQGMEYARk" +
            "6prY6WUEFDT2PO85j8CXX375DkIA9XZluOQqAB4koAwBGgDKVBUFDRcBV0bG9zASsAlGwIfwCbgX" +
            "ciwKlyws11oE3G73ajj/zY+vrh5pLckoDQk0TYAGQNOM+AQJCDkSACNg1tbNWwqwOuAskDyAk1MC" +
            "zv1uFJ04ceK13H+8czMiAL7x4KOPnnQuCmquKgGsduJBAiTgD4GcOVkr8fyN3Xv1vG/UqFE/wvun" +
            "/UnPZ5UlUATJ8+Dwt+GLNZ+nw+O/XbxePYaNv7L16XjBaQA4/itAAIEQyMnK+iMagAz0/jZN+M6E" +
            "f23Tps2zyGdaIHkxjaUJ5EO6hQUFBYd27tjxEHb7GQufkIv44fwEo0JPWVpyCkcCTRCgAdAEIN4m" +
            "gcYIZGdlvY3lX5OxZPDDcbff/qv27dv/Es/fjzOxsXS8Z0kCRZBKruPPg2PfmU3rN4xBYz8M9TsU" +
            "Hv5fIULkFi0y8t/S0tKOWVJ6CkUCfhKgAeAnMD5OAvURgCGQLYR2L3qIa9t36vDsuHHjBuG5Z3AO" +
            "qe95Xgs7Aem/4WnsKyoqdmzatOli4YEDD2FUZwjC+Q7RhV6oCW0HPu/q06/P8yNGjKgMu8QUgAQM" +
            "JkADwGCgzM7ZBOAf8AYMgXHoOcajx7hi4ODBfx00aNAoUMnESWMgPF+PfBRbKM8L586t+2LDhpIz" +
            "p0650Lj3Q131hNHWDsv4vsT7Pejt74mOjX5hypQpFeERlaWSQOgI0AAIHWuW5CACWVlZnSN08Sfs" +
            "LDgaIYWr4SvwWZt2bV6bMGECGh1PUKFUvCY7CInZqtb16GWv/vy5c+fW79m5p/pg0YHv4vP/b+d+" +
            "XuMo4zgA7+yvurqlJhCwQjWp3bJUDy146Envgdw95ODJo/+BV/8Ajx5EvAgLHs1Vjz0ESUFaSg0a" +
            "POwhaJUWqya7r59Ju6UUUhA3bYjPC8NkM5t333kmw+f7zuzuICF/LoF/Npfy2zkePybs60v629NG" +
            "45P19XXf33/UR0f/x1JAAXAsD4tBnSSB0Rej1/aqvY8TPFeyXxfyccKtnHjXl8+f/yqXls91Op23" +
            "8vvLWd49Sft9BPtyPX3+luVRyI/H41e2vtu6kjC/UBrVqzFezPaFLJOE/E9VVbZLybpVfdput8eZ" +
            "2deFgkaAQAQUAP4NCDxDgc3Nzc6tm7c+ypk3TFgNc7/5Ym4X5DPk5YecjDeHly59MxgM2v1+P9sP" +
            "ioKXs/4/FAazcJ8FfH1Uvs1M/sXNa9d+3/3lzntPC/k8dyez+c+63e6vvV7vztra2h91BxoBAocL" +
            "KAAOt7GFwDMROLhd0Gh8mBnsGykEBqnLVxql7OfkHKc4+DmDuL20uPjl21evnllYWOjm8eWHA6vX" +
            "dYFQt+NWJMwCvR7b46FePz4I9p2dnZdufH/jnUZVst+5PF+q0ymMutn3dtad3I/v5/e5F/9gJp+f" +
            "hXwQNALzElAAzEtSPwTmKDAajc7ka2bPlkn5IJexl3MZuy4OlvMS3YTjvYTjXk7ead5jkPcXJCSr" +
            "cjfbxgnR7ZXlla+Hbw6bKRYenwXXhUJdMPyX9mSQN+oZ+lOCPJ+OzGgfttJoNA8L9mYpn0+azbul" +
            "lL8zi99v37+/98LS0r3V1dW/Zn9vTYDAfAUenZzz7VZvBAgchcDGxsapP3d3+/u9XmcymTTrpaqq" +
            "bms6PT2tqvfzmq8fVizMazz/IshLxpenP2itVmsq2Gca1gSev4AC4PkfAyMgcCQCTxYL83oRQT4v" +
            "Sf0QIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQ" +
            "IECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECA" +
            "AAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAEC" +
            "BAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQ" +
            "IECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECA" +
            "AAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAEC" +
            "BAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQ" +
            "IECAAAECJ17gH5hdU4rESVO6AAAAAElFTkSuQmCC";
    }
    return Swipe_Right;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var Swipe_Left = (function () {
    function Swipe_Left() {
        this.swipe_left = "data:image/png;base64," +
            "iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAAAXNSR0IArs4c6QAAAAlwSFlzAAAL" +
            "EwAACxMBAJqcGAAABCZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6" +
            "eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYg" +
            "eG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4K" +
            "ICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6dGlm" +
            "Zj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmV4aWY9" +
            "Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIgogICAgICAgICAgICB4bWxuczpkYz0iaHR0" +
            "cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgICAgICAgICAgIHhtbG5zOnhtcD0iaHR0" +
            "cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyI+CiAgICAgICAgIDx0aWZmOlJlc29sdXRpb25Vbml0" +
            "PjE8L3RpZmY6UmVzb2x1dGlvblVuaXQ+CiAgICAgICAgIDx0aWZmOkNvbXByZXNzaW9uPjU8L3Rp" +
            "ZmY6Q29tcHJlc3Npb24+CiAgICAgICAgIDx0aWZmOlhSZXNvbHV0aW9uPjcyPC90aWZmOlhSZXNv" +
            "bHV0aW9uPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgog" +
            "ICAgICAgICA8dGlmZjpZUmVzb2x1dGlvbj43MjwvdGlmZjpZUmVzb2x1dGlvbj4KICAgICAgICAg" +
            "PGV4aWY6UGl4ZWxYRGltZW5zaW9uPjUxMjwvZXhpZjpQaXhlbFhEaW1lbnNpb24+CiAgICAgICAg" +
            "IDxleGlmOkNvbG9yU3BhY2U+MTwvZXhpZjpDb2xvclNwYWNlPgogICAgICAgICA8ZXhpZjpQaXhl" +
            "bFlEaW1lbnNpb24+NTEyPC9leGlmOlBpeGVsWURpbWVuc2lvbj4KICAgICAgICAgPGRjOnN1Ympl" +
            "Y3Q+CiAgICAgICAgICAgIDxyZGY6U2VxLz4KICAgICAgICAgPC9kYzpzdWJqZWN0PgogICAgICAg" +
            "ICA8eG1wOk1vZGlmeURhdGU+MjAxNTowNToxNiAwMzowNToyNDwveG1wOk1vZGlmeURhdGU+CiAg" +
            "ICAgICAgIDx4bXA6Q3JlYXRvclRvb2w+UGl4ZWxtYXRvciAzLjIuMTwveG1wOkNyZWF0b3JUb29s" +
            "PgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4K8KWp" +
            "6wAAQABJREFUeAHsvQlgFMeV/1/dMyNpdI3uGx0ggSRuEGBuxGUQGDAGfMbGxg6HgY2za+/m2A27" +
            "6032l+QfZ8UhWNtr59zESZzYa0JsY4yNMdhg7lvilpBA9zkjjab7/3rEYCFG0tzT3fPtZDwz3VWv" +
            "3vvUoH5d9eoVYzhAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARA" +
            "AARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARA" +
            "AARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARA" +
            "AARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARA" +
            "AARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARA" +
            "AARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARA" +
            "AARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARA" +
            "AARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARA" +
            "AARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARA" +
            "AARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAAQ8T4DzvEhIBAH3CWzb" +
            "tm0Ix3G6jIyMa0VFRU3uS4QEEAABEACB7gTgAHSngc9+J1CyZcsjjOMWhYToC/V6fVJCYiK7cPbM" +
            "9DXr13/qd+WgAAiAAAioiAAcABV1ppJNKSkpyRQswgtajTZ1/IRx8RkZmdNEJrJbt26xfXs/ec9k" +
            "7li7cePGciXbCN1BAARAQE4EtHJSBroEJoHtxdtHCoLlXyIiIy48/vjjOTzPj7CRiImJYYe+PBRq" +
            "ae6cQud+ZzuPdxAAARAAAfcIwAFwjx9qu0mgZHPJZIG3bEpMSDq4dNnSDSTO0FOkPiS4vLWFy+l5" +
            "Ht9BAARAAARcJwAHwHV2qOkmAZrvf5Ax4bv5Q4cemT59+vd7E6cPCzOzmprY3q7jPAiAAAiAgPME" +
            "4AA4zww13CTws5/9TB8SFLRe5LiXCmfOPJqbm/vNvkRGRkQmiYxd76sMroEACIAACDhHAA6Ac7xQ" +
            "2k0CW7duzeZE7kWdTmNevnx5tSE6ek5/InmeEyhaVdNfOVwHARAAARBwnAAcAMdZoaSbBGht/31M" +
            "YN+LjY89v2LFimdJ3D3z/faa0Gi1epGGC+xdwzkQAAEQAAHXCMABcI0bajlJQJrvFwXxO/n5Q49N" +
            "L5z+985U14foB9CSwGvO1EFZEAABEACBvgnAAeibD666SaD7fP+MGTP25eXnP+esSJoCEDnG6Zyt" +
            "h/IgAAIgAAK9E4AD0DsbXHGTQPf5/oeWLbsYHRNDUf/OH8HBISGMEyOcr4kaIAACIAACvRHge7uA" +
            "8yDgDgFpvp+e21+h+f7mZ7/5zYV085/gqjxDlCGTkgImv/LKK1GuykA9EAABEACBuwlgBOBuHvjm" +
            "AQI95vufJZEOBfv11rTBQNU5Nkiv0WdQmYbeyuE8CIAACICA4wTgADjOCiX7IeCJ+X57TYTQDICG" +
            "5z8XBDGbrh+3VwbnQAAEQAAEnCMAB8A5XijdC4Hu8/1LH1p2NCbWtfn+XsSzSEOUqb6uXhoBwAEC" +
            "IAACIOABAnAAPAAx0EX0WN8/m3iM9DQTXZCukePEeE/LhTwQAAEQCFQCcAACtec9ZLdtvn/w4JzP" +
            "Z82Z8yyJdWu+vze1QmkagJIIhfd2HedBAARAAAScIwAHwDleKH2bQPf5/qlTpu0aNmLY33kTTkSk" +
            "IZkCASu82QZkgwAIgEAgEYADEEi97SFb7cz3f8NDonsVQ4mARXIAsGy1V0K4AAIgAALOEYAD4Byv" +
            "gC9tm+83REUee+zxxx8gIB6f77cHmddoQu2dxzkQAAEQAAHXCMABcI1bQNayzfdnZWXunldUtIEg" +
            "eGW+3x5cWgo4gM5fsncN50AABEAABJwnAAfAeWYBV0Oa7w/WBT9PCfn/8b6JE/84evTo7/gaAk9L" +
            "AESGKQBfc0d7IAAC6iUAB0C9fesRy2jIfyAniC9pddrOxUse/DQ+IX6NRwQ7KYTnebr/M2wI5CQ3" +
            "FAcBEACB3gggqKo3MjjPthdvH0lb+P400hBZS/n8p9DNf6m/sERERuZS29HFxcXB/tIB7YIACICA" +
            "mgjAAVBTb3rQlpLNJZMFjeWnSYlJpx974onnSbRPgv16MyE6OprROoA8Hacr6K0MzoMACIAACDhO" +
            "gHO8KEoGCgEp2I923/lu3rChR6ZPn/5NudhdsnXrcxQGMIF2GXzTLJoPb9y4sV0uukEPEAABEFAa" +
            "ATgASusxL+prC/ajNfcvFc6aeSw3N3eOF5tzRXQhOQHZjONfouGAcySgnl5m+hELdoWJdF5kZgod" +
            "bBFFrlrkxCsai+ai0WK8+sILL2BXQbvQcBIEQCBQCMABCJSe7sdOKbkPhdn9gxTs99Dy5TNpyD2v" +
            "nyr+uPwLavTKjRs3Ym7dvBlnNJr0oijwIt3dbcq0trRcN5stbdJ3UbTwFlHUdnZ26s0dZoPJ2BZr" +
            "NJlGklNwkZIKVTKRa2ac2EHvYtciA5uUHu9wJHoAwVcQAAE1ELjzh1MNxsAG1whYk/uI4ndj4+Iu" +
            "rFix4lmS0u/6/vb29usV5eWnKm7caLhZedNkNBnDW1uaOyUNaM2+EB4e2REbHyukpaVFpqen5wUH" +
            "Bw9zTTvP1jKZTKyxsZG1tbUxcgqYRbAws9l83WKxGLu31Nbaet72ndYfcrV1tZccdiTgMNjQ4R0E" +
            "QEDGBOAAyLhzfKEa3fyX0ED5d/Lz849PL5xOc+y9H9JN/+Tx41+cOnWKHr5Ni+hJ+iT9gMpEJl5j" +
            "Il/JcYJ1WF0U+SjGCckc49Jp7R4N2bPhOm3QH4YOHRo0pmBMITkDUlIfRR/dHYm21rZrnZ1mozQS" +
            "QVyuWzotRnIsNE0NDTWtbcbgjo6OpNbWlvyeIw+cyDoxRaHonwGUBwFFE4ADoOjuc1357vP9Mwpn" +
            "fJaXn0+Bf/YPejq+tuejjz4tKyuTUv/+jW7qn/IW/rCZmc9RIF6T/VpdZ2nZXqSO6XIFjVBAP7Zp" +
            "dMObn5qa9sbCRQsfpLX96X3VVdM1m8PQ2tJKgwst1wRB4Frb2ipo9KG9paWltbmpWbAzRSFtgdxK" +
            "fkUzsbiFGAY1/SJgCwj4nwAcAP/3gc816D7fv3TZsoKYmJgJvSlx+tSpX3766acrOIG9RrF2f1q7" +
            "YcPe3so6cr5k8+YZIqdZRjP035w6fdr2YcOGPUn1+p1ycES2GsrYHIX6uvrTHeYOTUN9wyVyEoKq" +
            "q6vr7Iwk2HUQuGDuyurVqxvVwAM2gAAIeI8AHADvsZWl5B7z/XQjZhm9KHr87T++vfPmzZvT6cnz" +
            "588///wfeynn0mlyQh6lIfCXBqSl/n7h4sWPkBC/5hlwyQg/VOruIFDcRTuNHFTRqEJrY1Oj2NTQ" +
            "qKeph/toyqWUVLtOwY2VNC1RwTP+MoU5lsEx8EOHoUkQkDEBOAAy7hxPq2bdzIfx/3R7vn8Fybf7" +
            "5F1XV/ch3fzP0hNouFYUfr56w4aTntZFkreteNtUWqK3KTQ89O2nnnpKij+AE+AmaFObqamm5tZF" +
            "6sOmuvp6EzlwDS3NrZEdHe0F9hwDUSOWtra2XnzxxRdb3Wwa1UEABBRGAA6AwjrMFXWl+f6QoKD1" +
            "jONemjFjxr6+5vsvXby46/33359ET48/oif/rfTk3+JKm47W2b55c4HA8/+hDw19b+XKlauoHpwA" +
            "R+E5Uc5oNLLa6uqjkmNQXVNTX1NT097Y0KC3WARpxOAsiSqjPr9IIwUXLJzlXEJCwjlaEWJxogkU" +
            "BQEQUBgBOAAK6zBn1ZXm++mP+os6ncb8EM33R/cx33/p4qVd7//tb/mUCOh7a59//jfOtuVq+S1b" +
            "toyh3f5+FBoW9i5GAlyl6Fo9WsFQfvNm1ZXKysq68vKK5ob6ugiLIIyl6Znj5BicEAXupMiLZ0h6" +
            "mbedQdcsQC0QAAFXCcABcJWcAupZ5/sF9j1aj3+enuZmk8q9Pl03Nzef+fWvfj2A/uivo+PXrpi3" +
            "o7h4kMjzqaKo0VP9lk7WeXnDhg03HJFlHQngNP9vQFrKhxQT8E9Ux+70hCOyUMY9ArQqofxGeXn5" +
            "latXa6pv3gppamkeRQ7BGUq3VIpRAvfYojYIyIkAHAA59YYHdema7+e+M3hwzuez5sxZSaL7uqE2" +
            "/s9rr/13e7u5ad36dS87qgY9ucdyHDeJE0XaoIcfRZH9+VQ3MzQs9IixzTiClgvS0LL4Bb3vpWC0" +
            "3evXr6/tS7Y1JkDD/mvK1Cn7hw8fvr6vsrjmOwJS4OHNqpvHKqsqa25UVDTWVFfrbKMElCPpGMeE" +
            "45xWe3TNmjVS8CEOEAABhRCAA6CQjnJUze7z/VOnTNs1bMSwb/RXl5b5/eepk6eGUAT5alrXX91f" +
            "+ZKSkkwmCA/S+vRFuiBt54C0NHPmwIEDkpKShkVERDBa388oax5raGhg165eKy29cKGunuaeBY79" +
            "moaRf9mXfJqyeJieNt949pvPHdbpdFP7Kotr/iMgjRhdu3Kl9OLly803b1SGdQrCMHIE95NDcIAC" +
            "O7/SaDQnaCmi2X8aomUQAIH+CMAB6I+Qgq53n+9f+tCywTGxMf1u5kMpcT//xRtvDuFE/vG1G9a+" +
            "35e5mzZt4uPj45+mH80zoSGhZydPnZyWnZNzf191bNeuXr16c+/He79sa225wmk0P1u7du0V27We" +
            "71u3bP1pSnJS6JKlS9f2vIbv8iRQV1t77tz58+evXLrCNzY1TKSET4dp9Oco/VaOYXRAnn0GrUAA" +
            "DoBKfgPOzPd3N/lXv/rVj1ubmwUK+vtO9/M9P1uf+juFv9cEaQ2zZs2OGzho4PyeZfr7TtMA7P1d" +
            "u966fOUKPeSzH9BogBR9fs9hDQpk3O9XPPJwXWxs7Ph7CuCErAnQlEHT9atXT1+6fKWuovy62N5h" +
            "JgcTowOy7jQoF5AE4ACooNtt8/1ZWZm75xUVrSOT+prvv2Mx7aj35z/98U9DeUGzYs3GNcfvXOjx" +
            "gUYW8uiH8q/Z2dkhs+fMmUbz/g7J7yHmztcP/vbBby5eKgvieP6l3kYCaNvfH6XS8cDixf1OYdwR" +
            "jA+yJFBfX19x4cKFM1cuXxZpGeIYjA7IspugVAASgAOg4E6/k8+fZ/9438SJfxw9evQaZ8z5/e9+" +
            "v6W+rraRnv6/31s9ehrPoCV6PyHZ6dRGrymDe6vf2/k/v/32jps3qsyxifHfsrfevGRzyUyRE/66" +
            "es0aE6/h3XI4etMB531PQAoopNGBAxgd8D17tAgCPQloe57Ad2UQoCH/gZwgvqTVaTsXL3nw0/iE" +
            "eKdu/vSH+FR9bd1jFJgnbfDT68Ez9vd5eXkpnrz5S40tefDBR15/9dW/UI77Z+jrqz0VCAoNOtRu" +
            "bN9/8dJFc46DcQY9ZeC7/AjQVtEsZ8iQifSyKnd7dCCVRgceotGB/7CYOw9v27IFsQPy6zpopEIC" +
            "GAFQYKduL94+0sJbfhBliDz72BNPLCATRjprxoH9B3557NixIFr292hvdcnJeCIiPPzJx594Yg4N" +
            "+/dWzOXz5devf/J/7/5fqEYUnqR0w+d6Ctq2ZduPs7IyMmhaQ0pbjEPlBGyjA7TrZAUlJgqRYgeY" +
            "KHwmctx+jUVzgKappIREOEAABDxEACMAHgLpKzFSsJ8gWv41PS3t1MJFi56ndl0aHi+7WBZMqX4/" +
            "7U3v119/PaLDaHr0vgkTk7xx85faTRswYHpCYsL/3LpZ/Th9/eeeutD68pN0La/neXxXJ4GeowO3" +
            "VxbElJWWLaAtlL+/bevWT8kN/ZwcgsNYZqjO3wCs8i0BOAC+5e1Wa9u3bJkmCuK/5+UPPT+9cPq3" +
            "XRVG28syyvZWRDf2n/cmw2w0TtXpgvTZg7OH91bGE+fnzZ8/95dv/kJLgYZ7aFXAx91lChx3rrWt" +
            "dXJ7ezsLDg7ufgmfA4BATGxs7qRJk6QXa2xsrKBVhkk0VfBgbW3ty5gqCIAfAEz0OgE4AF5H7JkG" +
            "6AY5SqCn5IkTJ7JRo0dLO+e5fNy6desIE0WLIIq9Zm6jtiakDUgzudyIgxXDwsLShg0b+ruTp04/" +
            "QXkG9tGrs1vV6/S5jBIK5SUmJoZ3O4+PAUbAYDCkjh8/XnoxaZnh5cuXtVcuXcopv16e22kRXqa4" +
            "AUwVBNhvAua6TwAOgPsMfSJBp9U+OmLkyKF08092t8GGuoYGGkpt7i01r5Twh1L7jsnIyop2ty1H" +
            "6k+eOnX+qdOnQ5Pi4t6l8u/Y6oSGhjaYWtuqmxubQ8gB8OpIhK1NvMufAE0VRFJg6mx6WZWlnQ13" +
            "nzp5UigtLZ1O+098n2JHPqHprX2IG5B/X0JD/xKAA+Bf/g61/sorr0RRMN5sysLn9s1farC5pbmR" +
            "Urb2us1vUkxSrsgso2gZvkvxBQ4Z1a0QpQ42DBs69HfkBDxAzsdO2ygARYhz+qBgs0W0eD4CsVv7" +
            "+KhsAnFxcbNnFBYy6UVTBWdPHj+pKy09P8fU3g5nQNldC+29TAAOgJcBe0L8Cy+80LB92/ajzU1N" +
            "CSQvzV2ZlPNfIzKx1zztIt85hNfqjlJe/z6XCLqrR/f6BePHTyYHQE9Ozlt0/gPpmlarjaW38KCg" +
            "IIv0HQcI9EeApgrypkybIr3gDPQHC9cDngAN9eJQAgHBIrx74MCBTsqpv9Pr+nJcpsEQ6fX5/+52" +
            "6PX6AbTefxdHGwwVFxdbnRwdpxtMEd/pUVFRcd3L4jMIOELgtjPw2NOrVj382OOPG2mHSZ0+OHiO" +
            "oLHspGmCNymuZhUtqZV2sMQBAgFJQBOQVivQ6J27dp5fWFTUSPOcy8PDww/Tk/JAV824UXHjTFVl" +
            "lWXnX3f+2Z6MhQsWLI6IjOTz8/PH2rvurXMpKSkxx44eHc0zzc2ihUVh1M5kjhPPTp02baG32oTc" +
            "wCBAcQPx6Rnpw0ePGTNs8ODBlZSO+FZTY0O2WTC/tKBo4eiiBUWxi+Ytan9v13v97oYZGMRgZSAQ" +
            "wBSAgnqZUvZKTy21e/d8/M8mo3Ef/TFzabtcWlLXzjExslfTBRYeGRGh7/W6ly6E0CjAuHEFaw4f" +
            "OvwsE7lDpOOo/Lxh273UHMQGKAFMEwRox8PsewgguOoeJPI/QXnyJ1OU87+NmzAuuKCgYLKzGldU" +
            "VBx59y/vWAQmzre3EqBky9btw0aMSJ0ydYo/nrzf2bFly8sCz++jZYozKTeAlDP2DWdtRHkQcJbA" +
            "7QDCoxRAqDGZ2sczju2hP5AfM57fS5tWVTgrD+VBQO4EEAMg9x6yo9/aDWv386LlHw99cajl0JeH" +
            "PrdTpM9TFDUdzzgul6Lvc+wW5Bjt/0ODpP45Fq9ev75GHxoaTc7JAVJhhn/UQKuBRqB7zMDDjzxS" +
            "ljskj6OMg4soY8afaHfKf7ZuuR1oUGCvqglgBEDB3Us79Y3hGf/D0WNHa+67777Zzpjy5v/8z6/a" +
            "TKaD9IS9rWc9CpB6dcTI4YmTp0zx2SqAHjr8F2Up/JZ0ThTFK/SWIX3GAQL+IHDt2rVPTxw71nC9" +
            "vHwS/SA/oMDUvfS7/Jwc1NP+0AdtgoCnCGAEwFMk/SCH/gAdEZjw3aNfHbV89NFHbzqjwqDs7FaK" +
            "uHcphsCZdlwsu1KqR39kZ9Abbv4SDBx+I5Cenj6N9t1Y9PQzzwRNnDQpLTYmdhkNkb2HlQR+6xI0" +
            "7CECGAHwEEh/iikpLhkt8uKPBucOrpw1a9ZKR3RpbW3d9as3fzlBFNiSdRvX7eteh4Y7/3v4iBFJ" +
            "fhwBkNR5ml4z6PUUvXCAgKwI3N6b4PS5s+don6KWUYgXkFX3QBkHCcABcBCU3Iu54gT85le/+nFT" +
            "U5Nl3fr13+1uHz3Z7KAlgFG04ZA/t+E9SzphJ8DuHePkZ2l7XbpRsba2NmbuMDNKAEXDKpIQ63/6" +
            "kEZ/Fuj/Gl7DdEE6RimZGc2PM2m3Phz3Emisrz974sSJ4+fOneM7Oy0ZFD+zk6YJPly3bt3Be0vj" +
            "DAjIhwAcAPn0hduaOOsE3LhxY/M7f/7LfJFjT1EswJ1gwpLNWzcnD0gVFi9evNFtpVwUQMP/FKcY" +
            "2D/P7jfwlubmc4IgcMSFM5pM1wWLpc2GllLe1hpbW+ssoqjt7OzU083e0NHRkUSPpvl0r79IN3Na" +
            "9841M07soHe6NxHcPg5qgqOyFAbKBdF7BMlIJhmDNJzmQGSUwUhOQSNlaTRqOK6T4zS0b1TXERVt" +
            "kFZs3HWEhoVZz0k9Sf0pBgUHx5IjEadWp8JevADtSbB/zcY1Z+4Cgy8gIAMCgf0XVgYd4GkVnHQC" +
            "Gt98/fUftZnaUzie20RPLPWUhS9Yy2v/PSklKeLBBx9c42n9nJFHWxYznU6nyq2ApZs77Xdf2tTU" +
            "3NFuMra3tLZWdFos2qaGhprWNmOw0zdwkdGqTmZmPGuhG3g13eev0I3notFivCqlknaGe8+y0l4U" +
            "eo0+w6KxDCK/IJPu4/HUWjg5BTp6ORRH1JtToQ8JOR6iD62VnAop94ReHxolrUDRaLV6ujaAVqqI" +
            "dC42IjIiXkmjENKOhefOnj124vjJGnLERhMnLCns+cPCd78TgAPg9y7wvAI2J4CCl04ueGCBtHVw" +
            "r5v6GI3GbW/+zxtP0fPeC8HtwX8y68160WL5Znx84oBlK5Y97XntHJdopKFr2vud0ZJARtsGK2oI" +
            "uvsNvr6hvpSeyoNo17pyurFHNTU06mmDo4ndn87ppmqim2q7N27gjhP3Xcn+nApHHAZazppG0xQW" +
            "SmwVExISHBMcHBJiiDJQGmt5TVfYmyKg0ZoPKIj3C98RR0sgcC8BOAD3MlHFGZsTkJic+OXSpUul" +
            "ofxenYCDBw+uO/rVkado9f8WzmIpp8QnswWBGdetX/eyv2GcPUMjp/RIGEZOAA0ns5iYGFLPoYdO" +
            "r6su3eTJQSmlTZo66P1Sm9Eo1tbUmuiJL5Ju9AXdbvCNdINvpZtaMyl1y5NP5143UiYN9OUwkPOq" +
            "7TldERYWfoY2kaqKjY2h9P8hGhpBSNKH6IPJQYiNjo5O8lc8w9XLV3ceOvRFbXV1zTwaFfgb/bY/" +
            "pKmRj5FoSCY/tABTAw6AijvcCSfg6m9/+9u/a6pv2EAz75R8RxhIa/B2rl2//jf+xlNeXs4uXbzI" +
            "aBiYRgFCGe2DwFLT0hglaPGZatKNvqa6poye5Btqa2pqa2vqjC3NTeFtJuMoUqKMXjfoBlRH7/X0" +
            "qsINnij46ejpKJAaCeR8RZDzFUbxDAZbPAM5B4fJSWiKjYsNCdXrOXIKEiMjDLq4hLjRvnAO2lrb" +
            "yo8fP3747JmzIs0BJdG/u79yAvfB2o1rv/QTOjQbgATgAKi80x11Aupqavb/6he/+dfgEN2vKEIs" +
            "iEYDBtFTyVHCk+FvRBSoaI0FCCUHQAoek0YBsgYO9IoTIP1hrq6+VUPpkq9V3bzZQU/3kRRFP4YY" +
            "XKDXdbrRV1IgXgUlYLpM8+Flnphj9zffQGrfjoOQRPZHk3MQQ+8p9Mq2BTtGGSIZbYql97ZzcOXK" +
            "lX1HjxypullZNZEiKj+gkYHdQWbznue+9a2bgdQ3sNX3BOAA+J65z1t0xAmgIWtWeu7C2395652N" +
            "MakxbVJAIN3o9pKy032ucI8GD335JTt96rT15t/lBIQxmv9lQ4cNdcsJkG72N29WXamsrKy7UVHR" +
            "VFdfH27ptEyiP8DSEsQyGgW5xES+lHIslFLU++XVq1c39lANX1VEwBnnQBo5iIiICI0yGJINhqjY" +
            "6Bj3pxUo6LX86FdffUbLCbUUEBpJzua7nIbbSY74FRVhhikyIgAHQEad4U1VejgBi6itkT3bo6de" +
            "RjfDjzVG48Njpk2rJgfg51Tm73qW8/V3aQi++Oc/JwcgzDoNIE0HSI5AYmIiKygYxzTa/qcD6Cm+" +
            "6WZV1Yn+bvZMw85TkqSLL774Yquv7UR78iXgiHMQHhZxigIQW+LiY4XU1NT0+PiEOPqdprliFTkB" +
            "H5LjW9fS3GKgIJj3KDh0Nznl512RhTog0BsBOAC9kVHheZsTQMPof33q6aeeIRPvcgJoRQC7cP4C" +
            "JY5pLY2OiHgqd/jw+6nMD+SA4ne//V8mBQTqQ/VfOwI0HZCcnMymTpvG6An9jpqSw1BdXV1GDs0V" +
            "ynXQUF9br+/oaB/X88keN/s7yPDBDQKSc0AxBZk0h5/DOIFe3EASl03xBnkaDX/QEBVlpBGr4Oio" +
            "mOCEhLik2Pj40bTe0aEWy8rKTn704e4hgih8SFk792qYsHfNhg2HHaqMQiDQDwE4AP0AUtvlLidA" +
            "+CE9Te+y5wRcpIC7qsoq1tba2hasD/lo2rRp/toQ6C70165eZT98+T+sywGlOICupYFSTEAYS0lN" +
            "MQ7JzS2judRbN29Uik0tzaM4kZ2h6PBS2zA+bvZ34cQXLxP4yU9+QitXwwZxFi6H9uvIokj/VIoz" +
            "SKZmB5BjkB0UHHSYYguMNIoVlJScHJMQl5AZYYhItacWJXdilGDo1p7dH+lFUdhD39+jWIE/0zLC" +
            "WnvlcQ4EHCUAB8BRUioqJzkBjBdepgQsH618ZuWTZNqdkQDKa84orSlrbm5mzU3N7KHly2Rj+b98" +
            "7/vs8uXLjJ62zAPS0y/GxsWd0mq0nZTadg4peYhWCx4TBe4kzdlLWdfKKLthi2yUhyIgQAR27Nhh" +
            "ENvFTEqqlENBpDm0QiGLVigMot9wjlajOR5hMJji42JjwiMiQw2GyGQKQsyQRgukhFg0Jcfe/uOf" +
            "xPCI8LPGVtPPn3z6yVcBFQTcIQAHwB16Cq67Y/Pm4Rae3xQSHHz06VWrpLv8HSfg9OnT7EZ5BZMy" +
            "8U2cPIklJUmB0v4/Si9cYJ/t3//9Z5555j+2bt1KT/mctEzx9/T+UUh4yFdPP/20yf9aQgMQcI6A" +
            "NFpAy1vJERCz6ZVBv+cEaVUC3e9jyKmN1+loeoHjDFqeDwrR6zXk+Orp36RxQPqAf4+KivqRc62h" +
            "NAh8TQAOwNcsAu7Ttm3bpPX+L+q0Wsvy5ctnGqKjrZvv0AZB7MuDX5AD0MyGjRjBsrOz5cTmF6+/" +
            "8sq3zUEhpbRc8TuUrOi/5aQcdAEBTxF4a9NbQbWJtSmiWRwgasREXhQj6TfP08qUxtGjR3P3Tb7v" +
            "FjkGez3VHuQEHgE4AIHX53dZ/LOf/UwfEhS0ngKXXiqcOfNobm6uNJzOjh87Zh1upycMNqOw8K46" +
            "/v7y0Ucfzb1w7sLPKeHOc903MfK3XmgfBEAABJREQB45VZVETGW6fvvb36aUv+t/QhvEffPjPXti" +
            "jh09+qlk4pAhQ8gn4NjNm7dkZzEFJj5JQ6QDNSJtSoMDBEAABEDAJQJwAFzCpr5KlPb3zzS8+K0D" +
            "nx/sPHz48H6aa2TpGRnMQhHIUkCgnA4KiHoiIT7+5wLjraMVctINuoAACICAUgjAAVBKT/lATxpO" +
            "/4wXLf9ICUhaJSfANgogNwdAQrF4yZLJFDn9DAUDymeZgg/6CE2AAAiAgKcI9J9CzVMtQY4iCLy3" +
            "a9eNB+bPP1dRUVkYGqq/HknLkCgnAEtJkdKky+fgNZqM4KDgV69fu75k0fx5h0hv+c1VyAcXNAEB" +
            "EACBewhgBOAeJDhhzTQmsE0HPj8QyXPcr+tqpY3u5HeMGDViHSVS+aST478lLaWSn4bQCARAAATk" +
            "SwAOgHz7xq+ardu4bh9l0vvx4cNfPUJP27/3qzJ9NL502dIFQUG61jC9fl0fxXAJBEAABECgBwE4" +
            "AD2A4OvXBCgm4H8pf/5r5devffH1Wdl9GvngkqUp0jLGki1bHpSddlAIBEAABGRKAA6ATDtGLmrR" +
            "yoB32ozGnwiCcEIuOvXUIzY+9qHx48a9KTLuO5Tc6L6e1/EdBEAABEDgXgJwAO5lgjPdCISEhOyn" +
            "fck/uXD+fFm307L7OHbcuH/IysrczQT2PVoZIKvUhbKDBYVAAARAgAjAAcDPoE8Cq1atkpIAHCor" +
            "LZX9xjrziorW0WjAecql/qKU4bBPw3ARBEAABAKcAByAAP8BOGI+x4QjlTcqIxwp6+cyhhUrVszW" +
            "6TRma3pjPyuD5kEABEBAzgTgAMi5d2SiG6fVHu0UhGF1tbXnZKJSX2qMlDY2QlBgX4hwDQRAAAQw" +
            "BYDfgAME1qxZU0p7Bew/d/78eQeK+72ItKuhtLGRyHFSPMAUvysEBUAABEBAhgQwAiDDTpGjShRh" +
            "f+BiaWmnHHWzp5O0q+G48eOrKR7gX7dv3lxgrwzOgQAIgEAgE4ADEMi974ztPPuqpbV1uslkanKm" +
            "mj/LFhQUzMvNHXxF4DQvlxSXjPanLmgbBEAABORGAA6A3HpEpvpoNJoTTGSHL1++/KVMVbSrVuGs" +
            "Wc8MGpR1UdQI/7Fj8+bhdgvhJAiAAAgEIAE4AAHY6a6YvHr1ajPtvnf0yqVLDa7U92edufPmPZ6Y" +
            "kHTUwvObKFHQQH/qgrZBAARAQC4E4ADIpScUoAfH2LHy6+VK3EHSQHsGPB8SHHyUE8SXkCNAAT82" +
            "qAgCIOB1AnAAvI5YPQ3YlgPW1NTsVqBVhqdXrVqm1Wk7g3XBzytQf6gMAiAAAh4lAAfAozjVLUxa" +
            "DshE4bOzZ89WK9TSkYuXPJjMcexFWh74gEJtgNogAAIg4BECNKqLAwQcJ0A3zlX64OA59DT9sOO1" +
            "5FXy+PHjvznw2f4BTMM/v3bt2lNy0G7Tpk18UkxSLuM7cywcl0p5F8IoTUcbJeuu0FgsF5tMpksv" +
            "vvhiqxx0hQ4gAALqIAAHQB396DMrthdvzxc0lp2PPf640WAw5PmsYQ839H/vvvvz8vLyCI1Wu5EC" +
            "HNs8LN4hca+//nqE2WicKjA2gW72YzgmjgrW60tpA6ZGnuNNIhOC21paQzs6OkaJHJOyMJbRP9gy" +
            "SnAkfT6xbt26Sw41hEIgAAIgYIcAHAA7UHCqbwLbtmx7c/jw4bop06Y81ndJWV9tfHXHq7+xWMxl" +
            "a59//hVfa0qrEZ6ggMRHdTqdPm1AmmlQdk5ucnJSVlh4+D2qGNvaWHV1zcWbdFRW3qivuVWtJacg" +
            "g3FsnyhwezVBmo/Jiam8pyJOgAAIgEAfBOAA9AEHl+wTUMM0gGSZFMz4h9+/lcOJwsq1GzbstW+t" +
            "Z89KyxA5i/gCr9PGT540MWTo8OGLXWmhlvZlOH3y9PHSsgshHe3mOMaEd2gk4Z3169dfcEUe6oAA" +
            "CAQeATgAgdfnbltsnQbgLe898ugjt6JjYmj4WrnH3j17f3r23JkBwSEhz93e+thrxpDjNI5SE38/" +
            "KSnpxpKlS+ZzHJfhicauXLmy74sDX1TU1dXRlIzwlkYU3169YYMSNm7yhPmQAQIg4CIBJa7pdtFU" +
            "VPMUgfd2vVddVLRghKXTXJ01cKCiU+xmZmUOPX7s2DFze3v8zr/+9bCnGPWUQzf/uXTz/9HI0SPb" +
            "5t4/9wm6+Uf1LOPq96ioqIxhw4cNy8jMEJsamzVNzc3PLSgqil40f371e7t21bgqF/VAAATUTQAO" +
            "gLr712vWPbBgQURDQ8PwsQUFQ73WiG8Eh0RGRBy5eOnK/Yvm3f8x3TDrPd0s3fyXcSL7f1OnTmsc" +
            "WzB2nqfl2+SFhYVFDMkdMjhzYJalsaFJC0fARgbvIAAC9gggD4A9KjjXPwGe39vZacm4du3ap/0X" +
            "lneJ7MGDlwcFafcLGs1yT2sq3fwpov//K1q4IGjYiGGFnpZvT15cXFzKoiWLFi57eEVsfHx8HqVA" +
            "/n3J1q3/tKO4eJC98jgHAiAQmAQQAxCY/e4Rq2k1wL8kJyfn03y2YnMC2ECQI/Obne+9N1wjCA97" +
            "av58y5Yts3jG/de8ovmdWVlZI21t+fq9qqrq8Pu73j/U1tY2lmPCm0F6/a+9He/gaxvRHgiAgPME" +
            "MALgPDPUsBHg2QeVVTdmKWmLYJvqPd/T09MfDw0N20dJeJb2vObKdylQUsO470yZMrnanzd/SXcK" +
            "Oix46umn1s6ZM+uENihobLvJ9CqNTPhkNMIVdqgDAiDgGwKIAfANZ1W2snPnznIKNhulCwqqSUlJ" +
            "yVa6kTRcXnXh3PmpFDwnxQK4HDwnbTak0Wr+LTc3j5sw8b4iuXCJiY0dM2bs2NjW5tYDNdXV3y9a" +
            "sEC3dPbSs+++/65RLjpCDxAAAd8RwAiA71irsiXKSrf3zKkzfsmk52mgqampi/RhYZ+6OwoQEhS0" +
            "OiIyXF84q/AhT+voAXkZM2bO+IeHH33kXLBOl2IOat+B0QAPUIUIEFAgATgACuw0OamssWj2t7a2" +
            "jG6srz8rJ71c1WX2nNkDOMY9smPz5lxXZJRsLpnMGLdhflHRWFfq+6pOTEzMnFXPPbdySH7eZVqe" +
            "+CYFCb6wY8eOUF+1j3ZAAAT8TwAOgP/7QNEarNm45gylpN1z5MixA4o25Lby0ihApCHqS1dHAURO" +
            "XDl06LBDdIN1yYHwMUNDYWHhi8sfXn5Bo9FlWzo7i0tKSob5WAc0BwIg4CcCcAD8BF5VzQrcntKy" +
            "0giyqVENds2aPXOkK6MAlOZ3AS2reXLy1MnzBEFg3V+iKMoWDS0bnP3c6ucez8oc2MksAs0IYKtk" +
            "2XYWFAMBDxKAA+BBmIEqStqMxmLpTC0rK3tfDQwSKWo+Ni7+WCfPOzeHL7BFtNb/A7rxGwSLwCwW" +
            "i/VlcwSk79JnmR6GeUXzVk+dNrWekha9tnXz1n+QghllqivUAgEQ8AABOAAegBjoIqw70YniXz7/" +
            "7DOPZ9HzF9vCmTPG09z4YxQLMNwRHeipeRzjxAeGDhs2mobS6UHazs2fnAIZOwBWM6XNiR557NFa" +
            "yio4RB8U/ArZpfjVHY70H8qAQCASgAMQiL3uBZtpA5r/a21tm0I71notn74X1O5VZFx8/JD0zPQz" +
            "As87uuXx3MSEhP1BOl2qhZ7ybU/70g3f9llyCkRBvlMBNhjR0dF5lDdgeVp6ehA5Qa/Q1MZ9tmt4" +
            "BwEQUA8BOADq6Uu/WiJlz+M49vbBAwdVsx3tzJkzJ9Dt+ll6Cp7bF1zK+BfLi2zukLy8lLtu/ren" +
            "AXo6AX3JktE1w8IHFj49fPjwJiaw/yInYImMdIMqIAACHiAAB8ADECGiiwAnirtu3KiYazQar6uB" +
            "iV6vHzBu/PiPKbDv2eLi4sjebKKd/cZxGt5MyZAmSXP/0g1fkOb/6Ym/+81fuibnYEB79k2ZNuUx" +
            "ymfQyATxvyn187dpqaDOXjmcAwEQUB4BOADK6zPZarxm/foDTOR2fXnw4N9kq6STihUUFMzVaYMa" +
            "NRrNE71VJcdneFSkoc0a+Cfd9K03/y5HwDr8LzkF3RyC3uTI9Xxubu6cZcuX7dMFaXMsZvN/vvaz" +
            "12Lkqiv0AgEQcJwAHADHWaGkIwRof4DzF0qlp2VVLAkkOwxz581NoiH+VTQVkGcXAccNiY2Pi7Q+" +
            "8fe8+UujAVJAYLdYALsyZH4yPiFh6VMrV04OCgoROoJM38NIgMw7DOqBgAME4AA4AAlFHCdAT8of" +
            "0ZLAAefPn/+T47XkXZI2CloYHRvzOQXE3TMKIM3/iwIbTIl/MmxP/tJTvy3wr/s523SAvK3tXTud" +
            "Tjf8yZVP3k97P4RazJYNvZfEFRAAASUQgAOghF5SkI62JYFfHDhgVpDa/ar6wKJFY2iZ3zdLtmxZ" +
            "2L0wL/D5nZ3mYeQAZEpP+XdiAO7EAXy9CkByBjo6OrpXV9xnyQlYvHhxAmPiPxKLBxVnABQGARC4" +
            "QwAOwB0U+OApApTq5p3WtraJFRUV73pKpr/lhIaGTho2fPh/0+ZH36Sn/qE2fUSNOMZgiNrHazTW" +
            "eX5puP/rIMBuDgHd/K3nb08F2Oor8V2aDphROGM/sfge7X0wU4k2QGcQAAHatQQQQMAbBLZt2fJd" +
            "gyF64GNPPLbKG/L9JPPqG6+98aqx3RhN/3J+T0//QSIvrElOTmajRo16glYD0L8oSiJsVY7epQ+3" +
            "v9uuSZco9S4LDg62llLyfz75+JMfnz1zeiYZvJXx/Idr166tkOyh+ACD2C5mWjSWQTRtkslxYjwt" +
            "JQwXeaaVrnMC62Q8a6GPt2hZxBVO0J6vqqs6t2nTJtmmSZT0xgECaiMAB0BtPSoTe7YXb88XeOEP" +
            "y1Ysa42Pjx8nE7XcVqOtre1Hv3jzF+spo8+rJKyFbvAPU/a/g7SJ0FPSrd/6D4r+Y73hUwHpveuz" +
            "dLLruyEykkUaDG7rIgMBjX/4wx+W1tyqkWIjBnNMrKQ7uIZMTmQiy9HrQ06E6ENrY2KiQ4NDQjQ8" +
            "x1tv8IIo8GazOai2pqauw9Se1NramiUy7hg5CkepwCFaKvn5+vXra2VgH1QAAVUTsP69UrWFMM5v" +
            "BGiL2X9LTkkdtHjJYkez6flNVycabrxw4cL0jz7c/THdzq/xQudTE6ZO/UFYaNiDtid+SZb1xn/H" +
            "IZD+mdEt7rYzQNMJjIbRnWhS1kV/QXat3Llz50Pk2BQaIqPyo6KjBsTGxWZTHgWHFG9taWGVlVWX" +
            "r127VnX16pUOk7GdZhfE9yyUXZIcAdUklnIIBgqBgA8JwAHwIexAa2r7li0TBY57d+XTTxulpDoq" +
            "sv8T2jb3Qb6zM33Nxo3Hvzr01aGw8NACyT7pJk//sd76pY9S4l/bjd96na7odFo2ID1d+qroQ4pp" +
            "qKqqkqY0TgQFBY3wlDHXr127eeSrr47euFGVTI7A73iL5Q+rN2686Cn5kAMCINBFAA4AfgleJUDZ" +
            "436Zn59rml5Y+JxXG/K9cHri5/4iNXvoiy8Oh4aHj5U+W2/90p2/2xN/l0PQdZUKWB2CjIwMcgSU" +
            "n1Tv6tWrTEsBkAmJiR6359atW5UHDxw4UlF+I55jwptBev2vV61a1SyRxAECIOA+AawCcJ8hJPRF" +
            "QH2JgWzW/pzmqqOkL7QCIEVa4idKS/+sSX9upwC2Rvx3LQPsygvQlSVQKtve3m6To+h3fUgILW00" +
            "s/q6OusqB08ak5CQkLxo8eIFi5Ys0oZHRMxoN5leLdm8eYYn24AsEAhkAnAAArn3fWC7LTFQWVnZ" +
            "+z5ozpdNZFBjm6QGNbwm2Zb8504CIMkZsC7967b8z+ogiNasgBT4JlVV/BFJAY2dtP2x0WRijY3e" +
            "Sf5IAZZjnnjyyRXjCgo0Ise/SStMvvXGG2+EKB4eDAABPxOAA+DnDlB787bEQJ9/9lm9Cm39OxoF" +
            "WEJR7danX2siINruV+iUMgF2e/InR6ArSZDkDHSNAhjb2lSBI4QC/SSbJCeghYL5vDmyUTB+/LIV" +
            "jzxs1IeGDid+r2zevDlLFRBhBAj4iQAcAD+BD6RmNRTN3draNuVmVdUeFdr9566n/6+f+Lt2AaQb" +
            "vUhP+1ZHQLrWzSGgkYBmulmq5QgLC2OdZrP1VeeFqYDunGJjY3MpqPShJMq9oOH5n+7YvHl49+v4" +
            "DAIg4DgBjeNFURIEXCPw3q5dNQsXLEiqra0T8vPzR7smRb61pJueNA8uBf7Ztvulez99lf4jvVm/" +
            "WN+lj9avNFIQHhHOKHreWkbJ/5Hsa2hooOBGXop3lGIivJ3oKCQvL6+gsb7xUG1d3aKF8x44u3PX" +
            "ziolM4TuIOAPAhgB8Af1AGyTtszddevWzUVGo/G62synzYK6hvatc/zSk37X075t8x9bfEBXKuDb" +
            "0wA0bdDcrI6AdkNUlNW5kaYBzPRqolgAyWZvH7Pnzn4yf+iwZsrG+MOS4hLVOZbe5gf5IIARAPwG" +
            "fELgvb/+tXxB0cLhHe2mc5lZWdYlcz5p2AeNUJY765A+ZQm887QvNdt9NED6bH3yvz1KYL1GJ6S0" +
            "wGo4JNtN7SZplaN1mSPH88zRREDu2J+RmTGM6t+6UXlj6sJ5C09jJMAdmqgbaAQwAhBoPe5Pe9W7" +
            "JJBlZWVZn/zvfuq3jQTcfuq3bRREIwXSKEFjY5M/e8OjbUupjaURgE4p4JFezU1NPhkFkIwYN37c" +
            "pKFDhzZgJMCjXQphAUAADkAAdLJcTFTxkkAWQqMAAwakWVcDdAX8fb0yQLohdjkGNodAutblFDTR" +
            "jVINB22HbA1ukIIBpWkA6eWtZYH2eE2bMe3hwblDqhgvvIzAQHuEcA4E7iUAB+BeJjjjJQIqXxLI" +
            "0gZI2Y4pZ511WeDtp37p5n97JYA1FsD69N/1lCx9l5bOqeWIoJwAVhvp5m+hVwvFOEiOj6+OWbNm" +
            "rczMyrxu4flNWCLoK+poR8kE4AAoufcUqLualwRqtVqWk5NtvQlKSYCkYX7rk//tp31RcgxujwYI" +
            "tApAut5Qr570CNFR0cxspqd/eknTAe0dHczX+Q7mFRU9QksFr9ESwZeQLEiBfyCgsk8JwAHwKW40" +
            "tnrDhnO0VOztzz7bf0WNNJJTUpi02590g+/uBHR97nIKuqYEukYI1LISQOpL2gGQ/ivSzZ9yAlhH" +
            "ASgWwPcjHIYVDz9cGKTTCcbW1jVq/I3BJhDwFAE4AJ4iCTkOE1DzkkAJwpDcXMr8Rzf720/+tikA" +
            "6b17kKD0mRIkMZPR6DA7uReMoiWBkoNjDQgkR8BPUxwjH1i0KJmmY76FvQPk/ouBfv4kAAfAn/QD" +
            "tO0169cfYCK368jhI5+qEYEUECct75Nu8Nabv+QI0PD/HYfg9nmrQ0A3SzWNAsTExnYFAd6eCuig" +
            "TY+8mR64t98P7U74YF5e/h9Enl/z+uuvR/RWDudBIJAJwAEI5N73p+20JPD0mdNaUsE7O8j40zZq" +
            "Oy8//3bw39cBf9ahf9sogG2EgByDRpWsBJCQx8fHMx3FQlgsFAhIL2kkwF8jHDNmzniOtlxu6TAa" +
            "n/DzzwHNg4AsCcABkGW3qF8p25LASxcvfa5Ga6U4gGwKCLRtFCQ97YvWwL+uVQHdpwJqa2pVhSA6" +
            "Opr2Bei6+UsOgJ+mASSmhjlz5yaJjF+5o7h4kKogwxgQ8AABOAAegAgRzhOwLQk8cODALedrK6PG" +
            "wIGDrDnxramBbz/x34kNkEYCbr/UsjWwrVekQMjO20//nbQzoh8dAJaRkbEgJjamTNBoltv0wzsI" +
            "gEAXATgA+CX4jYC0JJDyxhdUV1ef95sSXmxYF6SzBgSK1jl/6clfivzvygJojQe4HRfQ2qqeXAAS" +
            "zkjKByClAbYFAjY3t1gDA72Iuk/R02dMH0x7MD1KCYJy+yyIiyAQYATgAARYh8vJXNuSwC+++OKM" +
            "nPTypC70BMroCdS6LNCaF8AaA3DbGSCHwJo4h87V1NR4slm/y0pKSuqaBqCpACkWwJ+BjqRLQWpK" +
            "2jULxy31OxgoAAIyIgAHQEadEYiqSEsCr1+7NtVkMqkjJ66dTpQCAm1D/10rAW6PAtCNX4oLkNIC" +
            "2zYOslNdkaekrIjWaQC6+ZspPbC/pzkmTZk0hmPcI1u3bs1TJFAoDQJeIAAHwAtQIdJxArYlgSdP" +
            "njzgeC1llUxISJDmoulm35UJ0PrUL00F2OICaCSg+pa6QiEo+p4lJSXfngbo9HvGQ1qWmZKUnHKG" +
            "EznEAijrnw+09SIBOABehAvRjhGg7PkfnjpxotWx0sosNWzYMMZrNDQc3pUMyOYM2OIC1DYCIPVS" +
            "Gm2O1BUHYGG1tXXWz/7sPdowKJMyFT61bdu22f7UA22DgFwIwAGQS08Esh4azR6TqT21vLz8qFox" +
            "hIWHs8GDB3ctC5Tm/unp37YfgLQawJ9z5N5iLiVDCtIF0Y2/KzWwL3cHtGcTJWiakJiY9GPqhL8v" +
            "2bJlYXFxcaS9cjgHAoFCgAsUQ2GnvAmUbN36z2lpaQULFy1aJG9N3dPuT3/4I82HtzCOI9/79r8+" +
            "jjZHSEpMYrPnznFPuAxrX716lZ06cZIFBQWxrEEDWXZ2tr+1/FeKA/iSZ9zrhP+IyLhqjhM7RJEm" +
            "B+j/dylH4Rm0tYGZ8ayFRmhuMpG/xDTs1Lp16y7dVQ5fQEChBO7+wSvUCKitfAJbtmyZQH+U/+/p" +
            "p58JDgkNUe2T2TW6Ie75aI+1w6QbP/3feiRS1Pz98+YpvyN7WGDuMLMP3n+fcTzHYmPj2IT7JvQo" +
            "4fOvnxD3GUePHh3XYTI9ynh+KMUrZEpahAQHD7ZpQ1M0xvZ283WLaOEbGhquNjc2W+rqarkOc0c6" +
            "RWx+Tt7Cfo1Fc2DNxjWqXcFiY4F39RKAA6DevlWcZdu2bPtlwfiChHHjxt2vOOWdUPiv7+1klVWV" +
            "9GBJ//xuewCSM7DymaedkKKcomdOn2ZlZWXWpEjTp09nIZQjwF+HFGxp7ug4k5KWlu+KDnW1dTdK" +
            "y0pPnz93vqW1pWUUdeEeWsmym9fpdlNyK3Wt5XQFEOooioBGUdpCWVUTWFg0P7yutnbQ6DFjVL1U" +
            "Kyk5mZ06eZIeJKXuFOl/9F/6MmbMGFX2b2hYGCu7UEq+DseioqJZRKT/9ubR0j4FZ8+ejZcyFBoM" +
            "BqtOzkDXh+ojaKpq0MhRI/NyBue0USBHZW1t/XChs/OJogULdIWFhRc+/PBDszMyURYE/EUADoC/" +
            "yKPdewgsfOCBWsoh/2xySnI1ZZOj7VzVeQQHBzPKe8Cqqqq61v/TzV9yAMYWFKjSYGn+XwpylIIA" +
            "eZoKSKFUwf46JAfgFo0CSHkJOik/QaQLToBN95CQkMiMzMxhYwvGpupDQw/dqKjI1Gk0SxbOn1+7" +
            "c9euK7ZyeAcBuRKAAyDXnglAvXbu3Nm8oGhhSltbW+iQIUNUnbaVtqtlp06dsmbL6xoJYIyeKhlt" +
            "kqTKng8NC2WXyi4ymkNnOTk5frUxOCiY3bhxwzoCIyVhCqcVGtLohBtHCOV6GDl27Ngo2tnxS1ry" +
            "+N0FRUVs2fLlx955551ON+SiKgh4lQCWAXoVL4Q7TYC2CS4vvz5ZzZkBJSbSKMCkyZPpJiTlBbAt" +
            "CxScxqWUCtIOgdExMdatgaWRD38esXGx5GhpmdHYxijAzzoi4CF9MmbNmvXth5YvK6NRjxxjW9sr" +
            "mzdvzvKQbIgBAY8TgAPgcaQQ6A4BWmJ1kO6KH9DTsSq3Ce7OJi8vz5otT8oMKCUEUvuRPzSf0gNT" +
            "1sPqar+bOoCSFNENmpwAI2tqavLojoU0GjBr1XPPLYiNjTVpeP6ntAnRcL8bDAVAwA4BOAB2oOCU" +
            "fwnQEqu9Z06dafOvFr5pfer0adb5f2mXQLUf0gZB0shH+fXrfjc1XUrNTFq0tRmZsbWNMhXW0kiM" +
            "R/sgY8XDDz+dlZlZLXD8f5YUl4z2u9FQAAR6EIAD0AMIvvqfAK2v3k/JckY31tef9b823tUgPj6e" +
            "jRodOPeG/KFDrU/cjTT07u8jPT3dOg1gNBkZLelj7e3tnlbJMK+oaHVO7pBbIi/8EE6Ap/FCnrsE" +
            "4AC4SxD1PU5ASq5CT2cfHzlyRLUbBHWHNuG++1hEhGpzH3U31ZoJ0DoKUFFx13l/fKEIfmsQJgWd" +
            "WqcCWsgJ8MZBcQErB+cOqWK88DKmA7xBGDJdJQAHwFVyqOdVArRabA8ljwmnRhq92pAMhEs3RCkL" +
            "oFpXAPREPGz4cHb96rWep33+XVqemJ6ZQbEARutUQH19vdd0kJyAhMSkYxae34TAQK9hhmAnCcAB" +
            "cBIYivuIAM/vpWQtGVcvX/3MRy36tZmU1BQmrVEPhEPaD0AKvpPW4vv7oOWmzEybFUkrAurr6mi3" +
            "Ru8FYy5dtvT5yAjDeQoMfOmNN94I8bftaB8E4ADgNyBLAqD9z08AADhcSURBVGvXrq2gpdk7Dx36" +
            "olaWCkIptwhkDsxiJ44fd0uGJypbNynKGmgdAZCmAhrqvRqbYHj8G48XBel0grG1dY0n9IcMEHCH" +
            "ABwAd+ihrlcJWGg5YHV1zXz6w1zu1YYg3OcE8vPz2Y2KGz5v116DuXm51qyAkgNw89ZNe0U8eW7k" +
            "ggceCKNNIL5VsnnzDE8KhiwQcJYAHABniaG8zwisX7/+C/pD+bejXx39xGeNoiGfEJDiHgbS9sDX" +
            "r13zSXt9NSLpMih7kDUWoOJ6uTdWA9zVPC2HfGpg9qBfiDy/5vXXX/ffxgh3aYUvgUgADkAg9rqC" +
            "bOaY8OGFC+f8t32cglgpTVVpSeCNG5WyUFvSxWLpZG0UCyDtGOjt4/7773+KtiFu6TAan/B2W5AP" +
            "Ar0RgAPQGxmclwcBjWaPydSeeu3atU/loRC08BQB6ck7MyvTU+LckiPpkk17FEjZAUtLS92S5WDl" +
            "jJmzZoWJjF+5o7h4kIN1UAwEPEoADoBHcUKYpwlIwYA0DfDX48eOe2+NlqeVhjyHCSTSpkhyOaTd" +
            "GHnajKmuts6T+wP0at7AgQMfCQ0N/UrQaJb3WggXQMCLBOAAeBEuRHuIQIBsEOQhWhDjBoHJU6ZY" +
            "pwFKL/hkFIDdP//+cZT06lFKEKTq3S/d6BJU9SIBOABehAvRniFg2yDo3NmzxzwjEVJAwD6B1NRU" +
            "a7bC8uvXaCTA+ytQKSCwID4u7oSF45ba1whnQcB7BOAAeI8tJHuQgLRB0InjJ2s8KBKiQMAugTFj" +
            "x7IQvZ4dPXrU7nVPn5w6bVoux7hHMArgabKQ1x8BOAD9EcJ1WRAQRfHz1raWMY2Njf5PIi8LIlDC" +
            "WwSkgMB58+ezdlO7T5yARBoFiIuPO45RAG/1KOT2RgAOQG9kcF5WBCgnwGkmcp+cPH4SOQFk1TPq" +
            "VEZyAmbNmW1dEnjl8mWvG4lRAK8jRgN2CMABsAMFp+RJQOTEfaWl5zXy1A5aqY2A5ATMKCxktRQL" +
            "cPniJa+ah1EAr+KF8F4IwAHoBQxOy4+AxqI5QDkBxtMyrQ/lpx00UiMBaa8AaXlgbFwso2kor5o4" +
            "cfLkNMb4FVu2bBns1YYgHARuE4ADgJ+CYgis2bjmDP0J/vj4saPXFaM0FFUFgUiDgXG0O5U3D1qB" +
            "MCMsTH+Q/igv9mY7kA0CNgJwAGwk8K4IAjzH9pSVlYWTso2KUBhKgoATBKZMnZZOnsaSHTt2JDtR" +
            "DUVBwCUCcABcwoZKfiPA83s7Oy0ZVy9f/cxvOqBhEPASAdogaZJGo71usVhmeakJiAWBOwTgANxB" +
            "gQ9KIGBLDUxrtFuUoC90BAEnCRiG5g/tZAKb62Q9FAcBpwnAAXAaGSr4nQClBq6sujHLZDI1+V0X" +
            "KAACHiYwpmDMNMaJ87dv2TLRw6IhDgTuIgAH4C4c+KIEAlJqYArH+vDUyVOfK0Ff6AgCzhDQ6/UD" +
            "BqSn76Psl/OdqYeyIOAsATgAzhJDeVkQEAXu07NnzzbLQhkoAQIeJjBhwoQ0UeQe2l68Pd/DoiEO" +
            "BO4QgANwBwU+KIqAhh1qaWkuxDSAonoNyjpIID4+flxcXNxXAi9gkyAHmaGY8wTgADjPDDVkQCDu" +
            "VtxJJrLDly9f/lIG6kAFEPA4gRkzZ0hbBEtbBQ/3uHAIBAEiAAcAPwNFElixaUUH5WU5VnbhQqUi" +
            "DYDSINAPAWkUICEpYb/A84/1UxSXQcAlAnAAXMKGSnIgIDB2oqqqSi8HXaADCHiDwPz584dS9stn" +
            "t27dimWB3gAc4DLhAAT4D0DJ5msF4VSnxTK5ubn5jJLtgO4g0BuB0NDQSbl5eW/Qqpdni4uLI3sr" +
            "h/Mg4AoBOACuUEMdWRCorK09y4ns6LUrV0ploRCUAAEvECgsLFyh0+madDz/uBfEQ2QAE4ADEMCd" +
            "r3TTN23a1Mk4duLSpUtICKT0zoT+fRHImDF9Ou1FyK/cUVw8qK+CuAYCzhCAA+AMLZSVHQHKB3Dy" +
            "VnU1hkZl1zNQyJMEsgcPfpamA74SNJrlnpQLWYFNAA5AYPe/4q0XefFMR0fHZOQDUHxXwoB+CMye" +
            "OzuVAgKlZYHS8kAcIOA2ATgAbiOEAD8TKKM4gDM3q25e8rMeaB4EvEogNTV1UVho6GcWTvOgVxuC" +
            "8IAhAAcgYLpanYY+//zzLbQcsKy8ovyaOi2EVSDwNYFZc+ak0beHt2zZMvjrs/gEAq4RgAPgGjfU" +
            "khEBjokXb9682SEjlaAKCHiFgHUUIEx/kP5wL/ZKAxAaUATgAARUd6vUWJEvra+tR0IglXYvzLqb" +
            "wKQpU6IZxy3ZsWNH8t1X8A0EnCMAB8A5XigtQwIUCFjaYW6fQIGAMtQOKoGAZwlkZ2ffr9For1ss" +
            "llmelQxpgUYADkCg9bgK7dVqtZfJrAs1t24dVaF5MAkEehIwDBk8pImJ4pyeF/AdBJwhAAfAGVoo" +
            "K0sCq1evbiTFrtfV1SEhkCx7CEp5msC4CePm026Y8ykYcIKnZUNe4BCAAxA4fa1uS0Wusq6+HnMA" +
            "6u5lWHebACUFSouPj9ul4ThsEoRfhcsE4AC4jA4V5URAFMUKWgnQICedoAsIeJPAuHETYik/8IKS" +
            "kpJUb7YD2eolAAdAvX0bUJbxjL9sajPGBpTRMDagCWRkZSzQajVXmSDMCGgQMN5lAnAAXEaHinIi" +
            "wIlcWZvJOAorAeTUK9DF2wRyc3MFQWQzvd0O5KuTABwAdfZrwFlltBivUlDUxfr6+qqAMx4GByyB" +
            "4SNHTuUYK9xevD0/YCHAcJcJwAFwGR0qyonACy+80EBbA1c2NjTWykkv6AIC3iQQFRWVGhYWftSi" +
            "sUz2ZjuQrU4CcADU2a+BaZXINTY1N1UEpvGwOlAJjBg5PI4TxRmBaj/sdp0AHADX2aGmzAhwnNhq" +
            "Mpo6ZaYW1AEBrxLIzcsbRamB527btu0+rzYE4aojAAdAdV0auAaJItfc1NhQE7gEYHkgEggJCYlM" +
            "Tkr5iAkMOQEC8Qfghs1wANyAh6qyI3CrpbUtRHZaQSEQ8DKBMQVjaGMgsQg5AbwMWmXi4QCorEMD" +
            "2RxaCniVRgDgAATyjyBAbU9PT5+GnAAB2vlumA0HwA14qCovAlIuAIsgTEIuAHn1C7TxDQHaJbAF" +
            "OQF8w1otrcABUEtPwg6GXAD4EQQygZGjRg9AToBA/gU4bzscAOeZoYZMCSAXgEw7Bmr5hEBMbMwc" +
            "rU77GeUEmOiTBtGI4gloFW8BDPAaAQooGiZ2iuMYJ2QyxkfSMjtabiy2UYO3RI67KAjCqQ0bNlz2" +
            "mgKuCKaVAO0mY7srVVEHBJROICd7cPvZs2enkh2vK90W6O99AnAAvM9YcS288cYbIW0tbet5xn0z" +
            "aUCyOTYmLjQoWGeh4UXRbLZoautqbzbU1WuaW5rDS7Zu/YyJ4h5ep9u9evVqvy/BIyfF1NLaKiUD" +
            "GqM48FAYBNwkMGLUiIyz587kSKmB12xcc8ZNcaiucgJwAFTewa6YZ2w1fi8lJWnc9BmFOdEx0fZE" +
            "ZEkn6+vqmsvKLg49efJEYoep/dmtW7f+b1tb2+9efPHFVnuVfHJOYO2dFgt+1z6BjUbkRiAmhqYB" +
            "tNpfmVmnNA0AB0BuHSQzfRADILMO8bc69ES/Mjo6atK8oqL7e7n531ExOiYmYtz4cZOeWbVqUeHs" +
            "WRZ9cPCc8NDQV0s2b55xp5CvP/CspaamptzXzaI9EJALgZycnA6aq8PeAHLpEBnrAQdAxp3ja9Vo" +
            "zj+Tsuk9O23G9HzKLuZU80OGDJn79KpVD48dOzZI5Pg3t23Z8i1pKsEpIR4oTPpXmzvMBg+IgggQ" +
            "UCSBYcOHZzCOn7J9+/YcRRoApX1GAA6Az1DLvyHRYlmSlJTUmkLj/65qO27ChIdWPPKwMSIyssDY" +
            "1vbK5s2brdMFrspztp6UDKjdaIxxth7Kg4BaCMTFxc3W8vwpsbNztFpsgh3eIQAHwDtcFSf1lVde" +
            "iaJI/wcoiCjMXeVjY2Nzn/jGNxZmZWbGaHj+pzs2bx7urkxH60vJgNpMxlFIBuQoMZRTI4G0AWkW" +
            "kbFRarQNNnmOABwAz7FUtCS9TjeO13Bs0KBBnpo7NFAcwQpaltQicPx/lhSX+ORpxJYMqLGxUdH9" +
            "AeVBwB0ClBUwlTFu9I4dO3TuyEFddROAA6Du/nXYOkHkcymC2OhwBQcLzp47+8mx48ZFibzwQ184" +
            "AbZkQM1NzdUOqohiIKA6AgMyMoYyjhVYLJYRqjMOBnmMABwAj6FUuCBOSKaofq8E7UkrBUaNGa1j" +
            "vPCyT6YDKBmQ0dhWq/Aegfog4DIBaYtgmor7ilYDFLgsBBVVTwAOgOq72DEDOY4zREZGxjtW2vlS" +
            "EydOnJWdM7jGwvObvB0YKFK+IkEQKW8RDhAIXAKDsrPDKA5gUuASgOX9EYAD0B+hALlOy+fC6Kkh" +
            "yJvmStMBA9LSmykw8CVvLhHkKHex0WS87k1bIBsE5E6A4gCkFTjTpKyActcV+vmHABwA/3CXX6uc" +
            "aAgPC0/3tmILFy1cEkGHsbV1jbfaonTAoqWz0+PxDN7SF3JBwBsEDAZDalhY+FFsDuQNuuqQCQdA" +
            "Hf3olhXWJYAiSw4LDwt1S5BjlQ3zi4rG0pLDFyh1cKFjVZwsJTJBFCkECgcIBDiB7JxsHlkBA/xH" +
            "0If5cAD6gBMol/QaPWUOY4PoicEnJkt5AsZNGPcFL7J1r/3sNc8n7RGZmYIAG3xiDBoBARkTyKUU" +
            "ncgKKOMO8rNqcAD83AFyaJ42+c0ODdEfczb9rzu6FxQULI8wGFrbde3PuCPHbl3aD6CpuRlTAHbh" +
            "4GQgEYghZzs4SHceWQEDqdcdtxUOgOOsVFuSHICMYL2+ztcGFi0oGs9xbB1NBUzxZNvYD8CTNCFL" +
            "6QSSk5NNyAqo9F70jv5wALzDVVFSKWguXhek83nqvOjo6LwhQ3L3UvrepzwJDPsBeJImZCmdALIC" +
            "Kr0Hvac/HADvsVWOZIGF0x7ifhkyn144fRZF6z25bdu2BZ4Chv0APEUSctRAAFkB1dCL3rEBDoB3" +
            "uCpLKsd0Go7r9IfSGo0mfdiIYR8wgS3yVPvYD8BTJCFHDQSkrICGyKgD9G+MVt/gAIGvCcAB+JpF" +
            "4H7iGE9pgP22d/joMWNGMU58gGIBxnmiE2z7AbS1tXlCHGSAgOIJDMoZFMIxcaLiDYEBHiUAB8Cj" +
            "OCHMFQJhYWG0e2naIfoxznOlvt06tB8AbQlcY/caToJAgBHIyc4eIHLc5O3bt/vN0Q8w5IowFw6A" +
            "IrrJu0pS1Lzfk+aMGTs2j5L3LCgpKaFtTN0/pP0AOto7sCGQ+yghQQUEsBxQBZ3oBRPgAHgBqtJE" +
            "0s2S1+p0XtkJ0FEWKampOfrQ0FomCDMcrdNXOWk/AFEU/O7Y9KUjroGALwkkJSW1i4wf6cs20Za8" +
            "CcABkHf/+EQ7ulnqQvX6AT5prI9G8vLzdILIZvZRxOFL0n4AtPYZBwiAwG0CWYMGGSgOYNRbb72l" +
            "ARQQkAjAAcDvgFEAXoROF2TxN4rc3Nz76JG90FO7l3WaOxED4O9ORfuyIZCenj6eNskeXX/zJnYH" +
            "lE2v+FcROAD+5e/31m0bAUVHR2X4WxnaiyAiLDz8mKd2L+voaEcMgL87Fe3LhgAF20aG6sOOdfL8" +
            "MNkoBUX8SgAOgF/x+7/xoKCgTOtGQFFR4f7XhrEhuUPCsXuZHHoCOqiRQHJKkoX+6I9Qo22wyXkC" +
            "cACcZ6aqGpzA5YSGhh7x5UZAfQGktKUDGMdN2lFcPKivcrgGAiDgPIHMjIw4JrIRmzZt0jpfGzXU" +
            "RgAOgNp61Fl7OCEnIjKyydlq3iovbRWs5TWlFq12uLfagFwQCFQCaenp90lxAMmxsXmBygB2f00A" +
            "DsDXLALyk8i4QYmJiUFyMj42Pq6dpgFy3dJJZEJ9XV2pWzJQGQRURoBG+1hEePgZxAGorGNdNAcO" +
            "gIvg1FCtuLg4kqLuB6elpaXLyR7KCWCgJXzZbukkMrNFFDHM6RZEVFYjgaSUFGn5F+IA1Ni5TtoE" +
            "B8BJYGoqrmO6XAoAHE77hY+Sk13JSclxnMhyfvKTn4S5rBfPWjo7O/Uu10dFEFApgcz0zATEAai0" +
            "c500Cw6Ak8DUVFzkxDFRBsMntBJAVmbFJ8QPpBGAXFq25HIgIKU3rjZ3mA2yMgzKgIAMCKSkpQxH" +
            "HIAMOkIGKsABkEEn+E0FXpyYmTVQ8Fv7vTRM85SRQcFBRyiXn8vTAJzIXTWbOxJ7aQKnQSBgCSAO" +
            "IGC7/h7D4QDcgyQwTtzOtjctf2j+EDlaHBYW3kQ38UxXdaO6ZS0tLUNpR0BXRaAeCKiWAOIAVNu1" +
            "ThkGB8ApXOopLGXb02q1+yj7niyXA0VERvCUzz/eVeJGi/EqzXNebGxsdFUE6oGAagkgDkC1XeuU" +
            "YXAAnMKlnsL0hDw1J3twu1wtCg8PD2MCczk74QsvvNBAAY6VbW1tcjUReoGA3wggDsBv6GXVMBwA" +
            "WXWHb5SxDv9z4vQRo0b4Pf9/bxbrdLpguoHrervu0HmRa6ZAQIeKohAIBBIBxAEEUm/3biscgN7Z" +
            "qPaKbfg/JiZmjlyN1Ov1aeQAuPX7FJloFgTZxTjKFTn0CjACiAMIsA63Y65bf2DtyMMpBRCQ+/C/" +
            "hJASFDFayie9uXxwjBNoJYHL9VERBNRMAHEAau5dx2yDA+AYJ9WUUsLwvwSb43i6dYtu/T4piFA0" +
            "tZsuqKbzYAgIeJAA4gA8CFOhotz6A6tQmwNabSUM/0sdpNFqBI6JIQHdWTAeBLxIQIoDCNWHHcO+" +
            "AF6ELHPRcABk3kGeVk8Jw/+SzeFhYbGM8bE7duxwLxDQ0wAhDwRURCA5JclCNwHsC6CiPnXGFDgA" +
            "ztBSeFnb8P/osaMny92U2Li4BIoCyGUdHe7tCih3Q6EfCPiRQGZGRpy0L8Bbb72l8aMaaNpPBOAA" +
            "+Am8P5qVhv9DgoO/kGvyn+5MIiIiKA6A/dHCaWS7UqG7vvgMAkokQDtvDqV9AUbeunULjrYSO9BN" +
            "neEAuAlQSdWl4f/c/Pxgpeg8r6gojHHiU9s3by5Qis7QEwSURCCcPO0gXfAJjaiBA6CkjvOQrnAA" +
            "PARS7mJsw//5+fnj5K6rTb/MzMw1GemZfxM5/nm3tga2CcQ7CIDAPQTi4+MtImeR5Z4g9yiLEx4l" +
            "AAfAozjlK0wa/qcNdo7S8H+qfLW8V7OihUWrtTpta5g+bPW9V/s/09baer7/UigBAoFLIDE5MVhk" +
            "nMtbbwcuOeVbDgdA+X3okAXS8P/QYUNd3lzHoUa8U8jw4EMPSaMWf7d169ZC7zQBqSAQuARSUlKy" +
            "6EaQTf++XN57I3DpKdtyOADK7j+HtLcN/+fk5Ix0qILMCsXGxo4fM3b0Hl5k61772WsxMlMP6oCA" +
            "ognQFEA2BQLmkxHZijYEyjtNAA6A08iUV0Ea/o+Jji6LjIyMUJ72XRpPuO++B/VhYTXtwe3PKtUG" +
            "6A0CciQQEhLCIsMjjnECJzkBOAKIAByAAOhsyog7eVBOjl7hphoWLV40mhPZekwFKLwnob7sCMQn" +
            "Jpgo+/Zw2SkGhbxKAA6AV/H6X/i2bdsG0oL6SQOzBmb5Xxv3NIiOjp4watToj2mHoNWvv/66Ykcz" +
            "3KOA2iDgeQJICOR5pkqQCAdACb3kjo4WNkwfrK+MiY1JcUeMXOpOnDxxsT4kpMNkMn1DLjpBDxBQ" +
            "OoGUtLQ0JARSei86rz8cAOeZKasGJww0REV1KEvpPrU1zJ4zN51GAZ6hqYC8PkviIgiAgEMEwsPD" +
            "0zQ8/xUSAjmESzWF4ACopivtG8JxXGJ0TFSY/avKPJs2IG16alraWVra+IQyLYDWICA/AjExMU1I" +
            "CCS/fvGmRnAAvElXDrIFFk7pPhPloIondZg9e/YM2izoue1btvS5V4Cpvb3Wk+1CFgiolUByamok" +
            "EgKptXft2wUHwD4X9ZzlmE7DaQT1GNRlCe1lnjZuwvi9Asc9V1xcHGnPPlHkOFNbW429azgHAiBw" +
            "N4GU5OQYuiFkI+323VzU/A0OgJp7V+W2FRQUzNXpdE06nn/crqk0R0A+gGj3Gk6CAAjcRSAxMSmT" +
            "/rHkhoWFIS3wXWTU+wUOgHr7tssykZktokWt/WwonDkznIYtn9q+fXvOPV0pclqe8ZZ7zuMECIDA" +
            "PQRCw0LTNBr+IGfh7v23dE9pnFADAbXeGNTQN56xgWct7SaTmlYB3MVl0KBBD4eGhh0RLZaHul/Y" +
            "tGmTlmNimDZIa+p+Hp9BAAR6J0ArhowCExSfM6R3C3GlOwE4AN1pqPCzKIo36+sbmlRo2h2TZs+d" +
            "nUrz/Y+UFJeMt51MSEgYROuaUwwREYgBsEHBOwj0QyAxMTGKVg4pasfQfkzC5T4IaPu4hksqIEBz" +
            "4Berq2+1q8CUXk1ITU1dFBUV+YPG+sZvUOZDk8asabBYLIWMY+NGjRnzg14r4gIIgMBdBGjPkBDG" +
            "icl3ncQX1RLACIBqu7bLMPLmT7cbTYm1tbU31Gzqw48+Okjg2XkmsO8IfOeLFPu3jvFcQXBwcKea" +
            "7YZtIOBJAjGxcdLT/4AdO3YYPCkXsuRJAA6APPvFY1qtW7fuEj0J7zt39uxXHhMqQ0E8zz9Jtr7H" +
            "MeEdyRHoFIXH165dO5BU/ZYM1YVKICBLArFxsdlMZDliu5gpSwWhlEcJYArAozjlKUwUuL3nzp1b" +
            "MXnKFHkq6DmtVq55/vljJK6AXi/TC08xnmMLSQFAQK/Xs1C9/rixrT2bzD0eACYHtIkYAQiA7tcE" +
            "aT7uaDfHXbp4cZfKzZXm+/9Mr6fohZu/yjsb5nmHgCE62oyVAN5hKzepcADk1iNe0Gf16tWVjIbG" +
            "D315uNEL4iESBEBARQSiogw8VgKoqEP7MAUOQB9w1HSJcgG/U1dXl1dZWanqWAA19RlsAQF/EKAl" +
            "tAOwEsAf5H3fJhwA3zP3S4vr16+/QKMAb+3ft++sXxRAoyAAAoogEBUdHUOKYiWAInrLPSXhALjH" +
            "T1G1NaL4dk11zcibVVWHFaU4lAUBEPAZgejo6CSsBPAZbr82BAfAr/h92/jqDRvOiUz83Ue79yC6" +
            "17fo0RoIKIaAbSUAbaUlrQTAoWICcABU3Ln2TJNGARqbGsZVVFS8a+86zoEACIBAeGREKzkAGSCh" +
            "bgJwANTdv/dYJ40CcIz97+4PdlfccxEnQAAEQIAIUBhAKL0lAYa6CcABUHf/2rWOt1j+0NbWNrbs" +
            "woXX7BbASRAAgYAmEBEREUYAogMaQgAYDwcgADq5p4mrN268SClz39z7ySc0GMCQG6AnIHwHgQAn" +
            "EBERbqClgNJqABwqJgAHQMWd25dpZkH4jdlsjvzi4EEpcx4OEAABELhDgJYCSvP/Ka+88krUnZP4" +
            "oDoCcABU16WOGbRx48YmkbHXjhw5stBoNF53rBZKgQAIBAKBqKiocLIzW6/RIxBQxR0OB0DFnduf" +
            "ac8///wHNAfw2u4PPtjbX1lcBwEQCBwCISEhLDREfwxLAdXd53AA1N2//VrHC8Jvy8tvjK2urj7U" +
            "b2EUAAEQCBgCwXp9HZYCqru74QCou3/7tY6WBZ6kf+S/3btn77l+C6MACIBAwBCIiYkO5TgxPmAM" +
            "DkBD4QAEYKf3NFkrCH+qqa0eieRAPcngOwgELoHgkBANE5gUC4BDpQTgAKi0Y50xC8mBnKGFsiAQ" +
            "GATCw8KSGc+CA8PawLQSDkBg9vs9ViM50D1IcAIEAppAUFBQiChyIQENQeXGwwFQeQc7ah6SAzlK" +
            "CuVAIDAIBNMcACUDiggMawPTSjgAgdnvdq22JQc6fPjwB3YL4CQIgEDAEDBEGTJpW+BkJANSb5fD" +
            "AVBv3zptmS050KEvvyxEciCn8aECCKiKgMFgYIxjg5AMSFXdepcxcADuwoEvtuRAe/bs+QI0QAAE" +
            "ApeAlAxIw/OfIxmQen8DcADU27cuWyYlB7p25Vp+bW3tDZeFoCIIgIDiCUQaokxIBqT4buzVADgA" +
            "vaIJ3Au25ECff/bZV4FLAZaDAAjognSNSAak3t8BHAD19q1blknJgSrKKzJramowCuAWSVQGAeUS" +
            "0Gq1RiQDUm7/9ac5HID+CAXodSk5kMjE333+2edHAhQBzAaBgCeg4bhOCgTUBTwIlQKAA6DSjvWE" +
            "WRpRfPtGRXkGRgE8QRMyQEB5BCIjo1LJAcB9Qnld55DG6FiHMAVmIYwCBGa/w2oQsBHQaPlQ22e8" +
            "q48AHAD19alHLeIF7V9ok6CBWBHgUawQBgIgAAJ+JwAHwO9dIG8F1mxcc4aigP904MAB5AWQd1dB" +
            "OxAAARBwigAcAKdwBWZhThR3Xb92bSqyAwZm/8NqEAABdRKAA6DOfvWoVWvWrz/ARG7XlwcP/s2j" +
            "giEMBEAABEDAbwTgAPgNvcIa5tkH5y+URpLWjQrTHOqCAAi4SMDSKbS5WBXVFEAADoACOkkOKmo0" +
            "mo8sls4B58+f/5Mc9IEOIAAC3ifQ3Nx83futoAV/EYAD4C/yCmt39erVlUwU/7Lvk30tpDpGARTW" +
            "f1AXBEAABHoSgAPQkwi+90pAYOwds9k8/cqVK//bayFcAAEQUBEBgfx+jlORQTClGwE4AN1g4GPf" +
            "BNavX3+BMeGtPbt3t/ZdEldBAATUQIDjNAKlBMd9Qg2daccGdKwdKDjVOwEpPXBHe8dcSg70bu+l" +
            "cAUEQEANBMLC9NEc47AXgBo6044NcADsQMGp3gnY0gPv/nA3goN6x4QrIKAKAhERhkjGiRGqMAZG" +
            "3EMADsA9SHCiPwLSKICxtXUaRgH6I4XrIKBsAnEJcclMZMnbtm2LVrYl0N4eATgA9qjgXJ8EMArQ" +
            "Jx5cBAHVEEhISMiiKYAcQRCyVGMUDLlDAA7AHRT44AwBjAI4QwtlQUCZBEJCQgbQjoC7NRyXp0wL" +
            "oHVfBOAA9EUH13olgFGAXtHgAgioikBKWpp0nximKqNgjJUAHAD8EFwmgFEAl9GhIggohsDAgQOj" +
            "RJGNemvTW0GKURqKOkQADoBDmFDIHgGMAtijgnMgoC4CWVlZ4xnHCmoSaoaryzJYAwcAvwG3CPz/" +
            "7d17cFRVnsDxe7sTkiYJIQnhFTGgSXjJIwjOhLfO4JTCujrWOLszsw8HpkLSndTqDrvuzPwxu7U7" +
            "NTta5SzyCA8VHEV5CYLAKkHQCAGMwQhIyANJIOYBCSTknb737ulxHSMEyaND33vPN1UUSfe95/5+" +
            "n9NV/et7Tp/DXYA+8XEyAqYXEPMABoWHRxxUNGWG6YMlwB4JUAD0iIuDrxfgLsD1IvyNgP0Exo8f" +
            "H6E6jLn2y0zujCgA5O5/v2TvuwvQ3Nw0h3UB/MJJIwiYTmDiPRMnGoqyQKwH8F3TBUdAvRagAOg1" +
            "HSd+JeC7CyB2C3k9+93siq8e438EELCPgMvlGjVi+MgDiq48aJ+syIQCgNeAXwQcmra1ubn53pKi" +
            "ovV+aZBGEEDAVALJycnhimI8vHr16jhTBUYwvRagAOg1HSd2FkjNzCxVFX3Dofff920dWt/5OX5H" +
            "AAHrC8SPiZ8dFOQsU3R9vvWzIQOfAAUArwO/CQxwuV7t6OgIz8nJ2eS3RmkIAQTMIhCZkJDQKPYH" +
            "fsAsARFH3wQoAPrmx9mdBBYvXnxNTBRac+rTk4uuXLlyrNNT/IoAAjYQmDI1eZS4xXd/1vKsCTZI" +
            "R/oUKACkfwn4F8Dtdh80VGXFvr17z/i3ZVpDAIFAC0THRC8IDQ05rjm1lEDHwvX7LkAB0HdDWrhO" +
            "IKQtZH3D1frwvLy8rdc9xZ8IIGBxgcTEsZpqqHMsngbhCwEKAF4GfhdY8vSSOl1VVn107KPv1NbW" +
            "Fvr9AjSIAAIBE5g0ZVKyohrzGAYIWBf47cIUAH6jpKHOAr6hAEXRn9+9a9cR8TjfCuiMw+8IWFgg" +
            "MjJyfGhIyDGGASzcif8fOgWA9fvQtBm4wsKyWlpa2nfs2PG6aYMkMAQQ6LFAQlKSrhrGrB6fyAmm" +
            "EqAAMFV32CuYJ598slXT9T9UVVYOFasEvmKv7MgGAXkFJk6YIIYBHLOzsrIS5VWwfuYUANbvQ1Nn" +
            "kJGR8blT139bUlw05L0DBzaYOliCQwCBbglEx8SMCxkQfNbwepO7dQIHmVKAAsCU3WKvoMReASfF" +
            "pMBfFxWe5U6AvbqWbCQWGD58eJuhOKZITGD51CkALN+F1khATAr8xGHozxSXFIVveWPL8yJqJgZa" +
            "o+uIEoEuBcSqgHGqYkzdsmWLs8sDeND0AhQApu8i+wTouxOgqOqyutrLA9evXfuqWC2QxYLs071k" +
            "IpnAyLi4iWLRryk1NTXjJEvdNulSANimK62RSHp6+rmW9ran2tu959/Y9HpMQUHBa9aInCgRQKCz" +
            "QHhERMTAUNcZp+GkAOgMY6HfKQAs1Fl2CfXpp59ucWe4nxOfHpbkfnh4lFgr4I8itzK75EceCMgi" +
            "EDtsqGGo2lhZ8rVbnhQAdutRC+Uj5gXsVpwO98WLFyPWrVm3p6a6eoeFwidUBKQXGD58xBBDUe+W" +
            "HsKiABQAFu04u4SdlpZ2yhkUlKlpHSXbt22f9s477/yHyI27AXbpYPKwtUDs0NgI8SaS8Oyzz4bZ" +
            "OlGbJid2duQHAXMIrH7hhfmGw7E0OGjAte8/+P2w0aNH/605IiMKBBDoSkCs9KlseOnlGsWhLhDz" +
            "ez7t6hgeM68AdwDM2zfSRZaWkXEoJDT0F+3e9hNiO+GkN7e9ub6pqem0dBAkjIBFBFwul+JyhZ40" +
            "DCPBIiETZicBCoBOGPwaeIHFixdfE3MDVhmK8nfV1dU1r2zYOPTY0aMbRGSsGxD47iECBG4QCHUN" +
            "rBXbA4++4QkeML0ABYDpu0jOAEURcCbdk/5rh2L8ND8/P2z92vVby8vL35ZTg6wRMK/AkNghMapq" +
            "xJo3QiK7mQAFwM1keNwUAks9nv1eTVviGxbY8/bbI3zDAs2Njb4thvlBAAETCAQHB7cruhJuglAI" +
            "oYcCFAA9BOPw2y+QmZnZ0HlYYOPGVxI//ODDVSISvi1w+7uDKyLwDQGnw6kpqhL8jQf5wxICFACW" +
            "6CaC9Al0HhY4eerT2PXr1mWXFBWtF08xP4CXCAIBElDFhgCiAOC9JED+fbksndYXPc4NiMBXwwLe" +
            "9vaP9+8/MHnjyxs3VVRU7ApIMFwUAckFQkNDR0lOYNn0KQAs23VyB+4bFkjzeFY7de9PWlqayne9" +
            "9dbojRs2rqysrDwotwzZI3B7BXTdaL69V+Rq/hKgAPCXJO0ERCA1M7M0ze3+vVPXf9zc1PjFW2/u" +
            "GLJty5ZXq6uq8gISEBdFQDKB9va2WslStk26FAC26Uq5ExFbDRemezy/cxj6E5cuXTqzY/ubIRQC" +
            "cr8myP72CBi+GQCG+B4AP5YToACwXJcR8LcJdFUI7Nq56+3Lly9/8W3n8RwCCPROQNM1pygAOnp3" +
            "NmcFUoACIJD6XLvfBDoXAhUVF3K3bd5SSyHQb9w0LLFAW2urJr4D0CgxgWVTpwCwbNcReHcEKAS6" +
            "o8QxCPReoK7uSrNhqJd63wJnBkqAAiBQ8lz3tgpQCNxWbi4mkUBTU+MgQzXOS5SybVJlO2DbdCWJ" +
            "9ERgzQsvjNNU9Yeqov7NyLg7ymbOnjltyJAhI3vSBsciILsA2wFb+xVAAWDt/iP6Pgp0LgTEpiYF" +
            "c+bOHTds+PDpfWyW0xGQQqDsfNkn+/bsaWhsaX542bJlTVIkbaMkKQBs1Jmk0nsBCoHe23GmvAJH" +
            "jx7NPpGfX5budi+RV8G6mVMAWLfviLwfBDoXAoMiBx+fd/+82Li4uEf64VI0iYDlBd7cvn17TXV1" +
            "nm8xLssnI2ECFAASdjop31rgq0JAURxPhIW5js6eM/fOu+6+a6Y4M/LWZ3MEAnIIrMta87bX0F9M" +
            "T0/fKUfG9sqSAsBe/Uk2fhZYsWJFkviqzF8rqvqo0xl0YfLkyQOmJk/9ntgAZZCfL0VzCFhKoLa2" +
            "tnDL5s2qU9MW+pbktlTwBPtnAQoAXggIdENgzZo1IzRN+55Y8PRBRTUeGnXnnTkpKSnfiYmJ4ZsD" +
            "3fDjEPsJ5OTkvH7q009bxRLcP7dfdnJkRAEgRz+TpR8FslasSDFU9SGx+MnjsbEx+bPmzIkbMWLE" +
            "/X68BE0hYHqBl198cXNLW9t+t9v9oumDJcAuBSgAumThQQRuLZC1PGuC7vA+KoYHfhw2cGDuzNmz" +
            "oxISEn4gzmSewK35OMLCAvVXrpzZtOn1UIfuXLQ0c+lnFk5F6tApAKTufpL3h8D18wTGJo1tmH7f" +
            "9JlhYWET/dE+bSBgNoGDBw6+VHj2jMHX/8zWMz2LhwKgZ14cjcBNBf4yT8AwFojd0R6Kihq8IyVl" +
            "Vlz8mPjZ4iTuCtxUjicsJlC/ds3ad7UObWd6Rvomi8VOuJ0EKAA6YfArAv4SEHcFvuNU1QfFXukL" +
            "g4KcZQkJSY3Tpk1NiYyKGu+va9AOAoEQOFdauu+d/313kDPY+aPU1NTKQMTANf0jQAHgH0daQaBL" +
            "gdWrV8cpuj7fUJT7xV2BB0JDQ45PnDQpauzYsRMjIyPjujyJBxEwscDGlzeubWpqKnZnuJ8zcZiE" +
            "1g0BCoBuIHEIAv4Q8E0a1Jxaimqoc8RXCeeFhYWfmHjPxNjExMQpgwYNivDHNWgDgf4UqKio2LVr" +
            "5654XdGf8Hg8Rf15LdrufwEKgP435goI3CBwfTEQHRVVkpCUFCq+RTCGOwM3cPGASQTEp//VLS1N" +
            "5Sz9a5IO6WMYFAB9BOR0BPoqcH0x4LszMHbc2PCkpKQJUVFRDBP0FZjz/SJQVla2Z+/be2Oduvcn" +
            "rPznF9KAN0IBEPAuIAAEvhb4uhgwZimqY3bIgOCzcXeMUu8aMzp6VHx8iliC+OuD+Q2B2ydQv37d" +
            "um3e9vaP0zye1bfvslypPwUoAPpTl7YR6INAVlZWouH1JosJhFMVRU1WVGW6WHr449FjxqhMIuwD" +
            "LKf2WCD3cO4rnxScCAkJDf3F4sWLr/W4AU4wpQAFgCm7haAQ+KaAWGMgWOxFMFk1jOmiIPDtSjjX" +
            "N1Rw15i7WiZNmZQs5g3w9cJvkvGXnwTq6+vPbHr1tXBDVf5BLPt70E/N0owJBCgATNAJhIBATwW+" +
            "Hir48hsFQUFBOYkJSW2Tp06Oj46OXtDT9jgegZsJbHrttQ1XRREg3vz/cLNjeNyaAhQA1uw3okbg" +
            "LwLXFwNinkDu2HHjvNOSk+eHulyj/nIgvyDQQ4G8vLyteceOq8HtIalLnl5S18PTOdzkAhQAJu8g" +
            "wkOgJwJiBcKJqqrOFEMF88W8gR8MHTb0rdmz54weNnzYAz1ph2MRqK2tPb7ljS3DDdX4R2792/P1" +
            "QAFgz34lKwSUlStXikJAfUhQ/DAsIuzAggULRoltix+FBoFuCNS/uG7da+3t7cXpHs8fu3E8h1hQ" +
            "gALAgp1GyAj0RMA3RKA79B8qivGTyMhBOx7/0Y/mhoSE+DYo4geBLgV2bN+RVVVdqbgGDnzqySef" +
            "bO3yIB60vAAFgOW7kAQQ6J6AKASm6E7tZ2JPAvd3Z6b8T3Jy8jPdO5OjZBI4sH//xrNFxYNUh/rL" +
            "9PT0czLlLluuFACy9Tj5Si8ghgZ+rBrKM6NG3fH6okce+ZUAYati6V8VXwKcyM/POXr0aJtDc/5y" +
            "aebSAljsLeC0d3pkhwAC1wvs3bv39MJFiwobGhqWVn1R9ZJYdniGOIYlBq+HkuzvwsLC/R9+kBOu" +
            "Go5/S8tM+0iy9KVMlwJAym4nadkF9uzZU/ZXDz9cKoqAf1Yc6raRI0fOkt1E5vyrq6rz9u3dm+BQ" +
            "jH9Ny3Dvl9lCptwdMiVLrggg8LXAUo/nA11V/ivv2EeL6y7Xvfj1M/wmk4Bvpb/du3cViBUm/1O8" +
            "Jt6SKXfZc+UOgOyvAPKXWkAMB5xZ+PBDQSUlxWrytGm+nQcHSw0iWfKXLl06++b27Ye9HR0l6W73" +
            "85KlL3263AGQ/iUAgOwCzuDgta1t7XdlZ2evl91Cpvx9Y/7btm4d1N7RkZ/mdv9eptzJ9UsBCgBe" +
            "CQhILpCamnrZYTjWFJ8t+qfm5uYjknNIkb5vtv+hA+9FOQxDvPe7V0mRNEneIMAQwA0kPICAfAJ7" +
            "9u0pXbRwYdQXlZWNEyZMuFc+AXkyPnL48K6P8/KDxGx/JvzJ0+1dZsodgC5ZeBAB+QRUzflGTVX1" +
            "PN8a8PJlL0XG9dnvZr9SUFAQrDiUf0nLSDssRdYkeVMBCoCb0vAEAnIJ+BZ+UVVl66H3Dp2UK3Mp" +
            "si0TG/u8VFxSFK6o6jNihb+PpciaJL9VIOhbn+VJBBCQSkBXlL01NdW7WltaLrCVsD26vq62dr+Y" +
            "6V/k7fAOFGs+LGN5X3v0qz+y4A6APxRpAwGbCIgJYWISoPFO/okTh2ySktRp5Oflr938xuYp7e3e" +
            "8y3tbU/x5i/1y+GG5LkDcAMJDyAgt4Chqoc+O3Vq1syZM+WGsHb2Bdu3bt13qebSTENVlrg97t3W" +
            "Tofo+0OAAqA/VGkTAQsLGIZxpMPr/VVdXd3+6OjoBRZORcrQz50798Z72dltHR1atK4Y6R6357SU" +
            "ECR9SwG+BnhLIg5AQC4BsTrgpYUPL0rWNb1u9JjR0+TK3rrZNjU1nd791u7dJwsKJngNfWdQcNDv" +
            "xC3/KutmROT9LcAdgP4Wpn0ELChgqEaOmDE+b/4D8y0YvXQh1+fl5b370bHj88W3OKochv5cmiej" +
            "UDoFEu6xAAVAj8k4AQH7Czg1Z65X8f6GYQBz9/WF8vIPsvcfKG9tawkRO/n9dKnbw05+5u4yU0Wn" +
            "mioagkEAAdMIrFqxasP48eM7xF2AJaYJikD+LODbxOfgewfzai/XJqqKvqFD11/LzMxsgAeBnghw" +
            "B6AnWhyLgEQCvmGAzz8vXTBfmS9R1uZOVYzzX3z/4MFjZWXl4xRFPS366Lfpbk+JuaMmOrMKUACY" +
            "tWeIC4EAC/iGAVrb2n7j2y8+MjJyfIDDkfryuq7XH87J2Xfq1On54o3/rNPQ/z01I4MVG6V+VfQ9" +
            "eYYA+m5ICwjYVsA3DHDvjHtH3HfffQ/aNkkTJ+b7xJ93PO/IZ2dOP2YYyp/EBL8/pWVkHDJxyIRm" +
            "IQHuAFioswgVgdst4BsGKDxTuFAUALf70lJfT2zI9EVubu6xC2XlKeIT/1WxhO9jbnf6HqlRSN7v" +
            "AhQAfielQQTsI+AbBmhqbPy1GAa4JoYBIuyTmTkzqaqqyjty5Mj56srqCapqnBIL+fy3x+M+Zs5o" +
            "icrqAgwBWL0HiR+BfhZYtXLl+unTZ4yfcd8M1gbuH+v6c6WlR3Jzj9Y0NNQnK4ax2aEH7RS7M37W" +
            "P5ejVQS+FOAOAK8EBBD4VgHVMLJLiouSRAHwrcfxZM8E6q9cOZOf/0lucUlxhObVRiqKflDsxvg7" +
            "j8dT1LOWOBqB3glQAPTOjbMQkEZAU5T99Vfrf15WVlYdHx8/TJrE+yFRMZRScfbs2dNiXkWTGFqZ" +
            "qqiKoejqTucA58HU1PTKfrgkTSJwUwGGAG5KwxMIIPCVwMqVK/9+WGys57HHH5/hcLCL+Fcu3fm/" +
            "oaHhWnFxcUFJUVFr3ZUrCYqhvu+bXOmbX8Ft/u4Ickx/CVAA9Jcs7SJgM4HVK1f+ccLEe+bMnTeX" +
            "DYJu0be+T/olJSWf86Z/CyieDqgAQwAB5efiCFhHoEPTnjt9+lTU1fqrny1atGiuuBNwp3Wi7/9I" +
            "62prCwvF/f2S4hJd3N8Xk/nUUj7p9787V+i9AHcAem/HmQhIJ7B8+fI7gp3OXzqdwUNTUlK890y+" +
            "5xGBECkdhEjYt0hPeXl54eelpfUVFyscXl2/RzH0Dw1VPcztfRlfEdbLmQLAen1GxAgEXMA3J8Bh" +
            "KD9zOIMaEhMT66dNm5oSGRVl6+WCGxsbL164cKHw/LlzVyu/qBrQ1tE2QzWUE4aifiI25ClQg4JO" +
            "LF26tDjgnUMACHRTgAKgm1AchgAC3xRYsWJFjFNRFohPvN8Xc9kfCAsP/2TsuLHhCQkJo2JiYsRm" +
            "Ndb9aW5ubrhUU3OuoqKi/OLFimtXr9RFaLp+r3jDLzAUo0DkfDJI109FDRv22RNPPCG+KMEPAtYT" +
            "oACwXp8RMQKmE8hanjVBc2opYs2AWYqqzgwJHnB+yNBY74gRI8V75LBhsUNj73a5XKaLu7W5teHy" +
            "5ZrSurq6BjFDv7W6ulpMcbjq0jT9u+IremdEwCW+sXzVUIs0VSscOnRoIW/4putGAuqlAAVAL+E4" +
            "DQEEuhZYs3z53VpQ0CRRDIwzFCVBHCW++qaMF3cICqMGR+ph4REd0dFR8a6BAwcMHjx4tFhiWAkN" +
            "De26sV4+2traqoiZ+Ir4JK80XrtWKHbTU5uamys6OjraGq5evdzU3BLScLXepema743ed9v+gnij" +
            "rzQMo8KhOD43nEaxGOMvXbZsWVMvQ+A0BEwvQAFg+i4iQASsLfDss8+GiZ+7xZtrgvgkPVpkM1z8" +
            "i1JUI1r8L1bAUxIcqvqhojrKHKpyWXU6W4IcQZqqqmJhvFv/iHbFBDyv09A0l24oQ8REvHjx/2yx" +
            "pG6peHOvFG/s18S12sXte68oRDoUh9JoGOolMUP/vJisV6qGqOdTU1Prb30ljkDAXgIUAPbqT7JB" +
            "wFICzz///GCX0xUvhg/u9hUHYgOcWEVXwsUbd7D4170Vh8Rael29sbdoLWVPPfXUVUuBECwCCCCA" +
            "AAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAAC" +
            "CCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggg" +
            "gAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAA" +
            "AggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAII" +
            "IIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCA" +
            "AAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAAC" +
            "CCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggg" +
            "gAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAgjYS+D/AK8hRcvKQp6r" +
            "AAAAAElFTkSuQmCC";
    }
    return Swipe_Left;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var Swipe_Down = (function () {
    function Swipe_Down() {
        this.swipe_down = "data:image/png;base64," +
            "iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAAAXNSR0IArs4c6QAAAAlwSFlzAAAL" +
            "EwAACxMBAJqcGAAABCZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6" +
            "eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYg" +
            "eG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4K" +
            "ICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6dGlm" +
            "Zj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmV4aWY9" +
            "Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIgogICAgICAgICAgICB4bWxuczpkYz0iaHR0" +
            "cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgICAgICAgICAgIHhtbG5zOnhtcD0iaHR0" +
            "cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyI+CiAgICAgICAgIDx0aWZmOlJlc29sdXRpb25Vbml0" +
            "PjE8L3RpZmY6UmVzb2x1dGlvblVuaXQ+CiAgICAgICAgIDx0aWZmOkNvbXByZXNzaW9uPjU8L3Rp" +
            "ZmY6Q29tcHJlc3Npb24+CiAgICAgICAgIDx0aWZmOlhSZXNvbHV0aW9uPjcyPC90aWZmOlhSZXNv" +
            "bHV0aW9uPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgog" +
            "ICAgICAgICA8dGlmZjpZUmVzb2x1dGlvbj43MjwvdGlmZjpZUmVzb2x1dGlvbj4KICAgICAgICAg" +
            "PGV4aWY6UGl4ZWxYRGltZW5zaW9uPjUxMjwvZXhpZjpQaXhlbFhEaW1lbnNpb24+CiAgICAgICAg" +
            "IDxleGlmOkNvbG9yU3BhY2U+MTwvZXhpZjpDb2xvclNwYWNlPgogICAgICAgICA8ZXhpZjpQaXhl" +
            "bFlEaW1lbnNpb24+NTEyPC9leGlmOlBpeGVsWURpbWVuc2lvbj4KICAgICAgICAgPGRjOnN1Ympl" +
            "Y3Q+CiAgICAgICAgICAgIDxyZGY6U2VxLz4KICAgICAgICAgPC9kYzpzdWJqZWN0PgogICAgICAg" +
            "ICA8eG1wOk1vZGlmeURhdGU+MjAxNTowNToxNiAwMzowNTo4MTwveG1wOk1vZGlmeURhdGU+CiAg" +
            "ICAgICAgIDx4bXA6Q3JlYXRvclRvb2w+UGl4ZWxtYXRvciAzLjIuMTwveG1wOkNyZWF0b3JUb29s" +
            "PgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KduN/" +
            "NgAAQABJREFUeAHsnQmAFNW1/qu6e2ZAhQGdYRVm2JFthl0RmME1LAouGI1GFheYHkDN/z2Tl5iX" +
            "8cWXxZeowHQ3RBRI4hITFVAhLsjgjooCyiagIAjKorLDLF3/73ZPYzPM0ktVV92qr5Kyq6vucs7v" +
            "NnNP3XvuuYrCgwRIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARI" +
            "gARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARI" +
            "gARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgAQiBDRN" +
            "K4lc85MESIAESIAESMABBAK+wAPPPfvcgQWPL1jqAHWpIgmQAAkkRcCVVG5mJgErEdCC1x38/vvm" +
            "x48f+5Hf53/aSqJRFhIgARKwGgEaAFZrEcqTEIGAz/ek6nY16tS5k9qmbZs9iqZdllBBzEQCJEAC" +
            "DiFAA8AhDW13NTVF6desWbPPhg0frlw9duzZqqLu8pf659pdb+pHAiRAAokSoAGQKDnmswyBkpIS" +
            "j6IpHX98440bq4XKzGjcaK2ian0tIyQFIQESIAGLEaABYLEGoTjxE2iR1eJ/FFVZj5z5kdy3Trh1" +
            "JYwCGgARIPwkARIggRoEaADUAMKvEhJQlc6qpn4CyQsi0rvd7uGqomwMzAz0itzjJwmQAAmQwA8E" +
            "aAD8wIJXkhJQNa173755S2qIX6gp6keKJ/jrGvf5lQRIgARIAARoAPBnID0BOAB2zevXr1kNRXJa" +
            "tWk1F9MAF9S4z68kQAIkQAIgQAOAPwOpCcyaNet8zP/vbdSo0dCaiowePbqtMA5q3ud3EiABEiAB" +
            "GgD8DUhOwOP23KVo6haoccoBMKJSenr6UGEchIyEyE1+kgAJkAAJhAhwBIA/BNkJdFZVbQOUyKtF" +
            "kUJhHISMhFoe8hYJkAAJOJkADQAnt74ddNe0HkOHD19Vhyp51cZB5zqe8zYJkAAJOJYADQDHNr38" +
            "imNoP0NV1fa9evXKqkubkHEAI6Gu57xPAiRAAk4lQAPAqS1vA73T3O5fwct/HVQprEsdGAeYIlDb" +
            "C2OhrjS8TwIkQAJOJEADwImtbhOdsc6/O8L9roU6ZzgARqkIPwBlncfluS/qHi9JgARIwPEEaAA4" +
            "/icgLwARAKhl69bzoUFOPVoUwEj4GFEBGQ+gHkh8RAIk4DwCNACc1+Y20ljtNmrUqLMbUmjAoEHL" +
            "NFVjSOCGQPE5CZCAowjQAHBUc9tHWZ/P1w7afJ2RkXFGAKCaWg4YMKADtgfOoR9ATTL8TgIk4GQC" +
            "NACc3PoS6+5W1emI8rcVKhTGoAb9AGKAxCQkQALOIkADwFntbRttg5rWCWv8N0Gh+hwAI/oW0g8g" +
            "goKfJEACJBAmQAOAvwQ5CWhKty7dui2C8JkxKJDZu2fPf9APIAZSTEICJOAYAjQAHNPU9lIUc/pd" +
            "hg0b1jRWrS4uKMihH0CstJiOBEjACQRoADihlW2mY8QBEJv9DItDNfoBxAGLSUmABOxPgAaA/dvY" +
            "dhpGOQDGMv8f0Z9+ABES/CQBEiABEKABwJ+BdASiHAAL4hA+h34AcdBiUhIgAdsToAFg+ya2oYJw" +
            "AOzfb+DyeDWDH0Am/QDipcb0JEACdiVAA8CuLWtjvYQDYN8BfTskoGLIDyC0iVACmZmFBEiABOxE" +
            "gAaAnVrTAbpEHAA9Hk/vBNQVfgBrQ5sIJZCZWUiABEjATgRoANipNR2gC97+Z1RHAIzHATBCJk9s" +
            "HiQ2EYrc4CcJkAAJOJUADQCntry8endGBMANED8vERXCmwep3RLJyzwkQAIkYCcCNADs1JpO0EXT" +
            "egwdPnxVoqpWbx70dfVUQqLFMB8JkAAJSE+ABoD0TegcBcRufqqqtu/Vq1fnJLQuFFMIYiohiTKY" +
            "lQRIgASkJ0ADQPomdI4CIe99TVkHjROZ/4+AKqieQkjGiIiUxU8SIAESkJYADQBpm855goe89+HF" +
            "D82TMQCU0BQCphKcR5AakwAJkMAPBGgA/MCCVxYnILz3hRc/xMxJRlRMIWSJqQQxpZBMOcxLAiRA" +
            "AjIToAEgc+s5Tna12+jRo9vooDY3BtIBIosgARKQmwANALnbzzHSRwIAYQfARAIA1eTEjYFqEuF3" +
            "EiABxxGgAeC4JpdT4agdAAt10CBzwKBByzRV66VDWSyCBEiABKQkQANAymZzntBROwAm5QAYITdg" +
            "wIDm3BgoQoOfJEACTiRAA8CJrS6jztgBsEu3bosgeqZO4tMPQCeQLIYESEBOAjQA5Gw3x0ktdgAc" +
            "Pnx4ex0Vpx+AjjBZFAmQgHwEaADI12aOkzjiAJiWlqaHA2CEX07vnj3/QT+ACA5+kgAJOI0ADQCn" +
            "tbiE+kY5AOoy/x9BcHFBQSb9ACI0+EkCJOA0AjQAnNbiEuob5QBYoLP4IT+AUIhhnQtmcSRAAiRg" +
            "dQI0AKzeQpRPUeAA2L/fwOUGoBB+AGtDIYYNKJxFkgAJkICVCdAAsHLrULYQAeEA2HdA3w4G4MgT" +
            "oYVFiGEDymaRJEACJGBpAjQALN08FC7iAOjxePR0ADwFdtSoUWcritrt1A1ekAAJkIBDCNAAcEhD" +
            "y6om3v5naIqyFfLr6gAY4ZGRkTEU119XGxqR2/wkARIgAdsToAFg+yaWXsHOqqptgBZ5BmlSKAwM" +
            "YWgYVD6LJQESIAFLEqABYMlmoVCnCGhaj6HDh6869V3/i4JqA6Oz/kWzRBIgARKwLgEaANZtG8dL" +
            "NmvWrAxVVdv36tXL0M45ZGDA0HA8cAIgARJwFAEaAI5qbrmUDa3P15R1kNqQ+f8IDRgYWcLQEAZH" +
            "5B4/SYAESMDuBGgA2L2FJdYvtD4f6/ShgqEGAMrnxkAS/04oOgmQQGIEaAAkxo25UkBArM8X6/RR" +
            "VY7B1XFjIIMBs3gSIAHrEaABYL02oUSnCKjdRo8e3ebUV+MuMgcMGrSMGwMZB5glkwAJWI8ADQDr" +
            "tQklAoFIAKD09HRDAgDVhDxgwIDm3BioJhV+JwESsDMBGgB2bl2JdYvaAbAwRWrQDyBFoFkNCZCA" +
            "NQjQALBGO1CKGgSidgA02gEwUjP9ACIk+EkCJOAIAjQAHNHMEiqJHQC7dOu2CJJnpkj6nN49e/6D" +
            "fgApos1qSIAETCdAA8D0JqAAtREQOwAOHz68fW3PjLp3cUFBJv0AjKLLckmABKxGgAaA1VqE8pxy" +
            "AExLS0uJA2AU8pAfQCgAUdRNXpIACZCAHQnQALBjq0quk9iYx8gdAOvBI/wA1oYCENWTiI9IgARI" +
            "wA4EaADYoRXtp0NkB8CCFKuWJwIPiQBEKa6X1ZEACZBAygnQAEg5clbYIAHjdwCsU4RRo0adrShq" +
            "tzoT8AEJkAAJ2IQADQCbNKRd1IjaATDLDJ0yMjKGot6vqwMRmSEC6yQBEiCBlBCgAZASzKwkVgKp" +
            "2gGwHnkKhf+B8EOoJw0fkQAJkID0BGgASN+E9lIghTsA1gWuQFW1DXjYua4EvE8CJEACdiBAA8AO" +
            "rWgjHaJ2AMwzS62hw4evUuCHYFb9rJcESIAEUkGABkAqKLOOOAio3cKOeHFk0Tlpr169sApBbS/8" +
            "EXQumsWRAAmQgGUI0ACwTFNQkMgOgNWOeGYCyVc0ZZ3H5bnPTCFYNwmQAAkYSYAGgJF0WXZcBKJ2" +
            "AEzVBkB1yceNgeoiw/skQAK2IUADwDZNKb8iJuwAWBe0zAGDBi3jxkB14eF9EiABOxCgAWCHVrSL" +
            "Dj/sAJhjtkoDBgzowI2BzG4F1k8CJGAkARoARtJl2XERQIfbZdiwYU3jymRcYvoBGMeWJZMACViA" +
            "AA0ACzQCRVBO7QCYnp6e6h0A68JPP4C6yPA+CZCALQjQALBFM8qvRJQDYKFFtMnp3bPnP+gHYJHW" +
            "oBgkQAK6E6ABoDtSFpgIAQs5AJ4S/+KCghz6AZzCwQsSIAGbEaABYLMGlVYdOAD27zdwOeTPtJAO" +
            "IT+A0P4EFhKKopAACZCAHgRoAOhBkWUkTUA4AOb3z2+edEH6FiD8ANaG9ifQt1yWRgIkQAKmE6AB" +
            "YHoTUIBIBMC0tDSrOABGGiWvZevW88X+BJEb/CQBEiABuxCgAWCXlpRYD7z9zxBb8EIFsyMAnkFx" +
            "9OjRbRRF7XbGA94gARIgAckJ0ACQvAFtIj423wltwVtgNX2qlyV+XT1KYTXxKA8JkAAJJEyABkDC" +
            "6JhRNwLYeje0Ba9uBepaUKEYnRCjFLqWysJIgARIwGQCNABMbgCnVy+23BVb72IL3iyLsiioHp3o" +
            "bFH5KBYJkAAJJESABkBC2JhJLwKhJXbYehflWW7+P6JjaHQCoxSR7/wkARIgATsQoAFgh1aUWIfQ" +
            "EjsstYMKljUAMDoBHwW1vRitkBg1RScBEiCB0wjQADgNB7+kmoBYYieW2qHevFTXHUd93BgoDlhM" +
            "SgIkIAcBGgBytJONpVS7jRo16myLK8iNgSzeQBSPBEggfgI0AOJnxhw6EYgEAMrIyBiqU5FGFZM5" +
            "YNCgZdwYyCi8LJcESMAMAjQAzKDOOkMEonYAtOz8f6SpBgwY0IEbA0Vo8JMESMAOBGgA2KEVJdXB" +
            "ijsA1oOSfgD1wOEjEiAB+QjQAJCvzewjMXYA7NKt2yIolCOBUvQDkKCRKCIJkEDsBGgAxM6KKXUm" +
            "IHYAHDZsWFOdizWquJzePXv+g34ARuFluSRAAqkmQAMg1cRZX4hAxAGwOta+FFQuLijIoR+AFE1F" +
            "IUmABGIgQAMgBkhMoj+BKAfAQv1LN6zEkB9AKHqhYVWwYBIgARJIDQEaAKnhzFpqEIhyALTcDoA1" +
            "RI3+KvwA1oaiF0bf5TUJkAAJSEiABoCEjWYHkVVN7d5vwIDXJNMlr22rVo9D5gskk5vikgAJkMAZ" +
            "BGgAnIGEN1JCQFUuGDRoUGZK6tKxklFjx7ZWuDGQjkRZFAmQgFkEaACYRd7B9Qb8/v/VFO0TILB8" +
            "AKCazeR2u/MUVflU6FDzGb+TAAmQgEwEPDIJS1ltQiCoXaEo6kpoU5ikRgeRvwznmurze3wq2Lmv" +
            "TNM0YVw0E99xFOIU38WZbMyBQkWD7JrQQfkVTh4kQAIkICUBVUqpKbShBLDtbdO0tLRGrhMud7mn" +
            "PKnfiMfjUYPBoAud8llKUCmGE90wVVOOF00rHoJOWktAEdHpL8L5iN/vx8u48mtco1NXz0OnLKYU" +
            "zsJNj6Iplbg+hvMQ0hzQVOUrCLFp1JgxL7Rr1+463B+HMyFjALqogVLfOyizMYyBNxWX4oMqx1wu" +
            "V7CysjIRnRSRF2VUgPuhKVOmVEA2HiRAAiRgKIGk/rgbKhkLTymBgM83H53mhei9OqMDPYpO+gSu" +
            "q3CdUIcWER7lIL8aVBQNnbH6NTrND73F3v9EZ1eINCsi6WL4FB3/3TgXBXwBn6oqV6HgrSh9o6pq" +
            "3+D+kRPl5Q+1PXjw2AZFqeyhKJ6vMjPPapSe/jM8OwsnDAQ1F+KIbYd3Q5aXi4qLxDRECc4cnPEc" +
            "I2ADlPl9/v+DfgOgWyuUhzo0F/RL6N8UsrmgTxrKa4oSDkCv1UXTvFfFIxTTkgAJkEA8BBL6YxVP" +
            "BUxrfQKPPfroC5UVVUObNG26YvyPx5firR0dtuGHeAO/K8Za7ke6R+b4AgF0jj9G5/hSUNVuKi4u" +
            "PhJj/tOS+Uv9v0M5Q4UzHwyJv071er9EghKcsTolLkTaBTgNOXbs2HHuiteW/6ZKC551+x13dDGk" +
            "EhZKAiTgeAI0ABz/E1CUxx6dt719Tvucyy6/3Go01kKgiXP8/kmYLLgNb8krGnorFtMXyJOB8+SM" +
            "GTMO1afQvIceOrciPeNlTVXdk2+bPB7bEj+L9GKEwBLHY/Meq6gor3gQIxX3WUIgCkECJGArAnQC" +
            "tFVzJqbMyfKTOw8c+HYPcl+YWAmG5Fp86NChyU/8/YnXEDOgwp3mboG5cTGnf8YRnr5Q+2J4vyve" +
            "7MuR4CTODH+pLx1Gw2cYWv/IO807uWbG23/2s29xbyCG8gOPz3sMUwku/1Tv1DW4N6FmWhO+r60o" +
            "L2+BaYVUjMaYoB6rJAESMJsARwDMbgEL1I837AfhgXZjkdf7OsSxQue3MOAP7EPndw9+oPOKioun" +
            "1oYJHf8/0LmPwbNVXbt1e3Do0KG98BZ/TiTt8ePH1y9btmz3N19//VtMGwyCMfACRhBuijyP/pw7" +
            "d25aVWXVR0j3Od64n8ez+dHPU3x98K3lywd9uvmzsqJib5sU183qSIAEHEKABoBDGrohNeHVvhIO" +
            "bNthBKBPNdUIWAiDpAoOewWuNHef2t76hfMd5u9vwdv+mptvueWRpk2b/hdkLqhHx4V79uz546Ln" +
            "n38IHXwfOOz9DSMCv6gtvd/nex3/KILwC3gRzx+uLY3B94SzY2HA518E/4TFMH7uMrg+Fk8CJOBQ" +
            "AjQAHNrwtamNzu/7AQMH9h44cOALeG7GXPhivPlvgSf8NXhT71yHjAvRiY/s2bvXxcOHDy9Gmng6" +
            "yJkrVqwIbNq48Q0YAa9gNcJP66jjdRgghzES8B2eT6gtjYH3rpnj8/8Kxg1GIop/bGA9LJoESMDh" +
            "BFwO15/qRxPQ1DmrP/hwFW4V4twR/SgF1zsOHz58G97s7xZv/rXVB+/9x9H5D8GweFd0/v9Emng6" +
            "f1HkXSNGjHgZoxxXYnqhD0Y9nqutHm9x8SXogDvO8c/5Hs+FI2Kqjkno/O/BSMwedv6pQs56SMC5" +
            "BGgAOLftz9BcDIvDke5VhLldiYdimZ4Yjk7VMfHvf/sbNgdS59Y67F/q/y067avR+Q+EQGU4Ex2h" +
            "yEHej2EEPIy5jjYwKhbj+xmH2+PupynBaSdPnrwWD1PBYSa4X4sVCeUwQK4+QyDeIAESIAGdCdAA" +
            "0Bmo7MWh85kAr/stmIOeA10KU6TPQgT3uRZD/8dhhEyrtU5Vm9C1Y7fheFaGM9HOP7ro+TAmnkac" +
            "o2xMfSyJfiCuw9H41AXz5z32d3x9pOZznb8Lvwc3uLfHtITl1mLqrCuLIwESsAgBGgAWaQgriYH5" +
            "9+vhgPY1hqP9kGuSwbKJt+u7Ud8dFcGqEbXVhbf0Bbi/8dKRl96JTz06/0g1D08t9n4GwyOrNiMA" +
            "nfHteCPPQshhYQQYNSWydt26dfchzsGkb/bv7RcRjJ8kQAIkYDQBGgBGE5a0fMxBYwpAPQAjQBgA" +
            "9xuoxgIR2hdz/8sQuEes36/l0K65fvz4mXgQ75x/LWWdcWsCjID36zICMEKwTFWUp5Gr5Iycyd8Q" +
            "RkXhO2+9/T5Yl5aUlHDNf/JMWQIJkECMBGgAxAjKiclE1D0xJ425afFmutAgBhhe18Z/s3/fDbWV" +
            "j7X+c9ABr8rOzr63tuc63bsLRsBf4GDYAvUtii6zehleu7KysrdwX09fAFHWOOFvIfwu6lqWGC0L" +
            "r0mABEhATwI0APSkacOyxJy0mJvGHPVhqLdWZxUXo9x74HG/Am+/Yve+Mw4MjY8YPOSiUjyob53/" +
            "GfkSuCF8AubAMTAHcQbEG3/08dam9RsexI3TjIPoBAlci7X+c4S/hfC7SCA/s5AACZBAUgRoACSF" +
            "zxmZxdy0mKPGXLWIuqenEbAIb91XKKo6ozaSs2fPbgPj4Oy+ffteUttzA+7Nx+qASRiRGCJGHiLl" +
            "YwRiPQyDEfiulwEglvv5hZ+F8LeI1MNPEiABEkglARoAqaQtaV3huWm1NDxXrd/ywI0bN67Dmvdz" +
            "vV7v5trQuF2u3+MN+U08G1fbc4PulSG6YD46/NtDuwaiEkwD/DeMlO99Pt/HOtR5f9ivQj0Q9rPQ" +
            "oUQWQQIkQAIJEKABkAA0J2aJihGwGPoX4hRz2MkcO1auWPETFPBRPYX07Nil0xN4nlNPGr0fZSK0" +
            "sIgEOBtv/jdjJOD3ogJV0/a7VfVXuFyZRIXY48DfT/hVCP+KJMphVhIgARJImgANgKQROqeA6rnq" +
            "rdUxAu5OUvPtmqJ2R0e7pc5yNKXT4MGD29X53LgHeQgD3FxTtQ8h3/hAqf9fGBFoiutGqHJNgtWu" +
            "FH4UXOufID1mIwES0J0ADQDdkdq7QBgB12Fefm/18sBJSWhbhrxt0Mk+XlsZs2bNylBVtVFmZmbL" +
            "2p6n4N4E+AO8gCkKbCesjUV97WAEHMDn9wnULdb638K1/gmQYxYSIAHDCNAAMAytfQuGEXB19fJA" +
            "ESZ3YaKaYu19U3Tyh2rL73K5zkGHewTP8mt7nqJ7jxR5i36J+f+F2Ep4KaZB7kG9ZXHWLaZKxnGt" +
            "f5zUmJwESMBwAjQADEdszwpqLA8UfgGJHGmaplXUlhGGQRrm4MWzZrU9T9G9TNSzQEQETNBbX3T+" +
            "hZj3X8y1/ilqMVZDAiQQMwEaADGjYsKaBKKWB4r4/WtrPk/mezAYdKHTFJHxzDQAhAp5MFIeSVCX" +
            "idX+Elu51j9BgsxGAiRgGAEaAIahtX/BNZYHFkLjHXFqXSHe9BvIk9fA81Q8vgtGQGGcFYW29hX+" +
            "EiG/iTgzMzkJkAAJGE2ABoDRhG1eftTywJVQdRxOMewd0wEHu0PoWJvGlNj8RIsgqxiNKIxBFLHc" +
            "j1v7xgCKSUiABMwjQAPAPPa2qVkMb4uQttXD3cIIiOUoRKLdyDc5lsQWSCP8ARbhFEZAfYfY2pfL" +
            "/eojxGckQAKWIEADwBLNIL8Qwkmuegvh30GbSTFolIud9jYhwk6XGNJaJUkBBKnPwFmL41dc7meV" +
            "5qIcJEAC9RGgAVAfHT6Li0CcWwjnFIwY8SQqEDsNynTk1CGs8H8ofOftt1fBEPJxa986KPE2CZCA" +
            "ZQjQALBMU9hDEBHiNtYthC+44II+iAXwrd/v71aP9vE6FtZTlGGPhN/DOARHWoygwW/BEPq5YTWx" +
            "YBIgARLQiQANAJ1AspgfCNSIEVDf8sBxCAf8qqJps37IHb7yeDwqjAPEAlK213xmwe/jMO9/Ewyf" +
            "c6H7jRaUjyKRAAmQwBkEaACcgYQ39CAQFSOgvi2ExyLm/kPo5i955pln3HrUa0IZk7CUsQz7BBTC" +
            "p6HMhPpZJQmQAAkkRIAGQELYmKkhAjViBAjHubqWB96NOfN/7t+7/7k6ytxex32L3dYaa5p61GJC" +
            "URwSIAESqJMADYA60fBBsgSiYgRgblwpxFmbETBxqtfrxWqAyx566KHGtdS5vZZ7Vrr1COID5GMq" +
            "4xPo0MNKglEWEiABEqiPAA2A+ujwWdIEqkPg1reFsFhf/wiG0B9rlJHxXqRCrUorhgOA+H1uj9yz" +
            "6GdovwBMZRRjKmPk3LlzG4psaFE1KBYJkIDTCNAAcFqLm6BvKBQuQuIG/IHJqP6eWkSYgA4UUwDq" +
            "Mb/Pv1Q8VxUlG6fwC9guvlv8EOGKF6iqy1dVWbXK4rJSPBIgARIIEcDfWB4kkBoC6NxfhWf/ianF" +
            "RQdQ44QatYrlfvlz/IENcP7/DNdBpO0ytdjbG9ff1Uhr1a/3YDWAcHr8DksBx1tVSMpFAiRAAoIA" +
            "RwD4O0gZAbE8EJW1QycpnOWEX0D0IQLsLCoq9rbBUHouzgJMAXwFD/vvcb8234HovFa5fhj+DA9g" +
            "OmMQdHzQKkJRDhIgARKojQANgNqo8J5hBBAoKB+hcm9dt25dbVsIF8ChboF3WnEuVgb8FRMBr1cL" +
            "ssYwgfQveNGIyy65KBjUvFgJwX9f+vNliSRAAjoR8OhUDoshgTgIqL533nzrwz59+nRHpu04hSNd" +
            "5JgAI0DBm//EyA18luEsiPpu5cvMbt26LV2xfPn8llktPoKg+VYWlrKRAAk4lwDfUJzb9qZpHl4e" +
            "qP4bToFvQohCnDWH+IURENl+V8hZJv4j0ZGHqYAm2O54l9/nWyaR3BSVBEiABEiABIwnECj1/ytQ" +
            "6vsAnX0hztqO7biJKQOtWW0PJbg3UegH58e/GU+TNZAACZAACZCARATQOT4PQ2AVOvOJ9XToJXj2" +
            "ST3PrfroewiWH/D5d/tL/X+QqFkoKgmQgAMIcBmgAxrZ6ipimHyJqqnn3lk05cPy8vK7Tp44oVRW" +
            "VSknjh9Xjh49qlRUVCjp6enlXbp2Tbe6LrXItxYOj2PefvOtjXBubFLLc94iARIgAVMI0AAwBTsr" +
            "rUkAQ+WvBDWt4oofXXk0GAyOP37smHIChsBxGAHHcO1yuZQfjRxZM5ss3xeKpY9Y1jgYQZEGyCI0" +
            "5SQBErA3AToB2rt9pdGuaFrxFS7V1XbpS0sPYNh8k9vtDnX6LpdbEdcnTpxUMDogjT41BJ0Ap8At" +
            "iA9wMODz/bPGM34lARIgAVMI0AAwBTsrrY0AIgT2TfN4btm4ceMYrKPfLDp+t9uluENGgEvZt29f" +
            "bdlkufcwwh3/PzEKACPgj7IITTlJgATsS4AGgH3bVjrNsPYf/aPq+3r3nje/P/j9nVDgSMgI8IRH" +
            "A/bs3i2dTjUEXjRg4MCLoeSUGvf5lQRIgARSToAGQMqRs8L6CES2EF7/6aezv9333VVIezQ8EuBW" +
            "vvn6G5mnAYTaOQMHDvwtHG+eheNjmbjBgwRIgATMIkADwCzyrLdOApEthLds++wPWBFwv3AAFNMA" +
            "VcEqZfsXX9SZT5IHwh/gBYx0nIepgJmSyEwxSYAEbEiABoANG9UOKkW2EN64YeMYGAF/dGMaQBgB" +
            "W7dutYN6C8ZdM248pgJut4My1IEESEBOAjQA5Gw3R0gNI+BqTVXLP9uypcfJkyeXiakAESPg822f" +
            "y65/ZuvWredgFOApTgXI3pSUnwTkJUADQN62c4TkYgthBAlqv3Xrtu1BLfi2C0bAmo8/lt0XQLRd" +
            "QZG36FN8tsBUwJ8c0ZhUkgRIwFIEaABYqjkoTG0Evtm/t5/H7b7VE0z7KSIEbhe+AJgaqC2pbPdK" +
            "hg4b9lNFU26RTXDKSwIkID8BGgDyt6HtNSgpKQliuLz0853b3t6+fXuhx+M5tnnzJjuMAmT27t37" +
            "z2jA1dgP4a+2b0gqSAIkYCkCNAAs1RwUpi4CkeWBZzVuvOS8rKyR2B/gxPr16+tKLtP9ggmTJy1Q" +
            "VGW8TEJTVhIgAfkJcC8A+dvQURrAae5ZDJm3bXN+278e/O473zXXXac0aSL9Hjs7An7/avg6lBdN" +
            "894kS4POmjUrA0s0z6msrPQImTEyU4l9HI7MmDHjpCw6UE4ScDIBGgBObn1JdYcRgN0DlczW57d9" +
            "q1lm5i8LCgsl1eQHsTGicftjf5nnhwGQ8cNd61wFAoG2qqbdhQ2bOkGqzjDCchG5MR1LGY8omlYZ" +
            "klRVPfiDcg72cijHiMZ23NvqUtVtWMkxs6io6KtQGv6HBEjAMgRoAFimKShIPAT8Pv+riqIdP//8" +
            "89sOHz68X2azZvFkt2LaHXN8gQ8hWIVVRgECvsAjihYchE6+D/5QfKepyhZ8bmzdosUTQwoKmmVn" +
            "Zx+DvAJ8fhTQNdizoXzXrl2tVr37bn/kvQDGWhd8NlMVda3qUt5BIKR7o9LzkgRIwCQCNABMAs9q" +
            "kycAx7k1iqq9eefUqeMxFN0y+RLNLcEqowBYljhf05Rx+OOw7tzsrN+OGTOm41lnndUDdERHXxAn" +
            "pR1IX3bkyJF3n3n66U7lJ8tHhIwBt+tijArsjbMsJicBEtCRAA0AHWGyqNQSwOoAV4us7EOjrxoz" +
            "qH379utQuzu1Euhem6mjAP5S//0wqCZBq4033nTTwubNm9+A67E6ankQZS1asmTJzK927npVVZUX" +
            "ioqLRX08SIAESIAESCA+Aui0/hDw+Xdj3nkYzkqcUh/l5eW3YWQj5U504LgA0yr7Vq9efSEAlhkM" +
            "8XuUPzFQ6lsHXf8VX4szNQmQgF4EOAKgF0mWYxoBOAUuROV9irze5/F5v2mC6FNxykcB0BE/h/n9" +
            "TuB3F1RYhDNTH1UaLGUS/B6KMOqwByMB4xpMzQQkQAK6EmAcAF1xsjAzCIjdA2HJiqV0l6B+sYxO" +
            "DDXLeuTcduftyyD8talQAJ3/K+j8s9H5P4z6VuBMVecv1Js/tbgooClqS/gdCMODBwmQQAoJ0ABI" +
            "IWxWZRyB8Buk6sIb5SjUIpzVVhpXm7Elp6Wl/Ro1vIDh8aeMqkn4T4ScKBX1JDr/1ahnvlF1NVDu" +
            "fOyJMBfLCsWeCDQCGoDFxySgJwEaAHrSZFmmEsDGQcM1Vbvu4Ycf/gaClJgqTHKVGzoKIPwmhPOk" +
            "WEGBN/ADEFUM/Zt5YCTA+xcaAWY2Aet2IgEaAE5sdXvr/O9G6Y18sqto1CiA8JeA9/2tFw8b2h3r" +
            "8duB0wSLsKIRYJGGoBjOIUADwDlt7QhN4QuADQI0sWZd9kP3UQDh7Idww3lTvUU9+vTp8yIAjbUY" +
            "pJARQJ8Ai7UKxbEtARoAtm1aZyqGbQMfRcS51nbQXs9RgIizH4b8J4LNGpx5FmUkfAL+qGhqay4R" +
            "tGgLUSzbEKABYJumpCKCADakOaAp2nk2oZEz6fbJc6BLwisCop397pwy5SGUVYYzB6eVjwUwVKbA" +
            "n6OLiE9gZUEpGwnITIAGgMytR9nPIDBlyhQRn74K8ejPOuOhhDcyMjLug9gJrQiIOPtVBYNvTZg8" +
            "8QsE33muqqoqEzv2Yf8ezco0xFLEMqxOgH+CdiVWB/zeysJSNhKQlQANAFlbjnLXTQA70X269tOq" +
            "uhNI9aQgkVEA8eYsnP365Of1mHz75GHYK2G66PhrnhY2BIQRsGDQhYMHw1aZKlWLUVgSkIQADQBJ" +
            "GopixkVg6+bPNl4dVw4LJ453FCA0d65qfW+6+Sdj8vLyPkGn3wdv/koQZ+hTGAJVpxsDFlU/r3//" +
            "/rMURX0eOq2wqIwUiwSkJUADQNqmo+B1EQjtQa+p3fF8bV1pJLsf8yhA2HFOy/nJzTdPxtv9CnT+" +
            "TSNv/ZgKCI0ACCOgKhg2BsS1xY+xRcVF6+APIKIF/snislI8EpCKAA0AqZqLwsZCoLyychaC3HRB" +
            "WuHtbosDowC3QJF6fQHEsL9wnLv+xzdMraqsfF10/pE3f/H2HzIEarz5i3sq5gosfjx8xZVXTkOg" +
            "IMGABwmQgE4EaADoBJLFWIfAjBkzdmEpYPbx48dfso5USUsyAb4AP8cKh+tqK0k4/AmHufE33HCb" +
            "Fgy+jrf90978xdt/ePi/ehpAGAIwCoQPgAQGgNKpU6f/ht6rMcLx19r05z0SIIH4CdAAiJ8Zc0hA" +
            "AB3lpn+/+OIeCUSNWUSMAvwavfUibNv7fM1MeIn3wuFvcCXe/NHR1/nmf2oaQEwBwCiQ6CiYeNvk" +
            "5xVVGS+RzBSVBCxNgAaApZuHwiVKABHvPvlm3z4v8i9OtAwL5puAIDn34k3/ivAbf1hCvBWvwYv8" +
            "Uzk5OU/DAGgS6eTF8H5db/6R6QAZ3v4j7dCoUaP7YNgthb6GbZIUqYufJOAEAjQAnNDKDtTRVVVx" +
            "HzrFIVDdbjvM3Y0oeY/hTfg2dITCJ0CEPt47evTI7zHvf1HIu796vj9kCFTP+UeMgpDzX9R0gGQ/" +
            "jZzb77hjKWROODCSZPpSXBIwlAANAEPxsnCzCEy5664v0Um6li9b/r5ZMhhU70R4xf+3qmgvwuGv" +
            "PerYeOWokfdVVFXdKzr/qqrKame/8LK/IIb6Qw6A1XP+oVGBKAPB7XYbJKYxxYrwyND7RawIeNKY" +
            "GlgqCTiHgMc5qlJTpxGAb/u7W77Y/J+XKpeKaYCxNtFfBMi5u6i4eFJEny2fffYeRjuUIBRGwB9F" +
            "Q2cvHPvF8L74Lr6oqqZgeSQGC8KfQZEB3y0cCCiiXs3PnImTJv3nwvkL/lrzAb+TAAnER4AjAPHx" +
            "YmqJCFQGg79ANzccIpdJJHYsot6NjruZSLh58+biisrKweLNH97/4WA/1Q5+waCGEYHwvfCbf3Uc" +
            "gGrfAHFPxqNx48bFsFyW1eYMKaM+lJkEzCKAVwIeJGBfAgGff/eFQy4am5+fb7epgEl4w1+wbt26" +
            "r/Bm30bFmz7e88VLPc7wm7/4FDdC38UzV/haVZFWPEKe7OxsBasLZPwBdEDbfgg9FmM05LaIAg89" +
            "9FDj9PT0s6Bzmqfco1amV8JW0ipa7N9/+IaSkvJIOn6SAAngbwAhkICdCfh9viX4ke+Y6vVeBT1z" +
            "bKTrjs8///zBI4cP+0QHf/opOnhxL9zJh4b+q9MIM0H8X0wNiDQtWrZU4F0vI5aZkP9ujAJ8htGA" +
            "llDgJM6m0A2hDdVjULFC9PxIg8kPJQ1pmkDhw6qmbYAhtAq/B6ym4EECziaAfyc8SMC+BAK+wANY" +
            "OnYpls9thpYT7KTpV7t2Hd67b18TdPXhzh4deqRjF527uOmKvO3jWrz5n+r8q/O0btNGVgPgIHQM" +
            "TYM89thjTS688MLOXbt2vQTbQQ9DG+fjrGnsrT18+PB7Lyx+wXPo4Pd5MAqaqW7XxUVFRXvt9Jug" +
            "LiQQDwEaAPHQYlrpCDxTUpK+Pyv7UFGx90YIf0YAHekUihL46z17lK+++godu+jcwx18+BP9PN7w" +
            "o9/8Q/eRN2IgCONA3Gvbtq2COfWoUqW6vAbSCiPgbpx5cUi++J133nlo7cdrngOpJd5p3slx5GVS" +
            "ErANARoAtmlKKlIXAbFWvlXb1pPGjRu3qq40Mt7HG62yaePGkOiRjl106uI1P/w9bAiE7ogOvxY/" +
            "gfPbtZPWACgvL1fwxh/SNYH2O4g8hfAj+DssoU+9YQMxgWKYhQTkJcBVAPK2HSWPlYCqffz17t0z" +
            "kHxtrFlkSNekiZjWVrHuP+ztL2L9C69/TRPe/uHrYGX1JkDVKwRCcQHEdXUeTJPLoGqtMh45ckQ5" +
            "cOBArc9iuCmWU5ZhZEhsMNRTbKQUQx4mIQFbEaABYKvmpDK1EajStF9hy5uL8aystucy32vWrFmo" +
            "s/+hYw9v+hNa/ieCAMEYiEQEDBsIEYNAfFYpR48elVZ9EcToKIyAE8ePJ6pD2AjwFsFvQLsSwYV+" +
            "n2hBzEcCMhKgASBjq1HmuAhMmzZtB16L0+E1/2ZcGSVI3Lz5uaFd/sIdfvjN/7RofyLqnxgZEMZA" +
            "1Jt/yBjAd5lHAITsldDtu++/T6alQkbAoAsHD0ZxU5MpiHlJQDYCNABkazHKmxgBVVn9yr//XYjM" +
            "Yu7XNsd5WeeF5sAjnb4wBETnHp4GENfh4D/hzj9iIFRPD1Q/kxVGI8QvEHoJXwBs/ZyMGnn9+/f/" +
            "H3hMPA9/kRXJFMS8JCATARoAMrUWZU2YANzi1mEaYAAKKEu4EItmbH7uueFpgOrO/wdjIDzMH/4e" +
            "NgZq+gnAUrCoVg2LJSQX+gg/h4MHk7brJmCPhSXYZ6AlpgL+1HDtTEEC8hOgASB/G1KDGAict++b" +
            "/0Fn1xdJF8WQXKokWVlZoTd9Mcwf/eZ/agdA0UmGpgAi0wDhUYLQ6IDEBoCIYBiZ3hCjAOJM8ljQ" +
            "s1evsUByc5LlMDsJSEGABoAUzUQhkyVQHQZ26/Lly79Ktiyr5RfhfF0I81vzzV/sDRCaEgh9/tD5" +
            "RxwGxdvzMYmdAMVSx/CIBnQL6XIs2abJHD58+K+wtOJjRJBcmGxhzE8CVidAA8DqLUT59COAP+yf" +
            "bfpsIgq01XJAAUiMAojtgMNbAoc7+9DwuHjzD40AnL5UUDwTowXlFRUiu7SHG3EAxEiHcAY8ekyX" +
            "FQ0Trhkz+j8QNeEaaaFQcBKIkQANgBhBMZn8BBAD/hfYAFfsDrhAfm1O1yC7RYuQp39oGgBr/E8Z" +
            "AqHO/wfnv1P3q0cFxCiBzIcHSwHDBg6MgMpKPaYBlFbt298L6+g97DMQkJkNZSeBhgjQAGiIEJ/b" +
            "hgDivn8Fx7Fjb7311hrbKFWtSEts6uN2oTMUHTve+msu+wvNlQsnwZp+AjAQZD7S0tKVKjgBhkY7" +
            "8HnixAk91BnXqm2b/4IRcIkehbEMErAqARoAVm0ZymUIAQTOW/Hp2nW/ROErDanAxELFKEDkDT88" +
            "/B/u8MWcf/RyQPEs/LxKqZB8CiAtPS1s7AidoGcSQYGiWy4TYaN7I6Jy41mzZp0f/YDXJGAnAjQA" +
            "7NSa1KVBAtg7fipGAYYgjKzthndbtmp56s1fO20aAFMA1eGBhYEQMRLEaMGhQ4caZGblBOnpGAGo" +
            "NmjE57FjSTsCRtQdp2jq62lu958jN/hJAnYjQAPAbi1KfWIgoC7++8K//hgJd8SQWJokrVu3PnMa" +
            "QHT41fP9oY6/enog2kCQRsFaBA0tBQxNe4jRjrAzYEW5Lo6NY7t27PogjMWLaqmWt0jAFgRoANii" +
            "GalEPASw/SvWeaujMfz923jyyZD2/Hbnn3rDD6/zr54GEPP/eEMWxkBNPwEZ9KpLRhENMKSX0K1a" +
            "v4pKXQwA5dKRlw5SEG04EAjk1lU/75OAzARoAMjcepQ9GQLPPfaXeSNRQNIh5JIRQu+8OTm51R0i" +
            "4vyLzh6dYjgWADpIMQ0QNQUQMQj0liGV5TVq3DisnzBwqp0BT548qZcI4+AzshIW0x/1KpDlkICV" +
            "CNAAsFJrUJaUESia5r0JlV2FpWOzUlZpCipq1ryZ0qhRo+pdACPOf1jzL4bJhTFQPQUgRgEi0wAp" +
            "EMvQKhqHjIDKsP8DdNRxaePYLh26/R+nAQxtPhZuIgEaACbCZ9WmE3hu3txHe0AKW/kCtGnb5vQ3" +
            "/1DnHx76jwyTR08DHNh/wPSGSEYAt/uHiIChUQ0dwxtzGiCZlmFeqxOgAWD1FqJ8hhEQowCaol2N" +
            "GPL/z7BKTCg4t0OH0LC4WP532pt/aI48HCQoshJATA+AgQlS6ldl08zM8NSGMHTEyIaOBgCkHAd/" +
            "kTKlSuMGQfo1GUuyCAEaABZpCIphEgFVXfT4o49dj9ptExfgXOwO2LgxpgFqefOPTAGEHefCfgI6" +
            "d5gpb0gx5RHSSxg4+k4BCF3GXnr5pTPxOSLlirFCEjCYAA0AgwGzeGsTaHxW41vxBjwWUj5ibUnj" +
            "k+78du3C0wAYBQgP+0fe/Ku/C4dAnKLjlP0IGQChVQ7Cz0Hope+IRteuXdH5a59im+AnZWdF+Ukg" +
            "moAa/YXXJOBEAoFS3ztaUP1Z0fSif0P/TDsw+PbAAWXJ4iXY2E7BToGw83HhEl8Q3k58V3Ed/upS" +
            "LrlkhCKiCMp6iGiGK15/XRExAURgoNzcXKV1mzZ6qrMDvHL9pb69oLYqqGr3guEhjLBUeco9armn" +
            "XIAVXGF7aBUt9u8/XL37pJ4ysCwS0J2AR/cSWSAJyEZAVdYpbuXnEFvsEVAgm/i1yXvueecpjc86" +
            "K7Tdr9j1T3T2Gv6jovMX3v+4ChsBLox/6PzGXJs8Rt5LS0sLdfyhVQ6YAjhxQrdlgBGxc8AoH0ZA" +
            "C2wT/KxLU/+FoZOmMKjcVWmVmlsFRByCLhin7c/KboKNhA7j1kacq7zF3v8Uz3mQgNUI0ACwWotQ" +
            "npQTqNK0v7hU5S+o+EjKKzewwp49eyir3nsv/PYf6p7w5l9tDKiqGBXAWyv+p++AuYEK1VO0ePs/" +
            "cviIEnQHleMnjteTMuFHdyPnxCKvVziMwjFQKcSZjzMHZ/Qh4kr8+7vvvvvghSVLWh07cmw4Rg62" +
            "u1zqM1O93nujE/KaBMwmQB8As1uA9ZtOIC0YPIhe0BZD/9Ewc3IjQYEw71893x8JDBSOAyACA2Gl" +
            "gOQjAELn5s2bhx0Bq30eojnocQ1G47B/xBso6wucD+MUfiM1O3/cCv2OxkKeB26dMGHa1OKijQMG" +
            "DfwJ5gauDpT6V4gEPEjAKgRoAFilJSiHaQQq3W5M4qrpECDXNCEMqLhJkyZKM3SMQQz5h5zj0NmL" +
            "ZXIhY0BcVzvOiVUDsh9iKWB4CgD6QUe9DxgAmWs+XjPs6NGj8RY9YeDAgW9j5OBpDcYDRgO+85f6" +
            "fxdvIUxPAkYQoAFgBFWWKRUB4byFGXLxb6G2NzqpdKkpbLdu3cNvxtUdvugcw6sCwisA3B53aP68" +
            "Zj7ZvmeKWABCNzECAINH7wO/kZCBsW3rVgVxIxIp/jdFxUX9Bl04OA/zMLfBR2BeIoUwDwnoSYAG" +
            "gJ40WZaUBBAOWNOEV5wNj+4XdD/V4Z/+5h8OEtSqZStbaH322WdjlUO4kz52LO639JgYNGlyjnL8" +
            "+HHlq127Eh1lyOvfv/8bGA24EvMuBTQCYsLORAYSoAFgIFwWTQJmExDOcbm5HcJvxxgF+OEtObxm" +
            "vmfvXmaLqFv95553LoydoHL0iDEGgJhmOIkVBocPH1YOHzqUqNxilKmsqNg7EKNOV3E6IFGMzKcH" +
            "ARoAelBkGSRgYQIdO3fCC2d4bjwUAbB6qLxV61ZKG33Xy5tKQXTQlVXhTYGMEKQpfCrE8L/YbXDf" +
            "vn2hKYEE6xEOp2WDBg8WRkBRgmUwGwkkTYAGQNIIWQAJWJtAjx49MM+fUS0kIgLCAPB40pRLLr3U" +
            "2oLHKV12VlZoukMYOSI4kN6HCJYkDIDy8oqQEXAo8VEAIZqYDsBOlOrzXB2gd0uxvFgJ0ACIlRTT" +
            "2ZaAcAIUQVyg4Fq7KtmpU6dTqjVp0lS59vrrlKZNm566Z4eLFi1bhlY2CANHDNMbcZwTGgU4GTIE" +
            "Dh0US/6TOsbCMXCdpmotEWaYmw0lhZKZEyHAQECJUGMeWxHAEq8KEcENSn1vK8WilBky9GIlPSM9" +
            "FPK3S+cuSlq6UNd+R9PMpsqxY8cwsq7/SgBB69xzmyu74AQoRgKOHz+hB8CSwhEjLilbsWIZCvsP" +
            "PQpkGSQQKwGOAMRKiulsSwBvjEewBOAcKFhmVyWFl3xBYaEipgPs2vmLtssKTQPAEVAYAQYcWdnZ" +
            "oc5fOAOWl+sScjjzggsueAiirsJUwFMGiMwiSaBOAjQA6kTDB04hMGPGjJOIiH8S4Vs/c4rOdtUz" +
            "Gx202OHw6BFjojq3atUqZABEnAHFskAdjgIsDXwcv8Hrn3nmGbcO5bEIEoiJAA2AmDAxkd0JqJq6" +
            "fcWKFTvsrqfd9WuJDrqqstKoGYAQvmaZzaqNgIpE4wHU1gyPYHemeQf27n+ttoe8RwJGEKABYARV" +
            "likfAVXbvPfrrydAcNs6AsrXKPFLLLYDFssBv/vu2/gzx5ijdds2WAVwIjQFIBwOdTpyirxF36Cs" +
            "jj6fr51OZbIYEqiXAA2AevHwoYMIbMZ+uXnQt8xBOttS1Uy8oYu1+kYdLbHaIDIFoPNUw93pGWn/" +
            "hD/Ks0bJznJJIJoADYBoGrx2LIGKqqr/RTDgPgBQ5lgINlG8Xbt2SpJr9OslIRwN09LSTxkB9SaO" +
            "72Hm5NtvP4KdKdvOfXhu6/iyMjUJxE+AywDjZ2aLHLNmzco4q7Ly7IrGjT1px49XHvN4jgpnOFso" +
            "l4ASQnfEZt/50UcfVfXr1y+BEpjFKgREhMPDbxgTByCiY1Z2lrJ3715l//79ith2WcfjbvgCPFWV" +
            "XvUYyhylY7ksigTOIEAD4Awk9rwxd+7czKqKqoexE1kfvGF0UlW1UbnLfVStClaWp2d40lT1bGxV" +
            "egJvwdtAYD22jf2v6dOn77YnjTq00pSN77/33mU0AOrgI8lt4Qcgdgc8AQ/9Ro0bGyJ1u/PbKTu/" +
            "3KkcPJjwngB1yZUJX4BVAZ//TsSnwD9T1ZiABnXVzvuOIkADwObN/UxJSfr+7BavVVVU9ka0u+V9" +
            "8vP/1LVr18MYxkQc8tOO7/E2swWe8EfgiTzV7XK9D4PgKN5GXvcWex0Rrxx/bL/AX9uuoCJWA+Sc" +
            "RodfpCLQokXLUDRAowyADp06Ku+8+45y8PvvFOwmidDKuv4pLcG/u2fn+AJPAvpNUoGnsFIR0PVX" +
            "K5XmDhAWO43N3a9oE9I9ngW33XnH61B5Is7r6lJdzG2OHz9ePBae8H9666231ny6dt0vYQgg5qn6" +
            "vHead6J4aNdDraqYr7ndC6Dfdpw0AABB1qNVq5bKQcTqF/H7jTrERkp7v/km5G9w7rnn6llNzs23" +
            "3Dzlib/9nc6AelJlWWcQoBPgGUjscUNEFVMVbTi2HZ2Kzv9GaPUbnLF2asIb/uGhQ4eumFrs3T36" +
            "qjFD4JncKlDq2xnwBR6wB6EztQh6PIcRD6AJntg2JPCZWtvzjpiXP25QNMAIMYykhRwB98EXQO8D" +
            "+zQUYTrubewRMEfvslkeCUQI0ACIkLDRJ978RVSx3ui8V0Gt+TjF9qOJHhPat2//6dTiok2du3W9" +
            "AtvKToKz3DOJFmblfGJPAMgnguSvsbKclC02Ao0aNYotYYKp2p5/PvYGOC/kC5BgEfVlG5uXn/+/" +
            "2NLAXls21qcxn6WcAA2AlCM3tkJ0/vfjzeEqvPn/CzVN0LG2uy677LJlKPdmOBGe5/f5PtSxbEsU" +
            "JXYFxC4y/DdhidZIXohOnTsnX0gDJeT366t8g2mA0AZEDaSN9/GQIUMuwb9l1+zZszvEm5fpSSAW" +
            "AvxjFwslmdKo2qTLr7jcC5HFkL/eh5hCWIEtTN/ElMAq+AYchsHxB70rMas8OHPB7xp/cnnYggAM" +
            "OsP1aNu2rSKWHW7csMGIuiYiONUyt8vtM6JwlkkCxv8LIeOUEcB8oRju39i5c+f/M7jS30z1ette" +
            "PGzoBaqq3IrRgIUG15fq4renukLWJy+BocOGKbt371a+/Vb38MM5MLaXY1TqCnnpUHIrE6ABYOXW" +
            "iVM2TVGuuXXChI+QTbypG32M7dOnz4tTvUU9UFE+nA7FlINdju12UYR6GE8gIyNDuXjoUOWTdetC" +
            "SwJ1rnECVuC8AuP+LzqXy+JIQKEBYJMfAYbiZ8GD/WPs+57KdcNitcAabGWKP1JKO/yRWmQTnFSD" +
            "BOIiIJYB5uXlK9u2bo0rXwyJx7Zr3+4+TVELY0jLJCQQFwEaAHHhsnBiVRuCt5AXIGEq3v6jQYj6" +
            "yrBKYAr+SLWkERCNhtdOItCseTOlW/fuuqs8ZsyYPogHmMFdAnVH6/gCaQDY4CdQUlIi2jG/d15v" +
            "sZmNGYdYZliGEKZFWCHQgkaAGU3AOm1M4G4Nzrf4R/4nG+tI1UwgQAPABOh6V9kiq8VvUKaY+y/U" +
            "u+w4ygsZAYg94OVIQBzUmJQEGiaQN/iiwXNgBFzUcFKmIIHYCdAAiJ2VZVNiv5DumP8X4XvFcLyZ" +
            "R9RIgNraZo6BZnJl3Q4ngA2qfoTRtcpAIJDrcBRUX0cCNAB0hGlaUZrabfCQC981rf7TK64eCYBP" +
            "gKp1seESwdO15TcSSA2BiVhyu1IJBv+YmupYixMI0ACwQSujo83F8bWFVKkeCfBOQFydy+0ULMhC" +
            "jCmKswjkDCsoeJrTAM5qdKO1pQFgNGGDy581a1YGOtmM5s2bDzK4qniLF0bAgiFDL4ZcWnG8mU1O" +
            "38zk+lk9CZxBoGfPniM5DXAGFt5IggANgCTgWSErwp2eg7eCI1aQpRYZ8kSwIAxd/lWyvQPya9GF" +
            "t0jAbALjxDSAFtQeNFsQ1m8PAjQAJG9HNw5V06osrEYewgafjZjmB7E88J8WlpOikYDVCeSMHD36" +
            "RYyoDbG6oJRPDgI0AORopzqlrMKhqaq7zgTWeDABMc3/hpGKwTAC6MRkjTahFBISyMnJuQrTAEfn" +
            "zJzTRULxKbLFCNAAsFiDxCtOMBg8gu3rzkE+q+9h/8gVV145CkbAlHh1ZHoSIIFTBMQ0wCtBT9Ws" +
            "U3d4QQIJEqABkCA4q2SbMWPGSU3Tyvft21duFZnqkCOzU6dOpZgKeA7xAVbUkYa3SYAE6ieQeceU" +
            "Ka9jFIA7BNbPiU9jIEADIAZIlk+iKts/Xfuplf0AIggLMBWwDssWW8/x+63syEQnwEiL8dNyBOD2" +
            "M1ZR1ZcxncYdAi3XOnIJRANArvaqS9qtmz/beHVdDy12v6Rrh27XBjXtRovJFS0OlwFG0+C11QiM" +
            "y8nN+SVG0y6xmmCURy4CNADkaq9apXWp6jZNU8U2ZCIcsNWPzEtHXnoD9jjfjjeY2VYS1uPxIKoy" +
            "Bld5kIC1CWSOGjUqNErl9/s7WltUSmdlAjQArNw6McpWpYyf+ukAACzcSURBVGmz4QjYGcmt7ggY" +
            "0ejutue3/Rm62ssiN6zwCYdK/HtQg1aQhTKQQAMEJiqqtgy/Vn8D6fiYBOokQAOgTjTyPCguLt4J" +
            "aVtVVlZ+KYnUmVdfffUYTVXORiTD860is6qqaZClAmeuVWSiHCRQB4ECxNf4M/xpLqveDryOZLxN" +
            "AnUToAFQNxupnmDkesuGDRu2SST0RMxhvp7mdv/ZKjK7Kiub4A/qYciTYxWZKAcJ1EOgBCN/z7bM" +
            "zn6qnjR8RAJ1EqABUCcayR6oyuZ33nrLavsB1Acx5/IrL38JE+6W2eM86PJMxBTAnvqE5jMSsBCB" +
            "CT+55ZZfwZAeZyGZKIpEBGgASNRY9YkqmSNgSJXOnTuPhh9AcO7Mme3r0y1Vz1RFy8Ep0yhKqtCw" +
            "HosSaNq06X0Q7QXE1uAogEXbyMpi0QCwcuvEIVuUI2BZHNnMTlqIqGbvBN1pD5gtSHX9nVu2bv2k" +
            "RWShGCQQC4EJP/npzb9AwmtjScw0JBBNgAZANA2JryOOgOXl5W9KpEZOfl6/RZh3720FmTEdkTN0" +
            "6NDmVpCFMpBArAQ4ChArKaarSYAGQE0iUn/XNr/00ku7ZVIhv39+U1UJxTAwVWysRsjAKoD07Ozs" +
            "Y6YKwspJIH4CHAWInxlzgAANABv9DLAr4KZv9uyZBJVkCAgUIt+oUaOhWMGwz+zlgC6X6xyMAByx" +
            "0c+BqjiIAEYB/gR16QvgoDbXQ1UaAHpQtEgZcGDbBI/gPIhTZhGRYhEjHzJvSfd4ZsSS2Kg0IgYA" +
            "llSJGAA8SEBGAmMn3T55DgSnL4CMrWeSzDQATAJvRLUVVVX/q6hKH5RdZkT5BpWZh/i7m7A3QCeD" +
            "yo+pWBEFECMRIgog9wGIiRgTWY1ARkYGVwRYrVEsLg8NAIs3UDzihbYGVpSdL7744pfx5DM7bd/+" +
            "/VdABhHK2ApHKMa6FQShDCQQJ4ECjgLESczhyWkA2OwHgGmADbu+/HIC1Nohi2odO3Y8hngAubLI" +
            "SzlJwKoEwqMA2kv+Uv8TVpWRclmHAA0A67SFXpJ8jjn1bihMlo2BFHjeDxIe+MITXy8ILIcEHEqg" +
            "4Nrx1/8J8TWucqj+VDsOAjQA4oAlQ9LKYPAvWFcvIutJYwAIrsIDX3jiW4AxfQAs0AgUIXECLVq0" +
            "uBP/oFZjFGBW4qUwpxMI0ACwWSunp6fvwT/+1lBLJgMgX3jgV+/GZ0qLeDwe+CIKO0TJN0UAVkoC" +
            "+hEYd16LrBJsFzxEvyJZkh0J0ACwWatOmTLlIFTyHDp06IREqjVD31tZVVXlMUtmsQoAGwGJVQA8" +
            "SEB2Apnjx4/vACXyuVWw7E1prPw0AIzla0rpeJv+Yvny5cIQkOVopmpqOd7C080SuHr0gXEAzGoA" +
            "1qs3gXEo8CNsFVyid8Eszz4EaADYpy2jNdmKiIA/ib5h8es8+C0cdlVWNjFLTlG3kAH1cwrArEZg" +
            "vXoSGIsXgY/gENxDz0JZlr0I0ACwV3uGtNEUdQdOUwPrxI9V3RN0eSbGn0+fHOG61T0oLVOfElkK" +
            "CZhL4JLLLlsHo7aXuVKwdisToAFg5dZJUDb8o1+IrK0SzG5KNsQv2IYzx5TKUamoW8hgVv2slwT0" +
            "JtC1a9cW2Ggrh8tr9SZrn/JoANinLU9p4q50H1U07exTNyS4aNm69ZMQ08xogJ375uevlAAVRSSB" +
            "WAkUYl3LujS3+1exZmA6ZxGgAeCs9rastkOHDm2ONXimjQCIujt26cKtgC37C6FgCRDIx1JAsTOo" +
            "CAzGgwTOIEAD4Awk8t+o8lSdrajqUZk0QTRA0fm6586de1aq5RZDpCISYbUMqa6e9ZGAUQQyW7Rq" +
            "tbA6MqhRdbBciQnQAJC48eoSHUvqJuDZ13U9t+p9zFceqKysPC/V8okIhBgBOIJ6C1NdN+sjASMJ" +
            "jBgxIhM+QblG1sGy5SVAA0DetqtTclkd2hAMaA9+kHfUqZhBDzRNwx4E2kmDimexJGAagebNmx+D" +
            "YZ1BR0DTmsDSFdMAsHTzJCyclA5t2MBkoxnrlt1udyOMmojIiYwBkPBPjhktSqBQjG5ZZJ8NiyJy" +
            "rlimhV51LnLjNcc/+A4X9OolhrSlOtIbNZpx8viJXakWWgQBCrrdIghQs1TXzfpIwGgCCAhk6j4b" +
            "RuvH8hMnwBGAxNlZMiec6EQgm8qmTZt2t6SAdQtVMnny5POwIP+1QKn/hbqT6f8kKggQRwD0x8sS" +
            "TSaAqTVsdSH2uuBBAqcT4I/idB7SfysvL2+NTlREtJPtbbYAMq8p8np/q6lKrzl+/4OpaowonwlG" +
            "AUwVdNZDAiRgOgEaAKY3gb4CeFyuOzGf/SVKLdS35JSUJjrgsit/dOXVwaCWSmdAKX0mUtIirIQE" +
            "SMC2BGgA2K9pOyL4x2aoJetwdmbHjh1nYxRjSaDU90oqmkdWn4lUsGEdJEAC9iVAA8BmbYtNgHrk" +
            "9e79HNSSeTi7AFMBH2MqoMfs2bPbGNlEUT4TFxpZD8smARIgAasRoAFgtRZJQp5QRDtFaXfRsGHN" +
            "kyjGKllL0tPSnnGrLmHMGHZE+UzkGlYJCyYBEiABCxKgAWDBRklUpNCmH9j8A/kLEy3DQvkyb7vj" +
            "DqFLR7ylZxklV5TPhKxTJkahYbkkQAI2J0ADwEYNjOH/7tWbfxTaRK27ERzolWBF1WwD9Yn4TOQZ" +
            "WAeLJgESIAHLEaABYLkmSVwgVdO6Y1vd+SjBLp1Z3qALLyxFLPOLE6dSf07hMzG8sPD9+lPxKQlI" +
            "SyBXWskpuOEEaAAYjjiVFajdRo8ebajTXCq1EXX169fvQuxpXhkIBHL1rjviM9GjR48uepfN8kjA" +
            "IgRyLSIHxbAgARoAFmyURETy+XztkO/r9PT03onkt3CeiZgGWKkEg3/UW8Y0j+e/sQRwDcot1Lts" +
            "lkcCJEACVidAA8DqLRSjfG5VnY7ObCuSF8aYRZZkYhpgLnS7SG+BsQtgb0QB/BDlFuhdNssjARIg" +
            "AasToAFg9RaKUb6gpnVSVW0TktuuMzNqGgDbpA4YN3bs6hgRMxkJkAAJ2IoADQD7NGfnbl0vWGIf" +
            "dU7TJDQNoAU13fYHQIChDtgk5Xirtm0LT6uJX0iABEjAIQRoANiloTWlfe/83nbd3jmvYMSIJxVF" +
            "G6JXc7ld7j8qmroS5RXqVSbLIQESIAGZCNAAkKm16pFVVdXMrKyso/UkkfrRBRdcMBqrAY7OmTlH" +
            "J499bUjhJYVPAUqO1GAoPAmQAAkkSIAGQILgmC3lBMaFggJ5qmYlW3PIiIAxAaPi5mTLYn4SsDiB" +
            "XBVzXR6PR7W4nBTPBAI0AEyAbkSV8Gg/uH///rONKNsiZebcfuedz2EU4Ipk5QnCiBDGBMoZl2xZ" +
            "zE8CFieAES41iIN/6y3eUGaIxx+FGdSNqFNVvty2bVtjI4q2Spl4i5mgqOrLAZ/vL0nJBCPijilT" +
            "XkcZMu+YmBQCZnYUgQpMEaY5SmMqGxMBGgAxYZIi0daPV68eIYWkiQs5rl37dvchfG9hokWEjAcY" +
            "EW63e0KiZTAfCchEAKG0D7sqK5vIJDNlTQ0BGgCp4Wx4LS5V3aYpygWoaIfhlZlXQeaYMWP6YM+D" +
            "xggN3DYRMYTxkN+7l4gqODaR/MxDAvIRUPcEXZ6J8slNiY0mQAPAaMIpKl9T1Zlw9hEe8mUpqtKs" +
            "aiaiE38DMQH+EK8AIlwyGGVcNGxY33jzMj0JyEoA0S634eRqF1kb0EC5aQAYCDeVRRcVFX2FEYDm" +
            "x44deyeV9ZpQV0HX7l0XKJoWdyeOH/ufwGgFZL7bBLlZJQmYQqBvfr6Id9HZlMpZqaUJ0ACwdPPE" +
            "KZyqfrJ0ydJtceaSLvmll17aE2F8u8ydOzcuxyZ0/hddfuXlL0HhHOmUpsAkkCCBjl26HMNvn7/5" +
            "BPnZORsNADu1rqZ8sO/Avl9CpcV2UqsWXQpxb02wsvLXtTyr9Zbf7++oamp5586dR9eagDdJwKYE" +
            "srOzj2EVQLrY/tqmKlKtBAnQAEgQnBWzead5ZyBc7rDy8vK/WVE+HWUaq6jaWvgCdI+1TDWozMRb" +
            "0HKk59r/WKExnW0I4Ld/xOVynWMbhaiILgRoAOiC0UKFqOprj8+bdwkksvNqAOXCIUOEr4NY9RDb" +
            "oSqji4qLfo/EXPsfGzGmshEBVVEYC8BG7amXKjQA9CJplXJUZRo2ubkS4jxiFZGMkCM/Pz8XjoA9" +
            "Yinb7/O9r2nKX5E2N5b0TEMCNiNQiGjAjAZos0bVQx0aAHpQtFAZXq/3cyHO0qVLy/BxUFzb9cBb" +
            "zXp/qf93demHZ6Xo/L9Eut2YHpmIdLl1peV9EiABEnAaAbtuH+u0djxdX1V7fcf2HaJjXIRzwukP" +
            "bfRNVd6Ez8Nl0Eg4PoaO2bNnt8FWvwtxfwTW/L9ZUVU1ZPr06VlTvd5CJBAnDxIgARIgARCgAWDD" +
            "n0FRcfGd/lJf1YkTJzo3atTIrgbAduhZEij1fQBdP1VUZSe8/Nsj7Glmmidt2eTbJ/8nnJ5EtL+d" +
            "NmxiqkQCJEACSROgAZA0QosWgN3uFjz++M/w5rsWEuZZVMpkxJqPHRBzsbxpIOL7PwQv5/OCqvYz" +
            "TIEI/4cSnHT2S4Yu89qJQL6dlKEu+hGgAaAfS0uV5Kp0zwi6q16EUAGcD1tKOP2E+Q2MgHEobiIM" +
            "gTW4XoBru4546EeNJTmNQDOnKUx9YyNAJ8DYOEmXaupdU7dgWPzs1atXvyud8PEJLEY3PkbnX4ZP" +
            "dv7xsWNqhxCAP4yG7bThD8uDBH4gQAPgBxY2vFLf+WDVqqlQTEwD2P0osLuC1I8EEiegchlg4vBs" +
            "m5MGgG2bVlFUl3ov1r+LjlGsBuBBAiTgTAK5UJuBgJzZ9vVqTQOgXjxyP8QOgdsxDeBZv3693acB" +
            "5G4oSk8CxhLIweqYw67KyibGVsPSZSNAA0C2FotTXkz6vfvmypU3IputgwLFiYXJScBhBNQ9QZdn" +
            "osOUproNEKAB0AAg6R+7XD/nNID0rUgFSCApAqqibcOZk1QhzGw7AjQAbNekpysUNQ3w1OlP+I0E" +
            "SMApBLp27/4CdO3sFH2pZ2wEaADExknqVGIa4I2yN26CEjukVoTCkwAJJESgd+/eHk1ROAKQED37" +
            "ZqIBYN+2PaVZUFH+A0bACNx45NRNXpAACTiGQHZ29jEEy0qfNWtWhmOUpqINEqAB0CAi+RMUFxfv" +
            "1FTl5IsvvviG/NpQAxIggUQIYATgCPbHOCeRvMxjTwI0AOzZrmdoBQegsp1f7nwADxae8ZA3SIAE" +
            "7E6gGUYBGQvA7q0cp340AOIEJmtysUMgtsi9AvLTAJC1ESk3CSROIB/RgBkNMHF+tsxJA8CWzVqX" +
            "UuorAV/gOjx1QmjguiDwPgmQAAmQAAjQAHDSz0BVpmEY8EdQmc6ATmp36koCJEACtRCgAVALFLve" +
            "8nq9nwvdli5dugYfjAxo14amXiRwJoFmZ97iHacToAHgtF+Aqr2+Y/uO30HtRU5TnfqSgIMJ5DtY" +
            "d6peBwEaAHWAsevtkDOgpl1ZUVEx0646Ui8SIAESIIGGCdAAaJiR/VKoyiuPPfroZChGZ0D7tS41" +
            "IoFaCahYBuDxeOAGxIMEwgRoADjwl+CqdM/ABkFiSeAjDlSfKpOAQwmoXAbo0JavS20aAHWRsfH9" +
            "qXdN3aKoytllr5S9Z2M1qRoJkMAPBApwyUBAP/DgFQjQAHDsz0B9Z+OWjfdC/cWORUDFScBBBDRV" +
            "O+yqrGziIJWpagMEaAA0AMiuj6uCVT9XVE28FXA1gF0bmXqRwGkE1D1Bl2fiabf4xdEEaAA4tPmn" +
            "T5/+haqojdesWbPeoQioNgk4igD2A9mGk1sCO6rV61eWBkD9fGz9FE7BH773zju3QkmuBrB1S1M5" +
            "ElCUrt27vwAOncmCBCIEaABESDjwE/uDf6Ip6gCoXuZA9akyCTiKQO/evT3YEpgjAI5q9fqVpQFQ" +
            "Px9bP62orPwfLAoWEcLKbK0olSMBElCys7OPwehPnzVrVgZxkIAgQAPAwb+DGTNmnMQ0wI6XXnpp" +
            "p4MxUHUScAwBjAAccblc5zhGYSpaLwEaAPXisf9DVVM/3bljxx3QlH4A9m9uauhwAhjxYywAh/8G" +
            "otWnARBNw4HXeCPYqGhqX6he5kD1qTIJOIlALkb8GA3QSS3egK40ABoAZPfHlcHKBxAVsA/0LLO7" +
            "rtSPBBxOINfh+lP9GgRoANQA4rSvET+At1euPOg03akvCZAACTiZAA0AJ7d+te7CD+CT9et/jK87" +
            "iIMESIAESMAZBGgAOKOd69WSfgD14uFDEiABErAlARoAtmzW+JSK8gNYE19OpiYBEiABEpCVAA0A" +
            "WVtOR7lDfgCa9uXHH3/8uY7FsigSIAESIAELE6ABYOHGSaloqrph1bvvXo466QyYUvCsjARSRqBZ" +
            "ympiRVIQoAEgRTOlRMitmqb2QE2cBkgJblZCAiknIMJ+8yCBUwRoAJxC4ewLBAiZhShhYqewMmeT" +
            "oPYkQAIk4AwCNACc0c4NallcXCz2A2h18uTJtxpMzAQkQAIkQALSE6ABIH0T6qmAtnnp0qVH9SyR" +
            "ZZEACZAACViTAA0Aa7aLKVJpqrrpmz17JqFybgxkSguwUhIgARJIHQEaAKljbfmaVEXbhI2B8iAo" +
            "HQEt31oUkARIgASSI0ADIDl+tsrt8nh+C4WEp3CZrRSjMiRAAiRAAmcQoAFwBhLn3pgyZUoFVgNs" +
            "Wb58+VfOpUDNSYAESMAZBGgAOKOdY9dSVT/+bNNnE5GBfgCxU2NKEiABEpCOAA0A6ZrMWIGrglU/" +
            "V1StALWUGVsTSycBEiABEjCTAA0AM+lbsO7p06fvVjXl8Or33y+zoHgUiQRIgARIQCcCNAB0Ammr" +
            "YlTltfc/XP0z6LTSVnpRGRIgARIggVMEaACcQsGLCIGi4uLpiqLlfvTRR7+I3OMnCZAACZCAvQjQ" +
            "ALBXe+qmjUtVn1713nsLUOD9uhXKgkiABEiABCxDgAaAZZrCWoJM9XrvVTV1T8AXaA/JuCLAWs1D" +
            "aUiABEggaQI0AJJGaN8CiqZ5R2BFwLV7d+8thpYH7aspNSMBEiAB5xGgAeC8No9LY2wRPPfZRf96" +
            "CpnujisjE5MACZAACViaAA0ASzeP+cLBIfDnMAJWYSrgp5BmpvkSUQISIAESIAE9CNAA0IOizcuA" +
            "ETAeUwGZc/z+NKi60ObqUj0SsC0BxPjQPB4PbHoeJKAoNAD4K4iJgLe4eICmKbeuW7fuPmSgU2BM" +
            "1JiIBKxGQA3i4N99qzWLSfLwh2ASeDmrVX3vvPX2+5C9ECeNADkbkVI7l4DY6bNCVVUxkseDBDgC" +
            "wN9A7AS807y/wAjiqwG/fyVyFeKkERA7PqYkAbMJZGqqdthVWdnEbEFYvzUIcATAGu0gjRSYCpiA" +
            "+ABb5vgCL0PoQpw0AqRpPQpKAuqeoMszkRxIQBCgAcDfQdwEEB/gek1VdtMIiBsdM5CAqQRURduG" +
            "M8dUIVi5ZQjQALBMU8gliLfYew0k3snpALnajdI6m0Df/HwxfdfZ2RSofYQADYAICX7GTUCMBCDT" +
            "mjn+wAasDhiDa04HxE2RGUggdQQ6dulyTFMUjgCkDrmla6IBYOnmsb5wwicAywP/+vabb21CnIA3" +
            "ITHjBFi/2SihQwlkZ2cfg+pp8+fPb+RQBFQ7igANgCgYvEyMgFgdsHf/vqaKpg7DlMC5KIVGQGIo" +
            "mYsEjCZQqKjKYRxcCWA0aQnKpwEgQSPJIGJJSUkQUwJYZ6w2nuPzd4DM98ggN2UkAccR0JSjaWlp" +
            "ZztObyp8BgEaAGcg4Y1kCMA58HIYAYdgBNyAciYlUxbzkgAJ6E5AjAAcVCsqMnUvmQVKR4AGgHRN" +
            "Zn2BMRJwFf7I7A34/FMhbV+cB60vNSUkAUcQyIWBzlgAjmjqhpWkAdAwI6ZIgAA2EBqnKuou+AQI" +
            "f4BCnFwhkABHZiEBnQnkiFgAMNBzdS6XxUlIgAaAhI0mi8hRywSXcpmgLK1GOe1OYMjQoR8qmtbF" +
            "7npSv4YJ0ABomBFTJEGAywSTgMesJGAAgR49emRhdI4GgAFsZSuSBoBsLSahvNHLBBE++DyowBUC" +
            "ErYjRbYHAY/H0xuafO3z+drZQyNqkSgBGgCJkmO+uAj8sExQy4BfwHXIfA1OOgfGRZGJSUAXArmI" +
            "BrjVrarTdSmNhUhLgAaAtE0np+BF04qvUDVlH0YCSqBBIc4dOHmQAAmkjkCBqmqbgprWKXVVsiYr" +
            "EqABYMVWsblMMAKuxb7ka7GHgHAOHAp1V9pcZapHApYi0KVbt0WKpnSzlFAUJuUEaACkHDkrFARq" +
            "OAd+gltiuSAPEiCBFBAYOnQodvSmI2AKUFu6ChoAlm4eewtXi3PgJHtrTO1IwBoEMjIyhAWwu7S0" +
            "lDsDWqNJTJGCBoAp2FlphEAN58DbcL8vTjoHRgDxkwSMIVCIYjfCEfA/jCmepcpAgAaADK3kABmj" +
            "nAMXQN1cnGtx8iABEjCGQAF8AD7ADp7C4ObhUAI0ABza8FZUO8o5cEN15ED6BVixoSiTLQgUFRd9" +
            "gZDA/WfNmpVhC4WoRNwEaADEjYwZjCQQ5Ry4cY7ffxh13WNkfSybBBxMYCJGARZ53J6/OZiBo1Wn" +
            "AeDo5rem8tXOgZkYnhwW8Acug5QjcNIvwJrNRankJVAw8bZJ87AvwDh5VaDkyRBQk8nMvCRgNAG/" +
            "z7cMgYOyphZ770BdC3DmGV0nyycBBxFYiaBc+6FvBTbvuslBelNVEOAIAH8GliaAKYGRmqpuCvj8" +
            "L1X7BSy2tMAUjgTkIlAw6fbJcyDytXKJTWn1IEADQA+KLMNQAt5i708VRf3b22++tQl+ATtR2UxD" +
            "K2ThJOAgAogJcB/UfSFQ6n/KQWpTVRCgAcCfgRQEagQNEjHMJ+GkX4AUrUchLU5A+AIENEUTm3Tx" +
            "cBAB+gA4qLHtomqg1PcKopg1LvJ6xW5mZTgz7aIb9SABkwisxOjaN3C8dcMX4HqTZGC1KSbAEYAU" +
            "A2d1yRNg0KDkGbIEEqhBoGCq17sMcQFGMy5ADTI2/koDwMaNa2fVGDTIzq1L3UwiUKIo2jyP2/26" +
            "SfWz2hQToAGQYuCsTj8CUUGDhHMggwbph5YlOZNADkYBViM4UKa/1P9nZyJwltY0AJzV3rbTtoZz" +
            "4KVQkM6BtmtlKpRCAo/07NrlGlXRbk5hnazKJAJ0AjQJPKvVnwCdA/VnyhIdSeD+OT7/QCy9PQCH" +
            "wFsdScAhSnMEwCEN7QQ16RzohFamjikgcPeVo0ZOhkPg+BTUxSpMJEADwET4rFp/ArU4BzJyoP6Y" +
            "WaK9CWR26NDhj4gLsJTBgezd0DQA7N2+jtSuhnOgiBy40JEgqDQJJE5gws233PJzZGeI4MQZWj4n" +
            "DQDLNxEFTIRAtHNgwO8/F2UI50AeJEACMRJo2rQpQwTHyErWZHQClLXlKHfMBPw+/6uqpqVjR8GH" +
            "kWkBTkYOjJkeEzqZwMmTJy+fP+/xl+AMmOFkDnbVnSMAdm1Z6nWKADYTuhwezYfg2Xwvbhbi5B4C" +
            "p+jwggTqJsCNgupmY4cnNADs0IrUoUECeIO5Cl7Ne7GtsNj6NB/n2gYzMQEJkAC3C7bxb4AGgI0b" +
            "l6qdTqCouHicqqi74BMgVgYU4qQRcDoifiOBMwhgFOBPCBH8EqIDPnHGQ96QmgANAKmbj8LHS6B6" +
            "p7M1c/yBDevWrRuD/MIY4EECJFA3gbxbJ9z6sqoqV9WdhE9kJEADQMZWo8xJEYhaJrgRewhwmWBS" +
            "NJnZCQTOOuec/8IeAasxCjDLCfo6RUcaAE5paep5GoHqZYKZ2P98WMAfyMLDe05LwC8kQALRBHL6" +
            "9M2bq6jakOibvJabAA0AuduP0idBoKSkJIgpATgEam6sEBCbn4zAeTCJIpmVBGxLYMiQIRdCuXz8" +
            "u2G/YZNWZkPapCGpRuIEMCUwUlNVbCkceHL16tV9UNLKxEtjThKwLQGxeuajFlktfmNbDR2mGA0A" +
            "hzU41a2dAGIF/BQjAQvff2/V2oAv8DlSiSkBjgbUjot3nUmgQNXUtaqqdXem+vbTmgaA/dqUGiVI" +
            "AMsE/8s7rbg5wmN2wFLBOzdu3HgJiuJoQII8mc1+BFq0brkAfjPd7KeZMzWiAeDMdqfW9RCAX8AI" +
            "GAFLy1asWAZD4BCSXoNzRz1Z+IgEHEFgxIgRmZqq5TpCWQcoib9zPEiABOoiILZDxbao1yuqOq/I" +
            "W7QZ6Upwci+BuoDxvt0JjJjjC7zsSnOfM2XKlAq7K2t3/TgCYPcWpn5JEcBowE1ZLbIbqZrSHX/4" +
            "7nl83rx5KPB+nPQPSIosM0tLQFVOVlZWcnMgaRvwB8FpAPzAglckUCuBG264oUpMCwRVbejJ8vLh" +
            "2E/gDsQOeAqJJ+Hk1ECt1HjTtgQ0JcPj8Zy0rX4OUoxTAA5qbKqqD4G5D89tXZVe9RhWDVyBf0DP" +
            "Tr799mfS09Ono/QCfWpgKSRgTQLffffd6KefeupJLJ1tZk0JKVU8BDgCEA8tpiUBEJhyz5Q9WDY4" +
            "au++fekCyOOPPvYknAUPfPvttxfh60KcnB4QYHjYjsCKFSsOYingdtsp5lCFOALg0Ian2voSCO+U" +
            "po3FlsNvtz3//F9cffXVYjTgbpw5+tbE0kjAPALYO+NR1J6JJbM/Nk8K1qwXAY4A6EWS5TiaAPYW" +
            "uBkxBM6BRf3FVzt3PQOHwWn4Y/kCoIzAudjRcKi8XQisRAyAPCgjVsPwsAEBGgA2aESqYB0CeDOa" +
            "CkOgi+ZSrsAfyy6YGngNDoPle/bs6QEpZ+Lk9IB1mouSxEdgDZLnuzye38aXjamtSoBTAFZtGcpl" +
            "CwJi45SWWS2eQCyBqzg9YIsmdawSmzZsmLFiRdkUGLi9HAvBZorTALBZg1Id6xII+HxzNE25NCyh" +
            "+mJRcdFaXJfgpJ9AGAr/a10CB7FHxkswYoPhfTOsKygli50ADYDYWTElCehCYO6sWZ2qXJ6/YBlh" +
            "P0VRF8AQENMCwmGQEQZ1IcxCDCCwENNZl1UFg4OmT5++24DyWaQJBGgAmACdVZKAIDB37tzMqorK" +
            "l1VFbfSj0SN/lJub+wfcnkA6JGA1Aqvff/+aDz748PdF04ovsJpslCdxAnQCTJwdc5JAUgQQS/0g" +
            "5lMv1BTljWVLl27DygERW30Ezh1JFczMJKAvgZXvf7j6Zxj+f03fYlma2QQ4AmB2C7B+EqgmECj1" +
            "rcRl83HXXXtpq1at/g/XHA3gr8N0AuvXr//RGytXPorof+1NF4YC6EqAIwC64mRhJJA4AQyvFmiK" +
            "Wrbo2ed3IYaA8AuYlHhpzEkCuhC4H53/TJeqPq1LaSzEUgQ4AmCp5qAwJIBlASUlnhbZ2avBYkeR" +
            "1/vf+CzDSQdBQOCRUgJr4fn/ETqJDmIzrJTWzMpSQoAGQEowsxISiJ+A3+d/VdW09KnF3ruQuwwn" +
            "jYD4MTJHYgQOfv7558NeXvbvN+Cn0jyxIpjL6gQ4BWD1FqJ8jiWA9daXY5ngISy/8gFCIU4xLcCD" +
            "BFJBYOIr/375ZVVV5qSiMtZhDgGOAJjDnbWSQMwEsNHQYkXVsjAdUIxMZTg5EhAzPSZMgMA9c3z+" +
            "mzVV3cSgPwnQkygLDQCJGouiOpdAoFRsLKQ1xXTAw6DwvHNJUHODCSxE55+tqYoLXv8jDa6LxZtM" +
            "gAaAyQ3A6kkgVgLCJwBGwHGMBHyOPHfFmo/pSCBGAiux+uQTbGI1DE5/+THmYTKJCdAHQOLGo+jO" +
            "IhD2CVBy8EdaGO5rnaU9tTWYwNp169bdgr0qJn6zfy9CVPNwAgEaAE5oZepoGwJ79+3rjze0qceO" +
            "HbvdNkpREbMJCGOy8J233n4fTqc+LEMNmi0Q608NAU4BpIYzayEB3QhgV8HZYph2anHRIhT6G90K" +
            "ZkFOJBDq/LHSZCWUX4N5f0afdNCvgCMADmpsqmoPAkXFxdPhC3AMQVrOhUY77KEVtTCBQKjzh9Mf" +
            "4k2oW9j5m9ACJlfpMbl+Vk8CJJAAgYpg1Yg0t+d7ZBWe2isSKIJZnE3g1Js/dqPcAqe/652Nw5na" +
            "cwrAme1OrW1AAEsD/4X4AFVTvd4MqDPWBipRhdQQEA5/Y8ScP5z+XvFO805MTbWsxWoEaABYrUUo" +
            "DwnEQcBf6iuffPttF2RkZGyNIxuTOpfAQqwiOYyOfxIc/krR+f/CuSioOX0A+BsgAYkJYPj22ccf" +
            "e+xBqDBTYjUoemoILISz37nCgXTv/n1N2fmnBrqVa+EIgJVbh7KRQAwEAj7/8StH/ii3Q4cOm5E8" +
            "M4YsTOI8ApPg7DcJ4X3Lq+NJOI8ANT6DAEcAzkDCGyQgGQFN+efLS5c9DqkfkUxyims8gYOo4hoY" +
            "iVMR3vcgO3/jgctUAw0AmVqLspJALQTgwX0rbvd/49VXn8Cn+IPPgwQEgYin//2KqnyFZX5XEwsJ" +
            "RBOgARBNg9ckICkBTVGfWP/ZFrFJUImkKlBsfQksFp7+c/yBpShWBPi5Tt/iWZodCNAHwA6tSB1I" +
            "AAT8Pt/b+Af9EZYFXoWvOYTiWAL3w9M/G57+GBlSfXT2c+zvoEHFGQioQURMQAJyEKisqrqkOjhQ" +
            "ESSeL4fUlFJHAmL6ZxwiRP4aQ/6Z3mnFTXQsm0XZkABHAGzYqFTJuQSiggMNBgWOAjjnp7By8+bN" +
            "P1nx2uvvIjjU+wgXPd45qlPTRAnQByBRcsxHAhYkIEK6Yuj3mvLy8v9nQfEokjEE7sGQ//rXX1v+" +
            "mepS/sHO3xjIdiyVIwB2bFXq5GgCGAV4CgDSsFtgFj4LHA3D3soLL/+JGPL/M976M+HoN8De6lI7" +
            "vQlwBEBvoiyPBEwmgFGAmyDCVSdPnnzAZFFYvXEEZn7wwQdXIbLfElXVvmXnbxxoO5dMA8DOrUvd" +
            "nEzgOYQIFs6Ai50MwYa674BOI/DW3/TDDz74BEO4T3HI34atnCKVOAWQItCshgRSTUCECL7+hvF5" +
            "WVlZIkQwD/kJzCwrKyvduGHDElVTv8FIzwj5VaIGZhLgCICZ9Fk3CRhJACGC//WPZx5GFfcbWQ3L" +
            "NpyAmOvvi+H+juj8RayHpez8DWfuiAo4AuCIZqaSTiUQKPV93aNrl2HDL7/8VTDgskC5fghiXf8j" +
            "GO7Pwh/qOxDL/3nE8r9RLhUorZUJcATAyq1D2UggWQKq8vf1W7YIP4C7ky2K+VNKYPHGjRsvwTTO" +
            "9ej8811p7nPY+aeUvyMq4wiAI5qZSjqZAEIElyEk7NYib2hZ4Fgns5BA9x2QcSKG+3+Gz8GKpv4d" +
            "oXwZ00GChpNRRBoAMrYaZSaBOAnACDg6ctSoTrm5uZuQNTPO7ExuPAEx3F+C4f7O+KPM4X7jebMG" +
            "EOAUAH8GJOAAAuhU5i1bukz4AUx0gLqyqTgTWzkPxHD/7WgnDvfL1noSy8sRAIkbj6KTQDwExFQA" +
            "/sFvw26BbuSbEE9epjWEwML9+/f/rnqlRn+xpTOH+w3hzELrIEADoA4wvE0CdiTgL/V9N+jCwXn9" +
            "+/dfAv3y7KijBDqtFFEaRaAmVVFHKViuiWV92LqXBwmklgC3A04tb9ZGAqYSUFVlzvvvrVoFA2Ak" +
            "BCnDSX+A1LVIqOOfP+/xqajyJXT+z6Hjb5y66lkTCZxOgCMAp/PgNxKwPQF/qX8BNo/pW+T1immA" +
            "j22vsPkKRnf8V0Ec0fGL/Rp4kICpBGgAmIqflZOAOQSwY+C/UHM77BgYwOd8c6Swfa3s+G3fxHIr" +
            "SANA7vaj9CSQMIGAz7cIjmctER9gLgqhEZAwyTMyLjx06NADT/7tiT/gCd/4z8DDG1YhQAPAKi1B" +
            "OUjABALCCECwmdbVIwGPQAT6BCTWDqGwvXv27PnH4uee/18EXhqNYjjUnxhL5koRARoAKQLNakjA" +
            "qgTEdICmal2qfQLKICeNgNgbay2SPrJkyZK1X+3a9Qd49F+Mzn8xlvPdHHsRTEkC5hCgAWAOd9ZK" +
            "ApYiEHIMVLQrsURwMJcIxtQ0C5FqISL3XQeHypHo+INYYbG8qLhYePjzIAEpCNAAkKKZKCQJGE8A" +
            "0wG/1zRlKjqy5xAsaCdq/I3xtUpVg3jbX/Diiy++sfPLnQ8oinYF3vZfqQpWFU+fPv0LqTShsCQA" +
            "AjQA+DMgARI4jUD15kHn3XzLzf/RtGnTP+Jh3mkJnPVlB9RdtH79+mVvlL1xE972L8GfzROqopXh" +
            "bf9OZ6GgtnYjQAPAbi1KfUhABwIYDZipKcrt6OyewiqBXShSbCfsFN8A4dC3aNeOXW+++NKSoRgV" +
            "KcCrkgd/LN+tqKr6fzNmzBA8eJCA9ARoAEjfhFSABIwjENo/QFNadunY7bpLR156A2qyqyEQetNH" +
            "p/9JzU5fcbl+XlRUtN04yiyZBMwhQAPAHO6slQSkITDH738wqGk3YjRge+s2re8ZN26cWNtuB0Mg" +
            "NKeP4f2Nb65ceWP0mz47fWl+nhQ0CQI0AJKAx6wk4CQCmBaYjU7yiurh8H/fMWXKarfbfTUYjJWE" +
            "g+jwy8S5aNGi3V/v3j0D+gyFPi78IXyXnb4krUgxdSNAA0A3lCyIBJxBYPbs2R3cLrdP0bTLFVUt" +
            "y8rOemD8+PEdoP04nIU4reArIObx1+AsKy8v//Sll1766ps9eyYh6JFwaMzHuRUOfR+7Kit/OeWu" +
            "u77Edx4k4DgCNAAc1+RUmAT0I4D4AaXoSC/8/+3dTUsCQRzHcWdZ7WJREXsIKcNo82YE3XoLXXoR" +
            "3noLCb2DfQHdewu9B6mD4ANKG3ipg4KJkLo7/RY6etiovOx3YNllnAf2o8z8ZxlZtVgzVi8WMrmn" +
            "s1rt8fzi4tB13Uvll3Ukk+5/pmRlH+p4nown3WazOer22lfaxFhV3rH+o+9poOtZYzravd9xXPeu" +
            "Xq8v9BkJgUwLEABk+uvn5hH4G4FGo+F4e96tAoCqsfZUk++Jrt/Vel+DTPugVH6o+JU33/e3v3vc" +
            "1HnrB71PVPYjKT8cDmftVst7CcPrKI6PlLWv4GNXfe7oOlK/oc59x5jBfLkM2LUvDRICKwQIAFag" +
            "kIUAAr8XCIKgVHDdG20grKi1ZCVeNsYUNFFPNfAsbM7GaXsxOeOoXl71itbaeTLJa9If6GVGr5GN" +
            "7vW0YeQ4zlgr+1naNimHQNYFCACy/gvg/hFYo4CCgg1N1EUFAvk4jp20XauO4gi7UJ2pVvSfaetR" +
            "DgEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAAB" +
            "BBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQ" +
            "QAABBBBAAIF1CXwBtSz5pV82D1EAAAAASUVORK5CYII=";
    }
    return Swipe_Down;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var Double_Tap = (function () {
    function Double_Tap() {
        this.double_tap = "data:image/png;base64," +
            "iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAAAXNSR0IArs4c6QAAAAlwSFlzAAAL" +
            "EwAACxMBAJqcGAAABCZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6" +
            "eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYg" +
            "eG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4K" +
            "ICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6dGlm" +
            "Zj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmV4aWY9" +
            "Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIgogICAgICAgICAgICB4bWxuczpkYz0iaHR0" +
            "cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgICAgICAgICAgIHhtbG5zOnhtcD0iaHR0" +
            "cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyI+CiAgICAgICAgIDx0aWZmOlJlc29sdXRpb25Vbml0" +
            "PjE8L3RpZmY6UmVzb2x1dGlvblVuaXQ+CiAgICAgICAgIDx0aWZmOkNvbXByZXNzaW9uPjU8L3Rp" +
            "ZmY6Q29tcHJlc3Npb24+CiAgICAgICAgIDx0aWZmOlhSZXNvbHV0aW9uPjcyPC90aWZmOlhSZXNv" +
            "bHV0aW9uPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgog" +
            "ICAgICAgICA8dGlmZjpZUmVzb2x1dGlvbj43MjwvdGlmZjpZUmVzb2x1dGlvbj4KICAgICAgICAg" +
            "PGV4aWY6UGl4ZWxYRGltZW5zaW9uPjUxMjwvZXhpZjpQaXhlbFhEaW1lbnNpb24+CiAgICAgICAg" +
            "IDxleGlmOkNvbG9yU3BhY2U+MTwvZXhpZjpDb2xvclNwYWNlPgogICAgICAgICA8ZXhpZjpQaXhl" +
            "bFlEaW1lbnNpb24+NTEyPC9leGlmOlBpeGVsWURpbWVuc2lvbj4KICAgICAgICAgPGRjOnN1Ympl" +
            "Y3Q+CiAgICAgICAgICAgIDxyZGY6U2VxLz4KICAgICAgICAgPC9kYzpzdWJqZWN0PgogICAgICAg" +
            "ICA8eG1wOk1vZGlmeURhdGU+MjAxNTowNToxNiAwMzowNToxMzwveG1wOk1vZGlmeURhdGU+CiAg" +
            "ICAgICAgIDx4bXA6Q3JlYXRvclRvb2w+UGl4ZWxtYXRvciAzLjIuMTwveG1wOkNyZWF0b3JUb29s" +
            "PgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4Kf7BW" +
            "+AAAQABJREFUeAHsnQlgFEX2/7tnJkEEDGjCDQn3JSSAB3eCCnhCvH+uukRXDUm43Ms9/K1xf+71" +
            "++8qVxLwAlyP/eEVFG+FBBQEAWERAcGViAICKpcgZDL9/745whCS6Z7JHN0z39ptM9NVXfXq0yH1" +
            "6tWrV4rCRAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIk" +
            "QAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIk" +
            "QAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIk" +
            "QAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIk" +
            "QAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIk" +
            "QAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIk" +
            "QAIkQAIkQAIkQAIkQAIkQAIkQAKNJaA2tgI+TwLhJjBr1qwmNputuaqqSS6XyxZs/XjWpWlaNZ49" +
            "OnXq1BPBPs/yJEACJJAIBKgAJMJbNnEfFxUXJ3+blnY/ROylaGovTdUyVEVtoinKUfxyVmuK5gpW" +
            "fDxvw/NJeL45FIGTiqrsRB07bKr6+UmncxaUgq+CrZPlSYAESCDeCFABiLc3avL+zJs3L8nldP43" +
            "Bvu+GOzPVzRFBvyNiqpt7NGr10uDBg2ytWrV6iJ0oyWuLG93soPo1kaUPYhrp1yHvz+8bctnW6o/" +
            "XrduNJSCPrjXHe2lQbHYqmrqJltN9f3506Z9iftMJEACJJBQBKgAJNTrjk1ny8rKOmgu7a+Kpg3E" +
            "4NsDUmzAgP/xqJyc9/v27dsd33NwyWCfgiuSqRKVbzh+/PgHby5Zsueb/fsLNU0ZBguBDf8QVlXX" +
            "1PyC1oFI4mfdJEACZiJABcBMbyPOZCkrKZmLAXY0fsnO1hR1efuO7WdNmDBBZuG5uHJwRXrARxMB" +
            "k1gLFmzevHnL8orlt0ApuQQWieOqqiwrKCqaFPBJZpIACZCAxQlQAbD4CzSj+KVzSp9RFG0CfrlW" +
            "tu3Q/re5ubn9IacM+hPMKK9Xpir8nPH+++9v+GTjv3+H5YJhiqIuLpxceKuJZaZoJEACJBAyASoA" +
            "IaPjg3UJlM0pfQ73rsPg/9qE6679fbt27e7Ddxn4Yz3Tryuq3vfFR48efe7phU/dDCXgKhR+qWBy" +
            "4S16DzGfBEiABKxEgAqAld6WSWU9NfArr95x151zmzRpIl79wTjumbRnSlV1dfX/PPHo41dAwGtw" +
            "UREw65uiXCRAAkEToAIQNDI+4COAgf8pONDdCI/61+/82c/K4mjg93XR99OtCDz+2GNXwonxSvgJ" +
            "PA+LwE99mfxJAiRAAlYkQAXAim8txjLDue/vGARvgxjrbrj5pntTU1MfxedIzvgr/bq8AZ8P+n2X" +
            "j1m4WnrvyedILTlUYQfBrxY+OT8PbQyG8vM0nAV/6W2XP0iABEjAUgSoAFjqdcVeWMz6l2H/fpt+" +
            "PXpMGDVmTBEkmhZGqWSg3wCz+6YtW7Y4V77//gXYPdANPgXtsGe/BdpNVnFDwzTc1ya+a/iOLPUk" +
            "/nMEa/Z78PXzwYMuXJY5KFNNTk4WB0RRCnJwhUsxqNy0adMv3l+x4p+oc19hUZHUzUQCJEACliJQ" +
            "+4fUUlJT2KgTwKz/b/CMz8dQ+1JBUcErEGAGrvRGCiLb8Mq/+uqrjUteeWUkxvb+GNB74l5bjOvb" +
            "FVXdDkvDTpvLucDlcBxxOp0nk5KSNPyEKJ7kcDhUKAwqfibbnM4WLpsjD+pBBtSCHt6YA3uhIHwG" +
            "pWDTJZdd9lrPnj1FIcjBNcFTQ6P++2BZaVlHKCi34B/S47AGhFMZapRgfJgESIAE9AhQAdAjxHwF" +
            "g//zGHEvvuDCC4dfeOGFs4GkMYOne+/9unXrVn20evUk1DsKg/zZ+EVcDwVgK2bxM4qKinaFC3tJ" +
            "SUknWAemQwHojbYGQTk4hraW9+jS6/9desWlEnEwt7H9OXz4cP4zTz/zOBSBb2kNCNebYz0kQAKR" +
            "JkAFINKELV5/aUnJWsz6D2HW/wt0pRxXeghdOuR9dkZZSdmdGCjHYSBuBnP9yhpXzX1Tpkz5IoQ6" +
            "Q3pk9uzZXRw221+hDAyF4uFE0J/K3t37/i1nbM7lqHA6rlD6J7LcO7e0tD8CH12HOufCGvBbuclE" +
            "AiRAAmYlQAXArG8mxnIhmM9fMVAXYTB7alJh4XaI80gIIsnAP2Pv3r0l5S+9NEcGRwz8S21O++RJ" +
            "0yZJnTFNCFGcgRDF/4t+DoMy8AMUkreg6KyHUHm4skMQbjEsG1PXfLh6tdSFIEJSDxMJkAAJmJIA" +
            "FQBTvpbYCoVZ/0Ksn48ZNmL4RQMGDHgI0kwMUqJTA/+LL5fh2Wvguld+XlraT2666aaaIOuKSvG5" +
            "M+f2cDlq5kARGI3B+3koAo+hYfFzyAxSAFniyCsrLV2IpYft2C54Q5DPszgJkAAJRIUAFYCoYLZO" +
            "I/DyfwHr8D0KCgtlBlyBK9gB8ME9e/bMWfxS+Vw8a7ngOcXFxY42qWmL4IB4BSwWj3ktAqIIpOAy" +
            "mkQByplbUjYPis8eLAfkGn2Q5UiABEggWgSoAESLtAXagbNfOdb7200qKsiHuAtwBTP4V6J8HtbB" +
            "/4aB81pYEF60cvjcWbNmNUmy2bHlUWl2xZVXjsvIyPgN+jcNVzDpDuwSyIcD4jdUAoLBxrIkQALR" +
            "IEAFIBqULdCGDP7wwm9TUFhQAHErcBmd8cpstxjOfV3hL3A3TOivxZPZG74QszCL/xnM+c9CMSpB" +
            "XxfgCkYxumNuSek98H3YRyUA5JhIgARMQ4AKgGleRewEEbM/Wu/knflX4LPRwX8jtsDd8Ow/n8Hz" +
            "2rFqV83oqVOnnohUT2RWbrPZmquqmuQ46VCdyU4Nqdrlch2NZLvSn7I5JWLhaJV7/XWXtm3b9vf4" +
            "HIw1gEqAQGQiARIwFQEqAKZ6HdEXRhz+0GoW1vzF0a8Cl9HBfybM/bBuq5MwQ34Us9speDZsCYN9" +
            "x2SHY6pL0xAJUOkOy0IGBv5kTVGO4pe2WkZ+fEfcICUJ35vj60nMsnei7A6bqn5+0umcBaXgq7AJ" +
            "hIrEGoC28tHfudgZsQy3FuAyyovLAYDFRAIkYB4C+HvGlKgEZKsfzPY/nVRY0BcMNuBKN8gCg1kp" +
            "jv1V0vft3z8YjnNOg881WGzezJmdXfakh+CA2B/+Awjao+1H4R34Bd3Sq2efV87PPN+elpZ2DPey" +
            "cLWsU9GG/fv3n0REwbarV60aDKWgD/JFaWiN5z+DprAVn7fsO7DvQcjqqvNsUF89ToKt18I34Css" +
            "l9yPh8txGeYGx0BZYtkVT8skQQFkYRIgAdMQoAJgmlcRfUFK55QcGT5yRB9s9VuC1jMNSOD1bi+d" +
            "iUH1ZGFR4RgDzzRYRGb5SXb7PzBgS1AeF5SRlVmZg8oHXjCwM04WPB8PymBvRK66bVThxk7nyZMr" +
            "Nn+y5T+rPvxA6h+IQXsg7m+A1WIl9uhPrftQMN9hOXkD5ofUSR4GFXjWiJxufrJFEDJ8zDgBwRBn" +
            "WRIggXAToAIQbqIWqU8i/OHlr4YpuwNEnmBAbN/gX4p98t9iBitb/EJKcDici50Co2Gyb4qBcOk1" +
            "V1+zomN6x5GoLBdXSkiV6j+0GEXKn3/++S++3XegGG0PhgyvYhC+Vf/R+kuUlpT+E2cOXCLxEjIz" +
            "M/+EUhPrL3naXeGYVVZSugoKzwIsnTBi4Gl4+IUESCBaBKgARIu0idpxx/bX1HOxx30TxJpmQLSN" +
            "KJMLb/ZnsVNgPwZNIwrDGdViyeEZOAuOxy/dqvMzB/x5xIgRMuDn4YrUoH+GDN4bi7///vt5//fs" +
            "c3fD+nAllhxeDnXLIljKtscpGMzFL+Bc1G9ECdiIiIHjETFwY+HkolYNCcn7JEACJBBJAlQAIknX" +
            "hHW7ByxFuQVOf2ICf9mAiDJjzcDg/3qogz92GTyFNf0b8Mv25k9uv+3Rc845ZxLqDEmJMCBvMEWq" +
            "fvzxx4fmP/nkFVACrsQywfNQBH4aTAVSVnYnOGz2T2AZWQGlyoZbRpSAhXCirIEC0o0HCAVLnOVJ" +
            "gATCQYAKQDgoWqgOmP4Pjh03bkS3bt3eh9h6M28Z/BHRrrQ0lMEfsQEeUjTXRKy9f3LjTTdNT01N" +
            "/RvqM8PAX/eNVR0/fvxXC5+cn4eMwVgeeBqm+V/WLaT3HT4V22EJeBWWgEEom61XHvmyM+AX2Eqx" +
            "FO1NM1CeRUiABEggbARktsKUIAQwE1+GNfeXMPjPQZcjOvhjfXyRprnu6N6r51hYG1Zj8N+KNs04" +
            "+MvbT2/atOkiOPQ1Gz5q5FWYlV/pZiU5QSSnq+Z8LAdM2rhxo/gVyLKJXpqRe23ujWjvLr2CzCcB" +
            "EiCBcBOgBSDcRE1aH0z/f5eBDYPxIoj4gAExr8XM/16YtQ8H6/AnDoZQNOQI4f9BOwtwpRtozyxF" +
            "xOohkQ0HwF/hWlnbD8ZRz+sTcFtBUWE/1LMTl56iVQkrwA601Z1LAaDFRAIkEDUCtABEDXVsG8Lg" +
            "f3vO6NG3QYrpBiR5EFvV7pStfsEM/hJXQLYWQqtcjcF/BdpZhstKg7+gkQH7Ecjf9aIhF2diRp+H" +
            "fi2QDCMJysJ9OEhoKZSnd1A+x8Az2YgnAP8BpbUoaQbKswgJkAAJhIUALQBhwWjuSmDOfg4Bdpph" +
            "9n8OJM3WkbYSzmkboTDkYEaaqVO2NlsGScyWx3qPEH7aQDu1zwb4UIm8DXIh5PDe995779A3e/b8" +
            "BP4IXXDvPO9z38J57z/DRw5f17t376PJycn9cT8LVw4uvdk3igRMbh+IUI72lTgBsJ7UYHB/Fy08" +
            "ErAVRTm0adOmSz9YvgLnKBS11SnLbBIgARIICwEqAGHBaN5KFi1aZD+wb/+PMEnfCClf1pH00N69" +
            "e3uUv/jyV98c2NfMaIQ/KBi+I4QnoP5yXJk67TSULQNu+b59+5a+9MILAzDQ90WwnXTsIGiP+w78" +
            "sn4Bq8TncJr7EoGAD0olCAbcEuU6Yz9+D3jy98CtvXA6/AxlNo0ZN+5V+DuITLm4QrVEiEzT3RH8" +
            "gjzaF1w2IGxwJZwCpW2RI1BaCKtBGnokMRaC3okQqGLmkQAJkEB9BKgA1Eclju6JMxsGxK2YiV6B" +
            "bukNgrLu/0cMqBXY628oUp4M/li/TocD3d2ovwJXCq5g00Y8MAOWh4GYzY+FvLKffr2q2La5FNc8" +
            "h8OxOz8/XwZi3VRSUtIJJ/dNhwLQG/VcAAXiO/TnHZj0X8LDebgm6lZSfwHx2A/qaF9v2OAfcq+/" +
            "tiMOENqOagOy+eGHH8b+c+FTr0BZa1q/CLxLAiRAAuEjQAUgfCxNV5MMhjZNfR+n/M2HcA/oCLgY" +
            "s1zE39d6wgydrVPWnQ0z90J8COUgIV/1lfggDndQHrQbsf1uGab0UwsLC7f5CjT2Z2lpaS9YB2ZB" +
            "sbgESxQv3XLrrb9LSUn5b9QbiiIQtBKAdf3ZcIgciXdQjDZf1ukPHAJLv4UCI74Xt+iUZTYJkAAJ" +
            "NIoAFYBG4TP3wxig1zRJTl5+5113yTazQLPPQzt37uz9xuuvf451/2ZGeiUOfxhQ5SChK1G+Qqf+" +
            "ulW6zeoY+AehjrsxQL/xzYH9NxldcqhbmZHvshTy7f79z8Kp7zooGS/CIvJXPDcDlyFlx68NHO0b" +
            "3IE+OEp4JawQa2GF6Ix6JvjVdcbHEydOjHny8SeWIELgWWdk8gYJkAAJhJEAdwGEEaaZqpr3yLx2" +
            "mPV2wOB/FHIFGvxF7GIM/m9hpvqE8T5oReLwh/ILcOnV71/tYvEzwCAqZvoLqmucLWFxuC6Sg780" +
            "ftNNN9XAQ/9mDKxJqqYlIxb/+/PKytYg615/4Qx8no/Z/H1wquxhdHdAtatmtFvRMbADA4cg3Q+t" +
            "/HXU/YwBWViEBEiABEImQAUgZHTmfrAmueYxDDqvQsrpOpJWYSbeFWvlPxhd95d9/qj7KZwiKN7+" +
            "mTr1+7Jl1n8H1vmrxMkQznErMPAPmzp16glfgWj9FIXjh+PH2mgu7XL4PIgFYyCuqiDaL8eOCiwh" +
            "aONg4v+L3nPuPmrKa+i7REJ8UKd8NsIlz0PdAS0FOnUwmwRIgAR0CVAB0EVk1QLa5Xfn56+G9Hqz" +
            "8zyZncos1UhPJcKfBPmBZ3s1yhs1n8vgn4P17es0/JQdBpiNTzHSXqTK/OpXv/oBigCC/aiHYQ0o" +
            "37Jly1C0VWmwPWG6AHECLpbIf0aewZr+DSh77Z49eyQKo/BoMOGshAJVUVZCuZjbYCFmkAAJkEAj" +
            "CVABaCRAMz6OgeNRDGxv2+32B3Tkq3Q74GEN3shMHGUR218bjrVsifA3TaduX/ZGfMjCTHsmZGoq" +
            "sQUibe73NWzkpwzM8Al4vnJZxX/Qv3V4ZqGR51Amc/DgwT9Hn16WnRZGnsE2xRcXv1Qug7r4HgRK" +
            "E+S0RCgMhpSyQBUxjwRIgAQaIkAFoCEyFr4Ph7Oc7JxsWUNO1+kGBiLtRnHA0ynnycbBPj169bwM" +
            "X8oNlffEw5eZP2RRDxcWFY4x+FxUi0GuX511dtNWYDEeSoALjRtVAqZBGXoK/gBtoHTpRvHzevZf" +
            "Ax+IErQR0ArgPipZVZripMGOUYXBxkiABBKGABWAOHvVnn3wSpO+ffvqDbZVWJO+FLPSpUZm5Jjl" +
            "YqBTPrnsssvygUxvWUGoygCXi8H/NSwZHMDgd43cNGu64447foSDYA8oASOhBHwLORcblHVBv/PP" +
            "n4DZuhwAZCS9BB+IMhTUswLkgdvSJLv9H0YqZRkSIAESCJYAFYBgiZm8PF6oHPojJulcHVGLMcBc" +
            "odmUQp1ynmxVufGnEyc+jC9GTP8y+Msxwguxp/07OBdOMNSGCQo1bXZ2f/hEFMInoADibDQgUvqo" +
            "UaNuxTLCx964CAEf8VkBENpYHCgDpZRrrr5mBd6l+CYwkQAJkEDYCTjCXiMrjCkBGTAwcDwIISYG" +
            "EOTQ66+/vkHyEXTnPwHKubMw+38O4Xhfb9as2e/1ynrzp2Pm/0cMiidhXg/bzH9RcXHyvtTUFqqq" +
            "JrlcLrfyarPZXJqmVbc+cOAIAgmcNChfg8XEEgBHxzkVS5et6tOnTw4KCic9i8f0a6++alj5ktc+" +
            "RNlA3JGNpGrlzz799J/gSClWhgaVo47pHUdiK6ezrKwso6CgYKc8ykQCJEAC4SJAC0C4SJqgnnkz" +
            "ZyImvuJyDxyB5Smv2ln1EIosC1zMk4vB/9o7f/YzMVtnGyi/2B3SF/4H4Vjzx374R6CAvI9TBg8c" +
            "SE07bFNtW22Kut5us62RSz7LPcmTMp6ypY8YkLPBIuITgKWRtbBgwJnSHT64wbLejJS2nTv/Gg6S" +
            "Hxrx3D8vLe0nWDK4Ds8u0Kk4F9aISsXlku2DTCRAAiQQVgK0AIQVZ2wrczkcf1YV5X1IoWf+L8dg" +
            "9SLi9ztgkg4otASkQcCe1yVATcCCnkw5TAiR/dSv9mGrn4HyDRbBQDofg2Qu2v53q9Tz/gjfg9bn" +
            "nXfeBXggC1d9ikjlkSNHtq5bt27V1s2f3gll4HsMnuXYbnhHg40EyACXGxDB798IFjQsv6Ag4Ezd" +
            "W83EAQOzsjd+vEE3mJIEJcJywVL4GlwCJ0JZLmnIwpBy9VXj33/1tVceCCAqs0iABEggJAK0AISE" +
            "zaQPaerAYSNGvAPpGhpQRPBDmKFfjBnucpjSNb2eYBC95uaf3PIYytU36NZ9fDoc3N6BiftRI46F" +
            "dR+W71A4HsTg+CUEaz/uistHQUn54uabb34Lg/8/kT0NV0NyZLdo0SI/JydnAZ5J/8ltt/5O6pC6" +
            "pE6pO9h09PixoS6XJhpSHi4ZqAOmYcOGXYLzDGyzZ8/uErCgZOLMAyg34qhZHqgsrDn9xarjtu4E" +
            "Ksg8EiABEgiSABWAIIGZtfi8efOSIFt3ROfTG3zKsU1wuGpTPtLrCwZOOURnXatWrW7WK4t8iSkw" +
            "CF70x0IN8gPz/WOqokzu2aXX5Yi0t6Vr167/Rr0TDbRdt0g6DvwpRR1NRmVn341BuVAsCnUL6X2X" +
            "YEF49i2cAmhk775Uh/DGypt2m122+QVMcuCRnHooRx8HLAhnSihhK2scDom9wEQCJEACYSNABSBs" +
            "KGNbkcvplBPuxGEtR0cSzDi1wcd+/PEBnXLirDbsvNapxShnZBAuxkBlOKJg3bbhePc47o1GnP3B" +
            "l15x6bP4LLP9xqbsfv36/R8O/vmVpiiDoGDg6OLgEgIXXY/lkuuMRPBDzSmIvrgO5S8z0grsL2tf" +
            "euGFLJ2yma1TU+ei7Pk65ZhNAiRAAkERoAIQFC5TF+6FAXsjJMwOJGV5efkuzOq/+vnPf348UDmY" +
            "8OV3I+vGG2/UsyhINUFFFKzbLiwNf4ZScg0G/xuQJ0pMZt0yjfguyyHzYQ14BD87QdF4Odi6gojg" +
            "pyD64nhoTivc1hOdhmCJ2YqrP4pVBip62eWXt8eSAWIUMJEACZBA+AhQAQgfy9jWpKm9MgcOlPX/" +
            "QGnj3t2778aAtilQIclrndpaLATrceXKd520AAO48YiCZ1SmTcrMypKTBctxyYAdiSSn+JVhJt0+" +
            "WEuA7N3HTojxXiuAnmwT0s5L+zOWDi7UK4gIgjMgT0+UqwhUFmcD9MZWxxos80SKTaDmmUcCJBCn" +
            "BKgAxMmLxQDVpX///ufpdKcCHvoDYQ7folMOk1ilD9azZTY+QaesOBUORPlloTj+wdP+bSgkS+BA" +
            "txDtpOu01dhstxIQzFG+tQ2qajni+M/Gd5EzYLr86stTsQwgM/uAqaioaBcKtD1x4oTs3AiUcsB3" +
            "z8mTJ9sFKsQ8EiABEgiGABWAYGiZtCxmhmdDNHvz5s3b6oi4AQPJAKfL+ZBOOawmaL2HDhm+Sq8c" +
            "8rGlUBkrXu0Gyp5WBN7y7eEI1xczc3GEC7h0cdqDjfsiywHTYLEwdJSvrylnjfN2sBNriFgpAia8" +
            "h6FQnr5HAJ8OAQsiE4rb9jfffPOITrkM5O9y2Gz36JRjNgmQAAkYJkAFwDAq8xZEVLxWMuBAwpxA" +
            "Un766afVmP3vMnLyH0wAvfoN6NclUH2SJ17s4s0uXu16Zevm21XbS0mO5Odxf0bdvAh/Lw/mKF+R" +
            "xc0MOyKw02GgAdlywGQ7lCgoGjpJVbfv+frr21CqKkDJdFhutkNbyAhQhlkkQAIkEBQBKgBB4TJn" +
            "YafTeS4GnO8gXctAEi6vqLgIg4iu+V8OFEI9ex0Ox6hA9UkevNgH4If4CgSVSktLobSoPe665y5x" +
            "XEwJ6uHGF07BUb5PQckxfJSvu0lV+xhWAFnbX6wjQiYUsi2IUdxNp5yYAHbCEVDK7QxUdtDAzArk" +
            "dw9UhnkkQAIkEAwBKgDB0DJpWbtqvxOi7caVGUDEKgw0PRD854sAZdxZdlWdAkvBDnzJ0ilbiTr7" +
            "IvZN0LN/zI4fxjqDmP6LddqIVHY2ovD92+hRviJEjabJkb99cG2Q74HSxUOHrkO+7oBtczkXQAuQ" +
            "tf0KXA2mrj16HMM7SW+wADNIgARIIEgCVACCBGbG4ogol44ZpwzYgdJOGWjUmur5gQpJnsxcESRw" +
            "Kz7qzcw3wIs93YVAdXp11s3HYNZ/QFbWi7gfy0GtOGf06Nsgy+115avv++TJk6vQ3/YGnPaUHj16" +
            "JGN2n1FfPf73tKSkQyinx1lJS0vrCeUtedasWU38n+dnEiABEgiVABWAUMmZ67nucNjTM8MfxNG8" +
            "LXBegJ7DmfSsu3cGq9dLmK+19lgqEOtDUAnm/56ZmZmxHPxF3hSc+Pcwfq5GfIB/GemAQac9RRwy" +
            "DQ7Yx6C8iROnnlWhJRSVozj9sLkROVmGBEiABPQIUAHQI2SBfAwM6e07tf9GR1QZYJLk6FydcrIu" +
            "ndGxY8e9euVwpr34EyTl5+cf0ivrny/72WVfO44XHup/P0afs7Er4EnM7K/1hlMOLMYpp73A5eCP" +
            "YWTAxoB+FOVkUD+oVyEUhWooFRLymYkESIAEGk2ACkCjEca2AjEJy0wTJuJj+pJoGG9srkDl/Opr" +
            "Haic5G37dJuc+LdTPgeT3PvZsa8dz2QE81wEy87AIPyYq7pmmW4bp5z2KnXKZhkZsKE8yXtzYFnB" +
            "oVMf9DINGz5c/DerB4r5JEAChgjwj4khTOYtJCZhmWkakRA7BVTsGEDxhpNffRkNl/LkrF2/dij2" +
            "/3+pV65uvnc/uwTBCeS0WPexSH5Ph0PgAQywLRHC9x+BGvJz2gtUzJ1neMBWlQM4RlnPDyBLt0EW" +
            "IAESIIEgCFABCAKWGYuKSVhmmuGSLbj6tNYwnR8Ium1xjpN97eZK0/v17HEtHCpvDSQWWB/FVDys" +
            "6/BgeOT111//JFC7yGupk89sEiABEgiKABWAoHCZr7DjpAM76rSAs/pgpA53ffW1DUtEl7atUw05" +
            "3dX3fITupYwaM0YG/3U4K+CphtqottmcsHromusbep73SYAESMAsBKgAmOVNhCiHM9mpYdaOiWl4" +
            "UnD1qfswmKcG3bKmdLh4+HC9cwuCrjYMD0wfd+UVdyLYz40N1ZXkcjkQ59/ZUH4o98GwRU5OTudQ" +
            "nuUzJEACJBAqASoAoZIzyXPi1Y/pvyHPcJiaNWzZC6gs+NWn65XevkP7FzAYhjJwnY1tcj+aBKG/" +
            "GCldunT5LTC9DivAc/4Zvs9g3RwKgiGfC98zuj81JbVr1656VpwNuvWwAAmQAAkEQYAKQBCwzFgU" +
            "XuFHMaIbXJNWdb3I/erTHXBGjx4t69IZIXA5dvTo0bNCeC4aj0y79bbb7kND19XXmGaXqIuqkR0M" +
            "B+Fzqbvr4uGHH24KhaKmSZMmelYFXYWsPnl5jwRIgAQaIkAFoCEyFrkvh9Rg1n5y//79EkwmUJLB" +
            "WncfeRD1KTinvqnUGfQ59ary9eoPPvg2kLCxzEO/7kf7r9YbHEhTu8JRUBwY03Vk3CCWGbGoBCqH" +
            "WAjN4FT4Q6AyvjwjCoWvLH+SAAmQgB4BKgB6hCyQDwtA1aZNm/RmkFmIe3/E5nS20O2Squz8ZOMn" +
            "NbrlcFYABqXd2FrY3kDZ2iJYivjim/37b669Yb4PE2/96W35WN64vq5oWK8/f/jIkW/WvV/fd7HM" +
            "iEWlvjzfPcRESIYF4CS+Z/nuNfTTiELR0LO8TwIkQAJ1CVABqEvEmt93fLZ16zX6oqt7XDZHnn45" +
            "Zce2z7aMN1AOSoVSZVNs+QbK1hbBAUJV3hPwau+Z7UOLFi2mwLXyJVgBlvhkc59gqCnn9O/fv43v" +
            "XkM/v//++zXwJTihd/Sy3W4/CyGaxR9CLDSB0gYjCkWgCphHAiRAAv4EqAD407DoZ8+A6j55LlBI" +
            "3myYrj/HbDNDr5s2Vf1c09TeKFepUxYWAO1TTXH10il3WnYwwXROezC6X6ZPKizMx6A7qgznI0vT" +
            "qkt7GgrPanzUna2vX7/ehYF9pzwXKIlFRiwzKJMRqByWeE7KUo+eQhGoDuaRAAmQgD8BKgD+NCz6" +
            "uUareRKiixl+Q6Au9OjV6xWYtXsEKiN5J53OWTiqV8rtlO8BUvqYceNeQ/6gAGXOyJIDieRgImTo" +
            "KRhnPBvFGxKZbzoORliIKAu3lJaUrIAJ/vKCwoKrcD9XR45D27dtuw4Mt+mUUzR70h1GnApXVlYe" +
            "hPK2U68+5pMACZCAUQJUAIySMnE5bO37Duvq50LEnYHEHDFiBCawqq4CgFnmVyiX9uOPP74fqD7J" +
            "69atWyba/g7mccNWgJqamh8x6zXrLgD/LosV4L/B4i30MRU/FyFTnP/kCpQqEOlQwhzrKwCa1sXr" +
            "VJgdqMI9+/ZJkKIdgcowjwRIgASCIUAFIBhaJi2LvWbfY3baCuLtDCQitpqNQP5eWLQ7BSoneVi/" +
            "3rpy+cqv9cohPw9LEO/AsjDLQFl3EcQtOoFZbxN8CWixMFpfBMu5rQAFkwtvKZhc1Ed+oi292b+I" +
            "U4Ery+Zw/I98CZhUpc9FQ4a8G7AMLCWyJCNLMzrlmE0CJEAChglQATCMyrwFvSfK1WCdeI2OlOK0" +
            "9xnM7zBtB04os+mzHVtvR6mqwCWVTByk8zA0hksWLVpk1ynrzvaLNXDQSPkYl5mOtfeWfjLosvvo" +
            "w4++hAK1He8l4BZA98mLitJp0KBBelERxQGwe42mzfaTgx9JgARIoFEEqAA0Cp95HoZ5+osVK1YE" +
            "cgIUYXNgbt6ESxz8AiZbTfX9WPsehkLlAQt6MovFY/7b/fufNVBW8Ys1oKewGKku0mW8vgCwimha" +
            "DhrTM/9XrV239nqcF/CxnmBJDscfYLnZgHJSb4Opurp6EzLbFhUVyQmKTCRAAiQQFgJUAMKC0QSV" +
            "wOFs3969EyFJoBl7yiWXXfYaBh1dp738adO+hNOZbfPmzW8Y6F3urbffXgiF4ToDZT1FjMcaMFxl" +
            "BAv6rADFBtooh4I1SrWpv9ErC4WiP8quRbmcQGXXf/QRFDt9h8JAdTCPBEiABOoSoAJQl4h1v2/z" +
            "Op5VBOpCz549+2NgPzZ79uwugcpJHszOq5ZXLJd17406ZVN8++YRQ/8FnbK+bKOxBnzlY/lTrAAz" +
            "cGXrCfH++++XQ8E6VlBQoOs/AavNBUOGDXsKdaYHqPfQxxs2jMWJT1sDlGEWCZAACQRNgApA0MjM" +
            "+YDX4SwL0lXoSJgHRaHSbrP/TaecUl1T8wtsZbsE5WTw00viMX8ftIarZG1br3AQsQb0qopWvnjh" +
            "66XKTzb++3dYDlmmV1AUMPgJHM/KyhquU7ZCFDtYCqgA6IBiNgmQQHAEqAAEx8u0pb0OZzsqKiq+" +
            "0hEy86IhF82DSVnW9wMm93ZAxKl/5ZVXPkFBPf8C9ywZywCPJdnsugOgOLSJYxvq3RlQCPNkOvRE" +
            "wQFHZZj9DysoKpqkV9atgEERQ7k8nbLlyDe2o0CnImaTAAmQgD8BKgD+NKz+WdU+3vrpp3noRkCT" +
            "/eDBg4fKATRzZ87VjQmAGf27X3/19cOo04gVYAJ2BCzF4sHZiJ4X0GPd69DWFucIiINbPKSqpxc+" +
            "hfMN1MXGOqMN8yhiSmag8u+9997XRnYUBKqDeSRAAiRQHwEqAPVRseg9hJX9HWbgstd/gU4X8jBQ" +
            "veVy1MzRKadgNjtFRbCad9999/9QVs8KINUtyL3+2jEwW99TXFwccNYsA9unn356QE8GK+TDUx97" +
            "/tWrCicX6i4VuBUvKGBQxK7Q6dvGz7Z+lmdkR4FOPcwmARIggTMIUAE4A4l1b/g89xGH/kOdXsje" +
            "/SeN7t2HA9q/dmzbLs59RqwAKW3btn0HvgNzW6elrQskB5YAPlv5/vsXBSpjkbzKJx59XAbzl4zI" +
            "61G81LdQNk+n/AKjOwp06mE2CZAACZxBgArAGUisfUM891evWi1r0AGXAZA/3eje/cKiwl+h/Pdl" +
            "JWWp+FmFSy9lwiEwBVaAnaVzSt9rsLAntn0v5MtauJXTgwhtnOuNFBiwH+5gSQiaBAVsPQoG8v5X" +
            "Vq1Y8TGUr+NGdhQEbJSZJEACJFAPASoA9UCx8q0gPPcn/uS2236PQTrXSH+/ObAvB46D96BsnpHy" +
            "KDMRg9wXKtYPGlICMLjNQfsZKLsBl1XTTChGt6MfciiSbpJgSaJ4oWCeTuHFGzZ9ch8sABU65ZhN" +
            "AiRAAiERoAIQEjbzPiSe+zDtHy8vLxfnuoBr9uecc85tKPMq9u4/p9cjrOc7sW/9xbLSsl+i7Ey9" +
            "8t78abAELMHnozhNb2NdnwC73b4XfgBtkV/hLW+1H2INKYZiNNLucv7ciPASLOmue+7BLozAMQVw" +
            "YNJi1DsWPhiidDGRAAmQQNgJUAEIO9LYVyj70Pd+vfsvkKRcR5rpE67LnYRB+Hqdcu5sMXFjQp8J" +
            "h0AZwIwsBchzj8AS8L2KQb51atpxKBuPuSvDf1xO529wMNDZ+GhVC8AMyH8Q8ndq9d13u3z9auin" +
            "BEmS2T9Ob/xDQ2W896senfvoYDgVvq1TjtkkQAIkEDIBKgAhozPvg7IPXfaj79mzRy/YT0q7du3+" +
            "jkHpZcMR/FRl/vbPti9H73NxBbQw+BGaCEtA+m0/vR2zfS2rdE7JNrfVQVMwyClHMYjuxE+jCoVf" +
            "tTH/mOeWQFUO7T33XImD0GByB0dCkCRwKEOh7AYLejIWwInyihpXTZFOOWaTAAmQQMgEqACEjM7s" +
            "D6qLF7/08p8gZaWOpDI4G47gB+XiD1iXXlJWWroQ9U7Xqds/ewLCBa+bVFR4t82mLobVoT+UlIux" +
            "XOHbKVDhX9ginzMRzz8P6/8fJtntjwSSWYIjSZAklJkRqBzyDiHw0mJwcU2ZMuULnbLMJgESIAES" +
            "IIEzCWCm/SPSZRik9FIFHPVmlc0pWXlmLfXfEYsBrtWoWA7KCTYV44GW/jXje16wlZik/MGNGzd2" +
            "BOsGrSEetqUbIK8RVsV4D28jkNJcfz78TAIkQALhJkALQLiJmqg+OO29/OQTTxRAJD0rQDbW6Q1F" +
            "8PN1D/4AN8BMvQdOgYh+p4g1IJj0AArLgJjn91CF32crfUwZMGDAQwjWsxSD9vP1C67dNe7Ky8ch" +
            "r7j+/Nq7h6BMPIa6hsgyTu1dfiABEiCBCBCgAhABqGap0u20p6hXHjhwwIgn+YIxl48dCzP13fDW" +
            "N/R7gUEqF8sB38wtKe2JPgerBKTjmflQAtyKgIX9AOR1TywoLJgJdleUlJQ0lxu+JFYSOPP9s0uX" +
            "LuI4GdBPAPkzVn6w8jEsj7zse54/SYAESCBSBAz9oY9U46w3CgQ05fkX/m+RrE/rDdAp3bp1exQO" +
            "gY+1SU37yKhkogTgvIB9sARIQJ8HjT7nVy4Tn0UR2ImfB/3uW+0jdgQoJTZN2QKT/19FeDHl40c1" +
            "rCtv4OcEuRcgVS1fvvwZRdMGFhYVTQxQjlkkQAIkEBYCVADCgtG8lcAK8FNIN3j5O++IQ2CD69Te" +
            "HkyAQ+A6DOiI+teQOfvMvp6yBJRJONw7zixh6I5YBEQZsGqS6IfH5fAk7HT4OXwCjqIjzScVFUis" +
            "hQUGOjV98yefLIYS8YyBsixCAiRAAiRAAvoEMJj/HYF4PsUs24gT2kGUy4Lpumpuaen/6td+qoQ4" +
            "BkrAH3kel9STiClDiMybN0/iG2BC717i0ONQUVpS+jjYVcgzTCRAAiRAAiQQNgIyuMggg5GoQm80" +
            "kkFr69at7WUWa9QfwCcozN8L8NyetWvXdkY95QbairciFT4W6NgCA507uHv37t54Pz/4nuNPEiAB" +
            "EogGATUajbANcxCQQSb32msHI/jPh5AoRUeqSlgANmGP+0gsI2TplD0tGxaHv8AhDl7s6stY/16O" +
            "TNn7rtfeaXVY/Mu9kF/8GeYb6Me98J/4GZwpl2IpZZqB8lEvIkGMbDZbczhqJrlcrtplQ9xzQcGp" +
            "xr2jCEF9IuqCsUESIIFGEaAC0Ch81noYA/NMTVEvgcf6E5D8EQPSL0TAn3MxkDfFiYBjDJQ/rQiW" +
            "BJbhlLw2/Xr0mDBqzJjfIzNRnNuOo69NT4NR/xdRsj7XFKUbHP9y6i8S/btYvkipqa55BNs8ByAg" +
            "UTcM/GdBxqP4Y1GNHQoun0TYZgqfRyUJ95tDEfgR/g+fI29zjcv1WwQx2u0rx58kQALmJEAFwJzv" +
            "JWJSyVIAXvrncFg7D41MMNCQKAEZqqb8UDC56CoD5U8rIv4HGETEEW7dDTffdG9qaurv8DlRFIHT" +
            "WNT5cmjdunUD1ny4emPh5KJWdfJi8lVm+g674x04LvTH4P7eRRdd/Favvr26NmvWrB0EyvAKJT/T" +
            "cVV6v8uPikOHDn2zefPm7//98cYJUPpG4p3/ILERoDgW+JXjRxIgARMRoAJgopcRLVGwRv/9RUMu" +
            "zhw8ePAraDPTQLtuJQCWgOpQLAFSP6wBT2GGeCMGlzeuvObq+zt37vxr3E5kRWD03NKyZ+EmuBCm" +
            "/98aeAcRLSL+IfhjcGuSw7HwZ/fcvReNTceVEkKjVXim4uOPP35p9cpVk2EhuFiWggonF+aFUBcf" +
            "IQESiCABKgARhGvWqr1r9HkFRYVXQMYKXEb+0LuXA1RN7fzNgX2D4BxYawoOpp9wEsQ2N208fvFW" +
            "te3Q/re5ubn98bwMNkYUkWCaMnPZO2BVKcTAuA0K1e2xFhTxCl6DLB2wZVHeQzkuI78PRsSu3L9/" +
            "//++8Pzz01C4D/xJ5kMReMDIgyxDAiQQeQJUACLP2JQtiLc+1ngHFhS6/yC/bFDIhVizPgIHvztw" +
            "oE8plhFkFh9SghIyF/WMxi/g2ZqqVlw85OKSQYMG9UZlubguwdUipIrN/9DCuSVlzTVVSQnVmhKu" +
            "LsoOj9ZpaeuwvLMbhzS9g3ofCVfddepZ/N4b7/3usy8+q5SDpGDxuKNOPr+SAAnEgAAVgBhAN0uT" +
            "sm8fsnTCzK8MP+cblKty27ZtP1n27tJVUCDW4I/5jQafq7dYWVlZB6VG+zvWjYdj3fiw01UzDB7l" +
            "h+FU9hUe6FDvQ9a9uXju3Ln3KDWuf8OfAkcjxy55ohVqRQg8tACKnChbkV6OkSBUOWUlpU/DN+AT" +
            "KD//Fbves2USIAEhQAUgwX8PMBMvx86ANtgZ8BZQGDXPbkTZPFgDxMGv1TcH9l8Y6pKAP37I8rCm" +
            "KHfil7IMg1JT5InpOF7SJ+jISMz+/wll57tYhvuFI+hCOPmNGTZi+EU4yOhpyJUdJcgeJaC07J/4" +
            "vVlHv4AoUWczJNAAgdo9vQ3k83acE8AM3negz1h0daHB7maiXAUG6TlQIVe2Tk07hsF7tsFnGywG" +
            "WX5udzjSPTEE3L4JDZa1YMb72E53EIN/Oyg4u2MlPwb/F9F21qTCgr4Y/Jfgc7QGf+lyCq4KKJvX" +
            "wA9kHH5n/iI3mUiABGJDgApAbLibqlVRAjCQ7wvyVD/5Y/6ymI/HXj6uswQMgjPZStlK1pjO5efn" +
            "H4IsG+eVlQ1rTD0mfHYSljWyINd+sEqNhXwY/F/BzLsD/D4mov0KXKLIRTvJ7005dqFc7FX0ot0+" +
            "2yMBEvASoALAXwU3gTpKwINBYJmIUwTXiAc5lhLWJtkdB72+BUFUcXpRzJBXI8TccNxdfHqO5b/N" +
            "wPo3PO21EdHuCbb5vQNnvxTs/ECExpgN/r5uyxbUP2IF8mUJFuW7yZ8kQALRJUAFILq8Td2aTwlA" +
            "aNpxEPSOIIRNR9llCPvbGablPnAOrEGsgZP44/5cEHXUFq2uqfkD1qgH4UZF7c34+JBdUFBwBXY9" +
            "HC8rKZsRjS6Jpz/ewwYoHcfh6T8fbVbgkll4rNNE/L68giWRNlgK+HushWH7JJCIBKgAJOJbD9Bn" +
            "UQKwVesbOKtJBLdrcYnjltE0AQU3YFlgS+5117bH5yQMPieCVQQkrjxCzlZ9UFm50WjDFipX3Kdv" +
            "n5s0xXVLpGUWT3/4ZxyGQrYCZv/1aE8UADMM/r6uL+jTt+94TVFiHgvBJxB/kkAiEYC1lYkEziSA" +
            "QfsFzM56eNeLF6BE5pmlAt4RxWHG3r17S8pffLkMA/p4mL/LU/fvu+2m4uKTAZ9Epme9Wt2DWSIi" +
            "yQXdtl71sc6fCX+LHjCBf4uDln4aCWFg8oenvXbJ8JEjLo6yp3+w3VmMoEiYiKjHuDUwWHQsTwKN" +
            "I0AFoHH84vppd7AgeGuLwxbWbGehszLDDzaJIrDgxIkTs5984sk/YVCChUFZrdrU1Sedzv9u6BQ5" +
            "mIVlttoJ1gTZPjct2EbNXv7AgQO9Xlj0/Easyct2x7AmKE9vYL0/FSb/X6HiclxmmvXX19fRsDi9" +
            "ZUuyN4cTaHV9BXiPBEgg/AS4BBB+pnFTo+zTlkAxcmAN9vx/i47di0sG9GCSDD7TmjRpsgPbv84S" +
            "JzQ4C37g0pQhXofBzRjsn549e3YX/0olNgFMw/L7KQNY3CUcivQorCKvB7s8EgjEqfV+tQaDP0Iu" +
            "K8twmX3wly4twLt+zFVdI/IykQAJRIkALQBRAm31ZjCrrICZ9rzca3NvbNeu3Vz0J7sRfRIlQgb2" +
            "cqTde3fvnooBYKgEFcIywU44rNnhBNgT28RKoYT8AtvnDqKsFQYyiGk8wSoyZv7jT76GZYBGbZ2U" +
            "FmMQ2c94R42VvBdWgLsRIvl1LAWI5YKJBEggwgSoAEQYcDxVj5n6TAzUd0EReA6zeTHNF+MKx8Bc" +
            "iXoqYBbfXlFR8eX+ffvH+w8CUAAWIH8irnhLlRj0DqBT1VACQnYKhHLmH9lPgvtkWhDUoXfffXfo" +
            "jm2fvY0wyZ0sKD9FJgHLEaACYLlXFnuBPdYApXW/Hj0mjBoz5veQKNyDs1gINngvmf2fi2sKrrhL" +
            "jbUC+DlrTgAcsapYcfD3vdcHsQX1EuxCgW9EUVy+b19H+ZMEzECAPgBmeAsWkwFx7HOgOb7+6Wfb" +
            "V8CbPe3w4cPiqS+z+HAlsSpk45qG6wFccTsYwDfifvTv1VB8AWCRkQG/k3enhihMVh78Ib4yvV37" +
            "dvdi6WesfGEiARKILAEqAJHlG7e1Y4b2S8+Jduq3zz79TCW2cn0rs1l0OJyKQNzy8+tY9h133Sk+" +
            "Fdf53dP9KIO/OEoiAmM+ClfgEqXJ6iklNzd3JEJBO+o6hVq9Y5SfBMxIgAqAGd+KhWSSfeyylU3V" +
            "1JNPPv7EElgEvkMaii4stFA3YipqsFYA98xfU1rDD0OCNVXgiofB3/cOpot1yaHa5YhqJhIggQgS" +
            "wL81JhIIHwF4o2P7mTYBv1gr23Zo/1v3jA6mXbSQHr5W4q8mo74AvsEf2/weBYX58UfC3aM7YFF6" +
            "fN/+/cnhOGY6ThmxWyTQaAJUABqNkBXURwAD1Vys5Y6GObcpTr9bOipn1HP9+vW7AmVzcVEZOBPa" +
            "Qgx6LcSS0tCOgAQZ/IUMlpTK9iGYUU1DLM7ExzskQALBEqACECwxlg+KAI4H7phkt/9D8+zzdyGw" +
            "0PuDLrjgxYsuukiUgBzvFU8m7KD4+BcOFB0QlpXF8I5PMzrzx9ZJBF0EdW9SAV4uqyRZRvq/5/71" +
            "buHkouZWkZlykoDVCFjnL4LVyFLeMwjMmzmzs8vh+DMsAgOR2R3XBhxUs3Hg4MFvwzpwXvPmzfvg" +
            "Xpb3SkSlAFaAMvRbs2OnxXhwcCcJ7YsP58Db/zH8nO+5qygul0upcdYoNa4a92AvA75NBnnvYO8b" +
            "9P1/yrO+7756TPpTLCLt0Jsv4HAqRxgzkQAJhJkAFYAwA2V1xgjMmzcvyYWzAFC6F+apvREFsCs+" +
            "O7FksAc/d+EX87MRo0atOf/883fhuygFLXFJksGgjftT/P1H4h9klJWU/gccloHBt/D0HyqnM+JM" +
            "hKeR5x784S+gnDx5UnHV1CiqzeYZ0PGAe4Lf0OCPfPm/zVte0JlcETiEKJGX7vl697OwAvQSeZlI" +
            "gATCSwB/EphIwBwEoBSkYGBr57DZ7sHA10XVtN5QDrrjl/QjW43zv/KnTfsSs9zpkPYRc0gcESnu" +
            "xcA8o3ROiURaRIhgdSlORBSP+I+PHz+uHD92DLrSqcEbw7574JfBXD74BvUGf3oVgfryI9KbxlV6" +
            "B6wAf3TW1AzDoVFfNa4qPk0CJFCXABWAukT43VQEFi1aZP92//6HYd2egNHtQ2x9EwvA96YSMrzC" +
            "VGFwzvBVCYUnC0pRxaFDh1LE5H/awO0d/P0H/oBLAFJpA0qCv2XA17YJfi4uKyk7qKpaUywD3GwC" +
            "eSgCCcQVASoAcfU647szmBXvtNc4R90zdWqoRxNbBdBoDPQVMvhj4K88evToOf4Dv3RCBnr3PTHp" +
            "16MI+Jf3z3cP9FKB73nvz6SkJLlrurR+/fqhqz/8cBF8IjqbTjgKRAIWJ8BAQBZ/gYklvvqvGkfS" +
            "a+hzeZz3O+/gwYOD9u7ZsxwKwDky8/e/xNnPhatG7sMPwAUnQPfnOuVcNd7nNPxEeQ1nMEv5umXN" +
            "zHLQoEFDsObhEgdSM8tJ2UjAigSoAFjxrSWozDga+Ddwd2/25ptvro9nBBjgJx78/uArWPNvoWFQ" +
            "l8tfAXB/xuDuu193QK8tKwO/W0nAzwCKglgLTJzyIN777t0jJhaSopGAFQlQAbDiW0tgmWHOfm/n" +
            "5//5CxAsjFcM7gFZVTrIrF1m8TUyeLsHcBnITw3mnoFeZvanlIHawd+nNLitAJ5ZvygK9ZWVZQET" +
            "p8zeffsu8G4dNbGYFI0ErEfA1P/yrYeTEkeaACLD3Q0v+MsxKC6OdFuxrP/spgigiAG7xmu+d7nN" +
            "9zKjhzIgioF8dw/ysgSAcu7Pku+5apUGP/O/u746ZWU5weQKgJKTk9MRak63RcXFybF8J2ybBOKN" +
            "ABWAeHujidAfVXn7sXnzLkFXZd98XKaWrVq5Z/61M3b3QC6Du8cq4FYEfIN9ncFflIBaP4Fa68GZ" +
            "a/9SzuyDv/fl5sJp8eNv09r8IS5fNjtFAjEiQAUgRuDZbOgEbE77VExc5cz4BaHXYu4nxSs/ObmJ" +
            "Wwlwz+ZlkJflALfDn3cwd5v36zfruy0ByBcFQj77LAS+7+583Lfb7eYG4ZEOh0tpa6H6DLCCsJSR" +
            "BKxCgAqAVd4U5awlMGnapO3Y+dZsy5YtsiMgbtM5KeecMvd71/JlZu/25pdBHVYB98AuikHtTN+j" +
            "KPic/nzLBT5Lgk8RqFUAbJZQAJTcCRPWwf/jgrh92ewYCcSAABWAGEBnk40nAL/1DyqWVtyKmqoa" +
            "X5s5a2jRooVnBl+P+d83oMvP0/0EPNsCfQN/rSLgZwXwDf6iNCQlm3P/f9030rZDhywoPz/MmzWr" +
            "W908ficBEgiNABWA0LjxqRgTcCnKL6EEjIYYM2IsSsSaT05OxjJAssexz70LwDO4yyzefbnv+S0B" +
            "eB3+AvkJ+C8BOByOiMkegYpzEL1oqcvmiNv3HQFmrJIEAhKgAhAQDzPNSqCoqGiXpionVq1Y8bFZ" +
            "ZQyHXOIMWBvQBwO/zN59s3+Z5fsUgQb9BLy7BXzP+C8BJFlLAcjEmQh/wdLPVeHgyjpIgAQQUZQQ" +
            "SMCqBOAYVrFh0yf3Qf643RKII5LhByADv//Wv1OKgNucD0XAf9Z/mp+AL0pgPX4CNms4APr/eubg" +
            "qOSFZXNKPvK/yc8kQAKhEYAVlYkErEsA5wPU3DMp/y54sz9p3V4ElnzTpk1KNY7/9UTsU93nAGAm" +
            "7P7uju0vkfy8Mf09cf/xX2++70yA0/M9z7Zt104566yzAjdurtyZ6M90KAAvIRbEUPTpXdWp/s12" +
            "lm1Xfn5+3G4JNdcroDTxRIAKQDy9zQTsS2lJyRv4Jd4xqbDwdnQ/JR4RfFn1pbJv3zcY72Rg91wY" +
            "wk9TBFT3oUCegV3K+Ab82kODfM/56sDz7dtDAUDAIQuljZBVjoNWZs6cuaVJUtIsnBPQB8pAJ9zC" +
            "ipD6Kfq9FksF7jJSjokESKBhAlQAGmbDHAsQmDtzbg+XvWZJQVHhKog70QIiBy3id999p+zYvkPG" +
            "9FoFoFYRkAFd/uce2JHfgCIg/9DdZdz5UpGidOzYUWlqIQVAljuqq6uVJk2a+DOswpcNODRp9QfL" +
            "P/isatfOKVAKBqKDS3B2hOwSYSIBEmiAgPxdYCIBSxOAFeCrnNGj7+jTp8/blu5IAOE/WrPG7QAo" +
            "I7fN5vlnq6o29+faGb+/IuCb6Xu0Bs/g758PRaBTp06WUwD2ffONIksXAdJGHJ88959P/XMcwiGO" +
            "Q5efx1HCcakYBmDALBIwRIBOgIYwsZCZCWA49MUEEBNxXKYWLRAUSHYAuB0CPU6B8lm8/2skSJD/" +
            "NkH3d19ejd+uAZTzORSijDgLWimJonMSvhA4JTGQ2JlwnN6eUywAAEAASURBVCwrKCwYmHfnHTLw" +
            "t4aC+GXpnNIHAz3EPBJIRAJUABLxrcdZn/1iAiyIs67VdietdZpbAXB7/ddRBHz3fD/dSoJ3oJeo" +
            "gR4lwXNokL+iYEUFQPoCc38tlwAf0rG8saigsPBEzy69LocloLCspGR+gPLMIoGEI0AFIOFeefx1" +
            "2BcTYMmSJcvjr3eeHp133nluM/6pff+eGb4M9h6rQD3bBEUJcF/+2wTlnnyH2mTB5MAZCbIj4scf" +
            "fzQq/YRLr7j0dVgExqDbF5aWlP7L6IMsRwLxToAKQLy/4QTpn8QE2PXlrofQ3YXx2uVzzz1P0cS8" +
            "LzEB3DN8UQI8ioDndEDv0cDuMr4lAG/gIJ8yIM9686E5WA6VeD+I8nLs2LFgZE9H4Qo4it6Gn/2w" +
            "HLAgmIdZlgTilQAVgHh9swnWr4KionuwE0xOCIxbBaBN2zbugd8968cg6AkOJD9PvzwWAU++fG7I" +
            "T8B6w7/iPr1QlB5RAKRfQSTZIloBS8A1+D0ZByXgr0E8y6IkEJcEqADE5WtN1E6pb5eVlF2P3lfF" +
            "I4FWCAssZwP4z/obMv+LUuCvCNSnJGC7nOWSnF8gRyKLL0MQywC+fooSUD585IgLoQQU+W7yJwkk" +
            "KgEqAIn65uOx36oyGSbiy9G1BfHYPelTx46dMOP3ePaLBUBmwbXmf/dyAGb8GPx9s375KYpAfYoC" +
            "Dha2HCaJcyCDv/Trh6NHQ5E/c8CAAQ9hQ8FT2B2wNpQK+AwJxAsBKgDx8ibZD6WwsPA/gmHl8pVL" +
            "4xWH7AYQz/56zf/egd6on4DVdgHIO5XQxW7FB0rOiRMn3IpACO96IiJHbkfswENwClwUwvN8hATi" +
            "ggAVgLh4jexELQFVW7rxk42/wffFtffi6INE7ktNS/WYwd2WgHqUAZ8i4PYNkPzTfQR8ywMygFot" +
            "4cwHt8XDd6xxI/rwCEIG/wKmkeFYNhLnUSYSSDgCVAAS7pXHd4cTwRmwXfv2XiuAmPu9SwDi2e9e" +
            "AvCsjxvxEwhhDT3mvzyiAJ1a3nApx48FDAqkJ295nx59L4WKlKdXkPkkEI8EqADE41tN+D65nQEv" +
            "BYa4dAZs27atkox4+KfN7DHrl62Bp5YH9P0EpKwVk0QEFL8HUX6OHQ9qO2Dd7qbnjM2ZpGrqx2Vz" +
            "Sp+rm8nvJBDvBKgAxPsbTsT+JYAzYIcO7T37+WXm72/iP0MRODPf7RSI56zoBCi/zk3cfgBi8ahR" +
            "nDgcqPpkdWN+y6dNKir4B1hcX1xc7GhMRXyWBKxGgAqA1d4Y5dUlkAjOgF27dfMEA5IB38/8L+Zx" +
            "91KAd4bs2THQgJ8AFAcrJjniWJY4fM6AJ6tPNrYbM3DI0qNtUltXNLYiPk8CViJABcBKb4uyGidw" +
            "yhmw0vhD1imZhJC4cpyve/bvN+t3x/53+wX4lgMa9hM4cuSIdTrsJ+lZ8APwbX0UZ0A5IriRKRMO" +
            "gTtQRyvsCvh/jayLj5OAZQhQAbDMq6KgwRBwOwPiOFjMiBcG85yVynbq3NltBq9dAqijCNTe9y0R" +
            "+OXL7FlO1rNisiMWgM/JUSweYXJmLO7eq8cNqqb9lxWZUGYSCIUAFYBQqPEZaxBQlbcfmzdvEIQ1" +
            "dHycNTp1Ssq0tDTFMxv2rIfXesd7zf+eiHmnLAG1CoFPEbDgWQDS+7PPPttt+fAsA3iCHp2iEvKn" +
            "lMsuu+xmTVW/wKmBs0OuhQ+SgIUIUAGw0MuiqMERsDntUzHGyfkAC4J70jql+/Tp41kGwIxezP++" +
            "/fG1gYIw2PsUAd82QZ+fgJSxYrIjHLDbt0EUGbFuwAoQpjS9Xft293p/Z8JUJashAfMSoAJg3ndD" +
            "yRpJYNK0SdtxDnyzLVu2vNbIqkz7ePsOHRSHBMfxzuplQPQpAqeUAQySvlm/V1EQpUB2A1gxNW/e" +
            "3G8JQPoWNkUmJTc39xr8zjhmz57dxYpsKDMJBEOACkAwtFjWcgRURfmgYmnFrRB8o+WENyCwHA7U" +
            "OT3dPQt2r4v7zP+YFftM5A0pAgf2HzDQgjmL2GwSC0AsAJ7AR2GUMg+/M687VHtZGOtkVSRgSgJU" +
            "AEz5WihUuAhgjvtL/EEfjfoWhKtOs9XTq1cvDIQe879nsMe2P59FANvlfIqA7xAdf0XBbH0xKk/T" +
            "pn5+AOGzAEjz6TgnYJ2mapchLgD/Php9ISxnSQL8Bbfka6PQRgkUFRXt0lTlxJIlS5YbfcZq5ZrB" +
            "JN5eAgO5Z8T+isAp0/+pPMmX8MEyew6b6TzqyOx22Qng6YcoPWFO0xEX4CXEBXgmzPWyOhIwFQEq" +
            "AKZ6HRQmEgRURavY9eUuOfAlLg8IEma9eveuPRfAtxvAPch7B0n3Z59VwOsHEIGBMxKvr946z27W" +
            "zB3wyL0EEF4LgLSXeetttz4BVemaehvnTRKIEwJUAOLkRbIbDRPwiwkQtwqAnA9wttcs7j4TQAZ7" +
            "b7S8WkXA6xcgDoDuC9+tmuRYYE8fXMqhgwfD3o1zzjnnFjgDfoAtgXPDXjkrJAGTEKACYJIXQTEi" +
            "TCDOYwIIvcyszFpfgNNn/B5zf31+AhGmHrHqm/rOA3AvZYR9CUDkntihY8ffwLggh0oxkUBcEqAC" +
            "EJevlZ2qS8AvJkB53bx4+S67AewOu3eLnFgAPB7y9SkDYv638hKAOwCS28Lh8QOIxDscP378BFgB" +
            "bNwSGAm6rNMMBKgAmOEtUIaIE/DFBNi1a9fyiDcWowZkS2D37t3dOwBkcJcZv/vyKQKyI8DtAChb" +
            "BD3bBPd9802MpG1csxIN0LcEIH2JUMpTNPUNu81eEqH6WS0JxJQAFYCY4mfj0SWgrnzt1VdHos24" +
            "DA0sLPudf74nGmCtw5+fIuCd9buVAuS7jwWO7gsIa2uy+8Fj5YjIEoDImn7PpHveA6hxYRWclZGA" +
            "SQhQATDJi6AYkSeg2tRfY003Gy3F7TJAixYtFDkkyL1FTmb+YgkQZcBtEfApAx7zv9xr1apV5MFH" +
            "qAU5FEj6JpaAQ4cio9PZ7faJqqK+XjqndEGEusFqSSBmBKgAxAw9G442gYKCgp0S5vWrqq9WRLvt" +
            "aLbXv/+AU+Z/Mfl7FQG3ydz73R0MCEsCsmxg1XTuuefWxgLALD1S3ZiQNXjgFAST4pbASBFmvTEj" +
            "QAUgZujZcCwI4A/5qiWvvTICbUdmyhiLTtVpU4ICtcLg6Jn1e/0AvOZ/8Q2o8S4PWNkJULrsSEry" +
            "bHWEIhO58V9RhgwZkotgUqtKS0qW1kGtzJo1q0lpaWkruRYVF1tXm6rbMX5PCAKOhOglO0kCXgJO" +
            "l+s3MB2/i6+yDDAxXsEMGDBAWfree4oKjUdVbbhgyHZf8h2zZXx2SaaFU0pKiscREFaNI0ePKC1b" +
            "tYxUb6YXFhVmlM0pXVY6p+QQrEhfA2BTaB1pYIqTmJRj0vCB1LRmyD+O/M/hPPhJjVbzuylTpuyO" +
            "lFCslwQaS4AKQGMJ8nlLEcAfZJz3Xtp079dfV7Tt0CFuFYA+ffsoa1avVo4cOSxjvfuS/7j/Jz9x" +
            "iaXAyqllSsta34aTJ09GsivpmqblgNnoJ554osWxY8c6XHDBBef17du3OQIGDfVv+MCBAx+tX79e" +
            "/XzH57fZVduasjklRzRFfadwcuFU/3L8TAJmIEAFwAxvgTJElQBCvK4tX7x4MA59iWq70W6sd5/e" +
            "yuoPV2Owd8nY7x705QMGJEWFTTsdcQOsnJKSsQQgzo3uJQBYNSKb8qAE7EQT03Hl4qoXXmpqqjJ2" +
            "7FhFGatUoczjy5E+3bT5j1g++Fy12YbCD2Uf7jORgCkI0AfAFK+BQkSTAGZymzAIXoA2F0ez3Wi3" +
            "lTVwoNvJT7b71cYE8PoCJCU53OcHRFumcLfndgTEEsDhCO0C8JNXrEVf4JqGq97B36+sfJQyD4wa" +
            "Neq9SUUFa7Ez4zqtxvUpQgvPr1OOX0kgZgSoAMQMPRuOFYFqp/OPmBBnof2KWMkQjXabNGmidOvW" +
            "zdsU7B7e7YCyA+CCCy9SJN/qyX0sMHY5RHgJoBYTrABuq0PtDWMfpl199dWVBUWFN8D8Mhi+BC8Y" +
            "e4ylSCCyBKgARJYvazchgalTp57AcFj1QWXlRhOKF1aRLh465Iz6+vTpo2QNFP3H+unsZme7rRsn" +
            "TpyISmeOHj2qfLp5s3v7YZANpqD8sklFhQ/jZ6fSktKXg3yexUkg7ASoAIQdKSu0AgGsgX+yafPm" +
            "myGrrNXGbYKTmtK1q88KALMHlgXGjMMadZyktLQ0906A77//Pio9SsLWw++/P6j85/P/hNrefCwJ" +
            "vIGNGO1pCQgVIZ8LFwEqAOEiyXosRUBTlC3YqjUQQldYSvAQhB196SXKTTffrOQXFCijsrNDqMG8" +
            "jzT3hQOGb0M0khxD7BKfg8OHFHj8h9rkA1ACyjRV68EIg6Ei5HPhIEAFIBwUWYflCDhdzofgDD8A" +
            "gldYTvggBW7WrJnStl27uFjzr9t1UQBsdjkBMXLhgOtrU5Yc5CClRiw9zC8oLHxAUbRxcAz8S902" +
            "+J0EokGACkA0KLMN0xHw8wOI6yUA04GPgEAtW3riAfzwww8RqP3MKlvi/ARxOjxx4mRjrABS8YJx" +
            "V1w+Fn6Fk85shXdIIPIEGAcg8oxj1oKEJj18zjnNq5s2dSQdP+485nD8IANfzAQyWcM+P4Dh2dmi" +
            "BKSbTDyKY5BA69ZtlG8PfKvs37dfad8+8sGNzsGBS6IAyHX0yBHl+PHjStOmTQ1Ke1qxlK5du/4T" +
            "ERpeliiDBZMLR5+Wyy8kEGECVAAiDDja1WNN8RFVUS6El3tvrFA2R/tH1RqX82RyE0eSqjZDQJIT" +
            "GPh2IhLMNk1TtxYUFRRjXzyWxBMvodNbwEI84ipwTUw8AvHR41bntnKvy3+1a5eSmZUZ8U6ltW6t" +
            "nMTsv1YJwM6AEBUAkTUT/wbLy0pLh2Ap4O8FRUW/jHgH2AAJeAlQAYiTXwX88XgCpsRrEedtU6vU" +
            "8/6Yk5PTpE2bNuL+3dK/i0eOHPlxx44d+1av/HAoyl6JsLj3QylYB4e4FQhX+gv/svH+WfwAkuwO" +
            "+YP7HC4qABZ94e3g3yA+ABL2WJYBxOch0kl2V5w8ecJjBTh8RJHdCI1I00eMHHnpB8tXvIY6qAA0" +
            "AiQfDY4AJotMViYwb968s2uczvXow+7rrr/+YQz6d+HzBIN9qkS5BYsWLaqCCfXPsjUJ58b8H0Lk" +
            "/trg85Yvhv3Yn1085OJfDBo06BXLdyaBO7C4vFz54egPyoUXXaj06Nkz4iQ2bdqk7PryS0X8D+Tq" +
            "269fY9tcPLekNAnLAd9iKeCnja2Mz5OAEQJ0AjRCyaRlHnnkkZYuZ81ehyPpHXgUf4nB/1WIanTw" +
            "l15l45p/0003vVxQWPBWl+5dr3Rp2nhZj5TMREiwgny65sMPL0uEvsZzH/G7744H8A0886ORZMZ/" +
            "8mS12wIgzoBhSBNuz5s4AztTbgxDXayCBAwRoAJgCJM5C52VlLwpKSn5sbvvuXskJGyMCTsFzz8w" +
            "bty4D6BI/EtDzHMsCxzEssLfzNnzsEr1Hyx/9EKNYg1hsiiBHj164lCgGszKdynVGJgjndq2bVu7" +
            "BCC+AOFIWLr4PXx3XocCLktSTCQQcQJUACKOODIN4I/EmzAXvv+zu38m6/zh8nxyKwJwShp0fe4N" +
            "V0ERuAVKwPOR6YE5anW6XI8iIEtnSLPTHBJRilAInJd6nmJ3ODzOgF/tCqWKoJ8Rq4O/M2DQFZz5" +
            "QPadP/tZGW5fd2YW75BA+AlQAQg/04jXOO+Ree0wU+iPaGKr0VgwJn+jsmW2bt/6NVgD/oCdAufC" +
            "GrDW6INWK5ecnLwHB7S0g9wbrCY75T2dQOfOnd3OgF999fXpGRH6Jkf/enYCnGhMQKDTpMMBTffj" +
            "xqu0ApyGhV8iRIAKQITARrLamiTnyzD9L0IbxRFsR6wB82EN2AVP0dWlc0qOYIvhXyPYXkyqzs/P" +
            "P4SGHYcPH94aEwHYaNgI9Ot3vvtgoL1794StzkAVtcEywAnsBJBogBILIEwp+4677pyLumgFCBNQ" +
            "VtMwASoADbMxZU5paWkrVVF73HXPXVUQUAbpSKeJ2BXQb/jIEX0QtnRiPMYuh4LzxXvvvSeKAJOF" +
            "CcgyQNOzmyo//vijsm/fvoj3RCwAyUnJbmfAY2GMQuixAmiv4d/aMxHvBBtIaAJUACz2+lVNexhB" +
            "fJZC7OlRFD17wIABS3CeeR94KQ/G1rl/RbHtaDS145s9e34SjYbYRmQJ9MN2PHEGjNZugPYd2rud" +
            "Affv3x/OjmVPuO7a30PhjsTyXjjlZF0WJ0AFwGIvEI55/QdkZb0IsdOjLHom2qvAdkHZcdAvniwB" +
            "mqJW4RJnyo1RZsrmwkxAYgCIM+De3VFaBmgjuwFOKocOhdeAhOBG90HZ/gBOuLIcwEQCESFABSAi" +
            "WCNYqaZ069+/f0YEWwhUtZ8SoI2LF58Am8u5ALMtcQQ8GKjzzDM/AZjPlb59+yp79uyOirBdu3VV" +
            "NITgPHzosFJdHdbth7kdOnb8Daq+NCodYSMJSYAKgIVe+6xZs5ogbv9ZLVq06B1Dsd1KAHwCLsSg" +
            "Obm4uNjyv0Muh+MIzgRoAaZUAGL4ixWupvudf75itzvcOwLCVWegenCgj9sZMMzLDinjx4/PhhXA" +
            "Nnv27C6B2mceCYRKwPJ/vEPtuBWfs9lszbEEcBSyZ8RY/kzxCVBVZX6b1NYShtjSCTM4mbohDCu3" +
            "Alr6RXqFFytA1sCsqCkA/QcMQDyAE8qnmzeHG990BKl6w26zl4S7YtZHAkKACoCFfg8w+0+Cx7oM" +
            "VlkmEDsTuwNk1ryrbE7J2yaQJ2QRoFi5YM3gv4WQCZrvQbECIMZDVASTg4EyunRRDh48qOCgrXC2" +
            "mY7dPk/id3NsOCtlXSTgI8A/ej4SFvjpcrlsCACEwSoq2/+MEJmIYESfa6rSFErAS0YeMGMZp9OJ" +
            "eEcwtjKRQIgEBg4a5PYF2LF9u3sbYojVnPFYUlLSVET8fBvOgI+ekckbJNBIAlQAGgmQjyvTEDHw" +
            "CfyR6oqIgQvJgwQSkYBYAc6H1eHYD8eUz7ZtCyeC3E6dO92PXSo54ayUdZGAEKACwN+DcBCYAUtA" +
            "HibRYyy+M2BDOGCwjsQkIMsOEhfg66+/xq6AsG0LTLn66qsH4KjuJiUlJZ0Skyx7HSkCVAAiRTax" +
            "6k1Bd8uHjRh+EdYriyzcde4CsPDLM4PogwYPVs466yxld3jjEOTC+XcZ/lj/3Qx9pAzxQ4AKQPy8" +
            "y1j3JB07A57GzoCn4vnwoFhDZvvmJiCOhyNHjVIkLHEY04SLh148F0rA0DDWyapIgEsAVvodEG91" +
            "mNlFaas0qdzZ2BmwHVuXDsX7McIm5U+xTEDAgUiEaWlpYZVk0KBBQ3BqpbOsrCwjrBWzsoQmQAuA" +
            "hV6/7FfHLED2q5s5PYITBH8BOS+GEvA3MwtK2UjAQgTyYF2rxHGH/DdloZdmdlGpAJj9DfnJh22A" +
            "R7FXrTluVfjdNuPH8gsuvHA4lIB8MwpHmUjAggQyLxoyZB6XASz45kwsMhUAE7+cuqJNnTr1BOIA" +
            "nPj+++8/q5tnsu/pF1544S+wFPBS2ZzSZSaTjeKQgCUJYBngv7gMYMlXZ1qhqQCY9tXULxhi1u9c" +
            "v379d/XnmuruNCwFPKWpWhssBdB72VSvhsJYlEAulwEs+uZMKjYVAJO+mAbFUrVt27dtuw75Ydto" +
            "3GBbjc9Y0Kdv3/EwW97e+KqiUkNOVFphIyQQGoH0kdnZ/+IyQGjw+NSZBKgAnMnE7He2wbTuPpHP" +
            "7IJCvvScnJzb8HN1aUnpvywgL0UkAVMT6Nev3xVcBjD1K7KUcFQALPW6cBJQTc2fELV+AMSusIjo" +
            "DyBU8B8QyezaefPmmX0Hg0WQUswEJuBeBtBc2v8mMAN2PUwEqACECWS0qvE6AlatXbv2i2i1GYZ2" +
            "ZsBs+ZirumZZGOpiFSSQyATSr7rmmhWIuDkskSGw7+EhQAUgPByjWgscAT9Zu2bNFWjUCn4AwiYb" +
            "DoFrsYOhJc4K+EdUYbExEogzAp06dRqFZYAf5s6c2yPOusbuRJkAFYAoAw9Hc5hNb4EfwEDUVRGO" +
            "+qJUR3G/nj2uVRXt1ii1x2ZIIF4JyDLA2y5Hzax47SD7FR0CVACiwzmsrThdzoe8fgDlYa04spWl" +
            "jxozRgb/dYgN8FRkmwq59qyQn+SDJBA9Ail35+cvhRVgbPSaZEvxSIAKgAXfqs8P4IPKyiqLiT99" +
            "3JVX3Anl5UaTyt3SpHJRLBI4jYDdbp+oqOpbiLHx6GkZ/EICQRCgAhAELDMVFT+ATZs33wyZrKQE" +
            "pHTp0qVA0bQ34AvwjJl4UhYSsBiBCekZ6b/DUuAlFpOb4pqIABUAE72MYESxqB+AdHH66MsunQwv" +
            "5vHB9JdlSYAETidw5ZVX5sqd0tLSrqfn8BsJGCNABcAYJ9OV8vMDqDCdcIEFSunVq9c9ONRoFcyX" +
            "cwMXjU4ujm9VEacAOhUTCViKQJ6iam+oLqXUUlJTWNMQoAJgmlcRnCAePwBl16oVK74I7klTlJ7e" +
            "tkP732qaMtoM0uCURfw7wJ9RbFc0gzyUgQQMEkifVFi4DrrrJcXFxQ6Dz7AYCdQSoAJQi8KCHzRl" +
            "y8ZNm+RcACv5AQjolNzc3JFwBmw6a9asjrEmr6qqRCisjrUcbJ8EQiBQDOX1+TapaYtCeJaPJDgB" +
            "KgAW/gXAwPWFpqgSDGSDBbsxHQ5MS5Ps9pgHBrI5nS1wauERCzKkyCSQjiBb72BHwBVQppsQBwkE" +
            "Q4AKQDC0TFZWrameD2e6dhDLigpA+jVXX7MCC+9DY43VZXPkYRa1J9ZysH0SCJFAMf4OPO6w25eG" +
            "+DwfS1ACVAAs/OJdDscRbAdsgS4ctGI3OqZ3HAnXO9e8mTM7x1J+RCdMx/V5LGVg2yTQCAJuXwD8" +
            "W0phqO1GUEzAR6kAWPila5om69ayfm1FC4CQl5CmK132pIfkSwxT96FDhq+PYftsmgQaS2AGQ203" +
            "FmHiPU8FwMLv3GazwXNds/I7TLn4oqHvYf29fyxfA5Yh0tt3av9NLGVg2yTQSAIpEmpbU9X1pSUl" +
            "CxtZFx9PEAJWHjwS5BU13E2n06lpKnzpLZz6Z/XPQBd6x6oL4jgFZ8rktLS0Y7GSge2SQJgITB82" +
            "fNjd+Pd0bZjqYzVxToAKgIVfsF8Am5ZW7Qb6MBL7mPfHajsgrCjNYQE4alV+lJsE/AikZGZm3o1Q" +
            "2x+aJciWn2z8aEICVABM+FKMiuQXwCbL6DMmLJeB7YDbkx2OqbGQTWIAwIQivhSWVaJiwY1tmpbA" +
            "9PadOt6HIFuXmlZCCmYaAlQATPMqghckTgLYpKs2ZZtL07oFT6DxT4gSBQuERAG0shLVeBCsIV4I" +
            "pIwfP34CFgZts2fP7hIvnWI/IkOACkBkuEalVr8ANpYevNqkpj4LYF2jAo2NkED8E8iDVetNu81e" +
            "Ev9dZQ8bQ4AKQGPoxfhZzZ50hzeATUaMRWlU8xcPH34e9jB3aFQlfJgESMBHIP3u/Px18AUY47vB" +
            "nyRQHwEqAPVRscg9xAHoggA22yFupkVErlfM5s2b/4iMs+vNjPDNeHCkjDAiVm9BAna7fTzCA1cg" +
            "MNAcC4pPkaNEgApAlEBHpBlV6XPRkCHvRqTuKFZ69OjRs9BcTLbhxYkjZRTfFpuyCIEJqWmpD+G4" +
            "4CEWkZdixoAAFYAYQA9Hk+7964rSadCgQeeFo75Y1vHN7m9S4bT0dSxkiBNHyligY5smJ3DjjTeK" +
            "E2AWjgrm33mTv6tYicdfjFiRb2S7OEXv91g3/zeqsbQDoGBYvWZVlqopXzQSSUiP+zlShvQ8HyIB" +
            "ExPIhWzrW6e2fsDEMlK0GBKgAhBD+I1pGscA94Z5byPqyGlMPaZ4VlMz0J+vYiGL30mA2bFon22S" +
            "QAQJ5OCwsI2qqsUs0mYE+8aqw0CACkAYIMaiClXTerdp124+2ra0AyDkFyWmFa5DuKKeeBJg1JGz" +
            "wegRSOnRu+eLCLTVK3pNsiUrEaACYKW3dZqsaq+rrrqq/Wm3rPllJ8SuxiwlOUbid4ciJXEImEgg" +
            "7gjAR+hcHLaVEXcdY4fCQoAKQFgwRreSkpKSTmhxb3Jy8sjothyR1io0RalCzRkRqV2nUrSdPmLE" +
            "CLFAMJFA3BFo1apVTxwO1ESchuOuc+xQowk4Gl0DK4g6AbuqTnFpyg40bHkHQPQhr0arudKu2tZE" +
            "GyRPAow2cbYXAwJZUHKPyqFXaPtEDNpnkyYmQAuAiV9OQ6JJ3HyYzLciP7uhMha6nzl58uRfYxfA" +
            "l9EOWuJ3EmA8KFIWeuUUNYoEWqruJTY1KYptsimLEKACYJEXdZqYmtJr2IgRUZ8xnyZDeL9Mu/yq" +
            "K3+nKNpN4a02cG2IpAizqCazopaBSzKXBCxLABYADfGuXPxbb9lXGDnB+UsRObYRqxlrej369u0b" +
            "k9PzItWpjIyMYsxUPiotKVkYqTbq1otwqWdhm5SEIc6om8fvJBAnBFLipB/sRgQIUAGIANRIVulz" +
            "AEQM+wGRbCcGdWff/JNb5kC5uTZabfsFAcqIVptshwRIgATMQoAKgFnehEE5xAEQ23o+R/EMg49Y" +
            "phg8lvNxgtmHpSWlZdEQ2i8IUNyxjAY/tkECJGBtAlQALPb+PCcAKp9BbKsHAKqP/ITzMwf8GUrA" +
            "JfVlhvueXxCg9HDXzfpIwCwE4GCryamXZpGHcpiHABUA87wLQ5LIvvWu3bu/ZqiwBQthT36WoirN" +
            "Zs+eHY0gR9179u79qgUxUWQSCIKASifAIGglUlEqAFZ725qSCoe5ZlYTOwh58+CYt8Jus/0liGdC" +
            "KgplqssFF1zAfwMh0eNDFiKASJvcBmih9xU1UfnHL2qo2ZBBApltWqeWoGxEnRznzZsn3tHOc845" +
            "h+elG3wxLGZNAvAZOiIOr9aUnlJHkgAVgEjSjUTdqnLg8MGDcb215/Krr26H3QARPcHM6XS2Rxu7" +
            "8YoyIvGaWCcJmIeAusfj8GoeiSiJOQhQATDHezAsBczjX65dty4eHQBrGTRt2rSfoin7vFsea++H" +
            "84NNseVrqvsMAkYBDCdY1mU6AnB2/VwcXk0nGAWKOQEqADF/BcEJgHXrKuwEiKsgQPUQyMHg/BmU" +
            "nen15IXlFhyjcUiK9ikqi2tlKiywWImlCQzMyqpEB7pbuhMUPiIEqABEBGvkKsXBOY+hdjkNUP5R" +
            "x2vKxuC8CVfklgE0beDV48d/EK8A2S8S8BHo2qPHMdk95PvOnyTgI0AFwEfCIj9xBPAemMfbQdwN" +
            "FhE5JDExOK/AH61BIT2s81BZWVkGihzv2LEjZ/86rJhtfQJpaWnHsAsgmUcCW/9dhrsHVADCTTTC" +
            "9eXn5x/CP2b74cOHP4xwUzGt3j04q8oxxAPoEnZBXK6HVFVZiXpzwl43KyQBExKAMu07EtiE0lGk" +
            "WBGgAhAr8o1pV9O2v/vmm+LBHs8pV9HUSrvN/rewd1JTB7Zt334W6s0Oe92skARMSEDlkcAmfCux" +
            "F4kKQOzfQdASwEHuk337vy3Ag4uDftg6D2ReNOSieTiud1g4RV5UXJwMB8Buubm50Yg0GE7RWRcJ" +
            "hEyARwKHjC6uH6QCYMHXW+Ny/RbBPUZC9HILim9Y5MGDB18Bf4cf5s6c28PwQzoFv01r8wdFVT9G" +
            "sVydoswmARIggbgmQAXAgq93ypQpMP+rx5YsWfJvC4ofjMh5WKt/2+WoEXN9WJKmuAZgd8FaVEYF" +
            "ICxEWQkJkIBVCVABsOibwyBWsevLXQ9B/IUW7YIRsdPvzs9fCivAWCOFDZXRlAuvmTBhHcqmGCrP" +
            "QiRAAiQQpwSoAFj0xRYUFd2DY3PH1dTUxLMfgGK32yfAZP9WWUnJo419VXPmzOmJkwYPdejQIaex" +
            "dfF5ErAQgRwLyUpRo0iACkAUYYe9KZjHH5s37xLUWxX2us1T4cROnTvdrylqTmNFsqnqTHhDv4N6" +
            "aP5vLEw+TwIkYHkCVAAs/AptTvtUzWMej2tnwKuvvnqAqilNGn02AFhhSWE9XjnN/xb+vafoJEAC" +
            "4SFABSA8HGNSy6Rpk7bDpN1sy5Ytr8VEgOg1modAJsvwy/r3UJt0LyFgKcG9pBBqJXyOBEiABOKI" +
            "ABUAy79MdWXlsmU/QTc2Wr4rDXcg++KhF8+FEjC04SKBc2QJIav/+RJUaELgkswlARIggcQgQAXA" +
            "4u9Ztam/xjKARLRbYPGuBBR/0KBBQ7AbwOmN4x+wbN1MWTqQJYShI0eOrpvH7ySQAAQyEqCP7GII" +
            "BKgAhADNTI8UFBTsxDKAY/369XF9NgCYS0yASsXlCjo0sCwdyBKC1GGmd0dZSCBKBDKi1A6bsRgB" +
            "KgAWe2H1iQvP9lVrPvwwH3nxvAyA0MBD5oWyDCDPXHP1NSvAJ70+frxHAiRAAolIgApAPLx1m+2+" +
            "BFoGcM2bObOz0ddWWlraVdXUkx3TO0roZCYSSEgCWALTHA4H5gpMJHCKABWAUyws+ynBlgFWuuxJ" +
            "EgHRUFJdykxYAN5DYe79N0SMheKTgOpC4t/7+Hy5IfeKvxAhozPXg4myDNC6bdsSkB9gmL6qXFVQ" +
            "VFCG8tz7bxgaC8YZgQz0p1pV1aQ46xe700gCVAAaCdAsjztdrt9gpjsK8lSYRaZIyHHdddcl4yTE" +
            "843UXVpSsgZLI0+hbEsj5VmGBOKUQDr+zRyxOZ0t4rR/7FaIBKgAhAjObI/hhMAvVEVtWlVVtdxs" +
            "soVZHvwtUz4tKy39U0P1ls7B/0pKvoRVZHfh5MI8lMtpqCzvk0BiEFD3uGyOvMToK3tplAAVAKOk" +
            "LFAOfj5r33jttdEQ9ZAFxA1dRFVZoWnaGP8KZs+e3b60pPQdDPxODPz9nDU1wyYVFhajXA7KZfiX" +
            "5WcSSDQCOD30c1zcBZNoL16nvw6dfGZbiADW+DbB5H0JRK7AFa8R7w7iJMSisjklH5XOKfkEMRB2" +
            "wcu/M8wCKUmOpDfuvOvOX9lsNun7LlxMJEACINCmXbtnv9m9Zx5hkIA/AVoA/GlY/HO10/lHzH6z" +
            "0I0Ki3clkPgVmNXnFkwuuhCBgd5GwX0uVbuhoLDw73fdc9eNGPwfxr3sQBUwjwQSjcCIESNawUeI" +
            "FoBEe/E6/cV4wRRPBGAC3zqgX7+C4dnZS+OpX/X0ZTHuITqgehAKwQJ8nlhPGd4iARLwEBg9t7Ts" +
            "jeoaZ8upU6eeIBQSEAK0AMTZ7wHM4Z9s2rz5ZnQrvv0APEscOzH4y1HIHPzj7PeY3Qk/AVgAjsJC" +
            "1jz8NbNGqxKgAmDVN9eQ3Kr2qaKpA5Fd0VCROLove/vj1dchjl4Tu2IGAjD3MhaAGV6EiWSgAmCi" +
            "lxEOUWwOx/+gnnj3AwgHKtZBAolEIAe7hBgNMJHeuIG+UgEwAMlKRfLz86sh7441a9ZUWUluykoC" +
            "JEACJBBdAlQAoss7Oq2p2sfr1669Ho3Fux9AdHiyFRIgARKIQwJUAOLxpTqdv0M8gBHomjjIMZEA" +
            "CZAACZDAGQSoAJyBxPo38qdN+xIBcmxfVX21wvq9YQ9IgATCQED8gphI4DQCVABOwxE/X+Dxu+rV" +
            "Ja+ORI/oCxA/r5U9IYFQCbQM9UE+F78EqADE6bt1KcovoQSMRve4DBCn75jdIoFgCOAQLc3hcODP" +
            "AhMJeAhQAYjT3wSEy9+lqcqJVStWvBynXWS3SIAEgiKgchtgULzivzAVgDh+xzj9q2LDpk/uQxcr" +
            "47ib7BoJkIA+AfEBYCAgfU4JVYIKQBy/bpyad4+iaGPRxZlx3E12jQRIQJ9ACk7MPGJzOlvoF2WJ" +
            "RCFABSDu37T6dllJ2aXoZlXcd5UdJAESCEBA3eOyOfICFGBWghGgAhDvL1xVJsPr53J0c0a8d5X9" +
            "IwESaJgAlgQ/x8UjgRtGlHA5VADi/JUXFhb+R7r4+uuvV+AHIwMKDCYSSEACA7OyxBeoewJ2nV1u" +
            "gAAVgAbAxNVtVVtatbPqz+gTtwTG1YtlZ0jAOIGuPXocw5HAtAAYRxb3JakAxP0rVhS3M6Cmjauu" +
            "rqYzYAK8b3aRBOojkJaWdkxV1eRZs2Y1qS+f9xKPABWARHnnqvL2E489die6uzFRusx+kgAJnE4A" +
            "FoCjNput+el3+S1RCVABSJA3b3Pap+KAINkSSGfABHnn7CYJ1CGQAYdgxgKoAyWRv1IBSJC3P2na" +
            "pO04IKhZxdsVHyZIl9lNEiCB0wlkIBowowGeziShv1EBSKjXr67cuuNTiQy4OKG6zc6SAAmQAAmc" +
            "QYAKwBlI4veGalN/jWWAbPSQuwHi9zWzZyRAAiRgiAAVAEOY4qNQQUHBTiwDON5747018dEj9oIE" +
            "SIAESCBUAlQAQiVn0efgBLRq+xfbfgXxJSgIEwmQQOIQyEmcrrKnRghQATBCKY7KOF2u32Ar0Ch0" +
            "qSKOusWukAAJkAAJBEmACkCQwKxefMqUKV+oitq0qqrq31bvC+UnARIgARIInQAVgNDZWfZJbAX6" +
            "/+2dC5QU1ZnHq5oZRg3MxATMGnUh6oCiCRiImiPKECMnbtRAYh6uJjJGhelGQjbuSTab7GnzNJtN" +
            "VEJ3D5HI23cUMMARUAdEDC95OiBgkGgcmRlREA3Mq/Zfw+OMMMx0T7+q6v7qpDJN1a17v//vK7u+" +
            "vvXde9csnD9/uG8FYDgEIAABCKRNgAAgbYT+q0DTgW5yLHuILCcPwH/uw2IIdJXAR7t6IdcFkwAB" +
            "QDD92qGqxqamnykZcJAKVXVYkJMQgECQCAy01f1XUFCg//zZIGBZBAAG3gXjx48/6DjO3zdv3rzD" +
            "QPlIhoDBBGxmAjTY+8dKJwA4logp/7bt6uXLll1iilx0QgACrQRYC4Ab4SgBAoCjKIz7sMNx7AFS" +
            "TR6Aca5HsKkEHNt5L9TU1NNU/ej+MAECgA/zMOZfehU4US8Cz5Xg9caIRigEjCdg17SECkYbjwEA" +
            "rQQIAAy9ESKRyOuS/i8NDQ3PG4oA2RAwjoBtOa9q72OccAS3S4AAoF0sphx0Xpk/f/6bpqhFJwRM" +
            "J/D5Sy97SQzcnj82CDAKwOR7wLHtrbtrasrFYJfJHNAOAVMIfPKsT+7WVOD0AJji8E500gPQCaAg" +
            "n1ZX4FbLsQdKY1WQdaINAhA4RKB3794faCKw7hMnTiyCCQQIAAy+Bxqbm3+p5YE/IwQkAhp8HyDd" +
            "LALqAdgfCoV6mKUate0RIABoj4ohx1onBLKcXWvWrNlpiGRkQsB4Ahr9w1wAxt8FhwAQABh+I9iO" +
            "vXnNqlVXG44B+RAwhoCGADMboDHe7lgoAUDHfAJ/Vt2BW5QHcJGELg28WARCAAIQgMBRAgQAR1GY" +
            "+aGppekXh/MAqswkgGoIQAACZhIgADDT70dVH8kDqK6uZmGgo1T4AAEIQCD4BAgAgu/jThW6eQDL" +
            "qqqGdlqQAhCAAAQgEBgCBACBcWUaQmynWrkAn1UN5AGkgZFLIQABCPiJAAGAn7yVJVt319VFVbUb" +
            "AFRpZ4MABCAAAQMIEAAY4OTOJEaj0RaVWb9ixYqtnZXlPAQgAAEIBIMAAUAw/Ji+CsdesXHdhjGq" +
            "iNcA6dOkBghAAAKeJ0AA4HkX5cbA8LjweMd2LnrnnXf+Nzct0goEIAABCOSTAAFAPul7rW3HnvPw" +
            "Qw/dIbPoBfCab7AHAhCAQIYJEABkGKifq1MvwGjLsQZtXrf5TunY62ct2A4BCEAAAh0TIADomI9x" +
            "Z23bmv38i8tmSHjUOPEIhgAEIGAQAQIAg5ydjNSKSOROTQy0OxFLuMsEz03mGspAAAIQgID/CBAA" +
            "+M9nWbe4Ylx4uGU5o9auXTtejW3IeoM0AAEIQAACOSdAAJBz5P5oUK8CKlf9deVKWTtaO/kA/nAb" +
            "VkIAAhBImgABQNKozCqoVwH/ZVn204l4fLqUl5mlHrUQCCyBvoFVhrCUCRAApIzMnAvcUQHKB9he" +
            "GUtMlupyc5SjFAKBJdA3sMoQljIBAoCUkZl1gfIBrrdspyYRT7izBBIEmOV+1EIAAgEmQAAQYOdm" +
            "SppeB4y0LWd3ZSx+u+okCMgUWOqBAAQgkEcCBAB5hO+npt0gwLKtWoIAP3kNWyFwPAHbsZyCggL7" +
            "+DMcMY0AAYBpHk9DL0FAGvC4FALeINBXyb0t2vju94Y/8moFN0Fe8fuvcYIA//kMiyHQhkBffW60" +
            "bbuwzTE+GkqAAMBQx6cjmyAgHXpcC4H8EtCqn++Fmpp65tcKWvcCAQIAL3jBhzYcEwQMlwQmC/Kh" +
            "HzHZOAKD9AqgpiVUMNo45Qg+jgABwHFIOJAsgSNBgIYI/lrXlGknCEgWHuUgkB8CJRrR86r2Pvlp" +
            "nla9RIAAwEve8KEtbhBwaIhg62RBZZLA2gE+9CMmm0Og33nnPSW155qjGKUnIkAAcCIyHE+aQGtP" +
            "gGW93mbaYIKApOlREAK5JTBkyJCQY1mfym2rtOZFAgQAXvSKD21qnTHQstZXxhPVGzduvEYSpvtQ" +
            "BiZDIPAEiouLL5XIpsmTJ5cEXiwCOyRAANAhHk6mQiAcidzsONaMF55fvrUyHn9P196XyvWUhQAE" +
            "ckKgryb1qmloaDg9J63RiGcJEAB41jX+NEwLCP2otr6u2HLsy7WI0DlSUe5PJVgNgcAS6CtlrxeE" +
            "Qu7U3mwGEyAAMNj52ZIejUZb9EpAw42cIuUFfFftXKR9b7bao14IQCAlAsNsy9rmWDZ5AClhC15h" +
            "AoDg+dQziirGRUZo3vE69QRMk1EKCBgh4BnnYIjRBAZ/9nPPWY5TajQExFsEANwEWSWgIOCrmnls" +
            "g5IDVxxODpyb1QapHAIQ6JTAoMGDTrUtmwCgU1LBLkAAEGz/ekLdMcmBr8sokgM94RmMMJVAYWHh" +
            "WdL+ViwWc/+yGUqAAMBQx+daNsmBuSZOexDokECZ5gLYoV6A8R2W4mSgCRAABNq93hJHcqC3/IE1" +
            "RhPoa9tOtQgwI6DBtwEBgMHOz5f0Y5ID+8qODfmyhXYhYCiBPmf+679OlfYLDNWPbBEgAOA2yAuB" +
            "NsmBzByYFw/QqOkErrnmmmIN1T3j97///cmmszBVPwGAqZ73gO42yYFbDs8c+H0PmIUJEDCFwEgt" +
            "Dbz2pKKTfmaKYHR+mAABwId58K8cEzicHFjizhyoZYW/qOaHa9+bYzNoDgImEhhpOdZy23EuNlE8" +
            "mhX+AQECXiEQj8UWauKgXmMj4dtk0zTtA71iG3ZAIKAERiVi8Yd7afrub0SjDQHViKwTEKAH4ARg" +
            "OJx7AnolcLVj21v1hTSfSYNyz58WjSQwwbLtOfW9T5tlpHrDRRMAGH4DeE1+OBL+tjqmZh5eUdCd" +
            "NOgur9mIPRAIEIFh5beU369pgZUPwGYaAQIA0zzuA71tJw1SXsAQmVyunbwAH/gOE/1H4KSTTvqp" +
            "JgSal5gUf8h/1mNxOgTIAUiHHtdmncAxeQFz1GCfrDdKAxAwjMDBgwevmjrlgflaxbPIMOlGy6UH" +
            "wGj3e1/8MXkBQ2UxkwZ5321Y6DMCRUVFP5HJT9EL4DPHpWkuAUCaALk8+wSOyQt4Xi1Oz36rtAAB" +
            "owgMG/3d8oRjOV8zSrXhYgkADL8B/CK/bV5AZSzxcdnt5gWwQQACGSKgXIA/2bb1pHoBHs9QlVTj" +
            "cQLkAHjcQZh3PIHEpNgix7ZOrgiHf6qzbl5AyfGlOAIBCHSBQHllPJFobG766Pjx4w924Xou8REB" +
            "egB85CxMPUSgzWJC9+pImXbyAg6h4f8hkC6BqNYHmFLQrduz6VbE9d4nQADgfR9hYTsE2iwmtODw" +
            "pEFL2ynGIQhAIDUCfcaGw29riuCS+KT471K7lNJ+I0AA4DePYe9RAm0WE9qqxYQ26QTJgUfp8AEC" +
            "XSYw4YJ+paNsy7mxyzVwoS8IEAD4wk0YeSICbZMDE/H4x1Tu+ycqy3EIQCApAiVXXHWV+/Bfq4TA" +
            "GUldQSFfEiAJ0Jduw+j2CMRj8cVa2ay7FhO6R+enaSc5sD1QHINA5wT21tfXX/z4o49tqIiET+68" +
            "OCX8SIAeAD96DZvbJaD5Aq7S6IC9WkzoRypQpp3pg9slxUEIdEqgpFevXj/WvAALmByoU1a+LUAA" +
            "4FvXYXh7BJQXcJ0Wuf6HXge4+QB9tTNCoD1QHINA5wRuvvGmm36oYl/tvCgl/EiAAMCPXsPmDgko" +
            "CHBnM1uv8czVjBDoEBUnIdAhgeLi4ikqwBTBHVLy70kCAP/6Dss7IMAIgQ7gcAoCyRMYVn7rLZUq" +
            "Ti9A8sx8U5IAwDeuwtBUCbQzQuCuVOugPARMJ8BCQcG9AxgFEFzfoqwNgTYjBKbqsLuzQQACSRJo" +
            "aGi4/oH7//QgywUnCcwnxegB8ImjMDM9Au4IAcuy91XG4rerplHaGSGQHlKuNohA9+7dNSugM1+z" +
            "A842SHbgpRIABN7FCDxCQL9ertUIgVqGCR4hwl8IJE2gz003f2eRgoBrkr6Cgp4nQADgeRdhYCYJ" +
            "VEQiI23LfuPwMMEy1c0wwUwCpq7AEujRo8dYBdDrErGEuwgXWwAIEAAEwIlISI2AegKu1xXuMEEW" +
            "EkoNHaXNJjCwz1l9/2A5zhCzMQRHPQFAcHyJkhQItBkmuEULCb2sSxkhkAI/ippJ4LIrLuuv2QHP" +
            "M1N98FQTAATPpyhKkoA7TDA8LtLTsaxL1K15uS4brn1XkpdTDALGESgpKekn0T0ejUa7Gyc+gIIJ" +
            "AALoVCSlRkC9AUP0bvNtJQfOrlpU9SVdfV9qNVAaAsYQ6GvZ9nu1vXr1NEZxgIUSAATYuUhLnoCG" +
            "CX7DtkNTt+yoXlIZS5yjK93eABIEk0dISTMIDLMtq9G27UIz5AZbJQFAsP2LuhQIVEQqfqLegDN1" +
            "yX71BizSa4Hl+lyundcCKXCkaLAJKAegRRvPjgC4GScGwIlIyCwBjRK4oba+7hT90hmk3oD/XLJk" +
            "ydVq4S7tTB6UWdTUBgEI5JFAQR7bpmkIeJZANBptknFDNYXwb3e8sm3R9m3bd57+ydOvHDly5LU6" +
            "Plp7H+1sEIAABHxLQD9y2CAAgc4IJGKxPziONULJggX6j2bB2HB4ra6JaicQ6Awe5wNFQJNo/aO5" +
            "peXiO+64481ACTNQDK8ADHQ6klMnoBkE79CQwf764vui5dil+hKcovkDVh48eFBrDFhzU6+RKyDg" +
            "TwKaSTOkrcWf1mN1WwIEAG1p8BkCnRDQr56dyhH4Um1dXes46KlTHpivYKC5pqZmgC51hw+SJ9AJ" +
            "Q077msAGzZtR6DhOo69VYHwrAXIAuBEg0AUCyhFwfwF9073UXSFtzhNPrtbrgRfOOPPM4dddd91A" +
            "HZ6g3f3LBoEgEXhXr8D6axTA/iCJMlULOQCmeh7dGSegPIFK5QlcqS5S/c9ZqDyBP6uR0dpvznhj" +
            "VAiBPBB4//33754xbfpYvQ47NQ/N02SGCfAKIMNAqc5cAsoTcL8YS52QkgUP5QksScQTpxx+PXCX" +
            "yPB6wNzbIxDKX6l+5W/q6Xo1EGIQIVeyQQACWSGg1wShT/Q6bbYmTrlWXQLLzy49584RI0a4K6lF" +
            "tTN6ICvUqTSbBDQvxsOO7TS4i2llsx3qzg0BAoDccKYVwwno9cAfDw8jfEcjCW4YN27cpUIS1U4g" +
            "YPi94SP5c5XwOoQhgD7yWCemEgB0AojTEMgkASUM3q38gOtsx3r/woGf+ebQoUO/o/rdhMGSTLZD" +
            "XRDINIEdO3aEFz+9aII7HDbTdVNffgiQA5Af7rRqKIHWJYgjkQGOZb+4aeOmlVpv4CKhGKR9rqFI" +
            "kO0PAruWPL1olPJbn/WHuViZDAF6AJKhRBkIZImAphp+WL0B+mJ1/qhRA8+omWna6Q3IEm+q7RqB" +
            "D/bvHztjxszfVkTCxV2rgau8SIAeAC96BZuMIaBliL8VKuzWw3KswUqwir711lulEr/UGAAI9QOB" +
            "pdNnzPyKklmf9IOx2Jg8AXoAkmdFSQhklYC73oCGD96u3oBK9QY4aux7WW2QyiHQOYG927Zt+9oz" +
            "i5fM0rv/0zsvTgk/EaAHwE/ewtZAE3DXG9hdX/sRPfnLlG19tsSWB1ow4vxAIPrMkiV/0NRWs/1g" +
            "LDamRoAegNR4URoCOSGg3IDFtuN0HxsJT1WD7s4GgVwTmK4k1RY9JD6l9S+G57px2ss+AXoAss+Y" +
            "FiCQMgHlBmiVQXufegJu08X0BKRMkAvSJLBh7dq1/2NZzige/mmS9PDlBAAedg6mmU1AX7zX2o69" +
            "pzIWdwMAggCzb4dcqnenrB656q8rV6rrvzKXDdNWbgnYuW2O1iAAgVQJuK8D9EvsnxXh8B5de3Oq" +
            "11MeAikQcB/+bg7KdCWkrtO8FaNTuJaiPiNAD4DPHIa55hE49DrA6lMZj7tfzhvMI4DiHBKYoOGo" +
            "k9XztJ2Hfw6p56kpAoA8gadZCKRCoLaubrB+kY3dt2/f9brODQTYIJBpAuVavXKMhqHW6PWTe5+x" +
            "BZwAAUDAHYy8YBDQyoJN7myBD86c/bgURYOhChUeIlCuXJPbbcvZreGoIz1kF6ZkkQABQBbhUjUE" +
            "MknAnSdAuQAf6FXAOap3aSbrpi6jCbQ+/LU4fC0Pf7PugwKz5KIWAv4mECosGNbS2LxfKi7Rvs7f" +
            "arDeAwR4+HvACfkygVEA+SJPuxDoIgF3ASGtHXByRaRip6pguuAucuQyi4e/4TcBrwAMvwGQ7z8C" +
            "7gJCyge4tKqqapKsJyHQfy70gsU8/L3ghTzbQACQZwfQPAS6RMCxZ215uXqOrp3Qpeu5yFQCbsB4" +
            "ONufd/6m3gRHdBMAHCHBXwj4iIDGaP9ASVt7lRA4WGbv8pHpmJo/Au7Dv0zj/CvI9s+fE7zUMgGA" +
            "l7yBLRBIgUBTc/MXtF7ArbqEXoAUuBladIN0H5rhz7JeJ9vf0LvgGNkkAR4DhH9CwE8EEpPijysf" +
            "oHlsOPwJ2T3MT7Zja84ILN24ceNNK5a/sMqxnMXhSITppHOG3tsN0QPgbf9gHQQ6JODO2OY41qgD" +
            "Bw78vMOCnDSVwH16TbTpheeXb9F9MoOHv6m3Qfu6CQDa58JRCPiGgG3Zf572p6kVMpjJgXzjtawb" +
            "eiTZ71xNIX15bX1difJGfpT1VmnAVwR4BeArd2EsBNonoFcBB8tvveXLRUVFWjmQzXACblLoSE3t" +
            "e79jW/X61X+14TyQfwIC9ACcAAyHIeAzAk9MnfLAWNk83Wd2Y25mCczV+/6hlfHEAse2t/Lwzyzc" +
            "oNVGD0DQPIoeYwm4vQD//u0bLyguLt5uLASzhX9f7/tL9a7/OxodEqPL3+ybIRn1BADJUKIMBHxA" +
            "QAHAQ47tdK8Ih9+TuWR6+8BnGTLRHeI3OhFL/E4jQkr0q39IhuqlmoAT4BVAwB2MPHMIaETADUoI" +
            "/Lf6+vpfSbWbBMYWfAL3rV69+tpEPD7Ptp09PPyD7/BMKiQAyCRN6oJAvgk41mOPP/LoPTLj3nyb" +
            "QvtZJeAGeMPV5d9zzerVm9SV+5Am9/l6Vluk8sAR4BVA4FyKINMJJCbF3hrQr/TyK666arVYlJjO" +
            "I4D657722mtjFy5YqBEfztv61V8WQI1IygEBegByAJkmIJBLAo5lz3552/Yn1SZTBOcSfPbb2qUm" +
            "RiXiifqFCxa8qvn8n+Xhn33oQW6BHoAgexdtxhJQQuByx7LWV0QqhgrCQGNBBEf4fe7yz1uqq+dJ" +
            "Ui0P/uA4Np9K6AHIJ33ahkCWCIQKuw1XdH+bqqcXIEuMc1Stm+E/XEl+Z+vh/4J8uoCHf47IG9AM" +
            "PQAGOBmJZhKIx+IP6x3xKRoWuEcEGBbor9vATfK7V0P7ermBnGb0ezIcCX/LXxKw1usECAC87iHs" +
            "g0AaBOKx2O7zBwy4rKysbI2qISEwDZY5vHT6li1bJlY9+9wMDet81+3NGTNmTGMO26cpQwgUGKIT" +
            "mRAwkoAi/Jnue2MFAKN0T1tdAAAHJElEQVQFwE0MZPMuAbe7f4K6+/9DfxdqNr9ZmtvhB941F8v8" +
            "ToAeAL97EPsh0AkBJQQ+p4TAnUoI/JiKfqWT4pzOPYFdajKq7v4h+kKmuz/3/I1tkQDAWNcj3CQC" +
            "8Umxdy6+9JKBgwcP3ijdvArwhvNb3/MvW7y4ddgm3f3ecIpJVvAKwCRvo9VYArZtVa5eueqvCgBG" +
            "CsJzxoLwjvD7du7c+eunFyx8QCZpFUd7Nt393nGOKZbQA2CKp9FpPAGNCpipUQHna1TALMG4x3gg" +
            "+QEwfd++fb+YPWvWb9x1GyxN3awHv1bvY4NA7gkQAOSeOS1CIG8EFAQssB3HGRsJ18kIhgbmzhOt" +
            "D/4HZ86+W01eq/0Jd/Gm3DVPSxA4ngABwPFMOAKBQBPQWgFrNV3wGiUFFkkoQUB2vc2DP7t8qT0N" +
            "AgQAacDjUgj4lYA7P8AFpaVDtWDQY9Iw0K86PGp3a3JfTU3NI3OfePKXer//ZdnJL36POstks0gC" +
            "NNn7aDeWgB0Kfbp6+45dAvAZBQH/rb/0BKR/N7g87503b97Sf7zxxt16v3+nHv5zw+PCbk8LGwQ8" +
            "R4AeAM+5BIMgkBsCiUTiNKelZZPl2HN4HZAW86W6elplPD5YLK92LMfRqItnKiIRZfezQcC7BAgA" +
            "vOsbLINATgi4OQFq6C0lBmp9eUYHJAnd7eafs2fPnspHHn5EM/c5X7Ude4kTssLa/pZkHRSDQF4J" +
            "EADkFT+NQ8AbBNzRAXqInaYhgrfKojna+3jDMs9Z4U7Xe++cOXM21bz55q/UzX+ZhvM9tbu+9sZo" +
            "NNriOWsxCAIdECAA6AAOpyBgEgElBk7XA+3q80sHXFE2oswdrsa0wYduAPfX/rSXX3554bKqZTdY" +
            "tvMFcfqnuvmfo5vfpP9CgqeVACB4PkURBLpMIBGL/cyxrFuUvLa+Ilzxf6pomnYTewNau/jf2PXG" +
            "83+ZP2+o41jDLNsq0Bfmi43NzT8YP378G12GzIUQ8AgBAgCPOAIzIOAlAgoEHtRD7+uWbU9RIPCK" +
            "bItqD/oaAid86Fuh0A8rKipeEwM2CASGAAFAYFyJEAhklsCjjz7a7e3a+iWq9ezuRYWP3XLrrfv1" +
            "ebT2IPUI7JKeOfqlv+nYX/o89EWGLdAECAAC7V7EQSB9ArFY7Cx9UfxZ773P0Hvvp24bM2Zlt27d" +
            "blbNw9KvPS81zFWrVatWrdr10po1X1NPx1B174ek8UUe+nnxB43miQABQJ7A0ywE/EZg8j2TT2/u" +
            "3ny/Rgt8STkCiwZ9+sLffP7yyy+SjtHavTqboNutX6V9fXV19Y5lVVVDNVbftXmQ9h1K6FsXamr6" +
            "8Zjvfe/v+jcbBIwiQABglLsRC4HMEFCOwB+1nkCZFhY6WX+X9Tuv37Qrr7zyDNXuLjfsPlzz8ZrA" +
            "fdivd/cDBw5s3vDSS++uW79+hB74AzU5z0D9yn9NY/U366FfHSoo+PmYMWMaVZYNAsYSIAAw1vUI" +
            "h0D6BDSb4BlOi6Npb52LNB6+VDWu1wN2Q2n//k987rOfO7X41OL+OuYGBB/VnqlXBktVl7tVaX+3" +
            "rq5u2+YNm5tf2bblOseyztexc/W64jR9uW3TlHxbbcvZ+vG6ul98Ixpt0Dk2CEDgMAECAG4FCEAg" +
            "IwQmT55c2NLU9FNV1l+/uvvrV/en9LmbvmTecWxrjz6/qc87+vc7/y8XDrywW+/evT9o0/CRIME9" +
            "VNXmuKUH/Ckrli59t6a29gb1NpyjVxCn6wFfol/0H9Hfnirb6P66198dIdt+taGpaSLD9NoS5DME" +
            "2idAANA+F45CAAIZIKCg4JSWlpZTm5qaPtbN7naLfo33UTBwjh7cfW3b7q5f7Pv1JdSoYOFDs+ip" +
            "NyGkc4U618NxnIZD3ffWqwoAdoVamqY5hYV7Gxsb3+/Zs+d75eXlBzJgKlVAwDgCBADGuRzBEPAG" +
            "gYkTJxaFQqEeCgQKFSSE2lql4y168Dfq+H79mj/Y9hyfIQABCEAAAhCAAAQgAAEIQAACEIAABCAA" +
            "AQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEI" +
            "QAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAA" +
            "AhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQ" +
            "gAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAA" +
            "BCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQg" +
            "AAEIQAACEIAABCAAAQhAAAIQgAAEvELg/wEFsAbssT1+jAAAAABJRU5ErkJggg==";
    }
    return Double_Tap;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var Single_Tap = (function () {
    function Single_Tap() {
        this.single_tap = "data:image/png;base64," +
            "iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAAAXNSR0IArs4c6QAAAAlwSFlzAAAL" +
            "EwAACxMBAJqcGAAABCZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6" +
            "eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYg" +
            "eG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4K" +
            "ICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6dGlm" +
            "Zj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmV4aWY9" +
            "Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIgogICAgICAgICAgICB4bWxuczpkYz0iaHR0" +
            "cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgICAgICAgICAgIHhtbG5zOnhtcD0iaHR0" +
            "cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyI+CiAgICAgICAgIDx0aWZmOlJlc29sdXRpb25Vbml0" +
            "PjE8L3RpZmY6UmVzb2x1dGlvblVuaXQ+CiAgICAgICAgIDx0aWZmOkNvbXByZXNzaW9uPjU8L3Rp" +
            "ZmY6Q29tcHJlc3Npb24+CiAgICAgICAgIDx0aWZmOlhSZXNvbHV0aW9uPjcyPC90aWZmOlhSZXNv" +
            "bHV0aW9uPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgog" +
            "ICAgICAgICA8dGlmZjpZUmVzb2x1dGlvbj43MjwvdGlmZjpZUmVzb2x1dGlvbj4KICAgICAgICAg" +
            "PGV4aWY6UGl4ZWxYRGltZW5zaW9uPjUxMjwvZXhpZjpQaXhlbFhEaW1lbnNpb24+CiAgICAgICAg" +
            "IDxleGlmOkNvbG9yU3BhY2U+MTwvZXhpZjpDb2xvclNwYWNlPgogICAgICAgICA8ZXhpZjpQaXhl" +
            "bFlEaW1lbnNpb24+NTEyPC9leGlmOlBpeGVsWURpbWVuc2lvbj4KICAgICAgICAgPGRjOnN1Ympl" +
            "Y3Q+CiAgICAgICAgICAgIDxyZGY6U2VxLz4KICAgICAgICAgPC9kYzpzdWJqZWN0PgogICAgICAg" +
            "ICA8eG1wOk1vZGlmeURhdGU+MjAxNTowNToxNiAwMzowNTo1MTwveG1wOk1vZGlmeURhdGU+CiAg" +
            "ICAgICAgIDx4bXA6Q3JlYXRvclRvb2w+UGl4ZWxtYXRvciAzLjIuMTwveG1wOkNyZWF0b3JUb29s" +
            "PgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4K8lN2" +
            "oAAAQABJREFUeAHsvQl8FNeV73+rqrulVkto35CEQDuLALEasZjdxju2WZI48W52P9sT5832ecO8" +
            "/0wyE2fsDAgwjomd+U9ih9jEccZO4g1wbGyMbXYQi0AsQiC0ILT3UvXObamFAEm9qJeq6l/5I3er" +
            "6ta953xvoXvq3nPPYQwHCIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAA" +
            "CIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAA" +
            "CIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAA" +
            "CIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAA" +
            "CIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAA" +
            "CIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAA" +
            "CIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAA" +
            "CIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIBAuBAQwkVR6KktAi+88IKF" +
            "jlxFUfIERRgqCEoyk1k0E5iRfsRubRQ6qzAbnWlWFOGyIiiVkkOqECKEymXLljV2l8MXEAABEACB" +
            "6wjAALgOB34JFYHN69blOgyGYkFRihTG8kiOPBrYh0uitFuUhLMRZnOLQRRbBEGw04/skpMMBJF+" +
            "DHZZttis1mi71Z7lkB23kJFwgsqcY4pQTcbDeUUWTjCJHVq5cuUp1734BAEQAIFwJgADIJx7P8S6" +
            "v7zu5REOyTGFBv2pTBBKzWZzVXJyipyWlpaUkpKSnpSclErnvJayra2NNV650lxfX3+2pqbmXG1t" +
            "XXtDXZ3R4XDkkGHwVzIGdkgmaTvNEFR7XTluAAEQAAGdEIABoJOO1IoamzdvTndYHbOYqMymN/zZ" +
            "CQnxFbn5+ebc3NzR8fHxMYHUg4yBj8uPlNeWHysXHXbHYMbkP9BUwh9Wr159PJDtom4QAAEQUCMB" +
            "GABq7BUdylRWVlZAa/n30PT9fRaLuXH4iJFxBYUFxbGxsQEd9PtCWVlZ+ddvv/669tKlyzlkCGyV" +
            "FGXbsjVryvsqj/MgAAIgoDcCMAD01qMq04ev7cuStIgc9JYmJMaX3zJlSmF2dvZYtYhJswLVX+76" +
            "8psLVeezFaa8CUNALT0DOUAABAJNAAZAoAmHaf1btmyJsba1PaQw8ZGExISTM26dUZienj5erThq" +
            "a2sv7Pps17dVF84PoX8Ub4gOx++WPf10hVrlhVwgAAIgMFACMAAGShD330Rg0/r1MxVRXB4ZYbbN" +
            "nTdnSNaQITNuKqTSE5drLld/8skn2+vr63KYomyRjMZfkbOgTaXiQiwQAAEQ8JkADACf0eHGGwm8" +
            "9tprkW0tLcsZE54ZO7Zk55SpU+6lMrE3ltPC72fPnv30L3/6S6Xdbm+XmbyOHAUPa0FuyAgCIAAC" +
            "nhKAAeApKZTrl8D69euHSaL4I9q2Z7r7nntGJSYmTur3Bm1cbHz3nXdfJ/+AEllgP1u1atUftSE2" +
            "pAQBEAAB9wRgALhnhBJuCGxev77YIYprszKHNN11z133UXG/vfV3tHewurraE1evNlmbmpvOU7Cf" +
            "Dgr80/3c0q4CWm2QHHFxcQXRMdHW5KTkkojICDcSe3d5//79v9712efzFIW90GHr2PDcc8+1eVcD" +
            "SoMACICA+gh0/yFVn2iQSAsENq3bVMJE+V+Khhe1zpw9+8GBykzBetjp06d3nT51qu7SpZrI5qtN" +
            "48k7/wQF8KmmqH5NTFCs9KnQuM/tAIF+F+h3E33GUFyBdDqRHxll/jI5Jbk1JycnbujQoYU0K5E1" +
            "ULnq6+o+3Pb228ftNrvBrsj/vmbNmtMDrRP3gwAIgEAoCcAACCV9jbfNB39FlH88YeLEQRMnTSwd" +
            "iDqXLl36ZPcXuy9UVZ1fRA/lZzTgf0P1HXAoylFRFE9TCN8Gd/Vv3LgxXpblYZIgDKeyo+iNfSzV" +
            "MyE6Omb78OHDY4pHF5dGREQMcldPP9f3//LVX77dYW0fK8nyWoobcLCfsrgEAiAAAqomAANA1d2j" +
            "XuE6B3/lJxMmTogZwODfeObMmd/s3LHD0dLcMocx5R1BkT6SRfkrWm9vHqj2FHWQh/8dzRxsoiAq" +
            "M2im4LYh2dnbbym9ZUpCQgJFAvTp2L/trW3vkcEyWlIcfw8jwCeGuAkEQEAFBGAAqKATtCaCHwb/" +
            "xnNnzvz6gw8+arVZO24jB7vf0nz+O4H2tN+wYUMppRG8g2YGFg0Zmn1gzuzZkyN9Wx5ofOONN164" +
            "0tAwjnIYPI8EQ1p7giEvCIAAJwADAM+BVwQGOu3f3Nz85tY33zzW0WFbREv5vzHI8tvBDsFLSYjG" +
            "KJJjKRkCT06efMtH4yaMu50geOu4uP+1LVveIifFzDZrx7NwDPTqMUJhEAABFRCAAaCCTtCKCNzb" +
            "XxbEfxszriRiypQpNGXv1dH40Ucf/ezEsePPkOveL0RZ/k2op883rd9Esw/yMovFcuG+hfeNp7wE" +
            "t3ilEWP7X33llc+sVnvlqjWrfublvSgOAiAAAiElAAMgpPi10/imTZuGKrL8H/l5Bc1z58/9gTeS" +
            "NzQ0fPD7t98+2N5hzREVcfOKNSv+4s39gSxLfgJJDpvtKYGJfzNt+vT3Ro0e9X1v2qPIgdve+t3v" +
            "ptFehCcQJ8AbcigLAiAQagIwAELdAxpof+vWrVLdpcs/T0hOsi9esvgZb0QuP3p0245PdsxUmPwf" +
            "FFb3FQqrW+vN/cEqS/4B99M/hr8vLCj4dPbcuY9Rux4vCXz79bevfLX7yyIHU1YG2o8hWDzQDgiA" +
            "gP4JkE8UDhDon0BtTc2jNHgPWrR40cL+S15/9dMdn27evn17tiwoT9LI+GO1Dv5canp736Yw9syx" +
            "YyfGvLPtnZfoVOP12vT9G/kQPEVxB3aJTHya7zzouySugAAIgIB6CMAAUE9fqFISWvcvIl/Rp+bM" +
            "m2OiqHvZngpJA/+Ww0cOFfBBlQ+unt4XynIk52ei4vjf1RcvlP7+7d//J8nisRHwwKJF3zEYDJG0" +
            "nPBwKHVA2yAAAiDgKQEYAJ6SCtNysig+lJKSeoCi6i31FAF/86ep/xzBIf4tH1Q9vU8N5ZavWfO1" +
            "rCh/d/FS9S1ezgRkz547O4K2BT6+ed26XDXoAhlAAARAoD8CMAD6oxPm114uK+Px759acOeC2zxF" +
            "sW/fvk305j+B3vz/z4qnV3zl6X1qKkfr+N/SLoV/qK6unkHJgP6dZPNoJiA3N3dJXGzsEVmSFqlJ" +
            "H8gCAiAAAr0RgAHQGxWcY+QUF+1gwhPjJ07YGRUVlekJkitXrvzuy8+/WEKD/4+19uZ/o358JoDi" +
            "FPxT1YXzD3z99dev3Hi9r99nzZkzmvT/TufSSV+lcB4EQAAEQk8ABkDo+0CVElCunaVGg7F90qRJ" +
            "8zwUkELkvnWWe/trZc3fnV7ciOHGzNe79zxeX1u/xV15fj0tLW1CYmLSQYcgLfSkPMqAAAiAQKgI" +
            "wAAIFXkVt8v3xlNWvaWlU535fTzaDvfeH//43xTdb6jM2GYVq+a1aNyY4UbNO+9su0I37/ekgukz" +
            "ppPjJFtSVlZW4El5lAEBEACBUBAwhKJRtKluArLNNleUjFdGjhp5ryeSUmKc/zx39tz/EhTx4dVr" +
            "Vtd5co83ZXgQIsryV0yzErm0EyGVySyaglgbFfK4o1zAlC2Y2Wi6vokpYrUoyOVtNtueZ599lg/Y" +
            "fjl4/AIKYvQKRTJ8a+7cuWPcVZqenj6ekg29WV9fy/m94K48roMACIBAKAggEFAoqKu8zY0bNrw6" +
            "auRIy/Rbb/XE8//Mll/84p0Om+0CvS3/1J+qbVy/cQEN7LfTKD87MjKyLjk5JSI+Pm5QRGSkidL6" +
            "xkuilOiQHXUdHR0NrS2tV2trL9dfvnxZlB00cc/kPwqS9M6KFSsq/SETDxusCPKvv//wDz6Mjo52" +
            "y4WyHO57/3/eb5GM0iKKf1DtDxlQBwiAAAj4kwBmAPxJUwd1UaKcEbLimF08ZozJE3V27dr1bofV" +
            "NoRew/8/T8p7UoYG26lMlB+mOn8wurj4y+HDhw9NTEoa1ce9iXSe/3QfFRUVn+/5as/Uhob6ReTM" +
            "+EsyCl5bu3YtrU74fvDwxZs2bPgFJTLqeOyJJ/iugH6XRrKzs8eaIox/sLbbZlHZ3/jeMu4EARAA" +
            "gcAQgA9AYLhqtlaH5JhiiY7eFxcXl+FOifb29nP79+77vqAIv6CtcwOe+uchh+mtfw29ab9ePHp0" +
            "2lPLlrVTfP5bafCPdidLz+u0HW/q0u8sffC2225vNBoMt6YmJv8nX0boWcaX7zyBEc9iyFMZe3L/" +
            "yFGjLExUZntSFmVAAARAINgEYAAEm7jK26N19qkjRo5I8UTMnTt3/pWm53+1cs3KP3lSvr8yGzdu" +
            "jKfEOv9uNEmjFi1e7Jg6bdrdkiT1+5bdX338Wk5uzoInnnxyBs9hwBMZ8WyG7u7p73pX9sI3Pvzw" +
            "w5b+yrmuFRUVDSf/hNl8VsV1Dp8gAAIgoBYCMADU0hMqkOPll1/OZ4I4LS8vb7Q7cWjd/dypioo7" +
            "FUH4vbuy7q7zN39FVv4hMsLEHn700SlJyUmF7u7x9DoPX0wJjB7lWQx5KmNaEhjr6b29lRNlcRvN" +
            "Atx54cKFP/R2vec5PovCZ1P4rErP8/gOAiAAAmogAANADb2gEhkUu73EHGk+TQNXjDuRDuzb9xV5" +
            "kL6/cuXKne7Kurtee6l2pcloiPn+ww/PNxqNA3pL76OtWJ7CuKCosEZU2L8OZCZg+dPLj1Ab2z79" +
            "9NPzfbR13enCosJoPqty3Un8AgIgAAIqIAADQAWdoBYRFCaOycrK8Mgx9NDhw1byqts+UNmdDn+C" +
            "8vS9CxeWBGjw7xZx9pw5j2QMyTrmEMW169evH9Z9wcsvtDPhTw119Uvb29rOubuVZlOyaLdiKS1x" +
            "5Lgri+sgAAIgEEwCMACCSVvFbfFpeNpTPzY7e1iyOzEbGxuPtre1lyqKsstdWbfXyduf3sw/S05O" +
            "nui2rB8K3H333Y8lJiaelUTxR6+99lqkL1XSdkfSW/jwyOGjh9zdT20VGUSpgjlYX7sY3FWB6yAA" +
            "AiAQEAIwAAKCVXuV1l+sL1QENiY9I93tFPyxY8fOUSCeneT5f3ggmvJ9/jSQfn/mzJnBDJsbu3jJ" +
            "klkmo1Fua2lZ7qv8NAvw18NHDl/15P6Y2NhWJsiYAfAEFsqAAAgEjQAMgKChVndDimgvjIw0H7NY" +
            "LG4FrThxop3JwhduC7opwIP8FI0YvmOg3v5umunt8pi777knnYyPZzatXz+ztwLuzpFz4bfNzc13" +
            "WK1Wt0YAOTXGOyMYuqsU10EABEAgiARgAAQRtqqbEoShMTHRze5ktNls7Erj1VmyIO91V7a/63xf" +
            "Po/wN2rUKLc7Dvqrx9drKampC4cPH/E7RRSXb9myxa3TYy/tHKMoxEdqamoqerl23amY6BhuVQ26" +
            "7iR+AQEQAIEQE4ABEOIOUFHzKXHx8W5f/ymq3gka+MpJ7pMDkV1wOMbQjMPlpKSkwQOpZyD3zpw9" +
            "80lyPGy2trU95G09tPuhgQIOn6HtgG4NAHOUOU5RBLdsvZUB5UEABEBgIARgAAyEnp7upQQ70RaL" +
            "24h7jVca6wXGLgw08h/FDxienp5mDDHCWNoZYKHdD49QfIA8b2WhjIkXGurrbe7ui7ZED2GCMqCg" +
            "Ru7awHUQAAEQ8JYADABviem1PGXXizBFxrtTj3YAXKAsfG7Xvd3VQ2/PeZQ1z+2OA3f1DPR6Tk7O" +
            "0sSkxBMUzniRt3XRLoiqK1euuP03ZIm2RFFEwPSXXnopzts2UB4EQAAEAkXA7R+vQDWMelVGQGAi" +
            "/ef2oOx7EiXpcfvW219FL7zwgkVQWH5KSorfIv711567a7NmzyqgMg95GyCIgJ1ubmpxu7YfG0sv" +
            "/wLLNUvmbHey4DoIgAAIBIuAB3/ygyUK2tECAfJ8P0dT3wPKrEc7DXJpBqCIfA5UoTKPQTB06JAj" +
            "DkH4jjcCOQTHaZvVOrmjvaPf2yiVMSOdy2WD7HPwoX4bwEUQAAEQ8IEADAAfoOn1FlEQo9zpZrfa" +
            "2wSKbeuuXH/Xaeo8j2Lkl5vN5v6KBfXazNmzJ1PEvifJF2C+pw1H2O1VBOIcGUVubzGZTJeZzNxm" +
            "WHRbEQqAAAiAgJ8IwADwE0g9VGMyGTODoQettw+lAfFiMNrytA0yRrLGjRv3P+Tg+MS6devcTuvz" +
            "esWYGArwo7TY7O5XRGiFhaYJZLcGlqfyohwIgAAIDJQADICBEtTR/VarzYMENzLtAqQd/AM4aAYh" +
            "2WgyNg6gioDcOvmWWxbStsCrRlH8nicNyE1N5NwnWIwG95sZFCZHkMnQ6km9KAMCIAACwSAAAyAY" +
            "lDXShqzIbgeoqKioBHICHNBzIyssyiAZ2lWIJXbmrbfS+ob4yOZ163LdyddhMGSQJZQVHe129yRr" +
            "b2+PJSfLKnd14joIgAAIBIvAgP6QB0tItKMeAuYoSzw5Abp/5VWPyF5JkldQsMhkMnwuS5LbbYGS" +
            "Ig0zmyO/jYikl/t+Dhr8WVtb22jRLp7upxgugQAIgEBQCcAACCpuFTdGc9T0n9vDZDRZad3bl9C5" +
            "3XWLAmu1O+w+ZeLrriRwX2LnzJtnpmWOpWVlZXx7YJ8HARsWGWWu67NA1wWKncC/nWxztJ1xVxbX" +
            "QQAEQCBYBGAABIu02ttRmK21reWCOzFT0lIKeFAbym/v8x4+Glwv26w21UbGGzp06HeMJsOn5Kx4" +
            "T388KMFPBoUy7v/1nyqgXQJ8aeXCs88+e6W/+nANBEAABIJJAAZAMGmruS2RNbe1tzvciUgDXhIt" +
            "AeTLsu972mlgPdPS3DKgWQR3cg7weuz0GTMsgsgWbt68mbIG9n6QL8TghPhEU+9Xr51tunr1PDkL" +
            "1l87g28gAAIgEHoCMABC3wdqkaCmrrbW7SBFQW2yJIP4kUSx/H0VnAyAk1Zbx0S+Nq7Wo7Cw8AFJ" +
            "MpxzOBxzepORz4CQA2B2cmpynwaC677mlhYeOrnB9Ts+QQAEQEANBGAAqKEX1CCDolQ2NTV7tP89" +
            "NS2dj9yjfRXbuRausIqutXFfqwn0fbEjR4y0k19Er4GBRFkuosBBI1JTU0vcCdJQV8cjBakq7oE7" +
            "mXEdBEBA/wRgAOi/jz3SUJANx2w266jmpqYmdzcUFORHkx/AeB7T313Z3q4718IFVt1Q33C4t+tq" +
            "OTduwrgZ5PC4gKIDTrtRJgqFMJ5WQz6luAE3Xrrp9ysNVySBydgBcBMZnAABEAglARgAoaSvorYT" +
            "0hKOUYKe/ReqqtwOyvkFBRMUgU2Njoyc6LMKitBotVkln+8Pwo08OuDQ7GHbacnirp7N8UiB5Mg4" +
            "Mz8vv+fpXr+3tLSw5taWHG5g9VoAJ0EABEAgRARgAIQIvNqaXbx4sYPS/O47XXnG7bY2SZKGxMcl" +
            "vEZvwbN81YOiAbbQbEO1r/cH677SaaWlNAuwZOP6jQtcbVKkwDsYU+4YWTyy2HWur8/qquqD3LDi" +
            "BlZfZXAeBEAABEJBAAZAKKirtU2F7bt4sdr9nDbJTwNjFu0GuIOmx7N8UYfeoJvo7dh9Fh1fKvfj" +
            "PZTKN2P06NHvkcHyGOl6PxkCiyhS4PeKi0e/SNP/Q9w1VXGq4iw3rLiB5a4sroMACIBAMAnAAAgm" +
            "bZW3pYjK3taW1qH19fVu4wEMGTJkumgwlIuKMs9HtWrq6urbfLw3qLdNnTbtLllgvxUV9kMmKs/R" +
            "ev7maTOmjfJEiPPnKL0CGVaelEUZEAABEAgmARgAwaSt8rZWrVp1kjHh0+PHjx/xQNTYsWPHWmkZ" +
            "4O4XX3zR67y+iqBU0gSAR7sOPJAl0EWyV65cGe1gyt8wh/Ds8lWrDlGD97prtK6urtxq7cjnhpW7" +
            "srgOAiAAAsEmAAMg2MTV3p7Cth8+dKjFEzEnTZ40h/bCt5lNJreD4Y31URS9k9YO67jW1la+R14L" +
            "x9rVq1d/sfLplV+SsGs9EfjwwcP7uUHVaVh5cgfKgAAIgEDwCMAACB5rTbQkmaTt1g5b0pkzZzyZ" +
            "ts6eMnWqTLMAP6D18TRvFKT1/woyHsov11w+5c19ISybrSjKI/QzlGR42BM5yo+VizT9v92TsigD" +
            "AiAAAsEmAAMg2MRV3t6yZcvIM1/+w95v93rkoT9mzJi7TEYjjXTsEW9Ue/7551so99DJi5cuXvbm" +
            "vhCXXUvtv+6JDKcqKv7ksDsGc4PKk/IoAwIgAALBJgADINjENdAeDcx/qL5QPbimpsYTIyD2/gcf" +
            "HKkwtnrT+k2zvVFPYErFpepLHd7cE+Ky2dT+rZ7I8MUXX9bQbME7nQaVJ3egDAiAAAgElwAMgODy" +
            "1kRrtNZ9nAT97Ze7vvzGE4Hj4+Pnjxg+8tfk2LeSkuckeXIPLyMo0rHLly+rOhiQp7r0LFddXf3N" +
            "1carY4nHuz3P4zsIgAAIqIkADAA19YaKZJEUx++rLpwfQmv0nswCsFtn3bosIsJY6bDZnvJUDYfg" +
            "KKekQKM9CT/saZ1qKPfpzk+PUdyAN7sMKTWIBBlAAARA4CYCMABuQoITnMCyNWvKyUnvjS++2PWt" +
            "h0RiFy1eskBg4t/wgDme3JOSklLOo+RdrL5U6Ul5LZQh58n36uvq80SH43dakBcyggAIhC8BGADh" +
            "2/duNeeDWNX5C8lVVVUeGQExg2JGzJo7+2sKmPMPL5eVzXDXgDM6nsAOVJ6trHFXViPXGz/56JMG" +
            "ChT0+rKnn67QiMwQEwRAIEwJwAAI0473RG0+iPHB7IM/f+BJYCBnlYWFhfNvKZ3SLAvCv3hiBCiy" +
            "cPDShWryIdT+sXv37m3t7e1m0Wj8jfa1gQYgAAJ6JwADQO89PED9TGbzf7d3tBm//uqrtzytamxJ" +
            "yYwpU6YoFAP/JXfLAaIiHr7a1DSKAgJ5Wr0qy9nt9r9++/U336V9//9Fnv+NqhQSQoEACIBADwIw" +
            "AHrAwNebCTz++ONNgiy/vGfP1xMptO1XN5fo/Qw3AmbNnVNLfgSbN5aVPf/CCy9YeitpZdbTVObg" +
            "xerqA71d18i5xnfeeedNJrB3k+qS/qwRmSEmCIBAmBOAARDmD4An6q9Ys2YHZbT5+Tvbtn1N5T1+" +
            "u+XLAUuWLN1rNJmyosxR6zavX39T+tynn36ahwI+deFC9VlPZFFpmVU1F2tSyJA5vHjtYqtKZYRY" +
            "IAACIHAdARgA1+HAL30RMFssL1ttNnHrb3/7Wl9lejufkJgw74knn5yRlpp20SFIm3g63Z7lnImE" +
            "BNZIGQjre57X2Pd8jckLcUEABECAJi1xgICHBNavXz9MEsWf5ecVNM+dP/cHHt7WXezo4cO/2rFj" +
            "5yLy+HuVnrz3JEk6LcvyYEVWfqAw5XNKmrOlu7DGvrz11lurLtfUzEy6nPwQZgE01nkQFwTClABm" +
            "AMK0431Re82aNaclWV578sTxpE93fPpbb+sYPnLkw0889WRFRkaGQFsF/0uxO15girJCENhsMgY+" +
            "ofp2elunWsrfd999S8kB8J76pJoFapEJcoAACIBAfwQwA9AfHVzrlcCmdZtKFFH+8YSJEwdNnDSx" +
            "tNdCbk42NTX9+YMPPthGuQCuigZx94oVKyopdv5auu2f3Nyq2su0U2LL13u+ThKNhidoJ0CtagWF" +
            "YCAAAiBABGAA4DHwiUCnEaD8ZPSYYuvUadPu9qmSzpv+QB8/FwRhBxkAM+n79s7Tmvx/45Zf/OL1" +
            "DpvtAi1n/FSTGkBoEACBsCGAJYCw6Wr/Krri6RV7BVn4uwP7Dxg//vjj1wdQ+71073Ya/Cvp8z76" +
            "aaYfrR6xCx94YAQtb6zxNjOiVhWG3CAAAtolgBkA7fadKiTnMwFMlP9l6LCh526/446lJFSsKgQL" +
            "oRA7t+/86ZEjR3JNVtNTTzz3hJZ3N4SQIpoGARAINAEYAIEmHAb18/39DlFcm5iYdHbxksWzSOUx" +
            "YaB2fyrqYimA7/oQRXGUoCi5tESTymQWTYuGRorwSH6bFOhRYTYmOmdsaujXSkE2HLtYf7F87dq1" +
            "cn9wcA0EQEAdBGAAqKMfNC/Fpk2bhjK7/DeS0Thozrw5ppycHD4bELbH5cuXX3tr6+/mKgJ7mPwB" +
            "NOPXUFZWligxNo/G+Nk0xE+zWKIaYmJim2NiYyRzZKQUZbYMpkGfkTHArjZfrbDZbKbmq1ftTVeb" +
            "olpaWoaRcbCPUiHvpct7aFlnF6VErgvbhwCKg4DKCcAAUHkHaUm8rVu3SrU1NY+Sb+lTKSmpBxbc" +
            "ueC2qKioTC3p4E9Z//KXv/zfUxUVhRGRkU/ykMr+rDsQdVHehh+Q/8JDlpgYqaioKDIvL7c4PiEh" +
            "xtO2Wpqb2YWqqkOnTp06d+78eaPNajeQMfAuE8Xf810entaDciAAAsEhAAMgOJzDqhVaEiiSRfEh" +
            "eoN8auLkSTsmTJgwnwCEo2/AmVdfefVDq926l2YBNqr1IeCzN4rD8ZzBYEqaNn1q5PARIxb6Q1Yy" +
            "fj7fs2fPBQrymEHBn37JZ0WwPOAPsqgDBPxDAAaAfziill4IUDrgeZQW+Emj0Xh13tz5adnDsu/s" +
            "pZiuT1VWVr7xp/ffL6AB8PtkBBxVm7I9/TceXPTgbFrzH+1vGU9VnPrTxx9/VOuw2huZQfwPzAb4" +
            "mzDqAwHfCNByHw4QCAyB/3n//VO33X77XyibYNKJEydKjx45/Kcoi+VUYmIiXxaIDEyr6qo1Li6u" +
            "mN6Et7W3the+9/57PNqhao6NGzeOVwThx5lZWRX333//Y+Talx0I4eIT4vPHjRsXd7qy8khra8sD" +
            "d9x556H3338fgZICARt1goAXBDAD4AUsFPWdAA02OeRNvlBRhIWSQbqQl5vXPKZkzBQyBop8r1Ub" +
            "d5Jz3OH/+tWvUmkW4Hs0C/CBGqSm9f5pgiL8M631V86aM+uxIMnUSDkTXq69VJNrV+Qf8dDSQWoX" +
            "zYAACPRCAAZAL1BwKnAEaOBJowBCs2k72SxKMTzDZIo4kZmVyfLz87KyhgwZTcsFgWs8hDV/s+eb" +
            "rV/t2W2QFeWpUHvGbyorW0hv/v8wZuzYI6Wlpd8PMpZGnlGyrq4u0hwV9eyjjz7aHuT20RwIgEAX" +
            "ARgAeBRCRoCMgTwyBkqYINOPMJ72lZemDU7/77lz5zbGxMSMI8HmhUw4/zfc+KvXf/VGS2vLaZoF" +
            "CEmYYJ56OdJkWk2sfzRr9uy99PYfKr5nKGTye1ar9cTK1at/7n/UqBEEQMATAjAAPKGEMgEnwAcn" +
            "s9E4WRGkO2hm4ElRkectW736LWo4IOvSAVeolwYaGhp2v/mbNwaHIjaA09hShOeNRsm2cOEDaYnJ" +
            "iQ/0ImLQTtXU1Hz89u/ezlcE5REyiLYHrWE0BAIg0E0ABkA3CnxRCwGaon6MAsr8x/cf/sGb0dHR" +
            "y9Uilz/k2PHJjp8dLT+SFczYAOR/cQsF7vkHsznii0cee2wx6aGKSI27v/zy9b3ffBtttEYsQ8hk" +
            "fzxdqAMEvCOAZEDe8ULpIBBYsXr1LymY0C9osDQHobmgNjFz9sxF5OfQbG1reygYDfP1fiYr6zIy" +
            "0nfT4P8UtamKwZ/rPvmWWx4ZFBfb3BHR8UQwWKANEACB6wnAALieB35TCQFBcbx/7tzZByjUrEok" +
            "8psY2TNvvZViJImPbF63Ltdvtd5QEV9S2bB+ww/J2e+VW0qnfHPPfff9kIqobjllwR13DBcUtpqW" +
            "KMgpFAcIgEAwCcAACCZttOUxgTabbTftFNhVearyC49v0kjBvIKCJyhE8jeyJC0KhMh8y6XZFPGS" +
            "yWQYumTJkr0lJSV8GUWVkRjj4+Mnjx1bsp3WIpdt2bLF47DDgeCGOkEg3AjAAAi3HteIvs8991wb" +
            "ZZj75uTJ41UaEdkrMefOn8vD436Hh0326kY3hWnwH03cXkhITGp94qmnpiUkJobK09+NpNcuT5k6" +
            "5d5gLotcaxnfQCC8CcAACO/+V7X29Fa4r7q6OlLVQvooXEZGxj3JSUkHHIJwv49V3HQbDf60lVL5" +
            "t5xhw2oWL138GBVQzXr/TcJefyJ29pw5lkAvi1zfJH4DARCAAYBnQLUEBINhb4fVVlhfV1euWiEH" +
            "INj0GTOKBCYs9ccsAK2hTyNP/58WFQ6vvm3BAtVO+feFi6ePDuSySF/t4jwIhDMBGADh3Psq1335" +
            "8uUnmCJ/Vn7s2DGVi+qTeKlpaROSkpP2D3QWgHv602zJz6eU3mIIYlhfn3Tu7ybnsogiLC0rKyvo" +
            "rxyugQAI+IcADAD/cEQtASJAXuyfnzxxUg5Q9SGvdiCzANzTf2NZ2fPc058i+9WPLSmZEXKFBiAA" +
            "XxahWYDdlKPgngFUg1tBAAQ8JAADwENQKBYaApJD+qKlpbmksbFRl86Avs4CuDz9yXkue+nSpRUh" +
            "DOvr1wdj+ozpWYLIFm7evDndrxWjMhAAgZsIwAC4CQlOqInA8qeXH2GKsJNWAQ6rSS5/yuLtLAD5" +
            "DBRzT/+IyIjz3NM/PiFhsj/lCWVdObk5CyTJcM7hcMwJpRxoGwTCgQAMgHDoZY3rSPHi/3q6okK3" +
            "zyqfBTBbLJ964guwad2mElkQ/80cGfX5o48//iB1rVY8/T1+CouLiyPIwFH99kWPFUJBEFApAd3+" +
            "UVUpb4jlAwG+DFDf0JB39erVJh9u18Qtc+fNzaIsfUv62xHAB39FlH9sjrL85ZHHHvkBKaa7wZ93" +
            "VsnYktmUGXIBOQPqZmZDEw8hhAw7AjAAwq7LtaewaxngxIkT+7UnvWcSOx3gzJbPZVG8r7c7aDAc" +
            "p4jKT6KiLH96+NGHH6Mybgd/hQIO8x9Zlp2fvdWrxnORUZGDsrIyv5AEYb4a5YNMIKAXAjAA9NKT" +
            "OteDLwOcPH68Xc9qzpw9M5ayIC7mb/o99SSHv1tEQfiJ2WJ+78bBnw/udrud2aw21tHRwaxWq/M7" +
            "/91uszuv8TKuH24QaOEYO25cFol656ZNmzK0IC9kBAEtEjBoUWjIHH4EupYB/pEvAwwaNEiXMeOz" +
            "s7PvjIww/ay9o+O7tBTQJhsM9TRgl9Lr+zPmqKg3H3nkER7gZwwfzJ0DPSVK4gO6IFA4oRt/+CNy" +
            "47leflfrk5SZmVlCTo7vWDs6ZpKMv1arnJALBLRMADMAWu69MJLdtQxQXl6uu+RAPboxlpL3XKb1" +
            "7+UOUfyhIsv/TKl8/yM+NvY/+eBPnvFjmpua2ZWGBtba2nrT273zLd9Bb/sOB3P0eOt3vf339anW" +
            "WYGRo0ZZZIXN7sEHX0EABPxIAAaAH2GiqsAS4MsA5UfLWwLbSmhrj4qO/jtFYOmKzL5gsrA/e9jQ" +
            "BxZ/5zv/1NzcPKautpa1tbX2Prh3Dfyy7CCbgdb+aeQkA6J76v+mwZ/Kk0HRfV2NRkBhYeEIinA4" +
            "6+V1L48Iba+gdRDQJwEsAeizX3WpVVdQoH/kQYFiY2P1ujacvXLlygk0pb+FBuU4murfWVNTM5oP" +
            "5nyav99pfcqfLNASv6A4+i9LT4cgirw0o9kGCrNAaXjod7UdcXFxGQkJ8R/VNTRMIdmOqE0+yAMC" +
            "Wiegvn/1WicK+QNGwLUMoOegQF3wHuGfDQ0NGy5dvDjaTmv9/A2eT+tzQ6DPN3s+C0AzALxcv0sA" +
            "NEPgnBFwLhU4uv0IutpW1UdeQUEkhQaeriqhIAwI6IQADACddGS4qBEOywDUlw+fPn36t41XrnyX" +
            "T+fLNJ3PB2zXwH/j4O6cyndO53cO/p5M//f0E1Dzs5Ofnz+GpjRuxTKAmnsJsmmVAAwArfZcmMrd" +
            "IzfAUT0joMF+sXPg73qrd63h3zj4Ow0DbiTQD7/WaST04QTYh5+AGqf/XX3Ld3wkxMefdEgOvgyA" +
            "AwRAwI8EYAD4ESaqCjwB1zLAwf0H9wa+tdC1EB0TQwM6H8i7BvMupz0+wLtmAlxGgfOTrrvO92Yk" +
            "OMuQZ2H3jEKPGQM1GwC8B7AMELrnEC3rmwAMAH33ry6148sAJ04ck3SpXJdS5ADnXJvn0/l88Ha4" +
            "Bu8uQ4BP4bsG/s7vnb+7ZgFcxoCzDN3f/clnAXr4CXDvf7UbAFgG0POTDt1CSQAGQCjpo22fCPBl" +
            "gPb2jkn1dfUf+lSBBm6iNL/MaDA4B2vXWz//7DYEuGHQNZh3v9X3mB24cRagp58AL+/yE5BE9dtR" +
            "fBnAYonei2UADTy4EFFTBGAAaKq7ICwnwJcBaPfa9v379p7TM5FBsbHOdX0+mPMBnP+4jAHZOSPA" +
            "3+Z7GAJdb/o3Dv787Z+/6bv8BFwzBrycKGnjT0Befp4oKMpUPfc3dAOBYBPQxr/+YFNBe6onIArs" +
            "k5MnT0aToI2qF9ZHAWPID+DagN81gHcZAq7p/xv9BJyDPR/wu4yB7ql//nsvfgIGmmXQwlFEUYEo" +
            "eME0SopUoAV5ISMIaIEADAAt9BJkvJmAKO6w2x3ZZ06f+ezmi/o4YzKZmMkU4Vy/7x7Q+Zt8j7d+" +
            "/mbf00/A+fbvxk+A3+8yLHgbWjgSEhOLJEnaJyriBC3ICxlBQAsEYABooZcg400EVqxYUUWB8d7b" +
            "s2d33U0XdXQiLj7Oo+l/14DOP935CTjDBVM5UVL/+n/PrhySlVlPwQun9TyH7yAAAr4TgAHgOzvc" +
            "GWICDkX54PLl2gWUGOd8iEUJWPMU8tj5xs/f8l1+AJ3T/9zrv/PH6SPAB/6unQEuY8Cdn4BWpv9d" +
            "cCdOnmykwMV30DLAHNc5fIIACPhOAAaA7+xwZ4gJrF69ejdFtf/zgf0H9oRYlIA1z6fojUbaDeDa" +
            "Btg9/X9ta9+1Ab8zGND1hgIZBjfEE3D5CUgqjP/fH8jExMTxgiL/jcSE5zaVld21ZcsWXaaF7o8B" +
            "roGAPwlQNhAcIKBdAjQQfD8iMvK+Rx9//H7tatG/5GfPnmU1l2povz6l73ElBOKpfOh756+u7z2S" +
            "BfW87kr847zcWZanAopLiGfx8fH9N66+q/EbNmwoFQXhN5TF6EsS7yT5QVSSVseZxA5RIqVT6hMZ" +
            "EoGAOgnAAFBnv0AqDwls2rQpQ3HIb9997z2mzMzMEg9v01Sxq1evsmPl5U6ZBYGG7h4DOc2AMBoM" +
            "+YfTIOBBfbqNBG4g8P/4Z497XNfT09OZxWLRFAta7jkYFRVV397WZqi6cCHmck1NW+3ly6319Q2m" +
            "1paWRFL3r4os7FBE5ZNVq1Zd1JRyEBYEgkyA/izgAAFtE9hYtvH/ZGZljrv7nrvv1bYmfUv/9Z49" +
            "tMbfmRL4xsHcOaDTyNfTEOhM99tpFLgGfKchQE24jITMrCxmNpv7blSFV6rOn2fpgwf3Gr2Qsic2" +
            "nTxx8uDx8vLWq03NXLFtDsXx+zVr1pxWoSoQCQRCTkBbbsAhxwUB1Ejgzrvu7Lh6tfF/FxcX28mx" +
            "LUKNMg5UppbWVtba2uKshnb+dR3dX1wnmPMM/5/rC7cWrt3gPO28TOe4gyGPOKilg2YAnOJGRNzc" +
            "zWTMRGRkZGSNHjMmJyU1pb62ttbc0dH+yB133ilMmjRp/44dO5xUtKQvZAWBQBKAARBIuqg7KATe" +
            "e++983feccdYGgBa09LTs4PSaAgauVxz2RnRr3N07xzLXGO7Mx4AnXJN6Tmv8v91f7kmsPMU/coN" +
            "AK3EAXBJz5dDrB1WZom2dC51uC7c8Em5FNJGFY8amZiQeOjMmcqUqAjzrLvuufsoPStXbiiKX0Eg" +
            "bAlgF0DYdr2+FFcEYceB/Qdr9aXVNW3IA97pBHhdZD/a+qfw3QH06QzuQ987dwDwqH89tgnynAGu" +
            "4ED8nq6fa7Vr5xufsbDbbay1pXMmwJ3kObk5C5548skZCclJdtL7p+RAONzdPbgOAuFCAAZAuPS0" +
            "zvWkBEGft7Q0lzQ2NBzVq6oJCQnOgd4ZCdA56LsG/+sNgV6NBKeh0Jk3wLVNsOfSgFaYcT8GLn9z" +
            "S7PHItM92YuXLH40OSXllKiw/7t+/fphHt+MgiCgYwIwAHTcueGkmitB0IEDB/brVe/U1LTu4D+d" +
            "b/R8j3+Pt37+Zk8DfeesQFfI4B6GgvM8NwRo3YAbEXYaSLV2ODMkkvw2q5W1t7d7I37sgw8+uDwh" +
            "KfE8xT/40Ysvvqgt70dvNEVZEPCQAAwAD0GhmPoJ8ARB5eXlun2meVhgvmbvfMPvGuhpC2TnrAD9" +
            "7pr+55+uKIG8LN890PnJz3ctAVD5ti6HOvX37DUJDbQE0Lm8IbP2Nq8MAF5J7OIlSxaSEeGIMEas" +
            "ulYrvoFAeBLQ7R/L8OzOMNf6WoKg9/RKIjMzyzmIO40A/nbvMgScb/r8zb5zsO/52dNPgJ93GQp8" +
            "JkBrB/cBcMnv2hHgpQ7Z9z/44ARaSXie/AHu9vJeFAcBXRGAAaCr7gxvZcIhQVBySrLToa/bqY/e" +
            "9vkbPh8U+5v+5wP/jYYA3zmgtcM1A8LDG3NnQC+XAZzqki/F5Bkzpn9B/gA/pEBSo7TGAPKCgL8I" +
            "wADwF0nUowoCek8QxAP3JCUndb7587wAzh8a/J1v9p2GQPf0v9MwoHM93/q7DAFuDJBFoIo+81YI" +
            "SgvsXAbgRk9bW5u3tzvLjywuvnfosJyjxO2ZzZs3R/lUCW4CAY0TgAGg8Q6E+NcTcCUI2vvN3p3X" +
            "X9HPbzwSnnOKnwZx5xJAtyFww/S/a3mgLz8BrRoABkqOxHUm+X01APjTcPsdty81SMYO2W5fpp+n" +
            "A5qAgOcEYAB4zgolNUJAYPKHR44e1m2Qq7S0NMYj4fE3YOdSQFe2v879/a5ZgR7GgMsQoLf/nlsI" +
            "fXCiU8UTIFI+BOcsB+nPdwPYbDZf5Yq9/8H7J5Ad8b82rV8/09dKcB8IaJUADACt9hzk7puAJH1i" +
            "t9mHnTl9RrfOgBTylqb9efpfl2d/5/fO3zsNA3d+Am1tngXT6Rt0aK5EmiO7HAE7/R862jt8FoQC" +
            "LE0aNbr4fUUUlyO9sM8YcaNGCcAA0GjHQey+CbicAffu+7YzeH7fRTV7hSfycU3/c0Ogp9d/78sD" +
            "N/sJ8Pu0ePBkRq6ZDG7wdHT4bgBw/adPn/5d2l3QbG1re0iLPCAzCPhKAAaAr+Rwn6oJcGfA6gvV" +
            "s2ir2HlVC+qjcJQSl/FZAD4Aun74gH6TMdCfnwBd0+LBde90dKQlDb4MYLMOVI3YefPnpylMfGTz" +
            "unW5A60M94OAVgjAANBKT0FOrwi4nAEP7D+wx6sbNVQ4a8iQrjf/zhkAlyHAp/5d0//9+QlocRsg" +
            "7x6+C4Dr1RngSGE8U+JAj+zs7DvJsPhGlqRFA60L94OAVgjAANBKT0FOrwlwZ8CjRw5rc57bA22T" +
            "k5OZOdLcndynexmgx1s/nxHghgG/5vre+buD1dXWedCK+opYLJYuw4frxf0d/BPSeP7t84voYfnO" +
            "5vXri9SnNSQCAf8TgAHgf6aoUS0EyBmwvb0j4+zZs5+qRSR/y1E0vKj7bbhzCYB7+nf93GAIdJ/v" +
            "cd3f8gSrPsG5E8AV1dA/BkB6evqsxMSkgw5BWhgsPdAOCISSAAyAUNJH2wElwJ0BGRPe379vf0NA" +
            "Gwph5RkZmUwyUGAcGuyvTYvzJQA+Rd45Td69NNA1C9DTTyCEog+oaXOUuXsJgBs2/jqmTpsaQ3Ut" +
            "KSsrK/BXnagHBNRKAAaAWnsGcvmHgMg+OH/+3FQKGXvVPxWqqxajyciGDh3a+dbf9cbf+aZPDoG0" +
            "wV3pmv7nXvMuQ8C5BNDlJ6AubTyXRqRg/p2OgJ3LG57f2X9Jcqy8x2Ixf0l/GO/tvySugoD2CcAA" +
            "0H4fQoN+CKxcufJLGgk/KD96dF8/xTR9qaCgwLm+zwMBdU/zc2PA+XvnzoDOIEGuc/TZZSxoVXHu" +
            "B+DKgcA//XlMmz5jCBOE+yhEcLo/60VdIKA2AjAA1NYjkMfvBBRB2HFg/8Fav1eskgot0dEsKSmp" +
            "a0qcBnea+u9cAuB5ALq2CfJzXdsEexoKtbXaxMIjIXYbO6RjS4v/Qj7k5OYskCTDOVpCmaOSLoYY" +
            "IBAQAjAAAoIVlaqJAE2F72ppbR7X2NhIPgH6PAqLCjvf6rve+jsH+87gP86gOdxHgBsDXX4BzsGT" +
            "vmv1iIiMJAOgc/qf6+LvxEbFxcURVOc8rfKB3CDgCQEYAJ5QQhlNE6CYAIeZIuw8uP+gbhME8ZgA" +
            "UWYeIOfa9L5z4He+9fMtgF3T/734CWixc3lWxJ5LAP7OazRm7JgJTGELyBlwshb5QGYQ8IQADABP" +
            "KKGM5gkogvLXEyeO6TZBEO+g4jGju6f/XUmC+Fuy662/t22C/n5zDtaDwg2AzqUObtjQTAf958+D" +
            "ggJlpg9O3y4Jwnx/1ou6QEBNBGAAqKk3IEvACEgO6Yv2jo7JtAxwNGCNhLhiimbHDK5UuXxQdC0H" +
            "0Fu/wpcAbpj+5wOof4fN4AKwRFNAIKde/nUCdGkxbvz4NJpZuHPTpk0ZrnP4BAE9EYABoKfehC59" +
            "Elj+9PIjfBlg7zd7P++zkMYvmEwmlpuX1+Ucdy0tcF/T/zKfN/f33HkQGYpiZ0hgvuwRiLDGQ4YM" +
            "mREZGVFFltPsIKqFpkAgaARgAAQNNRoKNQHnMsDJ4xGhliOQ7Y8cNcppALi8/7t3A9BWOW4IXGcM" +
            "8N8DKUyA645PiKdlgM4lgJbm5oC0Nmr0aAslCYIzYEDootJQE4ABEOoeQPtBI8CXAex2+/T6+voP" +
            "g9ZokBuKiYlhWUOyugZ7Cv7T5fTHB/5OpzkaMGnq37V+Hog352Cp7NTJ6eMgU0ZAe0Capd0AU5ig" +
            "LNiwYUNpQBpApSAQQgIwAEIIH00Hl4BrGeDAvgNngttycFsrLiZnQPL+d06Nu976uwwB5y4B5zV+" +
            "XbvbADnRRIp94NSH+zKQfoE4IiMjB2UMzvyzoCh3BaJ+1AkCoSQAAyCU9NF20AmEwzLA4IzBjE+P" +
            "u5z+XNvlnEsANxgCWvYB6NwJQDMapFMgZzKm3zo9hTHxezQLgB0BQf8XiwYDScAQyMpRNwiojYBz" +
            "GYDZ/7GhoWF3fHy8bvd4F48ezbZ//DGt8Qs0g00/FDufvyXTh/M7z6ZHl5iRHAe1ejjDAdMsBvcD" +
            "oGUdNnTYsICoQs/J/NSU1GWXai49t3H9xki7Yv+CIhFeaW1ttUQZDGk095CmMMksCnKLIMtVy55+" +
            "uiIggqBSEPAzAfoTgAMEwovAxrKNr9ParnHajGnf1bPmv3rtddbc3OQc8PnI7/yPf3b/MPbksmWa" +
            "RvAJGTltrW0sNS2VTZg4MZC6/PPGjRu/FBT2K7KcDpE51U52VRxZWFkENsNsjtrT3tY2gTZVVJLF" +
            "xXecHKRr+5jEvqF8FKcCKRjqBgFfCWAGwFdyuE+zBLqCAs0jA0CzOngieNHwIrb7y9187GeiyN/4" +
            "adjiZkDXjMCwnMC8MXsim7/KSFJnKuSODqu/quyrnkdWrVq1ducHH0yLjk98Ijo6asag2NhR0TEx" +
            "0XwmgoyqydwfobmpObe29nLM+fNVGReqzs9raLgStWnDho8civJHikj5cV+V4zwIhIIADIBQUEeb" +
            "ISXQFRToH3lQoNjY2OEhFSaAjY8tKWF7v93LrNYO5w4Abgh0vv2LTqOABw7S+sGTINFyDmtsvBJo" +
            "VbLJz2AHNXJrXw1xI2tQ7CD+k5KTm0t+A4zV1dU1Hzp4sPDokaM/2FhW9rIgSRtWrFih25wUfbHB" +
            "eXUSgBOgOvsFUgWQgHM3AGOfHjt27FwAmwl51TxjXm5ubpccFCyX5qdduwMSEhJZ0XDt2z5RURQN" +
            "kN68uR9AEI4+B/++2k5MTIy+debM2x957NHmlJS0FJLzRYosOKqv8jgPAsEkAAMgmLTRlmoI0Mvw" +
            "rooTFe2qEShAgkyecssNNSvMaDSyOfPm3nBem79GWaI6dzuQM2BbW1vAleDGxr69+5xtetMYbSfM" +
            "emDRA4+PGF4kUlrGf9+0blOJN/ejLAgEggAMgEBQRZ2qJ6AIwtdXGhtK29v1bQMMGjSI5eS4ZgEY" +
            "M5ki2AOLHmTJycmq7yNPBExNTXXOAPAtjuSV78ktAyrDp/ltNis7cfyEs11vK5s5e/aD4ydOjFNE" +
            "+ccwArylh/L+JqDr7Gj+hoX69EPg4YkP17VGtd6alJhwmQLKZOlHs5s1iU9IYNxZjm8NnDt3HosZ" +
            "FHNzIQ2fOVVRwex2B8seOpRRFr+Aa9JAWw6bmpqYSE4V3MDy9sjIyODPW011dVXpPQsWHPyfP/2p" +
            "xts6UB4E/EEAMwD+oIg6NEdg8drFVvr7ve90ZWWd5oT3UmD+tk/r0GzEiBG079/o5d3qL06OnDSr" +
            "7mC1l2uDIixvj+86IAc/dvXqVZ/anDhpYint0mh1iOLa9evXa387hk8UcFOoCcAACHUPoP2QEVBk" +
            "4eDF6mr8GwhZD/in4bg4nhTIQYNycJZzEhITaWeF1flz+fJln5YCuOZ8OSAtPb1GEsUfvfbaa5H+" +
            "oYFaQMBzAvjj5zkrlNQZAUVUjrS0tk7Sux+AzrrtJnVSU1NoEFZYzaXgzKTzff88jwKfBaDgP+zK" +
            "Fd+3IC5cuPA7JqNRbmtpWX6TYjgBAgEmgDgAAQYcquopbvlwSVEKHIKQQYlMLBQKppWJrEpyOCqu" +
            "trefev7551tCJZuK2j1Jkd2OXLp4aVD20OyxKpILonhBgL+R8yWA+oZ6ZrPagrLMwZcBuNMhnwlo" +
            "omWAuLi4zmBLXsjdVTT27nvvLXz7d2/duWn9+n0r1qzZ4X0VuAMEfCNAu6Fw6IUAeRVPorfaWRTq" +
            "7RYK+TZeMhgOUHpYmyiI7bQDPILedGPbW9tGUiC4cgpVeoIx+bigSAcUSfmKwpU26IWDN3psKNuw" +
            "ZczYMUlTp069x5v7UFZdBN79wx9YS0sLKy0tdToDBlq648ePs9OnTjkH/tjYOJaTm0M7LHzPq7Dj" +
            "kx0/O1p+JCsiMvLJxx9/vCnQ8qN+EOAEMAOgg+dg8+bN6Q6bbTkT5MeysoYcy8vLS8vMysyKjo6+" +
            "ybu9jd5aamvr2MWLF41VVVUZly5duk1xKAJFKfsjhSv9w5o1a07rAInHKlBw3Irqqirf/3J73BIK" +
            "BpJAamoaO3niOLtEywB8N0CgDx6B8Fh5uXMZgEda5PEBBnLMnD1z0cmKEx9Z29oeono2DaQu3AsC" +
            "nhLANkBPSam0XFlZ2Ugms3/NyRmWc8dddxUUjy4uSkpOSunrbYQHgaHpy2i+FYm8kPMnTJiQGBcf" +
            "d7a6utpM6WOX37ngLuP9D95/7N133w14cHU1ICV90zqsHePHT5hQpAZ5IINvBBx2O6usrHQmBhox" +
            "coRvlXhxF09FXH70qHN7Jf83ZYmOHugWxLhBMTHfVpyqvO2e22/bTlsDw3JGzosuQFE/EIAToB8g" +
            "hqoKPvjTXuSflIwbO+y2BQsW0J5kXzZ4x+bn59/2yKOPPjb/ttvOGEyGiR3t7b+g9ciZodIrqO1K" +
            "7JjD7ihtbWk9H9R20ZhfCZA3vTPfQUdHB6OZLb/W3Vdl8bT7gO884M6AZDz3Vczj83kFBYsojsE3" +
            "siQt8vgmFASBARCAATAAeKG8leKJZ1Bet/9TUlKScsuUKX7Ja09x45c8+dSTDwwvGnFOEcTXaVng" +
            "Gb1vT6J14wpyhCm/dOliZSj7E20PjADPe5CZmel0Bqy5dGlglXl4N820dW0H5MmWBm4AULOxc+fP" +
            "zVAUYSkZ9wUeioFiIOAzARgAPqML7Y2Kw7EqJycn2l+DfykiUJUAADo+SURBVA9tYmk98ocPPPjA" +
            "t7SMkE8+Ay/pOVAJ3w1Bq7cnL1RX1/dggK8aJDAke4gzHsC5c+eCIn3WkCFkANg6jQCaefDHQUtz" +
            "99AswG5K2QynVH8ARR39EoAB0C8edV6kt4M5giAunzV7VsAS2qekpi58/Mknp1I2s3YKVPKzzevX" +
            "F6uTxsCl4o6A5AwZFj4PA6el3hq48x/PCsi35V1p8H1vvqca0g4bRnv4nQbAQGIB3Nje9BnTswSR" +
            "LeTOvTdew+8g4E8CMAD8STNIdUmCcPfwEcN307Sn94HIvZNxzOIlSx5NTUkrlwXx33SbvEQRT9Cg" +
            "EWiW3pFHaa8JONMf5+c5PfJpScfr+325IX1wOrOSDwDPDeCvg7YUlkqS4RwtK8zxV52oBwR6IwAD" +
            "oDcqKj63cePGHErrPndUcXHA3v5vUD+WdgX8fX5RYY1eM5hR7IQTFNRlHCIC3tDzGvw1Lz/f6Qx4" +
            "7mxwlgH49kPueNjY2OhPWrHFxcURTFHm+bNS1AUCNxKAAXAjEbX/7mDjaRvfFZqajw6mqHPmzHmk" +
            "oKjwIg2WP9HbTABFc6ukwEkVjVeuNAeTKdryP4HBgwczM2UErL5Y7f/Ke6lxWM4w51keEdCfyw4U" +
            "nGoCPZMLaLnPLw6+vYiOUyBAwWFxaIuAwMbStCM5rgf/6DQCCqr1ZgQ8++yzV5jAqhsarpwJPlW0" +
            "6G8CJSVjnc6ADQ3B2Uo/OGOw0w+gsdF/fgfkCJiZlZX5BS33zfc3H9QHAi4CMABcJDTwuXXrVokc" +
            "1saS93HInIOuGQHyj3U1E6AITTabFYGxNPDvwJ2IBYWFzlkA7gwYjGPIkGynAVDvZ4Nj7LhxWbTc" +
            "dyff8hsMPdBG+BGAAaChPq+/WF9IcfzHpKend847hkh2bgTk5uacYqL8L3rZHaAwxdba1hacheMQ" +
            "9Vs4NTt58mRmtdmCorIrD8CpkxWsjbID+uuguAYlkZERVeTUMNtfdaIeEOhJAAZATxoq/66I9kKj" +
            "0XSIpyMN9TH/9tu/l5Kats8himu5Y2Ko5Rlo+xRUSbbbbMFJKD9QYXG/WwJ8SyDFyXBbzl8FxowZ" +
            "43QGPHL4sL+qdNYzavRoi8JEOAP6lSoqcxGAAeAioYVPQRgaExMdnHlN9zz47oBVsYMGlQuy8qMX" +
            "X3zR7P4W9ZYQKGeyeqWDZL4QEMXg/XkrGj6cmSJM7OzZs351BiweWTyFMeV2OAP68gTgHncEgvcv" +
            "xJ0kuO6WAIUITTIaTH7db+S20f4LxH73oYfuNBgN9ghjxKr+i+IqCOibQOnUqU5fgAMH9vtN0cio" +
            "yEHk9LsdzoB+Q4qKehCAAdADhtq/0jp1BL3UBGdh03MYY+5/4IECQWDPb9iw4W7Pb1NfSYddblWf" +
            "VJBIKwT4FkS+7MBjAlC6bb+JPW78+DQ4A/oNJyrqQQAGQA8Yav9K69QdlHbcqDY5ExIT55VOm/qh" +
            "qLAfksfyKLXJ56k8FM0NToCewkK5XglMnDSJUYwOdvLEiV6v+3JyyJAhMwwG6QyFOJzpy/24BwT6" +
            "IgADoC8yKjxP69S1Nrs1VoWiMXKC+t7QYTlHFVl+hmKYR6lRRsgEAsEgMGHiRMbzBNjtdr81V1RU" +
            "JMsKm+23ClERCBABGAAaegwoa92ZxobGSLWKfPsdty+Nioxist2+TK0yQi4QCDQByqLJxowdywwG" +
            "g9+aGj169BiBsVkvr3t5hN8qRUVhTwAGgIYeAUEQTjpkx2R/7jX2s/qxd917dzE5Kz5D/gCz/Fw3" +
            "qgOBsCUQGx8/nGICfOWQHLQrAAcI+IcADAD/cAxKLS0tLRX0FlBeW1t7MigN+tAIrX9Omjh54m7y" +
            "B1j56ouvJvhQBW4BARDohcDI4uJ4QRGm93IJp0DAJwIwAHzCFpqbnn/++RZaBjh5ueay/3KPBkCV" +
            "CRMmLBoUF9vcEdHxRACqR5UgEJYECgsLRzJBuRXLAGHZ/QFRGgZAQLAGrlLKBVBRc7lG9Vnr7rzr" +
            "rsk0C7Bm0/pNswNHAzWDQPgQoCygGRZL9F4sA4RPnwdaUxgAgSbs5/oFRTp2uaaGJgLUfdAfq+ET" +
            "Jk/6QhEUzSwFkOd2lrqpQrpwJ1A0vMiCZYBwfwr8pz8MAP+xDEpNDsFR3tzcnEf+AEFpbyCN8KWA" +
            "2LhBTVpZCpAMIrYvDqTDcW/ACdB2wCl8GYBCA48MeGNoQPcEYABorItTUlLKBYXtr66uPq0F0flS" +
            "AMm7GrsCtNBbkFHtBAYNGhSTkJB4nHYElapdVsinfgIwANTfR9dJuHjxYgcT2IHz585duO6CSn/h" +
            "SwFjx5Zsp90Ly7Zs2RKjUjEhFghohkBhYUEk5a6aqRmBIahqCcAAUG3X9C0YOQAcuHCh2tF3CXVd" +
            "mTJ1yr1Go7HZ2tb2kLokgzQgoD0ClHlwLBOE+ZSG+xbtSQ+J1UQABoCaesNDWQyyfKix8Up+a6tm" +
            "ctfEzp4zh+c1f2TzunW5HqqJYiAAAr0QiIykDIFpgz9mMpvfy2WcAgGPCcAA8BiVegpW19UdpXX1" +
            "vRfOXzioHqn6l4SypC2Nior6RpakRf2XDN1VUZLgBBg6/GjZCwIlJSXRjCl3UPKtDC9uQ1EQuI4A" +
            "DIDrcGjjl7Vr19q5H0Dl2coabUjcKeX82+cXKYx9Z/P69UVqlJverLANUI0dA5luIpA9LPtOg9Fw" +
            "mjkcs2+6iBMg4CEBGAAeglJbMe4HcPGCJvwAu9Glp6fPSk5KOuAQhPu7T+ILCICATwQK8vObaFlt" +
            "nk834yYQIAIwADT6GHA/gKbm5hEUD+CqllSYPmNGkcCEpWqdBdASS8ga3gQmTJpUSjEBFrxcVoYE" +
            "QeH9KPisPQwAn9GF9kaXH0DVuXNHQiuJd62npqVNSEpO2q+2WQDKYCjQVkUcIKAZAhaLZWRKSuq7" +
            "9Ogu0IzQEFRVBGAAqKo7PBem2w/gzJlaz+9SR8kpU6dm0uTTYopmVqAOicidiikibVVMVIs8kAME" +
            "PCEwpXRKIhmvDyBBkCe0UOZGAjAAbiSird8P1dRcjtCWyIxlZGTMtFjMX9LDd69aZKdlCRr/TTAA" +
            "1NIhkMMjAoMHD743yhK1XRbt93l0AwqBQA8CMAB6wNDaV4eiHG2+2jS+o71Da6KzadOnD6FZgHs3" +
            "b96crgrhBSXGaDKqQhQIAQLeEJg7b24W/Gq8IYayLgIwAFwkNPgpiuJpmro+UVdXe0Jr4ufk5pZK" +
            "BumCw+qYFWrZX3rppThaA0inOAWhFgXtg4DXBGhG7R6zxfKp2vxqvFYENwSdAAyAoCP3X4MrV65s" +
            "oHgA1VevNln9V2vQaorNzcttEcTQxzQ3S+Zs4phLeQuCpjwaAgF/Erj99tsmYxbAn0TDoy4YAFrv" +
            "Z0VounLlynEtqjF69OiR9OY9nWKa54RSfkVQ8qIizfsoEFAoxUDbIOAzAbXurvFZIdwYFAIwAIKC" +
            "OXCN0BKAzSE7pMC1ELiak5OTJ4qS4bSiKCHNbU4GQHaE2VwfOE1RMwgEngBibASesd5agAGg8R6l" +
            "aT+Z0T4graoRnxBvp9SmIU0QJAhKMjkANmqVIeQGAU4AswB4DrwlAAPAW2IqK8/3r1NqUAqxr82D" +
            "DIAoCsGTGlLpZRZtMBjaQioDGgcBPxC4ddasifAF8APIMKkCBoDGO5r+sRujo6IosI42j7i4uGxK" +
            "a0qZzUJ4CMwoCYI9hBKgaRDwCwFaVitMSU87hh0BfsGp+0pgAGi9i2n/ekSkWXPBgFzYIyIi4skD" +
            "P7Qb8AUmxick5LtkwicIaJnAlClThqkt0qaWeepZdhgAGu5d1/71QYNiTFpVwyBJiWQA4DnUagdC" +
            "btURoKyb4xMSEo7SPyrVRNpUHSQI5CSAP7wafhBMJtNQvn89ITERb68a7keIDgL+JjBx0gQKaqGi" +
            "SJv+VhD1+YUADAC/YAxNJYIs5FP0um+xfz00/NEqCKiVAEXaXKCWSJtqZQS5yEQEBA0TEOT8mEGD" +
            "rmpYA1WIzlMBU2rVQlUIAyFAwE8EigqLZDVE2vSTOqgmAARgAAQAarCqVJiQm5qaqtn1/2BxctcO" +
            "30op0F9Kd+VwHQS0RGD4yOE5aoi0qSVm4SYrDACN9viGDRuiqfPyMjMyKauelg+BxzEKaSAjvpVS" +
            "FLUbS0HLvQ/ZA0eAR9qUJOkktTA6cK2gZi0TgAGg3d7Lo/h/I1LTUsdqVwVGMYzIAODBjEJ50FZK" +
            "iyVa44ZUKAGibbUSSExO6qBIm0VqlQ9yhZZAaP/whlZ3TbdODoAjLFFRX2ndAdBms5WTDRCyZQzX" +
            "VkpLtAW5gDX9LwLC90ZgcEZGLK1t5fV2DedAAAaARp8BWrIuTktPlzUqfrfYoiBeoF9ClocXqYC7" +
            "uwJfdEggPS09iRa38l944QWLDtWDSgMkAANggABDcfvWrVslmjcfPTQ7OykU7fuzTVOk6VvSJWvz" +
            "5s3p/qzX07p4KuDo6OjDWp9J8VRflAsvAimpKWNpBqCIdrmENOFWeFHXjrYwALTTV92S1tTUFNH6" +
            "/xia3gtpGt1ugQbwJT8/v4qCGV2UrXJIHJV4KmCj0XRpACrgVhBQLQGz2cxMEaZvKeU2lgFU20uh" +
            "EwwGQOjY+9yypEhFUZHmo9ExMTE+V6KeG9dSJMNjNBDPCpFIKbT83x6ittEsCAScADm4XhUUYWjA" +
            "G0IDmiMAA0BzXcaYIjgK4xMS9TJoxc6dO/c22gtwb1lZWdBnNCiTcsyg2DjNL6Vo8DGGyEEiYIky" +
            "d9Bznhyk5tCMhgjAANBQZ7lE5QGABmcOjnf9rvXPxMTEosEZmSfpYQx68hKKQWCJNEcatM4Q8oNA" +
            "XwQGxZGBG+qU230Jh/MhJQADIKT4vW+ce/NSp+VRBMBU7+9W7x1TSqeMp6AAS2gWoCCoUgpK7KCY" +
            "QRlBbRONgUAQCUii5Ah5yu0g6oumPCcAA8BzVqooyb15uVdvUlKSrpx6klOSKYvp4KpgzgK4YgBE" +
            "x0RbVdG5EAIEAkDAGWsLKbcDQFb7VcIA0Fgfcm9eS3R0Offu1dsxYcJ4SmscvBSmrhgAZEyV6I0l" +
            "9AEBEAABdwRgALgjpLLr3JvXZDJdVJlYfhEnMysrz2IxNzqsjqDsCOAxACRR3IUYAH7pPlQCAiCg" +
            "MQIwADTWYdybNyk5KVFjYnssbkFRkYnWK4NiAMhMHhYbF9fmsXAoCAIgAAI6IgADQGOdKSssymAw" +
            "2DQmtsfiUmCgTNroOIOyHQbcx4ESEWXExcVpPpyyx3BREARAAAR6EIAB0AMGvoaeAN8SKBmkI5Ts" +
            "KPDr8oKSnpyUEhd6rSEBCIAACASfAAyA4DMfUIuiwFqbGhsvD6gSld9MSY6aaRkgoGmOKfdALCVJ" +
            "GZKSkpSmchwQDwRAAAQCQgAGQECwBrTSmta2tsiAthDiynOHDYuhyIBjnUmPAiSL3CHnMCYUJqek" +
            "Bn6mIUA6oFoQ8IRAlMVS6Ek5lAk/AjAAtNbnilLZ2HhV1wbAkKFD8ynZUUnDpUsjAtY9kjwiMsr8" +
            "ZURkRMCaQMUgAAIgoGYCMADU3Du9yCbIhmMOh31cc1NTUy+XdXGKchyNkCTDZw4mFQdQoVGDB6fD" +
            "ATCAgFE1CICAugnAAFB3/9wkXUJawjFau95/oarq8E0XdXQiLS2tTRCVMYFQaevarSZFYWOzhgzR" +
            "9UxKINihThAAAf0QgAGgsb5cvHixg5IB7Tt58mSVxkT3StyCgvxoprDxPPeBVzd6ULg2pbaYnAwn" +
            "DBs2bJIHxVEEBEAABHRJAAaAFrtVYfuqqy/p+u01v6BgAvkBTI2OjJzo7y4SFGVCTHT0DooAOMjf" +
            "daM+EAABENAKARgAWumpHnIqorLXau3Ir6urK+9xWldfJUkaQnv031AEwe9RASmZUmluXj5SAOvq" +
            "iYEyIAAC3hKAAeAtMRWUX7Vq1Unawvbp4YOH96tAnICJMHHyxBRKDnT7pk2b/Jau9+V1L/OdBTNG" +
            "jByBrVEB6zlUDAIgoAUCMAC00Eu9yEg5AXYcO3ZU6OWSbk5lZ2dPMxjESibLM/2llENyTImMiNgd" +
            "Gxs73F91oh4QUDMB/kdCoak0NcsI2UJDAAZAaLgPvFVR3GG3O7LPnj376cArU20NsXl5ec2U/2C2" +
            "vySkbIrT8/MLHf6qD/WAgNoJREaaCxSm4G+92jsqBPLhoQgBdH80uWLFCtoFILy/f9/+Bn/Up9Y6" +
            "xpaUjKRXl1ldU/cDErOsrGwkE5Rbi8cUI/rfgEjiZi0REEWRNr0IRi3JDFmDQwAGQHA4B6YVkX1w" +
            "/vy5qe3t7VcD00Doa41PSJgcGRnxFZ+6H6g0lP2v1BIV/S2m/wdKEvdriYDRRGO/oMRoSWbIGhwC" +
            "MACCwzkgraxcufJLWtz7oPzo0X0BaUAllRaNGBHBp+4HKg5t/5s5YtSIqIHWg/tBQEsEoqLokVdY" +
            "+ksvvYTMl1rquCDICgMgCJAD2QT59uw4sP9gbSDbCHXdI0aMmMin7geyDLBx48ZbmCDMHzVqVGmo" +
            "9UH7IBBMAjTjRTMALNcsmbOD2S7aUj8BGADq76N+JVQUZVdLa/O4xsZG8gnQ50F/wDIslui9A1oG" +
            "kNn8zMyszxH8R5/PCLTqmwA980wSxV2KoOT1XQpXwpEADACN9/rq1asPM0XYeezYMV3nBigaXmTx" +
            "dRmgM46AckfJuJIhGu9uiA8CPhEYFBvXTgYAZgB8oqffm2AA6KBv6R/2X8uPlrfoQJU+VSgsLHR6" +
            "8Pu0DEBxBCjtb3VmZia8//skjAt6JkCOgI0UOyRZzzpCN+8JwADwnpnq7pAc0hctLc0lWAbovWso" +
            "CMrMESNHRvd+FWdBQP8EDAZDG5MZ/g3ov6u90hAGgFe41Fl4+dPLj5Bkn+p9GaCwqDCaPPmnetML" +
            "m9evLyIX6JlFhYWI/OcNOJTVFQFJEOzkCIhYALrq1YErAwNg4AxVUQMFy9l1vLxct/EAOOT8vHxa" +
            "BhBKN69bl+spdLsoTjcaDZ/Hxcf7LZ+Ap22jHAiohYDZYkkgAwB/79XSISqRAw+ESjpioGLQdsCv" +
            "m5qbZ7a1tZ0baF1qvT8hMWGwyWQ6bZekMZ7I+Iuf/zyV9j8vGJqTQ8mTcIBA+BKg/BeJ4as9NO+L" +
            "AAyAvsho7Dylzz1Ag93XlZWVxzQmulfixsXGX6SHttjdTXzwt0rGFfTWs3/u3LnN7srjOgiAAAiE" +
            "GwEYADrp8WXLltlorXvviWMnLupEpV7ViEuIO0FOfeNeffHVhN4KUMCfwo1lZU9YDcZNNOGpUBz0" +
            "TVQOEdB6g4VzIAACYU3AENba60x58gPYd+liNTm96fcoLi7ecbz82N/ZIjruee2119589NFH2zdv" +
            "3pyk2GxTZSbOo9DIc2nP88nhRcObx00Yx7f9baWfofolAs1AAARAwDcCMAB846bKuwSDYa/dIf9L" +
            "fV1deUJioi4NgZSUlPmC7JijSNKW9tbW0RvLNtoddvsYyWC0jRxeJJCBMDg+Pr5QlR0EoUAgRASi" +
            "LBb+b0LXs4MhQqvpZrEEoOnuu1745cuXn6Btcp+X037A66/o6rd/Wr5mzSvjxo79Z1lm5PAoX84d" +
            "lvfOU8uemjZjxow7aPBH1jNddTeUAQEQCBQBzAAEimyI6lWY8EXlqcq7Skt1nfNmzOTS0t/Rzz8T" +
            "5kr6eS1EuNEsCGiCAC0P0uqYwD9wgEA3ARgA3Sh08kVk3zRevfKv7e3tjCcB0fnxTzrXD+qBgF8I" +
            "CIKoKOQT65fKUIluCOCB0E1Xdiri2g54/vz5gzpTDeqAAAj4SIByYWQJTEAkQB/56fU2GAA661nX" +
            "dsDz587pOiqgzroN6oBAQAlEREREMUGBf0xAKWuvchgA2usztxLTQt++qqoLbsuhAAiAQHgQiIqK" +
            "IicAlv7SSy8hJkZ4dLlHWsIA8AiTtgrx7YBXr15NoeyA2hIc0oIACASEQGxsLKOomLlmyZwdkAZQ" +
            "qSYJwADQZLf1LzTfDsgU+bOKkxV7+y+JqyAAAuFAgDsER0Wa9ymCkhcO+kJHzwjAAPCMk+ZK0Y6f" +
            "zysqTjZpTnAIDAIgEBACEWZzPRkAmAEICF1tVgoDQJv95lZqySF9UXu5NouWAWAEuKWFAiCgfwJG" +
            "k7FREJRk/WsKDT0lAAPAU1IaK7f86eVHFMa2l5eXf6kx0SEuCIBAAAgYDIY2JrPoAFSNKjVKAAaA" +
            "RjvOE7FFgX1y+NChFk/KogwIgIC+CZAjYDo5AiIWgL672SvtYAB4hUtjhUVxR0d7RzoFBYIzoMa6" +
            "DuKCgL8JGA2GSDIA8Dff32A1XB8eBg13njvRV6xYUUXRv9/b9+23lDQHBwiAAAiAAAhcIwAD4BoL" +
            "XX5zKMoH586dn9La2npelwpCKRAAARAAAZ8IwADwCZt2blq9evVuigDy5wP7D+zRjtSQFARAwN8E" +
            "TKaIRH/Xifq0TQAGgLb7zyPpBSZ/ePDggQ6PCqMQCICALgkYjIYkXSoGpXwmAAPAZ3QaulGSPrHb" +
            "7MPOnD7znoakhqggAAIgAAIBJAADIIBw1VI1dwakZYD3d325C34AaukUyAECQSZAScKYQiFCg9ws" +
            "mlMxARgAKu4cv4omsg+uNDQ80NLSctiv9aIyEAABTRCQJMmsMAV/8zXRW8EREg9DcDiHvJWVK1d+" +
            "Seb/B/v37/825MJAABAAgaATiIiIzBKYgEBAQSev3gZhAKi3b/wuGc3+7Thy6JDs94pRIQiAgOoJ" +
            "UC4AWglUYlQvKAQMGgEYAEFDHfqGFEXZZbPZZ9bX138YemkgAQiAQDAJREVFkRMAS3/ppZfigtku" +
            "2lIvARgA6u0bv0tGMQEOUyjQnQf3H6z0e+WoEARAQNUEKBcAzQCwXLNkRkpgVfdU8ISDARA81qpo" +
            "iVyAd50+fZpeBXCAAAiEE4HIyEgWHR19WBGUvHDSG7r2TQAGQN9sdHmF/AC+bmtvvQ27AXTZvVAK" +
            "BPolYDSaLpEBgBmAfimFz0UYAOHT105Nk2qSDtI64NdnTp8+EWaqQ10QCHsC5AjYKAhKctiDAAAn" +
            "ARgAYfYgLF672EqhQPZVVFQ0hZnqUBcEwp6AwWBoYzKLDnsQAOAkAAMgDB8E2gd44OLFi+YwVB0q" +
            "g0BYE4g0RRrJERCxAML6KbimPAyAayzC5ptBlg/ZHY6pTU1NR8JGaSgKAiDAomMsmWQA4O8+ngUn" +
            "ATwIYfggVNfVHRUUtvdsZSX8AMKw/6EyCIAACHACMADC8DlYu3atnd4CDpw6depqGKoPlUEABEAA" +
            "BIgADIAwfQy4H8DlmlqKDIIDBEAABEAgHAnAAAjHXieduR9Ah61jIsUDQIrgMH0GoDYIgEB4E4AB" +
            "EKb93+0HcPZseZgigNogEHYETKaIxLBTGgr3SQAGQJ9o9H3B5Qdw7uzZdn1rCu1AAARcBAxGQ5Lr" +
            "Oz5BAAZAGD8DiiwcvFhdjWcgjJ8BqA4CIBC+BPDHP3z7nimicqSltXVSe3s7dgOE8XMA1UEABMKT" +
            "AAyA8Ox3l9YnKR7AkUsXL51yncAnCIAACIBAeBCAARAe/dyrlqtWrWqm7YAnz1edP9trAZwEARAA" +
            "ARDQLQGDbjWDYh4REJhSUV1VZfKoMAqBAAiAAAjohgBmAHTTlb4pIijSsfr6+kG+3Y27QAAEQAAE" +
            "tEoABoBWe85PcjsER7lDlscjMZCfgKIaEAABENAIARgAGumoQImZkpJSTo6A+5EYKFCEUS8IgAAI" +
            "qJMADAB19kvQpFq8eLFDYcK+M2fO2IPWKBoCARAAARAIOQEYACHvAhUIoLB91dWXIlUgCUQAARAA" +
            "ARAIEgEYAEECreZmKCDQXqu1I5+cAS+oWU7IBgIgAAIg4D8CMAD8x1KzNVE8gJOMCZ8eP378iGaV" +
            "gOAgAAIgAAJeEYAB4BUuHRdW2Pbj5eVWHWsI1UAABEAABHoQgAHQA0Y4f6VlgE9aWtpiyRlwXzhz" +
            "gO4gAAIgEC4EYACES0+70ZOWAS5SkW1f7PriuJuiuAwCIAACIKADAjAAdNCJ/lLBoTh+f6W+Pqvy" +
            "VOX7/qoT9YAACIAACKiTAAwAdfZLSKRas2bNaYUpv/zwww9rSYDGkAiBRkEABEAABIJCAAZAUDBr" +
            "pxHJaPyV3W5vf/edd1/XjtSQFARAAARAwFsCMAC8Jabz8suWLbPJTF53oep8yf79+3+tc3WhHgiA" +
            "AAiELQEYAGHb9X0rvnr16sOywH6267PP59XX1X3Yd0lcAQEQ0BIBgYRVFIF/4AABBgMAD0GvBGhX" +
            "wB8Vhb2w7e23+a6A/b0WwkkQAAFNEYiIiMgiPx/83ddUrwVOWDwIgWOr+Zo7bB0b7Da74bUtW94i" +
            "ZeAUqPkehQLhTkCSDGaBCcZw5wD9OwnAAMCT0CeB5557rk0RhZ+2d3SUbHtr2wYqCCOgT1q4AALq" +
            "J2A00dgvKDHqlxQSBoMADIBgUNZwGytXrjwlyfLamksXx27btm0dqQIjQMP9CdHDm0BUVBQ5AbD0" +
            "l156KS68SUB7TgAGAJ4DtwSWrVlzkMniP16qvjgRRoBbXCgAAqolEBsbSzMALNcsmbNVKyQECxoB" +
            "GABBQ63thlY8vWKvIIt/f6n60iQYAdruS0gfvgQiIyOZyRixRxGUvPClAM1dBGAAuEjg0y2BTiNA" +
            "+DsYAW5RoQAIqJaAJdrSRAYAZgBU20PBEwwGQPBY66Kla0YAlgN00aFQIuwIkCNgoyAoyWGnOBS+" +
            "iQAMgJuQ4IQ7Aq7lgJrqi+O7dgeccXcProMACKiDwKCYGDOTWbQ6pIEUoSQAAyCU9DXcNjcCREX+" +
            "20s1F4soTsCrpAqCBWm4PyF6+BCgnQCx5P4dET4aQ9O+CMAA6IsMzrsl4NwdIAjPd7R3ZL76yiuf" +
            "NTY0HHV7EwqAAAiElIApIsJE4YAjQyoEGlcFARgAqugG7QrB4wS0WTuetdlsZ37zxhvJ5eXlyB2g" +
            "3e6E5GFAICY6JhPBgMKgoz1QUfKgDIqAQL8E/vKXv9jfe//9XXfdccfJ05WVtwmCcGDw4MHYZtQv" +
            "NVwEgdAQsNltcvnRcsfcefPeon+77aGRAq2qgQBmANTQCzqRYcXq1b9XGHtmz+49pu0fb/+lTtSC" +
            "GiCgKwLx8fFpPBiQyWQaqivFoIzXBGAAeI0MN/RHgLIIfkYORj8qP3Y0/Y9/+ONLVBahg/sDhmsg" +
            "EGQCPBhQtCXmkCAL+UFuGs2pjAAMAJV1iB7EIb+Ab5gg/O35qnPZW9/cymcCsENADx0LHXRDIDEp" +
            "wcYEGQaAbnrUN0VgAPjGDXe5IUBGwAEyAp6vr6uN4jsEGurrd7u5BZdBAASCRCAxKYlyAgm5QWoO" +
            "zaiUAAwAlXaMHsTquUPgzTffzMUOAT30KnTQA4G01LRk+uOf98ILL1j0oA908I0ADADfuOEuDwk8" +
            "99xzbStXr35BUJSndnz8SfzOnTtf8fBWFAMBEAgQgZTUlLHksFtksVgwCxAgxlqoFgaAFnpJBzLy" +
            "HQJMEZ85cvhwzv+8++6LpBKcA3XQr1BBmwTMZjMzmSL2MAcr1KYGkNofBGAA+IMi6vCIwIo1Kz4X" +
            "HdIPz547PwzOgR4hQyEQCBiB2NiYBjgCBgyvJiqGAaCJbtKPkMufXr5fEIUfupwD6+vqEDlQP90L" +
            "TTREYHBmZozAsBVQQ13md1FhAPgdKSp0R8DlHGi12it/+9vflhw6cOj/d3cProMACPiXQGZmZjz5" +
            "AQzfvHlzkn9rRm1aIQADQCs9pTM5uXPgqjWrfsadA//610+Ldm7f+QtSEX4BOutnqKNeAllZWdkk" +
            "3UTFZitRr5SQLJAEYAAEki7qdkvA6RwoCk8fOXIkfevWrTyt8Bm3N6EACIDAgAlQzo7sxMSEMkUQ" +
            "Zv+/9u49OooqT+B4VXeeJCYIBAhImCEhBBDxwayrSHiKB1FUVFQ8O+qiEyIkq+cMPmf3+Mccz+zq" +
            "kV0JLx8D7AgkPKKDQAgBQUQRiARwCBGTEAIhD9LBPLo7Saer9tbMZkY4aEjoRz2+OYeD6a669/f7" +
            "3Jb69a2qW9fcGA0YUoACwJDDZq6gxSmBr1VZfdFxwXGdWDRoK4sGmWt8yUa/AhMmTuwtVgR6MCsr" +
            "a7R+oyQyfwlQAPhLlna7JSCeIVDa2t76gvZYYRYN6hYdGyPQY4H4+PgHQsPCt4rZgAd73Ag7GlZA" +
            "NmzkBG5ageVZWQ9JkvzayBtHH5k4ceJvTJsoiSGgA4EzZ84sz9u67S6bqsxJy8go0UFIhBAgAWYA" +
            "AgRNN1cv8ONFg3I35f5e7MnFgVfPx5YIdEtg6NChc8PCw3Z6ZXl2t3ZkY8MLUAAYfgjNmUDnokE1" +
            "tTWj13300VKR5TFzZkpWCARdIHbq3Xf3EmsCPL5yyZKUoEdDAAEToAAIGDUddVegc9GgpsamvtoT" +
            "BS/UXcjtbhtsjwACXQswC9C1kRm3oAAw46iaKKcfLxq0adPG1KKiohUmSo9UENCLALMAehmJAMZB" +
            "ARBAbLrqmcCPFw36+qsDt+0uKPgf0RLXBfSMk70QuKIAswBXZDH1ixQAph5ecyXXuWjQqVOliSwa" +
            "ZK6xJRtdCMROmz59INcC6GIsAhIEBUBAmOnEVwKXLxrUePHiSV+1TTsIWF0gISHhycioqH3cEWCN" +
            "TwIFgDXG2VRZ/njRoHXr18eVlJTwREFTjTDJBFNg2t3ThjALEMwRCFzf9sB1RU8I+E4gPz+/Y9v2" +
            "7V/dd++9pacrKu4RKwjuFg83Geu7HmgJAWsKxMTEjKioOF3Q4nLFif/HvrCmgjWyZgbAGuNs2iy1" +
            "6wLEI01fOFZ0bHD+jnxtvQAuDjTtaJNYoAQmpKamMAsQKO3g9UMBEDx7evaRgDglsF+ySS+Vl5cN" +
            "+3jz5izRLE8U9JEtzVhTYMDAgeP69os72mGzPWxNAWtkTQFgjXE2fZbi4sBvJFl+paa2duSqDz/U" +
            "HivMyoGmH3US9KfA5CmT/klW5blidcAx/uyHtoMnQAEQPHt69rGAKAKOiyJgUVtr2w3ayoHi8cKb" +
            "fdwFzSFgGYF+cXEjEn6RUKzYbHMtk7TFEqUAsNiAmz3dzpUDtccKb9iYM5E7BMw+4uTnT4EpU6bc" +
            "Lq6xeXbp0qXT/dkPbQdHgMcBB8edXgMgoD1WWJXl10ePurEwdVJqWgC6pAsETCdQWFi48fChQ1KH" +
            "1/tsZmZmk+kStHBCzABYePDNnnrnHQInTpwYXpCfr10cyB0CZh908vO5wLhx46aHhoY2hdpsT/q8" +
            "cRoMqgAFQFD56dzfAtodAjbV+3Jpafnw3Nzcd0V/FAH+Rqd9swnETpo4WVUl+ally5YNM1tyVs6H" +
            "AsDKo2+R3OdnZBTKivxqbU3NuNxNudpaAdwhYJGxJ03fCCQlJz0aFdXruKyqD/mmRVrRgwAFgB5G" +
            "gRj8LpCemV5kV5SXa+tqUsRtgptEhxQBflenAxMJxN41YcINqio/JC4IHGiivCydCgWApYffWsmn" +
            "ZWR8++PbBBsaGg5aS4BsEei5wLDExBlh4aH1YjZtSs9bYU89CVAA6Gk0iMXvAp23Cba3d1TkZGcn" +
            "cpug38npwEQCKSkpNtmmTjJRSpZOhdsALT381k7+r7cJSrZXRo4ceXzSlEnPWluD7BHoWsDhcJRs" +
            "zM6RVJs8Uyumu96DLfQswAyAnkeH2PwqoN0mqEhK5smS4gEbsjcsFp3xDAG/itO40QX69u2bYrOH" +
            "nFZVdbTRcyF+STxChR8ELCywcOHCg+K6gBfEN5swsXzw3vLy8mwLc5A6Al0KxMTGOMXdAIldbsgG" +
            "uhegAND9EBGgvwW0qcx+/fv9W3tHx5f5eTsSN2/c/KHL5Trn735pHwEjCvTpc32ELMsDjBg7MV8q" +
            "QAFwqQe/WVRgzpw5XrFo0Pt2Vfn1hQu1NWtWrQ7XlkAVHCwcZNHPBGlfWSA8IsIuKVL0ld/lVSMJ" +
            "UAAYabSI1e8C4lbBkvQFC35nk9QntfXPP3j//U1nzpzZ5veO6QABgwjYbXavJEuhBgmXMH9GgALg" +
            "Z3B4y7oC8xcuLNAeftLR3v7N9q3b49asWrO8qqpqi3VFyByBTgFVEssCcwdZJ4eB/6YAMPDgEbp/" +
            "BbQnn4k7BZbblY65brezcssnW4aKQuC98rLyPP/2TOsI6FlAFhMA4tEA/BheIMTwGZAAAn4WSMvM" +
            "LBNd/CErKyvX6XTOys/fcaPdHpJz0003hd18y81TIyIiYvwcAs0joBsBr+K1iykAj24CIpAeC1AA" +
            "9JiOHa0mIG4ZPCVyfnvlypVrvV7v1KIjRdOLio60D0lI+Pj2228fFRcXN8JqJuRrPQGPxxMmbiBv" +
            "sV7m5suYAsB8Y0pGfhZIS0urFl18pP1ZkZV1x7nKyhlnz1Qmx8TGrrnjjjv6D0scNsPPIdA8AkET" +
            "aGlq6hCd1wUtADr2mQAFgM8oaciKAuJiwQMi7wMrlyxZ19T4w/3i9MBw7fTA6FGjO24dd2tqZGTk" +
            "ECu6kLN5BZqbmnuJSwAqzJuhdTLjSk7rjDWZBkBAnB6I104PiPukp0uyOmPQoME77xx/53BxeuBX" +
            "AeieLhDwq4CzpUX605r/PScr9nvmZ84v9mtnNO53AQoAvxPTgVUFtNMDqizPEM9Qf7hXVK890+6e" +
            "NmTw4MGzrOpB3sYXKD116tuCXbsq6y5cmPXGG28oxs/I2hlQAFh7/Mk+AAIr3l0xSrF1PChunno8" +
            "Mipq3+Qpk3snJCTcJ7qODUD3dIGAzwTy8/LyTp8+XSgWy/oPnzVKQ0ET4BqAoNHTsVUE/n+qtFhc" +
            "J5DrcrbM3v7p1tTQsPD3Z8ycMXzQoEEPWMWBPI0vcPbcuVDxtf+w8TMhA02AGQA+BwgEWEAUAikd" +
            "NtvDsirPjY6J3jp79uwxUVFR3DkQ4HGgu+4JVJw+fSxv+46L4hHaj4hbYh3d25ut9ShAAaDHUSEm" +
            "SwiIQmCMYrPNFWuqPTd6zI3vp6amPiESH2qJ5EnScAI52dkbLzY0HBDT/4sNFzwBX1GAAuCKLLyI" +
            "QOAEli9Zfo8iK2kR4WHlsx95JKF3796PBq53ekKga4FzleeKPt26pc2rKHMzMjJOd70HWxhBgGcB" +
            "GGGUiNHUAukZ6fkhoSG/aWtra8heu36qeAzxWyJhHkNs6lE3VnJ79u4plRR5DQd/Y41bV9FSAHQl" +
            "xPsIBEBArC5Y//zChW8qsvqceAzxFPHgof8U3VIEBMCeLn5eoPDQoU0tLc1KeK/wtT+/Je8aTYAC" +
            "wGgjRrymFliwYEGueMzaC+LRw9PWrFnzukj2mKkTJjldCzgcjkOHDxf+SlaUFfPmzWvWdbAE120B" +
            "CoBuk7EDAv4VEEXAfpvqfdklnjy4evXqD0VvFAH+Jaf1Kws0fpKbWyhJ6n+nZ2TsvfImvGpkAQoA" +
            "I48esZtWYH5GRqGiqq+6ne6ZFAGmHWY9J9a4ISdnVbvHYxOLV63Qc6DE1nMBCoCe27EnAn4VEPda" +
            "HxH3XL/mdrnuy8nJ0c6/ck2AX8VpvFNg185dfxbT/wniqv//euaZZ1o7X+dvcwnYzZUO2SBgLoHt" +
            "27dX3z9jRonL3ZbuaHBsTkpKSjVXhmSjN4Ev9+//tKS4ONquKr97PiPjO73FRzy+E6AA8J0lLSHg" +
            "F4GteXnn7515b/kPFy9mRIZH7u4/oP9Yv3REo5YXOHzo8FdFR4o6ZMX2+vzMBVx7YvJPBKcATD7A" +
            "pGcOAe3CQHF3wJv7v/hiZmNj49fmyIos9CSgHfwLDxc2i4P/a+mZ6UV6io1Y/CPADIB/XGkVAZ8L" +
            "iNMBJ2feOyOkrKy85eabbx4hOojweSc0aEmBfxz85Vc5+FvnI8AMgHXGmkxNIGAPDX3P6XQOOlJ4" +
            "ZIcJ0iEFHQhw8NfBIAQpBAqAIMHTLQI9EdBWDLSptpUHD349rdXtPtuTNtgHgU4BDv6dEtb8m1MA" +
            "1hx3sjawwLa8bWX3zZx5fVV19flRo0bdZuBUCD2IAhz8g4ivk66ZAdDJQBAGAt0RsCnKurqauvG1" +
            "NbWfdWc/tkVAE+Dgz+dAE6AA4HOAgAEF0jIyvlVldV1+/o5iA4ZPyEEU2Ld3X87frvbngr8gDoMu" +
            "uqYA0MUwEAQC3RcIUZTN4oLA1MrKSp7S1n0+S+6xe/fu1SdO/CVWVjj4W/IDcFnSFACXgfArAkYR" +
            "ELMAJbIkrS/Iz68TMbNMsFEGLjhxNuZuyn3z+5Lv+nOff3AGQI+9UgDocVSICYGrFLB5vRvb2zvG" +
            "l546tfEqd2Ez6wkc25C94Y+1dTUpNlV5hfv8rfcB+KmMKQB+SobXETCAQFpmZpksKav3fv65mAxg" +
            "FsAAQxbQEBscjoIP3ntvf4Ojvpcky4u0a0cCGgCd6VqAAkDXw0NwCHQt4FGUtR6PJ6awsHBn11uz" +
            "hVUEjh07tjYnO2esmCGqcLe3vfj888+XWyV38rw6Ae1bAz8IIGBwgaVLl04X/zOvffqZZ9yRkZFD" +
            "DJ4O4V+bQOOnW7asqjp77lZFlt4Wz5H49NqaY2+zCrAQkFlHlrwsJSCeE6AtDtSn4eJFd3Jy8ihL" +
            "JU+yfxdovHjxZE72hu31DkekbLf9u/jWv//vb/IfCFwmwCmAy0D4FQGjCmiLA1VWVI5yOBznjZoD" +
            "cfdcQJvyX7dufV+Xq6XU5XZlpqen/6XnrbGnFQQ4BWCFUSZHywiIUwGvxw+MH/vQ7IcetUzSJHpG" +
            "TPl/zJQ/H4TuCoR0dwe2RwAB/QpoiwPVVlc/VltTUzhg4MBx+o2UyHwhUF9fv+vjzR+f6vB6rhNT" +
            "/gsW8K3fF6yWaYNTAJYZahK1goC2OJAqqdlf7NtXYoV8LZxj4549e97amLMx2ev1lNpDQpjyt/CH" +
            "oaepMwPQUzn2Q0CnAnZVzb1QX59TXV29Jz4+frJOwySsHgo0NDQUfLx5c7Gn3fNLVZaefn7Bgj09" +
            "bIrdLC7ADIDFPwCkbz6BziWCd+7YySyAuYa3ce9ne9/OWZ+d0ubxnA9tD08Tt/hx8DfXGAc0G2YA" +
            "AspNZwgERkBbItjlcq0TSwR/kJSc/GxgeqUXfwmIBz5tFQVdjaejfYj41v8UB35/SVurXe4CsNZ4" +
            "k62FBJZnZaWHhIXd9uxzz00TaQ+1UOqmSVUUced2bN+xQ6zjf4sqSX+MiIj407x585pNkyCJBFWA" +
            "GYCg8tM5Av4TCIuM/KittXWimDbeOGnKpN/6ryda9oNAo7a08+GDhyZJklwnvvX/i/jWf9IP/dCk" +
            "hQWYAbDw4JO6+QXEugCTZVVa89gTj5f06dPnbvNnbPwMz5099/mugp2V7tbWCJuqvj9/4cIC42dF" +
            "BnoUoADQ46gQEwI+FBBFwEvhoaGD5j333NOi2VgfNk1TPhRwOp0n8vPyD3RO93u93o8yMzObfNgF" +
            "TSFwiQCnAC7h4BcEzCcQ3hb+gUdtWynuG39v8uTJi8yXoeEzOrN/3/5t3357XKzeyHS/4UfTQAkw" +
            "A2CgwSJUBHoq8LdTAfLqhx+Z/U3/AQMe6mk77OdTgUZxl8bGvZ9/LmuPc2a636e2NHYVAhQAV4HE" +
            "JgiYQWBZVtYLYWFhw8WpgPEin7FmyMmgOTRWVFSs311Q4G5v7xgvS8pqj6KsZbrfoKNp4LApAAw8" +
            "eISOQHcEVq1aFeF2uRb37du3dc5jjz0j9uV6gO4A+mDbqqqqLbsKdp11uZwTxD++67X1GtIyM8t8" +
            "0DRNINBtAQqAbpOxAwLGFViyZMkv7Tbb2wP6DyyZ/cjs14ybibEi7zzwu53OVO1ZDdpyzdqKjcbK" +
            "gmjNJkABYLYRJR8EuhBYuWTJGEW2/WF4yoi6qVOnPt3F5rzdc4HG7777bvPBAwc8Tqf7nyVJ2cCB" +
            "v+eY7Ol7AQoA35vSIgK6F1j+7vJbVJvyZnLKiBqKAN8OV2tra9PRoqO7jx8/3u71dgyRVPUTRZL+" +
            "vHDhwlO+7YnWELg2AQqAa/NjbwQMK6AVAZJN+X3S8OT6adOn/dqwiegkcEd9/fkDX3998Gxl5QRJ" +
            "lfMkm7TTbrfvTktLq9ZJiISBwCUCFACXcPALAtYS0E4HeG22N/r26XdmzuNz/lVkz4WB3fwIiCv6" +
            "vzh44GBVQ4NjjCxLubKq5onV+w50sxk2RyDgAhQAASenQwT0JbBs2bJhsqK+FNkryj7rwVnjr7/+" +
            "+pH6ilB/0bS6WpuKjhZ9drL4pNrW3jpAm+YX5/c/5cI+/Y0VEf20AAXAT9vwDgKWEXjnnXciw0PD" +
            "F4hvsItSUyccGD1mzAOWSb4biYrH8u478s03NdXnqydLspQnyXIB0/zdAGRTXQlQAOhqOAgGgeAK" +
            "iBUD77ep0m8HDb6hSMwGPCiisfxjhBsvXjwpLug79n1paURba1u8KJK2eVV1p7io72BwR4veEbg2" +
            "AQqAa/NjbwRMJ5CVlTXaJtkyQ0JCIiZOmuhJHpE8z3RJdpFQY2NjlbiF70TJyRKns6XlZvFt/zPx" +
            "j+UeyWbbm56eXtXF7ryNgCEEKAAMMUwEiUBgBVauXBnq9XieElPc86KjooqmTJs2WPzMCmwUge3t" +
            "koO+s+UWcSX/56qsfmH32g/Mz5xfHNho6A0B/wtQAPjfmB4QMKzAynffTfTaQh4RCTzRq1evgxNS" +
            "7xoyLDFxhmETuixwh8NxqLi4uEw8lMfW2tZ2Owf9y4D41dQCFACmHl6SQ8A3AuK0QLKsyrNkWX7Q" +
            "HmI/PzJlhHfM2LETevfuPdg3PQSmlebm5uLKiorvy06fbq49Xx3VoSg3SqqyX5XlL/mmH5gxoBf9" +
            "CFAA6GcsiAQB3QuIUwPx3nbvZMmmTpFUaUpUdPTRESkjopOSkoaIhwyl6CkBt9st1dXWHq2uqak/" +
            "X1XVWH/hQqhXUW6TVemYKslHxVP4jskhIUXz58//Xk9xEwsCgRKgAAiUNP0gYDKBFe+uGOW1e+8Q" +
            "C9+MF9cK3BkeGlbRr39cR3z8oOsHiJ+4/nGJkZGRAcna5XI1XairK9cO9nU1da3ifH50S0vzKHHx" +
            "3kkRQKmY2i8TMxinvLK3pH///iVz5szxBiQwOkFAxwIUADoeHEJDwCgCf71WICRkjCgGUlRJShJx" +
            "J4kZgpFihqAk5rpod3RMTEjMdTFxoWGhEeKnj/jTT1xTIMXGxkriv6+YplhTXxIHckkc3KW2tjZX" +
            "W2vrWUVVZU+7x+Fudf/Q0tLibG5qVpp+aIz0Kt7b/3GwV8sl1fa9ZJe+czqdZYsWLXJesQNeRMDi" +
            "AhQAFv8AkD4C/hB46623osRPoqqqSeKb9y9kWY2TFClarI8fLo7hEZKsXicKhHhx0E4MCwsrjIqK" +
            "bgkNsbdosXg6vNHi3rvo9vb2cWKbMrFNtfgG3yz2aRf/YCniNe2PR7TVItq6IK7UrxDXJpRysPfH" +
            "SNKmmQUoAMw8uuSGgI4FFi9e3DvSHjlUnEZIFDMHCeJg3lsLVxQLP4iL8irFRXllbq/7zIsvvviD" +
            "jtMgNAQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBA" +
            "AAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAAB" +
            "BBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQ" +
            "QAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAA" +
            "AQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEE" +
            "EEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBA" +
            "AAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAAB" +
            "BBBAAAEEEEAAAQQQQMA/Av8His1M8CdS5OYAAAAASUVORK5CYII=";
    }
    return Single_Tap;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var Hotspot_Close = (function () {
    function Hotspot_Close() {
        this.close_icon = "data:image/png;base64," +
            "iVBORw0KGgoAAAANSUhEUgAAAG4AAABuCAYAAADGWyb7AAAAAXNSR0IArs4c6QAAAAlwSFlzAAAL" +
            "EwAACxMBAJqcGAAABCZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6" +
            "eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYg" +
            "eG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4K" +
            "ICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6dGlm" +
            "Zj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmV4aWY9" +
            "Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIgogICAgICAgICAgICB4bWxuczpkYz0iaHR0" +
            "cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgICAgICAgICAgIHhtbG5zOnhtcD0iaHR0" +
            "cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyI+CiAgICAgICAgIDx0aWZmOlJlc29sdXRpb25Vbml0" +
            "PjE8L3RpZmY6UmVzb2x1dGlvblVuaXQ+CiAgICAgICAgIDx0aWZmOkNvbXByZXNzaW9uPjU8L3Rp" +
            "ZmY6Q29tcHJlc3Npb24+CiAgICAgICAgIDx0aWZmOlhSZXNvbHV0aW9uPjcyPC90aWZmOlhSZXNv" +
            "bHV0aW9uPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgog" +
            "ICAgICAgICA8dGlmZjpZUmVzb2x1dGlvbj43MjwvdGlmZjpZUmVzb2x1dGlvbj4KICAgICAgICAg" +
            "PGV4aWY6UGl4ZWxYRGltZW5zaW9uPjExMDwvZXhpZjpQaXhlbFhEaW1lbnNpb24+CiAgICAgICAg" +
            "IDxleGlmOkNvbG9yU3BhY2U+MTwvZXhpZjpDb2xvclNwYWNlPgogICAgICAgICA8ZXhpZjpQaXhl" +
            "bFlEaW1lbnNpb24+MTEwPC9leGlmOlBpeGVsWURpbWVuc2lvbj4KICAgICAgICAgPGRjOnN1Ympl" +
            "Y3Q+CiAgICAgICAgICAgIDxyZGY6U2VxLz4KICAgICAgICAgPC9kYzpzdWJqZWN0PgogICAgICAg" +
            "ICA8eG1wOk1vZGlmeURhdGU+MjAxNTowNzowNSAyMTowNzo0NzwveG1wOk1vZGlmeURhdGU+CiAg" +
            "ICAgICAgIDx4bXA6Q3JlYXRvclRvb2w+UGl4ZWxtYXRvciAzLjIuMTwveG1wOkNyZWF0b3JUb29s" +
            "PgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4K36AZ" +
            "FwAAETZJREFUeAHtnWuMVdUZhvcMMBeRQXGmSrVemqaUHyUabERIoWhQE02alKYk+qdNS38Apoht" +
            "YiwQo3hJEwaVgm3AWmM0ATvxR5tGodSMSVtsQGlrSjFNtVYFC1IHEZgZZk7fZ3v2zN5nX9ba5+xz" +
            "G/aXLPZl3d93f2t961vrDI6TS1Mi0NKUrXacNrW7XWFKMUzWlTBJgT61Fq+6OAWF0eJ1RNezxTCs" +
            "K2FQYUihqaQZiIOETl/o0H3W7YbcMwqnfQGyG1ayBiCrjqI95xcDpNW6nRAJiScVPlZAUxtKag1I" +
            "UudpyzSFLoXzkhLWOA4SP1E4UbzyXHdpBOLQrgsVIIw5qpEFzYPA/ykwV9ZN6kkchsVFCmhZPdtR" +
            "DvhoHUPohwoYODWXegCGhkEYGlaP+rMEGQLRQAisqQbWEjjqYkicoYClOJEEC/S4AkNoTebAWhGH" +
            "ZXixAuuviSysBz9QwCKtqlSbOMrvVkDTspK21tbWRW1tbYtU4OyWlhbK7ywUCm26n6SANvs1elRx" +
            "aAHXEcUzJ53W/TFdDw4NDfWPjo726z7LRTiaR/lV075qEodn4xIFrpXK9Z2dnUtVyNzh4eGekZGR" +
            "KZ9yUWmxmmRbWpxJkyYNT5ky5ahK23/69Ok+Xf9UecmuR+aIysEzk7lUizgsRYZG/5eftvFf6ujo" +
            "WCFtmCeypmdFlKkRECkSB6TVe8+cObNV6f9hypMQz9zH0IkFmqlUg7getbDsobG9vf1GacCawcHB" +
            "z0uzKiG+YqDUjlG1519qR6/as6eCAhk60ejMJEviKIuhEW1LLQLoZgF1t77yy6VlWbYrdVtKM0j7" +
            "CtL+d0TgRhH4Umm85TPus8MKmcx7WQGEZlyqgPWYSgTIQhG2VnPLFSIsVd5aJxaBjubaf4vADfrA" +
            "XimjfqzN9xQq7mgWxOGmgjS89mmkRyD0yqr7ioDIoh1p6q4orT60gqzaffrY7lJBaYdAdiEgryLH" +
            "daWAoWmXKaQiTcPiKmnXchkdqfKpnoYSGTFnpIXbNHz+NGXDIO9dhbI1rxLiyAtpaYbHLmnZkxpm" +
            "5tTKSlT7qipYoRru/yrt+64qwv1lKwybkFfWnFeJN36mKp1q20oNL/M0vDwn0q6wzdMs6c6ePXux" +
            "RpFvqb1v6IOEDBvByc4at6ylQrnE4a24wKZ1pJGWfUMd2qT5zJpo27IbJZ3m6Y7JkyffJgKPiMiD" +
            "lu3CBcjIdcoy/ViycojD3P/MWAmGm6lTp35bc9k6BXYFJrRo3sbltlgf6ifq7wHLzjLV4G5L5XJL" +
            "SxxfCPOa1dw4ffr072lo/JE6kbYeVdGcIvIw2BZMmzZNNsvga5a94JgG6zxrSzMNoJ4xYqU5Im35" +
            "qVOnfijS6Mg5JSKvRWF+CvLAFs2zNm7SEIcriy/DKAyPRU0750jzwCmSNy/FsIlCgJfVfGdLHF8D" +
            "TmOjYIhIy5jTbMs2ltmsCSBPbZ8vg+WwpcECzhBn3E23AZfK8YwY08rkv07W46MizWo4VZkTXkRe" +
            "qwyWRQqvWS4VIG/ABIzNUIan32bnukuehMdEGuuTXHwIgInkUb3inI1JwNq4u2IiDs3hjIhRNBxs" +
            "07xmrNBY0ARNADaaRrZZdg/ME0ct0/CHQYLqJopIW6XF9dcTE+WRjhbplwgrrn82wMH0hFJxEDdS" +
            "kjSOIc9GtXs0di9XiKwgfzmOABgpfF9vUAiTgH3stJNEHGcfYT5RpP6PStua2suf2MGMI4VVu5ZL" +
            "my2KBXs4iJQ44hhfjTvZ8oovUkPmRpacv4xFQPPd1cLua7EJxiPgIHKuiyMOI8OobexcN9sm6Dgm" +
            "9bsDM2H3Y4sWwEGkwRdFHImNc5uGyNu0B3W5ReV5kggEwA4MI6JKX8FFSImiiEM9Tdamo53fNVpc" +
            "llaSP1siAHZgaJEcLkLTVhRxRm2TSXuzvhi8KblUgAAYgqVFESFOSoljIjT+qFDj8w9ybbOA25AE" +
            "DMHSkIxoOAkYKaXE2Xj/Z2uf6SqLyvIkFggUsZxtkTTATWriZMaulFVUms+i3jxJFAJgCaZRcSXv" +
            "YomDDKN7S+p9XUmB+WOFCFhiCjdjCjN2o5dEhMxOf5s0Hs/XvlJoovSnye/TIwCmYGvICTdjilVK" +
            "XGJeWUDfnGhGCcfKBVpiv6sdCaZga1FPecTJQdoQ7i2ArhRsCLvllluc559/3tm+fbt7bwFc1ZJY" +
            "YjtGnN/ENDmK27QhGOv0rFqPSgoG7GXLljldXV1OX1+fs3PnTkdDTUmq5EdtajqrVq1yent7Awl3" +
            "797NlkvgXa0eitiyiZp0TC/EERm+mBT0ha7U9jt7N3UL0rLCU089pY9zXDZu3FiQ68i6TTpNXVi3" +
            "bt14AcU7fQQFyq9X/8AWjJM4KMbB1ZiVwlHoRNFXulh9TExT7UjqR9P8smbNGmfz5s3OeecZ/QaO" +
            "SHPuvfde5/777/cX4d6jvfXSNhpA38A41LDwiwBXbJUnapyAeYPy6x00VBZ1JHh55plnCjrHGNs+" +
            "Tf6FDRs2BDMVn9BaHR+PzVurPhcxTuRBbQkcJeHoXWIGDUdHatWBpHo0nBRWr14dScCuXbsKM2fO" +
            "DBEgLS1s2bIlMo8Mk1RDbVLbKo0rYpzIg+oIHJPEYZyYQav7gUobllV+DSmR8xTMHD16tHDTTTcV" +
            "enp63DBr1qzCnj17IkljvtRXHiI6q3amLaeIcSIPKtN17nsLGDbr/BamHoMisFbJektME8xRvSfW" +
            "PXv37nX/1MXChQsDFTHX3XHHHa6lSbrHH3/cWbBgQSAND88++6yzYsUKR8fkQ3H1esFwLYx/Zqif" +
            "vTSUyBWcxolMCxDM1Ib5OmkL81bcEChDo3Do0KFITWNITZoP69VPadywiQfFw9WYi+sLuvd7UYgL" +
            "iIj7u75OT0MDcfV8wMp84YUXnBtuuMGqGceOHXPmzJnjHD582Cp9LRPJ6h3VGZ5rVCc/NY4TNO6f" +
            "iWSV5MRX1nBy4sQJd8jbt2+fsW0MnQyjjUgajVf7wNjqB6Mecd41tvNaIBrTxGaucsTx48ed++67" +
            "z0kiD9IeeeQR5/XXX69ya8ovXuM6xAW2byJKc3loWDIiGpy/8iHgEWc89aOvwZjGV25Nb2fMmOFq" +
            "3LXXXhtbL07le+65x7nmGqaQxpSiS5FfpiaJy4NHXFJCLw6LsuEE42Tr1q1OEmleoyGPZYAW6d6r" +
            "hrriXFCDPrJplEec0SXeiBqn5YDz8MMPR1qUzGlvvvlmCIPu7m7n6aefdrQcCMXV+4WIQ5uSLEqa" +
            "6HKVhjgjubXsOA7jtWvXuhZlab2eIYIDOspgWbJkifPEE084OsNfmrXezzb7UwEecpdXAzgX0ri8" +
            "vC8sdzI3AHHlOJnzbZ0m3dZhpk70Vepr6FOauvoqsbrYqS4VtmZsvPzsfmuhXprdfb799tvr2jew" +
            "lbH1KxMPinetKs84Mf7BZ524/b3WGcpXP6F+XFx+4dzInXfeaeXllx/Qeeihh5z169f7i3Dvly5d" +
            "WvEBpFChKV7QN507edkii8uVt02D5x9T1CMylF+WWr+2HYa17RD789ZQpoxfcLRgx44dbqms38o5" +
            "LAR5uL5OnjwZOCxU+kFk3HRjcTrletb9hoRw5B4m8qvQ5/Ry7PhXVAEaLvv1C5NLouJq+c47mlfJ" +
            "GREW49pwdZYvX+5qMR/Eiy++WMtuBOrCMBG2iwIvww+n9eo/vPYT163nwHkGEvhF80ivtnZu9b9r" +
            "9nsIZJiq5CPIAgNh+1the5ehrOOKP0Ya/9AIm4miea6Pjk4kYbFeb9LAVNhimJhkjCM/C7zEsooV" +
            "dfAPOsIQtA5iU+cRtgiAKdga0sNNJHFMfGMRcYVofnk1Li5/Xx4ClpjCDRy54tc4Xpi2FDC7t6ii" +
            "sQI+LSb/t1wEwBJMLfIHuElNnCo4qIXiWxYV5UksEChiedAiaSJxeKeN59U0Hj820YwUC+AyTwKG" +
            "YGlRcOhvWJZqHGUMmAqSBfSS1h3vmdLl8ckICMP3wTI5lRsb4iSKOFQysOcTVbDM6E251kUhY/cO" +
            "7IRh8Hde0VnhIjBMkiyKOMxOo8mvVf6vtWh0V/EUlEs6BMAODC1ywUVomRZFHGXx/52FEhPhF/nW" +
            "HpBVZEznz5Pf6882CTM5lB+0wAJs4SIkccRhpHwcSl3yQn8Frl9W0f6S1/mjAQHtdP9Fc9vLhmRE" +
            "w0HkcQa/r7K0HHYBrlRISkOeHu1z/U5e99DPXInMJYiAsBoUVjfq7dFgTOgJbXtbgd8ThCRO40hI" +
            "BuNcpzRH5aR9EkdtLskIgJGGye1glpzSjQX7SNKINaHNft2VCkkEK1r7QZ2dOzTZXu0+5P9EIiCM" +
            "DgijZZGRwZd4pt5WiBwmSWoijjQzFLq5MUiX5rvdGrutfrRgKGvCRQubj4TNEnXMZhRj64YtnFgx" +
            "apJyYtW4u66xpXwacULrktXydMeqtyH/hI0GE7BRB21IA+tIS9IPkO3v3TjnMN2fMepejXtXX9YR" +
            "jeWLdW/zUUQVM6HeibQRHflYJ23bbdkxPFKxQ6RXhi1xFAQRiUcbKFRru4Mydzn//lWRZzMUk21C" +
            "ikgbVXhQ89pOyw6iaTZaaf4Tvr4K2Q86X8E7YOSLCt5qcfk3nc0fEnHXn6vkiTCODPbqUNIvg+jE" +
            "PjGqWf9M1lbjvNogj78QY9QkDQ2vFcmbd66Rh6aJtE0DAwPbPOAMV6xIhkijj9grJy1xFIzx4R7K" +
            "9AqJu4q8/fphxSmdOJ1/rpAHaZoqfqLjfk/G4RLxnr8hg1JYS1riKBirB40zzndu4qGhA/IWYLAs" +
            "FHnl1EcxTSEibVgL7PXa0X4uRYMx+7EJUkm5QLKxh0us3aY2DBZ16IA6tlgbhxPSNSZrekAjy0q5" +
            "s3bZYFJMgyHy3xTpx5Ia56qxlOEb8l6qYP7rZ+N5+Q/cfyHn9JfVyfG3TXyHG0t9ekNa9h11w8oi" +
            "LHaXj595rSwgytW4Yt3uBh/EGS3NYoZBad9OfZ2t0sA50j7bfF59DXXVFHBGa7Sf60O8Ww1zz/Rb" +
            "NpBfnZZNGnVUonFeG1nfXaaQdgjs0ZfK/4Q1VwRm0Q6vPVW/6qMriLT9Wp/hDbFxGPvbBGnvKlR0" +
            "Ui4rwCDvswpphk0lF9sdHQsFxDqBcLmMF/ddo/7DcQN9bO/oQ3tAWvZKGe1keHxfoeKOZkUcfaAs" +
            "fhBitVQgg18EyG0CZo0IvLTRCCwS9p7a1av2/cbf7hT3bIpi9pc1p5XWkyVxXtnsJMzwHtJeNf8t" +
            "kQbepTXgVfqy0eS6idoxqva8pXZsSuFrjGovJr/7Y42oyHLeVYM42oHWXaxQCfCz5X1YKWPmOoWu" +
            "Wmkh2iWD44TCq8UTxgfpUJnCkPiBgvEYSNryq0Uc7WhTmKlgtdYjQ5zoy+c/QV+qJcRc+UG7pQFT" +
            "slpOFHel+f+ej+l+vzSrT+X/Ma4tKd57vkccFplLNYmjsZTP0HkhDxlJm7Rikaw6/lP0WSKwW9ep" +
            "urbryn+WzhJHl5ZWveOL18VdNI7wrPdDun6i6zFdD8mq7Zc29ytdlgDj5WdozGQ+UzkhqTZxXoUs" +
            "FRg6K9Y+r8AGvaJlDI2Y/FWVWhFHJ6jrAoWLFCqZ+5S94QTN/lABn2PVtMzf61oS59WLtwSrkx31" +
            "etTvtSOLKyRxrh+r0bhrnUWFXhn1BA4CmfsgsNk0EA2DMOaymhKm+lypJ3FeGzAmPAIr9Z16ZVbr" +
            "yn6kR5j1pmc1GtMIxHn9oi0cjUADU7vOvEKqcGU4PKmA5x+XVU3mMNWTKI1EnL+haB6LeIhkw7bW" +
            "7YQcdqRZOBMYGhtKag1IOZ2njWggBLKsIGQ9J0IMJjwBwhpGs9SWSGkG4qIa7u2+c/UCWkrwSPXm" +
            "S28ughzuCZyb8QJrL+5zyRGoPgL/B+Nop/F9kw+nAAAAAElFTkSuQmCC";
    }
    return Hotspot_Close;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ZINDEX_NOT_SET = '-99999';
var WalkthroughComponent = (function () {
    function WalkthroughComponent() {
        // members (must come first - tslint)
        this._focusElementZindexes = [];
        this.DOM_WALKTHROUGH_CLASS = "walkthrough-background";
        this.DOM_WALKTHROUGH_TRANSPARENCY_TEXT_CLASS = ".walkthrough-text";
        this.DOM_WALKTHROUGH_TIP_TEXT_CLASS = ".walkthrough-tip-text-box";
        this.DOM_WALKTHROUGH_HOLE_CLASS = ".walkthrough-hole";
        this.DOM_WALKTHROUGH_TRANSPARENCY_ICON_CLASS = ".walkthrough-icon";
        this.DOM_WALKTHROUGH_TIP_ICON_CLASS = ".walkthrough-tip-icon-text-box";
        this.DOM_WALKTHROUGH_ARROW_CLASS = ".walkthrough-arrow";
        this.DOM_WALKTHROUGH_DONE_BUTTON_CLASS = "walkthrough-done-button";
        this.DOM_TRANSCLUDE = "walkthrough-transclude";
        this.BUTTON_CAPTION_DONE = "Próximo";
        this.BUTTON_CAPTION_SKIPE = "Sair";
        this.PADDING_HOLE = 5;
        this.PADDING_ARROW_START = 5;
        this.PADDING_ARROW_MARKER = 25;
        this.isVisible = false;
        this.hasTransclude = false;
        // single_tap: string = require('../assets/Single_Tap.png');
        // double_tap: string = require('../assets/Double_Tap.png');
        // swipe_down: string = require('../assets/Swipe_Down.png');
        // swipe_left: string = require('../assets/Swipe_Left.png');
        // swipe_right: string = require('../assets/Swipe_Right.png');
        // swipe_up: string = require('../assets/Swipe_Up.png');
        // the element have been separated as ionic pro cannot handle class with very large string
        this.single_tap = new Single_Tap().single_tap;
        this.double_tap = new Double_Tap().double_tap;
        this.swipe_down = new Swipe_Down().swipe_down;
        this.swipe_left = new Swipe_Left().swipe_left;
        this.swipe_right = new Swipe_Right().swipe_right;
        this.swipe_up = new Swipe_Up().swipe_up;
        this.useButton = false;
        this.skipButton = false;
        this.hasGlow = false;
        this.isRound = false;
        this.focusElementInteractive = false;
        this.onWalkthroughShowEvent = new core.EventEmitter();
        this.onWalkthroughHideEvent = new core.EventEmitter();
        this.onWalkthroughSkip = new core.EventEmitter();
        this.onWalkthroughContentClickedEvent = new core.EventEmitter();
    }
    Object.defineProperty(WalkthroughComponent.prototype, "focusElementSelector", {
        get: /**
         * @return {?}
         */
        function () {
            return this._focusElementSelector;
        },
        set: /**
         * @param {?} focusElementSelector
         * @return {?}
         */
        function (focusElementSelector) {
            if ((!this._focusElementSelector || focusElementSelector !== this._focusElementSelector) && this.isVisible) {
                this._focusElementSelector = focusElementSelector;
                this.setFocusOnElement();
            }
            else {
                this._focusElementSelector = focusElementSelector;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WalkthroughComponent.prototype, "isActive", {
        set: /**
         * @param {?} isActive
         * @return {?}
         */
        function (isActive) {
            var _this = this;
            if (isActive) {
                this.setWalkthroughElements();
                this.isVisible = true;
                try {
                    if (this.focusElementSelector) {
                        this.setFocusOnElement();
                    }
                }
                catch (/** @type {?} */ e) {
                    console.warn('failed to focus on element prior to timeout: ' + this.focusElementSelector);
                }
                // Must timeout to make sure we have final correct coordinates after screen totally load
                if (this.focusElementSelector) {
                    setTimeout(function () {
                        _this.setFocusOnElement();
                    }, 100);
                }
                this.onWalkthroughShowEvent.emit();
            }
            else {
                this.isVisible = false;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} event
     * @return {?}
     */
    WalkthroughComponent.prototype.onResize = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.isVisible) {
            this.resizeHandler();
        }
    };
    /**
     * resize handler method
     */
    /**
     * resize handler method
     * @return {?}
     */
    WalkthroughComponent.prototype.resizeHandler = /**
     * resize handler method
     * @return {?}
     */
    function () {
        if (this.focusElementSelector && this.isVisible) {
            this.setFocusOnElement();
        }
    };
    /**
     * init the element of the walkthrough
     */
    /**
     * init the element of the walkthrough
     * @return {?}
     */
    WalkthroughComponent.prototype.setWalkthroughElements = /**
     * init the element of the walkthrough
     * @return {?}
     */
    function () {
        var _this = this;
        var /** @type {?} */ holeElements = this.element.nativeElement.querySelectorAll(this.DOM_WALKTHROUGH_HOLE_CLASS);
        this.walkthroughHoleElements = /** @type {?} */ (holeElements[0]);
        var /** @type {?} */ textClass = (this.walkthroughType === 'tip') ? this.DOM_WALKTHROUGH_TIP_TEXT_CLASS : this.DOM_WALKTHROUGH_TRANSPARENCY_TEXT_CLASS;
        this.walkthroughTextElement = /** @type {?} */ (this.element.nativeElement.querySelectorAll(textClass)[0]);
        var /** @type {?} */ iconClass = (this.walkthroughType === 'tip') ? this.DOM_WALKTHROUGH_TIP_ICON_CLASS : this.DOM_WALKTHROUGH_TRANSPARENCY_ICON_CLASS;
        this.walkthroughIconElement = /** @type {?} */ (this.element.nativeElement.querySelectorAll(iconClass)[0]);
        this.walkthroughArrowElement = /** @type {?} */ (this.element.nativeElement.querySelectorAll(this.DOM_WALKTHROUGH_ARROW_CLASS)[0]);
        setTimeout(function () {
            _this.closeIcon = new Hotspot_Close().close_icon;
        }, 100);
        this.walkthroughIcon = this.getIcon(this.walkthroughIconWanted);
        this.buttonCaption = this.buttonCaption || this.BUTTON_CAPTION_DONE;
        this.buttonSkipCaption = this.buttonSkipCaption || this.BUTTON_CAPTION_SKIPE;
        if (this.hasBackdrop === undefined) {
            this.hasBackdrop = (this.walkthroughType !== 'tip');
        }
    };
    /**
     *
     */
    /**
     *
     * @return {?}
     */
    WalkthroughComponent.prototype.ngAfterViewChecked = /**
     *
     * @return {?}
     */
    function () {
        var /** @type {?} */ translude = this.element.nativeElement.querySelectorAll('.' + this.DOM_TRANSCLUDE);
        if (translude.length > 0 && translude[0].children.length > 0) {
            this.hasTransclude = true;
        }
    };
    /**
     * Get the icon specify by the input
     * @param icon
     */
    /**
     * Get the icon specify by the input
     * @param {?} icon
     * @return {?}
     */
    WalkthroughComponent.prototype.getIcon = /**
     * Get the icon specify by the input
     * @param {?} icon
     * @return {?}
     */
    function (icon) {
        var /** @type {?} */ retval = '';
        switch (icon) {
            case ('single_tap'):
                retval = this.single_tap;
                break;
            case ('double_tap'):
                retval = this.double_tap;
                break;
            case ('swipe_down'):
                retval = this.swipe_down;
                break;
            case ('swipe_left'):
                retval = this.swipe_left;
                break;
            case ('swipe_right'):
                retval = this.swipe_right;
                break;
            case ('swipe_up'):
                retval = this.swipe_up;
                break;
            case ('arrow'):
                retval = ''; //Return nothing, using other dom element for arrow
                break;
        }
        if (retval === '' && icon && icon.length > 0) {
            retval = icon;
        }
        else {
            this.toDataURL(retval).then(function (dataUrl) {
                retval = dataUrl;
                console.log('icon :', retval);
            });
        }
        return retval;
    };
    /**
     * Convert url in blob
     * @param url
     */
    /**
     * Convert url in blob
     * @param {?} url
     * @return {?}
     */
    WalkthroughComponent.prototype.toDataURL = /**
     * Convert url in blob
     * @param {?} url
     * @return {?}
     */
    function (url) {
        return fetch(url)
            .then(function (response) { return response.blob(); })
            .then(function (blob) {
            return new Promise(function (resolve, reject) {
                var /** @type {?} */ reader = new FileReader();
                reader.onloadend = function () {
                    resolve(reader.result);
                    reader.onerror = reject;
                    reader.readAsDataURL(blob);
                };
            });
        });
    };
    /**
     * Set the text position accordint the hole and arrow position plus set the arrow
     * @param pointSubjectLeft
     * @param pointSubjectTop
     * @param pointSubjectWidth
     * @param pointSubjectHeight
     * @param paddingLeft
     */
    /**
     * Set the text position accordint the hole and arrow position plus set the arrow
     * @param {?} pointSubjectLeft
     * @param {?} pointSubjectTop
     * @param {?} pointSubjectWidth
     * @param {?} pointSubjectHeight
     * @param {?} paddingLeft
     * @return {?}
     */
    WalkthroughComponent.prototype.setArrowAndText = /**
     * Set the text position accordint the hole and arrow position plus set the arrow
     * @param {?} pointSubjectLeft
     * @param {?} pointSubjectTop
     * @param {?} pointSubjectWidth
     * @param {?} pointSubjectHeight
     * @param {?} paddingLeft
     * @return {?}
     */
    function (pointSubjectLeft, pointSubjectTop, pointSubjectWidth, pointSubjectHeight, paddingLeft) {
        var /** @type {?} */ offsetCoordinates = this.getOffsetCoordinates(this.walkthroughTextElement);
        var /** @type {?} */ startLeft = offsetCoordinates.left + offsetCoordinates.width / 2;
        var /** @type {?} */ startTop = offsetCoordinates.top + offsetCoordinates.height + this.PADDING_ARROW_START;
        var /** @type {?} */ endLeft = 0;
        var /** @type {?} */ isLine = false;
        if (Math.abs(startLeft - (pointSubjectLeft + pointSubjectWidth / 2)) < 10) {
            console.warn('Hole element and text are inline line arrow will be used');
            endLeft = pointSubjectLeft + pointSubjectWidth / 2;
            isLine = true;
        }
        else if (startLeft > pointSubjectLeft) {
            //If hole left to text set arrow to point to middle right
            endLeft = pointSubjectLeft + paddingLeft + pointSubjectWidth;
        }
        else if (startLeft < pointSubjectLeft) {
            //If hole right to text set arrow to point to middle left
            endLeft = pointSubjectLeft - paddingLeft;
        }
        var /** @type {?} */ endTop;
        if (isLine) {
            endTop = pointSubjectTop - this.PADDING_ARROW_MARKER;
        }
        else {
            endTop = pointSubjectTop + (pointSubjectHeight / 2);
        }
        var /** @type {?} */ arrowLeft, /** @type {?} */ arrowRight, /** @type {?} */ arrowTop, /** @type {?} */ arrowBottom;
        //Check if text overlaps icon or user explicitly wants text at bottom, if does, move it to bottom
        arrowLeft = (startLeft < endLeft) ? startLeft : endLeft;
        arrowRight = (startLeft < endLeft) ? endLeft : startLeft;
        arrowTop = (startTop < endTop) ? startTop : endTop;
        arrowBottom = (startTop < endTop) ? endTop : startTop;
        if (this.forceCaptionLocation === undefined && this.isItemOnText(arrowLeft, arrowTop, arrowRight, arrowBottom)) {
            this.forceCaptionLocation = 'BOTTOM';
        }
        if (this.forceCaptionLocation === 'BOTTOM') {
            if (isLine) {
                endTop = pointSubjectTop + pointSubjectHeight + this.PADDING_ARROW_MARKER;
            }
            startTop = offsetCoordinates.top - this.PADDING_ARROW_START;
        }
        var /** @type {?} */ arrowSvgDom;
        if (isLine) {
            arrowSvgDom =
                '<svg width="100%" height="100%">' +
                    '<defs>' +
                    '<marker id="arrow" markerWidth="13" markerHeight="13" refx="2" refy="6" orient="auto">' +
                    '<path d="M2,1 L2,10 L10,6 L2,2" style="fill:#fff;" />' +
                    '</marker>' +
                    '</defs>' +
                    '<line x1=' + endLeft + " y1=" + startTop + " x2=" + endLeft + " y2=" + endTop + " " +
                    'style="stroke:#fff; stroke-width: 2px; fill: none;' +
                    'marker-end: url(#arrow);"/>' +
                    '/>' +
                    '</svg>';
        }
        else {
            arrowSvgDom =
                '<svg width="100%" height="100%">' +
                    '<defs>' +
                    '<marker id="arrow" markerWidth="13" markerHeight="13" refx="2" refy="6" orient="auto">' +
                    '<path d="M2,1 L2,10 L10,6 L2,2" style="fill:#fff;" />' +
                    '</marker>' +
                    '</defs>' +
                    '<path d="M' + startLeft + ',' + startTop + ' Q' + startLeft + ',' + endTop + ' ' + endLeft + ',' + endTop + '"' +
                    'style="stroke:#fff; stroke-width: 2px; fill: none;' +
                    'marker-end: url(#arrow);"/>' +
                    '/>' +
                    '</svg>';
        }
        var /** @type {?} */ arrowElement = this.element.nativeElement.querySelector(this.DOM_WALKTHROUGH_ARROW_CLASS);
        if (arrowElement.children.length > 0) {
            arrowElement.children[0].remove();
        }
        arrowElement.insertAdjacentHTML('afterbegin', arrowSvgDom);
    };
    /**
     * Check if given icon covers text or if the text cover the hole
     * @param iconLeft
     * @param iconTop
     * @param iconRight
     * @param iconBottom
     */
    /**
     * Check if given icon covers text or if the text cover the hole
     * @param {?} iconLeft
     * @param {?} iconTop
     * @param {?} iconRight
     * @param {?} iconBottom
     * @return {?}
     */
    WalkthroughComponent.prototype.isItemOnText = /**
     * Check if given icon covers text or if the text cover the hole
     * @param {?} iconLeft
     * @param {?} iconTop
     * @param {?} iconRight
     * @param {?} iconBottom
     * @return {?}
     */
    function (iconLeft, iconTop, iconRight, iconBottom) {
        var /** @type {?} */ holeCoordinates = this.getOffsetCoordinates(this.walkthroughHoleElements);
        var /** @type {?} */ offsetCoordinates = this.getOffsetCoordinates(this.walkthroughTextElement);
        var /** @type {?} */ holeLeft = holeCoordinates.left;
        var /** @type {?} */ holeRight = holeCoordinates.left + holeCoordinates.width;
        var /** @type {?} */ holeTop = holeCoordinates.top;
        var /** @type {?} */ holeBottom = holeCoordinates.top + holeCoordinates.height;
        var /** @type {?} */ textLeft = document.body.clientWidth / 4; //needs to be calculated differently due to being a 'pre'. //offsetCoordinates.left;
        var /** @type {?} */ textRight = document.body.clientWidth / 4 * 3; //offsetCoordinates.left + offsetCoordinates.width;
        var /** @type {?} */ textTop = offsetCoordinates.top;
        var /** @type {?} */ textBottom = offsetCoordinates.top + offsetCoordinates.height;
        if (!(holeRight < textLeft ||
            holeLeft > textRight ||
            holeBottom < textTop ||
            holeTop > textBottom)) {
            return true;
        }
        return !(iconRight < textLeft ||
            iconLeft > textRight ||
            iconBottom < textTop ||
            iconTop > textBottom);
    };
    
    /**
     *
     * @param focusElement
     */
    /**
     *
     * @param {?} focusElement
     * @return {?}
     */
    WalkthroughComponent.prototype.getOffsetCoordinates = /**
     *
     * @param {?} focusElement
     * @return {?}
     */
    function (focusElement) {
        var /** @type {?} */ width;
        var /** @type {?} */ height;
        var /** @type {?} */ left;
        var /** @type {?} */ top;
        width = focusElement.offsetWidth;
        height = focusElement.offsetHeight;
        left = focusElement.getBoundingClientRect().left;
        top = focusElement.getBoundingClientRect().top;
        var /** @type {?} */ sameAncestorForFocusElementAndWalkthrough = this.getSameAncestor(focusElement);
        while (sameAncestorForFocusElementAndWalkthrough) {
            left = left - sameAncestorForFocusElementAndWalkthrough.offsetLeft;
            top = top - sameAncestorForFocusElementAndWalkthrough.offsetTop;
            sameAncestorForFocusElementAndWalkthrough = /** @type {?} */ (sameAncestorForFocusElementAndWalkthrough.offsetParent);
        }
        return { top: top, left: left, height: height, width: width };
    };
    //Check once
    /**
     * @param {?} focusElement
     * @return {?}
     */
    WalkthroughComponent.prototype.getSameAncestor = /**
     * @param {?} focusElement
     * @return {?}
     */
    function (focusElement) {
        var /** @type {?} */ retval = null;
        var /** @type {?} */ walkthroughElementParent = this.element.nativeElement.offsetParent;
        var /** @type {?} */ focusElementParent = /** @type {?} */ (focusElement.offsetParent);
        var /** @type {?} */ walkthroughAncestorIter = /** @type {?} */ (walkthroughElementParent);
        var /** @type {?} */ focusElementAncestorIter = /** @type {?} */ (focusElementParent);
        while (walkthroughAncestorIter && !retval) {
            focusElementAncestorIter = focusElementParent; //reset
            while (focusElementAncestorIter && !retval) {
                if (focusElementAncestorIter === walkthroughAncestorIter) {
                    retval = walkthroughAncestorIter;
                }
                else {
                    focusElementAncestorIter = /** @type {?} */ (focusElementAncestorIter.offsetParent);
                }
            }
            walkthroughAncestorIter = /** @type {?} */ (walkthroughAncestorIter.offsetParent);
        }
        return retval;
    };
    
    /**
     * Sets the icon displayed according to directive argument
     * @param iconLeft
     * @param iconTop
     * @param paddingLeft
     * @param paddingTop
     */
    /**
     * Sets the icon displayed according to directive argument
     * @param {?} iconLeft
     * @param {?} iconTop
     * @param {?} paddingLeft
     * @param {?} paddingTop
     * @return {?}
     */
    WalkthroughComponent.prototype.setIconAndText = /**
     * Sets the icon displayed according to directive argument
     * @param {?} iconLeft
     * @param {?} iconTop
     * @param {?} paddingLeft
     * @param {?} paddingTop
     * @return {?}
     */
    function (iconLeft, iconTop, paddingLeft, paddingTop) {
        var /** @type {?} */ offsetCoordinates = this.getOffsetCoordinates(this.walkthroughIconElement);
        var /** @type {?} */ iconHeight = offsetCoordinates.height;
        var /** @type {?} */ iconWidth = offsetCoordinates.width;
        var /** @type {?} */ iconLeftWithPadding = iconLeft + paddingLeft - (iconWidth / 4);
        var /** @type {?} */ iconTopWithPadding = iconTop + paddingTop - (iconHeight / 6);
        var /** @type {?} */ iconRight = iconLeftWithPadding + iconWidth;
        var /** @type {?} */ iconBottom = iconTopWithPadding + iconHeight;
        //Check if text overlaps icon or user explicitly wants text at bottom, if does, move it to bottom
        if (this.forceCaptionLocation === undefined && this.isItemOnText(iconLeftWithPadding, iconTopWithPadding, iconRight, iconBottom)) {
            this.forceCaptionLocation = 'BOTTOM';
        }
        var /** @type {?} */ iconLocation = 'position: absolute;' +
            'left:' + iconLeftWithPadding + 'px;' +
            'top:' + iconTopWithPadding + 'px;';
        this.walkthroughIconElement.setAttribute('style', iconLocation);
    };
    /**
     * Attempts to highlight the given element ID and set Icon to it if exists, if not use default - right under text
     */
    /**
     * Attempts to highlight the given element ID and set Icon to it if exists, if not use default - right under text
     * @return {?}
     */
    WalkthroughComponent.prototype.setElementLocations = /**
     * Attempts to highlight the given element ID and set Icon to it if exists, if not use default - right under text
     * @return {?}
     */
    function () {
        var _this = this;
        var /** @type {?} */ selectorElements = (this.focusElementSelector) ? document.querySelectorAll(this.focusElementSelector) : null;
        if (selectorElements && selectorElements.length > 0) {
            if (selectorElements.length > 1) {
                console.warn('Multiple items fit selector, displaying first visible as focus item');
            }
        }
        else {
            console.error('No element found with selector: ' + this.focusElementSelector);
            selectorElements = null;
        }
        var /** @type {?} */ htmlElement = null;
        if (selectorElements) {
            htmlElement = /** @type {?} */ (selectorElements[0]);
        }
        if (htmlElement) {
            var /** @type {?} */ offsetCoordinates = this.getOffsetCoordinates(htmlElement);
            var /** @type {?} */ width_1 = offsetCoordinates.width;
            var /** @type {?} */ height_1 = offsetCoordinates.height;
            var /** @type {?} */ left_1 = offsetCoordinates.left;
            var /** @type {?} */ top_1 = offsetCoordinates.top;
            this.setFocus(left_1, top_1, width_1, height_1);
            var /** @type {?} */ paddingLeft_1 = parseFloat(this.iconPaddingLeft);
            var /** @type {?} */ paddingTop_1 = parseFloat(this.iconPaddingTop);
            if (!paddingLeft_1) {
                paddingLeft_1 = 0;
            }
            if (!paddingTop_1) {
                paddingTop_1 = 0;
            }
            // If Gesture icon given bind it to hole as well
            if (this.walkthroughIconWanted && this.walkthroughIconWanted !== 'arrow' && this.walkthroughType === 'transparency') {
                setTimeout(function () {
                    _this.setIconAndText(left_1 + width_1 / 2, top_1 + height_1 / 2, paddingLeft_1, paddingTop_1);
                }, 200);
            }
            if (this.walkthroughIconWanted === 'arrow') {
                // Need to update text location according to conditional class added 'walkthrough-transparency-bottom'
                setTimeout(function () {
                    _this.setArrowAndText(left_1, top_1 + paddingTop_1, width_1, height_1, paddingLeft_1);
                }, 200);
            }
            // if tip mode with icon that we want to set padding to, set it
            if (this.walkthroughType === 'tip' &&
                this.walkthroughIconWanted && this.walkthroughIconWanted.length > 0 &&
                (this.iconPaddingLeft || this.iconPaddingTop)) {
                this.setTipIconPadding(this.iconPaddingLeft, this.iconPaddingTop);
            }
        }
        else {
            if (this.focusElementSelector) {
                console.info('Unable to find element requested to be focused: ' + this.focusElementSelector);
            }
            else {
                // if tip mode with icon that we want to set padding to, set it
                if (this.walkthroughType === 'tip' &&
                    this.walkthroughIconWanted && this.walkthroughIconWanted.length > 0 &&
                    (this.iconPaddingLeft || this.iconPaddingTop)) {
                    this.setTipIconPadding(this.iconPaddingLeft, this.iconPaddingTop);
                }
            }
        }
        if (this.focusElementInteractive && selectorElements) {
            for (var /** @type {?} */ i = 0; i < selectorElements.length; ++i) {
                var /** @type {?} */ selectorElement = /** @type {?} */ (selectorElements.item(i));
                if (selectorElement.style.zIndex !== '99999') {
                    this._focusElementZindexes[i] = (selectorElement.style.zIndex) ?
                        selectorElement.style.zIndex :
                        ZINDEX_NOT_SET;
                    selectorElement.style.zIndex = '99999';
                }
            }
        }
    };
    /**
     * Sets the walkthrough focus hole on given params with padding
     * @param left
     * @param top
     * @param width
     * @param height
     */
    /**
     * Sets the walkthrough focus hole on given params with padding
     * @param {?} left
     * @param {?} top
     * @param {?} width
     * @param {?} height
     * @return {?}
     */
    WalkthroughComponent.prototype.setFocus = /**
     * Sets the walkthrough focus hole on given params with padding
     * @param {?} left
     * @param {?} top
     * @param {?} width
     * @param {?} height
     * @return {?}
     */
    function (left, top, width, height) {
        var /** @type {?} */ holeDimensions = 'left:' + (left - this.PADDING_HOLE) + 'px;' +
            'top:' + (top - this.PADDING_HOLE) + 'px;' +
            'width:' + (width + (2 * this.PADDING_HOLE)) + 'px;' +
            'height:' + (height + (2 * this.PADDING_HOLE)) + 'px;';
        if (this.walkthroughHoleElements) {
            this.walkthroughHoleElements.setAttribute('style', holeDimensions);
        }
    };
    
    /**
     * Set the focus on one element
     */
    /**
     * Set the focus on one element
     * @return {?}
     */
    WalkthroughComponent.prototype.setFocusOnElement = /**
     * Set the focus on one element
     * @return {?}
     */
    function () {
        this.setElementLocations();
    };
    /**
     * Send an output event
     */
    /**
     * Send an output event
     * @return {?}
     */
    WalkthroughComponent.prototype.onWalkthroughContentClicked = /**
     * Send an output event
     * @return {?}
     */
    function () {
        this.onWalkthroughContentClickedEvent.emit();
    };
    /**
     * Set the padding of the tip icon
     * @param iconPaddingLeft
     * @param iconPaddingTop
     */
    /**
     * Set the padding of the tip icon
     * @param {?} iconPaddingLeft
     * @param {?} iconPaddingTop
     * @return {?}
     */
    WalkthroughComponent.prototype.setTipIconPadding = /**
     * Set the padding of the tip icon
     * @param {?} iconPaddingLeft
     * @param {?} iconPaddingTop
     * @return {?}
     */
    function (iconPaddingLeft, iconPaddingTop) {
        var /** @type {?} */ iconLocation = '';
        if (iconPaddingTop) {
            iconLocation += 'margin-top:' + iconPaddingTop + 'px;';
        }
        if (iconPaddingLeft) {
            iconLocation += 'right:' + iconPaddingLeft + '%;';
        }
        this.walkthroughIconElement.setAttribute('style', iconLocation);
    };
    /**
     * Close the walkthrough
     * @param event
     */
    /**
     * Close the walkthrough
     * @param {?} event
     * @return {?}
     */
    WalkthroughComponent.prototype.onCloseClicked = /**
     * Close the walkthrough
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if ((!this.useButton) ||
            (event.currentTarget.className.indexOf(this.DOM_WALKTHROUGH_DONE_BUTTON_CLASS) > -1)) {
            this.onWalkthroughHideEvent.emit();
            this.closeWalkthrough();
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    WalkthroughComponent.prototype.onSkipeClicked = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if ((!this.skipButton) ||
            (event.currentTarget.className.indexOf(this.DOM_WALKTHROUGH_DONE_BUTTON_CLASS) > -1)) {
            this.onWalkthroughSkip.emit();
            this.closeWalkthrough();
        }
    };
    /**
     * close the walkthgrough and sen an output event
     */
    /**
     * close the walkthgrough and sen an output event
     * @return {?}
     */
    WalkthroughComponent.prototype.closeWalkthrough = /**
     * close the walkthgrough and sen an output event
     * @return {?}
     */
    function () {
        // to avoid disturbance with other SVG it is remove from the DOM
        var /** @type {?} */ arrowElement = this.element.nativeElement.querySelector(this.DOM_WALKTHROUGH_ARROW_CLASS);
        if (arrowElement.children.length > 0) {
            arrowElement.children[0].remove();
        }
        this.isVisible = false;
        // reset z-index on selectedElement
        var /** @type {?} */ selectedElements = (this.focusElementSelector) ? document.querySelectorAll(this.focusElementSelector) : null;
        if (selectedElements) {
            for (var /** @type {?} */ i = 0; i < selectedElements.length; ++i) {
                var /** @type {?} */ curElement = /** @type {?} */ (selectedElements.item(i));
                console.log("focus elem " + i + " z-index is " + this._focusElementZindexes[i] + " ");
                if (this._focusElementZindexes[i] !== ZINDEX_NOT_SET) {
                    curElement.style.zIndex = this._focusElementZindexes[i];
                }
                else {
                    curElement.style.zIndex = 'auto';
                }
            }
            this._focusElementZindexes = [];
        }
    };
    WalkthroughComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'walkthrough',
                    template: "\n  <div #walkthroughcomponent class=\"{{DOM_WALKTHROUGH_CLASS}}\" [hidden]=\"!isVisible\" [ngClass]=\"{'walkthrough-active': isVisible}\" (click)=\"onCloseClicked($event)\">\n  <div class=\"walkthrough-container walkthrough-container-transparency\" [hidden]=\"walkthroughType!=='transparency'\">\n    <div class=\"walkthrough-inner\">\n      <div class=\"{{DOM_TRANSCLUDE}}\">\n        <ng-content select=\"img\"></ng-content>\n      </div>\n      <div class=\"walkthrough-non-transclude-template\" [hidden]=\"hasTransclude\">\n        <div class=\"walkthrough-text-container\" [ngClass]=\"{'walkthrough-top': (!forceCaptionLocation || forceCaptionLocation==='TOP'), 'walkthrough-bottom': forceCaptionLocation==='BOTTOM'}\">\n          <pre class=\"walkthrough-element walkthrough-text\" [innerHTML]=\"mainCaption\"></pre>\n          <img *ngIf=\"walkthroughHeroImage\" class=\"walkthrough-element walkthrough-hero-image\" src=\"{{walkthroughHeroImage}}\" (click)=\"onWalkthroughContentClicked()\">\n        </div>\n        <img class=\"walkthrough-element walkthrough-icon\" [hidden]=\"walkthroughIconWanted && walkthroughIconWanted==='arrow'\" src=\"{{walkthroughIcon}}\">\n        <div class=\"walkthrough-element walkthrough-arrow\" [hidden]=\"walkthroughIconWanted!=='arrow'\"></div>\n        <button class=\"walkthrough-element walkthrough-button-positive walkthrough-done-button\" type=\"button\" *ngIf=\"useButton\" (click)=\"onCloseClicked($event)\">\n          {{buttonCaption}}\n        </button>\n        <button class=\"walkthrough-element walkthrough-button-positive walkthrough-skip-button\" type=\"button\" *ngIf=\"useButton\" (click)=\"onSkipeClicked($event)\">\n          {{buttonSkipCaption}}\n        </button>\n      </div>\n    </div>\n  </div>\n  <div class=\"walkthrough-container walkthrough-container-tip\" [hidden]=\"walkthroughType!=='tip'\">\n    <div class=\"walkthrough-inner\" [ngClass]=\"{'walkthrough-top': ((!forceCaptionLocation && !tipLocation) || forceCaptionLocation==='TOP' || tipLocation =='TOP'), 'walkthrough-bottom': (forceCaptionLocation=='BOTTOM' || tipLocation =='BOTTOM')}\">\n      <img class=\"walkthrough-element walkthrough-tip-icon-text-box\" [ngClass]=\"{'walkthrough-tip-icon-image-front': tipIconLocation==='FRONT', 'walkthrough-tip-icon-image-back': tipIconLocation=='BACK'}\"\n        [hidden]=\"walkthroughIconWanted && walkthroughIconWanted==='arrow'\" src=\"{{walkthroughIcon}}\" alt=\"icon\">\n      <button class=\"walkthrough-done-button walkthrough-tip-done-button-text-box\" [ngClass]=\"{'walkthrough-tip-done-button-no-icon': !icon}\"\n        type=\"button\" *ngIf=\"useButton\" (click)=\"onCloseClicked($event)\">\n        <img class=\"walkthrough-tip-button-image-text-box\" src=\"{{closeIcon}}\" alt=\"x\">\n      </button>\n      <div class=\"walkthrough-element walkthrough-tip-text-box\" (click)=\"onWalkthroughContentClicked()\" [ngClass]=\"{'walkthrough-tip-text-box-color-black': tipColor=='BLACK', 'walkthrough-tip-text-box-color-white': tipColor=='WHITE'}\">\n        <pre [innerHTML]=\"mainCaption\"></pre>\n        <img *ngIf=\"walkthroughHeroImage\" class=\"walkthrough-element walkthrough-hero-image\" src=\"{{walkthroughHeroImage}}\">\n        <div class=\"{{DOM_TRANSCLUDE}}\">\n          <ng-content select=\"img\"></ng-content>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div [hidden]=\"!hasBackdrop\" class=\"walkthrough-hole\" [ngClass]=\"{'walkthrough-hole-round': isRound}\" (click)=\"onWalkthroughContentClicked()\">\n  </div>\n  <div [hidden]=\"!(hasGlow && (focusElementSelector))\" class=\"walkthrough-hole walkthrough-hole-glow\" [ngClass]=\"{'walkthrough-hole-round': isRound}\">\n  </div>\n</div>\n",
                    styles: [
                        "\n  .walkthrough-hole-glow {\n      position: absolute;\n      outline: none;\n      border: 2px solid #FFFF66 !important;\n      box-shadow: 0 0 36px #FFFF66 !important;\n      -webkit-appearance: none;\n      box-sizing: border-box;\n  }\n\n  .walkthrough-background {\n      position: absolute;\n      top: 0;\n      bottom: 0;\n      left: 0;\n      right: 0;\n      background-color: initial;\n      text-align: center;\n      -webkit-transition: height 0s ease-out .2s, opacity .2s ease-out;\n      -moz-transition: height 0s ease-out .2s, opacity .2s ease-out;\n      -o-transition: height 0s ease-out .2s, opacity .2s ease-out;\n      transition: height 0s ease-out .2s, opacity .2s ease-out;\n      opacity: 0;\n      height: 0;\n      overflow: hidden;\n      z-index: 1000;\n  }\n\n  .walkthrough-hole {\n      position: absolute;\n      -moz-box-shadow: 0 0 0 1997px rgba(0, 0, 0, 0.8);\n      -webkit-box-shadow: 0 0 0 1997px rgba(0, 0, 0, 0.8);\n      box-shadow: 0 0 0 1997px rgba(0, 0, 0, 0.8);\n      -webkit-appearance: none;\n  }\n\n  .walkthrough-element.walkthrough-text {\n      margin-top: 10%;\n      width: 50%;\n      color: #fff;\n      text-align: center;\n  }\n\n  .walkthrough-element.walkthrough-done-button {\n      position: absolute;\n      bottom: 30px;\n      height: 30px;\n      width: 80px;\n      display: inline-block;\n      right: 30px;\n      margin: 0 auto;\n  }\n\n  .walkthrough-element.walkthrough-skip-button {\n    position: absolute;\n    bottom: 30px;\n    height: 30px;\n    width: 80px;\n    display: inline-block;\n    left: 30px;\n    margin: 0 auto;\n}\n\n  .walkthrough-button-positive {\n      border-color: #0c63ee;\n      background-color: #387ef5;\n      color: #fff;\n  }\n\n  .walkthrough-button-positive:hover {\n      color: #fff;\n      text-decoration: none;\n  }\n\n  .walkthrough-button-positive.active {\n      border-color: #0c63ee;\n      background-color: #0c63ee;\n      box-shadow: inset 0 1px 4px rgba(0, 0, 0, 0.1);\n  }\n\n  .walkthrough-element.walkthrough-icon {\n      height: 200px;\n  }\n\n  .walkthrough-element.walkthrough-arrow {\n      color: #ffffff;\n      position: absolute;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n  }\n\n  .walkthrough-element {\n      z-index: 1001;\n      position: relative;\n      margin-left: auto;\n      margin-right: auto;\n  }\n\n  .walkthrough-background.walkthrough-active {\n      -webkit-transition: opacity .2s ease-out;\n      -moz-transition: opacity .2s ease-out;\n      -o-transition: opacity .2s ease-out;\n      transition: opacity .2s ease-out;\n      opacity: 1;\n      height: 100%;\n      pointer-events: all;\n  }\n\n  .walkthrough-transclude {\n      position: relative;\n      z-index: 2;\n      width: 100%;\n      height: 100%;\n  }\n\n  .walkthrough-hole-round {\n      border-radius: 200px;\n  }\n\n  .walkthrough-tip-text-box {\n      /*top: 128px;*/\n      position: relative;\n      margin-left: 16px;\n      margin-right: 16px;\n      border: 2px solid;\n      border-radius: 35px;\n      padding: 14px;\n      word-break: break-all !important;\n\n      /*margin-top: 0;*/\n      /*margin-bottom: 0;*/\n  }\n\n  .walkthrough-container {\n      float: left;\n      position: relative;\n      height: 100%;\n      width: 100%;\n  }\n\n  .walkthrough-inner {\n      z-index: 3;\n      width: 100%;\n  }\n\n  .walkthrough-container-transparency > .walkthrough-inner {\n      height: 100%;\n  }\n\n  .walkthrough-text-container {\n      position: absolute;\n      width: 100%;\n  }\n\n  .walkthrough-container-tip .walkthrough-top, .walkthrough-container-transparency .walkthrough-top {\n      top: 15px;\n  }\n\n  .walkthrough-container-tip .walkthrough-bottom {\n      bottom: 0;\n  }\n\n  /* take 'done' button into consideration */\n  .walkthrough-container-transparency .walkthrough-bottom {\n      bottom: 70px;\n  }\n\n  .walkthrough-tip-icon-image-front {\n      z-index: 1002;\n  }\n\n  .walkthrough-tip-icon-image-back {\n      z-index: 999;\n  }\n\n  .walkthrough-tip-icon-text-box {\n      height: 142px;\n\n      /*right: 9%;*/\n      position: relative;\n      margin-bottom: -32px;\n      margin-right: -250px;\n\n      /*bottom: 70px;*/\n  }\n  \n  .walkthrough-tip-done-button-text-box {\n      /*top: 109px;*/\n      /*bottom: 59px;*/\n      position: relative;\n      z-index: 1002;\n\n      /*right: -7px;*/\n      margin-top: 107px;\n      background-color: transparent;\n      border: 0;\n      float: right;\n  }\n\n  .walkthrough-tip-done-button-no-icon {\n      margin-top: -13px !important;\n  }\n\n  .walkthrough-tip-button-image-text-box {\n      width: 42px;\n      height: 42px;\n  }\n\n  .walkthrough-tip-text-box-color-black {\n      border-color: #ffffff;\n      background-color: #000000;\n      color: #ffffff;\n  }\n\n  .walkthrough-tip-text-box-color-white {\n      border-color: #000000;\n      background-color: #ffffff;\n  }\n\n  .walkthrough-hero-image {\n      margin-top: 15px;\n  }\n\n  .walkthrough-transclude img {\n      height: 100vh;\n      width: 100%;\n  }\n\n  pre {\n      white-space: pre-wrap;\n  }\n  "
                    ]
                },] },
    ];
    /** @nocollapse */
    WalkthroughComponent.ctorParameters = function () { return []; };
    WalkthroughComponent.propDecorators = {
        "walkthroughType": [{ type: core.Input, args: ['walkthrough-type',] },],
        "buttonCaption": [{ type: core.Input, args: ['button-caption',] },],
        "buttonSkipCaption": [{ type: core.Input, args: ['button-skipe-caption',] },],
        "useButton": [{ type: core.Input, args: ['use-button',] },],
        "skipButton": [{ type: core.Input, args: ['skip-button',] },],
        "mainCaption": [{ type: core.Input, args: ['main-caption',] },],
        "walkthroughIconWanted": [{ type: core.Input, args: ['icon',] },],
        "walkthroughHeroImage": [{ type: core.Input, args: ['walkthrough-hero-image',] },],
        "hasGlow": [{ type: core.Input, args: ['has-glow',] },],
        "forceCaptionLocation": [{ type: core.Input, args: ['force-caption-location',] },],
        "hasBackdrop": [{ type: core.Input, args: ['has-backdrop',] },],
        "isRound": [{ type: core.Input, args: ['is-round',] },],
        "iconPaddingLeft": [{ type: core.Input, args: ['icon-padding-left',] },],
        "iconPaddingTop": [{ type: core.Input, args: ['icon-padding-top',] },],
        "tipIconLocation": [{ type: core.Input, args: ['tip-icon-location',] },],
        "tipColor": [{ type: core.Input, args: ['tip-color',] },],
        "focusElementSelector": [{ type: core.Input, args: ['focus-element-selector',] },],
        "focusElementInteractive": [{ type: core.Input, args: ['focus-element-interactive',] },],
        "isActive": [{ type: core.Input, args: ['is-active',] },],
        "onWalkthroughShowEvent": [{ type: core.Output, args: ['on-walkthrough-show',] },],
        "onWalkthroughHideEvent": [{ type: core.Output, args: ['on-walkthrough-hide',] },],
        "onWalkthroughSkip": [{ type: core.Output, args: ['on-walkthrough-skip',] },],
        "onWalkthroughContentClickedEvent": [{ type: core.Output, args: ['on-walkthrough-content-clicked',] },],
        "onResize": [{ type: core.HostListener, args: ['window:resize', ['$event'],] },],
        "element": [{ type: core.ViewChild, args: ['walkthroughcomponent',] },],
    };
    return WalkthroughComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
// Consider registering providers using a forRoot() method
// when the module exports components, directives or pipes that require sharing the same providers instances.
// Consider registering providers also using a forChild() method
// when they requires new providers instances or different providers in child modules.
var WalkthroughModule = (function () {
    function WalkthroughModule() {
    }
    /**
     * Use in AppModule: new instance of SumService.
     * @return {?}
     */
    WalkthroughModule.forRoot = /**
     * Use in AppModule: new instance of SumService.
     * @return {?}
     */
    function () {
        return {
            ngModule: WalkthroughModule,
            providers: []
        };
    };
    /**
     * Use in features modules with lazy loading: new instance of SumService.
     * @return {?}
     */
    WalkthroughModule.forChild = /**
     * Use in features modules with lazy loading: new instance of SumService.
     * @return {?}
     */
    function () {
        return {
            ngModule: WalkthroughModule,
            providers: []
        };
    };
    WalkthroughModule.decorators = [
        { type: core.NgModule, args: [{
                    declarations: [
                        WalkthroughComponent
                    ],
                    imports: [
                        common.CommonModule,
                        BrowserModule
                    ],
                    exports: [
                        WalkthroughComponent
                    ]
                },] },
    ];
    /** @nocollapse */
    WalkthroughModule.ctorParameters = function () { return []; };
    return WalkthroughModule;
}());

exports.WalkthroughModule = WalkthroughModule;
exports.ɵa = WalkthroughComponent;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=walkthrough.umd.js.map
