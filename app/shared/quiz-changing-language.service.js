System.register(['angular2/core', 'angular2/http', 'rxjs/Rx'], function(exports_1, context_1) {
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
    var core_1, http_1;
    var QuizChangingLanguageService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            QuizChangingLanguageService = (function () {
                function QuizChangingLanguageService(_http) {
                    this._http = _http;
                    this.siteID = 1;
                    this.langDataLoaded = false;
                    this.langLoadProblems = false;
                    this.dataLoadedEventEmiter = new core_1.EventEmitter();
                }
                QuizChangingLanguageService.prototype.initialize = function (siteID) {
                    var _this = this;
                    this.siteID = siteID;
                    setTimeout(function () {
                        _this.loadLanguages();
                    }, 0);
                    return this.dataLoadedEventEmiter;
                };
                QuizChangingLanguageService.prototype.loadLanguages = function () {
                    var _this = this;
                    this._http.get("https://hembstudios.no//birdid/API/language/languages.php?JSON=1")
                        .map(function (response) { return response.json(); }).subscribe(function (data) {
                        _this.languagesData = data['languages'];
                        console.log("langs d ", data);
                        _this.langDataLoaded = true;
                        _this.dataLoadedEventEmiter.emit(true);
                    }, function (error) {
                        _this.langLoadProblems = true;
                        console.error(" ERROR! ", error);
                        _this.dataLoadedEventEmiter.emit(false);
                    });
                    //return Promise.resolve(quizQuestions);
                };
                QuizChangingLanguageService.prototype.languagesAreLoaded = function () {
                    return this.langDataLoaded;
                };
                QuizChangingLanguageService.prototype.languagesLoadProblems = function () {
                    return this.langLoadProblems;
                };
                QuizChangingLanguageService.prototype.getLanguages = function () {
                    return this.languagesData;
                };
                QuizChangingLanguageService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], QuizChangingLanguageService);
                return QuizChangingLanguageService;
            }());
            exports_1("QuizChangingLanguageService", QuizChangingLanguageService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9xdWl6LWNoYW5naW5nLWxhbmd1YWdlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBV0E7Z0JBU0MscUNBQW9CLEtBQVc7b0JBQVgsVUFBSyxHQUFMLEtBQUssQ0FBTTtvQkFQL0IsV0FBTSxHQUFHLENBQUMsQ0FBQztvQkFHWCxtQkFBYyxHQUFHLEtBQUssQ0FBQztvQkFDdkIscUJBQWdCLEdBQUcsS0FBSyxDQUFDO29CQUN6QiwwQkFBcUIsR0FBRyxJQUFJLG1CQUFZLEVBQVcsQ0FBQztnQkFFbkIsQ0FBQztnQkFFbEMsZ0RBQVUsR0FBVixVQUFXLE1BQU07b0JBQWpCLGlCQVNDO29CQVBBLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO29CQUNyQixVQUFVLENBQUM7d0JBQ1YsS0FBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO29CQUN0QixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0JBRU4sTUFBTSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztnQkFFbkMsQ0FBQztnQkFDTyxtREFBYSxHQUFyQjtvQkFBQSxpQkFtQkM7b0JBakJBLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLGtFQUFrRSxDQUFDO3lCQUNoRixHQUFHLENBQUMsVUFBQSxRQUFRLElBQUksT0FBQSxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQWYsQ0FBZSxDQUFDLENBQUMsU0FBUyxDQUNqQyxVQUFBLElBQUk7d0JBQ0EsS0FBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7d0JBQ25ELE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO3dCQUNsQixLQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQzt3QkFDdkMsS0FBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDOUIsQ0FBQyxFQUNELFVBQUEsS0FBSzt3QkFDYixLQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO3dCQUM3QixPQUFPLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsQ0FBQzt3QkFDakMsS0FBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDeEMsQ0FBQyxDQUNLLENBQUM7b0JBRVQsd0NBQXdDO2dCQUV6QyxDQUFDO2dCQUNELHdEQUFrQixHQUFsQjtvQkFFQyxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQztnQkFFNUIsQ0FBQztnQkFFRCwyREFBcUIsR0FBckI7b0JBRUMsTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztnQkFFOUIsQ0FBQztnQkFFRCxrREFBWSxHQUFaO29CQUNDLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO2dCQUUzQixDQUFDO2dCQXpERjtvQkFBQyxpQkFBVSxFQUFFOzsrQ0FBQTtnQkEwRWIsa0NBQUM7WUFBRCxDQXpFQSxBQXlFQyxJQUFBO1lBekVELHFFQXlFQyxDQUFBIiwiZmlsZSI6InNoYXJlZC9xdWl6LWNoYW5naW5nLWxhbmd1YWdlLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPbkluaXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzIH0gZnJvbSAnYW5ndWxhcjIvaHR0cCc7XHJcblxyXG5pbXBvcnQgJ3J4anMvUngnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuXHJcbmltcG9ydCB7IFF1aXpTZXR0aW5nIH0gIGZyb20gJy4vLi4vc2hhcmVkL3F1aXouc2V0dGluZ3MuaW50ZXJmYWNlLnRzJztcclxuXHJcbmltcG9ydCB7Y29uc3RhbnRzfSBmcm9tICcuLy4uL2NvbnN0YW50cyc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBRdWl6Q2hhbmdpbmdMYW5ndWFnZVNlcnZpY2V7XHJcblxyXG5cdHNpdGVJRCA9IDE7XHJcblx0bGFuZ3VhZ2VzRGF0YTtcclxuXHJcblx0bGFuZ0RhdGFMb2FkZWQgPSBmYWxzZTtcclxuXHRsYW5nTG9hZFByb2JsZW1zID0gZmFsc2U7XHJcblx0ZGF0YUxvYWRlZEV2ZW50RW1pdGVyID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG5cclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwOiBIdHRwKXt9XHJcblxyXG5cdGluaXRpYWxpemUoc2l0ZUlEKXtcclxuXHJcblx0XHR0aGlzLnNpdGVJRCA9IHNpdGVJRDtcclxuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHR0aGlzLmxvYWRMYW5ndWFnZXMoKTtcclxuXHRcdH0sIDApO1xyXG5cclxuXHRcdHJldHVybiB0aGlzLmRhdGFMb2FkZWRFdmVudEVtaXRlcjtcclxuXHJcblx0fVxyXG5cdHByaXZhdGUgbG9hZExhbmd1YWdlcygpe1xyXG5cclxuXHRcdHRoaXMuX2h0dHAuZ2V0KFwiaHR0cHM6Ly9oZW1ic3R1ZGlvcy5uby8vYmlyZGlkL0FQSS9sYW5ndWFnZS9sYW5ndWFnZXMucGhwP0pTT049MVwiKVxyXG5cdFx0XHQubWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSkuc3Vic2NyaWJlKFxyXG5cdCAgICAgICAgICAgIGRhdGEgPT4ge1xyXG5cdCAgICAgICAgICAgICAgICB0aGlzLmxhbmd1YWdlc0RhdGEgPSBkYXRhWydsYW5ndWFnZXMnXTtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKFwibGFuZ3MgZCBcIiwgZGF0YSk7XHJcblx0ICAgICAgICAgICAgICAgIHRoaXMubGFuZ0RhdGFMb2FkZWQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0dGhpcy5kYXRhTG9hZGVkRXZlbnRFbWl0ZXIuZW1pdCh0cnVlKTtcclxuXHQgICAgICAgICAgICB9LFxyXG5cdCAgICAgICAgICAgIGVycm9yID0+IHtcclxuXHRcdFx0XHRcdHRoaXMubGFuZ0xvYWRQcm9ibGVtcyA9IHRydWU7XHJcblx0XHRcdFx0XHRjb25zb2xlLmVycm9yKFwiIEVSUk9SISBcIiwgZXJyb3IpO1xyXG5cdFx0XHRcdFx0dGhpcy5kYXRhTG9hZGVkRXZlbnRFbWl0ZXIuZW1pdChmYWxzZSk7XHJcblx0XHRcdFx0fVxyXG5cdCAgICAgICAgKTtcclxuXHJcblx0XHQvL3JldHVybiBQcm9taXNlLnJlc29sdmUocXVpelF1ZXN0aW9ucyk7XHJcblxyXG5cdH1cclxuXHRsYW5ndWFnZXNBcmVMb2FkZWQoKXtcclxuXHJcblx0XHRyZXR1cm4gdGhpcy5sYW5nRGF0YUxvYWRlZDtcclxuXHJcblx0fVxyXG5cclxuXHRsYW5ndWFnZXNMb2FkUHJvYmxlbXMoKXtcclxuXHJcblx0XHRyZXR1cm4gdGhpcy5sYW5nTG9hZFByb2JsZW1zO1xyXG5cclxuXHR9XHJcblxyXG5cdGdldExhbmd1YWdlcygpe1xyXG5cdFx0cmV0dXJuIHRoaXMubGFuZ3VhZ2VzRGF0YTtcclxuXHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qZ2V0TGFuZ3VhZ2VzKCl7XHJcblx0XHRyZXR1cm4gdGhpcy5faHR0cC5nZXQoXCJodHRwczovL2hlbWJzdHVkaW9zLm5vLy9iaXJkaWQvQVBJL2xhbmd1YWdlL2xhbmd1YWdlcy5waHA/SlNPTj0xXCIpXHJcblx0XHRcdC5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKS5zdWJzY3JpYmUoXHJcblx0ICAgICAgICAgICAgZGF0YSA9PiB7XHJcblxyXG5cdFx0XHRcdFx0dGhpcy5sYW5ndWFnZUxpc3QgPSBkYXRhO1xyXG5cdFx0XHRcdH0pXHJcblxyXG5cdH0qL1xyXG5cdC8qZ2V0TGFuZ3VhZ2VMaXN0KCl7XHJcblx0XHRyZXR1cm4gdGhpcy5sYW5ndWFnZUxpc3Q7XHJcblx0fSovXHJcblxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
