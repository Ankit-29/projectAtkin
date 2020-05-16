export interface IQuestion {
    _id: string;
    qId?: number;
    title: string;
    question: string;
    categories: string[];
    testCases: {
        testCase: string;
        answer: string;
    }[];
    level: number;
    type: number;
    active?: number;
}
