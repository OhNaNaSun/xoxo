/* eslint-disable no-console */
// http://m.1kmn.com/index.php?v=8BC07C5A858CBD960F2A41M014DFC4F67
import React from 'react';
import ReactJkMusicPlayer from './ReactJkMusicPlayer';
import Locale from './config/locale';
import { createRandomNum } from './utils';

const audioList1 = [
  {
    name: '执迷不悟',
    singer: '小乐哥',
    cover: 'https://i.scdn.co/image/ab67616d0000b27379fad76a57bd36b4a29a2b55',
    musicSrc:
      'https://sharefs.ali.kugou.com/202202092209/5ca62d80b4ea11da2a625207b0b453c3/G231/M00/15/01/Jw4DAF9QgC2AExynADlMF1PHXpg991.mp3',
    // support async fetch music src. eg.
    // musicSrc: async () => {
    //   return await fetch('/api')
    // },
  },
  {
    name: 'Dorost Nemisham',
    singer: 'Sirvan Khosravi',
    cover: 'https://res.cloudinary.com/ehsanahmadi/image/upload/v1573758778/Sirvan-Khosravi-Dorost-Nemisham_glicks.jpg',
    musicSrc:
      'https://res.cloudinary.com/ehsanahmadi/video/upload/v1573550770/Sirvan-Khosravi-Dorost-Nemisham-128_kb8urq.mp3',
  },
  {
    name: '时空缝隙',
    singer: '苏星婕',
    cover:
      'data:image/jpeg;base64,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',
    musicSrc:
      'https://sharefs.ali.kugou.com/202202092213/8e48c4e461a731b51f5714be5fc9fda2/KGTX/CLTX001/7d14c5bf9caa65fcecfe00197157985e.mp3',
  },
];

const audioList2 = [
  {
    name: 'Bedtime Stories',
    singer: 'Jay Chou',
    cover: 'http://res.cloudinary.com/alick/image/upload/v1502375978/bedtime_stories_bywggz.jpg',
    musicSrc: 'http://res.cloudinary.com/alick/video/upload/v1502375674/Bedtime_Stories.mp3',
  },
  {
    name: 'Dorost Nemisham',
    singer: 'Sirvan Khosravi',
    cover: 'https://res.cloudinary.com/ehsanahmadi/image/upload/v1573758778/Sirvan-Khosravi-Dorost-Nemisham_glicks.jpg',
    musicSrc: () => {
      return Promise.resolve(
        'https://res.cloudinary.com/ehsanahmadi/video/upload/v1573550770/Sirvan-Khosravi-Dorost-Nemisham-128_kb8urq.mp3'
      );
    },
  },
  {
    name: 'Despacito',
    singer: 'Luis Fonsi',
    cover: 'http://res.cloudinary.com/alick/image/upload/v1502689731/Despacito_uvolhp.jpg',
    musicSrc:
      'http://res.cloudinary.com/alick/video/upload/v1502689683/Luis_Fonsi_-_Despacito_ft._Daddy_Yankee_uyvqw9.mp3',
  },
];

const audioList3 = [
  {
    name: 'Despacito',
    singer: 'Luis Fonsi',
    cover: 'http://res.cloudinary.com/alick/image/upload/v1502689731/Despacito_uvolhp.jpg',
    musicSrc:
      'http://res.cloudinary.com/alick/video/upload/v1502689683/Luis_Fonsi_-_Despacito_ft._Daddy_Yankee_uyvqw9.mp3',
  },
  {
    name: 'Bedtime Stories',
    singer: 'Jay Chou',
    cover: 'http://res.cloudinary.com/alick/image/upload/v1502375978/bedtime_stories_bywggz.jpg',
    musicSrc: 'http://res.cloudinary.com/alick/video/upload/v1502375674/Bedtime_Stories.mp3',
  },
  {
    name: 'Dorost Nemisham',
    singer: 'Sirvan Khosravi',
    cover: 'https://res.cloudinary.com/ehsanahmadi/image/upload/v1573758778/Sirvan-Khosravi-Dorost-Nemisham_glicks.jpg',
    musicSrc:
      'https://res.cloudinary.com/ehsanahmadi/video/upload/v1573550770/Sirvan-Khosravi-Dorost-Nemisham-128_kb8urq.mp3',
  },
];

