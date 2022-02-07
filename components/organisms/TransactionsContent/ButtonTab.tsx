import cx from 'classnames';

interface ButtonTabProps {
    title: string,
    isActive?: boolean,
    href: string,
    filter: 'success' | 'pending' | 'failed' | '*'
}

export default function ButtonTab(props: Partial<ButtonTabProps>) {
  const { title, isActive, href, filter } = props;
  const activeBtn = cx({
    'btn btn-status rounded-pill text-sm me-3': true,
    'btn-active': isActive,
  })
  return (
    <a data-filter={filter} href={href} className={activeBtn}>
      {title}
    </a>
  );
}
