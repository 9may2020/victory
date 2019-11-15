import React, { Component } from "react";
import "./style.css";
import bg from "../../img/home-bg.jpg";
import TopBlock from "../../components/TopBlock";
import Content from "../../components/Content";

class HomePage extends Component {
  render() {
    return (
      <>
        <TopBlock img={bg}>
          <div className="top-block-text text-center">
            <h3>ПОБЕДА!</h3>
            <h1>75 ЛЕТ</h1>
          </div>
        </TopBlock>
        <Content>
          <div className={"home-info"}>
            <h1>Победе 75!</h1>
            <p>
              9 мая 2020 года наша страна будет отмечать 75-летие Победы в
              Великой Отечественной войне. Этот день является памятным для
              каждой семьи, одним из самых важных праздников в истории страны и
              жизни ее народа.
            </p>
            <p>
              День Победы – это праздник, который объединяет всех: и молодежь, и
              пожилые люди, и дети хранят светлую память о героях войны.{" "}
            </p>
            <p>
              Великая Отечественная война и Победа в ней – слава и гордость
              России. Эта Победа – величайшее событие двадцатого столетия,
              поэтому День Победы мы отмечаем как главный праздник страны.{" "}
            </p>
            <p>
              Никогда не будет забыт подвиг тех, кто отстоял в боях нашу Родину!
            </p>
          </div>
        </Content>
      </>
    );
  }
}

export default HomePage;
