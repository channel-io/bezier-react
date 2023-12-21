const BackIcon = styled(Icon)`
  transition: color var(--transition-s);
`

const Block = styled.div`
  transition: background-color var(--transition-s);
`

const Wrapper = styled.div`
  transition: background-color var(--transition-s), color var(--transition-s);
`

const Wrapper = styled.div`
  ${({ hasTransition, foundation }) =>
    hasTransition && foundation?.transition.getTransitionsCSS(['background-color', 'color'])};
`

const Command = styled.div`
  ${({ disabled }) =>
    disabled &&
    css`
      &&& {
        transition: background-color var(--transition-s), color var(--transition-s), opacity var(--transition-s);
      }
    `}
`

const div = styled.div`
  transition: background-color var(--transition-m);
`
