// @flow
import { injectGlobal } from 'styled-components';

// $FlowIssue
const injectThemeHelperClasses = () => injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Lato:400,700|Roboto');


  // Source: https://github.com/tachyons-css/tachyons/blob/master/src/_widths.css
  .ttc { text-transform: capitalize; }
  .ttl { text-transform: lowercase; }
  .ttu { text-transform: uppercase; }
  .ttn { text-transform: none; }

  .v-base     { vertical-align: baseline; }
  .v-mid      { vertical-align: middle; }
  .v-top      { vertical-align: top; }
  .v-btm      { vertical-align: bottom; }

  .tl  { text-align: left; }
  .tr  { text-align: right; }
  .tc  { text-align: center; }
  .tj  { text-align: justify; }

  .static { position: static; }
  .relative  { position: relative; }
  .absolute  { position: absolute; }
  .fixed  { position: fixed; }

  .o-100 { opacity: 1;    }
  .o-90  { opacity: .9;   }
  .o-80  { opacity: .8;   }
  .o-70  { opacity: .7;   }
  .o-60  { opacity: .6;   }
  .o-50  { opacity: .5;   }
  .o-40  { opacity: .4;   }
  .o-30  { opacity: .3;   }
  .o-20  { opacity: .2;   }
  .o-10  { opacity: .1;   }
  .o-05  { opacity: .05;  }
  .o-025 { opacity: .025; }
  .o-0   { opacity: 0; }

  img { max-width: 100%; }

  .fl { float: left;  _display: inline; }
  .fr { float: right; _display: inline; }
  .fn { float: none; }

  .cf:before,
  .cf:after { content: " "; display: table; }
  .cf:after { clear: both; }
  .cf {       *zoom: 1; }

  .cl { clear: left; }
  .cr { clear: right; }
  .cb { clear: both; }
  .cn { clear: none; }

  .ba { border-style: solid; border-width: 1px; }
  .bt { border-top-style: solid; border-top-width: 1px; }
  .br { border-right-style: solid; border-right-width: 1px; }
  .bb { border-bottom-style: solid; border-bottom-width: 1px; }
  .bl { border-left-style: solid; border-left-width: 1px; }
  .bn { border-style: none; border-width: 0; }

  .cover { background-size: cover!important; }
  .contain { background-size: contain!important; }

  .bg-center {
    background-repeat: no-repeat;
    background-position: center center;
  }

  .bg-top {
    background-repeat: no-repeat;
    background-position: top center;
  }

  .bg-right {
    background-repeat: no-repeat;
    background-position: center right;
  }

  .bg-bottom {
    background-repeat: no-repeat;
    background-position: bottom center;
  }

  .bg-left {
    background-repeat: no-repeat;
    background-position: center left;
  }

  :root {
    --spacing-none: 0;
    --spacing-extra-small: .25rem;
    --spacing-small: .5rem;
    --spacing-medium: 1rem;
    --spacing-large: 2rem;
    --spacing-extra-large: 4rem;
    --spacing-extra-extra-large: 8rem;
    --spacing-extra-extra-extra-large: 16rem;
  }

  /* Media Queries */
  @custom-media --breakpoint-not-small screen and (min-width: 30em);
  @custom-media --breakpoint-medium screen and (min-width: 30em) and (max-width: 60em);
  @custom-media --breakpoint-large screen and (min-width: 60em);

  .center {
    margin-right: auto;
    margin-left: auto;
  }

  .mr-auto { margin-right: auto; }
  .ml-auto { margin-left:  auto; }


  /*
  FLEXBOX
  Media Query Extensions:
   -ns = not-small
   -m  = medium
   -l  = large
  */

  .flex { display: flex; }
  .inline-flex { display: inline-flex; }

  /* 1. Fix for Chrome 44 bug.
  * https://code.google.com/p/chromium/issues/detail?id=506893 */
  .flex-auto {
    flex: 1 1 auto;
    min-width: 0; /* 1 */
    min-height: 0; /* 1 */
  }

  .flex-none { flex: none; }

  .flex-column  { flex-direction: column; }
  .flex-row     { flex-direction: row; }
  .flex-wrap    { flex-wrap: wrap; }
  .flex-nowrap    { flex-wrap: nowrap; }
  .flex-wrap-reverse    { flex-wrap: wrap-reverse; }
  .flex-column-reverse  { flex-direction: column-reverse; }
  .flex-row-reverse     { flex-direction: row-reverse; }

  .items-start    { align-items: flex-start; }
  .items-end      { align-items: flex-end; }
  .items-center   { align-items: center; }
  .items-baseline { align-items: baseline; }
  .items-stretch  { align-items: stretch; }

  .self-start    { align-self: flex-start; }
  .self-end      { align-self: flex-end; }
  .self-center   { align-self: center; }
  .self-baseline { align-self: baseline; }
  .self-stretch  { align-self: stretch; }

  .justify-start   { justify-content: flex-start; }
  .justify-end     { justify-content: flex-end; }
  .justify-center  { justify-content: center; }
  .justify-between { justify-content: space-between; }
  .justify-around  { justify-content: space-around; }

  .content-start   { align-content: flex-start; }
  .content-end     { align-content: flex-end; }
  .content-center  { align-content: center; }
  .content-between { align-content: space-between; }
  .content-around  { align-content: space-around; }
  .content-stretch { align-content: stretch; }

  .order-0 { order: 0; }
  .order-1 { order: 1; }
  .order-2 { order: 2; }
  .order-3 { order: 3; }
  .order-4 { order: 4; }
  .order-5 { order: 5; }
  .order-6 { order: 6; }
  .order-7 { order: 7; }
  .order-8 { order: 8; }
  .order-last { order: 99999; }

  .flex-grow-0 { flex-grow: 0; }
  .flex-grow-1 { flex-grow: 1; }

  .flex-shrink-0 { flex-shrink: 0; }
  .flex-shrink-1 { flex-shrink: 1; }

  @media (--breakpoint-not-small) {
    .flex-ns { display: flex; }
    .inline-flex-ns { display: inline-flex; }
    .flex-auto-ns {
      flex: 1 1 auto;
      min-width: 0; /* 1 */
      min-height: 0; /* 1 */
    }
    .flex-none-ns { flex: none; }
    .flex-column-ns { flex-direction: column; }
    .flex-row-ns { flex-direction: row; }
    .flex-wrap-ns { flex-wrap: wrap; }
    .flex-nowrap-ns { flex-wrap: nowrap; }
    .flex-wrap-reverse-ns { flex-wrap: wrap-reverse; }
    .flex-column-reverse-ns { flex-direction: column-reverse; }
    .flex-row-reverse-ns { flex-direction: row-reverse; }
    .items-start-ns { align-items: flex-start; }
    .items-end-ns { align-items: flex-end; }
    .items-center-ns { align-items: center; }
    .items-baseline-ns { align-items: baseline; }
    .items-stretch-ns { align-items: stretch; }

    .self-start-ns { align-self: flex-start; }
    .self-end-ns { align-self: flex-end; }
    .self-center-ns { align-self: center; }
    .self-baseline-ns { align-self: baseline; }
    .self-stretch-ns { align-self: stretch; }

    .justify-start-ns { justify-content: flex-start; }
    .justify-end-ns { justify-content: flex-end; }
    .justify-center-ns { justify-content: center; }
    .justify-between-ns { justify-content: space-between; }
    .justify-around-ns { justify-content: space-around; }

    .content-start-ns { align-content: flex-start; }
    .content-end-ns { align-content: flex-end; }
    .content-center-ns { align-content: center; }
    .content-between-ns { align-content: space-between; }
    .content-around-ns { align-content: space-around; }
    .content-stretch-ns { align-content: stretch; }

    .order-0-ns { order: 0; }
    .order-1-ns { order: 1; }
    .order-2-ns { order: 2; }
    .order-3-ns { order: 3; }
    .order-4-ns { order: 4; }
    .order-5-ns { order: 5; }
    .order-6-ns { order: 6; }
    .order-7-ns { order: 7; }
    .order-8-ns { order: 8; }
    .order-last-ns { order: 99999; }

    .flex-grow-0-ns { flex-grow: 0; }
    .flex-grow-1-ns { flex-grow: 1; }

    .flex-shrink-0-ns { flex-shrink: 0; }
    .flex-shrink-1-ns { flex-shrink: 1; }
  }
  @media (--breakpoint-medium) {
    .flex-m { display: flex; }
    .inline-flex-m { display: inline-flex; }
    .flex-auto-m {
      flex: 1 1 auto;
      min-width: 0; /* 1 */
      min-height: 0; /* 1 */
    }
    .flex-none-m { flex: none; }
    .flex-column-m { flex-direction: column; }
    .flex-row-m     { flex-direction: row; }
    .flex-wrap-m { flex-wrap: wrap; }
    .flex-nowrap-m { flex-wrap: nowrap; }
    .flex-wrap-reverse-m { flex-wrap: wrap-reverse; }
    .flex-column-reverse-m { flex-direction: column-reverse; }
    .flex-row-reverse-m { flex-direction: row-reverse; }
    .items-start-m { align-items: flex-start; }
    .items-end-m { align-items: flex-end; }
    .items-center-m { align-items: center; }
    .items-baseline-m { align-items: baseline; }
    .items-stretch-m { align-items: stretch; }

    .self-start-m { align-self: flex-start; }
    .self-end-m { align-self: flex-end; }
    .self-center-m { align-self: center; }
    .self-baseline-m { align-self: baseline; }
    .self-stretch-m { align-self: stretch; }

    .justify-start-m { justify-content: flex-start; }
    .justify-end-m { justify-content: flex-end; }
    .justify-center-m { justify-content: center; }
    .justify-between-m { justify-content: space-between; }
    .justify-around-m { justify-content: space-around; }

    .content-start-m { align-content: flex-start; }
    .content-end-m { align-content: flex-end; }
    .content-center-m { align-content: center; }
    .content-between-m { align-content: space-between; }
    .content-around-m { align-content: space-around; }
    .content-stretch-m { align-content: stretch; }

    .order-0-m { order: 0; }
    .order-1-m { order: 1; }
    .order-2-m { order: 2; }
    .order-3-m { order: 3; }
    .order-4-m { order: 4; }
    .order-5-m { order: 5; }
    .order-6-m { order: 6; }
    .order-7-m { order: 7; }
    .order-8-m { order: 8; }
    .order-last-m { order: 99999; }

    .flex-grow-0-m { flex-grow: 0; }
    .flex-grow-1-m { flex-grow: 1; }

    .flex-shrink-0-m { flex-shrink: 0; }
    .flex-shrink-1-m { flex-shrink: 1; }
  }

  @media (--breakpoint-large) {
    .flex-l { display: flex; }
    .inline-flex-l { display: inline-flex; }
    .flex-auto-l {
      flex: 1 1 auto;
      min-width: 0; /* 1 */
      min-height: 0; /* 1 */
    }
    .flex-none-l { flex: none; }
    .flex-column-l { flex-direction: column; }
    .flex-row-l { flex-direction: row; }
    .flex-wrap-l { flex-wrap: wrap; }
    .flex-nowrap-l { flex-wrap: nowrap; }
    .flex-wrap-reverse-l { flex-wrap: wrap-reverse; }
    .flex-column-reverse-l { flex-direction: column-reverse; }
    .flex-row-reverse-l { flex-direction: row-reverse; }

    .items-start-l { align-items: flex-start; }
    .items-end-l { align-items: flex-end; }
    .items-center-l { align-items: center; }
    .items-baseline-l { align-items: baseline; }
    .items-stretch-l { align-items: stretch; }

    .self-start-l { align-self: flex-start; }
    .self-end-l { align-self: flex-end; }
    .self-center-l { align-self: center; }
    .self-baseline-l { align-self: baseline; }
    .self-stretch-l { align-self: stretch; }

    .justify-start-l { justify-content: flex-start; }
    .justify-end-l { justify-content: flex-end; }
    .justify-center-l { justify-content: center; }
    .justify-between-l { justify-content: space-between; }
    .justify-around-l { justify-content: space-around; }

    .content-start-l { align-content: flex-start; }
    .content-end-l { align-content: flex-end; }
    .content-center-l { align-content: center; }
    .content-between-l { align-content: space-between; }
    .content-around-l { align-content: space-around; }
    .content-stretch-l { align-content: stretch; }

    .order-0-l { order: 0; }
    .order-1-l { order: 1; }
    .order-2-l { order: 2; }
    .order-3-l { order: 3; }
    .order-4-l { order: 4; }
    .order-5-l { order: 5; }
    .order-6-l { order: 6; }
    .order-7-l { order: 7; }
    .order-8-l { order: 8; }
    .order-last-l { order: 99999; }

    .flex-grow-0-l { flex-grow: 0; }
    .flex-grow-1-l { flex-grow: 1; }

    .flex-shrink-0-l { flex-shrink: 0; }
    .flex-shrink-1-l { flex-shrink: 1; }
  }

  /* Width Scale */

  .w1 {    width: 1rem; }
  .w2 {    width: 2rem; }
  .w3 {    width: 4rem; }
  .w4 {    width: 8rem; }
  .w5 {    width: 16rem; }

  .w-10 {  width:  10%; }
  .w-20 {  width:  20%; }
  .w-25 {  width:  25%; }
  .w-30 {  width:  30%; }
  .w-33 {  width:  33%; }
  .w-34 {  width:  34%; }
  .w-40 {  width:  40%; }
  .w-50 {  width:  50%; }
  .w-60 {  width:  60%; }
  .w-70 {  width:  70%; }
  .w-75 {  width:  75%; }
  .w-80 {  width:  80%; }
  .w-90 {  width:  90%; }
  .w-100 { width: 100%; }

  .w-third { width: calc(100% / 3); }
  .w-two-thirds { width: calc(100% / 1.5); }
  .w-auto { width: auto; }

  @media (--breakpoint-not-small) {
    .w1-ns {  width: 1rem; }
    .w2-ns {  width: 2rem; }
    .w3-ns {  width: 4rem; }
    .w4-ns {  width: 8rem; }
    .w5-ns {  width: 16rem; }
    .w-10-ns { width:  10%; }
    .w-20-ns { width:  20%; }
    .w-25-ns { width:  25%; }
    .w-30-ns { width:  30%; }
    .w-33-ns { width:  33%; }
    .w-34-ns { width:  34%; }
    .w-40-ns { width:  40%; }
    .w-50-ns { width:  50%; }
    .w-60-ns { width:  60%; }
    .w-70-ns { width:  70%; }
    .w-75-ns { width:  75%; }
    .w-80-ns { width:  80%; }
    .w-90-ns { width:  90%; }
    .w-100-ns { width: 100%; }
    .w-third-ns { width: calc(100% / 3); }
    .w-two-thirds-ns { width: calc(100% / 1.5); }
    .w-auto-ns { width: auto; }
  }

  @media (--breakpoint-medium) {
    .w1-m {      width: 1rem; }
    .w2-m {      width: 2rem; }
    .w3-m {      width: 4rem; }
    .w4-m {      width: 8rem; }
    .w5-m {      width: 16rem; }
    .w-10-m { width:  10%; }
    .w-20-m { width:  20%; }
    .w-25-m { width:  25%; }
    .w-30-m { width:  30%; }
    .w-33-m { width:  33%; }
    .w-34-m { width:  34%; }
    .w-40-m { width:  40%; }
    .w-50-m { width:  50%; }
    .w-60-m { width:  60%; }
    .w-70-m { width:  70%; }
    .w-75-m { width:  75%; }
    .w-80-m { width:  80%; }
    .w-90-m { width:  90%; }
    .w-100-m { width: 100%; }
    .w-third-m { width: calc(100% / 3); }
    .w-two-thirds-m { width: calc(100% / 1.5); }
    .w-auto-m {    width: auto; }
  }

  @media (--breakpoint-large) {
    .w1-l {      width: 1rem; }
    .w2-l {      width: 2rem; }
    .w3-l {      width: 4rem; }
    .w4-l {      width: 8rem; }
    .w5-l {      width: 16rem; }
    .w-10-l {    width:  10%; }
    .w-20-l {    width:  20%; }
    .w-25-l {    width:  25%; }
    .w-30-l {    width:  30%; }
    .w-33-l {    width:  33%; }
    .w-34-l {    width:  34%; }
    .w-40-l {    width:  40%; }
    .w-50-l {    width:  50%; }
    .w-60-l {    width:  60%; }
    .w-70-l {    width:  70%; }
    .w-75-l {    width:  75%; }
    .w-80-l {    width:  80%; }
    .w-90-l {    width:  90%; }
    .w-100-l {   width: 100%; }
    .w-third-l { width: calc(100% / 3); }
    .w-two-thirds-l { width: calc(100% / 1.5); }
    .w-auto-l {    width: auto; }
  }

  /*
   HEIGHTS
   Docs: http://tachyons.io/docs/layout/heights/
   Base:
     h = height
     min-h = min-height
     min-vh = min-height vertical screen height
     vh = vertical screen height
   Modifiers
     1 = 1st step in height scale
     2 = 2nd step in height scale
     3 = 3rd step in height scale
     4 = 4th step in height scale
     5 = 5th step in height scale
     -25   = literal value 25%
     -50   = literal value 50%
     -75   = literal value 75%
     -100  = literal value 100%
     -auto = string value of auto
     -inherit = string value of inherit
   Media Query Extensions:
     -ns = not-small
     -m  = medium
     -l  = large
*/

