/* eslint-disable no-restricted-imports */
import React, { useEffect, useState } from 'react'

import { type Meta, type StoryFn } from '@storybook/react'

import { Button } from '~/src/components/Button'
import { ButtonGroup } from '~/src/components/ButtonGroup'

import {
  ConfirmModal,
  ConfirmModalClose,
  ConfirmModalContent,
  ConfirmModalFooter,
  ConfirmModalHeader,
  ConfirmModalTrigger,
} from './ConfirmModal'
import {
  type ConfirmModalContentProps,
  type ConfirmModalHeaderProps,
  type ConfirmModalProps,
} from './ConfirmModal.types'

type ConfirmModalCompositionProps = ConfirmModalProps &
  ConfirmModalContentProps &
  ConfirmModalHeaderProps

function ConfirmModalComposition({
  show: showProp = false,
  width,
  height,
  title,
  description,
}: ConfirmModalCompositionProps) {
  const [show, setShow] = useState(false)

  useEffect(
    function watchShowToChange() {
      setShow(showProp)
    },
    [showProp]
  )

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
          rightContent={
            <ButtonGroup>
              <ConfirmModalClose>
                <Button
                  colorVariant="monochrome-light"
                  styleVariant="secondary"
                  text="Cancel"
                />
              </ConfirmModalClose>
              <ConfirmModalClose>
                <Button
                  colorVariant="red"
                  styleVariant="primary"
                  text="Yes, delete account"
                />
              </ConfirmModalClose>
            </ButtonGroup>
          }
        />
      </ConfirmModalContent>
    </ConfirmModal>
  )
}

const meta: Meta<typeof ConfirmModalComposition> = {
  component: ConfirmModalComposition,
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
}
export default meta

const Template: StoryFn<ConfirmModalCompositionProps> = ConfirmModalComposition

export const Composition = {
  render: Template,

  args: {
    show: false,
    title: 'Are you absolutely sure?',
    description:
      'This action cannot be undone. This will permanently delete your account and remove your data from our servers.',
  },
}
