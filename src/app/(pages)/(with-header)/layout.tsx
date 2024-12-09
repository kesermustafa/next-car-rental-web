
import React from "react";
import Header from "@/app/components/header";

type Props = {
	children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
	return (
		<div>
			<Header />
			{children}
		</div>
	);
};

export default Layout;