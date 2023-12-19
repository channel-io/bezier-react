/* stylelint-disable function-whitespace-after, length-zero-no-unit */
import { styled } from '~/src/foundation'

export const Box = styled.div`
  --b-alpha-smooth-corners-box-border-radius: 0;
  --b-alpha-smooth-corners-box-shadow-offset-x: 0;
  --b-alpha-smooth-corners-box-shadow-offset-y: 0;
  --b-alpha-smooth-corners-box-shadow-blur-radius: 0px;
  --b-alpha-smooth-corners-box-shadow-spread-radius: 0px;
  --b-alpha-smooth-corners-box-shadow-color: transparent;
  --b-alpha-smooth-corners-box-padding: 0px;
  --b-alpha-smooth-corners-box-margin: 0px;
  --b-alpha-smooth-corners-box-background-color: transparent;

  box-sizing: content-box;
  margin: var(--b-alpha-smooth-corners-box-margin);
  background-color: var(--b-alpha-smooth-corners-box-background-color);
  background-image: var(--b-alpha-smooth-corners-box-background-image);
  background-size: cover;
  border-radius: var(--b-alpha-smooth-corners-box-border-radius);
  box-shadow: var(--b-alpha-smooth-corners-box-shadow-offset-x) var(--b-alpha-smooth-corners-box-shadow-offset-y) var(--b-alpha-smooth-corners-box-shadow-blur-radius) var(--b-alpha-smooth-corners-box-shadow-spread-radius) var(--b-alpha-smooth-corners-box-shadow-color);

  &[data-state="enabled"] {
    @supports (background: paint(smooth-corners)) {
      padding: var(--b-alpha-smooth-corners-box-padding);
      margin: calc(var(--b-alpha-smooth-corners-box-margin) + (-1 * var(--b-alpha-smooth-corners-box-padding)));
      background: paint(smooth-corners);
      border-radius: 0;
      border-image-source: var(--b-alpha-smooth-corners-box-background-image);
      box-shadow: none;

      --smooth-corners: var(--b-alpha-smooth-corners-box-border-radius);
      --smooth-corners-shadow: var(--b-alpha-smooth-corners-box-shadow-offset-x) var(--b-alpha-smooth-corners-box-shadow-offset-y) var(--b-alpha-smooth-corners-box-shadow-blur-radius) var(--b-alpha-smooth-corners-box-shadow-spread-radius) var(--b-alpha-smooth-corners-box-shadow-color);
      --smooth-corners-bg-color: var(--b-alpha-smooth-corners-box-background-color);
      --smooth-corners-padding: var(--b-alpha-smooth-corners-box-padding);
      --smooth-corners-radius-unit: var(--b-alpha-smooth-corners-box-border-radius-type);
    }
  }
`