const audioList4 = [
  {
    name: 'Bedtime Stories',
    singer: 'Jay Chou',
    cover: 'http://res.cloudinary.com/alick/image/upload/v1502375978/bedtime_stories_bywggz.jpg',
    musicSrc: 'http://res.cloudinary.com/alick/video/upload/v1502375674/Bedtime_Stories.mp3',
  },
];

const options = {
  // audio lists model
  audioLists: audioList1,

  // default play index of the audio player  [type `number` default `0`]
  defaultPlayIndex: 0,

  // if you want dynamic change current play audio you can change it [type `number` default `0`]
  // playIndex: 0,

  // color of the music player theme    [ type: 'light' | 'dark' | 'auto'  default `dark` ]
  theme: 'auto',

  // Specifies movement boundaries. Accepted values:
  // - `parent` restricts movement within the node's offsetParent
  //    (nearest node with position relative or absolute), or
  // - a selector, restricts movement within the targeted node
  // - An object with `left, top, right, and bottom` properties.
  //   These indicate how far in each direction the draggable
  //   can be moved.
  // Ref: https://github.com/STRML/react-draggable#draggable-api
  bounds: 'body',

  /**
   * Don't interrupt current playing state when audio list updated
   * audioLists eg. (A) is current playing...
   * [A,B] => [A,C,B]
   * [A,B] => [A,B,C]
   *
   * if (A) not in updated audio lists
   * [A,B] => [C]
   * (C) is playing
   */
  // [type `boolean`, default `false`]
  quietUpdate: false,

  // Replace a new playlist with the first loaded playlist
  // instead of adding it at the end of it.
  // [type `boolean`, default `false`]
  clearPriorAudioLists: false,

  // Play your new play list right after your new play list is loaded turn false.
  // [type `boolean`, default `false`]
  autoPlayInitLoadPlayList: false,

  // Whether to load audio immediately after the page loads.  [type `Boolean | String`, default `false`]
  // "auto|metadata|none" "true| false"
  preload: false,

  // Whether the player's background displays frosted glass effect  [type `Boolean`, default `false`]
  glassBg: false,

  // The next time you access the player, do you keep the last state  [type `Boolean` default `false`]
  remember: false,

  // The Audio Can be deleted  [type `Boolean`, default `true`]
  remove: true,

  // audio controller initial position    [ type `Object` default '{top:0,left:0}' ]
  defaultPosition: {
    right: 100,
    bottom: 120,
  },

  // if you want dynamic change current play mode you can change it
  // [type`order | orderLoop | singleLoop | shufflePlay`, default `order`]
  // playMode: 'order',
  defaultPlayMode: 'order',

  // audio mode        mini | full          [type `String`  default `mini`]
  mode: 'full',

  /**
   * [ type `Boolean` default 'false' ]
   * The default audioPlay handle function will be played again after each pause, If you only want to trigger it once, you can set 'true'
   */
  once: false,

  // Whether the audio is played after loading is completed. [type `Boolean` default 'true']
  autoPlay: false,

  // Whether you can switch between two modes, full => mini  or mini => full   [type 'Boolean' default 'true']
  toggleMode: true,

  // audio cover is show of the "mini" mode [type `Boolean` default 'true']
  showMiniModeCover: true,

  // audio playing progress is show of the "mini"  mode
  showMiniProcessBar: false,

  // audio controller is can be drag of the "mini" mode     [type `Boolean` default `true`]
  drag: true,

  // drag the audio progress bar [type `Boolean` default `true`]
  seeked: true,

  // Display chrome media session.  [type `Boolean` default `false`]
  showMediaSession: true,

  // Displays the audio load progress bar.  [type `Boolean` default `true`]
  showProgressLoadBar: true,

  // play button display of the audio player panel   [type `Boolean` default `true`]
  showPlay: true,

  // reload button display of the audio player panel   [type `Boolean` default `true`]
  showReload: true,

  // download button display of the audio player panel   [type `Boolean` default `true`]
  showDownload: true,

  // loop button display of the audio player panel   [type `Boolean` default `true`]
  showPlayMode: true,

  // theme toggle switch  display of the audio player panel   [type `Boolean` default `true`]
  showThemeSwitch: true,

  // lyric display of the audio player panel   [type `Boolean` default `false`]
  showLyric: true,

  // destroy player button display  [type `Boolean` default `false`]
  showDestroy: true,

  // Extensible custom content       [type 'Array' default '-' ]
  extendsContent: null,

  // default volume of the audio player [type `Number` default `1` range `0-1`]
  defaultVolume: 1,

  // playModeText show time [type `Number(ms)` default `600`]
  playModeShowTime: 600,

  // Whether to try playing the next audio when the current audio playback fails [type `Boolean` default `true`]
  loadAudioErrorPlayNext: true,

  // Auto hide the cover photo if no cover photo is available [type `Boolean` default `false`]
  autoHiddenCover: false,

  // Play and pause audio through blank space [type `Boolean` default `false`]
  spaceBar: true,

  // international [type `en_US | zh_CN | Object` default `en_US`]
  locale: Locale.en_US,

  // Enable responsive player, auto toggle desktop and mobile [type `Boolean` default `true`]
  responsive: true,

  /**
   * Custom mobile media query string, eg use the mobile version UI on iPad.
   * https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries
   * [type `String` default '(max-width: 768px) and (orientation : portrait)']
   */
  mobileMediaQuery: '(max-width: 1024px)',

  // Audio volume with fade in and fade out [type `{ fadeIn: number, fadeOut: number }` default `{ fadeIn: 0, fadeOut: 0 }`]
  volumeFade: {
    fadeIn: 1000,
    fadeOut: 1000,
  },
  /**
   * Restarts the current track when trying to play previous song, if the current time of the song is more than 1 second
      Otherwise, plays the previous song in the list
      [type `Boolean` default `false`]
  */
  restartCurrentOnPrev: false,

  // https://github.com/SortableJS/Sortable#options
  sortableOptions: {},

  // Music is downloaded handle
  onAudioDownload(audioInfo) {
    console.log('audio download', audioInfo);
  },

  // audio play handle
  onAudioPlay(audioInfo) {
    console.log('audio playing', audioInfo);
  },

  // audio pause handle
  onAudioPause(audioInfo) {
    console.log('audio pause', audioInfo);
  },

  // When the user has moved/jumped to a new location in audio
  onAudioSeeked(audioInfo) {
    console.log('audio seeked', audioInfo);
  },

  // When the volume has changed  min = 0.0  max = 1.0
  onAudioVolumeChange(currentVolume) {
    console.log('audio volume change', currentVolume);
  },

  // The single song is ended handle
  onAudioEnded(currentPlayId, audioLists, audioInfo) {
    console.log('audio ended', currentPlayId, audioLists, audioInfo);
  },

  // audio load abort
  onAudioAbort(currentPlayId, audioLists, audioInfo) {
    console.log('audio abort', currentPlayId, audioLists, audioInfo);
  },

  // audio play progress handle
  // eslint-disable-next-line no-unused-vars
  onAudioProgress(audioInfo) {
    // console.log('audio progress', audioInfo)
  },

  // audio reload handle
  onAudioReload(audioInfo) {
    console.log('audio reload:', audioInfo);
  },

  // audio load failed error handle
  onAudioError(errMsg, currentPlayId, audioLists, audioInfo) {
    console.error('audio error', errMsg, currentPlayId, audioLists, audioInfo);
  },

  // theme change handle
  // onThemeChange(theme) {
  //   console.log('theme change:', theme)
  // },

  onAudioListsChange(currentPlayId, audioLists, audioInfo) {
    console.log('audio lists change:', currentPlayId, audioLists, audioInfo);
  },

  onAudioPlayTrackChange(currentPlayId, audioLists, audioInfo) {
    console.log('audio play track change:', currentPlayId, audioLists, audioInfo);
  },

  // onPlayModeChange(playMode) {
  //   console.log('play mode change:', playMode)
  // },

  // onModeChange(mode) {
  //   console.log('mode change:', mode)
  // },

  onAudioListsPanelChange(panelVisible) {
    console.log('audio lists panel visible:', panelVisible);
  },

  onAudioListsSortEnd(oldIndex, newIndex) {
    console.log('audio lists sort end:', oldIndex, newIndex);
  },

  onAudioLyricChange(lineNum, currentLyric) {
    console.log('audio lyric change:', lineNum, currentLyric);
  },

  // custom music player root node
  getContainer() {
    if (typeof window !== 'undefined') {
      // return document.querySelector('#root')
      // return document.body;
    }
  },

  /**
   * @description get origin audio element instance , you can use it do everything
   * @example
   * audio.playbackRate = 1.5  // set play back rate
   * audio.crossOrigin = 'xxx' // config cross origin
   */
  getAudioInstance(audio) {
    console.log('audio instance', audio);
  },

  onBeforeDestroy(currentPlayId, audioLists, audioInfo) {
    console.log('onBeforeDestroy currentPlayId: ', currentPlayId);
    console.log('onBeforeDestroy audioLists: ', audioLists);
    console.log('onBeforeDestroy audioInfo: ', audioInfo);
    return new Promise((resolve, reject) => {
      // your custom validate
      // eslint-disable-next-line no-alert
      if (window.confirm('Are you confirm destroy the player?')) {
        // if resolve, player destroyed
        resolve();
      } else {
        // if reject, skip.
        reject();
      }
    });
  },

  onDestroyed(currentPlayId, audioLists, audioInfo) {
    // console.log('onDestroyed:', currentPlayId, audioLists, audioInfo);
  },

  onCoverClick(mode, audioLists, audioInfo) {
    console.log('onCoverClick: ', mode, audioLists, audioInfo);
  },

  // custom audio title
  // renderAudioTitle(audioInfo) {
  //   return <a href="#">{audioInfo.name}</a>
  // },

  // onPlayIndexChange (playIndex) {
  //   console.log('onPlayIndexChange: ', playIndex);
  // }

  // transform audio info like return a Promise

  /**
   * @return
   *  {
   *    src: 'xxx',
   *    filename: 'xxx',
   *    mimeType: 'xxx'
   *  }
   */
  // onBeforeAudioDownload() {
  //   return Promise.resolve({
  //     src: '1.mp3',
  //   })
  // },

  /**
   * customer download handler
   * eg. a link , or https://www.npmjs.com/package/file-saver
   * @param {*} downloadInfo
   * @example
   *
       customDownloader(downloadInfo) {
        const link = document.createElement('a')
        link.href = downloadInfo.src
        link.download = downloadInfo.filename || 'test'
        document.body.appendChild(link)
        link.click()
      },
   */
  // customDownloader(downloadInfo) {
  //   console.log(downloadInfo.src)
  //   console.log(downloadInfo.filename)
  //   console.log(downloadInfo.mimeType)
  // },
};

