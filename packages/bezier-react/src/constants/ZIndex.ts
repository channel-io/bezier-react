/**
 * TODO[@ed]: Move inside foundation.
 */
/**
 * Preset of `z-index` values to help control the stacking order of components.
 * **Recommended to use these values instead of hard-coding `z-index` values.**
 */
enum ZIndex {
  Hide = -1,
  /**
   * Default CSS `z-index` value.
   * It's **not** create a new stacking context.
   */
  Auto = 'auto',
  /**
   * Used to create a new stacking context.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context
   */
  Base = 0,
  Float = 1,
  /**
   * Used by `Overlay`, `Select` component.
   */
  Overlay = 1000,
  /**
   * Used by `Modal`, `ConfirmModal` component.
   */
  Modal = 1100,
  /**
   * Used by `Toast` component.
   */
  Toast = 1200,
  /**
   * Used by `Tooltip` component.
   */
  Tooltip = 1300,
}

export { ZIndex }
