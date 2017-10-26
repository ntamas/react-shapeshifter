import PropTypes from 'prop-types'
import React from 'react'

/**
 * Stateless React component that renders a given shape composed of at most
 * three "sticks" and animates smoothly between them using CSS transitions.
 */
export const Shapeshifter = (props) => {
  const padding = props.padding !== undefined ? props.padding : 15
  const shape = props.shape || 'menu'
  const thickness = props.thickness || 2
  const width = props.width || 18
  const style = {
    boxSizing: 'border-box',
    padding: padding,
    ...props.style
  }
  const barStyle = {
    boxSizing: 'border-box',
    height: thickness,
    transition: '0.3s ease-out',
    width
  }
  const containerStyle = {
    alignItems: 'center',
    boxSizing: 'border-box',
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'space-between',
    height: 9 * thickness,
    padding: thickness + 'px 0',
    transition: 'transform 0.3s ease-out',
    width: width
  }

  if (props.color) {
    barStyle.backgroundColor = props.color
  }

  const extraStyles = {
    bottom: {
      transformOrigin: '0 50% 0'
    },
    middle: {},
    top: {
      transformOrigin: '0 50% 0'
    }
  }

  let preTransform = ''
  let postTransform = ''
  let containerTransform = ''

  switch (shape) {
    case 'menu':
      break

    case 'close':
      postTransform = 'scaleX(' + (7 * thickness * 1.4142) / width + ')'
      extraStyles.top.transform = 'translate(0, ' + (3 * thickness) + 'px) rotate(45deg) ' +
        postTransform
      extraStyles.middle.transform = 'scaleX(0)'
      extraStyles.bottom.transform = 'translate(0, ' + (-3 * thickness) + 'px) rotate(-45deg) ' +
        postTransform
      extraStyles.top.transformOrigin = '50% 50% 0'
      extraStyles.bottom.transformOrigin = '50% 50% 0'
      break

    case 'right':
    case 'down':
      preTransform = 'translate(' + (width - 3.5 * thickness * 0.7071) + 'px, 0)'
      postTransform = 'scaleX(' + (7 * thickness * 0.7071) / width + ')'
      extraStyles.top.transform = preTransform + ' rotate(45deg) ' +
        postTransform + ' translate(0, ' + (-thickness / 4) + 'px)'
      extraStyles.bottom.transform = preTransform + ' rotate(-45deg) ' +
        postTransform + ' translate(0, ' + (thickness / 4) + 'px)'
      extraStyles.top.transformOrigin = '0% 50% 0'
      extraStyles.bottom.transformOrigin = '0% 50% 0'
      containerTransform = (shape === 'down') ? 'rotate(90deg)' : ''
      break

    case 'left':
    case 'up':
      preTransform = 'translate(' + (-width + 3.5 * thickness * 0.7071) + 'px, 0)'
      postTransform = 'scaleX(' + (7 * thickness * 0.7071) / width + ')'
      extraStyles.top.transform = preTransform + ' rotate(-45deg) ' +
        postTransform + ' translate(0, ' + (-thickness / 4) + 'px)'
      extraStyles.bottom.transform = preTransform + ' rotate(45deg) ' +
        postTransform + ' translate(0, ' + (thickness / 4) + 'px)'
      extraStyles.top.transformOrigin = '100% 50% 0'
      extraStyles.bottom.transformOrigin = '100% 50% 0'
      containerTransform = (shape === 'up') ? 'rotate(90deg)' : ''
      break
  }

  if (containerTransform) {
    containerStyle.transform = containerTransform
  }

  return (
    <div style={style} onClick={props.onClick}>
      <div style={containerStyle}>
        <div style={{ ...extraStyles.top, ...barStyle }} />
        <div style={{ ...extraStyles.middle, ...barStyle }} />
        <div style={{ ...extraStyles.bottom, ...barStyle }} />
      </div>
    </div>
  )
}

Shapeshifter.propTypes = {
  color: PropTypes.string,
  onClick: PropTypes.func,
  shape: PropTypes.oneOf(['menu', 'close', 'left', 'right', 'up', 'down']),
  style: PropTypes.object,
  thickness: PropTypes.number,
  width: PropTypes.number
}

export default Shapeshifter
