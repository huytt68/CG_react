import {Link} from "react-router-dom";

const Navbar = () => {
	return (
		<>
			<h2>
				<Link to={'/student'}>Student</Link> |
				<Link to={'/country'}>Country</Link> |
				<Link to={'/fproduct'}>FProduct</Link> |
				<Link to={'/testfunccomponent'}>FuncComponent</Link> |
				<Link to={'/covid'}>Covid</Link> |
				<Link to={'/product'}>Product</Link> |
				<Link to={'/calculator'}>Calculator</Link> |
				<Link to={'/personlist'}>PersonList</Link> |
				<Link to={'/hienmang'}>HienMang</Link> |
				<Link to={'/classsample'}>ClassSample</Link> |
			</h2>
			<hr/>
		</>
	)
}

export default Navbar;