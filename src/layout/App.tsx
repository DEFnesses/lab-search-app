import { useState } from "react";
import s from "./App.module.scss";

import Header from "../components/Header/Header";
import Search from "../components/Search/Search";
import Results from "../components/Results/Results";
import { patients, type Patient } from "../data/mockData";

function App() {
    const [snils, setSnils] = useState("");
    const [patient, setPatient] = useState<Patient | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSearch = () => {
        if (isLoading) return;

        const cleanInput = snils.trim().replace(/\D/g, "");

        if (!cleanInput) {
            setError("Введите СНИЛС");
            setPatient(null);
            return;
        }

        setError("");
        setIsLoading(true);
        setTimeout(() => {
            const found = patients.find(
                (p) => p.snils.replace(/\D/g, "") === cleanInput,
            );

            if (found) {
                setPatient(found);
                setError("");
            } else {
                setError("Пациент с таким СНИЛС не найден");
                setPatient(null);
            }

            setIsLoading(false);
        }, 1500);
    };

    return (
        <>
            <div className={s.container}>
                <Header />
                <Search
                    value={snils}
                    onChange={setSnils}
                    onSearch={handleSearch}
                    loading={isLoading}
                />
                <Results patient={patient} error={error} loading={isLoading} />
            </div>
        </>
    );
}

export default App;
