const generatePassword = (setting) => {
	const characters = {
		number: '0 1 2 3 4 5 6 7 8 9',
		symbols: '! @ # $ % ^ & * ( ) _ - + = { [ } ] ; : < , > . ? /',
		capital: 'A B C D E F G H I J K L M N Ñ O P Q R S T U V W X Y Z',
		lowercase: 'a b c d e f g h i j k l m n ñ o p q r s t u v w x y z'
	}
	
	let finalCharacters = '';
	let password = '';

	for(let property in setting){
		if(setting[property] === true){
			finalCharacters += characters[property] + ' ';
		}
	}

	finalCharacters += characters.lowercase;
	finalCharacters = finalCharacters.trim();
	
	finalCharacters = finalCharacters.split(' ');

	for(let i = 0; i < setting.numberOfCharacters; i++){
		password += finalCharacters[Math.floor(Math.random() * finalCharacters.length)];
	}

	return password;
}

export default generatePassword;