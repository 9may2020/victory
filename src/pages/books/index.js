import React, { Component } from "react";
import TopBlock from "../../components/TopBlock";
import book from "../../img/book.jpg";
import Content from "../../components/Content";
import books from "../../constants/books";
import BookItem from "../../components/BookItem";
import TopBlockText from "../../components/TopBlockText";

class BooksPage extends Component {
  render() {
    return (
      <>
        <TopBlock img={book} height={"400px"} color={"rgba(74, 164, 226, .75)"}>
          <TopBlockText>
            Великие сражения и судьбы обычных героев описаны во многих
            художественных произведениях, но есть книги, мимо которых нельзя
            пройти и о которых нельзя забывать. Они заставляют читателя
            задуматься о настоящем и прошлом, о жизни и смерти, о мире и войне.{" "}
          </TopBlockText>
        </TopBlock>
        <Content>
          {books.map((book, index) => (
            <BookItem key={index} book={book} />
          ))}
        </Content>
      </>
    );
  }
}

export default BooksPage;
