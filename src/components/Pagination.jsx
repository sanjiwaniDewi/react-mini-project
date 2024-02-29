// eslint-disable-next-line react/prop-types
const Pagination = ({ page, total, handlePagination }) => {
    const buttons = [];

    for (let index = 1; index <= total; index++) {
        buttons.push(
            <button
                disabled={page === index ? true : false}
                onClick={() => handlePagination(index)}
                key={index}
            >
                {index}
            </button>
        );
    }
    return <div>{buttons}</div>;
};
export default Pagination;
