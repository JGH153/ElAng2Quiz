System.register(['angular2/core', 'angular2/http', 'angular2/router', './../shared/quiz-logic.service', './../shared/quiz-specie.service', './../the-quiz/the-quiz-image.component', './../the-quiz/the-quiz-sound.component', "../shared/quiz-settings.service"], function(exports_1, context_1) {
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
    var core_1, http_1, router_1, quiz_logic_service_1, quiz_specie_service_1, the_quiz_image_component_1, the_quiz_sound_component_1, quiz_settings_service_1;
    var QuizSummaryComponent;
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
            function (quiz_logic_service_1_1) {
                quiz_logic_service_1 = quiz_logic_service_1_1;
            },
            function (quiz_specie_service_1_1) {
                quiz_specie_service_1 = quiz_specie_service_1_1;
            },
            function (the_quiz_image_component_1_1) {
                the_quiz_image_component_1 = the_quiz_image_component_1_1;
            },
            function (the_quiz_sound_component_1_1) {
                the_quiz_sound_component_1 = the_quiz_sound_component_1_1;
            },
            function (quiz_settings_service_1_1) {
                quiz_settings_service_1 = quiz_settings_service_1_1;
            }],
        execute: function() {
            QuizSummaryComponent = (function () {
                function QuizSummaryComponent(_quizSpeciesService, _quizLogicService, _quizSettingsService, _router) {
                    this._quizSpeciesService = _quizSpeciesService;
                    this._quizLogicService = _quizLogicService;
                    this._quizSettingsService = _quizSettingsService;
                    this._router = _router;
                    this.title = "See your quiz summary!";
                    this.quizSummary = [];
                    this.specieList = [];
                }
                QuizSummaryComponent.prototype.ngOnInit = function () {
                    this.quizSummary = this._quizLogicService.quizQuestions;
                    console.log(this.quizSummary);
                    this.specieList = this._quizSpeciesService.getSpecieList();
                    this.areaCountry = this._quizSettingsService.getCurrentAreaName();
                    this.setQuizInfo();
                    this.setName();
                };
                QuizSummaryComponent.prototype.goToResults = function () {
                    this._router.navigate(["QuizMediaQuizResults"]);
                };
                QuizSummaryComponent.prototype.setName = function () {
                    if (this.alternativeType == true) {
                        var j = 0;
                        for (var _i = 0, _a = Object.keys(this.quizSummary); _i < _a.length; _i++) {
                            var id = _a[_i];
                            while (j < this.quizSummary[id].selectedChoices.length) {
                                for (var _b = 0, _c = Object.keys(this.quizSummary[id].choices); _b < _c.length; _b++) {
                                    var i = _c[_b];
                                    if (this.quizSummary[id].choices[i].id == this.quizSummary[id].selectedChoices[j].id) {
                                        this.quizSummary[id].selectedChoices[j].name = this.quizSummary[id].choices[i].name;
                                    }
                                }
                                j++;
                            }
                            j = 0;
                        }
                    }
                    else {
                        var j = 0;
                        for (var _d = 0, _e = Object.keys(this.quizSummary); _d < _e.length; _d++) {
                            var id = _e[_d];
                            while (j < this.quizSummary[id].selectedChoices.length) {
                                for (var _f = 0, _g = Object.keys(this.specieList); _f < _g.length; _f++) {
                                    var i = _g[_f];
                                    if (this.specieList[i].id == this.quizSummary[id].selectedChoices[j].id) {
                                        this.quizSummary[id].selectedChoices[j].name = this.specieList[i].name;
                                    }
                                }
                                j++;
                            }
                            j = 0;
                        }
                    }
                    for (var _h = 0, _j = Object.keys(this.quizSummary); _h < _j.length; _h++) {
                        var k = _j[_h];
                        if (this.quizSummary[k].selectedChoices.length == 0) {
                            this.quizSummary[k].selectedChoices.push({ 'name': 'I dont know' });
                        }
                    }
                };
                QuizSummaryComponent.prototype.setQuizInfo = function () {
                    if (this._quizSettingsService.mediaType == 1) {
                        this.mediaType = false;
                    }
                    else {
                        this.mediaType = true;
                    }
                    if (this._quizSettingsService.alternative == true) {
                        this.alternativeType = true;
                    }
                    else {
                        this.alternativeType = false;
                    }
                };
                QuizSummaryComponent = __decorate([
                    core_1.Component({
                        selector: 'birdid-quiz-summary',
                        templateUrl: 'app/quiz-results/quiz-summary.component.html',
                        styleUrls: ['app/quiz-results/quiz-summary.component.css'],
                        directives: [
                            the_quiz_image_component_1.TheQuizImageComponent,
                            the_quiz_sound_component_1.TheQuizSoundComponent
                        ],
                        providers: [
                            http_1.HTTP_PROVIDERS
                        ]
                    }), 
                    __metadata('design:paramtypes', [quiz_specie_service_1.QuizSpecieService, quiz_logic_service_1.QuizLogicService, quiz_settings_service_1.QuizSettingsService, router_1.Router])
                ], QuizSummaryComponent);
                return QuizSummaryComponent;
            }());
            exports_1("QuizSummaryComponent", QuizSummaryComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInF1aXotcmVzdWx0cy9xdWl6LXN1bW1hcnkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBeUJBO2dCQVFJLDhCQUNZLG1CQUFzQyxFQUN0QyxpQkFBbUMsRUFDbkMsb0JBQXlDLEVBQ3pDLE9BQWU7b0JBSGYsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFtQjtvQkFDdEMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFrQjtvQkFDbkMseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFxQjtvQkFDekMsWUFBTyxHQUFQLE9BQU8sQ0FBUTtvQkFYM0IsVUFBSyxHQUFHLHdCQUF3QixDQUFBO29CQUNoQyxnQkFBVyxHQUFHLEVBQUUsQ0FBQztvQkFDakIsZUFBVSxHQUFFLEVBQUUsQ0FBQztnQkFXWixDQUFDO2dCQUNKLHVDQUFRLEdBQVI7b0JBQ0ksSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxDQUFDO29CQUN4RCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztvQkFDOUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsYUFBYSxFQUFFLENBQUM7b0JBQzNELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGtCQUFrQixFQUFFLENBQUM7b0JBQ2xFLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztvQkFDbkIsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUVuQixDQUFDO2dCQUNELDBDQUFXLEdBQVg7b0JBQ0ksSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUM7Z0JBQ3BELENBQUM7Z0JBRUYsc0NBQU8sR0FBUDtvQkFDSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxJQUFJLElBQUks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OzRCQUNoRCxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsRUFBQyxNQUFNLEVBQUUsYUFBYSxFQUFDLENBQUMsQ0FBQzt3QkFDdEUsQ0FBQztxQkFDTDtnQkFDTCxDQUFDO2dCQUNELDBDQUFXLEdBQVg7b0JBQ0ksRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFNBQVMsSUFBSSxDQUFDLENBQUMsQ0FBQSxDQUFDO3dCQUN6QyxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztvQkFDM0IsQ0FBQztvQkFBQSxJQUFJLENBQUEsQ0FBQzt3QkFDRixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztvQkFDMUIsQ0FBQztvQkFFRCxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxDQUFBLENBQUM7d0JBQzlDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO29CQUNoQyxDQUFDO29CQUFBLElBQUksQ0FBQSxDQUFDO3dCQUNGLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO29CQUNqQyxDQUFDO2dCQUNMLENBQUM7Z0JBMUZKO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLHFCQUFxQjt3QkFDL0IsV0FBVyxFQUFFLDhDQUE4Qzt3QkFDM0QsU0FBUyxFQUFHLENBQUMsNkNBQTZDLENBQUM7d0JBQzNELFVBQVUsRUFBRTs0QkFDUixnREFBcUI7NEJBQ3JCLGdEQUFxQjt5QkFDeEI7d0JBQ0QsU0FBUyxFQUFFOzRCQUNQLHFCQUFjO3lCQUNqQjtxQkFDSixDQUFDOzt3Q0FBQTtnQkFnRkYsMkJBQUM7WUFBRCxDQTdFQSxBQTZFQyxJQUFBO1lBN0VELHVEQTZFQyxDQUFBIiwiZmlsZSI6InF1aXotcmVzdWx0cy9xdWl6LXN1bW1hcnkuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEV2ZW50RW1pdHRlciB9ICAgICAgIGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwLCBIVFRQX1BST1ZJREVSUyB9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xyXG5pbXBvcnQgeyBRdWl6TG9naWNTZXJ2aWNlIH0gIGZyb20gJy4vLi4vc2hhcmVkL3F1aXotbG9naWMuc2VydmljZSc7XHJcbmltcG9ydCB7IFF1aXpTcGVjaWVTZXJ2aWNlIH0gIGZyb20gJy4vLi4vc2hhcmVkL3F1aXotc3BlY2llLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBUaGVRdWl6SW1hZ2VDb21wb25lbnQgfSAgZnJvbSAnLi8uLi90aGUtcXVpei90aGUtcXVpei1pbWFnZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUaGVRdWl6U291bmRDb21wb25lbnQgfSAgZnJvbSAnLi8uLi90aGUtcXVpei90aGUtcXVpei1zb3VuZC5jb21wb25lbnQnO1xyXG5cclxuaW1wb3J0IHsgUmVzdWx0bGlzdENvbXBvbmVudCB9ICBmcm9tICcuLy4uL3NoYXJlZC5jb21wb25lbnQvcmVzdWx0bGlzdC5jb21wb25lbnQnO1xyXG5pbXBvcnQge1F1aXpTZXR0aW5nc1NlcnZpY2V9IGZyb20gXCIuLi9zaGFyZWQvcXVpei1zZXR0aW5ncy5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnYmlyZGlkLXF1aXotc3VtbWFyeScsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ2FwcC9xdWl6LXJlc3VsdHMvcXVpei1zdW1tYXJ5LmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogIFsnYXBwL3F1aXotcmVzdWx0cy9xdWl6LXN1bW1hcnkuY29tcG9uZW50LmNzcyddLFxyXG4gICAgZGlyZWN0aXZlczogW1xyXG4gICAgICAgIFRoZVF1aXpJbWFnZUNvbXBvbmVudCxcclxuICAgICAgICBUaGVRdWl6U291bmRDb21wb25lbnRcclxuICAgIF0sXHJcbiAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICBIVFRQX1BST1ZJREVSU1xyXG4gICAgXVxyXG59KVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBRdWl6U3VtbWFyeUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCAge1xyXG4gICAgdGl0bGUgPSBcIlNlZSB5b3VyIHF1aXogc3VtbWFyeSFcIlxyXG4gICAgcXVpelN1bW1hcnkgPSBbXTtcclxuICAgIHNwZWNpZUxpc3QgPVtdO1xyXG4gICAgYXJlYUNvdW50cnk7ICAgICAgICAgICAgLy9kaXNwbGF5IGFyZWEgY291bnRyeSBpbnN0ZWFkIG9mIGFsdGVyYXRpdmVzIHdoZW4gZnJlZXR5cGVcclxuICAgIG1lZGlhVHlwZTsgICAgICAvL3RydWUgPT0gc291bmQgIC0gIGZhbHNlID09IGltZ1xyXG4gICAgYWx0ZXJuYXRpdmVUeXBlOyAvL3RydWUgPT0gY2hvaWNlcyAtIGZhbHNlID09IGZyZWV0eXBlXHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBfcXVpelNwZWNpZXNTZXJ2aWNlOiBRdWl6U3BlY2llU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIF9xdWl6TG9naWNTZXJ2aWNlOiBRdWl6TG9naWNTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgX3F1aXpTZXR0aW5nc1NlcnZpY2U6IFF1aXpTZXR0aW5nc1NlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXJcclxuXHJcbiAgICApIHt9XHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLnF1aXpTdW1tYXJ5ID0gdGhpcy5fcXVpekxvZ2ljU2VydmljZS5xdWl6UXVlc3Rpb25zO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucXVpelN1bW1hcnkpO1xyXG4gICAgICAgIHRoaXMuc3BlY2llTGlzdCA9IHRoaXMuX3F1aXpTcGVjaWVzU2VydmljZS5nZXRTcGVjaWVMaXN0KCk7XHJcbiAgICAgICAgdGhpcy5hcmVhQ291bnRyeSA9IHRoaXMuX3F1aXpTZXR0aW5nc1NlcnZpY2UuZ2V0Q3VycmVudEFyZWFOYW1lKCk7XHJcbiAgICAgICAgdGhpcy5zZXRRdWl6SW5mbygpO1xyXG4gICAgICAgIHRoaXMuc2V0TmFtZSgpO1xyXG5cclxuICAgIH1cclxuICAgIGdvVG9SZXN1bHRzKCl7XHJcbiAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFtcIlF1aXpNZWRpYVF1aXpSZXN1bHRzXCJdKTtcclxuICAgIH1cclxuXHJcbiAgIHNldE5hbWUoKSB7XHJcbiAgICAgICBpZiAodGhpcy5hbHRlcm5hdGl2ZVR5cGUgPT0gdHJ1ZSkgeyAgICAgICAgICAvL2NoZWNrcyBvbmx5IGFsdGVybmF0aXZlcyB3aGVuIGNob2ljZXNcclxuICAgICAgICAgICBsZXQgaiA9IDA7XHJcbiAgICAgICAgICAgZm9yIChsZXQgaWQgb2YgT2JqZWN0LmtleXModGhpcy5xdWl6U3VtbWFyeSkpIHtcclxuICAgICAgICAgICAgICAgd2hpbGUgKGogPCB0aGlzLnF1aXpTdW1tYXJ5W2lkXS5zZWxlY3RlZENob2ljZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpIG9mIE9iamVjdC5rZXlzKHRoaXMucXVpelN1bW1hcnlbaWRdLmNob2ljZXMpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucXVpelN1bW1hcnlbaWRdLmNob2ljZXNbaV0uaWQgPT0gdGhpcy5xdWl6U3VtbWFyeVtpZF0uc2VsZWN0ZWRDaG9pY2VzW2pdLmlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucXVpelN1bW1hcnlbaWRdLnNlbGVjdGVkQ2hvaWNlc1tqXS5uYW1lID0gdGhpcy5xdWl6U3VtbWFyeVtpZF0uY2hvaWNlc1tpXS5uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgIGorKztcclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICBqID0gMDtcclxuICAgICAgICAgICB9XHJcbiAgICAgICB9ZWxzZXsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vY2hlY2tzIHdob2xlIHNwZWNpZWxpc3Qgd2hlbiBmcmVldHlwZVxyXG4gICAgICAgICAgIGxldCBqID0gMDtcclxuICAgICAgICAgICBmb3IgKGxldCBpZCBvZiBPYmplY3Qua2V5cyh0aGlzLnF1aXpTdW1tYXJ5KSkge1xyXG4gICAgICAgICAgICAgICB3aGlsZSAoaiA8IHRoaXMucXVpelN1bW1hcnlbaWRdLnNlbGVjdGVkQ2hvaWNlcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgb2YgT2JqZWN0LmtleXModGhpcy5zcGVjaWVMaXN0KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnNwZWNpZUxpc3RbaV0uaWQgPT0gdGhpcy5xdWl6U3VtbWFyeVtpZF0uc2VsZWN0ZWRDaG9pY2VzW2pdLmlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucXVpelN1bW1hcnlbaWRdLnNlbGVjdGVkQ2hvaWNlc1tqXS5uYW1lID0gdGhpcy5zcGVjaWVMaXN0W2ldLm5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgaisrO1xyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIGogPSAwO1xyXG4gICAgICAgICAgIH1cclxuXHJcbiAgICAgICB9XHJcblxyXG4gICAgICAgZm9yIChsZXQgayBvZiBPYmplY3Qua2V5cyh0aGlzLnF1aXpTdW1tYXJ5KSl7XHJcbiAgICAgICAgICAgIGlmKHRoaXMucXVpelN1bW1hcnlba10uc2VsZWN0ZWRDaG9pY2VzLmxlbmd0aCA9PSAwKXtcclxuICAgICAgICAgICAgICAgIHRoaXMucXVpelN1bW1hcnlba10uc2VsZWN0ZWRDaG9pY2VzLnB1c2goeyduYW1lJzogJ0kgZG9udCBrbm93J30pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICB9XHJcbiAgIH1cclxuICAgc2V0UXVpekluZm8oKXtcclxuICAgICAgIGlmKHRoaXMuX3F1aXpTZXR0aW5nc1NlcnZpY2UubWVkaWFUeXBlID09IDEpe1xyXG4gICAgICAgICAgIHRoaXMubWVkaWFUeXBlID0gZmFsc2U7XHJcbiAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICB0aGlzLm1lZGlhVHlwZSA9IHRydWU7XHJcbiAgICAgICB9XHJcblxyXG4gICAgICAgaWYodGhpcy5fcXVpelNldHRpbmdzU2VydmljZS5hbHRlcm5hdGl2ZSA9PSB0cnVlKXtcclxuICAgICAgICAgICB0aGlzLmFsdGVybmF0aXZlVHlwZSA9IHRydWU7XHJcbiAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICB0aGlzLmFsdGVybmF0aXZlVHlwZSA9IGZhbHNlO1xyXG4gICAgICAgfVxyXG4gICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
