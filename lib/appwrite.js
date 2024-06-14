import { Account, Avatars, Client, Databases, ID, Query } from 'react-native-appwrite';

export const appwriteConfig = { 
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: 'com.taskwise.android',
    projectId: '6644d12b0003b3865492',
    databaseId: '6644d5bb00272186dc5c',
    userCollectionId: '6644d5ec001d198e45e2',
    groupCollectionId: '6644d62b001f8946459e',
}

const {
    endpoint,
    platform,
    projectId,
    databaseId,
    userCollectionId,
    groupCollectionId,
} = appwriteConfig

const client = new Client();

client
    .setEndpoint(endpoint) // Your Appwrite Endpoint
    .setProject(projectId) // Your project ID
    .setPlatform(platform) // Your application ID or bundle ID.

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);


export const signIn = async (email, password)=>{
    try{
        const session = await account.createEmailPasswordSession(email, password);  
        return session;
    }
    catch(error){
        console.error(error);
        throw new Error(error);
    }
}

export const createUser = async (email, password, userName)=>{
    try {
        const newAccount = await account.create(
            ID.unique(),
            email, 
            password, 
            userName
        );
        if(!newAccount) throw new Error('Failed to create user');

        const avatarUrl = avatars.getInitials(userName)

        await signIn(email, password);

        const newUser = await databases.createDocument(
            databaseId,
            userCollectionId,
            ID.unique(),
            {
                accountId: newAccount.$id,
                email,
                userName,
                avatar: avatarUrl
            }
        )
        return newUser;

    } catch (error) {
        console.error(error);
        throw new Error(error);
    }


}

export const getCurrentUser = async ()=>{
    try {


        const currentAccount = await account.get();
        if(!currentAccount) throw new Error('Failed to get user');

        const currentUser = await databases.listDocuments(
            databaseId,
            userCollectionId, 
            [Query.equal('accountId', currentAccount.$id)]
        )
        console.log(currentUser);
        if(!currentUser) throw new Error('Failed to get user');

        return currentUser.documents[0];
    } catch (error) {
        throw new Error(error);
    }
}

export const getAllGroups = async (id)=>{
    try {

        const groups = await databases.listDocuments(
            databaseId,
            groupCollectionId
        )
        if(!groups) throw new Error('Failed to get groups');

        const filteredData = groups.documents.filter(item =>
            item.users.some(user => user.$id === id)
        );
        console.log('this is group users',groups.documents[0].users)
        console.log('this is filtered data',filteredData, 'this is id', id)
        return filteredData;
    } catch (error) {
        console.error(error);
        throw new Error(error);
    }
}
