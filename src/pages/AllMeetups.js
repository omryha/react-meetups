import MeetupList from '../components/meetups/MeetupList';
import { useState, useEffect } from 'react';

const BASE_URL =
  'https://react-getting-started-25a0a-default-rtdb.firebaseio.com/meetups.json';

const AllMeetupsPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(BASE_URL)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = [];
        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetups.push(meetup);
        }
        setIsLoading(false);
        setLoadedMeetups(meetups);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <div>
      <MeetupList meetups={loadedMeetups} />
    </div>
  );
};

export default AllMeetupsPage;
