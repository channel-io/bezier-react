import React, { useState, useEffect } from 'react'
import base from 'paths.macro'
import { Story, Meta } from '@storybook/react'

/* Internal dependencies */
import { getTitle, getObjectFromEnum } from 'Utils/storyUtils'
import { Button, ButtonColorVariant, ButtonStyleVariant } from 'Components/Button'
import { ButtonGroup } from 'Components/ButtonGroup'
import { FormControl } from 'Components/Forms/FormControl'
import { FormLabel } from 'Components/Forms/FormLabel'
import { TextField } from 'Components/Forms/Inputs/TextField'
import { Modal } from './Modal'
import { ModalContent } from './ModalContent'
import { ModalHeader } from './ModalHeader'
import { ModalBody } from './ModalBody'
import { ModalFooter } from './ModalFooter'
import { ModalTrigger, ModalClose } from './ModalHelpers'
import { ModalProps, ModalContentProps, ModalHeaderProps, ModalTitleSize } from './Modal.types'

type ModalCompositionProps = ModalProps & ModalContentProps & ModalHeaderProps

function ModalComposition({
  show: showProp = false,
  showCloseIcon,
  width,
  height,
  title,
  subTitle,
  description,
  titleSize,
}: ModalCompositionProps) {
  const [show, setShow] = useState(false)

  useEffect(function watchShowToChange() {
    setShow(showProp)
  }, [showProp])

  return (
    <Modal
      show={show}
      onShow={() => setShow(true)}
      onHide={() => setShow(false)}
    >
      <ModalTrigger>
        <Button text="Open Modal" />
      </ModalTrigger>

      <ModalContent
        showCloseIcon={showCloseIcon}
        width={width}
        height={height}
      >
        <ModalHeader
          title={title}
          subTitle={subTitle}
          description={description}
          titleSize={titleSize}
        />

        <ModalBody>
          <FormControl labelPosition="left">
            <FormLabel>Name</FormLabel>
            <TextField />
          </FormControl>
        </ModalBody>

        <ModalFooter
          rightContent={(
            <ButtonGroup>
              <ModalClose>
                <Button
                  colorVariant={ButtonColorVariant.MonochromeLight}
                  styleVariant={ButtonStyleVariant.Secondary}
                  text="Cancel"
                />
              </ModalClose>
              <ModalClose>
                <Button
                  colorVariant={ButtonColorVariant.Blue}
                  styleVariant={ButtonStyleVariant.Primary}
                  text="Save"
                />
              </ModalClose>
            </ButtonGroup>
          )}
        />
      </ModalContent>
    </Modal>
  )
}

export default {
  title: getTitle(base),
  component: ModalComposition,
  subcomponents: {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    ModalTrigger,
    ModalClose,
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
    titleSize: {
      control: {
        type: 'radio',
        options: getObjectFromEnum(ModalTitleSize),
      },
    },
  },
} as Meta<ModalProps>

const Template: Story<ModalCompositionProps> = ModalComposition

export const Composition = Template.bind({})
Composition.args = {
  show: false,
  showCloseIcon: false,
  title: 'Edit profile',
  subTitle: 'Profile Settings',
  description: 'Make changes to your profile here. Click save when you\'re done.',
  titleSize: ModalTitleSize.L,
}
