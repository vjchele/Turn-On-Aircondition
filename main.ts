basic.forever(function () {
    basic.showNumber(input.temperature())
    if (input.temperature() > 5) {
        pins.digitalWritePin(DigitalPin.P1, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P1, 0)
    }
})
