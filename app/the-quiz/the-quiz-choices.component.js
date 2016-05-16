System.register(['angular2/core', 'angular2/http', './../shared/quiz-settings.service', './../shared/quiz-specie.service'], function(exports_1, context_1) {
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
    var core_1, http_1, quiz_settings_service_1, quiz_specie_service_1;
    var TheQuizChoicesComponent;
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
            }],
        execute: function() {
            TheQuizChoicesComponent = (function () {
                function TheQuizChoicesComponent(_quizSettingsService, _quizSpeciesService, _element) {
                    this._quizSettingsService = _quizSettingsService;
                    this._quizSpeciesService = _quizSpeciesService;
                    this._element = _element;
                    this.disableHints = false;
                    this.hints = "Unlimited for now";
                    this.numbOfQuestion = 0;
                    this.subsiteName = "bird";
                    this.inbetweenQuestions = false;
                    //questionCorrect = false;
                    //selectedButtonSpecieID = -1;
                    this.questionDoneEvent = new core_1.EventEmitter();
                }
                TheQuizChoicesComponent.prototype.ngOnInit = function () {
                    //console.log(this.specieQuestionObject);
                    this.numbOfQuestion = this._quizSettingsService.numberOfQuestions;
                    this.checkIfDisable();
                };
                TheQuizChoicesComponent.prototype.ngOnChanges = function () {
                    if (this.inbetweenQuestions) {
                    }
                    else {
                    }
                    var siteID = this._quizSettingsService.getSiteID();
                    if (siteID == 1) {
                        this.subsiteName = "bird";
                    }
                    else if (siteID == 2) {
                        this.subsiteName = "mammal";
                    }
                    else if (siteID == 3) {
                        this.subsiteName = "track";
                    }
                    else if (siteID == 4) {
                        this.subsiteName = "xbook";
                    }
                };
                TheQuizChoicesComponent.prototype.ngAfterViewInit = function () {
                };
                TheQuizChoicesComponent.prototype.checkIfDisable = function () {
                    if (!this._quizSettingsService.isUsingHelp()) {
                        this.disableHints = true;
                        this.hints = "Hints are disabled";
                    }
                };
                TheQuizChoicesComponent.prototype.checkIfButtonColorIsCorrect = function (specieID) {
                    if (this.specieQuestionObject.checkIfAnserIsCorrect(specieID)
                        && this.inbetweenQuestions == true) {
                        return true;
                    }
                    else {
                        return false;
                    }
                };
                TheQuizChoicesComponent.prototype.checkIfButtonColorIsWrong = function (specieID) {
                    if (!this.specieQuestionObject.checkIfAnserIsCorrect(specieID)
                        && this.inbetweenQuestions == true
                        && this.specieQuestionObject.choiceIsSelected(specieID)) {
                        return true;
                    }
                    else {
                        return false;
                    }
                };
                TheQuizChoicesComponent.prototype.checkIfButtonIsSelected = function (specieID, anyway) {
                    if (anyway === void 0) { anyway = false; }
                    //anyway means return ing accuall value even if inbetween questions
                    if (this.inbetweenQuestions && !anyway) {
                        return false;
                    }
                    if (this.specieQuestionObject.choiceIsSelected(specieID)) {
                        return true;
                    }
                    else {
                        return false;
                    }
                };
                TheQuizChoicesComponent.prototype.selectAnswerDisabled = function () {
                    if (this.inbetweenQuestions == true) {
                        return true;
                    }
                    else {
                        return false;
                    }
                };
                TheQuizChoicesComponent.prototype.setUserChoice = function (specieID) {
                    if (this.specieQuestionObject.choiceIsSelected(specieID)) {
                        //deselect it!!
                        this.specieQuestionObject.removeSelectedChoice(specieID);
                    }
                    else {
                        //select it!!
                        this.specieQuestionObject.addSelectedChoice(specieID);
                    }
                    if (this.specieQuestionObject.checkIfAnserIsCorrect(specieID)) {
                        console.log("correct!");
                    }
                    else {
                        console.log("inncorrect!");
                    }
                };
                TheQuizChoicesComponent.prototype.onAnswerButtonClick = function () {
                    //this.questionCorrect = this.specieQuestionObject.checkIfAnserIsCorrect(this.selectedButtonSpecieID);
                    if (this.inbetweenQuestions) {
                        this.questionDoneEvent.emit(true);
                    }
                    else {
                        this.questionDoneEvent.emit(true);
                    }
                };
                TheQuizChoicesComponent.prototype.removeWrongAnswer = function () {
                    this.specieQuestionObject.removeWrongAlternative();
                    /*this.hints--;
                    if (this.hints >= 1){
            
                    }else{
                        this.disableButton = true;
                    }*/
                };
                TheQuizChoicesComponent = __decorate([
                    core_1.Component({
                        selector: 'birdid-the-quiz-choices',
                        templateUrl: 'app/the-quiz/the-quiz-choices.component.html',
                        styleUrls: ['app/the-quiz/the-quiz-choices.component.css'],
                        directives: [],
                        providers: [
                            http_1.HTTP_PROVIDERS
                        ],
                        pipes: [],
                        inputs: ['inbetweenQuestions', 'specieQuestionObject'],
                        outputs: ['questionDoneEvent']
                    }), 
                    __metadata('design:paramtypes', [quiz_settings_service_1.QuizSettingsService, quiz_specie_service_1.QuizSpecieService, core_1.ElementRef])
                ], TheQuizChoicesComponent);
                return TheQuizChoicesComponent;
            }());
            exports_1("TheQuizChoicesComponent", TheQuizChoicesComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRoZS1xdWl6L3RoZS1xdWl6LWNob2ljZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBMEJBO2dCQWtCQyxpQ0FDUyxvQkFBeUMsRUFDekMsbUJBQXNDLEVBQ3RDLFFBQW9CO29CQUZwQix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXFCO29CQUN6Qyx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQW1CO29CQUN0QyxhQUFRLEdBQVIsUUFBUSxDQUFZO29CQWpCN0IsaUJBQVksR0FBRyxLQUFLLENBQUM7b0JBQ3JCLFVBQUssR0FBRyxtQkFBbUIsQ0FBQztvQkFDNUIsbUJBQWMsR0FBSSxDQUFDLENBQUM7b0JBQ3BCLGdCQUFXLEdBQUcsTUFBTSxDQUFBO29CQUVwQix1QkFBa0IsR0FBRyxLQUFLLENBQUM7b0JBRTNCLDBCQUEwQjtvQkFHMUIsOEJBQThCO29CQUU5QixzQkFBaUIsR0FBRyxJQUFJLG1CQUFZLEVBQVcsQ0FBQztnQkFLakIsQ0FBQztnQkFFaEMsMENBQVEsR0FBUjtvQkFDQyx5Q0FBeUM7b0JBQ3pDLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGlCQUFpQixDQUFDO29CQUNsRSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7Z0JBRXZCLENBQUM7Z0JBRUQsNkNBQVcsR0FBWDtvQkFDQyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQSxDQUFDO29CQUc1QixDQUFDO29CQUFBLElBQUksQ0FBQSxDQUFDO29CQUVOLENBQUM7b0JBQ0QsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFNBQVMsRUFBRSxDQUFDO29CQUNuRCxFQUFFLENBQUEsQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLENBQUEsQ0FBQzt3QkFDZixJQUFJLENBQUMsV0FBVyxHQUFFLE1BQU0sQ0FBQztvQkFDMUIsQ0FBQztvQkFBQSxJ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RUFFTjt3QkFDRCxNQUFNLEVBQUUsQ0FBQyxvQkFBb0IsRUFBRSxzQkFBc0IsQ0FBQzt3QkFDdEQsT0FBTyxFQUFFLENBQUMsbUJBQW1CLENBQUM7cUJBQzlCLENBQUM7OzJDQUFBO2dCQXlLRiw4QkFBQztZQUFELENBdEtBLEFBc0tDLElBQUE7WUF0S0QsNkRBc0tDLENBQUEiLCJmaWxlIjoidGhlLXF1aXovdGhlLXF1aXotY2hvaWNlcy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgT25Jbml0LCBPbkNoYW5nZXMsIFZpZXdDaGlsZCwgQWZ0ZXJWaWV3SW5pdCwgRWxlbWVudFJlZiB9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwLCBIVFRQX1BST1ZJREVSUyB9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xyXG5cclxuaW1wb3J0IHsgUXVpelNldHRpbmdzU2VydmljZSB9ICBmcm9tICcuLy4uL3NoYXJlZC9xdWl6LXNldHRpbmdzLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBRdWl6U3BlY2llU2VydmljZSB9ICBmcm9tICcuLy4uL3NoYXJlZC9xdWl6LXNwZWNpZS5zZXJ2aWNlJztcclxuXHJcbmltcG9ydCB7IFF1aXpRdWVzdGlvbiB9ICBmcm9tICcuLy4uL3NoYXJlZC5jbGFzcy90aGUtcXVpei1xdWVzdGlvbi5jbGFzcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogJ2JpcmRpZC10aGUtcXVpei1jaG9pY2VzJyxcclxuXHR0ZW1wbGF0ZVVybDogJ2FwcC90aGUtcXVpei90aGUtcXVpei1jaG9pY2VzLmNvbXBvbmVudC5odG1sJyxcclxuXHRzdHlsZVVybHM6ICBbJ2FwcC90aGUtcXVpei90aGUtcXVpei1jaG9pY2VzLmNvbXBvbmVudC5jc3MnXSxcclxuXHRkaXJlY3RpdmVzOiBbXHJcblxyXG5cdF0sXHJcblx0cHJvdmlkZXJzOiBbXHJcblx0ICBIVFRQX1BST1ZJREVSU1xyXG5cdF0sXHJcblx0cGlwZXM6IFtcclxuXHJcblx0XSxcclxuXHRpbnB1dHM6IFsnaW5iZXR3ZWVuUXVlc3Rpb25zJywgJ3NwZWNpZVF1ZXN0aW9uT2JqZWN0J10sXHJcblx0b3V0cHV0czogWydxdWVzdGlvbkRvbmVFdmVudCddXHJcbn0pXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFRoZVF1aXpDaG9pY2VzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXN7XHJcblxyXG5cdGZvcm1TcGVjaWVOYW1lO1xyXG5cdHNlbGVjdGVkU3BlY2llO1xyXG5cdGRpc2FibGVIaW50cyA9IGZhbHNlO1xyXG5cdGhpbnRzID0gXCJVbmxpbWl0ZWQgZm9yIG5vd1wiO1xyXG5cdG51bWJPZlF1ZXN0aW9uID0gIDA7XHJcblx0c3Vic2l0ZU5hbWUgPSBcImJpcmRcIlxyXG5cclxuXHRpbmJldHdlZW5RdWVzdGlvbnMgPSBmYWxzZTtcclxuXHRzcGVjaWVRdWVzdGlvbk9iamVjdDpRdWl6UXVlc3Rpb247XHJcblx0Ly9xdWVzdGlvbkNvcnJlY3QgPSBmYWxzZTtcclxuXHJcblxyXG5cdC8vc2VsZWN0ZWRCdXR0b25TcGVjaWVJRCA9IC0xO1xyXG5cclxuXHRxdWVzdGlvbkRvbmVFdmVudCA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuXHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIF9xdWl6U2V0dGluZ3NTZXJ2aWNlOiBRdWl6U2V0dGluZ3NTZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSBfcXVpelNwZWNpZXNTZXJ2aWNlOiBRdWl6U3BlY2llU2VydmljZSxcclxuXHRcdHByaXZhdGUgX2VsZW1lbnQ6IEVsZW1lbnRSZWYpe31cclxuXHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHQvL2NvbnNvbGUubG9nKHRoaXMuc3BlY2llUXVlc3Rpb25PYmplY3QpO1xyXG5cdFx0dGhpcy5udW1iT2ZRdWVzdGlvbiA9IHRoaXMuX3F1aXpTZXR0aW5nc1NlcnZpY2UubnVtYmVyT2ZRdWVzdGlvbnM7XHJcblx0XHR0aGlzLmNoZWNrSWZEaXNhYmxlKCk7XHJcblxyXG5cdH1cclxuXHJcblx0bmdPbkNoYW5nZXMoKXtcclxuXHRcdGlmKHRoaXMuaW5iZXR3ZWVuUXVlc3Rpb25zKXtcclxuXHRcdFx0Ly9jb25zb2xlLmxvZyhcImluYmV0d2VlbiBxdWVzdHMgXCIsIHRoaXMuc3BlY2llUXVlc3Rpb25PYmplY3QpO1xyXG5cclxuXHRcdH1lbHNle1xyXG5cdFx0XHQvL2NvbnNvbGUubG9nKFwiIWluYmV0d2VlbiBxdWVzdHNcIik7XHJcblx0XHR9XHJcblx0XHRsZXQgc2l0ZUlEID0gdGhpcy5fcXVpelNldHRpbmdzU2VydmljZS5nZXRTaXRlSUQoKTtcclxuXHRcdGlmKHNpdGVJRCA9PSAxKXtcclxuXHRcdFx0dGhpcy5zdWJzaXRlTmFtZSA9XCJiaXJkXCI7XHJcblx0XHR9ZWxzZSBpZihzaXRlSUQgPT0gMil7XHJcblx0XHRcdHRoaXMuc3Vic2l0ZU5hbWUgPVwibWFtbWFsXCI7XHJcblx0XHR9ZWxzZSBpZihzaXRlSUQgPT0gMyl7XHJcblx0XHRcdHRoaXMuc3Vic2l0ZU5hbWUgPVwidHJhY2tcIjtcclxuXHRcdH1lbHNlIGlmKHNpdGVJRCA9PSA0KXtcclxuXHRcdFx0dGhpcy5zdWJzaXRlTmFtZSA9XCJ4Ym9va1wiO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0bmdBZnRlclZpZXdJbml0KCkge1xyXG5cclxuXHJcblxyXG5cdH1cclxuXHRjaGVja0lmRGlzYWJsZSgpe1xyXG5cdFx0aWYoIXRoaXMuX3F1aXpTZXR0aW5nc1NlcnZpY2UuaXNVc2luZ0hlbHAoKSl7XHJcblx0XHRcdHRoaXMuZGlzYWJsZUhpbnRzID0gdHJ1ZTtcclxuXHRcdFx0dGhpcy5oaW50cyA9XCJIaW50cyBhcmUgZGlzYWJsZWRcIjtcclxuXHRcdH1cclxuXHJcblx0fVxyXG5cclxuXHJcblx0Y2hlY2tJZkJ1dHRvbkNvbG9ySXNDb3JyZWN0KHNwZWNpZUlEKXtcclxuXHJcblxyXG4gICAgICAgIGlmKHRoaXMuc3BlY2llUXVlc3Rpb25PYmplY3QuY2hlY2tJZkFuc2VySXNDb3JyZWN0KHNwZWNpZUlEKVxyXG5cdFx0JiYgdGhpcy5pbmJldHdlZW5RdWVzdGlvbnMgPT0gdHJ1ZSl7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG5cclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tJZkJ1dHRvbkNvbG9ySXNXcm9uZyhzcGVjaWVJRCl7XHJcblxyXG5cclxuICAgICAgICBpZighdGhpcy5zcGVjaWVRdWVzdGlvbk9iamVjdC5jaGVja0lmQW5zZXJJc0NvcnJlY3Qoc3BlY2llSUQpXHJcblx0XHRcdCYmIHRoaXMuaW5iZXR3ZWVuUXVlc3Rpb25zID09IHRydWVcclxuXHRcdFx0JiYgdGhpcy5zcGVjaWVRdWVzdGlvbk9iamVjdC5jaG9pY2VJc1NlbGVjdGVkKHNwZWNpZUlEKSl7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrSWZCdXR0b25Jc1NlbGVjdGVkKHNwZWNpZUlELCBhbnl3YXkgPSBmYWxzZSl7XHJcblx0XHQvL2FueXdheSBtZWFucyByZXR1cm4gaW5nIGFjY3VhbGwgdmFsdWUgZXZlbiBpZiBpbmJldHdlZW4gcXVlc3Rpb25zXHJcbiAgICAgICAgaWYodGhpcy5pbmJldHdlZW5RdWVzdGlvbnMgJiYgISBhbnl3YXkpe1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodGhpcy5zcGVjaWVRdWVzdGlvbk9iamVjdC5jaG9pY2VJc1NlbGVjdGVkKHNwZWNpZUlEKSl7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHRzZWxlY3RBbnN3ZXJEaXNhYmxlZCgpe1xyXG5cdFx0aWYoIHRoaXMuaW5iZXR3ZWVuUXVlc3Rpb25zID09IHRydWUpe1xyXG5cdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0fWVsc2V7XHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0c2V0VXNlckNob2ljZShzcGVjaWVJRCl7XHJcblxyXG5cdFx0aWYodGhpcy5zcGVjaWVRdWVzdGlvbk9iamVjdC5jaG9pY2VJc1NlbGVjdGVkKHNwZWNpZUlEKSl7XHJcblx0XHRcdC8vZGVzZWxlY3QgaXQhIVxyXG5cdFx0XHR0aGlzLnNwZWNpZVF1ZXN0aW9uT2JqZWN0LnJlbW92ZVNlbGVjdGVkQ2hvaWNlKHNwZWNpZUlEKTtcclxuXHRcdFx0Ly90aGlzLnNwZWNpZURlc2VsZWN0RXZlbnQuZW1pdChzcGVjaWVJRCk7XHJcblx0XHR9ZWxzZXtcclxuXHRcdFx0Ly9zZWxlY3QgaXQhIVxyXG5cdFx0XHR0aGlzLnNwZWNpZVF1ZXN0aW9uT2JqZWN0LmFkZFNlbGVjdGVkQ2hvaWNlKHNwZWNpZUlEKTtcclxuXHRcdFx0Ly90aGlzLnNwZWNpZVNlbGVjdGVkRXZlbnQuZW1pdChzcGVjaWVJRCk7XHJcblx0XHR9XHJcblxyXG5cclxuXHJcblx0XHRpZih0aGlzLnNwZWNpZVF1ZXN0aW9uT2JqZWN0LmNoZWNrSWZBbnNlcklzQ29ycmVjdChzcGVjaWVJRCkpe1xyXG5cclxuXHRcdFx0Y29uc29sZS5sb2coXCJjb3JyZWN0IVwiKTtcclxuXHJcblx0XHR9ZWxzZXtcclxuXHJcblx0XHRcdGNvbnNvbGUubG9nKFwiaW5uY29ycmVjdCFcIik7XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9XHJcblxyXG5cclxuXHJcblx0b25BbnN3ZXJCdXR0b25DbGljaygpe1xyXG5cclxuXHRcdC8vdGhpcy5xdWVzdGlvbkNvcnJlY3QgPSB0aGlzLnNwZWNpZVF1ZXN0aW9uT2JqZWN0LmNoZWNrSWZBbnNlcklzQ29ycmVjdCh0aGlzLnNlbGVjdGVkQnV0dG9uU3BlY2llSUQpO1xyXG5cclxuXHRcdGlmKHRoaXMuaW5iZXR3ZWVuUXVlc3Rpb25zKXtcclxuXHRcdFx0dGhpcy5xdWVzdGlvbkRvbmVFdmVudC5lbWl0KHRydWUpO1xyXG5cdFx0XHQvL3RoaXMuc2VsZWN0ZWRCdXR0b25TcGVjaWVJRCA9IC0xO1xyXG5cdFx0fWVsc2V7XHJcblx0XHRcdHRoaXMucXVlc3Rpb25Eb25lRXZlbnQuZW1pdCh0cnVlKTtcclxuXHRcdH1cclxuXHJcblxyXG5cclxuXHR9XHJcblx0cmVtb3ZlV3JvbmdBbnN3ZXIoKXtcclxuXHRcdHRoaXMuc3BlY2llUXVlc3Rpb25PYmplY3QucmVtb3ZlV3JvbmdBbHRlcm5hdGl2ZSgpO1xyXG5cdFx0Lyp0aGlzLmhpbnRzLS07XHJcblx0XHRpZiAodGhpcy5oaW50cyA+PSAxKXtcclxuXHJcblx0XHR9ZWxzZXtcclxuXHRcdFx0dGhpcy5kaXNhYmxlQnV0dG9uID0gdHJ1ZTtcclxuXHRcdH0qL1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
