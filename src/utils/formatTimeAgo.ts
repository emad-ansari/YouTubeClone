import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'
TimeAgo.addDefaultLocale(en)
export const formatTimeAgo = (postedDate: Date) => {

    const timeAgo = new TimeAgo('en-US')
    return timeAgo.format(postedDate)
}