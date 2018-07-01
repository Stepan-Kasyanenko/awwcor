webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"app/modules/draw/draw.module": [
		"./src/app/modules/draw/draw.module.ts"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"main\">\n  <div class=\"main__inner\">\n    <router-outlet></router-outlet>\n  </div>\n</section>\n\n\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = ".main {\n  width: 100%;\n  min-height: 100%; }\n  .main .main__inner {\n    padding: 32px; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/fesm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_cookie__ = __webpack_require__("./node_modules/ngx-cookie/fesm5/ngx-cookie.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing__ = __webpack_require__("./src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modules_draw_draw_module__ = __webpack_require__("./src/app/modules/draw/draw.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// routing

// modules

// components

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */].withServerTransition({ appId: 'serverApp' }),
                __WEBPACK_IMPORTED_MODULE_2_ngx_cookie__["a" /* CookieModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4__modules_draw_draw_module__["DrawModule"],
                __WEBPACK_IMPORTED_MODULE_3__app_routing__["a" /* appRouting */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appRouting; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/fesm5/router.js");

var appRoutes = [
    {
        path: '',
        loadChildren: 'app/modules/draw/draw.module#DrawModule',
    },
    { path: '**', redirectTo: '/' },
];
var appRouting = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(appRoutes, { useHash: true });


/***/ }),

/***/ "./src/app/modules/draw/classes/ConnectorClass.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnectorClass; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_resizer_ResizersClass__ = __webpack_require__("./src/app/modules/draw/classes/common/resizer/ResizersClass.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_resizer_ResizerType__ = __webpack_require__("./src/app/modules/draw/classes/common/resizer/ResizerType.ts");


var ConnectorClass = /** @class */ (function () {
    function ConnectorClass(workspace, p1, p2) {
        if (p1 === void 0) { p1 = { x: 5, y: 20 }; }
        if (p2 === void 0) { p2 = { x: 100, y: 20 }; }
        var _this = this;
        this.workspace = workspace;
        this.p1 = p1;
        this.p2 = p2;
        this.minLength = 15;
        this.workX = 0;
        this.workY = 0;
        //
        //
        // createElement(): SVGLineElement {
        //   const $line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        //   $line.setAttribute('stroke', 'gray');
        //   $line.setAttribute('stroke-width', '3');
        //   return $line;
        // }
        this.shiftX = 0;
        this.shiftY = 0;
        this.$element = this.createElement();
        this.resizers = new __WEBPACK_IMPORTED_MODULE_0__common_resizer_ResizersClass__["a" /* ResizersClass */](this, [
            __WEBPACK_IMPORTED_MODULE_1__common_resizer_ResizerType__["a" /* ResizerType */].L,
            __WEBPACK_IMPORTED_MODULE_1__common_resizer_ResizerType__["a" /* ResizerType */].R
        ]);
        this.resizers.resizers.forEach(function (f) { return _this.workspace.$element.appendChild(f.$element); });
        this.reposition();
        this.setCursor();
        this.addEvents();
        var rect = this.workspace.$element.getBoundingClientRect();
        this.workX = rect.left;
        this.workY = rect.top;
    }
    ConnectorClass.prototype.createElement = function () {
        var $line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        $line.setAttribute('stroke', 'gray');
        $line.setAttribute('stroke-width', '3');
        return $line;
    };
    ConnectorClass.prototype.addEvents = function () {
        var _this = this;
        var bindMoveHandler = this.moveFigureHandler.bind(this);
        this.$element.addEventListener('mousedown', function (e) {
            _this.shiftX = e.pageX - _this.workX - _this.p1.x;
            _this.shiftY = e.pageY - _this.workY - _this.p1.y;
            _this.workspace.$element.addEventListener('mousemove', bindMoveHandler, true);
        });
        this.workspace.$element.addEventListener('mouseup', function () {
            _this.workspace.$element.removeEventListener('mousemove', bindMoveHandler, true);
            _this.shiftX = 0;
            _this.shiftY = 0;
        });
        this.workspace.$element.addEventListener('mouseleave', function () {
            _this.workspace.$element.removeEventListener('mousemove', bindMoveHandler, true);
            _this.shiftX = 0;
            _this.shiftY = 0;
        });
        this.resizers.resizers.forEach(function (f) {
            var moveResizerHandlerBind = function (ev) {
                _this.moveResizerHandler(ev, f);
            };
            f.$element.addEventListener('mousedown', function (e) {
                _this.workspace.$element.addEventListener('mousemove', moveResizerHandlerBind, true);
            });
            _this.workspace.$element.addEventListener('mouseup', function () {
                _this.workspace.$element.removeEventListener('mousemove', moveResizerHandlerBind, true);
            });
            _this.workspace.$element.addEventListener('mouseleave', function () {
                _this.workspace.$element.removeEventListener('mousemove', moveResizerHandlerBind, true);
            });
        });
    };
    ConnectorClass.prototype.moveFigureHandler = function (e) {
        var offsetX = e.pageX - this.workX;
        var offsetY = e.pageY - this.workY;
        var nx1 = offsetX - this.shiftX;
        var ny1 = offsetY - this.shiftY;
        var nx2 = offsetX + (this.p2.x - this.p1.x) - this.shiftX;
        var ny2 = offsetY + (this.p2.y - this.p1.y) - this.shiftY;
        this.p1.x = nx1;
        this.p1.y = ny1;
        this.p2.x = nx2;
        this.p2.y = ny2;
        if (this.onMove) {
            var rect = this.workspace.$element.getBoundingClientRect();
            this.onMove({ pageX: this.p1.x + rect.left, pageY: this.p1.y + rect.top }, __WEBPACK_IMPORTED_MODULE_1__common_resizer_ResizerType__["a" /* ResizerType */].L, false);
            this.onMove({ pageX: this.p2.x + rect.left, pageY: this.p2.y + rect.top }, __WEBPACK_IMPORTED_MODULE_1__common_resizer_ResizerType__["a" /* ResizerType */].R, false);
        }
        this.reposition();
    };
    ConnectorClass.prototype.moveResizerHandler = function (e, resizer) {
        var nx = e.pageX - this.workX + resizer.size / 2;
        var ny = e.pageY - this.workY + resizer.size / 2;
        if (resizer.type === __WEBPACK_IMPORTED_MODULE_1__common_resizer_ResizerType__["a" /* ResizerType */].L) {
            this.setLeftPoint(nx, ny);
        }
        if (resizer.type === __WEBPACK_IMPORTED_MODULE_1__common_resizer_ResizerType__["a" /* ResizerType */].R) {
            this.setRightPoint(nx, ny);
        }
        if (this.onMove)
            this.onMove({ pageX: e.pageX, pageY: e.pageY }, resizer.type, true);
        this.reposition();
    };
    ConnectorClass.prototype.setLeftPoint = function (x, y, isPage) {
        var distance = Math.sqrt(Math.pow(x - this.p2.x, 2) + Math.pow(y - this.p2.y, 2));
        if (distance < this.minLength)
            return;
        if (isPage) {
            var rect = this.workspace.$element.getBoundingClientRect();
            x = x - rect.left;
            y = y - rect.top;
        }
        this.p1.x = x;
        this.p1.y = y;
    };
    ConnectorClass.prototype.setRightPoint = function (x, y, isPage) {
        var distance = Math.sqrt(Math.pow(x - this.p1.x, 2) + Math.pow(y - this.p2.y, 2));
        if (distance < this.minLength)
            return;
        if (isPage) {
            var rect = this.workspace.$element.getBoundingClientRect();
            x = x - rect.left;
            y = y - rect.top;
        }
        this.p2.x = x;
        this.p2.y = y;
    };
    ConnectorClass.prototype.reposition = function () {
        this.$element.setAttribute('x1', this.p1.x + '');
        this.$element.setAttribute('y1', this.p1.y + '');
        this.$element.setAttribute('x2', this.p2.x + '');
        this.$element.setAttribute('y2', this.p2.y + '');
        this.leftPosition();
        this.rightPosition();
    };
    ConnectorClass.prototype.leftPosition = function () {
        var resizer = this.resizers.resizers[0];
        resizer.$element.setAttribute('x', (this.p1.x - resizer.size / 2) + '');
        resizer.$element.setAttribute('y', (this.p1.y - resizer.size / 2) + '');
    };
    ConnectorClass.prototype.rightPosition = function () {
        var resizer = this.resizers.resizers[1];
        resizer.$element.setAttribute('x', (this.p2.x - resizer.size / 2) + '');
        resizer.$element.setAttribute('y', (this.p2.y - resizer.size / 2) + '');
    };
    Object.defineProperty(ConnectorClass.prototype, "selected", {
        get: function () {
            return this._selected;
        },
        set: function (val) {
            this._selected = val;
            this.resizers.selected = val;
        },
        enumerable: true,
        configurable: true
    });
    ConnectorClass.prototype.setCursor = function () {
        this.$element.style.cursor = 'move';
    };
    return ConnectorClass;
}());



/***/ }),

