import cx from 'classnames';

interface TableRowProps {
    title: string,
    categories: string,
    item: number,
    price: number,
    status: 'Pending' | 'Success' | 'Failed',
    image: string
}
export default function TableRow(props: TableRowProps) {
  const {
    title, categories, item, price, status, image,
  } = props;
  const classNames = cx({
    'float-start icon-status': true,
    pending: status === 'Pending',
    success: status === 'Success',
    failed: status === 'Failed',
  });
  return (
    <tr className="align-middle">
      <th scope="row">
        <img
          className="float-start me-3 mb-lg-0 mb-3"
          src={`/img/${image}.png`}
          width={80}
          height={60}
          alt="Game Thumbnail"
        />
        <div className="game-title-header">
          <p className="game-title fw-medium text-start color-palette-1 m-0">{title}</p>
          <p className="text-xs fw-normal text-start color-palette-2 m-0">{categories}</p>
        </div>
      </th>
      <td>
        <p className="fw-medium color-palette-1 m-0">
          {item}
          {' '}
          Gold
        </p>
      </td>
      <td>
        <p className="fw-medium text-start color-palette-1 m-0">
          Rp
          {' '}
          {price}
        </p>
      </td>
      <td>
        <div>
          <span className={classNames} />
          <p className="fw-medium text-start color-palette-1 m-0 position-relative">
            {status}
          </p>
        </div>
      </td>
    </tr>
  );
}
