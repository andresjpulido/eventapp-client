import "./breadcrumb.css";

export default function Breadcrumb(props) {
	return (
		<div className="breadcrumb">
			<div>{props.path}</div>
		</div>
	);
}
