const NOTES = function () {
  this.notes = [];
};

NOTES.prototype.addNewNote = function (newNote) {
  this.notes = [...newNote];
};
const UI = function () {
  (this.addBox = document.querySelector(".add-box")),
    (this.popupBox = document.querySelector(".popup-box")),
    (this.popupTitle = popupBox.querySelector("header p")),
    (this.closeIcon = popupBox.querySelector("header i")),
    (this.titleTag = popupBox.querySelector("input")),
    (this.descTag = popupBox.querySelector("textarea")),
    (this.addBtn = popupBox.querySelector("button"));
};


UI.prototype.addNewNoteEvent = 