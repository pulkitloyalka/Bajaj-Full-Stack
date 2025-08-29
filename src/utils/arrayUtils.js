module.exports = {
    getEvenNumbers: function(arr) {
        return arr.filter(num => typeof num === 'number' && num % 2 === 0);
    },
    
    getOddNumbers: function(arr) {
        return arr.filter(num => typeof num === 'number' && num % 2 !== 0);
    },
    
    getAlphabets: function(arr) {
        return arr.filter(item => typeof item === 'string' && /^[a-zA-Z]+$/.test(item));
    },
    
    getSpecialCharacters: function(arr) {
        return arr.filter(item => typeof item === 'string' && /[^a-zA-Z0-9]/.test(item));
    },
    
    calculateSum: function(arr) {
        return arr.reduce((sum, num) => {
            if (typeof num === 'number') {
                return sum + num;
            }
            return sum;
        }, 0);
    },
    
    concatenateStrings: function(arr) {
        return arr.filter(item => typeof item === 'string').join('');
    }
};