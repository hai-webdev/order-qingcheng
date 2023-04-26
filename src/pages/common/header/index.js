// 头部的js代码
import "./index.less";
import "wowjs/css/libs/animate.css";
import { WOW } from "wowjs";

const viewWidth = $(window).width();
if (viewWidth > 768) {
  new WOW().init({
    mobile: false,
  });
}
