input.onButtonPressed(Button.A, function () {
    basic.showNumber(steps)
    basic.pause(3000)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    steps = 0
})
input.onGesture(Gesture.Shake, function () {
    steps += 1
    music.playTone(262, music.beat(BeatFraction.Whole))
})
let steps = 0
steps = 0
basic.forever(function () {
    if (steps == 5) {
        music.playTone(880, music.beat(BeatFraction.Breve))
        steps = 0
    }
})
