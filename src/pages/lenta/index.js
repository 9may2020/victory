import React, { Component } from "react";
import TopBlock from "../../components/TopBlock";
import lenta from "../../img/lenta.jpg";
import Content from "../../components/Content";

class LentaPage extends Component {
  render() {
    return (
      <>
        <TopBlock
          img={lenta}
          height={"400px"}
          color={"rgba(74, 164, 226, .75)"}
        />
        <Content>
          <div className={"home-info"}>
            <h1>Акция "Лента памяти"</h1>
            <p>
              Акция "Лента памяти" в Областном центре образования г.Калуги будет
              проходить третий год.
            </p>
            <p>
              Учащиеся и сотрудники центра собирают информацию о своих
              родственниках - ветеранах Великой Отечественной войны, чтобы
              почтить память фронтовиков.
            </p>
            <p>
              Сбор информации будет осуществляться до 30.04.2020.
            </p>
          </div>
        </Content>
      </>
    );
  }
}

export default LentaPage;