/***/ "./src/app/modules/draw/classes/WorkspaceClass.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkspaceClass; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_ElementClass__ = __webpack_require__("./src/app/modules/draw/classes/common/ElementClass.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_resizer_ResizerType__ = __webpack_require__("./src/app/modules/draw/classes/common/resizer/ResizerType.ts");


var WorkspaceClass = /** @class */ (function () {
    function WorkspaceClass($element) {
        this.$element = $element;
        this.elements = [];
        this.connectDistance = 20;
        this.addEvents();
    }
    WorkspaceClass.prototype.addEvents = function () {
        var _this = this;
        this.$element.addEventListener('mousedown', function (e) {
            if (e.target === _this.$element) {
                _this.removeSelected();
            }
            else {
                var element = _this.elements.find(function (f) { return f.$element === e.target || f.$element === e.target['parentElement']; });
                _this.setSelected(element);
            }
        });
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Delete') {
                _this.remove();
            }
        });
    };
    WorkspaceClass.prototype.removeSelected = function () {
        if (this.selectedEl) {
            this.selectedEl.selected = false;
            this.selectedEl = null;
        }
    };
    WorkspaceClass.prototype.setSelected = function (element) {
        if (element) {
            this.removeSelected();
            this.selectedEl = element;
            this.selectedEl.selected = true;
        }
    };
    WorkspaceClass.prototype.add = function (element) {
        var _this = this;
        this.$element.appendChild(element.$element);
        this.elements.push(element);
        var shape = element;
        if (shape)
            shape.reposition();
        var connector = element;
        if (connector) {
            connector.reposition();
            connector.onMove = function (point, type, isConnect) {
                for (var _i = 0, _a = _this.elements.filter(function (f) { return f instanceof __WEBPACK_IMPORTED_MODULE_0__common_ElementClass__["a" /* ElementClass */]; }); _i < _a.length; _i++) {
                    var elem = _a[_i];
                    var el = elem;
                    var smallestDistance = Number.MAX_VALUE;
                    var smallestRes = null;
                    for (var _b = 0, _c = el.resizers.resizers; _b < _c.length; _b++) {
                        var res = _c[_b];
                        var distance = Math.sqrt(Math.pow(res.pageX - point.pageX, 2) + Math.pow(res.pageY - point.pageY, 2));
                        res.removeConnector(connector, type);
                        if (distance < smallestDistance) {
                            smallestDistance = distance;
                            smallestRes = res;
                        }
                    }
                    if (smallestDistance <= _this.connectDistance && isConnect) {
                        var rect = _this.$element.getBoundingClientRect();
                        if (type === __WEBPACK_IMPORTED_MODULE_1__common_resizer_ResizerType__["a" /* ResizerType */].L) {
                            connector.p1.x = smallestRes.pageX - rect.left + smallestRes.size / 2;
                            connector.p1.y = smallestRes.pageY - rect.top + smallestRes.size / 2;
                            smallestRes.addConnector(connector, __WEBPACK_IMPORTED_MODULE_1__common_resizer_ResizerType__["a" /* ResizerType */].L);
                        }
                        if (type === __WEBPACK_IMPORTED_MODULE_1__common_resizer_ResizerType__["a" /* ResizerType */].R) {
                            connector.p2.x = smallestRes.pageX - rect.left + smallestRes.size / 2;
                            connector.p2.y = smallestRes.pageY - rect.top + smallestRes.size / 2;
                            smallestRes.addConnector(connector, __WEBPACK_IMPORTED_MODULE_1__common_resizer_ResizerType__["a" /* ResizerType */].R);
                        }
                        connector.reposition();
                    }
                }
            };
        }
    };
    WorkspaceClass.prototype.remove = function () {
        if (!this.selectedEl)
            return;
        var ind = this.elements.indexOf(this.selectedEl);
        if (ind === -1)
            return;
        this.$element.removeChild(this.selectedEl.$element);
        this.elements.splice(ind, 1);
        this.selectedEl.selected = false;
        this.selectedEl = null;
    };
    return WorkspaceClass;
}());



/***/ }),

