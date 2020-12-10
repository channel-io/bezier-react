/* Internal dependencies */
import { styled } from '../../styling/Theme'
import { smoothCorners } from '../../styling/Mixins'

interface ContainerProps {
  isHover?: boolean
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 70px;
  padding: 14px 12px;
  box-sizing: border-box;
  background-color: ${({ isHover }) => (isHover === true ? 'initial' : 'transparent')};
`

export const TitleWrapper = styled.div`
  flex: 1 1 0;
  display: flex;
  align-items: center;
`

export const ImageWrapper = styled.div`
  margin-right: 12px;
`

export const ActionWrapper = styled.div`
  flex-shrink: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

interface TitleImageProps {
  imageSize: number
  imageUrl: string
}

export const TitleImage = styled.div<TitleImageProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.1), 0 5px 15px 0 rgba(0, 0, 0, 0.5);
  outline: none;
  width: ${props => props.imageSize}px;
  height: ${props => props.imageSize}px;
  border-radius: 36%;
  background-color: white;
  box-sizing: content-box;
  background-image: ${props => `url(${props.imageUrl})`};

  /* stylelint-disable-next-line declaration-colon-newline-after */
  ${props => smoothCorners({
    shadow: '0 0 0px 3px rgba(0, 0, 0, 0.1), 0 5px 15px 0 rgba(0, 0, 0, 0.5)',
    backgroundColor: 'white',
    backgroundImage: props.imageUrl,
    shadowBlur: 15,
  })};
`
