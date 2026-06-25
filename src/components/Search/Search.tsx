import { formatSnils, cleanSnils } from "../../utils/formatSnils";

import s from "./Search.module.scss"

interface SearchProps {
    value: string;
    loading: boolean;
    onChange: (value: string) => void;
    onSearch: () => void;
}

function Search({ value, loading, onChange, onSearch }: SearchProps) {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const input = e.target.value;
        const digits = cleanSnils(input); 
        onChange(digits); 
    };
    return (
        <section className={s.search}>
            <input
                className={s.search__input}
                type={"text"}
                placeholder="Введите СНИЛС"
                value={formatSnils(value)}
                onChange={handleChange}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        onSearch();
                    }
                }}
            />
            <button
                className={s.search__button}
                disabled={loading}
                onClick={onSearch}
            >
                {loading ? "Идёт поиск" : "Поиск"}
            </button>
        </section>
    );
}

export default Search;
