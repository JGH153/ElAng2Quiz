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
    var QuizSpecieService;
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
            QuizSpecieService = (function () {
                function QuizSpecieService(_http) {
                    this._http = _http;
                    this.numSpecies = 0;
                    this.arrayOfSelectedSpecies = [];
                    this.speciesDataLoaded = false;
                    this.speciesLoadProblems = false;
                    this.siteID = 1;
                    this.areaID = 0;
                    this.langID = 2;
                    this.dataLoadedEventEmiter = new core_1.EventEmitter();
                }
                //not working in services?
                QuizSpecieService.prototype.ngOnInit = function () {
                    console.log("QuizTranslationService ngOnInit");
                    //this.initialize();
                };
                QuizSpecieService.prototype.initialize = function (siteID, langID) {
                    var _this = this;
                    this.siteID = siteID;
                    this.langID = langID;
                    this.clearSelectedSpecies();
                    setTimeout(function () {
                        _this.loadSpecies();
                    }, 0);
                    return this.dataLoadedEventEmiter;
                    //this.setSelectedSpecie([1854,1422,1901,1136,1221,1791,1729,1984,1313,1359,1628,1409,1149,1669,1531]);
                };
                QuizSpecieService.prototype.loadAreaId = function (areaID) {
                    this.areaID = areaID;
                    this.loadSpecies();
                    return this.dataLoadedEventEmiter;
                };
                QuizSpecieService.prototype.loadSpecies = function () {
                    var _this = this;
                    this._http.get(constants_1.constants.baseURL + "/getSpecieList.php?JSON=1&langID=" + this.langID + "&siteID=" + this.siteID + "&areaID=" + this.areaID)
                        .map(function (response) { return response.json(); }).subscribe(function (data) {
                        _this.specieListJSON = data;
                        delete _this.specieListJSON['numSpeciesDiplayed'];
                        _this.speciesData = data;
                        _this.prosessSpecielist();
                        _this.speciesDataLoaded = true;
                        _this.dataLoadedEventEmiter.emit(true);
                    }, function (error) {
                        _this.speciesLoadProblems = true;
                        console.error("getQuizQuestions ERROR! ", error);
                        _this.dataLoadedEventEmiter.emit(false);
                    });
                    //return Promise.resolve(quizQuestions);
                };
                //somewhat JSON to js array
                QuizSpecieService.prototype.prosessSpecielist = function () {
                    // console.log(this.speciesData);
                    // console.log(this.speciesData['numSpeciesDiplayed']);
                    this.numSpecies = this.speciesData['numSpeciesDiplayed'];
                    this.specieList = [];
                    //make Array of JSON objects
                    for (var _i = 0, _a = Object.keys(this.speciesData); _i < _a.length; _i++) {
                        var id = _a[_i];
                        this.specieList.push(this.speciesData[id]);
                    }
                    // console.log(this.speciesData[5]);
                    //console.log("this.specieList: ---------- ", this.specieList);
                    // console.log("this.specieList11: ", this.specieList[1][1]);
                };
                QuizSpecieService.prototype.getSpecieList = function () {
                    return this.specieList;
                };
                QuizSpecieService.prototype.getSelectedSpecieList = function () {
                    return this.arrayOfSelectedSpecies;
                };
                QuizSpecieService.prototype.getSelectedSpecieListCSV = function () {
                    var stringList = "";
                    for (var _i = 0, _a = Object.keys(this.arrayOfSelectedSpecies); _i < _a.length; _i++) {
                        var id = _a[_i];
                        stringList += this.arrayOfSelectedSpecies[id].id + ",";
                    }
                    return stringList.substring(0, stringList.length - 1);
                };
                QuizSpecieService.prototype.clearSelectedSpecies = function () {
                    this.arrayOfSelectedSpecies = [];
                };
                QuizSpecieService.prototype.setSelectedSpecie = function (arrayOfSelectedSpecies) {
                    if (arrayOfSelectedSpecies == undefined || arrayOfSelectedSpecies == null) {
                    }
                    else {
                        this.arrayOfSelectedSpecies = arrayOfSelectedSpecies;
                    }
                };
                QuizSpecieService.prototype.getSpecieListJSON = function () {
                    return this.specieListJSON;
                };
                QuizSpecieService.prototype.getNumSpeciesTotal = function () {
                    return this.numSpecies;
                };
                QuizSpecieService.prototype.dataLoaded = function () {
                    return this.speciesDataLoaded;
                };
                QuizSpecieService.prototype.loadSpecieList = function () {
                    return this.arrayOfSelectedSpecies;
                };
                QuizSpecieService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], QuizSpecieService);
                return QuizSpecieService;
            }());
            exports_1("QuizSpecieService", QuizSpecieService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9xdWl6LXNwZWNpZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVlBO2dCQW1CQywyQkFDUyxLQUFXO29CQUFYLFVBQUssR0FBTCxLQUFLLENBQU07b0JBZnBCLGVBQVUsR0FBRyxDQUFDLENBQUM7b0JBQ2YsMkJBQXNCLEdBQUcsRUFBRSxDQUFDO29CQUU1QixzQkFBaUIsR0FBRyxLQUFLLENBQUM7b0JBQzFCLHdCQUFtQixHQUFHLEtBQUssQ0FBQztvQkFFNUIsV0FBTSxHQUFHLENBQUMsQ0FBQztvQkFDWCxXQUFNLEdBQUMsQ0FBQyxDQUFDO29CQUNULFdBQU0sR0FBRyxDQUFDLENBQUM7b0JBSVgsMEJBQXFCLEdBQUcsSUFBSSxtQkFBWSxFQUFXLENBQUM7Z0JBSWxELENBQUM7Z0JBRUgsMEJBQTBCO2dCQUMxQixvQ0FBUSxHQUFSO29CQUVDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUNBQWlDLENBQUMsQ0FBQztvQkFDL0Msb0JBQW9CO2dCQUVwQixDQUFDO2dCQUVGLHNDQUFVLEdBQVYsVUFBVyxNQUFNLEVBQUUsTUFBTTtvQkFBekIsaUJBZUM7b0JBYkEsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7b0JBQ3JCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO29CQUVyQixJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztvQkFFNUIsVUFBVSxDQUFDO3dCQUNWLEtBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztvQkFDcEIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUVOLE1BQU0sQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUM7b0JBRWxDLHVHQUF1RztnQkFFeEcsQ0FBQztnQkFFRCxzQ0FBVSxHQUFWLFVBQVcsTUFBYztvQkFDeEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7b0JBQ3JCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztvQkFF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Q0FBaUIsR0FBakIsVUFBa0Isc0JBQXNCO29CQUN2QyxFQUFFLENBQUEsQ0FBQyxzQkFBc0IsSUFBRSxTQUFTLElBQUksc0JBQXNCLElBQUUsSUFBSSxDQUFDLENBQUEsQ0FBQztvQkFFdEUsQ0FBQztvQkFBQSxJQUFJLENBQUEsQ0FBQzt3QkFDTCxJQUFJLENBQUMsc0JBQXNCLEdBQUcsc0JBQXNCLENBQUM7b0JBQ3RELENBQUM7Z0JBRUYsQ0FBQztnQkFFRCw2Q0FBaUIsR0FBakI7b0JBRUMsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUM7Z0JBRTVCLENBQUM7Z0JBRUQsOENBQWtCLEdBQWxCO29CQUVDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO2dCQUV4QixDQUFDO2dCQUVELHNDQUFVLEdBQVY7b0JBRUMsTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztnQkFFL0IsQ0FBQztnQkFDRCwwQ0FBYyxHQUFkO29CQUNDLE1BQU0sQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUM7Z0JBQ3BDLENBQUM7Z0JBaktGO29CQUFDLGlCQUFVLEVBQUU7O3FDQUFBO2dCQW1NYix3QkFBQztZQUFELENBbE1BLEFBa01DLElBQUE7WUFsTUQsaURBa01DLENBQUEiLCJmaWxlIjoic2hhcmVkL3F1aXotc3BlY2llLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPbkluaXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwIH0gZnJvbSAnYW5ndWxhcjIvaHR0cCc7XHJcblxyXG5pbXBvcnQgJ3J4anMvUngnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuXHJcbmltcG9ydCB7Y29uc3RhbnRzfSBmcm9tICcuLy4uL2NvbnN0YW50cyc7XHJcblxyXG5cclxuXHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBRdWl6U3BlY2llU2VydmljZSBpbXBsZW1lbnRzIE9uSW5pdHtcclxuXHJcblx0c3BlY2llc0RhdGE7XHJcblx0c3BlY2llTGlzdDtcclxuXHRzcGVjaWVMaXN0SlNPTjtcclxuXHRudW1TcGVjaWVzID0gMDtcclxuXHRhcnJheU9mU2VsZWN0ZWRTcGVjaWVzID0gW107XHJcblxyXG5cdHNwZWNpZXNEYXRhTG9hZGVkID0gZmFsc2U7XHJcblx0c3BlY2llc0xvYWRQcm9ibGVtcyA9IGZhbHNlO1xyXG5cclxuXHRzaXRlSUQgPSAxO1xyXG5cdGFyZWFJRD0wO1xyXG5cdGxhbmdJRCA9IDI7XHJcblxyXG5cdHByb21pc2U7XHJcblxyXG5cdGRhdGFMb2FkZWRFdmVudEVtaXRlciA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuXHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIF9odHRwOiBIdHRwXHJcblx0KXt9XHJcblxyXG5cdC8vbm90IHdvcmtpbmcgaW4gc2VydmljZXM/XHJcblx0bmdPbkluaXQoKSB7XHJcblxyXG5cdFx0Y29uc29sZS5sb2coXCJRdWl6VHJhbnNsYXRpb25TZXJ2aWNlIG5nT25Jbml0XCIpO1xyXG5cdFx0Ly90aGlzLmluaXRpYWxpemUoKTtcclxuXHJcblx0IH1cclxuXHJcblx0aW5pdGlhbGl6ZShzaXRlSUQsIGxhbmdJRCl7XHJcblxyXG5cdFx0dGhpcy5zaXRlSUQgPSBzaXRlSUQ7XHJcblx0XHR0aGlzLmxhbmdJRCA9IGxhbmdJRDtcclxuXHJcblx0XHR0aGlzLmNsZWFyU2VsZWN0ZWRTcGVjaWVzKCk7XHJcblxyXG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdHRoaXMubG9hZFNwZWNpZXMoKTtcclxuXHRcdH0sIDApO1xyXG5cclxuXHRcdHJldHVybiB0aGlzLmRhdGFMb2FkZWRFdmVudEVtaXRlcjtcclxuXHJcblx0XHQvL3RoaXMuc2V0U2VsZWN0ZWRTcGVjaWUoWzE4NTQsMTQyMiwxOTAxLDExMzYsMTIyMSwxNzkxLDE3MjksMTk4NCwxMzEzLDEzNTksMTYyOCwxNDA5LDExNDksMTY2OSwxNTMxXSk7XHJcblxyXG5cdH1cclxuXHJcblx0bG9hZEFyZWFJZChhcmVhSUQ6IG51bWJlcil7XHJcblx0XHR0aGlzLmFyZWFJRCA9IGFyZWFJRDtcclxuXHRcdHRoaXMubG9hZFNwZWNpZXMoKTtcclxu4oCLXHJcblx0XHRyZXR1cm4gdGhpcy5kYXRhTG9hZGVkRXZlbnRFbWl0ZXI7XHJcblx0XHR9XHJcblxyXG5cdHByaXZhdGUgbG9hZFNwZWNpZXMoKXtcclxuXHJcblx0XHR0aGlzLl9odHRwLmdldChjb25zdGFudHMuYmFzZVVSTCtcIi9nZXRTcGVjaWVMaXN0LnBocD9KU09OPTEmbGFuZ0lEPVwiK3RoaXMubGFuZ0lEK1wiJnNpdGVJRD1cIit0aGlzLnNpdGVJRCtcIiZhcmVhSUQ9XCIrdGhpcy5hcmVhSUQpXHJcblx0XHRcdC5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKS5zdWJzY3JpYmUoXHJcblx0ICAgICAgICAgICAgZGF0YSA9PiB7XHJcblxyXG5cdFx0XHRcdFx0dGhpcy5zcGVjaWVMaXN0SlNPTiA9IGRhdGE7XHJcblx0XHRcdFx0XHRkZWxldGUgdGhpcy5zcGVjaWVMaXN0SlNPTlsnbnVtU3BlY2llc0RpcGxheWVkJ107XHJcblxyXG5cdCAgICAgICAgICAgICAgICB0aGlzLnNwZWNpZXNEYXRhID0gZGF0YTtcclxuXHRcdFx0XHRcdHRoaXMucHJvc2Vzc1NwZWNpZWxpc3QoKTtcclxuXHQgICAgICAgICAgICAgICAgdGhpcy5zcGVjaWVzRGF0YUxvYWRlZCA9IHRydWU7XHJcblx0XHRcdFx0XHR0aGlzLmRhdGFMb2FkZWRFdmVudEVtaXRlci5lbWl0KHRydWUpO1xyXG5cdCAgICAgICAgICAgIH0sXHJcblx0ICAgICAgICAgICAgZXJyb3IgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5zcGVjaWVzTG9hZFByb2JsZW1zID0gdHJ1ZTtcclxuXHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoXCJnZXRRdWl6UXVlc3Rpb25zIEVSUk9SISBcIiwgZXJyb3IpXHJcblx0XHRcdFx0XHR0aGlzLmRhdGFMb2FkZWRFdmVudEVtaXRlci5lbWl0KGZhbHNlKTtcclxuXHRcdFx0XHR9XHJcblx0ICAgICAgICApO1xyXG5cclxuXHRcdC8vcmV0dXJuIFByb21pc2UucmVzb2x2ZShxdWl6UXVlc3Rpb25zKTtcclxuXHJcblx0fVxyXG5cclxuXHQvL3NvbWV3aGF0IEpTT04gdG8ganMgYXJyYXlcclxuXHRwcml2YXRlIHByb3Nlc3NTcGVjaWVsaXN0KCl7XHJcblxyXG5cclxuXHJcblx0XHQvLyBjb25zb2xlLmxvZyh0aGlzLnNwZWNpZXNEYXRhKTtcclxuXHRcdC8vIGNvbnNvbGUubG9nKHRoaXMuc3BlY2llc0RhdGFbJ251bVNwZWNpZXNEaXBsYXllZCddKTtcclxuXHJcblx0XHR0aGlzLm51bVNwZWNpZXMgPSB0aGlzLnNwZWNpZXNEYXRhWydudW1TcGVjaWVzRGlwbGF5ZWQnXTtcclxuXHJcblx0XHR0aGlzLnNwZWNpZUxpc3QgPSBbXTtcclxuXHJcblx0XHQvL21ha2UgQXJyYXkgb2YgSlNPTiBvYmplY3RzXHJcblx0XHRmb3IgKGxldCBpZCBvZiBPYmplY3Qua2V5cyh0aGlzLnNwZWNpZXNEYXRhKSkge1xyXG5cdFx0XHR0aGlzLnNwZWNpZUxpc3QucHVzaCh0aGlzLnNwZWNpZXNEYXRhW2lkXSk7XHJcblx0XHR9XHJcblxyXG5cclxuXHRcdC8vIGNvbnNvbGUubG9nKHRoaXMuc3BlY2llc0RhdGFbNV0pO1xyXG5cdFx0Ly9jb25zb2xlLmxvZyhcInRoaXMuc3BlY2llTGlzdDogLS0tLS0tLS0tLSBcIiwgdGhpcy5zcGVjaWVMaXN0KTtcclxuXHRcdC8vIGNvbnNvbGUubG9nKFwidGhpcy5zcGVjaWVMaXN0MTE6IFwiLCB0aGlzLnNwZWNpZUxpc3RbMV1bMV0pO1xyXG5cclxuXHJcblx0fVxyXG5cclxuXHRnZXRTcGVjaWVMaXN0KCl7XHJcblxyXG5cdFx0cmV0dXJuIHRoaXMuc3BlY2llTGlzdDtcclxuXHR9XHJcblxyXG5cdGdldFNlbGVjdGVkU3BlY2llTGlzdCgpe1xyXG5cclxuXHRcdHJldHVybiB0aGlzLmFycmF5T2ZTZWxlY3RlZFNwZWNpZXM7XHJcblxyXG5cdH1cclxuXHJcblx0Z2V0U2VsZWN0ZWRTcGVjaWVMaXN0Q1NWKCl7XHJcblxyXG5cdFx0bGV0IHN0cmluZ0xpc3QgPSBcIlwiO1xyXG5cclxuXHRcdGZvciAobGV0IGlkIG9mIE9iamVjdC5rZXlzKHRoaXMuYXJyYXlPZlNlbGVjdGVkU3BlY2llcykpIHtcclxuXHRcdFx0c3RyaW5nTGlzdCArPSB0aGlzLmFycmF5T2ZTZWxlY3RlZFNwZWNpZXNbaWRdLmlkICsgXCIsXCJcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gc3RyaW5nTGlzdC5zdWJzdHJpbmcoMCwgc3RyaW5nTGlzdC5sZW5ndGgtMSk7XHJcblxyXG5cdH1cclxuXHJcblx0Y2xlYXJTZWxlY3RlZFNwZWNpZXMoKXtcclxuXHRcdHRoaXMuYXJyYXlPZlNlbGVjdGVkU3BlY2llcyA9IFtdO1xyXG5cdH1cclxuXHJcblx0c2V0U2VsZWN0ZWRTcGVjaWUoYXJyYXlPZlNlbGVjdGVkU3BlY2llcyl7XHJcblx0XHRpZihhcnJheU9mU2VsZWN0ZWRTcGVjaWVzPT11bmRlZmluZWQgfHwgYXJyYXlPZlNlbGVjdGVkU3BlY2llcz09bnVsbCl7XHJcblxyXG5cdFx0fWVsc2V7XHJcblx0XHRcdHRoaXMuYXJyYXlPZlNlbGVjdGVkU3BlY2llcyA9IGFycmF5T2ZTZWxlY3RlZFNwZWNpZXM7XHJcblx0XHR9XHJcblxyXG5cdH1cclxuXHJcblx0Z2V0U3BlY2llTGlzdEpTT04oKXtcclxuXHJcblx0XHRyZXR1cm4gdGhpcy5zcGVjaWVMaXN0SlNPTjtcclxuXHJcblx0fVxyXG5cclxuXHRnZXROdW1TcGVjaWVzVG90YWwoKXtcclxuXHJcblx0XHRyZXR1cm4gdGhpcy5udW1TcGVjaWVzO1xyXG5cclxuXHR9XHJcblxyXG5cdGRhdGFMb2FkZWQoKXtcclxuXHJcblx0XHRyZXR1cm4gdGhpcy5zcGVjaWVzRGF0YUxvYWRlZDtcclxuXHJcblx0fVxyXG5cdGxvYWRTcGVjaWVMaXN0KCl7XHJcblx0XHRyZXR1cm4gdGhpcy5hcnJheU9mU2VsZWN0ZWRTcGVjaWVzO1xyXG5cdH1cclxuXHJcblx0Ly8gdHJhbnNsYXRpb25zQXJlTG9hZGVkKCl7XHJcblx0Ly9cclxuXHQvLyBcdHJldHVybiB0aGlzLnRyYW5zRGF0YUxvYWRlZDtcclxuXHQvL1xyXG5cdC8vIH1cclxuXHQvL1xyXG5cdC8vIHRyYW5zbGF0aW9uc0xvYWRQcm9ibGVtcygpe1xyXG5cdC8vXHJcblx0Ly8gXHRyZXR1cm4gdGhpcy50cmFuc0xvYWRQcm9ibGVtcztcclxuXHQvL1xyXG5cdC8vIH1cclxuXHJcblx0Ly8gZ2V0VHJhbnNsYXRpb25CeUlEKGlkKXtcclxuXHQvL1xyXG5cdC8vXHJcblx0Ly8gXHQvL3JldHVybiBcIlRSQU5TTEFUSU9OUyBOT1QgTE9BREVEXCJcclxuXHQvL1xyXG5cdC8vIFx0Ly8gdGhpcy5wcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XHJcblx0Ly8gXHQvLyBcdC8vIGRvIGEgdGhpbmcsIHBvc3NpYmx5IGFzeW5jLCB0aGVu4oCmXHJcblx0Ly8gXHQvL1xyXG5cdC8vIFx0Ly8gfSk7XHJcblx0Ly8gXHQvLyByZXR1cm4gdGhpcy5wcm9taXNlO1xyXG5cdC8vXHJcblx0Ly8gXHRjb25zb2xlLmxvZyhcInRoaXMudHJhbnNEYXRhTG9hZGVkOiBcIiwgdGhpcy50cmFuc0RhdGFMb2FkZWQpXHJcblx0Ly8gXHRpZighdGhpcy50cmFuc0RhdGFMb2FkZWQpe1xyXG5cdC8vIFx0XHRyZXR1cm4gXCJUUkFOU0xBVElPTlMgTk9UIExPQURFRFwiXHJcblx0Ly8gXHR9ZWxzZXtcclxuXHQvLyBcdFx0cmV0dXJuIHRoaXMudHJhbnNsYXRpb25EYXRhW2lkXTtcclxuXHQvLyBcdH1cclxuXHQvL1xyXG5cdC8vXHJcblx0Ly8gfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
