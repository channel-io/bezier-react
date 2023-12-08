const BackIcon = styled(Icon)`
  transition: color var(--transition-duration-s) cubic-bezier(.3,0,0,1);
`

const Block = styled.div`
  transition: background-color var(--transition-duration-s) cubic-bezier(.3,0,0,1);
`

const Wrapper = styled.div`
  transition: background-color var(--transition-duration-s) cubic-bezier(.3,0,0,1), color var(--transition-duration-s) cubic-bezier(.3,0,0,1);
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
        transition: background-color var(--transition-duration-s) cubic-bezier(.3,0,0,1), color var(--transition-duration-s) cubic-bezier(.3,0,0,1), opacity var(--transition-duration-s) cubic-bezier(.3,0,0,1);
      }
    `}
`

const div = styled.div`
  transition: background-color var(--transition-duration-m) cubic-bezier(.3,0,0,1);
`
