import {
    PuzzlePieceIcon,
    FaceSmileIcon,
    ChartBarSquareIcon,
    CursorArrowRaysIcon,
    DevicePhoneMobileIcon,
    AdjustmentsHorizontalIcon,
    SunIcon,
  } from "@heroicons/react/24/solid";
  
  import benefitOneImg from "../../../public/img/logo.gif";
  import benefitTwoImg from "../../../public/games/signpocalypse-logo.png";
  
  const benefitOne = {
    title: "A new approach to learning.",
    desc: "Silentspeech combines cutting-edge technologies such as Google MediaPipe for sign detection, LSTM (long short-term memory) neural networks for interpretation and Unreal Engine to model and animate a virtual avatar that guides users through interactive excercises.",
    image: benefitOneImg,
    invert: true,
    bullets: [
      {
        title: "Real-time sign detection",
        desc: "Google MediaPipe turbo-charged with our own dataset.",
        icon: <FaceSmileIcon />,
      },
      {
        title: "Immediate performance feedback",
        desc: "Won't have to wait entire chapters to know what you're doing wrong or right.",
        icon: <CursorArrowRaysIcon />,
      },
      {
        title: "Progressive learning path",
        desc: "With the use of neural networks for interpretation, users can expect a tailored learning experience.",
        icon: <ChartBarSquareIcon />,
      },
      {
        title: "Gamification elements to motivate practice",
        desc: "A virtual animated avatar that guides users through interactive exercises.",
        icon: <PuzzlePieceIcon />,
      },
    ],
  };
  
  const benefitTwo = {
    title: "Signpocalypse",
    desc: "At the fair, users will be able to test Signpocalypse, an arcade-style shooter game that combines LIS (Italian Sign Language) recognition with classic arcade gameplay.",
    image: benefitTwoImg,
    invert: false,
    bullets: [
      {
        title: "Behold enemies.",
        desc: "Players defend against waves of colorful enemies.",
        icon: <DevicePhoneMobileIcon />,
      },
      {
        title: "Fingers or weapons?",
        desc: "Use of LIS signs instead of traditional controllers.",
        icon: <AdjustmentsHorizontalIcon />,
      },
      {
        title: "Experience",
        desc: "Unique gaming experience that promotes the spread of sign language.",
        icon: <SunIcon />,
      },
    ],
  };
  
  
  export {benefitOne, benefitTwo};