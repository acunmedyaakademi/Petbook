import classNames from 'classnames'
import PropTypes from 'prop-types'
import {createElement} from 'react'

const Button = ({children, as, variant, size, ...props}) => {
  return createElement(
    as,
    {
      ...props,
      className: classNames('h-10 rounded-full flex items-center justify-center', {
        'bg-primary-2 text-neutral-0 font-medium hover:bg-primary-1 transition-colors duration-300':
          variant === 'primary',
        'bg-neutral-0 border-2 border-primary-2 flex items-center gap-2': variant === 'secondary',
        'px-5': size === 'normal',
      }),
    },
    children
  )
}

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  variant: PropTypes.oneOf(['primary', 'secondary']),
  size: PropTypes.oneOf(['normal', 'small']),
  as: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  props: PropTypes.any,
}

Button.defaultProps = {
  as: 'button',
  variant: 'primary',
  size: 'normal',
}

export default Button
