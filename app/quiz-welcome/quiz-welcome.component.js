System.register(['angular2/core', 'angular2/router', '../shared.component/quiz-login.component', './../shared/quiz-specie.service'], function(exports_1, context_1) {
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
    var core_1, router_1, quiz_login_component_1, quiz_specie_service_1;
    var QuizWelcomeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (quiz_login_component_1_1) {
                quiz_login_component_1 = quiz_login_component_1_1;
            },
            function (quiz_specie_service_1_1) {
                quiz_specie_service_1 = quiz_specie_service_1_1;
            }],
        execute: function() {
            QuizWelcomeComponent = (function () {
                function QuizWelcomeComponent(_router, _quizSpeciesService) {
                    this._router = _router;
                    this._quizSpeciesService = _quizSpeciesService;
                }
                QuizWelcomeComponent.prototype.theQuiz = function () {
                    this._router.navigate(["QuizMediaSelect"]);
                };
                QuizWelcomeComponent.prototype.competitionGroup = function () {
                    //removes specie list if set
                    this._quizSpeciesService.clearSelectedSpecies();
                    this._router.navigate(["QuizCompetitionGroup"]);
                };
                QuizWelcomeComponent.prototype.formalTest = function () {
                    //removes specie list if set
                    this._quizSpeciesService.clearSelectedSpecies();
                    this._router.navigate(["QuizFormalTestStart"]);
                };
                QuizWelcomeComponent = __decorate([
                    core_1.Component({
                        selector: 'birdid-welcome',
                        templateUrl: 'app/quiz-welcome/quiz-welcome.component.html',
                        styleUrls: ['app/quiz-welcome/quiz-welcome.component.css'],
                        directives: [
                            quiz_login_component_1.QuizLoginComponent
                        ],
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, quiz_specie_service_1.QuizSpecieService])
                ], QuizWelcomeComponent);
                return QuizWelcomeComponent;
            }());
            exports_1("QuizWelcomeComponent", QuizWelcomeComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInF1aXotd2VsY29tZS9xdWl6LXdlbGNvbWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBaUJBO2dCQUdJLDhCQUNZLE9BQWUsRUFDZixtQkFBc0M7b0JBRHRDLFlBQU8sR0FBUCxPQUFPLENBQVE7b0JBQ2Ysd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFtQjtnQkFFaEQsQ0FBQztnQkFFSCxzQ0FBTyxHQUFQO29CQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDO2dCQUUvQyxDQUFDO2dCQUVELCtDQUFnQixHQUFoQjtvQkFDSSw0QkFBNEI7b0JBQzVCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO29CQUNoRCxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQztnQkFFcEQsQ0FBQztnQkFFRCx5Q0FBVSxHQUFWO29CQUNJLDRCQUE0QjtvQkFDNUIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLG9CQUFvQixFQUFFLENBQUM7b0JBQ2hELElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDO2dCQUduRCxDQUFDO2dCQXJDTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxnQkFBZ0I7d0JBQzdCLFdBQVcsRUFBRSw4Q0FBOEM7d0JBQ3hELFNBQVMsRUFBRyxDQUFDLDZDQUE2QyxDQUFDO3dCQUMvRCxVQUFVLEVBQUU7NEJBQ1IseUNBQWtCO3lCQUNyQjtxQkFFQSxDQUFDOzt3Q0FBQTtnQkE4QkYsMkJBQUM7WUFBRCxDQTVCQSxBQTRCQyxJQUFBO1lBNUJELHVEQTRCQyxDQUFBIiwiZmlsZSI6InF1aXotd2VsY29tZS9xdWl6LXdlbGNvbWUuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XHJcbmltcG9ydCB7UXVpekxvZ2luQ29tcG9uZW50fSBmcm9tICcuLi9zaGFyZWQuY29tcG9uZW50L3F1aXotbG9naW4uY29tcG9uZW50JztcclxuXHJcbmltcG9ydCB7IFF1aXpTcGVjaWVTZXJ2aWNlIH0gIGZyb20gJy4vLi4vc2hhcmVkL3F1aXotc3BlY2llLnNlcnZpY2UnO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdiaXJkaWQtd2VsY29tZScsXHJcblx0dGVtcGxhdGVVcmw6ICdhcHAvcXVpei13ZWxjb21lL3F1aXotd2VsY29tZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6ICBbJ2FwcC9xdWl6LXdlbGNvbWUvcXVpei13ZWxjb21lLmNvbXBvbmVudC5jc3MnXSxcclxuZGlyZWN0aXZlczogW1xyXG4gICAgUXVpekxvZ2luQ29tcG9uZW50XHJcbl0sXHJcblxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFF1aXpXZWxjb21lQ29tcG9uZW50e1xyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcixcclxuICAgICAgICBwcml2YXRlIF9xdWl6U3BlY2llc1NlcnZpY2U6IFF1aXpTcGVjaWVTZXJ2aWNlXHJcblxyXG4gICAgKXt9XHJcblxyXG4gICAgdGhlUXVpeigpe1xyXG4gICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbXCJRdWl6TWVkaWFTZWxlY3RcIl0pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBjb21wZXRpdGlvbkdyb3VwKCl7XHJcbiAgICAgICAgLy9yZW1vdmVzIHNwZWNpZSBsaXN0IGlmIHNldFxyXG4gICAgICAgIHRoaXMuX3F1aXpTcGVjaWVzU2VydmljZS5jbGVhclNlbGVjdGVkU3BlY2llcygpO1xyXG4gICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbXCJRdWl6Q29tcGV0aXRpb25Hcm91cFwiXSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGZvcm1hbFRlc3QoKXtcclxuICAgICAgICAvL3JlbW92ZXMgc3BlY2llIGxpc3QgaWYgc2V0XHJcbiAgICAgICAgdGhpcy5fcXVpelNwZWNpZXNTZXJ2aWNlLmNsZWFyU2VsZWN0ZWRTcGVjaWVzKCk7XHJcbiAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFtcIlF1aXpGb3JtYWxUZXN0U3RhcnRcIl0pO1xyXG5cclxuXHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
