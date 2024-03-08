import Link from 'next/link'

export default function NotFound() {
    return (
        <main className='py-20 flex flex-col items-center justify-center'>
            <div className='container mx-auto text-center flex flex-col'>
                <h1 className='text-8xl font-bold'>404</h1>
                <h2 className='text-3xl font-light'>No se encontro la página</h2>
                <Link href="/" className='mt-10 underline'>
                    Regresar al inicio
                </Link>
            </div>
        </main>
    )
}