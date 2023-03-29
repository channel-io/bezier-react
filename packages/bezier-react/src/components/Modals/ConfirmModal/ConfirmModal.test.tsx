/* External dependencies */
import React from 'react'
import { isInaccessible } from '@testing-library/react'
import userEvent, { PointerEventsCheckLevel } from '@testing-library/user-event'

/* Internal dependencies */
import { render } from '~/src/utils/testUtils'
import { ConfirmModal } from './ConfirmModal'
import { ConfirmModalContent } from './ConfirmModalContent'
import { ConfirmModalHeader } from './ConfirmModalHeader'
import { ConfirmModalFooter } from './ConfirmModalFooter'
import {
  ConfirmModalTrigger,
  ConfirmModalClose,
} from './ConfirmModalHelpers'
import {
  type ConfirmModalProps,
  type ConfirmModalContentProps,
} from './ConfirmModal.types'

const TRIGGER_TEXT = 'Open'
const CANCEL_TEXT = 'Cancel'
const ACTION_TEXT = 'Action'
const TITLE_TEXT = 'Title'
const DESCRIPTION_TEXT = 'Description'

describe('ConfirmModal', () => {
  const renderModal = ({
    modalProps,
    modalContentProps,
  }: {
    modalProps?: ConfirmModalProps
    modalContentProps?: ConfirmModalContentProps
  } = {}) => render(
    <ConfirmModal {...modalProps}>
      <ConfirmModalTrigger>
        <button type="button">{ TRIGGER_TEXT }</button>
      </ConfirmModalTrigger>
      <ConfirmModalContent {...modalContentProps}>
        <ConfirmModalHeader
          title={TITLE_TEXT}
          description={DESCRIPTION_TEXT}
        />
        <ConfirmModalFooter
          rightContent={(
            <>
              <ConfirmModalClose>
                <button type="button">{ CANCEL_TEXT }</button>
              </ConfirmModalClose>
              <ConfirmModalClose>
                <button type="button">{ ACTION_TEXT }</button>
              </ConfirmModalClose>
            </>
          )}
        />
      </ConfirmModalContent>
    </ConfirmModal>,
  )

  let user: ReturnType<typeof userEvent.setup>
  let renderOpenedModal: typeof renderModal

  beforeEach(() => {
    user = userEvent.setup({
      /**
       * To prevent `pointer-events: none` error.
       * @see https://testing-library.com/docs/user-event/options#pointereventscheck
       */
      pointerEventsCheck: PointerEventsCheckLevel.Never,
    })
    renderOpenedModal = (props) => renderModal({ modalProps: { defaultShow: true }, ...props })
  })

  describe('Accessibility', () => {
    it('should be accessible', () => {
      const { container } = renderModal()
      expect(isInaccessible(container)).toBe(false)
    })
  })

  describe('Focus Management', () => {
    it('should focus on the cancel button element when the modal is opened', async () => {
      const { getByRole } = renderModal()
      const trigger = getByRole('button', { name: TRIGGER_TEXT })
      await user.click(trigger)
      expect(document.activeElement).toBe(getByRole('button', { name: CANCEL_TEXT }))
    })

    it('should focus on the modal trigger when the modal is closed', async () => {
      const { getByRole } = renderModal()
      const trigger = getByRole('button', { name: TRIGGER_TEXT })
      await user.click(trigger)
      await user.click(getByRole('button', { name: CANCEL_TEXT }))
      expect(document.activeElement).toBe(trigger)
    })

    it('should be trapped inside the modal when the modal is opened', async () => {
      const { getByRole } = renderModal()
      const trigger = getByRole('button', { name: TRIGGER_TEXT })
      await user.click(trigger)
      const cancelButton = getByRole('button', { name: CANCEL_TEXT })
      const actionButton = getByRole('button', { name: ACTION_TEXT })
      expect(document.activeElement).toBe(cancelButton)
      await user.tab()
      expect(document.activeElement).toBe(actionButton)
      await user.tab()
      expect(document.activeElement).not.toBe(trigger) /* Cancel button */
      await user.tab({ shift: true })
      expect(document.activeElement).toBe(actionButton)
      await user.tab({ shift: true })
      expect(document.activeElement).toBe(cancelButton)
      await user.tab({ shift: true })
      expect(document.activeElement).not.toBe(trigger) /* Action button */
    })
  })

  describe('ConfirmModalContent', () => {
    describe('ARIA', () => {
      it('should have \'role="alertdialog"\' attribute', () => {
        const { getByRole } = renderOpenedModal()
        expect(getByRole('alertdialog')).toBeInTheDocument()
      })

      it('should have \'aria-modal="true"\' attribute', () => {
        const { getByRole } = renderOpenedModal()
        expect(getByRole('alertdialog')).toHaveAttribute('aria-modal', 'true')
      })

      it('should have proper \'aria-labelledby\' attribute', () => {
        const { getByRole } = renderOpenedModal()
        expect(getByRole('alertdialog', { name: TITLE_TEXT })).toBeInTheDocument()
      })

      it('should have proper \'aria-describedby\' attribute', () => {
        const { getByRole } = renderOpenedModal()
        expect(getByRole('alertdialog', { description: DESCRIPTION_TEXT })).toBeInTheDocument()
      })
    })

    describe('User Interactions', () => {
      it('should close the modal when the user clicks the outside of the modal', async () => {
        const { queryByRole, container } = renderOpenedModal()
        await user.click(container)
        expect(queryByRole('alertdialog')).not.toBeInTheDocument()
      })

      it('should close the modal when the user presses the ESC key', async () => {
        const { queryByRole } = renderOpenedModal()
        await user.keyboard('{Escape}')
        expect(queryByRole('alertdialog')).not.toBeInTheDocument()
      })
    })

    describe('Data Attributes', () => {
      it('should have proper \'data-state\' attribute', () => {
        const { getByRole } = renderOpenedModal()
        expect(getByRole('alertdialog')).toHaveAttribute('data-state', 'open')
      })
    })
  })

  describe('ConfirmModalHeader', () => {
    describe('ARIA, Semantics', () => {
      it('the title should be an h2 element', () => {
        const { getByRole } = renderOpenedModal()
        expect(getByRole('heading', { name: TITLE_TEXT, level: 2 })).toBeInTheDocument()
      })
    })
  })

  describe('ConfirmModalTrigger', () => {
    describe('ARIA', () => {
      it('should have \'aria-haspopup="dialog"\' attribute', () => {
        const { getByRole } = renderModal()
        const trigger = getByRole('button', { name: TRIGGER_TEXT })
        expect(trigger).toHaveAttribute('aria-haspopup', 'dialog')
      })

      it('should have proper \'aria-expanded\' attribute', async () => {
        const { getByRole } = renderModal()
        const trigger = getByRole('button', { name: TRIGGER_TEXT })
        expect(trigger).toHaveAttribute('aria-expanded', 'false')
        await user.click(trigger)
        expect(trigger).toHaveAttribute('aria-expanded', 'true')
      })

      it('should have \'aria-controls="{dialogElement.id}"\' attribute', async () => {
        const { getByRole } = renderModal()
        const trigger = getByRole('button', { name: TRIGGER_TEXT })
        await user.click(trigger)
        expect(trigger).toHaveAttribute('aria-controls', getByRole('alertdialog').id)
      })
    })

    describe('User Interactions', () => {
      it('should open modal when clicked (Uncontrolled)', async () => {
        const { getByRole } = renderModal()
        await user.click(getByRole('button', { name: TRIGGER_TEXT }))
        expect(getByRole('alertdialog')).toBeInTheDocument()
      })

      it('should open modal when clicked (Controlled)', async () => {
        const onShow = jest.fn()
        const { getByRole } = renderModal({ modalProps: { show: false, onShow } })
        await user.click(getByRole('button', { name: TRIGGER_TEXT }))
        expect(onShow).toBeCalledTimes(1)
      })
    })
  })

  describe('ConfirmModalClose', () => {
    describe('User Interactions', () => {
      it('should close modal when clicked (Uncontrolled)', async () => {
        const { getByRole, queryByRole } = renderModal()
        await user.click(getByRole('button', { name: TRIGGER_TEXT }))
        await user.click(getByRole('button', { name: CANCEL_TEXT }))
        expect(queryByRole('alertdialog')).not.toBeInTheDocument()
      })

      it('should close modal when clicked (Controlled)', async () => {
        const onHide = jest.fn()
        const { getByRole } = renderModal({ modalProps: { show: true, onHide } })
        await user.click(getByRole('button', { name: CANCEL_TEXT }))
        expect(onHide).toBeCalledTimes(1)
      })
    })
  })

  describe('ConfirmModalAction', () => {
    describe('User Interactions', () => {
      it('should close modal when clicked (Uncontrolled)', async () => {
        const { getByRole, queryByRole } = renderModal()
        await user.click(getByRole('button', { name: TRIGGER_TEXT }))
        await user.click(getByRole('button', { name: ACTION_TEXT }))
        expect(queryByRole('alertdialog')).not.toBeInTheDocument()
      })

      it('should close modal when clicked (Controlled)', async () => {
        const onHide = jest.fn()
        const { getByRole } = renderModal({ modalProps: { show: true, onHide } })
        await user.click(getByRole('button', { name: ACTION_TEXT }))
        expect(onHide).toBeCalledTimes(1)
      })
    })
  })
})
