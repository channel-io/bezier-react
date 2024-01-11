import React, {
  useEffect,
  useState,
} from 'react'

import {
  type Meta,
  type StoryFn,
} from '@storybook/react'

import { getObjectFromEnum } from '~/src/utils/story'

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
  ModalTitleSize,
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
    titleSize: {
      control: {
        type: 'radio',
      },
      options: getObjectFromEnum(ModalTitleSize),
    },
  },
}
export default meta

const Template: StoryFn<ModalCompositionProps> = ModalComposition

export const Composition = {
  render: Template,

  args: {
    show: false,
    showCloseIcon: false,
    title: 'Edit profile',
    subtitle: 'Profile Settings',
    description:
      "Make changes to your profile here. Click save when you're done.",
    titleSize: ModalTitleSize.L,
    hidden: false,
    preventHideOnOutsideClick: false,
  },
}
