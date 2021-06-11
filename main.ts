function music1 () {
    music.setTempo(122)
    music.playTone(294, music.beat(BeatFraction.Whole))
    music.playTone(294, music.beat(BeatFraction.Half))
    music.playTone(330, music.beat(BeatFraction.Half))
    music.playTone(330, music.beat(BeatFraction.Half))
    music.playTone(370, music.beat(BeatFraction.Half))
}
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 2; index++) {
        music1()
    }
})
basic.forever(function () {
    led.toggle(randint(0, 4), randint(0, 4))
})
