System.register(['angular2/core', 'angular2/http', 'angular2/router', './shared/quiz-settings.service', './shared/quiz-questions.service', './shared/quiz-logic.service', './shared/quiz-translation.service', './shared/quiz-results.service', './shared/quiz-specie.service', "./shared/quiz-competition-group.service", './shared/quiz-formal-test.service', './shared/quiz-changing-language.service', './media-select/quiz-media-select.component', './media-additional-settings/quiz-additional-settings.component', './the-quiz/the-quiz.component', './quiz-results/quiz-results.component', "./select-species/select-species.component", "./quiz-results/quiz-summary.component", "./shared.component/changing-language.component"], function(exports_1, context_1) {
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
    var core_1, http_1, router_1, quiz_settings_service_1, quiz_questions_service_1, quiz_logic_service_1, quiz_translation_service_1, quiz_results_service_1, quiz_specie_service_1, quiz_competition_group_service_1, quiz_formal_test_service_1, quiz_changing_language_service_1, quiz_media_select_component_1, quiz_additional_settings_component_1, the_quiz_component_1, quiz_results_component_1, select_species_component_1, quiz_summary_component_1, changing_language_component_1;
    var QuizMasterComponent;
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
            function (quiz_questions_service_1_1) {
                quiz_questions_service_1 = quiz_questions_service_1_1;
            },
            function (quiz_logic_service_1_1) {
                quiz_logic_service_1 = quiz_logic_service_1_1;
            },
            function (quiz_translation_service_1_1) {
                quiz_translation_service_1 = quiz_translation_service_1_1;
            },
            function (quiz_results_service_1_1) {
                quiz_results_service_1 = quiz_results_service_1_1;
            },
            function (quiz_specie_service_1_1) {
                quiz_specie_service_1 = quiz_specie_service_1_1;
            },
            function (quiz_competition_group_service_1_1) {
                quiz_competition_group_service_1 = quiz_competition_group_service_1_1;
            },
            function (quiz_formal_test_service_1_1) {
                quiz_formal_test_service_1 = quiz_formal_test_service_1_1;
            },
            function (quiz_changing_language_service_1_1) {
                quiz_changing_language_service_1 = quiz_changing_language_service_1_1;
            },
            function (quiz_media_select_component_1_1) {
                quiz_media_select_component_1 = quiz_media_select_component_1_1;
            },
            function (quiz_additional_settings_component_1_1) {
                quiz_additional_settings_component_1 = quiz_additional_settings_component_1_1;
            },
            function (the_quiz_component_1_1) {
                the_quiz_component_1 = the_quiz_component_1_1;
            },
            function (quiz_results_component_1_1) {
                quiz_results_component_1 = quiz_results_component_1_1;
            },
            function (select_species_component_1_1) {
                select_species_component_1 = select_species_component_1_1;
            },
            function (quiz_summary_component_1_1) {
                quiz_summary_component_1 = quiz_summary_component_1_1;
            },
            function (changing_language_component_1_1) {
                changing_language_component_1 = changing_language_component_1_1;
            }],
        execute: function() {
            QuizMasterComponent = (function () {
                //0 = mediatype selkect
                //1 = additional settings
                //2 = quiz
                //3 =  result
                function QuizMasterComponent(_quizSettingsService, _quizQuestionService, _quizLogicService, _quizTranslationService, _quizResultsService, _quizSpecieService, _quizFormalTestService, _quizCompetitionGroupService, _quizChangingLanguageService, _router) {
                    var _this = this;
                    this._quizSettingsService = _quizSettingsService;
                    this._quizQuestionService = _quizQuestionService;
                    this._quizLogicService = _quizLogicService;
                    this._quizTranslationService = _quizTranslationService;
                    this._quizResultsService = _quizResultsService;
                    this._quizSpecieService = _quizSpecieService;
                    this._quizFormalTestService = _quizFormalTestService;
                    this._quizCompetitionGroupService = _quizCompetitionGroupService;
                    this._quizChangingLanguageService = _quizChangingLanguageService;
                    this._router = _router;
                    this.title = 'Birdid Quiz master!';
                    this.testString = "";
                    this.currentServicedLoaded = 0;
                    this.totalServicesToLoaded = 3;
                    this.listOfInitSubs = [];
                    this.asyncDataLoaded = false;
                    this.asyncDataLoadError = false;
                    this.siteID = 1;
                    this.langID = 2;
                    this.currentActive = 0;
                    //looking for route change
                    _router.subscribe(function (newRoute) { return _this.onRouteChange(newRoute); });
                }
                QuizMasterComponent.prototype.onRouteChange = function (newRoute) {
                    //console.log("Route change: ", newRoute );
                    //mostly only used for dev bar on top currently
                    if (newRoute == 'competitionGroupComponent') {
                        this.currentActive = 0;
                    }
                    else if (newRoute == 'mediaSelect') {
                        this.currentActive = 1;
                    }
                    else if (newRoute == 'mediaAdditionalSettings') {
                        this.currentActive = 2;
                    }
                    else if (newRoute == 'mediaSelectSpecies') {
                        this.currentActive = 3;
                    }
                    else if (newRoute == 'mediaQuiz') {
                        this.currentActive = 4;
                    }
                    else if (newRoute == 'mediaQuizResults') {
                        this.currentActive = 5;
                    }
                    else if (newRoute == 'mediaQuizSummary') {
                        this.currentActive = 6;
                    }
                    else if (newRoute == 'formalTestStart') {
                        this.currentActive = 7;
                    }
                    else if (newRoute == 'formalTestEnd') {
                        this.currentActive = 8;
                    }
                };
                QuizMasterComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.initAllServices();
                    //on language change
                    this._quizSettingsService.getLanguageChnageEvent().subscribe(function (event) { return (_this.onLanguageChange(event)); });
                };
                QuizMasterComponent.prototype.initAllServices = function () {
                    var _this = this;
                    this.asyncDataLoaded = false;
                    this.currentServicedLoaded = 0;
                    //load data from server
                    this.listOfInitSubs.push(this._quizTranslationService.initialize(this.siteID, this.langID).subscribe(function (event) { return (_this.onseServiceDoneLoading(event)); }));
                    this.listOfInitSubs.push(this._quizSettingsService.initialize(this.siteID, this.langID).subscribe(function (event) { return (_this.onseServiceDoneLoading(event)); }));
                    this.listOfInitSubs.push(this._quizSpecieService.initialize(this.siteID, this.langID).subscribe(function (event) { return (_this.onseServiceDoneLoading(event)); }));
                    this.listOfInitSubs.push(this._quizCompetitionGroupService.initialize(this.siteID, this.langID).subscribe(function (event) { return (_this.onseServiceDoneLoading(event)); }));
                    this.listOfInitSubs.push(this._quizChangingLanguageService.initialize(this.siteID).subscribe(function (event) { return (_this.onseServiceDoneLoading(event)); }));
                    this.totalServicesToLoaded = 5;
                    //not loading any data from server
                    this._quizResultsService.initialize(this.siteID, this.langID);
                    this._quizFormalTestService.initialize(this.siteID, this.langID);
                };
                QuizMasterComponent.prototype.onLanguageChange = function (event) {
                    console.log("new language!", event);
                    this.langID = this._quizSettingsService.getLanguageID();
                    this.initAllServices();
                };
                QuizMasterComponent.prototype.onseServiceDoneLoading = function (loadingSuccessfull) {
                    if (loadingSuccessfull) {
                        this.currentServicedLoaded++;
                    }
                    else {
                        this.asyncDataLoadError = true;
                    }
                    if (this.currentServicedLoaded == this.totalServicesToLoaded) {
                        //unsubscribe from all!
                        for (var _i = 0, _a = Object.keys(this.listOfInitSubs); _i < _a.length; _i++) {
                            var currentID = _a[_i];
                            this.listOfInitSubs[currentID].unsubscribe();
                        }
                        this.listOfInitSubs = [];
                        this.asyncDataLoaded = true;
                    }
                };
                QuizMasterComponent.prototype.nextComponent = function () {
                    this.currentActive++;
                    if (this.currentActive > 9) {
                        this.currentActive = 0;
                    }
                };
                QuizMasterComponent.prototype.gotoComponent = function (compID) {
                    this.currentActive = compID;
                };
                QuizMasterComponent.prototype.subIsActive = function (compID) {
                    if (this.currentActive == compID) {
                        return true;
                    }
                    else {
                        return false;
                    }
                };
                QuizMasterComponent = __decorate([
                    core_1.Component({
                        selector: 'birdid-quiz-master',
                        templateUrl: 'app/quiz-master.component.html',
                        styleUrls: ['app/quiz-master.component.css'],
                        directives: [
                            quiz_media_select_component_1.QuizMediaSelectComponent,
                            quiz_additional_settings_component_1.QuizAdditionalSettingsComponent,
                            select_species_component_1.SelectSpeciesComponent,
                            the_quiz_component_1.TheQuizComponent,
                            quiz_results_component_1.QuizResultComponent,
                            quiz_summary_component_1.QuizSummaryComponent,
                            changing_language_component_1.QuizChangingLanguageComponent,
                            router_1.ROUTER_DIRECTIVES
                        ],
                        providers: [
                            router_1.ROUTER_PROVIDERS,
                            http_1.HTTP_PROVIDERS,
                            quiz_settings_service_1.QuizSettingsService,
                            quiz_questions_service_1.QuizQuestionsService,
                            quiz_logic_service_1.QuizLogicService,
                            quiz_translation_service_1.QuizTranslationService,
                            quiz_results_service_1.QuizResultsService,
                            quiz_specie_service_1.QuizSpecieService,
                            quiz_competition_group_service_1.QuizCompetitionService,
                            quiz_changing_language_service_1.QuizChangingLanguageService,
                            quiz_formal_test_service_1.QuizFormalTestService
                        ]
                    }), 
                    __metadata('design:paramtypes', [quiz_settings_service_1.QuizSettingsService, quiz_questions_service_1.QuizQuestionsService, quiz_logic_service_1.QuizLogicService, quiz_translation_service_1.QuizTranslationService, quiz_results_service_1.QuizResultsService, quiz_specie_service_1.QuizSpecieService, quiz_formal_test_service_1.QuizFormalTestService, quiz_competition_group_service_1.QuizCompetitionService, quiz_changing_language_service_1.QuizChangingLanguageService, router_1.Router])
                ], QuizMasterComponent);
                return QuizMasterComponent;
            }());
            exports_1("QuizMasterComponent", QuizMasterComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInF1aXotbWFzdGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWtFQTtnQkFnQkcsdUJBQXVCO2dCQUN2Qix5QkFBeUI7Z0JBQ3pCLFVBQVU7Z0JBQ1YsYUFBYTtnQkFFYiw2QkFDUyxvQkFBeUMsRUFDekMsb0JBQTBDLEVBQzFDLGlCQUFtQyxFQUNuQyx1QkFBK0MsRUFDL0MsbUJBQXVDLEVBQ3ZDLGtCQUFxQyxFQUNyQyxzQkFBNkMsRUFDN0MsNEJBQW9ELEVBQ3BELDRCQUF5RCxFQUN6RCxPQUFlO29CQS9CM0IsaUJBc0pDO29CQWhJVyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXFCO29CQUN6Qyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO29CQUMxQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQWtCO29CQUNuQyw0QkFBdUIsR0FBdkIsdUJBQXVCLENBQXdCO29CQUMvQyx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQW9CO29CQUN2Qyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW1CO29CQUNyQywyQkFBc0IsR0FBdEIsc0JBQXNCLENBQXVCO29CQUM3QyxpQ0FBNEIsR0FBNUIsNEJBQTRCLENBQXdCO29CQUNwRCxpQ0FBNEIsR0FBNUIsNEJBQTRCLENBQTZCO29CQUN6RCxZQUFPLEdBQVAsT0FBTyxDQUFRO29CQTlCeEIsVUFBSyxHQUFHLHFCQUFxQixDQUFDO29CQUU5QixlQUFVLEdBQUcsRUFBRSxDQUFDO29CQUVoQiwwQkFBcUIsR0FBRyxDQUFDLENBQUM7b0JBQzFCLDBCQUFxQixHQUFHLENBQUMsQ0FBQztvQkFDMUIsbUJBQWMsR0FBRyxFQUFFLENBQUM7b0JBQ3BCLG9CQUFlLEdBQUcsS0FBSyxDQUFDO29CQUN4Qix1QkFBa0IsR0FBRyxLQUFLLENBQUM7b0JBRTNCLFdBQU0sR0FBRyxDQUFD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QUFBO2dCQTJKRiwwQkFBQztZQUFELENBdEpBLEFBc0pDLElBQUE7WUF0SkQscURBc0pDLENBQUEiLCJmaWxlIjoicXVpei1tYXN0ZXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSAgICAgICBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHsgSHR0cCwgSFRUUF9QUk9WSURFUlMgfSBmcm9tICdhbmd1bGFyMi9odHRwJztcclxuaW1wb3J0IHsgUm91dGVyLCBSb3V0ZUNvbmZpZywgUk9VVEVSX0RJUkVDVElWRVMsIFJPVVRFUl9QUk9WSURFUlMgfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IHsgUXVpelNldHRpbmdzU2VydmljZSB9ICBmcm9tICcuL3NoYXJlZC9xdWl6LXNldHRpbmdzLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBRdWl6UXVlc3Rpb25zU2VydmljZSB9ICBmcm9tICcuL3NoYXJlZC9xdWl6LXF1ZXN0aW9ucy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUXVpekxvZ2ljU2VydmljZSB9ICBmcm9tICcuL3NoYXJlZC9xdWl6LWxvZ2ljLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBRdWl6VHJhbnNsYXRpb25TZXJ2aWNlIH0gIGZyb20gJy4vc2hhcmVkL3F1aXotdHJhbnNsYXRpb24uc2VydmljZSc7XHJcbmltcG9ydCB7IFF1aXpSZXN1bHRzU2VydmljZSB9ICBmcm9tICcuL3NoYXJlZC9xdWl6LXJlc3VsdHMuc2VydmljZSc7XHJcbmltcG9ydCB7IFF1aXpTcGVjaWVTZXJ2aWNlIH0gIGZyb20gJy4vc2hhcmVkL3F1aXotc3BlY2llLnNlcnZpY2UnO1xyXG5cclxuaW1wb3J0IHsgUXVpekNvbXBldGl0aW9uU2VydmljZX0gZnJvbSBcIi4vc2hhcmVkL3F1aXotY29tcGV0aXRpb24tZ3JvdXAuc2VydmljZVwiO1xyXG5cclxuaW1wb3J0IHsgUXVpekZvcm1hbFRlc3RTZXJ2aWNlIH0gIGZyb20gJy4vc2hhcmVkL3F1aXotZm9ybWFsLXRlc3Quc2VydmljZSc7XHJcbmltcG9ydCB7IFF1aXpDaGFuZ2luZ0xhbmd1YWdlU2VydmljZSB9ICBmcm9tICcuL3NoYXJlZC9xdWl6LWNoYW5naW5nLWxhbmd1YWdlLnNlcnZpY2UnO1xyXG5cclxuXHJcblxyXG5cclxuaW1wb3J0IHsgUXVpek1lZGlhU2VsZWN0Q29tcG9uZW50IH0gIGZyb20gJy4vbWVkaWEtc2VsZWN0L3F1aXotbWVkaWEtc2VsZWN0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFF1aXpBZGRpdGlvbmFsU2V0dGluZ3NDb21wb25lbnQgfSAgZnJvbSAnLi9tZWRpYS1hZGRpdGlvbmFsLXNldHRpbmdzL3F1aXotYWRkaXRpb25hbC1zZXR0aW5ncy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUaGVRdWl6Q29tcG9uZW50IH0gIGZyb20gJy4vdGhlLXF1aXovdGhlLXF1aXouY29tcG9uZW50JztcclxuaW1wb3J0IHsgUXVpelJlc3VsdENvbXBvbmVudCB9ICBmcm9tICcuL3F1aXotcmVzdWx0cy9xdWl6LXJlc3VsdHMuY29tcG9uZW50JztcclxuaW1wb3J0IHtTZWxlY3RTcGVjaWVzQ29tcG9uZW50fSBmcm9tIFwiLi9zZWxlY3Qtc3BlY2llcy9zZWxlY3Qtc3BlY2llcy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtRdWl6Q29tcGV0aXRpb25Hcm91cENvbXBvbmVudH0gZnJvbSBcIi4vY29tcGV0aXRpb24tZ3JvdXAvY29tcGV0aXRpb24tZ3JvdXAuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7UXVpelN1bW1hcnlDb21wb25lbnR9IGZyb20gXCIuL3F1aXotcmVzdWx0cy9xdWl6LXN1bW1hcnkuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7UXVpekNoYW5naW5nTGFuZ3VhZ2VDb21wb25lbnR9IGZyb20gXCIuL3NoYXJlZC5jb21wb25lbnQvY2hhbmdpbmctbGFuZ3VhZ2UuY29tcG9uZW50XCI7XHJcblxyXG5cclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogJ2JpcmRpZC1xdWl6LW1hc3RlcicsXHJcblx0dGVtcGxhdGVVcmw6ICdhcHAvcXVpei1tYXN0ZXIuY29tcG9uZW50Lmh0bWwnLFxyXG5cdHN0eWxlVXJsczogIFsnYXBwL3F1aXotbWFzdGVyLmNvbXBvbmVudC5jc3MnXSxcclxuXHRkaXJlY3RpdmVzOiBbXHJcblx0XHRRdWl6TWVkaWFTZWxlY3RDb21wb25lbnQsXHJcblx0XHRRdWl6QWRkaXRpb25hbFNldHRpbmdzQ29tcG9uZW50LFxyXG5cdFx0U2VsZWN0U3BlY2llc0NvbXBvbmVudCxcclxuXHRcdFRoZVF1aXpDb21wb25lbnQsXHJcblx0XHRRdWl6UmVzdWx0Q29tcG9uZW50LFxyXG5cdFx0UXVpelN1bW1hcnlDb21wb25lbnQsXHJcblx0XHRRdWl6Q2hhbmdpbmdMYW5ndWFnZUNvbXBvbmVudCxcclxuXHRcdFJPVVRFUl9ESVJFQ1RJVkVTXHJcblx0XSxcclxuXHRwcm92aWRlcnM6IFtcclxuXHRcdFJPVVRFUl9QUk9WSURFUlMsXHJcblx0XHRIVFRQX1BST1ZJREVSUyxcclxuXHRcdFF1aXpTZXR0aW5nc1NlcnZpY2UsXHJcblx0XHRRdWl6UXVlc3Rpb25zU2VydmljZSxcclxuXHRcdFF1aXpMb2dpY1NlcnZpY2UsXHJcblx0XHRRdWl6VHJhbnNsYXRpb25TZXJ2aWNlLFxyXG5cdFx0UXVpelJlc3VsdHNTZXJ2aWNlLFxyXG5cdFx0UXVpelNwZWNpZVNlcnZpY2UsXHJcblx0XHRRdWl6Q29tcGV0aXRpb25TZXJ2aWNlLFxyXG5cdFx0UXVpekNoYW5naW5nTGFuZ3VhZ2VTZXJ2aWNlLFxyXG5cclxuXHJcblx0XHRRdWl6Rm9ybWFsVGVzdFNlcnZpY2VcclxuXHJcblx0XVxyXG59KVxyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFF1aXpNYXN0ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdCAgdGl0bGUgPSAnQmlyZGlkIFF1aXogbWFzdGVyISc7XHJcblxyXG5cdCAgdGVzdFN0cmluZyA9IFwiXCI7XHJcblxyXG5cdCAgY3VycmVudFNlcnZpY2VkTG9hZGVkID0gMDtcclxuXHQgIHRvdGFsU2VydmljZXNUb0xvYWRlZCA9IDM7XHJcblx0ICBsaXN0T2ZJbml0U3VicyA9IFtdO1xyXG5cdCAgYXN5bmNEYXRhTG9hZGVkID0gZmFsc2U7XHJcblx0ICBhc3luY0RhdGFMb2FkRXJyb3IgPSBmYWxzZTtcclxuXHJcblx0ICBzaXRlSUQgPSAxO1xyXG5cclxuXHQgIGxhbmdJRCA9IDI7XHJcblxyXG5cdCAgY3VycmVudEFjdGl2ZSA9IDA7XHJcbiBcdCAvLzAgPSBtZWRpYXR5cGUgc2Vsa2VjdFxyXG4gXHQgLy8xID0gYWRkaXRpb25hbCBzZXR0aW5nc1xyXG4gXHQgLy8yID0gcXVpelxyXG4gXHQgLy8zID0gIHJlc3VsdFxyXG5cclxuXHQgIGNvbnN0cnVjdG9yKFxyXG5cdFx0ICBwcml2YXRlIF9xdWl6U2V0dGluZ3NTZXJ2aWNlOiBRdWl6U2V0dGluZ3NTZXJ2aWNlLFxyXG5cdFx0ICBwcml2YXRlIF9xdWl6UXVlc3Rpb25TZXJ2aWNlOiBRdWl6UXVlc3Rpb25zU2VydmljZSxcclxuXHRcdCAgcHJpdmF0ZSBfcXVpekxvZ2ljU2VydmljZTogUXVpekxvZ2ljU2VydmljZSxcclxuXHRcdCAgcHJpdmF0ZSBfcXVpelRyYW5zbGF0aW9uU2VydmljZTogUXVpelRyYW5zbGF0aW9uU2VydmljZSxcclxuXHRcdCAgcHJpdmF0ZSBfcXVpelJlc3VsdHNTZXJ2aWNlOiBRdWl6UmVzdWx0c1NlcnZpY2UsXHJcblx0XHQgIHByaXZhdGUgX3F1aXpTcGVjaWVTZXJ2aWNlOiBRdWl6U3BlY2llU2VydmljZSxcclxuXHRcdCAgcHJpdmF0ZSBfcXVpekZvcm1hbFRlc3RTZXJ2aWNlOiBRdWl6Rm9ybWFsVGVzdFNlcnZpY2UsXHJcblx0XHQgIHByaXZhdGUgX3F1aXpDb21wZXRpdGlvbkdyb3VwU2VydmljZTogUXVpekNvbXBldGl0aW9uU2VydmljZSxcclxuXHRcdCAgcHJpdmF0ZSBfcXVpekNoYW5naW5nTGFuZ3VhZ2VTZXJ2aWNlOiBRdWl6Q2hhbmdpbmdMYW5ndWFnZVNlcnZpY2UsXHJcblx0XHQgIHByaXZhdGUgX3JvdXRlcjogUm91dGVyXHJcblx0ICApe1xyXG5cclxuXHRcdCAgLy9sb29raW5nIGZvciByb3V0ZSBjaGFuZ2VcclxuXHRcdCAgX3JvdXRlci5zdWJzY3JpYmUoKG5ld1JvdXRlKSA9PiB0aGlzLm9uUm91dGVDaGFuZ2UobmV3Um91dGUpKVxyXG5cclxuXHQgIH1cclxuXHJcblx0ICBvblJvdXRlQ2hhbmdlKG5ld1JvdXRlKXtcclxuXHJcblx0XHQgIC8vY29uc29sZS5sb2coXCJSb3V0ZSBjaGFuZ2U6IFwiLCBuZXdSb3V0ZSApO1xyXG5cclxuXHRcdCAgLy9tb3N0bHkgb25seSB1c2VkIGZvciBkZXYgYmFyIG9uIHRvcCBjdXJyZW50bHlcclxuXHRcdCAgaWYobmV3Um91dGUgPT0gJ2NvbXBldGl0aW9uR3JvdXBDb21wb25lbnQnKXtcclxuXHRcdFx0dGhpcy5jdXJyZW50QWN0aXZlID0gMDtcclxuXHRcdH1lbHNlIGlmKG5ld1JvdXRlID09ICdtZWRpYVNlbGVjdCcpe1xyXG5cdFx0XHQgIHRoaXMuY3VycmVudEFjdGl2ZSA9IDE7XHJcblx0XHQgIH1lbHNlIGlmKG5ld1JvdXRlID09ICdtZWRpYUFkZGl0aW9uYWxTZXR0aW5ncycpe1xyXG5cdFx0XHQgIHRoaXMuY3VycmVudEFjdGl2ZSA9IDI7XHJcblx0XHRcdH1lbHNlIGlmKG5ld1JvdXRlID09ICdtZWRpYVNlbGVjdFNwZWNpZXMnKXtcclxuXHRcdFx0ICB0aGlzLmN1cnJlbnRBY3RpdmUgPSAzO1xyXG5cdFx0ICB9ZWxzZSBpZihuZXdSb3V0ZSA9PSAnbWVkaWFRdWl6Jyl7XHJcblx0XHRcdCAgdGhpcy5jdXJyZW50QWN0aXZlID0gNDtcclxuXHRcdCAgfWVsc2UgaWYobmV3Um91dGUgPT0gJ21lZGlhUXVpelJlc3VsdHMnKXtcclxuXHRcdFx0ICB0aGlzLmN1cnJlbnRBY3RpdmUgPSA1O1xyXG5cdFx0ICB9ZWxzZSBpZihuZXdSb3V0ZSA9PSAnbWVkaWFRdWl6U3VtbWFyeScpe1xyXG5cdFx0XHQgIHRoaXMuY3VycmVudEFjdGl2ZSA9IDY7XHJcblx0XHQgIH1lbHNlIGlmKG5ld1JvdXRlID09ICdmb3JtYWxUZXN0U3RhcnQnKXtcclxuXHRcdFx0ICB0aGlzLmN1cnJlbnRBY3RpdmUgPSA3O1xyXG5cdFx0ICB9ZWxzZSBpZihuZXdSb3V0ZSA9PSAnZm9ybWFsVGVzdEVuZCcpe1xyXG5cdFx0XHQgIHRoaXMuY3VycmVudEFjdGl2ZSA9IDg7XHJcblxyXG5cdFx0ICB9XHJcblxyXG5cdCAgfVxyXG5cclxuXHQgIG5nT25Jbml0KCkge1xyXG5cclxuXHRcdHRoaXMuaW5pdEFsbFNlcnZpY2VzKCk7XHJcblxyXG5cdFx0Ly9vbiBsYW5ndWFnZSBjaGFuZ2VcclxuXHRcdHRoaXMuX3F1aXpTZXR0aW5nc1NlcnZpY2UuZ2V0TGFuZ3VhZ2VDaG5hZ2VFdmVudCgpLnN1YnNjcmliZSgoZXZlbnQpID0+ICh0aGlzLm9uTGFuZ3VhZ2VDaGFuZ2UoZXZlbnQpICkpO1xyXG5cclxuXHQgfVxyXG5cclxuXHQgaW5pdEFsbFNlcnZpY2VzKCl7XHJcblxyXG5cdFx0IHRoaXMuYXN5bmNEYXRhTG9hZGVkID0gZmFsc2U7XHJcblx0XHQgdGhpcy5jdXJyZW50U2VydmljZWRMb2FkZWQgPSAwO1xyXG5cdFx0Ly9sb2FkIGRhdGEgZnJvbSBzZXJ2ZXJcclxuXHRcdHRoaXMubGlzdE9mSW5pdFN1YnMucHVzaCh0aGlzLl9xdWl6VHJhbnNsYXRpb25TZXJ2aWNlLmluaXRpYWxpemUodGhpcy5zaXRlSUQsIHRoaXMubGFuZ0lEKS5zdWJzY3JpYmUoKGV2ZW50KSA9PiAoIHRoaXMub25zZVNlcnZpY2VEb25lTG9hZGluZyhldmVudCkgKSkpO1xyXG5cdFx0dGhpcy5saXN0T2ZJbml0U3Vicy5wdXNoKHRoaXMuX3F1aXpTZXR0aW5nc1NlcnZpY2UuaW5pdGlhbGl6ZSh0aGlzLnNpdGVJRCwgdGhpcy5sYW5nSUQpLnN1YnNjcmliZSgoZXZlbnQpID0+ICggdGhpcy5vbnNlU2VydmljZURvbmVMb2FkaW5nKGV2ZW50KSApKSk7XHJcblx0XHR0aGlzLmxpc3RPZkluaXRTdWJzLnB1c2godGhpcy5fcXVpelNwZWNpZVNlcnZpY2UuaW5pdGlhbGl6ZSh0aGlzLnNpdGVJRCwgdGhpcy5sYW5nSUQpLnN1YnNjcmliZSgoZXZlbnQpID0+ICggdGhpcy5vbnNlU2VydmljZURvbmVMb2FkaW5nKGV2ZW50KSApKSk7XHJcblx0XHR0aGlzLmxpc3RPZkluaXRTdWJzLnB1c2godGhpcy5fcXVpekNvbXBldGl0aW9uR3JvdXBTZXJ2aWNlLmluaXRpYWxpemUodGhpcy5zaXRlSUQsIHRoaXMubGFuZ0lEKS5zdWJzY3JpYmUoKGV2ZW50KSA9PiAoIHRoaXMub25zZVNlcnZpY2VEb25lTG9hZGluZyhldmVudCkgKSkpO1xyXG5cdFx0dGhpcy5saXN0T2ZJbml0U3Vicy5wdXNoKHRoaXMuX3F1aXpDaGFuZ2luZ0xhbmd1YWdlU2VydmljZS5pbml0aWFsaXplKHRoaXMuc2l0ZUlEKS5zdWJzY3JpYmUoKGV2ZW50KSA9PiAodGhpcy5vbnNlU2VydmljZURvbmVMb2FkaW5nKGV2ZW50KSkpICk7XHJcblxyXG5cdFx0dGhpcy50b3RhbFNlcnZpY2VzVG9Mb2FkZWQgPSA1O1xyXG5cclxuXHRcdC8vbm90IGxvYWRpbmcgYW55IGRhdGEgZnJvbSBzZXJ2ZXJcclxuXHRcdHRoaXMuX3F1aXpSZXN1bHRzU2VydmljZS5pbml0aWFsaXplKHRoaXMuc2l0ZUlELCB0aGlzLmxhbmdJRCk7XHJcblx0XHR0aGlzLl9xdWl6Rm9ybWFsVGVzdFNlcnZpY2UuaW5pdGlhbGl6ZSh0aGlzLnNpdGVJRCwgdGhpcy5sYW5nSUQpO1xyXG5cclxuXHQgfVxyXG5cclxuXHQgb25MYW5ndWFnZUNoYW5nZShldmVudCl7XHJcblx0XHQgY29uc29sZS5sb2coXCJuZXcgbGFuZ3VhZ2UhXCIsIGV2ZW50KTtcclxuXHRcdCB0aGlzLmxhbmdJRCA9IHRoaXMuX3F1aXpTZXR0aW5nc1NlcnZpY2UuZ2V0TGFuZ3VhZ2VJRCgpO1xyXG5cdFx0IHRoaXMuaW5pdEFsbFNlcnZpY2VzKCk7XHJcblxyXG5cdCB9XHJcblxyXG5cdCBvbnNlU2VydmljZURvbmVMb2FkaW5nKGxvYWRpbmdTdWNjZXNzZnVsbCl7XHJcblxyXG5cdFx0IGlmKGxvYWRpbmdTdWNjZXNzZnVsbCl7XHJcblx0XHRcdCB0aGlzLmN1cnJlbnRTZXJ2aWNlZExvYWRlZCArKztcclxuXHRcdCB9ZWxzZXtcclxuXHRcdFx0IHRoaXMuYXN5bmNEYXRhTG9hZEVycm9yID0gdHJ1ZTtcclxuXHRcdCB9XHJcblxyXG5cdFx0IGlmKHRoaXMuY3VycmVudFNlcnZpY2VkTG9hZGVkID09IHRoaXMudG90YWxTZXJ2aWNlc1RvTG9hZGVkKXtcclxuXHRcdFx0IC8vdW5zdWJzY3JpYmUgZnJvbSBhbGwhXHJcbiBcdFx0XHQgZm9yIChsZXQgY3VycmVudElEIG9mIE9iamVjdC5rZXlzKHRoaXMubGlzdE9mSW5pdFN1YnMpKSB7XHJcbiBcdFx0XHRcdCB0aGlzLmxpc3RPZkluaXRTdWJzW2N1cnJlbnRJRF0udW5zdWJzY3JpYmUoKTtcclxuIFx0XHRcdCB9XHJcbiBcdFx0XHQgdGhpcy5saXN0T2ZJbml0U3VicyA9IFtdO1xyXG5cdFx0XHQgdGhpcy5hc3luY0RhdGFMb2FkZWQgPSB0cnVlO1xyXG5cdFx0IH1cclxuXHJcblxyXG5cdCB9XHJcblxyXG5cdCAgbmV4dENvbXBvbmVudCgpe1xyXG5cclxuXHRcdCAgdGhpcy5jdXJyZW50QWN0aXZlICsrO1xyXG5cdFx0ICBpZih0aGlzLmN1cnJlbnRBY3RpdmUgPiA5KXtcclxuXHRcdFx0ICB0aGlzLmN1cnJlbnRBY3RpdmUgPSAwO1xyXG5cdFx0ICB9XHJcblxyXG5cclxuXHQgIH1cclxuXHJcblx0ICBnb3RvQ29tcG9uZW50KGNvbXBJRCl7XHJcblxyXG5cdCAgICB0aGlzLmN1cnJlbnRBY3RpdmUgPSBjb21wSUQ7XHJcblxyXG5cdCAgfVxyXG5cclxuXHQgIHN1YklzQWN0aXZlKGNvbXBJRCl7XHJcblxyXG5cdFx0ICBpZih0aGlzLmN1cnJlbnRBY3RpdmUgPT0gY29tcElEKXtcclxuXHRcdFx0ICByZXR1cm4gdHJ1ZVxyXG5cdFx0ICB9ZWxzZXtcclxuXHRcdFx0ICByZXR1cm4gZmFsc2U7XHJcblx0XHQgIH1cclxuXHJcblxyXG5cdCAgfVxyXG5cclxuXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
