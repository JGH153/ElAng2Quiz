System.register(['angular2/core', 'angular2/http', 'angular2/router', './../shared/quiz-settings.service', './../shared/quiz-results.service', './../shared/quiz-logic.service', './../shared/quiz-translation.service', './../shared.component/resultlist.component'], function(exports_1, context_1) {
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
    var core_1, http_1, router_1, quiz_settings_service_1, quiz_results_service_1, quiz_logic_service_1, quiz_translation_service_1, resultlist_component_1;
    var QuizResultComponent;
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
            },
            function (quiz_logic_service_1_1) {
                quiz_logic_service_1 = quiz_logic_service_1_1;
            },
            function (quiz_translation_service_1_1) {
                quiz_translation_service_1 = quiz_translation_service_1_1;
            },
            function (resultlist_component_1_1) {
                resultlist_component_1 = resultlist_component_1_1;
            }],
        execute: function() {
            QuizResultComponent = (function () {
                function QuizResultComponent(_quizResultsService, _quizLogicService, _quizSettingsService, _quizTranslationService, _router) {
                    this._quizResultsService = _quizResultsService;
                    this._quizLogicService = _quizLogicService;
                    this._quizSettingsService = _quizSettingsService;
                    this._quizTranslationService = _quizTranslationService;
                    this._router = _router;
                    this.title = ' You have successfully completed the quiz!';
                    this.formDataUsername = "";
                    this.dataSavedStatus = "";
                    this.quizHighscoreLoaded = false;
                    this.updateResultlistInc = 0;
                    this.disableSubmitScore = false;
                    this.fomralTestInfoTranslation = "";
                }
                QuizResultComponent.prototype.ngOnInit = function () {
                    this.quizSettings = this._quizSettingsService.getQuizSettings();
                    if (this._quizSettingsService.isUsingHelp()) {
                        this.disableSubmitScore = true;
                        this.dataSavedStatus = "You can't submit your score since you used help/hints";
                    }
                    this.loadQuizResults();
                    this.fomralTestInfoTranslation = this._quizTranslationService.getTranslationByID(162);
                };
                QuizResultComponent.prototype.loadQuizResults = function () {
                    var _this = this;
                    setTimeout(function () {
                        _this.updateResultlistInc++;
                    }, 500);
                };
                QuizResultComponent.prototype.onSubmit = function (formSubmitObject) {
                    var _this = this;
                    this.disableSubmitScore = true;
                    this.dataSavedStatus = "";
                    var maxScore = this._quizSettingsService.getQuizSettings()[0].numQuestions;
                    this._quizResultsService.uploadQuizResults(this._quizLogicService.score, maxScore, this.formDataUsername, this._quizSettingsService.getQuizSettings()).subscribe(
                    //data => this.response = JSON.stringify(data),
                    function (data) { return _this.onServerSubmit(data); }, function (error) { return console.log("error: ", error); });
                    //console.log(formSubmitObject);
                    //console.log("formDataUsername: ", this.formDataUsername)
                    this.formInformation = formSubmitObject.value;
                };
                QuizResultComponent.prototype.onServerSubmit = function (response) {
                    //console.log("working: ", response);
                    this.dataSavedStatus = "Saved: " + response['returnData'];
                    this.dataSavedStatus = "Your score was successfully saved to the server";
                    this.loadQuizResults();
                };
                QuizResultComponent.prototype.startNewQuiz = function () {
                    this._router.navigate(["QuizMediaSelect"]);
                };
                QuizResultComponent.prototype.goToSummary = function () {
                    this._router.navigate(["QuizMediaQuizSummary"]);
                };
                QuizResultComponent = __decorate([
                    core_1.Component({
                        selector: 'birdid-quiz-result',
                        templateUrl: 'app/quiz-results/quiz-results.component.html',
                        styleUrls: ['app/quiz-results/quiz-results.component.css'],
                        directives: [
                            resultlist_component_1.ResultlistComponent
                        ],
                        providers: [
                            http_1.HTTP_PROVIDERS
                        ]
                    }), 
                    __metadata('design:paramtypes', [quiz_results_service_1.QuizResultsService, quiz_logic_service_1.QuizLogicService, quiz_settings_service_1.QuizSettingsService, quiz_translation_service_1.QuizTranslationService, router_1.Router])
                ], QuizResultComponent);
                return QuizResultComponent;
            }());
            exports_1("QuizResultComponent", QuizResultComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInF1aXotcmVzdWx0cy9xdWl6LXJlc3VsdHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBd0JBO2dCQW1CQyw2QkFDUyxtQkFBdUMsRUFDdkMsaUJBQW1DLEVBQ25DLG9CQUF5QyxFQUN6Qyx1QkFBK0MsRUFDL0MsT0FBZTtvQkFKZix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQW9CO29CQUN2QyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQWtCO29CQUNuQyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXFCO29CQUN6Qyw0QkFBdUIsR0FBdkIsdUJBQXVCLENBQXdCO29CQUMvQyxZQUFPLEdBQVAsT0FBTyxDQUFRO29CQXZCeEIsVUFBSyxHQUFHLDRDQUE0QyxDQUFDO29CQUlyRCxxQkFBZ0IsR0FBRyxFQUFFLENBQUM7b0JBQ3RCLG9CQUFlLEdBQUcsRUFBRSxDQUFDO29CQUtyQix3QkFBbUIsR0FBRyxLQUFLLENBQUM7b0JBRTVCLHdCQUFtQixHQUFHLENBQUMsQ0FBQztvQkFFeEIsdUJBQWtCLEdBQUcsS0FBSyxDQUFDO29CQUUzQiw4QkFBeUIsR0FBRyxFQUFFLENBQUM7Z0JBUTVCLENBQUM7Z0JBRUosc0NBQVEsR0FBUjtvQkFFQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxlQUFlLEVBQUUsQ0FBQztvQkFFaEUsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUEsQ0FBQzt3QkFDM0MsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQzt3QkFDL0IsSUFBSSxDQUFDLGVBQWUsR0FBRyx1REFBdUQsQ0FBQztvQkFDaEYsQ0FBQztvQkFFRCxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7b0JBRXZCLElBQUksQ0FBQyx5QkFBeUIsR0FBRyxJQUFJLENBQUMsdUJBQXVCLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBRXZGLENBQUM7Z0JBRUQsNkNBQWUsR0FBZjtvQkFBQSxpQkFTQztvQkFQQSxVQUFVLENBQUM7d0JBRVYsS0FBSSxDQUFDLG1CQUFtQixFQUFHLENBQUM7b0JBRTdCLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFHVCxDQUFDO2dCQUdELHNDQUFRLEdBQVIsVUFBUyxnQkFBZ0I7b0JBQXpCLGlCQWtCQztvQkFoQkEsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQztvQkFFL0IsSUFBSSxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUM7b0JBRTFCLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUM7b0JBRTNFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUMsU0FBUztvQkFDL0osK0NBQStDO29CQUMvQyxVQUFBLElBQUksSUFBSSxPQUFBLEtBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEVBQXpCLENBQXlCLEVBQ2pDLFVBQUEsS0FBSyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLEVBQTdCLENBQTZCLENBQ3RDLENBQUM7b0JBRUYsZ0NBQWdDO29CQUNoQywwREFBMEQ7b0JBQzFELElBQUksQ0FBQyxlQUFlLEdBQUcsZ0JBQWdCLENBQUMsS0FBSyxDQUFDO2dCQUUvQyxDQUFDO2dCQUVELDRDQUFjLEdBQWQsVUFBZSxRQUFRO29CQUV0QixxQ0FBcUM7b0JBRXJDLElBQUksQ0FBQyxlQUFlLEdBQUcsU0FBUyxHQUFHLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQztvQkFDMUQsSUFBSSxDQUFDLGVBQWUsR0FBRyxpREFBaUQsQ0FBQztvQkFDekUsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO2dCQUV4QixDQUFDO2dCQUVELDBDQUFZLEdBQVo7b0JBRUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7Z0JBRTVDLENBQUM7Z0JBQ0QseUNBQVcsR0FBWDtvQkFDQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQztnQkFFakQsQ0FBQztnQkF6R0Y7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVixRQUFRLEVBQUUsb0JBQW9CO3dCQUM5QixXQUFXLEVBQUUsOENBQThDO3dCQUMzRCxTQUFTLEVBQUcsQ0FBQyw2Q0FBNkMsQ0FBQzt3QkFDM0QsVUFBVSxFQUFFOzRCQUNYLDBDQUFtQjt5QkFDbkI7d0JBQ0QsU0FBUyxFQUFFOzRCQUNWLHFCQUFjO3lCQUNkO3FCQUNELENBQUM7O3VDQUFBO2dCQW9HRiwwQkFBQztZQUFELENBakdBLEFBaUdDLElBQUE7WUFqR0QscURBaUdDLENBQUEiLCJmaWxlIjoicXVpei1yZXN1bHRzL3F1aXotcmVzdWx0cy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgRXZlbnRFbWl0dGVyIH0gICAgICAgZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHAsIEhUVFBfUFJPVklERVJTIH0gZnJvbSAnYW5ndWxhcjIvaHR0cCc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XHJcblxyXG5pbXBvcnQgeyBRdWl6U2V0dGluZ3NTZXJ2aWNlIH0gIGZyb20gJy4vLi4vc2hhcmVkL3F1aXotc2V0dGluZ3Muc2VydmljZSc7XHJcbmltcG9ydCB7IFF1aXpSZXN1bHRzU2VydmljZSB9ICBmcm9tICcuLy4uL3NoYXJlZC9xdWl6LXJlc3VsdHMuc2VydmljZSc7XHJcbmltcG9ydCB7IFF1aXpMb2dpY1NlcnZpY2UgfSAgZnJvbSAnLi8uLi9zaGFyZWQvcXVpei1sb2dpYy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUXVpelRyYW5zbGF0aW9uU2VydmljZSB9ICBmcm9tICcuLy4uL3NoYXJlZC9xdWl6LXRyYW5zbGF0aW9uLnNlcnZpY2UnO1xyXG5cclxuaW1wb3J0IHsgUmVzdWx0bGlzdENvbXBvbmVudCB9ICBmcm9tICcuLy4uL3NoYXJlZC5jb21wb25lbnQvcmVzdWx0bGlzdC5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6ICdiaXJkaWQtcXVpei1yZXN1bHQnLFxyXG5cdHRlbXBsYXRlVXJsOiAnYXBwL3F1aXotcmVzdWx0cy9xdWl6LXJlc3VsdHMuY29tcG9uZW50Lmh0bWwnLFxyXG5cdHN0eWxlVXJsczogIFsnYXBwL3F1aXotcmVzdWx0cy9xdWl6LXJlc3VsdHMuY29tcG9uZW50LmNzcyddLFxyXG5cdGRpcmVjdGl2ZXM6IFtcclxuXHRcdFJlc3VsdGxpc3RDb21wb25lbnRcclxuXHRdLFxyXG5cdHByb3ZpZGVyczogW1xyXG5cdFx0SFRUUF9QUk9WSURFUlNcclxuXHRdXHJcbn0pXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFF1aXpSZXN1bHRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQgIHtcclxuXHR0aXRsZSA9ICcgWW91IGhhdmUgc3VjY2Vzc2Z1bGx5IGNvbXBsZXRlZCB0aGUgcXVpeiEnO1xyXG5cclxuXHRyZXNwb25zZTtcclxuXHJcblx0Zm9ybURhdGFVc2VybmFtZSA9IFwiXCI7XHJcblx0ZGF0YVNhdmVkU3RhdHVzID0gXCJcIjtcclxuXHRmb3JtSW5mb3JtYXRpb247XHJcblxyXG5cdHF1aXpTZXR0aW5ncztcclxuXHRxdWl6SGlnaHNjb3JlRGF0YTtcclxuXHRxdWl6SGlnaHNjb3JlTG9hZGVkID0gZmFsc2U7XHJcblxyXG5cdHVwZGF0ZVJlc3VsdGxpc3RJbmMgPSAwO1xyXG5cclxuXHRkaXNhYmxlU3VibWl0U2NvcmUgPSBmYWxzZTtcclxuXHJcblx0Zm9tcmFsVGVzdEluZm9UcmFuc2xhdGlvbiA9IFwiXCI7XHJcblxyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSBfcXVpelJlc3VsdHNTZXJ2aWNlOiBRdWl6UmVzdWx0c1NlcnZpY2UsXHJcblx0XHRwcml2YXRlIF9xdWl6TG9naWNTZXJ2aWNlOiBRdWl6TG9naWNTZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSBfcXVpelNldHRpbmdzU2VydmljZTogUXVpelNldHRpbmdzU2VydmljZSxcclxuXHRcdHByaXZhdGUgX3F1aXpUcmFuc2xhdGlvblNlcnZpY2U6IFF1aXpUcmFuc2xhdGlvblNlcnZpY2UsXHJcblx0XHRwcml2YXRlIF9yb3V0ZXI6IFJvdXRlclxyXG5cdCkge31cclxuXHJcblx0bmdPbkluaXQoKSB7XHJcblxyXG5cdFx0dGhpcy5xdWl6U2V0dGluZ3MgPSB0aGlzLl9xdWl6U2V0dGluZ3NTZXJ2aWNlLmdldFF1aXpTZXR0aW5ncygpO1xyXG5cclxuXHRcdGlmKHRoaXMuX3F1aXpTZXR0aW5nc1NlcnZpY2UuaXNVc2luZ0hlbHAoKSl7XHJcblx0XHRcdHRoaXMuZGlzYWJsZVN1Ym1pdFNjb3JlID0gdHJ1ZTtcclxuXHRcdFx0dGhpcy5kYXRhU2F2ZWRTdGF0dXMgPSBcIllvdSBjYW4ndCBzdWJtaXQgeW91ciBzY29yZSBzaW5jZSB5b3UgdXNlZCBoZWxwL2hpbnRzXCI7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5sb2FkUXVpelJlc3VsdHMoKTtcclxuXHJcblx0XHR0aGlzLmZvbXJhbFRlc3RJbmZvVHJhbnNsYXRpb24gPSB0aGlzLl9xdWl6VHJhbnNsYXRpb25TZXJ2aWNlLmdldFRyYW5zbGF0aW9uQnlJRCgxNjIpO1xyXG5cclxuXHR9XHJcblxyXG5cdGxvYWRRdWl6UmVzdWx0cygpe1xyXG5cclxuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cclxuXHRcdFx0dGhpcy51cGRhdGVSZXN1bHRsaXN0SW5jICsrO1xyXG5cclxuXHRcdH0sIDUwMCk7XHJcblxyXG5cclxuXHR9XHJcblxyXG5cclxuXHRvblN1Ym1pdChmb3JtU3VibWl0T2JqZWN0KXtcclxuXHJcblx0XHR0aGlzLmRpc2FibGVTdWJtaXRTY29yZSA9IHRydWU7XHJcblxyXG5cdFx0dGhpcy5kYXRhU2F2ZWRTdGF0dXMgPSBcIlwiO1xyXG5cclxuXHRcdGxldCBtYXhTY29yZSA9IHRoaXMuX3F1aXpTZXR0aW5nc1NlcnZpY2UuZ2V0UXVpelNldHRpbmdzKClbMF0ubnVtUXVlc3Rpb25zO1xyXG5cclxuXHRcdHRoaXMuX3F1aXpSZXN1bHRzU2VydmljZS51cGxvYWRRdWl6UmVzdWx0cyh0aGlzLl9xdWl6TG9naWNTZXJ2aWNlLnNjb3JlLCBtYXhTY29yZSwgdGhpcy5mb3JtRGF0YVVzZXJuYW1lLCB0aGlzLl9xdWl6U2V0dGluZ3NTZXJ2aWNlLmdldFF1aXpTZXR0aW5ncygpKS5zdWJzY3JpYmUoXHJcblx0XHRcdC8vZGF0YSA9PiB0aGlzLnJlc3BvbnNlID0gSlNPTi5zdHJpbmdpZnkoZGF0YSksXHJcblx0XHRcdGRhdGEgPT4gdGhpcy5vblNlcnZlclN1Ym1pdChkYXRhKSxcclxuXHRcdFx0ZXJyb3IgPT4gY29uc29sZS5sb2coXCJlcnJvcjogXCIsIGVycm9yKVxyXG5cdFx0KTtcclxuXHJcblx0XHQvL2NvbnNvbGUubG9nKGZvcm1TdWJtaXRPYmplY3QpO1xyXG5cdFx0Ly9jb25zb2xlLmxvZyhcImZvcm1EYXRhVXNlcm5hbWU6IFwiLCB0aGlzLmZvcm1EYXRhVXNlcm5hbWUpXHJcblx0XHR0aGlzLmZvcm1JbmZvcm1hdGlvbiA9IGZvcm1TdWJtaXRPYmplY3QudmFsdWU7XHJcblxyXG5cdH1cclxuXHJcblx0b25TZXJ2ZXJTdWJtaXQocmVzcG9uc2Upe1xyXG5cclxuXHRcdC8vY29uc29sZS5sb2coXCJ3b3JraW5nOiBcIiwgcmVzcG9uc2UpO1xyXG5cclxuXHRcdHRoaXMuZGF0YVNhdmVkU3RhdHVzID0gXCJTYXZlZDogXCIgKyByZXNwb25zZVsncmV0dXJuRGF0YSddO1xyXG5cdFx0dGhpcy5kYXRhU2F2ZWRTdGF0dXMgPSBcIllvdXIgc2NvcmUgd2FzIHN1Y2Nlc3NmdWxseSBzYXZlZCB0byB0aGUgc2VydmVyXCI7XHJcblx0XHR0aGlzLmxvYWRRdWl6UmVzdWx0cygpO1xyXG5cclxuXHR9XHJcblxyXG5cdHN0YXJ0TmV3UXVpeigpe1xyXG5cclxuXHRcdHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbXCJRdWl6TWVkaWFTZWxlY3RcIl0pO1xyXG5cclxuXHR9XHJcblx0Z29Ub1N1bW1hcnkoKXtcclxuXHRcdHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbXCJRdWl6TWVkaWFRdWl6U3VtbWFyeVwiXSk7XHJcblxyXG5cdH1cclxuXHJcblxyXG5cclxuXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
