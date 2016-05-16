System.register(['angular2/core', 'angular2/http', 'angular2/router', 'rxjs/Rx', './../shared.class/the-quiz-question.class'], function(exports_1, context_1) {
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
    var core_1, http_1, router_1, the_quiz_question_class_1;
    var QuizLogicService;
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
            function (_1) {},
            function (the_quiz_question_class_1_1) {
                the_quiz_question_class_1 = the_quiz_question_class_1_1;
            }],
        execute: function() {
            QuizLogicService = (function () {
                function QuizLogicService(_http, _router) {
                    this._http = _http;
                    this._router = _router;
                    this.quizLoaded = false;
                    this.score = 0;
                    this.questionNumber = 0; //start at 0
                    this.quizQuestions = [];
                }
                //reset for a new quiz as the service is persistent across multible quizes
                QuizLogicService.prototype.newQuiz = function () {
                    this.score = 0;
                    this.questionNumber = 0;
                    this.quizLoaded = false;
                    this.quizQuestions = [];
                };
                //creates an array of 2 and 3
                QuizLogicService.prototype.createSeveralSoundquizDistrubutionArray = function () {
                    var numQuestionsTotal = this.quizQuestionsSettings[0].numQuestions;
                    var arrayOfQuestiongroups = [];
                    //add 2 to all places
                    for (var i = 0; i < numQuestionsTotal; i++) {
                        arrayOfQuestiongroups.push(2);
                    }
                    var questionsLeft = Math.floor(numQuestionsTotal * 0.5);
                    var loopCount = 0;
                    //do the rest
                    while (questionsLeft > 0) {
                        //add to random place if less than 3 (witch is max)
                        //http://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
                        var randomnumber = Math.floor(Math.random() * (numQuestionsTotal - 0 + 1)) + 0;
                        if (arrayOfQuestiongroups[randomnumber] < 3) {
                            arrayOfQuestiongroups[randomnumber] += 1;
                            questionsLeft--;
                        }
                        loopCount++;
                        if (loopCount > 1000) {
                            var link = ['QuizError', { errorID: 2 }];
                            this._router.navigate(link);
                            throw new Error("createSeveralSoundquizDistrubutionArray infinate loop detected, > 1000");
                        }
                    }
                    //console.log("arrayOfQuestiongroups ", arrayOfQuestiongroups);
                    return arrayOfQuestiongroups;
                };
                QuizLogicService.prototype.setQuizQuestions = function (quizQuestionsData, severalSoundQuiz, beginnerQuiz) {
                    if (severalSoundQuiz === void 0) { severalSoundQuiz = false; }
                    if (beginnerQuiz === void 0) { beginnerQuiz = false; }
                    var numQuestionsTotal = this.quizQuestionsSettings[0].numQuestions;
                    this.quizQuestionsData = quizQuestionsData;
                    var arrayOfQuestiongroups = [];
                    //add 1 to all places. Used by default when not several soundquiz
                    for (var i = 0; i < numQuestionsTotal; i++) {
                        arrayOfQuestiongroups.push(1);
                    }
                    if (severalSoundQuiz) {
                        arrayOfQuestiongroups = this.createSeveralSoundquizDistrubutionArray();
                    }
                    //loops all the "groupes"
                    var currentQuestionObjectID = 0;
                    for (var _i = 0, _a = Object.keys(arrayOfQuestiongroups); _i < _a.length; _i++) {
                        var currentGroupID = _a[_i];
                        var currentQuizQuestion = new the_quiz_question_class_1.QuizQuestion(severalSoundQuiz);
                        //combines the number of questions in each group together
                        for (var i = 0; i < arrayOfQuestiongroups[currentGroupID]; i++) {
                            var tempQuizData = this.quizQuestionsData.mediaArray[currentQuestionObjectID];
                            //temporary!!
                            if (tempQuizData == undefined) {
                                //NO QUESTIONS LEFT!
                                var link = ['QuizError', { errorID: 1 }];
                                this._router.navigate(link);
                                throw new Error("NO QUESTIONS LEFT! A check for loading of questions needs to be implemented in QuizLogicService.setQuizQuestions");
                            }
                            var alts = tempQuizData['mediaChoices'];
                            //preventing the same question from containing the same specie twice.
                            //this will mean in some rare cases one question qwill ony have one right answer.
                            if (!currentQuizQuestion.checkIfAnserIsCorrect(alts['right_answer']['id'])) {
                                currentQuizQuestion.addRightAnswer(alts['right_answer']['id'], alts['right_answer']['name'], alts['right_answer']['nameLatin']);
                                currentQuizQuestion.addChoice(alts['choice_2']['id'], alts['choice_2']['name'], alts['choice_2']['nameLatin']);
                                currentQuizQuestion.addChoice(alts['choice_3']['id'], alts['choice_3']['name'], alts['choice_3']['nameLatin']);
                                currentQuizQuestion.addChoice(alts['choice_4']['id'], alts['choice_4']['name'], alts['choice_4']['nameLatin']);
                                currentQuizQuestion.addChoice(alts['choice_5']['id'], alts['choice_5']['name'], alts['choice_5']['nameLatin']);
                                currentQuizQuestion.addMediaId(tempQuizData.media_id);
                                currentQuizQuestion.addExtraInfo(tempQuizData.extra_info);
                                currentQuizQuestion.addMediaSource(tempQuizData.media_url);
                                if (beginnerQuiz) {
                                    if (tempQuizData.media_url_sound != null) {
                                        //add sound if is is there
                                        currentQuizQuestion.addMediaSource(tempQuizData.media_url_sound);
                                    }
                                }
                            }
                            else {
                                console.log("one removed due to duplicate rigth answer in question " + currentQuestionObjectID);
                            }
                            currentQuestionObjectID++;
                        }
                        currentQuizQuestion.prosessData();
                        this.quizQuestions.push(currentQuizQuestion);
                    }
                    this.quizLoaded = true;
                };
                //return based on this.questionNumber
                QuizLogicService.prototype.getCurrentQuizQuestion = function () {
                    return this.quizQuestions[this.questionNumber];
                };
                QuizLogicService.prototype.setQuizQuestionsSettings = function (quizQuestionsSettings) {
                    this.quizQuestionsSettings = quizQuestionsSettings;
                };
                QuizLogicService.prototype.setScore = function (score) {
                    this.score = score;
                };
                QuizLogicService.prototype.changeScore = function (change) {
                    this.score += change;
                };
                QuizLogicService.prototype.getScore = function () {
                    return this.score;
                };
                QuizLogicService.prototype.gotoNextQuestionNumber = function () {
                    this.questionNumber += 1;
                };
                QuizLogicService.prototype.getQuestionNumber = function () {
                    return this.questionNumber;
                };
                QuizLogicService.prototype.noQuestionsLeft = function () {
                    if (this.questionNumber + 1 > this.quizQuestionsSettings[0]['numQuestions']) {
                        return true;
                    }
                    else {
                        return false;
                    }
                };
                //ONLY supports one choice pr question!!
                QuizLogicService.prototype.getAnswerListCSV = function () {
                    var answerCsvString = "";
                    for (var _i = 0, _a = Object.keys(this.quizQuestions); _i < _a.length; _i++) {
                        var currentQuestionID = _a[_i];
                        var currentQuestionMedias = this.quizQuestions[currentQuestionID].getSelectedChoice();
                        //console.log("currentQuestionMedias: ", currentQuestionMedias);
                        if (currentQuestionMedias.length > 0) {
                            //API uses -1 as i donæt know, here we change to comply with that. Maby change API later?
                            if (currentQuestionMedias[0].id == -1) {
                                answerCsvString += "0,";
                            }
                            else {
                                answerCsvString += currentQuestionMedias[0].id + ",";
                            }
                        }
                        else {
                            answerCsvString += "0,";
                        }
                    }
                    if (answerCsvString.length > 0) {
                        return answerCsvString.substring(0, answerCsvString.length - 1);
                    }
                    else {
                        return "";
                    }
                };
                //ONLY supports one right answer!!
                QuizLogicService.prototype.getMediaIdsCSV = function () {
                    var mediaCsvString = "";
                    for (var _i = 0, _a = Object.keys(this.quizQuestions); _i < _a.length; _i++) {
                        var currentQuestionID = _a[_i];
                        var currentQuestionMedias = this.quizQuestions[currentQuestionID].getMediaIds()[0].id;
                        mediaCsvString += currentQuestionMedias + ",";
                    }
                    if (mediaCsvString.length > 0) {
                        return mediaCsvString.substring(0, mediaCsvString.length - 1);
                    }
                    else {
                        return "";
                    }
                };
                QuizLogicService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http, router_1.Router])
                ], QuizLogicService);
                return QuizLogicService;
            }());
            exports_1("QuizLogicService", QuizLogicService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9xdWl6LWxvZ2ljLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBV0E7Z0JBWUMsMEJBQ1MsS0FBVyxFQUNYLE9BQWU7b0JBRGYsVUFBSyxHQUFMLEtBQUssQ0FBTTtvQkFDWCxZQUFPLEdBQVAsT0FBTyxDQUFRO29CQVp4QixlQUFVLEdBQUcsS0FBSyxDQUFDO29CQUVuQixVQUFLLEdBQUcsQ0FBQyxDQUFDO29CQUNWLG1CQUFjLEdBQUcsQ0FBQyxDQUFDLENBQUMsWUFBWTtvQkFLaEMsa0JBQWEsR0FBa0IsRUFBRSxDQUFDO2dCQUtoQyxDQUFDO2dCQUVILDBFQUEwRTtnQkFDMUUsa0NBQU8sR0FBUDtvQkFFQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztvQkFDZixJQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQztvQkFDeEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7b0JBQ3hCLElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDO2dCQUV6QixDQUFDO2dCQUVELDZCQUE2QjtnQkFDN0Isa0VBQXVDLEdBQXZDO29CQUVDLElBQUksaUJBQWlCLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQztvQkFFbkUsSUFBSSxxQkFBcUIsR0FBRyxFQUFFLENBQUM7b0JBQy9CLHFCQUFxQjtvQkFDckIsR0FBRyxDQUFBLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxpQkFBaUIsRUFBRSxDQUFDLEVBQUcsRUFBQyxDQUFDO3dCQUMzQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQy9CLENBQUM7b0JBQ0QsSUFBSSxhQUFhLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsR0FBQyxHQUFHLENBQUMsQ0FBQztvQkFFdEQsSUFBSSxTQUFTLEdBQUcsQ0FBQyxDQUFDO29CQUNsQixhQUFhO29CQUNiLE9BQU0sYUFBYSxHQUFHLENBQUMsRUFBQyxDQUFDO3dCQUV4QixtREFBbUQ7d0JBQ25ELDhHQUE4Rzt3QkFDOUcsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxpQkFBaUIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQy9FLEVBQUUsQ0FBQSxDQUFDLHFCQUFxQixDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBLENBQUM7NEJBQzNDLHFCQUFxQixDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQzs0QkFDekMsYUFBYSxFQUFHLENBQUM7d0JBQ2xCLENBQUM7d0JBRUQsU0FBUyxFQUFHLENBQUM7d0JBQ2IsRUFBRSxDQUFBLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxDQUFBLENBQUM7NEJBQ3BCLElBQUksSUFBSSxHQUFHLENBQUMsV0FBVyxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7NEJBQ3pDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDOzRCQUM1QixNQUFNLElBQUksS0FBSyxDQUFDLHdFQUF3RSxDQUFDLENBQUM7d0JBQzNGLENBQUM7b0JBRUYsQ0FBQztvQkFFRCwrREFBK0Q7b0JBRS9ELE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQztnQkFHOUIsQ0FBQztnQkFFRCwyQ0FBZ0IsR0FBaEIsVUFBaUIsaUJBQWlCLEVBQUUsZ0JBQXdCLEVBQUUsWUFBb0I7b0JBQTlDLGdDQUF3QixHQUF4Qix3QkFBd0I7b0JBQUUsNEJBQW9CLEdBQXBCLG9CQUFvQjtvQkFFakYsSUFBSSxpQkFBaUIsR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDO29CQUVuRSxJQUFJLENBQUMsaUJBQWlCLEdBQUcsaUJBQWlCLENBQUM7b0JBRTNDLElBQUkscUJBQXFCLEdBQUcsRUFBRSxDQUFDO29CQUMvQixpRUFBaUU7b0JBQ2pFLEdBQUcsQ0FBQSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsaUJBQWlCLEVBQUUsQ0FBQyxFQUFHLEVBQUMsQ0FBQzt3QkFDM0MscUJBQXFCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUMvQixDQUFDO29CQUdELEVBQUUsQ0FBQSxDQUFDLGdCQUFnQixDQUFDLENBQUEsQ0FBQzt3QkFFcEIscUJBQXFCLEdBQUcsSUFBSSxDQUFDLHVDQUF1QyxFQUFFLENBQUM7b0JBRXhFLENBQUM7b0JBRUQseUJBQXlCO29CQUN6QixJQUFJLHVCQUF1QixHQUFHLENBQUMsQ0FBQztvQkFDaEMsR0FBRyxDQUFDLENBQXVCLFVBQWtDLEVBQWxDLEtBQUEsTUFBTSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxFQUFsQyxjQUFrQyxFQUFsQyxJQUFrQyxDQUFDO3dCQUF6RCxJQUFJLGNBQWMsU0FBQTt3QkFFdEIsSUFBSSxtQkFBbUIsR0FBRyxJQUFJLHNDQUFZLENBQUMsZ0JBQWdCLENBQUMsQ0FBQzt3QkFFN0QseURBQXlEO3dCQUN6RCxHQUFHLENBQUEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLHFCQUFxQixDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsRUFBRyxFQUFDLENBQUM7NEJBRS9ELElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsdUJBQXVCLENBQUMsQ0FBQzs0QkFFOUUsYUFBYTs0QkFDYixFQUFFLENBQUEsQ0FBQyxZQUFZLElBQUksU0FBUyxDQUFDLENBQUEsQ0FBQztnQ0FDN0Isb0JBQW9CO2dDQUNwQixJQUFJLElBQUksR0FBRyxDQUFDLFdBQVcsRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dDQUN6QyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQ0FDNUIsTUFBTSxJQUFJLEtBQUssQ0FBQyxrSEFBa0gsQ0FBQyxDQUFDOzRCQUNySSxDQUFDOzRCQUVELElBQUksSUFBSSxHQUFHLFlBQVksQ0FBQyxjQUFjLENBQUMsQ0FBQzs0QkFFeEMscUVBQXFFOzRCQUNyRSxpRkFBaUY7NEJBQ2pGLEVBQUUsQ0FBQSxDQUFDLENBQUMsbUJBQW1CLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQSxDQUFDO2dDQUUxRSxtQkFBbUIsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztnQ0FDaEksbUJBQW1CLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7Z0NBQy9HLG1CQUFtQixDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO2dDQUMvRyxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztnQ0FDL0csbUJBQW1CLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7Z0NBRS9HLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUE7Z0NBQ3JELG1CQUFtQixDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLENBQUM7Z0NBQzFELG1CQUFtQixDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUM7Z0NBRTNELEVBQUUsQ0FBQSxDQUFDLFlBQVksQ0FBQyxDQUFBLENBQUM7b0NBQ2hCLEVBQUUsQ0FBQSxDQUFDLFlBQVksQ0FBQyxlQUFlLElBQUksSUFBSSxDQUFDLENBQUEsQ0FBQzt3Q0FDeEMsMEJBQTBCO3dDQUMxQixtQkFBbUIsQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLGVBQWUsQ0FBQyxDQUFDO29DQUNsRSxDQUFDO2dDQUNGLENBQUM7NEJBRUYsQ0FBQzs0QkFBQSxJQUFJLENBQUEsQ0FBQztnQ0FDTCxPQUFPLENBQUMsR0FBRyxDQUFDLHdEQUF3RCxHQUFDLHVCQUF1QixDQUFDLENBQUM7NEJBQy9GLENBQUM7NEJBRUQsdUJBQXVCLEVBQUcsQ0FBQzt3QkFFNUIsQ0FBQzt3QkFFRCxtQkFBbUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQzt3QkFDbEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQztxQkFFN0M7b0JBRUQsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7Z0JBRXhCLENBQUM7Z0JBQ0QscUNBQXFDO2dCQUNyQyxpREFBc0IsR0FBdEI7b0JBRUMsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO2dCQUVoRCxDQUFDO2dCQUVELG1EQUF3QixHQUF4QixVQUF5QixxQkFBcUI7b0JBQzdDLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxxQkFBcUIsQ0FBQztnQkFDcEQsQ0FBQztnQkFFRCxtQ0FBUSxHQUFSLFVBQVMsS0FBSztvQkFDYixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztnQkFDcEIsQ0FBQztnQkFDRCxzQ0FBVyxHQUFYLFVBQVksTUFBTTtvQkFDakIsSUFBSSxDQUFDLEtBQUssSUFBSSxNQUFNLENBQUM7Z0JBQ3RCLENBQUM7Z0JBQ0QsbUNBQVEsR0FBUjtvQkFDQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztnQkFDbkIsQ0FBQztnQkFFRCxpREFBc0IsR0FBdEI7b0JBQ0MsSUFBSSxDQUFDLGNBQWMsSUFBSSxDQUFDLENBQUM7Z0JBQzFCLENBQUM7Z0JBQ0QsNENBQWlCLEdBQWpCO29CQUNDLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDO2dCQUM1QixDQUFDO2dCQUVELDBDQUFlLEdBQWY7b0JBR0MsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLGNBQWMsR0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUEsQ0FBQzt3QkFDekUsTUFBTSxDQUFDLElBQUksQ0FBQztvQkFDYixDQUFDO29CQUFBLElBQUksQ0FBQSxDQUFDO3dCQUNMLE1BQU0sQ0FBQyxLQUFLLENBQUM7b0JBQ2QsQ0FBQztnQkFFRixDQUFDO2dCQUVELHdDQUF3QztnQkFDeEMsMkNBQWdCLEdBQWhCO29CQUVDLElBQUksZUFBZSxHQUFVLEVBQUUsQ0FBQztvQkFFaEMsR0FBRyxDQUFDLENBQTBCLFVBQStCLEVBQS9CLEtBQUEsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQS9CLGNBQStCLEVBQS9CLElBQStCLENBQUM7d0JBQXpELElBQUksaUJBQWlCLFNBQUE7d0JBQ3pCLElBQUkscUJBQXFCLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLGlCQUFpQixFQUFFLENBQUM7d0JBRXRGLGdFQUFnRTt3QkFDaEUsRUFBRSxDQUFBLENBQUMscUJBQXFCLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFBLENBQUM7NEJBQ3BDLHlGQUF5Rjs0QkFDekYsRUFBRSxDQUFBLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUEsQ0FBQztnQ0FDckMsZUFBZSxJQUFJLElBQUksQ0FBQzs0QkFDekIsQ0FBQzs0QkFBQSxJQUFJLENBQUEsQ0FBQztnQ0FDTCxlQUFlLElBQUkscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQzs0QkFDdEQsQ0FBQzt3QkFDRixDQUFDO3dCQUFBLElBQUksQ0FBQSxDQUFDOzRCQUNMLGVBQWUsSUFBSSxJQUFJLENBQUM7d0JBQ3pCLENBQUM7cUJBRUQ7b0JBRUQsRUFBRSxDQUFBLENBQUMsZUFBZSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQSxDQUFDO3dCQUM5QixNQUFNLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsZUFBZSxDQUFDLE1BQU0sR0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDL0QsQ0FBQztvQkFBQSxJQUFJLENBQUEsQ0FBQzt3QkFDTCxNQUFNLENBQUMsRUFBRSxDQUFDO29CQUNYLENBQUM7Z0JBRUYsQ0FBQztnQkFFRCxrQ0FBa0M7Z0JBQ2xDLHlDQUFjLEdBQWQ7b0JBRUMsSUFBSSxjQUFjLEdBQVUsRUFBRSxDQUFDO29CQUUvQixHQUFHLENBQUMsQ0FBMEIsVUFBK0IsRUFBL0IsS0FBQSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBL0IsY0FBK0IsRUFBL0IsSUFBK0IsQ0FBQzt3QkFBekQsSUFBSSxpQkFBaUIsU0FBQTt3QkFDekIsSUFBSSxxQkFBcUIsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO3dCQUV0RixjQUFjLElBQUkscUJBQXFCLEdBQUcsR0FBRyxDQUFDO3FCQUU5QztvQkFFRCxFQUFFLENBQUEsQ0FBQyxjQUFjLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFBLENBQUM7d0JBQzdCLE1BQU0sQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxjQUFjLENBQUMsTUFBTSxHQUFDLENBQUMsQ0FBQyxDQUFDO29CQUM3RCxDQUFDO29CQUFBLElBQUksQ0FBQSxDQUFDO3dCQUNMLE1BQU0sQ0FBQyxFQUFFLENBQUM7b0JBQ1gsQ0FBQztnQkFHRixDQUFDO2dCQXpPRjtvQkFBQyxpQkFBVSxFQUFFOztvQ0FBQTtnQkFnUGIsdUJBQUM7WUFBRCxDQS9PQSxBQStPQyxJQUFBO1lBL09ELCtDQStPQyxDQUFBIiwiZmlsZSI6InNoYXJlZC9xdWl6LWxvZ2ljLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwIH0gZnJvbSAnYW5ndWxhcjIvaHR0cCc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XHJcblxyXG5pbXBvcnQgJ3J4anMvUngnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuXHJcbmltcG9ydCB7IFF1aXpRdWVzdGlvbiB9ICBmcm9tICcuLy4uL3NoYXJlZC5jbGFzcy90aGUtcXVpei1xdWVzdGlvbi5jbGFzcyc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBRdWl6TG9naWNTZXJ2aWNle1xyXG5cclxuXHRxdWl6TG9hZGVkID0gZmFsc2U7XHJcblxyXG5cdHNjb3JlID0gMDtcclxuXHRxdWVzdGlvbk51bWJlciA9IDA7IC8vc3RhcnQgYXQgMFxyXG5cclxuXHRxdWl6UXVlc3Rpb25zRGF0YTtcclxuXHRxdWl6UXVlc3Rpb25zU2V0dGluZ3M7XHJcblxyXG5cdHF1aXpRdWVzdGlvbnM6UXVpelF1ZXN0aW9uW10gPSBbXTtcclxuXHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIF9odHRwOiBIdHRwLFxyXG5cdFx0cHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXJcclxuXHQpe31cclxuXHJcblx0Ly9yZXNldCBmb3IgYSBuZXcgcXVpeiBhcyB0aGUgc2VydmljZSBpcyBwZXJzaXN0ZW50IGFjcm9zcyBtdWx0aWJsZSBxdWl6ZXNcclxuXHRuZXdRdWl6KCl7XHJcblxyXG5cdFx0dGhpcy5zY29yZSA9IDA7XHJcblx0XHR0aGlzLnF1ZXN0aW9uTnVtYmVyID0gMDtcclxuXHRcdHRoaXMucXVpekxvYWRlZCA9IGZhbHNlO1xyXG5cdFx0dGhpcy5xdWl6UXVlc3Rpb25zID0gW107XHJcblxyXG5cdH1cclxuXHJcblx0Ly9jcmVhdGVzIGFuIGFycmF5IG9mIDIgYW5kIDNcclxuXHRjcmVhdGVTZXZlcmFsU291bmRxdWl6RGlzdHJ1YnV0aW9uQXJyYXkoKXtcclxuXHJcblx0XHRsZXQgbnVtUXVlc3Rpb25zVG90YWwgPSB0aGlzLnF1aXpRdWVzdGlvbnNTZXR0aW5nc1swXS5udW1RdWVzdGlvbnM7XHJcblxyXG5cdFx0bGV0IGFycmF5T2ZRdWVzdGlvbmdyb3VwcyA9IFtdO1xyXG5cdFx0Ly9hZGQgMiB0byBhbGwgcGxhY2VzXHJcblx0XHRmb3IobGV0IGkgPSAwOyBpIDwgbnVtUXVlc3Rpb25zVG90YWw7IGkgKyspe1xyXG5cdFx0XHRhcnJheU9mUXVlc3Rpb25ncm91cHMucHVzaCgyKTtcclxuXHRcdH1cclxuXHRcdGxldCBxdWVzdGlvbnNMZWZ0ID0gTWF0aC5mbG9vcihudW1RdWVzdGlvbnNUb3RhbCowLjUpO1xyXG5cclxuXHRcdGxldCBsb29wQ291bnQgPSAwO1xyXG5cdFx0Ly9kbyB0aGUgcmVzdFxyXG5cdFx0d2hpbGUocXVlc3Rpb25zTGVmdCA+IDApe1xyXG5cclxuXHRcdFx0Ly9hZGQgdG8gcmFuZG9tIHBsYWNlIGlmIGxlc3MgdGhhbiAzICh3aXRjaCBpcyBtYXgpXHJcblx0XHRcdC8vaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xNTI3ODAzL2dlbmVyYXRpbmctcmFuZG9tLXdob2xlLW51bWJlcnMtaW4tamF2YXNjcmlwdC1pbi1hLXNwZWNpZmljLXJhbmdlXHJcblx0XHRcdGxldCByYW5kb21udW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobnVtUXVlc3Rpb25zVG90YWwgLSAwICsgMSkpICsgMDtcclxuXHRcdFx0aWYoYXJyYXlPZlF1ZXN0aW9uZ3JvdXBzW3JhbmRvbW51bWJlcl0gPCAzKXtcclxuXHRcdFx0XHRhcnJheU9mUXVlc3Rpb25ncm91cHNbcmFuZG9tbnVtYmVyXSArPSAxO1xyXG5cdFx0XHRcdHF1ZXN0aW9uc0xlZnQgLS07XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGxvb3BDb3VudCArKztcclxuXHRcdFx0aWYobG9vcENvdW50ID4gMTAwMCl7XHJcblx0XHRcdFx0bGV0IGxpbmsgPSBbJ1F1aXpFcnJvcicsIHsgZXJyb3JJRDogMiB9XTtcclxuXHRcdFx0XHR0aGlzLl9yb3V0ZXIubmF2aWdhdGUobGluayk7XHJcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiY3JlYXRlU2V2ZXJhbFNvdW5kcXVpekRpc3RydWJ1dGlvbkFycmF5IGluZmluYXRlIGxvb3AgZGV0ZWN0ZWQsID4gMTAwMFwiKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdH1cclxuXHJcblx0XHQvL2NvbnNvbGUubG9nKFwiYXJyYXlPZlF1ZXN0aW9uZ3JvdXBzIFwiLCBhcnJheU9mUXVlc3Rpb25ncm91cHMpO1xyXG5cclxuXHRcdHJldHVybiBhcnJheU9mUXVlc3Rpb25ncm91cHM7XHJcblxyXG5cclxuXHR9XHJcblxyXG5cdHNldFF1aXpRdWVzdGlvbnMocXVpelF1ZXN0aW9uc0RhdGEsIHNldmVyYWxTb3VuZFF1aXogPSBmYWxzZSwgYmVnaW5uZXJRdWl6ID0gZmFsc2Upe1xyXG5cclxuXHRcdGxldCBudW1RdWVzdGlvbnNUb3RhbCA9IHRoaXMucXVpelF1ZXN0aW9uc1NldHRpbmdzWzBdLm51bVF1ZXN0aW9ucztcclxuXHJcblx0XHR0aGlzLnF1aXpRdWVzdGlvbnNEYXRhID0gcXVpelF1ZXN0aW9uc0RhdGE7XHJcblxyXG5cdFx0bGV0IGFycmF5T2ZRdWVzdGlvbmdyb3VwcyA9IFtdO1xyXG5cdFx0Ly9hZGQgMSB0byBhbGwgcGxhY2VzLiBVc2VkIGJ5IGRlZmF1bHQgd2hlbiBub3Qgc2V2ZXJhbCBzb3VuZHF1aXpcclxuXHRcdGZvcihsZXQgaSA9IDA7IGkgPCBudW1RdWVzdGlvbnNUb3RhbDsgaSArKyl7XHJcblx0XHRcdGFycmF5T2ZRdWVzdGlvbmdyb3Vwcy5wdXNoKDEpO1xyXG5cdFx0fVxyXG5cclxuXHJcblx0XHRpZihzZXZlcmFsU291bmRRdWl6KXtcclxuXHJcblx0XHRcdGFycmF5T2ZRdWVzdGlvbmdyb3VwcyA9IHRoaXMuY3JlYXRlU2V2ZXJhbFNvdW5kcXVpekRpc3RydWJ1dGlvbkFycmF5KCk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdC8vbG9vcHMgYWxsIHRoZSBcImdyb3VwZXNcIlxyXG5cdFx0bGV0IGN1cnJlbnRRdWVzdGlvbk9iamVjdElEID0gMDtcclxuXHRcdGZvciAobGV0IGN1cnJlbnRHcm91cElEIG9mIE9iamVjdC5rZXlzKGFycmF5T2ZRdWVzdGlvbmdyb3VwcykpIHtcclxuXHJcblx0XHRcdGxldCBjdXJyZW50UXVpelF1ZXN0aW9uID0gbmV3IFF1aXpRdWVzdGlvbihzZXZlcmFsU291bmRRdWl6KTtcclxuXHJcblx0XHRcdC8vY29tYmluZXMgdGhlIG51bWJlciBvZiBxdWVzdGlvbnMgaW4gZWFjaCBncm91cCB0b2dldGhlclxyXG5cdFx0XHRmb3IobGV0IGkgPSAwOyBpIDwgYXJyYXlPZlF1ZXN0aW9uZ3JvdXBzW2N1cnJlbnRHcm91cElEXTsgaSArKyl7XHJcblxyXG5cdFx0XHRcdGxldCB0ZW1wUXVpekRhdGEgPSB0aGlzLnF1aXpRdWVzdGlvbnNEYXRhLm1lZGlhQXJyYXlbY3VycmVudFF1ZXN0aW9uT2JqZWN0SURdO1xyXG5cclxuXHRcdFx0XHQvL3RlbXBvcmFyeSEhXHJcblx0XHRcdFx0aWYodGVtcFF1aXpEYXRhID09IHVuZGVmaW5lZCl7XHJcblx0XHRcdFx0XHQvL05PIFFVRVNUSU9OUyBMRUZUIVxyXG5cdFx0XHRcdFx0bGV0IGxpbmsgPSBbJ1F1aXpFcnJvcicsIHsgZXJyb3JJRDogMSB9XTtcclxuXHRcdFx0XHRcdHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShsaW5rKTtcclxuXHRcdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIk5PIFFVRVNUSU9OUyBMRUZUISBBIGNoZWNrIGZvciBsb2FkaW5nIG9mIHF1ZXN0aW9ucyBuZWVkcyB0byBiZSBpbXBsZW1lbnRlZCBpbiBRdWl6TG9naWNTZXJ2aWNlLnNldFF1aXpRdWVzdGlvbnNcIik7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRsZXQgYWx0cyA9IHRlbXBRdWl6RGF0YVsnbWVkaWFDaG9pY2VzJ107XHJcblxyXG5cdFx0XHRcdC8vcHJldmVudGluZyB0aGUgc2FtZSBxdWVzdGlvbiBmcm9tIGNvbnRhaW5pbmcgdGhlIHNhbWUgc3BlY2llIHR3aWNlLlxyXG5cdFx0XHRcdC8vdGhpcyB3aWxsIG1lYW4gaW4gc29tZSByYXJlIGNhc2VzIG9uZSBxdWVzdGlvbiBxd2lsbCBvbnkgaGF2ZSBvbmUgcmlnaHQgYW5zd2VyLlxyXG5cdFx0XHRcdGlmKCFjdXJyZW50UXVpelF1ZXN0aW9uLmNoZWNrSWZBbnNlcklzQ29ycmVjdChhbHRzWydyaWdodF9hbnN3ZXInXVsnaWQnXSkpe1xyXG5cclxuXHRcdFx0XHRcdGN1cnJlbnRRdWl6UXVlc3Rpb24uYWRkUmlnaHRBbnN3ZXIoYWx0c1sncmlnaHRfYW5zd2VyJ11bJ2lkJ10sIGFsdHNbJ3JpZ2h0X2Fuc3dlciddWyduYW1lJ10sIGFsdHNbJ3JpZ2h0X2Fuc3dlciddWyduYW1lTGF0aW4nXSk7XHJcblx0XHRcdFx0XHRjdXJyZW50UXVpelF1ZXN0aW9uLmFkZENob2ljZShhbHRzWydjaG9pY2VfMiddWydpZCddLCBhbHRzWydjaG9pY2VfMiddWyduYW1lJ10sIGFsdHNbJ2Nob2ljZV8yJ11bJ25hbWVMYXRpbiddKTtcclxuXHRcdFx0XHRcdGN1cnJlbnRRdWl6UXVlc3Rpb24uYWRkQ2hvaWNlKGFsdHNbJ2Nob2ljZV8zJ11bJ2lkJ10sIGFsdHNbJ2Nob2ljZV8zJ11bJ25hbWUnXSwgYWx0c1snY2hvaWNlXzMnXVsnbmFtZUxhdGluJ10pO1xyXG5cdFx0XHRcdFx0Y3VycmVudFF1aXpRdWVzdGlvbi5hZGRDaG9pY2UoYWx0c1snY2hvaWNlXzQnXVsnaWQnXSwgYWx0c1snY2hvaWNlXzQnXVsnbmFtZSddLCBhbHRzWydjaG9pY2VfNCddWyduYW1lTGF0aW4nXSk7XHJcblx0XHRcdFx0XHRjdXJyZW50UXVpelF1ZXN0aW9uLmFkZENob2ljZShhbHRzWydjaG9pY2VfNSddWydpZCddLCBhbHRzWydjaG9pY2VfNSddWyduYW1lJ10sIGFsdHNbJ2Nob2ljZV81J11bJ25hbWVMYXRpbiddKTtcclxuXHJcblx0XHRcdFx0XHRjdXJyZW50UXVpelF1ZXN0aW9uLmFkZE1lZGlhSWQodGVtcFF1aXpEYXRhLm1lZGlhX2lkKVxyXG5cdFx0XHRcdFx0Y3VycmVudFF1aXpRdWVzdGlvbi5hZGRFeHRyYUluZm8odGVtcFF1aXpEYXRhLmV4dHJhX2luZm8pO1xyXG5cdFx0XHRcdFx0Y3VycmVudFF1aXpRdWVzdGlvbi5hZGRNZWRpYVNvdXJjZSh0ZW1wUXVpekRhdGEubWVkaWFfdXJsKTtcclxuXHJcblx0XHRcdFx0XHRpZihiZWdpbm5lclF1aXope1xyXG5cdFx0XHRcdFx0XHRpZih0ZW1wUXVpekRhdGEubWVkaWFfdXJsX3NvdW5kICE9IG51bGwpe1xyXG5cdFx0XHRcdFx0XHRcdC8vYWRkIHNvdW5kIGlmIGlzIGlzIHRoZXJlXHJcblx0XHRcdFx0XHRcdFx0Y3VycmVudFF1aXpRdWVzdGlvbi5hZGRNZWRpYVNvdXJjZSh0ZW1wUXVpekRhdGEubWVkaWFfdXJsX3NvdW5kKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKFwib25lIHJlbW92ZWQgZHVlIHRvIGR1cGxpY2F0ZSByaWd0aCBhbnN3ZXIgaW4gcXVlc3Rpb24gXCIrY3VycmVudFF1ZXN0aW9uT2JqZWN0SUQpO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Y3VycmVudFF1ZXN0aW9uT2JqZWN0SUQgKys7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRjdXJyZW50UXVpelF1ZXN0aW9uLnByb3Nlc3NEYXRhKCk7XHJcblx0XHRcdHRoaXMucXVpelF1ZXN0aW9ucy5wdXNoKGN1cnJlbnRRdWl6UXVlc3Rpb24pO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLnF1aXpMb2FkZWQgPSB0cnVlO1xyXG5cclxuXHR9XHJcblx0Ly9yZXR1cm4gYmFzZWQgb24gdGhpcy5xdWVzdGlvbk51bWJlclxyXG5cdGdldEN1cnJlbnRRdWl6UXVlc3Rpb24oKXtcclxuXHJcblx0XHRyZXR1cm4gdGhpcy5xdWl6UXVlc3Rpb25zW3RoaXMucXVlc3Rpb25OdW1iZXJdO1xyXG5cclxuXHR9XHJcblxyXG5cdHNldFF1aXpRdWVzdGlvbnNTZXR0aW5ncyhxdWl6UXVlc3Rpb25zU2V0dGluZ3Mpe1xyXG5cdFx0dGhpcy5xdWl6UXVlc3Rpb25zU2V0dGluZ3MgPSBxdWl6UXVlc3Rpb25zU2V0dGluZ3M7XHJcblx0fVxyXG5cclxuXHRzZXRTY29yZShzY29yZSl7XHJcblx0XHR0aGlzLnNjb3JlID0gc2NvcmU7XHJcblx0fVxyXG5cdGNoYW5nZVNjb3JlKGNoYW5nZSl7XHJcblx0XHR0aGlzLnNjb3JlICs9IGNoYW5nZTtcclxuXHR9XHJcblx0Z2V0U2NvcmUoKXtcclxuXHRcdHJldHVybiB0aGlzLnNjb3JlO1xyXG5cdH1cclxuXHJcblx0Z290b05leHRRdWVzdGlvbk51bWJlcigpe1xyXG5cdFx0dGhpcy5xdWVzdGlvbk51bWJlciArPSAxO1xyXG5cdH1cclxuXHRnZXRRdWVzdGlvbk51bWJlcigpe1xyXG5cdFx0cmV0dXJuIHRoaXMucXVlc3Rpb25OdW1iZXI7XHJcblx0fVxyXG5cclxuXHRub1F1ZXN0aW9uc0xlZnQoKXtcclxuXHJcblxyXG5cdFx0aWYodGhpcy5xdWVzdGlvbk51bWJlcisxID4gdGhpcy5xdWl6UXVlc3Rpb25zU2V0dGluZ3NbMF1bJ251bVF1ZXN0aW9ucyddKXtcclxuXHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHR9ZWxzZXtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cclxuXHR9XHJcblxyXG5cdC8vT05MWSBzdXBwb3J0cyBvbmUgY2hvaWNlIHByIHF1ZXN0aW9uISFcclxuXHRnZXRBbnN3ZXJMaXN0Q1NWKCl7XHJcblxyXG5cdFx0bGV0IGFuc3dlckNzdlN0cmluZzpzdHJpbmcgPSBcIlwiO1xyXG5cclxuXHRcdGZvciAobGV0IGN1cnJlbnRRdWVzdGlvbklEIG9mIE9iamVjdC5rZXlzKHRoaXMucXVpelF1ZXN0aW9ucykpIHtcclxuXHRcdFx0bGV0IGN1cnJlbnRRdWVzdGlvbk1lZGlhcyA9IHRoaXMucXVpelF1ZXN0aW9uc1tjdXJyZW50UXVlc3Rpb25JRF0uZ2V0U2VsZWN0ZWRDaG9pY2UoKTtcclxuXHJcblx0XHRcdC8vY29uc29sZS5sb2coXCJjdXJyZW50UXVlc3Rpb25NZWRpYXM6IFwiLCBjdXJyZW50UXVlc3Rpb25NZWRpYXMpO1xyXG5cdFx0XHRpZihjdXJyZW50UXVlc3Rpb25NZWRpYXMubGVuZ3RoID4gMCl7XHJcblx0XHRcdFx0Ly9BUEkgdXNlcyAtMSBhcyBpIGRvbsOmdCBrbm93LCBoZXJlIHdlIGNoYW5nZSB0byBjb21wbHkgd2l0aCB0aGF0LiBNYWJ5IGNoYW5nZSBBUEkgbGF0ZXI/XHJcblx0XHRcdFx0aWYoY3VycmVudFF1ZXN0aW9uTWVkaWFzWzBdLmlkID09IC0xKXtcclxuXHRcdFx0XHRcdGFuc3dlckNzdlN0cmluZyArPSBcIjAsXCI7XHJcblx0XHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0XHRhbnN3ZXJDc3ZTdHJpbmcgKz0gY3VycmVudFF1ZXN0aW9uTWVkaWFzWzBdLmlkICsgXCIsXCI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRhbnN3ZXJDc3ZTdHJpbmcgKz0gXCIwLFwiO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdGlmKGFuc3dlckNzdlN0cmluZy5sZW5ndGggPiAwKXtcclxuXHRcdFx0cmV0dXJuIGFuc3dlckNzdlN0cmluZy5zdWJzdHJpbmcoMCwgYW5zd2VyQ3N2U3RyaW5nLmxlbmd0aC0xKTtcclxuXHRcdH1lbHNle1xyXG5cdFx0XHRyZXR1cm4gXCJcIjtcclxuXHRcdH1cclxuXHJcblx0fVxyXG5cclxuXHQvL09OTFkgc3VwcG9ydHMgb25lIHJpZ2h0IGFuc3dlciEhXHJcblx0Z2V0TWVkaWFJZHNDU1YoKXtcclxuXHJcblx0XHRsZXQgbWVkaWFDc3ZTdHJpbmc6c3RyaW5nID0gXCJcIjtcclxuXHJcblx0XHRmb3IgKGxldCBjdXJyZW50UXVlc3Rpb25JRCBvZiBPYmplY3Qua2V5cyh0aGlzLnF1aXpRdWVzdGlvbnMpKSB7XHJcblx0XHRcdGxldCBjdXJyZW50UXVlc3Rpb25NZWRpYXMgPSB0aGlzLnF1aXpRdWVzdGlvbnNbY3VycmVudFF1ZXN0aW9uSURdLmdldE1lZGlhSWRzKClbMF0uaWQ7XHJcblxyXG5cdFx0XHRtZWRpYUNzdlN0cmluZyArPSBjdXJyZW50UXVlc3Rpb25NZWRpYXMgKyBcIixcIjtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0aWYobWVkaWFDc3ZTdHJpbmcubGVuZ3RoID4gMCl7XHJcblx0XHRcdHJldHVybiBtZWRpYUNzdlN0cmluZy5zdWJzdHJpbmcoMCwgbWVkaWFDc3ZTdHJpbmcubGVuZ3RoLTEpO1xyXG5cdFx0fWVsc2V7XHJcblx0XHRcdHJldHVybiBcIlwiO1xyXG5cdFx0fVxyXG5cclxuXHJcblx0fVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
