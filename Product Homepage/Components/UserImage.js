import ProfilePic from "../Assets/profile-pic.jpg";

export default function UserImage() {
  const contStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "4rem",
  };

  const picStyle = {
    width: "3rem",
    height: "3rem",
    borderRadius: "50%",
    border: "2px solid white",
  };

  return (
    <div style={contStyle}>
      <div className="flex -space-x-1 overflow-hidden">
        <img
          style={picStyle}
          src={ProfilePic}
          alt="profilePic"
        />
      </div>
    </div>
  );
}
