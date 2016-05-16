System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var QuizQuestion;
    return {
        setters:[],
        execute: function() {
            QuizQuestion = (function () {
                function QuizQuestion(allowMultibleSelect) {
                    this.rightAnswers = [];
                    this.choices = [];
                    this.selectedChoices = [];
                    this.allowMultibleSelect = false;
                    this.mediaIds = [];
                    this.mediaSources = [];
                    this.extraInfoes = [];
                    this.allowMultibleSelect = allowMultibleSelect;
                }
                //TODO  return false if aswer is already in list
                QuizQuestion.prototype.addRightAnswer = function (id, name, latin) {
                    this.rightAnswers.push({ 'id': id, 'name': name, 'latin': latin });
                    this.addChoice(id, name, latin);
                };
                QuizQuestion.prototype.addChoice = function (id, name, latin) {
                    this.choices.push({ 'id': id, 'name': name, 'latin': latin });
                };
                //what the user have selected. Only adds if not in array (retuns false if in array)
                QuizQuestion.prototype.addSelectedChoice = function (id) {
                    //selecting i don't knoq clears all selections
                    if (id < 0) {
                        this.removeAllSelectedChoices();
                        return true;
                    }
                    for (var _i = 0, _a = Object.keys(this.selectedChoices); _i < _a.length; _i++) {
                        var currentID = _a[_i];
                        if (this.selectedChoices[currentID].id == id) {
                            return false;
                        }
                    }
                    if (this.allowMultibleSelect) {
                        this.selectedChoices.push({ 'id': id });
                    }
                    else {
                        //only one allowed in normal quiz:
                        this.removeAllSelectedChoices();
                        this.selectedChoices.push({ 'id': id });
                    }
                    return true;
                };
                //what the user have selected
                QuizQuestion.prototype.getSelectedChoice = function (id) {
                    return this.selectedChoices;
                };
                QuizQuestion.prototype.choiceIsSelected = function (id) {
                    //if i don't know AND no other choice is selected return true
                    if (id < 0 && this.selectedChoices.length == 0) {
                        return true;
                    }
                    for (var _i = 0, _a = Object.keys(this.selectedChoices); _i < _a.length; _i++) {
                        var currentID = _a[_i];
                        if (this.selectedChoices[currentID].id == id) {
                            return true;
                        }
                    }
                    return false;
                };
                //what the user have selected. True if deleted, false if not
                QuizQuestion.prototype.removeSelectedChoice = function (id) {
                    //can't remove i don't know
                    if (id < 0) {
                        return false;
                    }
                    var index = -1;
                    for (var _i = 0, _a = Object.keys(this.selectedChoices); _i < _a.length; _i++) {
                        var currentID = _a[_i];
                        if (this.selectedChoices[currentID].id == id) {
                            index = Number(currentID);
                        }
                    }
                    if (index > -1) {
                        this.selectedChoices.splice(index, 1);
                        return true;
                    }
                    else {
                        return false;
                    }
                };
                QuizQuestion.prototype.removeAllSelectedChoices = function () {
                    this.selectedChoices.splice(0);
                };
                QuizQuestion.prototype.addMediaSource = function (mediaUrl) {
                    this.mediaSources.push({ 'mediaUrl': mediaUrl });
                };
                QuizQuestion.prototype.addExtraInfo = function (text) {
                    this.extraInfoes.push({ 'extraInfo': text });
                };
                QuizQuestion.prototype.addMediaId = function (id) {
                    this.mediaIds.push({ 'id': id });
                };
                QuizQuestion.prototype.getMediaIds = function () {
                    return this.mediaIds;
                };
                //returns as one string of all extra infoes
                QuizQuestion.prototype.getExtraInfo = function () {
                    var returnString = " ";
                    for (var _i = 0, _a = Object.keys(this.extraInfoes); _i < _a.length; _i++) {
                        var currentID = _a[_i];
                        if (this.extraInfoes[currentID].extraInfo.length > 0) {
                            returnString += this.extraInfoes[currentID].extraInfo + ",";
                        }
                    }
                    if (returnString.length == 0) {
                        return "";
                    }
                    else {
                        return returnString.substring(0, returnString.length - 1);
                        ;
                    }
                };
                QuizQuestion.prototype.getMediaSourses = function () {
                    return this.mediaSources;
                };
                QuizQuestion.prototype.getChoices = function () {
                    return this.choices;
                };
                QuizQuestion.prototype.getRigthAnsers = function () {
                    return this.rightAnswers;
                };
                QuizQuestion.prototype.elementAlreadyInArray = function (array, id) {
                    for (var _i = 0, _a = Object.keys(array); _i < _a.length; _i++) {
                        var currentID = _a[_i];
                        if (id == array[currentID].id) {
                            return true;
                        }
                    }
                    return false;
                };
                QuizQuestion.prototype.prosessData = function () {
                    var tempArray = [];
                    //only selecting one of each
                    for (var _i = 0, _a = Object.keys(this.choices); _i < _a.length; _i++) {
                        var currentChoiceID = _a[_i];
                        if (!this.elementAlreadyInArray(tempArray, this.choices[currentChoiceID].id)) {
                            tempArray.push(this.choices[currentChoiceID]);
                        }
                    }
                    this.choices = tempArray;
                    this.choices = this.shuffle(this.choices);
                    this.addChoice(-1, "I don't know", "I don't know");
                };
                //using internal selected choices list
                QuizQuestion.prototype.getScoreForSelectedAnswers = function () {
                    return this.scoreForMultibleAnswers(this.selectedChoices);
                };
                //returns score
                QuizQuestion.prototype.scoreForMultibleAnswers = function (arrayOfSpecieAlternatives) {
                    var score = 0;
                    for (var _i = 0, _a = Object.keys(arrayOfSpecieAlternatives); _i < _a.length; _i++) {
                        var currentID = _a[_i];
                        if (this.checkIfAnserIsCorrect(arrayOfSpecieAlternatives[currentID].id)) {
                            score++;
                        }
                        else {
                            score--;
                        }
                    }
                    return score;
                };
                QuizQuestion.prototype.checkIfAnserIsCorrect = function (id) {
                    for (var _i = 0, _a = Object.keys(this.rightAnswers); _i < _a.length; _i++) {
                        var currentRightAnsID = _a[_i];
                        if (id == this.rightAnswers[currentRightAnsID].id) {
                            return true;
                        }
                    }
                    return false;
                };
                //http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
                QuizQuestion.prototype.shuffle = function (array) {
                    var currentIndex = array.length, temporaryValue, randomIndex;
                    // While there remain elements to shuffle...
                    while (0 !== currentIndex) {
                        // Pick a remaining element...
                        randomIndex = Math.floor(Math.random() * currentIndex);
                        currentIndex -= 1;
                        // And swap it with the current element.
                        temporaryValue = array[currentIndex];
                        array[currentIndex] = array[randomIndex];
                        array[randomIndex] = temporaryValue;
                    }
                    return array;
                };
                return QuizQuestion;
            }());
            exports_1("QuizQuestion", QuizQuestion);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRoZS1xdWl6L3RoZS1xdWl6LXF1ZXN0aW9uLmNsYXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7WUFBQTtnQkFXQyxzQkFBWSxtQkFBbUI7b0JBVHZCLGlCQUFZLEdBQUcsRUFBRSxDQUFDO29CQUNsQixZQUFPLEdBQUcsRUFBRSxDQUFDO29CQUNiLG9CQUFlLEdBQUcsRUFBRSxDQUFDO29CQUNyQix3QkFBbUIsR0FBRyxLQUFLLENBQUM7b0JBRTVCLGFBQVEsR0FBRyxFQUFFLENBQUM7b0JBQ2QsaUJBQVksR0FBRyxFQUFFLENBQUM7b0JBQ2xCLGdCQUFXLEdBQUcsRUFBRSxDQUFDO29CQUl4QixJQUFJLENBQUMsbUJBQW1CLEdBQUcsbUJBQW1CLENBQUM7Z0JBRWhELENBQUM7Z0JBRUQsZ0RBQWdEO2dCQUNoRCxxQ0FBYyxHQUFkLFVBQWUsRUFBRSxFQUFFLElBQUksRUFBRSxLQUFLO29CQUU3QixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FBQztvQkFDakUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUVqQyxDQUFDO2dCQUNELGdDQUFTLEdBQVQsVUFBVSxFQUFFLEVBQUUsSUFBSSxFQUFFLEtBQUs7b0JBRXhCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFDO2dCQUU3RCxDQUFDO2dCQUVELG1GQUFtRjtnQkFDbkYsd0NBQWlCLEdBQWpCLFVBQWtCLEVBQUU7b0JBR25CLDhDQUE4QztvQkFDOUMsRUFBRSxDQUFBLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFBLENBQUM7d0JBQ1YsSUFB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QUFNLENBQUMsS0FBSyxDQUFDO2dCQUNqQixDQUFDO2dCQUlMLG1CQUFDO1lBQUQsQ0F4UUEsQUF3UUMsSUFBQTtZQXhRRCx1Q0F3UUMsQ0FBQSIsImZpbGUiOiJ0aGUtcXVpei90aGUtcXVpei1xdWVzdGlvbi5jbGFzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBRdWl6UXVlc3Rpb24ge1xyXG5cclxuXHRwcml2YXRlIHJpZ2h0QW5zd2VycyA9IFtdO1xyXG5cdHByaXZhdGUgY2hvaWNlcyA9IFtdO1xyXG5cdHByaXZhdGUgc2VsZWN0ZWRDaG9pY2VzID0gW107XHJcblx0cHJpdmF0ZSBhbGxvd011bHRpYmxlU2VsZWN0ID0gZmFsc2U7XHJcblxyXG5cdHByaXZhdGUgbWVkaWFJZHMgPSBbXTtcclxuXHRwcml2YXRlIG1lZGlhU291cmNlcyA9IFtdO1xyXG5cdHByaXZhdGUgZXh0cmFJbmZvZXMgPSBbXTtcclxuXHJcblx0Y29uc3RydWN0b3IoYWxsb3dNdWx0aWJsZVNlbGVjdCl7XHJcblxyXG5cdFx0dGhpcy5hbGxvd011bHRpYmxlU2VsZWN0ID0gYWxsb3dNdWx0aWJsZVNlbGVjdDtcclxuXHJcblx0fVxyXG5cclxuXHQvL1RPRE8gIHJldHVybiBmYWxzZSBpZiBhc3dlciBpcyBhbHJlYWR5IGluIGxpc3RcclxuXHRhZGRSaWdodEFuc3dlcihpZCwgbmFtZSwgbGF0aW4pe1xyXG5cclxuXHRcdHRoaXMucmlnaHRBbnN3ZXJzLnB1c2goeydpZCc6IGlkLCAnbmFtZSc6IG5hbWUsICdsYXRpbic6IGxhdGlufSk7XHJcblx0XHR0aGlzLmFkZENob2ljZShpZCwgbmFtZSwgbGF0aW4pO1xyXG5cclxuXHR9XHJcblx0YWRkQ2hvaWNlKGlkLCBuYW1lLCBsYXRpbil7XHJcblxyXG5cdFx0dGhpcy5jaG9pY2VzLnB1c2goeydpZCc6IGlkLCAnbmFtZSc6IG5hbWUsICdsYXRpbic6IGxhdGlufSk7XHJcblxyXG5cdH1cclxuXHJcblx0Ly93aGF0IHRoZSB1c2VyIGhhdmUgc2VsZWN0ZWQuIE9ubHkgYWRkcyBpZiBub3QgaW4gYXJyYXkgKHJldHVucyBmYWxzZSBpZiBpbiBhcnJheSlcclxuXHRhZGRTZWxlY3RlZENob2ljZShpZCl7XHJcblxyXG5cclxuXHRcdC8vc2VsZWN0aW5nIGkgZG9uJ3Qga25vcSBjbGVhcnMgYWxsIHNlbGVjdGlvbnNcclxuXHRcdGlmKGlkIDwgMCl7XHJcblx0XHRcdHRoaXMucmVtb3ZlQWxsU2VsZWN0ZWRDaG9pY2VzKCk7XHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0fVxyXG5cclxuXHJcblx0XHRmb3IgKGxldCBjdXJyZW50SUQgb2YgT2JqZWN0LmtleXModGhpcy5zZWxlY3RlZENob2ljZXMpKSB7XHJcblx0XHRcdGlmKHRoaXMuc2VsZWN0ZWRDaG9pY2VzW2N1cnJlbnRJRF0uaWQgPT0gaWQpe1xyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGlmKHRoaXMuYWxsb3dNdWx0aWJsZVNlbGVjdCl7XHJcblx0XHRcdHRoaXMuc2VsZWN0ZWRDaG9pY2VzLnB1c2goeydpZCc6IGlkfSk7XHJcblx0XHR9ZWxzZXtcclxuXHRcdFx0Ly9vbmx5IG9uZSBhbGxvd2VkIGluIG5vcm1hbCBxdWl6OlxyXG5cdFx0XHR0aGlzLnJlbW92ZUFsbFNlbGVjdGVkQ2hvaWNlcygpO1xyXG5cdFx0XHR0aGlzLnNlbGVjdGVkQ2hvaWNlcy5wdXNoKHsnaWQnOiBpZH0pO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiB0cnVlO1xyXG5cclxuXHR9XHJcblxyXG5cdC8vd2hhdCB0aGUgdXNlciBoYXZlIHNlbGVjdGVkXHJcblx0Z2V0U2VsZWN0ZWRDaG9pY2UoaWQpe1xyXG5cclxuXHRcdHJldHVybiB0aGlzLnNlbGVjdGVkQ2hvaWNlcztcclxuXHJcblx0fVxyXG5cclxuXHRjaG9pY2VJc1NlbGVjdGVkKGlkKXtcclxuXHJcblx0XHQvL2lmIGkgZG9uJ3Qga25vdyBBTkQgbm8gb3RoZXIgY2hvaWNlIGlzIHNlbGVjdGVkIHJldHVybiB0cnVlXHJcblx0XHRpZihpZCA8IDAgJiYgdGhpcy5zZWxlY3RlZENob2ljZXMubGVuZ3RoID09IDApe1xyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdH1cclxuXHJcblx0XHRmb3IgKGxldCBjdXJyZW50SUQgb2YgT2JqZWN0LmtleXModGhpcy5zZWxlY3RlZENob2ljZXMpKSB7XHJcblx0XHRcdGlmKHRoaXMuc2VsZWN0ZWRDaG9pY2VzW2N1cnJlbnRJRF0uaWQgPT0gaWQpe1xyXG5cdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fVxyXG5cclxuXHQvL3doYXQgdGhlIHVzZXIgaGF2ZSBzZWxlY3RlZC4gVHJ1ZSBpZiBkZWxldGVkLCBmYWxzZSBpZiBub3RcclxuXHRyZW1vdmVTZWxlY3RlZENob2ljZShpZCl7XHJcblxyXG5cdFx0Ly9jYW4ndCByZW1vdmUgaSBkb24ndCBrbm93XHJcblx0XHRpZihpZCA8IDApe1xyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblxyXG5cdFx0bGV0IGluZGV4Om51bWJlciA9IC0xO1xyXG5cdFx0Zm9yIChsZXQgY3VycmVudElEIG9mIE9iamVjdC5rZXlzKHRoaXMuc2VsZWN0ZWRDaG9pY2VzKSkge1xyXG5cdFx0XHRpZih0aGlzLnNlbGVjdGVkQ2hvaWNlc1tjdXJyZW50SURdLmlkID09IGlkKXtcclxuXHRcdFx0XHRpbmRleCA9IE51bWJlcihjdXJyZW50SUQpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKGluZGV4ID4gLTEpIHtcclxuXHRcdCAgICB0aGlzLnNlbGVjdGVkQ2hvaWNlcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdH1lbHNle1xyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblxyXG5cdH1cclxuXHJcblx0cmVtb3ZlQWxsU2VsZWN0ZWRDaG9pY2VzKCl7XHJcblx0XHR0aGlzLnNlbGVjdGVkQ2hvaWNlcy5zcGxpY2UoMCk7XHJcblx0fVxyXG5cclxuXHJcblx0YWRkTWVkaWFTb3VyY2UobWVkaWFVcmwpe1xyXG5cclxuXHRcdHRoaXMubWVkaWFTb3VyY2VzLnB1c2goeydtZWRpYVVybCc6IG1lZGlhVXJsfSk7XHJcblxyXG5cdH1cclxuXHJcblx0YWRkRXh0cmFJbmZvKHRleHQpe1xyXG5cclxuXHRcdHRoaXMuZXh0cmFJbmZvZXMucHVzaCh7J2V4dHJhSW5mbyc6IHRleHR9KTtcclxuXHJcblx0fVxyXG5cclxuXHRhZGRNZWRpYUlkKGlkKXtcclxuXHJcblx0XHR0aGlzLm1lZGlhSWRzLnB1c2goeydpZCc6IGlkfSk7XHJcblxyXG5cdH1cclxuXHJcblx0Z2V0TWVkaWFJZHMoKXtcclxuXHJcblx0XHRyZXR1cm4gdGhpcy5tZWRpYUlkcztcclxuXHJcblx0fVxyXG5cclxuXHJcblx0Ly9yZXR1cm5zIGFzIG9uZSBzdHJpbmcgb2YgYWxsIGV4dHJhIGluZm9lc1xyXG5cdGdldEV4dHJhSW5mbygpOnN0cmluZ3tcclxuXHJcblx0XHRsZXQgcmV0dXJuU3RyaW5nID0gIFwiIFwiO1xyXG5cclxuXHRcdGZvciAobGV0IGN1cnJlbnRJRCBvZiBPYmplY3Qua2V5cyh0aGlzLmV4dHJhSW5mb2VzKSkge1xyXG5cdFx0XHRpZih0aGlzLmV4dHJhSW5mb2VzW2N1cnJlbnRJRF0uZXh0cmFJbmZvLmxlbmd0aCA+IDApe1xyXG5cdFx0XHRcdHJldHVyblN0cmluZyArPSB0aGlzLmV4dHJhSW5mb2VzW2N1cnJlbnRJRF0uZXh0cmFJbmZvICsgXCIsXCI7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRpZihyZXR1cm5TdHJpbmcubGVuZ3RoID09IDApe1xyXG5cdFx0XHRyZXR1cm4gXCJcIlxyXG5cdFx0fWVsc2V7XHJcblx0XHRcdHJldHVybiByZXR1cm5TdHJpbmcuc3Vic3RyaW5nKDAsIHJldHVyblN0cmluZy5sZW5ndGgtMSk7O1xyXG5cdFx0fVxyXG5cclxuXHR9XHJcblxyXG5cdGdldE1lZGlhU291cnNlcygpe1xyXG5cclxuXHRcdHJldHVybiB0aGlzLm1lZGlhU291cmNlcztcclxuXHJcblx0fVxyXG5cclxuXHRnZXRDaG9pY2VzKCl7XHJcblxyXG5cdFx0cmV0dXJuIHRoaXMuY2hvaWNlcztcclxuXHJcblx0fVxyXG5cclxuXHRnZXRSaWd0aEFuc2Vycygpe1xyXG5cclxuXHRcdHJldHVybiB0aGlzLnJpZ2h0QW5zd2VycztcclxuXHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGVsZW1lbnRBbHJlYWR5SW5BcnJheShhcnJheSwgaWQpe1xyXG5cclxuXHRcdGZvciAobGV0IGN1cnJlbnRJRCBvZiBPYmplY3Qua2V5cyhhcnJheSkpIHtcclxuXHJcblx0XHRcdGlmKGlkID09IGFycmF5W2N1cnJlbnRJRF0uaWQpe1xyXG5cdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHJcblx0fVxyXG5cclxuXHRwcm9zZXNzRGF0YSgpe1xyXG5cclxuXHRcdGxldCB0ZW1wQXJyYXkgPSBbXTtcclxuXHJcblx0XHQvL29ubHkgc2VsZWN0aW5nIG9uZSBvZiBlYWNoXHJcblx0XHRmb3IgKGxldCBjdXJyZW50Q2hvaWNlSUQgb2YgT2JqZWN0LmtleXModGhpcy5jaG9pY2VzKSkge1xyXG5cclxuXHRcdFx0aWYoIXRoaXMuZWxlbWVudEFscmVhZHlJbkFycmF5KHRlbXBBcnJheSwgdGhpcy5jaG9pY2VzW2N1cnJlbnRDaG9pY2VJRF0uaWQpKXtcclxuXHRcdFx0XHR0ZW1wQXJyYXkucHVzaCh0aGlzLmNob2ljZXNbY3VycmVudENob2ljZUlEXSk7XHJcblx0XHRcdH1cclxuXHJcblx0XHR9XHJcblx0XHR0aGlzLmNob2ljZXMgPSB0ZW1wQXJyYXk7XHJcblxyXG5cdFx0dGhpcy5jaG9pY2VzID0gdGhpcy5zaHVmZmxlKHRoaXMuY2hvaWNlcyk7XHJcblx0XHR0aGlzLmFkZENob2ljZSgtMSwgXCJJIGRvbid0IGtub3dcIiwgXCJJIGRvbid0IGtub3dcIik7XHJcblxyXG5cdH1cclxuXHJcblx0Ly91c2luZyBpbnRlcm5hbCBzZWxlY3RlZCBjaG9pY2VzIGxpc3RcclxuXHRnZXRTY29yZUZvclNlbGVjdGVkQW5zd2Vycygpe1xyXG5cdFx0cmV0dXJuIHRoaXMuc2NvcmVGb3JNdWx0aWJsZUFuc3dlcnModGhpcy5zZWxlY3RlZENob2ljZXMpO1xyXG5cdH1cclxuXHJcblx0Ly9yZXR1cm5zIHNjb3JlXHJcblx0c2NvcmVGb3JNdWx0aWJsZUFuc3dlcnMoYXJyYXlPZlNwZWNpZUFsdGVybmF0aXZlczpudW1iZXJbXSk6bnVtYmVye1xyXG5cclxuXHRcdGxldCBzY29yZTpudW1iZXIgPSAwO1xyXG5cclxuXHRcdGZvciAobGV0IGN1cnJlbnRJRCBvZiBPYmplY3Qua2V5cyhhcnJheU9mU3BlY2llQWx0ZXJuYXRpdmVzKSkge1xyXG5cclxuXHRcdFx0aWYodGhpcy5jaGVja0lmQW5zZXJJc0NvcnJlY3QoYXJyYXlPZlNwZWNpZUFsdGVybmF0aXZlc1tjdXJyZW50SURdLmlkKSl7XHJcblx0XHRcdFx0c2NvcmUgKys7XHJcblx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdHNjb3JlIC0tO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBzY29yZTtcclxuXHJcblx0fVxyXG5cclxuXHRjaGVja0lmQW5zZXJJc0NvcnJlY3QoaWQpe1xyXG5cclxuXHJcblx0XHRmb3IgKGxldCBjdXJyZW50UmlnaHRBbnNJRCBvZiBPYmplY3Qua2V5cyh0aGlzLnJpZ2h0QW5zd2VycykpIHtcclxuXHRcdFx0aWYoaWQgPT0gdGhpcy5yaWdodEFuc3dlcnNbY3VycmVudFJpZ2h0QW5zSURdLmlkKXtcclxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHJcblx0fVxyXG5cclxuXHQvL2h0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMjQ1MDk1NC9ob3ctdG8tcmFuZG9taXplLXNodWZmbGUtYS1qYXZhc2NyaXB0LWFycmF5XHJcbiAgICBzaHVmZmxlKGFycmF5KSB7XHJcbiAgICAgICAgdmFyIGN1cnJlbnRJbmRleCA9IGFycmF5Lmxlbmd0aCwgdGVtcG9yYXJ5VmFsdWUsIHJhbmRvbUluZGV4O1xyXG5cclxuICAgICAgICAvLyBXaGlsZSB0aGVyZSByZW1haW4gZWxlbWVudHMgdG8gc2h1ZmZsZS4uLlxyXG4gICAgICAgIHdoaWxlICgwICE9PSBjdXJyZW50SW5kZXgpIHtcclxuXHJcbiAgICAgICAgLy8gUGljayBhIHJlbWFpbmluZyBlbGVtZW50Li4uXHJcbiAgICAgICAgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjdXJyZW50SW5kZXgpO1xyXG4gICAgICAgIGN1cnJlbnRJbmRleCAtPSAxO1xyXG5cclxuICAgICAgICAvLyBBbmQgc3dhcCBpdCB3aXRoIHRoZSBjdXJyZW50IGVsZW1lbnQuXHJcbiAgICAgICAgdGVtcG9yYXJ5VmFsdWUgPSBhcnJheVtjdXJyZW50SW5kZXhdO1xyXG4gICAgICAgIGFycmF5W2N1cnJlbnRJbmRleF0gPSBhcnJheVtyYW5kb21JbmRleF07XHJcbiAgICAgICAgYXJyYXlbcmFuZG9tSW5kZXhdID0gdGVtcG9yYXJ5VmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gYXJyYXk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
