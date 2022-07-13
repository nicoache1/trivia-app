import * as Localization from 'expo-localization'
import i18n from 'i18n-js'
import { memoize } from 'lodash' // Use for caching/memoize for better performance
import { I18nManager } from 'react-native'

import { en } from './languages/en'

const DEFAULT_LANGUAGE = 'en'

enum AvailableLanguages {
  EN = 'en',
}

interface Translations {
  [language: string]: {
    [constant: string]: string
  }
}

export const translationGetters: Translations = {
  [AvailableLanguages.EN]: en,
}

export const localization = memoize(
  (key: string, config?: any) =>
    i18n.t(key, config).includes('missing') ? key : i18n.t(key, config),
  (key: string, config?: any) => (config ? key + JSON.stringify(config) : key),
)

type Init = () => void

export const init: Init = () => {
  const localeLanguageTag = Localization.locale
  const isRTL = Localization.isRTL
  const languageUsed = translationGetters.hasOwnProperty(localeLanguageTag)
    ? localeLanguageTag
    : DEFAULT_LANGUAGE

  I18nManager.forceRTL(isRTL)

  i18n.defaultLocale = DEFAULT_LANGUAGE
  i18n.translations = {
    [localeLanguageTag]: translationGetters[languageUsed],
  }

  i18n.locale = localeLanguageTag
  i18n.fallbacks = true
}
