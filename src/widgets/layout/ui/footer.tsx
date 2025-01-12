import LanguageSelect from "./language-select"

function Footer() {
    return (
        <footer className="relative flex h-20 justify-between border-t-2 p-5 px-8">
            <div className="absolute inset-0 -z-10 size-full bg-black" />
            <div className="absolute inset-0 -z-10 size-full bg-[url('/src/assets/images/bg-dots.png')] opacity-[0.08]" />

            {/* <div className="flex flex-col">
                <div className="text-[1.25rem] font-bold text-brand-title">
                    Play Together
                </div>
            </div> */}
            <div />

            <LanguageSelect />
        </footer>
    )
}

export default Footer
