import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
import { save, load } from './storage';

const CURRENT_TIME_KEY = 'videoplayer-current-time';

const playerRef = document.querySelector('#vimeo-player');

const player = new Player(playerRef);

function savePlayTime(data) {
  save(CURRENT_TIME_KEY, Math.floor(data.seconds));
}

player.on('timeupdate', throttle(savePlayTime, 1000));

let loadedTime = load(CURRENT_TIME_KEY);
if (loadedTime) {
  player.setCurrentTime(loadedTime);
}
