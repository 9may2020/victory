import React, { Component } from "react";
import TopBlock from "../../components/TopBlock";
import music from "../../img/music.jpg";
import Content from "../../components/Content";
import TopBlockText from "../../components/TopBlockText";

class MusicPage extends Component {
  render() {
    return (
      <>
        <TopBlock
          img={music}
          height={"500px"}
          color={"rgba(74, 164, 226, .75)"}
        >
          <TopBlockText>
            Великая Отечественная война стала самым суровым испытанием для
            нашего народа. Победа ковалась на фронтах и в тылу нашей огромной
            страны. Песня помогла выстоять народу и победить, она стала грозным
            оружием, не позволившим сломить дух советского народа. Песни ярко
            отражали все события, происходящие на фронте и в тылу, согревали
            душу, призывали к подвигу. Песни иногда лучше политруков говорили о
            патриотизме, солдатской дружбе и любви. Песни были необходимы
            человеку как воздух, они не давали черстветь человеческим чувствам.
          </TopBlockText>
        </TopBlock>
        <Content height={"calc(100vh - 520px)"}>
          <iframe
            frameBorder="0"
            style={{
              border: "none",
              width: "100%",
              height: "100%",
              minHeight: "400px"
            }}
            src="https://music.yandex.ru/iframe/#playlist/music-blog/1029"
          >
            Слушайте{" "}
            <a href="https://music.yandex.ru/users/music-blog/playlists/1029">
              Советские песни ко Дню Победы
            </a>{" "}
            —{" "}
            <a href="https://music.yandex.ru/users/music-blog">Яндекс.Музыка</a>{" "}
            на Яндекс.Музыке
          </iframe>
        </Content>
      </>
    );
  }
}

export default MusicPage;
