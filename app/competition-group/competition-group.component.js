System.register(['angular2/core', 'angular2/http', 'angular2/router', './../shared/quiz-settings.service', './../shared/quiz-results.service', './../shared.component/resultlist.component', '../shared/quiz-competition-group.service', './../shared/quiz-changing-language.service', './../competition-group/competition-group-info.component', './../shared/quiz-specie.service'], function(exports_1, context_1) {
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
    var core_1, http_1, router_1, quiz_settings_service_1, quiz_results_service_1, resultlist_component_1, quiz_competition_group_service_1, quiz_changing_language_service_1, competition_group_info_component_1, quiz_specie_service_1;
    var QuizCompetitionGroupComponent;
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
            },
            function (competition_group_info_component_1_1) {
                competition_group_info_component_1 = competition_group_info_component_1_1;
            },
            function (quiz_specie_service_1_1) {
                quiz_specie_service_1 = quiz_specie_service_1_1;
            }],
        execute: function() {
            QuizCompetitionGroupComponent = (function () {
                function QuizCompetitionGroupComponent(_quizSettingsService, _router, _quizResultsService, _quizCompetitionGroupService, _http, _quizChangingLanguageService, _quizSpeciesService) {
                    this._quizSettingsService = _quizSettingsService;
                    this._router = _router;
                    this._quizResultsService = _quizResultsService;
                    this._quizCompetitionGroupService = _quizCompetitionGroupService;
                    this._http = _http;
                    this._quizChangingLanguageService = _quizChangingLanguageService;
                    this._quizSpeciesService = _quizSpeciesService;
                    this.title = 'Competition Groups';
                    this.updateResultlistIncrement = 0;
                    this.selectedCompetitionGroupData = null;
                    this.loading = false;
                    this.languageList = [];
                    this.filterGroupName = "";
                }
                QuizCompetitionGroupComponent.prototype.storeCompetitionGroupSettings = function () {
                    //setup default
                    this._quizSettingsService.setMediaType(this.selectedCompetitionGroupData.media_type_id);
                    this._quizSettingsService.setNormalQuiz();
                    this._quizSettingsService.setMediaDiff(this.selectedCompetitionGroupData.media_difficulty);
                    this._quizSettingsService.selectNumberOfQuestions(this.selectedCompetitionGroupData.num_questions);
                    this._quizSettingsService.setDuration(this.selectedCompetitionGroupData.time_limit);
                    this._quizSettingsService.setAlternatives(this.selectedCompetitionGroupData.use_specie_list);
                    this._quizSettingsService.setArea(this.selectedCompetitionGroupData.area_id);
                };
                QuizCompetitionGroupComponent.prototype.ngOnInit = function () {
                    this.getCompetitionGroups();
                };
                QuizCompetitionGroupComponent.prototype.startQuiz = function () {
                    //console.log(this._router);
                    this.storeCompetitionGroupSettings();
                    this._router.navigate(["QuizMediaQuiz"]);
                };
                QuizCompetitionGroupComponent.prototype.getCompetitionGroups = function () {
                    this.competitionGroups = this._quizCompetitionGroupService.getCompetitionGroups();
                    this.competitionGroupsProsessed = this.competitionGroups;
                };
                QuizCompetitionGroupComponent.prototype.inputGroupName = function (event) {
                    this.prosessCompGroups();
                };
                QuizCompetitionGroupComponent.prototype.prosessCompGroups = function () {
                    this.competitionGroupsProsessed = [];
                    for (var _i = 0, _a = Object.keys(this.competitionGroups); _i < _a.length; _i++) {
                        var id = _a[_i];
                        //add all if undefined
                        if (this.filterGroupName == undefined) {
                            this.competitionGroupsProsessed.push(this.competitionGroups[id]);
                            continue;
                        }
                        //if formSpecieName is a substring of name in list, or there is no formSpecieName
                        if (this.competitionGroups[id].name.toLowerCase().indexOf(this.filterGroupName.toLowerCase()) >= 0 || this.filterGroupName.length == 0) {
                            this.competitionGroupsProsessed.push(this.competitionGroups[id]);
                        }
                    }
                };
                QuizCompetitionGroupComponent.prototype.selectGroup = function (selectedGroupID) {
                    var _this = this;
                    this.selectedGroupID = selectedGroupID;
                    console.log('test0', this.selectedGroupID);
                    //this is updating the tables that show the results
                    this.loading = true;
                    this._quizCompetitionGroupService.loadSelectedCompetitionGroup(selectedGroupID).subscribe(function (responce) {
                        _this.onGroupInfoLoaded();
                    });
                };
                QuizCompetitionGroupComponent.prototype.onGroupInfoLoaded = function () {
                    this._quizSettingsService.setCompetitionGroupID(this.selectedGroupID);
                    this.updateResultlistIncrement++;
                    this.selectedCompetitionGroupData = this._quizCompetitionGroupService.getSelectedCompetitionGroup(this.selectedGroupID);
                    var compSpecieList = this.selectedCompetitionGroupData["specieList"];
                    this._quizSpeciesService.clearSelectedSpecies();
                    if (compSpecieList["usingSpecieList"]) {
                        var storeArray = [];
                        for (var i = 0; i < compSpecieList["numberOfSpecies"]; i++) {
                            storeArray.push(compSpecieList[i]);
                        }
                        this._quizSpeciesService.setSelectedSpecie(storeArray);
                    }
                    this.loading = false;
                    console.log("this.competitionGroupSelected:", this.selectedCompetitionGroupData, " id: ", this.selectedGroupID);
                };
                QuizCompetitionGroupComponent = __decorate([
                    core_1.Component({
                        selector: 'birdid-quiz-competition-group',
                        templateUrl: 'app/competition-group/quiz-competition-group.component.html',
                        styleUrls: ['app/competition-group/quiz-competition-group.component.css'],
                        directives: [
                            resultlist_component_1.ResultlistComponent,
                            competition_group_info_component_1.QuizCompetitionGroupInfoComponent
                        ],
                        providers: [],
                    }), 
                    __metadata('design:paramtypes', [quiz_settings_service_1.QuizSettingsService, router_1.Router, quiz_results_service_1.QuizResultsService, quiz_competition_group_service_1.QuizCompetitionService, http_1.Http, quiz_changing_language_service_1.QuizChangingLanguageService, quiz_specie_service_1.QuizSpecieService])
                ], QuizCompetitionGroupComponent);
                return QuizCompetitionGroupComponent;
            }());
            exports_1("QuizCompetitionGroupComponent", QuizCompetitionGroupComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBldGl0aW9uLWdyb3VwL2NvbXBldGl0aW9uLWdyb3VwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQThCQTtnQkFjQyx1Q0FDUyxvQkFBeUMsRUFDekMsT0FBZSxFQUNmLG1CQUF1QyxFQUN2Qyw0QkFBb0QsRUFDOUMsS0FBVyxFQUNqQiw0QkFBeUQsRUFDekQsbUJBQXNDO29CQU50Qyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXFCO29CQUN6QyxZQUFPLEdBQVAsT0FBTyxDQUFRO29CQUNmLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBb0I7b0JBQ3ZDLGlDQUE0QixHQUE1Qiw0QkFBNEIsQ0FBd0I7b0JBQzlDLFVBQUssR0FBTCxLQUFLLENBQU07b0JBQ2pCLGlDQUE0QixHQUE1Qiw0QkFBNEIsQ0FBNkI7b0JBQ3pELHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBbUI7b0JBcEIvQyxVQUFLLEdBQUcsb0JBQW9CLENBQUM7b0JBTTdCLDhCQUF5QixHQUFDLENBQUMsQ0FBQztvQkFDNUIsaUNBQTRCLEdBQUcsSUFBSSxDQUFDO29CQUNwQyxZQUFPLEdBQUcsS0FBSyxDQUFDO29CQUNoQixpQkFBWSxHQUFDLEVBQUUsQ0FBQztvQkFFaEIsb0JBQWUsR0FBRyxFQUFFLENBQUM7Z0JBVW5CLENBQUM7Z0JBRUEscUVBQTZCLEdBQTdCO29CQUVJLGVBQWU7b0JBQ2YsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsNEJBQTRCLENBQUMsYUFBYSxDQUFDLENBQUM7b0JBQ3hGLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxhQUFhLEVBQUUsQ0FBQztvQkFDMUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsNEJBQTRCLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztvQkFDM0YsSUFBSSxDQUFDLG9CQUFvQixDQUFD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Q0QsQ0FBQzs7aURBQUE7Z0JBK0hGLG9DQUFDO1lBQUQsQ0E5SEEsQUE4SEMsSUFBQTtZQTlIRCx5RUE4SEMsQ0FBQSIsImZpbGUiOiJjb21wZXRpdGlvbi1ncm91cC9jb21wZXRpdGlvbi1ncm91cC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCB9ICAgICAgIGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwLCBIVFRQX1BST1ZJREVSUyB9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IHsgUXVpelNldHRpbmdzU2VydmljZSB9ICBmcm9tICcuLy4uL3NoYXJlZC9xdWl6LXNldHRpbmdzLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBRdWl6UmVzdWx0c1NlcnZpY2UgfSAgZnJvbSAnLi8uLi9zaGFyZWQvcXVpei1yZXN1bHRzLnNlcnZpY2UnO1xyXG5cclxuaW1wb3J0IHsgUmVzdWx0bGlzdENvbXBvbmVudCB9ICBmcm9tICcuLy4uL3NoYXJlZC5jb21wb25lbnQvcmVzdWx0bGlzdC5jb21wb25lbnQnO1xyXG5cclxuaW1wb3J0IHtRdWl6Q29tcGV0aXRpb25TZXJ2aWNlfSBmcm9tICcuLi9zaGFyZWQvcXVpei1jb21wZXRpdGlvbi1ncm91cC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUXVpekNoYW5naW5nTGFuZ3VhZ2VTZXJ2aWNlIH0gIGZyb20gJy4vLi4vc2hhcmVkL3F1aXotY2hhbmdpbmctbGFuZ3VhZ2Uuc2VydmljZSc7XHJcblxyXG5pbXBvcnQgeyBRdWl6Q29tcGV0aXRpb25Hcm91cEluZm9Db21wb25lbnQgfSAgZnJvbSAnLi8uLi9jb21wZXRpdGlvbi1ncm91cC9jb21wZXRpdGlvbi1ncm91cC1pbmZvLmNvbXBvbmVudCc7XHJcblxyXG5pbXBvcnQgeyBRdWl6U3BlY2llU2VydmljZSB9ICBmcm9tICcuLy4uL3NoYXJlZC9xdWl6LXNwZWNpZS5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiAnYmlyZGlkLXF1aXotY29tcGV0aXRpb24tZ3JvdXAnLFxyXG5cdHRlbXBsYXRlVXJsOiAnYXBwL2NvbXBldGl0aW9uLWdyb3VwL3F1aXotY29tcGV0aXRpb24tZ3JvdXAuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiAgWydhcHAvY29tcGV0aXRpb24tZ3JvdXAvcXVpei1jb21wZXRpdGlvbi1ncm91cC5jb21wb25lbnQuY3NzJ10sXHJcblxyXG4gICAgZGlyZWN0aXZlczogW1xyXG5cdFx0UmVzdWx0bGlzdENvbXBvbmVudCxcclxuXHRcdFF1aXpDb21wZXRpdGlvbkdyb3VwSW5mb0NvbXBvbmVudFxyXG5cdF0sXHJcblx0cHJvdmlkZXJzOiBbXHJcblxyXG5cclxuXHRdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUXVpekNvbXBldGl0aW9uR3JvdXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XHJcblx0dGl0bGUgPSAnQ29tcGV0aXRpb24gR3JvdXBzJztcclxuXHJcblx0Y29tcGV0aXRpb25Hcm91cElEO1xyXG5cdGNvbXBldGl0aW9uR3JvdXBzO1xyXG5cdGNvbXBldGl0aW9uR3JvdXBzUHJvc2Vzc2VkO1xyXG5cdHNlbGVjdGVkR3JvdXBJRDtcclxuXHR1cGRhdGVSZXN1bHRsaXN0SW5jcmVtZW50PTA7XHJcblx0c2VsZWN0ZWRDb21wZXRpdGlvbkdyb3VwRGF0YSA9IG51bGw7XHJcblx0bG9hZGluZyA9IGZhbHNlO1xyXG5cdGxhbmd1YWdlTGlzdD1bXTtcclxuXHJcblx0ZmlsdGVyR3JvdXBOYW1lID0gXCJcIjtcclxuXHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIF9xdWl6U2V0dGluZ3NTZXJ2aWNlOiBRdWl6U2V0dGluZ3NTZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIsXHJcblx0XHRwcml2YXRlIF9xdWl6UmVzdWx0c1NlcnZpY2U6IFF1aXpSZXN1bHRzU2VydmljZSxcclxuXHRcdHByaXZhdGUgX3F1aXpDb21wZXRpdGlvbkdyb3VwU2VydmljZTogUXVpekNvbXBldGl0aW9uU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIF9odHRwOiBIdHRwLFxyXG5cdFx0cHJpdmF0ZSBfcXVpekNoYW5naW5nTGFuZ3VhZ2VTZXJ2aWNlOiBRdWl6Q2hhbmdpbmdMYW5ndWFnZVNlcnZpY2UsXHJcblx0XHRwcml2YXRlIF9xdWl6U3BlY2llc1NlcnZpY2U6IFF1aXpTcGVjaWVTZXJ2aWNlXHJcblx0KXt9XHJcblxyXG4gICAgc3RvcmVDb21wZXRpdGlvbkdyb3VwU2V0dGluZ3MoKXtcclxuXHJcbiAgICAgICAgLy9zZXR1cCBkZWZhdWx0XHJcbiAgICAgICAgdGhpcy5fcXVpelNldHRpbmdzU2VydmljZS5zZXRNZWRpYVR5cGUodGhpcy5zZWxlY3RlZENvbXBldGl0aW9uR3JvdXBEYXRhLm1lZGlhX3R5cGVfaWQpO1xyXG4gICAgICAgIHRoaXMuX3F1aXpTZXR0aW5nc1NlcnZpY2Uuc2V0Tm9ybWFsUXVpeigpO1xyXG4gICAgICAgIHRoaXMuX3F1aXpTZXR0aW5nc1NlcnZpY2Uuc2V0TWVkaWFEaWZmKHRoaXMuc2VsZWN0ZWRDb21wZXRpdGlvbkdyb3VwRGF0YS5tZWRpYV9kaWZmaWN1bHR5KTtcclxuICAgICAgICB0aGlzLl9xdWl6U2V0dGluZ3NTZXJ2aWNlLnNlbGVjdE51bWJlck9mUXVlc3Rpb25zKHRoaXMuc2VsZWN0ZWRDb21wZXRpdGlvbkdyb3VwRGF0YS5udW1fcXVlc3Rpb25zKTtcclxuICAgICAgICB0aGlzLl9xdWl6U2V0dGluZ3NTZXJ2aWNlLnNldER1cmF0aW9uKHRoaXMuc2VsZWN0ZWRDb21wZXRpdGlvbkdyb3VwRGF0YS50aW1lX2xpbWl0KTtcclxuICAgICAgICB0aGlzLl9xdWl6U2V0dGluZ3NTZXJ2aWNlLnNldEFsdGVybmF0aXZlcyh0aGlzLnNlbGVjdGVkQ29tcGV0aXRpb25Hcm91cERhdGEudXNlX3NwZWNpZV9saXN0KTtcclxuICAgICAgICB0aGlzLl9xdWl6U2V0dGluZ3NTZXJ2aWNlLnNldEFyZWEodGhpcy5zZWxlY3RlZENvbXBldGl0aW9uR3JvdXBEYXRhLmFyZWFfaWQpO1xyXG5cclxuICAgIH1cclxuXHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHR0aGlzLmdldENvbXBldGl0aW9uR3JvdXBzKCk7XHJcblx0fVxyXG5cclxuXHRzdGFydFF1aXooKXtcclxuXHRcdC8vY29uc29sZS5sb2codGhpcy5fcm91dGVyKTtcclxuICAgICAgICB0aGlzLnN0b3JlQ29tcGV0aXRpb25Hcm91cFNldHRpbmdzKCk7XHJcbiAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFtcIlF1aXpNZWRpYVF1aXpcIl0pO1xyXG5cdH1cclxuXHJcblx0Z2V0Q29tcGV0aXRpb25Hcm91cHMoKXtcclxuXHRcdHRoaXMuY29tcGV0aXRpb25Hcm91cHMgPSB0aGlzLl9xdWl6Q29tcGV0aXRpb25Hcm91cFNlcnZpY2UuZ2V0Q29tcGV0aXRpb25Hcm91cHMoKTtcclxuXHRcdHRoaXMuY29tcGV0aXRpb25Hcm91cHNQcm9zZXNzZWQgPSB0aGlzLmNvbXBldGl0aW9uR3JvdXBzO1xyXG5cdH1cclxuXHJcblx0aW5wdXRHcm91cE5hbWUoZXZlbnQpe1xyXG5cdFx0dGhpcy5wcm9zZXNzQ29tcEdyb3VwcygpO1xyXG5cdH1cclxuXHJcblx0cHJvc2Vzc0NvbXBHcm91cHMoKXtcclxuXHJcblxyXG5cdFx0dGhpcy5jb21wZXRpdGlvbkdyb3Vwc1Byb3Nlc3NlZCA9IFtdO1xyXG5cclxuXHRcdGZvciAobGV0IGlkIG9mIE9iamVjdC5rZXlzKHRoaXMuY29tcGV0aXRpb25Hcm91cHMpKSB7XHJcblxyXG5cdFx0XHQvL2FkZCBhbGwgaWYgdW5kZWZpbmVkXHJcblx0XHRcdGlmKHRoaXMuZmlsdGVyR3JvdXBOYW1lID09IHVuZGVmaW5lZCl7XHJcblxyXG5cdFx0XHRcdHRoaXMuY29tcGV0aXRpb25Hcm91cHNQcm9zZXNzZWQucHVzaCh0aGlzLmNvbXBldGl0aW9uR3JvdXBzW2lkXSk7XHJcblx0XHRcdFx0Y29udGludWU7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vaWYgZm9ybVNwZWNpZU5hbWUgaXMgYSBzdWJzdHJpbmcgb2YgbmFtZSBpbiBsaXN0LCBvciB0aGVyZSBpcyBubyBmb3JtU3BlY2llTmFtZVxyXG5cdFx0XHRpZih0aGlzLmNvbXBldGl0aW9uR3JvdXBzW2lkXS5uYW1lLnRvTG93ZXJDYXNlKCkuaW5kZXhPZih0aGlzLmZpbHRlckdyb3VwTmFtZS50b0xvd2VyQ2FzZSgpKSA+PSAwIHx8IHRoaXMuZmlsdGVyR3JvdXBOYW1lLmxlbmd0aCA9PSAwKXtcclxuXHJcblx0XHRcdFx0dGhpcy5jb21wZXRpdGlvbkdyb3Vwc1Byb3Nlc3NlZC5wdXNoKHRoaXMuY29tcGV0aXRpb25Hcm91cHNbaWRdKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9XHJcblxyXG5cclxuXHR9XHJcblxyXG5cdHNlbGVjdEdyb3VwKHNlbGVjdGVkR3JvdXBJRCl7XHJcblx0XHR0aGlzLnNlbGVjdGVkR3JvdXBJRD1zZWxlY3RlZEdyb3VwSURcclxuXHRcdGNvbnNvbGUubG9nKCd0ZXN0MCcsdGhpcy5zZWxlY3RlZEdyb3VwSUQpXHJcblxyXG5cdFx0Ly90aGlzIGlzIHVwZGF0aW5nIHRoZSB0YWJsZXMgdGhhdCBzaG93IHRoZSByZXN1bHRzXHJcblxyXG5cdFx0dGhpcy5sb2FkaW5nID0gdHJ1ZTtcclxuXHJcblx0XHR0aGlzLl9xdWl6Q29tcGV0aXRpb25Hcm91cFNlcnZpY2UubG9hZFNlbGVjdGVkQ29tcGV0aXRpb25Hcm91cChzZWxlY3RlZEdyb3VwSUQpLnN1YnNjcmliZSgocmVzcG9uY2UpID0+e1xyXG5cdFx0XHR0aGlzLm9uR3JvdXBJbmZvTG9hZGVkKCk7XHJcblx0XHR9KTtcclxuXHJcblxyXG5cclxuXHJcblx0fVxyXG5cclxuXHRvbkdyb3VwSW5mb0xvYWRlZCgpe1xyXG5cclxuXHJcblxyXG5cdFx0dGhpcy5fcXVpelNldHRpbmdzU2VydmljZS5zZXRDb21wZXRpdGlvbkdyb3VwSUQodGhpcy5zZWxlY3RlZEdyb3VwSUQpO1xyXG5cdFx0dGhpcy51cGRhdGVSZXN1bHRsaXN0SW5jcmVtZW50Kys7XHJcblx0XHR0aGlzLnNlbGVjdGVkQ29tcGV0aXRpb25Hcm91cERhdGEgPVx0dGhpcy5fcXVpekNvbXBldGl0aW9uR3JvdXBTZXJ2aWNlLmdldFNlbGVjdGVkQ29tcGV0aXRpb25Hcm91cCh0aGlzLnNlbGVjdGVkR3JvdXBJRClcclxuXHJcblx0XHRsZXQgY29tcFNwZWNpZUxpc3QgPSB0aGlzLnNlbGVjdGVkQ29tcGV0aXRpb25Hcm91cERhdGFbXCJzcGVjaWVMaXN0XCJdO1xyXG5cdFx0dGhpcy5fcXVpelNwZWNpZXNTZXJ2aWNlLmNsZWFyU2VsZWN0ZWRTcGVjaWVzKCk7XHJcblxyXG5cdFx0aWYoY29tcFNwZWNpZUxpc3RbXCJ1c2luZ1NwZWNpZUxpc3RcIl0pe1xyXG5cclxuXHRcdFx0bGV0IHN0b3JlQXJyYXkgPSBbXVxyXG5cdFx0XHRmb3IobGV0IGkgPSAwOyBpIDwgY29tcFNwZWNpZUxpc3RbXCJudW1iZXJPZlNwZWNpZXNcIl07IGkrKyl7XHJcblx0XHRcdFx0c3RvcmVBcnJheS5wdXNoKGNvbXBTcGVjaWVMaXN0W2ldKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dGhpcy5fcXVpelNwZWNpZXNTZXJ2aWNlLnNldFNlbGVjdGVkU3BlY2llKHN0b3JlQXJyYXkpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMubG9hZGluZyA9IGZhbHNlO1xyXG5cdFx0Y29uc29sZS5sb2coXCJ0aGlzLmNvbXBldGl0aW9uR3JvdXBTZWxlY3RlZDpcIiwgdGhpcy5zZWxlY3RlZENvbXBldGl0aW9uR3JvdXBEYXRhLCBcIiBpZDogXCIsIHRoaXMuc2VsZWN0ZWRHcm91cElEKTtcclxuXHJcblx0fVxyXG5cclxuXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
