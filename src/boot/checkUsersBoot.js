import { boot } from 'quasar/wrappers';
import checkUsers from './checkUsers';

export default boot(() => {
  // Rufen Sie die Funktion beim Start der Anwendung auf
  checkUsers();

  // Rufen Sie die Funktion regelmäßig auf (z.B. alle 5 Minuten)
  setInterval(checkUsers, 5 * 60 * 1000); // 5 Minuten in Millisekunden
});
