---
'@channel.io/bezier-react': major
'@channel.io/bezier-codemod': patch
---

Align beta Form and FormField with the updated design specification.

- Remove FormField's `size` prop, its context value, and the beta `FormFieldSize` export. Set `size` on TextInput or `triggerSize` on Select/MultiSelect instead.
- Place descriptions under labels and keep them visible alongside validation errors. Both texts remain connected through ARIA.
- Update top/left layout, label minimum width, field spacing, required markers, typography, and error icons.

Use CSS for field layout without measuring DOM heights or classifying React component types. Existing flat children and label wrappers remain supported. In left layouts where a tall label or description must not separate an error from its control, place the control and error in the same vertical layout container with a 4px gap. Existing short-label fields without descriptions do not require a blanket wrapper migration.

Update migration diagnostics and guidance for removed FormField size, automatic required markers, and left-layout control/error composition. Expose the composition guidance through the component manifest for Bezier CLI lookup.
