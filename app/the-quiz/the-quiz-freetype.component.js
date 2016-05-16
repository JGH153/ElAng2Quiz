System.register(['angular2/core', 'angular2/http', './../shared/quiz-settings.service', './../shared/quiz-specie.service', "../shared/quiz-competition-group.service"], function(exports_1, context_1) {
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
    var core_1, http_1, quiz_settings_service_1, quiz_specie_service_1, quiz_competition_group_service_1;
    var TheQuizFreetypeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (quiz_settings_service_1_1) {
                quiz_settings_service_1 = quiz_settings_service_1_1;
            },
            function (quiz_specie_service_1_1) {
                quiz_specie_service_1 = quiz_specie_service_1_1;
            },
            function (quiz_competition_group_service_1_1) {
                quiz_competition_group_service_1 = quiz_competition_group_service_1_1;
            }],
        execute: function() {
            TheQuizFreetypeComponent = (function () {
                function TheQuizFreetypeComponent(_quizSettingsService, _quizSpeciesService, _quizCompetitionGroupService, _element) {
                    this._quizSettingsService = _quizSettingsService;
                    this._quizSpeciesService = _quizSpeciesService;
                    this._quizCompetitionGroupService = _quizCompetitionGroupService;
                    this._element = _element;
                    this.formSpecieName = "";
                    this.specieList = [];
                    this.specieListProsessed = [];
                    this.selectedSpecieList = [];
                    this.inbetweenQuestions = false;
                    this.questionCorrect = false;
                    this.hints = "Unlimited for now";
                    this.disableHints = true;
                    this.letter = "";
                    this.nrLetters = 1;
                    this.questionDoneEvent = new core_1.EventEmitter();
                }
                TheQuizFreetypeComponent.prototype.ngOnInit = function () {
                    console.log(this.specieQuestionObject);
                    this.specieList = this._quizSpeciesService.getSpecieList();
                    this.selectedSpecieList = this._quizSpeciesService.getSelectedSpecieList();
                    this.selectedCompetitionGroupData = this._quizCompetitionGroupService.competitionGroupSelected;
                    this.onInitcheck();
                    //add i don't know at beginning and elect it
                    this.compileProsessedList();
                };
                TheQuizFreetypeComponent.prototype.ngOnChanges = function () {
                    if (this.inbetweenQuestions) {
                    }
                    else {
                        //console.log("!inbetween quests");
                        if (this.specieList.length > 0) {
                            this.formSpecieName = "";
                            this.compileProsessedList();
                            this.selectedSpecie = this.specieListProsessed[0];
                        }
                    }
                    this.letter = "";
                    this.nrLetters = 1;
                };
                TheQuizFreetypeComponent.prototype.ngAfterViewInit = function () {
                };
                TheQuizFreetypeComponent.prototype.onInitcheck = function () {
                    if (this.selectedSpecieList.length == 0) {
                        this.specieListProsessed = this.specieList;
                        console.log("Area specieList");
                    }
                    else {
                        this.specieList = this.selectedSpecieList;
                        this.specieListProsessed = this.specieList;
                        console.log("Specific specielist: ", this.specieList);
                    }
                    if (this._quizSettingsService.help == false) {
                        this.disableHints = true;
                        this.hints = "Hints are disabled";
                    }
                    else {
                        this.disableHints = false;
                    }
                };
                //returns object 0 if not found
                TheQuizFreetypeComponent.prototype.getNextObjetInProsessedArrat = function (currentID) {
                    var nextObject = this.specieListProsessed[0];
                    var next = false;
                    for (var _i = 0, _a = Object.keys(this.specieListProsessed); _i < _a.length; _i++) {
                        var id = _a[_i];
                        //if last iteration found current, return this as it is the next
                        if (next) {
                            return this.specieListProsessed[id];
                        }
                        //return next
                        if (this.specieListProsessed[id].id == currentID) {
                            //but return this if lat
                            nextObject = this.specieListProsessed[id];
                            next = true;
                        }
                    }
                    return nextObject;
                };
                //returns object 0 if not found
                TheQuizFreetypeComponent.prototype.getPrevObjetInProsessedArrat = function (currentID) {
                    var prevObject = this.specieListProsessed[0];
                    //loops and always save current in prevObject, then it returns that on the next iteration if it is a match
                    for (var _i = 0, _a = Object.keys(this.specieListProsessed); _i < _a.length; _i++) {
                        var id = _a[_i];
                        //return prev
                        if (this.specieListProsessed[id].id == currentID) {
                            //but return this if lat
                            return prevObject;
                        }
                        prevObject = this.specieListProsessed[id];
                    }
                    return prevObject;
                };
                TheQuizFreetypeComponent.prototype.handleSelectAnswer = function () {
                    this.questionCorrect = this.specieQuestionObject.checkIfAnserIsCorrect(this.selectedSpecie.id);
                    if (this.inbetweenQuestions) {
                        this.formSpecieName = "";
                        this.compileProsessedList();
                        this.selectedSpecie = this.specieListProsessed[0];
                    }
                    this.questionDoneEvent.emit(true);
                };
                TheQuizFreetypeComponent.prototype.newValueSelectedListEvent = function (event) {
                    //console.log("newValueSelectedListEvent: ", event);
                    this.newValueSelectedList();
                };
                TheQuizFreetypeComponent.prototype.newValueSelectedList = function () {
                    //console.log("selectedSpecie: ", this.selectedSpecie);
                    var _this = this;
                    setTimeout(function () {
                        console.log("correct species: ", _this.specieQuestionObject.getRigthAnsers()[0].name, " What i added: ", _this.selectedSpecie.id);
                        //console.log("added to list: ", this.selectedSpecie.id);
                        _this.specieQuestionObject.addSelectedChoice(_this.selectedSpecie.id);
                    }, 10);
                };
                TheQuizFreetypeComponent.prototype.inputSpecieListKey = function (event) {
                    if (event.key == 'Enter' || event.keyCode == 13) {
                        //transmit to a higher power what was seleted
                        this.handleSelectAnswer();
                    }
                };
                //well, pipes did not work, neither did pre prosessing of list so this will have to do...
                TheQuizFreetypeComponent.prototype.inputSpecieNameChange = function (event) {
                    //key fro firefox, keycode for stupid crome
                    //console.log("event: ", event.keyCode);
                    var _this = this;
                    if (event.key == 'Enter' || event.keyCode == 13) {
                        //transmit to a higher power what was seleted
                        this.handleSelectAnswer();
                    }
                    else if (event.key == 'ArrowUp' || event.keyCode == 38) {
                        //select last element if no is selected
                        if (this.selectedSpecie == undefined && this.specieListProsessed.length > 0) {
                            this.selectedSpecie = this.specieListProsessed[this.specieListProsessed.length - 1];
                        }
                        else if (this.specieListProsessed.length > 1) {
                            //or move to prev
                            this.selectedSpecie = this.getPrevObjetInProsessedArrat(this.selectedSpecie.id);
                        }
                        //waith for the stack to finiz and then change
                        setTimeout(function (e) {
                            _this.newValueSelectedList();
                        }, 0);
                    }
                    else if (event.key == 'ArrowDown' || event.keyCode == 40) {
                        //select first element if no is selected
                        if (this.selectedSpecie == undefined && this.specieListProsessed.length > 0) {
                            this.selectedSpecie = this.specieListProsessed[0];
                        }
                        else if (this.specieListProsessed.length > 1) {
                            //or move to next
                            this.selectedSpecie = this.getNextObjetInProsessedArrat(this.selectedSpecie.id);
                        }
                        //waith for the stack to finiz and then change
                        setTimeout(function (e) {
                            _this.newValueSelectedList();
                        }, 0);
                    }
                    else {
                        //do the limiting!
                        this.compileProsessedList();
                    }
                };
                TheQuizFreetypeComponent.prototype.compileProsessedList = function () {
                    this.specieListProsessed = [];
                    this.specieListProsessed.push({ 'id': -1, 'name': "I don't know", latin: "I relly don't know" });
                    for (var _i = 0, _a = Object.keys(this.specieList); _i < _a.length; _i++) {
                        var id = _a[_i];
                        //add all if undefined
                        if (this.formSpecieName == undefined) {
                            this.specieListProsessed.push(this.specieList[id]);
                            continue;
                        }
                        //if formSpecieName is a substring of name in list, or there is no formSpecieName
                        if (this.specieList[id].name.toLowerCase().indexOf(this.formSpecieName.toLowerCase()) >= 0 || this.formSpecieName.length == 0) {
                            this.specieListProsessed.push(this.specieList[id]);
                        }
                    }
                    if (this.selectedSpecie == undefined) {
                        //select first, witch is i don't know
                        this.selectedSpecie = this.specieListProsessed[0];
                    }
                    //if one choice oly, select it (eg i don't know + choice)
                    if (this.specieListProsessed.length == 2) {
                        this.selectedSpecie = this.specieListProsessed[1];
                    }
                };
                TheQuizFreetypeComponent.prototype.showALetter = function () {
                    this.letter = this.specieQuestionObject.getFirstLetters(this.nrLetters);
                    this.formSpecieName = this.letter;
                    this.compileProsessedList();
                    this.nrLetters++;
                    //this.disableButton = true;
                    /*this.hints--;
                     if (this.hints >= 1){
            
                     }else{
                     this.disableButton = true;
                     }*/
                };
                TheQuizFreetypeComponent = __decorate([
                    core_1.Component({
                        selector: 'birdid-the-quiz-freetype',
                        templateUrl: 'app/the-quiz/the-quiz-freetype.component.html',
                        styleUrls: ['app/the-quiz/the-quiz-freetype.component.css'],
                        directives: [],
                        providers: [
                            http_1.HTTP_PROVIDERS
                        ],
                        pipes: [],
                        inputs: ['inbetweenQuestions', 'specieQuestionObject'],
                        outputs: ['questionDoneEvent']
                    }), 
                    __metadata('design:paramtypes', [quiz_settings_service_1.QuizSettingsService, quiz_specie_service_1.QuizSpecieService, quiz_competition_group_service_1.QuizCompetitionService, core_1.ElementRef])
                ], TheQuizFreetypeComponent);
                return TheQuizFreetypeComponent;
            }());
            exports_1("TheQuizFreetypeComponent", TheQuizFreetypeComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRoZS1xdWl6L3RoZS1xdWl6LWZyZWV0eXBlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQTJCQTtnQkFzQkMsa0NBQ1Msb0JBQXlDLEVBQ3pDLG1CQUFzQyxFQUN0Qyw0QkFBb0QsRUFDcEQsUUFBb0I7b0JBSHBCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBcUI7b0JBQ3pDLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBbUI7b0JBQ3RDLGlDQUE0QixHQUE1Qiw0QkFBNEIsQ0FBd0I7b0JBQ3BELGFBQVEsR0FBUixRQUFRLENBQVk7b0JBeEI3QixtQkFBYyxHQUFHLEVBQUUsQ0FBQztvQkFHcEIsZUFBVSxHQUFHLEVBQUUsQ0FBQztvQkFDaEIsd0JBQW1CLEdBQUcsRUFBRSxDQUFDO29CQUN6Qix1QkFBa0IsR0FBRyxFQUFFLENBQUM7b0JBR3hCLHVCQUFrQixHQUFHLEtBQUssQ0FBQztvQkFFM0Isb0JBQWUsR0FBRyxLQUFLLENBQUM7b0JBRXhCLFVBQUssR0FBRyxtQkFBbUIsQ0FBQztvQkFDNUIsaUJBQVksR0FBRyxJQUFJLENBQUM7b0JBRXBCLFdBQU0sR0FBRyxFQUFFLENBQUM7b0JBQ1osY0FBUyxHQUFHLENBQUMsQ0FBQztvQkFFZCxzQkFBaUIsR0FBRyxJQUFJLG1CQUFZLEVBQVcsQ0FBQztnQkFNakIsQ0FBQztnQkFFaEMsMkNBQVEsR0FBUjtvQkFDQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO29CQUN2QyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztvQkFDM0QsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO29CQUMzRSxJQUFJLENBQUMsNEJBQTRCLEdBQUcsSUFBSSxDQUFDLDRCQUE0QixDQUFDLHdC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LFFBQVEsRUFBRSwwQkFBMEI7d0JBQ3BDLFdBQVcsRUFBRSwrQ0FBK0M7d0JBQzVELFNBQVMsRUFBRyxDQUFDLDhDQUE4QyxDQUFDO3dCQUM1RCxVQUFVLEVBQUUsRUFFWDt3QkFDRCxTQUFTLEVBQUU7NEJBQ1QscUJBQWM7eUJBQ2Y7d0JBQ0QsS0FBSyxFQUFFLEVBRU47d0JBQ0QsTUFBTSxFQUFFLENBQUMsb0JBQW9CLEVBQUUsc0JBQXNCLENBQUM7d0JBQ3RELE9BQU8sRUFBRSxDQUFDLG1CQUFtQixDQUFDO3FCQUM5QixDQUFDOzs0Q0FBQTtnQkEyUkYsK0JBQUM7WUFBRCxDQXhSQSxBQXdSQyxJQUFBO1lBeFJELCtEQXdSQyxDQUFBIiwiZmlsZSI6InRoZS1xdWl6L3RoZS1xdWl6LWZyZWV0eXBlLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBPbkluaXQsIE9uQ2hhbmdlcywgVmlld0NoaWxkLCBBZnRlclZpZXdJbml0LCBFbGVtZW50UmVmIH0gICAgICAgZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHAsIEhUVFBfUFJPVklERVJTIH0gZnJvbSAnYW5ndWxhcjIvaHR0cCc7XHJcblxyXG5pbXBvcnQgeyBRdWl6U2V0dGluZ3NTZXJ2aWNlIH0gIGZyb20gJy4vLi4vc2hhcmVkL3F1aXotc2V0dGluZ3Muc2VydmljZSc7XHJcbmltcG9ydCB7IFF1aXpTcGVjaWVTZXJ2aWNlIH0gIGZyb20gJy4vLi4vc2hhcmVkL3F1aXotc3BlY2llLnNlcnZpY2UnO1xyXG5cclxuaW1wb3J0IHsgUXVpelF1ZXN0aW9uIH0gIGZyb20gJy4vLi4vc2hhcmVkLmNsYXNzL3RoZS1xdWl6LXF1ZXN0aW9uLmNsYXNzJztcclxuaW1wb3J0IHtRdWl6Q29tcGV0aXRpb25TZXJ2aWNlfSBmcm9tIFwiLi4vc2hhcmVkL3F1aXotY29tcGV0aXRpb24tZ3JvdXAuc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6ICdiaXJkaWQtdGhlLXF1aXotZnJlZXR5cGUnLFxyXG5cdHRlbXBsYXRlVXJsOiAnYXBwL3RoZS1xdWl6L3RoZS1xdWl6LWZyZWV0eXBlLmNvbXBvbmVudC5odG1sJyxcclxuXHRzdHlsZVVybHM6ICBbJ2FwcC90aGUtcXVpei90aGUtcXVpei1mcmVldHlwZS5jb21wb25lbnQuY3NzJ10sXHJcblx0ZGlyZWN0aXZlczogW1xyXG5cclxuXHRdLFxyXG5cdHByb3ZpZGVyczogW1xyXG5cdCAgSFRUUF9QUk9WSURFUlNcclxuXHRdLFxyXG5cdHBpcGVzOiBbXHJcblxyXG5cdF0sXHJcblx0aW5wdXRzOiBbJ2luYmV0d2VlblF1ZXN0aW9ucycsICdzcGVjaWVRdWVzdGlvbk9iamVjdCddLFxyXG5cdG91dHB1dHM6IFsncXVlc3Rpb25Eb25lRXZlbnQnXVxyXG59KVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBUaGVRdWl6RnJlZXR5cGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlc3tcclxuXHJcblx0Zm9ybVNwZWNpZU5hbWUgPSBcIlwiO1xyXG5cdHNlbGVjdGVkU3BlY2llO1xyXG5cclxuXHRzcGVjaWVMaXN0ID0gW107XHJcblx0c3BlY2llTGlzdFByb3Nlc3NlZCA9IFtdO1xyXG5cdHNlbGVjdGVkU3BlY2llTGlzdCA9IFtdO1xyXG5cdHNlbGVjdGVkQ29tcGV0aXRpb25Hcm91cERhdGE7XHJcblxyXG5cdGluYmV0d2VlblF1ZXN0aW9ucyA9IGZhbHNlO1xyXG5cdHNwZWNpZVF1ZXN0aW9uT2JqZWN0OlF1aXpRdWVzdGlvbjtcclxuXHRxdWVzdGlvbkNvcnJlY3QgPSBmYWxzZTtcclxuXHJcblx0aGludHMgPSBcIlVubGltaXRlZCBmb3Igbm93XCI7XHJcblx0ZGlzYWJsZUhpbnRzID0gdHJ1ZTtcclxuXHJcblx0bGV0dGVyID0gXCJcIjtcclxuXHRuckxldHRlcnMgPSAxO1xyXG5cclxuXHRxdWVzdGlvbkRvbmVFdmVudCA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuXHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIF9xdWl6U2V0dGluZ3NTZXJ2aWNlOiBRdWl6U2V0dGluZ3NTZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSBfcXVpelNwZWNpZXNTZXJ2aWNlOiBRdWl6U3BlY2llU2VydmljZSxcclxuXHRcdHByaXZhdGUgX3F1aXpDb21wZXRpdGlvbkdyb3VwU2VydmljZTogUXVpekNvbXBldGl0aW9uU2VydmljZSxcclxuXHRcdHByaXZhdGUgX2VsZW1lbnQ6IEVsZW1lbnRSZWYpe31cclxuXHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHRjb25zb2xlLmxvZyh0aGlzLnNwZWNpZVF1ZXN0aW9uT2JqZWN0KTtcclxuXHRcdHRoaXMuc3BlY2llTGlzdCA9IHRoaXMuX3F1aXpTcGVjaWVzU2VydmljZS5nZXRTcGVjaWVMaXN0KCk7XHJcblx0XHR0aGlzLnNlbGVjdGVkU3BlY2llTGlzdCA9IHRoaXMuX3F1aXpTcGVjaWVzU2VydmljZS5nZXRTZWxlY3RlZFNwZWNpZUxpc3QoKTtcclxuXHRcdHRoaXMuc2VsZWN0ZWRDb21wZXRpdGlvbkdyb3VwRGF0YSA9XHR0aGlzLl9xdWl6Q29tcGV0aXRpb25Hcm91cFNlcnZpY2UuY29tcGV0aXRpb25Hcm91cFNlbGVjdGVkO1xyXG5cclxuXHRcdHRoaXMub25Jbml0Y2hlY2soKTtcclxuXHRcdC8vYWRkIGkgZG9uJ3Qga25vdyBhdCBiZWdpbm5pbmcgYW5kIGVsZWN0IGl0XHJcblx0XHR0aGlzLmNvbXBpbGVQcm9zZXNzZWRMaXN0KCk7XHJcblxyXG5cdH1cclxuXHJcblx0bmdPbkNoYW5nZXMoKXtcclxuXHRcdGlmKHRoaXMuaW5iZXR3ZWVuUXVlc3Rpb25zKXtcclxuXHRcdFx0Ly9jb25zb2xlLmxvZyhcImluYmV0d2VlbiBxdWVzdHMgXCIsIHRoaXMuc3BlY2llUXVlc3Rpb25PYmplY3QpO1xyXG5cclxuXHRcdH1lbHNle1xyXG5cdFx0XHQvL2NvbnNvbGUubG9nKFwiIWluYmV0d2VlbiBxdWVzdHNcIik7XHJcblx0XHRcdGlmKHRoaXMuc3BlY2llTGlzdC5sZW5ndGggPiAwKXtcclxuXHRcdFx0XHR0aGlzLmZvcm1TcGVjaWVOYW1lID0gXCJcIlxyXG5cdFx0XHRcdHRoaXMuY29tcGlsZVByb3Nlc3NlZExpc3QoKTtcclxuXHRcdFx0XHR0aGlzLnNlbGVjdGVkU3BlY2llID0gdGhpcy5zcGVjaWVMaXN0UHJvc2Vzc2VkWzBdO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHR0aGlzLmxldHRlciA9IFwiXCI7XHJcblx0XHR0aGlzLm5yTGV0dGVycyA9IDE7XHJcblx0fVxyXG5cclxuXHRuZ0FmdGVyVmlld0luaXQoKSB7XHJcblxyXG5cclxuXHJcblx0fVxyXG5cdG9uSW5pdGNoZWNrKCl7XHJcblx0XHRpZih0aGlzLnNlbGVjdGVkU3BlY2llTGlzdC5sZW5ndGggPT0gMCl7XHJcblx0XHRcdHRoaXMuc3BlY2llTGlzdFByb3Nlc3NlZCA9IHRoaXMuc3BlY2llTGlzdDtcclxuXHRcdFx0Y29uc29sZS5sb2coXCJBcmVhIHNwZWNpZUxpc3RcIik7XHJcblx0XHR9ZWxzZXtcclxuXHRcdFx0dGhpcy5zcGVjaWVMaXN0ID0gdGhpcy5zZWxlY3RlZFNwZWNpZUxpc3Q7XHJcblx0XHRcdHRoaXMuc3BlY2llTGlzdFByb3Nlc3NlZCA9IHRoaXMuc3BlY2llTGlzdDtcclxuXHRcdFx0Y29uc29sZS5sb2coXCJTcGVjaWZpYyBzcGVjaWVsaXN0OiBcIiwgdGhpcy5zcGVjaWVMaXN0KTtcclxuXHRcdH1cclxuXHJcblx0XHRpZih0aGlzLl9xdWl6U2V0dGluZ3NTZXJ2aWNlLmhlbHAgPT0gZmFsc2Upe1xyXG5cdFx0XHR0aGlzLmRpc2FibGVIaW50cyA9IHRydWU7XHJcblx0XHRcdHRoaXMuaGludHMgPVwiSGludHMgYXJlIGRpc2FibGVkXCI7XHJcblx0XHR9ZWxzZXtcclxuXHRcdFx0dGhpcy5kaXNhYmxlSGludHMgPSBmYWxzZTtcclxuXHRcdH1cclxuXHR9XHJcblx0Ly9yZXR1cm5zIG9iamVjdCAwIGlmIG5vdCBmb3VuZFxyXG5cdGdldE5leHRPYmpldEluUHJvc2Vzc2VkQXJyYXQoY3VycmVudElEKXtcclxuXHJcblx0XHRsZXQgbmV4dE9iamVjdCA9IHRoaXMuc3BlY2llTGlzdFByb3Nlc3NlZFswXTtcclxuXHRcdGxldCBuZXh0ID0gZmFsc2U7XHJcblxyXG5cdFx0Zm9yIChsZXQgaWQgb2YgT2JqZWN0LmtleXModGhpcy5zcGVjaWVMaXN0UHJvc2Vzc2VkKSkge1xyXG5cclxuXHRcdFx0Ly9pZiBsYXN0IGl0ZXJhdGlvbiBmb3VuZCBjdXJyZW50LCByZXR1cm4gdGhpcyBhcyBpdCBpcyB0aGUgbmV4dFxyXG5cdFx0XHRpZihuZXh0KXtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5zcGVjaWVMaXN0UHJvc2Vzc2VkW2lkXTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly9yZXR1cm4gbmV4dFxyXG5cdFx0XHRpZih0aGlzLnNwZWNpZUxpc3RQcm9zZXNzZWRbaWRdLmlkID09IGN1cnJlbnRJRCl7XHJcblx0XHRcdFx0Ly9idXQgcmV0dXJuIHRoaXMgaWYgbGF0XHJcblx0XHRcdFx0bmV4dE9iamVjdCA9IHRoaXMuc3BlY2llTGlzdFByb3Nlc3NlZFtpZF07XHJcblx0XHRcdFx0bmV4dCA9IHRydWU7XHJcblx0XHRcdH1cclxuXHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIG5leHRPYmplY3Q7XHJcblxyXG5cdH1cclxuXHJcblx0Ly9yZXR1cm5zIG9iamVjdCAwIGlmIG5vdCBmb3VuZFxyXG5cdGdldFByZXZPYmpldEluUHJvc2Vzc2VkQXJyYXQoY3VycmVudElEKXtcclxuXHJcblx0XHRsZXQgcHJldk9iamVjdCA9IHRoaXMuc3BlY2llTGlzdFByb3Nlc3NlZFswXTtcclxuXHJcblx0XHQvL2xvb3BzIGFuZCBhbHdheXMgc2F2ZSBjdXJyZW50IGluIHByZXZPYmplY3QsIHRoZW4gaXQgcmV0dXJucyB0aGF0IG9uIHRoZSBuZXh0IGl0ZXJhdGlvbiBpZiBpdCBpcyBhIG1hdGNoXHJcblx0XHRmb3IgKGxldCBpZCBvZiBPYmplY3Qua2V5cyh0aGlzLnNwZWNpZUxpc3RQcm9zZXNzZWQpKSB7XHJcblx0XHRcdC8vcmV0dXJuIHByZXZcclxuXHRcdFx0aWYodGhpcy5zcGVjaWVMaXN0UHJvc2Vzc2VkW2lkXS5pZCA9PSBjdXJyZW50SUQpe1xyXG5cdFx0XHRcdC8vYnV0IHJldHVybiB0aGlzIGlmIGxhdFxyXG5cdFx0XHRcdHJldHVybiBwcmV2T2JqZWN0XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHByZXZPYmplY3QgPSB0aGlzLnNwZWNpZUxpc3RQcm9zZXNzZWRbaWRdO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gcHJldk9iamVjdDtcclxuXHJcblx0fVxyXG5cclxuXHRoYW5kbGVTZWxlY3RBbnN3ZXIoKXtcclxuXHJcblx0XHR0aGlzLnF1ZXN0aW9uQ29ycmVjdCA9IHRoaXMuc3BlY2llUXVlc3Rpb25PYmplY3QuY2hlY2tJZkFuc2VySXNDb3JyZWN0KHRoaXMuc2VsZWN0ZWRTcGVjaWUuaWQpO1xyXG5cclxuXHRcdGlmKHRoaXMuaW5iZXR3ZWVuUXVlc3Rpb25zKXtcclxuXHRcdFx0dGhpcy5mb3JtU3BlY2llTmFtZSA9IFwiXCJcclxuXHRcdFx0dGhpcy5jb21waWxlUHJvc2Vzc2VkTGlzdCgpO1xyXG5cdFx0XHR0aGlzLnNlbGVjdGVkU3BlY2llID0gdGhpcy5zcGVjaWVMaXN0UHJvc2Vzc2VkWzBdO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMucXVlc3Rpb25Eb25lRXZlbnQuZW1pdCh0cnVlKTtcclxuXHJcblx0fVxyXG5cclxuXHRuZXdWYWx1ZVNlbGVjdGVkTGlzdEV2ZW50KGV2ZW50KXtcclxuXHRcdC8vY29uc29sZS5sb2coXCJuZXdWYWx1ZVNlbGVjdGVkTGlzdEV2ZW50OiBcIiwgZXZlbnQpO1xyXG5cdFx0dGhpcy5uZXdWYWx1ZVNlbGVjdGVkTGlzdCgpO1xyXG5cdH1cclxuXHJcblx0bmV3VmFsdWVTZWxlY3RlZExpc3QoKXtcclxuXHJcblxyXG5cclxuXHRcdC8vY29uc29sZS5sb2coXCJzZWxlY3RlZFNwZWNpZTogXCIsIHRoaXMuc2VsZWN0ZWRTcGVjaWUpO1xyXG5cclxuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cclxuXHRcdFx0Y29uc29sZS5sb2coXCJjb3JyZWN0IHNwZWNpZXM6IFwiLCB0aGlzLnNwZWNpZVF1ZXN0aW9uT2JqZWN0LmdldFJpZ3RoQW5zZXJzKClbMF0ubmFtZSwgXCIgV2hhdCBpIGFkZGVkOiBcIiwgdGhpcy5zZWxlY3RlZFNwZWNpZS5pZCk7XHJcblx0XHRcdC8vY29uc29sZS5sb2coXCJhZGRlZCB0byBsaXN0OiBcIiwgdGhpcy5zZWxlY3RlZFNwZWNpZS5pZCk7XHJcblx0XHRcdHRoaXMuc3BlY2llUXVlc3Rpb25PYmplY3QuYWRkU2VsZWN0ZWRDaG9pY2UodGhpcy5zZWxlY3RlZFNwZWNpZS5pZCk7XHJcblx0XHR9LDEwKTtcclxuXHJcblxyXG5cclxuXHR9XHJcblxyXG5cdGlucHV0U3BlY2llTGlzdEtleShldmVudCl7XHJcblxyXG5cdFx0aWYoZXZlbnQua2V5ID09ICdFbnRlcicgfHwgZXZlbnQua2V5Q29kZSA9PSAxMyl7XHJcblx0XHRcdC8vdHJhbnNtaXQgdG8gYSBoaWdoZXIgcG93ZXIgd2hhdCB3YXMgc2VsZXRlZFxyXG5cdFx0XHR0aGlzLmhhbmRsZVNlbGVjdEFuc3dlcigpO1xyXG5cdFx0fVxyXG5cclxuXHR9XHJcblxyXG5cdC8vd2VsbCwgcGlwZXMgZGlkIG5vdCB3b3JrLCBuZWl0aGVyIGRpZCBwcmUgcHJvc2Vzc2luZyBvZiBsaXN0IHNvIHRoaXMgd2lsbCBoYXZlIHRvIGRvLi4uXHJcblx0aW5wdXRTcGVjaWVOYW1lQ2hhbmdlKGV2ZW50KXtcclxuXHJcblx0XHQvL2tleSBmcm8gZmlyZWZveCwga2V5Y29kZSBmb3Igc3R1cGlkIGNyb21lXHJcblx0XHQvL2NvbnNvbGUubG9nKFwiZXZlbnQ6IFwiLCBldmVudC5rZXlDb2RlKTtcclxuXHJcblx0XHRpZihldmVudC5rZXkgPT0gJ0VudGVyJyB8fCBldmVudC5rZXlDb2RlID09IDEzKXtcclxuXHRcdFx0Ly90cmFuc21pdCB0byBhIGhpZ2hlciBwb3dlciB3aGF0IHdhcyBzZWxldGVkXHJcblx0XHRcdHRoaXMuaGFuZGxlU2VsZWN0QW5zd2VyKCk7XHJcblx0XHR9ZWxzZSBpZihldmVudC5rZXkgID09ICdBcnJvd1VwJyB8fCBldmVudC5rZXlDb2RlID09IDM4KXtcclxuXHJcblx0XHRcdC8vc2VsZWN0IGxhc3QgZWxlbWVudCBpZiBubyBpcyBzZWxlY3RlZFxyXG5cdFx0XHRpZih0aGlzLnNlbGVjdGVkU3BlY2llID09IHVuZGVmaW5lZCAmJiB0aGlzLnNwZWNpZUxpc3RQcm9zZXNzZWQubGVuZ3RoID4gMCl7XHJcblx0XHRcdFx0dGhpcy5zZWxlY3RlZFNwZWNpZSA9IHRoaXMuc3BlY2llTGlzdFByb3Nlc3NlZFt0aGlzLnNwZWNpZUxpc3RQcm9zZXNzZWQubGVuZ3RoLTFdO1xyXG5cdFx0XHR9ZWxzZSBpZih0aGlzLnNwZWNpZUxpc3RQcm9zZXNzZWQubGVuZ3RoID4gMSl7XHJcblx0XHRcdFx0Ly9vciBtb3ZlIHRvIHByZXZcclxuXHRcdFx0XHR0aGlzLnNlbGVjdGVkU3BlY2llID0gdGhpcy5nZXRQcmV2T2JqZXRJblByb3Nlc3NlZEFycmF0KHRoaXMuc2VsZWN0ZWRTcGVjaWUuaWQpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvL3dhaXRoIGZvciB0aGUgc3RhY2sgdG8gZmluaXogYW5kIHRoZW4gY2hhbmdlXHJcblx0XHRcdHNldFRpbWVvdXQoZSA9PiB7XHJcblx0XHRcdFx0dGhpcy5uZXdWYWx1ZVNlbGVjdGVkTGlzdCgpO1xyXG5cdFx0XHR9LCAwKTtcclxuXHJcblxyXG5cdFx0fWVsc2UgaWYoZXZlbnQua2V5ICA9PSAnQXJyb3dEb3duJyB8fCBldmVudC5rZXlDb2RlID09IDQwKXtcclxuXHJcblx0XHRcdC8vc2VsZWN0IGZpcnN0IGVsZW1lbnQgaWYgbm8gaXMgc2VsZWN0ZWRcclxuXHRcdFx0aWYodGhpcy5zZWxlY3RlZFNwZWNpZSA9PSB1bmRlZmluZWQgJiYgdGhpcy5zcGVjaWVMaXN0UHJvc2Vzc2VkLmxlbmd0aCA+IDApe1xyXG5cdFx0XHRcdHRoaXMuc2VsZWN0ZWRTcGVjaWUgPSB0aGlzLnNwZWNpZUxpc3RQcm9zZXNzZWRbMF07XHJcblx0XHRcdH1lbHNlIGlmKHRoaXMuc3BlY2llTGlzdFByb3Nlc3NlZC5sZW5ndGggPiAxKXtcclxuXHRcdFx0XHQvL29yIG1vdmUgdG8gbmV4dFxyXG5cdFx0XHRcdHRoaXMuc2VsZWN0ZWRTcGVjaWUgPSB0aGlzLmdldE5leHRPYmpldEluUHJvc2Vzc2VkQXJyYXQodGhpcy5zZWxlY3RlZFNwZWNpZS5pZCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vd2FpdGggZm9yIHRoZSBzdGFjayB0byBmaW5peiBhbmQgdGhlbiBjaGFuZ2VcclxuXHRcdFx0c2V0VGltZW91dChlID0+IHtcclxuXHRcdFx0XHR0aGlzLm5ld1ZhbHVlU2VsZWN0ZWRMaXN0KCk7XHJcblx0XHRcdH0sIDApO1xyXG5cclxuXHRcdH1lbHNle1xyXG5cdFx0XHQvL2RvIHRoZSBsaW1pdGluZyFcclxuXHJcblx0XHRcdHRoaXMuY29tcGlsZVByb3Nlc3NlZExpc3QoKTtcclxuXHJcblxyXG5cdFx0fVxyXG5cclxuXHJcblxyXG5cdH1cclxuXHJcblx0Y29tcGlsZVByb3Nlc3NlZExpc3QoKXtcclxuXHJcblx0XHR0aGlzLnNwZWNpZUxpc3RQcm9zZXNzZWQgPSBbXTtcclxuXHRcdHRoaXMuc3BlY2llTGlzdFByb3Nlc3NlZC5wdXNoKHsnaWQnOiAtMSwgJ25hbWUnOiBcIkkgZG9uJ3Qga25vd1wiLCBsYXRpbjogXCJJIHJlbGx5IGRvbid0IGtub3dcIn0pO1xyXG5cclxuXHRcdGZvciAobGV0IGlkIG9mIE9iamVjdC5rZXlzKHRoaXMuc3BlY2llTGlzdCkpIHtcclxuXHJcblx0XHRcdC8vYWRkIGFsbCBpZiB1bmRlZmluZWRcclxuXHRcdFx0aWYodGhpcy5mb3JtU3BlY2llTmFtZSA9PSB1bmRlZmluZWQpe1xyXG5cclxuXHRcdFx0XHR0aGlzLnNwZWNpZUxpc3RQcm9zZXNzZWQucHVzaCh0aGlzLnNwZWNpZUxpc3RbaWRdKTtcclxuXHRcdFx0XHRjb250aW51ZTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly9pZiBmb3JtU3BlY2llTmFtZSBpcyBhIHN1YnN0cmluZyBvZiBuYW1lIGluIGxpc3QsIG9yIHRoZXJlIGlzIG5vIGZvcm1TcGVjaWVOYW1lXHJcblx0XHRcdGlmKHRoaXMuc3BlY2llTGlzdFtpZF0ubmFtZS50b0xvd2VyQ2FzZSgpLmluZGV4T2YodGhpcy5mb3JtU3BlY2llTmFtZS50b0xvd2VyQ2FzZSgpKSA+PSAwIHx8IHRoaXMuZm9ybVNwZWNpZU5hbWUubGVuZ3RoID09IDApe1xyXG5cclxuXHRcdFx0XHR0aGlzLnNwZWNpZUxpc3RQcm9zZXNzZWQucHVzaCh0aGlzLnNwZWNpZUxpc3RbaWRdKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9XHJcblxyXG5cdFx0aWYodGhpcy5zZWxlY3RlZFNwZWNpZSA9PSB1bmRlZmluZWQpe1xyXG5cdFx0XHQvL3NlbGVjdCBmaXJzdCwgd2l0Y2ggaXMgaSBkb24ndCBrbm93XHJcblx0XHRcdHRoaXMuc2VsZWN0ZWRTcGVjaWUgPSB0aGlzLnNwZWNpZUxpc3RQcm9zZXNzZWRbMF07XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdC8vaWYgb25lIGNob2ljZSBvbHksIHNlbGVjdCBpdCAoZWcgaSBkb24ndCBrbm93ICsgY2hvaWNlKVxyXG5cdFx0aWYodGhpcy5zcGVjaWVMaXN0UHJvc2Vzc2VkLmxlbmd0aCA9PSAyKXtcclxuXHRcdFx0dGhpcy5zZWxlY3RlZFNwZWNpZSA9IHRoaXMuc3BlY2llTGlzdFByb3Nlc3NlZFsxXTtcclxuXHRcdH1cclxuXHJcblxyXG5cdH1cclxuXHRzaG93QUxldHRlcigpe1xyXG5cdFx0dGhpcy5sZXR0ZXIgPSB0aGlzLnNwZWNpZVF1ZXN0aW9uT2JqZWN0LmdldEZpcnN0TGV0dGVycyh0aGlzLm5yTGV0dGVycyk7XHJcblxyXG5cdFx0dGhpcy5mb3JtU3BlY2llTmFtZSA9IHRoaXMubGV0dGVyO1xyXG5cclxuXHRcdHRoaXMuY29tcGlsZVByb3Nlc3NlZExpc3QoKTtcclxuXHJcblx0XHR0aGlzLm5yTGV0dGVycysrO1xyXG5cclxuXHRcdC8vdGhpcy5kaXNhYmxlQnV0dG9uID0gdHJ1ZTtcclxuXHRcdC8qdGhpcy5oaW50cy0tO1xyXG5cdFx0IGlmICh0aGlzLmhpbnRzID49IDEpe1xyXG5cclxuXHRcdCB9ZWxzZXtcclxuXHRcdCB0aGlzLmRpc2FibGVCdXR0b24gPSB0cnVlO1xyXG5cdFx0IH0qL1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHJcblxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
