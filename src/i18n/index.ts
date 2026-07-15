import ru from './ru.json'
import en from './en.json'

type Locale = 'ru' | 'en'

const translations: Record<Locale, Record<string, string>> = { ru, en }

export function t(key: string, locale: Locale): string {
  return translations[locale]?.[key] ?? key
}

export { type Locale }
