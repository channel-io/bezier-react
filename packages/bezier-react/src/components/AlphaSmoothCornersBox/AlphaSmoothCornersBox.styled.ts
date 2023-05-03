/* stylelint-disable function-whitespace-after, length-zero-no-unit */
import { styled } from '~/src/foundation'

export const Box = styled.div`
  --bezier-alpha-smooth-corners-box-border-radius: 0;
  --bezier-alpha-smooth-corners-box-shadow-offset-x: 0;
  --bezier-alpha-smooth-corners-box-shadow-offset-y: 0;
  --bezier-alpha-smooth-corners-box-shadow-blur-radius: 0;
  --bezier-alpha-smooth-corners-box-shadow-spread-radius: 0;
  --bezier-alpha-smooth-corners-box-shadow-color: transparent;
  --bezier-alpha-smooth-corners-box-padding: 0px;
  --bezier-alpha-smooth-corners-box-margin: 0px;
  --bezier-alpha-smooth-corners-box-background-color: var(--bgtxt-absolute-white-normal);

  margin: var(--bezier-alpha-smooth-corners-box-margin);
  background-color: var(--bezier-alpha-smooth-corners-box-background-color);
  background-image: var(--bezier-alpha-smooth-corners-box-background-image);
  background-size: cover;
  border-radius: var(--bezier-alpha-smooth-corners-box-border-radius);
  box-shadow: var(--bezier-alpha-smooth-corners-box-shadow-offset-x) var(--bezier-alpha-smooth-corners-box-shadow-offset-y) var(--bezier-alpha-smooth-corners-box-shadow-blur-radius) var(--bezier-alpha-smooth-corners-box-shadow-spread-radius) var(--bezier-alpha-smooth-corners-box-shadow-color);

  &[data-state="enabled"] {
    @supports (background: paint(smooth-corners)) {
      padding: var(--bezier-alpha-smooth-corners-box-padding);
      margin: calc(var(--bezier-alpha-smooth-corners-box-margin) + (-1 * var(--bezier-alpha-smooth-corners-box-padding)));
      background: paint(smooth-corners);
      border-radius: 0;
      border-image-source: var(--bezier-alpha-smooth-corners-box-background-image);
      box-shadow: none;

      --smooth-corners: var(--bezier-alpha-smooth-corners-box-border-radius);
      --smooth-corners-shadow: var(--bezier-alpha-smooth-corners-box-shadow-offset-x) var(--bezier-alpha-smooth-corners-box-shadow-offset-y) var(--bezier-alpha-smooth-corners-box-shadow-blur-radius) var(--bezier-alpha-smooth-corners-box-shadow-spread-radius) var(--bezier-alpha-smooth-corners-box-shadow-color);
      --smooth-corners-bg-color: var(--bezier-alpha-smooth-corners-box-background-color);
      --smooth-corners-padding: var(--bezier-alpha-smooth-corners-box-padding);
      --smooth-corners-radius-unit: var(--bezier-alpha-smooth-corners-box-border-radius-type);
    }
  }
`
