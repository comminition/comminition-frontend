import GitHubCalendar from 'react-github-calendar';
import { useAppSelector } from 'redux/hooks';

const Calendar = () => {
  const username = useAppSelector((state) => state.profile.nickname);

  if (!username) return null;

  return <GitHubCalendar username={username} />;
};

export default Calendar;
