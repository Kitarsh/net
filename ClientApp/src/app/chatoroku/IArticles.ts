export interface IArticle {
    title: string;
    paragraphs: IParagraph[];
}

export interface IParagraph {
    title: string;
    image: string | null;
    text: string;
}
