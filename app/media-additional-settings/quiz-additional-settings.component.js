System.register(['angular2/core', 'angular2/router', './../shared/quiz-settings.service', './../shared/quiz-results.service', './../shared.component/resultlist.component', "../shared/quiz-specie.service"], function(exports_1, context_1) {
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
    var core_1, router_1, quiz_settings_service_1, quiz_results_service_1, resultlist_component_1, quiz_specie_service_1;
    var QuizAdditionalSettingsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
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
            function (quiz_specie_service_1_1) {
                quiz_specie_service_1 = quiz_specie_service_1_1;
            }],
        execute: function() {
            QuizAdditionalSettingsComponent = (function () {
                function QuizAdditionalSettingsComponent(_quizSettingsService, _quizSpeciesService, _router, _quizResultsService) {
                    this._quizSettingsService = _quizSettingsService;
                    this._quizSpeciesService = _quizSpeciesService;
                    this._router = _router;
                    this._quizResultsService = _quizResultsService;
                    this.title = 'Birdid Quiz media additional settings!';
                    this.areaList = [];
                    this.quizHighscoreLoaded = false;
                    this.selSpecie = false;
                    this.help = false;
                    this.no = "active";
                    this.loading = false;
                    this.updateResultlistIncrement = 0;
                }
                QuizAdditionalSettingsComponent.prototype.ngOnInit = function () {
                    this._quizSettingsService.setMediaDiff(1);
                    this._quizSettingsService.selectNumberOfQuestions(10);
                    this._quizSettingsService.setDuration(0);
                    this._quizSettingsService.setAlternatives(true);
                    this.getAreaList();
                    this.quizSettings = this._quizSettingsService.getQuizSettings();
                    this._quizSettingsService.setHelp(false);
                    //console.log("My area: ", this._quizSettingsService.getCurrentAreaName());
                };
                QuizAdditionalSettingsComponent.prototype.updatehighscorelist = function () {
                    //ugly solution, but it works. It forces an onInput hange event in highscorelist and it loads the new list
                    this.updateResultlistIncrement++;
                };
                QuizAdditionalSettingsComponent.prototype.onSetArea = function () {
                    this._quizSettingsService.setArea(this.selectedArea);
                    //console.log("Selected area:", this.selectedArea);
                    this.updatehighscorelist();
                };
                QuizAdditionalSettingsComponent.prototype.getAreaList = function () {
                    this.areaList = this._quizSettingsService.getAreaList();
                };
                QuizAdditionalSettingsComponent.prototype.onSelectDiff = function (selectedDiff) {
                    console.log("selectedDiff:", selectedDiff);
                    this._quizSettingsService.setMediaDiff(selectedDiff);
                    this.updatehighscorelist();
                };
                QuizAdditionalSettingsComponent.prototype.matchCurrentSelectedDiff = function (diff) {
                    if (diff == this._quizSettingsService.getMediaDiff()) {
                        return true;
                    }
                    else {
                        return false;
                    }
                };
                QuizAdditionalSettingsComponent.prototype.onSelectNumQuestions = function (selectedNumberOfQuestions) {
                    this._quizSettingsService.selectNumberOfQuestions(selectedNumberOfQuestions);
                };
                QuizAdditionalSettingsComponent.prototype.matchCurrentNumberQuestion = function (numberOfQuestions) {
                    if (numberOfQuestions == this._quizSettingsService.getNumberOfQuestions()) {
                        return true;
                    }
                    else {
                        return false;
                    }
                };
                QuizAdditionalSettingsComponent.prototype.onSelectDuration = function (duration) {
                    this._quizSettingsService.setDuration(parseInt(duration));
                };
                QuizAdditionalSettingsComponent.prototype.matchSelectedDuration = function (duration) {
                    if (duration == this._quizSettingsService.duration) {
                        return true;
                    }
                    else {
                        return false;
                    }
                };
                QuizAdditionalSettingsComponent.prototype.onSelectAlternative = function (selectedAlternative) {
                    this._quizSettingsService.setAlternatives(selectedAlternative);
                };
                QuizAdditionalSettingsComponent.prototype.matchSelectedAlternative = function (selectedAlternative) {
                    if (selectedAlternative == this._quizSettingsService.alternative) {
                        return true;
                    }
                    else {
                        return false;
                    }
                };
                QuizAdditionalSettingsComponent.prototype.onSelectSpecie = function (selectedSpecie) {
                    this.selSpecie = selectedSpecie;
                    if (selectedSpecie == true) {
                        this.yes = "active";
                    }
                    else {
                        this.yes = "";
                    }
                    if (selectedSpecie == false) {
                        this.no = "active";
                    }
                    else {
                        this.no = "";
                    }
                };
                QuizAdditionalSettingsComponent.prototype.setHelp = function (setHelp) {
                    this._quizSettingsService.setHelp(setHelp);
                };
                QuizAdditionalSettingsComponent.prototype.matchSetHelp = function (setHelp) {
                    if (setHelp == this._quizSettingsService.help) {
                        return true;
                    }
                    else {
                        return false;
                    }
                };
                QuizAdditionalSettingsComponent.prototype.startQuiz = function () {
                    var _this = this;
                    this._quizSpeciesService.loadAreaId(this.selectedArea).subscribe(function (event) { return (_this.onAreaSubscribe(event)); });
                    this.loading = true;
                };
                QuizAdditionalSettingsComponent.prototype.onAreaSubscribe = function (event) {
                    if (event == true) {
                        if (this.selSpecie != true) {
                            this._router.navigate(["QuizMediaQuiz"]);
                        }
                        else {
                            this._router.navigate(["QuizSelectSpecies"]);
                        }
                    }
                };
                QuizAdditionalSettingsComponent = __decorate([
                    core_1.Component({
                        selector: 'birdid-quiz-addditional-settings',
                        templateUrl: 'app/media-additional-settings/quiz-additional-settings.component.html',
                        styleUrls: ['app/media-additional-settings/quiz-additional-settings.component.css'],
                        directives: [
                            resultlist_component_1.ResultlistComponent
                        ],
                        providers: [],
                    }), 
                    __metadata('design:paramtypes', [quiz_settings_service_1.QuizSettingsService, quiz_specie_service_1.QuizSpecieService, router_1.Router, quiz_results_service_1.QuizResultsService])
                ], QuizAdditionalSettingsComponent);
                return QuizAdditionalSettingsComponent;
            }());
            exports_1("QuizAdditionalSettingsComponent", QuizAdditionalSettingsComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lZGlhLWFkZGl0aW9uYWwtc2V0dGluZ3MvcXVpei1hZGRpdGlvbmFsLXNldHRpbmdzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQXNCQTtnQkFxQkMseUNBQ1Msb0JBQXlDLEVBQ3pDLG1CQUFzQyxFQUN0QyxPQUFlLEVBQ2YsbUJBQXVDO29CQUh2Qyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXFCO29CQUN6Qyx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQW1CO29CQUN0QyxZQUFPLEdBQVAsT0FBTyxDQUFRO29CQUNmLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBb0I7b0JBeEJoRCxVQUFLLEdBQUcsd0NBQXdDLENBQUM7b0JBS2pELGFBQVEsR0FBQyxFQUFFLENBQUM7b0JBSVosd0JBQW1CLEdBQUcsS0FBSyxDQUFDO29CQUU1QixjQUFTLEdBQUcsS0FBSyxDQUFDO29CQUNsQixTQUFJLEdBQUcsS0FBSyxDQUFDO29CQUViLE9BQUUsR0FBRyxRQUFRLENBQUM7b0JBQ2QsWUFBTyxHQUFHLEtBQUssQ0FBQztvQkFFaEIsOEJBQXlCLEdBQUcsQ0FBQyxDQUFDO2dCQVE1QixDQUFDO2dCQUdILGtEQUFRLEdBQVI7b0JBRUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDMUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLHVCQUF1QixDQUFDLEVBQUUsQ0FBQyxDQUFDO29CQUN0RCxJQUFJLENBQUMsb0JBQW9CLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUN6QyxJQUFJLENBQUMsb0JBQW9CLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUNoRCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7b0JBQ25CLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGVBQWUsRUFBRSxDQUFDO29C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eURBQWUsR0FBZixVQUFnQixLQUFLO29CQUNwQixFQUFFLENBQUMsQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQzt3QkFDbkIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDOzRCQUM1QixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7d0JBQzFDLENBQUM7d0JBQUMsSUFBSSxDQUFDLENBQUM7NEJBQ1AsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUM7d0JBQzlDLENBQUM7b0JBQ0YsQ0FBQztnQkFFRixDQUFDO2dCQTFLRjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNWLFFBQVEsRUFBRSxrQ0FBa0M7d0JBQzVDLFdBQVcsRUFBRSx1RUFBdUU7d0JBQ2pGLFNBQVMsRUFBRyxDQUFDLHNFQUFzRSxDQUFDO3dCQUVwRixVQUFVLEVBQUU7NEJBQ2QsMENBQW1CO3lCQUNuQjt3QkFDRCxTQUFTLEVBQUUsRUFFVjtxQkFDRCxDQUFDOzttREFBQTtnQkF3TEYsc0NBQUM7WUFBRCxDQXZMQSxBQXVMQyxJQUFBO1lBdkxELDZFQXVMQyxDQUFBIiwiZmlsZSI6Im1lZGlhLWFkZGl0aW9uYWwtc2V0dGluZ3MvcXVpei1hZGRpdGlvbmFsLXNldHRpbmdzLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0IH0gICAgICAgZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHAsIEhUVFBfUFJPVklERVJTIH0gZnJvbSAnYW5ndWxhcjIvaHR0cCc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XHJcblxyXG5pbXBvcnQgeyBRdWl6U2V0dGluZ3NTZXJ2aWNlIH0gIGZyb20gJy4vLi4vc2hhcmVkL3F1aXotc2V0dGluZ3Muc2VydmljZSc7XHJcbmltcG9ydCB7IFF1aXpSZXN1bHRzU2VydmljZSB9ICBmcm9tICcuLy4uL3NoYXJlZC9xdWl6LXJlc3VsdHMuc2VydmljZSc7XHJcblxyXG5pbXBvcnQgeyBSZXN1bHRsaXN0Q29tcG9uZW50IH0gIGZyb20gJy4vLi4vc2hhcmVkLmNvbXBvbmVudC9yZXN1bHRsaXN0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7UXVpelNwZWNpZVNlcnZpY2V9IGZyb20gXCIuLi9zaGFyZWQvcXVpei1zcGVjaWUuc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6ICdiaXJkaWQtcXVpei1hZGRkaXRpb25hbC1zZXR0aW5ncycsXHJcblx0dGVtcGxhdGVVcmw6ICdhcHAvbWVkaWEtYWRkaXRpb25hbC1zZXR0aW5ncy9xdWl6LWFkZGl0aW9uYWwtc2V0dGluZ3MuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiAgWydhcHAvbWVkaWEtYWRkaXRpb25hbC1zZXR0aW5ncy9xdWl6LWFkZGl0aW9uYWwtc2V0dGluZ3MuY29tcG9uZW50LmNzcyddLFxyXG5cclxuICAgIGRpcmVjdGl2ZXM6IFtcclxuXHRcdFJlc3VsdGxpc3RDb21wb25lbnRcclxuXHRdLFxyXG5cdHByb3ZpZGVyczogW1xyXG5cclxuXHRdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUXVpekFkZGl0aW9uYWxTZXR0aW5nc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcclxuXHR0aXRsZSA9ICdCaXJkaWQgUXVpeiBtZWRpYSBhZGRpdGlvbmFsIHNldHRpbmdzISc7XHJcblx0Ly9tZWRpYURpZmYgPSBbJzEnLCAnMicsICczJywgJzQnXTtcclxuICAgLy8gbnVtYmVyT2ZRdWVzdGlvbnMgPSBbJzEwJywnMzAnLCc2MCddOyBmb3IgdGhlIGJlZ2dpbmluZyB3ZSBkbyBub3QgY2hlY2sgYWdhaW5zdCB0aGUgYXJyYXlcclxuICAgIG1lZGlhRGlmZjtcclxuICAgIG51bWJlck9mUXVlc3Rpb25zO1xyXG5cdGFyZWFMaXN0PVtdO1xyXG5cdHNlbGVjdGVkQXJlYTtcclxuXHRxdWl6SGlnaHNjb3JlRGF0YTtcclxuXHRxdWl6SGlnaHNjb3JlRGF0YUxpbWl0NTA7XHJcblx0cXVpekhpZ2hzY29yZUxvYWRlZCA9IGZhbHNlO1xyXG5cdHF1aXpTZXR0aW5ncztcclxuXHRzZWxTcGVjaWUgPSBmYWxzZTtcclxuXHRoZWxwID0gZmFsc2U7XHJcblx0eWVzO1xyXG5cdG5vID0gXCJhY3RpdmVcIjtcclxuXHRsb2FkaW5nID0gZmFsc2U7XHJcblxyXG5cdHVwZGF0ZVJlc3VsdGxpc3RJbmNyZW1lbnQgPSAwO1xyXG5cclxuXHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIF9xdWl6U2V0dGluZ3NTZXJ2aWNlOiBRdWl6U2V0dGluZ3NTZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSBfcXVpelNwZWNpZXNTZXJ2aWNlOiBRdWl6U3BlY2llU2VydmljZSxcclxuXHRcdHByaXZhdGUgX3JvdXRlcjogUm91dGVyLFxyXG5cdFx0cHJpdmF0ZSBfcXVpelJlc3VsdHNTZXJ2aWNlOiBRdWl6UmVzdWx0c1NlcnZpY2VcclxuXHQpe31cclxuXHJcblxyXG5cdG5nT25Jbml0KCkge1xyXG5cclxuXHRcdHRoaXMuX3F1aXpTZXR0aW5nc1NlcnZpY2Uuc2V0TWVkaWFEaWZmKDEpO1xyXG5cdFx0dGhpcy5fcXVpelNldHRpbmdzU2VydmljZS5zZWxlY3ROdW1iZXJPZlF1ZXN0aW9ucygxMCk7XHJcblx0XHR0aGlzLl9xdWl6U2V0dGluZ3NTZXJ2aWNlLnNldER1cmF0aW9uKDApO1xyXG5cdFx0dGhpcy5fcXVpelNldHRpbmdzU2VydmljZS5zZXRBbHRlcm5hdGl2ZXModHJ1ZSk7XHJcblx0XHR0aGlzLmdldEFyZWFMaXN0KCk7XHJcblx0XHR0aGlzLnF1aXpTZXR0aW5ncyA9IHRoaXMuX3F1aXpTZXR0aW5nc1NlcnZpY2UuZ2V0UXVpelNldHRpbmdzKCk7XHJcblx0XHR0aGlzLl9xdWl6U2V0dGluZ3NTZXJ2aWNlLnNldEhlbHAoZmFsc2UpO1xyXG5cclxuXHRcdC8vY29uc29sZS5sb2coXCJNeSBhcmVhOiBcIiwgdGhpcy5fcXVpelNldHRpbmdzU2VydmljZS5nZXRDdXJyZW50QXJlYU5hbWUoKSk7XHJcblxyXG5cdH1cclxuXHJcblx0dXBkYXRlaGlnaHNjb3JlbGlzdCgpe1xyXG5cclxuXHRcdC8vdWdseSBzb2x1dGlvbiwgYnV0IGl0IHdvcmtzLiBJdCBmb3JjZXMgYW4gb25JbnB1dCBoYW5nZSBldmVudCBpbiBoaWdoc2NvcmVsaXN0IGFuZCBpdCBsb2FkcyB0aGUgbmV3IGxpc3RcclxuXHRcdHRoaXMudXBkYXRlUmVzdWx0bGlzdEluY3JlbWVudCArKztcclxuXHJcblx0fVxyXG5cclxuXHJcblxyXG5cclxuXHRvblNldEFyZWEoKXtcclxuXHRcdCB0aGlzLl9xdWl6U2V0dGluZ3NTZXJ2aWNlLnNldEFyZWEodGhpcy5zZWxlY3RlZEFyZWEpO1xyXG5cdFx0IC8vY29uc29sZS5sb2coXCJTZWxlY3RlZCBhcmVhOlwiLCB0aGlzLnNlbGVjdGVkQXJlYSk7XHJcblx0XHQgdGhpcy51cGRhdGVoaWdoc2NvcmVsaXN0KCk7XHJcblxyXG5cdH1cclxuXHJcblxyXG5cdGdldEFyZWFMaXN0KCl7XHJcblx0XHR0aGlzLmFyZWFMaXN0PXRoaXMuX3F1aXpTZXR0aW5nc1NlcnZpY2UuZ2V0QXJlYUxpc3QoKTtcclxuXHR9XHJcblxyXG5cclxuICAgIG9uU2VsZWN0RGlmZihzZWxlY3RlZERpZmY6IG51bWJlcil7XHJcblx0XHRjb25zb2xlLmxvZyhcInNlbGVjdGVkRGlmZjpcIiwgc2VsZWN0ZWREaWZmKTtcclxuICAgICAgICB0aGlzLl9xdWl6U2V0dGluZ3NTZXJ2aWNlLnNldE1lZGlhRGlmZihzZWxlY3RlZERpZmYpO1xyXG5cdFx0dGhpcy51cGRhdGVoaWdoc2NvcmVsaXN0KCk7XHJcblxyXG4gICAgfVxyXG5cclxuXHRtYXRjaEN1cnJlbnRTZWxlY3RlZERpZmYoZGlmZil7XHJcblx0XHRpZihkaWZmID09IHRoaXMuX3F1aXpTZXR0aW5nc1NlcnZpY2UuZ2V0TWVkaWFEaWZmKCkpe1xyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdH1lbHNle1xyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcbiAgICBvblNlbGVjdE51bVF1ZXN0aW9ucyhzZWxlY3RlZE51bWJlck9mUXVlc3Rpb25zOiBudW1iZXIpe1xyXG4gICAgICAgIHRoaXMuX3F1aXpTZXR0aW5nc1NlcnZpY2Uuc2VsZWN0TnVtYmVyT2ZRdWVzdGlvbnMoc2VsZWN0ZWROdW1iZXJPZlF1ZXN0aW9ucyk7XHJcbiAgICB9XHJcblxyXG5cdG1hdGNoQ3VycmVudE51bWJlclF1ZXN0aW9uKG51bWJlck9mUXVlc3Rpb25zKXtcclxuXHRcdGlmKG51bWJlck9mUXVlc3Rpb25zID09IHRoaXMuX3F1aXpTZXR0aW5nc1NlcnZpY2UuZ2V0TnVtYmVyT2ZRdWVzdGlvbnMoKSl7XHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0fWVsc2V7XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG4gICAgb25TZWxlY3REdXJhdGlvbihkdXJhdGlvbjogc3RyaW5nKXtcclxuICAgICAgICB0aGlzLl9xdWl6U2V0dGluZ3NTZXJ2aWNlLnNldER1cmF0aW9uKHBhcnNlSW50KGR1cmF0aW9uKSk7XHJcbiAgICB9XHJcblxyXG5cdG1hdGNoU2VsZWN0ZWREdXJhdGlvbihkdXJhdGlvbil7XHJcblx0XHRpZihkdXJhdGlvbiA9PSB0aGlzLl9xdWl6U2V0dGluZ3NTZXJ2aWNlLmR1cmF0aW9uKXtcclxuXHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHR9ZWxzZXtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcbiAgICBvblNlbGVjdEFsdGVybmF0aXZlKHNlbGVjdGVkQWx0ZXJuYXRpdmU6IGJvb2xlYW4pe1xyXG4gICAgICAgIHRoaXMuX3F1aXpTZXR0aW5nc1NlcnZpY2Uuc2V0QWx0ZXJuYXRpdmVzKHNlbGVjdGVkQWx0ZXJuYXRpdmUpXHJcbiAgICB9XHJcblxyXG5cdG1hdGNoU2VsZWN0ZWRBbHRlcm5hdGl2ZShzZWxlY3RlZEFsdGVybmF0aXZlKXtcclxuXHRcdGlmKHNlbGVjdGVkQWx0ZXJuYXRpdmUgPT0gdGhpcy5fcXVpelNldHRpbmdzU2VydmljZS5hbHRlcm5hdGl2ZSl7XHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0fWVsc2V7XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdG9uU2VsZWN0U3BlY2llKHNlbGVjdGVkU3BlY2llOiBib29sZWFuKSB7XHJcblx0XHR0aGlzLnNlbFNwZWNpZSA9IHNlbGVjdGVkU3BlY2llO1xyXG5cclxuXHRcdGlmKHNlbGVjdGVkU3BlY2llID09IHRydWUpIHtcclxuXHRcdFx0dGhpcy55ZXMgPSBcImFjdGl2ZVwiO1xyXG5cdFx0fWVsc2V7XHJcblx0XHRcdHRoaXMueWVzID0gXCJcIjtcclxuXHRcdH1cclxuXHRcdGlmKHNlbGVjdGVkU3BlY2llID09IGZhbHNlKXtcclxuXHRcdFx0dGhpcy5ubyA9IFwiYWN0aXZlXCJcclxuXHRcdH1lbHNle1xyXG5cdFx0XHR0aGlzLm5vID0gXCJcIjtcclxuXHRcdH1cclxuXHR9XHJcblx0c2V0SGVscChzZXRIZWxwOiBib29sZWFuKSB7XHJcblx0XHR0aGlzLl9xdWl6U2V0dGluZ3NTZXJ2aWNlLnNldEhlbHAoc2V0SGVscCk7XHJcblx0fVxyXG5cclxuXHRtYXRjaFNldEhlbHAoc2V0SGVscCl7XHJcblx0XHRpZihzZXRIZWxwID09IHRoaXMuX3F1aXpTZXR0aW5nc1NlcnZpY2UuaGVscCl7XHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0fWVsc2V7XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHN0YXJ0UXVpeigpe1xyXG5cdFx0dGhpcy5fcXVpelNwZWNpZXNTZXJ2aWNlLmxvYWRBcmVhSWQodGhpcy5zZWxlY3RlZEFyZWEpLnN1YnNjcmliZSgoZXZlbnQpID0+ICh0aGlzLm9uQXJlYVN1YnNjcmliZShldmVudCkpKTtcclxuXHRcdHRoaXMubG9hZGluZyA9IHRydWU7XHJcblx0fVxyXG5cclxuXHRvbkFyZWFTdWJzY3JpYmUoZXZlbnQpIHtcclxuXHRcdGlmIChldmVudCA9PSB0cnVlKSB7XHJcblx0XHRcdGlmICh0aGlzLnNlbFNwZWNpZSAhPSB0cnVlKSB7XHJcblx0XHRcdFx0dGhpcy5fcm91dGVyLm5hdmlnYXRlKFtcIlF1aXpNZWRpYVF1aXpcIl0pO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbXCJRdWl6U2VsZWN0U3BlY2llc1wiXSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdFxyXG5cdH1cclxuXHQvKnNlbGVjdE1lZGlhRGlmZihtZWRpYURpZmZpY3VsaXR5KXtcclxuXHRcdGlmKHRoaXMuX3F1aXpTZXR0aW5nc1NlcnZpY2Uuc2V0TWVkaWFEaWZmKG1lZGlhRGlmZmljdWxpdHkpKXtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG1lZGlhRGlmZmljdWxpdHkrXCJtZWRpYSBkaWZmXCIpO1xyXG4gICAgICAgICAgICAvL0NvbnN0IGZvciB2YWx1ZT9cclxuICAgICAgICAgICAgLy90aGlzLnF1aXpNZWRpYVNldHRpbmdzRXZlbnQuZW1pdChcIk1lZGlhQWRpdGlvbmFsU2V0dGluZ3NEb25lXCIpO1xyXG5cclxuXHRcdH1lbHNle1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIk5vcGVcIiwgbWVkaWFEaWZmaWN1bGl0eSk7XHJcblx0XHR9XHJcblxyXG5cdH0qL1xyXG5cclxuICAgLyogc2VsZWN0TnVtYmVyT2ZRdWVzdGlvbnMobnVtYmVyT2ZRdWVzdGlvbnMpe1xyXG4gICAgICAgIGlmICh0aGlzLl9xdWl6U2V0dGluZ3NTZXJ2aWNlLnNlbGVjdE51bWJlck9mUXVlc3Rpb25zKG51bWJlck9mUXVlc3Rpb25zKSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhudW1iZXJPZlF1ZXN0aW9ucyArICdudW1iZXIgb2YgcXVlc3Rpb25zJylcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3NvbWV0aGluZyB3ZW50IHdyb25nJylcclxuICAgICAgICB9XHJcbiAgICB9Ki9cclxuXHJcblxyXG5cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
