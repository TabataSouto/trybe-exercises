function carAndMouse(mouse, cat1, cat2)

if (cat1 < cat2) {
    return ("gato 1 mais perto")
} else if (cat < cat1) {
    return ("gato 2 mais perto")
} else if (cat1 === cat2) {
    return ("os dois gatos se trombam")
} else {
    return ("nenhum resultado")
}

console.log(carAndMouse(0, 3, 2));