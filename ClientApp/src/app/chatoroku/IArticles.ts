export interface IArticle {
    idArticle: number;
    title: string;
    paragraphs: IParagraph[];
}

export interface IParagraph {
    idParagraph: number;
    title: string;
    idArticle: number;
    image: string | null;
    text: string;
}
