System.register(['angular2/core', 'angular2/http', 'rxjs/Rx', './../shared/quiz-specie.service'], function(exports_1, context_1) {
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
    var core_1, http_1, quiz_specie_service_1;
    var QuizFormalTestService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (quiz_specie_service_1_1) {
                quiz_specie_service_1 = quiz_specie_service_1_1;
            }],
        execute: function() {
            // import { quizQuestions } from './mock-quizQuestion';
            //import { QuizQuestion } from './quizQuestion';
            QuizFormalTestService = (function () {
                function QuizFormalTestService(_http, _quizSpeciesService) {
                    this._http = _http;
                    this._quizSpeciesService = _quizSpeciesService;
                    this.siteID = 1;
                    this.langID = 2;
                }
                QuizFormalTestService.prototype.initialize = function (siteID, langID) {
                    this.siteID = siteID;
                    this.langID = langID;
                };
                QuizFormalTestService.prototype.confirmAccessCodeCorrect = function (code) {
                    var accessCode = code;
                    var data = "accessCode=" + accessCode;
                    data += "&siteID=" + this.siteID;
                    data += "&langID=" + this.langID;
                    var body = data;
                    //they result in 501 not implemented by server
                    // const headers = new Headers();
                    // headers.append('Content-Type', 'application/json');
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/x-www-form-urlencoded');
                    return this._http.post('https://hembstudios.no/birdid/IDprogram/setStartTimeFormalTest.php?JSON=1&siteID=' + this.siteID, body, {
                        headers: headers
                    })
                        .map(function (response) { return response.json(); });
                };
                QuizFormalTestService.prototype.submitFormalTestRespoce = function (code, answerListCSV, mediaIdsCSV) {
                    var accessCode = code;
                    var data = "accessCode=" + accessCode;
                    data += "&answerList=" + answerListCSV;
                    data += "&mediaIDs=" + mediaIdsCSV;
                    data += "&langID=" + this.langID;
                    var body = data;
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/x-www-form-urlencoded');
                    return this._http.post('https://hembstudios.no/birdid/IDprogram/postFormalTestResults.php?JSON=1&siteID=' + this.siteID, body, {
                        headers: headers
                    })
                        .map(function (response) { return response.json(); });
                };
                QuizFormalTestService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http, quiz_specie_service_1.QuizSpecieService])
                ], QuizFormalTestService);
                return QuizFormalTestService;
            }());
            exports_1("QuizFormalTestService", QuizFormalTestService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9xdWl6LWZvcm1hbC10ZXN0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBWUEsdURBQXVEO1lBQ3RELGdEQUFnRDtZQUdqRDtnQkFPQywrQkFDUyxLQUFXLEVBQ1gsbUJBQXNDO29CQUR0QyxVQUFLLEdBQUwsS0FBSyxDQUFNO29CQUNYLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBbUI7b0JBTC9DLFdBQU0sR0FBRyxDQUFDLENBQUM7b0JBQ1gsV0FBTSxHQUFHLENBQUMsQ0FBQztnQkFLVCxDQUFDO2dCQUVILDBDQUFVLEdBQVYsVUFBVyxNQUFNLEVBQUUsTUFBTTtvQkFFeEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7b0JBQ3JCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO2dCQUV0QixDQUFDO2dCQUVELHdEQUF3QixHQUF4QixVQUF5QixJQUFXO29CQUVuQyxJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUM7b0JBRXRCLElBQUksSUFBSSxHQUFHLGFBQWEsR0FBRyxVQUFVLENBQUM7b0JBQ3RDLElBQUksSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztvQkFDakMsSUFBSSxJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO29CQUdqQyxJQUFNLElBQUksR0FBRyxJQUFJLENBQUM7b0JBQ2xCLDhDQUE4QztvQkFDOUMsaUNBQWlDO29CQUNqQyxzREFBc0Q7b0JBRXRELElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxFQUFFLENBQUM7b0JBQzFCLE9BQU8sQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLG1DQUFtQyxDQUFDLENBQUM7b0JBQ3RFLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxtRkFBbUYsR0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksRUFBQzt3QkFDekgsT0FBTyxFQUFFLE9BQU87cUJBQ2hCLENBQUM7eUJBQ0gsR0FBRyxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFmLENBQWUsQ0FBQyxDQUFDO2dCQUdwQyxDQUFDO2dCQUVELHVEQUF1QixHQUF2QixVQUF3QixJQUFXLEVBQUUsYUFBb0IsRUFBRSxXQUFrQjtvQkFFNUUsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDO29CQUV0QixJQUFJLElBQUksR0FBRyxhQUFhLEdBQUcsVUFBVSxDQUFDO29CQUN0QyxJQUFJLElBQUksY0FBYyxHQUFHLGFBQWEsQ0FBQztvQkFDdkMsSUFBSSxJQUFJLFlBQVksR0FBRyxXQUFXLENBQUM7b0JBQ25DLElBQUksSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztvQkFHakMsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDO29CQUVsQixJQUFJLE9BQU8sR0FBRyxJQUFJLGNBQU8sRUFBRSxDQUFDO29CQUMxQixPQUFPLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxtQ0FBbUMsQ0FBQyxDQUFDO29CQUN0RSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsa0ZBQWtGLEdBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUM7d0JBQ3hILE9BQU8sRUFBRSxPQUFPO3FCQUNoQixDQUFDO3lCQUNILEdBQUcsQ0FBQyxVQUFBLFFBQVEsSUFBSSxPQUFBLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBZixDQUFlLENBQUMsQ0FBQztnQkFFcEMsQ0FBQztnQkEvREY7b0JBQUMsaUJBQVUsRUFBRTs7eUNBQUE7Z0JBa0ViLDRCQUFDO1lBQUQsQ0FqRUEsQUFpRUMsSUFBQTtZQWpFRCx5REFpRUMsQ0FBQSIsImZpbGUiOiJzaGFyZWQvcXVpei1mb3JtYWwtdGVzdC5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHsgSHR0cCwgSGVhZGVycyB9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xyXG5cclxuaW1wb3J0ICdyeGpzL1J4JztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcblxyXG5pbXBvcnQgeyBRdWl6U2V0dGluZyB9ICBmcm9tICcuLy4uL3NoYXJlZC9xdWl6LnNldHRpbmdzLmludGVyZmFjZS50cyc7XHJcbmltcG9ydCB7IFF1aXpTcGVjaWVTZXJ2aWNlIH0gIGZyb20gJy4vLi4vc2hhcmVkL3F1aXotc3BlY2llLnNlcnZpY2UnO1xyXG5cclxuXHJcbi8vIGltcG9ydCB7IHF1aXpRdWVzdGlvbnMgfSBmcm9tICcuL21vY2stcXVpelF1ZXN0aW9uJztcclxuIC8vaW1wb3J0IHsgUXVpelF1ZXN0aW9uIH0gZnJvbSAnLi9xdWl6UXVlc3Rpb24nO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgUXVpekZvcm1hbFRlc3RTZXJ2aWNle1xyXG5cclxuXHRsYXN0UXVpelNldHRpbmdzO1xyXG5cclxuXHRzaXRlSUQgPSAxO1xyXG5cdGxhbmdJRCA9IDI7XHJcblxyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSBfaHR0cDogSHR0cCxcclxuXHRcdHByaXZhdGUgX3F1aXpTcGVjaWVzU2VydmljZTogUXVpelNwZWNpZVNlcnZpY2VcclxuXHQpe31cclxuXHJcblx0aW5pdGlhbGl6ZShzaXRlSUQsIGxhbmdJRCl7XHJcblxyXG5cdFx0dGhpcy5zaXRlSUQgPSBzaXRlSUQ7XHJcblx0XHR0aGlzLmxhbmdJRCA9IGxhbmdJRDtcclxuXHJcblx0fVxyXG5cclxuXHRjb25maXJtQWNjZXNzQ29kZUNvcnJlY3QoY29kZTpzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT57XHJcblxyXG5cdFx0bGV0IGFjY2Vzc0NvZGUgPSBjb2RlO1xyXG5cclxuXHRcdGxldCBkYXRhID0gXCJhY2Nlc3NDb2RlPVwiICsgYWNjZXNzQ29kZTtcclxuXHRcdGRhdGEgKz0gXCImc2l0ZUlEPVwiICsgdGhpcy5zaXRlSUQ7XHJcblx0XHRkYXRhICs9IFwiJmxhbmdJRD1cIiArIHRoaXMubGFuZ0lEO1xyXG5cclxuXHJcblx0XHRjb25zdCBib2R5ID0gZGF0YTtcclxuXHRcdC8vdGhleSByZXN1bHQgaW4gNTAxIG5vdCBpbXBsZW1lbnRlZCBieSBzZXJ2ZXJcclxuXHRcdC8vIGNvbnN0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG5cdFx0Ly8gaGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XHJcblxyXG5cdFx0dmFyIGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG4gIFx0XHRoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpO1xyXG5cdFx0cmV0dXJuIHRoaXMuX2h0dHAucG9zdCgnaHR0cHM6Ly9oZW1ic3R1ZGlvcy5uby9iaXJkaWQvSURwcm9ncmFtL3NldFN0YXJ0VGltZUZvcm1hbFRlc3QucGhwP0pTT049MSZzaXRlSUQ9Jyt0aGlzLnNpdGVJRCwgYm9keSx7XHJcblx0ICAgIFx0aGVhZGVyczogaGVhZGVyc1xyXG5cdCAgICB9KVxyXG5cdFx0XHQubWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSk7XHJcblxyXG5cclxuXHR9XHJcblxyXG5cdHN1Ym1pdEZvcm1hbFRlc3RSZXNwb2NlKGNvZGU6c3RyaW5nLCBhbnN3ZXJMaXN0Q1NWOnN0cmluZywgbWVkaWFJZHNDU1Y6c3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+e1xyXG5cclxuXHRcdGxldCBhY2Nlc3NDb2RlID0gY29kZTtcclxuXHJcblx0XHRsZXQgZGF0YSA9IFwiYWNjZXNzQ29kZT1cIiArIGFjY2Vzc0NvZGU7XHJcblx0XHRkYXRhICs9IFwiJmFuc3dlckxpc3Q9XCIgKyBhbnN3ZXJMaXN0Q1NWO1xyXG5cdFx0ZGF0YSArPSBcIiZtZWRpYUlEcz1cIiArIG1lZGlhSWRzQ1NWO1xyXG5cdFx0ZGF0YSArPSBcIiZsYW5nSUQ9XCIgKyB0aGlzLmxhbmdJRDtcclxuXHJcblxyXG5cdFx0Y29uc3QgYm9keSA9IGRhdGE7XHJcblxyXG5cdFx0dmFyIGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG4gIFx0XHRoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpO1xyXG5cdFx0cmV0dXJuIHRoaXMuX2h0dHAucG9zdCgnaHR0cHM6Ly9oZW1ic3R1ZGlvcy5uby9iaXJkaWQvSURwcm9ncmFtL3Bvc3RGb3JtYWxUZXN0UmVzdWx0cy5waHA/SlNPTj0xJnNpdGVJRD0nK3RoaXMuc2l0ZUlELCBib2R5LHtcclxuXHQgICAgXHRoZWFkZXJzOiBoZWFkZXJzXHJcblx0ICAgIH0pXHJcblx0XHRcdC5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKTtcclxuXHJcblx0fVxyXG5cclxuXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