/* Height Scale */

.h1 { height: 1rem; }
.h2 { height: 2rem; }
.h3 { height: 4rem; }
.h4 { height: 8rem; }
.h5 { height: 16rem; }

/* Height Percentages - Based off of height of parent */

.h-25 {  height:  25%; }
.h-50 {  height:  50%; }
.h-75 {  height:  75%; }
.h-100 { height: 100%; }

.min-h-100 { min-height: 100%; }

/* Screen Height Percentage */

.vh-25 {  height:  25vh; }
.vh-50 {  height:  50vh; }
.vh-75 {  height:  75vh; }
.vh-100 { height: 100vh; }

.min-vh-100 { min-height: 100vh; }


/* String Properties */

.h-auto {     height: auto; }
.h-inherit {  height: inherit; }

@media (--breakpoint-not-small) {
  .h1-ns {  height: 1rem; }
  .h2-ns {  height: 2rem; }
  .h3-ns {  height: 4rem; }
  .h4-ns {  height: 8rem; }
  .h5-ns {  height: 16rem; }
  .h-25-ns { height: 25%; }
  .h-50-ns { height: 50%; }
  .h-75-ns { height: 75%; }
  .h-100-ns { height: 100%; }
  .min-h-100-ns { min-height: 100%; }
  .vh-25-ns {  height:  25vh; }
  .vh-50-ns {  height:  50vh; }
  .vh-75-ns {  height:  75vh; }
  .vh-100-ns { height: 100vh; }
  .min-vh-100-ns { min-height: 100vh; }
  .h-auto-ns { height: auto; }
  .h-inherit-ns { height: inherit; }
}