/***/ "./src/app/modules/draw/classes/common/ContainerClass.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContainerClass; });
var ContainerClass = /** @class */ (function () {
    function ContainerClass(options) {
        if (options === void 0) { options = {}; }
        this.$element = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        this.$element.style.overflow = 'visible';
        this._x = options.x || 0;
        this._y = options.y || 0;
        this.width = options.width;
        this.height = options.height;
    }
    ContainerClass.prototype.parent = function (val) {
    };
    ContainerClass.prototype.position = function () {
    };
    Object.defineProperty(ContainerClass.prototype, "width", {
        get: function () {
            return +this.$element.getBoundingClientRect().width;
        },
        set: function (val) {
            if (val)
                this.$element.setAttribute('width', Math.max(val, 5) + '');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContainerClass.prototype, "height", {
        get: function () {
            return +this.$element.getBoundingClientRect().height;
        },
        set: function (val) {
            if (val)
                this.$element.setAttribute('height', Math.max(val, 5) + '');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContainerClass.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (v) {
            this._x = v;
            this.$element.setAttribute('x', this._x + '');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContainerClass.prototype, "y", {
        get: function () {
            return this._y;
        },
        set: function (v) {
            this._y = v;
            this.$element.setAttribute('y', this._y + '');
        },
        enumerable: true,
        configurable: true
    });
    ContainerClass.prototype.rotate = function (angle, x, y) {
        this.$element.setAttribute('transform', "rotate(" + angle + " " + x + " " + y + ")");
    };
    return ContainerClass;
}());



/***/ }),

/***/ "./src/app/modules/draw/classes/common/ElementClass.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElementClass; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ContainerClass__ = __webpack_require__("./src/app/modules/draw/classes/common/ContainerClass.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__resizer_ResizersClass__ = __webpack_require__("./src/app/modules/draw/classes/common/resizer/ResizersClass.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__resizer_ResizerType__ = __webpack_require__("./src/app/modules/draw/classes/common/resizer/ResizerType.ts");



var ElementClass = /** @class */ (function () {
    function ElementClass(workspace, figure, point) {
        var _this = this;
        this.workspace = workspace;
        this.workX = 0;
        this.workY = 0;
        this._selected = false;
        this.shiftX = 0;
        this.shiftY = 0;
        this.container = new __WEBPACK_IMPORTED_MODULE_0__ContainerClass__["a" /* ContainerClass */]({});
        this.$element = this.container.$element;
        this.container._parent = this;
        this.figure = figure;
        this.figure.parent(this.container);
        this.resizers = new __WEBPACK_IMPORTED_MODULE_1__resizer_ResizersClass__["a" /* ResizersClass */](this.figure, [
            __WEBPACK_IMPORTED_MODULE_2__resizer_ResizerType__["a" /* ResizerType */].LT,
            __WEBPACK_IMPORTED_MODULE_2__resizer_ResizerType__["a" /* ResizerType */].T,
            __WEBPACK_IMPORTED_MODULE_2__resizer_ResizerType__["a" /* ResizerType */].RT,
            __WEBPACK_IMPORTED_MODULE_2__resizer_ResizerType__["a" /* ResizerType */].R,
            __WEBPACK_IMPORTED_MODULE_2__resizer_ResizerType__["a" /* ResizerType */].RB,
            __WEBPACK_IMPORTED_MODULE_2__resizer_ResizerType__["a" /* ResizerType */].B,
            __WEBPACK_IMPORTED_MODULE_2__resizer_ResizerType__["a" /* ResizerType */].LB,
            __WEBPACK_IMPORTED_MODULE_2__resizer_ResizerType__["a" /* ResizerType */].L
        ]);
        this.resizers.resizers.forEach(function (f) { return _this.container.$element.appendChild(f.$element); });
        this.rotates = new RotatesClass(this.figure);
        this.rotates.rotates.forEach(function (f) { return _this.container.$element.appendChild(f.$element); });
        this.container.x = point.x;
        this.container.y = point.y;
        this.addEvents();
        this.selected = false;
        var rect = this.workspace.$element.getBoundingClientRect();
        this.workX = rect.left;
        this.workY = rect.top;
    }
    ElementClass.prototype.addEvents = function () {
        var _this = this;
        var bindMoveHandler = this.moveFigureHandler.bind(this);
        this.figure.$element.addEventListener('mousedown', function (e) {
            _this.shiftX = e.pageX - _this.workX - _this.container.x;
            _this.shiftY = e.pageY - _this.workY - _this.container.y;
            _this.workspace.$element.addEventListener('mousemove', bindMoveHandler, true);
        });
        this.workspace.$element.addEventListener('mouseup', function () {
            _this.workspace.$element.removeEventListener('mousemove', bindMoveHandler, true);
            _this.shiftX = 0;
            _this.shiftY = 0;
        });
        this.workspace.$element.addEventListener('mouseleave', function () {
            _this.workspace.$element.removeEventListener('mousemove', bindMoveHandler, true);
            _this.shiftX = 0;
            _this.shiftY = 0;
        });
        this.resizers.resizers.forEach(function (f) {
            var moveResizerHandlerBind = function (ev) {
                _this.moveResizerHandler(ev, f);
            };
            f.$element.addEventListener('mousedown', function (e) {
                _this.workspace.$element.addEventListener('mousemove', moveResizerHandlerBind, true);
            });
            _this.workspace.$element.addEventListener('mouseup', function () {
                _this.workspace.$element.removeEventListener('mousemove', moveResizerHandlerBind, true);
            });
            _this.workspace.$element.addEventListener('mouseleave', function () {
                _this.workspace.$element.removeEventListener('mousemove', moveResizerHandlerBind, true);
            });
        });
        this.rotates.rotates.forEach(function (f) {
            var moveHandlerBind = function (ev) {
                _this.moveRotateHandler(ev, f);
            };
            f.$element.addEventListener('mousedown', function (e) {
                _this.shiftX = e.pageX - _this.workX;
                _this.shiftY = e.pageY - _this.workY;
                _this.workspace.$element.addEventListener('mousemove', moveHandlerBind, true);
            });
            _this.workspace.$element.addEventListener('mouseup', function () {
                _this.workspace.$element.removeEventListener('mousemove', moveHandlerBind, true);
                _this.shiftX = 0;
                _this.shiftY = 0;
            });
            _this.workspace.$element.addEventListener('mouseleave', function () {
                _this.workspace.$element.removeEventListener('mousemove', moveHandlerBind, true);
                _this.shiftX = 0;
                _this.shiftY = 0;
            });
        });
    };
    ElementClass.prototype.moveFigureHandler = function (e) {
        var nx = e.pageX - this.workX - this.shiftX;
        var ny = e.pageY - this.workY - this.shiftY;
        this.container.x = nx;
        this.container.y = ny;
        this.resizers.positionConnectors();
    };
    ElementClass.prototype.moveResizerHandler = function (e, resizer) {
        var newWR = e.pageX - this.workX - this.container.x - this.figure.x - resizer.size / 2;
        var newHB = e.pageY - this.workY - this.container.y - this.figure.y - resizer.size / 2;
        var shiftL = this.container.x + resizer.size / 2 - (e.pageX - this.workX);
        var shiftY = this.container.y + resizer.size / 2 - (e.pageY - this.workY);
        var newWL = this.figure.width + shiftL;
        var newWXL = this.container.x - shiftL;
        var newHT = this.figure.height + shiftY;
        var newHYT = this.container.y - shiftY;
        switch (resizer.type) {
            case __WEBPACK_IMPORTED_MODULE_2__resizer_ResizerType__["a" /* ResizerType */].LT:
                this.figure.height = newHT;
                this.container.y = newHYT;
                this.figure.width = newWL;
                this.container.x = newWXL;
                break;
            case __WEBPACK_IMPORTED_MODULE_2__resizer_ResizerType__["a" /* ResizerType */].T:
                this.figure.height = newHT;
                this.container.y = newHYT;
                break;
            case __WEBPACK_IMPORTED_MODULE_2__resizer_ResizerType__["a" /* ResizerType */].RT:
                this.figure.width = newWR;
                this.figure.height = newHT;
                this.container.y = newHYT;
                break;
            case __WEBPACK_IMPORTED_MODULE_2__resizer_ResizerType__["a" /* ResizerType */].R:
                this.figure.width = newWR;
                break;
            case __WEBPACK_IMPORTED_MODULE_2__resizer_ResizerType__["a" /* ResizerType */].RB:
                this.figure.width = newWR;
                this.figure.height = newHB;
                break;
            case __WEBPACK_IMPORTED_MODULE_2__resizer_ResizerType__["a" /* ResizerType */].B:
                this.figure.height = newHB;
                break;
            case __WEBPACK_IMPORTED_MODULE_2__resizer_ResizerType__["a" /* ResizerType */].LB:
                this.figure.width = newWL;
                this.container.x = newWXL;
                this.figure.height = newHB;
                break;
            case __WEBPACK_IMPORTED_MODULE_2__resizer_ResizerType__["a" /* ResizerType */].L:
                this.figure.width = newWL;
                this.container.x = newWXL;
                break;
        }
        this.figure.position();
        this.resizers.reposition();
        this.resizers.positionConnectors();
        this.rotates.reposition();
    };
    ElementClass.prototype.moveRotateHandler = function (e, rotate) {
        var moveX = e.offsetX - this.shiftX;
        var moveY = e.offsetY - this.shiftY;
        this.container.rotate(Math.round((moveX / 100) * 180), 0, 0);
    };
    Object.defineProperty(ElementClass.prototype, "selected", {
        get: function () {
            return this._selected;
        },
        set: function (val) {
            this._selected = val;
            this.resizers.selected = val;
            this.rotates.selected = val;
            this.figure.selected = val;
        },
        enumerable: true,
        configurable: true
    });
    ElementClass.prototype.reposition = function () {
        this.figure.position();
        this.resizers.reposition();
        this.rotates.reposition();
    };
    return ElementClass;
}());

var RotatesClass = /** @class */ (function () {
    function RotatesClass(parent) {
        this.parent = parent;
        this.rotates = [];
        for (var _i = 0, _a = Object.keys(RotateType); _i < _a.length; _i++) {
            var t = _a[_i];
            if (!isNaN(+t)) {
                var res = new RotateClass(parent, +t);
                this.rotates.push(res);
            }
        }
        this.selected = false;
    }
    RotatesClass.prototype.reposition = function () {
        this.rotates.forEach(function (f) { return f.position(); });
    };
    Object.defineProperty(RotatesClass.prototype, "selected", {
        get: function () {
            return this._selected;
        },
        set: function (val) {
            var _this = this;
            this._selected = val;
            this.rotates.forEach(function (f) { return f.selected = _this._selected; });
        },
        enumerable: true,
        configurable: true
    });
    return RotatesClass;
}());
var RotateClass = /** @class */ (function () {
    function RotateClass(parent, type) {
        this.parent = parent;
        this.type = type;
        this.size = 8;
        this.$element = this.createElement();
    }
    RotateClass.prototype.createElement = function () {
        var $rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        $rect.setAttribute('width', this.size + '');
        $rect.setAttribute('height', this.size + '');
        $rect.setAttribute('fill', 'orange');
        $rect.setAttribute('stroke', 'blue');
        $rect.setAttribute('stroke-width', '1');
        $rect.setAttribute('rx', '1');
        $rect.setAttribute('ry', '1');
        $rect.style.cursor = 'alias';
        return $rect;
    };
    RotateClass.prototype.position = function () {
        if (this.type === RotateType.left) {
            this.$element.setAttribute('x', '-20');
            this.$element.setAttribute('y', ((this.parent.height + this.size) / 2) + '');
        }
        if (this.type === RotateType.right) {
            this.$element.setAttribute('x', ((this.parent.width + 29)) + '');
            this.$element.setAttribute('y', ((this.parent.height + this.size) / 2) + '');
        }
    };
    Object.defineProperty(RotateClass.prototype, "selected", {
        get: function () {
            return this._selected;
        },
        set: function (val) {
            this._selected = val;
            if (this._selected) {
                this.$element.style.display = 'none';
            }
            else {
                this.$element.style.display = 'none';
            }
        },
        enumerable: true,
        configurable: true
    });
    return RotateClass;
}());
var RotateType;
(function (RotateType) {
    RotateType[RotateType["left"] = 0] = "left";
    RotateType[RotateType["right"] = 1] = "right";
})(RotateType || (RotateType = {}));


/***/ }),

/***/ "./src/app/modules/draw/classes/common/resizer/ResizerType.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResizerType; });
var ResizerType;
(function (ResizerType) {
    ResizerType[ResizerType["LT"] = 0] = "LT";
    ResizerType[ResizerType["T"] = 1] = "T";
    ResizerType[ResizerType["RT"] = 2] = "RT";
    ResizerType[ResizerType["R"] = 3] = "R";
    ResizerType[ResizerType["RB"] = 4] = "RB";
    ResizerType[ResizerType["B"] = 5] = "B";
    ResizerType[ResizerType["LB"] = 6] = "LB";
    ResizerType[ResizerType["L"] = 7] = "L";
})(ResizerType || (ResizerType = {}));


/***/ }),

