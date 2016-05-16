System.register(['angular2/core', 'angular2/http', 'rxjs/Rx', './../shared/quiz-specie.service', './../constants'], function(exports_1, context_1) {
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
    var core_1, http_1, quiz_specie_service_1, constants_1;
    var QuizQuestionsService;
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
            },
            function (constants_1_1) {
                constants_1 = constants_1_1;
            }],
        execute: function() {
            // import { quizQuestions } from './mock-quizQuestion';
            //import { QuizQuestion } from './quizQuestion';
            QuizQuestionsService = (function () {
                function QuizQuestionsService(_http, _quizSpeciesService) {
                    this._http = _http;
                    this._quizSpeciesService = _quizSpeciesService;
                }
                QuizQuestionsService.prototype.getBeginnerQuizQuestions = function (settings) {
                    this.lastQuizSettings = settings;
                    var numQuestions = settings[0].numQuestions;
                    var extraURL = "";
                    extraURL += "&numberQuestions=" + numQuestions;
                    return this._http.get(constants_1.constants.baseURL + "/getBeginnerQuestionsData.php?JSON=1" + extraURL)
                        .map(function (response) { return response.json(); });
                };
                QuizQuestionsService.prototype.getQuizQuestions = function (settings) {
                    this.lastQuizSettings = settings;
                    var competitionGroupID = settings[0].competitionGroupID;
                    var mediaTypeID = settings[0].mediaTypeID;
                    var areaID = settings[0].areaID;
                    //areaID = 0;
                    //let timeLimit = settings[0].timeLimit;
                    var numQuestions;
                    if (settings[0].severalSoundQuiz) {
                        numQuestions = Math.floor(settings[0].numQuestions * 2.5);
                    }
                    else {
                        numQuestions = settings[0].numQuestions;
                    }
                    //let showAlternatives = settings[0].showAlternatives;
                    var mediaDificulity = settings[0].mediaDificulity;
                    var siteID = settings[0].siteID;
                    var langID = settings[0].langID;
                    var extraURL = "";
                    extraURL += "&numberQuestions=" + numQuestions;
                    extraURL += "&numRepeatingSpecies=" + Math.floor(numQuestions * 0.1);
                    extraURL += "&difficulty=" + mediaDificulity;
                    extraURL += "&areaID=" + areaID;
                    extraURL += "&mediaType=" + mediaTypeID;
                    extraURL += "&competitionGroupID=" + competitionGroupID;
                    if (settings[0].formalTestQuiz) {
                        extraURL += "&accessCode=" + settings[0].formalTestAccessCode;
                    }
                    if (this._quizSpeciesService.getSelectedSpecieList().length > 0) {
                        extraURL += "&custumSpecieList=" + this._quizSpeciesService.getSelectedSpecieListCSV();
                    }
                    extraURL += "&langID=" + langID;
                    extraURL += "&siteID=" + siteID;
                    console.log("https://hembstudios.no//birdid/IDprogram/getQuestionsData.php?JSON=1" + extraURL);
                    return this._http.get(constants_1.constants.baseURL + "/getQuestionsData.php?JSON=1" + extraURL)
                        .map(function (response) { return response.json(); });
                    //return Promise.resolve(quizQuestions);
                };
                QuizQuestionsService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http, quiz_specie_service_1.QuizSpecieService])
                ], QuizQuestionsService);
                return QuizQuestionsService;
            }());
            exports_1("QuizQuestionsService", QuizQuestionsService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9xdWl6LXF1ZXN0aW9ucy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWNBLHVEQUF1RDtZQUN0RCxnREFBZ0Q7WUFHakQ7Z0JBSUMsOEJBQ1MsS0FBVyxFQUNYLG1CQUFzQztvQkFEdEMsVUFBSyxHQUFMLEtBQUssQ0FBTTtvQkFDWCx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQW1CO2dCQUM3QyxDQUFDO2dCQUVILHVEQUF3QixHQUF4QixVQUF5QixRQUFzQjtvQkFFOUMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFFBQVEsQ0FBQztvQkFFakMsSUFBSSxZQUFZLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQztvQkFFNUMsSUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDO29CQUVsQixRQUFRLElBQUksbUJBQW1CLEdBQUcsWUFBWSxDQUFDO29CQUUvQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMscUJBQVMsQ0FBQyxPQUFPLEdBQUMsc0NBQXNDLEdBQUMsUUFBUSxDQUFDO3lCQUN0RixHQUFHLENBQUMsVUFBQSxRQUFRLElBQUksT0FBQSxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQWYsQ0FBZSxDQUFDLENBQUM7Z0JBRXBDLENBQUM7Z0JBRUQsK0NBQWdCLEdBQWhCLFVBQWlCLFFBQXNCO29CQUV0QyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsUUFBUSxDQUFDO29CQUVqQyxJQUFJLGtCQUFrQixHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQztvQkFDeEQsSUFBSSxXQUFXLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQztvQkFDMUMsSUFBSSxNQUFNLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztvQkFDaEMsYUFBYTtvQkFDYix3Q0FBd0M7b0JBQ3hDLElBQUksWUFBWSxDQUFDO29CQUNqQixFQUFFLENBQUEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQSxDQUFDO3dCQUNoQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxHQUFHLEdBQUcsQ0FBQyxDQUFDO29CQUMzRCxDQUFDO29CQUFBLElBQUksQ0FBQSxDQUFDO3dCQUNMLFlBQVksR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDO29CQUN6QyxDQUFDO29CQUVELHNEQUFzRDtvQkFDdEQsSUFBSSxlQUFlLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQztvQkFDbEQsSUFBSSxNQUFNLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztvQkFDaEMsSUFBSSxNQUFNLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztvQkFFaEMsSUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDO29CQUNsQixRQUFRLElBQUksbUJBQW1CLEdBQUcsWUFBWSxDQUFDO29CQUMvQyxRQUFRLElBQUksdUJBQXVCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEdBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ25FLFFBQVEsSUFBSSxjQUFjLEdBQUcsZUFBZSxDQUFDO29CQUM3QyxRQUFRLElBQUksVUFBVSxHQUFHLE1BQU0sQ0FBQztvQkFDaEMsUUFBUSxJQUFJLGFBQWEsR0FBRyxXQUFXLENBQUM7b0JBQ3hDLFFBQVEsSUFBSSxzQkFBc0IsR0FBRyxrQkFBa0IsQ0FBQztvQkFFeEQsRUFBRSxDQUFBLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFBLENBQUM7d0JBQzlCLFFBQVEsSUFBSSxjQUFjLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLG9CQUFvQixDQUFDO29CQUMvRCxDQUFDO29CQUVELEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQSxDQUFDO3dCQUMvRCxRQUFRLElBQUksb0JBQW9CLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLHdCQUF3QixFQUFFLENBQUM7b0JBQ3hGLENBQUM7b0JBR0QsUUFBUSxJQUFJLFVBQVUsR0FBRyxNQUFNLENBQUM7b0JBQ2hDLFFBQVEsSUFBSSxVQUFVLEdBQUcsTUFBTSxDQUFDO29CQUVoQyxPQUFPLENBQUMsR0FBRyxDQUFDLHNFQUFzRSxHQUFDLFFBQVEsQ0FBQyxDQUFBO29CQUc1RixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMscUJBQVMsQ0FBQyxPQUFPLEdBQUMsOEJBQThCLEdBQUMsUUFBUSxDQUFDO3lCQUM5RSxHQUFHLENBQUMsVUFBQSxRQUFRLElBQUksT0FBQSxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQWYsQ0FBZSxDQUFDLENBQUM7b0JBRW5DLHdDQUF3QztnQkFFekMsQ0FBQztnQkExRUY7b0JBQUMsaUJBQVUsRUFBRTs7d0NBQUE7Z0JBNkViLDJCQUFDO1lBQUQsQ0E1RUEsQUE0RUMsSUFBQTtZQTVFRCx1REE0RUMsQ0FBQSIsImZpbGUiOiJzaGFyZWQvcXVpei1xdWVzdGlvbnMuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHAgfSBmcm9tICdhbmd1bGFyMi9odHRwJztcclxuXHJcbmltcG9ydCAncnhqcy9SeCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5cclxuaW1wb3J0IHsgUXVpelNldHRpbmcgfSAgZnJvbSAnLi8uLi9zaGFyZWQvcXVpei5zZXR0aW5ncy5pbnRlcmZhY2UudHMnO1xyXG5pbXBvcnQgeyBRdWl6U3BlY2llU2VydmljZSB9ICBmcm9tICcuLy4uL3NoYXJlZC9xdWl6LXNwZWNpZS5zZXJ2aWNlJztcclxuXHJcbmltcG9ydCB7Y29uc3RhbnRzfSBmcm9tICcuLy4uL2NvbnN0YW50cyc7XHJcblxyXG5cclxuXHJcbi8vIGltcG9ydCB7IHF1aXpRdWVzdGlvbnMgfSBmcm9tICcuL21vY2stcXVpelF1ZXN0aW9uJztcclxuIC8vaW1wb3J0IHsgUXVpelF1ZXN0aW9uIH0gZnJvbSAnLi9xdWl6UXVlc3Rpb24nO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgUXVpelF1ZXN0aW9uc1NlcnZpY2V7XHJcblxyXG5cdGxhc3RRdWl6U2V0dGluZ3M7XHJcblxyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSBfaHR0cDogSHR0cCxcclxuXHRcdHByaXZhdGUgX3F1aXpTcGVjaWVzU2VydmljZTogUXVpelNwZWNpZVNlcnZpY2VcclxuXHQpe31cclxuXHJcblx0Z2V0QmVnaW5uZXJRdWl6UXVlc3Rpb25zKHNldHRpbmdzOlF1aXpTZXR0aW5nW10pOiBPYnNlcnZhYmxlPGFueT57XHJcblxyXG5cdFx0dGhpcy5sYXN0UXVpelNldHRpbmdzID0gc2V0dGluZ3M7XHJcblxyXG5cdFx0bGV0IG51bVF1ZXN0aW9ucyA9IHNldHRpbmdzWzBdLm51bVF1ZXN0aW9ucztcclxuXHJcblx0XHRsZXQgZXh0cmFVUkwgPSBcIlwiO1xyXG5cclxuXHRcdGV4dHJhVVJMICs9IFwiJm51bWJlclF1ZXN0aW9ucz1cIiArIG51bVF1ZXN0aW9ucztcclxuXHJcblx0XHRyZXR1cm4gdGhpcy5faHR0cC5nZXQoY29uc3RhbnRzLmJhc2VVUkwrXCIvZ2V0QmVnaW5uZXJRdWVzdGlvbnNEYXRhLnBocD9KU09OPTFcIitleHRyYVVSTClcclxuXHRcdFx0Lm1hcChyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpO1xyXG5cclxuXHR9XHJcblxyXG5cdGdldFF1aXpRdWVzdGlvbnMoc2V0dGluZ3M6UXVpelNldHRpbmdbXSk6IE9ic2VydmFibGU8YW55PntcclxuXHJcblx0XHR0aGlzLmxhc3RRdWl6U2V0dGluZ3MgPSBzZXR0aW5ncztcclxuXHJcblx0XHRsZXQgY29tcGV0aXRpb25Hcm91cElEID0gc2V0dGluZ3NbMF0uY29tcGV0aXRpb25Hcm91cElEO1xyXG5cdFx0bGV0IG1lZGlhVHlwZUlEID0gc2V0dGluZ3NbMF0ubWVkaWFUeXBlSUQ7XHJcblx0XHRsZXQgYXJlYUlEID0gc2V0dGluZ3NbMF0uYXJlYUlEO1xyXG5cdFx0Ly9hcmVhSUQgPSAwO1xyXG5cdFx0Ly9sZXQgdGltZUxpbWl0ID0gc2V0dGluZ3NbMF0udGltZUxpbWl0O1xyXG5cdFx0bGV0IG51bVF1ZXN0aW9ucztcclxuXHRcdGlmKHNldHRpbmdzWzBdLnNldmVyYWxTb3VuZFF1aXope1xyXG5cdFx0XHRudW1RdWVzdGlvbnMgPSBNYXRoLmZsb29yKHNldHRpbmdzWzBdLm51bVF1ZXN0aW9ucyAqIDIuNSk7XHJcblx0XHR9ZWxzZXtcclxuXHRcdFx0bnVtUXVlc3Rpb25zID0gc2V0dGluZ3NbMF0ubnVtUXVlc3Rpb25zO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vbGV0IHNob3dBbHRlcm5hdGl2ZXMgPSBzZXR0aW5nc1swXS5zaG93QWx0ZXJuYXRpdmVzO1xyXG5cdFx0bGV0IG1lZGlhRGlmaWN1bGl0eSA9IHNldHRpbmdzWzBdLm1lZGlhRGlmaWN1bGl0eTtcclxuXHRcdGxldCBzaXRlSUQgPSBzZXR0aW5nc1swXS5zaXRlSUQ7XHJcblx0XHRsZXQgbGFuZ0lEID0gc2V0dGluZ3NbMF0ubGFuZ0lEO1xyXG5cclxuXHRcdGxldCBleHRyYVVSTCA9IFwiXCI7XHJcblx0XHRleHRyYVVSTCArPSBcIiZudW1iZXJRdWVzdGlvbnM9XCIgKyBudW1RdWVzdGlvbnM7XHJcblx0XHRleHRyYVVSTCArPSBcIiZudW1SZXBlYXRpbmdTcGVjaWVzPVwiICsgTWF0aC5mbG9vcihudW1RdWVzdGlvbnMqMC4xKTtcclxuXHRcdGV4dHJhVVJMICs9IFwiJmRpZmZpY3VsdHk9XCIgKyBtZWRpYURpZmljdWxpdHk7XHJcblx0XHRleHRyYVVSTCArPSBcIiZhcmVhSUQ9XCIgKyBhcmVhSUQ7XHJcblx0XHRleHRyYVVSTCArPSBcIiZtZWRpYVR5cGU9XCIgKyBtZWRpYVR5cGVJRDtcclxuXHRcdGV4dHJhVVJMICs9IFwiJmNvbXBldGl0aW9uR3JvdXBJRD1cIiArIGNvbXBldGl0aW9uR3JvdXBJRDtcclxuXHJcblx0XHRpZihzZXR0aW5nc1swXS5mb3JtYWxUZXN0UXVpeil7XHJcblx0XHRcdGV4dHJhVVJMICs9IFwiJmFjY2Vzc0NvZGU9XCIgKyBzZXR0aW5nc1swXS5mb3JtYWxUZXN0QWNjZXNzQ29kZTtcclxuXHRcdH1cclxuXHJcblx0XHRpZih0aGlzLl9xdWl6U3BlY2llc1NlcnZpY2UuZ2V0U2VsZWN0ZWRTcGVjaWVMaXN0KCkubGVuZ3RoID4gMCl7XHJcblx0XHRcdGV4dHJhVVJMICs9IFwiJmN1c3R1bVNwZWNpZUxpc3Q9XCIgKyB0aGlzLl9xdWl6U3BlY2llc1NlcnZpY2UuZ2V0U2VsZWN0ZWRTcGVjaWVMaXN0Q1NWKCk7XHJcblx0XHR9XHJcblxyXG5cclxuXHRcdGV4dHJhVVJMICs9IFwiJmxhbmdJRD1cIiArIGxhbmdJRDtcclxuXHRcdGV4dHJhVVJMICs9IFwiJnNpdGVJRD1cIiArIHNpdGVJRDtcclxuXHJcblx0XHRjb25zb2xlLmxvZyhcImh0dHBzOi8vaGVtYnN0dWRpb3Mubm8vL2JpcmRpZC9JRHByb2dyYW0vZ2V0UXVlc3Rpb25zRGF0YS5waHA/SlNPTj0xXCIrZXh0cmFVUkwpXHJcblxyXG5cclxuXHRcdHJldHVybiB0aGlzLl9odHRwLmdldChjb25zdGFudHMuYmFzZVVSTCtcIi9nZXRRdWVzdGlvbnNEYXRhLnBocD9KU09OPTFcIitleHRyYVVSTClcclxuXHRcdFx0Lm1hcChyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpO1xyXG5cclxuXHRcdC8vcmV0dXJuIFByb21pc2UucmVzb2x2ZShxdWl6UXVlc3Rpb25zKTtcclxuXHJcblx0fVxyXG5cclxuXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
