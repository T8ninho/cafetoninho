import { useRouteError } from "react-router-dom"

export default function NotFound() {
	const erro = useRouteError();
	console.log(erro);

	return(
		<div className="NotFound">
			<h1>Oops!</h1>
			<p>Desculpe, parece que ocorreu um erro de gps.</p>
			<button className="NotFound-btn">
				<a href="/">Voltar</a>
			</button>
		</div>
	)
}