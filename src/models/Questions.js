/**
 * Wrapper for interacting with Polls API using Promises for all operations
 */
const baseURL = 'https://polls.apiblueprint.org';
let preloadedQuestions = [];

export const Questions = {
    all: () => {
        console.log('all preloadedQuestions', preloadedQuestions);
        if (preloadedQuestions.length > 0) {
            return new Promise( resolve => resolve(preloadedQuestions));
        } else {
            return fetch(`${baseURL}/questions`)
                .then( res => res.json())
                .then( questions => {
                    preloadedQuestions = questions.map(question => {
                        return Object.assign(question, {
                            id: question.url.match(/questions\/([0-9]+)/)[1]
                        });
                    });
                    return preloadedQuestions;
                });
        }
    },

    detail: (questionId) => {
        console.log('detail preloadedQuestions', preloadedQuestions);
        return new Promise( (resolve, reject) => {
            const question = preloadedQuestions.find(question => question.id === questionId);
            if (question) {
                resolve(question);
            } else {
                reject(Error('Question not found'));
            }
        });
    },

    castVote: (questionId, choiceId) => {
        return fetch(`${baseURL}/questions/${questionId}/choices/${choiceId}`, {
            method: 'POST',
            mode: 'cors',
            redirect: 'follow',
            headers: new Headers({
                'Content-Length': '0'
            })
        }).then( () => Questions.all());
    }
};
