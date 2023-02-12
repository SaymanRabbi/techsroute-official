import PocketBase from 'pocketbase';

const pb= new PocketBase(process.env.NEXT_PUBLIC_POCKETBASE);

export default pb;