System.register(['angular2/core', 'angular2/http', 'angular2/router', './../shared/quiz-settings.service', './../shared/quiz-results.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, router_1, quiz_settings_service_1, quiz_results_service_1;
    var ErrorComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (quiz_settings_service_1_1) {
                quiz_settings_service_1 = quiz_settings_service_1_1;
            },
            function (quiz_results_service_1_1) {
                quiz_results_service_1 = quiz_results_service_1_1;
            }],
        execute: function() {
            ErrorComponent = (function () {
                function ErrorComponent(_quizResultsService, _quizSettingsService, _routeParams, _router) {
                    this._quizResultsService = _quizResultsService;
                    this._quizSettingsService = _quizSettingsService;
                    this._routeParams = _routeParams;
                    this._router = _router;
                    this.errorMessage = "No error =)";
                }
                ErrorComponent.prototype.ngOnInit = function () {
                    //this.competitionGroupID=24;
                    var errorID = +this._routeParams.get('errorID');
                    if (errorID == 1) {
                        this.errorMessage = "Unable to load qustions. Please change some settings and pray it will work";
                    }
                    else if (errorID == 2) {
                        this.errorMessage = "Unable to load qustions. createSeveralSoundquizDistrubutionArray infinate loop detected, > 1000";
                    }
                };
                //fires also on init when inputs are set for the first time
                ErrorComponent.prototype.ngOnChanges = function () {
                };
                ErrorComponent.prototype.navigateToStart = function () {
                    this._router.navigate(["QuizWelcome"]);
                };
                ErrorComponent = __decorate([
                    core_1.Component({
                        selector: 'birdid-resultlist',
                        templateUrl: 'app/shared.component/error.component.html',
                        styleUrls: ['app/shared.component/error.component.css'],
                        directives: [],
                        providers: [
                            http_1.HTTP_PROVIDERS
                        ],
                        inputs: ['timespan:usingTimespan', 'limit:usingLimit', 'updateResultlistInc'],
                    }), 
                    __metadata('design:paramtypes', [quiz_results_service_1.QuizResultsService, quiz_settings_service_1.QuizSettingsService, router_1.RouteParams, router_1.Router])
                ], ErrorComponent);
                return ErrorComponent;
            }());
            exports_1("ErrorComponent", ErrorComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC5jb21wb25lbnQvZXJyb3IuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBb0JBO2dCQUlDLHdCQUNTLG1CQUF1QyxFQUN2QyxvQkFBeUMsRUFDekMsWUFBeUIsRUFDekIsT0FBZTtvQkFIZix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQW9CO29CQUN2Qyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXFCO29CQUN6QyxpQkFBWSxHQUFaLFlBQVksQ0FBYTtvQkFDekIsWUFBTyxHQUFQLE9BQU8sQ0FBUTtvQkFOeEIsaUJBQVksR0FBRSxhQUFhLENBQUE7Z0JBT3pCLENBQUM7Z0JBRUYsaUNBQVEsR0FBUjtvQkFDQyw2QkFBNkI7b0JBQzdCLElBQUksT0FBTyxHQUFHLENBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7b0JBQ2pELEVBQUUsQ0FBQSxDQUFDLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQSxDQUFDO3dCQUNoQixJQUFJLENBQUMsWUFBWSxHQUFHLDRFQUE0RSxDQUFDO29CQUNsRyxDQUFDO29CQUFBLElBQUksQ0FBQyxFQUFFLENBQUEsQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUEsQ0FBQzt3QkFDdEIsSUFBSSxDQUFDLFlBQVksR0FBRyxpR0FBaUcsQ0FBQztvQkFDdkgsQ0FBQztnQkFFRixDQUFDO2dCQUVELDJEQUEyRDtnQkFDM0Qsb0NBQVcsR0FBWDtnQkFJQSxDQUFDO2dCQUVELHdDQUFlLEdBQWY7b0JBRUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO2dCQUV4QyxDQUFDO2dCQTlDSDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNWLFFBQVEsRUFBRSxtQkFBbUI7d0JBQzdCLFdBQVcsRUFBRSwyQ0FBMkM7d0JBQ3hELFNBQVMsRUFBRyxDQUFDLDBDQUEwQyxDQUFDO3dCQUN4RCxVQUFVLEVBQUUsRUFFWDt3QkFDRCxTQUFTLEVBQUU7NEJBQ1QscUJBQWM7eUJBQ2Y7d0JBQ0QsTUFBTSxFQUFFLENBQUMsd0JBQXdCLEVBQUUsa0JBQWtCLEVBQUUscUJBQXFCLENBQUM7cUJBQzdFLENBQUM7O2tDQUFBO2dCQXNDRixxQkFBQztZQUFELENBcENBLEFBb0NDLElBQUE7WUFwQ0QsMkNBb0NDLENBQUEiLCJmaWxlIjoic2hhcmVkLmNvbXBvbmVudC9lcnJvci5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgT25Jbml0LCBPbkNoYW5nZXMsIFZpZXdDaGlsZCwgQWZ0ZXJWaWV3SW5pdCwgRWxlbWVudFJlZiB9ICAgICAgIGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwLCBIVFRQX1BST1ZJREVSUyB9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIFJvdXRlUGFyYW1zIH0gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcclxuXHJcbmltcG9ydCB7IFF1aXpTZXR0aW5nc1NlcnZpY2UgfSAgZnJvbSAnLi8uLi9zaGFyZWQvcXVpei1zZXR0aW5ncy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUXVpelJlc3VsdHNTZXJ2aWNlIH0gIGZyb20gJy4vLi4vc2hhcmVkL3F1aXotcmVzdWx0cy5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiAnYmlyZGlkLXJlc3VsdGxpc3QnLFxyXG5cdHRlbXBsYXRlVXJsOiAnYXBwL3NoYXJlZC5jb21wb25lbnQvZXJyb3IuY29tcG9uZW50Lmh0bWwnLFxyXG5cdHN0eWxlVXJsczogIFsnYXBwL3NoYXJlZC5jb21wb25lbnQvZXJyb3IuY29tcG9uZW50LmNzcyddLFxyXG5cdGRpcmVjdGl2ZXM6IFtcclxuXHJcblx0XSxcclxuXHRwcm92aWRlcnM6IFtcclxuXHQgIEhUVFBfUFJPVklERVJTXHJcblx0XSxcclxuXHRpbnB1dHM6IFsndGltZXNwYW46dXNpbmdUaW1lc3BhbicsICdsaW1pdDp1c2luZ0xpbWl0JywgJ3VwZGF0ZVJlc3VsdGxpc3RJbmMnXSwgLy91c2luZyBBTElBU1xyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEVycm9yQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXN7XHJcblxyXG5cdGVycm9yTWVzc2FnZSA9XCJObyBlcnJvciA9KVwiXHJcblxyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSBfcXVpelJlc3VsdHNTZXJ2aWNlOiBRdWl6UmVzdWx0c1NlcnZpY2UsXHJcblx0XHRwcml2YXRlIF9xdWl6U2V0dGluZ3NTZXJ2aWNlOiBRdWl6U2V0dGluZ3NTZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSBfcm91dGVQYXJhbXM6IFJvdXRlUGFyYW1zLFxyXG5cdFx0cHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXJcclxuXHQpe31cclxuXHJcblx0XHRuZ09uSW5pdCgpIHtcclxuXHRcdFx0Ly90aGlzLmNvbXBldGl0aW9uR3JvdXBJRD0yNDtcclxuXHRcdFx0bGV0IGVycm9ySUQgPSArIHRoaXMuX3JvdXRlUGFyYW1zLmdldCgnZXJyb3JJRCcpO1xyXG5cdFx0XHRpZihlcnJvcklEID09IDEpe1xyXG5cdFx0XHRcdHRoaXMuZXJyb3JNZXNzYWdlID0gXCJVbmFibGUgdG8gbG9hZCBxdXN0aW9ucy4gUGxlYXNlIGNoYW5nZSBzb21lIHNldHRpbmdzIGFuZCBwcmF5IGl0IHdpbGwgd29ya1wiO1xyXG5cdFx0XHR9ZWxzZSBpZihlcnJvcklEID09IDIpe1xyXG5cdFx0XHRcdHRoaXMuZXJyb3JNZXNzYWdlID0gXCJVbmFibGUgdG8gbG9hZCBxdXN0aW9ucy4gY3JlYXRlU2V2ZXJhbFNvdW5kcXVpekRpc3RydWJ1dGlvbkFycmF5IGluZmluYXRlIGxvb3AgZGV0ZWN0ZWQsID4gMTAwMFwiO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdC8vZmlyZXMgYWxzbyBvbiBpbml0IHdoZW4gaW5wdXRzIGFyZSBzZXQgZm9yIHRoZSBmaXJzdCB0aW1lXHJcblx0XHRuZ09uQ2hhbmdlcygpe1xyXG5cclxuXHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdG5hdmlnYXRlVG9TdGFydCgpe1xyXG5cclxuXHRcdFx0dGhpcy5fcm91dGVyLm5hdmlnYXRlKFtcIlF1aXpXZWxjb21lXCJdKTtcclxuXHJcblx0XHR9XHJcblxyXG5cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
