import styled from '@emotion/styled';
import background from '../../assets/arena/arena-bg.png';
import bottomImage from '../../assets/arena/selection-bg.png';
import deckBorder from '../../assets/arena/border-for-deck.png';
import deckBorderMobile from '../../assets/arena/border-for-deck-mobile.png';
import pokedEye from '../../assets/arena/poked-eye.png';
import grave from '../../assets/arena/grave.png';
import placeholder from '../../assets/arena/zombies/4100.png';
import lfg from '../../assets/arena/lfg.png';
import lfgMobile from '../../assets/arena/lfg-mobile.png';
import lfgMobileDisabled from '../../assets/arena/lfg-mobile-disabled.png';
import axios from 'axios';
import { Spinner } from '../../Components/Spinner';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router';

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
`;

const SelectionPageContainer = styled.div`
  width: 100vw;
  /* height: 100vh;
  /* background: linear-gradient(0deg, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)), */
  /* url(${background}); */
  background-size: 100% 100%;
`;

const ContentContainer = styled.div`
  padding: 8% 5%;
  max-width: 1440px;
  min-height: 700px;
  margin: auto;

  @media (min-width: 768px) {
    padding: 8% 10%;
  }
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
  font-size: 12px;
  line-height: 15px;

  @media (min-width: 768px) {
    font-size: 14px;
    line-height: 150%;
  }
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

  @media (max-width: 767px) {
    display: none;
  }
`;
const DeckDividerMobile = styled.img`
  width: 100%;
  z-index: 2;
  height: 51px;
  bottom: 165px;
  position: absolute;

  @media (min-width: 768px) {
    display: none;
  }
`;

const BottomDeckContainer = styled.div`
  position: sticky;
  bottom: 0;
  height: 180px;
  background: linear-gradient(0deg, #311b32, #311b32), #2d0b3d;
  width: 100%;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    height: 237px;
    /* max-width: 1440px; */
    /* margin: auto; */
  }
