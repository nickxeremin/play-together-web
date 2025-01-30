import { IconChevronLeft } from "@tabler/icons-react"
import { Link, useParams } from "react-router"

import RoomConnectionProvider from "@/app/providers/room-connection"
import Words from "@/features/alias/ui/words"
import { cn } from "@/shared/lib/utils"
import { buttonVariants } from "@/shared/ui/button"
import { Separator } from "@/shared/ui/separator"

function AliasPlaygroundPage() {
    const { roomId } = useParams()

    if (!roomId) {
        return null
    }

    return (
        <RoomConnectionProvider roomId={roomId}>
            <div className="flex h-screen w-screen flex-col gap-4 p-4">
                <div className="flex items-center gap-2">
                    <Link
                        to="/"
                        className={cn(
                            buttonVariants({
                                variant: "ghost",
                                size: "icon",
                            })
                        )}
                    >
                        <IconChevronLeft strokeWidth={3} className="size-6" />
                    </Link>

                    <div className="flex flex-col">
                        <h1 className="text-[3rem] font-extrabold leading-none text-brand-title">
                            Элиас
                        </h1>
                    </div>
                </div>

                <Separator />

                <div className="flex size-full flex-col items-center justify-center">
                    <Words />
                </div>
            </div>
        </RoomConnectionProvider>
    )
}

// function Teams() {
//     return (
//         <div className="flex gap-4">
//             <div className="h-[160px] w-[320px] rounded border-2 bg-black">
//                 <div className="border-b-2 bg-red-800/20 p-2">
//                     <p className="text-lg font-bold text-red-600">
//                         Лесные эльфы
//                     </p>
//                 </div>
//                 <ul className="flex flex-col gap-2 p-2 font-medium">
//                     <li className="flex items-center gap-1.5 text-sm">
//                         <span className="size-2 rounded-full bg-red-600" />
//                         Serial killer
//                     </li>
//                     <li className="flex items-center gap-1.5 text-sm">
//                         <span className="size-2 rounded-full bg-red-600" />
//                         СамыйКрутойНик
//                     </li>
//                 </ul>
//             </div>
//             <div className="h-[160px] w-[320px] rounded border-2 bg-black">
//                 <div className="border-b-2 bg-blue-800/20 p-2">
//                     <p className="text-lg font-bold text-blue-600">
//                         Саблезубые тигры
//                     </p>
//                 </div>
//                 <ul className="flex flex-col gap-2 p-2 font-medium">
//                     <li className="flex items-center gap-1.5 text-sm">
//                         <span className="size-2 rounded-full bg-blue-600" />
//                         KorbenDallas
//                     </li>
//                     <li className="flex items-center gap-1.5 text-sm">
//                         <span className="size-2 rounded-full bg-blue-600" />
//                         VoootTakIgrok
//                     </li>
//                 </ul>
//             </div>
//             <div className="h-[160px] w-[320px] rounded border-2 bg-black">
//                 <div className="border-b-2 bg-muted p-2">
//                     <p className="text-lg font-bold">Нераспределившиеся</p>
//                 </div>
//                 <ul className="flex flex-col gap-2 p-2 font-medium">
//                     <li className="flex items-center gap-1.5 text-sm">
//                         <span className="size-2 rounded-full bg-accent" />
//                         Some user
//                     </li>
//                 </ul>
//             </div>
//         </div>
//     )
// }

// function Chat() {
//     return <div className="h-[240px] w-[400px] rounded border-2"></div>
// }

export default AliasPlaygroundPage
