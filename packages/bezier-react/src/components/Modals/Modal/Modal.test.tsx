/* External dependencies */
import React from 'react'
import type { RenderResult } from '@testing-library/react'
import { fireEvent } from '@testing-library/react'

/* Internal dependencies */
import { render } from 'Utils/testUtils'
import type {
  ModalProps,
  ModalContentProps,
  ModalActionProps,
} from './Modal.types'
import Modal from './Modal'
import ModalContent from './ModalContent'
import ModalAction from './ModalAction'

const DEFAULT_PROPS: ModalProps = {
  show: true,
  className: 'Modal',
  onHide: jest.fn(),
}

interface ModalTestRenderProps extends
  Omit<ModalProps, 'title'>,
  ModalContentProps,
  ModalActionProps { }

const ModalTestRender = ({
  title,
  subTitle,
  description,
  showCloseIcon,
  leftContent,
  rightContent,
  children,
  ...rests
}: ModalTestRenderProps) => (
  <Modal {...rests}>
    <ModalContent
      title={title}
      subTitle={subTitle}
      description={description}
      showCloseIcon={showCloseIcon}
    >
      { children }
    </ModalContent>
    <ModalAction
      leftContent={leftContent}
      rightContent={rightContent}
    />
  </Modal>
)

const main = document.createElement('div')
main.setAttribute('id', 'main')

