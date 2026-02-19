function Header() {
  return (
    <div className="header-wrapper">

      {/* ALERT BAR */}
      <div className="alert-bar">
        <div className="alert-icon">⚠</div>
        <div>
          <div className="alert-title">Action Required</div>
          <div className="alert-text">
            Course registered for fewer than the minimum required credits in this semester
          </div>
        </div>
      </div>

      {/* PROFILE CARD */}
      <div className="profile-card">
        <img
          src="/amaar.jpeg"
          alt="profile"
          className="profile-avatar"
        />

        <div className="profile-info">
          <div className="profile-name">
            Amaar 
          </div>
          <div className="profile-sub">
            Bennett University
          </div>
          <div className="profile-sub">
            Semester - 8 | 2025-2026
          </div>
        </div>
      </div>

    </div>
  );
}

export default Header;
