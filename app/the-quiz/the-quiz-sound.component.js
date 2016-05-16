System.register(['angular2/core', 'angular2/http', './../shared/quiz-settings.service', './../shared.class/the-quiz-soundplayer.class'], function(exports_1, context_1) {
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
    var core_1, http_1, quiz_settings_service_1, the_quiz_soundplayer_class_1;
    var TheQuizSoundComponent;
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
            function (the_quiz_soundplayer_class_1_1) {
                the_quiz_soundplayer_class_1 = the_quiz_soundplayer_class_1_1;
            }],
        execute: function() {
            TheQuizSoundComponent = (function () {
                function TheQuizSoundComponent(_quizSettingsService, _elementRef) {
                    this._quizSettingsService = _quizSettingsService;
                    this._elementRef = _elementRef;
                    this.title = 'Birdid Quiz TheQuizComponent!';
                    this.quizSoundObject = null;
                    this.inbetweenQuestions = false;
                    this.autoplay = true;
                    this.autoLoop = true;
                    this.progressPercent = 0;
                    this.currentTime = 0;
                    this.totTime = 0;
                    this.maxWidth = 0;
                    this.mediaURLStart = "https://hembstudios.no/birdid/";
                    this.soundMiddleURL = "";
                    this.mediaURL = "";
                    this.mediaURLs = [];
                    this.volume = 0.5;
                }
                TheQuizSoundComponent.prototype.ngOnInit = function () {
                };
                TheQuizSoundComponent.prototype.ngOnChanges = function () {
                    if (!this.inbetweenQuestions) {
                        var quizSettings = this._quizSettingsService.getQuizSettings();
                        var siteID = quizSettings[0].siteID;
                        if (siteID == 1) {
                            this.soundMiddleURL = "bird/db_media/sound/";
                        }
                        else if (siteID == 2) {
                            this.soundMiddleURL = "mammal/db_media/sound/";
                        }
                        else if (siteID == 3) {
                            this.soundMiddleURL = "track/db_media/sound/";
                        }
                        this.extraSiteID = "&siteID=" + siteID;
                        this.mediaURL = this.specieQuestionObject.getMediaSourses()[0].mediaUrl;
                        this.mediaURLs = this.specieQuestionObject.getMediaSourses();
                        if (this.quizSoundObject != null) {
                            this.quizSoundObject.destroy();
                            this.quizSoundObject = null;
                        }
                        this.autoLoop = this.autoplay;
                        if (this._quizSettingsService.isBeginnerQuiz()) {
                            this.autoLoop = false;
                        }
                        this.quizSoundObject = new the_quiz_soundplayer_class_1.QuizSoundplayer(this.autoplay, this.autoLoop, this);
                        if (this._quizSettingsService.isBeginnerQuiz()) {
                            //passing secound media as array
                            this.quizSoundObject.loadMedia(this.mediaURLStart + this.soundMiddleURL, [this.specieQuestionObject.getMediaSourses()[1]]);
                        }
                        else {
                            this.quizSoundObject.loadMedia(this.mediaURLStart + this.soundMiddleURL, this.specieQuestionObject.getMediaSourses());
                        }
                    }
                    else {
                        if (this.quizSoundObject != null) {
                            this.quizSoundObject.pause();
                        }
                    }
                };
                TheQuizSoundComponent.prototype.ngOnDestroy = function () {
                    if (this.quizSoundObject != null) {
                        this.quizSoundObject.destroy();
                        this.quizSoundObject = null;
                    }
                };
                TheQuizSoundComponent.prototype.setCurrentAndTotalTime = function (current, total) {
                    this.currentTime = Math.floor(current);
                    this.totTime = Math.floor(total);
                    this.progressPercent = (current / total) * 100;
                };
                TheQuizSoundComponent.prototype.getSoundMiddleUrl = function () {
                };
                TheQuizSoundComponent.prototype.playAudio = function () {
                    this.quizSoundObject.play();
                };
                TheQuizSoundComponent.prototype.pauseAudio = function () {
                    this.quizSoundObject.pause();
                };
                TheQuizSoundComponent.prototype.volumeIncrease = function () {
                    this.quizSoundObject.setVolume(0.1);
                };
                TheQuizSoundComponent.prototype.volumeDecrease = function () {
                    this.quizSoundObject.setVolume(-0.1);
                };
                TheQuizSoundComponent.prototype.moveProgress = function (event) {
                    //let offSet = ((event.offsetX)/4.41)/100;
                    //let startX = this.progressBar.nativeElement.offsetLeft;
                    var totSize = this.progressBarContainer.nativeElement.offsetWidth;
                    // console.log("event: ",event);
                    //
                    // console.log("totSize: ", totSize ," startX:", startX, " offSet:", offSet,  " event.offsetX: ", event.offsetX);
                    this.quizSoundObject.seek(event.layerX / totSize);
                    //this.myAudio.nativeElement.currentTime = this.myAudio.nativeElement.duration * offSet;
                    //console.log(this.maxWidth, "Max width");
                };
                __decorate([
                    core_1.ViewChild("progressBar"), 
                    __metadata('design:type', Object)
                ], TheQuizSoundComponent.prototype, "progressBar", void 0);
                __decorate([
                    core_1.ViewChild("progressBarContainer"), 
                    __metadata('design:type', Object)
                ], TheQuizSoundComponent.prototype, "progressBarContainer", void 0);
                TheQuizSoundComponent = __decorate([
                    core_1.Component({
                        selector: 'birdid-the-quiz-sound',
                        templateUrl: 'app/the-quiz/the-quiz-sound.component.html',
                        styleUrls: ['app/the-quiz/the-quiz-sound.component.css'],
                        directives: [],
                        providers: [
                            http_1.HTTP_PROVIDERS
                        ],
                        inputs: ['specieQuestionObject', 'inbetweenQuestions', 'autoplay'],
                    }), 
                    __metadata('design:paramtypes', [quiz_settings_service_1.QuizSettingsService, core_1.ElementRef])
                ], TheQuizSoundComponent);
                return TheQuizSoundComponent;
            }());
            exports_1("TheQuizSoundComponent", TheQuizSoundComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRoZS1xdWl6L3RoZS1xdWl6LXNvdW5kLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQXNCQTtnQkEwQkMsK0JBQ1Msb0JBQXlDLEVBQ3pDLFdBQXVCO29CQUR2Qix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXFCO29CQUN6QyxnQkFBVyxHQUFYLFdBQVcsQ0FBWTtvQkEzQmhDLFVBQUssR0FBRywrQkFBK0IsQ0FBQztvQkFNeEMsb0JBQWUsR0FBbUIsSUFBSSxDQUFDO29CQUV2Qyx1QkFBa0IsR0FBRyxLQUFLLENBQUM7b0JBQzNCLGFBQVEsR0FBRyxJQUFJLENBQUM7b0JBQ2hCLGFBQVEsR0FBRyxJQUFJLENBQUE7b0JBRWYsb0JBQWUsR0FBRyxDQUFDLENBQUM7b0JBQ3BCLGdCQUFXLEdBQUcsQ0FBQyxDQUFDO29CQUNoQixZQUFPLEdBQUcsQ0FBQyxDQUFDO29CQUNaLGFBQVEsR0FBRyxDQUFDLENBQUM7b0JBRWIsa0JBQWEsR0FBRyxnQ0FBZ0MsQ0FBQztvQkFFakQsbUJBQWMsR0FBRyxFQUFFLENBQUE7b0JBRWhCLGFBQVEsR0FBRyxFQUFFLENBQUM7b0JBQ2pCLGNBQVMsR0FBRyxFQUFFLENBQUM7b0JBQ2YsV0FBTSxHQUFHLEdBQUcsQ0FBQztnQkFLWCxDQUFDO2dCQUVILHdDQUFRLEdBQVI7Z0JBSUEsQ0FBQztnQkFFRCwyQ0FBVyxHQUFYO29CQUVDLEVBQUUsQ0FBQSxDQUFDLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUEsQ0FBQzt3QkFFNUIsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGVBQWUsRUFBRSxDQUFDO3dCQUMvRCxJQUFJLE1BQU0sR0FBRyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO3dCQUNwQyxFQUFFLENBQUEsQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLENBQUEsQ0FBQzs0QkFDZixJQUFJLENBQUMs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QUNmO3dCQUNELE1BQU0sRUFBRSxDQUFDLHNCQUFzQixFQUFFLG9CQUFvQixFQUFFLFVBQVUsQ0FBQztxQkFDbEUsQ0FBQzs7eUNBQUE7Z0JBNkpGLDRCQUFDO1lBQUQsQ0ExSkEsQUEwSkMsSUFBQTtZQTFKRCx5REEwSkMsQ0FBQSIsImZpbGUiOiJ0aGUtcXVpei90aGUtcXVpei1zb3VuZC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgRXZlbnRFbWl0dGVyLCBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCAgRWxlbWVudFJlZiB9ICAgICAgIGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwLCBIVFRQX1BST1ZJREVSUyB9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xyXG5cclxuaW1wb3J0IHsgUXVpelNldHRpbmdzU2VydmljZSB9ICBmcm9tICcuLy4uL3NoYXJlZC9xdWl6LXNldHRpbmdzLnNlcnZpY2UnO1xyXG5cclxuaW1wb3J0IHsgUXVpelF1ZXN0aW9uIH0gIGZyb20gJy4vLi4vc2hhcmVkLmNsYXNzL3RoZS1xdWl6LXF1ZXN0aW9uLmNsYXNzJztcclxuaW1wb3J0IHsgUXVpelNvdW5kcGxheWVyIH0gIGZyb20gJy4vLi4vc2hhcmVkLmNsYXNzL3RoZS1xdWl6LXNvdW5kcGxheWVyLmNsYXNzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiAnYmlyZGlkLXRoZS1xdWl6LXNvdW5kJyxcclxuXHR0ZW1wbGF0ZVVybDogJ2FwcC90aGUtcXVpei90aGUtcXVpei1zb3VuZC5jb21wb25lbnQuaHRtbCcsXHJcblx0c3R5bGVVcmxzOiAgWydhcHAvdGhlLXF1aXovdGhlLXF1aXotc291bmQuY29tcG9uZW50LmNzcyddLFxyXG5cdGRpcmVjdGl2ZXM6IFtcclxuXHJcblx0XSxcclxuXHRwcm92aWRlcnM6IFtcclxuXHQgIEhUVFBfUFJPVklERVJTXHJcblx0XSxcclxuXHRpbnB1dHM6IFsnc3BlY2llUXVlc3Rpb25PYmplY3QnLCAnaW5iZXR3ZWVuUXVlc3Rpb25zJywgJ2F1dG9wbGF5J10sIC8vdXNpbmcgQUxJQVNcclxufSlcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgVGhlUXVpelNvdW5kQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveXtcclxuXHR0aXRsZSA9ICdCaXJkaWQgUXVpeiBUaGVRdWl6Q29tcG9uZW50ISc7XHJcblxyXG5cdEBWaWV3Q2hpbGQoXCJwcm9ncmVzc0JhclwiKSBwcm9ncmVzc0JhcjtcclxuXHRAVmlld0NoaWxkKFwicHJvZ3Jlc3NCYXJDb250YWluZXJcIikgcHJvZ3Jlc3NCYXJDb250YWluZXI7XHJcblxyXG5cdHNwZWNpZVF1ZXN0aW9uT2JqZWN0OlF1aXpRdWVzdGlvbjtcclxuXHRxdWl6U291bmRPYmplY3Q6UXVpelNvdW5kcGxheWVyID0gbnVsbDtcclxuXHJcblx0aW5iZXR3ZWVuUXVlc3Rpb25zID0gZmFsc2U7XHJcblx0YXV0b3BsYXkgPSB0cnVlO1xyXG5cdGF1dG9Mb29wID0gdHJ1ZVxyXG5cclxuXHRwcm9ncmVzc1BlcmNlbnQgPSAwO1xyXG5cdGN1cnJlbnRUaW1lID0gMDtcclxuXHR0b3RUaW1lID0gMDtcclxuXHRtYXhXaWR0aCA9IDA7XHJcblxyXG5cdG1lZGlhVVJMU3RhcnQgPSBcImh0dHBzOi8vaGVtYnN0dWRpb3Mubm8vYmlyZGlkL1wiO1xyXG5cdGV4dHJhU2l0ZUlEO1xyXG5cdHNvdW5kTWlkZGxlVVJMID0gXCJcIlxyXG5cclxuICAgIG1lZGlhVVJMID0gXCJcIjtcclxuXHRtZWRpYVVSTHMgPSBbXTtcclxuXHR2b2x1bWUgPSAwLjU7XHJcblxyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSBfcXVpelNldHRpbmdzU2VydmljZTogUXVpelNldHRpbmdzU2VydmljZSxcclxuXHRcdHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWZcclxuXHQpe31cclxuXHJcblx0bmdPbkluaXQoKSB7XHJcblxyXG5cclxuXHJcblx0fVxyXG5cclxuXHRuZ09uQ2hhbmdlcygpe1xyXG5cclxuXHRcdGlmKCF0aGlzLmluYmV0d2VlblF1ZXN0aW9ucyl7XHJcblxyXG5cdFx0XHRsZXQgcXVpelNldHRpbmdzID0gdGhpcy5fcXVpelNldHRpbmdzU2VydmljZS5nZXRRdWl6U2V0dGluZ3MoKTtcclxuXHRcdFx0bGV0IHNpdGVJRCA9IHF1aXpTZXR0aW5nc1swXS5zaXRlSUQ7XHJcblx0XHRcdGlmKHNpdGVJRCA9PSAxKXtcclxuXHRcdFx0XHR0aGlzLnNvdW5kTWlkZGxlVVJMID1cImJpcmQvZGJfbWVkaWEvc291bmQvXCI7XHJcblx0XHRcdH1lbHNlIGlmKHNpdGVJRCA9PSAyKXtcclxuXHRcdFx0XHR0aGlzLnNvdW5kTWlkZGxlVVJMID1cIm1hbW1hbC9kYl9tZWRpYS9zb3VuZC9cIjtcclxuXHRcdFx0fWVsc2UgaWYoc2l0ZUlEID09IDMpe1xyXG5cdFx0XHRcdHRoaXMuc291bmRNaWRkbGVVUkwgPVwidHJhY2svZGJfbWVkaWEvc291bmQvXCI7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHRoaXMuZXh0cmFTaXRlSUQgPSBcIiZzaXRlSUQ9XCIrc2l0ZUlEO1xyXG5cclxuXHRcdFx0dGhpcy5tZWRpYVVSTCA9IHRoaXMuc3BlY2llUXVlc3Rpb25PYmplY3QuZ2V0TWVkaWFTb3Vyc2VzKClbMF0ubWVkaWFVcmw7XHJcblx0XHRcdHRoaXMubWVkaWFVUkxzID0gdGhpcy5zcGVjaWVRdWVzdGlvbk9iamVjdC5nZXRNZWRpYVNvdXJzZXMoKTtcclxuXHJcblx0XHRcdGlmKHRoaXMucXVpelNvdW5kT2JqZWN0ICE9IG51bGwpe1xyXG5cdFx0XHRcdHRoaXMucXVpelNvdW5kT2JqZWN0LmRlc3Ryb3koKTtcclxuXHRcdFx0XHR0aGlzLnF1aXpTb3VuZE9iamVjdCA9IG51bGw7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHRoaXMuYXV0b0xvb3AgPSB0aGlzLmF1dG9wbGF5O1xyXG5cclxuXHRcdFx0aWYodGhpcy5fcXVpelNldHRpbmdzU2VydmljZS5pc0JlZ2lubmVyUXVpeigpKXtcclxuXHRcdFx0XHR0aGlzLmF1dG9Mb29wID0gZmFsc2U7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHRoaXMucXVpelNvdW5kT2JqZWN0ID0gbmV3IFF1aXpTb3VuZHBsYXllcih0aGlzLmF1dG9wbGF5LCB0aGlzLmF1dG9Mb29wLCB0aGlzKTtcclxuXHRcdFx0aWYodGhpcy5fcXVpelNldHRpbmdzU2VydmljZS5pc0JlZ2lubmVyUXVpeigpKXtcclxuXHRcdFx0XHQvL3Bhc3Npbmcgc2Vjb3VuZCBtZWRpYSBhcyBhcnJheVxyXG5cdFx0XHRcdHRoaXMucXVpelNvdW5kT2JqZWN0LmxvYWRNZWRpYSh0aGlzLm1lZGlhVVJMU3RhcnQgKyB0aGlzLnNvdW5kTWlkZGxlVVJMLCBbdGhpcy5zcGVjaWVRdWVzdGlvbk9iamVjdC5nZXRNZWRpYVNvdXJzZXMoKVsxXV0pO1xyXG5cdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHR0aGlzLnF1aXpTb3VuZE9iamVjdC5sb2FkTWVkaWEodGhpcy5tZWRpYVVSTFN0YXJ0ICsgdGhpcy5zb3VuZE1pZGRsZVVSTCwgdGhpcy5zcGVjaWVRdWVzdGlvbk9iamVjdC5nZXRNZWRpYVNvdXJzZXMoKSk7XHJcblx0XHRcdH1cclxuXHJcblx0XHR9ZWxzZXtcclxuXHJcblx0XHRcdGlmKHRoaXMucXVpelNvdW5kT2JqZWN0ICE9IG51bGwpe1xyXG5cdFx0XHRcdHRoaXMucXVpelNvdW5kT2JqZWN0LnBhdXNlKCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHR9XHJcblxyXG5cdH1cclxuXHJcblx0bmdPbkRlc3Ryb3koKXtcclxuXHJcblx0XHRpZih0aGlzLnF1aXpTb3VuZE9iamVjdCAhPSBudWxsKXtcclxuXHRcdFx0dGhpcy5xdWl6U291bmRPYmplY3QuZGVzdHJveSgpO1xyXG5cdFx0XHR0aGlzLnF1aXpTb3VuZE9iamVjdCA9IG51bGw7XHJcblx0XHR9XHJcblxyXG5cdH1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cdHNldEN1cnJlbnRBbmRUb3RhbFRpbWUoY3VycmVudCwgdG90YWwpe1xyXG5cclxuXHRcdHRoaXMuY3VycmVudFRpbWUgPSBNYXRoLmZsb29yKGN1cnJlbnQpO1xyXG5cdFx0dGhpcy50b3RUaW1lID0gTWF0aC5mbG9vcih0b3RhbCk7XHJcblx0XHR0aGlzLnByb2dyZXNzUGVyY2VudCA9IChjdXJyZW50IC8gdG90YWwpICogMTAwO1xyXG5cclxuXHR9XHJcblxyXG5cdGdldFNvdW5kTWlkZGxlVXJsKCl7XHJcblxyXG5cdH1cclxuXHJcblxyXG5cdHBsYXlBdWRpbygpe1xyXG5cclxuXHRcdHRoaXMucXVpelNvdW5kT2JqZWN0LnBsYXkoKTtcclxuXHJcblx0fVxyXG5cclxuXHRwYXVzZUF1ZGlvKCl7XHJcblxyXG5cdFx0dGhpcy5xdWl6U291bmRPYmplY3QucGF1c2UoKTtcclxuXHJcblx0fVxyXG5cclxuXHR2b2x1bWVJbmNyZWFzZSgpe1xyXG5cclxuXHRcdHRoaXMucXVpelNvdW5kT2JqZWN0LnNldFZvbHVtZSgwLjEpO1xyXG5cclxuXHR9XHJcblxyXG5cdHZvbHVtZURlY3JlYXNlKCl7XHJcblxyXG5cdFx0dGhpcy5xdWl6U291bmRPYmplY3Quc2V0Vm9sdW1lKC0wLjEpO1xyXG5cclxuXHR9XHJcblxyXG5cclxuXHRtb3ZlUHJvZ3Jlc3MoZXZlbnQpe1xyXG5cclxuXHRcdC8vbGV0IG9mZlNldCA9ICgoZXZlbnQub2Zmc2V0WCkvNC40MSkvMTAwO1xyXG5cclxuXHRcdC8vbGV0IHN0YXJ0WCA9IHRoaXMucHJvZ3Jlc3NCYXIubmF0aXZlRWxlbWVudC5vZmZzZXRMZWZ0O1xyXG5cdFx0bGV0IHRvdFNpemUgPSB0aGlzLnByb2dyZXNzQmFyQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGg7XHJcblxyXG5cdFx0Ly8gY29uc29sZS5sb2coXCJldmVudDogXCIsZXZlbnQpO1xyXG5cdFx0Ly9cclxuXHRcdC8vIGNvbnNvbGUubG9nKFwidG90U2l6ZTogXCIsIHRvdFNpemUgLFwiIHN0YXJ0WDpcIiwgc3RhcnRYLCBcIiBvZmZTZXQ6XCIsIG9mZlNldCwgIFwiIGV2ZW50Lm9mZnNldFg6IFwiLCBldmVudC5vZmZzZXRYKTtcclxuXHJcblx0XHR0aGlzLnF1aXpTb3VuZE9iamVjdC5zZWVrKGV2ZW50LmxheWVyWCAvIHRvdFNpemUpO1xyXG5cclxuXHRcdC8vdGhpcy5teUF1ZGlvLm5hdGl2ZUVsZW1lbnQuY3VycmVudFRpbWUgPSB0aGlzLm15QXVkaW8ubmF0aXZlRWxlbWVudC5kdXJhdGlvbiAqIG9mZlNldDtcclxuXHJcblx0XHQvL2NvbnNvbGUubG9nKHRoaXMubWF4V2lkdGgsIFwiTWF4IHdpZHRoXCIpO1xyXG5cdH1cclxuXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
