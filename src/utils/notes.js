// Notes for a simple piano

const keysnotes = [
    { key: "C4", col: 1, row: 0 },
    { key: "D4", col: 2, row: 0 },

    { key: "E4", col: 0, row: 1 },
    { key: "F4", col: 2, row: 1 },
    { key: "G4", col: 4, row: 1 },

    { key: "A4", col: 0, row: 2 },
    { key: "B4", col: 2, row: 2 },
    { key: "C5", col: 3, row: 2 },

    { key: "D5", col: 0, row: 3 },
    { key: "E5", col: 2, row: 3 },
    { key: "F5", col: 4, row: 3 },

    { key: "G5", col: 2, row: 4 },
    { key: "A5", col: 2, row: 5 },
];

// to save record notes
const keymap = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
];

export default keysnotes