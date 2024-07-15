import api from './apiConfig'


// Obtenir tous les messages
export const getMessages = async () => {

    try {
        // Appel de l'API pour obtenir tous les messages
        const response = await api.get('/chats')
        return response.data.chats // Retourne les messages obtenus de l'API

    } catch (error) {
        console.error('Erreur lors de l\'obtention des messages', error)
    }
}
