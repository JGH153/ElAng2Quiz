System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var QuizSoundplayer;
    return {
        setters:[],
        execute: function() {
            //supports single and multible playback. Interfaces does not distiguage
            QuizSoundplayer = (function () {
                function QuizSoundplayer(autoplay, autoLoop, parentRef) {
                    this.mediaUrls = [];
                    this.mediaObjects = [];
                    this.volume = 1;
                    this.numLoaded = 0;
                    this.longestAudioIndex = 0;
                    this.longestDuration = 0;
                    this.currentDurationLongest = 0;
                    this.allAudioLoaded = false;
                    this.autoplay = false;
                    this.autoLoop = false;
                    this.thisDestroy = false;
                    this.mediaStartPath = "";
                    this.autoplay = autoplay;
                    this.autoLoop = autoLoop;
                    this.parentRef = parentRef;
                }
                //stop and dereference object/class
                QuizSoundplayer.prototype.destroy = function () {
                    var _this = this;
                    this.thisDestroy = true;
                    this.pause();
                    setTimeout(function () {
                        _this.parentRef = null;
                    }, 0);
                };
                //array of JSON objects with .mediaUrl
                QuizSoundplayer.prototype.addMediaUrls = function () {
                };
                //load array of media
                QuizSoundplayer.prototype.loadMedia = function (mediaStartPath, mediaUrls) {
                    var _this = this;
                    this.mediaStartPath = mediaStartPath;
                    this.mediaUrls = mediaUrls;
                    //load all:
                    for (var _i = 0, _a = Object.keys(this.mediaUrls); _i < _a.length; _i++) {
                        var currentID = _a[_i];
                        var audio = new Audio();
                        audio.src = this.mediaStartPath + this.mediaUrls[currentID].mediaUrl;
                        audio.load();
                        audio.addEventListener("loadeddata", function (event) {
                            _this.oneAudioLoadDone(event);
                        });
                        this.mediaObjects.push(audio);
                    }
                };
                //called for each audiolement done loading
                QuizSoundplayer.prototype.oneAudioLoadDone = function (event) {
                    this.numLoaded++;
                    //all loaded
                    if (this.mediaObjects.length == this.numLoaded) {
                        this.longestDuration = -1;
                        //finds the track with the longest duration and uses that lather as 'master'
                        for (var _i = 0, _a = Object.keys(this.mediaObjects); _i < _a.length; _i++) {
                            var currentID = _a[_i];
                            if (this.mediaObjects[currentID].duration > this.longestDuration) {
                                this.longestDuration = this.mediaObjects[currentID].duration;
                                this.longestAudioIndex = Number(currentID);
                            }
                        }
                        this.allAudioLoaded = true;
                        //console.log("longestDuration ", this.longestDuration, " this.longestAudioIndex ",this.longestAudioIndex);
                        this.allMediaLoaded();
                    }
                };
                //called when all audio is loaded
                QuizSoundplayer.prototype.allMediaLoaded = function () {
                    var _this = this;
                    //update progressbar using ugly refrence calling
                    this.mediaObjects[this.longestAudioIndex].addEventListener("timeupdate", function (event) {
                        if (!_this.thisDestroy) {
                            _this.parentRef.setCurrentAndTotalTime(_this.mediaObjects[_this.longestAudioIndex].currentTime, _this.mediaObjects[_this.longestAudioIndex].duration);
                        }
                    });
                    //loop for my baby
                    this.mediaObjects[this.longestAudioIndex].addEventListener("ended", function (event) {
                        if (_this.autoLoop) {
                            _this.play();
                        }
                    });
                    //autoplaying when loading
                    if (this.autoplay) {
                        this.play();
                    }
                };
                QuizSoundplayer.prototype.isAllMediaLoaded = function () {
                    return this.allAudioLoaded;
                };
                //play on all elements
                QuizSoundplayer.prototype.play = function () {
                    for (var _i = 0, _a = Object.keys(this.mediaObjects); _i < _a.length; _i++) {
                        var currentID = _a[_i];
                        this.mediaObjects[currentID].play();
                    }
                };
                //pause on all elements
                QuizSoundplayer.prototype.pause = function () {
                    for (var _i = 0, _a = Object.keys(this.mediaObjects); _i < _a.length; _i++) {
                        var currentID = _a[_i];
                        this.mediaObjects[currentID].pause();
                    }
                };
                //changing volume, using non abselut values
                QuizSoundplayer.prototype.setVolume = function (volumeChange) {
                    this.volume += volumeChange;
                    this.volume = Math.floor(this.volume);
                    if (this.volume < 0) {
                        this.volume = 0;
                    }
                    if (this.volume > 1) {
                        this.volume = 1;
                    }
                    console.log("this.volume: ", this.volume);
                    this.updateVolumelevels();
                };
                //seekt to percent of total time of max lenth object
                QuizSoundplayer.prototype.seek = function (percent) {
                    if (percent < 0 || percent > 1) {
                        //throw new Error("Seek out of range with value "+percent);
                        return false;
                    }
                    for (var _i = 0, _a = Object.keys(this.mediaObjects); _i < _a.length; _i++) {
                        var currentID = _a[_i];
                        this.mediaObjects[currentID].currentTime = this.mediaObjects[this.longestAudioIndex].duration * percent;
                    }
                    return true;
                };
                //avually updating all audio elements
                QuizSoundplayer.prototype.updateVolumelevels = function () {
                    for (var _i = 0, _a = Object.keys(this.mediaObjects); _i < _a.length; _i++) {
                        var currentID = _a[_i];
                        this.mediaObjects[currentID].volume = this.volume;
                    }
                };
                return QuizSoundplayer;
            }());
            exports_1("QuizSoundplayer", QuizSoundplayer);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC5jbGFzcy90aGUtcXVpei1zb3VuZHBsYXllci5jbGFzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O1lBQUEsdUVBQXVFO1lBQ3ZFO2dCQXFCQyx5QkFBWSxRQUFRLEVBQUUsUUFBUSxFQUFFLFNBQVM7b0JBbkJqQyxjQUFTLEdBQUcsRUFBRSxDQUFDO29CQUNmLGlCQUFZLEdBQUcsRUFBRSxDQUFDO29CQUNsQixXQUFNLEdBQUcsQ0FBQyxDQUFDO29CQUNYLGNBQVMsR0FBRyxDQUFDLENBQUM7b0JBRWQsc0JBQWlCLEdBQUcsQ0FBQyxDQUFDO29CQUN0QixvQkFBZSxHQUFHLENBQUMsQ0FBQztvQkFDcEIsMkJBQXNCLEdBQUcsQ0FBQyxDQUFDO29CQUMzQixtQkFBYyxHQUFHLEtBQUssQ0FBQztvQkFDdkIsYUFBUSxHQUFHLEtBQUssQ0FBQztvQkFDakIsYUFBUSxHQUFHLEtBQUssQ0FBQztvQkFFakIsZ0JBQVcsR0FBRyxLQUFLLENBQUM7b0JBRXBCLG1CQUFjLEdBQUcsRUFBRSxDQUFBO29CQU0xQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztvQkFDekIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7b0JBQ3pCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO2dCQUM1QixDQUFDO2dCQUVELG1DQUFtQztnQkFDbkMsaUNBQU8sR0FBUDtvQkFBQSxpQkFVQztvQkFSQSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztvQkFDeEIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO29CQUViLFVBQVUsQ0FBQzt3QkFDVixLQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztvQkFDdkIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUdQLENBQUM7Z0JBRUQsc0NBQXNDO2dCQUN0QyxzQ0FBWSxHQUFaO2dCQUVBLENBQUM7Z0JBRUQscUJBQXFCO2dCQUNyQixtQ0FBUyxHQUFULFVBQVUsY0FBYyxF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QUMsRUFBOUIsY0FBOEIsRUFBOUIsSUFBOEIsQ0FBQzt3QkFBaEQsSUFBSSxTQUFTLFNBQUE7d0JBQ2pCLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxHQUFJLElBQUksQ0FBQyxNQUFNLENBQUM7cUJBQ25EO2dCQUVGLENBQUM7Z0JBSUYsc0JBQUM7WUFBRCxDQTNMQSxBQTJMQyxJQUFBO1lBM0xELDZDQTJMQyxDQUFBIiwiZmlsZSI6InNoYXJlZC5jbGFzcy90aGUtcXVpei1zb3VuZHBsYXllci5jbGFzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vc3VwcG9ydHMgc2luZ2xlIGFuZCBtdWx0aWJsZSBwbGF5YmFjay4gSW50ZXJmYWNlcyBkb2VzIG5vdCBkaXN0aWd1YWdlXHJcbmV4cG9ydCBjbGFzcyBRdWl6U291bmRwbGF5ZXIge1xyXG5cclxuXHRwcml2YXRlIG1lZGlhVXJscyA9IFtdO1xyXG5cdHByaXZhdGUgbWVkaWFPYmplY3RzID0gW107XHJcblx0cHJpdmF0ZSB2b2x1bWUgPSAxO1xyXG5cdHByaXZhdGUgbnVtTG9hZGVkID0gMDtcclxuXHJcblx0cHJpdmF0ZSBsb25nZXN0QXVkaW9JbmRleCA9IDA7XHJcblx0cHJpdmF0ZSBsb25nZXN0RHVyYXRpb24gPSAwO1xyXG5cdHByaXZhdGUgY3VycmVudER1cmF0aW9uTG9uZ2VzdCA9IDA7XHJcblx0cHJpdmF0ZSBhbGxBdWRpb0xvYWRlZCA9IGZhbHNlO1xyXG5cdHByaXZhdGUgYXV0b3BsYXkgPSBmYWxzZTtcclxuXHRwcml2YXRlIGF1dG9Mb29wID0gZmFsc2U7XHJcblxyXG5cdHByaXZhdGUgdGhpc0Rlc3Ryb3kgPSBmYWxzZTtcclxuXHJcblx0cHJpdmF0ZSBtZWRpYVN0YXJ0UGF0aCA9IFwiXCJcclxuXHJcblx0Ly9wcml2YXRlIGNhbGxiYWNrRnVuY3Rpb247XHJcblx0cHJpdmF0ZSBwYXJlbnRSZWY7XHJcblxyXG5cdGNvbnN0cnVjdG9yKGF1dG9wbGF5LCBhdXRvTG9vcCwgcGFyZW50UmVmKXtcclxuXHRcdHRoaXMuYXV0b3BsYXkgPSBhdXRvcGxheTtcclxuXHRcdHRoaXMuYXV0b0xvb3AgPSBhdXRvTG9vcDtcclxuXHRcdHRoaXMucGFyZW50UmVmID0gcGFyZW50UmVmO1xyXG5cdH1cclxuXHJcblx0Ly9zdG9wIGFuZCBkZXJlZmVyZW5jZSBvYmplY3QvY2xhc3NcclxuXHRkZXN0cm95KCl7XHJcblxyXG5cdFx0dGhpcy50aGlzRGVzdHJveSA9IHRydWU7XHJcblx0XHR0aGlzLnBhdXNlKCk7XHJcblxyXG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdHRoaXMucGFyZW50UmVmID0gbnVsbDtcclxuXHRcdH0sIDApO1xyXG5cclxuXHJcblx0fVxyXG5cclxuXHQvL2FycmF5IG9mIEpTT04gb2JqZWN0cyB3aXRoIC5tZWRpYVVybFxyXG5cdGFkZE1lZGlhVXJscyAoKXtcclxuXHJcblx0fVxyXG5cclxuXHQvL2xvYWQgYXJyYXkgb2YgbWVkaWFcclxuXHRsb2FkTWVkaWEobWVkaWFTdGFydFBhdGgsIG1lZGlhVXJscyl7XHJcblxyXG5cdFx0dGhpcy5tZWRpYVN0YXJ0UGF0aCA9IG1lZGlhU3RhcnRQYXRoO1xyXG5cdFx0dGhpcy5tZWRpYVVybHMgPSBtZWRpYVVybHM7XHJcblxyXG5cdFx0Ly9sb2FkIGFsbDpcclxuXHRcdGZvciAobGV0IGN1cnJlbnRJRCBvZiBPYmplY3Qua2V5cyh0aGlzLm1lZGlhVXJscykpIHtcclxuXHJcblx0XHRcdGxldCBhdWRpbyA9IG5ldyBBdWRpbygpO1xyXG5cdFx0XHRhdWRpby5zcmMgID0gdGhpcy5tZWRpYVN0YXJ0UGF0aCArIHRoaXMubWVkaWFVcmxzW2N1cnJlbnRJRF0ubWVkaWFVcmw7XHJcblx0XHRcdGF1ZGlvLmxvYWQoKTtcclxuXHRcdFx0YXVkaW8uYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRlZGRhdGFcIiwgKGV2ZW50KT0+e1xyXG5cdFx0XHRcdHRoaXMub25lQXVkaW9Mb2FkRG9uZShldmVudCk7XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0dGhpcy5tZWRpYU9iamVjdHMucHVzaChhdWRpbyk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9XHJcblxyXG5cdC8vY2FsbGVkIGZvciBlYWNoIGF1ZGlvbGVtZW50IGRvbmUgbG9hZGluZ1xyXG5cdHByaXZhdGUgb25lQXVkaW9Mb2FkRG9uZShldmVudCl7XHJcblxyXG5cdFx0dGhpcy5udW1Mb2FkZWQgKys7XHJcblx0XHQvL2FsbCBsb2FkZWRcclxuXHRcdGlmKHRoaXMubWVkaWFPYmplY3RzLmxlbmd0aCA9PSB0aGlzLm51bUxvYWRlZCl7XHJcblxyXG5cdFx0XHR0aGlzLmxvbmdlc3REdXJhdGlvbiA9IC0xO1xyXG5cclxuXHRcdFx0Ly9maW5kcyB0aGUgdHJhY2sgd2l0aCB0aGUgbG9uZ2VzdCBkdXJhdGlvbiBhbmQgdXNlcyB0aGF0IGxhdGhlciBhcyAnbWFzdGVyJ1xyXG5cdFx0XHRmb3IgKGxldCBjdXJyZW50SUQgb2YgT2JqZWN0LmtleXModGhpcy5tZWRpYU9iamVjdHMpKSB7XHJcblx0XHRcdFx0aWYodGhpcy5tZWRpYU9iamVjdHNbY3VycmVudElEXS5kdXJhdGlvbiA+IHRoaXMubG9uZ2VzdER1cmF0aW9uKXtcclxuXHRcdFx0XHRcdHRoaXMubG9uZ2VzdER1cmF0aW9uID0gdGhpcy5tZWRpYU9iamVjdHNbY3VycmVudElEXS5kdXJhdGlvbjtcclxuXHRcdFx0XHRcdHRoaXMubG9uZ2VzdEF1ZGlvSW5kZXggPSBOdW1iZXIoY3VycmVudElEKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHRoaXMuYWxsQXVkaW9Mb2FkZWQgPSB0cnVlO1xyXG5cdFx0XHQvL2NvbnNvbGUubG9nKFwibG9uZ2VzdER1cmF0aW9uIFwiLCB0aGlzLmxvbmdlc3REdXJhdGlvbiwgXCIgdGhpcy5sb25nZXN0QXVkaW9JbmRleCBcIix0aGlzLmxvbmdlc3RBdWRpb0luZGV4KTtcclxuXHRcdFx0dGhpcy5hbGxNZWRpYUxvYWRlZCgpO1xyXG5cclxuXHRcdH1cclxuXHJcblx0fVxyXG5cclxuXHQvL2NhbGxlZCB3aGVuIGFsbCBhdWRpbyBpcyBsb2FkZWRcclxuXHRwcml2YXRlIGFsbE1lZGlhTG9hZGVkKCl7XHJcblxyXG5cdFx0Ly91cGRhdGUgcHJvZ3Jlc3NiYXIgdXNpbmcgdWdseSByZWZyZW5jZSBjYWxsaW5nXHJcblx0XHR0aGlzLm1lZGlhT2JqZWN0c1t0aGlzLmxvbmdlc3RBdWRpb0luZGV4XS5hZGRFdmVudExpc3RlbmVyKFwidGltZXVwZGF0ZVwiLCAoZXZlbnQpPT57XHJcblxyXG5cdFx0XHRpZighdGhpcy50aGlzRGVzdHJveSl7XHJcblx0XHRcdFx0dGhpcy5wYXJlbnRSZWYuc2V0Q3VycmVudEFuZFRvdGFsVGltZSh0aGlzLm1lZGlhT2JqZWN0c1t0aGlzLmxvbmdlc3RBdWRpb0luZGV4XS5jdXJyZW50VGltZSwgdGhpcy5tZWRpYU9iamVjdHNbdGhpcy5sb25nZXN0QXVkaW9JbmRleF0uZHVyYXRpb24pO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdFx0Ly9sb29wIGZvciBteSBiYWJ5XHJcblx0XHR0aGlzLm1lZGlhT2JqZWN0c1t0aGlzLmxvbmdlc3RBdWRpb0luZGV4XS5hZGRFdmVudExpc3RlbmVyKFwiZW5kZWRcIiwgKGV2ZW50KT0+e1xyXG5cclxuXHRcdFx0aWYodGhpcy5hdXRvTG9vcCl7XHJcblx0XHRcdFx0dGhpcy5wbGF5KCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHR9KTtcclxuXHJcblx0XHQvL2F1dG9wbGF5aW5nIHdoZW4gbG9hZGluZ1xyXG5cdFx0aWYodGhpcy5hdXRvcGxheSl7XHJcblx0XHRcdHRoaXMucGxheSgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0aXNBbGxNZWRpYUxvYWRlZCgpe1xyXG5cdFx0cmV0dXJuIHRoaXMuYWxsQXVkaW9Mb2FkZWQ7XHJcblx0fVxyXG5cclxuXHQvL3BsYXkgb24gYWxsIGVsZW1lbnRzXHJcblx0cGxheSgpe1xyXG5cclxuXHRcdGZvciAobGV0IGN1cnJlbnRJRCBvZiBPYmplY3Qua2V5cyh0aGlzLm1lZGlhT2JqZWN0cykpIHtcclxuXHRcdFx0dGhpcy5tZWRpYU9iamVjdHNbY3VycmVudElEXS5wbGF5KCk7XHJcblx0XHR9XHJcblxyXG5cdH1cclxuXHJcblx0Ly9wYXVzZSBvbiBhbGwgZWxlbWVudHNcclxuXHRwYXVzZSgpe1xyXG5cclxuXHRcdGZvciAobGV0IGN1cnJlbnRJRCBvZiBPYmplY3Qua2V5cyh0aGlzLm1lZGlhT2JqZWN0cykpIHtcclxuXHRcdFx0dGhpcy5tZWRpYU9iamVjdHNbY3VycmVudElEXS5wYXVzZSgpO1xyXG5cdFx0fVxyXG5cclxuXHR9XHJcblxyXG5cdC8vY2hhbmdpbmcgdm9sdW1lLCB1c2luZyBub24gYWJzZWx1dCB2YWx1ZXNcclxuXHRzZXRWb2x1bWUodm9sdW1lQ2hhbmdlKXtcclxuXHJcblx0XHR0aGlzLnZvbHVtZSArPSB2b2x1bWVDaGFuZ2U7XHJcblx0XHR0aGlzLnZvbHVtZSA9IE1hdGguZmxvb3IodGhpcy52b2x1bWUpO1xyXG5cclxuXHRcdGlmKHRoaXMudm9sdW1lICA8IDApe1xyXG5cdFx0XHR0aGlzLnZvbHVtZSA9IDA7XHJcblx0XHR9XHJcblx0XHRpZih0aGlzLnZvbHVtZSAgPiAxKXtcclxuXHRcdFx0dGhpcy52b2x1bWUgPSAxO1xyXG5cdFx0fVxyXG5cdFx0Y29uc29sZS5sb2coXCJ0aGlzLnZvbHVtZTogXCIsIHRoaXMudm9sdW1lKTtcclxuXHJcblx0XHR0aGlzLnVwZGF0ZVZvbHVtZWxldmVscygpO1xyXG5cclxuXHJcblx0fVxyXG5cclxuXHQvL3NlZWt0IHRvIHBlcmNlbnQgb2YgdG90YWwgdGltZSBvZiBtYXggbGVudGggb2JqZWN0XHJcblx0c2VlayhwZXJjZW50KXtcclxuXHJcblx0XHRpZihwZXJjZW50IDwgMCB8fCBwZXJjZW50ID4gMSl7XHJcblx0XHRcdC8vdGhyb3cgbmV3IEVycm9yKFwiU2VlayBvdXQgb2YgcmFuZ2Ugd2l0aCB2YWx1ZSBcIitwZXJjZW50KTtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZvciAobGV0IGN1cnJlbnRJRCBvZiBPYmplY3Qua2V5cyh0aGlzLm1lZGlhT2JqZWN0cykpIHtcclxuXHRcdFx0dGhpcy5tZWRpYU9iamVjdHNbY3VycmVudElEXS5jdXJyZW50VGltZSA9IHRoaXMubWVkaWFPYmplY3RzW3RoaXMubG9uZ2VzdEF1ZGlvSW5kZXhdLmR1cmF0aW9uICogcGVyY2VudDtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHJcblx0fVxyXG5cclxuXHQvL2F2dWFsbHkgdXBkYXRpbmcgYWxsIGF1ZGlvIGVsZW1lbnRzXHJcblx0cHJpdmF0ZSB1cGRhdGVWb2x1bWVsZXZlbHMoKXtcclxuXHJcblx0XHRmb3IgKGxldCBjdXJyZW50SUQgb2YgT2JqZWN0LmtleXModGhpcy5tZWRpYU9iamVjdHMpKSB7XHJcblx0XHRcdHRoaXMubWVkaWFPYmplY3RzW2N1cnJlbnRJRF0udm9sdW1lICA9IHRoaXMudm9sdW1lO1xyXG5cdFx0fVxyXG5cclxuXHR9XHJcblxyXG5cclxuXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
