System.register(['angular2/core', 'angular2/http', 'rxjs/Rx'], function(exports_1, context_1) {
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
    var core_1, http_1;
    var QuizLoginService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            //import {constants} from './../constants';
            QuizLoginService = (function () {
                function QuizLoginService(_http) {
                    this._http = _http;
                }
                QuizLoginService.prototype.Login = function (mail, password, autoLogin, action) {
                    var theMail = mail;
                    var thePassword = password;
                    if (autoLogin == null) {
                        autoLogin = false;
                    }
                    else {
                        var theAutoLogin = autoLogin;
                    }
                    var theAction = action;
                    var body = "email=" + theMail;
                    body += "&password=" + thePassword;
                    body += "&autologin=" + autoLogin;
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/x-www-form-urlencoded');
                    return this._http.post('https://hembstudios.no/birdid/bird/loginControlAJAX.php?action=' + theAction, body, {
                        headers: headers
                    }).map(function (response) { return response.json(); });
                };
                QuizLoginService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], QuizLoginService);
                return QuizLoginService;
            }());
            exports_1("QuizLoginService", QuizLoginService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9xdWl6LWxvZ2luLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBS0EsMkNBQTJDO1lBSTNDO2dCQUVBLDBCQUFvQixLQUFXO29CQUFYLFVBQUssR0FBTCxLQUFLLENBQU07Z0JBQUUsQ0FBQztnQkFFOUIsZ0NBQUssR0FBTCxVQUFNLElBQUksRUFBQyxRQUFRLEVBQUMsU0FBUyxFQUFDLE1BQU07b0JBRWhDLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQztvQkFDbkIsSUFBSSxXQUFXLEdBQUcsUUFBUSxDQUFDO29CQUMzQixFQUFFLENBQUMsQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLENBQUEsQ0FBQzt3QkFDbkIsU0FBUyxHQUFHLEtBQUssQ0FBQztvQkFDdEIsQ0FBQztvQkFBQSxJQUFJLENBQUEsQ0FBQzt3QkFDRixJQUFJLFlBQVksR0FBRyxTQUFTLENBQUM7b0JBQ2pDLENBQUM7b0JBRUQsSUFBSSxTQUFTLEdBQUcsTUFBTSxDQUFDO29CQUV2QixJQUFJLElBQUksR0FBRyxRQUFRLEdBQUcsT0FBTyxDQUFDO29CQUM5QixJQUFJLElBQUksWUFBWSxHQUFHLFdBQVcsQ0FBQztvQkFDbkMsSUFBSSxJQUFJLGFBQWEsR0FBRyxTQUFTLENBQUM7b0JBRWxDLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxFQUFFLENBQUM7b0JBQzVCLE9BQU8sQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLG1DQUFtQyxDQUFDLENBQUM7b0JBRXBFLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxpRUFBaUUsR0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFDO3dCQUNyRyxPQUFPLEVBQUUsT0FBTztxQkFDbkIsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFBLFFBQVEsSUFBSSxPQUFBLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBZixDQUFlLENBQUMsQ0FBQztnQkFDeEMsQ0FBQztnQkEzQkw7b0JBQUMsaUJBQVUsRUFBRTs7b0NBQUE7Z0JBa0NiLHVCQUFDO1lBQUQsQ0FqQ0EsQUFpQ0MsSUFBQTtZQWpDRCwrQ0FpQ0MsQ0FBQSIsImZpbGUiOiJzaGFyZWQvcXVpei1sb2dpbi5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzIH0gZnJvbSAnYW5ndWxhcjIvaHR0cCc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XHJcblxyXG5pbXBvcnQgJ3J4anMvUngnO1xyXG4vL2ltcG9ydCB7Y29uc3RhbnRzfSBmcm9tICcuLy4uL2NvbnN0YW50cyc7XHJcblxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgUXVpekxvZ2luU2VydmljZXtcclxuXHJcbmNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHA6IEh0dHApe31cclxuXHJcbiAgICBMb2dpbihtYWlsLHBhc3N3b3JkLGF1dG9Mb2dpbixhY3Rpb24peyAvLyB0aGlzIGlzIGFsc28gZm9yIHJlZ2lzdGVyaW5nLCB0aGUgbmFtaW5nIGlzIGhvcnJpYmxlXHJcblxyXG4gICAgICAgIGxldCB0aGVNYWlsID0gbWFpbDtcclxuICAgICAgICBsZXQgdGhlUGFzc3dvcmQgPSBwYXNzd29yZDtcclxuICAgICAgICBpZiAoYXV0b0xvZ2luID09IG51bGwpe1xyXG4gICAgICAgICAgICBhdXRvTG9naW4gPSBmYWxzZTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgbGV0IHRoZUF1dG9Mb2dpbiA9IGF1dG9Mb2dpbjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCB0aGVBY3Rpb24gPSBhY3Rpb247XHJcblxyXG4gICAgICAgIGxldCBib2R5ID0gXCJlbWFpbD1cIiArIHRoZU1haWw7XHJcbiAgICAgICAgYm9keSArPSBcIiZwYXNzd29yZD1cIiArIHRoZVBhc3N3b3JkO1xyXG4gICAgICAgIGJvZHkgKz0gXCImYXV0b2xvZ2luPVwiICsgYXV0b0xvZ2luO1xyXG5cclxuICAgICAgICB2YXIgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcbiAgICAgICAgaGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdCgnaHR0cHM6Ly9oZW1ic3R1ZGlvcy5uby9iaXJkaWQvYmlyZC9sb2dpbkNvbnRyb2xBSkFYLnBocD9hY3Rpb249Jyt0aGVBY3Rpb24sIGJvZHkse1xyXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzXHJcbiAgICAgICAgfSkubWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
