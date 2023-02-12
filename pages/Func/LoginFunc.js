import pb from "../Lib/pocketbase";

const LoginFunc =async (email,password) => {
    const authData = await pb.collection('users').authWithPassword(email,password);
    return authData;
}

export default LoginFunc