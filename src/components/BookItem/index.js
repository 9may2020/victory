import React, { Component } from "react";
import "./style.css";

class BookItem extends Component {
  render() {
    const book = this.props.book;
    return (
      <>
        <div className={"book-item clearfix"}>
          <div className={"img"}>
            <img alt={book.title} src={book.img} />
          </div>
          <div className={"description"}>
            <h3>{book.title}</h3>
            <p>
              {book.author}, {book.year}
            </p>
            <span>{book.description}</span>
          </div>
        </div>
        <hr />
      </>
    );
  }
}

export default BookItem;
