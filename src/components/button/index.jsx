import classNames from 'classnames'
import PropTypes from 'prop-types'
import {createElement} from 'react'

const Button = ({children, as, variant, size, ...props}) => {
  return createElement(
    as,
    {
      ...props,
      className: classNames('h-10 rounded-full flex items-center', {
        'bg-primary-2 text-neutral-0 font-medium hover:bg-primary-1 transition-colors duration-300 justify-center':
          variant === 'primary',
        'bg-neutral-0 border-2 border-primary-2 gap-2 justify-center': variant === 'secondary',
        'rounded-none hover:bg-neutral-6 hover:bg-opacity-30 px-2 h-8 justify-items-start gap-3 text-neutral-2 ':
          variant === 'theme',
        'rounded-none px-2 h-8 justify-items-start gap-3 text-blue-300 bg-primary-0 hover:bg-neutral-6 hover:bg-opacity-30 ':
          variant === 'activeTheme',

        'px-5': size === 'normal',
      }),
    },
    children
  )
}

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string, PropTypes.node]),
  variant: PropTypes.oneOf(['primary', 'secondary', 'theme']),
  size: PropTypes.oneOf(['normal', 'small', 'theme']),
  as: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  props: PropTypes.any,
}

Button.defaultProps = {
  as: 'button',
  variant: 'primary',
  size: 'normal',
}

export default Button
