let degree = 0
input.onButtonPressed(Button.A, function () {
    degree = input.compassHeading()
    if (degree == 0) {
        basic.showString("N")
        music.playMelody("C5 B A G F E D C ", 315)
    }
    if (degree == 90) {
        basic.showString("E")
        music.playMelody("A F E F D G E F ", 315)
    }
    if (degree == 180) {
        basic.showString("S")
        music.playMelody("B A G A G F A C5 ", 315)
    }
    if (degree == 270) {
        basic.showString("W")
        music.playMelody("G F G A - F E D ", 315)
    }
})
basic.forever(function () {
	
})
