export interface IEditor {
    content: string;
    options: {
        isCodeEditor: boolean;
        languageId?: number;
    };
}