/***/ "./src/app/modules/draw/classes/common/resizer/ResizersClass.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResizersClass; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ResizserClass__ = __webpack_require__("./src/app/modules/draw/classes/common/resizer/ResizserClass.ts");

var ResizersClass = /** @class */ (function () {
    function ResizersClass(parent, types) {
        this.parent = parent;
        this.resizers = [];
        for (var _i = 0, types_1 = types; _i < types_1.length; _i++) {
            var t = types_1[_i];
            if (!isNaN(+t)) {
                var res = new __WEBPACK_IMPORTED_MODULE_0__ResizserClass__["a" /* ResizerClass */](parent, +t);
                this.resizers.push(res);
            }
        }
        this.selected = false;
    }
    ResizersClass.prototype.reposition = function () {
        this.resizers.forEach(function (f) { return f.position(); });
    };
    ResizersClass.prototype.positionConnectors = function () {
        this.resizers.forEach(function (f) { return f.positionConnectors(); });
    };
    Object.defineProperty(ResizersClass.prototype, "selected", {
        get: function () {
            return this._selected;
        },
        set: function (val) {
            this._selected = val;
            if (this._selected) {
                this.resizers.forEach(function (f) { return f.show(); });
            }
            else {
                this.resizers.forEach(function (f) { return f.hide(); });
            }
        },
        enumerable: true,
        configurable: true
    });
    return ResizersClass;
}());



