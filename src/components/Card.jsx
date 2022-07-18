import React from 'react'

function Card() {
  return (
    <section id="cardType" className="card__wrap section nexon">
    <h2>웹스토리보이 강의</h2>
    <p>
      웹디자이너, 웹 퍼블리셔, 프론트앤드 개발자를 위한 강의 사이트입니다.
      <br />
      Gmarket Sans Light 22px 150% #67778A
    </p>
    <div className="card__inner container">
      <article className="card">
        <figure className="card__header">
          <img
            className="img"
            src="assets/img/card_bg01.jpg"
            alt="이미지1"
          />
        </figure>
        <div className="card__body">
          <h3 className="title">웹표준 사이트 만들기</h3>
          <p className="desc">
            사이트를 만들기 위한 기초 강의입니다. 기본 코딩에 대한 감각을
            익히고, 웹 표준을 준수하면서 코딩하는 방법을 익힙니다. 다양한
            예제를 통해 사이트를 만드는 기본 강의입니다.
          </p>
          <a className="btn" href="/">
            더 자세히 보기
            <img src="assets/img/Arrow.png" alt="화살표"></img>
          </a>
        </div>
      </article>
      <article className="card">
        <figure className="card__header">
          <img
            className="img"
            src="assets/img/card_bg02.jpg"
            alt="이미지2"
          />
        </figure>
        <div className="card__body">
          <h3 className="title">웹표준 사이트 만들기</h3>
          <p className="desc">
            사이트를 만들기 위한 기초 강의입니다. 기본 코딩에 대한 감각을
            익히고, 웹 표준을 준수하면서 코딩하는 방법을 익힙니다. 다양한
            예제를 통해 사이트를 만드는 기본 강의입니다.
          </p>
          <a className="btn" href="/">
            더 자세히 보기
            <img src="assets/img/Arrow.png" alt="화살표"/>
          </a>
        </div>
      </article>
      <article className="card">
        <figure className="card__header">
          <img
            className="img"
            src="assets/img/card_bg03.jpg"
            alt="이미지3"
          />
        </figure>
        <div className="card__body">
          <h3 className="title">웹표준 사이트 만들기</h3>
          <p className="desc">
            사이트를 만들기 위한 기초 강의입니다. 기본 코딩에 대한 감각을
            익히고, 웹 표준을 준수하면서 코딩하는 방법을 익힙니다. 다양한
            예제를 통해 사이트를 만드는 기본 강의입니다.
          </p>
          <a className="btn" href="/">
            더 자세히 보기
            <img src="assets/img/Arrow.png" alt="화살표"/>
          </a>
        </div>
      </article>
    </div>
  </section>
  )
}

export default Card