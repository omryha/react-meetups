import NewMeetupForm from '../components/meetups/NewMeetupForm';
import { useHistory } from 'react-router-dom';
const BASE_URL =
  'https://react-getting-started-25a0a-default-rtdb.firebaseio.com/meetups.json';

const NewMeetupPage = () => {
  const history = useHistory();

  function addMeetupHandler(meetupData) {
    const res = fetch(BASE_URL, {
      method: 'POST',
      body: JSON.stringify(meetupData),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(() => {
      history.replace('/');
    });
  }
  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
};

export default NewMeetupPage;
