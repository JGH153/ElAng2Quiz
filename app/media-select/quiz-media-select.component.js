System.register(['angular2/core', 'angular2/http', 'angular2/router', './../shared/quiz-settings.service', './../shared/quiz-translation.service'], function(exports_1, context_1) {
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
    var core_1, http_1, router_1, quiz_settings_service_1, quiz_translation_service_1;
    var QuizMediaSelectComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (quiz_settings_service_1_1) {
                quiz_settings_service_1 = quiz_settings_service_1_1;
            },
            function (quiz_translation_service_1_1) {
                quiz_translation_service_1 = quiz_translation_service_1_1;
            }],
        execute: function() {
            QuizMediaSelectComponent = (function () {
                //quizMediaSelectedEvent = new EventEmitter<string>();
                function QuizMediaSelectComponent(_quizSettingsService, _quizTranslationService, _router) {
                    this._quizSettingsService = _quizSettingsService;
                    this._quizTranslationService = _quizTranslationService;
                    this._router = _router;
                    this.mediaTypes = [
                        [1, 'Image', 'glyphicon glyphicon-picture'],
                        [2, 'Sound', 'glyphicon glyphicon-volume-up'],
                        [3, 'Video', 'glyphicon glyphicon-facetime-video'],
                        [4, 'Several singingbirds', 'glyphicon glyphicon-volume-up'],
                        [0, 'Beginner quiz', 'glyphicon glyphicon-apple'],
                    ];
                    this.title = 'Birdid Quiz, select your media type:';
                }
                QuizMediaSelectComponent.prototype.ngOnInit = function () {
                    //add translations:
                    //image
                    this.mediaTypes[0][1] = this._quizTranslationService.getTranslationByID(4);
                    //sound
                    this.mediaTypes[1][1] = this._quizTranslationService.getTranslationByID(5);
                    //video
                    this.mediaTypes[2][1] = this._quizTranslationService.getTranslationByID(169);
                    //console.log("media t: ", this.mediaTypes[0][1]);
                };
                QuizMediaSelectComponent.prototype.selectMediaType = function (mediaType) {
                    this._quizSettingsService.setCompetitionGroupID(-1);
                    if (mediaType == 4) {
                        this._quizSettingsService.setSeveralSoundquiz();
                        this._router.navigate(["QuizMediaAdditionalSettings"]);
                    }
                    else if (mediaType == 0) {
                        this._quizSettingsService.setBeginnerQuiz();
                        this._router.navigate(["QuizMediaQuiz"]);
                    }
                    else {
                        if (!this._quizSettingsService.setMediaType(mediaType)) {
                            console.log("Nope", mediaType);
                        }
                        else {
                            //console.log("scuccess");
                            //Const for value?
                            //this.quizMediaSelectedEvent.emit("MediatypeSelected");
                            this._quizSettingsService.setNormalQuiz();
                            this._router.navigate(["QuizMediaAdditionalSettings"]);
                        }
                    }
                };
                QuizMediaSelectComponent = __decorate([
                    core_1.Component({
                        selector: 'birdid-quiz-media-select',
                        templateUrl: 'app/media-select/quiz-media-select.component.html',
                        styleUrls: ['app/media-select/quiz-media-select.component.css'],
                        directives: [],
                        providers: [
                            http_1.HTTP_PROVIDERS
                        ],
                    }), 
                    __metadata('design:paramtypes', [quiz_settings_service_1.QuizSettingsService, quiz_translation_service_1.QuizTranslationService, router_1.Router])
                ], QuizMediaSelectComponent);
                return QuizMediaSelectComponent;
            }());
            exports_1("QuizMediaSelectComponent", QuizMediaSelectComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lZGlhLXNlbGVjdC9xdWl6LW1lZGlhLXNlbGVjdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFxQkE7Z0JBVUMsc0RBQXNEO2dCQUV0RCxrQ0FDUyxvQkFBeUMsRUFDekMsdUJBQStDLEVBQy9DLE9BQWU7b0JBRmYseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFxQjtvQkFDekMsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUF3QjtvQkFDL0MsWUFBTyxHQUFQLE9BQU8sQ0FBUTtvQkFieEIsZUFBVSxHQUFHO3dCQUNaLENBQUMsQ0FBQyxFQUFFLE9BQU8sRUFBRSw2QkFBNkIsQ0FBQzt3QkFDM0MsQ0FBQyxDQUFDLEVBQUUsT0FBTyxFQUFFLCtCQUErQixDQUFDO3dCQUM3QyxDQUFDLENBQUMsRUFBRSxPQUFPLEVBQUUsb0NBQW9DLENBQUM7d0JBQ2xELENBQUMsQ0FBQyxFQUFFLHNCQUFzQixFQUFFLCtCQUErQixDQUFDO3dCQUM1RCxDQUFDLENBQUMsRUFBRSxlQUFlLEVBQUUsMkJBQTJCLENBQUM7cUJBQ2pELENBQUM7b0JBQ0YsVUFBSyxHQUFHLHNDQUFzQyxDQUFDO2dCQU83QyxDQUFDO2dCQUVILDJDQUFRLEdBQVI7b0JBRUMsbUJBQW1CO29CQUNuQixPQUFPO29CQUNQLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLHVCQUF1QixDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUMzRSxPQUFPO29CQUNQLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLHVCQUF1QixDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUMzRSxPQUFPO29CQUNQLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLHVCQUF1QixDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUU3RSxrREFBa0Q7Z0JBRW5ELENBQUM7Z0JBRUQsa0RBQWUsR0FBZixVQUFnQixTQUFTO29CQUV4QixJQUFJLENBQUMsb0JBQW9CLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFFcEQsRUFBRSxDQUFBLENBQUMsU0FBUyxJQUFJLENBQUMsQ0FBQyxDQUFBLENBQUM7d0JBRWxCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO3dCQUNoRCxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLDZCQUE2QixDQUFDLENBQUMsQ0FBQztvQkFFeEQsQ0FBQztvQkFBQSxJQUFJLENBQUMsRUFBRSxDQUFBLENBQUMsU0FBUyxJQUFJLENBQUMsQ0FBQyxDQUFBLENBQUM7d0JBRXhCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxlQUFlLEVBQUUsQ0FBQzt3QkFDNUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO29CQUUxQyxDQUFDO29CQUFBLElBQUksQ0FBQSxDQUFDO3dCQUVMLEVBQUUsQ0FBQSxDQUFDLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFBLENBQUM7NEJBRXRELE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBQyxDQUFDO3dCQUVoQyxDQUFDO3dCQUFBLElBQUksQ0FBQSxDQUFDOzRCQUVMLDBCQUEwQjs0QkFDMUIsa0JBQWtCOzRCQUNsQix3REFBd0Q7NEJBQ3hELElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxhQUFhLEVBQUUsQ0FBQzs0QkFFMUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDLENBQUM7d0JBR3hELENBQUM7b0JBRUYsQ0FBQztnQkFJRixDQUFDO2dCQWxGRjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNWLFFBQVEsRUFBRSwwQkFBMEI7d0JBQ3BDLFdBQVcsRUFBRSxtREFBbUQ7d0JBQ2hFLFNBQVMsRUFBRyxDQUFDLGtEQUFrRCxDQUFDO3dCQUNoRSxVQUFVLEVBQUUsRUFFWDt3QkFDRCxTQUFTLEVBQUU7NEJBQ1QscUJBQWM7eUJBQ2I7cUJBRUgsQ0FBQzs7NENBQUE7Z0JBeUVGLCtCQUFDO1lBQUQsQ0F0RUEsQUFzRUMsSUFBQTtZQXRFRCwrREFzRUMsQ0FBQSIsImZpbGUiOiJtZWRpYS1zZWxlY3QvcXVpei1tZWRpYS1zZWxlY3QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIE9uSW5pdCB9ICAgICAgIGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwLCBIVFRQX1BST1ZJREVSUyB9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IHsgUXVpelNldHRpbmdzU2VydmljZSB9ICBmcm9tICcuLy4uL3NoYXJlZC9xdWl6LXNldHRpbmdzLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBRdWl6VHJhbnNsYXRpb25TZXJ2aWNlIH0gIGZyb20gJy4vLi4vc2hhcmVkL3F1aXotdHJhbnNsYXRpb24uc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogJ2JpcmRpZC1xdWl6LW1lZGlhLXNlbGVjdCcsXHJcblx0dGVtcGxhdGVVcmw6ICdhcHAvbWVkaWEtc2VsZWN0L3F1aXotbWVkaWEtc2VsZWN0LmNvbXBvbmVudC5odG1sJyxcclxuXHRzdHlsZVVybHM6ICBbJ2FwcC9tZWRpYS1zZWxlY3QvcXVpei1tZWRpYS1zZWxlY3QuY29tcG9uZW50LmNzcyddLFxyXG5cdGRpcmVjdGl2ZXM6IFtcclxuXHJcblx0XSxcclxuXHRwcm92aWRlcnM6IFtcclxuXHQgIEhUVFBfUFJPVklERVJTXHJcbiAgXHRdLFxyXG5cdC8vb3V0cHV0czogWydxdWl6TWVkaWFTZWxlY3RlZEV2ZW50J11cclxufSlcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgUXVpek1lZGlhU2VsZWN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xyXG5cclxuXHRtZWRpYVR5cGVzID0gW1xyXG5cdFx0WzEsICdJbWFnZScsICdnbHlwaGljb24gZ2x5cGhpY29uLXBpY3R1cmUnXSxcclxuXHRcdFsyLCAnU291bmQnLCAnZ2x5cGhpY29uIGdseXBoaWNvbi12b2x1bWUtdXAnXSxcclxuXHRcdFszLCAnVmlkZW8nLCAnZ2x5cGhpY29uIGdseXBoaWNvbi1mYWNldGltZS12aWRlbyddLFxyXG5cdFx0WzQsICdTZXZlcmFsIHNpbmdpbmdiaXJkcycsICdnbHlwaGljb24gZ2x5cGhpY29uLXZvbHVtZS11cCddLFxyXG5cdFx0WzAsICdCZWdpbm5lciBxdWl6JywgJ2dseXBoaWNvbiBnbHlwaGljb24tYXBwbGUnXSxcclxuXHRdO1xyXG5cdHRpdGxlID0gJ0JpcmRpZCBRdWl6LCBzZWxlY3QgeW91ciBtZWRpYSB0eXBlOic7XHJcblx0Ly9xdWl6TWVkaWFTZWxlY3RlZEV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XHJcblxyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSBfcXVpelNldHRpbmdzU2VydmljZTogUXVpelNldHRpbmdzU2VydmljZSxcclxuXHRcdHByaXZhdGUgX3F1aXpUcmFuc2xhdGlvblNlcnZpY2U6IFF1aXpUcmFuc2xhdGlvblNlcnZpY2UsXHJcblx0XHRwcml2YXRlIF9yb3V0ZXI6IFJvdXRlclxyXG5cdCl7fVxyXG5cclxuXHRuZ09uSW5pdCgpIHtcclxuXHJcblx0XHQvL2FkZCB0cmFuc2xhdGlvbnM6XHJcblx0XHQvL2ltYWdlXHJcblx0XHR0aGlzLm1lZGlhVHlwZXNbMF1bMV0gPSB0aGlzLl9xdWl6VHJhbnNsYXRpb25TZXJ2aWNlLmdldFRyYW5zbGF0aW9uQnlJRCg0KTtcclxuXHRcdC8vc291bmRcclxuXHRcdHRoaXMubWVkaWFUeXBlc1sxXVsxXSA9IHRoaXMuX3F1aXpUcmFuc2xhdGlvblNlcnZpY2UuZ2V0VHJhbnNsYXRpb25CeUlEKDUpO1xyXG5cdFx0Ly92aWRlb1xyXG5cdFx0dGhpcy5tZWRpYVR5cGVzWzJdWzFdID0gdGhpcy5fcXVpelRyYW5zbGF0aW9uU2VydmljZS5nZXRUcmFuc2xhdGlvbkJ5SUQoMTY5KTtcclxuXHJcblx0XHQvL2NvbnNvbGUubG9nKFwibWVkaWEgdDogXCIsIHRoaXMubWVkaWFUeXBlc1swXVsxXSk7XHJcblxyXG5cdH1cclxuXHJcblx0c2VsZWN0TWVkaWFUeXBlKG1lZGlhVHlwZSl7XHJcblxyXG5cdFx0dGhpcy5fcXVpelNldHRpbmdzU2VydmljZS5zZXRDb21wZXRpdGlvbkdyb3VwSUQoLTEpO1xyXG5cclxuXHRcdGlmKG1lZGlhVHlwZSA9PSA0KXtcclxuXHJcblx0XHRcdHRoaXMuX3F1aXpTZXR0aW5nc1NlcnZpY2Uuc2V0U2V2ZXJhbFNvdW5kcXVpeigpO1xyXG5cdFx0XHR0aGlzLl9yb3V0ZXIubmF2aWdhdGUoW1wiUXVpek1lZGlhQWRkaXRpb25hbFNldHRpbmdzXCJdKTtcclxuXHJcblx0XHR9ZWxzZSBpZihtZWRpYVR5cGUgPT0gMCl7XHJcblxyXG5cdFx0XHR0aGlzLl9xdWl6U2V0dGluZ3NTZXJ2aWNlLnNldEJlZ2lubmVyUXVpeigpO1xyXG5cdFx0XHR0aGlzLl9yb3V0ZXIubmF2aWdhdGUoW1wiUXVpek1lZGlhUXVpelwiXSk7XHJcblxyXG5cdFx0fWVsc2V7XHJcblxyXG5cdFx0XHRpZighdGhpcy5fcXVpelNldHRpbmdzU2VydmljZS5zZXRNZWRpYVR5cGUobWVkaWFUeXBlKSl7XHJcblxyXG5cdFx0XHRcdGNvbnNvbGUubG9nKFwiTm9wZVwiLCBtZWRpYVR5cGUpO1xyXG5cclxuXHRcdFx0fWVsc2V7XHJcblxyXG5cdFx0XHRcdC8vY29uc29sZS5sb2coXCJzY3VjY2Vzc1wiKTtcclxuXHRcdFx0XHQvL0NvbnN0IGZvciB2YWx1ZT9cclxuXHRcdFx0XHQvL3RoaXMucXVpek1lZGlhU2VsZWN0ZWRFdmVudC5lbWl0KFwiTWVkaWF0eXBlU2VsZWN0ZWRcIik7XHJcblx0XHRcdFx0dGhpcy5fcXVpelNldHRpbmdzU2VydmljZS5zZXROb3JtYWxRdWl6KCk7XHJcblxyXG5cdFx0XHRcdHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbXCJRdWl6TWVkaWFBZGRpdGlvbmFsU2V0dGluZ3NcIl0pO1xyXG5cclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9XHJcblxyXG5cclxuXHJcblx0fVxyXG5cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
