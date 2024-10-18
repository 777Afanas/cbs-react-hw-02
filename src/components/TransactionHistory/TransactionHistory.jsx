import css from "./TransactionHistory.module.css";
import PropTypes from "prop-types";

export default function TransactionHistory({ items }) {
  return (
    <table className={css.table}>
      <thead className={css.nead}>
        <tr className={css.headLine}>
          <th className={css.colum}>Type</th>
          <th className={css.colum}>Amount</th>
          <th className={css.colum}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr className={css.tableColum} key={id}>
            <td className={css.typeTransaction}>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.array.isRequired,
//   id: PropTypes.string,
//   type: PropTypes.string.isRequired,
//   amount: PropTypes.string,
//   currency: PropTypes.string.isRequired,
};
