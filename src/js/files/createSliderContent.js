const topVideosData = [
  {
    img: '1',
    duration: '32:18',
    title: 'Concert Stadium / Mike Shinoda / Berlin 09.06.2021',
    count: '23 852',
    time: '1 ч назад',
  },
  {
    img: '2',
    duration: '32:18',
    title: 'Столица мира и надежд',
    count: '23 852',
    time: '1 ч назад',
  },
  {
    img: '3',
    duration: '32:18',
    title: 'Я завел нового друга и даже не подозревал...Знакомьтесь :)',
    count: '23 852',
    time: '1 ч назад',
  },
  {
    img: '4',
    duration: '32:18',
    title: '10 глупых (и не очень) вопросов учителям / задай вопрос в прям...',
    count: '23 852',
    time: '1 ч назад',
  },
  {
    img: '1',
    duration: '32:18',
    title: 'Concert Stadium / Mike Shinoda / Berlin 09.06.2021',
    count: '23 852',
    time: '1 ч назад',
  },
  {
    img: '2',
    duration: '32:18',
    title: 'Столица мира и надежд',
    count: '23 852',
    time: '1 ч назад',
  },
  {
    img: '3',
    duration: '32:18',
    title: 'Я завел нового друга и даже не подозревал...Знакомьтесь :)',
    count: '23 852',
    time: '1 ч назад',
  },
  {
    img: '4',
    duration: '32:18',
    title: '10 глупых (и не очень) вопросов учителям / задай вопрос в прям...',
    count: '23 852',
    time: '1 ч назад',
  },
];

const topVideosSlider = document.querySelector('.top-videos .swiper-wrapper');
const newVideosSlider = document.querySelector('.new-videos .swiper-wrapper');
const girlsVideosSlider = document.querySelector('.girls-videos .swiper-wrapper');
const gamesVideosSlider = document.querySelector('.games-videos .swiper-wrapper');
const filmsVideosSlider = document.querySelector('.films-videos .swiper-wrapper');

export const createSliderContent = (data, parentElement, folder) => {
  data.map(({ img, duration, title, count, time }) => {
    const slide = document.createElement('div');
    const slideHref = document.createElement('a');
    slideHref.href = '#';
    slide.classList.add('swiper-slide', 'video-slide');
    slideHref.innerHTML = `
         <div class="video-slide__view">
            <img class="video-slide__img" src="img/video-slides/${folder}/${img}.jpg" data-rjs="2" alt="slide" />
            <span class="video-slide__duration">${duration}</span>
            <button class="video-slide__play">
                <svg>
                  <use xlink:href="img/sprite.svg#playBig" />
                </svg>
                Смотреть
            </button>
        </div>
        <span class="video-slide__title">${title}</span>
        <div class="video-slide__subtitle">Вопрос - ответ</div>
        <div div class="video-slide__info">
        <span class="video-slide__info-block">
            <svg class="icon-16">
              <use xlink:href="img/sprite.svg#outline16" />
            </svg>
            <span class="video-slide__info-item">${count}</span>
        </span>
        <span class="video-slide__info-block">
            <svg class="icon-16">
              <use xlink:href="img/sprite.svg#outline" />
            </svg>
            <span class="video-slide__info-item">${time}</span>
        </span>
    `;
    slide.append(slideHref);
    parentElement.append(slide);
  });
};

if (topVideosSlider) {
  createSliderContent(topVideosData, topVideosSlider, 'top');
  createSliderContent(topVideosData, newVideosSlider, 'new');
  createSliderContent(topVideosData, girlsVideosSlider, 'girls');
  createSliderContent(topVideosData, gamesVideosSlider, 'games');
  createSliderContent(topVideosData, filmsVideosSlider, 'films');
}
