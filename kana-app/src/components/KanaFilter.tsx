interface KanaFilterProps {
    availableGroups: string[];
    selectedGroups: string[];
    onChange: (groups: string[]) => void;
}

function KanaFilter({ availableGroups, selectedGroups, onChange }: KanaFilterProps) {
    const toggle = (group: string) => {
        const next = selectedGroups.includes(group)
            ? selectedGroups.filter((g) => g !== group)
            : [...selectedGroups, group];

        if (next.length === 0) return;
        onChange(next);
    };

    return (
        <div className="kana-filter">
            <span className="filter-label">Lignes :</span>
            {availableGroups.map((group) => (
                <button
                    key={group}
                    className={`filter-btn ${selectedGroups.includes(group) ? 'active' : ''}`}
                    onClick={() => toggle(group)}
                >
                    {group}
                </button>
            ))}
        </div>
    );
}

export default KanaFilter;