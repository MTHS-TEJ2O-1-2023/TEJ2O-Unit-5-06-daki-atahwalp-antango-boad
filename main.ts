/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Daki A.B
 * Created on: Oct 2023
 * This program uses sonar to measure distance 
*/

// variables
let distanceFromObject: number = 0

// on start up
basic.clearScreen()
basic.showIcon(IconNames.Happy)

// measuring distance with sonar
input.onButtonPressed(Button.A, function () {
  basic.clearScreen()
  distanceFromObject = sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
  )
  basic.showNumber(distanceFromObject)
  basic.showIcon(IconNames.Happy)
})
