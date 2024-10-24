basic.showString("Hoi ABK1F")
music.setVolume(255)
music.play(music.stringPlayable("C5 B A G F E D C ", 120), music.PlaybackMode.UntilDone)
music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
basic.showLeds(`
    # . . . #
    . . . . .
    # . . . #
    . # # # .
    . . . . .
    `)
music.play(music.createSoundExpression(WaveShape.Noise, 1762, 1, 255, 0, 10, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
basic.showIcon(IconNames.House)
basic.showIcon(IconNames.Ghost)
basic.showIcon(IconNames.Heart)
basic.showIcon(IconNames.LeftTriangle)
basic.showIcon(IconNames.Chessboard)
basic.showString("Hoi ABK1F")
music.setVolume(255)
music.play(music.stringPlayable("C5 B A G F E D C ", 120), music.PlaybackMode.UntilDone)
music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
basic.showLeds(`
    # . . . #
    . . . . .
    # . . . #
    . # # # .
    . . . . .
    `)
music.play(music.createSoundExpression(WaveShape.Noise, 1762, 1, 255, 0, 10, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
basic.showIcon(IconNames.House)
basic.showIcon(IconNames.Ghost)
basic.showIcon(IconNames.Heart)
basic.showIcon(IconNames.LeftTriangle)
basic.showIcon(IconNames.Chessboard)
