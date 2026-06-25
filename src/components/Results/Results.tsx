import type { Patient } from "../../data/mockData";

import s from "./Results.module.scss"

interface ResultsProps {
    patient: Patient | null;
    error: string;
    loading: boolean;
}

function ResultsContent({ patient, error, loading }: ResultsProps) {
    if (error) return <p className={s.result__error}>{error}</p>;

    if (loading) return <p>"Загрузка..."</p>;

    if (!patient) return <p>"Введите СНИЛС и нажмите «Поиск»"</p>;

    return (
        <>
            <h3 className={s.result__title}>Результаты</h3>
            <p className={s.result__patient}>Пациент: {patient.name}</p>
            {!patient.analyses || patient.analyses.length === 0 ? (
                <p>У пациента нет лабораторных исследований</p>
            ) : (
                <>
                    <p>Найдено: {patient.analyses.length} анализов</p>
                    <table className={s.result__table}>
                        <thead>
                            <tr>
                                <th>Показатель</th>
                                <th>Результат</th>
                                <th>Норма</th>
                            </tr>
                        </thead>
                        <tbody>
                            {patient.analyses.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.name}</td>
                                    <td>{item.result}</td>
                                    <td>{item.norm}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </>
            )}
        </>
    );
}

function Results(props: ResultsProps) {
    return (
        <section className={s.result}>
            <ResultsContent {...props} />
        </section>
    );
}

export default Results;
