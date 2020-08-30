import moment from 'moment';

export default (date, format) => {
    try {
        const timeFormat = format || 'HH:mm:ss';
        return date ? moment(date).format(timeFormat) : '-';
    } catch (e) {
        return '-';
    }
};
