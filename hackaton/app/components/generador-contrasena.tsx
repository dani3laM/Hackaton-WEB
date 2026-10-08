"use client";

import { useCallback, useState, type ChangeEvent } from "react";

export default function GeneradorContrasena() {
    const [length, setLength] = useState(16);
    const [includeUppercase, setIncludeUppercase] = useState(true);
    const [includeLowercase, setIncludeLowercase] = useState(true);
    const [includeNumbers, setIncludeNumbers] = useState(true);
    const [includeSymbols, setIncludeSymbols] = useState(true);
    const [password, setPassword] = useState("");

    const handleLengthChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        setLength(Number(event.target.value));
    }, []);

    const generatePassword = useCallback(() => {
        const characterSets = [
            includeUppercase ? "ABCDEFGHIJKLMNOPQRSTUVWXYZ" : "",
            includeLowercase ? "abcdefghijklmnopqrstuvwxyz" : "",
            includeNumbers ? "0123456789" : "",
            includeSymbols ? "!@#$%^&*()_+[]{}|;:,.<>?" : "",
        ];
        const characters = characterSets.join("");

        if (!characters) {
            setPassword("");
            return;
        }

        let generatedPassword = "";
        for (let index = 0; index < length; index += 1) {
            generatedPassword += characters[Math.floor(Math.random() * characters.length)];
        }
        setPassword(generatedPassword);
    }, [length, includeUppercase, includeLowercase, includeNumbers, includeSymbols]);

    const copyToClipboard = useCallback(() => {
        if (password) void navigator.clipboard.writeText(password);
    }, [password]);

    return (
        <section style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <h1>PASSWORD GENERATOR</h1>
            <p>create strong and secure passwords to keep your account safe online.</p>
            <label style={{ display: "flex", flexDirection: "column" }}>
                Longitud: {length}
                <input type="range" min="4" max="64" value={length} onChange={handleLengthChange} />
            </label>
            <label style={{ display: "flex", flexDirection: "column" }}>
                <input type="checkbox" checked={includeUppercase} onChange={(event) => setIncludeUppercase(event.target.checked)} />
                Mayúsculas
            </label>
            <label style={{ display: "flex", flexDirection: "column" }}>
                <input type="checkbox" checked={includeLowercase} onChange={(event) => setIncludeLowercase(event.target.checked)} />
                Minúsculas
            </label>
            <label style={{ display: "flex", flexDirection: "column" }}>
                <input type="checkbox" checked={includeNumbers} onChange={(event) => setIncludeNumbers(event.target.checked)} />
                Números
            </label>
            <label style={{ display: "flex", flexDirection: "column" }}>
                <input type="checkbox" checked={includeSymbols} onChange={(event) => setIncludeSymbols(event.target.checked)} />
                Símbolos
            </label>
            <output>{password}</output>
            <button type="button" onClick={generatePassword}>Generar</button>
            <button type="button" onClick={copyToClipboard} disabled={!password}>Copiar</button>
        </section>
    );
}