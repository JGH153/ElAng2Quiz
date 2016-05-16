System.register(['angular2/core', 'angular2/http', 'angular2/router', './../shared/quiz-settings.service', './../shared/quiz-results.service', './../shared.component/resultlist.component', '../shared/quiz-competition-group.service', './../shared/quiz-changing-language.service'], function(exports_1, context_1) {
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
    var core_1, http_1, router_1, quiz_settings_service_1, quiz_results_service_1, resultlist_component_1, quiz_competition_group_service_1, quiz_changing_language_service_1;
    var QuizCompetitionGroupInfoComponent;
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
            function (resultlist_component_1_1) {
                resultlist_component_1 = resultlist_component_1_1;
            },
            function (quiz_competition_group_service_1_1) {
                quiz_competition_group_service_1 = quiz_competition_group_service_1_1;
            },
            function (quiz_changing_language_service_1_1) {
                quiz_changing_language_service_1 = quiz_changing_language_service_1_1;
            }],
        execute: function() {
            QuizCompetitionGroupInfoComponent = (function () {
                function QuizCompetitionGroupInfoComponent(_quizSettingsService, _router, _quizResultsService, _quizCompetitionGroupService, _http, _quizChangingLanguageService) {
                    this._quizSettingsService = _quizSettingsService;
                    this._router = _router;
                    this._quizResultsService = _quizResultsService;
                    this._quizCompetitionGroupService = _quizCompetitionGroupService;
                    this._http = _http;
                    this._quizChangingLanguageService = _quizChangingLanguageService;
                    this.title = "comp info";
                    this.competitionGroup = null;
                    this.displayInfo = false;
                    this.noRestrictions = false;
                }
                QuizCompetitionGroupInfoComponent.prototype.ngOnChanges = function () {
                    if (this.competitionGroup != null) {
                        this.displayInfo = true;
                        if (this.competitionGroup.restrict_filtes) {
                            this.noRestrictions = true;
                        }
                        else {
                            this.noRestrictions = false;
                        }
                    }
                    else {
                        this.displayInfo = false;
                    }
                };
                QuizCompetitionGroupInfoComponent.prototype.ngOnInit = function () {
                };
                QuizCompetitionGroupInfoComponent = __decorate([
                    core_1.Component({
                        selector: 'birdid-quiz-competition-group-info',
                        templateUrl: 'app/competition-group/quiz-competition-group-info.component.html',
                        styleUrls: ['app/competition-group/quiz-competition-group-info.component.css'],
                        directives: [
                            resultlist_component_1.ResultlistComponent
                        ],
                        providers: [],
                        inputs: ['competitionGroup'],
                    }), 
                    __metadata('design:paramtypes', [quiz_settings_service_1.QuizSettingsService, router_1.Router, quiz_results_service_1.QuizResultsService, quiz_competition_group_service_1.QuizCompetitionService, http_1.Http, quiz_changing_language_service_1.QuizChangingLanguageService])
                ], QuizCompetitionGroupInfoComponent);
                return QuizCompetitionGroupInfoComponent;
            }());
            exports_1("QuizCompetitionGroupInfoComponent", QuizCompetitionGroupInfoComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBldGl0aW9uLWdyb3VwL2NvbXBldGl0aW9uLWdyb3VwLWluZm8uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBMEJBO2dCQVFDLDJDQUNTLG9CQUF5QyxFQUN6QyxPQUFlLEVBQ2YsbUJBQXVDLEVBQ3ZDLDRCQUFvRCxFQUM5QyxLQUFXLEVBQ2pCLDRCQUF5RDtvQkFMekQseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFxQjtvQkFDekMsWUFBTyxHQUFQLE9BQU8sQ0FBUTtvQkFDZix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQW9CO29CQUN2QyxpQ0FBNEIsR0FBNUIsNEJBQTRCLENBQXdCO29CQUM5QyxVQUFLLEdBQUwsS0FBSyxDQUFNO29CQUNqQixpQ0FBNEIsR0FBNUIsNEJBQTRCLENBQTZCO29CQVpsRSxVQUFLLEdBQUcsV0FBVyxDQUFBO29CQUNuQixxQkFBZ0IsR0FBRyxJQUFJLENBQUM7b0JBQ3hCLGdCQUFXLEdBQUcsS0FBSyxDQUFDO29CQUNwQixtQkFBYyxHQUFHLEtBQUssQ0FBQztnQkFVckIsQ0FBQztnQkFFSCx1REFBVyxHQUFYO29CQUVDLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxJQUFJLENBQUMsQ0FBQSxDQUFDO3dCQUNqQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQzt3QkFDeEIsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxDQUFBLENBQUM7NEJBQ3pDLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO3dCQUM1QixDQUFDO3dCQUFBLElBQUksQ0FBQSxDQUFDOzRCQUNMLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO3dCQUM3QixDQUFDO29CQUNGLENBQUM7b0JBQUEsSUFBSSxDQUFBLENBQUM7d0JBQ0wsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7b0JBQzFCLENBQUM7Z0JBRUYsQ0FBQztnQkFFRCxvREFBUSxHQUFSO2dCQUVBLENBQUM7Z0JBaERGO29CQUFDLGdCQUFTLENBQUM7d0JBQ1YsUUFBUSxFQUFFLG9DQUFvQzt3QkFDOUMsV0FBVyxFQUFFLGtFQUFrRTt3QkFDNUUsU0FBUyxFQUFHLENBQUMsaUVBQWlFLENBQUM7d0JBRS9FLFVBQVUsRUFBRTs0QkFDZCwwQ0FBbUI7eUJBQ25CO3dCQUNELFNBQVMsRUFBRSxFQUdWO3dCQUNELE1BQU0sRUFBRSxDQUFDLGtCQUFrQixDQUFDO3FCQUM1QixDQUFDOztxREFBQTtnQkF1Q0Ysd0NBQUM7WUFBRCxDQXRDQSxBQXNDQyxJQUFBO1lBdENELGlGQXNDQyxDQUFBIiwiZmlsZSI6ImNvbXBldGl0aW9uLWdyb3VwL2NvbXBldGl0aW9uLWdyb3VwLWluZm8uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE9uQ2hhbmdlcyB9ICAgICAgIGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwLCBIVFRQX1BST1ZJREVSUyB9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IHsgUXVpelNldHRpbmdzU2VydmljZSB9ICBmcm9tICcuLy4uL3NoYXJlZC9xdWl6LXNldHRpbmdzLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBRdWl6UmVzdWx0c1NlcnZpY2UgfSAgZnJvbSAnLi8uLi9zaGFyZWQvcXVpei1yZXN1bHRzLnNlcnZpY2UnO1xyXG5cclxuaW1wb3J0IHsgUmVzdWx0bGlzdENvbXBvbmVudCB9ICBmcm9tICcuLy4uL3NoYXJlZC5jb21wb25lbnQvcmVzdWx0bGlzdC5jb21wb25lbnQnO1xyXG5cclxuaW1wb3J0IHtRdWl6Q29tcGV0aXRpb25TZXJ2aWNlfSBmcm9tICcuLi9zaGFyZWQvcXVpei1jb21wZXRpdGlvbi1ncm91cC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUXVpekNoYW5naW5nTGFuZ3VhZ2VTZXJ2aWNlIH0gIGZyb20gJy4vLi4vc2hhcmVkL3F1aXotY2hhbmdpbmctbGFuZ3VhZ2Uuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogJ2JpcmRpZC1xdWl6LWNvbXBldGl0aW9uLWdyb3VwLWluZm8nLFxyXG5cdHRlbXBsYXRlVXJsOiAnYXBwL2NvbXBldGl0aW9uLWdyb3VwL3F1aXotY29tcGV0aXRpb24tZ3JvdXAtaW5mby5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6ICBbJ2FwcC9jb21wZXRpdGlvbi1ncm91cC9xdWl6LWNvbXBldGl0aW9uLWdyb3VwLWluZm8uY29tcG9uZW50LmNzcyddLFxyXG5cclxuICAgIGRpcmVjdGl2ZXM6IFtcclxuXHRcdFJlc3VsdGxpc3RDb21wb25lbnRcclxuXHRdLFxyXG5cdHByb3ZpZGVyczogW1xyXG5cclxuXHJcblx0XSxcclxuXHRpbnB1dHM6IFsnY29tcGV0aXRpb25Hcm91cCddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUXVpekNvbXBldGl0aW9uR3JvdXBJbmZvQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXN7XHJcblxyXG5cdHRpdGxlID0gXCJjb21wIGluZm9cIlxyXG5cdGNvbXBldGl0aW9uR3JvdXAgPSBudWxsO1xyXG5cdGRpc3BsYXlJbmZvID0gZmFsc2U7XHJcblx0bm9SZXN0cmljdGlvbnMgPSBmYWxzZTtcclxuXHJcblxyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSBfcXVpelNldHRpbmdzU2VydmljZTogUXVpelNldHRpbmdzU2VydmljZSxcclxuXHRcdHByaXZhdGUgX3JvdXRlcjogUm91dGVyLFxyXG5cdFx0cHJpdmF0ZSBfcXVpelJlc3VsdHNTZXJ2aWNlOiBRdWl6UmVzdWx0c1NlcnZpY2UsXHJcblx0XHRwcml2YXRlIF9xdWl6Q29tcGV0aXRpb25Hcm91cFNlcnZpY2U6IFF1aXpDb21wZXRpdGlvblNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBfaHR0cDogSHR0cCxcclxuXHRcdHByaXZhdGUgX3F1aXpDaGFuZ2luZ0xhbmd1YWdlU2VydmljZTogUXVpekNoYW5naW5nTGFuZ3VhZ2VTZXJ2aWNlXHJcblx0KXt9XHJcblxyXG5cdG5nT25DaGFuZ2VzKCl7XHJcblxyXG5cdFx0aWYodGhpcy5jb21wZXRpdGlvbkdyb3VwICE9IG51bGwpe1xyXG5cdFx0XHR0aGlzLmRpc3BsYXlJbmZvID0gdHJ1ZTtcclxuXHRcdFx0aWYodGhpcy5jb21wZXRpdGlvbkdyb3VwLnJlc3RyaWN0X2ZpbHRlcyl7XHJcblx0XHRcdFx0dGhpcy5ub1Jlc3RyaWN0aW9ucyA9IHRydWU7XHJcblx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdHRoaXMubm9SZXN0cmljdGlvbnMgPSBmYWxzZTtcclxuXHRcdFx0fVxyXG5cdFx0fWVsc2V7XHJcblx0XHRcdHRoaXMuZGlzcGxheUluZm8gPSBmYWxzZTtcclxuXHRcdH1cclxuXHJcblx0fVxyXG5cclxuXHRuZ09uSW5pdCgpIHtcclxuXHJcblx0fVxyXG5cclxuXHJcblxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
