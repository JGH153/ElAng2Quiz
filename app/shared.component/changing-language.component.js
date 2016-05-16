System.register(['angular2/core', 'angular2/http', './../shared/quiz-settings.service', './../shared/quiz-changing-language.service'], function(exports_1, context_1) {
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
    var core_1, http_1, quiz_settings_service_1, quiz_changing_language_service_1;
    var QuizChangingLanguageComponent;
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
            function (quiz_changing_language_service_1_1) {
                quiz_changing_language_service_1 = quiz_changing_language_service_1_1;
            }],
        execute: function() {
            QuizChangingLanguageComponent = (function () {
                function QuizChangingLanguageComponent(_quizChangingLanguageService, _quizSettingsService) {
                    this._quizChangingLanguageService = _quizChangingLanguageService;
                    this._quizSettingsService = _quizSettingsService;
                }
                QuizChangingLanguageComponent.prototype.ngOnInit = function () {
                    //this.competitionGroupID=24;
                };
                QuizChangingLanguageComponent.prototype.ngOnChanges = function () {
                    this.quizSettings = this._quizSettingsService.getQuizSettings();
                };
                QuizChangingLanguageComponent.prototype.getLanguages = function () {
                    this.languagesList = this._quizChangingLanguageService.getLanguages();
                    console.log(this.languagesList);
                };
                QuizChangingLanguageComponent = __decorate([
                    core_1.Component({
                        selector: 'birdid-changing-language',
                        templateUrl: 'app/shared.component/changing-language.component.html',
                        styleUrls: ['app/shared.component/changing-language.component.css'],
                        directives: [],
                        providers: [
                            http_1.HTTP_PROVIDERS
                        ],
                    }), 
                    __metadata('design:paramtypes', [quiz_changing_language_service_1.QuizChangingLanguageService, quiz_settings_service_1.QuizSettingsService])
                ], QuizChangingLanguageComponent);
                return QuizChangingLanguageComponent;
            }());
            exports_1("QuizChangingLanguageComponent", QuizChangingLanguageComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC5jb21wb25lbnQvY2hhbmdpbmctbGFuZ3VhZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBbUJBO2dCQU1DLHVDQUNTLDRCQUF5RCxFQUN6RCxvQkFBeUM7b0JBRHpDLGlDQUE0QixHQUE1Qiw0QkFBNEIsQ0FBNkI7b0JBQ3pELHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBcUI7Z0JBQUUsQ0FBQztnQkFFcEQsZ0RBQVEsR0FBUjtvQkFDQyw2QkFBNkI7Z0JBRTlCLENBQUM7Z0JBQ0ssbURBQVcsR0FBWDtvQkFFSSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxlQUFlLEVBQUUsQ0FBQztnQkFHcEUsQ0FBQztnQkFFRCxvREFBWSxHQUFaO29CQUNJLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLDRCQUE0QixDQUFDLFlBQVksRUFBRSxDQUFDO29CQUN0RSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFFMUMsQ0FBQztnQkF0Q0g7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVixRQUFRLEVBQUUsMEJBQTBCO3dCQUNwQyxXQUFXLEVBQUUsdURBQXVEO3dCQUNwRSxTQUFTLEVBQUcsQ0FBQyxzREFBc0QsQ0FBQzt3QkFDcEUsVUFBVSxFQUFFLEVBRVg7d0JBQ0QsU0FBUyxFQUFFOzRCQUNULHFCQUFjO3lCQUNmO3FCQUVELENBQUM7O2lEQUFBO2dCQTRCRSxvQ0FBQztZQUFELENBMUJKLEFBMEJLLElBQUE7WUExQkwseUVBMEJLLENBQUEiLCJmaWxlIjoic2hhcmVkLmNvbXBvbmVudC9jaGFuZ2luZy1sYW5ndWFnZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgT25Jbml0LCBPbkNoYW5nZXMsIFZpZXdDaGlsZCwgQWZ0ZXJWaWV3SW5pdCwgRWxlbWVudFJlZiB9ICAgICAgIGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwLCBIVFRQX1BST1ZJREVSUyB9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xyXG5cclxuaW1wb3J0IHsgUXVpelNldHRpbmdzU2VydmljZSB9ICBmcm9tICcuLy4uL3NoYXJlZC9xdWl6LXNldHRpbmdzLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBRdWl6Q2hhbmdpbmdMYW5ndWFnZVNlcnZpY2UgfSAgZnJvbSAnLi8uLi9zaGFyZWQvcXVpei1jaGFuZ2luZy1sYW5ndWFnZS5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiAnYmlyZGlkLWNoYW5naW5nLWxhbmd1YWdlJyxcclxuXHR0ZW1wbGF0ZVVybDogJ2FwcC9zaGFyZWQuY29tcG9uZW50L2NoYW5naW5nLWxhbmd1YWdlLmNvbXBvbmVudC5odG1sJyxcclxuXHRzdHlsZVVybHM6ICBbJ2FwcC9zaGFyZWQuY29tcG9uZW50L2NoYW5naW5nLWxhbmd1YWdlLmNvbXBvbmVudC5jc3MnXSxcclxuXHRkaXJlY3RpdmVzOiBbXHJcblxyXG5cdF0sXHJcblx0cHJvdmlkZXJzOiBbXHJcblx0ICBIVFRQX1BST1ZJREVSU1xyXG5cdF0sXHJcblx0Ly9pbnB1dHM6IFsndGltZXNwYW46dXNpbmdUaW1lc3BhbicsICdsaW1pdDp1c2luZ0xpbWl0JywgJ3VwZGF0ZVJlc3VsdGxpc3RJbmMnXSAvL3VzaW5nIEFMSUFTXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgUXVpekNoYW5naW5nTGFuZ3VhZ2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlc3tcclxuICAgIHF1aXpTZXR0aW5ncztcclxuICAgIGNvbXBldGl0aW9uR3JvdXBJRDtcclxuICAgIGxhbmd1YWdlc0xpc3Q7XHJcblxyXG5cclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgX3F1aXpDaGFuZ2luZ0xhbmd1YWdlU2VydmljZTogUXVpekNoYW5naW5nTGFuZ3VhZ2VTZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSBfcXVpelNldHRpbmdzU2VydmljZTogUXVpelNldHRpbmdzU2VydmljZSl7fVxyXG5cclxuXHRcdG5nT25Jbml0KCkge1xyXG5cdFx0XHQvL3RoaXMuY29tcGV0aXRpb25Hcm91cElEPTI0O1xyXG5cclxuXHRcdH1cclxuICAgICAgICBuZ09uQ2hhbmdlcygpe1xyXG5cclxuICAgICAgICAgICAgdGhpcy5xdWl6U2V0dGluZ3MgPSB0aGlzLl9xdWl6U2V0dGluZ3NTZXJ2aWNlLmdldFF1aXpTZXR0aW5ncygpO1xyXG5cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBnZXRMYW5ndWFnZXMoKXtcclxuICAgICAgICAgICAgdGhpcy5sYW5ndWFnZXNMaXN0ID0gdGhpcy5fcXVpekNoYW5naW5nTGFuZ3VhZ2VTZXJ2aWNlLmdldExhbmd1YWdlcygpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmxhbmd1YWdlc0xpc3QpO1xyXG5cclxuXHRcdH1cclxuICAgIH1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
