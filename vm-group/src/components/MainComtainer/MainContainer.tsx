
export interface Ichildren {
    children: React.ReactNode
}

export default function MainContainer({children} : Ichildren) {
    return <main>
{children}
    </main>
}