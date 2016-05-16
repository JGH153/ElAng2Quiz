System.register(['angular2/core', 'angular2/http', 'angular2/router', './../shared/quiz-settings.service', './../shared/quiz-translation.service', "./../shared/quiz-specie.service", './../shared/quiz-formal-test.service'], function(exports_1, context_1) {
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
    var core_1, http_1, router_1, quiz_settings_service_1, quiz_translation_service_1, quiz_specie_service_1, quiz_formal_test_service_1;
    var FormalTestStartComponent;
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
            },
            function (quiz_specie_service_1_1) {
                quiz_specie_service_1 = quiz_specie_service_1_1;
            },
            function (quiz_formal_test_service_1_1) {
                quiz_formal_test_service_1 = quiz_formal_test_service_1_1;
            }],
        execute: function() {
            FormalTestStartComponent = (function () {
                //quizMediaSelectedEvent = new EventEmitter<string>();
                function FormalTestStartComponent(_quizSettingsService, _quizTranslationService, _quizSpeciesService, _quizFormalTestService, _router) {
                    this._quizSettingsService = _quizSettingsService;
                    this._quizTranslationService = _quizTranslationService;
                    this._quizSpeciesService = _quizSpeciesService;
                    this._quizFormalTestService = _quizFormalTestService;
                    this._router = _router;
                    this.loading = false;
                    this.codeOk = false;
                    this.specieListLoaded = false;
                    this.accessCodeWrong = false;
                    this.formAccessCode = "oXT5a5ptKo";
                }
                FormalTestStartComponent.prototype.ngOnInit = function () {
                };
                FormalTestStartComponent.prototype.onStartButtonClick = function () {
                    var _this = this;
                    this.loading = true;
                    this._quizSpeciesService.loadAreaId(34)
                        .subscribe(function (event) { return (_this.specieLostLoaded(event)); });
                    this._quizFormalTestService.confirmAccessCodeCorrect(this.formAccessCode)
                        .subscribe(function (response) { return (_this.formalTestCodeStatus(response)); });
                };
                FormalTestStartComponent.prototype.formalTestCodeStatus = function (status) {
                    var tStatus = true;
                    //TODO acually check if status is correct
                    console.log("status formal test code:", status);
                    console.log("status formal test code:", status.returnData);
                    if (status.returnData == true) {
                        //code correct
                        this.codeOk = true;
                        this._quizSettingsService.setMediaType(status.mediaTypeID);
                        this._quizSettingsService.setArea(status.areaID);
                        this._quizSettingsService.setFormalTest();
                        this._quizSettingsService.setFormalTestAccessCode(this.formAccessCode);
                        this._quizSettingsService.setMediaDiff(7);
                        this._quizSettingsService.setDuration(30); //20
                        this._quizSettingsService.setHelp(false);
                        if (status.areaID == 0) {
                            this._quizSettingsService.selectNumberOfQuestions(60);
                        }
                        else {
                            this._quizSettingsService.selectNumberOfQuestions(30);
                        }
                        this.startFormalTest();
                    }
                    else {
                        this.codeOk = false;
                        this.accessCodeWrong = true;
                        this.loading = false;
                        this.startFormalTest();
                    }
                };
                FormalTestStartComponent.prototype.startFormalTest = function () {
                    if (this.codeOk && this.specieListLoaded) {
                        this._router.navigate(["QuizMediaQuiz"]);
                    }
                };
                FormalTestStartComponent.prototype.specieLostLoaded = function (status) {
                    if (status) {
                        this.specieListLoaded = true;
                        this.startFormalTest();
                    }
                    else {
                        throw new Error("quizSpeciesService.loadAreaId in formal test start");
                    }
                };
                FormalTestStartComponent = __decorate([
                    core_1.Component({
                        selector: 'birdid-formal-test-start',
                        templateUrl: 'app/formal-test/formal-test-start.component.html',
                        styleUrls: ['app/formal-test/formal-test-start.component.css'],
                        directives: [],
                        providers: [
                            http_1.HTTP_PROVIDERS
                        ],
                    }), 
                    __metadata('design:paramtypes', [quiz_settings_service_1.QuizSettingsService, quiz_translation_service_1.QuizTranslationService, quiz_specie_service_1.QuizSpecieService, quiz_formal_test_service_1.QuizFormalTestService, router_1.Router])
                ], FormalTestStartComponent);
                return FormalTestStartComponent;
            }());
            exports_1("FormalTestStartComponent", FormalTestStartComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm1hbC10ZXN0L2Zvcm1hbC10ZXN0LXN0YXJ0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQXVCQTtnQkFRQyxzREFBc0Q7Z0JBRXRELGtDQUNTLG9CQUF5QyxFQUN6Qyx1QkFBK0MsRUFDL0MsbUJBQXNDLEVBQ3RDLHNCQUE2QyxFQUM3QyxPQUFlO29CQUpmLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBcUI7b0JBQ3pDLDRCQUF1QixHQUF2Qix1QkFBdUIsQ0FBd0I7b0JBQy9DLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBbUI7b0JBQ3RDLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBdUI7b0JBQzdDLFlBQU8sR0FBUCxPQUFPLENBQVE7b0JBYnhCLFlBQU8sR0FBRyxLQUFLLENBQUM7b0JBQ2hCLFdBQU0sR0FBRyxLQUFLLENBQUM7b0JBQ2YscUJBQWdCLEdBQUcsS0FBSyxDQUFDO29CQUN6QixvQkFBZSxHQUFHLEtBQUssQ0FBQztvQkFDeEIsbUJBQWMsR0FBRyxZQUFZLENBQUM7Z0JBVzVCLENBQUM7Z0JBRUgsMkNBQVEsR0FBUjtnQkFHQSxDQUFDO2dCQUVELHFEQUFrQixHQUFsQjtvQkFBQSxpQkFRQztvQkFOQSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztvQkFDcEIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUM7eUJBQ3JDLFNBQVMsQ0FBQyxVQUFDLEtBQUssSUFBSyxPQUFBLENBQUMsS0FBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQTlCLENBQThCLENBQUMsQ0FBQztvQkFDdkQsSUFBSSxDQUFDLHNCQUFzQixDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQyxjQUFjLENBQUM7eUJBQ3ZFLFNBQVMsQ0FBQyxVQUFDLFFBQVEsSUFBSyxPQUFBLENBQUMsS0FBSSxDQUFDLG9CQUFvQixDQUFDLFFB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QUE7Z0JBNEdGLCtCQUFDO1lBQUQsQ0F6R0EsQUF5R0MsSUFBQTtZQXpHRCwrREF5R0MsQ0FBQSIsImZpbGUiOiJmb3JtYWwtdGVzdC9mb3JtYWwtdGVzdC1zdGFydC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgT25Jbml0IH0gICAgICAgZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHAsIEhUVFBfUFJPVklERVJTIH0gZnJvbSAnYW5ndWxhcjIvaHR0cCc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XHJcblxyXG5pbXBvcnQgeyBRdWl6U2V0dGluZ3NTZXJ2aWNlIH0gIGZyb20gJy4vLi4vc2hhcmVkL3F1aXotc2V0dGluZ3Muc2VydmljZSc7XHJcbmltcG9ydCB7IFF1aXpUcmFuc2xhdGlvblNlcnZpY2UgfSAgZnJvbSAnLi8uLi9zaGFyZWQvcXVpei10cmFuc2xhdGlvbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUXVpelNwZWNpZVNlcnZpY2UgfSBmcm9tIFwiLi8uLi9zaGFyZWQvcXVpei1zcGVjaWUuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBRdWl6Rm9ybWFsVGVzdFNlcnZpY2UgfSAgZnJvbSAnLi8uLi9zaGFyZWQvcXVpei1mb3JtYWwtdGVzdC5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiAnYmlyZGlkLWZvcm1hbC10ZXN0LXN0YXJ0JyxcclxuXHR0ZW1wbGF0ZVVybDogJ2FwcC9mb3JtYWwtdGVzdC9mb3JtYWwtdGVzdC1zdGFydC5jb21wb25lbnQuaHRtbCcsXHJcblx0c3R5bGVVcmxzOiAgWydhcHAvZm9ybWFsLXRlc3QvZm9ybWFsLXRlc3Qtc3RhcnQuY29tcG9uZW50LmNzcyddLFxyXG5cdGRpcmVjdGl2ZXM6IFtcclxuXHJcblx0XSxcclxuXHRwcm92aWRlcnM6IFtcclxuXHQgIEhUVFBfUFJPVklERVJTXHJcbiAgXHRdLFxyXG5cdC8vb3V0cHV0czogWydxdWl6TWVkaWFTZWxlY3RlZEV2ZW50J11cclxufSlcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgRm9ybWFsVGVzdFN0YXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xyXG5cclxuXHRsb2FkaW5nID0gZmFsc2U7XHJcblx0Y29kZU9rID0gZmFsc2U7XHJcblx0c3BlY2llTGlzdExvYWRlZCA9IGZhbHNlO1xyXG5cdGFjY2Vzc0NvZGVXcm9uZyA9IGZhbHNlO1xyXG5cdGZvcm1BY2Nlc3NDb2RlID0gXCJvWFQ1YTVwdEtvXCI7XHJcblxyXG5cdC8vcXVpek1lZGlhU2VsZWN0ZWRFdmVudCA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgX3F1aXpTZXR0aW5nc1NlcnZpY2U6IFF1aXpTZXR0aW5nc1NlcnZpY2UsXHJcblx0XHRwcml2YXRlIF9xdWl6VHJhbnNsYXRpb25TZXJ2aWNlOiBRdWl6VHJhbnNsYXRpb25TZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSBfcXVpelNwZWNpZXNTZXJ2aWNlOiBRdWl6U3BlY2llU2VydmljZSxcclxuXHRcdHByaXZhdGUgX3F1aXpGb3JtYWxUZXN0U2VydmljZTogUXVpekZvcm1hbFRlc3RTZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXJcclxuXHJcblx0KXt9XHJcblxyXG5cdG5nT25Jbml0KCkge1xyXG5cclxuXHJcblx0fVxyXG5cclxuXHRvblN0YXJ0QnV0dG9uQ2xpY2soKXtcclxuXHJcblx0XHR0aGlzLmxvYWRpbmcgPSB0cnVlO1xyXG5cdFx0dGhpcy5fcXVpelNwZWNpZXNTZXJ2aWNlLmxvYWRBcmVhSWQoMzQpXHJcblx0XHRcdC5zdWJzY3JpYmUoKGV2ZW50KSA9PiAodGhpcy5zcGVjaWVMb3N0TG9hZGVkKGV2ZW50KSkpO1xyXG5cdFx0dGhpcy5fcXVpekZvcm1hbFRlc3RTZXJ2aWNlLmNvbmZpcm1BY2Nlc3NDb2RlQ29ycmVjdCh0aGlzLmZvcm1BY2Nlc3NDb2RlKVxyXG5cdFx0XHQuc3Vic2NyaWJlKChyZXNwb25zZSkgPT4gKHRoaXMuZm9ybWFsVGVzdENvZGVTdGF0dXMocmVzcG9uc2UpKSk7XHJcblxyXG5cdH1cclxuXHJcblxyXG5cdGZvcm1hbFRlc3RDb2RlU3RhdHVzKHN0YXR1cyl7XHJcblxyXG5cdFx0bGV0IHRTdGF0dXMgPSB0cnVlO1xyXG5cclxuXHRcdC8vVE9ETyBhY3VhbGx5IGNoZWNrIGlmIHN0YXR1cyBpcyBjb3JyZWN0XHJcblx0XHRjb25zb2xlLmxvZyhcInN0YXR1cyBmb3JtYWwgdGVzdCBjb2RlOlwiLHN0YXR1cyk7XHJcblx0XHRjb25zb2xlLmxvZyhcInN0YXR1cyBmb3JtYWwgdGVzdCBjb2RlOlwiLHN0YXR1cy5yZXR1cm5EYXRhKTtcclxuXHJcblx0XHRpZihzdGF0dXMucmV0dXJuRGF0YSA9PSB0cnVlKXtcclxuXHRcdFx0Ly9jb2RlIGNvcnJlY3RcclxuXHRcdFx0dGhpcy5jb2RlT2sgPSB0cnVlO1xyXG5cclxuXHRcdFx0dGhpcy5fcXVpelNldHRpbmdzU2VydmljZS5zZXRNZWRpYVR5cGUoc3RhdHVzLm1lZGlhVHlwZUlEKTtcclxuXHRcdFx0dGhpcy5fcXVpelNldHRpbmdzU2VydmljZS5zZXRBcmVhKHN0YXR1cy5hcmVhSUQpO1xyXG5cdFx0XHR0aGlzLl9xdWl6U2V0dGluZ3NTZXJ2aWNlLnNldEZvcm1hbFRlc3QoKTtcclxuXHRcdFx0dGhpcy5fcXVpelNldHRpbmdzU2VydmljZS5zZXRGb3JtYWxUZXN0QWNjZXNzQ29kZSh0aGlzLmZvcm1BY2Nlc3NDb2RlKTtcclxuXHRcdFx0dGhpcy5fcXVpelNldHRpbmdzU2VydmljZS5zZXRNZWRpYURpZmYoNyk7XHJcblx0XHRcdHRoaXMuX3F1aXpTZXR0aW5nc1NlcnZpY2Uuc2V0RHVyYXRpb24oMzApOyAvLzIwXHJcblx0XHRcdHRoaXMuX3F1aXpTZXR0aW5nc1NlcnZpY2Uuc2V0SGVscChmYWxzZSk7XHJcblxyXG5cdFx0XHRpZihzdGF0dXMuYXJlYUlEID09IDApeyAvL1dQXHJcblx0XHRcdFx0dGhpcy5fcXVpelNldHRpbmdzU2VydmljZS5zZWxlY3ROdW1iZXJPZlF1ZXN0aW9ucyg2MCk7XHJcblx0XHRcdH1lbHNleyAvL05BUlNPTkFMXHJcblx0XHRcdFx0dGhpcy5fcXVpelNldHRpbmdzU2VydmljZS5zZWxlY3ROdW1iZXJPZlF1ZXN0aW9ucygzMCk7XHJcblx0XHRcdH1cclxuXHJcblxyXG5cclxuXHRcdFx0dGhpcy5zdGFydEZvcm1hbFRlc3QoKTtcclxuXHJcblx0XHR9ZWxzZXtcclxuXHJcblx0XHRcdHRoaXMuY29kZU9rID0gZmFsc2U7XHJcblx0XHRcdHRoaXMuYWNjZXNzQ29kZVdyb25nID0gdHJ1ZTtcclxuXHRcdFx0dGhpcy5sb2FkaW5nID0gZmFsc2U7XHJcblx0XHRcdHRoaXMuc3RhcnRGb3JtYWxUZXN0KCk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHJcblx0fVxyXG5cclxuXHJcblx0c3RhcnRGb3JtYWxUZXN0KCl7XHJcblxyXG5cdFx0aWYodGhpcy5jb2RlT2sgJiYgdGhpcy5zcGVjaWVMaXN0TG9hZGVkKXtcclxuXHJcblxyXG5cclxuXHJcblx0XHRcdHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbXCJRdWl6TWVkaWFRdWl6XCJdKTtcclxuXHRcdH1cclxuXHJcblxyXG5cclxuXHR9XHJcblxyXG5cdHNwZWNpZUxvc3RMb2FkZWQoc3RhdHVzKXtcclxuXHJcblx0XHRpZihzdGF0dXMpe1xyXG5cclxuXHRcdFx0dGhpcy5zcGVjaWVMaXN0TG9hZGVkID0gdHJ1ZTtcclxuXHRcdFx0dGhpcy5zdGFydEZvcm1hbFRlc3QoKTtcclxuXHJcblx0XHR9ZWxzZXtcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwicXVpelNwZWNpZXNTZXJ2aWNlLmxvYWRBcmVhSWQgaW4gZm9ybWFsIHRlc3Qgc3RhcnRcIilcclxuXHRcdH1cclxuXHJcblx0fVxyXG5cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
