import React from "react";

const Hook = ({ fillColor }) => {
  return (
    <svg
      width="18"
      height="28"
      viewBox="0 0 18 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.6962 15.486L13.7468 14.3911L13.0633 12.7486C11.8481 13.3743 10.6329 13.6089 9.49367 13.6089C7.97468 13.6089 6.75949 13.0615 5.92405 11.9665C5.08861 10.9497 4.63291 9.5419 4.63291 7.74302C4.63291 5.94413 5.08861 4.4581 5.92405 3.28492C6.07595 3.12849 6.22785 2.89385 6.37975 2.73743C6.68354 2.50279 9.56962 2.03352 10.9367 3.91061C11.0127 3.98883 9.56962 3.51955 8.65823 4.30168C9.26582 4.61453 9.64557 4.92737 10.481 6.10056L14.0506 3.59777C13.519 2.42458 12.7595 1.56425 11.6962 0.938548C10.6329 0.312849 9.41772 0 8.05063 0C5.6962 0 3.79747 0.782123 2.27848 2.42458C0.759494 3.98883 0 6.10056 0 8.60335C0 11.0279 0.759494 13.0615 2.27848 14.6257C3.56962 15.9553 5.08861 16.6592 6.91139 16.8939C6.91139 16.8939 8.12658 17.1285 9.79747 16.4246C8.65823 18.8492 5.24051 18.5363 5.24051 18.5363L5.39241 25.1844L17.3165 20.4916L11.6962 15.486ZM12.3797 19.3184C12 19.5531 11.6962 19.0838 11.5443 18.8492C11.3924 18.6145 11.2405 18.067 11.6203 17.8324C12 17.5978 12.3038 18.067 12.4557 18.3017C12.6076 18.5363 12.7595 19.0838 12.3797 19.3184Z"
        fill={fillColor}
      />
      <path
        d="M6.91138 25.3408V28L18 23.4637L16.7088 21.9777L6.91138 25.3408Z"
        fill={fillColor}
      />
    </svg>
  );
};

const Close = ({ strokeColor }) => {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.02539 5.02518L10.0505 10.0503L15.0757 15.0755"
        stroke={strokeColor}
        stroke-width="3"
        stroke-linecap="round"
      />
      <path
        d="M15.0762 5.02518L10.051 10.0503L5.02588 15.0755"
        stroke={strokeColor}
        stroke-width="3"
        stroke-linecap="round"
      />
    </svg>
  );
};

const Edit = ({ strokeColor }) => {
  return (
    <svg
      width="33"
      height="33"
      viewBox="0 0 33 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.5849 7.35258L5.57227 22.3652L10.6117 27.4047L25.6244 12.392L20.5849 7.35258Z"
        stroke={strokeColor}
        stroke-width="3"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M24.9258 3.04047L20.6396 7.3266L25.6734 12.4101L29.9595 8.12402C31.355 6.72853 31.355 4.48579 29.9595 3.0903C28.564 1.64498 26.3213 1.64498 24.9258 3.04047Z"
        stroke={strokeColor}
        stroke-width="3"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10.6221 27.4116L5.58839 22.3779L2 31L10.6221 27.4116Z"
        stroke={strokeColor}
        stroke-width="3"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

const Plus = ({ strokeColor }) => {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.32227 12.8994H12.9999L23.6776 12.8994"
        stroke={strokeColor}
        stroke-width="3"
        stroke-linecap="round"
      />
      <path
        d="M13 2.22168L13 12.8994L13 23.577"
        stroke={strokeColor}
        stroke-width="3"
        stroke-linecap="round"
      />
    </svg>
  );
};

const Arrow = ({ strokeColor }) => {
  return (
    <svg
      width="25"
      height="29"
      viewBox="0 0 25 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M23 2L2 16.2023L15.8042 13.4786L19.3776 27L23 2Z"
        stroke={strokeColor}
        stroke-width="3"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

const Save = ({ strokeColor }) => {
  return (
    <svg
      width="27"
      height="29"
      viewBox="0 0 27 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 18.9445V27H24.5556V18.9445"
        stroke={strokeColor}
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7.08843 11.4116C6.50264 10.8258 5.5529 10.8258 4.96711 11.4116C4.38132 11.9973 4.38132 12.9471 4.96711 13.5329L7.08843 11.4116ZM13.2778 19.7222L12.2171 20.7829C12.8029 21.3687 13.7526 21.3687 14.3384 20.7829L13.2778 19.7222ZM21.5884 13.5329C22.1742 12.9471 22.1742 11.9973 21.5884 11.4116C21.0026 10.8258 20.0529 10.8258 19.4671 11.4116L21.5884 13.5329ZM14.7778 2C14.7778 1.17157 14.1062 0.5 13.2778 0.5C12.4493 0.5 11.7778 1.17157 11.7778 2H14.7778ZM14.3384 18.6616L7.08843 11.4116L4.96711 13.5329L12.2171 20.7829L14.3384 18.6616ZM19.4671 11.4116L12.2171 18.6616L14.3384 20.7829L21.5884 13.5329L19.4671 11.4116ZM14.7778 19.7222V2H11.7778V19.7222H14.7778Z"
        fill={strokeColor}
      />
    </svg>
  );
};

const Mail = ({ strokeColor }) => {
  return (
    <svg
      width="31"
      height="21"
      viewBox="0 0 31 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M29 2H2V19H29V2Z"
        stroke={strokeColor}
        stroke-width="3"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M29 2L15.475 11L2 2H29Z"
        stroke={strokeColor}
        stroke-width="3"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export { Hook, Close, Edit, Plus, Arrow, Save, Mail };
