System.register(['angular2/core', 'angular2/http', './../shared/quiz-settings.service'], function(exports_1, context_1) {
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
    var core_1, http_1, quiz_settings_service_1;
    var TheQuizImageComponent;
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
            }],
        execute: function() {
            TheQuizImageComponent = (function () {
                function TheQuizImageComponent(_quizSettingsService, _element) {
                    this._quizSettingsService = _quizSettingsService;
                    this._element = _element;
                    this.title = 'Birdid Quiz TheQuizComponent!';
                    this.imageURLStart = "https://hembstudios.no/birdid/IDprogram/getMedia.php?";
                    this.imageUrlParms = "";
                    this.mediaID = 0;
                    this.mediaURL = "";
                    this.accessCode = "";
                    this.siteID = 4;
                    this.zoomFactor = 2;
                    this.zoomPointX = 0;
                    this.zoomPointY = 0;
                    this.canvasSizeX = 700;
                    this.canvasSizeY = 700;
                    this.rectColor = "#FF0000";
                    this.imageLoaded = false;
                    this.mouseOnImage = false;
                }
                TheQuizImageComponent.prototype.ngOnInit = function () {
                    var quizSettings = this._quizSettingsService.getQuizSettings();
                    this.siteID = quizSettings[0].siteID;
                    this.extraSiteID = "&siteID=" + this.siteID;
                };
                TheQuizImageComponent.prototype.ngOnChanges = function () {
                    var quizSettings = this._quizSettingsService.getQuizSettings();
                    this.siteID = quizSettings[0].siteID;
                    this.mediaID = this.specieQuestionObject.getMediaIds()[0].id;
                    this.mediaURL = this.specieQuestionObject.getMediaSourses()[0].mediaUrl;
                    this.setupImageURL();
                };
                TheQuizImageComponent.prototype.setupImageURL = function () {
                    var quizSettings = this._quizSettingsService.getQuizSettings();
                    var siteID = quizSettings[0].siteID;
                    if (this._quizSettingsService.isBeginnerQuiz()) {
                        this.imageURLStart = "https://hembstudios.no/birdid/";
                        if (siteID == 1) {
                            this.imageURLStart += "bird/db_media/beginnerImage/";
                        }
                        else if (siteID == 2) {
                            this.imageURLStart += "mammal/db_media/beginnerImage/";
                        }
                        else if (siteID == 3) {
                            this.imageURLStart += "track/db_media/beginnerImage/";
                        }
                        this.imageUrlParms = this.mediaURL;
                    }
                    else if (quizSettings[0].formalTestQuiz) {
                        //anything but a
                        this.accessCode = quizSettings[0].formalTestAccessCode;
                        //console.log(" quizSettings[0]: ",  quizSettings[0]);
                        this.imageUrlParms = "accessCode=" + this.accessCode + "&mediaToken=" + this.mediaURL;
                    }
                    else {
                        this.imageUrlParms = "mediaID=" + this.mediaID + "&siteID=" + this.siteID;
                    }
                };
                TheQuizImageComponent.prototype.ngAfterViewInit = function () {
                    var _this = this;
                    //console.log("hallo");
                    var canvas = this.myCanvas.nativeElement;
                    this.context = canvas.getContext("2d");
                    var ctx = this.context;
                    //console.log("this.myImage: ", this.myImage.nativeElement);
                    //ctx.drawImage(this.myImage.nativeElement, 10, 10);
                    this.myImage.nativeElement.onload = function () {
                        _this.imageLoaded = true;
                        _this.resizeImageCanvas();
                    };
                };
                TheQuizImageComponent.prototype.resizeImageCanvas = function () {
                    if (this.imageLoaded) {
                        this.myCanvas.nativeElement.width = this.myImage.nativeElement.width;
                        this.myCanvas.nativeElement.height = this.myImage.nativeElement.height;
                        this.canvasSizeX = this.myImage.nativeElement.width;
                        this.canvasSizeY = this.myImage.nativeElement.height;
                        var stretcSizeX = this.stretchBar.nativeElement.clientWidth;
                        //console.log("this.canvasSizeX > stretcSizeX>: ", this.canvasSizeX, "|", stretcSizeX);
                        if (this.canvasSizeX > stretcSizeX) {
                            var ScaleDiff = stretcSizeX / this.canvasSizeX;
                            //console.log("yeah:", ScaleDiff);
                            this.myCanvas.nativeElement.width = this.myImage.nativeElement.width * ScaleDiff;
                            this.myCanvas.nativeElement.height = this.myImage.nativeElement.height * ScaleDiff;
                            this.canvasSizeX = this.myImage.nativeElement.width * ScaleDiff;
                            this.canvasSizeY = this.myImage.nativeElement.height * ScaleDiff;
                        }
                        this.updateImage();
                    }
                };
                TheQuizImageComponent.prototype.updateImage = function () {
                    var ctx = this.context;
                    //ctx.clear();
                    ctx.save();
                    if (this.imageLoaded) {
                        if (this.mouseOnImage) {
                            ctx.scale(this.zoomFactor, this.zoomFactor);
                            //ctx.drawImage(this.myImage.nativeElement, -this.zoomPointX/this.zoomFactor, -this.zoomPointY/this.zoomFactor, 500, 500);
                            ctx.drawImage(this.myImage.nativeElement, -this.zoomPointX / 2, -this.zoomPointY / 2, this.canvasSizeX, this.canvasSizeY);
                        }
                        else {
                            ctx.drawImage(this.myImage.nativeElement, 0, 0, this.canvasSizeX, this.canvasSizeY);
                        }
                    }
                    ctx.restore();
                };
                TheQuizImageComponent.prototype.mouseMoveCanvas = function (event) {
                    var ctx = this.context;
                    var offLeft = ctx.canvas.offsetLeft;
                    var offTop = ctx.canvas.offsetTop;
                    // console.log("hehe1223", event);
                    this.zoomPointX = event.layerX - offLeft; //temp fix
                    this.zoomPointY = event.layerY - offTop;
                    // console.log(this.zoomPointX);
                    // console.log(this.zoomPointY);
                    this.updateImage();
                };
                TheQuizImageComponent.prototype.mouseLeaveCanvas = function (event) {
                    //console.log("bye");
                    this.mouseOnImage = false;
                    this.updateImage();
                };
                TheQuizImageComponent.prototype.mouseEnterCanvas = function (event) {
                    //console.log("welcome");
                    this.mouseOnImage = true;
                    this.updateImage();
                };
                __decorate([
                    core_1.ViewChild("myCanvas"), 
                    __metadata('design:type', Object)
                ], TheQuizImageComponent.prototype, "myCanvas", void 0);
                __decorate([
                    core_1.ViewChild("stretchBar"), 
                    __metadata('design:type', Object)
                ], TheQuizImageComponent.prototype, "stretchBar", void 0);
                __decorate([
                    core_1.ViewChild("myImage"), 
                    __metadata('design:type', Object)
                ], TheQuizImageComponent.prototype, "myImage", void 0);
                TheQuizImageComponent = __decorate([
                    core_1.Component({
                        selector: 'birdid-the-quiz-image',
                        templateUrl: 'app/the-quiz/the-quiz-image.component.html',
                        styleUrls: ['app/the-quiz/the-quiz-image.component.css'],
                        directives: [],
                        providers: [
                            http_1.HTTP_PROVIDERS
                        ],
                        inputs: ['specieQuestionObject'],
                    }), 
                    __metadata('design:paramtypes', [quiz_settings_service_1.QuizSettingsService, core_1.ElementRef])
                ], TheQuizImageComponent);
                return TheQuizImageComponent;
            }());
            exports_1("TheQuizImageComponent", TheQuizImageComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRoZS1xdWl6L3RoZS1xdWl6LWltYWdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQXFCQTtnQkFnQ0MsK0JBQ1Msb0JBQXlDLEVBQ3pDLFFBQW9CO29CQURwQix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXFCO29CQUN6QyxhQUFRLEdBQVIsUUFBUSxDQUFZO29CQWpDN0IsVUFBSyxHQUFHLCtCQUErQixDQUFDO29CQUV4QyxrQkFBYSxHQUFHLHVEQUF1RCxDQUFDO29CQUN4RSxrQkFBYSxHQUFHLEVBQUUsQ0FBQztvQkFLaEIsWUFBTyxHQUFHLENBQUMsQ0FBQztvQkFDZixhQUFRLEdBQUcsRUFBRSxDQUFDO29CQUNkLGVBQVUsR0FBRyxFQUFFLENBQUM7b0JBQ2hCLFdBQU0sR0FBRyxDQUFDLENBQUM7b0JBRVgsZUFBVSxHQUFHLENBQUMsQ0FBQztvQkFDZixlQUFVLEdBQUcsQ0FBQyxDQUFDO29CQUNmLGVBQVUsR0FBRyxDQUFDLENBQUM7b0JBRWYsZ0JBQVcsR0FBRyxHQUFHLENBQUM7b0JBQ2xCLGdCQUFXLEdBQUcsR0FBRyxDQUFDO29CQUVsQixjQUFTLEdBQVUsU0FBUyxDQUFDO29CQU03QixnQkFBVyxHQUFHLEtBQUssQ0FBQztvQkFDcEIsaUJBQVksR0FBRyxLQUFLLENBQUM7Z0JBTVUsQ0FBQztnQkFFaEMsd0NBQVEsR0FBUjtvQkFFQyxJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsZUFBZSxFQUFFLENBQUM7b0JBQy9ELElBQUksQ0FBQyxNQUFNLEdBQUcsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztvQkFLckMsSUFBSSxDQUFDLFdBQVcsR0FBRyxVQUFVLEdBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztnQkFFM0MsQ0FBQztnQkFFRCwyQ0FBVyxHQUFYO29CQUVDLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxl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R0FBRyxPQUFPLENBQUMsQ0FBQyxVQUFVO29CQUNwRCxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO29CQUV4QyxnQ0FBZ0M7b0JBQ2hDLGdDQUFnQztvQkFFaEMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO2dCQUdwQixDQUFDO2dCQUVELGdEQUFnQixHQUFoQixVQUFpQixLQUFLO29CQUVyQixxQkFBcUI7b0JBQ3JCLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO29CQUMxQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBR3BCLENBQUM7Z0JBRUQsZ0RBQWdCLEdBQWhCLFVBQWlCLEtBQUs7b0JBRXJCLHlCQUF5QjtvQkFDekIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7b0JBQ3pCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFHcEIsQ0FBQztnQkExTEM7b0JBQUMsZ0JBQVMsQ0FBQyxVQUFVLENBQUM7O3VFQUFBO2dCQUN4QjtvQkFBQyxnQkFBUyxDQUFDLFlBQVksQ0FBQzs7eUVBQUE7Z0JBQ3hCO29CQUFDLGdCQUFTLENBQUMsU0FBUyxDQUFDOztzRUFBQTtnQkF2Q3RCO29CQUFDLGdCQUFTLENBQUM7d0JBQ1YsUUFBUSxFQUFFLHVCQUF1Qjt3QkFDakMsV0FBVyxFQUFFLDRDQUE0Qzt3QkFDekQsU0FBUyxFQUFHLENBQUMsMkNBQTJDLENBQUM7d0JBQ3pELFVBQVUsRUFBRSxFQUVYO3dCQUNELFNBQVMsRUFBRTs0QkFDVCxxQkFBYzt5QkFDZjt3QkFDRCxNQUFNLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztxQkFDaEMsQ0FBQzs7eUNBQUE7Z0JBdU5GLDRCQUFDO1lBQUQsQ0FwTkEsQUFvTkMsSUFBQTtZQXBORCx5REFvTkMsQ0FBQSIsImZpbGUiOiJ0aGUtcXVpei90aGUtcXVpei1pbWFnZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgT25Jbml0LCBWaWV3Q2hpbGQsIEFmdGVyVmlld0luaXQsIEVsZW1lbnRSZWYsIE9uQ2hhbmdlcyB9ICAgICAgIGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwLCBIVFRQX1BST1ZJREVSUyB9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xyXG5cclxuaW1wb3J0IHsgUXVpelNldHRpbmdzU2VydmljZSB9ICBmcm9tICcuLy4uL3NoYXJlZC9xdWl6LXNldHRpbmdzLnNlcnZpY2UnO1xyXG5cclxuaW1wb3J0IHsgUXVpelF1ZXN0aW9uIH0gIGZyb20gJy4vLi4vc2hhcmVkLmNsYXNzL3RoZS1xdWl6LXF1ZXN0aW9uLmNsYXNzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiAnYmlyZGlkLXRoZS1xdWl6LWltYWdlJyxcclxuXHR0ZW1wbGF0ZVVybDogJ2FwcC90aGUtcXVpei90aGUtcXVpei1pbWFnZS5jb21wb25lbnQuaHRtbCcsXHJcblx0c3R5bGVVcmxzOiAgWydhcHAvdGhlLXF1aXovdGhlLXF1aXotaW1hZ2UuY29tcG9uZW50LmNzcyddLFxyXG5cdGRpcmVjdGl2ZXM6IFtcclxuXHJcblx0XSxcclxuXHRwcm92aWRlcnM6IFtcclxuXHQgIEhUVFBfUFJPVklERVJTXHJcblx0XSxcclxuXHRpbnB1dHM6IFsnc3BlY2llUXVlc3Rpb25PYmplY3QnXSwgLy91c2luZyBBTElBU1xyXG59KVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBUaGVRdWl6SW1hZ2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlc3tcclxuXHR0aXRsZSA9ICdCaXJkaWQgUXVpeiBUaGVRdWl6Q29tcG9uZW50ISc7XHJcblxyXG5cdGltYWdlVVJMU3RhcnQgPSBcImh0dHBzOi8vaGVtYnN0dWRpb3Mubm8vYmlyZGlkL0lEcHJvZ3JhbS9nZXRNZWRpYS5waHA/XCI7XHJcblx0aW1hZ2VVcmxQYXJtcyA9IFwiXCI7XHJcblx0ZXh0cmFTaXRlSUQ7XHJcblxyXG5cdHNwZWNpZVF1ZXN0aW9uT2JqZWN0OlF1aXpRdWVzdGlvbjtcclxuXHJcbiAgICBtZWRpYUlEID0gMDtcclxuXHRtZWRpYVVSTCA9IFwiXCI7XHJcblx0YWNjZXNzQ29kZSA9IFwiXCI7XHJcblx0c2l0ZUlEID0gNDtcclxuXHJcblx0em9vbUZhY3RvciA9IDI7XHJcblx0em9vbVBvaW50WCA9IDA7XHJcblx0em9vbVBvaW50WSA9IDA7XHJcblxyXG5cdGNhbnZhc1NpemVYID0gNzAwO1xyXG5cdGNhbnZhc1NpemVZID0gNzAwO1xyXG5cclxuXHRyZWN0Q29sb3I6c3RyaW5nID0gXCIjRkYwMDAwXCI7XHJcblx0Y29udGV4dDpDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XHJcbiAgXHRAVmlld0NoaWxkKFwibXlDYW52YXNcIikgbXlDYW52YXM7XHJcblx0QFZpZXdDaGlsZChcInN0cmV0Y2hCYXJcIikgc3RyZXRjaEJhcjtcclxuXHRAVmlld0NoaWxkKFwibXlJbWFnZVwiKSBteUltYWdlO1xyXG5cclxuXHRpbWFnZUxvYWRlZCA9IGZhbHNlO1xyXG5cdG1vdXNlT25JbWFnZSA9IGZhbHNlO1xyXG5cclxuXHRxdWl6U2V0dGluZ3M7XHJcblxyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSBfcXVpelNldHRpbmdzU2VydmljZTogUXVpelNldHRpbmdzU2VydmljZSxcclxuXHRcdHByaXZhdGUgX2VsZW1lbnQ6IEVsZW1lbnRSZWYpe31cclxuXHJcblx0bmdPbkluaXQoKSB7XHJcblxyXG5cdFx0bGV0IHF1aXpTZXR0aW5ncyA9IHRoaXMuX3F1aXpTZXR0aW5nc1NlcnZpY2UuZ2V0UXVpelNldHRpbmdzKCk7XHJcblx0XHR0aGlzLnNpdGVJRCA9IHF1aXpTZXR0aW5nc1swXS5zaXRlSUQ7XHJcblxyXG5cclxuXHJcblxyXG5cdFx0dGhpcy5leHRyYVNpdGVJRCA9IFwiJnNpdGVJRD1cIit0aGlzLnNpdGVJRDtcclxuXHJcblx0fVxyXG5cclxuXHRuZ09uQ2hhbmdlcygpe1xyXG5cclxuXHRcdGxldCBxdWl6U2V0dGluZ3MgPSB0aGlzLl9xdWl6U2V0dGluZ3NTZXJ2aWNlLmdldFF1aXpTZXR0aW5ncygpO1xyXG5cdFx0dGhpcy5zaXRlSUQgPSBxdWl6U2V0dGluZ3NbMF0uc2l0ZUlEO1xyXG5cclxuXHRcdHRoaXMubWVkaWFJRCA9IHRoaXMuc3BlY2llUXVlc3Rpb25PYmplY3QuZ2V0TWVkaWFJZHMoKVswXS5pZDtcclxuXHRcdHRoaXMubWVkaWFVUkwgPSB0aGlzLnNwZWNpZVF1ZXN0aW9uT2JqZWN0LmdldE1lZGlhU291cnNlcygpWzBdLm1lZGlhVXJsO1xyXG5cdFx0dGhpcy5zZXR1cEltYWdlVVJMKCk7XHJcblxyXG5cdH1cclxuXHJcblx0c2V0dXBJbWFnZVVSTCgpe1xyXG5cclxuXHRcdGxldCBxdWl6U2V0dGluZ3MgPSB0aGlzLl9xdWl6U2V0dGluZ3NTZXJ2aWNlLmdldFF1aXpTZXR0aW5ncygpO1xyXG5cdFx0bGV0IHNpdGVJRCA9IHF1aXpTZXR0aW5nc1swXS5zaXRlSUQ7XHJcblxyXG5cdFx0aWYodGhpcy5fcXVpelNldHRpbmdzU2VydmljZS5pc0JlZ2lubmVyUXVpeigpKXtcclxuXHJcblx0XHRcdHRoaXMuaW1hZ2VVUkxTdGFydCA9IFwiaHR0cHM6Ly9oZW1ic3R1ZGlvcy5uby9iaXJkaWQvXCI7XHJcblx0XHRcdGlmKHNpdGVJRCA9PSAxKXtcclxuXHRcdFx0XHR0aGlzLmltYWdlVVJMU3RhcnQgKz0gXCJiaXJkL2RiX21lZGlhL2JlZ2lubmVySW1hZ2UvXCI7XHJcblx0XHRcdH1lbHNlIGlmKHNpdGVJRCA9PSAyKXtcclxuXHRcdFx0XHR0aGlzLmltYWdlVVJMU3RhcnQgKz0gXCJtYW1tYWwvZGJfbWVkaWEvYmVnaW5uZXJJbWFnZS9cIjtcclxuXHRcdFx0fWVsc2UgaWYoc2l0ZUlEID09IDMpe1xyXG5cdFx0XHRcdHRoaXMuaW1hZ2VVUkxTdGFydCArPSBcInRyYWNrL2RiX21lZGlhL2JlZ2lubmVySW1hZ2UvXCI7XHJcblx0XHRcdH1cclxuXHRcdFx0dGhpcy5pbWFnZVVybFBhcm1zID0gdGhpcy5tZWRpYVVSTDtcclxuXHJcblx0XHR9ZWxzZSBpZihxdWl6U2V0dGluZ3NbMF0uZm9ybWFsVGVzdFF1aXope1xyXG5cclxuXHRcdFx0Ly9hbnl0aGluZyBidXQgYVxyXG5cdFx0XHR0aGlzLmFjY2Vzc0NvZGUgPSBxdWl6U2V0dGluZ3NbMF0uZm9ybWFsVGVzdEFjY2Vzc0NvZGU7XHJcblx0XHRcdC8vY29uc29sZS5sb2coXCIgcXVpelNldHRpbmdzWzBdOiBcIiwgIHF1aXpTZXR0aW5nc1swXSk7XHJcblx0XHRcdHRoaXMuaW1hZ2VVcmxQYXJtcyA9IFwiYWNjZXNzQ29kZT1cIit0aGlzLmFjY2Vzc0NvZGUrXCImbWVkaWFUb2tlbj1cIit0aGlzLm1lZGlhVVJMO1xyXG5cclxuXHRcdH1lbHNle1xyXG5cdFx0XHRcclxuXHRcdFx0dGhpcy5pbWFnZVVybFBhcm1zID0gXCJtZWRpYUlEPVwiK3RoaXMubWVkaWFJRCtcIiZzaXRlSUQ9XCIrdGhpcy5zaXRlSUQ7XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9XHJcblxyXG5cdG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuXHJcblx0XHQvL2NvbnNvbGUubG9nKFwiaGFsbG9cIik7XHJcblx0XHRsZXQgY2FudmFzID0gdGhpcy5teUNhbnZhcy5uYXRpdmVFbGVtZW50O1xyXG4gICAgXHR0aGlzLmNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpXHJcblxyXG5cdFx0dmFyIGN0eCA9IHRoaXMuY29udGV4dDtcclxuXHJcblxyXG5cdFx0Ly9jb25zb2xlLmxvZyhcInRoaXMubXlJbWFnZTogXCIsIHRoaXMubXlJbWFnZS5uYXRpdmVFbGVtZW50KTtcclxuXHRcdC8vY3R4LmRyYXdJbWFnZSh0aGlzLm15SW1hZ2UubmF0aXZlRWxlbWVudCwgMTAsIDEwKTtcclxuXHJcblxyXG5cclxuXHRcdHRoaXMubXlJbWFnZS5uYXRpdmVFbGVtZW50Lm9ubG9hZCA9ICgpID0+IHtcclxuXHRcdFx0dGhpcy5pbWFnZUxvYWRlZCA9IHRydWU7XHJcblxyXG5cdFx0XHR0aGlzLnJlc2l6ZUltYWdlQ2FudmFzKCk7XHJcblxyXG5cdFx0fTtcclxuXHJcblx0fVxyXG5cclxuXHRyZXNpemVJbWFnZUNhbnZhcygpe1xyXG5cclxuXHRcdGlmKHRoaXMuaW1hZ2VMb2FkZWQpe1xyXG5cclxuXHRcdFx0dGhpcy5teUNhbnZhcy5uYXRpdmVFbGVtZW50LndpZHRoID0gdGhpcy5teUltYWdlLm5hdGl2ZUVsZW1lbnQud2lkdGg7XHJcblx0XHRcdHRoaXMubXlDYW52YXMubmF0aXZlRWxlbWVudC5oZWlnaHQgPSB0aGlzLm15SW1hZ2UubmF0aXZlRWxlbWVudC5oZWlnaHQ7XHJcblx0XHRcdHRoaXMuY2FudmFzU2l6ZVggPSB0aGlzLm15SW1hZ2UubmF0aXZlRWxlbWVudC53aWR0aDtcclxuXHRcdFx0dGhpcy5jYW52YXNTaXplWSA9IHRoaXMubXlJbWFnZS5uYXRpdmVFbGVtZW50LmhlaWdodDtcclxuXHJcblx0XHRcdGxldCBzdHJldGNTaXplWCA9IHRoaXMuc3RyZXRjaEJhci5uYXRpdmVFbGVtZW50LmNsaWVudFdpZHRoO1xyXG5cdFx0XHQvL2NvbnNvbGUubG9nKFwidGhpcy5jYW52YXNTaXplWCA+IHN0cmV0Y1NpemVYPjogXCIsIHRoaXMuY2FudmFzU2l6ZVgsIFwifFwiLCBzdHJldGNTaXplWCk7XHJcblx0XHRcdGlmKHRoaXMuY2FudmFzU2l6ZVggPiBzdHJldGNTaXplWCl7XHJcblxyXG5cdFx0XHRcdGxldCBTY2FsZURpZmYgPSBzdHJldGNTaXplWCAvIHRoaXMuY2FudmFzU2l6ZVg7XHJcblxyXG5cdFx0XHRcdC8vY29uc29sZS5sb2coXCJ5ZWFoOlwiLCBTY2FsZURpZmYpO1xyXG5cclxuXHRcdFx0XHR0aGlzLm15Q2FudmFzLm5hdGl2ZUVsZW1lbnQud2lkdGggPSB0aGlzLm15SW1hZ2UubmF0aXZlRWxlbWVudC53aWR0aCAqIFNjYWxlRGlmZjtcclxuXHRcdFx0XHR0aGlzLm15Q2FudmFzLm5hdGl2ZUVsZW1lbnQuaGVpZ2h0ID0gdGhpcy5teUltYWdlLm5hdGl2ZUVsZW1lbnQuaGVpZ2h0ICogU2NhbGVEaWZmO1xyXG5cdFx0XHRcdHRoaXMuY2FudmFzU2l6ZVggPSB0aGlzLm15SW1hZ2UubmF0aXZlRWxlbWVudC53aWR0aCAqIFNjYWxlRGlmZjtcclxuXHRcdFx0XHR0aGlzLmNhbnZhc1NpemVZID0gdGhpcy5teUltYWdlLm5hdGl2ZUVsZW1lbnQuaGVpZ2h0ICogU2NhbGVEaWZmO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dGhpcy51cGRhdGVJbWFnZSgpO1xyXG5cclxuXHRcdH1cclxuXHJcblx0fVxyXG5cclxuXHR1cGRhdGVJbWFnZSgpe1xyXG5cclxuXHRcdHZhciBjdHggPSB0aGlzLmNvbnRleHQ7XHJcblxyXG5cdFx0Ly9jdHguY2xlYXIoKTtcclxuICAgIFx0Y3R4LnNhdmUoKTtcclxuXHJcblxyXG5cdFx0aWYodGhpcy5pbWFnZUxvYWRlZCl7XHJcblxyXG5cclxuXHJcblx0XHRcdGlmKHRoaXMubW91c2VPbkltYWdlKXtcclxuXHRcdFx0XHRjdHguc2NhbGUodGhpcy56b29tRmFjdG9yLCB0aGlzLnpvb21GYWN0b3IpO1xyXG5cdFx0XHRcdC8vY3R4LmRyYXdJbWFnZSh0aGlzLm15SW1hZ2UubmF0aXZlRWxlbWVudCwgLXRoaXMuem9vbVBvaW50WC90aGlzLnpvb21GYWN0b3IsIC10aGlzLnpvb21Qb2ludFkvdGhpcy56b29tRmFjdG9yLCA1MDAsIDUwMCk7XHJcblx0XHRcdFx0Y3R4LmRyYXdJbWFnZSh0aGlzLm15SW1hZ2UubmF0aXZlRWxlbWVudCwgLXRoaXMuem9vbVBvaW50WC8yLCAtdGhpcy56b29tUG9pbnRZLzIsIHRoaXMuY2FudmFzU2l6ZVgsIHRoaXMuY2FudmFzU2l6ZVkpO1xyXG5cdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRjdHguZHJhd0ltYWdlKHRoaXMubXlJbWFnZS5uYXRpdmVFbGVtZW50LCAwLCAwLCB0aGlzLmNhbnZhc1NpemVYLCB0aGlzLmNhbnZhc1NpemVZKTtcclxuXHRcdFx0fVxyXG5cclxuXHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdGN0eC5yZXN0b3JlKCk7XHJcblxyXG5cclxuXHR9XHJcblxyXG5cdG1vdXNlTW92ZUNhbnZhcyhldmVudCl7XHJcblxyXG5cdFx0dmFyIGN0eCA9IHRoaXMuY29udGV4dDtcclxuXHJcblx0XHRsZXQgb2ZmTGVmdCA9IGN0eC5jYW52YXMub2Zmc2V0TGVmdDtcclxuXHRcdGxldCBvZmZUb3AgPSBjdHguY2FudmFzLm9mZnNldFRvcDtcclxuXHJcblxyXG5cdFx0Ly8gY29uc29sZS5sb2coXCJoZWhlMTIyM1wiLCBldmVudCk7XHJcblx0XHR0aGlzLnpvb21Qb2ludFggPSBldmVudC5sYXllclggLSBvZmZMZWZ0OyAvL3RlbXAgZml4XHJcblx0XHR0aGlzLnpvb21Qb2ludFkgPSBldmVudC5sYXllclkgLSBvZmZUb3A7XHJcblxyXG5cdFx0Ly8gY29uc29sZS5sb2codGhpcy56b29tUG9pbnRYKTtcclxuXHRcdC8vIGNvbnNvbGUubG9nKHRoaXMuem9vbVBvaW50WSk7XHJcblxyXG5cdFx0dGhpcy51cGRhdGVJbWFnZSgpO1xyXG5cclxuXHJcblx0fVxyXG5cclxuXHRtb3VzZUxlYXZlQ2FudmFzKGV2ZW50KXtcclxuXHJcblx0XHQvL2NvbnNvbGUubG9nKFwiYnllXCIpO1xyXG5cdFx0dGhpcy5tb3VzZU9uSW1hZ2UgPSBmYWxzZTtcclxuXHRcdHRoaXMudXBkYXRlSW1hZ2UoKTtcclxuXHJcblxyXG5cdH1cclxuXHJcblx0bW91c2VFbnRlckNhbnZhcyhldmVudCl7XHJcblxyXG5cdFx0Ly9jb25zb2xlLmxvZyhcIndlbGNvbWVcIik7XHJcblx0XHR0aGlzLm1vdXNlT25JbWFnZSA9IHRydWU7XHJcblx0XHR0aGlzLnVwZGF0ZUltYWdlKCk7XHJcblxyXG5cclxuXHR9XHJcblxyXG5cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
