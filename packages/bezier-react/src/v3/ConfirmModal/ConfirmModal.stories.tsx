import { type Meta, type StoryObj } from '@storybook/react'

import { Button } from '~/src/v3/Button'
import { ButtonGroup } from '~/src/v3/ButtonGroup'
import { Text } from '~/src/v3/Text'

import {
  ConfirmModal,
  ConfirmModalBody,
  ConfirmModalClose,
  ConfirmModalContent,
  ConfirmModalFooter,
  ConfirmModalHeader,
  ConfirmModalTrigger,
} from './ConfirmModal'

const meta: Meta<typeof ConfirmModal> = {
  title: 'V3 components/ConfirmModal',
  component: ConfirmModal,
}

export default meta

export const Primary: StoryObj<typeof ConfirmModal> = {
  render: () => (
    <ConfirmModal>
      <ConfirmModalTrigger>
        <Button label="Open ConfirmModal" />
      </ConfirmModalTrigger>

      <ConfirmModalContent width={420}>
        <ConfirmModalHeader
          title="ConfirmModal title"
          description="Are you sure you want to continue?"
        />
        <ConfirmModalFooter
          rightContent={
            <ButtonGroup>
              <ConfirmModalClose>
                <Button
                  label="Cancel"
                  semantic="secondary"
                />
              </ConfirmModalClose>
              <ConfirmModalClose>
                <Button
                  label="Confirm"
                  semantic="destructive"
                />
              </ConfirmModalClose>
            </ButtonGroup>
          }
        />
      </ConfirmModalContent>
    </ConfirmModal>
  ),
}

export const WithContent: StoryObj<typeof ConfirmModal> = {
  render: () => (
    <ConfirmModal>
      <ConfirmModalTrigger>
        <Button label="Open ConfirmModal" />
      </ConfirmModalTrigger>

      <ConfirmModalContent width={420}>
        <ConfirmModalHeader title="Delete selected channels?" />
        <ConfirmModalBody>
          <Text>
            Selected channels will be removed from the list. This action cannot
            be undone.
          </Text>
        </ConfirmModalBody>
        <ConfirmModalFooter
          rightContent={
            <ButtonGroup>
              <ConfirmModalClose>
                <Button
                  label="Cancel"
                  semantic="secondary"
                />
              </ConfirmModalClose>
              <ConfirmModalClose>
                <Button
                  label="Delete"
                  semantic="destructive"
                />
              </ConfirmModalClose>
            </ButtonGroup>
          }
        />
      </ConfirmModalContent>
    </ConfirmModal>
  ),
}

export const WithCloseIcon: StoryObj<typeof ConfirmModal> = {
  render: () => (
    <ConfirmModal>
      <ConfirmModalTrigger>
        <Button label="Open ConfirmModal" />
      </ConfirmModalTrigger>

      <ConfirmModalContent
        showCloseIcon
        width={420}
      >
        <ConfirmModalHeader
          title="Close icon included"
          description="The close icon is available when a secondary dismiss affordance is needed."
        />
        <ConfirmModalFooter
          rightContent={
            <ButtonGroup>
              <ConfirmModalClose>
                <Button label="OK" />
              </ConfirmModalClose>
            </ButtonGroup>
          }
        />
      </ConfirmModalContent>
    </ConfirmModal>
  ),
}
