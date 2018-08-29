import moment from 'moment';

export const formatDate = (date, format) => moment(date).format(format);

export const addSubtract = ({ date = {}, amount, type = 'y', format = 'YYYYMMDD' }) => {
  const sub = amount < 0 ? Math.abs(amount) : null;
  const add = moment(date).add(amount, type).format(format);
  const subtract = moment(date).subtract(sub, type).format(format);

  return amount > 0 ? add : subtract;
};
