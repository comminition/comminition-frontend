import { useRef } from 'react';

interface IProp {
  username: string | undefined;
}

const GithubCalendar = ({ username }: IProp) => {
  const calendarRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={calendarRef}>
      <img src={`https://ghchart.rshah.org/${username}`} alt="잔디" />
    </div>
  );
};

export default GithubCalendar;
