// Notes for a simple piano

const keysnotes = [
    { key: "C4", col: 1, row: 0, digit: 'Digit0' },
    { key: "D4", col: 2, row: 0, digit: 'Digit1' },

    { key: "E4", col: 0, row: 1, digit: 'Digit2' },
    { key: "F4", col: 2, row: 1, digit: 'Digit3' },
    { key: "G4", col: 4, row: 1, digit: 'Digit4' },

    { key: "A4", col: 0, row: 2, digit: 'Digit5' },
    { key: "B4", col: 2, row: 2, digit: 'Digit6' },
    { key: "C5", col: 3, row: 2, digit: 'Digit7' },

    { key: "D5", col: 0, row: 3, digit: 'Digit8' },
    { key: "E5", col: 2, row: 3, digit: 'Digit9' },
    { key: "F5", col: 4, row: 3, digit: 'KeyQ' },

    { key: "G5", col: 2, row: 4, digit: 'KeyW' },
    { key: "A5", col: 2, row: 5, digit: 'KeyE' },
];

// to save record notes
const keymap = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
];

export default keysnotes