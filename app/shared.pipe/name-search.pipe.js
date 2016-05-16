System.register(["angular2/core"], function(exports_1, context_1) {
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
    var core_1;
    var NameSearchPipe;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            //NOT WORKING!!!!!
            NameSearchPipe = (function () {
                function NameSearchPipe() {
                }
                NameSearchPipe.prototype.transform = function (value, args) {
                    console.log("test tolower: ", "ThisIsGood".toLowerCase());
                    this.returnArray = [];
                    var compaareString = args;
                    //compaareString = compaareString.toLowerCase();
                    for (var _i = 0, _a = Object.keys(value); _i < _a.length; _i++) {
                        var id = _a[_i];
                        var name_1 = value[id].name;
                        //name = name.toLowerCase();
                        if (name_1.indexOf(compaareString) >= 0) {
                            this.returnArray.push(value[id]);
                            console.log('Stuff name: ', name_1);
                            console.log('Stuff comp: ', compaareString);
                        }
                    }
                    console.log("PIPE1: ", value);
                    console.log("PIPE2: ", args);
                    console.log("PIPE3: ", this.returnArray);
                    return this.returnArray;
                };
                NameSearchPipe = __decorate([
                    core_1.Pipe({
                        name: 'nameSearch'
                    }), 
                    __metadata('design:paramtypes', [])
                ], NameSearchPipe);
                return NameSearchPipe;
            }());
            exports_1("NameSearchPipe", NameSearchPipe);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC5waXBlL25hbWUtc2VhcmNoLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFFQSxrQkFBa0I7WUFLbEI7Z0JBQUE7Z0JBbUNBLENBQUM7Z0JBL0JBLGtDQUFTLEdBQVQsVUFBVSxLQUFhLEVBQUUsSUFBVztvQkFFbkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQTtvQkFFekQsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7b0JBQ3RCLElBQUksY0FBYyxHQUFVLElBQUksQ0FBQztvQkFDakMsZ0RBQWdEO29CQUVoRCxHQUFHLENBQUMsQ0FBVyxVQUFrQixFQUFsQixLQUFBLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQWxCLGNBQWtCLEVBQWxCLElBQWtCLENBQUM7d0JBQTdCLElBQUksRUFBRSxTQUFBO3dCQUVWLElBQUksTUFBSSxHQUFVLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUM7d0JBQ2pDLDRCQUE0Qjt3QkFFNUIsRUFBRSxDQUFBLENBQUMsTUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQSxDQUFDOzRCQUVyQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzs0QkFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsTUFBSSxDQUFDLENBQUM7NEJBQ2xDLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLGNBQWMsQ0FBQyxDQUFBO3dCQUU1QyxDQUFDO3FCQUVEO29CQUVELE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDO29CQUM5QixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztvQkFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO29CQUV6QyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztnQkFFekIsQ0FBQztnQkFwQ0Y7b0JBQUMsV0FBSSxDQUFDO3dCQUNMLElBQUksRUFBRSxZQUFZO3FCQUNsQixDQUFDOztrQ0FBQTtnQkFvQ0YscUJBQUM7WUFBRCxDQW5DQSxBQW1DQyxJQUFBO1lBbkNELDJDQW1DQyxDQUFBIiwiZmlsZSI6InNoYXJlZC5waXBlL25hbWUtc2VhcmNoLnBpcGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIlxyXG5cclxuLy9OT1QgV09SS0lORyEhISEhXHJcblxyXG5AUGlwZSh7XHJcblx0bmFtZTogJ25hbWVTZWFyY2gnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOYW1lU2VhcmNoUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm17XHJcblxyXG5cdHJldHVybkFycmF5O1xyXG5cclxuXHR0cmFuc2Zvcm0odmFsdWU6IHN0cmluZywgYXJnczpzdHJpbmcpe1xyXG5cclxuXHRcdGNvbnNvbGUubG9nKFwidGVzdCB0b2xvd2VyOiBcIiwgXCJUaGlzSXNHb29kXCIudG9Mb3dlckNhc2UoKSlcclxuXHJcblx0XHR0aGlzLnJldHVybkFycmF5ID0gW107XHJcblx0XHRsZXQgY29tcGFhcmVTdHJpbmc6c3RyaW5nID0gYXJncztcclxuXHRcdC8vY29tcGFhcmVTdHJpbmcgPSBjb21wYWFyZVN0cmluZy50b0xvd2VyQ2FzZSgpO1xyXG5cclxuXHRcdGZvciAobGV0IGlkIG9mIE9iamVjdC5rZXlzKHZhbHVlKSkge1xyXG5cclxuXHRcdFx0bGV0IG5hbWU6c3RyaW5nID0gdmFsdWVbaWRdLm5hbWU7XHJcblx0XHRcdC8vbmFtZSA9IG5hbWUudG9Mb3dlckNhc2UoKTtcclxuXHJcblx0XHRcdGlmKG5hbWUuaW5kZXhPZihjb21wYWFyZVN0cmluZykgPj0gMCl7XHJcblxyXG5cdFx0XHRcdHRoaXMucmV0dXJuQXJyYXkucHVzaCh2YWx1ZVtpZF0pO1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKCdTdHVmZiBuYW1lOiAnLCBuYW1lKTtcclxuXHRcdFx0XHRjb25zb2xlLmxvZygnU3R1ZmYgY29tcDogJywgY29tcGFhcmVTdHJpbmcpXHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdGNvbnNvbGUubG9nKFwiUElQRTE6IFwiLCB2YWx1ZSk7XHJcblx0XHRjb25zb2xlLmxvZyhcIlBJUEUyOiBcIiwgYXJncyk7XHJcblx0XHRjb25zb2xlLmxvZyhcIlBJUEUzOiBcIiwgdGhpcy5yZXR1cm5BcnJheSk7XHJcblxyXG5cdFx0cmV0dXJuIHRoaXMucmV0dXJuQXJyYXk7XHJcblxyXG5cdH1cclxuXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
