System.register(['angular2/core', 'angular2/http', 'rxjs/Rx', './../constants'], function(exports_1, context_1) {
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
    var core_1, http_1, constants_1;
    var QuizTranslationService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (constants_1_1) {
                constants_1 = constants_1_1;
            }],
        execute: function() {
            QuizTranslationService = (function () {
                function QuizTranslationService(_http) {
                    this._http = _http;
                    this.transDataLoaded = false;
                    this.transLoadProblems = false;
                    this.dataLoadedEventEmiter = new core_1.EventEmitter();
                    this.siteID = 1;
                    this.langID = 2;
                }
                //not working in services?
                QuizTranslationService.prototype.ngOnInit = function () {
                    console.log("QuizTranslationService ngOnInit");
                    //this.initialize();
                };
                QuizTranslationService.prototype.initialize = function (siteID, langID) {
                    var _this = this;
                    this.siteID = siteID;
                    this.langID = langID;
                    setTimeout(function () {
                        _this.loadTranslations();
                    }, 0);
                    return this.dataLoadedEventEmiter;
                };
                QuizTranslationService.prototype.loadTranslations = function () {
                    var _this = this;
                    this._http.get(constants_1.constants.baseURL + "/getTranslationsAndData.php?JSON=1&langID=" + this.langID + "&siteID=" + this.siteID)
                        .map(function (response) { return response.json(); }).subscribe(function (data) {
                        _this.translationData = data['translations'];
                        _this.transDataLoaded = true;
                        _this.dataLoadedEventEmiter.emit(true);
                    }, function (error) {
                        _this.transLoadProblems = true;
                        console.error("getQuizQuestions ERROR! ", error);
                        _this.dataLoadedEventEmiter.emit(false);
                    });
                    //return Promise.resolve(quizQuestions);
                };
                QuizTranslationService.prototype.translationsAreLoaded = function () {
                    return this.transDataLoaded;
                };
                QuizTranslationService.prototype.translationsLoadProblems = function () {
                    return this.transLoadProblems;
                };
                QuizTranslationService.prototype.getTranslationByID = function (id) {
                    //return "TRANSLATIONS NOT LOADED"
                    // this.promise = new Promise(function(resolve, reject) {
                    // 	// do a thing, possibly async, then…
                    //
                    // });
                    // return this.promise;
                    //console.log("this.transDataLoaded: ", this.transDataLoaded)
                    if (!this.transDataLoaded) {
                        return "TRANSLATIONS NOT LOADED";
                    }
                    else {
                        return this.translationData[id];
                    }
                };
                QuizTranslationService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], QuizTranslationService);
                return QuizTranslationService;
            }());
            exports_1("QuizTranslationService", QuizTranslationService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9xdWl6LXRyYW5zbGF0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBVUE7Z0JBY0MsZ0NBQW9CLEtBQVc7b0JBQVgsVUFBSyxHQUFMLEtBQUssQ0FBTTtvQkFWL0Isb0JBQWUsR0FBRyxLQUFLLENBQUM7b0JBQ3hCLHNCQUFpQixHQUFHLEtBQUssQ0FBQztvQkFFMUIsMEJBQXFCLEdBQUcsSUFBSSxtQkFBWSxFQUFXLENBQUM7b0JBRXBELFdBQU0sR0FBRyxDQUFDLENBQUM7b0JBQ1gsV0FBTSxHQUFHLENBQUMsQ0FBQztnQkFJc0IsQ0FBQztnQkFFbEMsMEJBQTBCO2dCQUMxQix5Q0FBUSxHQUFSO29CQUVDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUNBQWlDLENBQUMsQ0FBQztvQkFDL0Msb0JBQW9CO2dCQUVwQixDQUFDO2dCQUVGLDJDQUFVLEdBQVYsVUFBVyxNQUFNLEVBQUUsTUFBTTtvQkFBekIsaUJBYUM7b0JBWEEsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7b0JBQ3JCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO29CQUVyQixVQUFVLENBQUM7d0JBQ1YsS0FBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7b0JBQ3pCLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFFTixNQUFNLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDO2dCQUluQyxDQUFDO2dCQUVPLGlEQUFnQixHQUF4QjtvQkFBQSxpQkFrQkM7b0JBaEJBLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLHFCQUFTLENBQUMsT0FBTyxHQUFDLDRDQUE0QyxHQUFDLElBQUksQ0FBQyxNQUFNLEdBQUMsVUFBVSxHQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7eUJBQy9HLEdBQUcsQ0FBQyxVQUFBLFFBQVEsSUFBSSxPQUFBLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBZixDQUFlLENBQUMsQ0FBQyxTQUFTLENBQ2pDLFVBQUEsSUFBSTt3QkFDQSxLQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQzt3QkFDNUMsS0FBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7d0JBQ3hDLEtBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQzlCLENBQUMsRUFDRCxVQUFBLEtBQUs7d0JBQ2IsS0FBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQzt3QkFDOUIsT0FBTyxDQUFDLEtBQUssQ0FBQywwQkFBMEIsRUFBRSxLQUFLLENBQUMsQ0FBQzt3QkFDakQsS0FBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDeEMsQ0FBQyxDQUNLLENBQUM7b0JBRVQsd0NBQXdDO2dCQUV6QyxDQUFDO2dCQUdELHNEQUFxQixHQUFyQjtvQkFFQyxNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQztnQkFFN0IsQ0FBQztnQkFFRCx5REFBd0IsR0FBeEI7b0JBRUMsTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztnQkFFL0IsQ0FBQztnQkFFRCxtREFBa0IsR0FBbEIsVUFBbUIsRUFBRTtvQkFHcEIsa0NBQWtDO29CQUVsQyx5REFBeUQ7b0JBQ3pELHdDQUF3QztvQkFDeEMsRUFBRTtvQkFDRixNQUFNO29CQUNOLHVCQUF1QjtvQkFFdkIsNkRBQTZEO29CQUM3RCxFQUFFLENBQUEsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQSxDQUFDO3dCQUN6QixNQUFNLENBQUMseUJBQXlCLENBQUE7b0JBQ2pDLENBQUM7b0JBQUEsSUFBSSxDQUFBLENBQUM7d0JBQ0wsTUFBTSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsRUFBRSxDQUFDLENBQUM7b0JBQ2pDLENBQUM7Z0JBR0YsQ0FBQztnQkE1RkY7b0JBQUMsaUJBQVUsRUFBRTs7MENBQUE7Z0JBa0diLDZCQUFDO1lBQUQsQ0FqR0EsQUFpR0MsSUFBQTtZQWpHRCwyREFpR0MsQ0FBQSIsImZpbGUiOiJzaGFyZWQvcXVpei10cmFuc2xhdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgT25Jbml0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHsgSHR0cCB9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xyXG5cclxuaW1wb3J0ICdyeGpzL1J4JztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcblxyXG5pbXBvcnQge2NvbnN0YW50c30gZnJvbSAnLi8uLi9jb25zdGFudHMnO1xyXG5cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFF1aXpUcmFuc2xhdGlvblNlcnZpY2UgaW1wbGVtZW50cyBPbkluaXR7XHJcblxyXG5cdHRyYW5zbGF0aW9uRGF0YTtcclxuXHJcblx0dHJhbnNEYXRhTG9hZGVkID0gZmFsc2U7XHJcblx0dHJhbnNMb2FkUHJvYmxlbXMgPSBmYWxzZTtcclxuXHJcblx0ZGF0YUxvYWRlZEV2ZW50RW1pdGVyID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG5cclxuXHRzaXRlSUQgPSAxO1xyXG5cdGxhbmdJRCA9IDI7XHJcblxyXG5cdHByb21pc2U7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHA6IEh0dHApe31cclxuXHJcblx0Ly9ub3Qgd29ya2luZyBpbiBzZXJ2aWNlcz9cclxuXHRuZ09uSW5pdCgpIHtcclxuXHJcblx0XHRjb25zb2xlLmxvZyhcIlF1aXpUcmFuc2xhdGlvblNlcnZpY2UgbmdPbkluaXRcIik7XHJcblx0XHQvL3RoaXMuaW5pdGlhbGl6ZSgpO1xyXG5cclxuXHQgfVxyXG5cclxuXHRpbml0aWFsaXplKHNpdGVJRCwgbGFuZ0lEKXtcclxuXHJcblx0XHR0aGlzLnNpdGVJRCA9IHNpdGVJRDtcclxuXHRcdHRoaXMubGFuZ0lEID0gbGFuZ0lEO1xyXG5cclxuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHR0aGlzLmxvYWRUcmFuc2xhdGlvbnMoKTtcclxuXHRcdH0sIDApO1xyXG5cclxuXHRcdHJldHVybiB0aGlzLmRhdGFMb2FkZWRFdmVudEVtaXRlcjtcclxuXHJcblxyXG5cclxuXHR9XHJcblxyXG5cdHByaXZhdGUgbG9hZFRyYW5zbGF0aW9ucygpe1xyXG5cclxuXHRcdHRoaXMuX2h0dHAuZ2V0KGNvbnN0YW50cy5iYXNlVVJMK1wiL2dldFRyYW5zbGF0aW9uc0FuZERhdGEucGhwP0pTT049MSZsYW5nSUQ9XCIrdGhpcy5sYW5nSUQrXCImc2l0ZUlEPVwiK3RoaXMuc2l0ZUlEKVxyXG5cdFx0XHQubWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSkuc3Vic2NyaWJlKFxyXG5cdCAgICAgICAgICAgIGRhdGEgPT4ge1xyXG5cdCAgICAgICAgICAgICAgICB0aGlzLnRyYW5zbGF0aW9uRGF0YSA9IGRhdGFbJ3RyYW5zbGF0aW9ucyddO1xyXG5cdCAgICAgICAgICAgICAgICB0aGlzLnRyYW5zRGF0YUxvYWRlZCA9IHRydWU7XHJcblx0XHRcdFx0XHR0aGlzLmRhdGFMb2FkZWRFdmVudEVtaXRlci5lbWl0KHRydWUpO1xyXG5cdCAgICAgICAgICAgIH0sXHJcblx0ICAgICAgICAgICAgZXJyb3IgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy50cmFuc0xvYWRQcm9ibGVtcyA9IHRydWU7XHJcblx0XHRcdFx0XHRjb25zb2xlLmVycm9yKFwiZ2V0UXVpelF1ZXN0aW9ucyBFUlJPUiEgXCIsIGVycm9yKTtcclxuXHRcdFx0XHRcdHRoaXMuZGF0YUxvYWRlZEV2ZW50RW1pdGVyLmVtaXQoZmFsc2UpO1xyXG5cdFx0XHRcdH1cclxuXHQgICAgICAgICk7XHJcblxyXG5cdFx0Ly9yZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHF1aXpRdWVzdGlvbnMpO1xyXG5cclxuXHR9XHJcblxyXG5cclxuXHR0cmFuc2xhdGlvbnNBcmVMb2FkZWQoKXtcclxuXHJcblx0XHRyZXR1cm4gdGhpcy50cmFuc0RhdGFMb2FkZWQ7XHJcblxyXG5cdH1cclxuXHJcblx0dHJhbnNsYXRpb25zTG9hZFByb2JsZW1zKCl7XHJcblxyXG5cdFx0cmV0dXJuIHRoaXMudHJhbnNMb2FkUHJvYmxlbXM7XHJcblxyXG5cdH1cclxuXHJcblx0Z2V0VHJhbnNsYXRpb25CeUlEKGlkKXtcclxuXHJcblxyXG5cdFx0Ly9yZXR1cm4gXCJUUkFOU0xBVElPTlMgTk9UIExPQURFRFwiXHJcblxyXG5cdFx0Ly8gdGhpcy5wcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XHJcblx0XHQvLyBcdC8vIGRvIGEgdGhpbmcsIHBvc3NpYmx5IGFzeW5jLCB0aGVu4oCmXHJcblx0XHQvL1xyXG5cdFx0Ly8gfSk7XHJcblx0XHQvLyByZXR1cm4gdGhpcy5wcm9taXNlO1xyXG5cclxuXHRcdC8vY29uc29sZS5sb2coXCJ0aGlzLnRyYW5zRGF0YUxvYWRlZDogXCIsIHRoaXMudHJhbnNEYXRhTG9hZGVkKVxyXG5cdFx0aWYoIXRoaXMudHJhbnNEYXRhTG9hZGVkKXtcclxuXHRcdFx0cmV0dXJuIFwiVFJBTlNMQVRJT05TIE5PVCBMT0FERURcIlxyXG5cdFx0fWVsc2V7XHJcblx0XHRcdHJldHVybiB0aGlzLnRyYW5zbGF0aW9uRGF0YVtpZF07XHJcblx0XHR9XHJcblxyXG5cclxuXHR9XHJcblxyXG5cclxuXHJcblxyXG5cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
