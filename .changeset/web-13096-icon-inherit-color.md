---
'@channel.io/bezier-react': patch
---

Let beta `Icon` inherit its color when `color` is omitted. It previously always wrote `icon-neutral` into the inline `--b-beta-icon-color`, which shadowed the `initial` value the stylesheet relies on and left consumers unable to color an icon from its parent.