@media (--breakpoint-medium) {
  .h1-m { height: 1rem; }
  .h2-m { height: 2rem; }
  .h3-m { height: 4rem; }
  .h4-m { height: 8rem; }
  .h5-m { height: 16rem; }
  .h-25-m { height: 25%; }
  .h-50-m { height: 50%; }
  .h-75-m { height: 75%; }
  .h-100-m { height: 100%; }
  .min-h-100-m { min-height: 100%; }
  .vh-25-m {  height:  25vh; }
  .vh-50-m {  height:  50vh; }
  .vh-75-m {  height:  75vh; }
  .vh-100-m { height: 100vh; }
  .min-vh-100-m { min-height: 100vh; }
  .h-auto-m { height: auto; }
  .h-inherit-m { height: inherit; }
}

@media (--breakpoint-large) {
  .h1-l { height: 1rem; }
  .h2-l { height: 2rem; }
  .h3-l { height: 4rem; }
  .h4-l { height: 8rem; }
  .h5-l { height: 16rem; }
  .h-25-l { height: 25%; }
  .h-50-l { height: 50%; }
  .h-75-l { height: 75%; }
  .h-100-l { height: 100%; }
  .min-h-100-l { min-height: 100%; }
  .vh-25-l {  height:  25vh; }
  .vh-50-l {  height:  50vh; }
  .vh-75-l {  height:  75vh; }
  .vh-100-l { height: 100vh; }
  .min-vh-100-l { min-height: 100vh; }
  .h-auto-l { height: auto; }
  .h-inherit-l { height: inherit; }
}

  /*
   SPACING
   Docs: http://tachyons.io/docs/layout/spacing/
   An eight step powers of two scale ranging from 0 to 16rem.
   Base:
     p = padding
     m = margin
   Modifiers:
     a = all
     h = horizontal
     v = vertical
     t = top
     r = right
     b = bottomå
     l = left
     0 = none
     1 = 1st step in spacing scale
     2 = 2nd step in spacing scale
     3 = 3rd step in spacing scale
     4 = 4th step in spacing scale
     5 = 5th step in spacing scale
     6 = 6th step in spacing scale
     7 = 7th step in spacing scale
   Media Query Extensions:
     -ns = not-small
     -m  = medium
     -l  = large
*/


.pa0 { padding: var(--spacing-none); }
.pa1 { padding: var(--spacing-extra-small); }
.pa2 { padding: var(--spacing-small); }
.pa3 { padding: var(--spacing-medium); }
.pa4 { padding: var(--spacing-large); }
.pa5 { padding: var(--spacing-extra-large); }
.pa6 { padding: var(--spacing-extra-extra-large); }
.pa7 { padding: var(--spacing-extra-extra-extra-large); }

.pl0 { padding-left: var(--spacing-none); }
.pl1 { padding-left: var(--spacing-extra-small); }
.pl2 { padding-left: var(--spacing-small); }
.pl3 { padding-left: var(--spacing-medium); }
.pl4 { padding-left: var(--spacing-large); }
.pl5 { padding-left: var(--spacing-extra-large); }
.pl6 { padding-left: var(--spacing-extra-extra-large); }
.pl7 { padding-left: var(--spacing-extra-extra-extra-large); }

.pr0 { padding-right: var(--spacing-none); }
.pr1 { padding-right: var(--spacing-extra-small); }
.pr2 { padding-right: var(--spacing-small); }
.pr3 { padding-right: var(--spacing-medium); }
.pr4 { padding-right: var(--spacing-large); }
.pr5 { padding-right: var(--spacing-extra-large); }
.pr6 { padding-right: var(--spacing-extra-extra-large); }
.pr7 { padding-right: var(--spacing-extra-extra-extra-large); }