/***/ }),

/***/ "./src/app/modules/draw/classes/common/resizer/ResizserClass.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResizerClass; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ResizerType__ = __webpack_require__("./src/app/modules/draw/classes/common/resizer/ResizerType.ts");

var ResizerClass = /** @class */ (function () {
    function ResizerClass(parent, type) {
        this.parent = parent;
        this.type = type;
        this.size = 8;
        this.connectors = [];
        this.$element = this.createElement();
        this.position();
        this.setCursor();
    }
    ResizerClass.prototype.createElement = function () {
        var resizer = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        resizer.setAttribute('width', this.size + '');
        resizer.setAttribute('height', this.size + '');
        resizer.setAttribute('stroke', 'blue');
        resizer.setAttribute('stroke-width', '1');
        resizer.setAttribute('fill', 'transparent');
        resizer.setAttribute('rx', '2');
        resizer.setAttribute('ry', '2');
        return resizer;
    };
    ResizerClass.prototype.position = function () {
        switch (this.type) {
            case __WEBPACK_IMPORTED_MODULE_0__ResizerType__["a" /* ResizerType */].LT:
                this.$element.setAttribute('x', '0');
                this.$element.setAttribute('y', '0');
                break;
            case __WEBPACK_IMPORTED_MODULE_0__ResizerType__["a" /* ResizerType */].T:
                this.$element.setAttribute('x', ((this.parentWidth + this.size) / 2) + '');
                this.$element.setAttribute('y', '0');
                break;
            case __WEBPACK_IMPORTED_MODULE_0__ResizerType__["a" /* ResizerType */].RT:
                this.$element.setAttribute('x', (this.parentWidth + this.size + 2) + '');
                this.$element.setAttribute('y', '0');
                break;
            case __WEBPACK_IMPORTED_MODULE_0__ResizerType__["a" /* ResizerType */].R:
                this.$element.setAttribute('x', (this.parentWidth + this.size + 2) + '');
                this.$element.setAttribute('y', ((this.parentHeight + this.size) / 2) + '');
                break;
            case __WEBPACK_IMPORTED_MODULE_0__ResizerType__["a" /* ResizerType */].RB:
                this.$element.setAttribute('x', (this.parentWidth + this.size + 2) + '');
                this.$element.setAttribute('y', (this.parentHeight + this.size + 2) + '');
                break;
            case __WEBPACK_IMPORTED_MODULE_0__ResizerType__["a" /* ResizerType */].B:
                this.$element.setAttribute('x', ((this.parentWidth + this.size) / 2) + '');
                this.$element.setAttribute('y', (this.parentHeight + this.size + 2) + '');
                break;
            case __WEBPACK_IMPORTED_MODULE_0__ResizerType__["a" /* ResizerType */].LB:
                this.$element.setAttribute('x', '0');
                this.$element.setAttribute('y', (this.parentHeight + this.size + 2) + '');
                break;
            case __WEBPACK_IMPORTED_MODULE_0__ResizerType__["a" /* ResizerType */].L:
                this.$element.setAttribute('x', '0');
                this.$element.setAttribute('y', ((this.parentHeight + this.size) / 2) + '');
                break;
        }
    };
    ResizerClass.prototype.addConnector = function (connector, type) {
        if (this.connectors.some(function (s) { return s.connector === connector && s.type === type; })) {
            return;
        }
        this.connectors.push({ connector: connector, type: type });
    };
    ResizerClass.prototype.removeConnector = function (connector, type) {
        var ind = this.connectors.findIndex(function (f) { return f.connector === connector && f.type === type; });
        if (ind === -1)
            return;
        this.connectors.splice(ind, 1);
    };
    ResizerClass.prototype.positionConnectors = function () {
        for (var _i = 0, _a = this.connectors; _i < _a.length; _i++) {
            var con = _a[_i];
            if (con.type === __WEBPACK_IMPORTED_MODULE_0__ResizerType__["a" /* ResizerType */].L)
                con.connector.setLeftPoint(this.x + this.parentX + this.size / 2, this.y + this.parentY + this.size / 2);
            if (con.type === __WEBPACK_IMPORTED_MODULE_0__ResizerType__["a" /* ResizerType */].R)
                con.connector.setRightPoint(this.x + this.parentX + this.size / 2, this.y + this.parentY + this.size / 2);
            con.connector.reposition();
        }
    };
    ResizerClass.prototype.setCursor = function () {
        switch (this.type) {
            case __WEBPACK_IMPORTED_MODULE_0__ResizerType__["a" /* ResizerType */].LT:
            case __WEBPACK_IMPORTED_MODULE_0__ResizerType__["a" /* ResizerType */].RB:
                this.$element.style.cursor = 'nwse-resize';
                break;
            case __WEBPACK_IMPORTED_MODULE_0__ResizerType__["a" /* ResizerType */].RT:
            case __WEBPACK_IMPORTED_MODULE_0__ResizerType__["a" /* ResizerType */].LB:
                this.$element.style.cursor = 'nesw-resize';
                break;
            case __WEBPACK_IMPORTED_MODULE_0__ResizerType__["a" /* ResizerType */].R:
            case __WEBPACK_IMPORTED_MODULE_0__ResizerType__["a" /* ResizerType */].L:
                this.$element.style.cursor = 'e-resize';
                break;
            case __WEBPACK_IMPORTED_MODULE_0__ResizerType__["a" /* ResizerType */].B:
            case __WEBPACK_IMPORTED_MODULE_0__ResizerType__["a" /* ResizerType */].T:
                this.$element.style.cursor = 'n-resize';
                break;
        }
    };
    ResizerClass.prototype.show = function () {
        this.$element.style.opacity = '1';
        this.$element.style.pointerEvents = 'auto';
    };
    ResizerClass.prototype.hide = function () {
        this.$element.style.pointerEvents = 'none';
        this.$element.style.opacity = '0';
    };
    Object.defineProperty(ResizerClass.prototype, "parentX", {
        get: function () {
            return +this.parent._parent.$element.getAttribute('x');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResizerClass.prototype, "parentY", {
        get: function () {
            return +this.parent._parent.$element.getAttribute('y');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResizerClass.prototype, "parentWidth", {
        get: function () {
            return +this.parent.$element.getBoundingClientRect().width;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResizerClass.prototype, "parentHeight", {
        get: function () {
            return +this.parent.$element.getBoundingClientRect().height;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResizerClass.prototype, "x", {
        get: function () {
            return +this.$element.getAttribute('x');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResizerClass.prototype, "y", {
        get: function () {
            return +this.$element.getAttribute('y');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResizerClass.prototype, "pageX", {
        get: function () {
            return +this.$element.getBoundingClientRect().left;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResizerClass.prototype, "pageY", {
        get: function () {
            return +this.$element.getBoundingClientRect().top;
        },
        enumerable: true,
        configurable: true
    });
    return ResizerClass;
}());



/***/ }),

/***/ "./src/app/modules/draw/classes/shapes/CircleClass.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CircleClass; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ShapeClass__ = __webpack_require__("./src/app/modules/draw/classes/shapes/ShapeClass.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var CircleClass = /** @class */ (function (_super) {
    __extends(CircleClass, _super);
    function CircleClass(options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, options) || this;
        _this.$element = _this.createElement();
        _this.setCursor();
        _this.createText(26);
        _this.textContent = 'Circle';
        return _this;
    }
    CircleClass.prototype.createElement = function () {
        var $rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        $rect.setAttribute('width', this.width + '');
        $rect.setAttribute('height', this.height + '');
        $rect.setAttribute('stroke', 'red');
        $rect.setAttribute('fill', 'transparent');
        $rect.setAttribute('stroke-width', '2');
        $rect.setAttribute('rx', '50%');
        $rect.setAttribute('ry', '50%');
        return $rect;
    };
    return CircleClass;
}(__WEBPACK_IMPORTED_MODULE_0__ShapeClass__["a" /* ShapeClass */]));



/***/ }),

/***/ "./src/app/modules/draw/classes/shapes/LineClass.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LineClass; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ShapeClass__ = __webpack_require__("./src/app/modules/draw/classes/shapes/ShapeClass.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var LineClass = /** @class */ (function (_super) {
    __extends(LineClass, _super);
    function LineClass(options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, options) || this;
        _this.$element = _this.createElement();
        _this.$elementTriangle = _this.createElementTriangle();
        _this.setCursor();
        return _this;
    }
    LineClass.prototype.createElement = function () {
        var $rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        $rect.setAttribute('width', this.width + '');
        $rect.setAttribute('height', this.height + '');
        $rect.setAttribute('fill', 'gray');
        $rect.setAttribute('rx', '0');
        $rect.setAttribute('ry', '0');
        return $rect;
    };
    LineClass.prototype.createElementTriangle = function () {
        var $rect = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
        $rect.setAttribute('fill', 'gray');
        $rect.style.cursor = 'move';
        return $rect;
    };
    LineClass.prototype.position = function () {
        _super.prototype.position.call(this);
        this.positionTriangle();
    };
    LineClass.prototype.positionTriangle = function () {
        var p1 = [this.width + this.x, -6 + this.y].join(',');
        var p2 = [this.width + this.height + this.x, this.height / 2 + this.y].join(',');
        var p3 = [this.width + this.x, this.height + 6 + this.y].join(',');
        this.$elementTriangle.setAttribute('points', [p1, p2, p3].join(','));
    };
    LineClass.prototype.parent = function (val) {
        _super.prototype.parent.call(this, val);
        this._parent = val;
        this._parent.$element.appendChild(this.$elementTriangle);
    };
    return LineClass;
}(__WEBPACK_IMPORTED_MODULE_0__ShapeClass__["a" /* ShapeClass */]));



/***/ }),

/***/ "./src/app/modules/draw/classes/shapes/RectClass.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RectClass; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ShapeClass__ = __webpack_require__("./src/app/modules/draw/classes/shapes/ShapeClass.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var RectClass = /** @class */ (function (_super) {
    __extends(RectClass, _super);
    function RectClass(options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, options) || this;
        _this.$element = _this.createElement();
        _this.setCursor();
        _this.createText(20);
        _this.textContent = 'Rectangle';
        return _this;
    }
    RectClass.prototype.createElement = function () {
        var $rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        $rect.setAttribute('width', this.width + '');
        $rect.setAttribute('height', this.height + '');
        $rect.setAttribute('stroke', '#e37233');
        $rect.setAttribute('fill', 'transparent');
        $rect.setAttribute('stroke-width', '4');
        $rect.setAttribute('rx', '4');
        $rect.setAttribute('ry', '4');
        return $rect;
    };
    return RectClass;
}(__WEBPACK_IMPORTED_MODULE_0__ShapeClass__["a" /* ShapeClass */]));



/***/ }),

/***/ "./src/app/modules/draw/classes/shapes/ShapeClass.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShapeClass; });
var ShapeClass = /** @class */ (function () {
    function ShapeClass(options) {
        if (options === void 0) { options = {}; }
        this.minSize = 40;
        this._textContent = '';
        this.cntSpans = 0;
        this.textShiftX = 0;
        this._width = options.width || 30;
        this._height = options.height || 30;
    }
    ShapeClass.prototype.createElement = function () {
        return null;
    };
    ShapeClass.prototype.position = function () {
        this.$element.setAttribute('x', '9');
        this.$element.setAttribute('y', '9');
        this.positionText();
    };
    ShapeClass.prototype.createText = function (x) {
        var _this = this;
        this.textShiftX = x;
        var $svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        var $helpTitle = document.createElementNS('http://www.w3.org/2000/svg', 'title');
        $helpTitle.textContent = 'Double click to change';
        $svg.appendChild($helpTitle);
        var $text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        this.$title = document.createElementNS('http://www.w3.org/2000/svg', 'title');
        $text.setAttribute('y', '15');
        $svg.setAttribute('x', x);
        $svg.setAttribute('y', '10');
        $svg.appendChild($text);
        $svg.style.overflow = 'hidden';
        $text.style.userSelect = 'none';
        $svg.style.cursor = 'text';
        this.$textContainer = $svg;
        this.$text = $text;
        this.$text.addEventListener('dblclick', function () {
            _this.textContent = prompt('Enter text', _this.textContent) || '';
        });
    };
    Object.defineProperty(ShapeClass.prototype, "textContent", {
        get: function () {
            return this._textContent;
        },
        set: function (val) {
            this._textContent = val;
            this.$title.textContent = val;
            this.splitText();
            this.positionText();
        },
        enumerable: true,
        configurable: true
    });
    ShapeClass.prototype.splitText = function () {
        if (!this.$text)
            return;
        var textLines = this.textContent;
        this.$text.innerHTML = '';
        var y = 14;
        this.cntSpans = 1;
        var tSpan = document.createElementNS('http://www.w3.org/2000/svg', 'tspan');
        tSpan.setAttribute('y', y + '');
        tSpan.setAttribute('x', '0');
        this.$text.appendChild(tSpan);
        var width = this.width - 12;
        var lastIndex = 0;
        for (var i = 0; i < textLines.length; i++) {
            tSpan.textContent += textLines[i];
            if (this.$text.getBoundingClientRect().width > width) {
                this.cntSpans++;
                i -= 2;
                if (lastIndex === i)
                    break;
                lastIndex = i;
                tSpan.textContent = tSpan.textContent.slice(0, tSpan.textContent.length - 2);
                tSpan = document.createElementNS('http://www.w3.org/2000/svg', 'tspan');
                y += 14;
                tSpan.setAttribute('y', y + '');
                tSpan.setAttribute('x', '0');
                this.$text.appendChild(tSpan);
            }
        }
    };
    ShapeClass.prototype.positionText = function () {
        if (!this.$text)
            return;
        this.splitText();
        var placeholderX = (this.width - this.$text.getBoundingClientRect().width) / 2;
        var placeholderY = (this.height - this.$text.getBoundingClientRect().height) / 2;
        if (placeholderX > 0 || placeholderY > 0) {
            this.$textContainer.setAttribute('x', Math.max(placeholderX, this.textShiftX) + '');
            this.$textContainer.setAttribute('y', Math.max(placeholderY, 10) + '');
        }
        else {
            this.$textContainer.setAttribute('x', this.textShiftX + '');
            this.$textContainer.setAttribute('y', 10 + '');
        }
        this.$textContainer.setAttribute('width', (this.width - 12) + '');
        this.$textContainer.setAttribute('height', (this.height - 12) + '');
    };
    ShapeClass.prototype.parent = function (val) {
        this._parent = val;
        this._parent.$element.appendChild(this.$element);
        if (this.$textContainer)
            this._parent.$element.appendChild(this.$textContainer);
        if (this.$title)
            this._parent.$element.appendChild(this.$title);
    };
    Object.defineProperty(ShapeClass.prototype, "selected", {
        get: function () {
            return this._selected;
        },
        set: function (val) {
            this._selected = val;
        },
        enumerable: true,
        configurable: true
    });
    ShapeClass.prototype.setCursor = function () {
        this.$element.style.cursor = 'move';
    };
    Object.defineProperty(ShapeClass.prototype, "width", {
        get: function () {
            return this._width;
        },
        set: function (val) {
            this._width = Math.max(val, this.minSize);
            this.$element.setAttribute('width', this._width + '');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShapeClass.prototype, "height", {
        get: function () {
            return this._height;
        },
        set: function (val) {
            this._height = Math.max(val, this.minSize);
            this.$element.setAttribute('height', this._height + '');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShapeClass.prototype, "x", {
        get: function () {
            return +this.$element.getAttribute('x') || 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShapeClass.prototype, "y", {
        get: function () {
            return +this.$element.getAttribute('y') || 0;
        },
        enumerable: true,
        configurable: true
    });
    return ShapeClass;
}());



/***/ }),

/***/ "./src/app/modules/draw/draw.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawModule", function() { return DrawModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_cookie__ = __webpack_require__("./node_modules/ngx-cookie/fesm5/ngx-cookie.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_hammerjs__ = __webpack_require__("./node_modules/hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__workspace_workspace_component__ = __webpack_require__("./src/app/modules/draw/workspace/workspace.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__draw_routing__ = __webpack_require__("./src/app/modules/draw/draw.routing.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// components


var DrawModule = /** @class */ (function () {
    function DrawModule() {
    }
    DrawModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2_ngx_cookie__["a" /* CookieModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_5__draw_routing__["a" /* drawRouting */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__workspace_workspace_component__["a" /* WorkspaceComponent */]
            ],
            providers: [],
            exports: [],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__workspace_workspace_component__["a" /* WorkspaceComponent */]
            ]
        })
    ], DrawModule);
    return DrawModule;
}());



/***/ }),

/***/ "./src/app/modules/draw/draw.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return drawRouting; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__workspace_workspace_component__ = __webpack_require__("./src/app/modules/draw/workspace/workspace.component.ts");


var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__workspace_workspace_component__["a" /* WorkspaceComponent */] }
];
var drawRouting = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forChild(routes);


/***/ }),

