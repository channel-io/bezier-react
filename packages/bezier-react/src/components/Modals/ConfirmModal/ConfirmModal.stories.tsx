/* eslint-disable no-restricted-imports */
/* External dependencies */
import React, { useState, useEffect } from 'react'
import base from 'paths.macro'
import { Story, Meta } from '@storybook/react'

/* Internal dependencies */
import { getTitle } from '~/src/utils/storyUtils'
import { Button, ButtonColorVariant, ButtonStyleVariant } from '~/src/components/Button'
import { ButtonGroup } from '~/src/components/ButtonGroup'
import { ConfirmModal } from './ConfirmModal'
import { ConfirmModalContent } from './ConfirmModalContent'
import { ConfirmModalHeader } from './ConfirmModalHeader'
import { ConfirmModalBody } from './ConfirmModalBody'
import { ConfirmModalFooter } from './ConfirmModalFooter'
import { ConfirmModalTrigger, ConfirmModalClose } from './ConfirmModalHelpers'
import { ConfirmModalProps, ConfirmModalContentProps, ConfirmModalHeaderProps } from './ConfirmModal.types'

type ConfirmModalCompositionProps = ConfirmModalProps & ConfirmModalContentProps & ConfirmModalHeaderProps

function ConfirmModalComposition({
  show: showProp = false,
  width,
  height,
  title,
  description,
}: ConfirmModalCompositionProps) {
  const [show, setShow] = useState(false)

  useEffect(function watchShowToChange() {
    setShow(showProp)
  }, [showProp])

  return (
    <ConfirmModal
      show={show}
      onShow={() => setShow(true)}
      onHide={() => setShow(false)}
    >
      <ConfirmModalTrigger>
        <Button text="Open Modal" />
      </ConfirmModalTrigger>

      <ConfirmModalContent
        width={width}
        height={height}
      >
        <ConfirmModalHeader
          title={title}
          description={description}
        />

        <ConfirmModalFooter
          rightContent={(
            <ButtonGroup>
              <ConfirmModalClose>
                <Button
                  colorVariant={ButtonColorVariant.MonochromeLight}
                  styleVariant={ButtonStyleVariant.Secondary}
                  text="Cancel"
                />
              </ConfirmModalClose>
              <ConfirmModalClose>
                <Button
                  colorVariant={ButtonColorVariant.Red}
                  styleVariant={ButtonStyleVariant.Primary}
                  text="Yes, delete account"
                />
              </ConfirmModalClose>
            </ButtonGroup>
          )}
        />
      </ConfirmModalContent>
    </ConfirmModal>
  )
}

export default {
  title: getTitle(base),
  component: ConfirmModalComposition,
  subcomponents: {
    ConfirmModal,
    ConfirmModalContent,
    ConfirmModalHeader,
    ConfirmModalBody,
    ConfirmModalFooter,
    ConfirmModalTrigger,
    ConfirmModalClose,
  },
  argTypes: {
    width: {
      control: {
        type: 'text',
      },
    },
    height: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<ConfirmModalProps>

const Template: Story<ConfirmModalCompositionProps> = ConfirmModalComposition

export const Composition = Template.bind({})
Composition.args = {
  show: false,
  title: 'Are you absolutely sure?',
  description: 'This action cannot be undone. This will permanently delete your account and remove your data from our servers.',
}
