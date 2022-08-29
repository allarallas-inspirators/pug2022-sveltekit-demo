import { App } from 'realm-web';

const RealmApp: App = new App(import.meta.env.VITE_REALM_APP_ID || 'pug2022-jjdvq');
export default RealmApp;

