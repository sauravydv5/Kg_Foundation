import {
  FaHome,
  FaUser,
  FaPen,
  FaIdBadge,
  FaCheckCircle,
  FaFilePdf,
  FaGift,
  FaCertificate,
  FaReceipt,
} from "react-icons/fa";
import React from "react";

const UserSidebar = [
  { name: "Dashboard", icon: <FaHome />, path: "/foundation-dashboard" },
  { name: "Profile", icon: <FaUser />, path: "/foundation-dashboard/profile" },
  {
    name: "Update Profile",
    icon: <FaPen />,
    path: "/foundation-dashboard/update-profile",
  },
  {
    name: "Apply Membership",
    icon: <FaIdBadge />,
    path: "/foundation-dashboard/apply-membership",
  },
  {
    name: "Membership Status",
    icon: <FaCheckCircle />,
    path: "/foundation-dashboard/membership-status",
  },
  {
    name: "Appointment Letter",
    icon: <FaFilePdf />,
    path: "/foundation-dashboard/appointment-letter",
  },
  {
    name: "Id card",
    icon: <FaIdBadge />,
    path: "/foundation-dashboard/id-card",
  },
  {
    name: "Certificates",
    icon: <FaCertificate />,
    path: "/foundation-dashboard/certificates",
  },
  {
    name: "Donate Now",
    icon: <FaGift />,
    path: "/foundation-dashboard/donate",
  },
  {
    name: "Receipts",
    icon: <FaReceipt />,
    path: "/foundation-dashboard/receipts",
  },
];

export default UserSidebar;