class Demo extends React.PureComponent {
  constructor(props) {
    super(props);
    this.audio = {};
  }

  state = {
    unmount: false,
    params: {
      ...options,
      getAudioInstance: (audio) => {
        this.audio = audio;
      },
    },
  };

  onAddAudio = () => {
    this.updateParams({
      clearPriorAudioLists: false,
      audioLists: [
        ...this.state.params.audioLists,
        {
          name: "I'm new here",
          singer: 'jack',
          cover: 'http://www.lijinke.cn/music/1387583682387727.jpg',
          musicSrc: `http://www.lijinke.cn/music/${Date.now()}.mp3`,
        },
      ],
    });
  };

  extendsContent = () => {
    this.updateParams({
      extendsContent: (
        <button
          type="button"
          onClick={() => {
            // eslint-disable-next-line no-alert
            alert("I'm extends content");
          }}
        >
          button
        </button>
      ),
    });
  };

  onChangeToFirstAudioList = () => {
    this.updateParams({
      clearPriorAudioLists: true,
      quietUpdate: false,
      audioLists: audioList1,
    });
  };

  onChangeToSecondAudioList = () => {
    this.updateParams({
      clearPriorAudioLists: true,
      quietUpdate: false,
      audioLists: audioList2,
    });
  };

  onQuietUpdateAudioList = () => {
    this.updateParams({
      clearPriorAudioLists: true,
      quietUpdate: true,
      audioLists: audioList3,
    });
  };

