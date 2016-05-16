System.register(['angular2/core', 'angular2/http', 'angular2/router', './media-select/quiz-media-select.component', './media-additional-settings/quiz-additional-settings.component', './the-quiz/the-quiz.component', './quiz-results/quiz-results.component', "./select-species/select-species.component", "./formal-test/formal-test-end.component", "./formal-test/formal-test-start.component", "./shared.component/error.component", './quiz-master.component', "./competition-group/competition-group.component", "./quiz-results/quiz-summary.component", "./quiz-welcome/quiz-welcome.component"], function(exports_1, context_1) {
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
    var core_1, http_1, router_1, quiz_media_select_component_1, quiz_additional_settings_component_1, the_quiz_component_1, quiz_results_component_1, select_species_component_1, formal_test_end_component_1, formal_test_start_component_1, error_component_1, quiz_master_component_1, competition_group_component_1, quiz_summary_component_1, quiz_welcome_component_1;
    var AppComponent;
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
            function (quiz_media_select_component_1_1) {
                quiz_media_select_component_1 = quiz_media_select_component_1_1;
            },
            function (quiz_additional_settings_component_1_1) {
                quiz_additional_settings_component_1 = quiz_additional_settings_component_1_1;
            },
            function (the_quiz_component_1_1) {
                the_quiz_component_1 = the_quiz_component_1_1;
            },
            function (quiz_results_component_1_1) {
                quiz_results_component_1 = quiz_results_component_1_1;
            },
            function (select_species_component_1_1) {
                select_species_component_1 = select_species_component_1_1;
            },
            function (formal_test_end_component_1_1) {
                formal_test_end_component_1 = formal_test_end_component_1_1;
            },
            function (formal_test_start_component_1_1) {
                formal_test_start_component_1 = formal_test_start_component_1_1;
            },
            function (error_component_1_1) {
                error_component_1 = error_component_1_1;
            },
            function (quiz_master_component_1_1) {
                quiz_master_component_1 = quiz_master_component_1_1;
            },
            function (competition_group_component_1_1) {
                competition_group_component_1 = competition_group_component_1_1;
            },
            function (quiz_summary_component_1_1) {
                quiz_summary_component_1 = quiz_summary_component_1_1;
            },
            function (quiz_welcome_component_1_1) {
                quiz_welcome_component_1 = quiz_welcome_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.title = 'Birdid app component';
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'birdid-idclient-main',
                        template: "\n\t  <birdid-quiz-master></birdid-quiz-master>\n\t",
                        styleUrls: ['app/app.component.css'],
                        directives: [
                            quiz_master_component_1.QuizMasterComponent,
                            quiz_media_select_component_1.QuizMediaSelectComponent,
                            quiz_additional_settings_component_1.QuizAdditionalSettingsComponent,
                            select_species_component_1.SelectSpeciesComponent,
                            competition_group_component_1.QuizCompetitionGroupComponent,
                            the_quiz_component_1.TheQuizComponent,
                            quiz_results_component_1.QuizResultComponent,
                            formal_test_end_component_1.FormalTestEndComponent,
                            formal_test_start_component_1.FormalTestStartComponent,
                            quiz_summary_component_1.QuizSummaryComponent,
                            quiz_welcome_component_1.QuizWelcomeComponent,
                            router_1.ROUTER_DIRECTIVES
                        ],
                        providers: [
                            http_1.HTTP_PROVIDERS,
                            router_1.ROUTER_PROVIDERS
                        ]
                    }),
                    router_1.RouteConfig([
                        { path: '/mediaSelect', name: 'QuizMediaSelect', component: quiz_media_select_component_1.QuizMediaSelectComponent },
                        { path: '/mediaAdditionalSettings', name: 'QuizMediaAdditionalSettings', component: quiz_additional_settings_component_1.QuizAdditionalSettingsComponent },
                        { path: '/competitionGroup', name: 'QuizCompetitionGroup', component: competition_group_component_1.QuizCompetitionGroupComponent },
                        { path: '/mediaSelectSpecies', name: 'QuizSelectSpecies', component: select_species_component_1.SelectSpeciesComponent },
                        { path: '/mediaQuiz', name: 'QuizMediaQuiz', component: the_quiz_component_1.TheQuizComponent },
                        { path: '/mediaQuizResults', name: 'QuizMediaQuizResults', component: quiz_results_component_1.QuizResultComponent },
                        { path: '/formalTestStart', name: 'QuizFormalTestStart', component: formal_test_start_component_1.FormalTestStartComponent },
                        { path: '/formalTestEnd', name: 'QuizFormalTestEnd', component: formal_test_end_component_1.FormalTestEndComponent },
                        { path: '/quizError/:errorID', name: 'QuizError', component: error_component_1.ErrorComponent },
                        { path: '/mediaQuizSummary', name: 'QuizMediaQuizSummary', component: quiz_summary_component_1.QuizSummaryComponent },
                        { path: '/welcome', name: 'QuizWelcome', component: quiz_welcome_component_1.QuizWelcomeComponent, useAsDefault: true }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUF5RUE7Z0JBQUE7b0JBQ0csVUFBSyxHQUFHLHNCQUFzQixDQUFDO2dCQUNsQyxDQUFDO2dCQTdDRDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNWLFFBQVEsRUFBRSxzQkFBc0I7d0JBQ2hDLFFBQVEsRUFBRSxxREFFVDt3QkFDRCxTQUFTLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQzt3QkFDcEMsVUFBVSxFQUFFOzRCQUNYLDJDQUFtQjs0QkFDbkIsc0RBQXdCOzRCQUN4QixvRUFBK0I7NEJBQy9CLGlEQUFzQjs0QkFDdEIsMkRBQTZCOzRCQUM3QixxQ0FBZ0I7NEJBQ2hCLDRDQUFtQjs0QkFDbkIsa0RBQXNCOzRCQUN0QixzREFBd0I7NEJBQ3hCLDZDQUFvQjs0QkFDcEIsNkNBQW9COzRCQUdwQiwwQkFBaUI7eUJBQ2pCO3dCQUNELFNBQVMsRUFBRTs0QkFDVCxxQkFBYzs0QkFDZCx5QkFBZ0I7eUJBQ2pCO3FCQUNELENBQUM7b0JBRUQsb0JBQVcsQ0FBQzt3QkFDWixFQUFDLElBQUksRUFBRSxjQUFjLEVBQU0sSUFBSSxFQUFFLGlCQUFpQixFQUFNLFNBQVMsRUFBRSxzREFBd0IsRUFBRTt3QkFDMUYsRUFBQyxJQUFJLEVBQUUsMEJBQTBCLEVBQUcsSUFBSSxFQUFFLDZCQUE2QixFQUFHLFNBQVMsRUFBRSxvRUFBK0IsRUFBRzt3QkFDMUgsRUFBQyxJQUFJLEVBQUUsbUJBQW1CLEVBQUksSUFBSSxFQUFFLHNCQUFzQixFQUFJLFNBQVMsRUFBRSwyREFBNkIsRUFBRTt3QkFDeEcsRUFBQyxJQUFJLEVBQUUscUJBQXFCLEVBQUcsSUFBSSxFQUFFLG1CQUFtQixFQUFLLFNBQVMsRUFBRSxpREFBc0IsRUFBRTt3QkFDOUYsRUFBQyxJQUFJLEVBQUUsWUFBWSxFQUFLLElBQUksRUFBRSxlQUFlLEVBQU0sU0FBUyxFQUFFLHFDQUFnQixFQUFFO3dCQUNsRixFQUFDLElBQUksRUFBRSxtQkFBbUIsRUFBSSxJQUFJLEVBQUUsc0JBQXNCLEVBQUksU0FBUyxFQUFFLDRDQUFtQixFQUFHO3dCQUMvRixFQUFDLElBQUksRUFBRSxrQkFBa0IsRUFBSSxJQUFJLEVBQUUscUJBQXFCLEVBQUksU0FBUyxFQUFFLHNEQUF3QixFQUFHO3dCQUNsRyxFQUFDLElBQUksRUFBRSxnQkFBZ0IsRUFBSSxJQUFJLEVBQUUsbUJBQW1CLEVBQUssU0FBUyxFQUFFLGtEQUFzQixFQUFHO3dCQUM3RixFQUFDLElBQUksRUFBRSxxQkFBcUIsRUFBRyxJQUFJLEVBQUUsV0FBVyxFQUFPLFNBQVMsRUFBRSxnQ0FBYyxFQUFHO3dCQUNuRixFQUFDLElBQUksRUFBRSxtQkFBbUIsRUFBSSxJQUFJLEVBQUUsc0JBQXNCLEVBQUksU0FBUyxFQUFFLDZDQUFvQixFQUFFO3dCQUMvRixFQUFDLElBQUksRUFBRSxVQUFVLEVBQU0sSUFBSSxFQUFFLGFBQWEsRUFBTSxTQUFTLEVBQUUsNkNBQW9CLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBQztxQkFDcEcsQ0FBQzs7Z0NBQUE7Z0JBS0YsbUJBQUM7WUFBRCxDQUZBLEFBRUMsSUFBQTtZQUZELHVDQUVDLENBQUEiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gICAgICAgZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHAsIEhUVFBfUFJPVklERVJTIH0gZnJvbSAnYW5ndWxhcjIvaHR0cCc7XHJcbmltcG9ydCB7IFJvdXRlQ29uZmlnLCBST1VURVJfRElSRUNUSVZFUywgUk9VVEVSX1BST1ZJREVSUyB9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XHJcblxyXG5cclxuaW1wb3J0IHsgUXVpelNldHRpbmdzU2VydmljZSB9ICBmcm9tICcuL3NoYXJlZC9xdWl6LXNldHRpbmdzLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBRdWl6UXVlc3Rpb25zU2VydmljZSB9ICBmcm9tICcuL3NoYXJlZC9xdWl6LXF1ZXN0aW9ucy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUXVpekxvZ2ljU2VydmljZSB9ICBmcm9tICcuL3NoYXJlZC9xdWl6LWxvZ2ljLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBRdWl6VHJhbnNsYXRpb25TZXJ2aWNlIH0gIGZyb20gJy4vc2hhcmVkL3F1aXotdHJhbnNsYXRpb24uc2VydmljZSc7XHJcbmltcG9ydCB7IFF1aXpSZXN1bHRzU2VydmljZSB9ICBmcm9tICcuL3NoYXJlZC9xdWl6LXJlc3VsdHMuc2VydmljZSc7XHJcblxyXG5pbXBvcnQgeyBRdWl6TWVkaWFTZWxlY3RDb21wb25lbnQgfSAgZnJvbSAnLi9tZWRpYS1zZWxlY3QvcXVpei1tZWRpYS1zZWxlY3QuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUXVpekFkZGl0aW9uYWxTZXR0aW5nc0NvbXBvbmVudCB9ICBmcm9tICcuL21lZGlhLWFkZGl0aW9uYWwtc2V0dGluZ3MvcXVpei1hZGRpdGlvbmFsLXNldHRpbmdzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFRoZVF1aXpDb21wb25lbnQgfSAgZnJvbSAnLi90aGUtcXVpei90aGUtcXVpei5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBRdWl6UmVzdWx0Q29tcG9uZW50IH0gIGZyb20gJy4vcXVpei1yZXN1bHRzL3F1aXotcmVzdWx0cy5jb21wb25lbnQnO1xyXG5pbXBvcnQge1NlbGVjdFNwZWNpZXNDb21wb25lbnR9IGZyb20gXCIuL3NlbGVjdC1zcGVjaWVzL3NlbGVjdC1zcGVjaWVzLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0Zvcm1hbFRlc3RFbmRDb21wb25lbnR9IGZyb20gXCIuL2Zvcm1hbC10ZXN0L2Zvcm1hbC10ZXN0LWVuZC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtGb3JtYWxUZXN0U3RhcnRDb21wb25lbnR9IGZyb20gXCIuL2Zvcm1hbC10ZXN0L2Zvcm1hbC10ZXN0LXN0YXJ0LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0Vycm9yQ29tcG9uZW50fSBmcm9tIFwiLi9zaGFyZWQuY29tcG9uZW50L2Vycm9yLmNvbXBvbmVudFwiO1xyXG5cclxuXHJcbmltcG9ydCB7IFF1aXpNYXN0ZXJDb21wb25lbnQgfSAgZnJvbSAnLi9xdWl6LW1hc3Rlci5jb21wb25lbnQnO1xyXG5cclxuXHJcbmltcG9ydCB7UXVpekNvbXBldGl0aW9uR3JvdXBDb21wb25lbnR9IGZyb20gXCIuL2NvbXBldGl0aW9uLWdyb3VwL2NvbXBldGl0aW9uLWdyb3VwLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge1F1aXpTdW1tYXJ5Q29tcG9uZW50fSBmcm9tIFwiLi9xdWl6LXJlc3VsdHMvcXVpei1zdW1tYXJ5LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge1F1aXpXZWxjb21lQ29tcG9uZW50fSBmcm9tIFwiLi9xdWl6LXdlbGNvbWUvcXVpei13ZWxjb21lLmNvbXBvbmVudFwiO1xyXG5cclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogJ2JpcmRpZC1pZGNsaWVudC1tYWluJyxcclxuXHR0ZW1wbGF0ZTogYFxyXG5cdCAgPGJpcmRpZC1xdWl6LW1hc3Rlcj48L2JpcmRpZC1xdWl6LW1hc3Rlcj5cclxuXHRgLFxyXG5cdHN0eWxlVXJsczogWydhcHAvYXBwLmNvbXBvbmVudC5jc3MnXSxcclxuXHRkaXJlY3RpdmVzOiBbXHJcblx0XHRRdWl6TWFzdGVyQ29tcG9uZW50LFxyXG5cdFx0UXVpek1lZGlhU2VsZWN0Q29tcG9uZW50LFxyXG5cdFx0UXVpekFkZGl0aW9uYWxTZXR0aW5nc0NvbXBvbmVudCxcclxuXHRcdFNlbGVjdFNwZWNpZXNDb21wb25lbnQsXHJcblx0XHRRdWl6Q29tcGV0aXRpb25Hcm91cENvbXBvbmVudCxcclxuXHRcdFRoZVF1aXpDb21wb25lbnQsXHJcblx0XHRRdWl6UmVzdWx0Q29tcG9uZW50LFxyXG5cdFx0Rm9ybWFsVGVzdEVuZENvbXBvbmVudCxcclxuXHRcdEZvcm1hbFRlc3RTdGFydENvbXBvbmVudCxcclxuXHRcdFF1aXpTdW1tYXJ5Q29tcG9uZW50LFxyXG5cdFx0UXVpeldlbGNvbWVDb21wb25lbnQsXHJcblxyXG5cclxuXHRcdFJPVVRFUl9ESVJFQ1RJVkVTXHJcblx0XSxcclxuXHRwcm92aWRlcnM6IFtcclxuXHQgIEhUVFBfUFJPVklERVJTLFxyXG5cdCAgUk9VVEVSX1BST1ZJREVSU1xyXG5cdF1cclxufSlcclxuXHJcbkBSb3V0ZUNvbmZpZyhbXHJcblx0e3BhdGg6ICcvbWVkaWFTZWxlY3QnLCBcdFx0XHRcdG5hbWU6ICdRdWl6TWVkaWFTZWxlY3QnLCBcdFx0XHRcdGNvbXBvbmVudDogUXVpek1lZGlhU2VsZWN0Q29tcG9uZW50IH0sXHJcbiAgICB7cGF0aDogJy9tZWRpYUFkZGl0aW9uYWxTZXR0aW5ncycsIFx0bmFtZTogJ1F1aXpNZWRpYUFkZGl0aW9uYWxTZXR0aW5ncycsIFx0Y29tcG9uZW50OiBRdWl6QWRkaXRpb25hbFNldHRpbmdzQ29tcG9uZW50ICB9LFxyXG5cdHtwYXRoOiAnL2NvbXBldGl0aW9uR3JvdXAnLFx0XHRcdG5hbWU6ICdRdWl6Q29tcGV0aXRpb25Hcm91cCcsXHRcdFx0Y29tcG9uZW50OiBRdWl6Q29tcGV0aXRpb25Hcm91cENvbXBvbmVudCB9LFxyXG5cdHtwYXRoOiAnL21lZGlhU2VsZWN0U3BlY2llcycsXHRcdG5hbWU6ICdRdWl6U2VsZWN0U3BlY2llcycsXHRcdFx0XHRjb21wb25lbnQ6IFNlbGVjdFNwZWNpZXNDb21wb25lbnQgfSxcclxuICBcdHtwYXRoOiAnL21lZGlhUXVpeicsXHRcdFx0XHRuYW1lOiAnUXVpek1lZGlhUXVpeicsXHRcdFx0XHRcdGNvbXBvbmVudDogVGhlUXVpekNvbXBvbmVudCB9LFxyXG5cdHtwYXRoOiAnL21lZGlhUXVpelJlc3VsdHMnLFx0XHRcdG5hbWU6ICdRdWl6TWVkaWFRdWl6UmVzdWx0cycsXHRcdFx0Y29tcG9uZW50OiBRdWl6UmVzdWx0Q29tcG9uZW50ICB9LFxyXG5cdHtwYXRoOiAnL2Zvcm1hbFRlc3RTdGFydCcsXHRcdFx0bmFtZTogJ1F1aXpGb3JtYWxUZXN0U3RhcnQnLFx0XHRcdGNvbXBvbmVudDogRm9ybWFsVGVzdFN0YXJ0Q29tcG9uZW50ICB9LFxyXG5cdHtwYXRoOiAnL2Zvcm1hbFRlc3RFbmQnLFx0XHRcdG5hbWU6ICdRdWl6Rm9ybWFsVGVzdEVuZCcsXHRcdFx0XHRjb21wb25lbnQ6IEZvcm1hbFRlc3RFbmRDb21wb25lbnQgIH0sXHJcblx0e3BhdGg6ICcvcXVpekVycm9yLzplcnJvcklEJyxcdFx0bmFtZTogJ1F1aXpFcnJvcicsXHRcdFx0XHRcdFx0Y29tcG9uZW50OiBFcnJvckNvbXBvbmVudCAgfSxcclxuXHR7cGF0aDogJy9tZWRpYVF1aXpTdW1tYXJ5JyxcdFx0XHRuYW1lOiAnUXVpek1lZGlhUXVpelN1bW1hcnknLFx0XHRcdGNvbXBvbmVudDogUXVpelN1bW1hcnlDb21wb25lbnRcdH0sXHJcblx0e3BhdGg6ICcvd2VsY29tZScsXHRcdFx0XHRcdG5hbWU6ICdRdWl6V2VsY29tZScsXHRcdFx0XHRcdGNvbXBvbmVudDogUXVpeldlbGNvbWVDb21wb25lbnQsIHVzZUFzRGVmYXVsdDogdHJ1ZX1cclxuXSlcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcclxuXHQgIHRpdGxlID0gJ0JpcmRpZCBhcHAgY29tcG9uZW50JztcclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
