namespace SpriteKind {
    export const invis = SpriteKind.create()
}
function mdig2 () {
    mqdig2 = game.askForNumber("what do you want your second number to be?", 4)
    mdig3()
}
function sdig3 () {
    game.splash("answer: " + (sqdig1 - sqdig2))
    game.over(true)
}
function ddig3 () {
    game.splash("answer: " + sqdig1 / sqdig2)
    game.over(true)
}
function adig3 () {
    game.splash("answer: " + (aqdig1 + aqdig2))
    game.over(true)
}
function mdig3 () {
    game.splash("answer: " + mqdig1 * mqdig2)
    game.over(true)
}
function sdig1 () {
    sqdig1 = game.askForNumber("what do you want your 1st number to be?", 4)
    sdig2()
}
function choose_type_of_math () {
    typeOfMath = game.askForNumber("What type of math do you want?(1=x)(2=-)(3=+)(4=%)", 1)
    if (typeOfMath == 1) {
        mdig1()
    } else if (typeOfMath == 2) {
        sdig1()
    } else if (typeOfMath == 3) {
        adig1()
    } else if (typeOfMath == 4) {
        ddig1()
    } else {
        choose_type_of_math()
    }
}
function sdig2 () {
    sqdig2 = game.askForNumber("what do you want your second number to be?", 4)
    sdig3()
}
function adig2 () {
    aqdig2 = game.askForNumber("what do you want your second number to be?", 4)
    adig3()
}
function adig1 () {
    aqdig1 = game.askForNumber("what do you want your 1st number to be?", 4)
    adig2()
}
function ddig2 () {
    dqdig2 = game.askForNumber("what do you want your second number to be?", 4)
}
function mdig1 () {
    mqdig1 = game.askForNumber("what do you want your 1st number to be?", 4)
    mdig2()
}
function ddig1 () {
    dqdig1 = game.askForNumber("what do you want your 1st number to be?", 4)
}
let dqdig1 = 0
let dqdig2 = 0
let typeOfMath = 0
let mqdig1 = 0
let aqdig2 = 0
let aqdig1 = 0
let sqdig2 = 0
let sqdig1 = 0
let mqdig2 = 0
choose_type_of_math()
