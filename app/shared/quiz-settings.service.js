System.register(['angular2/core', 'angular2/http', 'rxjs/Rx', './../constants'], function(exports_1, context_1) {
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
    var core_1, http_1, constants_1;
    var QuizSettingsService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (constants_1_1) {
                constants_1 = constants_1_1;
            }],
        execute: function() {
            QuizSettingsService = (function () {
                function QuizSettingsService(_http) {
                    this._http = _http;
                    this.mediaType = 0; //image, sound, video
                    this.allowedMediaTypes = [1, 2];
                    this.quizType = 0; // 1 = normal, 2 = several soundquiz, 3 = formal test?
                    this.allowedQuizTypes = [1, 2, 3];
                    this.severalSoundQuiz = false;
                    this.beginnerQuiz = false;
                    this.formalTestQuiz = false;
                    this.formalTestAccessCode = "";
                    this.mediaDifficulities = 0;
                    //	allowedMediaDifficulities = [1,2,3,4]; for now we do not check
                    this.numberOfQuestions = 0;
                    // allowedNumberOfQuestions = [10, 30, 60];// for now we do not check
                    this.duration = 0;
                    this.siteID = 1;
                    this.lastError = "";
                    this.areaListLoaded = false;
                    this.areaLoadProblems = false;
                    this.selectedArea = 0;
                    this.help = false;
                    this.competitionGroupID = -1;
                    this.langID = 2;
                    this.dataLoadedEventEmiter = new core_1.EventEmitter();
                    this.laguageChangedEE = new core_1.EventEmitter();
                } // why do we need this
                QuizSettingsService.prototype.initialize = function (siteID, langID) {
                    var _this = this;
                    this.siteID = siteID;
                    this.setLanguageID(langID);
                    //setup default
                    this.setMediaType(1);
                    this.setNormalQuiz();
                    //this.setSeveralSoundquiz();
                    this.setMediaDiff(1);
                    this.selectNumberOfQuestions(5); //min 5
                    this.setDuration(0);
                    this.setAlternatives(true);
                    this.setArea(0);
                    this.setCompetitionGroupID(-1);
                    //this.setBeginnerQuiz();
                    setTimeout(function () {
                        _this.loadAreaList();
                    }, 0);
                    return this.dataLoadedEventEmiter;
                };
                QuizSettingsService.prototype.getLanguageChnageEvent = function () {
                    return this.laguageChangedEE;
                };
                QuizSettingsService.prototype.getLanguageID = function () {
                    return this.langID;
                };
                QuizSettingsService.prototype.setLanguageID = function (langID, reload) {
                    if (reload === void 0) { reload = false; }
                    this.langID = langID;
                    if (reload) {
                        this.laguageChangedEE.emit(true);
                    }
                };
                QuizSettingsService.prototype.setNormalQuiz = function () {
                    this.severalSoundQuiz = false;
                    this.formalTestQuiz = false;
                    this.beginnerQuiz = false;
                };
                QuizSettingsService.prototype.setSeveralSoundquiz = function () {
                    this.setAlternatives(true);
                    this.setMediaType(2);
                    this.severalSoundQuiz = true;
                };
                QuizSettingsService.prototype.setFormalTest = function () {
                    this.setAlternatives(false);
                    this.formalTestQuiz = true;
                };
                QuizSettingsService.prototype.setFormalTestAccessCode = function (code) {
                    this.formalTestAccessCode = code;
                };
                QuizSettingsService.prototype.setBeginnerQuiz = function () {
                    this.setMediaType(1);
                    this.setMediaDiff(1);
                    this.selectNumberOfQuestions(5); //min 5
                    this.setDuration(0);
                    this.setAlternatives(true);
                    this.setCompetitionGroupID(-1);
                    this.beginnerQuiz = true;
                };
                QuizSettingsService.prototype.isBeginnerQuiz = function () {
                    return this.beginnerQuiz;
                };
                QuizSettingsService.prototype.isNormalQuiz = function () {
                    return (!this.severalSoundQuiz && !this.formalTestQuiz && !this.beginnerQuiz);
                };
                QuizSettingsService.prototype.isSeveralSoundQuiz = function () {
                    return this.severalSoundQuiz;
                };
                QuizSettingsService.prototype.isFormalTestQuiz = function () {
                    return this.formalTestQuiz;
                };
                QuizSettingsService.prototype.setErrorMessage = function (error) {
                    this.lastError = error;
                };
                QuizSettingsService.prototype.getLastErrorMessage = function () {
                    return this.lastError;
                };
                QuizSettingsService.prototype.getMediaNameFromID = function (mediaID) {
                    if (mediaID == 1) {
                        return 'Image';
                    }
                    else if (mediaID == 2) {
                        return 'Sound';
                    }
                    else if (mediaID == 3) {
                        return 'Video';
                    }
                    else {
                        return "Unknown: " + mediaID;
                    }
                };
                QuizSettingsService.prototype.getUserFriendlyBools = function (bool) {
                    if (bool) {
                        return 'Yes';
                    }
                    else if (!bool) {
                        return 'No';
                    }
                    else {
                        return "Unknown: " + bool;
                    }
                };
                QuizSettingsService.prototype.getSiteID = function () {
                    return this.siteID;
                };
                QuizSettingsService.prototype.loadAreaList = function () {
                    var _this = this;
                    this._http.get(constants_1.constants.baseURL + "/getTranslationsAndData.php?JSON=1&langID=2&siteID=" + this.siteID)
                        .map(function (response) { return response.json(); }).subscribe(// this is getting the translation PLUS the areas
                    function (// this is getting the translation PLUS the areas
                        data) {
                        _this.areaListData = data['area_list'];
                        //	console.log("this.areaListData: ", this.areaListData);
                        _this.areaListLoaded = true;
                        _this.dataLoadedEventEmiter.emit(true);
                    }, function (error) {
                        _this.areaLoadProblems = true;
                        _this.dataLoadedEventEmiter.emit(false);
                        console.error("loadAreaList ERROR! ", error);
                    });
                };
                QuizSettingsService.prototype.dataLoaded = function () {
                    return this.areaListLoaded;
                };
                QuizSettingsService.prototype.dataLoadProblems = function () {
                    return this.areaLoadProblems;
                };
                QuizSettingsService.prototype.getAreaList = function () {
                    return this.areaListData;
                };
                QuizSettingsService.prototype.getCurrentAreaName = function () {
                    //	console.log("this.areaListData: ", this.areaListData);
                    var tempID = this.selectedArea;
                    var currentAreaName = this.areaListData.find(function (element, index, array) {
                        //	console.log("current", element['id'], " tempID: ", tempID);
                        if (element['id'] == tempID) {
                            return true;
                        }
                    });
                    //console.log("BKJHGHJGJHGHGJ",countryData.country);
                    return currentAreaName.country;
                };
                QuizSettingsService.prototype.getAreaNameByID = function (id) {
                    //	console.log("this.areaListData: ", this.areaListData);
                    var tempID = id;
                    var currentAreaName = this.areaListData.find(function (element, index, array) {
                        //	console.log("current", element['id'], " tempID: ", tempID);
                        if (element['id'] == tempID) {
                            return true;
                        }
                    });
                    //console.log("BKJHGHJGJHGHGJ",countryData.country);
                    return currentAreaName.country;
                };
                QuizSettingsService.prototype.getQuizSettings = function () {
                    //	let timer = Observable.timer(2000, 1000 );
                    //	timer.subscribe(t => this.tickerFunc(t));
                    var returnSettings = [
                        { "mediaTypeID": this.mediaType,
                            "severalSoundQuiz": this.isSeveralSoundQuiz(),
                            "beginnerQuiz": this.isBeginnerQuiz(),
                            "formalTestQuiz": this.isFormalTestQuiz(),
                            "areaID": this.selectedArea,
                            "timeLimit": this.duration,
                            "numQuestions": this.numberOfQuestions,
                            "showAlternatives": this.alternative,
                            "mediaDificulity": this.mediaDifficulities,
                            "formalTestAccessCode": this.formalTestAccessCode,
                            "competitionGroupID": this.competitionGroupID,
                            "siteID": this.siteID,
                            "langID": this.langID }
                    ];
                    //console.log("returnSettings: ", returnSettings)
                    return returnSettings;
                };
                QuizSettingsService.prototype.setArea = function (selectedArea) {
                    //	console.log("the selected area is", selectedArea);
                    if (selectedArea == undefined || selectedArea == null) {
                        this.selectedArea = 2;
                    }
                    else {
                        this.selectedArea = selectedArea;
                    }
                };
                QuizSettingsService.prototype.tickerFunc = function (duration) {
                    console.log(this);
                    this.duration = duration;
                };
                QuizSettingsService.prototype.setDuration = function (duration) {
                    //  console.log(duration);
                    this.duration = duration;
                };
                QuizSettingsService.prototype.getDuration = function () {
                    return this.duration;
                };
                QuizSettingsService.prototype.setAlternatives = function (selectedAlternative) {
                    this.alternative = selectedAlternative;
                    //	console.log(this.alternative);
                    //this.alternatives=alternatives;
                };
                QuizSettingsService.prototype.getAlternative = function () {
                    return this.alternative;
                };
                QuizSettingsService.prototype.getAlternativeUserFriendly = function () {
                    if (this.alternative === true) {
                        return "Yes";
                    }
                    else {
                        return "No";
                    }
                };
                QuizSettingsService.prototype.setMediaType = function (mediaType) {
                    if (this.allowedMediaTypes.indexOf(mediaType) > -1) {
                        this.mediaType = mediaType;
                        return true;
                    }
                    else {
                        return false;
                    }
                };
                QuizSettingsService.prototype.getMediaTypeUserFriendly = function () {
                    if (this.mediaType == 1) {
                        return 'Picture exercise';
                    }
                    if (this.mediaType == 2 || this.severalSoundQuiz == false) {
                        return 'Sound exercise';
                    }
                    if (this.mediaType == 2 || this.severalSoundQuiz == true) {
                        return 'Several singing birds';
                    }
                    if (this.mediaType == 3) {
                        return 'Video quiz';
                    }
                    if (this.formalTestQuiz == true) {
                        return 'Formal quiz';
                    }
                };
                /*setMediaDiff(mediaDiff:number){
                    if(this.allowedMediaDifficulities.indexOf(mediaDiff) > -1){
                        this.mediaDifficulities = mediaDiff;
                        return true;
                    }else{
            
                        return false;
            
                    }
                }*/
                QuizSettingsService.prototype.setMediaDiff = function (selectedDiff) {
                    //  console.log(selectedDiff)
                    this.mediaDifficulities = selectedDiff;
                };
                QuizSettingsService.prototype.getMediaDiff = function () {
                    return this.mediaDifficulities;
                };
                QuizSettingsService.prototype.selectNumberOfQuestions = function (selectedNumberOfQuestions) {
                    /*if(this.allowedNumberOfQuestions.valueOf()){
                        this.numberOfQuestions = numberOfQuestions;
                        return true;
            
                    }else {
                        return false;
                    }*/
                    //console.log(selectedNumberOfQuestions)
                    this.numberOfQuestions = selectedNumberOfQuestions;
                };
                QuizSettingsService.prototype.getNumberOfQuestions = function () {
                    return this.numberOfQuestions;
                };
                QuizSettingsService.prototype.setHelp = function (wantHelp) {
                    this.help = wantHelp;
                };
                QuizSettingsService.prototype.isUsingHelp = function () {
                    return this.help;
                };
                QuizSettingsService.prototype.setCompetitionGroupID = function (selectedID) {
                    this.competitionGroupID = selectedID;
                    //console.log("the group id that is set issssssss ", this.competitionGroupID);
                };
                QuizSettingsService.prototype.getCompetitionGroupID = function () {
                    return this.competitionGroupID;
                };
                QuizSettingsService.prototype.getCompetitionGroupIDUserFriendly = function () {
                    if (this.competitionGroupID !== -1) {
                        return this.competitionGroupID;
                    }
                };
                QuizSettingsService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], QuizSettingsService);
                return QuizSettingsService;
            }());
            exports_1("QuizSettingsService", QuizSettingsService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9xdWl6LXNldHRpbmdzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBYUE7Z0JBdUNDLDZCQUFvQixLQUFXO29CQUFYLFVBQUssR0FBTCxLQUFLLENBQU07b0JBckMvQixjQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUMscUJBQXFCO29CQUNwQyxzQkFBaUIsR0FBRyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQztvQkFDMUIsYUFBUSxHQUFHLENBQUMsQ0FBQyxDQUFDLHNEQUFzRDtvQkFDcEUscUJBQWdCLEdBQUcsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO29CQUMzQixxQkFBZ0IsR0FBRyxLQUFLLENBQUM7b0JBQ3pCLGlCQUFZLEdBQUcsS0FBSyxDQUFDO29CQUNyQixtQkFBYyxHQUFHLEtBQUssQ0FBQztvQkFDdkIseUJBQW9CLEdBQUcsRUFBRSxDQUFDO29CQUUxQix1QkFBa0IsR0FBRyxDQUFDLENBQUM7b0JBQ3hCLGlFQUFpRTtvQkFFN0Qsc0JBQWlCLEdBQUcsQ0FBQyxDQUFDO29CQUN2QixxRUFBcUU7b0JBRXBFLGFBQVEsR0FBQyxDQUFDLENBQUM7b0JBR2QsV0FBTSxHQUFHLENBQUMsQ0FBQztvQkFFWCxjQUFTLEdBQUcsRUFBRSxDQUFBO29CQUVkLG1CQUFjLEdBQUcsS0FBSyxDQUFDO29CQUN2QixxQkFBZ0IsR0FBRyxLQUFLLENBQUM7b0JBRXpCLGlCQUFZLEdBQUcsQ0FBQyxDQUFDO29CQUVqQixTQUFJLEdBQUcsS0FBSyxDQUFDO29CQUViLHVCQUFrQixHQUFDLENBQUMsQ0FBQyxDQUFDO29CQUV0QixXQUFNLEdBQUcsQ0FBQyxDQUFDO29CQUdYLDBCQUFxQixHQUFHLElBQUksbUJBQVksRUFBVyxDQUFDO29CQUNwRCxxQkFBZ0IsR0FBRyxJQUFJLG1CQUFZLEVBQVcsQ0FBQztnQkFFZCxDQUFDLENBQUMsc0JBQXNCO2dC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QUFvQixHQUFwQjtvQkFDQyxNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFBO2dCQUM5QixDQUFDO2dCQUVELHFDQUFPLEdBQVAsVUFBUSxRQUFpQjtvQkFDeEIsSUFBSSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUM7Z0JBQ3RCLENBQUM7Z0JBQ0QseUNBQVcsR0FBWDtvQkFDQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztnQkFDbEIsQ0FBQztnQkFFRCxtREFBcUIsR0FBckIsVUFBc0IsVUFBaUI7b0JBQ3RDLElBQUksQ0FBQyxrQkFBa0IsR0FBQyxVQUFVLENBQUM7b0JBQ25DLDhFQUE4RTtnQkFDL0UsQ0FBQztnQkFFRCxtREFBcUIsR0FBckI7b0JBQ0MsTUFBTSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztnQkFDaEMsQ0FBQztnQkFFRCwrREFBaUMsR0FBakM7b0JBQ0MsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLGtCQUFrQixLQUFHLENBQUMsQ0FBQyxDQUFDLENBQUEsQ0FBQzt3QkFDaEMsTUFBTSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztvQkFDaEMsQ0FBQztnQkFDRixDQUFDO2dCQXZZRjtvQkFBQyxpQkFBVSxFQUFFOzt1Q0FBQTtnQkF5WWIsMEJBQUM7WUFBRCxDQXhZQSxBQXdZQyxJQUFBO1lBeFlELHFEQXdZQyxDQUFBIiwiZmlsZSI6InNoYXJlZC9xdWl6LXNldHRpbmdzLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBFdmVudEVtaXR0ZXIgfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHsgSHR0cCB9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xyXG5pbXBvcnQgJ3J4anMvUngnO1xyXG4vL2ltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMvUngnO1xyXG4vLyBpbXBvcnQgeyBxdWl6UXVlc3Rpb25zIH0gZnJvbSAnLi9tb2NrLXF1aXpRdWVzdGlvbic7XHJcbi8vIGltcG9ydCB7IFF1aXpRdWVzdGlvbiB9IGZyb20gJy4vcXVpelF1ZXN0aW9uJztcclxuXHJcbmltcG9ydCB7IFF1aXpTZXR0aW5nIH0gIGZyb20gJy4vLi4vc2hhcmVkL3F1aXouc2V0dGluZ3MuaW50ZXJmYWNlLnRzJztcclxuXHJcbmltcG9ydCB7Y29uc3RhbnRzfSBmcm9tICcuLy4uL2NvbnN0YW50cyc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBRdWl6U2V0dGluZ3NTZXJ2aWNle1xyXG5cclxuXHRtZWRpYVR5cGUgPSAwOyAvL2ltYWdlLCBzb3VuZCwgdmlkZW9cclxuXHRhbGxvd2VkTWVkaWFUeXBlcyA9IFsxLDJdO1xyXG5cdHF1aXpUeXBlID0gMDsgLy8gMSA9IG5vcm1hbCwgMiA9IHNldmVyYWwgc291bmRxdWl6LCAzID0gZm9ybWFsIHRlc3Q/XHJcblx0YWxsb3dlZFF1aXpUeXBlcyA9IFsxLDIsM107XHJcblx0c2V2ZXJhbFNvdW5kUXVpeiA9IGZhbHNlO1xyXG5cdGJlZ2lubmVyUXVpeiA9IGZhbHNlO1xyXG5cdGZvcm1hbFRlc3RRdWl6ID0gZmFsc2U7XHJcblx0Zm9ybWFsVGVzdEFjY2Vzc0NvZGUgPSBcIlwiO1xyXG5cclxuXHRtZWRpYURpZmZpY3VsaXRpZXMgPSAwO1xyXG4vL1x0YWxsb3dlZE1lZGlhRGlmZmljdWxpdGllcyA9IFsxLDIsMyw0XTsgZm9yIG5vdyB3ZSBkbyBub3QgY2hlY2tcclxuXHJcbiAgICBudW1iZXJPZlF1ZXN0aW9ucyA9IDA7XHJcbiAgIC8vIGFsbG93ZWROdW1iZXJPZlF1ZXN0aW9ucyA9IFsxMCwgMzAsIDYwXTsvLyBmb3Igbm93IHdlIGRvIG5vdCBjaGVja1xyXG5cclxuICAgIGR1cmF0aW9uPTA7XHJcbiAgICBhbHRlcm5hdGl2ZTogYm9vbGVhbjtcclxuXHJcblx0c2l0ZUlEID0gMTtcclxuXHJcblx0bGFzdEVycm9yID0gXCJcIlxyXG5cclxuXHRhcmVhTGlzdExvYWRlZCA9IGZhbHNlO1xyXG5cdGFyZWFMb2FkUHJvYmxlbXMgPSBmYWxzZTtcclxuXHRhcmVhTGlzdERhdGE7XHJcblx0c2VsZWN0ZWRBcmVhID0gMDtcclxuXHJcblx0aGVscCA9IGZhbHNlO1xyXG5cclxuXHRjb21wZXRpdGlvbkdyb3VwSUQ9LTE7XHJcblxyXG5cdGxhbmdJRCA9IDI7XHJcblxyXG5cclxuXHRkYXRhTG9hZGVkRXZlbnRFbWl0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcblx0bGFndWFnZUNoYW5nZWRFRSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuXHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cDogSHR0cCl7fSAvLyB3aHkgZG8gd2UgbmVlZCB0aGlzXHJcblxyXG5cclxuXHJcblx0aW5pdGlhbGl6ZShzaXRlSUQsIGxhbmdJRCl7XHJcblxyXG5cdFx0dGhpcy5zaXRlSUQgPSBzaXRlSUQ7XHJcblx0XHR0aGlzLnNldExhbmd1YWdlSUQobGFuZ0lEKTtcclxuXHJcblx0XHQvL3NldHVwIGRlZmF1bHRcclxuXHRcdHRoaXMuc2V0TWVkaWFUeXBlKDEpO1xyXG5cdFx0dGhpcy5zZXROb3JtYWxRdWl6KCk7XHJcblx0XHQvL3RoaXMuc2V0U2V2ZXJhbFNvdW5kcXVpeigpO1xyXG5cdFx0dGhpcy5zZXRNZWRpYURpZmYoMSk7XHJcblx0XHR0aGlzLnNlbGVjdE51bWJlck9mUXVlc3Rpb25zKDUpOyAvL21pbiA1XHJcblx0XHR0aGlzLnNldER1cmF0aW9uKDApO1xyXG5cdFx0dGhpcy5zZXRBbHRlcm5hdGl2ZXModHJ1ZSk7XHJcblx0XHR0aGlzLnNldEFyZWEoMCk7XHJcblx0XHR0aGlzLnNldENvbXBldGl0aW9uR3JvdXBJRCgtMSk7XHJcblxyXG5cdFx0Ly90aGlzLnNldEJlZ2lubmVyUXVpeigpO1xyXG5cclxuXHJcblxyXG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdHRoaXMubG9hZEFyZWFMaXN0KCk7XHJcblx0XHR9LCAwKTtcclxuXHJcblx0XHRyZXR1cm4gdGhpcy5kYXRhTG9hZGVkRXZlbnRFbWl0ZXI7XHJcblxyXG5cdH1cclxuXHJcblx0Z2V0TGFuZ3VhZ2VDaG5hZ2VFdmVudCgpe1xyXG5cdFx0cmV0dXJuIHRoaXMubGFndWFnZUNoYW5nZWRFRTtcclxuXHR9XHJcblx0Z2V0TGFuZ3VhZ2VJRCgpe1xyXG5cdFx0cmV0dXJuIHRoaXMubGFuZ0lEO1xyXG5cdH1cclxuXHRzZXRMYW5ndWFnZUlEKGxhbmdJRCwgcmVsb2FkID0gZmFsc2Upe1xyXG5cdFx0dGhpcy5sYW5nSUQgPSBsYW5nSUQ7XHJcblx0XHRpZihyZWxvYWQpe1xyXG5cdFx0XHR0aGlzLmxhZ3VhZ2VDaGFuZ2VkRUUuZW1pdCh0cnVlKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHNldE5vcm1hbFF1aXooKXtcclxuXHRcdHRoaXMuc2V2ZXJhbFNvdW5kUXVpeiA9IGZhbHNlO1xyXG5cdFx0dGhpcy5mb3JtYWxUZXN0UXVpeiA9IGZhbHNlO1xyXG5cdFx0dGhpcy5iZWdpbm5lclF1aXogPSBmYWxzZTtcclxuXHR9XHJcblx0c2V0U2V2ZXJhbFNvdW5kcXVpeigpe1xyXG5cdFx0dGhpcy5zZXRBbHRlcm5hdGl2ZXModHJ1ZSk7XHJcblx0XHR0aGlzLnNldE1lZGlhVHlwZSgyKTtcclxuXHRcdHRoaXMuc2V2ZXJhbFNvdW5kUXVpeiA9IHRydWU7XHJcblx0fVxyXG5cdHNldEZvcm1hbFRlc3QoKXtcclxuXHRcdHRoaXMuc2V0QWx0ZXJuYXRpdmVzKGZhbHNlKTtcclxuXHRcdHRoaXMuZm9ybWFsVGVzdFF1aXogPSB0cnVlO1xyXG5cdH1cclxuXHRzZXRGb3JtYWxUZXN0QWNjZXNzQ29kZShjb2RlOnN0cmluZyl7XHJcblx0XHR0aGlzLmZvcm1hbFRlc3RBY2Nlc3NDb2RlID0gY29kZTtcclxuXHR9XHJcblx0c2V0QmVnaW5uZXJRdWl6KCl7XHJcblxyXG5cdFx0dGhpcy5zZXRNZWRpYVR5cGUoMSk7XHJcblx0XHR0aGlzLnNldE1lZGlhRGlmZigxKTtcclxuXHRcdHRoaXMuc2VsZWN0TnVtYmVyT2ZRdWVzdGlvbnMoNSk7IC8vbWluIDVcclxuXHRcdHRoaXMuc2V0RHVyYXRpb24oMCk7XHJcblx0XHR0aGlzLnNldEFsdGVybmF0aXZlcyh0cnVlKTtcclxuXHRcdHRoaXMuc2V0Q29tcGV0aXRpb25Hcm91cElEKC0xKTtcclxuXHRcdHRoaXMuYmVnaW5uZXJRdWl6ID0gdHJ1ZTtcclxuXHJcblx0fVxyXG5cdGlzQmVnaW5uZXJRdWl6KCl7XHJcblx0XHRyZXR1cm4gdGhpcy5iZWdpbm5lclF1aXpcclxuXHR9XHJcblxyXG5cdGlzTm9ybWFsUXVpeigpe1xyXG5cdFx0cmV0dXJuICghdGhpcy5zZXZlcmFsU291bmRRdWl6ICYmICF0aGlzLmZvcm1hbFRlc3RRdWl6ICYmICF0aGlzLmJlZ2lubmVyUXVpeik7XHJcblx0fVxyXG5cdGlzU2V2ZXJhbFNvdW5kUXVpeigpe1xyXG5cdFx0cmV0dXJuIHRoaXMuc2V2ZXJhbFNvdW5kUXVpejtcclxuXHR9XHJcblx0aXNGb3JtYWxUZXN0UXVpeigpe1xyXG5cdFx0cmV0dXJuIHRoaXMuZm9ybWFsVGVzdFF1aXo7XHJcblx0fVxyXG5cclxuXHJcblx0c2V0RXJyb3JNZXNzYWdlKGVycm9yKXtcclxuXHRcdHRoaXMubGFzdEVycm9yID0gZXJyb3I7XHJcblx0fVxyXG5cdGdldExhc3RFcnJvck1lc3NhZ2UoKXtcclxuXHRcdHJldHVybiB0aGlzLmxhc3RFcnJvcjtcclxuXHR9XHJcblxyXG5cdGdldE1lZGlhTmFtZUZyb21JRChtZWRpYUlEKTpzdHJpbmd7XHJcblx0XHRpZihtZWRpYUlEID09IDEpe1xyXG5cdFx0XHRyZXR1cm4gJ0ltYWdlJztcclxuXHRcdH1lbHNlIGlmKG1lZGlhSUQgPT0gMil7XHJcblx0XHRcdHJldHVybiAnU291bmQnO1xyXG5cdFx0fWVsc2UgaWYobWVkaWFJRCA9PSAzKXtcclxuXHRcdFx0cmV0dXJuICdWaWRlbyc7XHJcblx0XHR9ZWxzZXtcclxuXHRcdFx0cmV0dXJuIFwiVW5rbm93bjogXCIrbWVkaWFJRDtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGdldFVzZXJGcmllbmRseUJvb2xzKGJvb2wpOnN0cmluZ3tcclxuXHRcdGlmKGJvb2wpe1xyXG5cdFx0ICAgcmV0dXJuICdZZXMnO1xyXG5cdCAgIH1lbHNlIGlmKCFib29sKXtcclxuXHRcdCAgIHJldHVybiAnTm8nO1xyXG5cdCAgIH1lbHNle1xyXG5cdFx0ICAgcmV0dXJuIFwiVW5rbm93bjogXCIrYm9vbDtcclxuXHQgICB9XHJcblx0fVxyXG5cclxuXHRnZXRTaXRlSUQoKXtcclxuXHRcdHJldHVybiB0aGlzLnNpdGVJRDtcclxuXHR9XHJcblxyXG5cdGxvYWRBcmVhTGlzdCgpIHtcclxuXHJcblx0XHR0aGlzLl9odHRwLmdldChjb25zdGFudHMuYmFzZVVSTCtcIi9nZXRUcmFuc2xhdGlvbnNBbmREYXRhLnBocD9KU09OPTEmbGFuZ0lEPTImc2l0ZUlEPVwiK3RoaXMuc2l0ZUlEKVxyXG5cdFx0XHQubWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSkuc3Vic2NyaWJlKCAvLyB0aGlzIGlzIGdldHRpbmcgdGhlIHRyYW5zbGF0aW9uIFBMVVMgdGhlIGFyZWFzXHJcblx0ICAgICAgICAgICAgZGF0YSA9PiB7XHJcblx0ICAgICAgICAgICAgICAgIHRoaXMuYXJlYUxpc3REYXRhID0gZGF0YVsnYXJlYV9saXN0J107XHJcblx0XHRcdFx0Ly9cdGNvbnNvbGUubG9nKFwidGhpcy5hcmVhTGlzdERhdGE6IFwiLCB0aGlzLmFyZWFMaXN0RGF0YSk7XHJcblx0ICAgICAgICAgICAgICAgIHRoaXMuYXJlYUxpc3RMb2FkZWQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0dGhpcy5kYXRhTG9hZGVkRXZlbnRFbWl0ZXIuZW1pdCh0cnVlKTtcclxuXHQgICAgICAgICAgICB9LFxyXG5cdCAgICAgICAgICAgIGVycm9yID0+IHtcclxuXHRcdFx0XHRcdHRoaXMuYXJlYUxvYWRQcm9ibGVtcyA9IHRydWU7XHJcblx0XHRcdFx0XHR0aGlzLmRhdGFMb2FkZWRFdmVudEVtaXRlci5lbWl0KGZhbHNlKTtcclxuXHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoXCJsb2FkQXJlYUxpc3QgRVJST1IhIFwiLCBlcnJvcilcclxuXHRcdFx0XHR9XHJcblx0ICAgICAgICApO1xyXG5cclxuXHR9XHJcblxyXG5cdGRhdGFMb2FkZWQoKXtcclxuXHJcblx0XHRyZXR1cm4gdGhpcy5hcmVhTGlzdExvYWRlZDtcclxuXHJcblx0fVxyXG5cclxuXHRkYXRhTG9hZFByb2JsZW1zKCl7XHJcblxyXG5cdFx0cmV0dXJuIHRoaXMuYXJlYUxvYWRQcm9ibGVtcztcclxuXHJcblx0fVxyXG5cclxuXHRnZXRBcmVhTGlzdCgpe1xyXG5cclxuXHJcblx0XHRcdHJldHVybiB0aGlzLmFyZWFMaXN0RGF0YTtcclxuXHR9XHJcblxyXG5cdGdldEN1cnJlbnRBcmVhTmFtZSgpe1xyXG5cclxuXHQvL1x0Y29uc29sZS5sb2coXCJ0aGlzLmFyZWFMaXN0RGF0YTogXCIsIHRoaXMuYXJlYUxpc3REYXRhKTtcclxuXHRcdGxldCB0ZW1wSUQgPSB0aGlzLnNlbGVjdGVkQXJlYTtcclxuXHRcdHZhciBjdXJyZW50QXJlYU5hbWUgPSB0aGlzLmFyZWFMaXN0RGF0YS5maW5kKGZ1bmN0aW9uKGVsZW1lbnQsIGluZGV4LCBhcnJheSkge1xyXG5cdFx0Ly9cdGNvbnNvbGUubG9nKFwiY3VycmVudFwiLCBlbGVtZW50WydpZCddLCBcIiB0ZW1wSUQ6IFwiLCB0ZW1wSUQpO1xyXG5cdFx0XHRpZihlbGVtZW50WydpZCddID09IHRlbXBJRCl7XHJcblx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0Ly9jb25zb2xlLmxvZyhcIkJLSkhHSEpHSkhHSEdKXCIsY291bnRyeURhdGEuY291bnRyeSk7XHJcblx0XHRyZXR1cm4gY3VycmVudEFyZWFOYW1lLmNvdW50cnk7XHJcblxyXG5cdH1cclxuXHJcblx0Z2V0QXJlYU5hbWVCeUlEKGlkKXtcclxuXHJcblx0Ly9cdGNvbnNvbGUubG9nKFwidGhpcy5hcmVhTGlzdERhdGE6IFwiLCB0aGlzLmFyZWFMaXN0RGF0YSk7XHJcblx0XHRsZXQgdGVtcElEID0gaWQ7XHJcblx0XHRsZXQgY3VycmVudEFyZWFOYW1lID0gdGhpcy5hcmVhTGlzdERhdGEuZmluZChmdW5jdGlvbihlbGVtZW50LCBpbmRleCwgYXJyYXkpIHtcclxuXHRcdC8vXHRjb25zb2xlLmxvZyhcImN1cnJlbnRcIiwgZWxlbWVudFsnaWQnXSwgXCIgdGVtcElEOiBcIiwgdGVtcElEKTtcclxuXHRcdFx0aWYoZWxlbWVudFsnaWQnXSA9PSB0ZW1wSUQpe1xyXG5cdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdC8vY29uc29sZS5sb2coXCJCS0pIR0hKR0pIR0hHSlwiLGNvdW50cnlEYXRhLmNvdW50cnkpO1xyXG5cdFx0cmV0dXJuIGN1cnJlbnRBcmVhTmFtZS5jb3VudHJ5O1xyXG5cclxuXHR9XHJcblxyXG5cclxuXHRnZXRRdWl6U2V0dGluZ3MoKXtcclxuXHQvL1x0bGV0IHRpbWVyID0gT2JzZXJ2YWJsZS50aW1lcigyMDAwLCAxMDAwICk7XHJcblx0XHRcdFx0XHQvL1x0dGltZXIuc3Vic2NyaWJlKHQgPT4gdGhpcy50aWNrZXJGdW5jKHQpKTtcclxuXHJcblx0XHRsZXQgcmV0dXJuU2V0dGluZ3M6IFF1aXpTZXR0aW5nW10gPSBbXHJcblx0XHQgIHtcIm1lZGlhVHlwZUlEXCI6IHRoaXMubWVkaWFUeXBlLFxyXG5cdFx0ICBcInNldmVyYWxTb3VuZFF1aXpcIjogdGhpcy5pc1NldmVyYWxTb3VuZFF1aXooKSxcclxuXHRcdCAgXCJiZWdpbm5lclF1aXpcIjogdGhpcy5pc0JlZ2lubmVyUXVpeigpLFxyXG5cdFx0ICBcImZvcm1hbFRlc3RRdWl6XCI6IHRoaXMuaXNGb3JtYWxUZXN0UXVpeigpLFxyXG5cdFx0ICBcImFyZWFJRFwiOiB0aGlzLnNlbGVjdGVkQXJlYSxcclxuXHRcdCAgXCJ0aW1lTGltaXRcIjogdGhpcy5kdXJhdGlvbixcclxuXHRcdCAgXCJudW1RdWVzdGlvbnNcIjogdGhpcy5udW1iZXJPZlF1ZXN0aW9ucyxcclxuXHRcdCAgXCJzaG93QWx0ZXJuYXRpdmVzXCI6IHRoaXMuYWx0ZXJuYXRpdmUsXHJcblx0XHQgIFwibWVkaWFEaWZpY3VsaXR5XCI6IHRoaXMubWVkaWFEaWZmaWN1bGl0aWVzLFxyXG5cdFx0ICBcImZvcm1hbFRlc3RBY2Nlc3NDb2RlXCI6IHRoaXMuZm9ybWFsVGVzdEFjY2Vzc0NvZGUsXHJcblx0XHQgIFwiY29tcGV0aXRpb25Hcm91cElEXCI6IHRoaXMuY29tcGV0aXRpb25Hcm91cElELFxyXG5cdCAgXHQgIFwic2l0ZUlEXCI6IHRoaXMuc2l0ZUlELFxyXG5cdCAgXHQgIFwibGFuZ0lEXCI6IHRoaXMubGFuZ0lEfVxyXG5cdFx0XTtcclxuXHJcblx0XHQvL2NvbnNvbGUubG9nKFwicmV0dXJuU2V0dGluZ3M6IFwiLCByZXR1cm5TZXR0aW5ncylcclxuXHJcblx0XHRyZXR1cm4gcmV0dXJuU2V0dGluZ3M7XHJcblxyXG5cdH1cclxuXHJcblx0c2V0QXJlYShzZWxlY3RlZEFyZWE6IG51bWJlcil7XHJcblx0Ly9cdGNvbnNvbGUubG9nKFwidGhlIHNlbGVjdGVkIGFyZWEgaXNcIiwgc2VsZWN0ZWRBcmVhKTtcclxuXHRcdGlmIChzZWxlY3RlZEFyZWE9PXVuZGVmaW5lZCB8fCBzZWxlY3RlZEFyZWE9PW51bGwpe1xyXG5cdFx0XHR0aGlzLnNlbGVjdGVkQXJlYT0yO1xyXG5cdFx0fWVsc2V7XHJcblx0XHRcdHRoaXMuc2VsZWN0ZWRBcmVhID0gc2VsZWN0ZWRBcmVhO1xyXG5cdFx0fVxyXG5cclxuXHJcblxyXG5cclxuXHR9XHJcblxyXG5cdHRpY2tlckZ1bmMoZHVyYXRpb24pe1xyXG5cdFx0Y29uc29sZS5sb2codGhpcyk7XHJcblx0XHR0aGlzLmR1cmF0aW9uID0gZHVyYXRpb25cclxuXHR9XHJcblxyXG4gICAgc2V0RHVyYXRpb24oZHVyYXRpb246IG51bWJlcil7XHJcbiAgICAgIC8vICBjb25zb2xlLmxvZyhkdXJhdGlvbik7XHJcbiAgICAgICAgdGhpcy5kdXJhdGlvbj1kdXJhdGlvbjtcclxuICAgIH1cclxuXHRnZXREdXJhdGlvbigpe1xyXG5cdFx0cmV0dXJuIHRoaXMuZHVyYXRpb247XHJcblx0fVxyXG5cclxuXHJcblxyXG4gICAgc2V0QWx0ZXJuYXRpdmVzKHNlbGVjdGVkQWx0ZXJuYXRpdmU6Ym9vbGVhbiApe1xyXG4gICAgICAgIHRoaXMuYWx0ZXJuYXRpdmUgPSBzZWxlY3RlZEFsdGVybmF0aXZlO1xyXG4gICAgICAgIFx0Ly9cdGNvbnNvbGUubG9nKHRoaXMuYWx0ZXJuYXRpdmUpO1xyXG4gICAgICAgIC8vdGhpcy5hbHRlcm5hdGl2ZXM9YWx0ZXJuYXRpdmVzO1xyXG5cclxuICAgIH1cclxuXHJcblx0Z2V0QWx0ZXJuYXRpdmUoKXtcclxuXHRcdHJldHVybiB0aGlzLmFsdGVybmF0aXZlO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHRnZXRBbHRlcm5hdGl2ZVVzZXJGcmllbmRseSgpe1xyXG5cdFx0aWYodGhpcy5hbHRlcm5hdGl2ZSA9PT0gdHJ1ZSl7IC8vIHRoaXMgaXMganVzdCBmb3IgdGhlIHVzZXIgdG8gc2VlIHllcy9ubyBpbiB0aGUgdGFibGUgYmVsb3cgdGhlIGNob2ljZXNcclxuXHRcdFx0cmV0dXJuIFwiWWVzXCI7XHJcblx0XHR9ZWxzZXtcclxuXHRcdFx0cmV0dXJuIFwiTm9cIjtcclxuXHRcdH1cclxuXHJcblx0fVxyXG5cclxuXHJcbiAgICBzZXRNZWRpYVR5cGUobWVkaWFUeXBlOm51bWJlcil7XHJcblx0XHRpZih0aGlzLmFsbG93ZWRNZWRpYVR5cGVzLmluZGV4T2YobWVkaWFUeXBlKSA+IC0xKXtcclxuXHRcdFx0dGhpcy5tZWRpYVR5cGUgPSBtZWRpYVR5cGU7XHJcblxyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHJcblx0XHR9ZWxzZXtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cclxuXHR9XHJcblxyXG5cclxuXHRnZXRNZWRpYVR5cGVVc2VyRnJpZW5kbHkoKXtcclxuXHRcdGlmKHRoaXMubWVkaWFUeXBlPT0xKXtcclxuXHRcdFx0cmV0dXJuICdQaWN0dXJlIGV4ZXJjaXNlJztcclxuXHRcdH1cclxuXHRcdGlmKHRoaXMubWVkaWFUeXBlPT0yIHx8IHRoaXMuc2V2ZXJhbFNvdW5kUXVpej09ZmFsc2Upe1xyXG5cdFx0XHRyZXR1cm4gJ1NvdW5kIGV4ZXJjaXNlJztcclxuXHRcdH1cclxuXHRcdGlmKHRoaXMubWVkaWFUeXBlPT0yIHx8IHRoaXMuc2V2ZXJhbFNvdW5kUXVpej09dHJ1ZSl7XHJcblx0XHRcdHJldHVybiAnU2V2ZXJhbCBzaW5naW5nIGJpcmRzJztcclxuXHRcdH1cclxuXHRcdGlmKHRoaXMubWVkaWFUeXBlPT0zKXtcclxuXHRcdFx0cmV0dXJuICdWaWRlbyBxdWl6JztcclxuXHRcdH1cclxuXHRcdGlmKHRoaXMuZm9ybWFsVGVzdFF1aXo9PXRydWUpe1xyXG5cdFx0XHRyZXR1cm4gJ0Zvcm1hbCBxdWl6JztcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8qc2V0TWVkaWFEaWZmKG1lZGlhRGlmZjpudW1iZXIpe1xyXG5cdFx0aWYodGhpcy5hbGxvd2VkTWVkaWFEaWZmaWN1bGl0aWVzLmluZGV4T2YobWVkaWFEaWZmKSA+IC0xKXtcclxuXHRcdFx0dGhpcy5tZWRpYURpZmZpY3VsaXRpZXMgPSBtZWRpYURpZmY7XHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0fWVsc2V7XHJcblxyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblxyXG5cdFx0fVxyXG5cdH0qL1xyXG4gICAgc2V0TWVkaWFEaWZmKHNlbGVjdGVkRGlmZjogbnVtYmVyKXtcclxuICAgICAgLy8gIGNvbnNvbGUubG9nKHNlbGVjdGVkRGlmZilcclxuICAgICAgICB0aGlzLm1lZGlhRGlmZmljdWxpdGllcz1zZWxlY3RlZERpZmY7XHJcbiAgICB9XHJcblx0XHRnZXRNZWRpYURpZmYoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5tZWRpYURpZmZpY3VsaXRpZXM7XHJcbiAgICB9XHJcblxyXG5cdHNlbGVjdE51bWJlck9mUXVlc3Rpb25zKHNlbGVjdGVkTnVtYmVyT2ZRdWVzdGlvbnM6IG51bWJlcil7XHJcbiAgICAgICAgLyppZih0aGlzLmFsbG93ZWROdW1iZXJPZlF1ZXN0aW9ucy52YWx1ZU9mKCkpe1xyXG4gICAgICAgICAgICB0aGlzLm51bWJlck9mUXVlc3Rpb25zID0gbnVtYmVyT2ZRdWVzdGlvbnM7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG5cclxuICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9Ki9cclxuICAgICAgICAvL2NvbnNvbGUubG9nKHNlbGVjdGVkTnVtYmVyT2ZRdWVzdGlvbnMpXHJcbiAgICAgICAgdGhpcy5udW1iZXJPZlF1ZXN0aW9ucyA9IHNlbGVjdGVkTnVtYmVyT2ZRdWVzdGlvbnM7XHJcbiAgICB9XHJcblxyXG5cdGdldE51bWJlck9mUXVlc3Rpb25zKCl7XHJcblx0XHRyZXR1cm4gdGhpcy5udW1iZXJPZlF1ZXN0aW9uc1xyXG5cdH1cclxuXHJcblx0c2V0SGVscCh3YW50SGVscDogYm9vbGVhbil7XHJcblx0XHR0aGlzLmhlbHAgPSB3YW50SGVscDtcclxuXHR9XHJcblx0aXNVc2luZ0hlbHAoKXtcclxuXHRcdHJldHVybiB0aGlzLmhlbHA7XHJcblx0fVxyXG5cclxuXHRzZXRDb21wZXRpdGlvbkdyb3VwSUQoc2VsZWN0ZWRJRDpudW1iZXIpe1xyXG5cdFx0dGhpcy5jb21wZXRpdGlvbkdyb3VwSUQ9c2VsZWN0ZWRJRDtcclxuXHRcdC8vY29uc29sZS5sb2coXCJ0aGUgZ3JvdXAgaWQgdGhhdCBpcyBzZXQgaXNzc3Nzc3NzIFwiLCB0aGlzLmNvbXBldGl0aW9uR3JvdXBJRCk7XHJcblx0fVxyXG5cclxuXHRnZXRDb21wZXRpdGlvbkdyb3VwSUQoKXtcclxuXHRcdHJldHVybiB0aGlzLmNvbXBldGl0aW9uR3JvdXBJRDtcclxuXHR9XHJcblxyXG5cdGdldENvbXBldGl0aW9uR3JvdXBJRFVzZXJGcmllbmRseSgpe1xyXG5cdFx0aWYodGhpcy5jb21wZXRpdGlvbkdyb3VwSUQhPT0tMSl7XHJcblx0XHRcdHJldHVybiB0aGlzLmNvbXBldGl0aW9uR3JvdXBJRDtcclxuXHRcdH1cclxuXHR9XHJcblxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
