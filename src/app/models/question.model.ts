export interface IQuestion {
    _id: string;
    qId?: number;
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
