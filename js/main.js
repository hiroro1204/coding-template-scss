// Component imports
import { initializeAccordion } from "./component/accordion.js";
import { initializeDropdownMenu } from "./component/dropdownmenu.js";
import { initializeHamburgerMenu } from "./component/hamburgermenu.js";
import { initializeModal } from "./component/modal.js";
import { initializeTabMenu } from "./component/tabmenu.js";

// Utility imports
import { switchViewport } from "./utility/switch-viewport.js";

// 全てのコンポーネントを初期化
initializeAccordion();
initializeDropdownMenu();
initializeHamburgerMenu();
initializeModal();
initializeTabMenu();

// 画面の幅に応じてビューポートの設定を切り替え
switchViewport();
window.addEventListener("resize", switchViewport);
