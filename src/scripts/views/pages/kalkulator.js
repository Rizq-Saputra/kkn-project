/* eslint-disable radix */
/* eslint-disable no-undef */
/* eslint-disable no-use-before-define */
import whoData from '../../data/whoData';
import ArtikelSource from '../../data/artikel-source';
import MpasiSource from '../../data/mpasi-source';
import '../../components/loader';

import {
  createArtikelTemplate,
  createMpasiTemplate,
  renderNotFound,
} from '../templates/template-creator';

const Kalkulator = {
  async render() {
    return `
      <div class="container mt-5 d-flex justify-content-center align-items-center kalkulator" style="height: 80vh;">
      <form class="needs-validation" action="">
      <h1 tabindex="0" class="text-center fw-bold">Kalkulator Gizi</h1>
          <div class="radio-tile-group d-flex justify-content-center flex-wrap">

          <div class="input-container">
              <input tabindex="0" id="gender1" type="radio" value="wanita" name="radio" required/>
              <div tabindex="0" class="radio-tile">
              <svg width="200" height="200" class="wanita">
                  <circle cx="100" cy="100" r="100" fill="#fff" />
                  <path d="M138.8 73.4C138.8 97.9 199.5 193.9 100.1 193.9C0.699955 193.9 61.3999 97.9 61.3999 73.4C61.3999 48.9 63 29 100.1 29C137.2 29 138.8 48.9 138.8 73.4Z" fill="white"/>
                  <path d="M100.1 194.6C75.2002 194.6 58.2002 188.5 49.5002 176.4C34.8002 156 46.0002 122.7 54.1002 98.4C57.6002 87.9 60.7002 78.8 60.7002 73.4C60.7002 47 63.5002 28.3 100.1 28.3C136.7 28.3 139.6 47 139.6 73.4C139.6 78.8 142.6 87.9 146.2 98.4C154.3 122.7 165.5 156 150.8 176.4C142 188.5 125 194.6 100.1 194.6ZM100.1 29.7C64.7002 29.7 62.1002 47 62.1002 73.4C62.1002 79 59.0002 88.2 55.4002 98.9C47.4002 122.9 36.4002 155.8 50.6002 175.6C59.1002 187.3 75.7002 193.2 100.1 193.2C124.5 193.2 141.1 187.3 149.6 175.6C163.9 155.8 152.8 122.9 144.8 98.9C141.2 88.2 138.1 79 138.1 73.4C138.1 47 135.5 29.8 100.1 29.7Z" fill="#231F20"/>
                  <path d="M177.9 163.1C161.4 183.8 137.4 197.1 111.1 200C103.8 200.8 96.4999 200.8 89.1999 200C62.8999 197.1 38.7999 183.8 22.3999 163.1C34.3999 154.8 49.9999 146 67.6999 140.8C88.8999 134.2 111.5 134.2 132.7 140.8C150.3 146.1 165.9 154.8 177.9 163.1Z" fill="#019973"/>
                  <path d="M82.1 136.7C82.1 136.6 61.4 141.2 61.7 142.7C62 144.2 84.7 188.5 86 188.5C87.3 188.5 100.1 180.7 100.1 180.7L82.1 136.7Z" fill="white"/>
                  <path d="M86 189.2C85.4 189.2 84.7 189.2 72.8 166.4C68 157.2 61.2 143.8 60.9 142.8C60.8 142.4 61 142 61.4 141.7C62.9 140.5 81.4 135.5 82.4 136C82.6 136.1 82.7 136.2 82.7 136.4L100.7 180.4C100.8 180.7 100.7 181.1 100.4 181.3C96.6 183.7 87.3 189.2 86 189.2ZM62.5 142.8C64.3 147.1 83.5 184.5 86.2 187.7C87.6 187.2 93.6 183.8 99.2 180.4L81.6 137.5C78.5 138.2 64.6 141.5 62.5 142.8Z" fill="#231F20"/>
                  <path d="M117.6 136.7C117.6 136.6 138.3 141.2 138 142.7C137.7 144.2 115 188.5 113.7 188.5C112.4 188.5 99.6001 180.7 99.6001 180.7L117.6 136.7Z" fill="white"/>
                  <path d="M113.7 189.2C112.3 189.2 103.1 183.7 99.1998 181.3C98.8998 181.1 98.7998 180.7 98.8998 180.4L116.9 136.4C117 136.2 117.1 136.1 117.2 136C118.2 135.5 136.6 140.5 138.2 141.7C138.6 141.9 138.7 142.3 138.7 142.8C138.5 143.8 131.7 157.2 126.8 166.4C115 189.2 114.3 189.2 113.7 189.2ZM100.5 180.4C106 183.8 112 187.2 113.5 187.7C116.2 184.5 135.4 147.1 137.2 142.8C135.1 141.5 121.2 138.2 118.1 137.5L100.5 180.4Z" fill="#231F20"/>
                  <path d="M120.8 147.7L100.1 180.7L78.2998 147.7C88.4998 144.7 110.6 144.7 120.8 147.7Z" fill="#231F20"/>
                  <path d="M124.5 88.7C126.4 76.9 146 74 145 87.9C144.7 92.7 143.1 97.6 139.8 101C136.5 104.4 131 106 126.6 104.1" fill="white"/>
                  <path d="M130.8 105.6C129.3 105.6 127.8 105.3 126.4 104.7C126 104.5 125.9 104.1 126 103.8C126.2 103.4 126.6 103.3 126.9 103.4C130.8 105.1 135.9 103.9 139.3 100.5C143 96.7 144.1 91.6 144.3 87.9C144.6 83.1 142.3 79.9 138 79.4C132.8 78.8 126.2 82.5 125.2 88.8C125.1 89.2 124.8 89.5 124.4 89.4C124 89.3 123.7 89 123.8 88.6C124.9 81.5 132.3 77.3 138.2 78C142.2 78.4 146.2 81.3 145.8 88C145.5 91.9 144.4 97.5 140.4 101.5C137.8 104 134.4 105.5 130.8 105.6Z" fill="#231F20"/>
                  <path d="M75.6 88.7C73.7 76.9 54.1 74 55.1 87.9C55.4 92.7 57 97.6 60.3 101C63.6 104.4 69.1 106 73.5 104.1" fill="white"/>
                  <path d="M69.3999 105.6C65.7999 105.5 62.3 104 59.8 101.5C55.8 97.4 54.5999 91.9 54.3999 88C53.8999 81.3 58 78.4 62 78C67.9 77.3 75.2999 81.5 76.3999 88.6C76.4999 89 76.2 89.4 75.8 89.4C75.4 89.5 75 89.2 75 88.8C74 82.5 67.4 78.8 62.2 79.4C57.9 79.9 55.5999 83.1 55.8999 87.9C56.1999 91.6 57.1999 96.8 60.8999 100.5C64.2999 104 69.4 105.2 73.3 103.4C73.7 103.2 74.1 103.4 74.3 103.8C74.5 104.2 74.2999 104.6 73.8999 104.8C72.3999 105.3 70.8999 105.6 69.3999 105.6Z" fill="#231F20"/>
                  <path d="M78.2998 147.7C78.2998 147.7 83.5998 159.3 99.0998 159.3C111.5 159.3 120.9 147.7 120.9 147.7L118.8 102.3H80.3998L78.2998 147.7Z" fill="white"/>
                  <path d="M99.1 160C83.3 160 77.7 148.1 77.6 148C77.6 147.9 77.5 147.8 77.5 147.7L79.6 102.3C79.6 101.9 79.9 101.6 80.3 101.6H118.7C119.1 101.6 119.4 101.9 119.4 102.3L121.5 147.7C121.5 147.9 121.5 148.1 121.3 148.2C121 148.7 111.6 160 99.1 160ZM79 147.6C79.7 149 85 158.6 99.1 158.6C110.1 158.6 118.8 149 120.1 147.5L118.1 103.1H81L79 147.6Z" fill="#231F20"/>
                  <path d="M80.3001 121.7C83.0001 126 87.4001 129.4 91.9001 131.9C99.5001 136.1 110.9 140.8 120.1 139.4L118.6 120.2C111.8 121 105 121.1 98.2001 120.3C92.2001 119.8 86.1001 119.2 80.6001 116.9C79.8001 116.6 79.1001 119.9 80.3001 121.7Z" fill="#231F20"/>
                  <path d="M116.6 140.4C107.3 140.4 97.2 135.6 91.6 132.5C86 129.4 82.1 126 79.7 122.1C78.6 120.4 78.8 117.7 79.6 116.7C79.9 116.3 80.5 116.2 80.9 116.4C86.4 118.7 92.7 119.3 98.3 119.7C105 120.5 111.8 120.4 118.5 119.6C118.7 119.6 118.9 119.6 119 119.7C119.2 119.8 119.2 120 119.3 120.2L120.8 139.4C120.8 139.8 120.6 140.1 120.2 140.1C119.1 140.3 117.9 140.4 116.6 140.4ZM80.6 117.7C80.2 118.9 80.3 120.2 80.9 121.4C83.2 125.1 87 128.4 92.3 131.3C98.4 134.7 109.8 140 119.4 138.8L118 121C111.4 121.7 104.8 121.7 98.2 121C92.6 120.6 86.3 120 80.6 117.7Z" fill="#231F20"/>
                  <path d="M100.5 98C99.2002 98 97.9002 97.9 96.6002 97.8C96.1002 97.7 95.6002 97.4 95.3002 96.9C93.3002 93.6 98.6002 79.4 99.7002 76.5C99.8002 76.1 100.3 75.9 100.6 76.1C101 76.2 101.2 76.7 101 77C98.6002 83.3 95.3002 94 96.5002 96.1C96.5002 96.2 96.6002 96.3 96.7002 96.3C99.3002 96.6 101.8 96.6 104.4 96.3C104.8 96.2 105.1 96.5 105.2 96.9C105.3 97.3 105 97.7 104.6 97.7C103.3 97.9 101.9 98 100.5 98Z" fill="#231F20"/>
                  <path d="M128.8 66.5V97.7C128.8 112.7 116.7 124.8 101.7 124.8H98.4999C83.4999 124.8 71.3999 112.7 71.3999 97.7V68.1L88.3999 66.7L90.3999 53.2L94.6999 68.5L106.8 66.9C108 61.5 106.8 49.8 106.6 49.3L115.3 65.7L128.8 66.5Z" fill="white"/>
                  <path d="M101.7 125.5H98.5002C83.1002 125.5 70.7002 113.1 70.7002 97.7V68.1C70.7002 67.7 71.0002 67.4 71.4002 67.4L87.9002 66L89.8002 53C89.8002 52.7 90.1002 52.4 90.5002 52.4C90.8002 52.4 91.2002 52.6 91.2002 52.9L95.3002 67.6L106.3 66.2C107.3 60.8 106.1 50 106 49.4C105.9 49 106.1 48.7 106.5 48.6C106.8 48.5 107.2 48.6 107.4 48.9L115.9 64.9L128.9 65.8C129.3 65.8 129.6 66.1 129.6 66.5V97.7C129.5 113 117.1 125.5 101.7 125.5ZM72.1002 68.8V97.7C72.1002 112.3 83.9002 124 98.5002 124.1H101.7C116.2 124.1 128 112.3 128.1 97.7V67.2L115.4 66.3C115.1 66.3 114.9 66.1 114.8 65.9L107.8 52.8C108.1 56.9 108.4 63.3 107.6 67C107.5 67.3 107.3 67.5 107 67.6L94.9002 69.2C94.5002 69.3 94.2002 69 94.1002 68.7L90.7002 56.7L89.2002 66.8C89.2002 67.1 88.9002 67.4 88.5002 67.4L72.1002 68.8Z" fill="#231F20"/>
                  <path d="M100.1 201.2C44.8 201.2 0 156.4 0 101.1C0 45.8 44.8 1 100.1 1C155.4 1 200.2 45.8 200.2 101.1C200.2 123.8 192.5 145.7 178.4 163.5C159.4 187.4 130.6 201.3 100.1 201.2ZM100.1 2.3C45.6 2.4 1.40002 46.6 1.30002 101.1C1.30002 155.7 45.5 199.9 100.1 199.9C154.7 199.9 198.9 155.7 198.9 101.1C198.8 46.6 154.6 2.4 100.1 2.3Z" fill="#231F20"/>
                  <path d="M147.3 189.2C146.8 189.2 146.5 188.8 146.6 188.4L150 162.5C150.1 162.1 150.4 161.8 150.8 161.9C151.2 162 151.5 162.3 151.4 162.7L148 188.6C147.9 188.9 147.6 189.2 147.3 189.2Z" fill="#231F20"/>
                  <path d="M52.8998 189.2C52.4998 189.2 52.1998 188.9 52.1998 188.6L48.7998 162.7C48.7998 162.3 49.0998 162 49.4998 161.9C49.8998 161.9 50.1998 162.1 50.1998 162.5L53.5998 188.4C53.6998 188.8 53.3998 189.2 52.9998 189.2H52.8998Z" fill="#231F20"/>
                  <path d="M100.1 284.5C82.5003 284.5 68.3003 270.2 68.3003 252.7C68.3003 235.2 82.6003 220.9 100.1 220.9C117.6 220.9 131.9 235.2 131.9 252.7C131.9 270.2 117.7 284.5 100.1 284.5ZM100.1 225C84.8003 225 72.5003 237.4 72.5003 252.6C72.5003 267.9 84.9003 280.2 100.1 280.2C115.4 280.2 127.7 267.8 127.7 252.6C127.7 237.4 115.4 225 100.1 225Z" fill="#FF00A8"/>
                  <path d="M100.1 301.3C98.9005 301.3 98.0005 300.4 98.0005 299.2V282.4C98.0005 281.2 98.9005 280.3 100.1 280.3C101.3 280.3 102.201 281.2 102.201 282.4V299.2C102.201 300.4 101.3 301.3 100.1 301.3Z" fill="#FF00A8"/>
                  <path d="M107.1 295.3H93.1005C91.9005 295.3 91.0005 294.4 91.0005 293.2C91.0005 292 91.9005 291.1 93.1005 291.1H107.1C108.3 291.1 109.201 292 109.201 293.2C109.201 294.4 108.3 295.3 107.1 295.3Z" fill="#FF00A8"/>
              </svg>
              <label for="Wanita">Wanita</label>
              </div>
          </div>
          <div class="input-container">
              <input tabindex="0" id="gender2" type="radio" value="pria" name="radio" required/>     
              <div tabindex="0" class="radio-tile">
              <svg width="200" height="200" class="pria">
                  <circle cx="100" cy="100" r="100" fill="#fff" />
                  <path d="M177.9 162.1C161.4 182.8 137.4 196.1 111.1 199C103.8 199.8 96.4999 199.8 89.1999 199C62.8999 196.1 38.7999 182.8 22.3999 162.1C34.3999 153.8 49.9999 145 67.6999 139.8C78.1999 136.6 89.0999 134.9 100.1 134.9C111.1 135 122.1 136.6 132.6 139.8C150.3 145.1 165.9 153.8 177.9 162.1Z" fill="#019973"/>
                  <path d="M120.8 146.7L111.1 199C110.3 199.1 109.5 199.2 108.7 199.2C105.9 199.4 103.1 199.6 100.2 199.6C96.9999 199.6 93.7999 199.5 90.5999 199.1L89.2999 199L78.3999 146.7C88.4999 143.7 110.6 143.7 120.8 146.7Z" fill="#231F20"/>
                  <path d="M100.1 116.8C121.473 116.8 138.8 96.9214 138.8 72.4C138.8 47.8786 121.473 28 100.1 28C78.7265 28 61.3999 47.8786 61.3999 72.4C61.3999 96.9214 78.7265 116.8 100.1 116.8Z" fill="white"/>
                  <path d="M100.1 117.5C78.3002 117.5 60.7002 97.3 60.7002 72.4C60.7002 46 63.5002 27.3 100.1 27.3C136.7 27.3 139.5 46 139.5 72.4C139.5 97.3 121.9 117.5 100.1 117.5ZM100.1 28.7C64.8002 28.7 62.1002 46 62.1002 72.4C62.1002 96.5 79.1002 116.1 100.1 116.1C121.1 116.1 138.1 96.5 138.1 72.4C138.1 46 135.5 28.8 100.1 28.7Z" fill="#231F20"/>
                  <path d="M124.5 87.7C126.4 75.9 146 73 145 86.9C144.7 91.7 143.1 96.6 139.8 100C136.5 103.4 131 105 126.6 103.1" fill="white"/>
                  <path d="M130.8 104.6C129.3 104.6 127.8 104.3 126.4 103.7C126 103.5 125.9 103.1 126 102.7C126.1 102.3 126.6 102.2 127 102.3C130.9 104 135.9 102.8 139.4 99.4C143.1 95.6 144.2 90.5 144.4 86.8C144.7 82 142.4 78.8 138.1 78.3C132.9 77.7 126.3 81.4 125.3 87.7C125.2 88.1 124.8 88.3 124.4 88.2C124 88.1 123.8 87.8 123.8 87.4C124.9 80.3 132.3 76.1 138.2 76.8C142.2 77.2 146.2 80.1 145.8 86.8C145.5 90.7 144.4 96.3 140.4 100.3C137.8 103 134.4 104.5 130.8 104.6Z" fill="#231F20"/>
                  <path d="M75.7001 87.7C73.8001 75.9 54.2001 73 55.2001 86.9C55.5001 91.7 57.1001 96.6 60.4001 100C63.7001 103.4 69.2001 105 73.6001 103.1" fill="white"/>
                  <path d="M69.3999 104.6C65.7999 104.5 62.2999 103.1 59.7999 100.5C55.7999 96.4 54.5999 90.9 54.3999 87C53.8999 80.3 57.9999 77.4 61.9999 77C67.8999 76.3 75.2999 80.5 76.3999 87.6C76.4999 88 76.1999 88.4 75.7999 88.4C75.3999 88.5 74.9999 88.2 74.9999 87.8C73.9999 81.5 67.3999 77.8 62.1999 78.4C57.8999 78.9 55.5999 82.1 55.8999 86.9C56.0999 90.6 57.1999 95.8 60.8999 99.5C64.2999 103 69.3999 104.2 73.1999 102.4C73.5999 102.2 73.9999 102.4 74.0999 102.7C74.2999 103.1 74.0999 103.5 73.6999 103.6C72.3999 104.3 70.8999 104.6 69.3999 104.6Z" fill="#231F20"/>
                  <path d="M78.2998 146.7C78.2998 146.7 83.5998 158.3 99.0998 158.3C114.6 158.3 120.9 146.7 120.9 146.7L118.8 101.3H80.3998L78.2998 146.7Z" fill="white"/>
                  <path d="M99.1 159C83.3 159 77.7 147.1 77.6 147C77.6 146.9 77.5 146.8 77.5 146.7L79.6 101.3C79.6 100.9 79.9 100.6 80.3 100.6H118.7C119.1 100.6 119.4 100.9 119.4 101.3L121.5 146.7C121.5 146.8 121.5 147 121.4 147.1C116.6 154.6 108.1 159.2 99.1 159ZM79 146.6C79.7 148 85 157.6 99.1 157.6C107.5 157.8 115.5 153.6 120.1 146.6L118.1 102.1H81.1L79 146.6Z" fill="#231F20"/>
                  <path d="M80.3 120.7C83 125 87.4 128.4 91.9 130.9C99.5 135.1 110.9 139.8 120.1 138.4L118.6 119.2C111.8 120 105 120.1 98.2 119.3C92.2 118.8 86.1 118.2 80.6 115.9C79.8 115.6 79.2 118.9 80.3 120.7Z" fill="#231F20"/>
                  <path d="M116.7 139.4C107.4 139.4 97.3001 134.6 91.7001 131.5C86.2001 128.5 82.3001 125 79.8001 121.1C78.7001 119.4 78.9001 116.7 79.7001 115.7C80.0001 115.3 80.6001 115.2 81.0001 115.4C86.5001 117.7 92.8001 118.3 98.4001 118.7C105.1 119.5 111.9 119.4 118.6 118.6C118.8 118.6 119 118.6 119.1 118.7C119.2 118.8 119.3 119 119.4 119.2L120.9 138.4C120.9 138.8 120.7 139.1 120.3 139.1C119.1 139.3 117.9 139.4 116.7 139.4ZM80.7001 116.7C80.3001 117.9 80.4001 119.2 81.0001 120.4C83.3001 124.1 87.1001 127.4 92.4001 130.3C98.4001 133.7 109.9 139 119.5 137.8L118.1 120C111.5 120.7 104.9 120.7 98.3001 120C92.6001 119.6 86.3001 119 80.7001 116.7Z" fill="#231F20"/>
                  <path d="M98.4999 123.8H101.7C116.7 123.8 128.8 111.7 128.8 96.7V53.8C128.8 53.8 119.4 56.5 100.1 56.5C80.7999 56.5 71.3999 53.8 71.3999 53.8V96.7C71.3999 111.6 83.5999 123.8 98.4999 123.8Z" fill="white"/>
                  <path d="M128.8 53.8V96.7C128.8 111.7 116.7 123.8 101.7 123.8H98.4999C83.4999 123.8 71.3999 111.7 71.3999 96.7V53.8C71.3999 53.8 80.7999 56.5 100.1 56.5C119.4 56.5 128.8 53.8 128.8 53.8ZM71.3999 52.4C71.0999 52.4 70.7999 52.5 70.4999 52.7C70.0999 53 69.8999 53.4 69.8999 53.9V96.8C69.8999 112.5 82.6999 125.3 98.3999 125.3H101.6C117.4 125.3 130.1 112.5 130.1 96.8V53.9C130.1 53.1 129.5 52.5 128.7 52.5C128.6 52.5 128.4 52.5 128.3 52.6C128.2 52.6 118.8 55.2 99.9999 55.2C81.1999 55.2 71.7999 52.6 71.6999 52.6C71.6999 52.4 71.5999 52.3 71.3999 52.4Z" fill="#231F20"/>
                  <path d="M100.5 97C99.2002 97 97.9002 96.9 96.6002 96.8C96.1002 96.7 95.6002 96.4 95.3002 95.9C93.3002 92.6 98.6002 78.4 99.7002 75.5C99.8002 75.1 100.3 74.9 100.6 75.1C101 75.2 101.2 75.6 101 76C98.6002 82.3 95.3002 93 96.5002 95.1C96.6002 95.2 96.7002 95.3 96.7002 95.3C99.3002 95.6 101.8 95.6 104.4 95.3C104.8 95.3 105.2 95.5 105.2 95.9C105.2 96.3 105 96.7 104.6 96.7C103.3 96.9 101.9 97 100.5 97Z" fill="#231F20"/>
                  <path d="M100.1 200.2C44.8 200.2 0 155.4 0 100.1C0 44.8 44.8 0 100.1 0C155.4 0 200.2 44.8 200.2 100.1C200.2 100.1 200.2 100.1 200.2 100.2C200.1 155.4 155.3 200.2 100.1 200.2ZM100.1 1.3C45.5 1.4 1.3 45.6 1.3 100.2C1.3 154.8 45.5 199 100.1 199C154.7 199 198.9 154.8 198.9 100.2C198.9 45.6 154.7 1.4 100.1 1.3Z" fill="#231F20"/>
                  <path d="M99.5998 170.3L92.2998 164.6L99.5998 159L106.9 164.6L99.5998 170.3Z" fill="white"/>
                  <path d="M108.6 199.2C105.8 199.4 103 199.6 100.1 199.6C96.9 199.6 93.7 199.5 90.5 199.1L97.1 168.3L97.2 167.9H102L102.1 168.3L108.6 199.2Z" fill="white"/>
                  <path d="M147.3 188.2H147.2C146.8 188.1 146.5 187.8 146.6 187.4L150 161.5C150.1 161.1 150.4 160.8 150.8 160.9C151.2 161 151.5 161.3 151.4 161.7L148 187.6C147.9 187.9 147.6 188.2 147.3 188.2Z" fill="#231F20"/>
                  <path d="M52.9001 188.2C52.5001 188.2 52.2001 187.9 52.2001 187.6L48.8001 161.8C48.7001 161.4 49.0001 161 49.4001 161C49.8001 160.9 50.2001 161.2 50.2001 161.6L53.6001 187.5C53.6001 187.9 53.4001 188.2 53.0001 188.3H52.9001V188.2Z" fill="#231F20"/>
                  <path d="M94.9001 290.6C77.3001 290.6 63.1001 276.3 63.1001 258.8C63.1001 241.2 77.4001 227 94.9001 227C112.4 227 126.7 241.3 126.7 258.8C126.7 267.2 123.3 275.3 117.4 281.3C111.4 287.2 103.3 290.6 94.9001 290.6ZM94.9001 231.1C79.6001 231.1 67.3001 243.5 67.3001 258.7C67.3001 273.9 79.7001 286.3 94.9001 286.3C110.2 286.3 122.5 273.9 122.5 258.7C122.5 251.4 119.6 244.3 114.4 239.2C109.3 234 102.2 231.1 94.9001 231.1Z" fill="#0174BE"/>
                  <path d="M115.9 239.8C114.7 239.8 113.8 238.8 113.8 237.7C113.8 237.2 114 236.6 114.4 236.2L122.7 227.9C123.5 227.1 124.9 227.1 125.7 227.9C126.5 228.7 126.5 230.1 125.7 230.9L117.4 239.2C117 239.6 116.5 239.9 115.9 239.8Z" fill="#0174BE"/>
                  <path d="M126.1 239.3C125 239.3 124.1 238.5 124 237.4L123.4 230.4L116.2 229.7C115 229.6 114.2 228.5 114.3 227.4C114.4 226.3 115.5 225.4 116.6 225.5L125.5 226.4C126.5 226.5 127.3 227.3 127.4 228.3L128.2 237.1C128.3 238.3 127.4 239.3 126.3 239.4L126.1 239.3Z" fill="#0174BE"/>
              </svg>
              <label for="Pria">Pria</label>
              </div>
          </div>
          
          </div>
          <div class="mb-3">
              <label tabindex="0" for="usia" class="form-label">Usia (0-23 Bulan)</label>
              <input tabindex="0" type="number" class="form-control" id="usia" placeholder="Masukkan usia Anda" min="0" max="23" required>
              <div tabindex="0" class="invalid-feedback">
                  Tolong isi kolom ini terlebih dahulu (0-23 Bulan)
              </div>
          </div>
          <div class="mb-3">
              <label tabindex="0" for="beratBadan" class="form-label">Berat Badan (kg)</label>
              <input tabindex="0" type="number" class="form-control" id="beratBadan" placeholder="Masukkan berat badan Anda" min="0" required>
              <div tabindex="0" class="invalid-feedback">
                  Tolong isi kolom ini terlebih dahulu
              </div>
          </div>
          <div class="mb-3">
              <label tabindex="0" for="tinggiBadan" class="form-label">Tinggi Badan (cm)</label>
              <input tabindex="0" type="number" class="form-control" id="tinggiBadan" placeholder="Masukkan tinggi badan Anda" min="0" required>
              <div tabindex="0" class="invalid-feedback">
                  Tolong isi kolom ini terlebih dahulu
              </div>
          </div>
          <div class="d-grid">
              <button tabindex="0" aria-label="tombol hitung" type="submit" class="btn btn-custom">Hitung</button>
          </div>
          </form>
          </div>
          <custom-loader></custom-loader>
          <div id="result" class="mt-4 mb-4 d-flex justify-content-center align-items-center"></div>
          <div id="rekomendasi"></div>
          <div id="hasilRekomendasi"></div>
      `;
  },

  async afterRender() {
    const forms = document.querySelectorAll('.needs-validation');
    const loader = document.querySelector('custom-loader');

    Array.prototype.slice.call(forms).forEach((form) => {
      form.addEventListener(
        'submit',
        (event) => {
          if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
          } else {
            event.preventDefault();
            loader.show();
            setTimeout(() => {
              loader.hide();
            }, 500);
            handleFormSubmit();
            scrollToResult();
          }

          form.classList.add('was-validated');
        },
        false,
      );
    });

    function scrollToResult() {
      const resultDiv = document.getElementById('result');
      resultDiv.scrollIntoView({ behavior: 'smooth' });
    }

    async function handleFormSubmit() {
      const ageMonths = parseInt(document.getElementById('usia').value);
      const weightKg = parseFloat(document.getElementById('beratBadan').value);
      const heightCm = parseFloat(document.getElementById('tinggiBadan').value);
      document.querySelectorAll('input[name="radio"]').forEach((elem) => {
        elem.addEventListener('change', (event) => {
          const gender = event.target.value;
          console.log(gender);
        });
      });
      const gender = document.querySelector(
        'input[name="radio"]:checked',
      ).value;

      const waz = calculateWAZ(ageMonths, weightKg, gender);
      const haz = calculateHAZ(ageMonths, heightCm, gender);
      const result = determineSPGA(waz, haz, ageMonths, gender);

      displayResult(result, waz, haz);
      displayRecommendationOptions();
      await displayRekomendasi(ageMonths, 'mpasi');
    }

    function calculateWAZ(ageInMonths, weightKg, gender) {
      const data = gender === 'pria' ? whoData.maleWeight : whoData.femaleWeight;
      const { range } = data.find((entry) => entry.ageMonths === ageInMonths);
      const zScore = (weightKg - range[0]) / (range[1] - range[0]);
      return zScore;
    }

    function calculateHAZ(ageInMonths, heightCm, gender) {
      const data = gender === 'pria' ? whoData.maleHeight : whoData.femaleHeight;
      const { range } = data.find((entry) => entry.ageMonths === ageInMonths);
      const zScore = (heightCm - range[0]) / (range[1] - range[0]);
      return zScore;
    }

    function determineSPGA(waz, haz, ageInMonths, gender) {
      const isUnderweight = waz <= -2 || haz <= -2;
      const isModeratelyMalnourished = (waz > -2 && waz <= -1) || (haz > -2 && haz <= -1);
      const isOverweight = waz > 1 || haz > 1;

      const weightData = gender === 'pria' ? whoData.maleWeight : whoData.femaleWeight;
      const heightData = gender === 'pria' ? whoData.maleHeight : whoData.femaleHeight;
      const weightRange = weightData.find(
        (entry) => entry.ageMonths === ageInMonths,
      ).range;
      const heightRange = heightData.find(
        (entry) => entry.ageMonths === ageInMonths,
      ).range;
      if (isOverweight) {
        return {
          status: 'Gizi Lebih (Overweight/Obese)',
          gambar: '../images/Gizi-Lebih.webp',
          weightRecommendation: `${weightRange[0]} - ${weightRange[1]} kg`,
          heightRecommendation: `${heightRange[0]} - ${heightRange[1]} cm`,
        };
      }

      if (isUnderweight || isModeratelyMalnourished) {
        return {
          status: isUnderweight
            ? 'Gizi Kurang (Underweight/Stunted)'
            : 'Gizi Kurang (Moderately Malnourished)',
          weightRecommendation: `${weightRange[0]} - ${weightRange[1]} kg`,
          heightRecommendation: `${heightRange[0]} - ${heightRange[1]} cm`,
          gambar: '../images/Gizi-Kurang.webp',
        };
      }

      return {
        status: 'Normal (Well-Nourished)',
        weightRecommendation:
          'Berat badan anak sudah sesuai.',
        heightRecommendation:
          'Tinggi badan anak sudah sesuai.',
        gambar: '../images/Gizi-baik.webp',
      };
    }

    function displayResult(result) {
      const resultDiv = document.getElementById('result');
      resultDiv.innerHTML = `
        <div class="card" style="width: 85%;">
            <div class="card-body">
                <div class="row align-items-center">
                <div class="container mt-5">
                <div class="row">
                  <div class="col-md-6 text-center">
                    <img tabindex="0" src="${result.gambar}" class="img-fluid" alt="Gambar Hasil Perhitungan" style="display:block; margin-inline:auto;">
                  </div>
                  <div class="col-md-6 text-center" style="margin-block: auto;">
                    <h1 tabindex="0" class="text-center">Informasi Gizi</h1>
                  <div tabindex="0" class="result-box mt-4">
                      <div class="text-secondary">Status Gizi</div>
                      <div class="bg-success text-white py-2 rounded d-inline-block px-3">${result.status}</div>
                    </div>
                    
                    <div tabindex="0" class="result-box">
                      <div class="text-secondary">Berat Badan Ideal</div>
                      <div class="bg-success text-white py-2 rounded d-inline-block px-3">${result.weightRecommendation}</div>
                    </div>
                    
                    <div tabindex="0" class="result-box">
                      <div class="text-secondary">Tinggi Badan Ideal</div>
                      <div class="bg-success text-white py-2 rounded d-inline-block px-3">${result.heightRecommendation}</div>
                    </div>
                  </div>
                </div>
              </div>
                </div>
            </div>
        </div>
          `;
    }

    function displayRecommendationOptions() {
      const rekomendasi = document.getElementById('rekomendasi');
      rekomendasi.innerHTML = `
        <div class="container d-flex justify-content-center align-items-center flex-column mb-4">
          <div class="mb-4"><h1 tabindex="0">Rekomendasi Kategori</h1></div>
          <div class="radio-tile-group d-flex flex-wrap justify-content-center">
            <div class="input-container" style="position: relative; height: 7rem; width: 7rem; margin: 0.5rem;">
              <input tabindex="0" id="mpasi" type="radio" name="rekomendasi-radio" style="position: absolute; height: 100%; width: 100%; margin: 0; cursor: pointer; z-index: 2; opacity: 0;" checked>
              <div tabindex="0" class="radio-tile2" style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; border: 2px solid #019973; border-radius: 8px; transition: all 300ms ease;">
                <ion-icon name="nutrition-outline" style="color: #019973; font-size: 3rem;"></ion-icon>
                <label for="mpasi" style="color: #019973; font-size: 0.8rem; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">Mpasi</label>
              </div>
            </div>
            <div class="input-container" style="position: relative; height: 7rem; width: 7rem; margin: 0.5rem;">
              <input tabindex="0" id="artikel" type="radio" name="rekomendasi-radio" style="position: absolute; height: 100%; width: 100%; margin: 0; cursor: pointer; z-index: 2; opacity: 0;">
              <div tabindex="0" class="radio-tile2" style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; border: 2px solid #019973; border-radius: 8px; transition: all 300ms ease;">
                <ion-icon name="book-outline" style="color: #019973; font-size: 3rem;"></ion-icon>
                <label for="artikel" style="color: #019973; font-size: 0.8rem; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">Artikel</label>
              </div>
            </div>
          </div>
        </div>    
      `;

      const mpasiRadio = document.getElementById('mpasi');
      const artikelRadio = document.getElementById('artikel');

      mpasiRadio.addEventListener('change', async () => {
        if (mpasiRadio.checked) {
          const ageMonths = parseInt(document.getElementById('usia').value);
          await displayRekomendasi(ageMonths, 'mpasi');
        }
      });

      artikelRadio.addEventListener('change', async () => {
        if (artikelRadio.checked) {
          const ageMonths = parseInt(document.getElementById('usia').value);
          await displayRekomendasi(ageMonths, 'artikel');
        }
      });
    }

    async function displayRekomendasi(ageMonths, type) {
      const hasilRekomendasi = document.getElementById('hasilRekomendasi');
      hasilRekomendasi.innerHTML = '<div class="loader text-center">Loading...</div>';

      let filteredList = [];
      let kategori = '';

      if (ageMonths >= 6 && ageMonths <= 8) {
        kategori = '6-8 bulan';
      } else if (ageMonths >= 9 && ageMonths <= 12) {
        kategori = '9-12 bulan';
      } else if (ageMonths >= 12 && ageMonths <= 23) {
        kategori = '12-23 bulan';
      }

      if (type === 'mpasi') {
        const mpasiList = await MpasiSource.kategoriMpasi(kategori);
        filteredList = mpasiList.data;
      } else if (type === 'artikel') {
        const artikelList = await ArtikelSource.getAllArtikel();
        filteredList = artikelList.data;
      }

      const itemTemplates = filteredList.length > 0
        ? filteredList
          .map((item) => (type === 'mpasi'
            ? createMpasiTemplate(item)
            : createArtikelTemplate(item)))
          .join('')
        : renderNotFound();

      hasilRekomendasi.innerHTML = `
        <div class="container text-center mt-5">
          <div class="row">
            <div class="col-md-12">
              <h2 tabindex="0">${type === 'mpasi' ? '<span class="fw-bold">Rekomendasi <span class="text-warning">MPASI</span></span>' : '<span class="fw-bold">Artikel Terkait <span class="text-warning">Stunting</span></span>'}</h2>
              <div class="row">
                ${itemTemplates}
              </div>
            </div>
          </div>
        </div>
      `;
    }
  },
};

export default Kalkulator;
