export interface Obraz {
    id: string;
    title: string;
    galeriaGrupa: {
        obraz: {
            node: {
                sourceUrl: string;
                altText?: string;
            };
        };
        tytul: string;
        opis: string;
        kategoria: string[];
        dostepnosc: boolean;
    };
}

export interface ImageSectionProps {
    galeriaGrupa: {
        tytul: string;
        opis: string;
        dostepnosc: boolean;
        obraz: {
            node: {
                sourceUrl: string;
                altText: string;
            };
        };
    };
}
