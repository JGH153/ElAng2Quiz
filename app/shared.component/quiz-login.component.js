System.register(['angular2/core', '../shared/quiz-login.service'], function(exports_1, context_1) {
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
    var core_1, quiz_login_service_1;
    var QuizLoginComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (quiz_login_service_1_1) {
                quiz_login_service_1 = quiz_login_service_1_1;
            }],
        execute: function() {
            QuizLoginComponent = (function () {
                function QuizLoginComponent(_quizLoginService) {
                    this._quizLoginService = _quizLoginService;
                    this.title = 'Login or Register!';
                    this.statusMessage = "";
                    this.showLogin = false;
                    this.showRegister = false;
                }
                QuizLoginComponent.prototype.onLogin = function (form) {
                    var _this = this;
                    this.mail = form.value.mail;
                    this.password = form.value.password;
                    this.autoLogin = form.value.autoLogin;
                    this.action = "login";
                    this._quizLoginService.Login(this.mail, this.password, this.autoLogin, this.action)
                        .subscribe(function (response) { return (_this.responseFromLogin(response)); });
                };
                QuizLoginComponent.prototype.responseFromLogin = function (response) {
                    if (response.status == true) {
                        this.statusMessage = 'Login Successful';
                    }
                    else {
                        //this.statusMessage = response.status;  this is the error you are getting from the server
                        // 											i had problems displaying it
                        this.statusMessage = 'Wrong mail/password, please try again';
                    }
                };
                QuizLoginComponent.prototype.onRegister = function (form) {
                    var _this = this;
                    this.mail = form.value.mail;
                    this.password = form.value.password;
                    this.autoLogin = form.value.autoLogin;
                    this.action = "reg";
                    this._quizLoginService.Login(this.mail, this.password, this.autoLogin, this.action)
                        .subscribe(function (response) { return (_this.responseFromRegister(response)); });
                };
                QuizLoginComponent.prototype.responseFromRegister = function (response) {
                    if (response.status == true) {
                        this.statusMessage = 'Registering Successful please go to your inbox to confirm your email';
                    }
                    else {
                        this.statusMessage = 'Something went wrong, please try again';
                    }
                };
                QuizLoginComponent.prototype.loginBTN = function () {
                    this.showLogin = !this.showLogin;
                };
                QuizLoginComponent.prototype.registerBTN = function () {
                    this.showRegister = !this.showRegister;
                };
                QuizLoginComponent = __decorate([
                    core_1.Component({
                        selector: 'birdid-quiz-login',
                        templateUrl: 'app/shared.component/login.component.html',
                        styleUrls: ['app/shared.component/login.component.css'],
                        directives: [],
                        providers: [
                            quiz_login_service_1.QuizLoginService // maybe not depends where the login should be accessed from
                        ],
                    }), 
                    __metadata('design:paramtypes', [quiz_login_service_1.QuizLoginService])
                ], QuizLoginComponent);
                return QuizLoginComponent;
            }());
            exports_1("QuizLoginComponent", QuizLoginComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC5jb21wb25lbnQvcXVpei1sb2dpbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFrQkE7Z0JBV0ksNEJBQ00saUJBQW1DO29CQUFuQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQWtCO29CQVh6QyxVQUFLLEdBQUcsb0JBQW9CLENBQUM7b0JBSWhDLGtCQUFhLEdBQUMsRUFBRSxDQUFDO29CQUdqQixjQUFTLEdBQVMsS0FBSyxDQUFDO29CQUN4QixpQkFBWSxHQUFZLEtBQUssQ0FBQztnQkFNNUIsQ0FBQztnQkFHQSxvQ0FBTyxHQUFQLFVBQVEsSUFBSTtvQkFBWixpQkFPQztvQkFORyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO29CQUM1QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDO29CQUMxQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDO29CQUN0QyxJQUFJLENBQUMsTUFBTSxHQUFDLE9BQU8sQ0FBQztvQkFDZCxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLFFBQVEsRUFBQyxJQUFJLENBQUMsU0FBUyxFQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7eUJBQ3JGLFNBQVMsQ0FBQyxVQUFDLFFBQVEsSUFBRyxPQUFBLENBQUMsS0FBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQWxDLENBQWtDLENBQUMsQ0FBQztnQkFDekQsQ0FBQztnQkFFSiw4Q0FBaUIsR0FBakIsVUFBa0IsUUFBUTtvQkFDekIsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU0sSUFBRSxJQUFJLENBQUMsQ0FBQSxDQUFDO3dCQUMxQixJQUFJLENBQUMsYUFBYSxHQUFFLGtCQUFrQixDQUFDO29CQUN4QyxDQUFDO29CQUFBLElBQUksQ0FBQSxDQUFDO3dCQUNOLDBGQUEwRjt3QkFDMUYsMENBQTBDO3dCQUMxQyxJQUFJLENBQUMsYUFBYSxHQUFHLHVDQUF1QyxDQUFDO29CQUM3RCxDQUFDO2dCQUNGLENBQUM7Z0JBR0QsdUNBQVUsR0FBVixVQUFXLElBQUk7b0JBQWYsaUJBT0M7b0JBTkEsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztvQkFDdEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQztvQkFDMUMsSUFBSSxDQUFDLFNBQVMsR0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQztvQkFDcEMsSUFBSSxDQUFDLE1BQU0sR0FBQyxLQUFLLENBQUM7b0JBQ2xCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksRUFBQyxJQUFJLENBQUMsUUFBUSxFQUFDLElBQUksQ0FBQyxTQUFTLEVBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQzt5QkFDL0UsU0FBUyxDQUFDLFVBQUMsUUFBUSxJQUFHLE9BQUEsQ0FBQyxLQUFJLENBQUMsb0JBQW9CLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBckMsQ0FBcUMsQ0FBQyxDQUFDO2dCQUMvRCxDQUFDO2dCQUVELGlEQUFvQixHQUFwQixVQUFxQixRQUFRO29CQUM1QixFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxJQUFFLElBQUksQ0FBQyxDQUFBLENBQUM7d0JBQzFCLElBQUksQ0FBQyxhQUFhLEdBQUUsc0VBQXNFLENBQUM7b0JBQzVGLENBQUM7b0JBQUEsSUFBSSxDQUFBLENBQUM7d0JBRU4sSUFBSSxDQUFDLGFBQWEsR0FBRyx3Q0FBd0MsQ0FBQztvQkFDOUQsQ0FBQztnQkFDRixDQUFDO2dCQUVELHFDQUFRLEdBQVI7b0JBQ0MsSUFBSSxDQUFDLFNBQVMsR0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUE7Z0JBQy9CLENBQUM7Z0JBRUQsd0NBQVcsR0FBWDtvQkFDQyxJQUFJLENBQUMsWUFBWSxHQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQTtnQkFDckMsQ0FBQztnQkE1RUY7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVixRQUFRLEVBQUUsbUJBQW1CO3dCQUM3QixXQUFXLEVBQUUsMkNBQTJDO3dCQUNyRCxTQUFTLEVBQUcsQ0FBQywwQ0FBMEMsQ0FBQzt3QkFFeEQsVUFBVSxFQUFFLEVBRWQ7d0JBQ0QsU0FBUyxFQUFFOzRCQUNKLHFDQUFnQixDQUFDLDREQUE0RDt5QkFFbkY7cUJBQ0QsQ0FBQzs7c0NBQUE7Z0JBa0VGLHlCQUFDO1lBQUQsQ0FoRUEsQUFnRUMsSUFBQTtZQWhFRCxtREFnRUMsQ0FBQSIsImZpbGUiOiJzaGFyZWQuY29tcG9uZW50L3F1aXotbG9naW4uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gICAgICAgZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHAsIEhUVFBfUFJPVklERVJTIH0gZnJvbSAnYW5ndWxhcjIvaHR0cCc7XHJcbmltcG9ydCB7UXVpekxvZ2luU2VydmljZX0gZnJvbSAnLi4vc2hhcmVkL3F1aXotbG9naW4uc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogJ2JpcmRpZC1xdWl6LWxvZ2luJyxcclxuXHR0ZW1wbGF0ZVVybDogJ2FwcC9zaGFyZWQuY29tcG9uZW50L2xvZ2luLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogIFsnYXBwL3NoYXJlZC5jb21wb25lbnQvbG9naW4uY29tcG9uZW50LmNzcyddLFxyXG5cclxuICAgIGRpcmVjdGl2ZXM6IFtcclxuXHJcblx0XSxcclxuXHRwcm92aWRlcnM6IFtcclxuICAgICAgICBRdWl6TG9naW5TZXJ2aWNlIC8vIG1heWJlIG5vdCBkZXBlbmRzIHdoZXJlIHRoZSBsb2dpbiBzaG91bGQgYmUgYWNjZXNzZWQgZnJvbVxyXG5cclxuXHRdLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFF1aXpMb2dpbkNvbXBvbmVudCB7XHJcbiAgICB0aXRsZSA9ICdMb2dpbiBvciBSZWdpc3RlciEnO1xyXG4gICAgbWFpbDtcclxuICAgIHBhc3N3b3JkO1xyXG5cdGF1dG9Mb2dpbjtcclxuXHRzdGF0dXNNZXNzYWdlPVwiXCI7XHJcblx0Y29uZmlybVBhc3N3b3JkO1xyXG5cdGFjdGlvbjtcclxuXHRzaG93TG9naW46Ym9vbGVhbj1mYWxzZTtcclxuXHRzaG93UmVnaXN0ZXI6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgX3F1aXpMb2dpblNlcnZpY2U6IFF1aXpMb2dpblNlcnZpY2VcclxuXHJcblxyXG5cdCl7fVxyXG5cclxuXHJcbiAgICBvbkxvZ2luKGZvcm0pe1xyXG4gICAgICAgIHRoaXMubWFpbCA9IGZvcm0udmFsdWUubWFpbDtcclxuICAgICAgICB0aGlzLnBhc3N3b3JkID0gZm9ybS52YWx1ZS5wYXNzd29yZDtcclxuXHRcdHRoaXMuYXV0b0xvZ2luID0gZm9ybS52YWx1ZS5hdXRvTG9naW47XHJcblx0XHR0aGlzLmFjdGlvbj1cImxvZ2luXCI7XHJcbiAgICAgICAgdGhpcy5fcXVpekxvZ2luU2VydmljZS5Mb2dpbih0aGlzLm1haWwsdGhpcy5wYXNzd29yZCx0aGlzLmF1dG9Mb2dpbix0aGlzLmFjdGlvbilcclxuXHRcdC5zdWJzY3JpYmUoKHJlc3BvbnNlKT0+KHRoaXMucmVzcG9uc2VGcm9tTG9naW4ocmVzcG9uc2UpKSk7XHJcbiAgICB9XHJcblxyXG5cdHJlc3BvbnNlRnJvbUxvZ2luKHJlc3BvbnNlKXtcclxuXHRcdGlmIChyZXNwb25zZS5zdGF0dXM9PXRydWUpe1xyXG5cdFx0XHR0aGlzLnN0YXR1c01lc3NhZ2U9ICdMb2dpbiBTdWNjZXNzZnVsJztcclxuXHRcdH1lbHNle1xyXG5cdFx0Ly90aGlzLnN0YXR1c01lc3NhZ2UgPSByZXNwb25zZS5zdGF0dXM7ICB0aGlzIGlzIHRoZSBlcnJvciB5b3UgYXJlIGdldHRpbmcgZnJvbSB0aGUgc2VydmVyXHJcblx0XHQvLyBcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aSBoYWQgcHJvYmxlbXMgZGlzcGxheWluZyBpdFxyXG5cdFx0dGhpcy5zdGF0dXNNZXNzYWdlID0gJ1dyb25nIG1haWwvcGFzc3dvcmQsIHBsZWFzZSB0cnkgYWdhaW4nO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cdG9uUmVnaXN0ZXIoZm9ybSl7XHJcblx0XHR0aGlzLm1haWwgPSBmb3JtLnZhbHVlLm1haWw7XHJcbiAgICAgICAgdGhpcy5wYXNzd29yZCA9IGZvcm0udmFsdWUucGFzc3dvcmQ7XHJcblx0XHR0aGlzLmF1dG9Mb2dpbj1mb3JtLnZhbHVlLmF1dG9Mb2dpbjtcclxuXHRcdHRoaXMuYWN0aW9uPVwicmVnXCI7XHJcblx0XHR0aGlzLl9xdWl6TG9naW5TZXJ2aWNlLkxvZ2luKHRoaXMubWFpbCx0aGlzLnBhc3N3b3JkLHRoaXMuYXV0b0xvZ2luLHRoaXMuYWN0aW9uKVxyXG5cdFx0LnN1YnNjcmliZSgocmVzcG9uc2UpPT4odGhpcy5yZXNwb25zZUZyb21SZWdpc3RlcihyZXNwb25zZSkpKTtcclxuXHR9XHJcblxyXG5cdHJlc3BvbnNlRnJvbVJlZ2lzdGVyKHJlc3BvbnNlKXtcclxuXHRcdGlmIChyZXNwb25zZS5zdGF0dXM9PXRydWUpe1xyXG5cdFx0XHR0aGlzLnN0YXR1c01lc3NhZ2U9ICdSZWdpc3RlcmluZyBTdWNjZXNzZnVsIHBsZWFzZSBnbyB0byB5b3VyIGluYm94IHRvIGNvbmZpcm0geW91ciBlbWFpbCc7XHJcblx0XHR9ZWxzZXtcclxuXHJcblx0XHR0aGlzLnN0YXR1c01lc3NhZ2UgPSAnU29tZXRoaW5nIHdlbnQgd3JvbmcsIHBsZWFzZSB0cnkgYWdhaW4nO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0bG9naW5CVE4oKXtcclxuXHRcdHRoaXMuc2hvd0xvZ2luPSF0aGlzLnNob3dMb2dpblxyXG5cdH1cclxuXHJcblx0cmVnaXN0ZXJCVE4oKXtcclxuXHRcdHRoaXMuc2hvd1JlZ2lzdGVyPSF0aGlzLnNob3dSZWdpc3RlclxyXG5cdH1cclxuXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
