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
    var QuizCompetitionService;
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
            QuizCompetitionService = (function () {
                function QuizCompetitionService(_http) {
                    this._http = _http;
                    this.siteID = 1;
                    this.langID = 2;
                    this.compLoadProblems = false;
                    this.dataLoadedEventEmiter = new core_1.EventEmitter();
                    this.dataLoadedSpesificGroupEE = new core_1.EventEmitter();
                }
                //not working in services?
                QuizCompetitionService.prototype.ngOnInit = function () {
                    console.log("QuizTranslationService ngOnInit");
                    //this.initialize();
                };
                QuizCompetitionService.prototype.initialize = function (siteID, langID) {
                    var _this = this;
                    this.siteID = siteID;
                    this.langID = langID;
                    setTimeout(function () {
                        _this.loadCompetitionGroups();
                    }, 0);
                    return this.dataLoadedEventEmiter;
                };
                QuizCompetitionService.prototype.loadCompetitionGroups = function () {
                    var _this = this;
                    this._http.get(constants_1.constants.baseURL + "/getCompetitionGroup.php")
                        .map(function (response) { return response.json(); }).subscribe(function (data) {
                        //console.log("comp data: ", data);
                        _this.competitionGroups = data;
                        _this.dataLoadedEventEmiter.emit(true);
                    }, function (error) {
                        _this.compLoadProblems = true;
                        console.error("compLoadProblems ERROR! ", error);
                        _this.dataLoadedEventEmiter.emit(false);
                    });
                };
                QuizCompetitionService.prototype.getCompetitionGroups = function () {
                    return this.competitionGroups;
                };
                QuizCompetitionService.prototype.loadSelectedCompetitionGroup = function (selectedGroupID) {
                    var _this = this;
                    this.selectedCompetitionGroupID = selectedGroupID;
                    this._http.get(constants_1.constants.baseURL + "/getCompetitionGroup.php?compGroupID=" + this.selectedCompetitionGroupID)
                        .map(function (response) { return response.json(); }).subscribe(function (data) {
                        _this.competitionGroupSelected = data;
                        _this.dataLoadedSpesificGroupEE.emit(true);
                    });
                    return this.dataLoadedSpesificGroupEE;
                };
                QuizCompetitionService.prototype.getSelectedCompetitionGroup = function (selectedGroupID) {
                    return this.competitionGroupSelected;
                };
                QuizCompetitionService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], QuizCompetitionService);
                return QuizCompetitionService;
            }());
            exports_1("QuizCompetitionService", QuizCompetitionService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9xdWl6LWNvbXBldGl0aW9uLWdyb3VwLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBWUE7Z0JBZUMsZ0NBQ1MsS0FBVztvQkFBWCxVQUFLLEdBQUwsS0FBSyxDQUFNO29CQWRwQixXQUFNLEdBQUcsQ0FBQyxDQUFDO29CQUNYLFdBQU0sR0FBRyxDQUFDLENBQUM7b0JBTVgscUJBQWdCLEdBQUcsS0FBSyxDQUFDO29CQUV6QiwwQkFBcUIsR0FBRyxJQUFJLG1CQUFZLEVBQVcsQ0FBQztvQkFDcEQsOEJBQXlCLEdBQUcsSUFBSSxtQkFBWSxFQUFXLENBQUM7Z0JBS3RELENBQUM7Z0JBRUgsMEJBQTBCO2dCQUMxQix5Q0FBUSxHQUFSO29CQUVDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUNBQWlDLENBQUMsQ0FBQztvQkFDL0Msb0JBQW9CO2dCQUNwQixDQUFDO2dCQUVGLDJDQUFVLEdBQVYsVUFBVyxNQUFNLEVBQUUsTUFBTTtvQkFBekIsaUJBWUM7b0JBVkEsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7b0JBQ3JCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO29CQUVyQixVQUFVLENBQUM7d0JBQ1YsS0FBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7b0JBQzlCLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFFTixNQUFNLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDO2dCQUduQyxDQUFDO2dCQUVRLHNEQUFxQixHQUE3QjtvQkFBQSxpQkFlQTtvQkFkQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxxQkFBUyxDQUFDLE9BQU8sR0FBQywwQkFBMEIsQ0FBQzt5QkFDM0QsR0FBRyxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFmLENBQWUsQ0FBQyxDQUFDLFNBQVMsQ0FDMUMsVUFBQSxJQUFJO3dCQUNILG1DQUFtQzt3QkFDbkMsS0FBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQzt3QkFDOUIsS0FBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDdkMsQ0FBQyxFQUNRLFVBQUEsS0FBSzt3QkFDYixLQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO3dCQUM3QixPQUFPLENBQUMsS0FBSyxDQUFDLDBCQUEwQixFQUFFLEtBQUssQ0FBQyxDQUFDO3dCQUNqRCxLQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUN4QyxDQUFDLENBQ0QsQ0FBQztnQkFFSixDQUFDO2dCQUVELHFEQUFvQixHQUFwQjtvQkFDQyxNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDO2dCQUUvQixDQUFDO2dCQUVELDZEQUE0QixHQUE1QixVQUE2QixlQUFlO29CQUE1QyxpQkFhQztvQkFYQSxJQUFJLENBQUMsMEJBQTBCLEdBQUMsZUFBZSxDQUFDO29CQUVoRCxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxxQkFBUyxDQUFDLE9BQU8sR0FBQyx1Q0FBdUMsR0FBQyxJQUFJLENBQUMsMEJBQTBCLENBQUM7eUJBQ3hHLEdBQUcsQ0FBQyxVQUFBLFFBQVEsSUFBSSxPQUFBLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBZixDQUFlLENBQUMsQ0FBQyxTQUFTLENBQzFDLFVBQUEsSUFBSTt3QkFDSCxLQUFJLENBQUMsd0JBQXdCLEdBQUcsSUFBSSxDQUFDO3dCQUNyQyxLQUFJLENBQUMseUJBQXlCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUMzQyxDQUFDLENBQ0QsQ0FBQztvQkFFRixNQUFNLENBQUMsSUFBSSxDQUFDLHlCQUF5QixDQUFDO2dCQUN2QyxDQUFDO2dCQUVELDREQUEyQixHQUEzQixVQUE0QixlQUFlO29CQUUxQyxNQUFNLENBQUMsSUFBSSxDQUFDLHdCQUF3QixDQUFDO2dCQUV0QyxDQUFDO2dCQWxGRjtvQkFBQyxpQkFBVSxFQUFFOzswQ0FBQTtnQkF1RmIsNkJBQUM7WUFBRCxDQXRGQSxBQXNGQyxJQUFBO1lBdEZELDJEQXNGQyxDQUFBIiwiZmlsZSI6InNoYXJlZC9xdWl6LWNvbXBldGl0aW9uLWdyb3VwLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPbkluaXQsIEV2ZW50RW1pdHRlcn0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHAgfSBmcm9tICdhbmd1bGFyMi9odHRwJztcclxuXHJcbmltcG9ydCAncnhqcy9SeCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5cclxuaW1wb3J0IHtjb25zdGFudHN9IGZyb20gJy4vLi4vY29uc3RhbnRzJztcclxuXHJcblxyXG5cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFF1aXpDb21wZXRpdGlvblNlcnZpY2UgaW1wbGVtZW50cyBPbkluaXR7XHJcblxyXG5cdHNpdGVJRCA9IDE7XHJcblx0bGFuZ0lEID0gMjtcclxuXHRjb21wZXRpdGlvbkdyb3VwcztcclxuXHRwcm9taXNlO1xyXG5cdHNlbGVjdGVkQ29tcGV0aXRpb25Hcm91cElEO1xyXG5cdGNvbXBldGl0aW9uR3JvdXBTZWxlY3RlZDtcclxuXHJcblx0Y29tcExvYWRQcm9ibGVtcyA9IGZhbHNlO1xyXG5cclxuXHRkYXRhTG9hZGVkRXZlbnRFbWl0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcblx0ZGF0YUxvYWRlZFNwZXNpZmljR3JvdXBFRSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuXHJcblxyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSBfaHR0cDogSHR0cFxyXG5cdCl7fVxyXG5cclxuXHQvL25vdCB3b3JraW5nIGluIHNlcnZpY2VzP1xyXG5cdG5nT25Jbml0KCkge1xyXG5cclxuXHRcdGNvbnNvbGUubG9nKFwiUXVpelRyYW5zbGF0aW9uU2VydmljZSBuZ09uSW5pdFwiKTtcclxuXHRcdC8vdGhpcy5pbml0aWFsaXplKCk7XHJcblx0IH1cclxuXHJcblx0aW5pdGlhbGl6ZShzaXRlSUQsIGxhbmdJRCl7XHJcblxyXG5cdFx0dGhpcy5zaXRlSUQgPSBzaXRlSUQ7XHJcblx0XHR0aGlzLmxhbmdJRCA9IGxhbmdJRDtcclxuXHJcblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0dGhpcy5sb2FkQ29tcGV0aXRpb25Hcm91cHMoKTtcclxuXHRcdH0sIDApO1xyXG5cclxuXHRcdHJldHVybiB0aGlzLmRhdGFMb2FkZWRFdmVudEVtaXRlcjtcclxuXHJcblxyXG5cdH1cclxuXHJcblx0IHByaXZhdGUgbG9hZENvbXBldGl0aW9uR3JvdXBzKCl7XHJcblx0XHQgdGhpcy5faHR0cC5nZXQoY29uc3RhbnRzLmJhc2VVUkwrXCIvZ2V0Q29tcGV0aXRpb25Hcm91cC5waHBcIilcclxuXHRcdFx0Lm1hcChyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpLnN1YnNjcmliZShcclxuXHRcdFx0XHRkYXRhID0+IHtcclxuXHRcdFx0XHRcdC8vY29uc29sZS5sb2coXCJjb21wIGRhdGE6IFwiLCBkYXRhKTtcclxuXHRcdFx0XHRcdHRoaXMuY29tcGV0aXRpb25Hcm91cHMgPSBkYXRhO1xyXG5cdFx0XHRcdFx0dGhpcy5kYXRhTG9hZGVkRXZlbnRFbWl0ZXIuZW1pdCh0cnVlKTtcclxuXHRcdFx0XHR9LFxyXG5cdCAgICAgICAgICAgIGVycm9yID0+IHtcclxuXHRcdFx0XHRcdHRoaXMuY29tcExvYWRQcm9ibGVtcyA9IHRydWU7XHJcblx0XHRcdFx0XHRjb25zb2xlLmVycm9yKFwiY29tcExvYWRQcm9ibGVtcyBFUlJPUiEgXCIsIGVycm9yKTtcclxuXHRcdFx0XHRcdHRoaXMuZGF0YUxvYWRlZEV2ZW50RW1pdGVyLmVtaXQoZmFsc2UpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0KTtcclxuXHJcblx0fVxyXG5cclxuXHRnZXRDb21wZXRpdGlvbkdyb3Vwcygpe1xyXG5cdFx0cmV0dXJuIHRoaXMuY29tcGV0aXRpb25Hcm91cHM7XHJcblxyXG5cdH1cclxuXHJcblx0bG9hZFNlbGVjdGVkQ29tcGV0aXRpb25Hcm91cChzZWxlY3RlZEdyb3VwSUQpe1xyXG5cclxuXHRcdHRoaXMuc2VsZWN0ZWRDb21wZXRpdGlvbkdyb3VwSUQ9c2VsZWN0ZWRHcm91cElEO1xyXG5cclxuXHRcdHRoaXMuX2h0dHAuZ2V0KGNvbnN0YW50cy5iYXNlVVJMK1wiL2dldENvbXBldGl0aW9uR3JvdXAucGhwP2NvbXBHcm91cElEPVwiK3RoaXMuc2VsZWN0ZWRDb21wZXRpdGlvbkdyb3VwSUQpXHJcblx0XHQubWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSkuc3Vic2NyaWJlKFxyXG5cdFx0XHRkYXRhID0+IHtcclxuXHRcdFx0XHR0aGlzLmNvbXBldGl0aW9uR3JvdXBTZWxlY3RlZCA9IGRhdGE7XHJcblx0XHRcdFx0dGhpcy5kYXRhTG9hZGVkU3Blc2lmaWNHcm91cEVFLmVtaXQodHJ1ZSk7XHJcblx0XHRcdH1cclxuXHRcdCk7XHJcblxyXG5cdFx0cmV0dXJuIHRoaXMuZGF0YUxvYWRlZFNwZXNpZmljR3JvdXBFRTtcclxuXHR9XHJcblxyXG5cdGdldFNlbGVjdGVkQ29tcGV0aXRpb25Hcm91cChzZWxlY3RlZEdyb3VwSUQpe1xyXG5cclxuXHRcdHJldHVybiB0aGlzLmNvbXBldGl0aW9uR3JvdXBTZWxlY3RlZDtcclxuXHJcblx0fVxyXG5cclxuXHJcblxyXG5cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
