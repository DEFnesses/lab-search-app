import React from "react";
import "./Results.css";

import type { Patient } from "../../data/mockData";

interface ResultsProps {
    patient: Patient | null;
    error: string;
    loading: boolean;
}

function Results({ patient, error, loading }: ResultsProps) {
    if (error) {
        return (
            <section className="result">
                <p className="error-message">{error}</p>
            </section>
        );
    }

    if (!patient) {
        return (
            <section className="result">
                {loading ? "Загрузка..." : "Введите СНИЛС и нажмите «Поиск»"}
            </section>
        );
    }

    if (!patient.analyses || patient.analyses.length === 0) {
        return (
            <section className="result">
                <h3 className="result-title">Результаты</h3>
                <p className="result-patient">Пациент: {patient.name}</p>
                <p>У пациента нет лабораторных исследований</p>
            </section>
        );
    }

    return (
        <section className="result">
            <h3 className="result-title">Результаты</h3>
            <p className="result-patient">Пациент: {patient.name}</p>
            <p>Найдено: {patient.analyses.length} анализов</p>
            <table className="result-table">
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
        </section>
    );
}

export default Results;
