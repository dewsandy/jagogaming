import FooterMenuItem from '../../molecules/FooterMenuItem';

export default function MenuFooterThree() {
  return (
    <div className="col-md-4 col-12 mt-lg-0 mt-md-0 mt-25">
      <p className="text-lg fw-semibold color-palette-1 mb-12">Connect</p>
      <ul className="list-unstyled">
        <FooterMenuItem title="hi@store.gg" />
        <FooterMenuItem title="team@store.gg" />
        <FooterMenuItem title="Surabaya" />
        <FooterMenuItem title="021 - 1122 - 9090" href="tel:02111229090" />
      </ul>
    </div>
  );
}
