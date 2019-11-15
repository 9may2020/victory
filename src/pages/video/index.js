import React, { Component } from "react";
import TopBlock from "../../components/TopBlock";
import video from "../../img/video.jpg";
import Content from "../../components/Content";
import films from "../../constants/films";
import VideoItem from "../../components/VideoItem";
import TopBlockText from "../../components/TopBlockText";

class VideoPage extends Component {
  render() {
    return (
      <>
        <TopBlock
          img={video}
          height={"450px"}
          color={"rgba(74, 164, 226, .75)"}
        >
          <TopBlockText>
            Фильмы про Великую Отечественную войну как нельзя лучше показывают,
            насколько тяжелым был путь нашего народа к освобождению Родины от
            агрессоров. Героизму, мужеству и самоотверженности есть место и в
            современном мире, но мы искренне надеемся, что войну нынешнее и
            будущее поколения будут впредь видеть только в фильмах - наших
            предков ничто не порадовало бы больше.
          </TopBlockText>
        </TopBlock>
        <Content>
          {films.map((film, index) => (
            <VideoItem key={index} video={film} />
          ))}
        </Content>
      </>
    );
  }
}

export default VideoPage;