.pb0 { padding-bottom: var(--spacing-none); }
.pb1 { padding-bottom: var(--spacing-extra-small); }
.pb2 { padding-bottom: var(--spacing-small); }
.pb3 { padding-bottom: var(--spacing-medium); }
.pb4 { padding-bottom: var(--spacing-large); }
.pb5 { padding-bottom: var(--spacing-extra-large); }
.pb6 { padding-bottom: var(--spacing-extra-extra-large); }
.pb7 { padding-bottom: var(--spacing-extra-extra-extra-large); }

.pt0 { padding-top: var(--spacing-none); }
.pt1 { padding-top: var(--spacing-extra-small); }
.pt2 { padding-top: var(--spacing-small); }
.pt3 { padding-top: var(--spacing-medium); }
.pt4 { padding-top: var(--spacing-large); }
.pt5 { padding-top: var(--spacing-extra-large); }
.pt6 { padding-top: var(--spacing-extra-extra-large); }
.pt7 { padding-top: var(--spacing-extra-extra-extra-large); }

.pv0 {
  padding-top: var(--spacing-none);
  padding-bottom: var(--spacing-none);
}
.pv1 {
  padding-top: var(--spacing-extra-small);
  padding-bottom: var(--spacing-extra-small);
}
.pv2 {
  padding-top: var(--spacing-small);
  padding-bottom: var(--spacing-small);
}
.pv3 {
  padding-top: var(--spacing-medium);
  padding-bottom: var(--spacing-medium);
}
.pv4 {
  padding-top: var(--spacing-large);
  padding-bottom: var(--spacing-large);
}
.pv5 {
  padding-top: var(--spacing-extra-large);
  padding-bottom: var(--spacing-extra-large);
}
.pv6 {
  padding-top: var(--spacing-extra-extra-large);
  padding-bottom: var(--spacing-extra-extra-large);
}

.pv7 {
  padding-top: var(--spacing-extra-extra-extra-large);
  padding-bottom: var(--spacing-extra-extra-extra-large);
}

.ph0 {
  padding-left: var(--spacing-none);
  padding-right: var(--spacing-none);
}

.ph1 {
  padding-left: var(--spacing-extra-small);
  padding-right: var(--spacing-extra-small);
}

.ph2 {
  padding-left: var(--spacing-small);
  padding-right: var(--spacing-small);
}

.ph3 {
  padding-left: var(--spacing-medium);
  padding-right: var(--spacing-medium);
}

.ph4 {
  padding-left: var(--spacing-large);
  padding-right: var(--spacing-large);
}

.ph5 {
  padding-left: var(--spacing-extra-large);
  padding-right: var(--spacing-extra-large);
}

.ph6 {
  padding-left: var(--spacing-extra-extra-large);
  padding-right: var(--spacing-extra-extra-large);
}

.ph7 {
  padding-left: var(--spacing-extra-extra-extra-large);
  padding-right: var(--spacing-extra-extra-extra-large);
}

.ma0  {  margin: var(--spacing-none); }
.ma1 {  margin: var(--spacing-extra-small); }
.ma2  {  margin: var(--spacing-small); }
.ma3  {  margin: var(--spacing-medium); }
.ma4  {  margin: var(--spacing-large); }
.ma5  {  margin: var(--spacing-extra-large); }
.ma6 {  margin: var(--spacing-extra-extra-large); }
.ma7 { margin: var(--spacing-extra-extra-extra-large); }

.ml0  {  margin-left: var(--spacing-none); }
.ml1 {  margin-left: var(--spacing-extra-small); }
.ml2  {  margin-left: var(--spacing-small); }
.ml3  {  margin-left: var(--spacing-medium); }
.ml4  {  margin-left: var(--spacing-large); }
.ml5  {  margin-left: var(--spacing-extra-large); }
.ml6 {  margin-left: var(--spacing-extra-extra-large); }
.ml7 { margin-left: var(--spacing-extra-extra-extra-large); }

.mr0  {  margin-right: var(--spacing-none); }
.mr1 {  margin-right: var(--spacing-extra-small); }
.mr2  {  margin-right: var(--spacing-small); }
.mr3  {  margin-right: var(--spacing-medium); }
.mr4  {  margin-right: var(--spacing-large); }
.mr5  {  margin-right: var(--spacing-extra-large); }
.mr6 {  margin-right: var(--spacing-extra-extra-large); }
.mr7 { margin-right: var(--spacing-extra-extra-extra-large); }

.mb0  {  margin-bottom: var(--spacing-none); }
.mb1 {  margin-bottom: var(--spacing-extra-small); }
.mb2  {  margin-bottom: var(--spacing-small); }
.mb3  {  margin-bottom: var(--spacing-medium); }
.mb4  {  margin-bottom: var(--spacing-large); }
.mb5  {  margin-bottom: var(--spacing-extra-large); }
.mb6 {  margin-bottom: var(--spacing-extra-extra-large); }
.mb7 { margin-bottom: var(--spacing-extra-extra-extra-large); }

.mt0  {  margin-top: var(--spacing-none); }
.mt1 {  margin-top: var(--spacing-extra-small); }
.mt2  {  margin-top: var(--spacing-small); }
.mt3  {  margin-top: var(--spacing-medium); }
.mt4  {  margin-top: var(--spacing-large); }
.mt5  {  margin-top: var(--spacing-extra-large); }
.mt6 {  margin-top: var(--spacing-extra-extra-large); }
.mt7 { margin-top: var(--spacing-extra-extra-extra-large); }

.mv0   {
  margin-top: var(--spacing-none);
  margin-bottom: var(--spacing-none);
}
.mv1  {
  margin-top: var(--spacing-extra-small);
  margin-bottom: var(--spacing-extra-small);
}
.mv2   {
  margin-top: var(--spacing-small);
  margin-bottom: var(--spacing-small);
}
.mv3   {
  margin-top: var(--spacing-medium);
  margin-bottom: var(--spacing-medium);
}
.mv4   {
  margin-top: var(--spacing-large);
  margin-bottom: var(--spacing-large);
}
.mv5   {
  margin-top: var(--spacing-extra-large);
  margin-bottom: var(--spacing-extra-large);
}
.mv6  {
  margin-top: var(--spacing-extra-extra-large);
  margin-bottom: var(--spacing-extra-extra-large);
}
.mv7  {
  margin-top: var(--spacing-extra-extra-extra-large);
  margin-bottom: var(--spacing-extra-extra-extra-large);
}

.mh0   {
  margin-left: var(--spacing-none);
  margin-right: var(--spacing-none);
}
.mh1   {
  margin-left: var(--spacing-extra-small);
  margin-right: var(--spacing-extra-small);
}
.mh2   {
  margin-left: var(--spacing-small);
  margin-right: var(--spacing-small);
}
.mh3   {
  margin-left: var(--spacing-medium);
  margin-right: var(--spacing-medium);
}
.mh4   {
  margin-left: var(--spacing-large);
  margin-right: var(--spacing-large);
}
.mh5   {
  margin-left: var(--spacing-extra-large);
  margin-right: var(--spacing-extra-large);
}
.mh6  {
  margin-left: var(--spacing-extra-extra-large);
  margin-right: var(--spacing-extra-extra-large);
}
.mh7  {
  margin-left: var(--spacing-extra-extra-extra-large);
  margin-right: var(--spacing-extra-extra-extra-large);
}

