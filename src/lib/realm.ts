import { App } from 'realm-web';

const RealmApp: App = new App(import.meta.env.VITE_REALM_APP_ID || 'demo-zzgnu');
export default RealmApp;