describe('Modal', () => {
  let renderResult: RenderResult

  describe('When "show" is false', () => {
    beforeEach(() => {
      renderResult = render(
        <ModalTestRender
          {...DEFAULT_PROPS}
          show={false}
        />,
        {
          container: document.body.appendChild(main),
        },
      )
    })

    afterEach(jest.clearAllMocks)

    it('Component is "null"', async () => {
      const target = renderResult.container.firstChild
      expect(target).toBe(null)
    })
  })

  describe('When "show" is true', () => {
    beforeEach(() => {
      renderResult = render(
        <ModalTestRender
          {...DEFAULT_PROPS}
          className="Modal__Contests__Test"
        />,
        {
          container: document.body.appendChild(main),
        },
      )
    })

    afterEach(jest.clearAllMocks)

    it('should equal the snapshot', async () => {
      const target = await renderResult.findByTestId('BaseModal')
      expect(target).toMatchSnapshot()
    })

    describe('Modal__Contents', () => {
      beforeEach(() => {
        renderResult = render(
          <ModalTestRender
            {...DEFAULT_PROPS}
            title="Title"
            subTitle="SubTitle"
            description="Description"
            leftContent="Left content"
            rightContent="Right content"
          />,
          {
            container: document.body.appendChild(main),
          },
        )
      })

      afterEach(jest.clearAllMocks)

      it('Styles', async () => {
        const target = await renderResult.findByTestId('Modal__Contents')
        expect(target).toHaveStyle('box-sizing: border-box;')
        expect(target).toHaveStyle('width: 100%;')
        expect(target).toHaveStyle('padding: 24px 24px 16px;')
      })

      describe('Modal__Contents__Title', () => {
        describe('When "title" and "subTitle" are nil', () => {
          beforeEach(() => {
            renderResult = render(
              <ModalTestRender
                {...DEFAULT_PROPS}
                description="Description"
                leftContent="Left content"
                rightContent="Right content"
                showCloseIcon
              />,
              {
                container: document.body.appendChild(main),
              },
            )
          })

          it('Modal__Contents__Title is null', () => {
            const target = renderResult.queryByTestId('Modal__Contents__Title')
            expect(target).toBe(null)
          })
        })

        beforeEach(() => {
          renderResult = render(
            <ModalTestRender
              {...DEFAULT_PROPS}
              title="Title"
              subTitle="SubTitle"
              description="Description"
              leftContent="Left content"
              rightContent="Right content"
            />,
            {
              container: document.body.appendChild(main),
            },
          )
        })

        afterEach(jest.clearAllMocks)

        it('Styles', async () => {
          const target = await renderResult.findByTestId('Modal__Contents__Title')
          expect(target).toHaveStyle('display: flex;')
          expect(target).toHaveStyle('flex: 1;')
        })

        describe('Modal__Contents__TitleAndSubTitle', () => {
          it('Styles', async () => {
            const target = await renderResult.findByTestId('Modal__Contents__TitleAndSubTitle')
            expect(target).toHaveStyle('display: block;')
            expect(target).toHaveStyle('width: 100%;')
          })

          describe('Modal__Contents__Title__Text', () => {
            it('Styles', async () => {
              const target = await renderResult.findByTestId('Modal__Contents__Title__Text')
              expect(target).toHaveStyle('box-sizing: border-box;')
              expect(target).toHaveStyle('display: block;')
              expect(target).toHaveStyle('width: 100%;')
              expect(target).toHaveStyle('overflow: hidden;')
              expect(target).toHaveStyle('text-overflow: ellipsis;')
              expect(target).toHaveStyle('white-space: nowrap;')
            })
          })

          describe('Modal__Contents__SubTitle__Text', () => {
            it('Styles', async () => {
              const target = await renderResult.findByTestId('Modal__Contents__SubTitle__Text')
              expect(target).toHaveStyle('box-sizing: border-box;')
              expect(target).toHaveStyle('display: block;')
              expect(target).toHaveStyle('width: 100%;')
              expect(target).toHaveStyle('overflow: hidden;')
              expect(target).toHaveStyle('text-overflow: ellipsis;')
              expect(target).toHaveStyle('white-space: nowrap;')
            })
          })
        })

        describe('Modal__Contents__Title__CloseButton', () => {
          describe('When "showCloseIcon" is true', () => {
            beforeEach(() => {
              renderResult = render(
                <ModalTestRender
                  {...DEFAULT_PROPS}
                  title="Title"
                  subTitle="SubTitle"
                  description="Description"
                  leftContent="Left content"
                  rightContent="Right content"
                  showCloseIcon
                />,
                {
                  container: document.body.appendChild(main),
                },
              )
            })

            it('CloseButton is mounted', async () => {
              const target = await renderResult.findByTestId('Modal__Contents__Title__CloseButton')
              expect(target).toBeInTheDocument()
            })

            it('CloseButton is clicked, the modal is closed.', async () => {
              const target = await renderResult.findByTestId('Modal__Contents__Title__CloseButton')
              fireEvent.click(target)
              expect(DEFAULT_PROPS.onHide).toBeCalledTimes(1)
            })

            it('Styles', async () => {
              const target = await renderResult.findByTestId('Modal__Contents__Title__CloseButton')
              expect(target).toHaveStyle('display: inline-block;')
              expect(target).toHaveStyle('background-color: transparent;')
              expect(target).toHaveStyle('margin-top: -6px;')
              expect(target).toHaveStyle('margin-right: -6px;')
            })
          })
        })
      })
    })

    describe('Modal__Action', () => {
      describe('When "leftContent" and "rightContent" are nil', () => {
        beforeEach(() => {
          renderResult = render(
            <ModalTestRender
              {...DEFAULT_PROPS}
              title="Title"
              subTitle="SubTitle"
              description="Description"
              showCloseIcon
            />,
            {
              container: document.body.appendChild(main),
            },
          )
        })

        it('Modal__Action is null', () => {
          const target = renderResult.queryByTestId('Modal__Action')
          expect(target).toBe(null)
        })
      })

      beforeEach(() => {
        renderResult = render(
          <ModalTestRender
            {...DEFAULT_PROPS}
            title="Title"
            subTitle="SubTitle"
            description="Description"
            leftContent="Left content"
            rightContent="Right content"
          />,
          {
            container: document.body.appendChild(main),

          },
        )
      })

      afterEach(jest.clearAllMocks)

      it('Styles', async () => {
        const target = await renderResult.findByTestId('Modal__Action')
        expect(target).toHaveStyle('box-sizing: border-box;')
        expect(target).toHaveStyle('display: flex')
        expect(target).toHaveStyle('flex: 1')
        expect(target).toHaveStyle('justify-content: space-between')
        expect(target).toHaveStyle('padding: 0 24px 24px')
      })
    })
  })
})
