import React from "react";
import Card from './Card'
import './topCardList.css'

const data1 = [
  {
    user: '@socialNetwork1',
    followers: '1596',
    todayFollower: 12,
    socialIcon: 'images/icon-facebook.svg',
    name: 'facebook'
  },
  {
    user: '@socialNetwork2',
    followers: '28k',
    todayFollower: 20,
    socialIcon: 'images/icon-twitter.svg',
    name: 'twitter'
  },
  {
    user: '@socialNetwork3',
    followers: '6k',
    todayFollower: 30,
    socialIcon: 'images/icon-instagram.svg',
    name: 'instagram'
  },
  {
    user: '@socialNetwork4',
    followers: '12k',
    todayFollower: -50,
    socialIcon: 'images/icon-youtube.svg',
    name: 'youtube'
  },
]

export default function TopCardList() {
  return (
    <section className="top-cards">
      <div className="wrapper">
        <div className="grid">
          {
            data1.map((a, b)=> {return (<Card {...a} key={b}/>)})
          }
          {/* <Card user='@RogerEspinoza'/>
          <Card/>
          <Card/> */}
          {/* <article className="card twitter">
            <p className="card-title">
              <img src="images/icon-twitter.svg" alt="" />
              @RogerEspinoza
            </p>
            <p className="card-followers">
              <span className="card-followers-number">28k</span>
              <span className="card-followers-title">Followers</span>
            </p>
            <p className="card-today">
              <img src="images/icon-up.svg" alt="" />
              12 Today
            </p>
          </article>
          <article className="card instagram">
            <p className="card-title">
              <img src="images/icon-instagram.svg" alt="" />
              @LeonidasEsteban
            </p>
            <p className="card-followers">
              <span className="card-followers-number">6k</span>
              <span className="card-followers-title">Followers</span>
            </p>
            <p className="card-today">
              <img src="images/icon-up.svg" alt="" />
              12 Today
            </p>
          </article>
          <article className="card youtube">
            <p className="card-title">
              <img src="images/icon-youtube.svg" alt="" />
              @LeonidasEsteban
            </p>
            <p className="card-followers">
              <span className="card-followers-number">12k</span>
              <span className="card-followers-title">Followers</span>
            </p>
            <p className="card-today">
              <img src="images/icon-up.svg" alt="" />
              12 Today
            </p>
          </article> */}
        </div>
      </div>
    </section>
  );
}