/***/ "./src/app/modules/draw/workspace/workspace.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"container\">\n  <div class=\"panel\">\n    <div (dragstart)=\"dragstart($event,addRect)\" draggable=\"true\" class=\"panel__svg-button\">\n      <svg width=\"30\" height=\"30\" style=\"overflow: visible\">\n        <rect fill=\"transparent\" height=\"30\" rx=\"4\" ry=\"4\" stroke=\"#e37233\" stroke-width=\"4\"\n              width=\"30\"></rect>\n      </svg>\n    </div>\n    <div (dragstart)=\"dragstart($event,addCircle)\" draggable=\"true\" class=\"panel__svg-button\">\n      <svg width=\"30\" height=\"30\" style=\"overflow: visible\">\n        <rect fill=\"transparent\" height=\"30\" rx=\"50%\" ry=\"50%\" stroke=\"red\" stroke-width=\"2\"\n              width=\"30\"></rect>\n      </svg>\n    </div>\n    <div (dragstart)=\"dragstart($event,addLine)\" draggable=\"true\" class=\"panel__svg-button\">\n      <svg width=\"50\" height=\"5\" style=\"overflow: visible\">\n        <rect width=\"50\" height=\"5\" fill=\"gray\" rx=\"0\" ry=\"0\"></rect>\n        <polygon fill=\"gray\" points=\"50,-6,55,2.5,50,11\"></polygon>\n      </svg>\n    </div>\n    <div (dragstart)=\"dragstart($event,addConnector)\" draggable=\"true\" class=\"panel__svg-button\">\n      <svg width=\"50\" height=\"5\" style=\"overflow: visible\">\n        <line stroke=\"gray\" stroke-width=\"3\" x1=\"0\" y1=\"0\" x2=\"50\" y2=\"0\"></line>\n      </svg>\n    </div>\n    <button (click)=\"deleteFromWorkspace()\" class=\"float-button\" color=\"accent\" mat-fab>Delete</button>\n  </div>\n  <div (drop)=\"drop($event)\" (dragover)=\"dragover($event)\" class=\"workspace-container\" >\n  <svg (dragstart)=\"$event.preventDefault()\" class=\"workspace\" #workspace></svg>\n  </div>\n  <!--<div class=\"workspace-container\">-->\n    <!--<svg (dragstart)=\"$event.preventDefault()\" class=\"workspace\" #workspace></svg>-->\n  <!--</div>-->\n</section>\n"

