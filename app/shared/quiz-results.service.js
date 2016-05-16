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
    var QuizResultsService;
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
            // import { quizQuestions } from './mock-quizQuestion';
            //import { QuizQuestion } from './quizQuestion';
            QuizResultsService = (function () {
                function QuizResultsService(_http) {
                    this._http = _http;
                    this.siteID = 1;
                    this.langID = 2;
                }
                QuizResultsService.prototype.initialize = function (siteID, langID) {
                    this.langID = langID;
                    this.siteID = siteID;
                };
                QuizResultsService.prototype.uploadQuizResults = function (score, maxScore, name, quizSettings) {
                    //for JSON, not in use
                    // let data = {
                    // 	score: score,
                    // 	maxScore: 5,
                    // 	scorePercent: 50,
                    // 	mediaTypeID: 1,
                    // 	areaID: 0,
                    // 	difficulty: 1,
                    // 	specialAreas: "false",
                    // 	siteID: 1,
                    // 	name: name
                    // };
                    var mediaTypeID = quizSettings[0].mediaTypeID;
                    var areaID = quizSettings[0].areaID;
                    var mediaDificulity = quizSettings[0].mediaDificulity;
                    var competitionGroupID = quizSettings[0].competitionGroupID;
                    if (quizSettings[0].beginnerQuiz) {
                        mediaDificulity = 0;
                        mediaTypeID = 0;
                        areaID = 0;
                    }
                    var data2 = "score=" + score;
                    data2 += "&name=" + name;
                    data2 += "&maxScore=" + maxScore;
                    data2 += "&scorePercent=" + 50;
                    data2 += "&mediaTypeID=" + mediaTypeID;
                    //data2 += "&areaID=" + areaID; NOT WORKING DUE TO MILE =D
                    data2 += "&areaID=" + 0;
                    data2 += "&difficulty=" + mediaDificulity;
                    data2 += "&specialAreas=false";
                    data2 += "&siteID=" + this.siteID;
                    data2 += "&competitionGroupID=" + competitionGroupID;
                    var body = data2;
                    //they result in 501 not implemented by server
                    // const headers = new Headers();
                    // headers.append('Content-Type', 'application/json');
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/x-www-form-urlencoded');
                    return this._http.post(constants_1.constants.baseURL + '/scoreQuiz.php?JSON=1&langID=' + this.langID + '&siteID=' + this.siteID, body, {
                        headers: headers
                    })
                        .map(function (response) { return response.json(); });
                    //.map(response => response);
                };
                QuizResultsService.prototype.getQuizResults = function (quizSettings, timespan, limit, competitionGroupID) {
                    var mediaTypeID = quizSettings[0].mediaTypeID;
                    var areaID = quizSettings[0].areaID;
                    //areaID = 0;
                    //let timeLimit = quizSettings[0].timeLimit;
                    var numQuestions = quizSettings[0].numQuestions;
                    //let showAlternatives = quizSettings[0].showAlternatives;
                    var mediaDificulity = quizSettings[0].mediaDificulity;
                    var siteID = quizSettings[0].siteID;
                    if (quizSettings[0].beginnerQuiz) {
                        mediaDificulity = 0;
                        mediaTypeID = 0;
                        areaID = 0;
                    }
                    var extraURL = "";
                    extraURL += "&retriveBy=" + timespan;
                    extraURL += "&limit=" + limit;
                    extraURL += "&specialAreas=" + "false";
                    extraURL += "&difficulty=" + mediaDificulity;
                    extraURL += "&areaID=" + areaID;
                    extraURL += "&mediaTypeID=" + mediaTypeID;
                    extraURL += "&langID=" + 2;
                    extraURL += "&siteID=" + siteID;
                    extraURL += "&competitionGroupID=" + competitionGroupID;
                    return this._http.get(constants_1.constants.baseURL + "/scoreQuiz.php?JSON=1" + extraURL)
                        .map(function (response) { return response.json(); });
                };
                QuizResultsService.prototype.getQuizResultsLimit50 = function (quizSettings) {
                    var mediaTypeID = quizSettings[0].mediaTypeID;
                    var areaID = quizSettings[0].areaID;
                    //areaID = 0;
                    //let timeLimit = quizSettings[0].timeLimit;
                    var numQuestions = quizSettings[0].numQuestions;
                    //let showAlternatives = quizSettings[0].showAlternatives;
                    //	let mediaDificulity = quizSettings[0].mediaDificulity;
                    var mediaDificulity = quizSettings[0].mediaDificulity;
                    var siteID = quizSettings[0].siteID;
                    var extraURL = "";
                    extraURL += "&retriveBy=" + "year";
                    extraURL += "&limit=" + 50;
                    extraURL += "&specialAreas=" + "false";
                    extraURL += "&difficulty=" + mediaDificulity;
                    extraURL += "&areaID=" + areaID;
                    extraURL += "&mediaTypeID=" + mediaTypeID;
                    extraURL += "&langID=" + 2;
                    extraURL += "&siteID=" + siteID;
                    extraURL += "&competitionGroupID=" + "false";
                    return this._http.get(constants_1.constants.baseURL + "/scoreQuiz.php?JSON=1" + extraURL)
                        .map(function (response) { return response.json(); });
                };
                QuizResultsService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], QuizResultsService);
                return QuizResultsService;
            }());
            exports_1("QuizResultsService", QuizResultsService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9xdWl6LXJlc3VsdHMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFhQSx1REFBdUQ7WUFDdEQsZ0RBQWdEO1lBR2pEO2dCQUtDLDRCQUFvQixLQUFXO29CQUFYLFVBQUssR0FBTCxLQUFLLENBQU07b0JBSC9CLFdBQU0sR0FBRyxDQUFDLENBQUM7b0JBQ1gsV0FBTSxHQUFHLENBQUMsQ0FBQztnQkFFc0IsQ0FBQztnQkFFbEMsdUNBQVUsR0FBVixVQUFXLE1BQU0sRUFBRSxNQUFNO29CQUV4QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztvQkFDckIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7Z0JBRXRCLENBQUM7Z0JBRUQsOENBQWlCLEdBQWpCLFVBQWtCLEtBQUssRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLFlBQTBCO29CQUVsRSxzQkFBc0I7b0JBQ3RCLGVBQWU7b0JBQ2YsaUJBQWlCO29CQUNqQixnQkFBZ0I7b0JBQ2hCLHFCQUFxQjtvQkFDckIsbUJBQW1CO29CQUNuQixjQUFjO29CQUNkLGtCQUFrQjtvQkFDbEIsMEJBQTBCO29CQUMxQixjQUFjO29CQUNkLGNBQWM7b0JBQ2QsS0FBSztvQkFFTCxJQUFJLFdBQVcsR0FBRyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDO29CQUM5QyxJQUFJLE1BQU0sR0FBRyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO29CQUNwQyxJQUFJLGVBQWUsR0FBRyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDO29CQUN0RCxJQUFJLGtCQUFrQixHQUFHLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQztvQkFFNUQsRUFBRSxDQUFBLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFBLENBQUM7d0JBQ2hDLGVBQWUsR0FB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QU0sQ0FBQztvQkFDaEMsUUFBUSxJQUFJLHNCQUFzQixHQUFHLE9BQU8sQ0FBQztvQkFFN0MsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLHFCQUFTLENBQUMsT0FBTyxHQUFDLHVCQUF1QixHQUFDLFFBQVEsQ0FBQzt5QkFDdkUsR0FBRyxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFmLENBQWUsQ0FBQyxDQUFDO2dCQUVwQyxDQUFDO2dCQWhJRjtvQkFBQyxpQkFBVSxFQUFFOztzQ0FBQTtnQkFvSWIseUJBQUM7WUFBRCxDQW5JQSxBQW1JQyxJQUFBO1lBbklELG1EQW1JQyxDQUFBIiwiZmlsZSI6InNoYXJlZC9xdWl6LXJlc3VsdHMuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMgfSBmcm9tICdhbmd1bGFyMi9odHRwJztcclxuXHJcbmltcG9ydCAncnhqcy9SeCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5cclxuaW1wb3J0IHsgUXVpelNldHRpbmcgfSAgZnJvbSAnLi8uLi9zaGFyZWQvcXVpei5zZXR0aW5ncy5pbnRlcmZhY2UudHMnO1xyXG5cclxuaW1wb3J0IHtjb25zdGFudHN9IGZyb20gJy4vLi4vY29uc3RhbnRzJztcclxuXHJcblxyXG5cclxuLy8gaW1wb3J0IHsgcXVpelF1ZXN0aW9ucyB9IGZyb20gJy4vbW9jay1xdWl6UXVlc3Rpb24nO1xyXG4gLy9pbXBvcnQgeyBRdWl6UXVlc3Rpb24gfSBmcm9tICcuL3F1aXpRdWVzdGlvbic7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBRdWl6UmVzdWx0c1NlcnZpY2V7XHJcblxyXG5cdHNpdGVJRCA9IDE7XHJcblx0bGFuZ0lEID0gMjtcclxuXHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cDogSHR0cCl7fVxyXG5cclxuXHRpbml0aWFsaXplKHNpdGVJRCwgbGFuZ0lEKXtcclxuXHJcblx0XHR0aGlzLmxhbmdJRCA9IGxhbmdJRDtcclxuXHRcdHRoaXMuc2l0ZUlEID0gc2l0ZUlEO1xyXG5cclxuXHR9XHJcblxyXG5cdHVwbG9hZFF1aXpSZXN1bHRzKHNjb3JlLCBtYXhTY29yZSwgbmFtZSwgcXVpelNldHRpbmdzOlF1aXpTZXR0aW5nW10pe1xyXG5cclxuXHRcdC8vZm9yIEpTT04sIG5vdCBpbiB1c2VcclxuXHRcdC8vIGxldCBkYXRhID0ge1xyXG5cdFx0Ly8gXHRzY29yZTogc2NvcmUsXHJcblx0XHQvLyBcdG1heFNjb3JlOiA1LFxyXG5cdFx0Ly8gXHRzY29yZVBlcmNlbnQ6IDUwLFxyXG5cdFx0Ly8gXHRtZWRpYVR5cGVJRDogMSxcclxuXHRcdC8vIFx0YXJlYUlEOiAwLFxyXG5cdFx0Ly8gXHRkaWZmaWN1bHR5OiAxLFxyXG5cdFx0Ly8gXHRzcGVjaWFsQXJlYXM6IFwiZmFsc2VcIixcclxuXHRcdC8vIFx0c2l0ZUlEOiAxLFxyXG5cdFx0Ly8gXHRuYW1lOiBuYW1lXHJcblx0XHQvLyB9O1xyXG5cclxuXHRcdGxldCBtZWRpYVR5cGVJRCA9IHF1aXpTZXR0aW5nc1swXS5tZWRpYVR5cGVJRDtcclxuXHRcdGxldCBhcmVhSUQgPSBxdWl6U2V0dGluZ3NbMF0uYXJlYUlEO1xyXG5cdFx0bGV0IG1lZGlhRGlmaWN1bGl0eSA9IHF1aXpTZXR0aW5nc1swXS5tZWRpYURpZmljdWxpdHk7XHJcblx0XHRsZXQgY29tcGV0aXRpb25Hcm91cElEID0gcXVpelNldHRpbmdzWzBdLmNvbXBldGl0aW9uR3JvdXBJRDtcclxuXHJcblx0XHRpZihxdWl6U2V0dGluZ3NbMF0uYmVnaW5uZXJRdWl6KXtcclxuXHRcdFx0bWVkaWFEaWZpY3VsaXR5ID0gMDtcclxuXHRcdFx0bWVkaWFUeXBlSUQgPSAwO1xyXG5cdFx0XHRhcmVhSUQgPSAwO1xyXG5cdFx0fVxyXG5cclxuXHRcdGxldCBkYXRhMiA9IFwic2NvcmU9XCIgKyBzY29yZTtcclxuXHRcdGRhdGEyICs9IFwiJm5hbWU9XCIgKyBuYW1lO1xyXG5cdFx0ZGF0YTIgKz0gXCImbWF4U2NvcmU9XCIgKyBtYXhTY29yZTtcclxuXHRcdGRhdGEyICs9IFwiJnNjb3JlUGVyY2VudD1cIiArIDUwO1xyXG5cdFx0ZGF0YTIgKz0gXCImbWVkaWFUeXBlSUQ9XCIgKyBtZWRpYVR5cGVJRDtcclxuXHRcdC8vZGF0YTIgKz0gXCImYXJlYUlEPVwiICsgYXJlYUlEOyBOT1QgV09SS0lORyBEVUUgVE8gTUlMRSA9RFxyXG5cdFx0ZGF0YTIgKz0gXCImYXJlYUlEPVwiICsgMDtcclxuXHRcdGRhdGEyICs9IFwiJmRpZmZpY3VsdHk9XCIgKyBtZWRpYURpZmljdWxpdHk7XHJcblx0XHRkYXRhMiArPSBcIiZzcGVjaWFsQXJlYXM9ZmFsc2VcIjtcclxuXHRcdGRhdGEyICs9IFwiJnNpdGVJRD1cIiArIHRoaXMuc2l0ZUlEO1xyXG5cdFx0ZGF0YTIgKz0gXCImY29tcGV0aXRpb25Hcm91cElEPVwiICsgY29tcGV0aXRpb25Hcm91cElEO1xyXG5cclxuXHRcdGNvbnN0IGJvZHkgPSBkYXRhMjtcclxuXHRcdC8vdGhleSByZXN1bHQgaW4gNTAxIG5vdCBpbXBsZW1lbnRlZCBieSBzZXJ2ZXJcclxuXHRcdC8vIGNvbnN0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG5cdFx0Ly8gaGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XHJcblxyXG5cdFx0dmFyIGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG4gIFx0XHRoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpO1xyXG5cdFx0cmV0dXJuIHRoaXMuX2h0dHAucG9zdChjb25zdGFudHMuYmFzZVVSTCsnL3Njb3JlUXVpei5waHA/SlNPTj0xJmxhbmdJRD0nK3RoaXMubGFuZ0lEKycmc2l0ZUlEPScrdGhpcy5zaXRlSUQsIGJvZHkse1xyXG5cdCAgICBcdGhlYWRlcnM6IGhlYWRlcnNcclxuXHQgICAgfSlcclxuXHRcdFx0Lm1hcChyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpO1xyXG5cdFx0XHQvLy5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UpO1xyXG5cclxuXHR9XHJcblxyXG5cdGdldFF1aXpSZXN1bHRzKHF1aXpTZXR0aW5ncywgdGltZXNwYW4sIGxpbWl0LCBjb21wZXRpdGlvbkdyb3VwSUQpe1xyXG5cclxuXHRcdGxldCBtZWRpYVR5cGVJRCA9IHF1aXpTZXR0aW5nc1swXS5tZWRpYVR5cGVJRDtcclxuXHRcdGxldCBhcmVhSUQgPSBxdWl6U2V0dGluZ3NbMF0uYXJlYUlEO1xyXG5cdFx0Ly9hcmVhSUQgPSAwO1xyXG5cdFx0Ly9sZXQgdGltZUxpbWl0ID0gcXVpelNldHRpbmdzWzBdLnRpbWVMaW1pdDtcclxuXHRcdGxldCBudW1RdWVzdGlvbnMgPSBxdWl6U2V0dGluZ3NbMF0ubnVtUXVlc3Rpb25zO1xyXG5cdFx0Ly9sZXQgc2hvd0FsdGVybmF0aXZlcyA9IHF1aXpTZXR0aW5nc1swXS5zaG93QWx0ZXJuYXRpdmVzO1xyXG5cdFx0bGV0IG1lZGlhRGlmaWN1bGl0eSA9IHF1aXpTZXR0aW5nc1swXS5tZWRpYURpZmljdWxpdHk7XHJcblx0XHRsZXQgc2l0ZUlEID0gcXVpelNldHRpbmdzWzBdLnNpdGVJRDtcclxuXHJcblx0XHRpZihxdWl6U2V0dGluZ3NbMF0uYmVnaW5uZXJRdWl6KXtcclxuXHRcdFx0bWVkaWFEaWZpY3VsaXR5ID0gMDtcclxuXHRcdFx0bWVkaWFUeXBlSUQgPSAwO1xyXG5cdFx0XHRhcmVhSUQgPSAwO1xyXG5cdFx0fVxyXG5cclxuXHRcdGxldCBleHRyYVVSTCA9IFwiXCI7XHJcblx0XHRleHRyYVVSTCArPSBcIiZyZXRyaXZlQnk9XCIgKyB0aW1lc3BhbjtcclxuXHRcdGV4dHJhVVJMICs9IFwiJmxpbWl0PVwiICsgbGltaXQ7XHJcblx0XHRleHRyYVVSTCArPSBcIiZzcGVjaWFsQXJlYXM9XCIgKyBcImZhbHNlXCI7XHJcblx0XHRleHRyYVVSTCArPSBcIiZkaWZmaWN1bHR5PVwiICsgbWVkaWFEaWZpY3VsaXR5O1xyXG5cdFx0ZXh0cmFVUkwgKz0gXCImYXJlYUlEPVwiICsgYXJlYUlEO1xyXG5cdFx0ZXh0cmFVUkwgKz0gXCImbWVkaWFUeXBlSUQ9XCIgKyBtZWRpYVR5cGVJRDtcclxuXHRcdGV4dHJhVVJMICs9IFwiJmxhbmdJRD1cIiArIDI7XHJcblx0XHRleHRyYVVSTCArPSBcIiZzaXRlSUQ9XCIgKyBzaXRlSUQ7XHJcblx0XHRleHRyYVVSTCArPSBcIiZjb21wZXRpdGlvbkdyb3VwSUQ9XCIgKyBjb21wZXRpdGlvbkdyb3VwSUQ7XHJcblxyXG5cdFx0cmV0dXJuIHRoaXMuX2h0dHAuZ2V0KGNvbnN0YW50cy5iYXNlVVJMK1wiL3Njb3JlUXVpei5waHA/SlNPTj0xXCIrZXh0cmFVUkwpXHJcblx0XHRcdC5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKTtcclxuXHJcblx0fVxyXG5cclxuXHRnZXRRdWl6UmVzdWx0c0xpbWl0NTAocXVpelNldHRpbmdzKXtcclxuXHJcblx0XHRsZXQgbWVkaWFUeXBlSUQgPSBxdWl6U2V0dGluZ3NbMF0ubWVkaWFUeXBlSUQ7XHJcblx0XHRsZXQgYXJlYUlEID0gcXVpelNldHRpbmdzWzBdLmFyZWFJRDtcclxuXHRcdC8vYXJlYUlEID0gMDtcclxuXHRcdC8vbGV0IHRpbWVMaW1pdCA9IHF1aXpTZXR0aW5nc1swXS50aW1lTGltaXQ7XHJcblx0XHRsZXQgbnVtUXVlc3Rpb25zID0gcXVpelNldHRpbmdzWzBdLm51bVF1ZXN0aW9ucztcclxuXHRcdC8vbGV0IHNob3dBbHRlcm5hdGl2ZXMgPSBxdWl6U2V0dGluZ3NbMF0uc2hvd0FsdGVybmF0aXZlcztcclxuXHQvL1x0bGV0IG1lZGlhRGlmaWN1bGl0eSA9IHF1aXpTZXR0aW5nc1swXS5tZWRpYURpZmljdWxpdHk7XHJcblx0XHRsZXQgbWVkaWFEaWZpY3VsaXR5ID0gcXVpelNldHRpbmdzWzBdLm1lZGlhRGlmaWN1bGl0eTtcclxuXHJcblx0XHRsZXQgc2l0ZUlEID0gcXVpelNldHRpbmdzWzBdLnNpdGVJRDtcclxuXHJcblx0XHRsZXQgZXh0cmFVUkwgPSBcIlwiO1xyXG5cdFx0ZXh0cmFVUkwgKz0gXCImcmV0cml2ZUJ5PVwiICsgXCJ5ZWFyXCI7XHJcblx0XHRleHRyYVVSTCArPSBcIiZsaW1pdD1cIiArIDUwO1xyXG5cdFx0ZXh0cmFVUkwgKz0gXCImc3BlY2lhbEFyZWFzPVwiICsgXCJmYWxzZVwiO1xyXG5cdFx0ZXh0cmFVUkwgKz0gXCImZGlmZmljdWx0eT1cIiArIG1lZGlhRGlmaWN1bGl0eTtcclxuXHRcdGV4dHJhVVJMICs9IFwiJmFyZWFJRD1cIiArIGFyZWFJRDtcclxuXHRcdGV4dHJhVVJMICs9IFwiJm1lZGlhVHlwZUlEPVwiICsgbWVkaWFUeXBlSUQ7XHJcblx0XHRleHRyYVVSTCArPSBcIiZsYW5nSUQ9XCIgKyAyO1xyXG5cdFx0ZXh0cmFVUkwgKz0gXCImc2l0ZUlEPVwiICsgc2l0ZUlEO1xyXG5cdFx0ZXh0cmFVUkwgKz0gXCImY29tcGV0aXRpb25Hcm91cElEPVwiICsgXCJmYWxzZVwiO1xyXG5cclxuXHRcdHJldHVybiB0aGlzLl9odHRwLmdldChjb25zdGFudHMuYmFzZVVSTCtcIi9zY29yZVF1aXoucGhwP0pTT049MVwiK2V4dHJhVVJMKVxyXG5cdFx0XHQubWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSk7XHJcblxyXG5cdH1cclxuXHJcblxyXG5cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
