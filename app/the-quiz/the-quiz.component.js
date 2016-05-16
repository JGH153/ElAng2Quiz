System.register(['angular2/core', 'angular2/http', 'angular2/router', 'rxjs/Rx', './../shared/quiz-settings.service', './../shared/quiz-questions.service', './../shared/quiz-logic.service', './the-quiz-image.component', './the-quiz-sound.component', './../shared/quiz-specie.service', './the-quiz-choices.component', './the-quiz-freetype.component'], function(exports_1, context_1) {
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
    var core_1, http_1, router_1, Rx_1, quiz_settings_service_1, quiz_questions_service_1, quiz_logic_service_1, the_quiz_image_component_1, the_quiz_sound_component_1, quiz_specie_service_1, the_quiz_choices_component_1, the_quiz_freetype_component_1;
    var TheQuizComponent;
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
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
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
            function (the_quiz_image_component_1_1) {
                the_quiz_image_component_1 = the_quiz_image_component_1_1;
            },
            function (the_quiz_sound_component_1_1) {
                the_quiz_sound_component_1 = the_quiz_sound_component_1_1;
            },
            function (quiz_specie_service_1_1) {
                quiz_specie_service_1 = quiz_specie_service_1_1;
            },
            function (the_quiz_choices_component_1_1) {
                the_quiz_choices_component_1 = the_quiz_choices_component_1_1;
            },
            function (the_quiz_freetype_component_1_1) {
                the_quiz_freetype_component_1 = the_quiz_freetype_component_1_1;
            }],
        execute: function() {
            TheQuizComponent = (function () {
                function TheQuizComponent(_quizSettingsService, _quizQuestionService, _quizLogicService, _quizSpeciesService, _router) {
                    this._quizSettingsService = _quizSettingsService;
                    this._quizQuestionService = _quizQuestionService;
                    this._quizLogicService = _quizLogicService;
                    this._quizSpeciesService = _quizSpeciesService;
                    this._router = _router;
                    this.title = 'Birdid Quiz TheQuizComponent!';
                    this.quizDoneEvent = new core_1.EventEmitter();
                    this.quizLoaded = false;
                    this.inbetweenQuestions = false;
                    this.quizDone = false;
                }
                TheQuizComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._quizLogicService.newQuiz();
                    //moch while mile works on his service, replace by getting from it
                    this.quizSettings = this._quizSettingsService.getQuizSettings();
                    this._quizLogicService.setQuizQuestionsSettings(this.quizSettings);
                    if (this._quizSettingsService.isBeginnerQuiz()) {
                        //Beginner quiz!
                        this._quizQuestionService.getBeginnerQuizQuestions(this.quizSettings)
                            .subscribe(function (data) {
                            _this.onQuestionsResived(data);
                        }, function (error) { return console.error("getQuizQuestions ERROR! ", error); });
                    }
                    else {
                        this._quizQuestionService.getQuizQuestions(this.quizSettings)
                            .subscribe(function (data) {
                            _this.onQuestionsResived(data);
                        }, function (error) { return console.error("getQuizQuestions ERROR! ", error); });
                    }
                };
                TheQuizComponent.prototype.onQuestionsResived = function (data) {
                    console.log(data);
                    this._quizLogicService.setQuizQuestions(data, this._quizSettingsService.isSeveralSoundQuiz(), this._quizSettingsService.isBeginnerQuiz());
                    //console.log("Number of questions", data.metadata['num_Questions']);
                    this.startQuiz();
                };
                TheQuizComponent.prototype.shouldDisplaySoundComponent = function () {
                    if (this._quizSettingsService.getQuizSettings()[0].mediaTypeID == 2) {
                        return true;
                    }
                    //if beginnerquiz with both image AND sound
                    if (this._quizSettingsService.isBeginnerQuiz() && this.currentQuizQuestion.getMediaSourses().length > 1) {
                        return true;
                    }
                    return false;
                };
                TheQuizComponent.prototype.startQuiz = function () {
                    this.setupQuestion();
                    this.quizLoaded = true;
                };
                //when done by sub select component (eg next question button clicked)
                TheQuizComponent.prototype.subSelectCompleteEvent = function (event) {
                    this.nextQuestion();
                };
                TheQuizComponent.prototype.nextQuestion = function () {
                    if (this._quizSettingsService.getQuizSettings()[0].timeLimit != 0) {
                        this.timerSubscription.unsubscribe();
                    }
                    if (this.quizDone) {
                        return;
                    }
                    if (!this.inbetweenQuestions && !this.quizSettings[0].formalTestQuiz) {
                        //skipping this in formal test
                        this.inbetweenQuestions = true;
                        //update score based on user choices
                        this._quizLogicService.changeScore(this.currentQuizQuestion.getScoreForSelectedAnswers());
                    }
                    else {
                        this.inbetweenQuestions = false;
                        console.log("getSelectedChoice: ", this.currentQuizQuestion.getSelectedChoice());
                        this._quizLogicService.gotoNextQuestionNumber();
                        //this.questionNumber++;
                        this.setupQuestion();
                    }
                };
                TheQuizComponent.prototype.timerTick = function (t) {
                    this.ticks = t;
                    if (this._quizSettingsService.getQuizSettings()[0].timeLimit - this.ticks < 1) {
                        this.nextQuestion();
                    }
                };
                TheQuizComponent.prototype.getDurationUserFriendly = function () {
                    this.duration = this._quizSettingsService.getDuration();
                    if (this.duration == 0) {
                        return 'unlimited';
                    }
                    if (this.duration == 20) {
                        var currentTime = this.duration - this.ticks;
                        return currentTime.toString();
                    }
                    if (this.duration == 30) {
                        var currentTime = this.duration - this.ticks;
                        return currentTime.toString();
                    }
                    if (this.duration == 40) {
                        var currentTime = this.duration - this.ticks;
                        return currentTime.toString();
                    }
                };
                TheQuizComponent.prototype.setupQuestion = function () {
                    var _this = this;
                    if (this._quizLogicService.noQuestionsLeft()) {
                        //QUIZ DONE!
                        this.quizDone = true;
                        //this.quizDoneEvent.emit("MediaQuizOver");
                        if (this.quizSettings[0].formalTestQuiz) {
                            this._router.navigate(["QuizFormalTestEnd"]);
                        }
                        else {
                            this._router.navigate(["QuizMediaQuizResults"]);
                        }
                        return;
                    }
                    this.currentQuizQuestion = this._quizLogicService.getCurrentQuizQuestion();
                    if (this._quizSettingsService.getQuizSettings()[0].timeLimit != 0) {
                        this.ticks = 0;
                        this.timer = Rx_1.Observable.timer(2000, 1000);
                        this.timerSubscription = this.timer.subscribe(function (t) { return _this.timerTick(t); });
                    }
                };
                TheQuizComponent.prototype.getQuestionExtraInfo = function () {
                    return this.currentQuizQuestion.getExtraInfo();
                };
                TheQuizComponent = __decorate([
                    core_1.Component({
                        selector: 'birdid-the-quiz',
                        templateUrl: 'app/the-quiz/the-quiz.component.html',
                        styleUrls: ['app/the-quiz/the-quiz.component.css'],
                        directives: [
                            the_quiz_image_component_1.TheQuizImageComponent,
                            the_quiz_sound_component_1.TheQuizSoundComponent,
                            the_quiz_freetype_component_1.TheQuizFreetypeComponent,
                            the_quiz_choices_component_1.TheQuizChoicesComponent
                        ],
                        providers: [
                            http_1.HTTP_PROVIDERS
                        ],
                        outputs: ['quizDoneEvent']
                    }), 
                    __metadata('design:paramtypes', [quiz_settings_service_1.QuizSettingsService, quiz_questions_service_1.QuizQuestionsService, quiz_logic_service_1.QuizLogicService, quiz_specie_service_1.QuizSpecieService, router_1.Router])
                ], TheQuizComponent);
                return TheQuizComponent;
            }());
            exports_1("TheQuizComponent", TheQuizComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRoZS1xdWl6L3RoZS1xdWl6LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQXNDQTtnQkFzQkcsMEJBQ1Msb0JBQXlDLEVBQ3pDLG9CQUEwQyxFQUMxQyxpQkFBbUMsRUFDbkMsbUJBQXNDLEVBQ3RDLE9BQWU7b0JBSmYseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFxQjtvQkFDekMseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtvQkFDMUMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFrQjtvQkFDbkMsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFtQjtvQkFDdEMsWUFBTyxHQUFQLE9BQU8sQ0FBUTtvQkExQjFCLFVBQUssR0FBRywrQkFBK0IsQ0FBQztvQkFFeEMsa0JBQWEsR0FBRyxJQUFJLG1CQUFZLEVBQVUsQ0FBQztvQkFFeEMsZUFBVSxHQUFHLEtBQUssQ0FBQztvQkFJbkIsdUJBQWtCLEdBQUcsS0FBSyxDQUFDO29CQUs5QixhQUFRLEdBQUcsS0FBSyxDQUFDO2dCQWNiLENBQUM7Z0JBRUwsbUNBQVEsR0FBUjtvQkFBQSxpQkFnQ0M7b0JBN0JBLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLEVBQUUsQ0FBQztvQkFFakMsa0VBQWtFO29CQUNsRSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxlQUFlLEVBQUUsQ0FBQztvQkFDaEUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztvQkFFbkUsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUEsQ0FBQzt3QkFDOUMsZ0JBQWdCO3dCQUNoQixJQUFJLENBQUMsb0JBQW9CLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQzs2QkFDbkUs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QVMsSUFBSSxDQUFDLENBQUMsQ0FBQSxDQUFDO3dCQUNqRSxJQUFJLENBQUMsS0FBSyxHQUFDLENBQUMsQ0FBQzt3QkFDYixJQUFJLENBQUMsS0FBSyxHQUFHLGVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxDQUFDO3dCQUN6QyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsVUFBQSxDQUFDLElBQUUsT0FBQSxLQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFqQixDQUFpQixDQUFDLENBQUM7b0JBQ3JFLENBQUM7Z0JBRUMsQ0FBQztnQkFFRCwrQ0FBb0IsR0FBcEI7b0JBRUYsTUFBTSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztnQkFFaEQsQ0FBQztnQkF0TkY7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVixRQUFRLEVBQUUsaUJBQWlCO3dCQUMzQixXQUFXLEVBQUUsc0NBQXNDO3dCQUNuRCxTQUFTLEVBQUcsQ0FBQyxxQ0FBcUMsQ0FBQzt3QkFDbkQsVUFBVSxFQUFFOzRCQUNYLGdEQUFxQjs0QkFDckIsZ0RBQXFCOzRCQUNyQixzREFBd0I7NEJBQ3hCLG9EQUF1Qjt5QkFDdkI7d0JBQ0QsU0FBUyxFQUFFOzRCQUNULHFCQUFjO3lCQUNkO3dCQUNELE9BQU8sRUFBRSxDQUFDLGVBQWUsQ0FBQztxQkFDM0IsQ0FBQzs7b0NBQUE7Z0JBMk1GLHVCQUFDO1lBQUQsQ0F4TUEsQUF3TUMsSUFBQTtZQXhNRCwrQ0F3TUMsQ0FBQSIsImZpbGUiOiJ0aGUtcXVpei90aGUtcXVpei5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgT25Jbml0IH0gICAgICAgZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHAsIEhUVFBfUFJPVklERVJTIH0gZnJvbSAnYW5ndWxhcjIvaHR0cCc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XHJcbmltcG9ydCAncnhqcy9SeCc7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcy9SeCc7XHJcbmltcG9ydCB7IFF1aXpTZXR0aW5nc1NlcnZpY2UgfSAgZnJvbSAnLi8uLi9zaGFyZWQvcXVpei1zZXR0aW5ncy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUXVpelF1ZXN0aW9uc1NlcnZpY2UgfSAgZnJvbSAnLi8uLi9zaGFyZWQvcXVpei1xdWVzdGlvbnMuc2VydmljZSc7XHJcbmltcG9ydCB7IFF1aXpMb2dpY1NlcnZpY2UgfSAgZnJvbSAnLi8uLi9zaGFyZWQvcXVpei1sb2dpYy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUXVpelNldHRpbmcgfSAgZnJvbSAnLi8uLi9zaGFyZWQvcXVpei5zZXR0aW5ncy5pbnRlcmZhY2UudHMnO1xyXG4vL2ltcG9ydCB7IFF1aXpTZXR0aW5nc01vY2sgfSAgZnJvbSAnLi8uLi9tb2NrL3F1aXotc2V0dGluZ3MubW9jay50cyc7XHJcbmltcG9ydCB7IFRoZVF1aXpJbWFnZUNvbXBvbmVudCB9ICBmcm9tICcuL3RoZS1xdWl6LWltYWdlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFRoZVF1aXpTb3VuZENvbXBvbmVudCB9ICBmcm9tICcuL3RoZS1xdWl6LXNvdW5kLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFF1aXpTcGVjaWVTZXJ2aWNlIH0gIGZyb20gJy4vLi4vc2hhcmVkL3F1aXotc3BlY2llLnNlcnZpY2UnO1xyXG5cclxuaW1wb3J0IHsgVGhlUXVpekNob2ljZXNDb21wb25lbnQgfSAgZnJvbSAnLi90aGUtcXVpei1jaG9pY2VzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFRoZVF1aXpGcmVldHlwZUNvbXBvbmVudCB9ICBmcm9tICcuL3RoZS1xdWl6LWZyZWV0eXBlLmNvbXBvbmVudCc7XHJcblxyXG5pbXBvcnQgeyBRdWl6UXVlc3Rpb24gfSAgZnJvbSAnLi8uLi9zaGFyZWQuY2xhc3MvdGhlLXF1aXotcXVlc3Rpb24uY2xhc3MnO1xyXG5cclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogJ2JpcmRpZC10aGUtcXVpeicsXHJcblx0dGVtcGxhdGVVcmw6ICdhcHAvdGhlLXF1aXovdGhlLXF1aXouY29tcG9uZW50Lmh0bWwnLFxyXG5cdHN0eWxlVXJsczogIFsnYXBwL3RoZS1xdWl6L3RoZS1xdWl6LmNvbXBvbmVudC5jc3MnXSxcclxuXHRkaXJlY3RpdmVzOiBbXHJcblx0XHRUaGVRdWl6SW1hZ2VDb21wb25lbnQsXHJcblx0XHRUaGVRdWl6U291bmRDb21wb25lbnQsXHJcblx0XHRUaGVRdWl6RnJlZXR5cGVDb21wb25lbnQsXHJcblx0XHRUaGVRdWl6Q2hvaWNlc0NvbXBvbmVudFxyXG5cdF0sXHJcblx0cHJvdmlkZXJzOiBbXHJcblx0ICBIVFRQX1BST1ZJREVSU1xyXG4gIF0sXHJcbiAgb3V0cHV0czogWydxdWl6RG9uZUV2ZW50J11cclxufSlcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgVGhlUXVpekNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcclxuXHR0aXRsZSA9ICdCaXJkaWQgUXVpeiBUaGVRdWl6Q29tcG9uZW50ISc7XHJcblxyXG5cdHF1aXpEb25lRXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcclxuXHJcbiAgICBxdWl6TG9hZGVkID0gZmFsc2U7XHJcblxyXG5cclxuXHRjdXJyZW50UXVpelF1ZXN0aW9uOlF1aXpRdWVzdGlvbjtcclxuICAgIGluYmV0d2VlblF1ZXN0aW9ucyA9IGZhbHNlO1xyXG5cclxuXHJcblx0cXVpelNldHRpbmdzOiBRdWl6U2V0dGluZ1tdO1xyXG5cclxuXHRxdWl6RG9uZSA9IGZhbHNlO1xyXG5cdC8vZHVyYXRpb249MDtcclxuXHRkdXJhdGlvbjtcclxuXHR0aWNrczpudW1iZXI7XHJcblx0dGltZXI7XHJcblx0dGltZXJTdWJzY3JpcHRpb247XHJcblxyXG5cclxuXHQgIGNvbnN0cnVjdG9yKFxyXG5cdFx0ICBwcml2YXRlIF9xdWl6U2V0dGluZ3NTZXJ2aWNlOiBRdWl6U2V0dGluZ3NTZXJ2aWNlLFxyXG5cdFx0ICBwcml2YXRlIF9xdWl6UXVlc3Rpb25TZXJ2aWNlOiBRdWl6UXVlc3Rpb25zU2VydmljZSxcclxuXHRcdCAgcHJpdmF0ZSBfcXVpekxvZ2ljU2VydmljZTogUXVpekxvZ2ljU2VydmljZSxcclxuXHRcdCAgcHJpdmF0ZSBfcXVpelNwZWNpZXNTZXJ2aWNlOiBRdWl6U3BlY2llU2VydmljZSxcclxuXHRcdCAgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXJcclxuXHQgICl7fVxyXG5cclxuXHRuZ09uSW5pdCgpIHtcclxuXHJcblxyXG5cdFx0dGhpcy5fcXVpekxvZ2ljU2VydmljZS5uZXdRdWl6KCk7XHJcblxyXG5cdFx0Ly9tb2NoIHdoaWxlIG1pbGUgd29ya3Mgb24gaGlzIHNlcnZpY2UsIHJlcGxhY2UgYnkgZ2V0dGluZyBmcm9tIGl0XHJcblx0XHR0aGlzLnF1aXpTZXR0aW5ncyA9IHRoaXMuX3F1aXpTZXR0aW5nc1NlcnZpY2UuZ2V0UXVpelNldHRpbmdzKCk7XHJcblx0XHR0aGlzLl9xdWl6TG9naWNTZXJ2aWNlLnNldFF1aXpRdWVzdGlvbnNTZXR0aW5ncyh0aGlzLnF1aXpTZXR0aW5ncyk7XHJcblxyXG5cdFx0aWYodGhpcy5fcXVpelNldHRpbmdzU2VydmljZS5pc0JlZ2lubmVyUXVpeigpKXtcclxuXHRcdFx0Ly9CZWdpbm5lciBxdWl6IVxyXG5cdFx0XHR0aGlzLl9xdWl6UXVlc3Rpb25TZXJ2aWNlLmdldEJlZ2lubmVyUXVpelF1ZXN0aW9ucyh0aGlzLnF1aXpTZXR0aW5ncylcclxuXHRcdFx0XHQuc3Vic2NyaWJlKFxyXG5cdFx0XHRcdFx0ZGF0YSA9PiB7XHJcblx0XHRcdFx0XHRcdHRoaXMub25RdWVzdGlvbnNSZXNpdmVkKGRhdGEpO1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdGVycm9yID0+IGNvbnNvbGUuZXJyb3IoXCJnZXRRdWl6UXVlc3Rpb25zIEVSUk9SISBcIiwgZXJyb3IpXHJcblx0XHRcdCk7XHJcblxyXG5cdFx0fWVsc2V7XHJcblxyXG5cdFx0XHR0aGlzLl9xdWl6UXVlc3Rpb25TZXJ2aWNlLmdldFF1aXpRdWVzdGlvbnModGhpcy5xdWl6U2V0dGluZ3MpXHJcblx0XHRcdFx0LnN1YnNjcmliZShcclxuXHRcdFx0XHRcdGRhdGEgPT4ge1xyXG5cdFx0XHRcdFx0XHR0aGlzLm9uUXVlc3Rpb25zUmVzaXZlZChkYXRhKTtcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRlcnJvciA9PiBjb25zb2xlLmVycm9yKFwiZ2V0UXVpelF1ZXN0aW9ucyBFUlJPUiEgXCIsIGVycm9yKVxyXG5cdFx0XHQpO1xyXG5cclxuXHRcdH1cclxuXHJcblxyXG5cdH1cclxuXHJcblx0b25RdWVzdGlvbnNSZXNpdmVkKGRhdGEpe1xyXG5cdFx0Y29uc29sZS5sb2coZGF0YSk7XHJcblx0XHR0aGlzLl9xdWl6TG9naWNTZXJ2aWNlLnNldFF1aXpRdWVzdGlvbnMoZGF0YSwgdGhpcy5fcXVpelNldHRpbmdzU2VydmljZS5pc1NldmVyYWxTb3VuZFF1aXooKSwgdGhpcy5fcXVpelNldHRpbmdzU2VydmljZS5pc0JlZ2lubmVyUXVpeigpKTtcclxuXHJcblx0XHQvL2NvbnNvbGUubG9nKFwiTnVtYmVyIG9mIHF1ZXN0aW9uc1wiLCBkYXRhLm1ldGFkYXRhWydudW1fUXVlc3Rpb25zJ10pO1xyXG5cdFx0dGhpcy5zdGFydFF1aXooKTtcclxuXHR9XHJcblxyXG5cdHNob3VsZERpc3BsYXlTb3VuZENvbXBvbmVudCgpe1xyXG5cclxuXHRcdGlmKHRoaXMuX3F1aXpTZXR0aW5nc1NlcnZpY2UuZ2V0UXVpelNldHRpbmdzKClbMF0ubWVkaWFUeXBlSUQgPT0gMil7XHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vaWYgYmVnaW5uZXJxdWl6IHdpdGggYm90aCBpbWFnZSBBTkQgc291bmRcclxuXHRcdGlmKHRoaXMuX3F1aXpTZXR0aW5nc1NlcnZpY2UuaXNCZWdpbm5lclF1aXooKSAmJiB0aGlzLmN1cnJlbnRRdWl6UXVlc3Rpb24uZ2V0TWVkaWFTb3Vyc2VzKCkubGVuZ3RoID4gMSl7XHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHJcblx0fVxyXG5cclxuXHRzdGFydFF1aXooKXtcclxuXHJcbiAgICAgICAgdGhpcy5zZXR1cFF1ZXN0aW9uKCk7XHJcblxyXG4gICAgICAgIHRoaXMucXVpekxvYWRlZCA9IHRydWU7XHJcblxyXG4gICAgfVxyXG5cclxuXHQvL3doZW4gZG9uZSBieSBzdWIgc2VsZWN0IGNvbXBvbmVudCAoZWcgbmV4dCBxdWVzdGlvbiBidXR0b24gY2xpY2tlZClcclxuXHRzdWJTZWxlY3RDb21wbGV0ZUV2ZW50KGV2ZW50KXtcclxuXHJcblx0XHR0aGlzLm5leHRRdWVzdGlvbigpO1xyXG5cclxuXHR9XHJcblxyXG4gICAgbmV4dFF1ZXN0aW9uKCl7XHJcblxyXG5cdFx0aWYodGhpcy5fcXVpelNldHRpbmdzU2VydmljZS5nZXRRdWl6U2V0dGluZ3MoKVswXS50aW1lTGltaXQgIT0gMCl7XHJcblx0XHRcdHRoaXMudGltZXJTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuXHRcdH1cclxuXHJcblxyXG5cdFx0aWYodGhpcy5xdWl6RG9uZSl7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcbiAgICAgICAgaWYoIXRoaXMuaW5iZXR3ZWVuUXVlc3Rpb25zICYmICF0aGlzLnF1aXpTZXR0aW5nc1swXS5mb3JtYWxUZXN0UXVpeil7XHJcblx0XHRcdC8vc2tpcHBpbmcgdGhpcyBpbiBmb3JtYWwgdGVzdFxyXG4gICAgICAgICAgICB0aGlzLmluYmV0d2VlblF1ZXN0aW9ucyA9IHRydWU7XHJcblxyXG5cdFx0XHQvL3VwZGF0ZSBzY29yZSBiYXNlZCBvbiB1c2VyIGNob2ljZXNcclxuXHRcdFx0dGhpcy5fcXVpekxvZ2ljU2VydmljZS5jaGFuZ2VTY29yZSh0aGlzLmN1cnJlbnRRdWl6UXVlc3Rpb24uZ2V0U2NvcmVGb3JTZWxlY3RlZEFuc3dlcnMoKSk7XHJcblxyXG4gICAgICAgIH1lbHNle1xyXG5cclxuICAgICAgICAgICAgdGhpcy5pbmJldHdlZW5RdWVzdGlvbnMgPSBmYWxzZTtcclxuXHRcdFx0Y29uc29sZS5sb2coXCJnZXRTZWxlY3RlZENob2ljZTogXCIsIHRoaXMuY3VycmVudFF1aXpRdWVzdGlvbi5nZXRTZWxlY3RlZENob2ljZSgpKTtcclxuXHRcdFx0dGhpcy5fcXVpekxvZ2ljU2VydmljZS5nb3RvTmV4dFF1ZXN0aW9uTnVtYmVyKCk7XHJcbiAgICAgICAgICAgIC8vdGhpcy5xdWVzdGlvbk51bWJlcisrO1xyXG4gICAgICAgICAgICB0aGlzLnNldHVwUXVlc3Rpb24oKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgfVxyXG5cclxuXHJcblx0dGltZXJUaWNrKHQpe1xyXG5cclxuXHRcdHRoaXMudGlja3MgPSB0XHJcblx0XHRpZih0aGlzLl9xdWl6U2V0dGluZ3NTZXJ2aWNlLmdldFF1aXpTZXR0aW5ncygpWzBdLnRpbWVMaW1pdC10aGlzLnRpY2tzIDwgMSl7XHJcblxyXG5cdFx0XHR0aGlzLm5leHRRdWVzdGlvbigpO1xyXG5cdFx0fVxyXG5cclxuXHR9XHJcblxyXG5cclxuXHRnZXREdXJhdGlvblVzZXJGcmllbmRseSgpe1xyXG5cdFx0dGhpcy5kdXJhdGlvbiA9IHRoaXMuX3F1aXpTZXR0aW5nc1NlcnZpY2UuZ2V0RHVyYXRpb24oKTtcclxuXHJcblx0XHRpZiAodGhpcy5kdXJhdGlvbj09MCl7XHJcblx0XHRcdHJldHVybiAndW5saW1pdGVkJztcclxuXHRcdH1cclxuXHRcdGlmKHRoaXMuZHVyYXRpb249PTIwKSB7XHJcblx0XHRcdGxldCBjdXJyZW50VGltZSA9IHRoaXMuZHVyYXRpb24gLSB0aGlzLnRpY2tzO1xyXG5cdFx0XHRyZXR1cm4gY3VycmVudFRpbWUudG9TdHJpbmcoKTtcclxuXHRcdH1cclxuXHRcdGlmKHRoaXMuZHVyYXRpb249PTMwKSB7XHJcblx0XHRcdGxldCBjdXJyZW50VGltZSA9IHRoaXMuZHVyYXRpb24gLSB0aGlzLnRpY2tzO1xyXG5cdFx0XHRyZXR1cm4gY3VycmVudFRpbWUudG9TdHJpbmcoKTtcclxuXHRcdH1cclxuXHRcdGlmKHRoaXMuZHVyYXRpb249PTQwKSB7XHJcblx0XHRcdGxldCBjdXJyZW50VGltZSA9IHRoaXMuZHVyYXRpb24gLSB0aGlzLnRpY2tzO1xyXG5cdFx0XHRyZXR1cm4gY3VycmVudFRpbWUudG9TdHJpbmcoKTtcclxuXHRcdH1cclxuXHJcblxyXG5cdH1cclxuXHJcbiAgICBzZXR1cFF1ZXN0aW9uKCl7XHJcblxyXG5cdFx0aWYodGhpcy5fcXVpekxvZ2ljU2VydmljZS5ub1F1ZXN0aW9uc0xlZnQoKSl7XHJcblx0XHRcdC8vUVVJWiBET05FIVxyXG5cdFx0XHR0aGlzLnF1aXpEb25lID0gdHJ1ZTtcclxuXHRcdFx0Ly90aGlzLnF1aXpEb25lRXZlbnQuZW1pdChcIk1lZGlhUXVpek92ZXJcIik7XHJcblx0XHRcdGlmKHRoaXMucXVpelNldHRpbmdzWzBdLmZvcm1hbFRlc3RRdWl6KXtcclxuXHRcdFx0XHR0aGlzLl9yb3V0ZXIubmF2aWdhdGUoW1wiUXVpekZvcm1hbFRlc3RFbmRcIl0pO1xyXG5cdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHR0aGlzLl9yb3V0ZXIubmF2aWdhdGUoW1wiUXVpek1lZGlhUXVpelJlc3VsdHNcIl0pO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5jdXJyZW50UXVpelF1ZXN0aW9uID0gdGhpcy5fcXVpekxvZ2ljU2VydmljZS5nZXRDdXJyZW50UXVpelF1ZXN0aW9uKCk7XHJcblxyXG5cdFx0aWYodGhpcy5fcXVpelNldHRpbmdzU2VydmljZS5nZXRRdWl6U2V0dGluZ3MoKVswXS50aW1lTGltaXQgIT0gMCl7XHJcblx0XHRcdHRoaXMudGlja3M9MDtcclxuXHRcdFx0dGhpcy50aW1lciA9IE9ic2VydmFibGUudGltZXIoMjAwMCwxMDAwKTtcclxuXHRcdFx0dGhpcy50aW1lclN1YnNjcmlwdGlvbiA9IHRoaXMudGltZXIuc3Vic2NyaWJlKHQ9PnRoaXMudGltZXJUaWNrKHQpKTtcclxuXHRcdH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UXVlc3Rpb25FeHRyYUluZm8oKXtcclxuXHJcblx0XHRyZXR1cm4gdGhpcy5jdXJyZW50UXVpelF1ZXN0aW9uLmdldEV4dHJhSW5mbygpO1xyXG5cclxuXHR9XHJcblxyXG5cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
