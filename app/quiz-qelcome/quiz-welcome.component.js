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
                        templateUrl: 'app/welcome.component/the-quiz-welcome.component.html',
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInF1aXotcWVsY29tZS9xdWl6LXdlbGNvbWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBZ0JBO2dCQUdJLDhCQUNZLE9BQWUsRUFDZixtQkFBc0M7b0JBRHRDLFlBQU8sR0FBUCxPQUFPLENBQVE7b0JBQ2Ysd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFtQjtnQkFFaEQsQ0FBQztnQkFFSCxzQ0FBTyxHQUFQO29CQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDO2dCQUUvQyxDQUFDO2dCQUVELCtDQUFnQixHQUFoQjtvQkFDSSw0QkFBNEI7b0JBQzVCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO29CQUNoRCxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQztnQkFFcEQsQ0FBQztnQkFFRCx5Q0FBVSxHQUFWO29CQUNJLDRCQUE0QjtvQkFDNUIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLG9CQUFvQixFQUFFLENBQUM7b0JBQ2hELElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDO2dCQUduRCxDQUFDO2dCQXBDTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxnQkFBZ0I7d0JBQzdCLFdBQVcsRUFBRSx1REFBdUQ7d0JBQ3JFLFVBQVUsRUFBRTs0QkFDUix5Q0FBa0I7eUJBQ3JCO3FCQUVBLENBQUM7O3dDQUFBO2dCQThCRiwyQkFBQztZQUFELENBNUJBLEFBNEJDLElBQUE7WUE1QkQsdURBNEJDLENBQUEiLCJmaWxlIjoicXVpei1xZWxjb21lL3F1aXotd2VsY29tZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcclxuaW1wb3J0IHtRdWl6TG9naW5Db21wb25lbnR9IGZyb20gJy4uL3NoYXJlZC5jb21wb25lbnQvcXVpei1sb2dpbi5jb21wb25lbnQnO1xyXG5cclxuaW1wb3J0IHsgUXVpelNwZWNpZVNlcnZpY2UgfSAgZnJvbSAnLi8uLi9zaGFyZWQvcXVpei1zcGVjaWUuc2VydmljZSc7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2JpcmRpZC13ZWxjb21lJyxcclxuXHR0ZW1wbGF0ZVVybDogJ2FwcC93ZWxjb21lLmNvbXBvbmVudC90aGUtcXVpei13ZWxjb21lLmNvbXBvbmVudC5odG1sJyxcclxuZGlyZWN0aXZlczogW1xyXG4gICAgUXVpekxvZ2luQ29tcG9uZW50XHJcbl0sXHJcblxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFF1aXpXZWxjb21lQ29tcG9uZW50e1xyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcixcclxuICAgICAgICBwcml2YXRlIF9xdWl6U3BlY2llc1NlcnZpY2U6IFF1aXpTcGVjaWVTZXJ2aWNlXHJcblxyXG4gICAgKXt9XHJcblxyXG4gICAgdGhlUXVpeigpe1xyXG4gICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbXCJRdWl6TWVkaWFTZWxlY3RcIl0pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBjb21wZXRpdGlvbkdyb3VwKCl7XHJcbiAgICAgICAgLy9yZW1vdmVzIHNwZWNpZSBsaXN0IGlmIHNldFxyXG4gICAgICAgIHRoaXMuX3F1aXpTcGVjaWVzU2VydmljZS5jbGVhclNlbGVjdGVkU3BlY2llcygpO1xyXG4gICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbXCJRdWl6Q29tcGV0aXRpb25Hcm91cFwiXSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGZvcm1hbFRlc3QoKXtcclxuICAgICAgICAvL3JlbW92ZXMgc3BlY2llIGxpc3QgaWYgc2V0XHJcbiAgICAgICAgdGhpcy5fcXVpelNwZWNpZXNTZXJ2aWNlLmNsZWFyU2VsZWN0ZWRTcGVjaWVzKCk7XHJcbiAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFtcIlF1aXpGb3JtYWxUZXN0U3RhcnRcIl0pO1xyXG5cclxuXHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
