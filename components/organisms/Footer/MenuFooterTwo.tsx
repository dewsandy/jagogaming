import FooterMenuItem from '../../molecules/FooterMenuItem';

interface MenuFooterTwoProps {
    title: string
}
export default function MenuFooterTwo(props: Partial<MenuFooterTwoProps>) {
  const { title } = props;
  return (
    <div className="col-md-4 col-6 mb-lg-0 mb-25">
      <p className="text-lg fw-semibold color-palette-1 mb-12">{title}</p>
      <ul className="list-unstyled">
        <FooterMenuItem title="Refund Policy" />
        <FooterMenuItem title="Unlock Rewards" />
        <FooterMenuItem title="Live Chatting" />
      </ul>
    </div>
  );
}
