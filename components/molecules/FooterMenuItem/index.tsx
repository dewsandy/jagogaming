import Link from 'next/link';

interface FooterMenuItemProps {
    href: string;
    title: string
}
export default function FooterMenuItem(props: Partial<FooterMenuItemProps>) {
  const { href = '/', title } = props;
  return (
    <li className="mb-6">
      <Link href={href}>
        <a className="text-lg color-palette-1 text-decoration-none">{title}</a>
      </Link>
    </li>
  );
}
