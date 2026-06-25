import { type Meta, type StoryObj } from '@storybook/react'


import { Button } from '~/src/beta/Button'
import { ButtonGroup } from '~/src/beta/ButtonGroup'
import { Text } from '~/src/beta/Text'

import {
  Modal,
  ModalBody,
  ModalClose,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalTrigger,
} from './Modal'


const meta: Meta<typeof Modal> = {
  title: 'Beta components/Modal',
  component: Modal,
}

export default meta

export const Primary: StoryObj<typeof Modal> = {
  render: () => (
    <Modal>
      <ModalTrigger>
        <Button label="Open Modal" />
      </ModalTrigger>

      <ModalContent
        showCloseIcon
        width={420}
      >
        <ModalHeader
          title="Modal title"
          description="This is a modal description."
        />
        <ModalBody>
          <Text>Modal body content</Text>
        </ModalBody>
        <ModalFooter
          leftContent={
            <Button
              label="Back"
              variant="outlined"
            />
          }
          rightContent={
            <ButtonGroup>
              <ModalClose>
                <Button
                  label="Close"
                  semantic="secondary"
                />
              </ModalClose>
              <ModalClose>
                <Button label="Save" />
              </ModalClose>
            </ButtonGroup>
          }
        />
      </ModalContent>
    </Modal>
  ),
}

const LONG_TITLE =
  'Long modal title example that wraps across multiple lines while keeping the close icon aligned'

export const LongTitle: StoryObj<typeof Modal> = {
  render: () => (
    <Modal>
      <ModalTrigger>
        <Button label="Open Modal" />
      </ModalTrigger>

      <ModalContent
        showCloseIcon
        width={540}
      >
        <ModalHeader
          title={LONG_TITLE}
          description="The description should remain visually aligned below the title area."
        />
        <ModalBody>
          <Text>Modal body content</Text>
        </ModalBody>
        <ModalFooter
          rightContent={
            <ButtonGroup>
              <ModalClose>
                <Button
                  label="Close"
                  semantic="secondary"
                />
              </ModalClose>
              <ModalClose>
                <Button label="Save" />
              </ModalClose>
            </ButtonGroup>
          }
        />
      </ModalContent>
    </Modal>
  ),
}

export const WithSubtitle: StoryObj<typeof Modal> = {
  render: () => (
    <Modal>
      <ModalTrigger>
        <Button label="Open Modal" />
      </ModalTrigger>

      <ModalContent
        showCloseIcon
        width={420}
      >
        <ModalHeader
          subtitle="Workspace settings"
          title="Invite members"
        />
        <ModalBody>
          <Text>Modal body content</Text>
        </ModalBody>
        <ModalFooter
          rightContent={
            <ButtonGroup>
              <ModalClose>
                <Button
                  label="Cancel"
                  semantic="secondary"
                />
              </ModalClose>
              <ModalClose>
                <Button label="Invite" />
              </ModalClose>
            </ButtonGroup>
          }
        />
      </ModalContent>
    </Modal>
  ),
}
