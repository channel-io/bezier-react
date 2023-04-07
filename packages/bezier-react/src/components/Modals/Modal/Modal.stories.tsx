import React, {
  useEffect,
  useState,
} from 'react'

import {
  type Meta,
  type Story,
} from '@storybook/react'
import base from 'paths.macro'

import {
  getObjectFromEnum,
  getTitle,
} from '~/src/utils/storyUtils'

import {
  Button,
  ButtonColorVariant,
  ButtonStyleVariant,
} from '~/src/components/Button'
import { ButtonGroup } from '~/src/components/ButtonGroup'
import { FormControl } from '~/src/components/Forms/FormControl'
import { FormLabel } from '~/src/components/Forms/FormLabel'
import { Select } from '~/src/components/Forms/Inputs/Select'
import { ListItem } from '~/src/components/ListItem'

import { Modal } from './Modal'
import {
  type ModalContentProps,
  type ModalHeaderProps,
  type ModalProps,
  ModalTitleSize,
} from './Modal.types'
import { ModalBody } from './ModalBody'
import { ModalContent } from './ModalContent'
import { ModalFooter } from './ModalFooter'
import { ModalHeader } from './ModalHeader'
import {
  ModalClose,
  ModalTrigger,
} from './ModalHelpers'

type ModalCompositionProps = ModalProps & ModalContentProps & ModalHeaderProps

function ModalComposition({
  show: showProp = false,
  showCloseIcon,
  width,
  height,
  title,
  subtitle,
  description,
  titleSize,
  hidden,
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
          subtitle={subtitle}
          description={description}
          titleSize={titleSize}
          hidden={hidden}
        />

        <ModalBody>
          <FormControl labelPosition="left">
            <FormLabel>Name</FormLabel>
            <Select text="Lorem Ipsum">
              { Array.from({ length: 20 }).map((_, index) => (
                <ListItem
                  // eslint-disable-next-line react/no-array-index-key
                  key={index}
                  content={`Item ${index}`}
                />
              )) }
            </Select>
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
  subtitle: 'Profile Settings',
  description: 'Make changes to your profile here. Click save when you\'re done.',
  titleSize: ModalTitleSize.L,
  hidden: false,
}
