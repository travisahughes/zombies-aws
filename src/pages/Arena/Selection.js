import styled from '@emotion/styled';
import background from '../../assets/arena/arena-bg.png';
import bottomImage from '../../assets/arena/selection-bg.png';
import deckBorder from '../../assets/arena/border-for-deck.png';
import pokedEye from '../../assets/arena/poked-eye.png';
import grave from '../../assets/arena/grave.png';
import placeholder from '../../assets/arena/zombies/4100.png';
import lfg from '../../assets/arena/lfg.png';
import { useState } from 'react';
import { useHistory } from 'react-router';

const SelectionPageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)),
    url(${background});
  background-size: 100% 100%;
`;

const ContentContainer = styled.div`
  padding: 8% 10%;
`;
const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 640px;
`;

const MainText = styled.span`
  font-weight: 700;
  font-size: 24px;
  line-height: 100%;
  margin-bottom: 8px;
`;

const SubText = styled.span`
  font-weight: 700;
  font-size: 14px;
  line-height: 150%;
  /* or 21px */
`;

const GreenHighlight = styled.span`
  color: #ccee25;
`;

const DeckDivider = styled.img`
  width: 100%;
  z-index: 2;
  height: 51px;
  bottom: 220px;
  position: absolute;
`;

const BottomDeckContainer = styled.div`
  position: sticky;
  bottom: 0;
  height: 237px;
  background: linear-gradient(0deg, #311b32, #311b32), #2d0b3d;
  width: 100%;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Slot = styled.div`
  width: 120px;
  height: 174.67px;
  border: 1px solid #ab19ef;
  box-sizing: border-box;
  background: linear-gradient(0deg, #000000, #000000), url(cards-color.png);
  border-radius: 9px;
  margin: 0 2px;
`;

const SlotImage = styled.img`
  width: 100%;
  margin: auto;
  border-radius: 9px;
  cursor: pointer;
`;

const GraveImage = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 3;
`;

const PokedEyeImage = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 3;
`;

const CardContainer = styled.div`
  display: grid;
  row-gap: 16px;
  width: fit-content;
  column-gap: 16px;
  margin: auto;
  grid-template-columns: repeat(2, 1fr);

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(6, 1fr);
  }
  @media (min-width: 1441px) {
    grid-template-columns: repeat(8, 1fr);
  }
`;

const Card = styled.img`
  border-radius: 14px;
  cursor: pointer;
`;

const TabContainer = styled.div`
  display: flex;
`;

const Tab = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  padding-bottom: 8px;
  border-bottom: ${(props) => (props.active ? '3px solid #ccee25' : 'none')};
  width: fit-content;
  margin-right: 1rem;
  margin-top: 69px;
  margin-bottom: 30px;

  margin: 69px 1rem 30px 0;
  cursor: pointer;
`;

const SendMyTeam = styled.div`
  @media (min-width: 768px) {
    color: #000000;
    background-image: url(${lfg});
    width: 181px;
    height: 48px;
    font-weight: 700;
    line-height: 150%;
    margin-top: 24px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 10%;
    z-index: 5;
  }
`;

export default function SelectionPage() {
  const [tab, setTab] = useState(1);
  const [slot1, setSlot1] = useState(null);
  const [slot2, setSlot2] = useState(null);
  const [slot3, setSlot3] = useState(null);
  const [slot4, setSlot4] = useState(null);
  const [slot5, setSlot5] = useState(null);
  const history = useHistory();

  const assignSlot = (image) => {
    if (!slot1) {
      setSlot1(image);
    } else if (!slot2) {
      setSlot2(image);
    } else if (!slot3) {
      setSlot3(image);
    } else if (!slot4) {
      setSlot4(image);
    } else setSlot5(image);
  };
  return (
    <SelectionPageContainer>
      <ContentContainer>
        <TopContainer>
          <MainText>CHOOSE YOUR CHAMPIONS</MainText>
          <SubText>
            Recruit NFZs with the best stats to battle it out in the arena!{' '}
            <GreenHighlight>{'{stats info}'}</GreenHighlight>
          </SubText>
        </TopContainer>
        <TabContainer>
          <Tab active={tab === 1} onClick={() => setTab(1)}>
            Your Collection
          </Tab>
          <Tab active={tab === 2} onClick={() => setTab(2)}>
            Grunts
          </Tab>
        </TabContainer>
        <CardContainer>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
            <Card
              key={index}
              src={placeholder}
              onClick={() => assignSlot(placeholder)}
            />
          ))}
        </CardContainer>
      </ContentContainer>

      <BottomDeckContainer>
        <Slot>
          {slot1 && <SlotImage src={slot1} onClick={() => setSlot1(null)} />}
        </Slot>
        <Slot>
          {slot2 && <SlotImage src={slot2} onClick={() => setSlot2(null)} />}
        </Slot>
        <Slot>
          {slot3 && <SlotImage src={slot3} onClick={() => setSlot3(null)} />}
        </Slot>
        <Slot>
          {slot4 && <SlotImage src={slot4} onClick={() => setSlot4(null)} />}
        </Slot>
        <Slot>
          {slot5 && <SlotImage src={slot5} onClick={() => setSlot5(null)} />}
        </Slot>
        <PokedEyeImage src={pokedEye} />
        <GraveImage src={grave} />
        <DeckDivider src={deckBorder} />
        {slot1 && slot2 && slot3 && slot4 && slot5 && (
          <SendMyTeam onClick={() => history.push('/arena/battle')}>
            Send my team!
          </SendMyTeam>
        )}
      </BottomDeckContainer>
      {/* <FrontCover /> */}
    </SelectionPageContainer>
  );
}
