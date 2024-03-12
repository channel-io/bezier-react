import React, {
  useEffect,
  useState,
} from 'react'

import {
  type Meta,
  type StoryFn,
  type StoryObj,
} from '@storybook/react'

import {
  Button,
  ButtonColorVariant,
  ButtonStyleVariant,
} from '~/src/components/Button'
import { ButtonGroup } from '~/src/components/ButtonGroup'
import { FormControl } from '~/src/components/FormControl'
import { FormLabel } from '~/src/components/FormLabel'
import { ListItem } from '~/src/components/ListItem'
import { Select } from '~/src/components/Select'

import {
  Modal,
  ModalBody,
  ModalClose,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalTrigger,
} from './Modal'
import {
  type ModalContentProps,
  type ModalHeaderProps,
  type ModalProps,
} from './Modal.types'

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
  preventHideOnOutsideClick,
}: ModalCompositionProps) {
  const [show, setShow] = useState(false)

  useEffect(
    function watchShowToChange() {
      setShow(showProp)
    },
    [showProp],
  )

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
        preventHideOnOutsideClick={preventHideOnOutsideClick}
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
            <FormLabel help="Lorem Ipsum">Name</FormLabel>
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

const meta: Meta<typeof ModalComposition> = {
  component: ModalComposition,
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

const Template: StoryFn<ModalCompositionProps> = ModalComposition

export const Composition: StoryObj<ModalCompositionProps> = {
  render: Template,
  args: {
    show: false,
    showCloseIcon: false,
    title: 'Edit profile',
    subtitle: 'Profile Settings',
    description:
      "Make changes to your profile here. Click save when you're done.",
    titleSize: 'l',
    hidden: false,
    preventHideOnOutsideClick: false,
  },
}

export default meta
