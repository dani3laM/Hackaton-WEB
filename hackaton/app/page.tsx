import GeneradorContrasena from "./components/generador-contrasena";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <GeneradorContrasena />
        </main>
    );
}
