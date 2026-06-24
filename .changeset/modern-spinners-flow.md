---
'@channel.io/bezier-react': patch
---

Update v3 Overlay auto-update handling and align v3 Spinner source size options.

`Overlay` now keeps position updates in an internal hook that watches resize, scroll, target resize, floating element resize, and container resize.

`Spinner` now uses source-size values from the v3 design spec: `10`, `12`, `16`, `20`, `24`, `30`, `36`, `42`, and `48`.
