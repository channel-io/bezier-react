/* External dependencies */
import React, { memo, useMemo, useCallback } from 'react'
import { ReactSVG } from 'react-svg'
import classNames from 'classnames'
import _ from 'lodash'

/* Internal dependencies */
import { toString } from '../../utils/styleUtils'
import styles from './SVGIcon.styled'

const SIZE_REGEX = /^\d*\.?\d$/

/* eslint-disable no-multi-spaces */
export enum Size {
  XXSmall = 'size-xxsmall',
  XSmall  = 'size-xsmall',
  Small   = 'size-small',
  Normal  = 'size-normal',
  Large   = 'size-large',
}
/* eslint-enable no-multi-spaces */
const SizeEnumVals = _.values(Size)

export function isSizeEnum(x: any): x is Size {
  return _.isString(x) && SizeEnumVals.includes(x as Size)
}

export interface SVGIconProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
  style?: object
  svgStyle?: object
  name: string
  size?: Size | number
}

function SVGIcon({
  className,
  style,
  svgStyle,
  name,
  size = Size.Normal,
  ...otherProps
}: SVGIconProps) {
  const src = useMemo(() => {
    const fileName = (_.endsWith(name, '.svg') ? name : `${name}.svg`)
    try {
      return require(`../../static/svg/${fileName}`)
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(`Can not resolve icon name '${name}':`, e.message)
      return ''
    }
  }, [name])

  const numberedSize = useMemo(() => {
    if (_.isNumber(size) || SIZE_REGEX.test(size)) { return Number(size) }
    return undefined
  }, [size])

  /* NOTE: 실제 DOM에 inject 되는 <svg> 요소는 <div> 요소로 wrapping 되어 있음. */
  /* 따라서 wrapper의 스타일과 svg의 스타일이 분리 됨. */
  const normalizedSVGStyle = useMemo(() => {
    const _size = (() => {
      if (isSizeEnum(size)) { return _.get(styles, _.toUpper(_.snakeCase(size))) }
      if (_.isNumber(numberedSize)) { return numberedSize }
      return undefined
    })()
    return toString({
      width: _size,
      height: _size,
      ...svgStyle,
    })
  }, [svgStyle, size, numberedSize])

  const sizeClassName = useMemo(() => isSizeEnum(size) && styles[size], [size])

  /* NOTE: size prop이 숫자일 경우 wrapper 사이즈 버그. */
  const styleObject = useMemo(() => ({
    ...style,
    ...(_.isNumber(numberedSize) && ({
      width: numberedSize,
      height: numberedSize,
    })),
  }), [style, numberedSize])

  const handleBeforeInjection = useCallback((svg) => {
    if (normalizedSVGStyle) svg.setAttribute('style', normalizedSVGStyle)
    /* NOTE: Sketch 앱에서 생성되는 SVG 파일에 'fill' attribute가 반드시 포함되어 있음. */
    /* 이때문에 스타일 override 불가능하여 수동으로 하위 모든 path 요소들의 fill attribute 제거 해 줌. */
    const paths = svg.getElementsByTagName('path')
    _.forEach(paths, (path) => path.removeAttribute('fill'))
  }, [normalizedSVGStyle])

  return (
    <ReactSVG
      src={src}
      className={classNames(className, sizeClassName)}
      style={styleObject}
      beforeInjection={handleBeforeInjection}
      {...otherProps}
    />
  )
}

export default memo(SVGIcon)
