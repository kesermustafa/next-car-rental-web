import Link from "next/link";

type Props = {
	name: string;
};

const BreadCrumb = ({ name }: Props) => {
	return (
		<div className={"flex items-center gap-1"}>
			<Link className="text-blue-500" href="/">
				Anasayfa
			</Link>
			<span >/</span>
			<span>Arabalar</span>
			<span >/</span>
			<span>{name}</span>
		</div>
	);
};

export default BreadCrumb;