@media (--breakpoint-not-small) {
  .pa0-ns  {  padding: var(--spacing-none); }
  .pa1-ns {  padding: var(--spacing-extra-small); }
  .pa2-ns  {  padding: var(--spacing-small); }
  .pa3-ns  {  padding: var(--spacing-medium); }
  .pa4-ns  {  padding: var(--spacing-large); }
  .pa5-ns  {  padding: var(--spacing-extra-large); }
  .pa6-ns {  padding: var(--spacing-extra-extra-large); }
  .pa7-ns { padding: var(--spacing-extra-extra-extra-large); }

  .pl0-ns  {  padding-left: var(--spacing-none); }
  .pl1-ns {  padding-left: var(--spacing-extra-small); }
  .pl2-ns  {  padding-left: var(--spacing-small); }
  .pl3-ns  {  padding-left: var(--spacing-medium); }
  .pl4-ns  {  padding-left: var(--spacing-large); }
  .pl5-ns  {  padding-left: var(--spacing-extra-large); }
  .pl6-ns {  padding-left: var(--spacing-extra-extra-large); }
  .pl7-ns { padding-left: var(--spacing-extra-extra-extra-large); }

  .pr0-ns  {  padding-right: var(--spacing-none); }
  .pr1-ns {  padding-right: var(--spacing-extra-small); }
  .pr2-ns  {  padding-right: var(--spacing-small); }
  .pr3-ns  {  padding-right: var(--spacing-medium); }
  .pr4-ns  {  padding-right: var(--spacing-large); }
  .pr5-ns {   padding-right: var(--spacing-extra-large); }
  .pr6-ns {  padding-right: var(--spacing-extra-extra-large); }
  .pr7-ns { padding-right: var(--spacing-extra-extra-extra-large); }

  .pb0-ns  {  padding-bottom: var(--spacing-none); }
  .pb1-ns {  padding-bottom: var(--spacing-extra-small); }
  .pb2-ns  {  padding-bottom: var(--spacing-small); }
  .pb3-ns  {  padding-bottom: var(--spacing-medium); }
  .pb4-ns  {  padding-bottom: var(--spacing-large); }
  .pb5-ns  {  padding-bottom: var(--spacing-extra-large); }
  .pb6-ns {  padding-bottom: var(--spacing-extra-extra-large); }
  .pb7-ns { padding-bottom: var(--spacing-extra-extra-extra-large); }

  .pt0-ns  {  padding-top: var(--spacing-none); }
  .pt1-ns {  padding-top: var(--spacing-extra-small); }
  .pt2-ns  {  padding-top: var(--spacing-small); }
  .pt3-ns  {  padding-top: var(--spacing-medium); }
  .pt4-ns  {  padding-top: var(--spacing-large); }
  .pt5-ns  {  padding-top: var(--spacing-extra-large); }
  .pt6-ns {  padding-top: var(--spacing-extra-extra-large); }
  .pt7-ns { padding-top: var(--spacing-extra-extra-extra-large); }

  .pv0-ns {
    padding-top: var(--spacing-none);
    padding-bottom: var(--spacing-none);
  }
  .pv1-ns {
    padding-top: var(--spacing-extra-small);
    padding-bottom: var(--spacing-extra-small);
  }
  .pv2-ns {
    padding-top: var(--spacing-small);
    padding-bottom: var(--spacing-small);
  }
  .pv3-ns {
    padding-top: var(--spacing-medium);
    padding-bottom: var(--spacing-medium);
  }
  .pv4-ns {
    padding-top: var(--spacing-large);
    padding-bottom: var(--spacing-large);
  }
  .pv5-ns {
    padding-top: var(--spacing-extra-large);
    padding-bottom: var(--spacing-extra-large);
  }
  .pv6-ns {
    padding-top: var(--spacing-extra-extra-large);
    padding-bottom: var(--spacing-extra-extra-large);
  }
  .pv7-ns {
    padding-top: var(--spacing-extra-extra-extra-large);
    padding-bottom: var(--spacing-extra-extra-extra-large);
  }
  .ph0-ns {
    padding-left: var(--spacing-none);
    padding-right: var(--spacing-none);
  }
  .ph1-ns {
    padding-left: var(--spacing-extra-small);
    padding-right: var(--spacing-extra-small);
  }
  .ph2-ns {
    padding-left: var(--spacing-small);
    padding-right: var(--spacing-small);
  }
  .ph3-ns {
    padding-left: var(--spacing-medium);
    padding-right: var(--spacing-medium);
  }
  .ph4-ns {
    padding-left: var(--spacing-large);
    padding-right: var(--spacing-large);
  }
  .ph5-ns {
    padding-left: var(--spacing-extra-large);
    padding-right: var(--spacing-extra-large);
  }
  .ph6-ns {
    padding-left: var(--spacing-extra-extra-large);
    padding-right: var(--spacing-extra-extra-large);
  }
  .ph7-ns {
    padding-left: var(--spacing-extra-extra-extra-large);
    padding-right: var(--spacing-extra-extra-extra-large);
  }

  .ma0-ns  {  margin: var(--spacing-none); }
  .ma1-ns {  margin: var(--spacing-extra-small); }
  .ma2-ns  {  margin: var(--spacing-small); }
  .ma3-ns  {  margin: var(--spacing-medium); }
  .ma4-ns  {  margin: var(--spacing-large); }
  .ma5-ns  {  margin: var(--spacing-extra-large); }
  .ma6-ns {  margin: var(--spacing-extra-extra-large); }
  .ma7-ns { margin: var(--spacing-extra-extra-extra-large); }

  .ml0-ns  {  margin-left: var(--spacing-none); }
  .ml1-ns {  margin-left: var(--spacing-extra-small); }
  .ml2-ns  {  margin-left: var(--spacing-small); }
  .ml3-ns  {  margin-left: var(--spacing-medium); }
  .ml4-ns  {  margin-left: var(--spacing-large); }
  .ml5-ns  {  margin-left: var(--spacing-extra-large); }
  .ml6-ns {  margin-left: var(--spacing-extra-extra-large); }
  .ml7-ns { margin-left: var(--spacing-extra-extra-extra-large); }

  .mr0-ns  {  margin-right: var(--spacing-none); }
  .mr1-ns {  margin-right: var(--spacing-extra-small); }
  .mr2-ns  {  margin-right: var(--spacing-small); }
  .mr3-ns  {  margin-right: var(--spacing-medium); }
  .mr4-ns  {  margin-right: var(--spacing-large); }
  .mr5-ns  {  margin-right: var(--spacing-extra-large); }
  .mr6-ns {  margin-right: var(--spacing-extra-extra-large); }
  .mr7-ns { margin-right: var(--spacing-extra-extra-extra-large); }

  .mb0-ns  {  margin-bottom: var(--spacing-none); }
  .mb1-ns {  margin-bottom: var(--spacing-extra-small); }
  .mb2-ns  {  margin-bottom: var(--spacing-small); }
  .mb3-ns  {  margin-bottom: var(--spacing-medium); }
  .mb4-ns  {  margin-bottom: var(--spacing-large); }
  .mb5-ns  {  margin-bottom: var(--spacing-extra-large); }
  .mb6-ns {  margin-bottom: var(--spacing-extra-extra-large); }
  .mb7-ns { margin-bottom: var(--spacing-extra-extra-extra-large); }

  .mt0-ns  {  margin-top: var(--spacing-none); }
  .mt1-ns {  margin-top: var(--spacing-extra-small); }
  .mt2-ns  {  margin-top: var(--spacing-small); }
  .mt3-ns  {  margin-top: var(--spacing-medium); }
  .mt4-ns  {  margin-top: var(--spacing-large); }
  .mt5-ns  {  margin-top: var(--spacing-extra-large); }
  .mt6-ns {  margin-top: var(--spacing-extra-extra-large); }
  .mt7-ns { margin-top: var(--spacing-extra-extra-extra-large); }

  .mv0-ns   {
    margin-top: var(--spacing-none);
    margin-bottom: var(--spacing-none);
  }
  .mv1-ns  {
    margin-top: var(--spacing-extra-small);
    margin-bottom: var(--spacing-extra-small);
  }
  .mv2-ns   {
    margin-top: var(--spacing-small);
    margin-bottom: var(--spacing-small);
  }
  .mv3-ns   {
    margin-top: var(--spacing-medium);
    margin-bottom: var(--spacing-medium);
  }
  .mv4-ns   {
    margin-top: var(--spacing-large);
    margin-bottom: var(--spacing-large);
  }
  .mv5-ns   {
    margin-top: var(--spacing-extra-large);
    margin-bottom: var(--spacing-extra-large);
  }
  .mv6-ns  {
    margin-top: var(--spacing-extra-extra-large);
    margin-bottom: var(--spacing-extra-extra-large);
  }
  .mv7-ns  {
    margin-top: var(--spacing-extra-extra-extra-large);
    margin-bottom: var(--spacing-extra-extra-extra-large);
  }

  .mh0-ns   {
    margin-left: var(--spacing-none);
    margin-right: var(--spacing-none);
  }
  .mh1-ns   {
    margin-left: var(--spacing-extra-small);
    margin-right: var(--spacing-extra-small);
  }
  .mh2-ns   {
    margin-left: var(--spacing-small);
    margin-right: var(--spacing-small);
  }
  .mh3-ns   {
    margin-left: var(--spacing-medium);
    margin-right: var(--spacing-medium);
  }
  .mh4-ns   {
    margin-left: var(--spacing-large);
    margin-right: var(--spacing-large);
  }
  .mh5-ns   {
    margin-left: var(--spacing-extra-large);
    margin-right: var(--spacing-extra-large);
  }
  .mh6-ns  {
    margin-left: var(--spacing-extra-extra-large);
    margin-right: var(--spacing-extra-extra-large);
  }
  .mh7-ns  {
    margin-left: var(--spacing-extra-extra-extra-large);
    margin-right: var(--spacing-extra-extra-extra-large);
  }

}

