import React, { Component } from 'react';

export default class DevicesPage extends Component {
  render() {
    return (
      <>
        <div className="main__content">
          <div className="main__content__header">
            <div className="main__content__header__text">Devices</div>
            <div className="main__content__header__options">
              <svg viewBox="0 0 512 512">
                <path
                  d="m256 0c-141.164062 0-256 114.835938-256 256s114.835938 256 256 256 256-114.835938 256-256-114.835938-256-256-256zm0 0"
                  fill="#2196f3"
                />
                <path
                  d="m368 277.332031h-90.667969v90.667969c0 11.777344-9.554687 21.332031-21.332031 21.332031s-21.332031-9.554687-21.332031-21.332031v-90.667969h-90.667969c-11.777344 0-21.332031-9.554687-21.332031-21.332031s9.554687-21.332031 21.332031-21.332031h90.667969v-90.667969c0-11.777344 9.554687-21.332031 21.332031-21.332031s21.332031 9.554687 21.332031 21.332031v90.667969h90.667969c11.777344 0 21.332031 9.554687 21.332031 21.332031s-9.554687 21.332031-21.332031 21.332031zm0 0"
                  fill="#fafafa"
                />
              </svg>
            </div>
          </div>
        </div>
      </>
    );
  }
}
