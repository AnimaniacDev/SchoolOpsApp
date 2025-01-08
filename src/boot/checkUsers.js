import { defineBoot } from '#q-app/wrappers'
import { database } from './firebase';
import { ref as dbRef, get, child, remove } from 'firebase/database';

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli-vite/boot-files
defineBoot(async (/* { app, router, ... } */) => {
  // something to do
})

const checkUsers = async () => {
  try {
    // Referenz zur Benutzerliste in der Realtime Database
    const usersRef = dbRef(database, 'users');
    const usersSnapshot = await get(usersRef);
    const usersData = usersSnapshot.val();

    if (usersData) {
      const userIds = Object.keys(usersData);

      // Überprüfen Sie jeden Benutzer, ob er online ist
      for (const userId of userIds) {
        const userRef = child(usersRef, userId);
        const userSnapshot = await get(userRef);
        const userData = userSnapshot.val();

        if (userData && !userData.online) {
          await remove(userRef);
          console.log(`Removed user ${userId} from the database`);
        }
      }
    }
  } catch (error) {
    console.error('Error checking users:', error);
  }
};

export default checkUsers;
