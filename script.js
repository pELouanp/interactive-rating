const note1 = document.querySelector(".note1");
const note2 = document.querySelector(".note2");
const note3 = document.querySelector(".note3");
const note4 = document.querySelector(".note4");
const note5 = document.querySelector(".note5");
const submit = document.querySelector("button");
const first = document.querySelector(".first");
const second = document.querySelector(".second");
const result = document.querySelector(".result");

let selectNote = "";

const clickNote = (note) => {
  note.addEventListener("click", () => {
    const notes = [note1, note2, note3, note4, note5];
    notes.forEach((n) => {
      if (n !== note) {
        n.style.background = "hsl(215, 17%, 27%)";
        n.style.opacity = "0.5";
      }
    });

    note.style.background = "hsl(25, 97%, 53%)";
    note.style.opacity = "1";
    selectNote = note;
  });
};
clickNote(note1);
clickNote(note2);
clickNote(note3);
clickNote(note4);
clickNote(note5);

submit.addEventListener("click", () => {
  if (selectNote) {
    first.style.display = "none";
    second.style.display = "block";
    result.textContent = `You selected ${selectNote.textContent} out of 5`;
  } else {
    alert("Mince! Vous n'avez pas renseigné une note!");
  }
});
