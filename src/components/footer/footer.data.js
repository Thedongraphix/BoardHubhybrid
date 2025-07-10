import Chat from "../../assets/widget/chat.svg";
import Community from "../../assets/widget/community.svg";
import Github from "../../assets/widget/github.svg";

const data = {
  widgets: [
    {
      id: 1,
      iconSrc: Chat.src,
      altText: "Secure Communication",
      title: "Secure Board Communication",
      description:
        "Military-grade encrypted communication channels for confidential board discussions and committee meetings.",
    },
    {
      id: 2,
      iconSrc: Community.src,
      altText: "Board Community",
      title: "Board Management Hub",
      description:
        "Centralized platform for board directors, executives, and company secretaries to collaborate effectively.",
    },
    {
      id: 3,
      iconSrc: Github.src,
      altText: "API Integration",
      title: "Enterprise Integration",
      description:
        "Seamless integration with existing enterprise systems and video conferencing platforms like Zoom and Webex.",
    },
  ],
  menuItem: [
    {
      path: "/",
      label: "Home",
    },
    {
      path: "/",
      label: "Features",
    },
    {
      path: "/",
      label: "Security",
    },
    {
      path: "/",
      label: "Support",
    },
    {
      path: "/",
      label: "Contact",
    },
  ],
};

export default data;