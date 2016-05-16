System.register(['angular2/core', 'angular2/http'], function(exports_1, context_1) {
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
    var TheQuizImageComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            TheQuizImageComponent = (function () {
                function TheQuizImageComponent() {
                    this.title = 'Birdid Quiz TheQuizComponent!';
                    this.imageURLStart = "https://hembstudios.no//birdid/IDprogram/getMedia.php?mediaID=";
                    this.mediaID = 0;
                }
                TheQuizImageComponent = __decorate([
                    core_1.Component({
                        selector: 'birdid-the-quiz-image',
                        templateUrl: 'app/media-additional-settings/the-quiz-image.component.html',
                        directives: [],
                        providers: [
                            http_1.HTTP_PROVIDERS
                        ],
                        inputs: ['mediaID:usingMediaID'],
                    }), 
                    __metadata('design:paramtypes', [])
                ], TheQuizImageComponent);
                return TheQuizImageComponent;
            }());
            exports_1("TheQuizImageComponent", TheQuizImageComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRoZS1xdWl6L3RoZS1xdWl6LWltYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBaUJBO2dCQUFBO29CQUNHLFVBQUssR0FBRywrQkFBK0IsQ0FBQztvQkFFeEMsa0JBQWEsR0FBRyxnRUFBZ0UsQ0FBQztvQkFFaEYsWUFBTyxHQUFHLENBQUMsQ0FBQztnQkFHaEIsQ0FBQztnQkFyQkQ7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVixRQUFRLEVBQUUsdUJBQXVCO3dCQUNqQyxXQUFXLEVBQUUsNkRBQTZEO3dCQUMxRSxVQUFVLEVBQUUsRUFFWDt3QkFDRCxTQUFTLEVBQUU7NEJBQ1QscUJBQWM7eUJBQ2Y7d0JBQ0QsTUFBTSxFQUFFLENBQUMsc0JBQXNCLENBQUM7cUJBQ2hDLENBQUM7O3lDQUFBO2dCQVdGLDRCQUFDO1lBQUQsQ0FSQSxBQVFDLElBQUE7WUFSRCx5REFRQyxDQUFBIiwiZmlsZSI6InRoZS1xdWl6L3RoZS1xdWl6LWltYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIgfSAgICAgICBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHsgSHR0cCwgSFRUUF9QUk9WSURFUlMgfSBmcm9tICdhbmd1bGFyMi9odHRwJztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogJ2JpcmRpZC10aGUtcXVpei1pbWFnZScsXHJcblx0dGVtcGxhdGVVcmw6ICdhcHAvbWVkaWEtYWRkaXRpb25hbC1zZXR0aW5ncy90aGUtcXVpei1pbWFnZS5jb21wb25lbnQuaHRtbCcsXHJcblx0ZGlyZWN0aXZlczogW1xyXG5cclxuXHRdLFxyXG5cdHByb3ZpZGVyczogW1xyXG5cdCAgSFRUUF9QUk9WSURFUlNcclxuXHRdLFxyXG5cdGlucHV0czogWydtZWRpYUlEOnVzaW5nTWVkaWFJRCddLCAvL3VzaW5nIEFMSUFTXHJcbn0pXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFRoZVF1aXpJbWFnZUNvbXBvbmVudCB7XHJcblx0ICB0aXRsZSA9ICdCaXJkaWQgUXVpeiBUaGVRdWl6Q29tcG9uZW50ISc7XHJcblxyXG5cdCAgaW1hZ2VVUkxTdGFydCA9IFwiaHR0cHM6Ly9oZW1ic3R1ZGlvcy5uby8vYmlyZGlkL0lEcHJvZ3JhbS9nZXRNZWRpYS5waHA/bWVkaWFJRD1cIjtcclxuXHJcbiAgICBtZWRpYUlEID0gMDtcclxuXHJcblxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
