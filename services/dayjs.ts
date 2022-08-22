import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime.js'
import customParseFormat from 'dayjs/plugin/customParseFormat.js'
import 'dayjs/locale/en'

dayjs.extend(relativeTime)
dayjs.extend(customParseFormat)

dayjs.locale('en')

export default dayjs
