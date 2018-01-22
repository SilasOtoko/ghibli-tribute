import Header from './Header';
import Footer from './Footer';

const Layout = props => (
  <div className="container">
    <Header />
    {props.children}
    <Footer />
  </div>
);

export default Layout;