`;

const SlotsContainer = styled(FlexRow)``;

const Slot = styled.div`
  width: 61.39px;
  height: 89px;
  border: 1px solid #ab19ef;
  box-sizing: border-box;
  background: linear-gradient(0deg, #000000, #000000), url(cards-color.png);
  border-radius: 9px;
  margin: 0 2.5px;

  @media (min-width: 768px) {
    width: 120px;
    height: 174.67px;
    margin: 0 2px;
    object-fit: cover;
  }
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

  @media (max-width: 767px) {
    display: none;
  }
`;

const PokedEyeImage = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 3;

  @media (max-width: 767px) {
    display: none;
  }
`;

const CardContainer = styled.div`
  display: grid;
  width: fit-content;
  row-gap: 8px;
  column-gap: 8px;
  margin: auto;
  grid-template-columns: repeat(3, 1fr);

  @media (min-width: 768px) {
    row-gap: 16px;
    column-gap: 16px;
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
  width: 106px;
  border-radius: 9px;
  cursor: pointer;
  filter: ${(props) =>
    props.selected ? 'brightness(60%) opacity(60%)' : 'none'};
  @media (min-width: 768px) {
    width: 160px;
    height: 254px;
    border-radius: 14px;
    object-fit: cover;
    object-position: -50px 3px;
  }
`;

const TabContainer = styled.div`
  display: flex;
`;

const Tab = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  padding-bottom: 8px;
  border-bottom: ${(props) => (props.active ? '3px solid #ccee25' : 'none')};
  width: fit-content;
  margin-right: 1rem;
  margin-top: 69px;
  margin-bottom: 30px;

  margin: 69px 1rem 30px 0;
  cursor: pointer;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

const SendMyTeam = styled.div`
  background-image: url(${(props) =>
    props.ready ? lfgMobile : lfgMobileDisabled});
  background-repeat: no-repeat;
  background-size: 100%;
  color: #000000;
  width: 90%;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  line-height: 21px;
  margin-top: 1rem;

  @media (min-width: 768px) {
    display: ${(props) => (props.ready ? 'flex' : 'none')};
    background-image: url(${lfg});
    width: 181px;
    height: 48px;
    font-weight: 700;
    line-height: 150%;
    margin-top: 24px;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 10%;
    z-index: 5;
  }
`;

export const imageUrl = (id) => {
  if (parseInt(id) < 10000) {
    return `https://images.nicefunzombies.io/card/${id}.png`;
  } else {
    return placeholder;
  }
};

export default function SelectionPage({
  userNfts,
  slots,
  setSlots,
  initGame,
  loading,
}) {
  const [tab, setTab] = useState(1);
  const [gruntsData, setGruntsData] = useState(null);

  const history = useHistory();

  const assignSlot = (image) => {
    if (!slots.slot1) {
      setSlots({ ...slots, ...{ slot1: image } });
    } else if (!slots.slot2) {
      setSlots({ ...slots, ...{ slot2: image } });
    } else if (!slots.slot3) {
      setSlots({ ...slots, ...{ slot3: image } });
    } else if (!slots.slot4) {
      setSlots({ ...slots, ...{ slot4: image } });
    } else if (!slots.slot5) {
      setSlots({ ...slots, ...{ slot5: image } });
    } else {
      console.log('No more slot available!');
    }
  };

  const unAssignSlot = (image) => {
    const updated = {};
    if (slots.slot1 === image) {
      updated['slot1'] = null;
    } else if (slots.slot2 === image) {
      updated['slot2'] = null;
    } else if (slots.slot3 === image) {
      updated['slot3'] = null;
    } else if (slots.slot4 === image) {
      updated['slot4'] = null;
    } else if (slots.slot5 === image) {
      updated['slot5'] = null;
    }
    setSlots({ ...slots, ...updated });
  };

  const isReady = () => {
    return (
      slots.slot1 && slots.slot2 && slots.slot3 && slots.slot4 && slots.slot5
    );
  };

  const selected = (image) => {
    return [
      slots.slot1,
      slots.slot2,
      slots.slot3,
      slots.slot4,
      slots.slot5,
    ].includes(image);
  };

  const loadGrunts = async () => {
    const grunts = await axios
      .get('https://bnpoulp3kk.execute-api.us-west-2.amazonaws.com/main/grunts')
      .then((res) => res.data);

    setGruntsData(grunts);
    console.log(grunts);
  };

  useEffect(() => {
    loadGrunts();
  }, []);

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
          {userNfts &&
            tab === 1 &&
            userNfts.result.map((item, index) => (
              <Card
                key={index}
                selected={selected(item.token_id)}
                src={imageUrl(item.token_id)}
                onClick={() => {
                  const id = item.token_id;
                  if (!selected(id)) {
                    assignSlot(id);
                  } else {
                    unAssignSlot(id);
                  }
                }}
              />
            ))}

          {tab === 2 &&
            gruntsData.map((item, index) => (
              <Card
                key={index}
                selected={selected(item.zombieId)}
                src={item.image}
                onClick={() => {
                  const id = item.zombieId;
                  if (!selected(id)) {
                    assignSlot(id);
                  } else {
                    unAssignSlot(id);
                  }
                }}
              />
            ))}
        </CardContainer>
      </ContentContainer>

      <BottomDeckContainer>
        <SlotsContainer>
          <Slot>
            {slots.slot1 && (
              <SlotImage
                src={imageUrl(slots.slot1)}
                onClick={() => unAssignSlot(slots.slot1)}
              />
            )}
          </Slot>
          <Slot>
            {slots.slot2 && (
              <SlotImage
                src={imageUrl(slots.slot2)}
                onClick={() => unAssignSlot(slots.slot2)}
              />
            )}
          </Slot>
          <Slot>
            {slots.slot3 && (
              <SlotImage
                src={imageUrl(slots.slot3)}
                onClick={() => unAssignSlot(slots.slot3)}
              />
            )}
          </Slot>
          <Slot>
            {slots.slot4 && (
              <SlotImage
                src={imageUrl(slots.slot4)}
                onClick={() => unAssignSlot(slots.slot4)}
              />
            )}
          </Slot>
          <Slot>
            {slots.slot5 && (
              <SlotImage
                src={imageUrl(slots.slot5)}
                onClick={() => unAssignSlot(slots.slot5)}
              />
            )}
          </Slot>
        </SlotsContainer>

        <PokedEyeImage src={pokedEye} />
        <GraveImage src={grave} />
        <DeckDivider src={deckBorder} />
        <DeckDividerMobile src={deckBorderMobile} />

        <SendMyTeam
          ready={isReady()}
          // onClick={() => history.push('/arena/search')}
          onClick={initGame}
        >
          {loading ? <Spinner /> : 'Send my team!'}
        </SendMyTeam>
      </BottomDeckContainer>
      {/* <FrontCover /> */}
    </SelectionPageContainer>
  );
}
