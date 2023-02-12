import PocketBase from 'pocketbase';

const pocketbase = new PocketBase(process.env.NEXT_PUBLIC_POCKETBASE);

export default pocketbase;