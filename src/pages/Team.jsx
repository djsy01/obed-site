import React, { useState } from 'react';
import './Team.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Team = () => {
  const [filter, setFilter] = useState("all");
  const [worshipFilter, setWorshipFilter] = useState("");
  const [stepFilter, setStepFilter] = useState("");

  const members = [
    {
      name: "박훈 목사",
      affiliation: "목사",
      acount: ["Pastor"],
      positions: ["Pastor"],
      instagram: "https://www.instagram.com/holyforest.jpg",
      photo: "",
    },
    {
      name: "이기인 장로",
      affiliation: "장년부",
      acount: ["Elder"],
      positions: ["Elder"],
      instagram: "",
      youtube: "",
      photo: "/assets/people/Giin.jpeg",
    },
    {
      name: "김미정 집사",
      affiliation: "장년부",
      acount: ["Accounting"],
      positions: ["Accounting"],
      instagram: "https://www.instagram.com/cat0925_",
      photo: "",
    },
    {
      name: "엄인호",
      affiliation: "청년부",
      acount: ["Worship Leader"],
      positions: ["Vocal", "Acoustic Guitar", "Electric Guitar", "Engineer"],
      instagram: "https://www.instagram.com/inho010804",
      youtube: "https://www.youtube.com/@djsy-r2c",
      photo: "/assets/people/inho.JPG",
    },
    {
      name: "박상욱",
      affiliation: "청년부",
      acount: ["Worship Sub Leader"],
      positions: ["Bass Guitar", "Drum", "Engineer"],
      instagram: "https://www.instagram.com/drum_wook02",
      youtube: "https://youtube.com/channel/UC_vv_fm_8e3O8xTb5TbPKrg?si=5B5EEspQ7m8hhgYE",
      photo: "/assets/people/DrumWook.jpeg",
    },
    {
      name: "오현명 집사",
      affiliation: "장년부",
      acount: ["Worship"],
      positions: ["Piano"],
      instagram: "https://www.instagram.com/5hyunmy/",
      youtube: "",
      photo: "",
    },
    /*{
      name: "박민석",
      affiliation: "청년부",
      acount: ["Step"],
      positions: ["Media"],
      instagram: "https://www.instagram.com/min_mola_/",
      youtube: "",
      photo: "",
    },
    {
      name: "박세곤",
      affiliation: "청년부",
      acount: ["Step"],
      positions: ["Media"],
      instagram: "",
      youtube: "",
      photo: "",
    },
    {
      name: "선무진",
      affiliation: "청년부",
      acount: ["Step"],
      positions: ["Media"],
      instagram: "https://www.instagram.com/moojin9351/",
      youtube: "",
      photo: "",
    },
    {
      name: "김예섬",
      affiliation: "청년부",
      acount: ["Public Relations"],
      positions: ["Poster Making"],
      photo: "",
    },
    {
      name: "김태성",
      affiliation: "청년부",
      acount: ["Worship"],
      positions: ["Vocal", "Synthesizer", "Acoustic Guitar", "Electric Guitar", "Bass Guitar", "Engineer"],
      photo: "",
    },
    */
    {
      name: "유근서",
      affiliation: "청년부",
      acount: ["Worship"],
      positions: ["Acoustic Guitar", "Electric Guitar"],
      photo: "",
    },
    /*{
      name: "이태훈",
      affiliation: "청년부",
      acount: ["Step"],
      positions: ["Media"],
      instagram: "https://www.instagram.com/little_hun_0/",
      youtube: "",
      photo: "",
    },
    {
      name: "임서원",
      affiliation: "청년부",
      acount: ["Step"],
      positions: ["Media"],
      instagram: "https://www.instagram.com/seowon_01/",
      youtube: "",
      photo: "",
    },*/
    {
      name: "전예원",
      affiliation: "청년부",
      acount: ["Worship"],
      positions: ["Vocal"],
      instagram: "https://www.instagram.com/winnie_the_ron_02",
      photo: "",
    },
    {
      name: "김정석",
      affiliation: "청년부",
      acount: ["Worship"],
      positions: ["Bass Guitar"],
      instagram: "https://www.instagram.com/_kjs_1127",
      photo: "",
    },
    {
      name: "김온유",
      affiliation: "청년부",
      acount: ["Worship"],
      positions: ["Vocal"],
      instagram: "https://www.instagram.com/onyourmusic",
      youtube: "https://www.youtube.com/@onyourmusic",
      photo: "/assets/people/onnew.jpeg",
    },
    {
      name: "오종언",
      affiliation: "청년부",
      acount: ["Worship"],
      positions: ["Vocal", "Engineer"],
      instagram: "https://www.instagram.com/5_bells_05",
      photo: "/assets/people/Jongeon.jpeg",
    },
    {
      name: "신지은",
      affiliation: "청년부",
      acount: ["Worship"],
      positions: ["Piano", "Synthesizer"],
      instagram: "https://www.instagram.com/_wldms.3",
      photo: "",
    },
    {
      name: "마승빈",
      affiliation: "고등부",
      acount: ["Worship"],
      positions: ["Drum"],
      instagram: "https://www.instagram.com/z.sbbxn_",
      photo: "",
    },
    {
      name: "신예솔",
      affiliation: "고등부",
      acount: ["Worship"],
      positions: ["Vocal"],
      instagram: "https://www.instagram.com/yz_sol5",
      youtube: "https://youtube.com/channel/UCvyHxOBm7RDwCo62pFBwVSA?si=eBgRDrWO0dP5sE9H",
      photo: "/assets/people/yesol.jpeg",
    },
  ];

  const filteredMembers = members.filter((member) => {
    if (filter === "all") return true;

    if (filter === "leader") {
      return ["Pastor","Elder", "Accounting", "Secretary", "Worship Leader", "Worship Sub Leader"]
        .some(role => member.acount.includes(role));
    }

    if (filter === "worship") {
      const isWorshipLeader = member.acount.includes("Worship Leader");
      const isWorshipSubLeader = member.acount.includes("Worship Sub Leader");
      const hasWorshipPosition = member.positions.some(pos =>
        ["Vocal", "Piano", "Synthesizer", "Acoustic Guitar", "Electric Guitar", "Bass Guitar", "Drum", "Engineer"].includes(pos)
      );

      if (worshipFilter === "") {
        return isWorshipLeader || isWorshipSubLeader || hasWorshipPosition;
      } else if (worshipFilter === "Guitar") {
        return member.positions.some(pos =>
          ["Acoustic Guitar", "Electric Guitar", "Bass Guitar"].includes(pos)
        );
      } else if (worshipFilter === "Piano") {
        return member.positions.includes("Piano") || member.positions.includes("Synthesizer");
      } else {
        return member.positions.includes(worshipFilter);
      }
    }

    if (filter === "step") {
      if (stepFilter === "") {
        return member.positions.some(pos =>
          ["Media", "Public Relations"].includes(pos)
        );
      } else {
        return member.positions.includes(stepFilter);
      }
    }

    return false;
  });

  const handleMainFilter = (value) => {
    setFilter(value);
    setWorshipFilter("");
    setStepFilter("");
  };

  return (
    <section className="team-section">
      <div className="bible-verse">
        <blockquote>
          <p>“너희는 너희 하나님 여호와를 순종하며, 그를 경외하며 그 명령을 지키며<br />
            그 목소리를 청종하며, 그를 섬기며 그에게 부종하고”</p>
          <cite>- 요한복음 14:27 -</cite>
        </blockquote>
      </div>

      <div className="team-description">
        <div className="highlight-box">빠르게 변화해가는 세상 속에서 주님을 향해 두려움을 내려놓고 목소리로 주님과 소통하는 찬양팀</div><br />
        <div className="highlight-box">청중들과 함께 소통하며 예배의 중심이 주님께 내려놓는 찬양팀</div><br />
        <div className="highlight-box">집회를 준비하는 과정에서 역할에 따라 무엇이 중요한지 고민하며, 다음 세대를 위로하고 함께 성장하기 위함</div><br />
        <div className="highlight-box">주님의 사랑을 잊고 살아가는 사람들에게 “너희는 잊어도 그리스도이신 주님께서는 아직도 우릴 찾고 있다”는 것을 다시금 깨닫게 하기 위해</div>
      </div>

      <div className="team-member-section">
        <h2>팀원 소개</h2>

        <div className="position-filter">
          <button className={`filter-btn ${filter === "all" ? "active" : ""}`} onClick={() => handleMainFilter("all")}>All</button>
          <button className={`filter-btn ${filter === "leader" ? "active" : ""}`} onClick={() => handleMainFilter("leader")}>Leader</button>
          <button className={`filter-btn ${filter === "worship" ? "active" : ""}`} onClick={() => handleMainFilter("worship")}>Worship</button>
          <button className={`filter-btn ${filter === "step" ? "active" : ""}`} onClick={() => handleMainFilter("step")}>Step</button>
        </div>

        {filter === "worship" && (
          <div className="worship-filters">
            <button className={`filter-btn ${worshipFilter === "" ? "active" : ""}`} onClick={() => setWorshipFilter("")}>Worship All</button>
            <button className={`filter-btn ${worshipFilter === "Vocal" ? "active" : ""}`} onClick={() => setWorshipFilter("Vocal")}>Vocal</button>
            <button className={`filter-btn ${["Piano", "Synthesizer"].includes(worshipFilter) ? "active" : ""}`} onClick={() => setWorshipFilter("Piano")}>Piano</button>
            <button className={`filter-btn ${["Acoustic Guitar", "Electric Guitar", "Bass Guitar"].includes(worshipFilter) ? "active" : ""}`} onClick={() => setWorshipFilter("Guitar")}>Guitar</button>
            <button className={`filter-btn ${worshipFilter === "Drum" ? "active" : ""}`} onClick={() => setWorshipFilter("Drum")}>Drum</button>
            <button className={`filter-btn ${worshipFilter === "Engineer" ? "active" : ""}`} onClick={() => setWorshipFilter("Engineer")}>Engineer</button>
          </div>
        )}

        {filter === "step" && (
          <div className="step-filters">
            <button className={`filter-btn ${stepFilter === "" ? "active" : ""}`} onClick={() => setStepFilter("")}>Step All</button>
            <button className={`filter-btn ${stepFilter === "Media" ? "active" : ""}`} onClick={() => setStepFilter("Media")}>Media</button>
            <button className={`filter-btn ${stepFilter === "Public Relations" ? "active" : ""}`} onClick={() => setStepFilter("Public Relations")}>Public Relations</button>
          </div>
        )}

        <div className="member-grid">
          {filteredMembers.map((member, index) => (
            <div className="member-card" key={index}>
              <img src={member.photo || "default-photo.jpg"} alt={member.name} className="member-photo" />
              <div className="member-info">
                <h3>{member.name}</h3>
                <p className="acount">{member.acount.join(", ")}</p>
                <p className="affiliation">{member.affiliation}</p>
                <p className="position">{member.positions.join(", ")}</p>
                <div className="social-links">
                  {member.instagram && (
                    <a href={member.instagram} target="_blank" rel="noopener noreferrer" className="icon-link">
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                  )}
                  {member.youtube && (
                    <a href={member.youtube} target="_blank" rel="noopener noreferrer" className="icon-link">
                      <FontAwesomeIcon icon={faYoutube} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;