import MenuFooterOne from './MenuFooterOne';
import MenuFooterThree from './MenuFooterThree';
import MenuFooterTwo from './MenuFooterTwo';
import SideFooter from './SideFooter';

export default function Footer() {
  return (
    <section className="footer pt-50">
      <footer>
        <div className="container-fluid">
          <div className="row">
            <SideFooter />
            <div className="col-lg-8 mt-lg-0 mt-20">
              <div className="row gap-sm-0">
                <MenuFooterOne title="Company" />
                <MenuFooterTwo title="Support" />
                <MenuFooterThree />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
