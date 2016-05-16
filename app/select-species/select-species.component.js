System.register(['angular2/core', 'angular2/router', './../shared/quiz-specie.service'], function(exports_1, context_1) {
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
    var core_1, router_1, quiz_specie_service_1;
    var SelectSpeciesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (quiz_specie_service_1_1) {
                quiz_specie_service_1 = quiz_specie_service_1_1;
            }],
        execute: function() {
            SelectSpeciesComponent = (function () {
                function SelectSpeciesComponent(_quizSpeciesService, _router) {
                    this._quizSpeciesService = _quizSpeciesService;
                    this._router = _router;
                    this.title = "Select species";
                    this.specieList = [];
                    //displaySelectedSpecies = [];
                    this.arrayOfSelectedSpecies = [];
                }
                SelectSpeciesComponent.prototype.ngOnInit = function () {
                    this._quizSpeciesService.getSpecieList();
                    this._quizSpeciesService.loadSpecieList();
                    //console.log(this.specieList);
                    this.getSpecieList();
                    this.loadSpecieList();
                };
                SelectSpeciesComponent.prototype.selectSpecie = function () {
                    if (this.isSpecieInList(this.selectedSpecie.id) != true) {
                        this.arrayOfSelectedSpecies.push(this.selectedSpecie);
                    }
                    else {
                        alert("This specie has already been added!");
                    }
                };
                SelectSpeciesComponent.prototype.isSpecieInList = function (id) {
                    for (var _i = 0, _a = Object.keys(this.arrayOfSelectedSpecies); _i < _a.length; _i++) {
                        var i = _a[_i];
                        if (id == this.arrayOfSelectedSpecies[i].id) {
                            return true;
                        }
                    }
                    return false;
                };
                SelectSpeciesComponent.prototype.getSpecieList = function () {
                    //console.log("this._quizSpeciesService.getSpecieList(): ", this._quizSpeciesService.getSpecieList());
                    this.specieList = this._quizSpeciesService.getSpecieList();
                };
                SelectSpeciesComponent.prototype.deleteSpecie = function (specie) {
                    // let tempSpecieNames = [];
                    var tempSpecieId = [];
                    this.delSpecieId = specie;
                    // this.delSpecieName = specie;
                    /*
                            for (let i of Object.keys(this.displaySelectedSpecies)) {
                                if (this.displaySelectedSpecies[i] != this.delSpecieName) {
                                    tempSpecieNames.push(this.displaySelectedSpecies[i]);
                                }
                            }
                            this.displaySelectedSpecies = tempSpecieNames;
                            console.log(this.displaySelectedSpecies, "Name array");
                    */
                    for (var _i = 0, _a = Object.keys(this.arrayOfSelectedSpecies); _i < _a.length; _i++) {
                        var j = _a[_i];
                        if (this.arrayOfSelectedSpecies[j] != this.delSpecieId) {
                            tempSpecieId.push(this.arrayOfSelectedSpecies[j]);
                        }
                    }
                    this.arrayOfSelectedSpecies = tempSpecieId;
                    console.log(this.arrayOfSelectedSpecies, "ID array");
                };
                SelectSpeciesComponent.prototype.postSpeciesId = function () {
                    this._quizSpeciesService.setSelectedSpecie(this.arrayOfSelectedSpecies);
                    this._router.navigate(["QuizMediaQuiz"]);
                };
                SelectSpeciesComponent.prototype.loadSpecieList = function () {
                    // this.displaySelectedSpecies = this._quizSpeciesService.loadSpecieList();;
                    this.arrayOfSelectedSpecies = this._quizSpeciesService.loadSpecieList();
                    console.log(this.arrayOfSelectedSpecies, " Array of ID loaded from server");
                    //console.log(this.displaySelectedSpecies, " Array of name loaded from server");
                };
                SelectSpeciesComponent.prototype.resetSpecieList = function () {
                    this._quizSpeciesService.clearSelectedSpecies();
                    this.arrayOfSelectedSpecies = [];
                };
                SelectSpeciesComponent = __decorate([
                    core_1.Component({
                        selector: 'birdid-select-species',
                        templateUrl: 'app/select-species/select-species.component.html',
                        styleUrls: ['app/select-species/select-species.component.css']
                    }), 
                    __metadata('design:paramtypes', [quiz_specie_service_1.QuizSpecieService, router_1.Router])
                ], SelectSpeciesComponent);
                return SelectSpeciesComponent;
            }());
            exports_1("SelectSpeciesComponent", SelectSpeciesComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbGVjdC1zcGVjaWVzL3NlbGVjdC1zcGVjaWVzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWFBO2dCQVVJLGdDQUNZLG1CQUFzQyxFQUN0QyxPQUFlO29CQURmLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBbUI7b0JBQ3RDLFlBQU8sR0FBUCxPQUFPLENBQVE7b0JBWDNCLFVBQUssR0FBRyxnQkFBZ0IsQ0FBQztvQkFFekIsZUFBVSxHQUFHLEVBQUUsQ0FBQztvQkFFaEIsOEJBQThCO29CQUM5QiwyQkFBc0IsR0FBRyxFQUFFLENBQUM7Z0JBTzFCLENBQUM7Z0JBRUgseUNBQVEsR0FBUjtvQkFDSSxJQUFJLENBQUMsbUJBQW1CLENBQUMsYUFBYSxFQUFFLENBQUM7b0JBQ3pDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxjQUFjLEVBQUUsQ0FBQztvQkFDMUMsK0JBQStCO29CQUMvQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7b0JBRXJCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFDMUIsQ0FBQztnQkFFRCw2Q0FBWSxHQUFaO29CQUNJLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQSxDQUFDO3dCQUNwRCxJQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQTtvQkFDekQsQ0FBQztvQkFBQSxJQUFJLENBQUEsQ0FBQzt3QkFDRixLQUFLLENBQUMscUNBQXFDLENBQUMsQ0FBQztvQkFDakQsQ0FBQztnQkFDTCxDQUFDO2dCQUVELCtDQUFjLEdBQWQsVUFBZSxFQUFVO29CQUNyQixHQUFHLENBQUMsQ0FBVSxVQUF3QyxFQUF4QyxLQUFBLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLEVBQXhDLGNBQXdDLEVBQXhDLElBQXdDLENBQUM7d0JBQWxELElBQUksQ0FBQyxTQUFBO3dCQUNOLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxJQUFJLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzs0QkFDMUMsTUFBTSxDQUFDLElBQUksQ0FBQzt3QkFDaEIsQ0FBQztxQkFDSjtvQkFDRCxNQUFNLENBQUMsS0FBSyxDQUFDO2dCQUNqQixDQUFDO2dCQUVELDhDQUFhLEdBQWI7b0JBQ0ksc0dBQXNHO29CQUN0RyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztnQkFDL0QsQ0FBQztnQkFFRCw2Q0FBWSxHQUFaLFVBQWEsTUFBTTtvQkFDaEIsNEJBQTRCO29CQUMzQixJQUFJLFlBQVksR0FBRyxFQUFFLENBQUM7b0JBQ3RCLElBQUksQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDO29CQUMzQiwrQkFBK0I7b0JBQ3RDOzs7Ozs7OztzQkFRRTtvQkFFTSxHQUFHLENBQUMsQ0FBVSxVQUF3QyxFQUF4QyxLQUFBLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLEVBQXhDLGNBQXdDLEVBQXhDLElBQXdDLENBQUM7d0JBQWxELElBQUksQ0FBQyxTQUFBO3dCQUNOLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQzs0QkFDckQsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDdEQsQ0FBQztxQkFDSjtvQkFDRCxJQUFJLENBQUMsc0JBQXNCLEdBQUcsWUFBWSxDQUFDO29CQUMzQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxVQUFVLENBQUMsQ0FBQztnQkFFekQsQ0FBQztnQkFFRCw4Q0FBYSxHQUFiO29CQUNJLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsQ0FBQztvQkFDeEUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO2dCQUM3QyxDQUFDO2dCQUVELCtDQUFjLEdBQWQ7b0JBQ0csNEVBQTRFO29CQUMzRSxJQUFJLENBQUMsc0JBQXNCLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGNBQWMsRUFBRSxDQUFDO29CQUN4RSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxpQ0FBaUMsQ0FBQyxDQUFDO29CQUM1RSxnRkFBZ0Y7Z0JBRXBGLENBQUM7Z0JBRUQsZ0RBQWUsR0FBZjtvQkFDSSxJQUFJLENBQUMsbUJBQW1CLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztvQkFDaEQsSUFBSSxDQUFDLHNCQUFzQixHQUFHLEVBQUUsQ0FBQztnQkFDckMsQ0FBQztnQkE3Rkw7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsdUJBQXVCO3dCQUNqQyxXQUFXLEVBQUUsa0RBQWtEO3dCQUMvRCxTQUFTLEVBQUcsQ0FBQyxpREFBaUQsQ0FBQztxQkFFbEUsQ0FBQzs7MENBQUE7Z0JBMEZGLDZCQUFDO1lBQUQsQ0F6RkEsQUF5RkMsSUFBQTtZQXpGRCwyREF5RkMsQ0FBQSIsImZpbGUiOiJzZWxlY3Qtc3BlY2llcy9zZWxlY3Qtc3BlY2llcy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xyXG5pbXBvcnQgeyBRdWl6U3BlY2llU2VydmljZSB9ICBmcm9tICcuLy4uL3NoYXJlZC9xdWl6LXNwZWNpZS5zZXJ2aWNlJztcclxuaW1wb3J0IHtRdWl6U2V0dGluZ3NTZXJ2aWNlfSBmcm9tIFwiLi4vc2hhcmVkL3F1aXotc2V0dGluZ3Muc2VydmljZVwiO1xyXG5cclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnYmlyZGlkLXNlbGVjdC1zcGVjaWVzJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnYXBwL3NlbGVjdC1zcGVjaWVzL3NlbGVjdC1zcGVjaWVzLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogIFsnYXBwL3NlbGVjdC1zcGVjaWVzL3NlbGVjdC1zcGVjaWVzLmNvbXBvbmVudC5jc3MnXVxyXG5cclxufSlcclxuZXhwb3J0IGNsYXNzIFNlbGVjdFNwZWNpZXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgdGl0bGUgPSBcIlNlbGVjdCBzcGVjaWVzXCI7XHJcblxyXG4gICAgc3BlY2llTGlzdCA9IFtdO1xyXG4gICAgc2VsZWN0ZWRTcGVjaWU7XHJcbiAgICAvL2Rpc3BsYXlTZWxlY3RlZFNwZWNpZXMgPSBbXTtcclxuICAgIGFycmF5T2ZTZWxlY3RlZFNwZWNpZXMgPSBbXTtcclxuICAgIGRlbFNwZWNpZUlkO1xyXG4gICAgZGVsU3BlY2llTmFtZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIF9xdWl6U3BlY2llc1NlcnZpY2U6IFF1aXpTcGVjaWVTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgX3JvdXRlcjogUm91dGVyXHJcbiAgICApe31cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLl9xdWl6U3BlY2llc1NlcnZpY2UuZ2V0U3BlY2llTGlzdCgpO1xyXG4gICAgICAgIHRoaXMuX3F1aXpTcGVjaWVzU2VydmljZS5sb2FkU3BlY2llTGlzdCgpO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2codGhpcy5zcGVjaWVMaXN0KTtcclxuICAgICAgICB0aGlzLmdldFNwZWNpZUxpc3QoKTtcclxuXHJcbiAgICAgICAgdGhpcy5sb2FkU3BlY2llTGlzdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHNlbGVjdFNwZWNpZSgpIHtcclxuICAgICAgICBpZih0aGlzLmlzU3BlY2llSW5MaXN0KHRoaXMuc2VsZWN0ZWRTcGVjaWUuaWQpICE9IHRydWUpe1xyXG4gICAgICAgICAgICB0aGlzLmFycmF5T2ZTZWxlY3RlZFNwZWNpZXMucHVzaCh0aGlzLnNlbGVjdGVkU3BlY2llKVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBhbGVydChcIlRoaXMgc3BlY2llIGhhcyBhbHJlYWR5IGJlZW4gYWRkZWQhXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpc1NwZWNpZUluTGlzdChpZDogbnVtYmVyKXtcclxuICAgICAgICBmb3IgKGxldCBpIG9mIE9iamVjdC5rZXlzKHRoaXMuYXJyYXlPZlNlbGVjdGVkU3BlY2llcykpIHtcclxuICAgICAgICAgICAgaWYgKGlkID09IHRoaXMuYXJyYXlPZlNlbGVjdGVkU3BlY2llc1tpXS5pZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFNwZWNpZUxpc3QoKSB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcInRoaXMuX3F1aXpTcGVjaWVzU2VydmljZS5nZXRTcGVjaWVMaXN0KCk6IFwiLCB0aGlzLl9xdWl6U3BlY2llc1NlcnZpY2UuZ2V0U3BlY2llTGlzdCgpKTtcclxuICAgICAgICB0aGlzLnNwZWNpZUxpc3QgPSB0aGlzLl9xdWl6U3BlY2llc1NlcnZpY2UuZ2V0U3BlY2llTGlzdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZVNwZWNpZShzcGVjaWUpIHtcclxuICAgICAgIC8vIGxldCB0ZW1wU3BlY2llTmFtZXMgPSBbXTtcclxuICAgICAgICBsZXQgdGVtcFNwZWNpZUlkID0gW107XHJcbiAgICAgICAgdGhpcy5kZWxTcGVjaWVJZCA9IHNwZWNpZTtcclxuICAgICAgIC8vIHRoaXMuZGVsU3BlY2llTmFtZSA9IHNwZWNpZTtcclxuLypcclxuICAgICAgICBmb3IgKGxldCBpIG9mIE9iamVjdC5rZXlzKHRoaXMuZGlzcGxheVNlbGVjdGVkU3BlY2llcykpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZGlzcGxheVNlbGVjdGVkU3BlY2llc1tpXSAhPSB0aGlzLmRlbFNwZWNpZU5hbWUpIHtcclxuICAgICAgICAgICAgICAgIHRlbXBTcGVjaWVOYW1lcy5wdXNoKHRoaXMuZGlzcGxheVNlbGVjdGVkU3BlY2llc1tpXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5kaXNwbGF5U2VsZWN0ZWRTcGVjaWVzID0gdGVtcFNwZWNpZU5hbWVzO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZGlzcGxheVNlbGVjdGVkU3BlY2llcywgXCJOYW1lIGFycmF5XCIpO1xyXG4qL1xyXG5cclxuICAgICAgICBmb3IgKGxldCBqIG9mIE9iamVjdC5rZXlzKHRoaXMuYXJyYXlPZlNlbGVjdGVkU3BlY2llcykpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuYXJyYXlPZlNlbGVjdGVkU3BlY2llc1tqXSAhPSB0aGlzLmRlbFNwZWNpZUlkKSB7XHJcbiAgICAgICAgICAgICAgICB0ZW1wU3BlY2llSWQucHVzaCh0aGlzLmFycmF5T2ZTZWxlY3RlZFNwZWNpZXNbal0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYXJyYXlPZlNlbGVjdGVkU3BlY2llcyA9IHRlbXBTcGVjaWVJZDtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmFycmF5T2ZTZWxlY3RlZFNwZWNpZXMsIFwiSUQgYXJyYXlcIik7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHBvc3RTcGVjaWVzSWQoKSB7XHJcbiAgICAgICAgdGhpcy5fcXVpelNwZWNpZXNTZXJ2aWNlLnNldFNlbGVjdGVkU3BlY2llKHRoaXMuYXJyYXlPZlNlbGVjdGVkU3BlY2llcyk7XHJcbiAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFtcIlF1aXpNZWRpYVF1aXpcIl0pO1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWRTcGVjaWVMaXN0KCkge1xyXG4gICAgICAgLy8gdGhpcy5kaXNwbGF5U2VsZWN0ZWRTcGVjaWVzID0gdGhpcy5fcXVpelNwZWNpZXNTZXJ2aWNlLmxvYWRTcGVjaWVMaXN0KCk7O1xyXG4gICAgICAgIHRoaXMuYXJyYXlPZlNlbGVjdGVkU3BlY2llcyA9IHRoaXMuX3F1aXpTcGVjaWVzU2VydmljZS5sb2FkU3BlY2llTGlzdCgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuYXJyYXlPZlNlbGVjdGVkU3BlY2llcywgXCIgQXJyYXkgb2YgSUQgbG9hZGVkIGZyb20gc2VydmVyXCIpO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2codGhpcy5kaXNwbGF5U2VsZWN0ZWRTcGVjaWVzLCBcIiBBcnJheSBvZiBuYW1lIGxvYWRlZCBmcm9tIHNlcnZlclwiKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmVzZXRTcGVjaWVMaXN0KCl7XHJcbiAgICAgICAgdGhpcy5fcXVpelNwZWNpZXNTZXJ2aWNlLmNsZWFyU2VsZWN0ZWRTcGVjaWVzKCk7XHJcbiAgICAgICAgdGhpcy5hcnJheU9mU2VsZWN0ZWRTcGVjaWVzID0gW107XHJcbiAgICB9XHJcblxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
