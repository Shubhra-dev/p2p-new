function Dashboard({ active }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="elements">
        <path
          id="Rectangle 2229"
          d="M12 3.75C12 3.05109 12 2.70163 12.1142 2.42597C12.2664 2.05843 12.5584 1.76642 12.926 1.61418C13.2016 1.5 13.5511 1.5 14.25 1.5C14.9489 1.5 15.2984 1.5 15.574 1.61418C15.9416 1.76642 16.2336 2.05843 16.3858 2.42597C16.5 2.70163 16.5 3.05109 16.5 3.75V6.75C16.5 7.44891 16.5 7.79837 16.3858 8.07402C16.2336 8.44157 15.9416 8.73358 15.574 8.88582C15.2984 9 14.9489 9 14.25 9C13.5511 9 13.2016 9 12.926 8.88582C12.5584 8.73358 12.2664 8.44157 12.1142 8.07402C12 7.79837 12 7.44891 12 6.75V3.75Z"
          stroke={active ? "#FF6B00" : "#444955"}
          strokeWidth="1.5"
        />
        <path
          id="Rectangle 2230"
          d="M12 14.25C12 13.5511 12 13.2016 12.1142 12.926C12.2664 12.5584 12.5584 12.2664 12.926 12.1142C13.2016 12 13.5511 12 14.25 12C14.9489 12 15.2984 12 15.574 12.1142C15.9416 12.2664 16.2336 12.5584 16.3858 12.926C16.5 13.2016 16.5 13.5511 16.5 14.25C16.5 14.9489 16.5 15.2984 16.3858 15.574C16.2336 15.9416 15.9416 16.2336 15.574 16.3858C15.2984 16.5 14.9489 16.5 14.25 16.5C13.5511 16.5 13.2016 16.5 12.926 16.3858C12.5584 16.2336 12.2664 15.9416 12.1142 15.574C12 15.2984 12 14.9489 12 14.25Z"
          stroke={active ? "#FF6B00" : "#444955"}
          strokeWidth="1.5"
        />
        <path
          id="Rectangle 2231"
          d="M1.5 12C1.5 10.5858 1.5 9.87868 1.93934 9.43934C2.37868 9 3.08579 9 4.5 9H6C7.41421 9 8.12132 9 8.56066 9.43934C9 9.87868 9 10.5858 9 12V13.5C9 14.9142 9 15.6213 8.56066 16.0607C8.12132 16.5 7.41421 16.5 6 16.5H4.5C3.08579 16.5 2.37868 16.5 1.93934 16.0607C1.5 15.6213 1.5 14.9142 1.5 13.5V12Z"
          stroke={active ? "#FF6B00" : "#444955"}
          strokeWidth="1.5"
        />
        <path
          id="Rectangle 2232"
          d="M1.5 3.75C1.5 3.05109 1.5 2.70163 1.61418 2.42597C1.76642 2.05843 2.05843 1.76642 2.42597 1.61418C2.70163 1.5 3.05109 1.5 3.75 1.5H6.75C7.44891 1.5 7.79837 1.5 8.07402 1.61418C8.44157 1.76642 8.73358 2.05843 8.88582 2.42597C9 2.70163 9 3.05109 9 3.75C9 4.44891 9 4.79837 8.88582 5.07403C8.73358 5.44157 8.44157 5.73358 8.07402 5.88582C7.79837 6 7.44891 6 6.75 6H3.75C3.05109 6 2.70163 6 2.42597 5.88582C2.05843 5.73358 1.76642 5.44157 1.61418 5.07403C1.5 4.79837 1.5 4.44891 1.5 3.75Z"
          stroke={active ? "#FF6B00" : "#444955"}
          strokeWidth="1.5"
        />
      </g>
    </svg>
  );
}

export default Dashboard;