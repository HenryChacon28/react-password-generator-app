import React, { useState, useEffect } from 'react';
import './App.css';
import styled from 'styled-components';
import { DecreaseButton, DecrementButton, CheckBoton, GenerateButton } from './component/buttons';
import generatePassword from './functions/GeneratePassword';

const App = () => {
	const [setting, changeSettings] = useState({
		numberOfCharacters: 7,
		symbols: true,
		number: true,
		capital: true
	});

	const [GeneratePassword, changeGeneratedPassword] = useState('');

	useEffect(() => {
		changeGeneratedPassword(generatePassword(setting));
	}, [setting]);

	const increaseNumberCharacters = () => {
		changeSettings((previousConfiguration) => {
			const newSettings = {...previousConfiguration};
			newSettings.numberOfCharacters += 1;
			return newSettings; 
		});
	}

	const diminishNumberCharacters = () => {
		if(setting.numberOfCharacters > 1){
			changeSettings((previousConfiguration) => {
				const newSettings = {...previousConfiguration};
				newSettings.numberOfCharacters -= 1;
				return newSettings; 
			});
		}
	}

	const toggleSymbols = () => {
		changeSettings((previousConfiguration) => {
			const newSettings = {...previousConfiguration};
			newSettings.symbols = !newSettings.symbols;
			return newSettings; 
		});
	}

	const toggleNumber = () => {
		changeSettings((previousConfiguration) => {
			const newSettings = {...previousConfiguration};
			newSettings.number = !newSettings.number;
			return newSettings; 
		});
	}

	const toggleCapital = () => {
		changeSettings((previousConfiguration) => {
			const newSettings = {...previousConfiguration};
			newSettings.capital = !newSettings.capital;
			return newSettings; 
		});
	}

	const onSubmit = (e) => {
		e.preventDefault();

		changeGeneratedPassword(generatePassword(setting));
	}

	return (
		<>
		<div className="container">
			<h1>HERRAMIENTA PARA GENERAR CONTRASEÑAS</h1>
			<br></br>
			<h1>Genere una contraseña segura</h1>
			<br></br>

			<form onSubmit={onSubmit}>
				<Row>
					<label>Numero de caracteres:</label>
					<Controls>
						<DecreaseButton click={diminishNumberCharacters} />
						<span>{setting.numberOfCharacters}</span>
						<DecrementButton click={increaseNumberCharacters} />
					</Controls>
				</Row>
				<Row>
					<label>¿Incluir Simbolos?</label>
					<CheckBoton selected={setting.symbols} click={toggleSymbols} />
				</Row>
				<Row>
					<label>¿Incluir Numeros?</label>
					<CheckBoton selected={setting.number} click={toggleNumber} />
				</Row>
				<Row>
					<label>¿Incluir Mayusculas?</label>
					<CheckBoton selected={setting.capital} click={toggleCapital} />
				</Row>
				<Row>
					<GenerateButton />
					<Input type="text" readOnly={true} value={GeneratePassword} />
				</Row>
			</form>
		</div>
		<div className="text">
			<h1>¿Por que una Contraseña Segura?</h1>
			<br></br>
			<p>
			Las contraseñas son una auténtica amenaza para la seguridad. <b>Un informe reciente revela que
			más del 80% de las vulnerabilidades relacionadas con ataques de hackers se debe a 
			contraseñas poco seguras o robadas</b>. Por eso, si desea proteger su información personal y 
			activos, crear contraseñas seguras es un primer gran paso. Es entonces cuando el generador de 
			contraseñas de LastPass puede ayudarle. Las contraseñas imposibles de descifrar son complejas 
			e incluyen varios tipos de caracteres (números, letras y símbolos). El uso de una contraseña
			distinta para cada sitio web o aplicación también ayuda a protegerse contra el ataque de hackers. 
			Esta herramienta de generación de contraseñas se ejecuta localmente en su ordenador Windows, 
			Mac o Linux, así como en su dispositivo iOS o Android. Las contraseñas que genera nunca se 
			envían por Internet.
			</p>
			<br></br>
			<h1>Las mejores recomendaciones sobre contraseñas</h1>
			<br></br>
			<p>
			1. <b>Utilice siempre una contraseña única</b> para cada cuenta que cree. El peligro de reutilizar contraseñas 
			es que tan pronto como un sitio web se enfrente a un problema de seguridad, a los hackers les resulta 
			muy fácil probar la misma combinación de nombre de usuario y contraseña en otros sitios web.
			</p>
			<br></br>
			<p>
			2. No utilice información personal en sus contraseñas. Los nombres, cumpleaños y direcciones postales
			pueden ser sencillos de recordar, pero también se pueden encontrar con facilidad en Internet y su uso 
			como contraseñas se debe evitar siempre para garantizar la máxima seguridad.
			</p>
			<br></br>
			<p>
			3. Asegúrese de que las contraseñas tengan como mínimo 12 caracteres y contengan letras, números
			y caracteres especiales. Algunas personas prefieren generar contraseñas de 14 o 20 caracteres.
			</p>
			<br></br>
			<p>
			4. <b>Si va a crear una contraseña maestra</b> que tendrá que recordar, intente usar frases o letras de su película 
			o canción favorita. Basta con que añada caracteres aleatorios, pero no los sustituya usando patrones sencillos.
			</p>
			<br></br>
			<p>
			5. Utilice un generador de contraseñas para generar y guardar sus contraseñas. 
			</p>
			<br></br>
			<p>
			6. <b>Evite las contraseñas débiles de uso habitual</b> como asd123, contraseña1, o Temp!. Entre los ejemplos 
			de contraseñas seguras se incluyen: <i>S&2x4S12nLS1*, JANa@sx3l2&s$, 49915w5$oYmH.</i>
			</p>
			<br></br>
			<p>
			7. Evite usar información personal para sus preguntas de seguridad; en su lugar, utilice LastPass para
			generar otra "contraseña" y guárdela como la respuesta a estas preguntas. ¿El motivo? Los hackers 
			pueden encontrar fácilmente parte de esta información, como el nombre de la calle en la que se crió 
			o de su mascota favorita, y la pueden usar en un ataque por fuerza bruta para acceder a sus cuentas.
			</p>
			<br></br>
			<p>
			8. Evite el uso de contraseñas similares en las que solo cambia una palabra o carácter. Esta práctica debilita 
			la seguridad de sus cuentas en varios sitios web.
			</p>
			<br></br>
			<p>
			9. <b>Cambie sus contraseñas cuanto tenga un motivo para ello</b>, como por ejemplo cuando las haya compartido 
			con alguien, tras la vulneración de un sitio web o si ha pasado más de un año desde la última vez que las 
			actualizó.
			</p>
		</div>
		</>
	);
}
 
export default App;

const Row = styled.div`
	margin-bottom: 40px;
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 10px;
`;

const Controls = styled.div`
	display: flex;
	justify-content: space-between;
	text-align: center;

	& > * {
		flex: 1;
	}

	span {
		line-height: 40px;
		background: #483dd8;
	}
`;

const Input = styled.input`
	width: 100%;
	background: none;
	border-radius: 4px;
	border: 1px solid rgba(255,255,255, .25);
	color: #1C0219;
	height: 40px;
	line-height: 40px;
	cursor: pointer;
	transition: all .3s ease;

	&:hover {
		border: 1px solid rgba(255,255,255, .50);
	}

	&::selection {
		background: #212139;
	}

	&::-moz-selection {
		background: #212139;
	}
`;