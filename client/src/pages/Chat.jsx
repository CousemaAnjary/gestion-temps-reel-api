import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Image, Smile, SendHorizontal } from 'lucide-react'


export default function Chat() {
    /**
     * ! STATE (état, données) de l'application
     */


    /**
     * ! COMPORTEMENT (méthodes, fonctions) de l'application
     */



    /**
     * ! AFFICHAGE (render) de l'application
     */
    return (
        <>
            <div className="max-w-2xl mx-auto mt-96">

                <div id="chat" className="flex items-center py-2 px-3  rounded-lg border border-b-0 rounded-b-none">
                    <div className="flex items-center justify-between py-2 px-3 bg-gray-50 rounded-lg border">
                        <div className="flex items-center">
                            <span className="text-sm font-semibold">Bonjour</span>
                        </div>
                        <div className="text-xs text-gray-500 ml-5">12:00</div>
                    </div>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="flex items-center py-2 px-3 bg-gray-50 rounded-lg border rounded-t-none ">
                        <Button variant="ghost" className="p-2">
                            <Image className="" />
                        </Button>
                        <Button variant="ghost" className="p-2">
                            <Smile />
                        </Button>
                        <textarea
                            name="chat"
                            id="chat"
                            rows="1"
                            className="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Aa"
                        />
                        <Input
                            name="pseudo"
                            type="email"
                            placeholder="Pseudo"
                            className="w-32"
                        />
                        <Button variant="ghost" className="p-2 ml-3">
                            <SendHorizontal />
                        </Button>
                    </div>
                </form>
            </div>
        </>
    )
}