  onQuietUpdateAudioLis2 = () => {
    this.updateParams({
      clearPriorAudioLists: true,
      quietUpdate: true,
      audioLists: audioList4,
    });
  };

  onAutoPlayMode = () => {
    this.updateParams({
      autoPlay: !this.state.params.autoPlay,
    });
  };

  onAutoPlayInitLoadPlayList = () => {
    this.updateParams({
      autoPlayInitLoadPlayList: !this.state.params.autoPlayInitLoadPlayList,
    });
  };

  onClearPriorAudioLists = () => {
    this.updateParams({
      clearPriorAudioLists: !this.state.params.clearPriorAudioLists,
    });
  };

  onShowGlassBg = () => {
    this.onChangeKey('glassBg');
  };

  onDrag = () => {
    this.onChangeKey('drag');
  };

  onToggleMode = () => {
    this.onChangeKey('toggleMode');
  };

  onSeeked = () => {
    this.onChangeKey('seeked');
  };

  onChangeKey = (key) => {
    const data = {
      ...this.state.params,
      [key]: !this.state.params[key],
    };
    if (key === 'light' || key === 'dark') {
      data.theme = key;
    }
    if (key === 'full' || key === 'mini') {
      data.mode = key;
    }
    if (Object.values(Locale).includes(key)) {
      data.locale = key;
    }
    this.setState({ params: data });
  };

