basic.forever(function () {
    if (input.logoIsPressed()) {
        basic.showLeds(`
            # . . . #
            . . . . .
            . . . . .
            # . . # #
            . # # # .
            `)
    } else {
        basic.clearScreen()
    }
})
