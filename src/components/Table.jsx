import { Link } from "react-router-dom";

const Table = ({ data }) => {
    let header = [
        ...new Set(
            data
                .map((item) => Object.keys(item))
                .join(",")
                .split(",")
        ),
    ].map((item) => (item === "id" ? "No" : item));

    return (
        <table>
            <thead>
                <tr>
                    {header.map((item, index) => (
                        <th key={index}>{item}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => (
                    <tr key={index}>
                        {header.map((head, index) => {
                            if (index === 1) {
                                return (
                                    <td key={index}>
                                        <Link
                                            to={`leader-detail/${item["id"]}`}
                                        >
                                            {item[head]}
                                        </Link>{" "}
                                    </td>
                                );
                            } else if (head === "No") {
                                return <td key={index}>{index + 1}</td>;
                            } else {
                                return <td key={index}>{item[head]}</td>;
                            }
                        })}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;
