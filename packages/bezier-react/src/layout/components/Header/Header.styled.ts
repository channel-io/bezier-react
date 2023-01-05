/* Internal dependencies */
import { styled, smoothCorners } from '~/src/foundation'

interface ContainerProps {
  isHover?: boolean
}

export const Container = styled.div<ContainerProps>`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 70px;
  padding: 14px 12px;
  background-color: ${({ isHover }) => (isHover === true ? 'initial' : 'transparent')};
`

export const TitleWrapper = styled.div`
  display: flex;
  flex: 1 1 0;
  align-items: center;
`

export const ImageWrapper = styled.div`
  margin-right: 12px;
`

export const ActionWrapper = styled.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: flex-end;
`

interface TitleImageProps {
  imageSize: number
}

export const TitleImage = styled.div<TitleImageProps>`
  box-sizing: content-box;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${props => props.imageSize}px;
  height: ${props => props.imageSize}px;
  background-color: white;
  border-radius: 36%;
  outline: none;
  box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.1), 0 5px 15px 0 rgba(0, 0, 0, 0.5);

  ${smoothCorners({
    shadow: '0 0 0px 3px rgba(0, 0, 0, 0.1), 0 5px 15px 0 rgba(0, 0, 0, 0.5)',
    backgroundColor: 'white',
    shadowBlur: 15,
    hasBackgroundImage: true,
  })};
`
