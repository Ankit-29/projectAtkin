export const CONSTANT = {
    APIURL: 'http://localhost:3000/',
    CkeditorConfig: {
        height: 200,
        toolbar: {
            items: [
                // 'Heading', '|',
                'fontFamily', 'fontSize', 'fontColor', 'fontBackgroundColor', '|',
                'bold', 'italic', 'underline', 'subscript', 'superscript', '|',
                'imageUpload', 'link', '|',
                'bulletedList', 'numberedList', 'indent', 'outdent', 'table', '|',
                'codeBlock', 'specialCharacters',
            ],
            shouldNotGroupWhenFull: true,
        },
        codeBlock: {
            languages: [
                { language: 'plaintext', label: 'Plain text' }, // The default language.
                { language: 'c', label: 'C' },
                { language: 'cs', label: 'C#' },
                { language: 'cpp', label: 'C++' },
                { language: 'css', label: 'CSS' },
                { language: 'diff', label: 'Diff' },
                { language: 'html', label: 'HTML' },
                { language: 'java', label: 'Java' },
                { language: 'javascript', label: 'JavaScript' },
                { language: 'php', label: 'PHP' },
                { language: 'python', label: 'Python' },
                { language: 'ruby', label: 'Ruby' },
                { language: 'typescript', label: 'TypeScript' },
                { language: 'xml', label: 'XML' }
            ]
        }
    },

    LEVEL: [
        { id: 1, label: 'Easy' },
        { id: 2, label: 'Medium' },
        { id: 3, label: 'Hard' }
    ],
    // tslint:disable-next-line: max-line-length
    TOKEN: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsInVzZXJJZCI6IjVlYmM2OTk2OWVjMzMzNzllMmUxZDRjZiIsIm5hbWUiOiJBZG1pbiIsInR5cGUiOjEsImlhdCI6MTU4OTQwNjQxMiwiZXhwIjoxNjIwOTQyNDEyfQ.bOE11ak_QLuUcVZZPG_VyZV8k1T-4KmdxJRtzGIzxK4',
};


