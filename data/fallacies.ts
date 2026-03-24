export type Fallacy = {
    id: string;
    name: string;
    technicalName: string;
    definition: string;
    example: string;
};

// Siempre usar las 4 falacias centrales sin importar el modo.
export const fallacies: Fallacy[] = [
    {
        id: "f1",
        name: "Ataque personal",
        technicalName: "Ad hominem",
        definition: "Atacar a la persona en vez de responder el argumento.",
        example: "“No le creas, ni terminó la facultad”"
    },
    {
        id: "f2",
        name: "Hombre de paja",
        technicalName: "Straw man",
        definition: "Deformar lo que dijo el otro para refutar una versión más débil.",
        example: "“Ah, o sea que querés prohibir toda la tecnología”"
    },
    {
        id: "f3",
        name: "Falso dilema",
        technicalName: "Falsa dicotomía",
        definition: "Presentar dos opciones como si no hubiera más.",
        example: "“O apoyás esto o estás contra el progreso”"
    },
    {
        id: "f4",
        name: "Generalización apresurada",
        technicalName: "Hasty generalization",
        definition: "Sacar una conclusión general por pocos casos.",
        example: "“Vi dos casos, así que siempre pasa lo mismo”"
    }
];

export const getFallacies = (): Fallacy[] => {
    return fallacies;
};
