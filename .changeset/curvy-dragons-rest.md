---
"@channel.io/bezier-react": major
---

**Breaking Changes: Remove `TooltipProvider` and Property updates in `Tooltip` component**

- No longer support `TooltipProvider` and `TooltipProviderProps`. `Tooltip` component was implemented via radix-ui's Tooltip, which required the use of a `TooltipProvider`, which caused all subcomponents to be re-rendered and caused a performance hit. We decided that the ability to share hover delay time between `Tooltip` components via `TooltipProvider` was not a feature we needed, even with the performance penalty. Also, by providing `TooltipProvider` built-in to `AppProvider`, we were unnecessarily importing modules from our library usage that didn't require `Tooltip`.
- `Tooltip` component now contains a `TooltipProvider` inside it.

**Minor Changes:**

- Change the default value of `delayShow` prop from `300` to `0`.
