export const UseTodayDate = () => {
  const date = new Date();
  function formatDate(date: Date) {
    // const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];

    const day = date.getDate();
    const month = months[date.getMonth()];

    return `Today ${day} ${month}`;
  }
  return formatDate(date);
};
