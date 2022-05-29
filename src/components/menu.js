import React from 'react';
import styled from 'styled-components';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import '../styles/hideScrollbar.css';

const NaviButton = styled.div`
    margin-top: 20px;
    width: 40px;
    height: 20px;
    font-size: 28px;
    text-align: center;
    line-height: 20px;
    cursor: pointer;
`
const LeftArrow = styled.div`
    transition: 0.3s;
    &:hover {
        cursor: pointer;
        transform: translateX(-5px)
    }
`

const RightArrow = styled.div`
    transition: 0.3s;
    &:hover {
        transform: translateX(5px)
    }
`
const Logo = styled.div`
    margin-left: 30px;
    margin-right: 30px;
    width: 90px;
    height: 90px;
    background-color: white;
    box-shadow: 0px 0px 10px 0px rgba(138, 89, 201, 0.18);
    border-radius: 7px;
    transition: 0.3s;
    text-align: center;
    vertical-align: middle;
    line-height: 90px;

    &:hover {
        transform: translateY(5px)
    }
`



const getItems = () =>
  Array(5)
    .fill(0)
    .map((_, ind) => ({ id: `element-${ind}` }));

function App() {
  const [items, setItems] = React.useState(getItems);
  const [selected, setSelected] = React.useState([]);
  const [position, setPosition] = React.useState(0);

  const isItemSelected = (id) => !!selected.find((el) => el === id);

  const handleClick =
    (id) =>
    ({ getItemById, scrollToItem }) => {
      const itemSelected = isItemSelected(id);

      setSelected((currentSelected) =>
        itemSelected
          ? currentSelected.filter((el) => el !== id)
          : currentSelected.concat(id)
      );
    };

  return (
    <ScrollMenu
      LeftArrow={LeftClick}
      RightArrow={RightClick}
      options={{
        ratio: 0.9,
        rootMargin: "5px",
        threshold: [0.01, 0.05, 0.5, 0.75, 0.95, 1]
      }}
      >
      {items.map(({ id }) => (
        <Card
          itemId={id} // NOTE: itemId is required for track items
          title={id}
          key={id}
          onClick={handleClick(id)}
          selected={isItemSelected(id)}
        />
      ))}
    </ScrollMenu>
  );
}

function Card({ onClick, selected, title, itemId }) {
  const visibility = React.useContext(VisibilityContext);

  return (
    <Logo
      onClick={() => onClick(visibility)}
      tabIndex={0}
    >
      <div className="card">
        <div>{title}</div>
        <div>visible: {JSON.stringify(!!visibility.isItemVisible(itemId))}</div>
        <div>selected: {JSON.stringify(!!selected)}</div>
      </div>
      <div
        style={{
          height: '200px',
        }}
      />
    </Logo>
  );
}

function LeftClick() {
  // const { isFirstItemVisible, scrollPrev } =
  //   React.useContext(VisibilityContext);

  const {
    // getItemById,
    getPrevItem,
    isFirstItemVisible,
    scrollToItem,
    visibleItemsWithoutSeparators,
    initComplete
  } = React.useContext(VisibilityContext);

  const [disabled, setDisabled] = React.useState(
    !initComplete || (initComplete && isFirstItemVisible)
  );
  React.useEffect(() => {
    // NOTE: detect if whole component visible
    if (visibleItemsWithoutSeparators.length) {
      setDisabled(isFirstItemVisible);
    }
  }, [isFirstItemVisible, visibleItemsWithoutSeparators]);

  // NOTE: for scroll 1 item
  const clickHandler = () => {
    const prevItem = getPrevItem();
    scrollToItem(prevItem?.entry?.target, "smooth", "start");
    // OR
    // scrollToItem(
    //   getItemById(visibleItemsWithoutSeparators.slice(-2)[0]),
    //   "smooth",
    //   "end"
    // );
  };

  return (
    <NaviButton disabled={isFirstItemVisible} onClick={() => clickHandler()}>
      <LeftArrow>&#9664;</LeftArrow>
    </NaviButton>
  );
}

function RightClick() {
  // const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext);

  const {
    // getItemById,
    getNextItem,
    isLastItemVisible,
    scrollToItem,
    visibleItemsWithoutSeparators
  } = React.useContext(VisibilityContext);

  const [disabled, setDisabled] = React.useState(
    !visibleItemsWithoutSeparators.length && isLastItemVisible
  );
  React.useEffect(() => {
    if (visibleItemsWithoutSeparators.length) {
      setDisabled(isLastItemVisible);
    }
  }, [isLastItemVisible, visibleItemsWithoutSeparators]);

  // NOTE: for scroll 1 item
  const clickHandler = () => {
    const nextItem = getNextItem();
    scrollToItem(nextItem?.entry?.target, "smooth", "end");
    // OR
    // scrollToItem(
    //   getItemById(visibleItemsWithoutSeparators[1]),
    //   "smooth",
    //   "start"
    // );
  };

  return (
    <NaviButton disabled={isLastItemVisible} onClick={() => clickHandler()}>
      <RightArrow>&#9654;</RightArrow>
    </NaviButton>
  );
}

export default App;