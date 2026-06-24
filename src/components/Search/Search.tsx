import React from "react";
import "./Search.css"


interface SearchProps {
    value: string;
    loading: boolean;
    onChange: (value: string) => void;
    onSearch: () => void;
}

function Search({ value, loading, onChange, onSearch }: SearchProps) {
    return (
        <section className="search">
            <input
                className="search-input"
                type="text"
                placeholder="Введите СНИЛС"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        onSearch()
                    }
                }}
            />
            <button className="search-btn" 
            disabled={loading}
            onClick={onSearch}>
                {loading ? "Идёт поиск" : "Поиск"}
            </button>
        </section>
    );
}

export default Search;
