// Notes for a simple piano

const keysnotes = [
    { key: "C4", col: 1, row: 0, btn: '0', digit: 'Digit0' },
    { key: "D4", col: 2, row: 0, btn: '1', digit: 'Digit1' },

    { key: "E4", col: 0, row: 1, btn: '2', digit: 'Digit2' },
    { key: "F4", col: 2, row: 1, btn: '3', digit: 'Digit3' },
    { key: "G4", col: 4, row: 1, btn: '4', digit: 'Digit4' },

    { key: "A4", col: 0, row: 2, btn: '5', digit: 'Digit5' },
    { key: "B4", col: 2, row: 2, btn: '6', digit: 'Digit6' },
    { key: "C5", col: 3, row: 2, btn: '7', digit: 'Digit7' },

    { key: "D5", col: 0, row: 3, btn: '8', digit: 'Digit8' },
    { key: "E5", col: 2, row: 3, btn: '9', digit: 'Digit9' },
    { key: "F5", col: 4, row: 3, btn: 'Q', digit: 'KeyQ' },

    { key: "G5", col: 2, row: 4, btn: 'A', digit: 'KeyA' },
    { key: "A5", col: 2, row: 5, btn: 'Z', digit: 'KeyZ' },
];

// to save record notes
const keymap = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
];

export default keysnotes

// C4 C4 D4 C4 F4 E4
// C4 C4 D4 C4 G4 F4
// C4 C4 C5 A4 F4 E4 D4
// B4 B4 A4 F4 G4 F4

//001032
//001043
//0075321
//665343