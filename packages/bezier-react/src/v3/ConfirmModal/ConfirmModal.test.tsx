import { isInaccessible } from '@testing-library/react'
import userEvent, { PointerEventsCheckLevel } from '@testing-library/user-event'

import { render } from '~/src/utils/test'

import {
  ConfirmModal,
  ConfirmModalBody,
  ConfirmModalClose,
  ConfirmModalContent,
  ConfirmModalFooter,
  ConfirmModalHeader,
  ConfirmModalTrigger,
} from './ConfirmModal'
import {
  type ConfirmModalContentProps,
  type ConfirmModalProps,
} from './ConfirmModal.types'

const TRIGGER_TEXT = 'Open'
const CANCEL_TEXT = 'Cancel'
const ACTION_TEXT = 'Action'
const TITLE_TEXT = 'Title'
const DESCRIPTION_TEXT = 'Description'
const BODY_TEXT = 'Body'

describe('ConfirmModal', () => {
  const renderModal = ({
    modalProps,
    modalContentProps,
  }: {
    modalProps?: ConfirmModalProps
    modalContentProps?: ConfirmModalContentProps
  } = {}) =>
    render(
      <ConfirmModal {...modalProps}>
        <ConfirmModalTrigger>
          <button type="button">{TRIGGER_TEXT}</button>
        </ConfirmModalTrigger>
        <ConfirmModalContent {...modalContentProps}>
          <ConfirmModalHeader
            title={TITLE_TEXT}
            description={DESCRIPTION_TEXT}
          />
          <ConfirmModalFooter
            rightContent={
              <>
                <ConfirmModalClose>
                  <button type="button">{CANCEL_TEXT}</button>
                </ConfirmModalClose>
                <ConfirmModalClose>
                  <button type="button">{ACTION_TEXT}</button>
                </ConfirmModalClose>
              </>
            }
          />
        </ConfirmModalContent>
      </ConfirmModal>
    )

  let user: ReturnType<typeof userEvent.setup>
  let renderOpenedModal: typeof renderModal

  beforeEach(() => {
    user = userEvent.setup({
      pointerEventsCheck: PointerEventsCheckLevel.Never,
    })
    renderOpenedModal = (props) =>
      renderModal({ modalProps: { defaultShow: true }, ...props })
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
      expect(document.activeElement).toBe(
        getByRole('button', { name: CANCEL_TEXT })
      )
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
      expect(document.activeElement).not.toBe(trigger)
      await user.tab({ shift: true })
      expect(document.activeElement).toBe(actionButton)
      await user.tab({ shift: true })
      expect(document.activeElement).toBe(cancelButton)
      await user.tab({ shift: true })
      expect(document.activeElement).not.toBe(trigger)
    })
  })

  describe('ConfirmModalContent', () => {
    describe('ARIA', () => {
      it('should have role="alertdialog" attribute', () => {
        const { getByRole } = renderOpenedModal()
        expect(getByRole('alertdialog')).toBeInTheDocument()
      })

      it('should have aria-modal="true" attribute', () => {
        const { getByRole } = renderOpenedModal()
        expect(getByRole('alertdialog')).toHaveAttribute('aria-modal', 'true')
      })

      it('should have proper aria-labelledby attribute', () => {
        const { getByRole } = renderOpenedModal()
        expect(
          getByRole('alertdialog', { name: TITLE_TEXT })
        ).toBeInTheDocument()
      })

      it('should have proper aria-describedby attribute', () => {
        const { getByRole } = renderOpenedModal()
        expect(
          getByRole('alertdialog', { description: DESCRIPTION_TEXT })
        ).toBeInTheDocument()
      })
    })

    describe('User Interactions', () => {
      it('should close the modal when the user clicks close icon button', async () => {
        const { getByRole, queryByRole } = renderOpenedModal({
          modalContentProps: { showCloseIcon: true },
        })
        await user.click(getByRole('button', { name: 'Close' }))
        expect(queryByRole('alertdialog')).not.toBeInTheDocument()
      })

      it('should close the modal when the user clicks outside of the modal', async () => {
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
  })

  describe('ConfirmModalHeader', () => {
    it('the title should be an h2 element', () => {
      const { getByRole } = renderOpenedModal()
      expect(
        getByRole('heading', { name: TITLE_TEXT, level: 2 })
      ).toBeInTheDocument()
    })

    it('should render the confirm title with medium modal title size', () => {
      const { getByRole } = renderOpenedModal()
      expect(getByRole('heading', { name: TITLE_TEXT })).toHaveClass('typo-16')
    })
  })

  describe('ConfirmModalBody', () => {
    it('should render body content', () => {
      const { getByText } = render(
        <ConfirmModal defaultShow>
          <ConfirmModalContent aria-describedby={undefined}>
            <ConfirmModalHeader title={TITLE_TEXT} />
            <ConfirmModalBody>{BODY_TEXT}</ConfirmModalBody>
          </ConfirmModalContent>
        </ConfirmModal>
      )

      expect(getByText(BODY_TEXT)).toBeInTheDocument()
    })
  })

  describe('ConfirmModalTrigger', () => {
    it('should open modal when clicked', async () => {
      const { getByRole } = renderModal()
      await user.click(getByRole('button', { name: TRIGGER_TEXT }))
      expect(getByRole('alertdialog')).toBeInTheDocument()
    })
  })

  describe('ConfirmModalClose', () => {
    it('should close modal when clicked', async () => {
      const { getByRole, queryByRole } = renderOpenedModal()
      await user.click(getByRole('button', { name: CANCEL_TEXT }))
      expect(queryByRole('alertdialog')).not.toBeInTheDocument()
    })
  })
})
