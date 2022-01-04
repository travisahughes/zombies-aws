/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import teambg from '../assets/team_bg.jpg';
import twitter from '../assets/icons/twitter.png';
import ray from '../assets/team/ray.png';
import taylor from '../assets/team/taylor.png';
import sarah from '../assets/team/sarah.png';
import travis from '../assets/team/travis.png';
import ben from '../assets/team/ben.png';
import anna from '../assets/team/anna.png';
import jian from '../assets/team/jian.png';
import ed from '../assets/team/ed.png';
import boyscout from '../assets/team/boyscout.png';
import tylerhealmonger from '../assets/team/tyler-healmonger.png';
import andywmi from '../assets/team/andywmi.png';
import zeneca from '../assets/team/zeneca.png';
import styled from '@emotion/styled';

const MemberList = [
  {
    name: '@rayminbi | Raymond',
    image: ray,
    role: 'Founder, Strategy, Brand, Marketing, Partnerships',
  },
  {
    name: '@tdubs | Taylor',
    image: taylor,
    role: 'Founder, Tech',
  },
  {
    name: '@firestarteronibi | Sarah',
    image: sarah,
    role: 'Artist, Illustrator, Toy Designer',
  },
  {
    name: '@blood1n3 | Travis',
    image: travis,
    role: 'Development Lead',
  },
  {
    name: '@bibi | Ben',
    image: ben,
    role: 'Community Manager',
  },
  {
    name: '@bearheart | Anna',
    image: anna,
    role: 'UI / UX Designer',
  },
  {
    name: '@jianesis | Jian',
    image: jian,
    role: 'Frontend Developer',
  },
];

const ModList = [
  {
    name: '@eggbolt | Ed',
    image: ed,
    role: 'Discord Moderator & Community Development',
  },
  {
    name: '@Boyscout',
    image: boyscout,
    role: 'Discord Moderator & Community Development',
  },
  {
    name: '@Tyler',
    image: tylerhealmonger,
    role: 'Discord Moderator & Community Development',
  },
  {
    name: '@Healmonger',
    image: tylerhealmonger,
    role: 'Discord Moderator & Community Development',
  },
];

const AdvisorList = [
  {
    name: '@andywmi',
    image: andywmi,
    role: 'Research Advisor',
  },
  {
    name: '@Zeneca',
    image: zeneca,
    role: 'Advisor as part of Zeneca’s 333 Club',
  },
];

const MemberContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 160px;
  min-height: 260px;
`;

const Avatar = styled.img`
  width: 160px;
  height: 160px;
  border-radius: 50%;

  @media (min-width: 768px) {
    width: 160px;
    height: 160px;
  }
`;

const MemberName = styled.span`
  font-size: 20px;
  font-family: Teko;
  font-style: normal;
  font-weight: normal;
  margin: 0.5rem 0;
`;
const MemberRole = styled.span`
  font-size: 11px;
  line-height: 125%;
  text-align: center;
  color: #aff038;
`;

const Member = ({ name, image, role }) => {
  return (
    <MemberContainer>
      <Avatar src={image} alt="zombie" />
      <MemberName>{name}</MemberName>
      <MemberRole>{role}</MemberRole>
    </MemberContainer>
  );
};

const Row = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

let Team = (props) => {
  const teamwrap = css`
    background-color: #151515;

    .green-highlight {
      color: #aff038;
      font-weight: 700;
    }

    #team {
      padding-top: 64px;
      padding-bottom: 64px;
    }
  `;
  const team = css`
    color: white;

    h1 {
      font-family: teko;
      font-weight: 400;
      font-size: 45px;
      color: #ffffff;
      margin: 20px 0 0 0;
    }

    /* p {
      font-size: 14px;
      line-height: 24.5px;
      color: #b1b1b1;
    } */
  `;

  const members = css`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: stretch;
    font-size: 14px;
    flex: 1;
    color: #ffffff;
    /* @media (max-width: 640px) {
      flex-direction: column;
      align-items: center;
    } */
  `;

  return (
    <div css={teamwrap}>
      <div className="common-padding" id="team" css={team}>
        <h1>THE TEAM</h1>
        <div css={members}>
          {MemberList.map((member, index) => (
            <Member
              name={member.name}
              image={member.image}
              role={member.role}
              key={index}
            />
          ))}
        </div>
        <Row>
          <div
            style={{ width: '100%', maxWidth: '736px', marginRight: '32px' }}
          >
            <h1>MODS</h1>
            <div css={members}>
              {ModList.map((member, index) => (
                <Member
                  name={member.name}
                  image={member.image}
                  role={member.role}
                  key={index}
                />
              ))}
            </div>
          </div>

          <div style={{ width: '100%', maxWidth: '352px' }}>
            <h1>Advisors</h1>
            <div css={members}>
              {AdvisorList.map((member, index) => (
                <Member
                  name={member.name}
                  image={member.image}
                  role={member.role}
                  key={index}
                />
              ))}
            </div>
          </div>
        </Row>
      </div>
    </div>
  );
};

export default Team;