  showMiniProcessBar = () => {
    this.onChangeKey('showMiniProcessBar');
  };

  showMiniModeCover = () => {
    this.onChangeKey('showMiniModeCover');
  };

  playModeShowTime = () => {
    this.updateParams({
      playModeShowTime: createRandomNum(200, 2000),
    });
  };

  changePlayIndex = () => {
    this.updateParams({
      playIndex: createRandomNum(0, this.state.params.audioLists.length - 1),
    });
  };

  updateParams = (params) => {
    const data = {
      ...this.state.params,
      ...params,
    };
    this.setState({
      params: data,
    });
  };

  unmountPlayer = () => {
    this.setState({ unmount: true });
  };

  onPlayModeChange = (e) => {
    this.updateParams({ playMode: e.target.value });
  };

  renderCustomAudioTitle = () => {
    this.updateParams({
      renderAudioTitle: (audioInfo, isMobile) => {
        return (
          <>
            <a href="#">{audioInfo.name}</a>
            <span className="tag">Hot</span>
          </>
        );
      },
    });
  };

  renderCustomUI = () => {
    return (
      <>
        <h2>Custom UI</h2>
        <button type="button" onClick={() => this.audio.play()}>
          play
        </button>
        <button type="button" onClick={() => this.audio.pause()}>
          pause
        </button>
        <button type="button" onClick={() => this.audio.load()}>
          reload
        </button>
        <button
          type="button"
          onClick={() => {
            this.audio.currentTime = 40;
          }}
        >
          change current play time to 00:40
        </button>
        <button
          type="button"
          onClick={() => {
            this.audio.playbackRate = 2;
          }}
        >
          change play back rate to 2
        </button>
        <button
          type="button"
          onClick={() => {
            this.audio.volume = 0.2;
          }}
        >
          change volume to 0.2
        </button>
        <button
          type="button"
          onClick={() => {
            this.audio.destroy();
          }}
        >
          destroy player
        </button>
        <button type="button" onClick={this.audio.togglePlay}>
          toggle play
        </button>
        <button type="button" onClick={this.audio.clear}>
          clear audio lists
        </button>
        <button type="button" onClick={this.audio.playNext}>
          play next
        </button>
        <button type="button" onClick={this.audio.playPrev}>
          play prev
        </button>
        <button
          type="button"
          onClick={() => {
            this.audio.playByIndex(1);
          }}
        >
          play by index (1)
        </button>
        <button
          type="button"
          onClick={() => {
            this.audio.updatePlayIndex(1);
          }}
        >
          update play index (1)
        </button>
      </>
    );
  };

  render() {
    const { params, unmount } = this.state;
    return (
      <>
        {unmount ? null : (
          <ReactJkMusicPlayer
            {...params}
            onThemeChange={(theme) => {
              console.log('onThemeChange: ', theme);
              this.updateParams({ theme });
            }}
            onModeChange={(mode) => {
              console.log('onModeChange: ', mode);
              this.updateParams({ mode });
            }}
            onPlayModeChange={(playMode) => {
              console.log('onPlayModeChange: ', playMode);
              this.updateParams({ playMode });
            }}
            onPlayIndexChange={(playIndex) => {
              console.log('onPlayIndexChange: ', playIndex);
              this.updateParams({ playIndex });
            }}
          />
        )}
      </>
    );
  }
}

export default Demo;
