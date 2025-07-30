// Notes for a simple piano

const notes = [
  { note: 'C4', key: 'A', isBlack: false },
  { note: 'C#4', key: 'W', isBlack: true },
  { note: 'D4', key: 'S', isBlack: false },
  { note: 'D#4', key: 'E', isBlack: true },
  { note: 'E4', key: 'D', isBlack: false },
  { note: 'F4', key: 'F', isBlack: false },
  { note: 'F#4', key: 'T', isBlack: true },
  { note: 'G4', key: 'G', isBlack: false },
  { note: 'G#4', key: 'Y', isBlack: true },
  { note: 'A4', key: 'H', isBlack: false },
  { note: 'A#4', key: 'U', isBlack: true },
  { note: 'B4', key: 'J', isBlack: false },
  { note: 'C5', key: 'K', isBlack: false },
];
// to save record notes
const keymap = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
];

export default notes

// C4 C4 D4 C4 F4 E4
// C4 C4 D4 C4 G4 F4
// C4 C4 C5 A4 F4 E4 D4
// B4 B4 A4 F4 G4 F4

//001032
//001043
//0075321
//665343