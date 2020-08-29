import moment from 'moment';

export default (date, format) => {
    try {
        const timeFormat = format || 'H:m:s';
        return date ? moment(date).format(timeFormat) : '-';
    } catch (e) {
        return '-';
    }
};
