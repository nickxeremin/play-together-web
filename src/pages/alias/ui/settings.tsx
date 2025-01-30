import { Header } from "@/widgets/layout/ui"
import { CreateAliasRoomForm } from "@/features/alias/ui"

function AliasSettingsPage() {
    return (
        <div className="flex flex-grow flex-col gap-4 p-4">
            <Header title="Элиас" backUrl="/" />

            <div className="flex flex-grow flex-col items-center justify-center p-4">
                <CreateAliasRoomForm />
            </div>
        </div>
    )
}

export default AliasSettingsPage
