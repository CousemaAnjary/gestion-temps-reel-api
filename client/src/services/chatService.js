import api from './config/apiConfig'


// Obtenir tous les messages
export const getMessages = async () => {

    try {
        // Appel de l'API pour obtenir tous les messages
        const response = await api.get('/chats')
        return response.data.chats || [] // Retourne les messages obtenus de l'API

    } catch (error) {
        console.error('Erreur lors de l\'obtention des messages', error)
    }
}


// Créer un message
export const createMessage = async (messageData) => {

    try {
        // Appel de l'API pour créer un message
        const response = await api.post('/chat', messageData)
        return response.data // Retourne les données du message créé

    } catch (error) {
        console.error('Erreur lors de la création du message', error)
    }
}
