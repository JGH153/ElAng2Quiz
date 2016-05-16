///<reference path="../node_modules/angular2/typings/browser.d.ts"/>
System.register(['angular2/platform/browser', './app.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, app_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            }],
        execute: function() {
            //enableProdMode();
            browser_1.bootstrap(app_component_1.AppComponent).catch(function (err) { return console.error(err); });
        }
    }
});
//https://angular.io/docs/ts/latest/tutorial/toh-pt5.html

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0VBQW9FOzs7Ozs7Ozs7Ozs7OztZQU1wRSxtQkFBbUI7WUFDbkIsbUJBQVMsQ0FBQyw0QkFBWSxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUMsR0FBTyxJQUFLLE9BQUEsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBbEIsQ0FBa0IsQ0FBQyxDQUFDOzs7O0FBRS9ELHlEQUF5RCIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vPHJlZmVyZW5jZSBwYXRoPVwiLi4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyL3R5cGluZ3MvYnJvd3Nlci5kLnRzXCIvPlxyXG5cclxuaW1wb3J0IHsgZW5hYmxlUHJvZE1vZGUgfSAgICAgICBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtib290c3RyYXB9ICAgIGZyb20gJ2FuZ3VsYXIyL3BsYXRmb3JtL2Jyb3dzZXInXHJcbmltcG9ydCB7QXBwQ29tcG9uZW50fSBmcm9tICcuL2FwcC5jb21wb25lbnQnXHJcblxyXG4vL2VuYWJsZVByb2RNb2RlKCk7XHJcbmJvb3RzdHJhcChBcHBDb21wb25lbnQpLmNhdGNoKChlcnI6YW55KSA9PiBjb25zb2xlLmVycm9yKGVycikpO1xyXG5cclxuLy9odHRwczovL2FuZ3VsYXIuaW8vZG9jcy90cy9sYXRlc3QvdHV0b3JpYWwvdG9oLXB0NS5odG1sXHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
