import FooterMenuItem from '../../molecules/FooterMenuItem';

interface MenuFooterOneProps {
    title: string
}
export default function MenuFooterOne(props: Partial<MenuFooterOneProps>) {
  const { title } = props;
  return (
    <div className="col-md-4 col-6 mb-lg-0 mb-25">
      <p className="text-lg fw-semibold color-palette-1 mb-12">{title}</p>
      <ul className="list-unstyled">
        <FooterMenuItem title="About Us" />
        <FooterMenuItem title="Press Release" />
        <FooterMenuItem title="Terms Of Use" />
        <FooterMenuItem title="Privacy & Policy" />
      </ul>
    </div>
  );
}
