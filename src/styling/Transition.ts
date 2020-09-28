enum TransitionDuration {
  Default = '.15s',
  Slow = '.25s',
}

enum TransitionEffect {
  EaseInOut = 'ease-in-out',
  EaseIn = 'ease-in',
  DefaultCubic = 'cubic-bezier(.72, .36, .09, .99)',
}

const BackgroundTransition = `background-color ${TransitionEffect.EaseInOut} ${TransitionDuration.Default}`

/* eslint-disable-next-line max-len */
const BorderTransition = `border-color ${TransitionEffect.EaseInOut} ${TransitionDuration.Default}, box-shadow ${TransitionEffect.EaseInOut} ${TransitionDuration.Default}`

const ColorTransition = `color ${TransitionEffect.EaseInOut} ${TransitionDuration.Default}`

const ColorTransitionCubicSlow = `color ${TransitionEffect.DefaultCubic} ${TransitionDuration.Slow}`

const OpacityTransition = `opacity ${TransitionEffect.EaseInOut} ${TransitionDuration.Default}`

const OpacitySlowTransition = `opacity ${TransitionEffect.EaseInOut} ${TransitionDuration.Slow}`

const BoxShadowTransition = `box-shadow ${TransitionEffect.EaseInOut} ${TransitionDuration.Default}`

const TransformTransition = `transform ${TransitionEffect.EaseInOut} ${TransitionDuration.Default}`

export default {
  BackgroundTransition,
  BorderTransition,
  ColorTransition,
  ColorTransitionCubicSlow,
  OpacityTransition,
  OpacitySlowTransition,
  BoxShadowTransition,
  TransformTransition,

  // Transition Atoms
  TransitionEffect,
  TransitionDuration,
}
