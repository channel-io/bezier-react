/* External dependencies */
import React from 'react'
import { isInaccessible } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

/* Internal dependencies */
import { render } from 'Utils/testUtils'
import { Modal } from './Modal'
import { ModalContent } from './ModalContent'
import { ModalHeader } from './ModalHeader'
import { ModalBody } from './ModalBody'
import { ModalFooter } from './ModalFooter'
import { ModalTrigger, ModalClose } from './ModalHelpers'
import { ModalProps, ModalContentProps, ModalTitleSize } from './Modal.types'

const TRIGGER_TEXT = 'Open'
const CLOSE_TEXT = 'Close'
const TITLE_TEXT = 'Title'
const SUBTITLE_TEXT = 'Subtitle'
const DESCRIPTION_TEXT = 'Description'

describe('Modal', () => {
  const renderModal = ({
    modalProps,
    modalContentProps,
  }: {
    modalProps?: ModalProps
    modalContentProps?: ModalContentProps
  } = {}) => render(
    <Modal {...modalProps}>
      <ModalTrigger>
        <button type="button">{ TRIGGER_TEXT }</button>
      </ModalTrigger>
      <ModalContent {...modalContentProps}>
        <ModalHeader
          title={TITLE_TEXT}
          subtitle={SUBTITLE_TEXT}
          description={DESCRIPTION_TEXT}
          titleSize={ModalTitleSize.L}
        />
        <ModalBody>
          <input type="text" />
        </ModalBody>
        <ModalFooter
          leftContent={(<div />)}
          rightContent={(
            <ModalClose>
              <button type="button">{ CLOSE_TEXT }</button>
            </ModalClose>
          )}
        />
      </ModalContent>
    </Modal>,
  )

  let user: ReturnType<typeof userEvent.setup>

  beforeEach(() => {
    user = userEvent.setup({
      /**
       * To prevent `pointer-events: none` error.
       * @see https://testing-library.com/docs/user-event/options#pointereventscheck
       * PointerEventsCheckLevel.Never
       */
      pointerEventsCheck: 0,
    })
  })

  describe('Accessibility', () => {
    it('should be accessible', () => {
      const { container } = renderModal()
      expect(isInaccessible(container)).toBe(false)
    })
  })

  describe('Focus Management', () => {
    it('should focus on the first focusable element when the modal is opened', async () => {
      const { getByRole } = renderModal()
      const trigger = getByRole('button', { name: TRIGGER_TEXT })
      await user.click(trigger)
      expect(document.activeElement).toBe(getByRole('textbox'))
    })

    it('should focus on the modal trigger when the modal is closed', async () => {
      const { getByRole } = renderModal()
      const trigger = getByRole('button', { name: TRIGGER_TEXT })
      await user.click(trigger)
      await user.click(getByRole('button', { name: CLOSE_TEXT }))
      expect(document.activeElement).toBe(trigger)
    })

    it('should be trapped inside the modal when the modal is opened', async () => {
      const { getByRole } = renderModal()
      const trigger = getByRole('button', { name: TRIGGER_TEXT })
      await user.click(trigger)
      const closeButton = getByRole('button', { name: CLOSE_TEXT })
      const textbox = getByRole('textbox')
      await user.tab()
      expect(document.activeElement).toBe(closeButton)
      await user.tab()
      expect(document.activeElement).toBe(textbox)
      await user.tab()
      expect(document.activeElement).not.toBe(trigger) /* button */
      await user.tab({ shift: true })
      expect(document.activeElement).toBe(textbox)
      await user.tab({ shift: true })
      expect(document.activeElement).toBe(closeButton)
      await user.tab({ shift: true })
      expect(document.activeElement).not.toBe(trigger) /* textbox */
    })

    it('should focus last on the close icon button', async () => {
      const { getByRole, getAllByRole } = renderModal({ modalContentProps: { showCloseIcon: true } })
      const trigger = getByRole('button', { name: TRIGGER_TEXT })
      await user.click(trigger)
      const [closeButton, closeIconButton] = getAllByRole('button')
      await user.tab()
      expect(document.activeElement).toBe(closeButton)
      await user.tab()
      expect(document.activeElement).toBe(closeIconButton)
    })
  })

  describe('ModalContent', () => {
    let renderResult: ReturnType<typeof renderModal>

    beforeEach(() => {
      renderResult = renderModal({ modalProps: { defaultShow: true } })
    })

    describe('ARIA', () => {
      it('should have \'role="dialog"\' attribute', () => {
        const { getByRole } = renderResult
        expect(getByRole('dialog')).toBeInTheDocument()
      })

      it('should have \'aria-modal="true"\' attribute', () => {
        const { getByRole } = renderResult
        expect(getByRole('dialog')).toHaveAttribute('aria-modal', 'true')
      })

      it('should have proper \'aria-labelledby\' attribute', () => {
        const { getByRole } = renderResult
        expect(getByRole('dialog', { name: `${TITLE_TEXT} ${SUBTITLE_TEXT}` })).toBeInTheDocument()
      })

      it('should have proper \'aria-describedby\' attribute', () => {
        const { getByRole } = renderResult
        expect(getByRole('dialog', { description: DESCRIPTION_TEXT })).toBeInTheDocument()
      })
    })

    describe('User Interactions', () => {
      it('should close the modal when the user clicks the outside of the modal', async () => {
        const { queryByRole, container } = renderResult
        await user.click(container)
        expect(queryByRole('dialog')).not.toBeInTheDocument()
      })

      it('should close the modal when the user clicks close icon button', async () => {
        const { getAllByRole, queryByRole } = renderResult
        const [, closeIconButton] = getAllByRole('button')
        await user.click(closeIconButton)
        expect(queryByRole('dialog')).not.toBeInTheDocument()
      })

      it('should close the modal when the user presses the ESC key', async () => {
        const { queryByRole } = renderResult
        await user.keyboard('{Escape}')
        expect(queryByRole('dialog')).not.toBeInTheDocument()
      })
    })

    describe('Data Attributes', () => {
      it('should have proper \'data-state\' attribute', () => {
        const { getByRole } = renderResult
        expect(getByRole('dialog')).toHaveAttribute('data-state', 'open')
      })
    })
  })

  describe('ModalHeader', () => {
    let renderResult: ReturnType<typeof renderModal>

    beforeEach(() => {
      renderResult = renderModal({ modalProps: { defaultShow: true } })
    })

    describe('ARIA, Semantics', () => {
      it('the heading group(title and subtitle) should have group role and \'aria-roledescription\' attribute', () => {
        const { getByRole } = renderResult
        const titleGroup = getByRole('group')
        expect(titleGroup).toHaveAttribute('aria-roledescription', 'Heading group')
      })

      it('the title should be an h2 element', () => {
        const { getByRole } = renderResult
        expect(getByRole('heading', { name: TITLE_TEXT, level: 2 })).toBeInTheDocument()
      })

      it('the subtitle should have \'aria-roledescription="subtitle"\' attribute', () => {
        const { getByText } = renderResult
        const subtitle = getByText(SUBTITLE_TEXT)
        expect(subtitle).toHaveAttribute('aria-roledescription', 'subtitle')
      })
    })
  })

  describe('ModalTrigger', () => {
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
        expect(trigger).toHaveAttribute('aria-controls', getByRole('dialog').id)
      })
    })

    describe('User Interactions', () => {
      it('should open modal when clicked (Uncontrolled)', async () => {
        const { getByRole } = renderModal()
        await user.click(getByRole('button', { name: TRIGGER_TEXT }))
        expect(getByRole('dialog')).toBeInTheDocument()
      })

      it('should open modal when clicked (Controlled)', async () => {
        const onShow = jest.fn()
        const { getByRole } = renderModal({ modalProps: { show: false, onShow } })
        await user.click(getByRole('button', { name: TRIGGER_TEXT }))
        expect(onShow).toBeCalledTimes(1)
      })
    })
  })

  describe('ModalClose', () => {
    describe('User Interactions', () => {
      it('should close modal when clicked (Uncontrolled)', async () => {
        const { getByRole, queryByRole } = renderModal()
        await user.click(getByRole('button', { name: TRIGGER_TEXT }))
        await user.click(getByRole('button', { name: CLOSE_TEXT }))
        expect(queryByRole('dialog')).not.toBeInTheDocument()
      })

      it('should close modal when clicked (Controlled)', async () => {
        const onHide = jest.fn()
        const { getByRole } = renderModal({ modalProps: { show: true, onHide } })
        await user.click(getByRole('button', { name: CLOSE_TEXT }))
        expect(onHide).toBeCalledTimes(1)
      })
    })
  })
})
