import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Image, Smile, SendHorizontal } from 'lucide-react'



export default function Chat() {
    return (
        <>
            <div className="max-w-2xl mx-auto mt-96">
                <form>
                    <label htmlFor="chat" className="sr-only">Your message</label>
                    <div className="flex items-center py-2 px-3 bg-gray-50 rounded-lg border ">
                        <Button variant="ghost" className="p-2">
                            <Image className="" />
                        </Button>
                        <Button variant="ghost" className="p-2">
                            <Smile />
                        </Button>
                        <textarea
                            id="chat"
                            rows="1"
                            className="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Votre message..."
                        />
                        <Input
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