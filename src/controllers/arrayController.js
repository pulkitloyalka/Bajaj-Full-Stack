class ArrayController {
    processArray(req, res) {
        const inputArray = req.body.data;

        if (!Array.isArray(inputArray)) {
            return res.status(400).json({ error: 'Input must be an array' });
        }

        // Helper functions
        const isNumeric = str => /^[0-9]+$/.test(str);
        const isAlpha = str => /^[a-zA-Z]+$/.test(str);
        const isSpecial = str => !isAlpha(str) && !isNumeric(str);

        // Numbers as strings
        const even_numbers = [];
        const odd_numbers = [];
        let sum = 0;

        // For alphabets and concat string
        const alphabets = [];
        let concatChars = [];

        // For special characters
        const special_characters = [];

        inputArray.forEach(item => {
            if (isNumeric(item)) {
                // Numbers as strings
                const num = parseInt(item, 10);
                if (num % 2 === 0) {
                    even_numbers.push(item);
                } else {
                    odd_numbers.push(item);
                }
                sum += num;
            } else if (isAlpha(item)) {
                alphabets.push(item.toUpperCase());
                concatChars = concatChars.concat(item.split(''));
            } else if (isSpecial(item)) {
                special_characters.push(item);
            }
        });

        // Prepare concat_string: all alphabet chars, reverse, alternating caps
        let concat_string = concatChars
            .reverse()
            .map((ch, idx) =>
                idx % 2 === 0
                    ? ch.toUpperCase()
                    : ch.toLowerCase()
            )
            .join('');

        // Prepare response
        return res.status(200).json({
            is_success: true,
            user_id: "Pulkit_Loyalka_04122003",
            email: "loyalkapulkit@gmail.com",
            roll_number: "22BCE0024",
            odd_numbers,
            even_numbers,
            alphabets,
            special_characters,
            sum: sum.toString(),
            concat_string
        });
    }
}

module.exports = ArrayController;