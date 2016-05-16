System.register(['angular2/core', 'angular2/http', './../shared/quiz-settings.service', './../shared/quiz-results.service'], function(exports_1, context_1) {
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
    var core_1, http_1, quiz_settings_service_1, quiz_results_service_1;
    var ResultlistComponent;
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
            function (quiz_results_service_1_1) {
                quiz_results_service_1 = quiz_results_service_1_1;
            }],
        execute: function() {
            ResultlistComponent = (function () {
                function ResultlistComponent(_quizResultsService, _quizSettingsService) {
                    this._quizResultsService = _quizResultsService;
                    this._quizSettingsService = _quizSettingsService;
                    this.timespan = "day";
                    this.limit = 10;
                    this.updateResultlistInc = -1;
                    this.quizHighscoreLoaded = false;
                }
                ResultlistComponent.prototype.ngOnInit = function () {
                    //this.competitionGroupID=24;
                };
                //fires also on init when inputs are set for the first time
                ResultlistComponent.prototype.ngOnChanges = function () {
                    this.quizSettings = this._quizSettingsService.getQuizSettings();
                    this.loadQuizResults();
                };
                ResultlistComponent.prototype.loadQuizResults = function () {
                    var _this = this;
                    this.competitionGroupID = this._quizSettingsService.getCompetitionGroupID();
                    this._quizResultsService.getQuizResults(this.quizSettings, this.timespan, this.limit, this.competitionGroupID)
                        .subscribe(function (data) {
                        //console.log(data);
                        _this.quizHighscoreData = Object.keys(data).map(function (k) {
                            //console.log("data[k]: ", data[k], " K:",k)
                            // if(k != 'returnData'){
                            return data[k];
                            // }
                        });
                        //remove returnData = true/false
                        _this.quizHighscoreData.pop();
                        //console.log(this.quizHighscoreData);
                        _this.quizHighscoreLoaded = true;
                    }, function (error) { return console.error("getQuizResults ERROR! ", error); });
                };
                ResultlistComponent = __decorate([
                    core_1.Component({
                        selector: 'birdid-resultlist',
                        templateUrl: 'app/shared.component/resultlist.component.html',
                        styleUrls: ['app/shared.component/resultlist.component.css'],
                        directives: [],
                        providers: [
                            http_1.HTTP_PROVIDERS
                        ],
                        inputs: ['timespan:usingTimespan', 'limit:usingLimit', 'updateResultlistInc'],
                    }), 
                    __metadata('design:paramtypes', [quiz_results_service_1.QuizResultsService, quiz_settings_service_1.QuizSettingsService])
                ], ResultlistComponent);
                return ResultlistComponent;
            }());
            exports_1("ResultlistComponent", ResultlistComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC5jb21wb25lbnQvcmVzdWx0bGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFtQkE7Z0JBV0MsNkJBQ1MsbUJBQXVDLEVBQ3ZDLG9CQUF5QztvQkFEekMsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFvQjtvQkFDdkMseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFxQjtvQkFYbEQsYUFBUSxHQUFHLEtBQUssQ0FBQztvQkFDakIsVUFBSyxHQUFHLEVBQUUsQ0FBQztvQkFFWCx3QkFBbUIsR0FBRyxDQUFDLENBQUMsQ0FBQztvQkFJekIsd0JBQW1CLEdBQUcsS0FBSyxDQUFDO2dCQUl3QixDQUFDO2dCQUVwRCxzQ0FBUSxHQUFSO29CQUNDLDZCQUE2QjtnQkFFOUIsQ0FBQztnQkFFRCwyREFBMkQ7Z0JBQzNELHlDQUFXLEdBQVg7b0JBRUMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsZUFBZSxFQUFFLENBQUM7b0JBQ2hFLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztnQkFFeEIsQ0FBQztnQkFFRCw2Q0FBZSxHQUFmO29CQUFBLGlCQXVCQztvQkFyQkEsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO29CQUU1RSxJQUFJLENBQUMsbUJBQW1CLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQzt5QkFDbkcsU0FBUyxDQUNOLFVBQUEsSUFBSTt3QkFDQSxvQkFBb0I7d0JBQ3BCLEtBQUksQ0FBQyxpQkFBaUIsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFTLENBQUM7NEJBQ3ZFLDRDQUE0Qzs0QkFDNUMseUJBQXlCOzRCQUN4QixNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDOzRCQUNoQixJQUFJO3dCQUNMLENBQUMsQ0FBQyxDQUFDO3dCQUNILGdDQUFnQzt3QkFDaEMsS0FBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsRUFBRSxDQUFDO3dCQUU3QixzQ0FBc0M7d0JBQ3ZCLEtBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUM7b0JBQ3BDLENBQUMsRUFDRCxVQUFBLEtBQUssSUFBSSxPQUFBLE9BQU8sQ0FBQyxLQUFLLENBQUMsd0JBQXdCLEVBQUUsS0FBSyxDQUFDLEVBQTlDLENBQThDLENBQzFELENBQUE7Z0JBRVosQ0FBQztnQkFoRUg7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVixRQUFRLEVBQUUsbUJBQW1CO3dCQUM3QixXQUFXLEVBQUUsZ0RBQWdEO3dCQUM3RCxTQUFTLEVBQUcsQ0FBQywrQ0FBK0MsQ0FBQzt3QkFDN0QsVUFBVSxFQUFFLEVBRVg7d0JBQ0QsU0FBUyxFQUFFOzRCQUNULHFCQUFjO3lCQUNmO3dCQUNELE1BQU0sRUFBRSxDQUFDLHdCQUF3QixFQUFFLGtCQUFrQixFQUFFLHFCQUFxQixDQUFDO3FCQUM3RSxDQUFDOzt1Q0FBQTtnQkF1REYsMEJBQUM7WUFBRCxDQXJEQSxBQXFEQyxJQUFBO1lBckRELHFEQXFEQyxDQUFBIiwiZmlsZSI6InNoYXJlZC5jb21wb25lbnQvcmVzdWx0bGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgT25Jbml0LCBPbkNoYW5nZXMsIFZpZXdDaGlsZCwgQWZ0ZXJWaWV3SW5pdCwgRWxlbWVudFJlZiB9ICAgICAgIGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwLCBIVFRQX1BST1ZJREVSUyB9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xyXG5cclxuaW1wb3J0IHsgUXVpelNldHRpbmdzU2VydmljZSB9ICBmcm9tICcuLy4uL3NoYXJlZC9xdWl6LXNldHRpbmdzLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBRdWl6UmVzdWx0c1NlcnZpY2UgfSAgZnJvbSAnLi8uLi9zaGFyZWQvcXVpei1yZXN1bHRzLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6ICdiaXJkaWQtcmVzdWx0bGlzdCcsXHJcblx0dGVtcGxhdGVVcmw6ICdhcHAvc2hhcmVkLmNvbXBvbmVudC9yZXN1bHRsaXN0LmNvbXBvbmVudC5odG1sJyxcclxuXHRzdHlsZVVybHM6ICBbJ2FwcC9zaGFyZWQuY29tcG9uZW50L3Jlc3VsdGxpc3QuY29tcG9uZW50LmNzcyddLFxyXG5cdGRpcmVjdGl2ZXM6IFtcclxuXHJcblx0XSxcclxuXHRwcm92aWRlcnM6IFtcclxuXHQgIEhUVFBfUFJPVklERVJTXHJcblx0XSxcclxuXHRpbnB1dHM6IFsndGltZXNwYW46dXNpbmdUaW1lc3BhbicsICdsaW1pdDp1c2luZ0xpbWl0JywgJ3VwZGF0ZVJlc3VsdGxpc3RJbmMnXSwgLy91c2luZyBBTElBU1xyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFJlc3VsdGxpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlc3tcclxuXHJcblx0dGltZXNwYW4gPSBcImRheVwiO1xyXG5cdGxpbWl0ID0gMTA7XHJcblx0Y29tcGV0aXRpb25Hcm91cElEO1xyXG5cdHVwZGF0ZVJlc3VsdGxpc3RJbmMgPSAtMTtcclxuXHJcblx0cXVpelNldHRpbmdzO1xyXG5cdHF1aXpIaWdoc2NvcmVEYXRhO1xyXG5cdHF1aXpIaWdoc2NvcmVMb2FkZWQgPSBmYWxzZTtcclxuXHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIF9xdWl6UmVzdWx0c1NlcnZpY2U6IFF1aXpSZXN1bHRzU2VydmljZSxcclxuXHRcdHByaXZhdGUgX3F1aXpTZXR0aW5nc1NlcnZpY2U6IFF1aXpTZXR0aW5nc1NlcnZpY2Upe31cclxuXHJcblx0XHRuZ09uSW5pdCgpIHtcclxuXHRcdFx0Ly90aGlzLmNvbXBldGl0aW9uR3JvdXBJRD0yNDtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0Ly9maXJlcyBhbHNvIG9uIGluaXQgd2hlbiBpbnB1dHMgYXJlIHNldCBmb3IgdGhlIGZpcnN0IHRpbWVcclxuXHRcdG5nT25DaGFuZ2VzKCl7XHJcblxyXG5cdFx0XHR0aGlzLnF1aXpTZXR0aW5ncyA9IHRoaXMuX3F1aXpTZXR0aW5nc1NlcnZpY2UuZ2V0UXVpelNldHRpbmdzKCk7XHJcblx0XHRcdHRoaXMubG9hZFF1aXpSZXN1bHRzKCk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdGxvYWRRdWl6UmVzdWx0cygpe1xyXG5cclxuXHRcdFx0dGhpcy5jb21wZXRpdGlvbkdyb3VwSUQgPSB0aGlzLl9xdWl6U2V0dGluZ3NTZXJ2aWNlLmdldENvbXBldGl0aW9uR3JvdXBJRCgpO1xyXG5cclxuXHRcdFx0dGhpcy5fcXVpelJlc3VsdHNTZXJ2aWNlLmdldFF1aXpSZXN1bHRzKHRoaXMucXVpelNldHRpbmdzLCB0aGlzLnRpbWVzcGFuLCB0aGlzLmxpbWl0LCB0aGlzLmNvbXBldGl0aW9uR3JvdXBJRClcclxuXHQgICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG5cdCAgICAgICAgICAgICAgICBkYXRhID0+IHtcclxuXHQgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coZGF0YSk7XHJcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLnF1aXpIaWdoc2NvcmVEYXRhID0gT2JqZWN0LmtleXMoZGF0YSkubWFwKGZ1bmN0aW9uKGspIHtcclxuXHRcdFx0XHRcdFx0XHQvL2NvbnNvbGUubG9nKFwiZGF0YVtrXTogXCIsIGRhdGFba10sIFwiIEs6XCIsaylcclxuXHRcdFx0XHRcdFx0XHQvLyBpZihrICE9ICdyZXR1cm5EYXRhJyl7XHJcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gZGF0YVtrXTtcclxuXHRcdFx0XHRcdFx0XHQvLyB9XHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHQvL3JlbW92ZSByZXR1cm5EYXRhID0gdHJ1ZS9mYWxzZVxyXG5cdFx0XHRcdFx0XHR0aGlzLnF1aXpIaWdoc2NvcmVEYXRhLnBvcCgpO1xyXG5cclxuXHRcdFx0XHRcdFx0Ly9jb25zb2xlLmxvZyh0aGlzLnF1aXpIaWdoc2NvcmVEYXRhKTtcclxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMucXVpekhpZ2hzY29yZUxvYWRlZCA9IHRydWU7XHJcblx0ICAgICAgICAgICAgICAgIH0sXHJcblx0ICAgICAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUuZXJyb3IoXCJnZXRRdWl6UmVzdWx0cyBFUlJPUiEgXCIsIGVycm9yKVxyXG5cdCAgICAgICAgICAgIClcclxuXHJcblx0XHR9XHJcblxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