@media (--breakpoint-medium) {
  .pa0-m  {  padding: var(--spacing-none); }
  .pa1-m {  padding: var(--spacing-extra-small); }
  .pa2-m  {  padding: var(--spacing-small); }
  .pa3-m  {  padding: var(--spacing-medium); }
  .pa4-m  {  padding: var(--spacing-large); }
  .pa5-m  {  padding: var(--spacing-extra-large); }
  .pa6-m {  padding: var(--spacing-extra-extra-large); }
  .pa7-m { padding: var(--spacing-extra-extra-extra-large); }

  .pl0-m  {  padding-left: var(--spacing-none); }
  .pl1-m {  padding-left: var(--spacing-extra-small); }
  .pl2-m  {  padding-left: var(--spacing-small); }
  .pl3-m  {  padding-left: var(--spacing-medium); }
  .pl4-m  {  padding-left: var(--spacing-large); }
  .pl5-m  {  padding-left: var(--spacing-extra-large); }
  .pl6-m {  padding-left: var(--spacing-extra-extra-large); }
  .pl7-m { padding-left: var(--spacing-extra-extra-extra-large); }

  .pr0-m  {  padding-right: var(--spacing-none); }
  .pr1-m {  padding-right: var(--spacing-extra-small); }
  .pr2-m  {  padding-right: var(--spacing-small); }
  .pr3-m  {  padding-right: var(--spacing-medium); }
  .pr4-m  {  padding-right: var(--spacing-large); }
  .pr5-m  {  padding-right: var(--spacing-extra-large); }
  .pr6-m {  padding-right: var(--spacing-extra-extra-large); }
  .pr7-m { padding-right: var(--spacing-extra-extra-extra-large); }

  .pb0-m  {  padding-bottom: var(--spacing-none); }
  .pb1-m {  padding-bottom: var(--spacing-extra-small); }
  .pb2-m  {  padding-bottom: var(--spacing-small); }
  .pb3-m  {  padding-bottom: var(--spacing-medium); }
  .pb4-m  {  padding-bottom: var(--spacing-large); }
  .pb5-m  {  padding-bottom: var(--spacing-extra-large); }
  .pb6-m {  padding-bottom: var(--spacing-extra-extra-large); }
  .pb7-m { padding-bottom: var(--spacing-extra-extra-extra-large); }

  .pt0-m  {  padding-top: var(--spacing-none); }
  .pt1-m {  padding-top: var(--spacing-extra-small); }
  .pt2-m  {  padding-top: var(--spacing-small); }
  .pt3-m  {  padding-top: var(--spacing-medium); }
  .pt4-m  {  padding-top: var(--spacing-large); }
  .pt5-m  {  padding-top: var(--spacing-extra-large); }
  .pt6-m {  padding-top: var(--spacing-extra-extra-large); }
  .pt7-m { padding-top: var(--spacing-extra-extra-extra-large); }

  .pv0-m {
    padding-top: var(--spacing-none);
    padding-bottom: var(--spacing-none);
  }
  .pv1-m {
    padding-top: var(--spacing-extra-small);
    padding-bottom: var(--spacing-extra-small);
  }
  .pv2-m {
    padding-top: var(--spacing-small);
    padding-bottom: var(--spacing-small);
  }
  .pv3-m {
    padding-top: var(--spacing-medium);
    padding-bottom: var(--spacing-medium);
  }
  .pv4-m {
    padding-top: var(--spacing-large);
    padding-bottom: var(--spacing-large);
  }
  .pv5-m {
    padding-top: var(--spacing-extra-large);
    padding-bottom: var(--spacing-extra-large);
  }
  .pv6-m {
    padding-top: var(--spacing-extra-extra-large);
    padding-bottom: var(--spacing-extra-extra-large);
  }
  .pv7-m {
    padding-top: var(--spacing-extra-extra-extra-large);
    padding-bottom: var(--spacing-extra-extra-extra-large);
  }

  .ph0-m {
    padding-left: var(--spacing-none);
    padding-right: var(--spacing-none);
  }
  .ph1-m {
    padding-left: var(--spacing-extra-small);
    padding-right: var(--spacing-extra-small);
  }
  .ph2-m {
    padding-left: var(--spacing-small);
    padding-right: var(--spacing-small);
  }
  .ph3-m {
    padding-left: var(--spacing-medium);
    padding-right: var(--spacing-medium);
  }
  .ph4-m {
    padding-left: var(--spacing-large);
    padding-right: var(--spacing-large);
  }
  .ph5-m {
    padding-left: var(--spacing-extra-large);
    padding-right: var(--spacing-extra-large);
  }
  .ph6-m {
    padding-left: var(--spacing-extra-extra-large);
    padding-right: var(--spacing-extra-extra-large);
  }
  .ph7-m {
    padding-left: var(--spacing-extra-extra-extra-large);
    padding-right: var(--spacing-extra-extra-extra-large);
  }

  .ma0-m  {  margin: var(--spacing-none); }
  .ma1-m {  margin: var(--spacing-extra-small); }
  .ma2-m  {  margin: var(--spacing-small); }
  .ma3-m  {  margin: var(--spacing-medium); }
  .ma4-m  {  margin: var(--spacing-large); }
  .ma5-m  {  margin: var(--spacing-extra-large); }
  .ma6-m {  margin: var(--spacing-extra-extra-large); }
  .ma7-m { margin: var(--spacing-extra-extra-extra-large); }

  .ml0-m  {  margin-left: var(--spacing-none); }
  .ml1-m {  margin-left: var(--spacing-extra-small); }
  .ml2-m  {  margin-left: var(--spacing-small); }
  .ml3-m  {  margin-left: var(--spacing-medium); }
  .ml4-m  {  margin-left: var(--spacing-large); }
  .ml5-m  {  margin-left: var(--spacing-extra-large); }
  .ml6-m {  margin-left: var(--spacing-extra-extra-large); }
  .ml7-m { margin-left: var(--spacing-extra-extra-extra-large); }

  .mr0-m  {  margin-right: var(--spacing-none); }
  .mr1-m {  margin-right: var(--spacing-extra-small); }
  .mr2-m  {  margin-right: var(--spacing-small); }
  .mr3-m  {  margin-right: var(--spacing-medium); }
  .mr4-m  {  margin-right: var(--spacing-large); }
  .mr5-m  {  margin-right: var(--spacing-extra-large); }
  .mr6-m {  margin-right: var(--spacing-extra-extra-large); }
  .mr7-m { margin-right: var(--spacing-extra-extra-extra-large); }

  .mb0-m  {  margin-bottom: var(--spacing-none); }
  .mb1-m {  margin-bottom: var(--spacing-extra-small); }
  .mb2-m  {  margin-bottom: var(--spacing-small); }
  .mb3-m  {  margin-bottom: var(--spacing-medium); }
  .mb4-m  {  margin-bottom: var(--spacing-large); }
  .mb5-m  {  margin-bottom: var(--spacing-extra-large); }
  .mb6-m {  margin-bottom: var(--spacing-extra-extra-large); }
  .mb7-m { margin-bottom: var(--spacing-extra-extra-extra-large); }

  .mt0-m  {  margin-top: var(--spacing-none); }
  .mt1-m {  margin-top: var(--spacing-extra-small); }
  .mt2-m  {  margin-top: var(--spacing-small); }
  .mt3-m  {  margin-top: var(--spacing-medium); }
  .mt4-m  {  margin-top: var(--spacing-large); }
  .mt5-m  {  margin-top: var(--spacing-extra-large); }
  .mt6-m {  margin-top: var(--spacing-extra-extra-large); }
  .mt7-m { margin-top: var(--spacing-extra-extra-extra-large); }

  .mv0-m {
    margin-top: var(--spacing-none);
    margin-bottom: var(--spacing-none);
  }
  .mv1-m {
    margin-top: var(--spacing-extra-small);
    margin-bottom: var(--spacing-extra-small);
  }
  .mv2-m {
    margin-top: var(--spacing-small);
    margin-bottom: var(--spacing-small);
  }
  .mv3-m {
    margin-top: var(--spacing-medium);
    margin-bottom: var(--spacing-medium);
  }
  .mv4-m {
    margin-top: var(--spacing-large);
    margin-bottom: var(--spacing-large);
  }
  .mv5-m {
    margin-top: var(--spacing-extra-large);
    margin-bottom: var(--spacing-extra-large);
  }
  .mv6-m {
    margin-top: var(--spacing-extra-extra-large);
    margin-bottom: var(--spacing-extra-extra-large);
  }
  .mv7-m {
    margin-top: var(--spacing-extra-extra-extra-large);
    margin-bottom: var(--spacing-extra-extra-extra-large);
  }

  .mh0-m {
    margin-left: var(--spacing-none);
    margin-right: var(--spacing-none);
  }
  .mh1-m {
    margin-left: var(--spacing-extra-small);
    margin-right: var(--spacing-extra-small);
  }
  .mh2-m {
    margin-left: var(--spacing-small);
    margin-right: var(--spacing-small);
  }
  .mh3-m {
    margin-left: var(--spacing-medium);
    margin-right: var(--spacing-medium);
  }
  .mh4-m {
    margin-left: var(--spacing-large);
    margin-right: var(--spacing-large);
  }
  .mh5-m {
    margin-left: var(--spacing-extra-large);
    margin-right: var(--spacing-extra-large);
  }
  .mh6-m {
    margin-left: var(--spacing-extra-extra-large);
    margin-right: var(--spacing-extra-extra-large);
  }
  .mh7-m {
    margin-left: var(--spacing-extra-extra-extra-large);
    margin-right: var(--spacing-extra-extra-extra-large);
  }

}

