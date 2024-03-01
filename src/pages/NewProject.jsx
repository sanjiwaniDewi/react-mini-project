import { useEffect, useState } from "react";
import projects from "../data/project";
import { Link } from "react-router-dom";

const NewProject = () => {
    const [project, setProject] = useState({});
    const [proname, setProname] = useState("");
    const [team, setTeam] = useState();
    const [deadline, setDeadline] = useState("");
    const [detail, setDetail] = useState("");
    const [message, setMessage] = useState("");

    let uuid = self.crypto.randomUUID();
    console.log(uuid);

    const handleProname = (e) => {
        setProname(e.target.value);
    };

    const handleTeam = (e) => {
        setTeam(e.target.options[e.target.selectedIndex].value);
    };
    const handleDeadline = (e) => {
        setDeadline(e.target.value);
    };
    const handleDetail = (e) => {
        setDetail(e.target.value);
    };

    const dateFormat = (date) => {
        return date.split("-").reverse().join("/");
    };

    const dayFormat = (date) => {
        const day = date.split("/");
        if (day[0].length < 2) {
            day[0] = 0 + day[0];
        }
        return day.join("/");
    };

    const handleProject = () => {
        let uuid = self.crypto.randomUUID();
        let start = new Date().toLocaleDateString();

        if (proname && team && team !== "Team" && deadline && detail) {
            setProject({
                id: uuid,
                name: proname,
                team: team,
                start: dayFormat(start),
                end: dateFormat(deadline),
                detail: detail,
            });
        } else {
            !proname ? setMessage("isi project name") : "";
            !team || team == "Team" ? setMessage("pilih team") : "";
            !deadline ? setMessage("pilih tanggal deadline") : "";
            !detail ? setMessage("masukkan detail project") : "";
        }
    };

    const handleProjectData = () => {
        if (
            Object.keys(project).length !== 0 &&
            projects.filter((item) => item.id === project.id).length === 0
        ) {
            projects.push(project);
        }

        setProname("");
        setDetail("");
        setDeadline("");
        setTeam("Team");
        setMessage("");
    };

    useEffect(() => {
        handleProjectData();
    }, [project]);

    return (
        <>
            <Link to="/project">Project</Link>
            <h1>project page</h1>
            <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                <input
                    type="text"
                    placeholder="project name"
                    onChange={handleProname}
                    value={proname}
                />
                {!proname && message ? <p>{message}</p> : ""}
                <select
                    name="team"
                    id="team"
                    onChange={handleTeam}
                    value={team}
                >
                    <option>Team</option>
                    <option value="Ayam">Ayam</option>
                    <option value="Kambing">Kambing</option>
                    <option value="Kerbau">Kerbau</option>
                    <option value="Sapi">Sapi</option>
                </select>
                {(!team || team === "Team") && message ? <p>{message}</p> : ""}
                <input type="date" onChange={handleDeadline} value={deadline} />
                {!deadline && message ? <p>{message}</p> : ""}
                <textarea
                    name="detail"
                    id="detail"
                    cols="30"
                    rows="10"
                    placeholder="Description"
                    onChange={handleDetail}
                    value={detail}
                ></textarea>
                {!detail && message ? <p>{message}</p> : ""}
                <input type="file" />
                <button type="submit" onClick={handleProject}>
                    Submit
                </button>
            </div>
        </>
    );
};

export default NewProject;
