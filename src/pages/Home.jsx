import { useEffect, useState } from "react";
import Table from "../components/Table";
import axios from "axios";
import Pagination from "../components/Pagination";

const Home = () => {
    const [leader, setLeader] = useState([]);
    const [page, setPage] = useState(1);

    const handleDataLeader = (page) => {
        axios
            .get(`https://reqres.in/api/users?page=${page}`)
            .then((res) => {
                const dataLead = [];
                res.data.data.map((item) => {
                    const data = {
                        id: item.id,
                        name: `${item.first_name} ${item.last_name}`,
                        email: item.email,
                    };

                    dataLead.push(data);
                });
                setLeader(dataLead);
            })
            .catch((err) => console.log(err));
    };

    const handlePagination = (num) => {
        setPage(num);
    };

    useEffect(() => {
        handleDataLeader(page);
    }, [page]);

    return (
        <>
            <h1>ini Homepage</h1>

            <Table data={leader} />

            <Pagination
                page={page}
                total={2}
                handlePagination={handlePagination}
            />
        </>
    );
};

export default Home;
