export interface ISubjectItem {
    id: number;
    img: string;
    title: string;
    shortDescription: string;
    author: string;
    progress: {
        current: number;
        all: number;
    };
}