/***/ }),

/***/ "./src/app/modules/draw/workspace/workspace.component.scss":
/***/ (function(module, exports) {

module.exports = ".container {\n  width: 100%;\n  height: 100%; }\n  .container .panel {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: space-evenly;\n        -ms-flex-pack: space-evenly;\n            justify-content: space-evenly; }\n  .container .panel .panel__svg-button {\n      cursor: move;\n      padding: 6px 12px;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      border-radius: 4px;\n      -webkit-transition: background-color 300ms ease-out, border-color 300ms ease-out;\n      transition: background-color 300ms ease-out, border-color 300ms ease-out;\n      border: 1px solid transparent; }\n  .container .panel .panel__svg-button:hover {\n        border-color: #b6b6b6;\n        background-color: #f8f8f8; }\n  .container .panel .float-button {\n      position: fixed;\n      bottom: 32px;\n      right: 32px; }\n  .container .workspace {\n    width: 100%;\n    height: calc(100vh - 120px);\n    border-radius: 4px;\n    border: 1px solid #b6b6b6;\n    overflow: hidden; }\n"

/***/ }),

/***/ "./src/app/modules/draw/workspace/workspace.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkspaceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_common_ElementClass__ = __webpack_require__("./src/app/modules/draw/classes/common/ElementClass.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__classes_shapes_RectClass__ = __webpack_require__("./src/app/modules/draw/classes/shapes/RectClass.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__classes_shapes_CircleClass__ = __webpack_require__("./src/app/modules/draw/classes/shapes/CircleClass.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__classes_WorkspaceClass__ = __webpack_require__("./src/app/modules/draw/classes/WorkspaceClass.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__classes_shapes_LineClass__ = __webpack_require__("./src/app/modules/draw/classes/shapes/LineClass.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__classes_ConnectorClass__ = __webpack_require__("./src/app/modules/draw/classes/ConnectorClass.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var WorkspaceComponent = /** @class */ (function () {
    function WorkspaceComponent() {
    }
    WorkspaceComponent.prototype.ngOnInit = function () {
        this.workspace = new __WEBPACK_IMPORTED_MODULE_4__classes_WorkspaceClass__["a" /* WorkspaceClass */](this.workspaceElement.nativeElement);
        document.addEventListener('dragover', function (event) {
            // prevent default to allow drop
            event.preventDefault();
        }, false);
    };
    WorkspaceComponent.prototype.addRect = function (x, y) {
        var rect = new __WEBPACK_IMPORTED_MODULE_2__classes_shapes_RectClass__["a" /* RectClass */]({ width: 75, height: 75 });
        this.addToWorksspace(rect, x - 40, y - 40);
    };
    WorkspaceComponent.prototype.addCircle = function (x, y) {
        var circle = new __WEBPACK_IMPORTED_MODULE_3__classes_shapes_CircleClass__["a" /* CircleClass */]({ width: 75, height: 75 });
        this.addToWorksspace(circle, x - 40, y - 40);
    };
    WorkspaceComponent.prototype.addLine = function (x, y) {
        var line = new __WEBPACK_IMPORTED_MODULE_5__classes_shapes_LineClass__["a" /* LineClass */]({ width: 100, height: 5 });
        this.addToWorksspace(line, x - 55, y - 7.5);
    };
    WorkspaceComponent.prototype.addConnector = function (x, y) {
        var connector = new __WEBPACK_IMPORTED_MODULE_6__classes_ConnectorClass__["a" /* ConnectorClass */](this.workspace, { x: x - 50, y: y }, { x: x + 50, y: y });
        this.workspace.add(connector);
    };
    WorkspaceComponent.prototype.addToWorksspace = function (el, x, y) {
        var element = new __WEBPACK_IMPORTED_MODULE_1__classes_common_ElementClass__["a" /* ElementClass */](this.workspace, el, { x: x, y: y });
        this.workspace.add(element);
    };
    WorkspaceComponent.prototype.deleteFromWorkspace = function () {
        this.workspace.remove();
    };
    WorkspaceComponent.prototype.dragstart = function (e, action) {
        e.dataTransfer.setData('text/plain', null);
        this.currentAction = action;
    };
    WorkspaceComponent.prototype.dragover = function (e) {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'copy';
    };
    WorkspaceComponent.prototype.drop = function (e) {
        e.preventDefault();
        if (!this.currentAction)
            return;
        this.currentAction.bind(this)(e.offsetX, e.offsetY);
        this.currentAction = null;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('workspace'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], WorkspaceComponent.prototype, "workspaceElement", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('rectButton'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_7__angular_material__["a" /* MatButton */])
    ], WorkspaceComponent.prototype, "rectButton", void 0);
    WorkspaceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-workspace',
            template: __webpack_require__("./src/app/modules/draw/workspace/workspace.component.html"),
            styles: [__webpack_require__("./src/app/modules/draw/workspace/workspace.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], WorkspaceComponent);
    return WorkspaceComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* enableProdMode */])();
}
document.addEventListener('DOMContentLoaded', function () {
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
});


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map