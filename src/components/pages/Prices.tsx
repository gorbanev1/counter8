import { useMemo } from 'react';
import { useSearchParams } from 'react-router';
import styles from './Prices.module.css';

const sneakers = [
  {
    manufacturer: 'Adidas',
    name: 'Adidas Yeezy Boost 350',
    price: 300,
    onSale: false,
  },
  {
    manufacturer: 'Adidas',
    name: 'Adidas Ultraboost 21',
    price: 180,
    onSale: true,
  },
  {
    manufacturer: 'Puma',
    name: 'Puma Suede Classic',
    price: 65,
    onSale: true,
  },
  {
    manufacturer: 'Puma',
    name: 'Puma RS-X',
    price: 110,
    onSale: false,
  },
  {
    manufacturer: 'Abibas',
    name: 'Abibas Alphabounce',
    price: 60,
    onSale: true,
  },
];

export const Prices = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const onlyOnSale = searchParams.get('onSale') === 'true';

  const filteredSneakers = useMemo(
    () => (onlyOnSale ? sneakers.filter((sneaker) => sneaker.onSale) : sneakers),
    [onlyOnSale],
  );

  const handleOnSale = () => {
    setSearchParams({ onSale: 'true' });
  };

  const handleReset = () => {
    setSearchParams({});
  };

  return (
    <div>
      <button onClick={handleOnSale} className={styles.buttonStyle}>
        On sale
      </button>
      <button onClick={handleReset} className={styles.buttonStyle}>
        Reset filter
      </button>

      <table className={styles.tableStyle}>
        <thead>
          <tr>
            <th className={styles.thStyle}>Manufacturer</th>
            <th className={styles.thStyle}>Name</th>
            <th className={styles.thStyle}>Price</th>
            <th className={styles.thStyle}>On Sale</th>
          </tr>
        </thead>
        <tbody>
          {filteredSneakers.map((sneaker) => (
            <tr key={sneaker.name}>
              <td className={styles.tdStyle}>{sneaker.manufacturer}</td>
              <td className={styles.tdStyle}>{sneaker.name}</td>
              <td className={styles.tdStyle}>${sneaker.price}</td>
              <td className={styles.tdStyle}>{sneaker.onSale ? 'Yes' : 'No'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
