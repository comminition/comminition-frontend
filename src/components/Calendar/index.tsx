import GitHubCalendar from 'react-github-calendar';

interface IProp {
  username: string | undefined;
}

const Calendar = ({ username }: IProp) => {
  if (!username) return null;

  return <GitHubCalendar username={username} />;
};

export default Calendar;
