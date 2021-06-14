CO2.init(128, 64)
let strip = CO2.create(DigitalPin.P12, 7, NeoPixelMode.RGB)
basic.forever(function () {
    CO2.writeString("CO2: ")
    CO2.writeNumNewLine(CO2.readCO2())
    if (CO2.readCO2() <= 700) {
        strip.showColor(CO2.colors(NeoPixelColors.Green))
    } else if (CO2.readCO2() <= 1200) {
        strip.showColor(CO2.colors(NeoPixelColors.Orange))
    } else {
        strip.showColor(CO2.colors(NeoPixelColors.Red))
    }
    basic.pause(2000)
    CO2.clear()
})
