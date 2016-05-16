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
                        this.selectedChoices.push({ 'id': id, 'name': '' });
                    }
                    else {
                        //only one allowed in normal quiz:
                        this.removeAllSelectedChoices();
                        this.selectedChoices.push({ 'id': id, 'name': '' });
                    }
                    return true;
                };
                //what the user have selected
                QuizQuestion.prototype.getSelectedChoice = function () {
                    return this.selectedChoices;
                };
                QuizQuestion.prototype.choiceIsSelected = function (id) {
                    //if i don't know AND no other choice is selected return true
                    if (id < 0 && this.selectedChoices.length == 0) {
                        //this.selectedChoices.push({'id': -1});
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
                //returns as one string of all media ids
                QuizQuestion.prototype.getStringMediaIds = function () {
                    var returnString = " ";
                    for (var _i = 0, _a = Object.keys(this.mediaIds); _i < _a.length; _i++) {
                        var currentID = _a[_i];
                        returnString += this.mediaIds[currentID].id + ", ";
                    }
                    if (returnString.length == 0) {
                        return "";
                    }
                    else {
                        return returnString.substring(0, returnString.length - 2);
                        ;
                    }
                };
                //returns as one string of all extra infoes
                QuizQuestion.prototype.getExtraInfo = function () {
                    var returnString = " ";
                    for (var _i = 0, _a = Object.keys(this.extraInfoes); _i < _a.length; _i++) {
                        var currentID = _a[_i];
                        if (this.extraInfoes[currentID].extraInfo.length > 0) {
                            returnString += this.extraInfoes[currentID].extraInfo + ", ";
                        }
                    }
                    if (returnString.length == 0) {
                        return "";
                    }
                    else {
                        return returnString.substring(0, returnString.length - 2);
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
                QuizQuestion.prototype.removeWrongAlternative = function () {
                    var check = false;
                    var j = 0;
                    while (check == false) {
                        if (this.rightAnswers.length != this.choices.length) {
                            if (this.checkIfAnserIsCorrect(this.choices[j].id) == false) {
                                this.choices.splice(j, 1);
                                check = true;
                            }
                            else {
                                j++;
                            }
                        }
                        else {
                            check = true;
                        }
                    }
                };
                QuizQuestion.prototype.getFirstLetters = function (numbLetters) {
                    return this.rightAnswers[0].name.substring(0, numbLetters);
                };
                return QuizQuestion;
            }());
            exports_1("QuizQuestion", QuizQuestion);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC5jbGFzcy90aGUtcXVpei1xdWVzdGlvbi5jbGFzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O1lBQ0E7Z0JBWUMsc0JBQVksbUJBQW1CO29CQVZ2QixpQkFBWSxHQUFHLEVBQUUsQ0FBQztvQkFDbEIsWUFBTyxHQUFHLEVBQUUsQ0FBQztvQkFDYixvQkFBZSxHQUFHLEVBQUUsQ0FBQztvQkFDckIsd0JBQW1CLEdBQUcsS0FBSyxDQUFDO29CQUU1QixhQUFRLEdBQUcsRUFBRSxDQUFDO29CQUNkLGlCQUFZLEdBQUcsRUFBRSxDQUFDO29CQUNsQixnQkFBVyxHQUFHLEVBQUUsQ0FBQztvQkFLeEIsSUFBSSxDQUFDLG1CQUFtQixHQUFHLG1CQUFtQixDQUFDO2dCQUVoRCxDQUFDO2dCQUVELGdEQUFnRDtnQkFDaEQscUNBQWMsR0FBZCxVQUFlLEVBQUUsRUFBRSxJQUFJLEVBQUUsS0FBSztvQkFFN0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBQyxDQUFDLENBQUM7b0JBQ2pFLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFFakMsQ0FBQztnQkFDRCxnQ0FBUyxHQUFULFVBQVUsRUFBRSxFQUFFLElBQUksRUFBRSxLQUFLO29CQUV4QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FBQztnQkFFN0QsQ0FBQztnQkFFRCxtRkFBbUY7Z0JBQ25GLHdDQUFpQixHQUFqQixVQUFrQixFQUFFO29CQUduQiw4Q0FBOEM7b0JBQzlDLEVBQUUsQ0FBQSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQSxDQUFDO3dCQUNW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Q0FBQyxDQUFDO2dDQUM3RCxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0NBQzFCLEtBQUssR0FBRyxJQUFJLENBQUM7NEJBQ2QsQ0FBQzs0QkFBQSxJQUFJLENBQUEsQ0FBQztnQ0FDTCxDQUFDLEVBQUUsQ0FBQzs0QkFDTCxDQUFDO3dCQUNGLENBQUM7d0JBQUEsSUFBSSxDQUFBLENBQUM7NEJBQ0wsS0FBSyxHQUFHLElBQUksQ0FBQzt3QkFDZCxDQUFDO29CQUNGLENBQUM7Z0JBRUgsQ0FBQztnQkFDRCxzQ0FBZSxHQUFmLFVBQWdCLFdBQVc7b0JBRTFCLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUUzRCxDQUFDO2dCQUlGLG1CQUFDO1lBQUQsQ0FyVEEsQUFxVEMsSUFBQTtZQXJURCx1Q0FxVEMsQ0FBQSIsImZpbGUiOiJzaGFyZWQuY2xhc3MvdGhlLXF1aXotcXVlc3Rpb24uY2xhc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuZXhwb3J0IGNsYXNzIFF1aXpRdWVzdGlvbiB7XHJcblxyXG5cdHByaXZhdGUgcmlnaHRBbnN3ZXJzID0gW107XHJcblx0cHJpdmF0ZSBjaG9pY2VzID0gW107XHJcblx0cHJpdmF0ZSBzZWxlY3RlZENob2ljZXMgPSBbXTtcclxuXHRwcml2YXRlIGFsbG93TXVsdGlibGVTZWxlY3QgPSBmYWxzZTtcclxuXHJcblx0cHJpdmF0ZSBtZWRpYUlkcyA9IFtdO1xyXG5cdHByaXZhdGUgbWVkaWFTb3VyY2VzID0gW107XHJcblx0cHJpdmF0ZSBleHRyYUluZm9lcyA9IFtdO1xyXG5cclxuXHJcblx0Y29uc3RydWN0b3IoYWxsb3dNdWx0aWJsZVNlbGVjdCl7XHJcblxyXG5cdFx0dGhpcy5hbGxvd011bHRpYmxlU2VsZWN0ID0gYWxsb3dNdWx0aWJsZVNlbGVjdDtcclxuXHJcblx0fVxyXG5cclxuXHQvL1RPRE8gIHJldHVybiBmYWxzZSBpZiBhc3dlciBpcyBhbHJlYWR5IGluIGxpc3RcclxuXHRhZGRSaWdodEFuc3dlcihpZCwgbmFtZSwgbGF0aW4pe1xyXG5cclxuXHRcdHRoaXMucmlnaHRBbnN3ZXJzLnB1c2goeydpZCc6IGlkLCAnbmFtZSc6IG5hbWUsICdsYXRpbic6IGxhdGlufSk7XHJcblx0XHR0aGlzLmFkZENob2ljZShpZCwgbmFtZSwgbGF0aW4pO1xyXG5cclxuXHR9XHJcblx0YWRkQ2hvaWNlKGlkLCBuYW1lLCBsYXRpbil7XHJcblxyXG5cdFx0dGhpcy5jaG9pY2VzLnB1c2goeydpZCc6IGlkLCAnbmFtZSc6IG5hbWUsICdsYXRpbic6IGxhdGlufSk7XHJcblxyXG5cdH1cclxuXHJcblx0Ly93aGF0IHRoZSB1c2VyIGhhdmUgc2VsZWN0ZWQuIE9ubHkgYWRkcyBpZiBub3QgaW4gYXJyYXkgKHJldHVucyBmYWxzZSBpZiBpbiBhcnJheSlcclxuXHRhZGRTZWxlY3RlZENob2ljZShpZCl7XHJcblxyXG5cclxuXHRcdC8vc2VsZWN0aW5nIGkgZG9uJ3Qga25vcSBjbGVhcnMgYWxsIHNlbGVjdGlvbnNcclxuXHRcdGlmKGlkIDwgMCl7XHJcblx0XHRcdHRoaXMucmVtb3ZlQWxsU2VsZWN0ZWRDaG9pY2VzKCk7XHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0fVxyXG5cclxuXHJcblx0XHRmb3IgKGxldCBjdXJyZW50SUQgb2YgT2JqZWN0LmtleXModGhpcy5zZWxlY3RlZENob2ljZXMpKSB7XHJcblx0XHRcdGlmKHRoaXMuc2VsZWN0ZWRDaG9pY2VzW2N1cnJlbnRJRF0uaWQgPT0gaWQpe1xyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGlmKHRoaXMuYWxsb3dNdWx0aWJsZVNlbGVjdCl7XHJcblx0XHRcdHRoaXMuc2VsZWN0ZWRDaG9pY2VzLnB1c2goeydpZCc6IGlkLCAnbmFtZSc6ICcnfSk7XHJcblx0XHR9ZWxzZXtcclxuXHRcdFx0Ly9vbmx5IG9uZSBhbGxvd2VkIGluIG5vcm1hbCBxdWl6OlxyXG5cdFx0XHR0aGlzLnJlbW92ZUFsbFNlbGVjdGVkQ2hvaWNlcygpO1xyXG5cdFx0XHR0aGlzLnNlbGVjdGVkQ2hvaWNlcy5wdXNoKHsnaWQnOiBpZCwgJ25hbWUnOiAnJ30pO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiB0cnVlO1xyXG5cclxuXHR9XHJcblxyXG5cdC8vd2hhdCB0aGUgdXNlciBoYXZlIHNlbGVjdGVkXHJcblx0Z2V0U2VsZWN0ZWRDaG9pY2UoKXtcclxuXHJcblx0XHRyZXR1cm4gdGhpcy5zZWxlY3RlZENob2ljZXM7XHJcblxyXG5cdH1cclxuXHJcblx0Y2hvaWNlSXNTZWxlY3RlZChpZCl7XHJcblxyXG5cdFx0Ly9pZiBpIGRvbid0IGtub3cgQU5EIG5vIG90aGVyIGNob2ljZSBpcyBzZWxlY3RlZCByZXR1cm4gdHJ1ZVxyXG5cdFx0aWYoaWQgPCAwICYmIHRoaXMuc2VsZWN0ZWRDaG9pY2VzLmxlbmd0aCA9PSAwKXtcclxuXHRcdFx0Ly90aGlzLnNlbGVjdGVkQ2hvaWNlcy5wdXNoKHsnaWQnOiAtMX0pO1xyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdH1cclxuXHJcblx0XHRmb3IgKGxldCBjdXJyZW50SUQgb2YgT2JqZWN0LmtleXModGhpcy5zZWxlY3RlZENob2ljZXMpKSB7XHJcblx0XHRcdGlmKHRoaXMuc2VsZWN0ZWRDaG9pY2VzW2N1cnJlbnRJRF0uaWQgPT0gaWQpe1xyXG5cdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fVxyXG5cclxuXHQvL3doYXQgdGhlIHVzZXIgaGF2ZSBzZWxlY3RlZC4gVHJ1ZSBpZiBkZWxldGVkLCBmYWxzZSBpZiBub3RcclxuXHRyZW1vdmVTZWxlY3RlZENob2ljZShpZCl7XHJcblxyXG5cdFx0Ly9jYW4ndCByZW1vdmUgaSBkb24ndCBrbm93XHJcblx0XHRpZihpZCA8IDApe1xyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblxyXG5cdFx0bGV0IGluZGV4Om51bWJlciA9IC0xO1xyXG5cdFx0Zm9yIChsZXQgY3VycmVudElEIG9mIE9iamVjdC5rZXlzKHRoaXMuc2VsZWN0ZWRDaG9pY2VzKSkge1xyXG5cdFx0XHRpZih0aGlzLnNlbGVjdGVkQ2hvaWNlc1tjdXJyZW50SURdLmlkID09IGlkKXtcclxuXHRcdFx0XHRpbmRleCA9IE51bWJlcihjdXJyZW50SUQpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKGluZGV4ID4gLTEpIHtcclxuXHRcdCAgICB0aGlzLnNlbGVjdGVkQ2hvaWNlcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdH1lbHNle1xyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblxyXG5cdH1cclxuXHJcblx0cmVtb3ZlQWxsU2VsZWN0ZWRDaG9pY2VzKCl7XHJcblx0XHR0aGlzLnNlbGVjdGVkQ2hvaWNlcy5zcGxpY2UoMCk7XHJcblx0fVxyXG5cclxuXHJcblx0YWRkTWVkaWFTb3VyY2UobWVkaWFVcmwpe1xyXG5cclxuXHRcdHRoaXMubWVkaWFTb3VyY2VzLnB1c2goeydtZWRpYVVybCc6IG1lZGlhVXJsfSk7XHJcblxyXG5cdH1cclxuXHJcblx0YWRkRXh0cmFJbmZvKHRleHQpe1xyXG5cclxuXHRcdHRoaXMuZXh0cmFJbmZvZXMucHVzaCh7J2V4dHJhSW5mbyc6IHRleHR9KTtcclxuXHJcblx0fVxyXG5cclxuXHRhZGRNZWRpYUlkKGlkKXtcclxuXHJcblx0XHR0aGlzLm1lZGlhSWRzLnB1c2goeydpZCc6IGlkfSk7XHJcblxyXG5cdH1cclxuXHJcblx0Z2V0TWVkaWFJZHMoKXtcclxuXHJcblx0XHRyZXR1cm4gdGhpcy5tZWRpYUlkcztcclxuXHJcblx0fVxyXG5cclxuXHQvL3JldHVybnMgYXMgb25lIHN0cmluZyBvZiBhbGwgbWVkaWEgaWRzXHJcblx0Z2V0U3RyaW5nTWVkaWFJZHMoKXtcclxuXHJcblx0XHRsZXQgcmV0dXJuU3RyaW5nID0gIFwiIFwiO1xyXG5cclxuXHRcdGZvciAobGV0IGN1cnJlbnRJRCBvZiBPYmplY3Qua2V5cyh0aGlzLm1lZGlhSWRzKSkge1xyXG5cclxuXHRcdFx0cmV0dXJuU3RyaW5nICs9IHRoaXMubWVkaWFJZHNbY3VycmVudElEXS5pZCArIFwiLCBcIjtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0aWYocmV0dXJuU3RyaW5nLmxlbmd0aCA9PSAwKXtcclxuXHRcdFx0cmV0dXJuIFwiXCJcclxuXHRcdH1lbHNle1xyXG5cdFx0XHRyZXR1cm4gcmV0dXJuU3RyaW5nLnN1YnN0cmluZygwLCByZXR1cm5TdHJpbmcubGVuZ3RoLTIpOztcclxuXHRcdH1cclxuXHJcblx0fVxyXG5cclxuXHJcblx0Ly9yZXR1cm5zIGFzIG9uZSBzdHJpbmcgb2YgYWxsIGV4dHJhIGluZm9lc1xyXG5cdGdldEV4dHJhSW5mbygpOnN0cmluZ3tcclxuXHJcblx0XHRsZXQgcmV0dXJuU3RyaW5nID0gIFwiIFwiO1xyXG5cclxuXHRcdGZvciAobGV0IGN1cnJlbnRJRCBvZiBPYmplY3Qua2V5cyh0aGlzLmV4dHJhSW5mb2VzKSkge1xyXG5cdFx0XHRpZih0aGlzLmV4dHJhSW5mb2VzW2N1cnJlbnRJRF0uZXh0cmFJbmZvLmxlbmd0aCA+IDApe1xyXG5cdFx0XHRcdHJldHVyblN0cmluZyArPSB0aGlzLmV4dHJhSW5mb2VzW2N1cnJlbnRJRF0uZXh0cmFJbmZvICsgXCIsIFwiO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0aWYocmV0dXJuU3RyaW5nLmxlbmd0aCA9PSAwKXtcclxuXHRcdFx0cmV0dXJuIFwiXCJcclxuXHRcdH1lbHNle1xyXG5cdFx0XHRyZXR1cm4gcmV0dXJuU3RyaW5nLnN1YnN0cmluZygwLCByZXR1cm5TdHJpbmcubGVuZ3RoLTIpOztcclxuXHRcdH1cclxuXHJcblx0fVxyXG5cclxuXHRnZXRNZWRpYVNvdXJzZXMoKXtcclxuXHJcblx0XHRyZXR1cm4gdGhpcy5tZWRpYVNvdXJjZXM7XHJcblxyXG5cdH1cclxuXHJcblx0Z2V0Q2hvaWNlcygpe1xyXG5cclxuXHRcdHJldHVybiB0aGlzLmNob2ljZXM7XHJcblxyXG5cdH1cclxuXHJcblx0Z2V0UmlndGhBbnNlcnMoKXtcclxuXHJcblx0XHRyZXR1cm4gdGhpcy5yaWdodEFuc3dlcnM7XHJcblxyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBlbGVtZW50QWxyZWFkeUluQXJyYXkoYXJyYXksIGlkKXtcclxuXHJcblx0XHRmb3IgKGxldCBjdXJyZW50SUQgb2YgT2JqZWN0LmtleXMoYXJyYXkpKSB7XHJcblxyXG5cdFx0XHRpZihpZCA9PSBhcnJheVtjdXJyZW50SURdLmlkKXtcclxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblxyXG5cdH1cclxuXHJcblx0cHJvc2Vzc0RhdGEoKXtcclxuXHJcblx0XHRsZXQgdGVtcEFycmF5ID0gW107XHJcblxyXG5cdFx0Ly9vbmx5IHNlbGVjdGluZyBvbmUgb2YgZWFjaFxyXG5cdFx0Zm9yIChsZXQgY3VycmVudENob2ljZUlEIG9mIE9iamVjdC5rZXlzKHRoaXMuY2hvaWNlcykpIHtcclxuXHJcblx0XHRcdGlmKCF0aGlzLmVsZW1lbnRBbHJlYWR5SW5BcnJheSh0ZW1wQXJyYXksIHRoaXMuY2hvaWNlc1tjdXJyZW50Q2hvaWNlSURdLmlkKSl7XHJcblx0XHRcdFx0dGVtcEFycmF5LnB1c2godGhpcy5jaG9pY2VzW2N1cnJlbnRDaG9pY2VJRF0pO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0fVxyXG5cdFx0dGhpcy5jaG9pY2VzID0gdGVtcEFycmF5O1xyXG5cclxuXHRcdHRoaXMuY2hvaWNlcyA9IHRoaXMuc2h1ZmZsZSh0aGlzLmNob2ljZXMpO1xyXG5cdFx0dGhpcy5hZGRDaG9pY2UoLTEsIFwiSSBkb24ndCBrbm93XCIsIFwiSSBkb24ndCBrbm93XCIpO1xyXG5cclxuXHR9XHJcblxyXG5cdC8vdXNpbmcgaW50ZXJuYWwgc2VsZWN0ZWQgY2hvaWNlcyBsaXN0XHJcblx0Z2V0U2NvcmVGb3JTZWxlY3RlZEFuc3dlcnMoKXtcclxuXHRcdHJldHVybiB0aGlzLnNjb3JlRm9yTXVsdGlibGVBbnN3ZXJzKHRoaXMuc2VsZWN0ZWRDaG9pY2VzKTtcclxuXHR9XHJcblxyXG5cdC8vcmV0dXJucyBzY29yZVxyXG5cdHNjb3JlRm9yTXVsdGlibGVBbnN3ZXJzKGFycmF5T2ZTcGVjaWVBbHRlcm5hdGl2ZXM6bnVtYmVyW10pOm51bWJlcntcclxuXHJcblx0XHRsZXQgc2NvcmU6bnVtYmVyID0gMDtcclxuXHJcblx0XHRmb3IgKGxldCBjdXJyZW50SUQgb2YgT2JqZWN0LmtleXMoYXJyYXlPZlNwZWNpZUFsdGVybmF0aXZlcykpIHtcclxuXHJcblx0XHRcdGlmKHRoaXMuY2hlY2tJZkFuc2VySXNDb3JyZWN0KGFycmF5T2ZTcGVjaWVBbHRlcm5hdGl2ZXNbY3VycmVudElEXS5pZCkpe1xyXG5cdFx0XHRcdHNjb3JlICsrO1xyXG5cdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRzY29yZSAtLTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gc2NvcmU7XHJcblxyXG5cdH1cclxuXHJcblx0Y2hlY2tJZkFuc2VySXNDb3JyZWN0KGlkKXtcclxuXHJcblxyXG5cdFx0Zm9yIChsZXQgY3VycmVudFJpZ2h0QW5zSUQgb2YgT2JqZWN0LmtleXModGhpcy5yaWdodEFuc3dlcnMpKSB7XHJcblx0XHRcdGlmKGlkID09IHRoaXMucmlnaHRBbnN3ZXJzW2N1cnJlbnRSaWdodEFuc0lEXS5pZCl7XHJcblx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblxyXG5cdH1cclxuXHJcblx0Ly9odHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzI0NTA5NTQvaG93LXRvLXJhbmRvbWl6ZS1zaHVmZmxlLWEtamF2YXNjcmlwdC1hcnJheVxyXG4gICAgc2h1ZmZsZShhcnJheSkge1xyXG4gICAgICAgIHZhciBjdXJyZW50SW5kZXggPSBhcnJheS5sZW5ndGgsIHRlbXBvcmFyeVZhbHVlLCByYW5kb21JbmRleDtcclxuXHJcbiAgICAgICAgLy8gV2hpbGUgdGhlcmUgcmVtYWluIGVsZW1lbnRzIHRvIHNodWZmbGUuLi5cclxuICAgICAgICB3aGlsZSAoMCAhPT0gY3VycmVudEluZGV4KSB7XHJcblxyXG4gICAgICAgIC8vIFBpY2sgYSByZW1haW5pbmcgZWxlbWVudC4uLlxyXG4gICAgICAgIHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY3VycmVudEluZGV4KTtcclxuICAgICAgICBjdXJyZW50SW5kZXggLT0gMTtcclxuXHJcbiAgICAgICAgLy8gQW5kIHN3YXAgaXQgd2l0aCB0aGUgY3VycmVudCBlbGVtZW50LlxyXG4gICAgICAgIHRlbXBvcmFyeVZhbHVlID0gYXJyYXlbY3VycmVudEluZGV4XTtcclxuICAgICAgICBhcnJheVtjdXJyZW50SW5kZXhdID0gYXJyYXlbcmFuZG9tSW5kZXhdO1xyXG4gICAgICAgIGFycmF5W3JhbmRvbUluZGV4XSA9IHRlbXBvcmFyeVZhbHVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGFycmF5O1xyXG4gICAgfVxyXG5cdHJlbW92ZVdyb25nQWx0ZXJuYXRpdmUoKXtcclxuXHRcdGxldCBjaGVjayA9IGZhbHNlO1xyXG5cdFx0bGV0IGogPSAwO1xyXG5cclxuXHJcblx0XHRcdHdoaWxlIChjaGVjayA9PSBmYWxzZSkge1xyXG5cdFx0XHRcdGlmKHRoaXMucmlnaHRBbnN3ZXJzLmxlbmd0aCAhPSB0aGlzLmNob2ljZXMubGVuZ3RoKXtcclxuXHRcdFx0XHRcdGlmICh0aGlzLmNoZWNrSWZBbnNlcklzQ29ycmVjdCh0aGlzLmNob2ljZXNbal0uaWQpID09IGZhbHNlKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMuY2hvaWNlcy5zcGxpY2UoaiwgMSk7XHJcblx0XHRcdFx0XHRcdGNoZWNrID0gdHJ1ZTtcclxuXHRcdFx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdFx0XHRqKys7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0XHRjaGVjayA9IHRydWU7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdH1cclxuXHRnZXRGaXJzdExldHRlcnMobnVtYkxldHRlcnMpe1xyXG5cclxuXHRcdHJldHVybiB0aGlzLnJpZ2h0QW5zd2Vyc1swXS5uYW1lLnN1YnN0cmluZygwLG51bWJMZXR0ZXJzKTtcclxuXHJcblx0fVxyXG5cclxuXHJcblxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
