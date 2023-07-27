import {Menu} from '@headlessui/react'
import useColorScheme from '@/hooks/use-color-scheme'
import {setTheme} from '@/stores/app/actions'
import {useTheme} from '@/stores/app/hooks'
import {appearance, getAppearanceIcon, languages, getLanguageName} from '@/utils/consts/appearance'
import classNames from 'classnames'
import {useTranslation} from 'react-i18next'
import {CircleFlag} from 'react-circle-flags'
import {IoMdArrowDropdown} from 'react-icons/io'

const Appearance = () => {
  const theme = useTheme()
  const {colorScheme} = useColorScheme()
  const {t, i18n} = useTranslation()

  const handleThemeChange = (themeKey) => {
    setTheme(themeKey)
  }

  const handleLanguageChange = (languageKey) => {
    i18n.changeLanguage(languageKey)
  }

  return (
    <div className='relative flex items-center justify-items-center gap-5'>
      <Menu as='nav' className='relative w-max'>
        <Menu.Button className='flex items-center justify-center text-neutral-0'>
          {getAppearanceIcon(theme, colorScheme)}
        </Menu.Button>
        <Menu.Items
          as='div'
          className='absolute right-0 top-6 rounded-md overflow-hidden bg-primary-2'
        >
          {appearance.map(({key, value}, index) => (
            <Menu.Item key={index}>
              {({active}) => (
                <button
                  onClick={() => handleThemeChange(key)}
                  className={classNames(
                    'flex items-center justify-start w-full px-4 py-2 gap-5 font-medium text-sm transition-colors duration-300',
                    {
                      'bg-primary-1 text-neutral-0': active,
                      'text-neutral-2': !active,
                      'bg-primary-0 text-state-orange/90': key === theme,
                    }
                  )}
                >
                  <span className='w-max'>{getAppearanceIcon(key)}</span>
                  {t(value)}
                </button>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Menu>
      <Menu as='nav' className='relative w-max'>
        <Menu.Button className='flex items-center justify-center text-neutral-0 gap-2'>
          <CircleFlag countryCode={i18n.language} width='20' className='justify-self-end' />
          <span className='hidden lg:block'>{getLanguageName(i18n.language)}</span>
          <IoMdArrowDropdown size={25} className='hidden lg:block' />
        </Menu.Button>
        <Menu.Items
          as='div'
          className='absolute right-0 top-6 rounded-md overflow-hidden bg-primary-2 flex-1'
        >
          {languages.map(({key, value}, index) => (
            <Menu.Item key={index}>
              {({active}) => (
                <button
                  onClick={() => handleLanguageChange(key)}
                  className={classNames(
                    'flex items-center justify-start w-full px-4 py-2 gap-5 font-medium text-sm transition-colors duration-300',
                    {
                      'bg-primary-1 text-neutral-0': active,
                      'text-neutral-2': !active,
                      'bg-primary-0 text-state-orange/90': key === theme,
                    }
                  )}
                >
                  <span className='w-max'>
                    {' '}
                    <CircleFlag countryCode={key} width='20' className='justify-self-end' />
                  </span>
                  {value}
                </button>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Menu>
    </div>
  )
}

export default Appearance
