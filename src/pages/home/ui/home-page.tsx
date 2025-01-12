import { homeSections } from "../model/home-sections"
import HomeSection from "./home-section"

function HomePage() {
    return (
        <div className="relative flex size-full flex-col gap-6 p-6">
            <div className="flex w-full flex-col">
                <h1 className="text-[4rem] font-extrabold leading-none text-brand-title">
                    Play Together
                </h1>
                <p></p>
            </div>

            <div className="w-full rounded-full border-2 border-dashed" />

            <div className="flex h-full items-center justify-around gap-8">
                <HomeSection homeSection={homeSections[0]} />

                <HomeSection homeSection={homeSections[1]} />
            </div>
        </div>
    )
}

export default HomePage
