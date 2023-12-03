servos.P0.setAngle(0)
basic.forever(function () {
    basic.showNumber(sonarbit.sonarbit_distance(Distance_Unit.Distance_Unit_cm, DigitalPin.P1))
    if (sonarbit.sonarbit_distance(Distance_Unit.Distance_Unit_cm, DigitalPin.P1) > 0 && sonarbit.sonarbit_distance(Distance_Unit.Distance_Unit_cm, DigitalPin.P1) < 13) {
        servos.P0.setAngle(180)
    } else if (sonarbit.sonarbit_distance(Distance_Unit.Distance_Unit_cm, DigitalPin.P1) == 0 || sonarbit.sonarbit_distance(Distance_Unit.Distance_Unit_cm, DigitalPin.P1) > 13) {
        servos.P0.setAngle(90)
    }
})
