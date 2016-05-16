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
    var WelcomeComponent;
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
            WelcomeComponent = (function () {
                function WelcomeComponent(_router, _quizSpeciesService) {
                    this._router = _router;
                    this._quizSpeciesService = _quizSpeciesService;
                }
                WelcomeComponent.prototype.theQuiz = function () {
                    this._router.navigate(["QuizMediaSelect"]);
                };
                WelcomeComponent.prototype.competitionGroup = function () {
                    //removes specie list if set
                    this._quizSpeciesService.clearSelectedSpecies();
                    this._router.navigate(["QuizCompetitionGroup"]);
                };
                WelcomeComponent.prototype.formalTest = function () {
                    //removes specie list if set
                    this._quizSpeciesService.clearSelectedSpecies();
                    this._router.navigate(["QuizFormalTestStart"]);
                };
                WelcomeComponent = __decorate([
                    core_1.Component({
                        selector: 'birdid-welcome',
                        templateUrl: 'app/welcome.component/the-quiz-welcome.component.html',
                        directives: [
                            quiz_login_component_1.QuizLoginComponent
                        ],
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, quiz_specie_service_1.QuizSpecieService])
                ], WelcomeComponent);
                return WelcomeComponent;
            }());
            exports_1("WelcomeComponent", WelcomeComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlbGNvbWUuY29tcG9uZW50L3RoZS1xdWl6LXdlbGNvbWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBZ0JBO2dCQUdJLDBCQUNZLE9BQWUsRUFDZixtQkFBc0M7b0JBRHRDLFlBQU8sR0FBUCxPQUFPLENBQVE7b0JBQ2Ysd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFtQjtnQkFFaEQsQ0FBQztnQkFFSCxrQ0FBTyxHQUFQO29CQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDO2dCQUUvQyxDQUFDO2dCQUVELDJDQUFnQixHQUFoQjtvQkFDSSw0QkFBNEI7b0JBQzVCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO29CQUNoRCxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQztnQkFFcEQsQ0FBQztnQkFFRCxxQ0FBVSxHQUFWO29CQUNJLDRCQUE0QjtvQkFDNUIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLG9CQUFvQixFQUFFLENBQUM7b0JBQ2hELElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDO2dCQUduRCxDQUFDO2dCQXBDTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxnQkFBZ0I7d0JBQzdCLFdBQVcsRUFBRSx1REFBdUQ7d0JBQ3JFLFVBQVUsRUFBRTs0QkFDUix5Q0FBa0I7eUJBQ3JCO3FCQUVBLENBQUM7O29DQUFBO2dCQThCRix1QkFBQztZQUFELENBNUJBLEFBNEJDLElBQUE7WUE1QkQsK0NBNEJDLENBQUEiLCJmaWxlIjoid2VsY29tZS5jb21wb25lbnQvdGhlLXF1aXotd2VsY29tZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcclxuaW1wb3J0IHtRdWl6TG9naW5Db21wb25lbnR9IGZyb20gJy4uL3NoYXJlZC5jb21wb25lbnQvcXVpei1sb2dpbi5jb21wb25lbnQnO1xyXG5cclxuaW1wb3J0IHsgUXVpelNwZWNpZVNlcnZpY2UgfSAgZnJvbSAnLi8uLi9zaGFyZWQvcXVpei1zcGVjaWUuc2VydmljZSc7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2JpcmRpZC13ZWxjb21lJyxcclxuXHR0ZW1wbGF0ZVVybDogJ2FwcC93ZWxjb21lLmNvbXBvbmVudC90aGUtcXVpei13ZWxjb21lLmNvbXBvbmVudC5odG1sJyxcclxuZGlyZWN0aXZlczogW1xyXG4gICAgUXVpekxvZ2luQ29tcG9uZW50XHJcbl0sXHJcblxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFdlbGNvbWVDb21wb25lbnR7XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgX3JvdXRlcjogUm91dGVyLFxyXG4gICAgICAgIHByaXZhdGUgX3F1aXpTcGVjaWVzU2VydmljZTogUXVpelNwZWNpZVNlcnZpY2VcclxuXHJcbiAgICApe31cclxuXHJcbiAgICB0aGVRdWl6KCl7XHJcbiAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFtcIlF1aXpNZWRpYVNlbGVjdFwiXSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBldGl0aW9uR3JvdXAoKXtcclxuICAgICAgICAvL3JlbW92ZXMgc3BlY2llIGxpc3QgaWYgc2V0XHJcbiAgICAgICAgdGhpcy5fcXVpelNwZWNpZXNTZXJ2aWNlLmNsZWFyU2VsZWN0ZWRTcGVjaWVzKCk7XHJcbiAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFtcIlF1aXpDb21wZXRpdGlvbkdyb3VwXCJdKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZm9ybWFsVGVzdCgpe1xyXG4gICAgICAgIC8vcmVtb3ZlcyBzcGVjaWUgbGlzdCBpZiBzZXRcclxuICAgICAgICB0aGlzLl9xdWl6U3BlY2llc1NlcnZpY2UuY2xlYXJTZWxlY3RlZFNwZWNpZXMoKTtcclxuICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoW1wiUXVpekZvcm1hbFRlc3RTdGFydFwiXSk7XHJcblxyXG5cclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
