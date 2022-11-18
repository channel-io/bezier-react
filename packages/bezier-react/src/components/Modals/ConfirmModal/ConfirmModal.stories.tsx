/* eslint-disable no-restricted-imports */
/* External dependencies */
import React from 'react'
import base from 'paths.macro'
import { Story, Meta } from '@storybook/react'

/* Internal dependencies */
import { getTitle } from 'Utils/storyUtils'
import {
  ModalContent,
  ModalAction,
  ModalActionProps,
  ModalContentProps,
} from '../LegacyModal'
import { ModalTitleSize } from '../LegacyModal/Modal.types'
import type { ConfirmModalProps } from './ConfirmModal.types'
import ConfirmModal from './ConfirmModal'

export default {
  title: getTitle(base),
  component: ConfirmModal,
  argTypes: {
    titleSize: {
      control: {
        type: 'radio',
        options: [
          ...Object.values(ModalTitleSize),
        ],
      },
    },
  },
} as Meta

interface ModalStorybookProps extends
  Omit<ConfirmModalProps, 'title'>,
  ModalContentProps,
  ModalActionProps { }

const DEFAULT_OPTIONAL_MODAL_PROPS: Partial<ModalStorybookProps> = {
  show: false,
  autoFocus: true,
  showCloseIcon: false,
  padded: true,
  backdropClassName: '',
  targetElement: undefined,
  zIndex: 1e7,
}

const ModalStorybook = ({
  title,
  titleSize,
  subTitle,
  description,
  showCloseIcon,
  leftContent,
  rightContent,
  show,
  children,
  ...rests
}: ModalStorybookProps) => {
  const [isShow, setShow] = React.useState(show)

  React.useEffect(function watchShowToChange() {
    setShow(show)
  }, [show])

  const onHide = React.useCallback(() => {
    setShow(false)
  }, [])

  const handleShowAsToggle = React.useCallback(() => {
    setShow(!isShow)
  }, [isShow])

  const onConfirm = React.useCallback((e: React.MouseEvent | React.KeyboardEvent) => {
    e.stopPropagation()
    onHide()
  }, [onHide])

  return (
    <>
      <button
        type="button"
        onClick={handleShowAsToggle}
      >
        { isShow ? 'Hide' : 'Show' }
      </button>
      <ConfirmModal
        {...rests}
        show={isShow}
        onHide={onHide}
        onConfirm={onConfirm}
      >
        <ModalContent
          title={title}
          titleSize={titleSize}
          subTitle={subTitle}
          description={description}
          showCloseIcon={showCloseIcon}
        >
          { children }
        </ModalContent>
        <ModalAction
          leftContent={leftContent}
          rightContent={(
            <button
              type="button"
              onClick={onConfirm}
            >
              onConfirm
            </button>
          )}
        />
      </ConfirmModal>
    </>
  )
}

const PrimaryTemplate: Story<ModalStorybookProps> = (props) => (
  <ModalStorybook {...props} />
)

export const Primary = PrimaryTemplate.bind({})
Primary.args = {
  ...DEFAULT_OPTIONAL_MODAL_PROPS,
  title: 'Title',
  description: 'Description',
  leftContent: 'Left content',
  rightContent: 'Right content',
}

export const WithChildren = PrimaryTemplate.bind({})
WithChildren.args = {
  ...DEFAULT_OPTIONAL_MODAL_PROPS,
  title: 'Title',
  subTitle: 'Sub Title',
  description: 'Description',
  leftContent: 'Left content',
  rightContent: 'Right content',
  children: (
    <div style={{ width: '100%', height: '50px', backgroundColor: 'rgba(94, 86, 240, 0.1)' }} />
  ),
}

export const WithSubTitle = PrimaryTemplate.bind({})
WithSubTitle.args = {
  ...DEFAULT_OPTIONAL_MODAL_PROPS,
  title: 'Title',
  subTitle: 'Sub Title',
  description: 'Description',
  leftContent: 'Left content',
  rightContent: 'Right content',
}

export const LongTitle = PrimaryTemplate.bind({})
LongTitle.args = {
  ...DEFAULT_OPTIONAL_MODAL_PROPS,
  title: Array.from(Array(500)).map(() => 'Title ').join(''),
  description: 'Description',
  leftContent: 'Left content',
  rightContent: 'Right content',
}

export const LongDescription = PrimaryTemplate.bind({})
LongDescription.args = {
  ...DEFAULT_OPTIONAL_MODAL_PROPS,
  title: 'Title',
  description: Array.from(Array(500)).map(() => 'Description ').join(''),
  leftContent: 'Left content',
  rightContent: 'Right content',
}

export const LongTitleAndDescription = PrimaryTemplate.bind({})
LongTitleAndDescription.args = {
  ...DEFAULT_OPTIONAL_MODAL_PROPS,
  title: Array.from(Array(500)).map(() => 'Title ').join(''),
  description: Array.from(Array(500)).map(() => 'Description ').join(''),
  leftContent: 'Left content',
  rightContent: 'Right content',
}

export const WithoutTitle = PrimaryTemplate.bind({})
WithoutTitle.args = {
  ...DEFAULT_OPTIONAL_MODAL_PROPS,
  description: 'Description',
  leftContent: 'Left content',
  rightContent: 'Right content',
}

export const WithoutDescription = PrimaryTemplate.bind({})
WithoutDescription.args = {
  ...DEFAULT_OPTIONAL_MODAL_PROPS,
  title: 'Title',
  leftContent: 'Left content',
  rightContent: 'Right content',
}
