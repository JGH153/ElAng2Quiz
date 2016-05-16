System.register(['angular2/core', 'angular2/http', 'angular2/router', './../shared/quiz-settings.service', './../shared/quiz-translation.service', './../shared/quiz-logic.service', './../shared/quiz-formal-test.service'], function(exports_1, context_1) {
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
    var core_1, http_1, router_1, quiz_settings_service_1, quiz_translation_service_1, quiz_logic_service_1, quiz_formal_test_service_1;
    var FormalTestEndComponent;
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
            function (quiz_translation_service_1_1) {
                quiz_translation_service_1 = quiz_translation_service_1_1;
            },
            function (quiz_logic_service_1_1) {
                quiz_logic_service_1 = quiz_logic_service_1_1;
            },
            function (quiz_formal_test_service_1_1) {
                quiz_formal_test_service_1 = quiz_formal_test_service_1_1;
            }],
        execute: function() {
            FormalTestEndComponent = (function () {
                function FormalTestEndComponent(_quizSettingsService, _quizTranslationService, _quizLogicService, _quizFormalTestService, _router) {
                    this._quizSettingsService = _quizSettingsService;
                    this._quizTranslationService = _quizTranslationService;
                    this._quizLogicService = _quizLogicService;
                    this._quizFormalTestService = _quizFormalTestService;
                    this._router = _router;
                    this.answerListCSV = "";
                    this.mediaIdsCSV = "";
                    this.submitErrorText = "";
                    this.submitError = false;
                    this.loading = true;
                    this.submitSuccess = false;
                }
                FormalTestEndComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.answerListCSV = this._quizLogicService.getAnswerListCSV();
                    this.mediaIdsCSV = this._quizLogicService.getMediaIdsCSV();
                    var code = this._quizSettingsService.getQuizSettings()[0].formalTestAccessCode;
                    if (this._quizSettingsService.getQuizSettings()[0].formalTestQuiz) {
                        this._quizFormalTestService.submitFormalTestRespoce(code, this.answerListCSV, this.mediaIdsCSV)
                            .subscribe(function (response) { return (_this.onFormalTestSubmit(response)); });
                    }
                    console.log("this.answerListCSV: ", this.answerListCSV);
                    console.log("this.mediaIdsCSV: ", this.mediaIdsCSV);
                };
                FormalTestEndComponent.prototype.onFormalTestSubmit = function (responce) {
                    this.loading = false;
                    if (responce.returnData) {
                        this.submitSuccess = true;
                    }
                    else {
                        this.submitError = true;
                        this.submitErrorText = responce.returnData;
                    }
                    console.log("responce: ", responce);
                };
                FormalTestEndComponent = __decorate([
                    core_1.Component({
                        selector: 'birdid-formal-test-end',
                        templateUrl: 'app/formal-test/formal-test-end.component.html',
                        styleUrls: ['app/formal-test/formal-test-end.component.css'],
                        directives: [],
                        providers: [
                            http_1.HTTP_PROVIDERS
                        ],
                    }), 
                    __metadata('design:paramtypes', [quiz_settings_service_1.QuizSettingsService, quiz_translation_service_1.QuizTranslationService, quiz_logic_service_1.QuizLogicService, quiz_formal_test_service_1.QuizFormalTestService, router_1.Router])
                ], FormalTestEndComponent);
                return FormalTestEndComponent;
            }());
            exports_1("FormalTestEndComponent", FormalTestEndComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm1hbC10ZXN0L2Zvcm1hbC10ZXN0LWVuZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUF1QkE7Z0JBU0MsZ0NBQ1Msb0JBQXlDLEVBQ3pDLHVCQUErQyxFQUMvQyxpQkFBbUMsRUFDbkMsc0JBQTZDLEVBQzdDLE9BQWU7b0JBSmYseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFxQjtvQkFDekMsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUF3QjtvQkFDL0Msc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFrQjtvQkFDbkMsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUF1QjtvQkFDN0MsWUFBTyxHQUFQLE9BQU8sQ0FBUTtvQkFaeEIsa0JBQWEsR0FBRyxFQUFFLENBQUM7b0JBQ25CLGdCQUFXLEdBQUcsRUFBRSxDQUFDO29CQUNqQixvQkFBZSxHQUFHLEVBQUUsQ0FBQztvQkFDckIsZ0JBQVcsR0FBRyxLQUFLLENBQUM7b0JBQ3BCLFlBQU8sR0FBRyxJQUFJLENBQUM7b0JBQ2Ysa0JBQWEsR0FBRyxLQUFLLENBQUM7Z0JBUXBCLENBQUM7Z0JBRUgseUNBQVEsR0FBUjtvQkFBQSxpQkFlQztvQkFiQSxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO29CQUMvRCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLEVBQUUsQ0FBQztvQkFDM0QsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLG9CQUFvQixDQUFDO29CQUUvRSxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUEsQ0FBQzt3QkFFakUsSUFBSSxDQUFDLHNCQUFzQixDQUFDLHVCQUF1QixDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUM7NkJBQzdGLFNBQVMsQ0FBQyxVQUFDLFFBQVEsSUFBSyxPQUFBLENBQUMsS0FBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQW5DLENBQW1DLENBQUMsQ0FBQztvQkFFaEUsQ0FBQztvQkFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztvQkFDeEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBRXJELENBQUM7Z0JBRUQsbURBQWtCLEdBQWxCLFVBQW1CLFFBQVE7b0JBRTFCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFBO29CQUVwQixFQUFFLENBQUEsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUEsQ0FBQzt3QkFDdkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7b0JBQzNCLENBQUM7b0JBQUEsSUFBSSxDQUFBLENBQUM7d0JBQ0wsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7d0JBQ3hCLElBQUksQ0FBQyxlQUFlLEdBQUcsUUFBUSxDQUFDLFVBQVUsQ0FBQztvQkFDNUMsQ0FBQztvQkFFRCxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxRQUFRLENBQUMsQ0FBQztnQkFHckMsQ0FBQztnQkE5REY7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVixRQUFRLEVBQUUsd0JBQXdCO3dCQUNsQyxXQUFXLEVBQUUsZ0RBQWdEO3dCQUM3RCxTQUFTLEVBQUcsQ0FBQywrQ0FBK0MsQ0FBQzt3QkFDN0QsVUFBVSxFQUFFLEVBRVg7d0JBQ0QsU0FBUyxFQUFFOzRCQUNULHFCQUFjO3lCQUNiO3FCQUVILENBQUM7OzBDQUFBO2dCQTJERiw2QkFBQztZQUFELENBeERBLEFBd0RDLElBQUE7WUF4REQsMkRBd0RDLENBQUEiLCJmaWxlIjoiZm9ybWFsLXRlc3QvZm9ybWFsLXRlc3QtZW5kLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBPbkluaXQgfSAgICAgICBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHsgSHR0cCwgSFRUUF9QUk9WSURFUlMgfSBmcm9tICdhbmd1bGFyMi9odHRwJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcclxuXHJcbmltcG9ydCB7IFF1aXpTZXR0aW5nc1NlcnZpY2UgfSAgZnJvbSAnLi8uLi9zaGFyZWQvcXVpei1zZXR0aW5ncy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUXVpelRyYW5zbGF0aW9uU2VydmljZSB9ICBmcm9tICcuLy4uL3NoYXJlZC9xdWl6LXRyYW5zbGF0aW9uLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBRdWl6TG9naWNTZXJ2aWNlIH0gIGZyb20gJy4vLi4vc2hhcmVkL3F1aXotbG9naWMuc2VydmljZSc7XHJcbmltcG9ydCB7IFF1aXpGb3JtYWxUZXN0U2VydmljZSB9ICBmcm9tICcuLy4uL3NoYXJlZC9xdWl6LWZvcm1hbC10ZXN0LnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6ICdiaXJkaWQtZm9ybWFsLXRlc3QtZW5kJyxcclxuXHR0ZW1wbGF0ZVVybDogJ2FwcC9mb3JtYWwtdGVzdC9mb3JtYWwtdGVzdC1lbmQuY29tcG9uZW50Lmh0bWwnLFxyXG5cdHN0eWxlVXJsczogIFsnYXBwL2Zvcm1hbC10ZXN0L2Zvcm1hbC10ZXN0LWVuZC5jb21wb25lbnQuY3NzJ10sXHJcblx0ZGlyZWN0aXZlczogW1xyXG5cclxuXHRdLFxyXG5cdHByb3ZpZGVyczogW1xyXG5cdCAgSFRUUF9QUk9WSURFUlNcclxuICBcdF0sXHJcblx0Ly9vdXRwdXRzOiBbJ3F1aXpNZWRpYVNlbGVjdGVkRXZlbnQnXVxyXG59KVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBGb3JtYWxUZXN0RW5kQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xyXG5cclxuXHRhbnN3ZXJMaXN0Q1NWID0gXCJcIjtcclxuXHRtZWRpYUlkc0NTViA9IFwiXCI7XHJcblx0c3VibWl0RXJyb3JUZXh0ID0gXCJcIjtcclxuXHRzdWJtaXRFcnJvciA9IGZhbHNlO1xyXG5cdGxvYWRpbmcgPSB0cnVlO1xyXG5cdHN1Ym1pdFN1Y2Nlc3MgPSBmYWxzZTtcclxuXHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIF9xdWl6U2V0dGluZ3NTZXJ2aWNlOiBRdWl6U2V0dGluZ3NTZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSBfcXVpelRyYW5zbGF0aW9uU2VydmljZTogUXVpelRyYW5zbGF0aW9uU2VydmljZSxcclxuXHRcdHByaXZhdGUgX3F1aXpMb2dpY1NlcnZpY2U6IFF1aXpMb2dpY1NlcnZpY2UsXHJcblx0XHRwcml2YXRlIF9xdWl6Rm9ybWFsVGVzdFNlcnZpY2U6IFF1aXpGb3JtYWxUZXN0U2VydmljZSxcclxuXHRcdHByaXZhdGUgX3JvdXRlcjogUm91dGVyXHJcblx0KXt9XHJcblxyXG5cdG5nT25Jbml0KCkge1xyXG5cclxuXHRcdHRoaXMuYW5zd2VyTGlzdENTViA9IHRoaXMuX3F1aXpMb2dpY1NlcnZpY2UuZ2V0QW5zd2VyTGlzdENTVigpO1xyXG5cdFx0dGhpcy5tZWRpYUlkc0NTViA9IHRoaXMuX3F1aXpMb2dpY1NlcnZpY2UuZ2V0TWVkaWFJZHNDU1YoKTtcclxuXHRcdGxldCBjb2RlID0gdGhpcy5fcXVpelNldHRpbmdzU2VydmljZS5nZXRRdWl6U2V0dGluZ3MoKVswXS5mb3JtYWxUZXN0QWNjZXNzQ29kZTtcclxuXHJcblx0XHRpZih0aGlzLl9xdWl6U2V0dGluZ3NTZXJ2aWNlLmdldFF1aXpTZXR0aW5ncygpWzBdLmZvcm1hbFRlc3RRdWl6KXtcclxuXHJcblx0XHRcdHRoaXMuX3F1aXpGb3JtYWxUZXN0U2VydmljZS5zdWJtaXRGb3JtYWxUZXN0UmVzcG9jZShjb2RlLCB0aGlzLmFuc3dlckxpc3RDU1YsIHRoaXMubWVkaWFJZHNDU1YpXHJcblx0XHRcdFx0LnN1YnNjcmliZSgocmVzcG9uc2UpID0+ICh0aGlzLm9uRm9ybWFsVGVzdFN1Ym1pdChyZXNwb25zZSkpKTtcclxuXHJcblx0XHR9XHJcblx0XHRjb25zb2xlLmxvZyhcInRoaXMuYW5zd2VyTGlzdENTVjogXCIsIHRoaXMuYW5zd2VyTGlzdENTVik7XHJcblx0XHRjb25zb2xlLmxvZyhcInRoaXMubWVkaWFJZHNDU1Y6IFwiLCB0aGlzLm1lZGlhSWRzQ1NWKTtcclxuXHJcblx0fVxyXG5cclxuXHRvbkZvcm1hbFRlc3RTdWJtaXQocmVzcG9uY2Upe1xyXG5cclxuXHRcdHRoaXMubG9hZGluZyA9IGZhbHNlXHJcblxyXG5cdFx0aWYocmVzcG9uY2UucmV0dXJuRGF0YSl7XHJcblx0XHRcdHRoaXMuc3VibWl0U3VjY2VzcyA9IHRydWU7XHJcblx0XHR9ZWxzZXtcclxuXHRcdFx0dGhpcy5zdWJtaXRFcnJvciA9IHRydWU7XHJcblx0XHRcdHRoaXMuc3VibWl0RXJyb3JUZXh0ID0gcmVzcG9uY2UucmV0dXJuRGF0YTtcclxuXHRcdH1cclxuXHJcblx0XHRjb25zb2xlLmxvZyhcInJlc3BvbmNlOiBcIiwgcmVzcG9uY2UpO1xyXG5cclxuXHJcblx0fVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
