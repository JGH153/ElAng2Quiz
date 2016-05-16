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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9xdWl6LWJlZ2lubmVyLXF1ZXN0aW9ucy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWNBLHVEQUF1RDtZQUN0RCxnREFBZ0Q7WUFHakQ7Z0JBSUMsOEJBQ1MsS0FBVyxFQUNYLG1CQUFzQztvQkFEdEMsVUFBSyxHQUFMLEtBQUssQ0FBTTtvQkFDWCx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQW1CO2dCQUM3QyxDQUFDO2dCQUVILCtDQUFnQixHQUFoQixVQUFpQixRQUFzQjtvQkFFdEMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFFBQVEsQ0FBQztvQkFFakMsSUFBSSxrQkFBa0IsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsa0JBQWtCLENBQUM7b0JBQ3hELElBQUksV0FBVyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUM7b0JBQzFDLElBQUksTUFBTSxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7b0JBQ2hDLGFBQWE7b0JBQ2Isd0NBQXdDO29CQUN4QyxJQUFJLFlBQVksQ0FBQztvQkFDakIsRUFBRSxDQUFBLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUEsQ0FBQzt3QkFDaEMsWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksR0FBRyxHQUFHLENBQUMsQ0FBQztvQkFDM0QsQ0FBQztvQkFBQSxJQUFJLENBQUEsQ0FBQzt3QkFDTCxZQUFZLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQztvQkFDekMsQ0FBQztvQkFFRCxzREFBc0Q7b0JBQ3RELElBQUksZUFBZSxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUM7b0JBQ2xELElBQUksTUFBTSxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7b0JBQ2hDLElBQUksTUFBTSxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7b0JBRWhDLElBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQztvQkFDbEIsUUFBUSxJQUFJLG1CQUFtQixHQUFHLFlBQVksQ0FBQztvQkFDL0MsUUFBUSxJQUFJLHVCQUF1QixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxHQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUNuRSxRQUFRLElBQUksY0FBYyxHQUFHLGVBQWUsQ0FBQztvQkFDN0MsUUFBUSxJQUFJLFVBQVUsR0FBRyxNQUFNLENBQUM7b0JBQ2hDLFFBQVEsSUFBSSxhQUFhLEdBQUcsV0FBVyxDQUFDO29CQUN4QyxRQUFRLElBQUksc0JBQXNCLEdBQUcsa0JBQWtCLENBQUM7b0JBRXhELEVBQUUsQ0FBQSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQSxDQUFDO3dCQUM5QixRQUFRLElBQUksY0FBYyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQztvQkFDL0QsQ0FBQztvQkFFRCxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUEsQ0FBQzt3QkFDL0QsUUFBUSxJQUFJLG9CQUFvQixHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO29CQUN4RixDQUFDO29CQUdELFFBQVEsSUFBSSxVQUFVLEdBQUcsTUFBTSxDQUFDO29CQUNoQyxRQUFRLElBQUksVUFBVSxHQUFHLE1BQU0sQ0FBQztvQkFFaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzRUFBc0UsR0FBQyxRQUFRLENBQUMsQ0FBQTtvQkFHNUYsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLHFCQUFTLENBQUMsT0FBTyxHQUFDLDhCQUE4QixHQUFDLFFBQVEsQ0FBQzt5QkFDOUUsR0FBRyxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFmLENBQWUsQ0FBQyxDQUFDO29CQUVuQyx3Q0FBd0M7Z0JBRXpDLENBQUM7Z0JBM0RGO29CQUFDLGlCQUFVLEVBQUU7O3dDQUFBO2dCQThEYiwyQkFBQztZQUFELENBN0RBLEFBNkRDLElBQUE7WUE3REQsdURBNkRDLENBQUEiLCJmaWxlIjoic2hhcmVkL3F1aXotYmVnaW5uZXItcXVlc3Rpb25zLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwIH0gZnJvbSAnYW5ndWxhcjIvaHR0cCc7XHJcblxyXG5pbXBvcnQgJ3J4anMvUngnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuXHJcbmltcG9ydCB7IFF1aXpTZXR0aW5nIH0gIGZyb20gJy4vLi4vc2hhcmVkL3F1aXouc2V0dGluZ3MuaW50ZXJmYWNlLnRzJztcclxuaW1wb3J0IHsgUXVpelNwZWNpZVNlcnZpY2UgfSAgZnJvbSAnLi8uLi9zaGFyZWQvcXVpei1zcGVjaWUuc2VydmljZSc7XHJcblxyXG5pbXBvcnQge2NvbnN0YW50c30gZnJvbSAnLi8uLi9jb25zdGFudHMnO1xyXG5cclxuXHJcblxyXG4vLyBpbXBvcnQgeyBxdWl6UXVlc3Rpb25zIH0gZnJvbSAnLi9tb2NrLXF1aXpRdWVzdGlvbic7XHJcbiAvL2ltcG9ydCB7IFF1aXpRdWVzdGlvbiB9IGZyb20gJy4vcXVpelF1ZXN0aW9uJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFF1aXpRdWVzdGlvbnNTZXJ2aWNle1xyXG5cclxuXHRsYXN0UXVpelNldHRpbmdzO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgX2h0dHA6IEh0dHAsXHJcblx0XHRwcml2YXRlIF9xdWl6U3BlY2llc1NlcnZpY2U6IFF1aXpTcGVjaWVTZXJ2aWNlXHJcblx0KXt9XHJcblxyXG5cdGdldFF1aXpRdWVzdGlvbnMoc2V0dGluZ3M6UXVpelNldHRpbmdbXSk6IE9ic2VydmFibGU8YW55PntcclxuXHJcblx0XHR0aGlzLmxhc3RRdWl6U2V0dGluZ3MgPSBzZXR0aW5ncztcclxuXHJcblx0XHRsZXQgY29tcGV0aXRpb25Hcm91cElEID0gc2V0dGluZ3NbMF0uY29tcGV0aXRpb25Hcm91cElEO1xyXG5cdFx0bGV0IG1lZGlhVHlwZUlEID0gc2V0dGluZ3NbMF0ubWVkaWFUeXBlSUQ7XHJcblx0XHRsZXQgYXJlYUlEID0gc2V0dGluZ3NbMF0uYXJlYUlEO1xyXG5cdFx0Ly9hcmVhSUQgPSAwO1xyXG5cdFx0Ly9sZXQgdGltZUxpbWl0ID0gc2V0dGluZ3NbMF0udGltZUxpbWl0O1xyXG5cdFx0bGV0IG51bVF1ZXN0aW9ucztcclxuXHRcdGlmKHNldHRpbmdzWzBdLnNldmVyYWxTb3VuZFF1aXope1xyXG5cdFx0XHRudW1RdWVzdGlvbnMgPSBNYXRoLmZsb29yKHNldHRpbmdzWzBdLm51bVF1ZXN0aW9ucyAqIDIuNSk7XHJcblx0XHR9ZWxzZXtcclxuXHRcdFx0bnVtUXVlc3Rpb25zID0gc2V0dGluZ3NbMF0ubnVtUXVlc3Rpb25zO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vbGV0IHNob3dBbHRlcm5hdGl2ZXMgPSBzZXR0aW5nc1swXS5zaG93QWx0ZXJuYXRpdmVzO1xyXG5cdFx0bGV0IG1lZGlhRGlmaWN1bGl0eSA9IHNldHRpbmdzWzBdLm1lZGlhRGlmaWN1bGl0eTtcclxuXHRcdGxldCBzaXRlSUQgPSBzZXR0aW5nc1swXS5zaXRlSUQ7XHJcblx0XHRsZXQgbGFuZ0lEID0gc2V0dGluZ3NbMF0ubGFuZ0lEO1xyXG5cclxuXHRcdGxldCBleHRyYVVSTCA9IFwiXCI7XHJcblx0XHRleHRyYVVSTCArPSBcIiZudW1iZXJRdWVzdGlvbnM9XCIgKyBudW1RdWVzdGlvbnM7XHJcblx0XHRleHRyYVVSTCArPSBcIiZudW1SZXBlYXRpbmdTcGVjaWVzPVwiICsgTWF0aC5mbG9vcihudW1RdWVzdGlvbnMqMC4xKTtcclxuXHRcdGV4dHJhVVJMICs9IFwiJmRpZmZpY3VsdHk9XCIgKyBtZWRpYURpZmljdWxpdHk7XHJcblx0XHRleHRyYVVSTCArPSBcIiZhcmVhSUQ9XCIgKyBhcmVhSUQ7XHJcblx0XHRleHRyYVVSTCArPSBcIiZtZWRpYVR5cGU9XCIgKyBtZWRpYVR5cGVJRDtcclxuXHRcdGV4dHJhVVJMICs9IFwiJmNvbXBldGl0aW9uR3JvdXBJRD1cIiArIGNvbXBldGl0aW9uR3JvdXBJRDtcclxuXHJcblx0XHRpZihzZXR0aW5nc1swXS5mb3JtYWxUZXN0UXVpeil7XHJcblx0XHRcdGV4dHJhVVJMICs9IFwiJmFjY2Vzc0NvZGU9XCIgKyBzZXR0aW5nc1swXS5mb3JtYWxUZXN0QWNjZXNzQ29kZTtcclxuXHRcdH1cclxuXHJcblx0XHRpZih0aGlzLl9xdWl6U3BlY2llc1NlcnZpY2UuZ2V0U2VsZWN0ZWRTcGVjaWVMaXN0KCkubGVuZ3RoID4gMCl7XHJcblx0XHRcdGV4dHJhVVJMICs9IFwiJmN1c3R1bVNwZWNpZUxpc3Q9XCIgKyB0aGlzLl9xdWl6U3BlY2llc1NlcnZpY2UuZ2V0U2VsZWN0ZWRTcGVjaWVMaXN0Q1NWKCk7XHJcblx0XHR9XHJcblxyXG5cclxuXHRcdGV4dHJhVVJMICs9IFwiJmxhbmdJRD1cIiArIGxhbmdJRDtcclxuXHRcdGV4dHJhVVJMICs9IFwiJnNpdGVJRD1cIiArIHNpdGVJRDtcclxuXHJcblx0XHRjb25zb2xlLmxvZyhcImh0dHBzOi8vaGVtYnN0dWRpb3Mubm8vL2JpcmRpZC9JRHByb2dyYW0vZ2V0UXVlc3Rpb25zRGF0YS5waHA/SlNPTj0xXCIrZXh0cmFVUkwpXHJcblxyXG5cclxuXHRcdHJldHVybiB0aGlzLl9odHRwLmdldChjb25zdGFudHMuYmFzZVVSTCtcIi9nZXRRdWVzdGlvbnNEYXRhLnBocD9KU09OPTFcIitleHRyYVVSTClcclxuXHRcdFx0Lm1hcChyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpO1xyXG5cclxuXHRcdC8vcmV0dXJuIFByb21pc2UucmVzb2x2ZShxdWl6UXVlc3Rpb25zKTtcclxuXHJcblx0fVxyXG5cclxuXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