@media (--breakpoint-large) {
  .pa0-l  {  padding: var(--spacing-none); }
  .pa1-l {  padding: var(--spacing-extra-small); }
  .pa2-l  {  padding: var(--spacing-small); }
  .pa3-l  {  padding: var(--spacing-medium); }
  .pa4-l  {  padding: var(--spacing-large); }
  .pa5-l  {  padding: var(--spacing-extra-large); }
  .pa6-l {  padding: var(--spacing-extra-extra-large); }
  .pa7-l { padding: var(--spacing-extra-extra-extra-large); }

  .pl0-l  {  padding-left: var(--spacing-none); }
  .pl1-l {  padding-left: var(--spacing-extra-small); }
  .pl2-l  {  padding-left: var(--spacing-small); }
  .pl3-l  {  padding-left: var(--spacing-medium); }
  .pl4-l  {  padding-left: var(--spacing-large); }
  .pl5-l  {  padding-left: var(--spacing-extra-large); }
  .pl6-l {  padding-left: var(--spacing-extra-extra-large); }
  .pl7-l { padding-left: var(--spacing-extra-extra-extra-large); }

  .pr0-l  {  padding-right: var(--spacing-none); }
  .pr1-l {  padding-right: var(--spacing-extra-small); }
  .pr2-l  {  padding-right: var(--spacing-small); }
  .pr3-l  {  padding-right: var(--spacing-medium); }
  .pr4-l  {  padding-right: var(--spacing-large); }
  .pr5-l  {  padding-right: var(--spacing-extra-large); }
  .pr6-l {  padding-right: var(--spacing-extra-extra-large); }
  .pr7-l { padding-right: var(--spacing-extra-extra-extra-large); }

  .pb0-l  {  padding-bottom: var(--spacing-none); }
  .pb1-l {  padding-bottom: var(--spacing-extra-small); }
  .pb2-l  {  padding-bottom: var(--spacing-small); }
  .pb3-l  {  padding-bottom: var(--spacing-medium); }
  .pb4-l  {  padding-bottom: var(--spacing-large); }
  .pb5-l  {  padding-bottom: var(--spacing-extra-large); }
  .pb6-l {  padding-bottom: var(--spacing-extra-extra-large); }
  .pb7-l { padding-bottom: var(--spacing-extra-extra-extra-large); }

  .pt0-l  {  padding-top: var(--spacing-none); }
  .pt1-l {  padding-top: var(--spacing-extra-small); }
  .pt2-l  {  padding-top: var(--spacing-small); }
  .pt3-l  {  padding-top: var(--spacing-medium); }
  .pt4-l  {  padding-top: var(--spacing-large); }
  .pt5-l  {  padding-top: var(--spacing-extra-large); }
  .pt6-l {  padding-top: var(--spacing-extra-extra-large); }
  .pt7-l { padding-top: var(--spacing-extra-extra-extra-large); }

  .pv0-l {
    padding-top: var(--spacing-none);
    padding-bottom: var(--spacing-none);
  }
  .pv1-l {
    padding-top: var(--spacing-extra-small);
    padding-bottom: var(--spacing-extra-small);
  }
  .pv2-l {
    padding-top: var(--spacing-small);
    padding-bottom: var(--spacing-small);
  }
  .pv3-l {
    padding-top: var(--spacing-medium);
    padding-bottom: var(--spacing-medium);
  }
  .pv4-l {
    padding-top: var(--spacing-large);
    padding-bottom: var(--spacing-large);
  }
  .pv5-l {
    padding-top: var(--spacing-extra-large);
    padding-bottom: var(--spacing-extra-large);
  }
  .pv6-l {
    padding-top: var(--spacing-extra-extra-large);
    padding-bottom: var(--spacing-extra-extra-large);
  }
  .pv7-l {
    padding-top: var(--spacing-extra-extra-extra-large);
    padding-bottom: var(--spacing-extra-extra-extra-large);
  }

  .ph0-l {
    padding-left: var(--spacing-none);
    padding-right: var(--spacing-none);
  }
  .ph1-l {
    padding-left: var(--spacing-extra-small);
    padding-right: var(--spacing-extra-small);
  }
  .ph2-l {
    padding-left: var(--spacing-small);
    padding-right: var(--spacing-small);
  }
  .ph3-l {
    padding-left: var(--spacing-medium);
    padding-right: var(--spacing-medium);
  }
  .ph4-l {
    padding-left: var(--spacing-large);
    padding-right: var(--spacing-large);
  }
  .ph5-l {
    padding-left: var(--spacing-extra-large);
    padding-right: var(--spacing-extra-large);
  }
  .ph6-l {
    padding-left: var(--spacing-extra-extra-large);
    padding-right: var(--spacing-extra-extra-large);
  }
  .ph7-l {
    padding-left: var(--spacing-extra-extra-extra-large);
    padding-right: var(--spacing-extra-extra-extra-large);
  }

  .ma0-l  {  margin: var(--spacing-none); }
  .ma1-l {  margin: var(--spacing-extra-small); }
  .ma2-l  {  margin: var(--spacing-small); }
  .ma3-l  {  margin: var(--spacing-medium); }
  .ma4-l  {  margin: var(--spacing-large); }
  .ma5-l  {  margin: var(--spacing-extra-large); }
  .ma6-l {  margin: var(--spacing-extra-extra-large); }
  .ma7-l { margin: var(--spacing-extra-extra-extra-large); }

  .ml0-l  {  margin-left: var(--spacing-none); }
  .ml1-l {  margin-left: var(--spacing-extra-small); }
  .ml2-l  {  margin-left: var(--spacing-small); }
  .ml3-l  {  margin-left: var(--spacing-medium); }
  .ml4-l  {  margin-left: var(--spacing-large); }
  .ml5-l  {  margin-left: var(--spacing-extra-large); }
  .ml6-l {  margin-left: var(--spacing-extra-extra-large); }
  .ml7-l { margin-left: var(--spacing-extra-extra-extra-large); }

  .mr0-l  {  margin-right: var(--spacing-none); }
  .mr1-l {  margin-right: var(--spacing-extra-small); }
  .mr2-l  {  margin-right: var(--spacing-small); }
  .mr3-l  {  margin-right: var(--spacing-medium); }
  .mr4-l  {  margin-right: var(--spacing-large); }
  .mr5-l  {  margin-right: var(--spacing-extra-large); }
  .mr6-l {  margin-right: var(--spacing-extra-extra-large); }
  .mr7-l { margin-right: var(--spacing-extra-extra-extra-large); }

  .mb0-l  {  margin-bottom: var(--spacing-none); }
  .mb1-l {  margin-bottom: var(--spacing-extra-small); }
  .mb2-l  {  margin-bottom: var(--spacing-small); }
  .mb3-l  {  margin-bottom: var(--spacing-medium); }
  .mb4-l  {  margin-bottom: var(--spacing-large); }
  .mb5-l  {  margin-bottom: var(--spacing-extra-large); }
  .mb6-l {  margin-bottom: var(--spacing-extra-extra-large); }
  .mb7-l { margin-bottom: var(--spacing-extra-extra-extra-large); }

  .mt0-l  {  margin-top: var(--spacing-none); }
  .mt1-l {  margin-top: var(--spacing-extra-small); }
  .mt2-l  {  margin-top: var(--spacing-small); }
  .mt3-l  {  margin-top: var(--spacing-medium); }
  .mt4-l  {  margin-top: var(--spacing-large); }
  .mt5-l  {  margin-top: var(--spacing-extra-large); }
  .mt6-l {  margin-top: var(--spacing-extra-extra-large); }
  .mt7-l { margin-top: var(--spacing-extra-extra-extra-large); }

  .mv0-l {
    margin-top: var(--spacing-none);
    margin-bottom: var(--spacing-none);
  }
  .mv1-l {
    margin-top: var(--spacing-extra-small);
    margin-bottom: var(--spacing-extra-small);
  }
  .mv2-l {
    margin-top: var(--spacing-small);
    margin-bottom: var(--spacing-small);
  }
  .mv3-l {
    margin-top: var(--spacing-medium);
    margin-bottom: var(--spacing-medium);
  }
  .mv4-l {
    margin-top: var(--spacing-large);
    margin-bottom: var(--spacing-large);
  }
  .mv5-l {
    margin-top: var(--spacing-extra-large);
    margin-bottom: var(--spacing-extra-large);
  }
  .mv6-l {
    margin-top: var(--spacing-extra-extra-large);
    margin-bottom: var(--spacing-extra-extra-large);
  }
  .mv7-l {
    margin-top: var(--spacing-extra-extra-extra-large);
    margin-bottom: var(--spacing-extra-extra-extra-large);
  }

  .mh0-l {
    margin-left: var(--spacing-none);
    margin-right: var(--spacing-none);
  }
  .mh1-l {
    margin-left: var(--spacing-extra-small);
    margin-right: var(--spacing-extra-small);
  }
  .mh2-l {
    margin-left: var(--spacing-small);
    margin-right: var(--spacing-small);
  }
  .mh3-l {
    margin-left: var(--spacing-medium);
    margin-right: var(--spacing-medium);
  }
  .mh4-l {
    margin-left: var(--spacing-large);
    margin-right: var(--spacing-large);
  }
  .mh5-l {
    margin-left: var(--spacing-extra-large);
    margin-right: var(--spacing-extra-large);
  }
  .mh6-l {
    margin-left: var(--spacing-extra-extra-large);
    margin-right: var(--spacing-extra-extra-large);
  }
  .mh7-l {
    margin-left: var(--spacing-extra-extra-extra-large);
    margin-right: var(--spacing-extra-extra-extra-large);
  }
}


