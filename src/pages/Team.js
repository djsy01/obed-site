import React, { useState } from 'react';
import './Team.css'; // 필요한 CSS 파일
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Team = () => {
  const [filter, setFilter] = useState("all");

  const members = [
    {
      name: "박훈 목사",
      affiliation: "목사",
      positions: ["Pastor"],
      instagram: "https://www.instagram.com/holyforest.jpg",
      photo: "", // 사진 URL
    },
    {
      name: "김미정 집사",
      affiliation: "장년부",
      positions: ["Step"],
      instagram: "https://www.instagram.com/cat0925_",
      photo: "", // 사진 URL
    },
    {
      name: "오현명 집사",
      designation: "장년부",
      positions: ["Piano"],
      instagram: "",
      youtube: "",
      photo: "", // 사진 URL
    },
    {
      name: "엄인호",
      affiliation: "청년부",
      positions: ["Vocal", "Acoustic Guitar", "Electric Guitar", "Engineer"],
      instagram: "https://www.instagram.com/inho010804",
      youtube: "https://www.youtube.com/@djsy-r2c",
      photo: "/assets/people/inho.JPG", // 사진 URL
    },
    {
      name: "유근서",
      affiliation: "청년부",
      positions: ["Acoustic Guitar", "Electric Guitar"],
      photo: "", // 사진 URL
    },
    {
      name: "전예원",
      affiliation: "청년부",
      positions: ["Vocal"],
      instagram: "https://www.instagram.com/winnie_the_ron_02",
      photo: "", // 사진 URL
    },
    {
      name: "김정석",
      affiliation: "청년부",
      positions: ["Bass Guitar"],
      instagram: "https://www.instagram.com/_kjs_1127",
      photo: "", // 사진 URL
    },
    {
      name: "박상욱",
      affiliation: "청년부",
      positions: ["Bass Guitar", "Drum", "Engineer"],
      instagram: "https://www.instagram.com/drum_wook02",
      youtube: "https://youtube.com/channel/UC_vv_fm_8e3O8xTb5TbPKrg?si=5B5EEspQ7m8hhgYE",
      photo: "/assets/people/DrumWook.jpeg", // 사진 URL
    },
    {
      name: "김온유",
      affiliation: "청년부",
      positions: ["Vocal"],
      instagram: "https://www.instagram.com/onyourmusic",
      youtube: "https://www.youtube.com/@onyourmusic",
      photo: "", // 사진 URL
    },
    {
      name: "오종언",
      affiliation: "청년부",
      positions: ["Vocal", "Engineer"],
      instagram: "https://www.instagram.com/5_bells_05",
      photo: "", // 사진 URL
    },
    {
      name: "신지은",
      affiliation: "청년부",
      positions: ["Piano", "Synthesizer"],
      instagram: "https://www.instagram.com/_wldms.3",
      photo: "", // 사진 URL
    },
    {
      name: "마승빈",
      affiliation: "고등부",
      positions: ["Drum"],
      instagram: "https://www.instagram.com/z.sbbxn_",
      photo: "", // 사진 URL
    },
    {
      name: "신예솔",
      affiliation: "고등부",
      positions: ["Vocal"],
      instagram: "https://www.instagram.com/yz_sol5",
      youtube: "https://youtube.com/channel/UCvyHxOBm7RDwCo62pFBwVSA?si=eBgRDrWO0dP5sE9H",
      photo: "", // 사진 URL
    },
  ];

  // 필터링된 멤버 목록 생성
  const filteredMembers = members.filter(member =>
    filter.includes("all") || member.positions.some(pos => filter.includes(pos))
  );

  return (
    <section className="team-section">
      <div className="bible-verse">
        <blockquote>
          <p>“너희는 너희 하나님 여호와를 순종하며, 그를 경외하며 그 명령을 지키며<br/>
            그 목소리를 청종하며, 그를 섬기며 그에게 부종하고”</p>
          <cite>- 요한복음 14:27 -</cite>
        </blockquote>
      </div>

      <div className="team-description">
        <div className="highlight-box">빠르게 변화해가는 세상 속에서 주님을 향해 두려움을 내려놓고 목소리로 주님과 소통하는 찬양팀</div><br/>
        <div className="highlight-box">청중들과 함께 소통하며 예배의 중심이 주님께 내려놓는 찬양팀</div><br/>
        <div className="highlight-box">집회를 준비하는 과정에서 역할에 따라 무엇이 중요한지 고민하며, 다음 세대를 위로하고 함께 성장하기 위함</div><br/>
        <div className="highlight-box">주님의 사랑을 잊고 살아가는 사람들에게 “너희는 잊어도 그리스도이신 주님께서는 아직도 우릴 찾고 있다”는 것을 다시금 깨닫게 하기 위해</div>
      </div>

      <div className="team-member-section">
        <h2>팀원 소개</h2>

        {/* 필터 버튼 */}
        <div className="position-filter">
          <button className={`filter-btn ${filter.includes("all") ? "active" : ""}`} onClick={() => setFilter(["all"])}>All</button>
          <button className={`filter-btn ${filter.includes("Pastor") ? "active" : ""}`} onClick={() => setFilter(["Pastor"])}>Pastor</button>
          <button className={`filter-btn ${filter.includes("Vocal") ? "active" : ""}`} onClick={() => setFilter(["Vocal"])}>Vocal</button>
          <button className={`filter-btn ${filter.includes("Piano") || filter.includes("Synthesizer") ? "active" : ""}`} onClick={() => setFilter(["Piano", "Synthesizer"])}>Piano</button>
          <button className={`filter-btn ${["Acoustic Guitar", "Electric Guitar", "Bass Guitar"].some(pos => filter.includes(pos)) ? "active" : ""}`} onClick={() => setFilter(["Acoustic Guitar", "Electric Guitar", "Bass Guitar"])}>Guitar</button>
          <button className={`filter-btn ${filter.includes("Drum") ? "active" : ""}`} onClick={() => setFilter(["Drum"])}>Drum</button>
          <button className={`filter-btn ${["Step", "Engineer"].some(pos => filter.includes(pos)) ? "active" : ""}`} onClick={() => setFilter(["Step", "Engineer"])}>Step</button>
        </div>

        {/* 팀원 카드들 */}
        <div className="member-grid">
          {filteredMembers.map((member, index) => (
            <div className="member-card" key={index}>
              <img src={member.photo || "default-photo.jpg"} alt={member.name} className="member-photo" />
              <div className="member-info">
                <h3>{member.name}</h3>
                <p className="affiliation">{member.affiliation}</p>
                <p className="position">{member.positions.join(", ")}</p>
                <div className="social-links">
                  {member.instagram && (
                    <a href={member.instagram} target="_blank" rel="noopener noreferrer" className="icon-link">
                      <FontAwesomeIcon icon={faInstagram} size="lg" />
                    </a>
                  )}
                  {member.youtube && (
                    <a href={member.youtube} target="_blank" rel="noopener noreferrer" className="icon-link">
                      <FontAwesomeIcon icon={faYoutube} size="lg" />
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