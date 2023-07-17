import classNames from 'classnames'
import PropTypes from 'prop-types'
import {createElement} from 'react'

const Button = ({children, as, variant, size, ...props}) => {
  return createElement(
    as,
    {
      ...props,
      className: classNames('h-10 rounded flex items-center justify-center', {
        'bg-primary-2 text-neutral-2 font-medium': variant === 'primary',
        'px-5': size === 'normal',
      }),
    },
    children
  )
}

Button.propTypes = {
  children: PropTypes.element,
  variant: PropTypes.oneOf(['primary', 'secondary']),
  size: PropTypes.oneOf(['normal', 'small']),
  as: PropTypes.string,
  props: PropTypes.any,
}

Button.defaultProps = {
  as: 'button',
  variant: 'primary',
  size: 'normal',
}

export default Button