// Temp Globals. Dev Only. Remove before Prod

* {
  border: 0;
  box-sizing: inherit;
  -webkit-font-smoothing: antialiased;
  font-weight: inherit;
  margin: 0;
  outline: 0;
  padding: 0;
  text-decoration: none;
  text-rendering: optimizeLegibility;
  -webkit-appearance: none;
  -moz-appearance: none;
}

html {
  display: flex;
  height: 100%;
  width: 100%;
  max-height: 100%;
  max-width: 100%;
  box-sizing: border-box;
  font-size: 16px;
  line-height: 1.5;
  background-color: #f9fbfd;
  color: #16171a;
  padding: 0;
  margin: 0;
  -webkit-font-smoothing: antialiased;
  font-family: "proxima-soft", -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial,
    sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
}

body {
  display: flex;
  box-sizing: border-box;
  flex: auto;
  align-self: stretch;
  max-width: 100%;
  max-height: 100%;
  -webkit-overflow-scrolling: touch;
}

a {
  color: currentColor;
  text-decoration: none;
}

a:hover {
  cursor: pointer;
}

textarea {
  resize: none;
}

::-moz-selection {
  /* Code for Firefox */
  background: #A1D7FB;
  color: #ffffff;
}

::selection {
  background: #A1D7FB;
  color: #ffffff;
}

::-webkit-input-placeholder {
  /* WebKit, Blink, Edge */
  color: #a3afbf;
}
:-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  color: #a3afbf;
  opacity: 1;
}
::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  color: #a3afbf;
  opacity: 1;
}
:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: #a3afbf;
}

#root {
  display: flex;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-flex;
  display: -ms-flexbox;
  flex-direction: column;
  -ms-flex-direction: column;
  -moz-flex-direction: column;
  -webkit-flex-direction: column;
  height: 100%;
  width: 100%;
}

.fade-enter {
  opacity: 0;
  z-index: 1;
}

.fade-enter.fade-enter-active {
  opacity: 1;
  transition: opacity 250ms ease-in;
}
`;

export default injectThemeHelperClasses;
